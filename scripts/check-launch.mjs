/**
 * Launch check for the redesign: every URL the previous octopos.uz had in its
 * sitemap (scripts/legacy-urls.txt) must still resolve on the new site — a
 * page (200) or a 301/308 that ends on a page — and the new sitemap's URLs
 * must all answer 200.
 *
 *   node scripts/check-launch.mjs                      # against https://octopos.uz
 *   node scripts/check-launch.mjs https://<preview>.vercel.app
 *
 * Exits with 1 if anything fails, so it can gate a deploy.
 */
import fs from "node:fs";

const BASE = (process.argv[2] ?? "https://octopos.uz").replace(/\/$/, "");
const legacy = fs
  .readFileSync(new URL("./legacy-urls.txt", import.meta.url), "utf8")
  .split("\n")
  .filter((l) => l.startsWith("http"))
  .map((u) => u.replace("https://octopos.uz", ""));

async function resolve(path) {
  let url = BASE + path;
  const hops = [];
  for (let i = 0; i < 5; i++) {
    const r = await fetch(url, { redirect: "manual", headers: { "user-agent": "octopos-launch-check" } });
    hops.push(r.status);
    if (r.status >= 300 && r.status < 400) {
      url = new URL(r.headers.get("location"), url).toString();
      continue;
    }
    return { status: r.status, hops, final: url.replace(BASE, "") };
  }
  return { status: 0, hops, final: url };
}

let bad = 0;
const check = async (label, paths) => {
  console.log(`\n${label} (${paths.length})`);
  for (const p of paths) {
    const r = await resolve(p);
    const ok = r.status === 200 && r.hops.slice(0, -1).every((h) => h === 301 || h === 308);
    if (!ok) bad++;
    console.log(`${ok ? "ok  " : "FAIL"} ${p}  ${r.hops.join("→")}${r.final !== p ? `  → ${r.final}` : ""}`);
  }
};

await check("Old site URLs", legacy);
const sm = await (await fetch(`${BASE}/sitemap-0.xml`)).text();
await check(
  "New sitemap URLs",
  [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname),
);

console.log(bad ? `\n${bad} problem(s).` : "\nAll good.");
process.exit(bad ? 1 : 0);
