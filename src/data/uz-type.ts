/**
 * Uzbek Latin apostrophes, the official way: oʻ / gʻ with U+02BB (ʻ) and the
 * tutuq belgisi (maʼlumot, sanʼat) with U+02BC (ʼ). Source text may use ' ’ ‘ `
 * or ʼ in either place; this normalises it. Used by the build on Uzbek pages'
 * visible text (i18n-static) and by text rendered in the browser (plans).
 */
// Also the HTML-escaped forms Astro writes into text (&#39; etc.).
const APOS = "(?:['’‘`ʼʻ]|&#39;|&#x27;|&apos;|&rsquo;|&lsquo;)";
const OG = new RegExp(`([oOgG])${APOS}(?=\\p{L})`, "gu");
// Any other letter (not o/g, which the rule above already handled).
const TUTUQ = new RegExp(`((?![oOgG])\\p{L})${APOS}(?=\\p{L})`, "gu");

export const uzType = (s: string): string => s.replace(OG, "$1ʻ").replace(TUTUQ, "$1ʼ");

/** Apply uzType to an HTML string's text nodes only (not tags, attributes,
 * <script>, <style>, <title> or <head>). */
export function uzTypeHtml(html: string): string {
  const bodyAt = html.search(/<body[\s>]/);
  const head = bodyAt > 0 ? html.slice(0, bodyAt) : "";
  const body = bodyAt > 0 ? html.slice(bodyAt) : html;
  // Whole <script>/<style>/<textarea>/<pre>/<code> blocks are kept as they are
  // (a "<" inside inline JS must not be read as a tag); text between tags elsewhere
  // gets uzType.
  return (
    head +
    body.replace(
      /(<(script|style|textarea|pre|code)\b[\s\S]*?<\/\2>)|(<[^>]*>)|([^<]+)/gi,
      (m, block, _n, tag, text) => (block || tag ? m : uzType(text)),
    )
  );
}
