/**
 * Guides for restaurant and shop owners (uz/ru/en). Every rule stated here is
 * taken from the source listed with it (checked 12 November 2026); where a
 * figure comes from a news report rather than the official text, the guide
 * says so. Re-check the sources before changing a guide.
 *
 * URLs: uz /qollanmalar/<slug>/, ru /ru/gidy/<slug>/, en /en/guides/<slug>/.
 * Korean and Turkish have no guides; their pages link the English hub.
 */
export const GUIDE_LANGS = ["uz", "ru", "en"] as const;
export type GuideLang = (typeof GUIDE_LANGS)[number];

export const GUIDE_BASE: Record<GuideLang, string> = {
  uz: "/qollanmalar",
  ru: "/ru/gidy",
  en: "/en/guides",
};

export interface GuideSection {
  h: string;
  p: string[];
  list?: string[];
}
export interface GuideContent {
  title: string;
  desc: string;
  h1: string;
  lead: string;
  sections: GuideSection[];
}
export interface Guide {
  key: string;
  slugs: Record<GuideLang, string>;
  /** Related solution/app for the closing link. */
  app: string;
  checked: string;
  sources: { label: string; url: string; date: string }[];
  content: Record<GuideLang, GuideContent>;
}

export const guidePath = (g: Guide, l: GuideLang): string => `${GUIDE_BASE[l]}/${g.slugs[l]}/`;
export const guideHubPath = (l: GuideLang): string => `${GUIDE_BASE[l]}/`;

export const GUIDE_UI: Record<GuideLang, { hub: string; hubLead: string; home: string; sources: string; checked: string; note: string; read: string }> = {
  uz: {
    hub: "Qo'llanmalar",
    hubLead: "Restoran, kafe va do'kon egalari uchun: qonun nima talab qiladi va buni qanday bajarish mumkin.",
    home: "Bosh sahifa",
    sources: "Manbalar",
    checked: "Tekshirilgan sana",
    note: "Bu qo'llanma yuridik yoki soliq maslahati emas. Qaror qabul qilishdan oldin rasmiy matnni lex.uz va soliq.uz saytlarida tekshiring yoki buxgalteringiz bilan maslahatlashing.",
    read: "O'qish",
  },
  ru: {
    hub: "Гиды",
    hubLead: "Для владельцев ресторанов, кафе и магазинов: что требует закон и как это выполнить.",
    home: "Главная",
    sources: "Источники",
    checked: "Проверено",
    note: "Этот гид — не юридическая и не налоговая консультация. Перед решением сверьтесь с официальным текстом на lex.uz и soliq.uz или с вашим бухгалтером.",
    read: "Читать",
  },
  en: {
    hub: "Guides",
    hubLead: "For restaurant, café and shop owners: what the law requires and how to meet it.",
    home: "Home",
    sources: "Sources",
    checked: "Checked on",
    note: "This guide is not legal or tax advice. Before you decide, check the official text on lex.uz and soliq.uz, or ask your accountant.",
    read: "Read",
  },
};

export const GUIDES: Guide[] = [
  {
    key: "fiscal-receipt",
    slugs: { uz: "fiskal-chek-talablari", ru: "trebovaniya-k-fiskalnomu-cheku", en: "fiscal-receipt-requirements" },
    app: "pos-restaurant",
    checked: "2026-11-12",
    sources: [
      { label: "Davlat soliq qo'mitasi (gov.uz): «Покупателям должны выдавать чек с QR-кодом»", url: "https://gov.uz/ru/soliq/news/view/57873", date: "2025-05-29" },
      { label: "One.uz: «Tax Committee: Online cash register usage is mandatory!»", url: "https://one.uz/en/news/uzbekistan/29126-tax-committee-online-cash-register-usage-is-mandatory.html", date: "2026-01-03" },
    ],
    content: {
      uz: {
        title: "Fiskal chek: restoran, kafe va do'konlar uchun talablar (2026)",
        desc: "Har bir savdoda QR-kod va fiskal belgili chek: naqd va karta to'lovida ham. Onlayn kassa, jarimalar, mijoz shikoyati va Octopos bilan qanday bajariladi.",
        h1: "Fiskal chek: restoran va do'konlar uchun talablar",
        lead: "Aholiga savdo qiladigan har bir tadbirkor onlayn yoki virtual kassadan foydalanishi va xaridorga QR-kodli fiskal chek berishi shart. Quyida qoida, jarimalar va buni kundalik ishda qanday bajarish haqida.",
        sections: [
          {
            h: "Qoida qisqacha",
            p: [
              "Davlat soliq qo'mitasi ma'lumotiga ko'ra, tadbirkorlik subyektlari onlayn nazorat-kassa mashinalari (onlayn-NKM) va virtual kassalardan foydalanishi hamda xaridorga QR-kod va fiskal belgisi bo'lgan chek berishi shart.",
              "Bu talab naqd pulda ham, terminal orqali to'lovda ham bir xil amal qiladi.",
            ],
          },
          {
            h: "Onlayn to'lovlar va yetkazib berish",
            p: [
              "Elektron to'lov tashkilotlari yoki marketpleyslar orqali hisob-kitob qilinganda xaridorga elektron fiskal chek beriladi.",
              "Boshqa shaxs nomiga ro'yxatdan o'tgan terminaldan foydalanish taqiqlangan.",
            ],
          },
          {
            h: "Jarimalar",
            p: [
              "Kassasiz savdo qilish yoki chek bermaslik Soliq kodeksining 221-moddasiga ko'ra soliq huquqbuzarligi hisoblanadi.",
              "One.uz 2026-yil 3-yanvardagi xabarida shu moddaga tayanib quyidagi jarimalarni keltiradi:",
            ],
            list: [
              "5 mln so'm — kassa yoki to'lov terminalisiz savdo, chek bermaslik yoki terminal orqali to'lovni rad etish;",
              "7 mln so'm — ro'yxatdan o'tmagan kassa yoki terminal bilan savdo;",
              "20 mln so'm — texnik talablarga javob bermaydigan yoki nosoz kassa, boshqa shaxs nomidagi terminal.",
            ],
          },
          {
            h: "Mijoz chek olmasa nima bo'ladi",
            p: [
              "Xaridor chek berilmagani haqida Soliq mobil ilovasidagi «Налоговый партнер» bo'limi orqali shikoyat qilishi mumkin. Soliq qo'mitasi 2025-yilning dastlabki to'rt oyida bunday 33 mingga yaqin shikoyat kelib tushganini ma'lum qilgan.",
            ],
          },
          {
            h: "Octopos bilan qanday bajariladi",
            p: [
              "Octopos RestaurantPOS va MarketPOS savdo yopilganda fiskal chekni chiqaradi — qo'lda alohida kiritish shart emas. Fiskal chek Starter tarifidan boshlab mavjud.",
              "Onlayn do'kon va QR-menyu orqali kelgan buyurtmalar ham shu kassaga tushadi, shuning uchun chek savdo qayerdan kelganidan qat'i nazar bitta joyda chiqariladi.",
            ],
          },
        ],
      },
      ru: {
        title: "Фискальный чек: требования для ресторанов, кафе и магазинов (2026)",
        desc: "Чек с QR-кодом и фискальной отметкой на каждую продажу — и за наличные, и по карте. Онлайн-касса, штрафы, жалобы покупателей и как это выполнять с Octopos.",
        h1: "Фискальный чек: требования для ресторанов и магазинов",
        lead: "Каждый предприниматель, который продаёт населению, обязан работать через онлайн- или виртуальную кассу и выдавать покупателю фискальный чек с QR-кодом. Ниже — само правило, штрафы и как выполнять его в обычной работе.",
        sections: [
          {
            h: "Правило коротко",
            p: [
              "По данным Государственного налогового комитета, субъекты предпринимательства обязаны использовать онлайн-ККМ и виртуальные кассы и выдавать покупателям чек с QR-кодом и фискальной отметкой.",
              "Требование одинаково действует и при оплате наличными, и при оплате через терминал.",
            ],
          },
          {
            h: "Онлайн-оплата и доставка",
            p: [
              "При расчётах через электронные платёжные организации или маркетплейсы покупателю выдаётся электронный фискальный чек.",
              "Пользоваться терминалом, зарегистрированным на другое лицо, запрещено.",
            ],
          },
          {
            h: "Штрафы",
            p: [
              "Торговля без кассы или без выдачи чека — налоговое правонарушение по статье 221 Налогового кодекса.",
              "One.uz в сообщении от 3 января 2026 года со ссылкой на эту статью приводит такие штрафы:",
            ],
            list: [
              "5 млн сумов — торговля без кассы или платёжного терминала, невыдача чека или отказ в оплате через терминал;",
              "7 млн сумов — торговля с незарегистрированной кассой или терминалом;",
              "20 млн сумов — касса, не соответствующая техническим требованиям или неисправная, терминал на чужое имя.",
            ],
          },
          {
            h: "Если покупатель не получил чек",
            p: [
              "Покупатель может пожаловаться на невыдачу чека в разделе «Налоговый партнер» мобильного приложения Soliq. Налоговый комитет сообщал, что за первые четыре месяца 2025 года поступило около 33 тысяч таких жалоб.",
            ],
          },
          {
            h: "Как это выполняется в Octopos",
            p: [
              "Octopos RestaurantPOS и MarketPOS печатают фискальный чек при закрытии продажи — вводить его отдельно вручную не нужно. Фискальные чеки доступны с тарифа Starter.",
              "Заказы из интернет-магазина и QR-меню попадают в ту же кассу, поэтому чек выдаётся в одном месте, откуда бы ни пришла продажа.",
            ],
          },
        ],
      },
      en: {
        title: "Fiscal receipts: requirements for restaurants, cafés and shops in Uzbekistan (2026)",
        desc: "A receipt with a QR code and fiscal mark for every sale, cash or card. Online cash registers, fines, customer complaints and how to comply with Octopos.",
        h1: "Fiscal receipts: what restaurants and shops must do",
        lead: "Every business that sells to the public in Uzbekistan must use an online or virtual cash register and give the customer a fiscal receipt with a QR code. Here is the rule, the fines and how to meet it day to day.",
        sections: [
          {
            h: "The rule in short",
            p: [
              "According to the State Tax Committee, businesses must use online cash registers (online-KKM) or virtual cash registers and give customers a receipt with a QR code and a fiscal mark.",
              "This applies the same way to cash and to card-terminal payments.",
            ],
          },
          {
            h: "Online payments and delivery",
            p: [
              "When payment goes through an electronic payment organisation or a marketplace, the customer gets an electronic fiscal receipt.",
              "Using a terminal registered to someone else is prohibited.",
            ],
          },
          {
            h: "Fines",
            p: [
              "Selling without a cash register or without issuing a receipt is a tax offence under Article 221 of the Tax Code.",
              "One.uz, reporting on 3 January 2026 and citing that article, lists these fines:",
            ],
            list: [
              "5 million soums for selling without a cash register or payment terminal, not issuing a receipt, or refusing payment by terminal;",
              "7 million soums for selling with an unregistered cash register or terminal;",
              "20 million soums for a cash register that does not meet technical requirements or is faulty, or a terminal registered to someone else.",
            ],
          },
          {
            h: "If a customer gets no receipt",
            p: [
              "Customers can report a missing receipt in the «Налоговый партнер» (Tax partner) section of the Soliq mobile app. The Tax Committee said it received about 33,000 such complaints in the first four months of 2025.",
            ],
          },
          {
            h: "How Octopos handles it",
            p: [
              "Octopos RestaurantPOS and MarketPOS issue the fiscal receipt when a sale is closed, with no separate manual entry. Fiscal receipts are available from the Starter plan.",
              "Orders from the online store and the QR menu land in the same register, so the receipt is issued in one place wherever the sale came from.",
            ],
          },
        ],
      },
    },
  },
  {
    key: "taxes-2026",
    slugs: { uz: "restoran-soliqlari-2026", ru: "nalogi-dlya-restorana-2026", en: "restaurant-taxes-2026" },
    app: "dash",
    checked: "2026-11-12",
    sources: [
      { label: "PwC Worldwide Tax Summaries: Uzbekistan — Other taxes", url: "https://taxsummaries.pwc.com/republic-of-uzbekistan/corporate/other-taxes", date: "2026-08-27" },
      { label: "Gazeta.uz: simplified 6% VAT for public catering, retail and services", url: "https://www.gazeta.uz/en/2026/05/27/taxes/", date: "2026-05-27" },
      { label: "Gazeta.uz: VAT and income tax threshold for small businesses raised to 5 billion soums", url: "https://www.gazeta.uz/en/2026/05/29/busine/", date: "2026-05-29" },
    ],
    content: {
      uz: {
        title: "Restoran va kafelar uchun soliqlar 2026: QQS 12% yoki soddalashtirilgan 6%",
        desc: "2026-yildagi o'zgarishlar: umumiy QQS 12%, umumiy ovqatlanish, savdo va xizmatlar uchun ixtiyoriy 6% QQS rejimi va aylanma soliq chegarasi 5 mlrd so'mgacha oshgani.",
        h1: "Restoran va kafelar uchun soliqlar 2026",
        lead: "2026-yilda umumiy ovqatlanish korxonalari uchun ikki muhim o'zgarish kuchga kirdi: ixtiyoriy soddalashtirilgan 6% QQS rejimi va aylanmadan olinadigan soliqdan umumiy tizimga o'tish chegarasining oshishi.",
        sections: [
          {
            h: "Umumiy QQS stavkasi — 12%",
            p: ["PwC ma'lumotiga ko'ra, soliqqa tortiladigan aylanma uchun QQS stavkasi 12%. Xuddi shu stavka soliqqa tortiladigan importga ham qo'llanadi."],
          },
          {
            h: "Ixtiyoriy soddalashtirilgan rejim: 6% QQS",
            p: [
              "2026-yil 1-iyundan 2030-yil 1-yanvargacha asosiy faoliyati umumiy ovqatlanish, savdo yoki xizmat ko'rsatish bo'lgan korxonalar qonunda belgilangan shartlarga muvofiq soddalashtirilgan QQS rejimini tanlashi mumkin (PwC).",
            ],
            list: [
              "QQS stavkasi — 6%;",
              "kiruvchi QQS hisobga olinmaydi;",
              "foyda solig'i stavkasi — 0%, foyda solig'i deklaratsiyasi topshirilmaydi;",
              "xaridorlar bunday yetkazib beruvchidan olingan QQSni hisobga olish huquqini saqlaydi.",
            ],
          },
          {
            h: "Kim uchun qaysi biri foydaliroq",
            p: [
              "6% rejimda xaridlar bo'yicha to'langan QQS qaytarilmaydi. Shuning uchun QQS bilan ko'p xarid qiladigan korxona ikkala variantni o'z raqamlari bilan solishtirishi kerak: sotuv, QQS bilan xaridlar va foyda.",
              "Bu hisob-kitobni buxgalteringiz bilan qiling — qaror har bir korxonaning xarajat tuzilmasiga bog'liq.",
            ],
          },
          {
            h: "Aylanma soliq chegarasi — 5 mlrd so'm",
            p: [
              "Gazeta.uz xabariga ko'ra, 2026-yil 1-iyundan boshlab kichik biznesning QQS va foyda solig'iga o'tish chegarasi 1 mlrd so'mdan 5 mlrd so'mga oshirildi. Chegaradan past bo'lgan korxonalar aylanmadan olinadigan soliqni to'lashda davom etishi mumkin.",
            ],
          },
          {
            h: "Octopos raqamlarni qanday tayyorlaydi",
            p: [
              "Dash yalpi va sof savdo, sotilgan tovarlar tannarxi, mehnat haqi va operatsion xarajatlarni har kuni hisoblaydi — foyda va zarar, balans va aylanma qaydnoma hisobotlari tayyor turadi. Rejim tanlashda va buxgalter bilan ishlashda shu raqamlardan foydalanasiz.",
            ],
          },
        ],
      },
      ru: {
        title: "Налоги для ресторанов и кафе в 2026 году: НДС 12% или упрощённый 6%",
        desc: "Изменения 2026 года: общий НДС 12%, добровольный режим НДС 6% для общепита, торговли и услуг и порог для налога с оборота, поднятый до 5 млрд сумов.",
        h1: "Налоги для ресторанов и кафе в 2026 году",
        lead: "В 2026 году для общепита вступили в силу два важных изменения: добровольный упрощённый режим НДС 6% и повышение порога перехода с налога с оборота на общую систему.",
        sections: [
          {
            h: "Общая ставка НДС — 12%",
            p: ["По данным PwC, ставка НДС для облагаемого оборота — 12%. Та же ставка применяется к облагаемому импорту."],
          },
          {
            h: "Добровольный упрощённый режим: НДС 6%",
            p: [
              "С 1 июня 2026 года по 1 января 2030 года предприятия, основная деятельность которых — общепит, торговля или услуги, могут выбрать упрощённый режим НДС при соблюдении установленных законом условий (PwC).",
            ],
            list: [
              "ставка НДС — 6%;",
              "входящий НДС к зачёту не принимается;",
              "ставка налога на прибыль — 0%, декларация по налогу на прибыль не сдаётся;",
              "покупатели сохраняют право на зачёт НДС, выставленного таким поставщиком.",
            ],
          },
          {
            h: "Что выгоднее",
            p: [
              "В режиме 6% НДС, уплаченный при закупках, не возвращается. Поэтому предприятию, которое много закупает с НДС, стоит сравнить оба варианта на своих цифрах: продажи, закупки с НДС и прибыль.",
              "Делайте этот расчёт вместе с бухгалтером — решение зависит от структуры расходов конкретного предприятия.",
            ],
          },
          {
            h: "Порог для налога с оборота — 5 млрд сумов",
            p: [
              "По сообщению Gazeta.uz, с 1 июня 2026 года порог перехода малого бизнеса на НДС и налог на прибыль повышен с 1 млрд до 5 млрд сумов. Предприятия ниже порога могут продолжать платить налог с оборота.",
            ],
          },
          {
            h: "Как Octopos готовит цифры",
            p: [
              "Dash каждый день считает валовую и чистую выручку, себестоимость проданных товаров, оплату труда и операционные расходы — отчёты о прибылях и убытках, баланс и оборотно-сальдовая ведомость всегда готовы. С этими цифрами проще выбрать режим и работать с бухгалтером.",
            ],
          },
        ],
      },
      en: {
        title: "Restaurant and café taxes in Uzbekistan 2026: 12% VAT or the simplified 6%",
        desc: "What changed in 2026: standard VAT of 12%, an optional 6% VAT regime for catering, retail and services, and the turnover tax threshold raised to 5 billion soums.",
        h1: "Restaurant and café taxes in Uzbekistan, 2026",
        lead: "Two changes that matter to catering businesses took effect in 2026: an optional simplified 6% VAT regime, and a higher threshold for moving from turnover tax to the general tax system.",
        sections: [
          {
            h: "Standard VAT: 12%",
            p: ["According to PwC, the VAT rate for taxable turnover is 12%. The same rate applies to taxable imports."],
          },
          {
            h: "The optional simplified regime: 6% VAT",
            p: [
              "From 1 June 2026 to 1 January 2030, businesses whose main activity is catering, trade or services may opt for a simplified VAT regime, subject to the statutory conditions (PwC).",
            ],
            list: [
              "VAT rate of 6%;",
              "no input VAT credit;",
              "0% corporate income tax, with no CIT returns to file;",
              "buyers can still credit the VAT charged by such suppliers.",
            ],
          },
          {
            h: "Which one suits you",
            p: [
              "Under the 6% regime, VAT paid on purchases is not credited. A business that buys a lot with VAT should compare both options on its own numbers: sales, VAT-bearing purchases and profit.",
              "Do this with your accountant: the answer depends on each business's cost structure.",
            ],
          },
          {
            h: "Turnover tax threshold: 5 billion soums",
            p: [
              "Gazeta.uz reports that from 1 June 2026 the threshold at which small businesses move to VAT and corporate income tax rose from 1 billion to 5 billion soums. Businesses below it may keep paying turnover tax.",
            ],
          },
          {
            h: "How Octopos prepares the numbers",
            p: [
              "Dash works out gross and net sales, cost of goods sold, labour and operating expenses every day, so the profit and loss statement, balance sheet and trial balance are always ready. Use them to choose a regime and to work with your accountant.",
            ],
          },
        ],
      },
    },
  },
];
