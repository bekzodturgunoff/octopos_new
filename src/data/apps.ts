import { readdirSync } from "node:fs";
import { join } from "node:path";

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
    desc: "Jonli zal rejasi, soniyalarda tezkor buyurtma olish, bo'lib to'lash va qat'iy kassa intizomi. Planshet va monobloklar uchun.",
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
      "Oflayn-first: internet uzilsa ham savdo to'xtamaydi",
      "Stol va zal rejasi — drag&drop bo'limlar bilan",
      "Chekni bo'lib to'lash va qisman to'lov",
      "Menejer PIN'i: chiqim va qaytarish nazorati",
      "ESC/POS chop etish va kassa chog'i boshqaruvi",
    ],
    frames: {
      "pos-main-view": "Zal va menyudan tezkor buyurtma olish",
      "pos-floor-plan": "Stol rejasi: bo'limlar va holatlar bilan",
      "pos-menu": "Taomlar menyusi: bo'limlar va narxlar",
      "pos-orders": "Buyurtmalar ro'yxati va ularning holati",
      "pos-orders-filter": "Buyurtmalarni holat bo'yicha filtrlash",
      "pos-checkout": "To'lov: naqd, karta va QR",
      "pos-stop-list": "Sotuvni to'xtatish (stop-list)",
      "pos-notifications": "Buyurtma va chiqim bildirishnomalari",
      "pos-notifications-requests": "Mijoz so'rovlari: chaqiruv va chek",
      "pos-delivery-address": "Yetkazib berish manzili xaritada",
      "pos-delivery-job": "Kuryerga topshirilgan buyurtma",
      "pos-delivery-man-informations": "Kuryer ma'lumotlari va yetkazish holati",
      "pos-more-settings": "Umumiy sozlamalar bo'limi",
      "pos-more-settings-appearance": "Ko'rinish va mavzu sozlamalari",
      "pos-more-business-day": "Ish kuni: smena ochish va kassa",
      "pos-more-business-day-register":
        "Kassa hisoboti: sotuv va qoldiq tekshiruvi",
      "pos-more": "Qurilmalar va hisob bo'yicha ma'lumot",
      "pos-lock": "Pin-kod bilan qulf ekrani",
      "Screen Shot 2026-10-08 at 7.14.52 PM": "Ilovaning qo'shimcha ekrani",
      "Screen Shot 2026-10-08 at 7.15.10 PM": "Ilovaning qo'shimcha ekrani",
    },
    meta: [
      { label: "Tur", value: "Restoran POS" },
      { label: "Qurilmalar", value: "Planshet · Monoblok · Kassa" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "Payme · Click" },
      { label: "Chiqim", value: "ESC/POS · Kassa Chog'i" },
      { label: "Yordam", value: "Telegram" },
    ],
  },
  {
    slug: "pos-market",
    no: "02",
    name: "OctoPos",
    tur: "Market POS",
    devices: "Planshet · Kassa",
    desc: "Bozor va market uchun OctoPos: buyurtmalar, cheklar va yetkazib berish boshqaruvi bilan. Restoran POS imkoniyatlari + savdo sig'imi uchun qo'shimcha funksiyalar.",
    order: ["orders", "checkout", "delivery", "notifications", "settings"],
    features: [
      "Barkod skaner va tort (og'irlik) bilan tezkor sotuv",
      "Tovar qoldig'i va sotuvni to'xtatish (stop-list)",
      "Qaytarish, almashtirish va do'konga qaytarish",
      "Smena ochish/yopish va kassa hisoboti",
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
    desc: "Real vaqtli daromad, xarajatlar, marja, ombor qoldig'i va bir nechta filiallar bo'yicha chuqur tahliliy hisobotlar.",
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
      "Foyda va zarar (P&L) paneli real vaqtda",
      "Ombor, retsept va yo'qotishlar nazorati",
      "Xodim rollari, ruxsatlar va oylik hisobi",
      "Yetkazib berish dispetcher paneli jonli xarita bilan",
      "Veb-sayt quruvchi va SEO sozlamalari",
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
    desc: "Qog'oz cheklarsiz aqlli oshxona. Taomlarni stansiyalar (bar, mangal, sovuq sex) bo'yicha saralash va tayyorlash taymerlari.",
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
      "Stansiya bo'yicha jonli buyurtmalar taxtasi",
      "Boshlash / pauza / yakunlash bosqichlari",
      "Yangi buyurtma uchun ovozli signal",
      "86-sonli ro'yxat: tugaganlarni to'xtatish",
      "3–8 ustunli zichlik va sana filtrlari",
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
    desc: "Mehmonlar va kuryerlar uchun zal ekranida katta shriftli tayyor bo'lgan buyurtmalar raqamlari va ovozli chaqiriq.",
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
      "Katta shriftli tayyor buyurtmalar raqamlari",
      "Tayyor bo'lganda ovoz va yashil chegara",
      "Preparing / Ready ikki ustunli ekran",
      "Bo'sh vaqtda media-slaydshow rejimi",
      "Chiqishda avto-to'liq ekran rejimi",
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
    desc: "Ilova o'rnatmasdan stoldagi QR kod orqali taomlarni fotosuratlar bilan ko'rish, savatga qo'shish va darhol to'lash.",
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
      "QR kod — ilova o'rnatmasdan, brauzerda",
      "Chaqriruv, chek so'rash va fikr qoldirish",
      "Buyurtmani jonli kuzatish (qabul → tayyor)",
      "Ishonch rejimi: xodim buyurtmani tasdiqlaydi",
      "Stolga qo'shilib yangi taom qo'shish",
    ],
  },
  {
    slug: "website",
    no: "07",
    name: "OctoStore",
    tur: "Veb-Do'kon",
    devices: "Web · PC",
    desc: "O'z domen va brendingiz ostida ishlovchi tezyurar veb-sayt. Buyurtmalar to'g'ridan-to'g'ri umumiy kassaga integratsiya bo'ladi.",
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
      "O'z domen va brend ostida ishlash",
      "Payme, Click va Uzum orqali to'lov",
      "Yetkazib berish: zona, narx va jonli kuzatuv",
      "Telegram orqali kirish va buyurtmalar tarixi",
      "SEO: sitemap, JSON-LD va hreflang tillar uchun",
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
    desc: "Shaxsiy kuryerlarga buyurtmalarni taqsimlash, GPS orqali xaritada kuzatish va mijozga yetkazish vaqtini ko'rsatish.",
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
      "Telegram orqali kuryer taklifi va tanlov (bid)",
      "Jonli xaritada kuryerlar va manzillar",
      "Naqd pul yig'ish va kuryer hisobi",
      "Kuryerlar soni cheksiz — limit yo'q",
      "Mashina turi va joylashuvni real vaqtda kuzatish",
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
