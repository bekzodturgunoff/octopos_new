# Website leads → Helm: backend task

The landing page (octopos.uz) has a **"call me back" form**. When an owner fills it in, the lead must reach the Octopos team in Telegram as a **Helm team alert with the "🙋 Take it" button**. Whoever presses it gets a **call task in Helm** with the person's name and phone.

The website side is **done and live-ready**. It sends to an endpoint that **does not exist yet**: `POST https://api.octopos.uz/leads.create` currently returns `404`, so the site shows a "call us / Telegram" fallback instead. Nothing needs to change on the website when you finish this; it starts working as soon as the endpoint returns `200`.

---

## Paste this to your AI

> Read `landingpage_v2/BACKEND-LEADS.md` and implement it exactly, in this order: section 2 (kdsx-api endpoint + storage), section 3 (alert to the Helm bot), section 4 (kdsx-helm contract + types + mock + settings label), section 5 (bot). Follow the existing conventions of each repo: OpenAPI files in `kdsx-api/api-specs` (same style as `paths/tenants/create.yml`), regenerate the ogen code, the `Error` body from `kdsx-api/api-specs/responses/Error.yml`, and for Helm the contract in `kdsx-helm/api-spec/operator.yml`, `src/api/types.ts`, `src/api/mock`, and `kdsx-helm/BACKEND.md` sections 5–6. Do not change field names, enum values or status codes from this document; the website already sends exactly this shape. Do not touch `landingpage_v2`. When done, run the acceptance checks in section 7 and report each result.

---

## 1. What to build (checklist)

| # | Repo | Work |
|---|------|------|
| 1 | `kdsx-api` | Public endpoint `POST /leads.create` (no login, no captcha), validation, spam drop, rate limits, CORS for octopos.uz |
| 2 | `kdsx-api` | Store every lead (table `leads`) |
| 3 | `kdsx-api` | After storing, send a `BotEvent` with event `leadReceived` to the Helm bot (`<HELM_BOT_URL>/events`) |
| 4 | `kdsx-helm` | Contract: add `leadReceived` to `AlertEvent`, add `lead` to `BotEvent`, a settings switch (default **on**), types + mock + settings label |
| 5 | `kdsx-helm/bot` | Render the lead message; "Take it" creates a **call** task with the contact details in the description |
| 6 | Config | `ALLOWED_ORIGINS` includes `https://octopos.uz,https://www.octopos.uz` |

Out of scope for now (later): a Leads page in Helm, lead statuses edited from Helm, SMS confirmation to the owner.

---

## 2. kdsx-api: `POST /leads.create`

### 2.1 Request (exactly what the website sends)

`Content-Type: application/json`, no `Authorization`, no cookies, no `X-Cap-Token`.

```json
{
  "name": "Aziz",
  "phone": "+998901234567",
  "businessType": "cafe",
  "city": "Toshkent",
  "lang": "uz",
  "page": "/ru/",
  "utm": { "source": "instagram", "medium": "cpc", "campaign": "nov" },
  "website": "",
  "elapsedMs": 8421
}
```

| Field | Type | Rule |
|---|---|---|
| `name` | string | **Required.** Trim. 1–80 characters. |
| `phone` | string | **Required.** Must match `^\+998\d{9}$` (the site always sends this format). |
| `businessType` | string or `null` | One of `restaurant`, `cafe`, `market`, `other`, or `null`. Unknown value → treat as `null`, do not reject. |
| `city` | string or `null` | Trim, max 60 characters, empty → `null`. |
| `lang` | string | One of `uz`, `en`, `ru`, `ko`, `tr`. Anything else → `uz`. Used for the error message language and stored. |
| `page` | string | Path the form was sent from, max 200 characters. Store as-is. |
| `utm` | object or `null` | `source`, `medium`, `campaign`: each string (max 100) or `null`. |
| `website` | string | **Honeypot.** Humans never fill it. |
| `elapsedMs` | integer | Milliseconds from first focus to submit. |

### 2.2 Spam and duplicates (server side; the site also filters, but never trust the client)

1. **Bots:** if `website` is not empty **or** `elapsedMs < 2500`, respond **`200 {"ok": true}`** and do **nothing** (do not store, do not alert). Returning 200 keeps bots from learning the rule.
2. **Rate limit:** max **5 per IP per hour** and **3 per phone per 24 h**. Over the limit → **`429`** with `code: "RATE_LIMITED"`.
3. **Duplicate phone:** if the same phone already sent a lead in the last **24 hours**, store the new row (`duplicate_of` = first lead's id), respond `200`, and **do not** send another Telegram alert.

### 2.3 Responses

| Status | Body | When |
|---|---|---|
| `200` | `{"ok": true, "id": "<uuid>"}` (`id` omitted for dropped spam) | Stored (or silently dropped). |
| `400` | `Error` body, `code: "VALIDATION"`, `message` in `lang` | Missing name, bad phone, too long fields. |
| `429` | `Error` body, `code: "RATE_LIMITED"` | Over the limits. |

The site treats **any non-2xx as failure** and shows the call/Telegram fallback, so never answer 2xx unless the lead is stored (or deliberately dropped as spam).

**Never fail the request because Telegram or the Helm bot is down.** Store first, answer 200, deliver the alert asynchronously (section 3).

### 2.4 CORS

The site calls the API cross-origin from `https://octopos.uz` (and `https://www.octopos.uz`). The existing CORS middleware (`kdsx-api/http/handler.go`) reads `ALLOWED_ORIGINS`; add both origins there. The request is `POST` with `content-type` and `accept` headers, without credentials, so the preflight must allow `POST, OPTIONS` and those two headers.

### 2.5 OpenAPI

Add `api-specs/paths/leads/create.yml` and register it in `api-specs/api.yml` as `/leads.create`, then regenerate (ogen). Same style as `paths/tenants/create.yml`, but **public** (`security: []`, no `CapToken`):

```yaml
post:
  operationId: createLead
  tags: [Leads]
  security: []
  requestBody:
    required: true
    content:
      application/json:
        schema:
          $ref: '../../schemas/Lead.yml#/LeadCreateData'
  responses:
    '200':
      description: Stored, or dropped as spam
      content:
        application/json:
          schema:
            type: object
            required: [ok]
            properties:
              ok: { type: boolean }
              id: { type: string, format: uuid }
    '400':
      description: Invalid input
      content:
        application/json:
          schema: { $ref: '../../responses/Error.yml#/Error' }
    '429':
      description: Rate limited
      content:
        application/json:
          schema: { $ref: '../../responses/Error.yml#/Error' }
```

`api-specs/schemas/Lead.yml`:

```yaml
LeadBusinessType:
  type: string
  enum: [restaurant, cafe, market, other]

LeadUTM:
  type: object
  properties:
    source: { type: string, maxLength: 100, nullable: true }
    medium: { type: string, maxLength: 100, nullable: true }
    campaign: { type: string, maxLength: 100, nullable: true }

LeadCreateData:
  type: object
  required: [name, phone]
  properties:
    name: { type: string, minLength: 1, maxLength: 80 }
    phone: { type: string, pattern: '^\+998\d{9}$' }
    businessType:
      nullable: true
      allOf: [{ $ref: '#/LeadBusinessType' }]
    city: { type: string, maxLength: 60, nullable: true }
    lang: { type: string }
    page: { type: string, maxLength: 200 }
    utm:
      nullable: true
      allOf: [{ $ref: '#/LeadUTM' }]
    website: { type: string }
    elapsedMs: { type: integer }
```

(`businessType` and `lang` are validated leniently in the handler, per 2.1. Do not let the generated validator reject unknown values with 400.)

### 2.6 Storage: table `leads`

Platform-level data (not tenant-scoped), next to Helm's operator data such as tasks.

| Column | Type | Note |
|---|---|---|
| `id` | uuid | primary key |
| `created_at` | timestamp (UTC) | |
| `name` | text | |
| `phone` | text | E.164, `+998…` |
| `business_type` | text, null | `restaurant`/`cafe`/`market`/`other` |
| `city` | text, null | |
| `lang` | text | |
| `page` | text | |
| `utm_source`, `utm_medium`, `utm_campaign` | text, null | |
| `ip` | text | for rate limiting |
| `user_agent` | text | |
| `duplicate_of` | uuid, null | see 2.2 |
| `alert_status` | text | `pending` → `sent` / `failed` / `skipped` (duplicate or alerts switched off) |
| `task_id` | uuid, null | reserved for later (when Helm links the task back) |

---

## 3. kdsx-api: send the alert to the Helm bot

Uses the existing bot events channel described in `kdsx-helm/BACKEND.md` section 6 (`HELM_BOT_URL`, `EVENTS_SECRET`).

After a lead is stored (and is not a duplicate):

1. Read `TeamNotificationSettings`. If `events.leadReceived` is `false` or `telegram.connected` is `false`, set `alert_status = skipped` and stop.
2. `POST <HELM_BOT_URL>/events` with `Authorization: Bearer <EVENTS_SECRET>`:

```json
{
  "event": "leadReceived",
  "to": { "team": true, "chatID": "<TeamNotificationSettings.telegram.chatID>" },
  "at": "2026-11-10T09:30:00Z",
  "lead": {
    "id": "6f1c…",
    "name": "Aziz",
    "phone": "+998901234567",
    "businessType": "cafe",
    "city": "Toshkent",
    "lang": "ru",
    "page": "/ru/",
    "utm": { "source": "instagram", "medium": "cpc", "campaign": "nov" }
  }
}
```

3. Bot answer `200` → `alert_status = sent`. `409 TELEGRAM_REFUSED` → `failed` and log it (bot removed from the group). Network error or 5xx → retry with backoff (e.g. 30 s, 2 min, 10 min), then `failed`.

**Temporary fallback, only if the Helm bot is not deployed yet:** send the same text directly with the Telegram Bot API (`sendMessage` with the `@octopos_helm_bot` token to the team chat ID), without the button. Remove this once the bot runs. Leads must reach someone from day one.

---

## 4. kdsx-helm: contract, types, mock, settings

Keep the spec, `src/api/types.ts` and `src/api/mock` in sync, as `BACKEND.md` requires.

1. **`api-spec/operator.yml`**
   - `AlertEvent` enum: add `leadReceived`.
   - New schema `WebLead`: `id`, `name`, `phone` (required), `businessType` (`restaurant|cafe|market|other`, nullable), `city` (nullable), `lang`, `page`, `utm` (`source`, `medium`, `campaign`, all nullable).
   - `BotEvent`: add optional property `lead: WebLead`.
   - `TeamNotificationSettings.events`: `leadReceived` defaults to **`true`**.
2. **`src/api/types.ts`**: same additions (`AlertEvent` union, `WebLead` type, `BotEvent.lead`).
3. **`src/api/mock`**: default `leadReceived: true` in team notification settings.
4. **`src/routes/_auth.administration.notifications.tsx`**: label for the new switch, next to the existing events: uz **"Saytdan so'rov"**, ru **"Заявка с сайта"**, en **"Website lead"**.

---

## 5. kdsx-helm/bot: message and "Take it"

All in `bot/src`.

1. **`events.ts`**
   - `TASK_KIND`: add `leadReceived: "call"` (this also makes `valid()` accept the event, since it reads the keys).
   - `render()`: add `case "leadReceived"`. No client exists yet, so no "Open in Helm" client link and no "branches on map" row. Return `html`, `links: []` and a `title`.
   - `taskTitle()`: for `leadReceived` return `"<call word>: <name>, <phone>"`, e.g. uz `Qo'ng'iroq: Aziz, +998901234567`.
   - Pass a **description** into the stored alert: all lead details, one per line (name, phone, business type, city, language, page, utm).
2. **`store.ts`**: add an optional `description` (and optional `priority`/`dueAt` overrides) to `Alert`.
3. **`commands.ts`** (`tk` handler): send `description` to `operator.tasks.create` (`CreateTaskData` already has `description`). For `leadReceived` use `priority: "high"` and **`dueAt` = now + 1 hour** instead of the default 24 h.
4. **`i18n.ts`**: `event.leadReceived` in `uz`, `ru`, `en`, plus business-type words. Message format (uz):

```
🆕 Saytdan so'rov: <b>Aziz</b>
📞 +998 90 123 45 67
Kafe · Toshkent
Sahifa: /ru/ · instagram / cpc / nov
```

Write the phone in international form so Telegram makes it tappable. Omit lines whose values are empty (no business type → no "Kafe ·"; no utm → no utm part).

---

## 6. Configuration

| Where | Variable | Value |
|---|---|---|
| kdsx-api | `ALLOWED_ORIGINS` | add `https://octopos.uz,https://www.octopos.uz` (comma-separated with the existing ones) |
| kdsx-api | `HELM_BOT_URL`, `EVENTS_SECRET` | already defined in `kdsx-helm/BACKEND.md` §6 |

No changes on the website.

---

## 7. Acceptance checks (report each)

```bash
API=https://api.octopos.uz

# 1. valid lead -> 200 {ok:true,id}, row in leads, message in the team group with "🙋 Take it"
curl -s -X POST $API/leads.create -H 'content-type: application/json' \
  -d '{"name":"Test","phone":"+998901234567","businessType":"cafe","city":"Toshkent","lang":"uz","page":"/","utm":null,"website":"","elapsedMs":8000}'

# 2. honeypot -> 200 {ok:true}, NOT stored, NO message
curl -s -X POST $API/leads.create -H 'content-type: application/json' \
  -d '{"name":"Bot","phone":"+998901234567","lang":"uz","page":"/","website":"spam","elapsedMs":8000}'

# 3. too fast -> 200, NOT stored, NO message
curl -s -X POST $API/leads.create -H 'content-type: application/json' \
  -d '{"name":"Bot","phone":"+998901234568","lang":"uz","page":"/","website":"","elapsedMs":300}'

# 4. bad phone -> 400 VALIDATION (message in Uzbek)
curl -s -X POST $API/leads.create -H 'content-type: application/json' \
  -d '{"name":"Test","phone":"12345","lang":"uz","page":"/","website":"","elapsedMs":8000}'

# 5. same phone again within 24 h -> 200, stored with duplicate_of, NO second message

# 6. 6th request from one IP within an hour -> 429 RATE_LIMITED

# 7. CORS preflight from the site -> 2xx with Access-Control-Allow-Origin: https://octopos.uz
curl -s -i -X OPTIONS $API/leads.create -H 'Origin: https://octopos.uz' \
  -H 'Access-Control-Request-Method: POST' -H 'Access-Control-Request-Headers: content-type'
```

8. In Telegram: press **🙋 Take it** on the test message → the message shows who took it, and that person has a **high-priority call task due in 1 hour** in Helm, with the lead's details in the description.
9. On https://octopos.uz: fill in the form at the bottom → the page shows **"Rahmat! So'rovingiz qabul qilindi"** (not the call/Telegram fallback), and the message arrives in the group.

---

## 8. Reference: the website side (do not change)

- Form: `landingpage_v2/src/components/LeadForm.astro` (the request contract is also in the comment at the top).
- The site already skips sending when the honeypot is filled or the form was filled in under 2.5 s, formats the phone as `+998XXXXXXXXX`, and shows a call/Telegram fallback on any non-2xx or network error.
- Analytics goals the site sends: `lead_submitted` (success), `lead_failed` (fallback shown), `lead_open` ("Demo so'rash" pressed).
