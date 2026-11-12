/** Plan cards — shared by the build (static HTML, SEO, no "loading" flash)
 * and the browser (refresh on load / language change / billing toggle).
 *
 * Static labels carry `data-i18n` so the i18n-static integration translates
 * the build output for /en, /ru, … the same way it does the rest of the page.
 */

import { uzType } from "./uz-type";

/** Every value through uzType (official Uzbek apostrophes). */
const uzTypeAll = (o: Record<string, string>): Record<string, string> =>
  Object.fromEntries(Object.entries(o).map(([k, v]) => [k, uzType(v)]));

export const PLANS_API = "https://api.octopos.uz";

export type Cycle = "monthly" | "yearly";

/** Uzbek base strings (the dictionary in i18n.ts only holds en/ru/ko/tr). */
export const UZ_PLAN_STRINGS: Record<string, string> = uzTypeAll({
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
  "plans.stockFrom": "Ombor nazorati — Growth tarifidan",
  "plans.plus": "{name} tarifidagi hammasi, va:",
  "plans.feature": "Imkoniyat",
  "plans.compare": "Tariflarni solishtirish",
  "plans.loading": "Yuklanmoqda…",
  "common.showAll": "Barchasini ko'rsatish",
});

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

/** Features this plan adds over the previous one (all of them for the first plan). */
const addedFeatures = (plan: any, prev?: any): any[] => {
  const had = new Set((prev?.features ?? []).map((f: any) => f.name));
  return (plan.features ?? []).filter((f: any) => !had.has(f.name));
};

const CHECK =
  '<svg class="mt-[3px] h-4 w-4 shrink-0 text-link" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const LOCK =
  '<svg class="mt-[3px] h-4 w-4 shrink-0 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

export function renderPlanCard(plan: any, _lang: string, cycle: Cycle, L: Label, prev?: any): string {
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
      ? t("plans.noCard", "p", "mt-2 font-geist text-[13px] text-muted")
      : cycle === "yearly"
        ? t("plans.saveNote", "p", "mt-2 font-geist text-[13px] text-muted")
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
      ? `<span class="rounded-full border border-ink/20 px-2.5 py-1 font-geist text-[12px] leading-none text-muted" data-i18n="${key}" data-n="${n}">${esc(L(key).replace("{n}", String(n)))}</span>`
      : "";
  const chips = [
    chip("plans.locations", quotaMax("location")),
    chip("plans.aiPhotos", quotaMax("imageGeneration")),
    // No order-count chip: the note under the cards states the order allowance for every plan.
    chip("plans.items", planWide("item")),
  ]
    .filter(Boolean)
    .join("");

  const li = (f: any) =>
    `<li class="flex items-start gap-2.5">${CHECK}<span class="font-geist text-[15px] leading-[1.45]"${f.description ? ` title="${esc(f.description)}"` : ""}>${esc(f.name)}</span></li>`;
  // What this tier adds: the 4–5 lines that actually differ.
  const added = addedFeatures(plan, prev).slice(0, 5).map(li).join("");
  const all = (plan.features ?? []).map(li).join("");
  const plus = prev
    ? `<p class="font-geist text-[13px] font-semibold text-muted" data-i18n="plans.plus" data-name="${esc(prev.name)}">${esc(L("plans.plus").replace("{name}", prev.name))}</p>`
    : "";
  // Honest gates: what the next tier unlocks.
  const gate =
    amount === 0
      ? "plans.fiscalFrom"
      : plan.slug === "starter" || plan.position === 2
        ? "plans.stockFrom"
        : "";
  const gateHtml = gate
    ? `<p class="mt-4 flex items-start gap-2.5 font-geist text-[14px] leading-[1.45] text-muted">${LOCK}${t(gate)}</p>`
    : "";

  return `<div class="relative flex w-[84vw] max-w-[340px] shrink-0 snap-start flex-col rounded-[24px] p-6 lg:w-auto lg:max-w-none lg:p-7 ${popular ? "plan-popular on-forest card" : "bg-card"}">
        ${popular ? t("plans.popular", "span", "absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-geist text-[12px] font-semibold text-accent-emphasis") : ""}
        <p class="font-geist text-[18px] font-semibold">${esc(plan.name)}</p>
        <p class="mt-1.5 font-geist text-[14px] leading-[1.5] text-muted lg:min-h-[63px]">${esc(plan.description ?? "")}</p>
        <div class="mt-5 flex items-baseline gap-1.5">
          <span class="display text-[52px] leading-none">${esc(display)}</span>
          ${t(suffixKey, "span", "font-geist text-[14px] text-muted")}
        </div>
        ${note}
        ${chips ? `<div class="mt-4 flex flex-wrap gap-1.5">${chips}</div>` : ""}
        <div class="mt-6 border-t border-ink/10 pt-5">
          ${plus}
          <ul class="${prev ? "mt-3 " : ""}flex flex-col gap-2.5">${added}</ul>
          ${gateHtml}
          ${all ? `<details class="mt-4"><summary class="cursor-pointer list-none rounded font-geist text-[14px] font-semibold text-link underline underline-offset-4 [&::-webkit-details-marker]:hidden">${t("common.showAll")}</summary><ul class="mt-4 flex flex-col gap-2.5">${all}</ul></details>` : ""}
        </div>
        <div class="mt-auto pt-7">
          <button type="button" data-plan-trigger="starter" data-plan-name="${esc(plan.name)}" class="${popular ? "btn-solid" : "btn-outline"} btn w-full">${t(ctaKey)}</button>
        </div>
      </div>`;
}

/** All plans as cards (each one knows the tier below it). */
export const renderPlanCards = (plans: any[], lang: string, cycle: Cycle, L: Label): string =>
  plans.map((p, i) => renderPlanCard(p, lang, cycle, L, plans[i - 1])).join("");

/** Comparison table: rows = every feature, columns = plans. */
export function renderPlanTable(plans: any[], L: Label): string {
  if (!plans.length) return "";
  const names: string[] = [];
  for (const p of plans) for (const f of p.features ?? []) if (!names.includes(f.name)) names.push(f.name);
  const has = (p: any, n: string) => (p.features ?? []).some((f: any) => f.name === n);
  const yes = `<svg class="mx-auto h-5 w-5 text-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="✓"><path d="M20 6 9 17l-5-5"/></svg>`;
  const no = `<span class="text-muted" aria-label="—">—</span>`;
  const head = plans
    .map((p) => `<th scope="col" class="px-3 py-4 text-center font-geist text-[15px] font-semibold">${esc(p.name)}</th>`)
    .join("");
  const rows = names
    .map(
      (n) =>
        `<tr class="border-t border-ink/10"><th scope="row" class="py-3.5 pr-4 text-left font-geist text-[15px] font-normal">${esc(n)}</th>${plans.map((p) => `<td class="px-3 py-3.5 text-center">${has(p, n) ? yes : no}</td>`).join("")}</tr>`,
    )
    .join("");
  return `<table class="w-full min-w-[560px] border-collapse"><thead><tr><th scope="col" class="py-4 pr-4 text-left font-geist text-[14px] font-semibold text-muted" data-i18n="plans.feature">${esc(L("plans.feature"))}</th>${head}</tr></thead><tbody>${rows}</tbody></table>`;
}

/** Build time: the plans, fetched once for the whole build (three tries, 15s
 * each, so prices are in the HTML search engines read). null if the API is down;
 * the browser then loads them. */
let buildPlansP: Promise<any[] | null> | undefined;
export function buildPlans(): Promise<any[] | null> {
  buildPlansP ??= (async () => {
    for (let i = 0; i < 3; i++) {
      try {
        return await fetchPlans("uz", AbortSignal.timeout(15000));
      } catch (err) {
        if (i === 2) console.warn("[plans] build-time fetch failed, falling back to client:", err);
      }
    }
    return null;
  })();
  return buildPlansP;
}
