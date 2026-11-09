/** Owner testimonials. The homepage section renders only when this list is
 * non-empty, so it is safe to ship with no entries.
 *
 * Clients' business names are intentionally optional: we don't publish who
 * our customers are (competitors would target them). Use a role + city
 * ("Restoran egasi, Toshkent") unless the owner explicitly agrees to be named.
 *
 * `photo` / `video` are public URLs (e.g. /testimonials/aziz.webp).
 * Quotes stay in the language the owner spoke; they are not translated.
 */
export interface Testimonial {
  quote: string;
  name: string;
  /** e.g. "Restoran egasi, Toshkent" */
  role: string;
  photo?: string;
  /** mp4/webm URL; shown with the photo as poster when present */
  video?: string;
}

export const testimonials: Testimonial[] = [];
