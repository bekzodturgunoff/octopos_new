import { readdirSync } from "node:fs";
import { join } from "node:path";
import imageMeta from "./image-meta.json";

export interface MetaRow {
  label: string;
  value: string;
}

export interface App {
  /** Folder name inside public/app_images/ */
  slug: string;
  /** Two-digit display number, e.g. "01" */
  no: string;
  name: string;
  /** Short type badge (index card + meta) */
  tur: string;
  /** Index card meta line (devices) */
  devices: string;
  /** Uzbek one-liner shown under the app title */
  desc: string;
  meta: MetaRow[];
  /** Uzbek feature bullets for the home page (4–5 per app) */
  features: string[];
  /** Uzbek caption per screenshot, keyed by filename base (no extension) */
  frames?: Record<string, string>;
  /** Display order of images by filename fragment (first match wins).
   *  Matched with a "-" boundary, so "unactive" never matches "active". */
  order?: string[];
}

export const apps: App[] = [
  {
    slug: "pos-restaurant",
    no: "01",
    name: "OctoPos",
    tur: "Restoran POS",
    devices: "Planshet · Kassa",
    desc: "Real vaqt rejimidagi zal rejasi, soniyalarda buyurtma qabul qilish, hisobni bo'lib to'lash va qat'iy kassa nazorati. Planshet va monobloklar uchun.",
    order: [
      "main",
      "floor",
      "menu",
      "orders",
      "checkout",
      "stop",
      "notification",
      "delivery",
      "more-settings",
      "more-business",
      "more",
      "lock",
      "screen",
    ],
    features: [
      "Oflayn rejim: internet uzilsa ham savdo davom etadi",
      "Stol va zal rejasi — bo'limlarni sudrab joylashtirish imkoniyati",
      "Hisobni bo'lib to'lash va qisman to'lovlarni qabul qilish",
      "Menejer PIN-kodi: bekor qilish va qaytarimlarni nazorat qilish",
      "ESC/POS orqali chop etish va kassa tortmasini boshqarish",
    ],
    frames: {
      "pos-main-view": "Zal va menyu orqali buyurtmani tezkor qabul qilish",
      "pos-floor-plan": "Zal rejasi: bo'limlar va stollar holati",
      "pos-menu": "Taomlar menyusi: bo'limlar va narxlar",
      "pos-orders": "Buyurtmalar ro'yxati va ularning holati",
      "pos-orders-filter": "Buyurtmalarni holatiga ko'ra filtrlash",
      "pos-checkout": "To'lov: naqd, karta va QR",
      "pos-stop-list": "Sotuvni to'xtatish ro'yxati",
      "pos-notifications": "Buyurtma va kassa bildirishnomalari",
      "pos-notifications-requests": "Mijoz so'rovlari: chaqiruv va hisob",
      "pos-delivery-address": "Yetkazib berish manzili xaritada",
      "pos-delivery-job": "Kuryerga topshirilgan buyurtma",
      "pos-delivery-man-informations": "Kuryer ma'lumotlari va yetkazib berish holati",
      "pos-more-settings": "Umumiy sozlamalar bo'limi",
      "pos-more-settings-appearance": "Ko'rinish va mavzu sozlamalari",
      "pos-more-business-day": "Ish kuni: smenani ochish va kassani boshqarish",
      "pos-more-business-day-register":
        "Kassa hisoboti: savdo va qoldiqni tekshirish",
      "pos-more": "Qurilmalar va hisob bo'yicha ma'lumot",
      "pos-lock": "PIN-kod bilan bloklash ekrani",
      "Screen Shot 2026-10-08 at 7.14.52 PM": "Ilovaning qo'shimcha ekrani",
      "Screen Shot 2026-10-08 at 7.15.10 PM": "Ilovaning qo'shimcha ekrani",
    },
    meta: [
      { label: "Tur", value: "Restoran POS" },
      { label: "Qurilmalar", value: "Planshet · Monoblok · Kassa" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "Payme · Click" },
      { label: "Chiqim", value: "ESC/POS · Kassa tortmasi" },
      { label: "Yordam", value: "Telegram" },
    ],
  },
  {
    slug: "pos-market",
    no: "02",
    name: "OctoPos",
    tur: "Market POS",
    devices: "Planshet · Kassa",
    desc: "Bozor va do'konlar uchun OctoPos: buyurtmalar, cheklar va yetkazib berishni boshqarish. Restoran POS imkoniyatlariga qo'shimcha ravishda katta savdo hajmi uchun funksiyalar.",
    order: ["orders", "checkout", "delivery", "notifications", "settings"],
    features: [
      "Barkod skaneri va tarozi yordamida tezkor hisob-kitob",
      "Tovar qoldig'i va sotuvni to'xtatish ro'yxati",
      "Qaytarish, almashtirish va do'kon krediti",
      "Smenani ochish/yopish va kassa hisobotlari",
      "Yetkazib berish buyurtmalarini boshqarish",
    ],
    frames: {
      "pos-market": "Market rejimi: tezkor sotuv ekrani",
      "pos-market-orders": "Buyurtma va cheklar ro'yxati",
      "pos-market-checkout": "Kassada to'lov qabul qilish",
      "pos-market-delivery": "Yetkazib berish buyurtmalari",
      "pos-market-notifications": "Yangi buyurtma bildirishnomalari",
      "pos-market-settings": "Do'kon sozlamalari",
    },
    meta: [
      { label: "Tur", value: "Market POS" },
      { label: "Qurilmalar", value: "Planshet · Monoblok · Kassa" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "Payme · Click" },
      { label: "Chiqim", value: "Chek · Yetkazib Berish" },
      { label: "Yordam", value: "Telegram" },
    ],
  },
  {
    slug: "dash",
    no: "03",
    name: "OctoDash",
    tur: "Boshqaruv",
    devices: "Web · iOS · Android",
    desc: "Daromad, xarajatlar, marja, ombor qoldig'i va bir nechta filial bo'yicha real vaqt rejimidagi chuqur tahlil.",
    order: [
      "main",
      "orders",
      "catalog",
      "inventory",
      "reports",
      "administration",
      "account",
      "website",
    ],
    features: [
      "Real vaqt rejimidagi foyda va zarar (P&L) paneli",
      "Ombor, retseptlar va yo'qotishlarni nazorat qilish",
      "Xodim rollari, huquqlar va ish haqi hisoboti",
      "Real vaqt xaritasiga ega yetkazib berish dispetcher paneli",
      "Veb-sayt konstruktori va SEO sozlamalari",
    ],
    frames: {
      "dash-main": "Boshqaruv paneli: foyda, xarajat va trendlar",
      "dash-orders": "Buyurtmalar ro'yxati va dispetcher taxtasi",
      "dash-catalog": "Menyu katalogi: bo'limlar va taomlar",
      "dash-catalog-menu": "Menyu tahrirlash: narx va tarkib",
      "dash-inventory": "Ombor: qoldiq, qabul va yo'qotishlar",
      "dash-reports": "Hisobotlar: savdo, to'lov va foydalanish",
      "dash-administration": "Ma'muriyat: xodimlar, rollar va filiallar",
      "dash-account": "Hisob va obuna ma'lumotlari",
      "dash-website": "Veb-sayt quruvchining sahifalari",
      "dash-website-settings": "Veb-sayt sozlamalari va SEO",
    },
    meta: [
      { label: "Tur", value: "Tahlil Paneli" },
      { label: "Qurilmalar", value: "Mac · PC · Telefon" },
      { label: "Oflayn", value: "Cloud — Real Vaqt" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "Excel · API" },
      { label: "Chiqim", value: "Onlayn Hisobot" },
      { label: "Yordam", value: "Telegram" },
    ],
  },
  {
    slug: "kitchen",
    no: "04",
    name: "OctoKitchen",
    tur: "KDS Tizimi",
    devices: "TV · Planshet",
    desc: "Qog'ozsiz aqlli oshxona. Taomlarni stansiyalar (bar, gril, sovuq sex) bo'yicha saralash va tayyorlash vaqtini nazorat qilish.",
    order: [
      "active-orders",
      "orders-size",
      "filter",
      "unactive",
      "stop-list",
      "more-settings",
      "more",
    ],
    meta: [
      { label: "Tur", value: "Oshxona Ekrani" },
      { label: "Qurilmalar", value: "TV · Planshet · Monoblok" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "OctoPos · OctoOrder" },
      { label: "Chiqim", value: "Qog'oz Cheksiz" },
      { label: "Yordam", value: "Telegram" },
    ],
    features: [
      "Stansiyalar bo'yicha real vaqt rejimidagi buyurtmalar paneli",
      "Boshlash / pauza / yakunlash jarayoni",
      "Yangi buyurtmalar uchun ovozli bildirishnoma",
      "86-ro'yxat: tugagan mahsulotlarni sotuvdan chiqarish",
      "3–8 ustunli ko'rinish va sana filtrlari",
    ],
    frames: {
      "kitchen-active-orders": "Jonli buyurtmalar taxtasi (stansiya bo'yicha)",
      "kitchen-orders-size-adjuster": "Ustunlar sonini sozlash (3–8)",
      "kitchen-filter": "Sana va holat filtrlari",
      "kitchen-unactive-orders": "Yakunlangan buyurtmalar tarixi",
      "kitchen-stop-list": "Tugagan taomlar (86) ro'yxati",
      "kitchen-more-settings": "Oshxona sozlamalari: til va mavzu",
      "kitchen-more": "Qurilma va hisob bo'yicha ma'lumot",
    },
  },
  {
    slug: "ods",
    no: "05",
    name: "OctoDisplay",
    tur: "ODS Ekran",
    devices: "Smart TV · HDMI",
    desc: "Mehmonlar va kuryerlar uchun zal ekranida tayyor buyurtmalar raqamlarini katta shrift va ovozli chaqiriq bilan ko'rsatish.",
    order: ["settings"],
    meta: [
      { label: "Tur", value: "Berish ekrani" },
      { label: "Qurilmalar", value: "Smart TV · HDMI · Kiosk" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "OctoPos · Oshxona" },
      { label: "Chiqim", value: "Full HD · 4K" },
      { label: "Yordam", value: "Telegram" },
    ],
    features: [
      "Tayyor buyurtmalar raqamlarini katta shrift bilan ko'rsatish",
      "Buyurtma tayyor bo'lganda ovozli signal va yashil chegara",
      "Preparing / Ready ikki ustunli ekran",
      "Faoliyat bo'lmaganda media-slaydshow",
      "Avtomatik to'liq ekran kiosk rejimi",
    ],
    frames: {
      ods: "Tayyor buyurtmalar ekrani (TV uchun)",
      "ods-settings": "Ekran sozlamalari: shrift, ovoz, slayd",
    },
  },
  {
    slug: "guest",
    no: "06",
    name: "OctoOrder",
    tur: "QR Menyu",
    devices: "Telefon · QR",
    desc: "Ilova o'rnatmasdan, stol ustidagi QR-kod orqali taomlarni fotosuratlari bilan ko'rish, savatga qo'shish va darhol to'lash.",
    meta: [
      { label: "Tur", value: "QR Stol Menyusi" },
      { label: "Qurilmalar", value: "Telefon · Planshet" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "OctoPos · Payme" },
      { label: "Chiqim", value: "Stol QR Kodlari" },
      { label: "Yordam", value: "Telegram" },
    ],
    features: [
      "QR-kod — ilovasiz, to'g'ridan-to'g'ri brauzerda",
      "Ofitsiantni chaqirish, hisob so'rash va fikr bildirish",
      "Buyurtma holatini real vaqtda kuzatish (qabul qilindi → tayyor)",
      "Ishonch rejimi: xodim buyurtmani tasdiqlaydi",
      "Xuddi shu stolga qo'shimcha taom buyurtma qilish",
    ],
  },
  {
    slug: "website",
    no: "07",
    name: "OctoStore",
    tur: "Veb-Do'kon",
    devices: "Web · PC",
    desc: "O'z domeningiz va brendingiz ostida ishlaydigan tezkor veb-sayt. Buyurtmalar to'g'ridan-to'g'ri umumiy kassaga integratsiyalanadi.",
    order: [
      "hero",
      "menus",
      "locations",
      "about",
      "contacts",
      "delivery",
      "checkout",
    ],
    features: [
      "O'z domeningiz va brendingiz ostida ishlash",
      "Payme, Click va Uzum orqali to'lov",
      "Yetkazib berish zonalari, narxlari va real vaqt kuzatuvi",
      "Telegram orqali kirish va buyurtmalar tarixi",
      "SEO: sayt xaritasi, JSON-LD va tillar uchun hreflang",
    ],
    frames: {
      "website-hero": "Saytning bosh sahifasi (hero)",
      "website-menus-1": "Onlayn menyu: taomlar ro'yxati",
      "website-menus-2": "Menyu bo'limlari va qidiruv",
      "website-locations": "Filiallar manzillari xaritada",
      "website-about-us": "Biz haqimizda sahifasi",
      "website-contacts": "Aloqa sahifasi va xarita",
      "website-delivery": "Yetkazib berish shartlari",
      "website-checkout": "Savat va buyurtmani rasmiylashtirish",
    },
    meta: [
      { label: "Tur", value: "Veb-Sayt + Do'kon" },
      { label: "Qurilmalar", value: "Brauzer · Mobil" },
      { label: "Oflayn", value: "Cloud — Onlayn" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "Payme · Click" },
      { label: "Chiqim", value: "SEO · Domen · Brend" },
      { label: "Yordam", value: "Telegram" },
    ],
  },
  {
    slug: "dispatch",
    no: "08",
    name: "OctoDispatch",
    tur: "Logistika",
    devices: "Telefon · Web",
    desc: "Buyurtmalarni o'z kuryerlaringizga taqsimlash, ularni GPS orqali xaritada kuzatish va mijozga taxminiy yetkazib berish vaqtini ko'rsatish.",
    meta: [
      { label: "Tur", value: "Kuryer Boshqaruvi" },
      { label: "Qurilmalar", value: "Telefon · Web" },
      { label: "Oflayn", value: "GPS — Real Vaqt" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "Telegram · Maps API" },
      { label: "Chiqim", value: "Yo'nalish · Statistika" },
      { label: "Yordam", value: "Telegram" },
    ],
    features: [
      "Telegram orqali kuryerlarga buyurtma taklifi yuborish",
      "Real vaqt xaritasida kuryerlar va manzillar",
      "Naqd pulni yig'ish va kuryerlar bilan hisob-kitob",
      "Kuryerlar soni cheklanmagan",
      "Transport turi va joylashuvni real vaqtda kuzatish",
    ],
  },
];

/** Sorted image list (public URLs) for an app folder; [] when empty.
 *  Order: exact folder-name file first, then the app's `order` fragments
 *  (matched on a "-" boundary so "unactive" never matches "active"),
 *  then A–Z. Apps without an `order` list: main/hero first, then A–Z. */
export function imagesFor(slug: string): string[] {
  try {
    const app = apps.find((a) => a.slug === slug);
    const order = app?.order;
    const rank = (f: string): number => {
      const base = f.replace(/\.[a-z0-9]+$/i, "");
      const lower = base.toLowerCase();
      if (lower === slug.toLowerCase()) return -1;
      if (order && order.length) {
        const hay = `-${lower}`;
        const idx = order.findIndex((frag) => hay.includes(`-${frag.toLowerCase()}`));
        return idx === -1 ? order.length : idx;
      }
      if (/(^|[-_\s])(main|hero)([-_\s]|$)/i.test(base)) return 0;
      return 1;
    };
    return readdirSync(join(process.cwd(), "public", "app_images", slug))
      .filter((f) => !f.startsWith("."))
      .sort(
        (a, b) =>
          rank(a) - rank(b) ||
          a.length - b.length ||
          a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }),
      )
      .map((f) => `/app_images/${slug}/${f}`);
  } catch {
    return [];
  }
}

const META = imageMeta as Record<string, { w: number; h: number }>;

/** Intrinsic dimensions for a public image URL (CLS-safe width/height). */
export function imgDims(url: string): { w: number; h: number } | null {
  const m = META[url];
  return m ? { w: m.w, h: m.h } : null;
}
