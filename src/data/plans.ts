/** Plan cards — shared by the build (static HTML, SEO, no "loading" flash)
 * and the browser (refresh on load / language change / billing toggle).
 *
 * Static labels carry `data-i18n` so the i18n-static integration translates
 * the build output for /en, /ru, … the same way it does the rest of the page.
 */

export const PLANS_API = "https://api.octopos.uz";

export type Cycle = "monthly" | "yearly";

/** Uzbek base strings (the dictionary in i18n.ts only holds en/ru/ko/tr). */
export const UZ_PLAN_STRINGS: Record<string, string> = {
  "plans.monthly": "Oylik",
  "plans.yearly": "Yillik",
  "plans.saveNote": "Yillik to'lov · 10% tejamkorlik",
  "plans.startFree": "Bepul boshlash",
  "plans.getStarted": "Tarifni tanlash",
  "plans.popular": "Eng ko'p tanlangan",
  "plans.noCard": "Bank kartasi talab qilinmaydi",
  "plans.perMonth": "/oy",
  "plans.perYear": "/yil",
  "plans.locations": "{n} ta filial",
  "plans.aiPhotos": "Oyiga {n} ta AI-surati",
  "plans.orders": "Oyiga {n} ta buyurtma",
  "plans.items": "{n} ta mahsulot",
  "plans.fiscalFrom": "Fiskal chek — Starter tarifidan",
  "plans.loading": "Yuklanmoqda…",
  "common.showAll": "Barchasini ko'rsatish",
};

export const esc = (s: unknown): string =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string,
  );

/** API language for a site language (the API has no Turkish). */
export const apiLangFor = (lang: string): string => (lang === "tr" ? "en" : lang);

export async function fetchPlans(lang: string, signal?: AbortSignal): Promise<any[]> {
  const apiLang = apiLangFor(lang);
  const r = await fetch(
    `${PLANS_API}/plans.get?lang=${apiLang}&currency=USD`,
    { headers: { "Accept-Language": apiLang }, signal },
  );
  if (!r.ok) throw new Error(`plans.get ${r.status}`);
  const j: any = await r.json();
  return Array.isArray(j.plans) ? j.plans : [];
}

type Label = (key: string) => string;

/** $0, $29, $313.20, $1,609.20 */
export const formatUsd = (n: number): string =>
  "$" +
  n.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

export function renderPlanCard(plan: any, lang: string, cycle: Cycle, L: Label): string {
  // Plans are priced in USD for every language; formatted here so the
  // Uzbek page doesn't get the API's "29 $" style next to "$29" elsewhere.
  const popular = plan.name === "Growth" || plan.position === 3;
  const cyclePlans = (plan.prices ?? []).filter((p: any) => p.billingCycle === cycle);
  const price =
    cyclePlans.find((p: any) => (p?.value?.currency || "").toUpperCase() === "USD") ??
    cyclePlans[0] ??
    plan.prices?.[0];
  const amount = Number(price?.value?.majorAmount ?? 0);
  const suffixKey = cycle === "monthly" ? "plans.perMonth" : "plans.perYear";
  const display = formatUsd(amount);

  const t = (key: string, tag = "span", cls = "") =>
    `<${tag}${cls ? ` class="${cls}"` : ""} data-i18n="${key}">${esc(L(key))}</${tag}>`;

  const note =
    amount === 0
      ? t("plans.noCard", "p", "mt-3 font-geist text-[13px] text-muted")
      : cycle === "yearly"
        ? t("plans.saveNote", "p", "mt-3 font-geist-mono text-[11px] tracking-[0.72px] text-muted")
        : "";
  const ctaKey = amount === 0 ? "plans.startFree" : "plans.getStarted";

  const quotas: any[] = Array.isArray(plan.quotas) ? plan.quotas : [];
  // Quota without channels = the plan-wide limit (Free only). The
  // per-channel online-order quota is the same on every tier, so it is
  // stated once under the grid instead of on each card.
  const planWide = (meter: string): number =>
    Number(quotas.find((q) => q?.meter === meter && !(q.channels ?? []).length)?.max) || 0;
  const quotaMax = (meter: string): number => {
    const matches = quotas.filter((q) => q?.meter === meter);
    if (!matches.length) return 0;
    return Math.max(...matches.map((q) => Number(q.max) || 0));
  };
  const chip = (key: string, n: number): string =>
    n > 0
      ? `<span class="rounded-full border border-hairline px-2.5 py-1 font-geist-mono text-[10.5px] leading-none tracking-[0.3px] text-muted" data-i18n="${key}" data-n="${n}">${esc(L(key).replace("{n}", String(n)))}</span>`
      : "";
  const chips = [
    chip("plans.locations", quotaMax("location")),
    chip("plans.aiPhotos", quotaMax("imageGeneration")),
    chip("plans.orders", planWide("order")),
    chip("plans.items", planWide("item")),
  ]
    .filter(Boolean)
    .join("");

  const feats = (plan.features ?? [])
    .map(
      (f: any) =>
        `<li class="flex items-start gap-2.5"><svg class="mt-[3px] h-3.5 w-3.5 shrink-0 text-link" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="font-geist text-[13.5px] leading-[20px] text-ink/90"${f.description ? ` title="${esc(f.description)}"` : ""}>${esc(f.name)}</span></li>`,
    )
    .join("");

  return `<div class="relative flex flex-col rounded-[20px] border border-hairline bg-card/50 p-6 transition-colors duration-300 hover:border-link/40 ${popular ? "ring-2 ring-accent" : ""}">
        ${popular ? t("plans.popular", "span", "absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-geist-mono text-[10px] tracking-[0.72px] text-accent-emphasis") : ""}
        <p class="font-geist text-[16px] font-medium text-ink">${esc(plan.name)}</p>
        <p class="mt-2 min-h-[36px] font-geist text-[13.5px] leading-[20px] text-muted">${esc(plan.description ?? "")}</p>
        <div class="mt-4 flex items-baseline gap-1.5">
          <span class="font-anton text-[40px] leading-none tracking-tight text-ink">${esc(display)}</span>
          ${t(suffixKey, "span", "font-geist-mono text-[11px] tracking-[0.72px] text-muted")}
        </div>
        ${note}
        ${chips ? `<div class="mt-4 flex flex-wrap gap-1.5">${chips}</div>` : ""}
        ${amount === 0 ? `<p class="mt-3 flex items-center gap-1.5 font-geist text-[13px] text-ink/80"><svg class="h-3.5 w-3.5 shrink-0 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>${t("plans.fiscalFrom")}</p>` : ""}
        <div class="mt-5 h-px w-full bg-hairline"></div>
        <ul class="mt-5 hidden flex-col gap-2.5 md:flex">${feats}</ul>
        ${feats ? `<details class="mt-5 md:hidden"><summary class="btn-outline h-[44px] w-full cursor-pointer list-none px-6 font-geist-mono text-[12px] tracking-[0.72px] [&::-webkit-details-marker]:hidden">${t("common.showAll")}</summary><ul class="mt-4 flex flex-col gap-2.5">${feats}</ul></details>` : ""}
        <div class="mt-auto pt-6">
          <button type="button" data-plan-trigger="starter" data-plan-name="${esc(plan.name)}" class="${popular ? "btn-solid" : "btn-outline"} h-[44px] w-full px-6 font-geist-mono text-[12px] font-medium tracking-[0.72px]">${t(ctaKey)}</button>
        </div>
      </div>`;
}
