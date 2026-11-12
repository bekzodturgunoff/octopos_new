/** Homepage / FAQ page questions: Uzbek text here, other languages under faq.* in i18n.ts. */
export const faqs = [
  {
    q: "faq.1q",
    a: "faq.1a",
    uzQ: "Internet uzilsa tizim ishlashda davom etadimi?",
    uzA:
      "Ha. Octopos offline-first ishlaydi: aloqa uzilganda savdo, buyurtmalar va kassa to'xtamaydi, internet qaytgach barcha ma'lumotlar avtomatik sinxronlanadi.",
  },
  {
    q: "faq.2q",
    a: "faq.2a",
    uzQ: "Obuna narxiga nimalar kiradi?",
    uzA:
      "Har bir tarifga barcha yangilanishlar va Telegram orqali yordam kiradi. Funksiyalar tarifga qarab ochiladi: fiskal chek va oshxona ekrani — Starter'dan, ombor, inventarizatsiya va ish haqi — Growth'dan, bir nechta filialni markazdan boshqarish — Scale'da. Qo'shimcha xizmatlar alohida hisoblanadi.",
  },
  {
    q: "faq.3q",
    a: "faq.3a",
    uzQ: "Mening uskunalarim bilan ishlaydimi?",
    uzA:
      "Ha — Android planshetlar, Windows kompyuterlar, ESC/POS printerlar, pul tortmalari va barkod skanerlari bilan mos. To'liq ro'yxat uchun demo so'rang.",
  },
  {
    q: "faq.4q",
    a: "faq.4a",
    uzQ: "Necha kunda ishga tushiramiz?",
    uzA:
      "Odatda 1–3 kun: menyuni kiritamiz, uskunalarni ulaymiz, jamoangizni o'qitamiz. Tarmoqlar uchun alohida reja tuzamiz.",
  },
  {
    q: "faq.5q",
    a: "faq.5a",
    uzQ: "Eski tizimdagi ma'lumotlarni ko'chirish mumkinmi?",
    uzA:
      "Ha — menyu, narxlar va ombor qoldiqlari Excel'dan import qilinadi, o'tish davrida eski tizim bilan parallel ishlash mumkin.",
  },
  {
    q: "faq.6q",
    a: "faq.6a",
    uzQ: "Qanday to'lov usullarini qabul qilamiz?",
    uzA:
      "Naqd, karta, QR, Payme va Click — barchasi avtomatik hisobga olinadi va hisobotlarga tushadi.",
  },
];

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.uzQ,
    acceptedAnswer: { "@type": "Answer", text: f.uzA },
  })),
};
