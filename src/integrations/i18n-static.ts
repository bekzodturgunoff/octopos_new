import type { AstroIntegration } from "astro";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import {
  PREFIXED_LOCALES,
  STRINGS,
  type Lang,
} from "../data/i18n";

const SITE = "https://octopos.uz";

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
  locale === "uz" ? base : (STRINGS[key]?.[locale] ?? base);

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
      if (LOCALE_SEG.test(url) || ASSET.test(url)) return `${pre}${url}${post}`;
      if (HAS_EXT.test(url.split(/[?#]/)[0])) return `${pre}${url}${post}`;
      return `${pre}/${locale}${url}${post}`;
    },
  );
}

function metaFor(pathname: string): { title: string; desc: string } | null {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/") return { title: "meta.home.title", desc: "meta.home.desc" };
  if (p === "/apps") return { title: "meta.apps.title", desc: "meta.apps.desc" };
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

    const meta = metaFor(pathname);
    if (meta) {
      const title = lookup(meta.title, locale, "");
      const desc = lookup(meta.desc, locale, "");
      if (title) {
        out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
        out = out.replace(
          /(<meta property="og:title" content=")[^"]*(")/,
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
      }
    }
  }

  const canonical = `${SITE}${locale === "uz" ? pathname : `/${locale}${pathname}`}`;
  out = out.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${canonical}$2`,
  );
  if (!out.includes('hreflang="x-default"')) {
    out = out.replace(/<\/head>/, `${alternates(pathname)}</head>`);
  }
  return out;
}

/** Write `sitemap-0.xml` / `sitemap-index.xml` with hreflang alternates. */
async function writeSitemap(root: string, bases: string[]): Promise<void> {
  const urls = bases
    .map((pathname) => {
      const links = [
        `<xhtml:link rel="alternate" hreflang="uz" href="${SITE}${pathname}" />`,
        ...PREFIXED_LOCALES.map(
          (l) =>
            `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}/${l}${pathname}" />`,
        ),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${pathname}" />`,
      ].join("");
      return `<url><loc>${SITE}${pathname}</loc>${links}</url>`;
    })
    .join("");

  const urlset =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;
  const index =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${SITE}/sitemap-0.xml</loc></sitemap></sitemapindex>`;

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
          if (!m) return next();
          const locale = m[1] as Lang;
          const stripped = m[2] || "/";
          if (HAS_EXT.test(stripped)) return next();

          req.url = stripped + (query ? `?${query}` : "");

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

        const walk = async (pathname: string): Promise<void> => {
          const base = pathname === "/" ? "" : pathname;
          const src = join(root, base, "index.html");
          let html: string;
          try {
            html = await readFile(src, "utf8");
          } catch {
            return;
          }
          bases.push(pathname);
          await writeFile(src, translateHtml(html, "uz", pathname));

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
            )
          )
            continue;
          await walk(`/${rel}`);
        }

        await writeSitemap(root, bases.sort());
        logger.info(`i18n: generated ${count} localized pages`);
      },
    },
  };
}
