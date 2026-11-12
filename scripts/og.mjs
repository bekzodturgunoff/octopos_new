/**
 * Share images (1200×630) for links on Telegram, Facebook, X and in search:
 *   public/og/home-<lang>.png  — the hero headline in each language + the POS mock
 *   public/og/app-<slug>.png   — the app's name + its main screen (no words, so one
 *                                image serves every language)
 *
 * Regenerate after changing the hero headline or app screens:
 *   pnpm build && pnpm preview --port 4329   (in another terminal)
 *   pnpm add -D playwright-core && npx playwright install chromium   (once)
 *   node scripts/og.mjs
 */
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const BASE = process.env.OG_BASE ?? "http://localhost:4329";
const OUT = path.join(ROOT, "public/og");
fs.mkdirSync(OUT, { recursive: true });

// Fonts inlined: the template page cannot load them cross-origin from the site.
const font = (f) => "data:font/woff2;base64," + fs.readFileSync(path.join(ROOT, "public/fonts", f)).toString("base64");
const logo = "data:image/webp;base64," + fs.readFileSync(path.join(ROOT, "src/assets/logo_light.webp")).toString("base64");

const HOME = {
  uz: ["Har bir soʻmingiz", "nazoratda.", "Restoran, kafe va doʻkonlar uchun kassa tizimi"],
  en: ["Every so‘m you make,", "under control.", "Point of sale for restaurants, cafés and shops"],
  ru: ["Каждый ваш сум", "под контролем.", "Кассовая система для ресторанов, кафе и магазинов"],
  ko: ["매출 한 푼까지", "한눈에 관리.", "레스토랑, 카페, 매장을 위한 POS 시스템"],
  tr: ["Her kuruşunuz", "kontrol altında.", "Restoran, kafe ve mağazalar için kasa sistemi"],
};
const APPS = {
  "pos-restaurant": ["RestaurantPOS", "/app_images/pos-restaurant/pos-main-view.webp"],
  "pos-market": ["MarketPOS", "/app_images/pos-market/pos-market.webp"],
  dash: ["Dash", "/app_images/dash/dash-main.webp"],
  kitchen: ["Kitchen", "/app_images/kitchen/kitchen-active-orders.webp"],
  ods: ["Display", "/app_images/ods/ods.webp"],
  guest: ["Order", null],
  website: ["Store", "/app_images/website/website-hero.webp"],
  dispatch: ["Dispatch", null],
};

const css = `
  @font-face { font-family: Inter; font-weight: 400 700; src: url(${font("Inter-var-latin.woff2")}) format("woff2"); unicode-range: U+0000-00FF, U+02BB-02BC, U+2000-206F; }
  @font-face { font-family: Inter; font-weight: 400 700; src: url(${font("Inter-var-latin-ext.woff2")}) format("woff2"); unicode-range: U+0100-02BA, U+02BD-02FF, U+1E00-1EFF; }
  @font-face { font-family: Inter; font-weight: 400 700; src: url(${font("Inter-var-cyrillic.woff2")}) format("woff2"); unicode-range: U+0400-045F; }
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: oklch(22.26% 0.027 133.88); color: #f8faf0;
         font-family: Inter, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif; position: relative; }
  .brand { position: absolute; left: 72px; top: 64px; display: flex; align-items: center; gap: 14px; font-size: 30px; font-weight: 600; letter-spacing: -0.01em; }
  .brand img { width: 52px; height: 52px; }
  h1 { position: absolute; left: 72px; font-weight: 700; letter-spacing: -0.035em; line-height: 1.04; }
  h1 em { font-style: normal; color: #9fe870; display: block; }
  .sub { position: absolute; left: 72px; bottom: 60px; max-width: 560px; font-size: 24px; line-height: 1.35; color: #c9d8bd; }
  .shot { position: absolute; border-radius: 18px; overflow: hidden; box-shadow: 0 0 0 1px rgba(248,250,240,.14); }
  .shot img { display: block; width: 100%; }
`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

// The hero POS mock, captured once from the running site.
const site = await b.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
await site.goto(BASE + "/", { waitUntil: "networkidle" });
const mock = "data:image/png;base64," + (await (await site.$(".pos-hero")).screenshot()).toString("base64");
await site.close();

for (const [lang, [t1, t2, sub]] of Object.entries(HOME)) {
  await pg.setContent(`<html lang="${lang}"><style>${css}</style><body>
    <div class="brand"><img src="${logo}">Octopos</div>
    <h1 style="top:160px;font-size:${lang === "ko" ? 76 : 72}px;max-width:560px">${t1}<em>${t2}</em></h1>
    <div class="shot" style="left:660px;top:120px;width:720px"><img src="${mock}"></div>
    <p class="sub">${sub}</p></body></html>`, { waitUntil: "networkidle" });
  await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(OUT, `home-${lang}.png`) });
}

for (const [slug, [name, shot]] of Object.entries(APPS)) {
  await pg.setContent(`<html><style>${css}</style><body>
    <div class="brand"><img src="${logo}">Octopos</div>
    <h1 style="top:${shot ? 170 : 230}px;font-size:${shot ? 84 : 120}px">${name}</h1>
    ${shot ? `<div class="shot" style="left:72px;top:290px;width:1056px"><img src="${BASE}${shot}"></div>` : `<p class="sub">octopos.uz</p>`}
    </body></html>`, { waitUntil: "networkidle" });
  await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(OUT, `app-${slug}.png`) });
}

await b.close();
console.log("og images written to public/og/");
