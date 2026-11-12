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
  /** Not released yet: shown with a "Tez orada" badge, no trial CTA. */
  soon?: boolean;
  /** Display order of images by filename fragment (first match wins).
   *  Matched with a "-" boundary, so "unactive" never matches "active". */
  order?: string[];
  /** Screenshots kept in the folder but not shown (repeats, near-identical menus). */
  exclude?: string[];
}

export const apps: App[] = [
  {
    slug: "pos-restaurant",
    no: "01",
    name: "RestaurantPOS",
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
    // The order screen is the hero (PosHero, from the live app); one shot per other screen.
    exclude: [
      "pos-main-view",
      "Screen Shot 2026-10-08 at 7.14.52 PM",
      "Screen Shot 2026-10-08 at 7.15.10 PM",
      "pos-delivery-man-informations",
      "pos-more-settings-appearance",
      "pos-more-business-day-register",
      "pos-notifications-requests",
      "pos-orders-filter",
      "pos-lock",
    ],
    features: [
      "Oflayn rejim: internet uzilsa ham savdo davom etadi",
      "Stol va zal rejasi — bo'limlarni sudrab joylashtirish imkoniyati",
      "Hisobni bo'lib to'lash va qisman to'lovlarni qabul qilish",
      "Menejer PIN-kodi: bekor qilish va qaytarimlarni nazorat qilish",
      "ESC/POS orqali chop etish va kassa tortmasini boshqarish",
      "Stollarni bron qilish va zal rejasida band stollarni ko'rish",
      "Mijoz uchun ikkinchi ekran: buyurtma va summa ko'rinib turadi",
      "Kassaga naqd kiritish va olishni qayd etish",
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
    name: "MarketPOS",
    tur: "Market POS",
    devices: "Planshet · Kassa",
    desc: "Bozor va do'konlar uchun MarketPOS: buyurtmalar, cheklar va yetkazib berishni boshqarish. Restoran POS imkoniyatlariga qo'shimcha ravishda katta savdo hajmi uchun funksiyalar.",
    order: ["orders", "checkout", "delivery", "notifications", "settings"],
    features: [
      "Barkod skaneri va tarozi yordamida tezkor hisob-kitob",
      "Tovar qoldig'i va sotuvni to'xtatish ro'yxati",
      "Qaytarish, almashtirish va do'kon krediti",
      "Smenani ochish/yopish va kassa hisobotlari",
      "Yetkazib berish buyurtmalarini boshqarish",
      "Mijoz guruhlari uchun alohida narxlar, masalan ulgurji",
      "Mijoz uchun ikkinchi ekran: tovarlar va summa ko'rinib turadi",
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
    name: "Dash",
    tur: "Boshqaruv",
    devices: "Web · iOS · Android",
    desc: "Daromad, xarajatlar, marja, ombor qoldig'i va bir nechta filial bo'yicha real vaqt rejimidagi chuqur tahlil.",
    // Real Dash screenshots (a client's account, restaurant name shown as "Bonet",
    // staff and customer names replaced). The home screen is the hero (DashHero).
    order: ["orders-list", "order-detail", "reports-summary", "reports-items", "reports-categories", "reports-payments", "reports-session", "reports-staff", "finance-statements", "reports-stock-value", "inventory-movements", "catalog-library", "storefront-site", "access-roles", "floor-editor"],
    exclude: [
      "dash-main",
      "dash-reports",
      "dash-account",
      "dash-administration",
      "dash-catalog",
      "dash-catalog-menu",
      "dash-inventory",
      "dash-orders",
      "dash-website",
      "dash-website-settings",
    ],
    features: [
      "Real vaqt rejimidagi foyda va zarar (P&L) paneli",
      "Ombor, retseptlar va yo'qotishlarni nazorat qilish",
      "Xodim rollari, huquqlar va ish haqi hisoboti",
      "Real vaqt xaritasiga ega yetkazib berish dispetcher paneli",
      "Veb-sayt konstruktori va SEO sozlamalari",
      "AI menyu import: rasm yoki ro'yxatdan mahsulotlar va taom rasmlari",
      "Mijozlar bazasi, segmentlar va qarzdorlik nazorati",
      "Narx ro'yxatlari: savdo kanali va mijoz guruhi bo'yicha alohida narx",
      "Yetkazib beruvchilar: buyurtma, kirim, hisob-faktura va to'lov",
      "Ishlab chiqarish, partiyalar va yaroqlilik muddati",
      "Shtrix-kodli narx yorliqlarini chop etish",
      "Ko'p valyuta: dollardagi narxlar kunlik kurs bo'yicha sotiladi",
      "Ish haqi hisoblash: komissiya va yetkazib berish to'lovlari bilan",
      "Chek dizaynini o'zingiz sozlash",
      "Telegram ogohlantirishlari: bekor qilish, tasdiqlash so'rovlari, qoldiq",
      "Moliyaviy hisobotlar: foyda va zarar, balans va aylanma qaydnoma",
      "Xodim va kuryerlar topshirgan naqd pulni sanab qabul qilish",
      "Nima buyurtma qilish kerak: minimal qoldiq qoidalari bo'yicha xarid ro'yxati",
      "Sarf va farqlar: inventarizatsiyada nima yetishmayotganini ko'ring",
      "Omborlar orasida tovar ko'chirish",
      "Xodimlar savdosi: kim qancha sotdi va qancha ishlab topdi",
      "Hub & Spoke: yangi filiallarni asosiy hisobga ulash",
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
      "dash-orders-list": "Buyurtmalar: holat, kanal va summa bo'yicha",
      "dash-order-detail": "Buyurtma tafsiloti: stol, kassa, tarkib va to'lovlar",
      "dash-reports-summary": "Ko'rib chiqish: o'rtacha chek va soatlik daromad",
      "dash-reports-items": "Mahsulotlar hisoboti: eng yaxshi sotuvchilar",
      "dash-reports-categories": "Kategoriyalar ulushi daromadda",
      "dash-reports-payments": "To'lovlar: soatlar va usullar bo'yicha",
      "dash-reports-session": "Smena: kun ochilgandan beri savdo",
      "dash-reports-staff": "Xodimlar savdosi va ishlab topilgan haq",
      "dash-finance-statements": "Moliyaviy hisobotlar: aylanma qaydnoma va balans",
      "dash-reports-stock-value": "Zaxira qiymati: tannarx va sotuv narxida",
      "dash-inventory-movements": "Ombor harakatlari: har bir kirim, sotuv va hisobdan chiqarish",
      "dash-catalog-library": "Mahsulotlar ro'yxati: narxlar va variantlar",
      "dash-storefront-site": "Onlayn do'kon: sayt sozlamalari va chop etish",
      "dash-access-roles": "Rollar va huquqlar: kassir, ofitsiant, kuryer, menejer",
      "dash-floor-editor": "Zal rejasi: bo'limlar va stollar",
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
    name: "Kitchen",
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
      { label: "Integratsiya", value: "RestaurantPOS · Order" },
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
    name: "Display",
    tur: "ODS Ekran",
    devices: "Smart TV · HDMI",
    desc: "Mehmonlar va kuryerlar uchun zal ekranida tayyor buyurtmalar raqamlarini katta shrift va ovozli chaqiriq bilan ko'rsatish.",
    order: ["settings"],
    meta: [
      { label: "Tur", value: "Berish ekrani" },
      { label: "Qurilmalar", value: "Smart TV · HDMI · Kiosk" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "RestaurantPOS · Oshxona" },
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
    name: "Order",
    tur: "QR Menyu",
    devices: "Telefon · QR",
    desc: "Ilova o'rnatmasdan, stol ustidagi QR-kod orqali taomlarni fotosuratlari bilan ko'rish, savatga qo'shish va darhol to'lash.",
    meta: [
      { label: "Tur", value: "QR Stol Menyusi" },
      { label: "Qurilmalar", value: "Telefon · Planshet" },
      { label: "Oflayn", value: "Ha — Lokal Server" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Integratsiya", value: "RestaurantPOS · Payme" },
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
    name: "Store",
    tur: "Veb-Do'kon",
    devices: "Web · PC",
    desc: "O'z domeningiz va brendingiz ostida ishlaydigan tezkor veb-sayt. Buyurtmalar to'g'ridan-to'g'ri umumiy kassaga integratsiyalanadi.",
    // Gallery: yeah.uz, a live shop on the Octopos storefront (market template).
    order: ["hero", "catalog", "product", "mobile", "dark"],
    features: [
      "O'z domeningiz va brendingiz ostida ishlash",
      "Payme, Click va Uzum orqali to'lov",
      "Yetkazib berish zonalari, narxlari va real vaqt kuzatuvi",
      "Telegram orqali kirish va buyurtmalar tarixi",
      "SEO: sayt xaritasi, JSON-LD va tillar uchun hreflang",
      "Bir nechta til, o'z sahifalaringiz va mavzu tanlash",
      "Sayt statistikasi va har bir o'zgarish tarixi",
    ],
    frames: {
      "website-hero": "Do'kon bosh sahifasi: banner, katalog va yetkazib berish",
      "website-catalog": "Kategoriya: mahsulotlar, filtrlar va saralash",
      "website-product": "Mahsulot sahifasi",
      "website-mobile": "Telefondagi ko'rinish",
      "website-dark": "Tungi rejim",
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
    name: "Dispatch",
    tur: "Logistika",
    devices: "Planshet · Web",
    soon: true,
    // Capabilities as built in kdsx-pos-v2 (dispatch route, delivery panel, inbox), not plans.
    desc: "Yetkazib berish buyurtmalarini o'z kuryerlaringizga bering: tayinlang yoki ishni taklif qiling, kuryerlar javobini Xabarlarda ko'ring.",
    meta: [
      { label: "Tur", value: "Kuryer Boshqaruvi" },
      { label: "Qurilmalar", value: "Planshet · Web" },
      { label: "Tillar", value: "O'zbek · Rus · Ingliz" },
      { label: "Yordam", value: "Telegram" },
    ],
    features: [
      "Yetkazib berish buyurtmasiga kuryer tayinlash yoki almashtirish",
      "Ishni barcha kuryerlarga yoki tanlanganlarga taklif qilish",
      "Belgilangan narx yoki takliflar: kuryerlar narx aytadi, siz tanlaysiz",
      "Xaritadan manzil va kuryer uchun izoh: domofon, qayerga qoldirish",
      "Yetkazish narxi alohida yoziladi, buyurtma summasiga qo'shilmaydi",
      "Kuryerlar javob berganda Xabarlar bo'limiga bildirishnoma",
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
      .filter((f) => f.endsWith(".webp") && !/\.w\d+\.webp$/i.test(f))
      .filter((f) => !app?.exclude?.includes(f.replace(/\.webp$/i, "")))
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

interface ImgMeta {
  w: number;
  h: number;
  variants: { u: string; w: number }[];
}
const META = imageMeta as Record<string, ImgMeta>;

/** Intrinsic dimensions for a public image URL (CLS-safe width/height). */
export function imgDims(url: string): { w: number; h: number } | null {
  const m = META[url];
  return m ? { w: m.w, h: m.h } : null;
}

/** Responsive srcset (800/1280 variants + full) for a public image URL. */
export function imgSrcset(url: string): string | null {
  const m = META[url];
  if (!m) return null;
  return [...m.variants.map((v) => `${v.u} ${v.w}w`), `${url} ${m.w}w`].join(
    ", ",
  );
}
