import type { AstroIntegration } from "astro";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import {
  PREFIXED_LOCALES,
  STRINGS,
  type Lang,
} from "../data/i18n";
import { LEGAL } from "../data/legal";
import { uzTypeHtml } from "../data/uz-type";
import { SOLUTIONS, SOL_LANGS, SOL_BASE, solPath, hubPath } from "../data/solutions";
import { GUIDES, GUIDE_LANGS, GUIDE_BASE, guidePath, guideHubPath } from "../data/guides";

/** Sections whose language versions have their own URLs (built per language). */
const OWN_URL_BASES: { lang: string; base: string }[] = [
  ...SOL_LANGS.map((l) => ({ lang: l, base: SOL_BASE[l] })),
  ...GUIDE_LANGS.map((l) => ({ lang: l, base: GUIDE_BASE[l] })),
];

const SITE = "https://octopos.uz";

/** Open Graph locale per site language. */
const OG_LOCALE: Record<Lang, string> = {
  uz: "uz_UZ",
  en: "en_US",
  ru: "ru_RU",
  ko: "ko_KR",
  tr: "tr_TR",
};

/* ------------------------------------------------------------------ *
 * HTML translation
 * ------------------------------------------------------------------ */

const escapeHtml = (s: string): string =>
  s.replace(
    /[&<>"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string,
  );

const lookup = (key: string, locale: Lang, base: string): string =>
  locale === "uz" ? base : ((STRINGS[key] ?? LEGAL[key])?.[locale] ?? base);

/** Substitute `{n}` / `{name}` using the element's data attributes. */
function placeholders(s: string, attrs: string): string {
  const n = attrs.match(/\bdata-n="([^"]*)"/);
  const name = attrs.match(/\bdata-name="([^"]*)"/);
  if (n) s = s.replace(/\{n\}/g, n[1]);
  if (name) s = s.replace(/\{name\}/g, name[1]);
  return s;
}

/** Translate one element's inner text: `<tag ... data-i18n="key" ...>text</>` */
function translateText(html: string, locale: Lang): string {
  return html.replace(
    /data-i18n="([^"]+)"([^>]*)>([^<]*)/g,
    (_m, key: string, attrs: string, inner: string) => {
      const lead = inner.match(/^\s*/)?.[0] ?? "";
      const trail = inner.match(/\s*$/)?.[0] ?? "";
      const core = inner.slice(lead.length, inner.length - trail.length);
      const next = placeholders(lookup(key, locale, core), attrs);
      return `data-i18n="${key}"${attrs}>${lead}${escapeHtml(next)}${trail}`;
    },
  );
}

/** Translate attributes declared as `data-i18n-attr="attr:key,attr2:key2"`. */
function translateAttrs(html: string, locale: Lang): string {
  return html.replace(
    /(<[a-zA-Z][\w:-]*\b)([^>]*\bdata-i18n-attr="([^"]+)"[^>]*)(>)/g,
    (_m, head: string, attrs: string, spec: string, gt: string) => {
      for (const pair of spec.split(",")) {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!attr || !key) continue;
        const found = attrs.match(new RegExp(`\\b${attr}="([^"]*)"`));
        const base = found ? found[1] : "";
        const val = escapeHtml(lookup(key, locale, base));
        attrs = found
          ? attrs.replace(`${attr}="${base}"`, `${attr}="${val}"`)
          : `${attrs} ${attr}="${val}"`;
      }
      return `${head}${attrs}${gt}`;
    },
  );
}

const ASSET = /^\/(app_images|fonts|_astro|@|node_modules)\b/;
const LOCALE_SEG = /^\/(en|ru|ko|tr)(?=\/|$)/;
const HAS_EXT = /\.(png|jpe?g|webp|gif|svg|ico|css|js|mjs|xml|txt|woff2?|json|webmanifest)$/i;

/** Point internal page links at the matching localized page. */
function prefixLinks(html: string, locale: Lang): string {
  return html.replace(
    /(\bhref=")([^"]+)(")/g,
    (_m, pre: string, url: string, post: string) => {
      if (!url.startsWith("/") || url.startsWith("//")) return `${pre}${url}${post}`;
      // The solutions and guides hubs have their own URL per language (else English).
      if (url === `${SOL_BASE.uz}/`) {
        const l = (SOL_LANGS as readonly string[]).includes(locale) ? (locale as (typeof SOL_LANGS)[number]) : "en";
        return `${pre}${hubPath(l)}${post}`;
      }
      if (url === `${GUIDE_BASE.uz}/`) {
        const l = (GUIDE_LANGS as readonly string[]).includes(locale) ? (locale as (typeof GUIDE_LANGS)[number]) : "en";
        return `${pre}${guideHubPath(l)}${post}`;
      }
      if (LOCALE_SEG.test(url) || ASSET.test(url)) return `${pre}${url}${post}`;
      if (HAS_EXT.test(url.split(/[?#]/)[0])) return `${pre}${url}${post}`;
      return `${pre}/${locale}${url}${post}`;
    },
  );
}

function metaFor(pathname: string): { title: string; desc: string; titleSuffix?: boolean } | null {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/") return { title: "meta.home.title", desc: "meta.home.desc" };
  if (p === "/apps") return { title: "meta.apps.title", desc: "meta.apps.desc" };
  if (p === "/404") return { title: "nf.title", desc: "nf.body" };
  if (p === "/pricing") return { title: "meta.pricing.title", desc: "meta.pricing.desc" };
  if (p === "/faq") return { title: "meta.faq.title", desc: "meta.faq.desc" };
  if (p === "/privacy" || p === "/terms") {
    const page = p.slice(1);
    return { title: `legal.${page}.title`, desc: `legal.${page}.intro`, titleSuffix: true };
  }
  // App pages: the search title (meta.app.*) and the app's translated summary.
  const app = p.match(/^\/apps\/([a-z-]+)$/);
  if (app) return { title: `meta.app.${app[1]}`, desc: `app.${app[1]}.desc` };
  return null;
}

function alternates(pathname: string): string {
  const out: string[] = [];
  out.push(
    `<link rel="alternate" hreflang="uz" href="${SITE}${pathname}" />`,
  );
  for (const l of PREFIXED_LOCALES) {
    out.push(
      `<link rel="alternate" hreflang="${l}" href="${SITE}/${l}${pathname}" />`,
    );
  }
  out.push(
    `<link rel="alternate" hreflang="x-default" href="${SITE}${pathname}" />`,
  );
  return out.join("");
}

/** Structured data follows the page language (FAQ text, inLanguage). */
function translateLd(html: string, locale: Lang): string {
  return html.replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g,
    (m, open: string, body: string, close: string) => {
      try {
        const node = JSON.parse(body);
        // Blocks with their own @id carry their page's own text (solution pages).
        if (node["@id"]) return m;
        if (node["@type"] === "FAQPage" && Array.isArray(node.mainEntity)) {
          node.mainEntity.forEach((q: any, i: number) => {
            q.name = lookup(`faq.${i + 1}q`, locale, q.name);
            if (q.acceptedAnswer) q.acceptedAnswer.text = lookup(`faq.${i + 1}a`, locale, q.acceptedAnswer.text);
          });
        } else if (node["@type"] === "BreadcrumbList" && Array.isArray(node.itemListElement)) {
          // Uzbek crumb names -> their UI string keys; URLs get the locale prefix.
          const HOME: Record<string, string> = { en: "Home", ru: "Главная", ko: "홈", tr: "Ana sayfa" };
          node.itemListElement.forEach((it: any) => {
            if (it.name === "Bosh sahifa") it.name = HOME[locale] ?? it.name;
            else if (it.name === "Ilovalar") it.name = lookup("nav.apps", locale, it.name);
            if (typeof it.item === "string") it.item = it.item.replace(`${SITE}/`, `${SITE}/${locale}/`);
          });
        } else if (node["@type"] === "WebSite") {
          node.inLanguage = locale;
        } else {
          return m;
        }
        return `${open}${JSON.stringify(node).replace(/<\//g, "<\\/")}${close}`;
      } catch {
        return m;
      }
    },
  );
}

export function translateHtml(
  html: string,
  locale: Lang,
  pathname: string,
): string {
  let out = html;

  out = out.replace(/(<html\b[^>]*\slang=")[^"]*(")/, `$1${locale}$2`);

  if (locale !== "uz") {
    out = translateText(out, locale);
    out = translateAttrs(out, locale);
    out = prefixLinks(out, locale);
    out = translateLd(out, locale);

    const meta = metaFor(pathname);
    if (meta) {
      const rawTitle = lookup(meta.title, locale, "");
      const title = rawTitle && meta.titleSuffix ? `${rawTitle} — Octopos` : rawTitle;
      // Long body text (legal intro) is cut to a snippet-sized description.
      const desc = lookup(meta.desc, locale, "").slice(0, 155);
      if (title) {
        out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
        out = out.replace(
          /(<meta property="og:title" content=")[^"]*(")/,
          `$1${escapeHtml(title)}$2`,
        );
        out = out.replace(
          /(<meta name="twitter:title" content=")[^"]*(")/,
          `$1${escapeHtml(title)}$2`,
        );
      }
      if (desc) {
        out = out.replace(
          /(<meta name="description" content=")[^"]*(")/,
          `$1${escapeHtml(desc)}$2`,
        );
        out = out.replace(
          /(<meta property="og:description" content=")[^"]*(")/,
          `$1${escapeHtml(desc)}$2`,
        );
        out = out.replace(
          /(<meta name="twitter:description" content=")[^"]*(")/,
          `$1${escapeHtml(desc)}$2`,
        );
      }
    }
  }

  const canonical = `${SITE}${locale === "uz" ? pathname : `/${locale}${pathname}`}`;
  out = out.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${canonical}$2`,
  );
  // Uzbek pages: official apostrophes (oʻ gʻ, tutuq ʼ) in all visible text.
  if (locale === "uz") out = uzTypeHtml(out);
  // The default share card has a version per language.
  if (locale !== "uz") out = out.replaceAll("/og/home-uz.png", `/og/home-${locale}.png`);
  // Share links point at the page in this language, not the Uzbek one.
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`);
  if (!out.includes('property="og:locale"')) {
    out = out.replace(
      /(<meta property="og:site_name"[^>]*>)/,
      `$1<meta property="og:locale" content="${OG_LOCALE[locale]}">`,
    );
  }
  if (!out.includes('hreflang="x-default"')) {
    out = out.replace(/<\/head>/, `${alternates(pathname)}</head>`);
  }
  return out;
}

/** Solution pages have their own slug per language (and no Turkish), so
 * their sitemap groups are listed explicitly: each group is one page in
 * uz/ru/en/ko. */
function solutionGroups(): [string, string][][] {
  const groups: [string, string][][] = SOLUTIONS.map((sol) => SOL_LANGS.map((l) => [l, solPath(sol, l)]));
  groups.push(SOL_LANGS.map((l) => [l, hubPath(l)]));
  for (const g of GUIDES) groups.push(GUIDE_LANGS.map((l) => [l, guidePath(g, l)]));
  groups.push(GUIDE_LANGS.map((l) => [l, guideHubPath(l)]));
  return groups;
}

/** Write `sitemap-0.xml` / `sitemap-index.xml` with hreflang alternates.
 * Every language version gets its own <url> entry (Google requires each
 * listed alternate to also be listed as a URL with the full set). */
async function writeSitemap(root: string, bases: string[]): Promise<void> {
  const urls = bases
    .flatMap((pathname) => {
      const links = [
        `<xhtml:link rel="alternate" hreflang="uz" href="${SITE}${pathname}" />`,
        ...PREFIXED_LOCALES.map(
          (l) =>
            `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}/${l}${pathname}" />`,
        ),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pathname}" />`,
      ].join("");
      const locs = [`${SITE}${pathname}`, ...PREFIXED_LOCALES.map((l) => `${SITE}/${l}${pathname}`)];
      return locs.map((loc) => `<url><loc>${loc}</loc>${links}</url>`);
    })
    .join("");

  const solUrls = solutionGroups()
    .map((pairs) => {
      const links =
        pairs.map(([l, p]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${p}" />`).join("") +
        `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pairs[0][1]}" />`;
      return pairs.map(([, p]) => `<url><loc>${SITE}${p}</loc>${links}</url>`).join("");
    })
    .join("");

  const urlset =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}${solUrls}</urlset>`;
  const index =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${SITE}/sitemap-0.xml</loc></sitemap>` +
    // Temporary list of old URLs that now redirect (public/sitemap-legacy.xml), while the move settles.
    (existsSync(join(root, "sitemap-legacy.xml")) ? `<sitemap><loc>${SITE}/sitemap-legacy.xml</loc></sitemap>` : "") +
    `</sitemapindex>`;

  await writeFile(join(root, "sitemap-0.xml"), urlset);
  await writeFile(join(root, "sitemap-index.xml"), index);
}

/* ------------------------------------------------------------------ *
 * Astro integration
 * ------------------------------------------------------------------ */

export default function i18nStatic(): AstroIntegration {
  return {
    name: "octopos-i18n-static",
    hooks: {
      /* Dev: serve `/en`, `/ru`, ... on the fly by rendering the default
       * page and translating the response. */
      "astro:server:setup": ({ server }) => {
        server.middlewares.use((req, res, next) => {
          const raw = req.url ?? "/";
          const [pathOnly, query] = raw.split("?");
          const m = pathOnly.match(/^\/(en|ru|ko|tr)(\/.*)?$/);
          // Uzbek pages (no prefix) also go through translateHtml in dev, so the
          // dev server shows the same official apostrophes as the build.
          if (!m && (HAS_EXT.test(pathOnly) || /^\/(@|__|_astro\/|node_modules\/|src\/)/.test(pathOnly))) return next();
          const locale = (m ? m[1] : "uz") as Lang;
          const stripped = m ? m[2] || "/" : pathOnly;
          if (HAS_EXT.test(stripped)) return next();

          if (m) req.url = stripped + (query ? `?${query}` : "");

          const chunks: Buffer[] = [];
          const origWrite = res.write.bind(res);
          const origEnd = res.end.bind(res);
          const origSetHeader = res.setHeader.bind(res);
          const origWriteHead = res.writeHead.bind(res);

          const dropLength = (h: unknown) => {
            if (h && typeof h === "object") {
              delete (h as Record<string, unknown>)["content-length"];
              delete (h as Record<string, unknown>)["Content-Length"];
            }
          };

          res.setHeader = ((
            name: string,
            value: string | number | readonly string[],
          ) => {
            if (String(name).toLowerCase() === "content-length") return res;
            return origSetHeader(name, value);
          }) as typeof res.setHeader;
          res.writeHead = ((...args: unknown[]) => {
            dropLength(args[1]);
            dropLength(args[2]);
            return (origWriteHead as (...a: unknown[]) => unknown)(...args);
          }) as typeof res.writeHead;

          res.write = ((chunk: unknown) => {
            if (chunk && typeof chunk !== "function")
              chunks.push(Buffer.from(chunk as Buffer));
            return true;
          }) as typeof res.write;
          res.end = ((chunk?: unknown) => {
            if (chunk && typeof chunk !== "function")
              chunks.push(Buffer.from(chunk as Buffer));
            res.write = origWrite;
            res.end = origEnd;
            res.setHeader = origSetHeader;
            res.writeHead = origWriteHead;
            const body = Buffer.concat(chunks);
            const ct = String(res.getHeader("content-type") ?? "");
            const enc = String(res.getHeader("content-encoding") ?? "");
            if (ct.includes("text/html") && !enc) {
              return origEnd(translateHtml(body.toString("utf8"), locale, stripped));
            }
            return origEnd(body);
          }) as typeof res.end;

          next();
        });
      },

      /* Build: write a static HTML file for every prefixed locale, and add
       * hreflang alternates to the default pages. */
      "astro:build:done": async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let count = 0;
        const bases: string[] = [];

        // The old site served Uzbek under /uz/…; those URLs stay real pages:
        // the same page again, whose canonical names the unprefixed URL.
        const UZ_MIRRORED = new Set(["/", "/faq/", "/pricing/", "/privacy/", "/terms/"]);
        const uzMirror = async (pathname: string, uzHtml: string): Promise<void> => {
          if (!UZ_MIRRORED.has(pathname) && !pathname.startsWith(`${SOL_BASE.uz}/`)) return;
          const dest = join(root, "uz", pathname === "/" ? "" : pathname);
          await mkdir(dest, { recursive: true });
          await writeFile(join(dest, "index.html"), uzHtml);
        };

        const walk = async (pathname: string): Promise<void> => {
          const base = pathname === "/" ? "" : pathname;
          const src = join(root, base, "index.html");
          let html: string;
          try {
            html = await readFile(src, "utf8");
          } catch {
            return;
          }
          // Uzbek solution pages: their other languages are separate pages
          // with their own slugs (see below), so no copies and no standard set.
          if (pathname.startsWith(`${SOL_BASE.uz}/`) || pathname.startsWith(`${GUIDE_BASE.uz}/`)) {
            const uzHtml = translateHtml(html, "uz", pathname);
            await writeFile(src, uzHtml);
            await uzMirror(pathname, uzHtml);
            return;
          }
          if (!/<meta name="robots" content="noindex/.test(html)) bases.push(pathname);
          const uzHtml = translateHtml(html, "uz", pathname);
          await writeFile(src, uzHtml);
          await uzMirror(pathname, uzHtml);

          for (const locale of PREFIXED_LOCALES) {
            const out = translateHtml(html, locale, pathname);
            const dest = join(root, locale, base);
            await mkdir(dest, { recursive: true });
            await writeFile(join(dest, "index.html"), out);
            count++;
          }
        };

        const entries = await readdir(root, { recursive: true }).catch(() => []);
        for (const f of entries) {
          if (!String(f).endsWith("index.html")) continue;
          const rel = String(f).slice(0, -"index.html".length);
          if (
            PREFIXED_LOCALES.some(
              (l) => rel === `${l}/` || rel.startsWith(`${l}/`),
            ) ||
            rel.startsWith("uz/")
          )
            continue;
          await walk(`/${rel}`);
        }

        // ru/en/ko solution pages are built in their language; only the shared
        // chrome (nav, footer: data-i18n) and links need translating.
        for (const f of entries) {
          const rel = `/${String(f)}`;
          if (!rel.endsWith("/index.html")) continue;
          const own = OWN_URL_BASES.find((o) => o.lang !== "uz" && rel.startsWith(`${o.base}/`));
          if (!own) continue;
          const locale = own.lang as Lang;
          const file = join(root, String(f));
          const html = await readFile(file, "utf8");
          const pathname = rel.slice(`/${locale}`.length, -"index.html".length);
          await writeFile(file, translateHtml(html, locale, pathname));
        }

        await writeSitemap(root, bases.sort());

        // The same 301s for Cloudflare Pages (it reads dist/_redirects, not
        // vercel.json), so old URLs keep working on either host.
        try {
          const cfg = JSON.parse(await readFile(join(process.cwd(), "vercel.json"), "utf8"));
          const lines = (cfg.redirects ?? []).map(
            (r: { source: string; destination: string; statusCode?: number }) =>
              `${r.source} ${r.destination} ${r.statusCode ?? 301}`,
          );
          await writeFile(join(root, "_redirects"), lines.join("\n") + "\n");
          logger.info(`_redirects: ${lines.length} rules (from vercel.json)`);
        } catch (err) {
          logger.warn(`_redirects not written: ${String(err)}`);
        }
        logger.info(`i18n: generated ${count} localized pages`);
      },
    },
  };
}
