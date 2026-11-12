/**
 * Solution pages (14 topics × uz/ru/en/ko). The text is the previous
 * octopos.uz's, carried over word for word so the indexed pages keep their
 * content and URLs; layout and styling are the current site's
 * (SolutionPage.astro). Generated once from the old landingpage repo.
 *
 * URLs: uz /yechimlar/<slug>/ (the old /uz/ prefix 301s here), ru
 * /ru/resheniya/<slug>/, en and ko /<lang>/solutions/<slug>/ — exactly the
 * old ones. Turkish had no solution pages.
 */
export const SOL_LANGS = ["uz", "ru", "en", "ko"] as const;
export type SolLang = (typeof SOL_LANGS)[number];

export const SOL_BASE: Record<SolLang, string> = {
  uz: "/yechimlar",
  ru: "/ru/resheniya",
  en: "/en/solutions",
  ko: "/ko/solutions",
};

export interface SolCard { t: string; d: string }
export interface SolContent {
  title: string;
  desc: string;
  name: string;
  h1: string;
  lead: string;
  probH: string;
  prob: SolCard[];
  featH: string;
  featP: string;
  feat: SolCard[];
  stepsH: string;
  steps: SolCard[];
  faq: { q: string; a: string }[];
  /** Closing call to action heading. */
  ctaH: string;
}
export interface Solution {
  key: string;
  /** Related app (screenshot + link). */
  app: string;
  slugs: Record<SolLang, string>;
  content: Record<SolLang, SolContent>;
}

/**
 * The 30-day free trial runs until the end of 2026. Builds after that date drop
 * the trial wording (the site must be rebuilt/deployed after 1 Jan 2027 for it
 * to disappear). Use `sol.content` through `solContent()`.
 */
export const TRIAL_END = new Date("2027-01-01T00:00:00+05:00");
const AFTER_TRIAL: [string, string][] = [
  ["Ha, 30 kun bepul sinov mavjud.", "Ha, bepul tarif bor."],
  ["Да, 30 дней бесплатно.", "Да, есть бесплатный тариф."],
  ["Yes, 30-day free trial available.", "Yes, there is a free plan."],
  ["네, 30일 무료 체험이 가능합니다.", "네, 무료 요금제가 있습니다."],
  [" 30 kun bepul.", ""],
  [" Первый месяц бесплатно.", ""],
  [" 30 days free.", ""],
  [" 30일 무료.", ""],
];
const dropTrial = (t: string): string => AFTER_TRIAL.reduce((s, [a, b]) => s.replaceAll(a, b), t);
export function solContent(sol: Solution, l: SolLang, now: Date = new Date()): SolContent {
  const c = sol.content[l];
  if (now < TRIAL_END) return c;
  return JSON.parse(dropTrial(JSON.stringify(c)));
}

export const solPath = (s: Solution, l: SolLang): string => `${SOL_BASE[l]}/${s.slugs[l]}/`;
export const hubPath = (l: SolLang): string => `${SOL_BASE[l]}/`;

/** Breadcrumb labels the old pages used. */
export const SOL_CRUMBS: Record<SolLang, { home: string; hub: string }> = {
  "uz": {
    "home": "Bosh sahifa",
    "hub": "Yechimlar"
  },
  "ru": {
    "home": "Главная",
    "hub": "Решения"
  },
  "en": {
    "home": "Home",
    "hub": "Solutions"
  },
  "ko": {
    "home": "홈",
    "hub": "솔루션"
  }
};

export const SOLUTIONS: Solution[] = [
 {
  "key": "pos-system",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "pos-tizim",
   "ru": "pos-sistema",
   "en": "pos-system",
   "ko": "pos-system"
  },
  "content": {
   "uz": {
    "title": "POS tizim — Kassa va zalni bir qarashda boshqaring",
    "desc": "Restoran uchun POS tizimi: vizual zal rejasi, stol boshqaruvi va tezkor buyurtma olish — bir necha bosish bilan. iOS, Android va veb.",
    "name": "POS tizimi",
    "h1": "POS tizim — kassa va zalni bir qarashda boshqaring",
    "lead": "Rang bilan belgilangan stol holatlari, bir necha bosish bilan buyurtma olish va sabab kuzatuvi — bitta planshetda.",
    "probH": "Nima uchun POS tizim kerak?",
    "prob": [
     {
      "t": "Sekin xizmat",
      "d": "Ofitsiantlar stoldan stolga yurib, vaqt yo'qotadi. Buyurtma olish uzoq davom etadi."
     },
     {
      "t": "Xatolar",
      "d": "Qo'lda kiritilgan buyurtmalar noto'g'ri bo'lishi mumkin — stol, miqdor yoki tarkibda."
     },
     {
      "t": "Nazorat yo'q",
      "d": "Qaysi stol band, qaysi biri bo'sh — aniq ko'rinmaydi. Zal boshqarish qiyin."
     }
    ],
    "featH": "Octopos POS nima qiladi?",
    "featP": "Vizual zal rejasi, stol boshqaruvi va tezkor buyurtma olish — bitta ilovada.",
    "feat": [
     {
      "t": "Jonli zal rejasi",
      "d": "Yashil — bo'sh, sariq — bron qilingan, qizil — band. Butun zal bir qarashda ko'rinadi."
     },
     {
      "t": "Zal, olib ketish va yetkazish",
      "d": "Buyurtma turini tanlab, kerakli yo'nalishga yuboring — hammasi avtomatik."
     },
     {
      "t": "Sabab kodi bilan bo'lish",
      "d": "Hisobni ajratish, bekor qilish yoki compliment — har bir harakat sababi bilan qayd etiladi."
     },
     {
      "t": "Naqd, karta va keyin to'lash",
      "d": "Barcha to'lov turlari qo'llab-quvvatlanadi — Click, Payme va boshqalar."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Zal rejasini chizing",
      "d": "Stol joylashuvini belgilang."
     },
     {
      "t": "Menyuni kiriting",
      "d": "Taomlar, narxlar va tarkibni kiriting."
     },
     {
      "t": "Jamoa ishni boshlasin",
      "d": "Ofitsiantlar darhol buyurtma qabul qila boshlaydi."
     }
    ],
    "faq": [
     {
      "q": "POS tizimi nima qiladi?",
      "a": "Buyurtma qabul qilish, to'lovni qayta ishlash, chek chiqarish va savdolarni qayd etish."
     },
     {
      "q": "Qurilmalar bilan ishlaydimi?",
      "a": "Ha, termoprinter, skaner va naqd pul qutisi bilan to'liq integratsiya."
     },
     {
      "q": "Offline rejimda ishlaydimi?",
      "a": "Ha, internet yo'qolganida ham buyurtma qabul qilish va to'lov qayta ishlash mumkin."
     }
    ],
    "ctaH": "POS tizimini sinab ko'ring"
   },
   "ru": {
    "title": "POS-система — Управляйте кассой и залом",
    "desc": "POS-система для ресторана: визуальный план зала, управление столами и быстрый приём заказов — в несколько касаний. iOS, Android и веб.",
    "name": "POS система",
    "h1": "POS-система — управляйте кассой и залом",
    "lead": "Цветовая маркировка столов, быстрый приём заказов и отслеживание причин — на одном планшете.",
    "probH": "Зачем нужна POS-система?",
    "prob": [
     {
      "t": "Медленный сервис",
      "d": "Официанты ходят от стола к столу, теряя время. Приём заказов затягивается."
     },
     {
      "t": "Ошибки",
      "d": "Ручной ввод заказов приводит к ошибкам в количестве, цене или составе."
     },
     {
      "t": "Нет контроля",
      "d": "Какой стол занят, какой свободен — непонятно. Управление залом затруднено."
     }
    ],
    "featH": "Что делает POS Octopos?",
    "featP": "Визуальный план зала, управление столами и быстрый приём заказов — в одном приложении.",
    "feat": [
     {
      "t": "Живой план зала",
      "d": "Зелёный — свободен, жёлтый — забронирован, красный — занят. Весь зал одним взглядом."
     },
     {
      "t": "Зал, доставка и навынос",
      "d": "Выберите тип заказа — и он автоматически направится в нужное место."
     },
     {
      "t": "Разделение счёта с причинами",
      "d": "Разделяйте, отменяйте и компенсируйте — каждый действием с причиной."
     },
     {
      "t": "Наличные, карта и отложенный платеж",
      "d": "Все виды оплаты — Click, Payme и другие."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Спроектируйте зал",
      "d": "Определите расположение столов."
     },
     {
      "t": "Внесите меню",
      "d": "Блюда, цены и состав — вводите один раз."
     },
     {
      "t": "Команда начнёт работу",
      "d": "Официанты сразу начнут принимать заказы."
     }
    ],
    "faq": [
     {
      "q": "Что делает POS-система?",
      "a": "Приём заказов, обработка оплат, печать чеков и фиксация продаж."
     },
     {
      "q": "Работает ли с оборудованием?",
      "a": "Да, полная интеграция с термопринтерами, сканерами и кассовыми ящиками."
     },
     {
      "q": "Работает ли в оффлайне?",
      "a": "Да, даже без интернета можно принимать заказы и обрабатывать оплаты."
     }
    ],
    "ctaH": "Попробуйте POS-систему"
   },
   "en": {
    "title": "POS System — Manage your register and floor plan",
    "desc": "POS system for restaurants: visual floor plan, table management and fast order taking — in a few taps. iOS, Android and web.",
    "name": "POS System",
    "h1": "POS System — manage your register and floor plan",
    "lead": "Color-coded table status, quick order taking and reason tracking — on one tablet.",
    "probH": "Why do you need a POS system?",
    "prob": [
     {
      "t": "Slow service",
      "d": "Waiters walk from table to table, wasting time. Order taking takes too long."
     },
     {
      "t": "Errors",
      "d": "Manually entered orders can be wrong — table, quantity or ingredients."
     },
     {
      "t": "No visibility",
      "d": "Which table is occupied, which is free — not clearly visible. Floor management is difficult."
     }
    ],
    "featH": "What does Octopos POS do?",
    "featP": "Visual floor plan, table management and fast order taking — in one app.",
    "feat": [
     {
      "t": "Live floor plan",
      "d": "Green — free, yellow — reserved, red — occupied. The entire floor is visible at a glance."
     },
     {
      "t": "Dine-in, delivery and takeaway",
      "d": "Select the order type and send it to the right route — everything is automated."
     },
     {
      "t": "Bill splitting with reasons",
      "d": "Split the bill, cancel or comp — every action is recorded with a reason."
     },
     {
      "t": "Cash, card and deferred payment",
      "d": "All payment types are supported — Click, Payme and more."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Design your floor",
      "d": "Define table layouts and positions."
     },
     {
      "t": "Add your menu",
      "d": "Enter dishes, prices and ingredients."
     },
     {
      "t": "Team starts working",
      "d": "Waiters start taking orders immediately."
     }
    ],
    "faq": [
     {
      "q": "What does the POS system do?",
      "a": "Takes orders, processes payments, prints receipts and tracks sales."
     },
     {
      "q": "Does it work with hardware?",
      "a": "Yes, full integration with thermal printers, scanners and cash drawers."
     },
     {
      "q": "Does it work offline?",
      "a": "Yes, you can take orders and process payments even without internet."
     }
    ],
    "ctaH": "Try the POS system"
   },
   "ko": {
    "title": "POS 시스템 — 매장과 좌석을 한눈에 관리",
    "desc": "레스토랑용 POS 시스템: 시각적 매장 도면, 좌석 관리와 빠른 주문 접수 — 몇 번의 탭으로. iOS, Android 및 웹.",
    "name": "POS 시스템",
    "h1": "POS 시스템 — 매장과 좌석을 한눈에 관리하세요",
    "lead": "색상으로 구분된 좌석 상태, 빠른 주문 접수와 사유 추적 — 하나의 태블릿에서.",
    "probH": "POS 시스템이 필요한 이유",
    "prob": [
     {
      "t": "느린 서비스",
      "d": "웨이터가 테이블을 돌아다니며 시간을 낭비합니다. 주문 접수가 너무 오래 걸립니다."
     },
     {
      "t": "오류",
      "d": "수동으로 입력한 주문은 테이블, 수량 또는 재료에서 잘못될 수 있습니다."
     },
     {
      "t": "시야 부족",
      "d": "어떤 좌석이 점유되어 있고 어떤 좌석이 비어 있는지 명확하게 보이지 않습니다. 매장 관리가 어렵습니다."
     }
    ],
    "featH": "Octopos POS는 무엇을 하나요",
    "featP": "시각적 매장 도면, 좌석 관리와 빠른 주문 접수 — 하나의 앱에서.",
    "feat": [
     {
      "t": "실시간 매장 도면",
      "d": "초록색 — 비어 있음, 노란색 — 예약됨, 빨간색 — 점유됨. 전체 매장이 한눈에 보입니다."
     },
     {
      "t": "매장, 배달 및 포장",
      "d": "주문 유형을 선택하고 올바른 경로로 전송합니다 — 모든 것이 자동화됩니다."
     },
     {
      "t": "사유별 계산서 분할",
      "d": "계산서를 분할하거나 취소하거나 제공합니다 — 모든 작업은 사유와 함께 기록됩니다."
     },
     {
      "t": "현금, 카드 및 지연 결제",
      "d": "모든 결제 유형이 지원됩니다 — Click, Payme 등."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "매장 도면 설계",
      "d": "좌석 배치와 위치를 설정합니다."
     },
     {
      "t": "메뉴 등록",
      "d": "요리, 가격 및 재료를 입력합니다."
     },
     {
      "t": "팀이 작업 시작",
      "d": "웨이터가 즉시 주문을 접수하기 시작합니다."
     }
    ],
    "faq": [
     {
      "q": "POS 시스템은 무엇을 하나요?",
      "a": "주문 접수, 결제 처리, 영수증 출력 및 매출 추적을 합니다."
     },
     {
      "q": "하드웨어와 연동되나요?",
      "a": "네, 열 프린터, 스캐너 및 금고와 완전히 연동됩니다."
     },
     {
      "q": "오프라인에서 작동하나요?",
      "a": "네, 인터넷 없이도 주문을 접수하고 결제를 처리할 수 있습니다."
     }
    ],
    "ctaH": "POS 시스템을 체험하세요"
   }
  }
 },
 {
  "key": "kitchen-display",
  "app": "kitchen",
  "slugs": {
   "uz": "oshxona-ekrani",
   "ru": "kuhonniy-ekran",
   "en": "kitchen-display",
   "ko": "kitchen-display"
  },
  "content": {
   "uz": {
    "title": "Oshxona ekrani — Buyurtmalarni tezda yetkazing",
    "desc": "Oshxona displey tizimi bilan buyurtmalarni stansiyalar bo'yicha avtomatik yo'naltiring. Taymerlar, ovozli signal va real vaqt holati — bitta ekranda.",
    "name": "Oshxona ekrani",
    "h1": "Oshxona displey tizimi — buyurtmalarni tezda yetkazing",
    "lead": "Buyurtmalar berilishi bilan kerakli stansiyaga avtomatik yo'naltiriladi. Oshpazlar tiketlarni yangidan tayyorgacha olib boradi — taymerlar va ovozli signal bilan.",
    "probH": "Nima uchun oshxona ekrani kerak?",
    "prob": [
     {
      "t": "Qo'lda yozish xatolari",
      "d": "Oshpazlar qo'lda yozilgan tiketlarni o'qiy olmaydi yoki chalkashtirib tushunadi. Natijada noto'g'ri taomlar tayyorlanadi."
     },
     {
      "t": "Kechikishlar",
      "d": "Tiketlar yo'qoladi yoki kechikadi. Mehmonlar uzoq kutadi va xizmat sifati pasayadi."
     },
     {
      "t": "Nazorat yo'q",
      "d": "Qaysi buyurtma tayyor, qaysi biri jarayonda — bunisi aniq ko'rinmaydi. Zal va oshxona o'rtasidachalkashlik bo'ladi."
     }
    ],
    "featH": "Octopos oshxona displeyi nima qiladi?",
    "featP": "Har bir buyurtma avtomatik ravishda to'g'ri stansiyaga yo'naltiriladi — grilga, salatga yoki barga.",
    "feat": [
     {
      "t": "Aqlli stansiya yo'naltirish",
      "d": "Elementlar sozlamalaringizga ko'ra avtomatik ravishda to'g'ri tayyorlash stansiyasiga yuboriladi. Har bir stansiya faqat o'z tiketlarini ko'radi."
     },
     {
      "t": "Tayyorlash taymerlari",
      "d": "O'rnatilgan taymerlar har bir buyurtmaning qancha vaqt kutayotganini kuzatadi. Kechikishlar darhol ko'rinadi."
     },
     {
      "t": "Ovozli ogohlantirishlar",
      "d": "Yangi buyurtmalar kelganda ovozli signal xodimlarni xabardor qiladi — ekranga qaramasdan ham bilishadi."
     },
     {
      "t": "Katta ekran uchun optimal",
      "d": "Kontrastli ko'rinish — hatto shovqinli oshxonada ham hammasi aniq ko'rinadi. Kunduzgi va tungi mavzu mavjud."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Stansiyalarni belgilang",
      "d": "Gril, salat, bar — har bir stansiya uchun ajratiladi."
     },
     {
      "t": "Planshetni o'rnating",
      "d": "Har qanday planshet yoki katta ekranda ishlaydi."
     },
     {
      "t": "Buyurtmalarni kuzating",
      "d": "Yangi buyurtmalar avtomatik paydo bo'ladi."
     }
    ],
    "faq": [
     {
      "q": "Oshxona displey nima uchun kerak?",
      "a": "Buyurtmalar stansiyalar bo'yicha avtomatik ajratiladi — oshpazlar navbat kutmaydi va xatoliklar kamayadi."
     },
     {
      "q": "Qaysi qurilmalarda ishlaydi?",
      "a": "Har qanday planshet yoki televizor — iOS, Android yoki veb-brauzer orqali."
     },
     {
      "q": "Boshqa tizimlar bilan bog'lanadimi?",
      "a": "Ha, Octopos POS tizimi bilan to'liq integratsiyalashgan."
     }
    ],
    "ctaH": "Oshxonangizni zamonaviylashtiring"
   },
   "ru": {
    "title": "Кухонный экран — Доставляйте заказы быстро",
    "desc": "Кухонный экран Octopos: автоматическая маршрутизация заказов по станциям, таймеры, звуковые сигналы и статус в реальном времени — всё на одном дисплее.",
    "name": "Кухонный экран",
    "h1": "Кухонный экран — доставляйте заказы быстро",
    "lead": "Заказы автоматически направляются на нужную станцию при поступлении. Повара ведут тикеты от начала до готовности — с таймерами и звуковыми сигналами.",
    "probH": "Зачем нужен кухонный экран?",
    "prob": [
     {
      "t": "Ошибки ручного ввода",
      "d": "Повара неправильно читают или понимают рукописные тикеты. В результате готовятся неправильные блюда."
     },
     {
      "t": "Задержки",
      "d": "Тикеты теряются или задерживаются. Гости ждут долго, и качество сервиса падает."
     },
     {
      "t": "Нет контроля",
      "d": "Какой заказ готов, какой в работе — непонятно. Между залом и кухней возникает хаос."
     }
    ],
    "featH": "Что делает кухонный экран Octopos?",
    "featP": "Каждый заказ автоматически направляется на нужную станцию — на гриль, в салаты или на бар.",
    "feat": [
     {
      "t": "Умная маршрутизация по станциям",
      "d": "Позиции автоматически отправляются на нужную станцию по вашим настройкам. Каждая станция видит только свои тикеты."
     },
     {
      "t": "Таймеры приготовления",
      "d": "Встроенные таймеры показывают, сколько ждёт каждый заказ. Задержки видны сразу."
     },
     {
      "t": "Звуковые оповещения",
      "d": "О новых заказах сотрудники узнают по звуку — даже не глядя на экран."
     },
     {
      "t": "Оптимизирован для большого экрана",
      "d": "Контрастный интерфейс — всё видно даже в шумной кухне. Светлая и тёмная темы."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Определите станции",
      "d": "Гриль, салаты, бар — каждая станция выделяется отдельно."
     },
     {
      "t": "Установите планшет",
      "d": "Работает на любом планшете или большом экране."
     },
     {
      "t": "Наблюдайте за заказами",
      "d": "Новые заказы появляются автоматически."
     }
    ],
    "faq": [
     {
      "q": "Зачем нужен кухонный экран?",
      "a": "Заказы автоматически распределяются по станциям — повара не ждут очереди иошибки."
     },
     {
      "q": "На каких устройствах работает?",
      "a": "Любой планшет или телевизор — iOS, Android или веб-браузер."
     },
     {
      "q": "Интегрируется с другими системами?",
      "a": "Да, полностью интегрирован с POS-системой Octopos."
     }
    ],
    "ctaH": "Модернизируйте кухню"
   },
   "en": {
    "title": "Kitchen Display — Deliver orders quickly",
    "desc": "Kitchen display system: auto-route orders by station, timers, audio alerts and real-time status — all on one screen.",
    "name": "Kitchen Display",
    "h1": "Kitchen Display — deliver orders quickly",
    "lead": "Auto-route orders by station, timers, audio alerts and real-time status — all on one screen.",
    "probH": "Why kitchens need a display",
    "prob": [
     {
      "t": "Paper tickets get lost",
      "d": "Paper tickets pile up, get misplaced or become unreadable — orders are delayed."
     },
     {
      "t": "No order prioritization",
      "d": "Without visibility, urgent orders wait behind regular ones — customers get frustrated."
     },
     {
      "t": "Kitchen bottlenecks",
      "d": "No real-time overview means bottlenecks go unnoticed until it's too late."
     }
    ],
    "featH": "Built for kitchen speed",
    "featP": "Every feature designed to keep your kitchen moving fast and accurate.",
    "feat": [
     {
      "t": "Auto station routing",
      "d": "Orders are automatically sent to the correct prep station — no manual sorting needed."
     },
     {
      "t": "Visual timers",
      "d": "Color-coded timers show how long each order has been waiting — catch delays early."
     },
     {
      "t": "Order priority",
      "d": "Highlight VIP or rush orders so the kitchen knows what to prepare first."
     },
     {
      "t": "Real-time status",
      "d": "See order status from anywhere — management and front-of-house stay in the loop."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Install a screen",
      "d": "Set up a tablet or monitor in your kitchen — no special hardware required."
     },
     {
      "t": "Connect to POS",
      "d": "Orders flow directly from the POS to the kitchen display automatically."
     },
     {
      "t": "Kitchen runs faster",
      "d": "Start processing orders faster with real-time routing and alerts."
     }
    ],
    "faq": [
     {
      "q": "How does the kitchen display work?",
      "a": "Orders appear on screen automatically, routed to the correct station."
     },
     {
      "q": "Can it replace paper tickets?",
      "a": "Yes, fully replaces paper tickets with a digital display."
     },
     {
      "q": "Does it have timers?",
      "a": "Yes, visual and audio timers alert when orders are taking too long."
     }
    ],
    "ctaH": "Upgrade your kitchen"
   },
   "ko": {
    "title": "주방 디스플레이 — 빠르게 주문을 전달",
    "desc": "주방 디스플레이 시스템: 스테이션별 자동 주문 라우팅, 타이머, 오디오 알림 및 실시간 상태 — 모두 하나의 화면에서.",
    "name": "주방 디스플레이",
    "h1": "주방 디스플레이 — 빠르게 주문을 전달하세요",
    "lead": "스테이션별 자동 주문 라우팅, 타이머, 오디오 알림 및 실시간 상태 — 모두 하나의 화면에서.",
    "probH": "주방에 디스플레이가 필요한 이유",
    "prob": [
     {
      "t": "종이 티켓 분실",
      "d": "종이 티켓이 쌓이고, 잘못 배치되거나 읽을 수 없게 되어 주문이 지연됩니다."
     },
     {
      "t": "주문 우선순위 부족",
      "d": "시야가 없으면 긴급 주문이 일반 주문 뒤에 대기하여 손님이 불만을 느낍니다."
     },
     {
      "t": "주방 병목",
      "d": "실시간 개요가 없으면 병목이 너무 늦게 발견됩니다."
     }
    ],
    "featH": "주방 속도를 위해 제작",
    "featP": "모든 기능이 주방이 빠르고 정확하게 운영되도록 설계되었습니다.",
    "feat": [
     {
      "t": "자동 스테이션 라우팅",
      "d": "주문이 올바른 조리 스테이션으로 자동 전송됩니다 — 수동 정렬이 필요 없습니다."
     },
     {
      "t": "시각적 타이머",
      "d": "색상으로 구분된 타이머가 각 주문의 대기 시간을 표시합니다 — 지연을 조기에 발견합니다."
     },
     {
      "t": "주문 우선순위",
      "d": "VIP 또는 긴급 주문을 강조하여 주방이 먼저 준비할 것을 알립니다."
     },
     {
      "t": "실시간 상태",
      "d": "어디에서든 주문 상태를 확인합니다 — 관리와 홀 직원이 항상 같은 정보를 봅니다."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "화면 설치",
      "d": "주방에 태블릿이나 모니터를 설정합니다 — 특별한 하드웨어가 필요 없습니다."
     },
     {
      "t": "POS 연결",
      "d": "주문이 POS에서 주방 디스플레이로 자동 전송됩니다."
     },
     {
      "t": "주방이 더 빠르게 운영됨",
      "d": "실시간 라우팅과 알림으로 더 빠르게 주문을 처리하기 시작합니다."
     }
    ],
    "faq": [
     {
      "q": "주방 디스플레이는 어떻게 작동하나요?",
      "a": "주문이 올바른 스테이션으로 자동 라우팅되어 화면에 표시됩니다."
     },
     {
      "q": "종이 티켓을 대체할 수 있나요?",
      "a": "네, 디지털 디스플레이로 종이 티켓을 완전히 대체합니다."
     },
     {
      "q": "타이머가 있나요?",
      "a": "네, 시각적 및 오디오 타이머로 주문이 너무 오래 걸리면 알림을 줍니다."
     }
    ],
    "ctaH": "주방을 업그레이드하세요"
   }
  }
 },
 {
  "key": "qr-menu",
  "app": "guest",
  "slugs": {
   "uz": "qr-menyu",
   "ru": "qr-menyu",
   "en": "qr-menu",
   "ko": "qr-menu"
  },
  "content": {
   "uz": {
    "title": "QR menyu — Mehmonlar o'zlariga buyurtma bersin",
    "desc": "QR kod orqali menyuni ko'rish va mustaqil buyurtma berish — ilova o'rnatmasdan. Ofitsiantlarni chaqirish va hisobni so'rash ham mumkin.",
    "name": "QR menyu",
    "h1": "QR menyu — mehmonlar o'zlariga buyurtma bersin",
    "lead": "Stoldagi QR-kodni skanerlang — jonli menyu, buyurtma berish, ofitsiantni chaqirish va hisobni so'rash. Ilova o'rnatmasdan, telefon brauzerida.",
    "probH": "Nima uchun QR menyu kerak?",
    "prob": [
     {
      "t": "Ofitsiantlar band",
      "d": "Har bir stolga borib menyu ko'rsatish va buyurtma olish vaqtni oladi. Natijada xizmat sekinlashadi."
     },
     {
      "t": "Qo'lda kiritish xatolari",
      "d": "Ofitsiant noto'g'ri yozadi yoki tushunmaydi. Buyurtma xatosi bilan yetib keladi."
     },
     {
      "t": "Mehmonlar kutadi",
      "d": "Ofitsiantni chaqirish uchun qoqish kerak. Kutish vaqti oshadi va xizmat sifati tushadi."
     }
    ],
    "featH": "Octopos QR menyu nima qiladi?",
    "featP": "Mehmonlar stoldagi QR-kodni skanerlab, jonli menyuni ko'radi, buyurtma beradi va hisobini so'raydi.",
    "feat": [
     {
      "t": "Ilovasiz ishlaydi",
      "d": "Telefon brauzerida ochiladi — iOS yoki Android farqi yo'q. Ilova yuklab olish shart emas."
     },
     {
      "t": "Jonli menyu",
      "d": "Narxlar va mavjudlik real vaqtda yangilanadi. Tugagan taomlarni ko'rsatishingiz mumkin."
     },
     {
      "t": "Mustaqil buyurtma",
      "d": "Mehmonlar o'zlari buyurtma beradi — to'g'ridan-to'g'ri oshxonaga. Ofitsiantsiz ham ishlaydi."
     },
     {
      "t": "Oflayn PWA",
      "d": "Internet uzilsa ham ishlaydi. Ulanish tiklanganda avtomatik sinxronlanadi."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Menyuni kiriting",
      "d": "Taomlar, narxlar va tarkibni bir marta kiritasiz."
     },
     {
      "t": "QR-kodlarni chiqaring",
      "d": "Har bir stolga alohida QR-kod — avtomatik yaratiladi."
     },
     {
      "t": "Buyurtmalarni qabul qiling",
      "d": "Buyurtmalar to'g'ridan-to'g'ri oshxonaga tushadi."
     }
    ],
    "faq": [
     {
      "q": "QR menyu qanday ishlaydi?",
      "a": "Mehmonlar telefon kamerasi orqali QR skanerlaydi — menyu ochiladi va to'g'ridan buyurtma berish mumkin."
     },
     {
      "q": "Internet kerakmi?",
      "a": "Ha, mehmonlar telefonda internet bo'lishi kerak. Wi-Fi parolini stolga joylashtirish mumkin."
     },
     {
      "q": "Menyuni o'zgartirish osonmi?",
      "a": "Ha, boshqaruv paneldan istalgan vaqtda menyu va narxlarni yangilash mumkin."
     }
    ],
    "ctaH": "Menyuni raqamlashtiring"
   },
   "ru": {
    "title": "QR меню — Гости заказывают сами",
    "desc": "QR-код для меню: просмотр, самостоятельный заказ, вызов официанта и запрос счёта — без установки приложения, прямо в браузере телефона.",
    "name": "QR меню",
    "h1": "QR меню — гости заказывают сами",
    "lead": "Сканируйте QR-код за столом — живое меню, заказ, вызов официанта и запрос счёта. Без установки приложения, прямо в браузере телефона.",
    "probH": "Зачем нужно QR меню?",
    "prob": [
     {
      "t": "Официанты заняты",
      "d": "Ходить к каждому столу, показывать меню и принимать заказы — занимает время. Сервис замедляется."
     },
     {
      "t": "Ошибки при записи",
      "d": "Официант неправильно записывает или понимает заказ. Блюдо приходит с ошибкой."
     },
     {
      "t": "Гости ждут",
      "d": "Чтобы позвать официанта, нужно махать рукой. Время ожидания растёт, качество падает."
     }
    ],
    "featH": "Что делает QR меню Octopos?",
    "featP": "Гость сканирует QR-код за столом — видит живое меню, заказывает и запрашивает счёт.",
    "feat": [
     {
      "t": "Работает без приложения",
      "d": "Открывается в браузере телефона — iOS или Android, без разницы. Скачивать ничего не нужно."
     },
     {
      "t": "Живое меню",
      "d": "Цены и наличие обновляются в реальном времени. Можно скрыть закончившиеся позиции."
     },
     {
      "t": "Самостоятельный заказ",
      "d": "Гости заказывают сами — напрямую на кухню. Может работать и без официанта."
     },
     {
      "t": "Офлайн PWA",
      "d": "Работает при обрыве интернета. Синхронизируется при восстановлении связи."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Внесите меню",
      "d": "Блюда, цены и состав — вводите один раз."
     },
     {
      "t": "Распечатайте QR-коды",
      "d": "Для каждого стола свой QR-код — создаётся автоматически."
     },
     {
      "t": "Принимайте заказы",
      "d": "Заказы поступают прямо на кухню."
     }
    ],
    "faq": [
     {
      "q": "Как работает QR меню?",
      "a": "Гость сканирует QR-код камерой телефона — открывается меню и можно заказать сразу."
     },
     {
      "q": "Нужен ли интернет?",
      "a": "Да, у гостя должен быть интернет на телефоне."
     },
     {
      "q": "Можно ли менять меню?",
      "a": "Да, из панели управления можно обновлять меню и цены в любое время."
     }
    ],
    "ctaH": "Оцифруйте меню"
   },
   "en": {
    "title": "QR Menu — Let guests order themselves",
    "desc": "Scan a QR code to view the menu and order independently — no app download required. Call a waiter and request the bill too.",
    "name": "QR Menu",
    "h1": "QR Menu — let guests order themselves",
    "lead": "Scan the QR code on the table — live menu, ordering, calling a waiter and requesting the bill. No app download, right in the phone browser.",
    "probH": "Why do you need a QR menu?",
    "prob": [
     {
      "t": "Waiters are busy",
      "d": "Walking to every table to show menus and take orders takes time. Service slows down."
     },
     {
      "t": "Manual entry errors",
      "d": "Waiters mishear or write down wrong. Orders arrive with mistakes."
     },
     {
      "t": "Guests wait",
      "d": "Flagging down a waiter takes time. Wait times increase and service quality drops."
     }
    ],
    "featH": "What Octopos QR menu does",
    "featP": "Guests scan the QR code on the table, see the live menu, order and request the bill.",
    "feat": [
     {
      "t": "Works without an app",
      "d": "Opens in the phone browser — iOS or Android, no difference. No app download required."
     },
     {
      "t": "Live menu",
      "d": "Prices and availability update in real time. You can hide sold-out items."
     },
     {
      "t": "Self-ordering",
      "d": "Guests place orders themselves — straight to the kitchen. Works even without a waiter."
     },
     {
      "t": "Offline PWA",
      "d": "Works even when internet drops. Syncs automatically when connection returns."
     }
    ],
    "stepsH": "Get started in 3 steps",
    "steps": [
     {
      "t": "Add your menu",
      "d": "Add dishes, prices and ingredients once."
     },
     {
      "t": "Print QR codes",
      "d": "A unique QR code for each table — auto-generated."
     },
     {
      "t": "Start receiving orders",
      "d": "Orders go straight to the kitchen."
     }
    ],
    "faq": [
     {
      "q": "How does QR menu work?",
      "a": "Guests scan with their phone camera — the menu opens and they can order directly."
     },
     {
      "q": "Is internet required?",
      "a": "Yes, guests need internet on their phone. You can place the Wi-Fi password on the table."
     },
     {
      "q": "Is it easy to update the menu?",
      "a": "Yes, update menu items and prices anytime from the management panel."
     }
    ],
    "ctaH": "Digitize your menu"
   },
   "ko": {
    "title": "QR 메뉴 — 게스트가 직접 주문하게 하세요",
    "desc": "QR 코드를 스캔하여 메뉴를 보고 독립적으로 주문하세요 — 앱 설치 불필요. 웨이터 호출 및 계산서 요청도 가능.",
    "name": "QR 메뉴",
    "h1": "QR 메뉴 — 게스트가 직접 주문하게 하세요",
    "lead": "테이블의 QR 코드를 스캔하세요 — 실시간 메뉴, 주문, 웨이터 호출 및 계산서 요청. 앱 설치 없이, 휴대폰 브라우저에서 바로.",
    "probH": "QR 메뉴가 필요한 이유",
    "prob": [
     {
      "t": "웨이터 바쁨",
      "d": "피크 시간에 웨이터가 모든 테이블에 동시에 도착할 수 없습니다. 고객이 기다리게 됩니다."
     },
     {
      "t": "수기 입력 오류",
      "d": "웨이터가 수기로 주문을 입력하면 잘못된 항목이나 수량 오류가 발생할 수 있습니다."
     },
     {
      "t": "게스트 대기",
      "d": "메뉴를 보고 주문하기까지 기다리는 시간이 길어지면 고객 만족도가 떨어집니다."
     }
    ],
    "featH": "Octopos QR 메뉴의 기능",
    "featP": "모든 것이 자동으로 처리됩니다 — 서버 부하를 줄이고 정확도를 높이세요.",
    "feat": [
     {
      "t": "앱 없이 작동",
      "d": "게스트는 휴대폰 브라우저에서 바로 메뉴를 보고 주문할 수 있습니다. 앱 설치 불필요."
     },
     {
      "t": "실시간 메뉴",
      "d": "메뉴와 가격을 업데이트하면 즉시 모든 테이블에 반영됩니다. 종이 메뉴 인쇄 불필요."
     },
     {
      "t": "자기 주문",
      "d": "게스트가 원하는 항목을 선택하고 직접 주문합니다. 웨이터의 개입 없이."
     },
     {
      "t": "오프라인 PWA",
      "d": "인터넷 연결이 끊겨도 기본 메뉴는 계속 작동합니다. PWA 기술로 안정적."
     }
    ],
    "stepsH": "3단계로 시작하세요",
    "steps": [
     {
      "t": "메뉴 등록",
      "d": "관리 패널에서 메뉴와 가격을 등록하세요."
     },
     {
      "t": "QR 코드 인쇄",
      "d": "테이블마다 QR 코드를 생성하고 인쇄하세요."
     },
     {
      "t": "주문 접수 시작",
      "d": "게스트가 스캔하면 주문이 자동으로 접수됩니다."
     }
    ],
    "faq": [
     {
      "q": "QR 메뉴는 어떻게 작동하나요?",
      "a": "게스트가 휴대폰 카메라로 스캔하면 — 메뉴가 열리고 직접 주문할 수 있습니다."
     },
     {
      "q": "인터넷이 필요한가요?",
      "a": "네, 게스트의 휴대폰에 인터넷이 필요합니다. 테이블에 Wi-Fi 비밀번호를 놓을 수 있습니다."
     },
     {
      "q": "메뉴를 쉽게 업데이트할 수 있나요?",
      "a": "네, 관리 패널에서 언제든지 메뉴와 가격을 업데이트할 수 있습니다."
     }
    ],
    "ctaH": "메뉴를 디지털화하세요"
   }
  }
 },
 {
  "key": "inventory-tracking",
  "app": "dash",
  "slugs": {
   "uz": "ombor-hisobi",
   "ru": "skladskoy-uchyot",
   "en": "inventory-tracking",
   "ko": "inventory-tracking"
  },
  "content": {
   "uz": {
    "title": "Ombor hisobi — Qoldiqlarni real vaqtda kuzating",
    "desc": "Avtomatik ombor hisobi: har bir savdo paytida mahsulotlar avtomatik hisobdan chiqariladi. Qoldiqlar real vaqtda yangilanadi — qo'lda hisob-kitob shart emas.",
    "name": "Ombor hisobi",
    "h1": "Ombor hisobi — qoldiqlarni real vaqtda kuzating",
    "lead": "Har bir savdo paytida texnologik xaritalar bo'yicha mahsulotlarni avtomatik hisobdan chiqarish. Ombordagi qoldiq doimo real vaqtga mos — qo'lda hisob-kitob shart emas.",
    "probH": "Nima uchun ombor hisobi muhim?",
    "prob": [
     {
      "t": "Qo'lda hisob-kitob",
      "d": "Oshpazlar va ofitsiantlar qo'lda yozadi. Xatolar to'planadi va aniqlash qiyin."
     },
     {
      "t": "Mahsulot tugashi",
      "d": "Qoldiq nazorat qilinmasa, asosiy mahsulotlar tugab qolishi mumkin — va bu allaqachon kech."
     },
     {
      "t": "Sarflarni nazorat qilish qiyin",
      "d": "Qancha sarflanayotgani va qancha qoldig'i aniq ko'rinmasa, foyda hisoblash qiyin."
     }
    ],
    "featH": "Octopos ombor hisobi nima qiladi?",
    "featP": "Har bir buyurtma bilan ombordagi qoldiqlar avtomatik yangilanadi — hech qanday qo'lda kiritish shart emas.",
    "feat": [
     {
      "t": "Avtomatik hisobdan chiqarish",
      "d": "Texnologik xaritalar bo'yicha har bir mahsulot avtomatik ravishda hisobdan chiqariladi."
     },
     {
      "t": "Zaxira ogohlantirishlari",
      "d": "Asosiy ta'minotlar tugamasdan oldin avtomatik xabardorlik olishingiz mumkin."
     },
     {
      "t": "Real vaqtli qoldiqlar",
      "d": "Har bir savdo bilan qoldiqlar yangilanadi. Istalgan vaqtda aniq miqdorni bilishingiz mumkin."
     },
     {
      "t": "Batafsil hisobotlar",
      "d": "Qancha sarflangan, qancha qoldi — kun, hafta yoki oy bo'yicha tahlil."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Mahsulotlarni kiriting",
      "d": "Barcha mahsulotlar va ularning narxlarini bir marta kiritasiz."
     },
     {
      "t": "Texnologik xaritalarni tuzing",
      "d": "Har bir taom uchun qanday mahsulotlar kerakligini belgilaysiz."
     },
     {
      "t": "Qoldiqlarni kuzating",
      "d": "Savdo bo'lganda qoldiqlar avtomatik yangilanadi."
     }
    ],
    "faq": [
     {
      "q": "Ombor hisobi avtomatik ishlaydimi?",
      "a": "Ha, har bir sotilgan mahsulot avtomatik ravishda ombordan ayiriladi."
     },
     {
      "q": "Kam qolganda xabardor qiladimi?",
      "a": "Ha, sozlangan chegaradan pastga tushganda tizim darhol ogohlantirish beradi."
     },
     {
      "q": "Qo'lda kiritish kerakmi?",
      "a": "Faqat boshlang'ich qoldiqlarni. Keyin tizim avtomatik hisoblaydi."
     }
    ],
    "ctaH": "Omborni nazoratga oling"
   },
   "ru": {
    "title": "Складской учёт — Отслеживайте остатки в реальном времени",
    "desc": "Автоматический складской учёт: при каждой продаже списание ингредиентов по техкартам. Остатки обновляются в реальном времени — ручной подсчёт не нужен.",
    "name": "Складской учёт",
    "h1": "Складской учёт — отслеживайте остатки в реальном времени",
    "lead": "Автоматическое списание ингредиентов по техкартам при каждой продаже. Остатки на складе всегда соответствуют реальности — ручной подсчёт не нужен.",
    "probH": "Зачем нужен складской учёт?",
    "prob": [
     {
      "t": "Ручной подсчёт",
      "d": "Повара и официанты записывают вручную. Ошибки накапливаются, и их сложно выявить."
     },
     {
      "t": "Заканчиваются продукты",
      "d": "Без контроля остатков ключевые продукты заканчиваются — и эточасто уже слишком поздно."
     },
     {
      "t": "Сложно контролировать расходы",
      "d": "Если непонятно, сколько тратится и сколько остаётся, прибыль посчитать трудно."
     }
    ],
    "featH": "Что делает складской учёт Octopos?",
    "featP": "С каждым заказом остатки на складе обновляются автоматически — без ручного ввода.",
    "feat": [
     {
      "t": "Автоматическое списание",
      "d": "По техкартам каждый ингредиент списывается автоматически при продаже блюда."
     },
     {
      "t": "Оповещения о запасах",
      "d": "Настройте пороги — система уведомит, когда ключевые продукты заканчиваются."
     },
     {
      "t": "Остатки в реальном времени",
      "d": "Каждая продажа обновляет остатки. Точное количество доступно в любой момент."
     },
     {
      "t": "Подробные отчёты",
      "d": "Сколько потрачено, сколько осталось — аналитика за день, неделю или месяц."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Внесите продукты",
      "d": "Все продукты и их цены вводятся один раз."
     },
     {
      "t": "Составьте техкарты",
      "d": "Для каждого блюда определяете нужные ингредиенты."
     },
     {
      "t": "Отслеживайте остатки",
      "d": "При продаже остатки обновляются автоматически."
     }
    ],
    "faq": [
     {
      "q": "Складской учёт работает автоматически?",
      "a": "Да, каждый проданный товар автоматически списывается со склада."
     },
     {
      "q": "Уведомляет ли система о малых остатках?",
      "a": "Да, при падении ниже настроенного порога система немедленно уведомляет."
     },
     {
      "q": "Нужно ли вводить вручную?",
      "a": "Только начальные остатки. Дальше система считает автоматически."
     }
    ],
    "ctaH": "Возьмите склад под контроль"
   },
   "en": {
    "title": "Inventory Tracking — Monitor stock levels in real time",
    "desc": "Automatic inventory: with every sale, ingredients are deducted by recipe. Stock updates in real time — no manual counting needed.",
    "name": "Inventory Tracking",
    "h1": "Inventory Tracking — monitor stock levels in real time",
    "lead": "Automatic inventory: with every sale, ingredients are deducted by recipe. Stock updates in real time — no manual counting needed.",
    "probH": "Why inventory tracking matters",
    "prob": [
     {
      "t": "Manual counting errors",
      "d": "Paper counts and spreadsheets lead to mistakes — you never truly know your stock levels."
     },
     {
      "t": "Stockouts and waste",
      "d": "Running out of ingredients or over-ordering — both hurt your bottom line."
     },
     {
      "t": "No real-time visibility",
      "d": "Without live data, you can't make informed purchasing or menu decisions."
     }
    ],
    "featH": "Automatic inventory control",
    "featP": "Every sale automatically updates your stock — no manual work required.",
    "feat": [
     {
      "t": "Auto deduction by recipe",
      "d": "Each sale automatically deducts the exact ingredients used — accurate and effortless."
     },
     {
      "t": "Low-stock alerts",
      "d": "Get notified before you run out — never miss an order due to missing ingredients."
     },
     {
      "t": "Waste tracking",
      "d": "Track discarded or spoiled items — identify waste patterns and reduce costs."
     },
     {
      "t": "Multi-location support",
      "d": "Manage inventory across all locations from a single dashboard — complete visibility."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Add your ingredients",
      "d": "Enter your ingredients with purchase prices and units of measure."
     },
     {
      "t": "Link to recipes",
      "d": "Connect each menu item to its ingredients — deductions happen automatically."
     },
     {
      "t": "Track stock automatically",
      "d": "Watch your stock levels update live as you sell."
     }
    ],
    "faq": [
     {
      "q": "How does automatic inventory work?",
      "a": "Each sale deducts ingredients based on recipes. Stock levels update live."
     },
     {
      "q": "Can I set low-stock alerts?",
      "a": "Yes, get notified when ingredients fall below your threshold."
     },
     {
      "q": "Does it handle multiple locations?",
      "a": "Yes, track inventory across all locations from one dashboard."
     }
    ],
    "ctaH": "Take control of your inventory"
   },
   "ko": {
    "title": "재고 추적 — 재고 수준을 실시간으로 모니터링",
    "desc": "자동 재고 관리: 판매될 때마다 레시피별로 재료가 차감됩니다. 재고가 실시간으로 업데이트됩니다 — 수기 계산이 필요 없습니다.",
    "name": "재고 추적",
    "h1": "재고 추적 — 재고 수준을 실시간으로 모니터링하세요",
    "lead": "자동 재고 관리: 판매될 때마다 레시피별로 재료가 차감됩니다. 재고가 실시간으로 업데이트됩니다 — 수기 계산이 필요 없습니다.",
    "probH": "재고 추적이 중요한 이유",
    "prob": [
     {
      "t": "수기 계산 오류",
      "d": "종이 재고 확인과 스프레드시트는 실수로 이어집니다 — 실제 재고 수준을 결코 알 수 없습니다."
     },
     {
      "t": "품절 및 낭비",
      "d": "재료가 부족하거나 과도하게 주문되면 수익에 영향을 미칩니다."
     },
     {
      "t": "실시간 시야 부족",
      "d": "실시간 데이터가 없으면 정보에 입각한 구매 또는 메뉴 결정을 할 수 없습니다."
     }
    ],
    "featH": "자동화로 재고를 통제하세요",
    "featP": "모든 판매가 자동으로 재고를 업데이트합니다 — 수동 작업이 필요 없습니다.",
    "feat": [
     {
      "t": "레시피별 자동 차감",
      "d": "각 판매가 사용된 정확한 재료를 자동으로 차감합니다 — 정확하고 간편합니다."
     },
     {
      "t": "재고 부족 알림",
      "d": "부족하기 전에 알림을 받습니다 — 재료 부족으로 주문을 놓치지 않습니다."
     },
     {
      "t": "낭비 추적",
      "d": "폐기되거나 상한 품목을 추적합니다 — 낭비 패턴을 파악하고 비용을 줄입니다."
     },
     {
      "t": "다지점 지원",
      "d": "하나의 대시보드에서 모든 지점의 재고를 관리합니다 — 완전한 시야를 확보합니다."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "재료 추가",
      "d": "구매 가격과 측정 단위와 함께 재료를 입력합니다."
     },
     {
      "t": "레시피 연결",
      "d": "각 메뉴 항목을 재료와 연결합니다 — 차감이 자동으로 이루어집니다."
     },
     {
      "t": "자동으로 재고 추적",
      "d": "판매할 때 재고 수준이 실시간으로 업데이트되는 것을 확인합니다."
     }
    ],
    "faq": [
     {
      "q": "자동 재고 관리는 어떻게 작동하나요?",
      "a": "각 판매 시 레시피에 따라 재료가 차감됩니다. 재고 수준이 실시간으로 업데이트됩니다."
     },
     {
      "q": "재고 부족 알림을 설정할 수 있나요?",
      "a": "네, 재료가 임계값 이하로 떨어지면 알림을 받을 수 있습니다."
     },
     {
      "q": "다지점을 지원하나요?",
      "a": "네, 하나의 대시보드에서 모든 지점의 재고를 추적할 수 있습니다."
     }
    ],
    "ctaH": "재고를 통제하세요"
   }
  }
 },
 {
  "key": "recipe-costing",
  "app": "dash",
  "slugs": {
   "uz": "taom-kalkulyatsiyasi",
   "ru": "kalkulyatsiya-blud",
   "en": "recipe-costing",
   "ko": "recipe-costing"
  },
  "content": {
   "uz": {
    "title": "Taom kalkulyatsiyasi — Aniq narx va nazorat",
    "desc": "Avtomatik taom kalkulyatsiyasi: aniq narx, retseptlar, foydalilik tahlili va ombor bilan bog'lanish — hammasi bitta joyda.",
    "name": "Taom kalkulyatsiyasi",
    "h1": "Taom kalkulyatsiyasi — aniq narx va nazorat",
    "lead": "Har bir taomning aniq narxini bilib, ombordagi har bir mahsulotni nazorat qiling. Avtomatik kalkulyatsiya, retseptlar va foydalilik tahlili.",
    "probH": "Nima uchun taom kalkulyatsiyasi kerak?",
    "prob": [
     {
      "t": "Aniq retseptlar yo'q",
      "d": "Oshpaz ko'z bilan tayyorlaydi — har bir taomning narxi turlicha chiqadi."
     },
     {
      "t": "Narxlar noma'lum",
      "d": "Haqiqiy narx hisoblanmagan — to'g'ri narx qo'yib bo'lmaydi."
     },
     {
      "t": "Sarf nazoratsiz",
      "d": "Oshpaz keragidan ko'p ingredient ishlatadi — haqiqiy sarf kuzatilmaydi."
     }
    ],
    "featH": "Octopos taom kalkulyatsiyasi nima qiladi?",
    "featP": "Aniq retseptlar va dolzarb narxlar asosida avtomatik kalkulyatsiya.",
    "feat": [
     {
      "t": "Avtomatik kalkulyatsiya",
      "d": "Ingredientlarni kiriting — tizim har bir taomning narxini avtomatik hisoblaydi."
     },
     {
      "t": "Retseptlar",
      "d": "Retseptlar tizimda qayd etiladi — oshpazlar doimo bir xil standartda tayyorlaydi."
     },
     {
      "t": "Foydalilik tahlili",
      "d": "Qaysi taom ko'proq foyda keltiradi, qaysi birini qayta ko'rib chiqish kerak — doimo bilasiz."
     },
     {
      "t": "Ombor bilan bog'lanish",
      "d": "Sotilgan taom avtomatik ombordagi ingredientlarni ayiradi — ikki marta hisob-kitob kerak emas."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Retseptlarni kiriting",
      "d": "Har bir taom uchun ingredientlar va miqdorni qo'shing."
     },
     {
      "t": "Tizim narxni hisoblaydi",
      "d": "Haqiqiy narx va foydalilik avtomatik aniqlanadi."
     },
     {
      "t": "Menyuni optimallashtiring",
      "d": "Narxlarni tuzating yoki zararli taomlarni foydali bilan almashtiring."
     }
    ],
    "faq": [
     {
      "q": "Taom narxi qanday hisoblanadi?",
      "a": "Har bir taomning ingredientlari kiritiladi — tizim avtomatik narx chiqaradi."
     },
     {
      "q": "Narxlarni qachon yangilash kerak?",
      "a": "Mahsulot narxlari o'zgarganda tizim avtomatik yangilaydi."
     },
     {
      "q": "Foydalilikni qanday ko'rish mumkin?",
      "a": "Har bir taomning foyda foizini dashboard da ko'rish mumkin."
     }
    ],
    "ctaH": "Har bir taomning aniq narxini bilsangizmi?"
   },
   "ru": {
    "title": "Калькуляция блюд — Точная себестоимость и контроль",
    "desc": "Автоматическая калькуляция блюд: точная себестоимость, техкарты, анализ рентабельности и связь со складом — всё в одном месте.",
    "name": "Калькуляция блюд",
    "h1": "Калькуляция блюд — точная себестоимость и контроль",
    "lead": "Автоматическая калькуляция блюд: точная себестоимость, техкарты, анализ рентабельности и связь со складом — всё в одном месте.",
    "probH": "Почему нужна калькуляция блюд?",
    "prob": [
     {
      "t": "Нет точных рецептов",
      "d": "Повар готовит на глаз — каждое блюдо получается разным по себестоимости."
     },
     {
      "t": "Цены неизвестны",
      "d": "Реальная стоимость блюда не рассчитана — невозможно установить правильную наценку."
     },
     {
      "t": "Расход сырья не контролируется",
      "d": "Повар использует больше ингредиентов, чем нужно — реальный расход не отслеживается."
     }
    ],
    "featH": "Что делает калькуляция блюд Octopos?",
    "featP": "Автоматическая калькуляция на основе точных рецептов и актуальных цен.",
    "feat": [
     {
      "t": "Автоматическая калькуляция",
      "d": "Введите ингредиенты — система автоматически рассчитает стоимость каждого блюда."
     },
     {
      "t": "Техкарты",
      "d": "Рецепты фиксируются в системе — повара всегда готовят по единому стандарту."
     },
     {
      "t": "Анализ рентабельности",
      "d": "Какое блюдо приносит больше прибыли, а какое стоит пересмотреть — вы всегда знаете."
     },
     {
      "t": "Связь со складом",
      "d": "Проданное блюдо автоматически списывает ингредиенты со склада — двойной учёт не нужен."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Введите рецепты",
      "d": "Добавьте ингредиенты и количество для каждого блюда."
     },
     {
      "t": "Система считает стоимость",
      "d": "Автоматически рассчитывается реальная себестоимость и рентабельность."
     },
     {
      "t": "Оптимизируйте меню",
      "d": "Скорректируйте цены или замените убыточные блюда на прибыльные."
     }
    ],
    "faq": [
     {
      "q": "Как рассчитывается стоимость блюда?",
      "a": "Вводятся ингредиенты — система автоматически считает цену."
     },
     {
      "q": "Когда нужно обновлять цены?",
      "a": "При изменении цен на продукты — система обновит автоматически."
     },
     {
      "q": "Можно ли увидеть рентабельность?",
      "a": "Да, процент прибыли каждого блюда виден в дашборде."
     }
    ],
    "ctaH": "Хотите знать точную стоимость каждого блюда?"
   },
   "en": {
    "title": "Recipe Costing — Accurate cost and control",
    "desc": "Automatic recipe costing: accurate pricing, tech cards, profitability analysis and inventory integration — all in one place.",
    "name": "Recipe Costing",
    "h1": "Recipe Costing — accurate cost and control",
    "lead": "Automatic recipe costing: accurate pricing, tech cards, profitability analysis and inventory integration — all in one place.",
    "probH": "Why recipe costing matters",
    "prob": [
     {
      "t": "Unknown food costs",
      "d": "The chef cooks by eye — the cost of each dish varies every time."
     },
     {
      "t": "Profit margin guesswork",
      "d": "True cost hasn't been calculated — you can't set the right price."
     },
     {
      "t": "Waste and over-portioning",
      "d": "The chef uses more ingredients than needed — actual consumption isn't tracked."
     }
    ],
    "featH": "Know your true costs",
    "featP": "Automatic costing based on accurate recipes and up-to-date prices.",
    "feat": [
     {
      "t": "Auto cost calculation",
      "d": "Enter ingredients — the system automatically calculates the cost of each dish."
     },
     {
      "t": "Tech cards",
      "d": "Recipes are recorded in the system — chefs always prepare to the same standard."
     },
     {
      "t": "Profitability analysis",
      "d": "Which dish brings more profit, which needs reworking — you always know."
     },
     {
      "t": "Inventory link",
      "d": "Sold dishes automatically deduct ingredients from inventory — no double counting needed."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Add recipes",
      "d": "Add ingredients and quantities for each dish."
     },
     {
      "t": "Link ingredients",
      "d": "True cost and profitability are determined automatically."
     },
     {
      "t": "Track costs in real time",
      "d": "Adjust prices or replace unprofitable dishes with profitable ones."
     }
    ],
    "faq": [
     {
      "q": "How does recipe costing work?",
      "a": "Each dish is linked to ingredients with quantities. The system calculates cost automatically."
     },
     {
      "q": "Can I update prices easily?",
      "a": "Yes, change ingredient prices and all dish costs update instantly."
     },
     {
      "q": "Does it connect to inventory?",
      "a": "Yes, ingredient usage is deducted from inventory with each sale."
     }
    ],
    "ctaH": "Start recipe costing"
   },
   "ko": {
    "title": "레시피 원가 계산 — 정확한 원가와 통제",
    "desc": "자동 레시피 원가 계산: 정확한 가격 책정, 레시피 카드, 수익성 분석 및 재고 연동 — 모두 한 곳에서.",
    "name": "레시피 원가 계산",
    "h1": "레시피 원가 계산 — 정확한 원가와 통제",
    "lead": "자동 레시피 원가 계산: 정확한 가격 책정, 레시피 카드, 수익성 분석 및 재고 연동 — 모두 한 곳에서.",
    "probH": "레시피 원가 계산이 중요한 이유",
    "prob": [
     {
      "t": "알려지지 않은 식재료비",
      "d": "셰프가 눈대중으로 요리합니다 — 각 요리의 원가가 매번 달라집니다."
     },
     {
      "t": "마진 추측",
      "d": "실제 원가가 계산되지 않았습니다 — 올바른 가격을 설정할 수 없습니다."
     },
     {
      "t": "낭비와 과다 배분",
      "d": "셰프가 필요 이상의 재료를 사용합니다 — 실제 소비량이 추적되지 않습니다."
     }
    ],
    "featH": "실제 원가를 파악하세요",
    "featP": "정확한 레시피와 최신 가격에 기반한 자동 원가 계산.",
    "feat": [
     {
      "t": "자동 원가 계산",
      "d": "재료를 입력하면 시스템이 각 요리의 원가를 자동으로 계산합니다."
     },
     {
      "t": "레시피 카드",
      "d": "레시피가 시스템에 기록됩니다 — 셰프가 항상 동일한 기준으로 조리합니다."
     },
     {
      "t": "수익성 분석",
      "d": "어떤 요리가 더 많은 이익을 가져오고 어떤 요리가 재작업이 필요한지 항상 알고 있습니다."
     },
     {
      "t": "재고 연동",
      "d": "팔린 요리가 자동으로 재고에서 재료를 차감합니다 — 이중 계산이 필요 없습니다."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "레시피 등록",
      "d": "각 요리에 재료와 수량을 추가합니다."
     },
     {
      "t": "재료 연결",
      "d": "실제 원가와 수익성이 자동으로 결정됩니다."
     },
     {
      "t": "실시간 원가 추적",
      "d": "가격을 조정하거나 수익성 없는 요리를 수익성 있는 요리로 교체합니다."
     }
    ],
    "faq": [
     {
      "q": "레시피 원가 계산은 어떻게 작동하나요?",
      "a": "각 요리는 재료와 함께 연결됩니다. 시스템이 자동으로 원가를 계산합니다."
     },
     {
      "q": "가격을 쉽게 업데이트할 수 있나요?",
      "a": "네, 재료 가격을 변경하면 모든 요리 원가가 즉시 업데이트됩니다."
     },
     {
      "q": "재고와 연동되나요?",
      "a": "네, 각 판매 시 재료 사용량이 재고에서 차감됩니다."
     }
    ],
    "ctaH": "레시피 원가 계산을 시작하세요"
   }
  }
 },
 {
  "key": "restaurant-reports",
  "app": "dash",
  "slugs": {
   "uz": "restoran-hisobotlari",
   "ru": "otchyoty-restorana",
   "en": "restaurant-reports",
   "ko": "restaurant-reports"
  },
  "content": {
   "uz": {
    "title": "Restoran hisobotlari — Daromad va foydani real vaqtda ko'ring",
    "desc": "Daromad tendentsiyalari, eng ko'p sotiladigan mahsulotlar va soatlik samaradorlikni ko'rsatuvchi real vaqt boshqaruv panellariga kiring.",
    "name": "Restoran hisobotlari",
    "h1": "Restoran hisobotlari — daromad va foydani real vaqtda ko'ring",
    "lead": "Daromad tendentsiyalari, eng ko'p sotiladigan mahsulotlar va soatlik samaradorlik — bitta bosing. Kun, hafta yoki oy bo'yicha tahlil.",
    "probH": "Nima uchun hisobotlar kerak?",
    "prob": [
     {
      "t": "Ko'rinish yo'q",
      "d": "Qancha daromad, qancha xarajat — aniq bilish qiyin. Qarorlar taxmin asosida qabul qilinadi."
     },
     {
      "t": "Qo'lda hisob-kitob",
      "d": "Excel yoki qog'ozda hisob-kitob qilish vaqt oladi va xatolarga moyil."
     },
     {
      "t": "Kechikkan ma'lumot",
      "d": "Kun oxiridagi hisobot allaqachon kech bo'lishi mumkin — muammolarni oldindan ko'rish qiyin."
     }
    ],
    "featH": "Octopos hisobotlari nima beradi?",
    "featP": "Barcha ma'lumotlar real vaqtda yig'iladi — istalgan vaqtda tahlil qilishingiz mumkin.",
    "feat": [
     {
      "t": "Real vaqtli daromad",
      "d": "Har bir buyurtma bilan daromad avtomatik qayd etiladi — kechiktirmasdan."
     },
     {
      "t": "Eng yaxshi sotilganlar",
      "d": "Qaysi taomlar ko'proq sotilayotganini bilib, menyuni optimallashtiring."
     },
     {
      "t": "Soatlik samaradorlik",
      "d": "Qaysi soatda eng ko'p buyurtma kelishini bilib, xodimlarni rejalashtiring."
     },
     {
      "t": "Rolga asoslangan kirish",
      "d": "Har bir xodim faqat o'ziga tegishli ma'lumotlarni ko'radi."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Ma'lumotlarni kiriting",
      "d": "Menyu va narxlarni sozlang."
     },
     {
      "t": "Savdolarni boshlang",
      "d": "Har bir buyurtma avtomatik qayd etiladi."
     },
     {
      "t": "Hisobotlarni ko'ring",
      "d": "Daromad va foydani real vaqtda tahlil qiling."
     }
    ],
    "faq": [
     {
      "q": "Qanday hisobotlar mavjud?",
      "a": "Savdo, foyda, xarajat, ombor, xodimlar va mehmonlar bo'yicha batafsil hisobotlar."
     },
     {
      "q": "Hisobotlarni real vaqtda ko'rish mumkinmi?",
      "a": "Ha, barcha ma'lumotlar jonli ravishda yangilanadi."
     },
     {
      "q": "Hisobotlarni eksport qilish mumkinmi?",
      "a": "Ha, PDF va Excel formatlarida yuklab olish mumkin."
     }
    ],
    "ctaH": "Hisobotlarni sinab ko'ring"
   },
   "ru": {
    "title": "Отчёты ресторана — Выручку и прибыль в реальном времени",
    "desc": "Динамика выручки, бестселлеры и часовая эффективность — доступ к дашбордам в реальном времени. Отчёты за день, неделю или месяц.",
    "name": "Отчёты ресторана",
    "h1": "Отчёты ресторана — выручку и прибыль в реальном времени",
    "lead": "Динамика выручки, бестселлеры и часовая эффективность — один клик. Аналитика за день, неделю или месяц.",
    "probH": "Зачем нужны отчёты?",
    "prob": [
     {
      "t": "Нет видимости",
      "d": "Сколько заработано, сколько потрачено — точно неизвестно. Решения принимаются наугад."
     },
     {
      "t": "Ручной подсчёт",
      "d": "Считать вручную или в Excel — долго и ошибочно."
     },
     {
      "t": "Опоздавшие данные",
      "d": "Отчёт за день уже устарел — проблемы вовремя не обнаружить."
     }
    ],
    "featH": "Что дают отчёты Octopos?",
    "featP": "Все данные собираются в реальном времени — анализируйте в любой момент.",
    "feat": [
     {
      "t": "Выручка в реальном времени",
      "d": "Каждый заказ сразу отражается в отчётах — без задержек."
     },
     {
      "t": "Бестселлеры",
      "d": "Узнайте, какие блюда пользуются спросом, и оптимизируйте меню."
     },
     {
      "t": "Часовая эффективность",
      "d": "В какое время больше заказов — планируйте смены точнее."
     },
     {
      "t": "Ролевой доступ",
      "d": "Каждый сотрудник видит только свои данные."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Введите данные",
      "d": "Настройте меню и цены."
     },
     {
      "t": "Начните продажи",
      "d": "Каждый заказ автоматически фиксируется."
     },
     {
      "t": "Смотрите отчёты",
      "d": "Анализируйте выручку и прибыль в реальном времени."
     }
    ],
    "faq": [
     {
      "q": "Какие отчёты доступны?",
      "a": "Продажи, прибыль, расходы, склад, персонал и гости — подробные отчёты по всем направлениям."
     },
     {
      "q": "Можно ли смотреть отчёты в реальном времени?",
      "a": "Да, все данные обновляются вживую."
     },
     {
      "q": "Можно ли экспортировать отчёты?",
      "a": "Да, в форматах PDF и Excel."
     }
    ],
    "ctaH": "Попробуйте отчёты"
   },
   "en": {
    "title": "Restaurant Reports — See revenue and profit in real time",
    "desc": "Revenue trends, top sellers and hourly efficiency — real-time management dashboards at your fingertips. Reports by day, week or month.",
    "name": "Restaurant Reports",
    "h1": "Restaurant Reports — see revenue and profit in real time",
    "lead": "Revenue trends, top sellers and hourly efficiency — real-time management dashboards. Reports by day, week or month.",
    "probH": "Why restaurants need real-time reports",
    "prob": [
     {
      "t": "Delayed data",
      "d": "End-of-day reports arrive too late. Problems surface after the damage is done."
     },
     {
      "t": "Manual spreadsheet work",
      "d": "Building reports in Excel takes hours and is error-prone. Time better spent on the business."
     },
     {
      "t": "No visibility into profit",
      "d": "Without clear numbers, decisions are based on gut feeling instead of data."
     }
    ],
    "featH": "What Octopos reports show",
    "featP": "All data is collected in real time — analyze it anytime.",
    "feat": [
     {
      "t": "Revenue dashboard",
      "d": "Every order is logged as revenue in real time — no delays, no gaps."
     },
     {
      "t": "Best sellers & low performers",
      "d": "See which dishes sell most and which need improvement to optimize your menu."
     },
     {
      "t": "Hourly & daily trends",
      "d": "Know which hours bring the most orders and plan staff shifts accordingly."
     },
     {
      "t": "Export & share",
      "d": "Download reports as PDF or Excel and share with your team or accountant."
     }
    ],
    "stepsH": "Get started in 3 steps",
    "steps": [
     {
      "t": "Connect your register",
      "d": "Set up your menu and connect your POS in minutes."
     },
     {
      "t": "Business runs normally",
      "d": "Every order is automatically logged and tracked."
     },
     {
      "t": "View live reports",
      "d": "Analyze revenue and profit in real time."
     }
    ],
    "faq": [
     {
      "q": "What reports are available?",
      "a": "Sales, revenue, expenses, profit, top items, peak hours and more."
     },
     {
      "q": "Can I compare periods?",
      "a": "Yes, compare day vs day, week vs week or custom date ranges."
     },
     {
      "q": "Are reports real-time?",
      "a": "Yes, all data updates live as transactions happen."
     }
    ],
    "ctaH": "See your numbers clearly"
   },
   "ko": {
    "title": "레스토랑 보고서 — 매출과 이익을 실시간으로 확인",
    "desc": "매출 트렌드, 인기 메뉴 및 시간별 효율성 — 실시간 관리 대시보드. 일별, 주별 또는 월별 보고서.",
    "name": "레스토랑 보고서",
    "h1": "레스토랑 보고서 — 매출과 이익을 실시간으로 확인하세요",
    "lead": "매출 트렌드, 인기 메뉴 및 시간별 효율성 — 실시간 관리 대시보드. 일별, 주별 또는 월별 보고서.",
    "probH": "레스토랑이 실시간 보고서가 필요한 이유",
    "prob": [
     {
      "t": "지연된 데이터",
      "d": "하루 종료 보고서는 너무 늦게 도착합니다. 문제가 드러날 때쯤이면 이미 늦습니다."
     },
     {
      "t": "수기 스프레드시트 작업",
      "d": "Excel로 보고서를 만드는 데 몇 시간이 걸리고 오류가 발생하기 쉽습니다. 비즈니스에 더 나은 시간을 할애하세요."
     },
     {
      "t": "이익 시야 부족",
      "d": "명확한 숫자가 없으면 의사결정이 데이터가 아닌 감에 의존하게 됩니다."
     }
    ],
    "featH": "Octopos 보고서가 보여주는 것",
    "featP": "모든 데이터가 실시간으로 수집됩니다 — 언제든지 분석하세요.",
    "feat": [
     {
      "t": "매출 대시보드",
      "d": "모든 주문이 실시간으로 매출로 기록됩니다 — 지연이나 공백 없이."
     },
     {
      "t": "인기 및 저조 메뉴",
      "d": "어떤 메뉴가 가장 많이 팔리고 어떤 메뉴가 개선이 필요한지 확인하여 메뉴를 최적화하세요."
     },
     {
      "t": "시간별 및 일별 트렌드",
      "d": "어떤 시간대에 주문이 가장 많은지 파악하고 직원 시프트를 적절히 계획하세요."
     },
     {
      "t": "내보내기 및 공유",
      "d": "보고서를 PDF 또는 Excel로 다운로드하여 팀이나 회계사와 공유하세요."
     }
    ],
    "stepsH": "3단계로 시작하세요",
    "steps": [
     {
      "t": "계산대 연결",
      "d": "메뉴를 설정하고 POS를 몇 분 안에 연결하세요."
     },
     {
      "t": "비즈니스 정상 운영",
      "d": "모든 주문이 자동으로 기록되고 추적됩니다."
     },
     {
      "t": "실시간 보고서 확인",
      "d": "매출과 이익을 실시간으로 분석하세요."
     }
    ],
    "faq": [
     {
      "q": "어떤 보고서를 볼 수 있나요?",
      "a": "매출, 수익, 비용, 이익, 인기 메뉴, 피크 시간 등."
     },
     {
      "q": "기간을 비교할 수 있나요?",
      "a": "네, 일 대 일, 주 대 주 또는 사용자 지정 기간을 비교할 수 있습니다."
     },
     {
      "q": "보고서가 실시간인가요?",
      "a": "네, 거래가 발생하면 모든 데이터가 실시간으로 업데이트됩니다."
     }
    ],
    "ctaH": "숫자를 명확하게 확인하세요"
   }
  }
 },
 {
  "key": "waiter-app",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "ofitsiant-dasturi",
   "ru": "programma-dlya-ofitsianta",
   "en": "waiter-app",
   "ko": "waiter-app"
  },
  "content": {
   "uz": {
    "title": "Ofitsiant uchun dastur — Buyurtmalarni tezda oling",
    "desc": "Ofitsiantlar uchun sodda dastur: bir necha bosish bilan buyurtma oling, stolni boshqaring va hisobni ajrating — planshetda yoki telefonda.",
    "name": "Ofitsiant dasturi",
    "h1": "Ofitsiant uchun dastur — buyurtmalarni tezda oling",
    "lead": "Sodda interfeys: bir necha bosish bilan buyurtma oling, stolni boshqaring va hisobni ajrating — planshetda yoki telefonda.",
    "probH": "Nima uchun ofitsiant dasturi kerak?",
    "prob": [
     {
      "t": "Sekin xizmat",
      "d": "Ofitsiant har safar oshxonaga yugurishi yoki qo'lda yozishi kerak — vaqt ketadi."
     },
     {
      "t": "Xatolar",
      "d": "Qo'lda yozilgan buyurtmalar noto'g'ri bo'lishi mumkin — miqdor yoki tarkibda."
     },
     {
      "t": "Hisob ajratish qiyin",
      "d": "Bitta hisobdan ajratish yoki bir nechta stolni birlashtirish — qo'lda hisob-kitob kerak."
     }
    ],
    "featH": "Octopos ofitsiantlar uchun nima qiladi?",
    "featP": "Sodda grid interfeysi — yangi xodimlar bir necha daqiqada o'rganadi.",
    "feat": [
     {
      "t": "Tezkor buyurtma olish",
      "d": "Taomlarni kategoriyalar bo'yicha topib, bir bosish bilan qo'shing."
     },
     {
      "t": "Stol boshqaruvi",
      "d": "Qaysi stol bo'sh, qaysi biri band — rang bilan ko'rinadi."
     },
     {
      "t": "Hisob ajratish",
      "d": "Bitta bosish bilan hisobni ajrating yoki birlashtiring."
     },
     {
      "t": "Oshxonaga avtomatik",
      "d": "Buyurtma berilishi bilan oshxonaga tushadi — qo'lda yozish shart emas."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Planshetni bering",
      "d": "Har qanday planshet yoki telefon."
     },
     {
      "t": "Qisqacha ko'rsating",
      "d": "Sodda interfeys — 5 daqiqada o'rganadi."
     },
     {
      "t": "Ofitsiant ishni boshlasin",
      "d": "Darhol buyurtma qabul qila boshlaydi."
     }
    ],
    "faq": [
     {
      "q": "Ofitsiant dasturi nima?",
      "a": "Ofitsiantlar uchun oddiy dastur — buyurtma qabul qilish, stol almashtirish va chek chiqarish."
     },
     {
      "q": "O'rganish qiyinmi?",
      "a": "Yo'q, 5 daqiqada o'rganadi. Intfeys juda sodda va tushunarli."
     },
     {
      "q": "Qanday qurilmalarda ishlaydi?",
      "a": "Har qanday planshet yoki telefon — iOS va Android."
     }
    ],
    "ctaH": "Ofitsiantlar uchun dasturni sinab ko'ring"
   },
   "ru": {
    "title": "Программа для официанта — Принимайте заказы быстро",
    "desc": "Простая программа для официанта: принимайте заказы в пару касаний, управляйте столами и разделяйте счёт — на планшете или телефоне.",
    "name": "Программа для официанта",
    "h1": "Программа для официанта — принимайте заказы быстро",
    "lead": "Простой интерфейс: принимайте заказы в пару касаний, управляйте столами и разделяйте счёт — на планшете или телефоне.",
    "probH": "Зачем нужна программа для официанта?",
    "prob": [
     {
      "t": "Медленный сервис",
      "d": "Официант бегает на кухню или записывает вручную — время теряется."
     },
     {
      "t": "Ошибки",
      "d": "Записанные от руки заказы могут быть неверными — в количестве или составе."
     },
     {
      "t": "Сложно разделить счёт",
      "d": "Разделить один счёт или объединить несколько столов — вручную долго."
     }
    ],
    "featH": "Что делает Octopos для официантов?",
    "featP": "Простой сеточный интерфейс — новые сотрудники освоят за пару минут.",
    "feat": [
     {
      "t": "Быстрый приём заказов",
      "d": "Находите блюда по категориям и добавляйте одним касанием."
     },
     {
      "t": "Управление столами",
      "d": "Какой стол свободен, какой занят — видно по цвету."
     },
     {
      "t": "Разделение счёта",
      "d": "Одним касанием разделите или объедините счёт."
     },
     {
      "t": "Автоматически на кухню",
      "d": "Заказ сразу уходит на кухню — писать от руки не нужно."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Выдайте планшет",
      "d": "Любой планшет или телефон."
     },
     {
      "t": "Покажите за 5 минут",
      "d": "Простой интерфейс — освоится за 5 минут."
     },
     {
      "t": "Официант начинает работу",
      "d": "Сразу начинает принимать заказы."
     }
    ],
    "faq": [
     {
      "q": "Что такое программа для официанта?",
      "a": "Простое приложение для официантов — приём заказов, замена столов и печать чеков."
     },
     {
      "q": "Сложно ли освоить?",
      "a": "Нет, 5 минут — и официант работает. Интерфейс максимально простой."
     },
     {
      "q": "На каких устройствах работает?",
      "a": "Любой планшет или телефон — iOS и Android."
     }
    ],
    "ctaH": "Попробуйте программу для официанта"
   },
   "en": {
    "title": "Waiter App — Take orders quickly",
    "desc": "Simple app for waiters: take orders in a few taps, manage tables and split the bill — on a tablet or phone.",
    "name": "Waiter App",
    "h1": "Waiter App — take orders quickly",
    "lead": "Simple app for waiters: take orders in a few taps, manage tables and split the bill — on a tablet or phone.",
    "probH": "Why waiters need a dedicated app",
    "prob": [
     {
      "t": "Slow order taking",
      "d": "Walking back to the terminal to enter each order wastes time and keeps guests waiting."
     },
     {
      "t": "Wrong orders",
      "d": "Writing orders by hand or misremembering leads to mistakes in the kitchen."
     },
     {
      "t": "Table confusion",
      "d": "Without a clear view of which table ordered what, chaos ensues during rush hours."
     }
    ],
    "featH": "Built for the floor",
    "featP": "Designed for the pace of restaurant service — fast, reliable and simple.",
    "feat": [
     {
      "t": "Quick order entry",
      "d": "A few taps to take an order and send it straight to the kitchen. No round trips."
     },
     {
      "t": "Table management",
      "d": "See which tables are occupied, what they ordered and when — all on one screen."
     },
     {
      "t": "Bill splitting",
      "d": "Split by item, by amount or by custom share — guests choose how to pay."
     },
     {
      "t": "Offline mode",
      "d": "Orders are stored locally and sync automatically when internet returns."
     }
    ],
    "stepsH": "Get started in 3 steps",
    "steps": [
     {
      "t": "Install on tablets",
      "d": "Download the app on your staff devices — iOS or Android."
     },
     {
      "t": "Load your menu",
      "d": "Sync your existing menu or add a new one."
     },
     {
      "t": "Waiters start taking orders",
      "d": "From day one, waiters take orders directly from the table."
     }
    ],
    "faq": [
     {
      "q": "Does it work on phones?",
      "a": "Yes, on tablets and phones — iOS and Android."
     },
     {
      "q": "Can waiters split bills?",
      "a": "Yes, split by item, by amount or by custom share."
     },
     {
      "q": "Does it work offline?",
      "a": "Yes, orders are stored locally and sync when internet returns."
     }
    ],
    "ctaH": "Empower your waiters"
   },
   "ko": {
    "title": "웨이터 앱 — 빠르게 주문을 접수하세요",
    "desc": "웨이터를 위한 간단한 앱: 몇 번의 탭으로 주문을 접수하고, 좌석을 관리하고, 계산서를 분할하세요 — 태블릿이나 휴대폰에서.",
    "name": "웨이터 앱",
    "h1": "웨이터 앱 — 빠르게 주문을 접수하세요",
    "lead": "웨이터를 위한 간단한 앱: 몇 번의 탭으로 주문을 접수하고, 좌석을 관리하고, 계산서를 분할하세요 — 태블릿이나 휴대폰에서.",
    "probH": "웨이터에게 전용 앱이 필요한 이유",
    "prob": [
     {
      "t": "느린 주문 접수",
      "d": "종이 메모를 사용하면 주문 전달이 느리고 주방에 도착하기까지 시간이 걸립니다."
     },
     {
      "t": "잘못된 주문",
      "d": "수기 기록은 오류를 유발합니다. 잘못된 메뉴나 수량이 전달되면 고객 불만이 발생합니다."
     },
     {
      "t": "좌석 혼란",
      "d": "어떤 테이블이 주문을 했고 어떤 테이블이 아직 대기 중인지 파악하기 어렵습니다."
     }
    ],
    "featH": "매장에 맞게 제작",
    "featP": "웨이터의 하루를 더 빠르고 정확하게 만드는 기능들.",
    "feat": [
     {
      "t": "빠른 주문 입력",
      "d": "몇 번의 탭으로 주문을 접수하세요. 자주 사용하는 메뉴가 바로 표시됩니다."
     },
     {
      "t": "좌석 관리",
      "d": "모든 좌석의 상태를 한눈에 파악하세요. 빈 좌석, 주문 중, 계산 대기 등을 실시간으로 확인."
     },
     {
      "t": "계산서 분할",
      "d": "항목별, 금액별 또는 사용자 지정 비율별로 계산서를 손쉽게 분할하세요."
     },
     {
      "t": "오프라인 모드",
      "d": "인터넷이 끊겨도 주문은 로컬에 저장되고 연결 복귀 시 자동으로 동기화됩니다."
     }
    ],
    "stepsH": "3단계로 시작하세요",
    "steps": [
     {
      "t": "태블릿에 설치",
      "d": "태블릿이나 휴대폰에 앱을 설치하세요."
     },
     {
      "t": "메뉴 로드",
      "d": "기존 메뉴가 자동으로 동기화됩니다."
     },
     {
      "t": "웨이터가 주문 접수 시작",
      "d": "웨이터가 몇 번의 탭으로 주문을 접수합니다."
     }
    ],
    "faq": [
     {
      "q": "휴대폰에서 작동하나요?",
      "a": "네, 태블릿과 휴대폰에서 — iOS 및 Android."
     },
     {
      "q": "웨이터가 계산서를 분할할 수 있나요?",
      "a": "네, 항목별, 금액별 또는 사용자 지정 비율별로 분할할 수 있습니다."
     },
     {
      "q": "오프라인에서 작동하나요?",
      "a": "네, 주문은 로컬에 저장되고 인터넷이 복귀되면 동기화됩니다."
     }
    ],
    "ctaH": "웨이터를 지원하세요"
   }
  }
 },
 {
  "key": "fast-food-pos",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "fastfood-kassa",
   "ru": "pos-dlya-fastfuda",
   "en": "fast-food-pos",
   "ko": "fast-food-pos"
  },
  "content": {
   "uz": {
    "title": "Fast food uchun kassa dasturi — Tez xizmat uchun tez tizim",
    "desc": "Fast food va olib ketish uchun POS tizimi: tezkor buyurtma, avtomatik oshxona va real vaqt hisobotlari. Oddiy va tez ishlaydigan interfeys.",
    "name": "Fast food kassa",
    "h1": "Fast food uchun kassa dasturi — tez xizmat uchun tez tizim",
    "lead": "Fast food va olib ketish uchun mo'ljallangan POS: tezkor buyurtma, avtomatik oshxona va real vaqt hisobotlari. Oddiy interfeys — xodimlar darhol o'rganadi.",
    "probH": "Nima uchun fast food uchun alohida tizim kerak?",
    "prob": [
     {
      "t": "Navbat uzoq",
      "d": "Tez xizmat ko'rsatish kerak, lekin tizim sekin ishlasa, navbat uzayadi va mijozlar ketadi."
     },
     {
      "t": "Olib ketish aralashmasi",
      "d": "Zal va olib ketish buyurtmalari aralashadi — qaysi biri tayyor, qaysi biri kutmoqda — aniq emas."
     },
     {
      "t": "Hisobda xatolik",
      "d": "Tez ishlash kerak, lekin xatolar ortadi — noto'g'ri miqdor yoki narx."
     }
    ],
    "featH": "Octopos fast food uchun nima qiladi?",
    "featP": "Bir qadamli buyurtma, avtomatik oshxona va real vaqt holati — tezlik uchun yaratilgan.",
    "feat": [
     {
      "t": "Bir qadamli buyurtma",
      "d": "Tez-taomlarni bir bosish bilan buyurtma qiling — ko'p qadam kerak emas."
     },
     {
      "t": "Zal va olib ketish ajratmasi",
      "d": "Buyurtma turini avtomatik aniqlang — zalga yoki olib ketishga."
     },
     {
      "t": "Real vaqt hisobotlari",
      "d": "Qancha sotildi, qancha qoldi — bir zumda ko'ring."
     },
     {
      "t": "Oflayn ishlash",
      "d": "Internet uzilsa ham buyurtmalar qabul qilinadi."
     }
    ],
    "stepsH": "",
    "steps": [],
    "faq": [
     {
      "q": "Fast food uchun qanday afzalliklar bor?",
      "a": "Tez buyurtma qabul qilish, avtomatik hisob-kitob va oshxona bilan avtomatik bog'lanish."
     },
     {
      "q": "Katta hajmdagi buyurtmalarni qayta ishlaydimi?",
      "a": "Ha, bir vaqtda 50+ buyurtmani qayta ishlash qobiliyatiga ega."
     },
     {
      "q": "Yetkazib berish xizmati bilan ishlaydimi?",
      "a": "Ha, Yandex Eats, Uzum Tezkor va boshqa yetkazib berish xizmatlari bilan integratsiya."
     }
    ],
    "ctaH": "Fast food tizimini sinab ko'ring"
   },
   "ru": {
    "title": "POS-система для фастфуда — Быстрое обслуживание",
    "desc": "POS для фастфуда и навынос: быстрый заказ, автокухня и отчёты в реальном времени. Простой интерфейс — сотрудники освоятся сразу.",
    "name": "POS для фастфуда",
    "h1": "POS-система для фастфуда — быстрое обслуживание",
    "lead": "POS для фастфуда и навыноса: быстрый заказ, автокухня и отчёты в реальном времени. Простой интерфейс — сотрудники освоятся сразу.",
    "probH": "Зачем нужна отдельная система для фастфуда?",
    "prob": [
     {
      "t": "Длинная очередь",
      "d": "Нужно обслуживать быстро, но система тормозит — очередь растёт, клиенты уходят."
     },
     {
      "t": "Зал и навынос путаются",
      "d": "Заказы зала и навыноса перемешиваются — какой готов, какой ждёт — непонятно."
     },
     {
      "t": "Ошибки в расчёте",
      "d": "При быстрой работе ошибки учащаются — неверное количество или цена."
     }
    ],
    "featH": "Что делает Octopos для фастфуда?",
    "featP": "Одно касание, автокухня и статус в реальном времени — создано для скорости.",
    "feat": [
     {
      "t": "Заказ в одно касание",
      "d": "Быстрые блюда — одним нажатием, без лишних шагов."
     },
     {
      "t": "Разделение зала и навыноса",
      "d": "Система автоматически определяет тип заказа."
     },
     {
      "t": "Отчёты в реальном времени",
      "d": "Сколько продано, сколько осталось — мгновенно."
     },
     {
      "t": "Офлайн-режим",
      "d": "Заказы принимаются даже без интернета."
     }
    ],
    "stepsH": "",
    "steps": [],
    "faq": [
     {
      "q": "Какие преимущества для фастфуда?",
      "a": "Быстрый приём заказов, автоматический подсчёт и связь с кухней."
     },
     {
      "q": "Справляется ли с большим потоком?",
      "a": "Да, способен обрабатывать более 50 заказов одновременно."
     },
     {
      "q": "Интегрируется ли с доставкой?",
      "a": "Да, интеграция с Yandex Eats, Uzum Tezkor и другими сервисами доставки."
     }
    ],
    "ctaH": "Попробуйте POS для фастфуда"
   },
   "en": {
    "title": "Fast Food POS — Quick service needs a fast system",
    "desc": "POS for fast food and takeaway: quick ordering, auto-kitchen routing and real-time reports. Simple interface — staff gets it immediately.",
    "name": "Fast Food POS",
    "h1": "Fast Food POS — quick service needs a fast system",
    "lead": "Quick ordering, auto-kitchen routing and real-time reports. Simple interface — staff gets it immediately.",
    "probH": "Why fast food needs its own POS?",
    "prob": [
     {
      "t": "Speed matters",
      "d": "You need fast service, but if the system is slow, the line grows and customers leave."
     },
     {
      "t": "Order accuracy",
      "d": "Dine-in and takeaway orders get mixed up — it's unclear which is ready and which is waiting."
     },
     {
      "t": "Kitchen bottlenecks",
      "d": "Speed is needed, but errors increase — wrong quantity or price."
     }
    ],
    "featH": "Built for speed",
    "featP": "One-tap ordering, auto kitchen routing and real-time status — built for speed.",
    "feat": [
     {
      "t": "Quick order entry",
      "d": "Order fast food with a single tap — no multiple steps needed."
     },
     {
      "t": "Auto kitchen display",
      "d": "Automatically detect order type — for dine-in or takeaway."
     },
     {
      "t": "Takeaway & delivery",
      "d": "See how much was sold and what's left — instantly."
     },
     {
      "t": "Live sales dashboard",
      "d": "Orders are accepted even when the internet goes down."
     }
    ],
    "stepsH": "",
    "steps": [],
    "faq": [
     {
      "q": "Is it designed for fast food?",
      "a": "Yes, optimized for speed — large buttons, minimal taps, auto-printing."
     },
     {
      "q": "Does it handle delivery?",
      "a": "Yes, integrated with delivery aggregators and own delivery."
     },
     {
      "q": "Can I see sales in real time?",
      "a": "Yes, live dashboard shows revenue, top items and peak hours."
     }
    ],
    "ctaH": "Try the fast food POS"
   },
   "ko": {
    "title": "패스트푸드 POS — 빠른 서비스를 위한 빠른 시스템",
    "desc": "패스트푸드 및 포장용 POS: 빠른 주문, 자동 주방 라우팅 및 실시간 보고서. 간단한 인터페이스 — 직원이 즉시 익힐 수 있습니다.",
    "name": "패스트푸드 POS",
    "h1": "패스트푸드 POS — 빠른 서비스를 위한 빠른 시스템",
    "lead": "빠른 주문, 자동 주방 라우팅 및 실시간 보고서. 간단한 인터페이스 — 직원이 즉시 익힐 수 있습니다.",
    "probH": "패스트푸드에 자체 POS가 필요한 이유",
    "prob": [
     {
      "t": "속도가 중요",
      "d": "빠른 서비스가 필요하지만 시스템이 느리면 줄이 길어지고 고객이 떠납니다."
     },
     {
      "t": "주문 정확도",
      "d": "매장 주문과 포장 주문이 섞입니다 — 어떤 것이 준비되었고 어떤 것이 대기 중인지 불분명합니다."
     },
     {
      "t": "주방 병목",
      "d": "속도가 필요하지만 오류가 증가합니다 — 잘못된 수량이나 가격."
     }
    ],
    "featH": "속도를 위해 제작",
    "featP": "한 번의 탭으로 주문, 자동 주방 라우팅 및 실시간 상태 — 속도를 위해 제작되었습니다.",
    "feat": [
     {
      "t": "빠른 주문 입력",
      "d": "한 번의 탭으로 패스트푸드를 주문합니다 — 여러 단계가 필요 없습니다."
     },
     {
      "t": "자동 주방 디스플레이",
      "d": "주문 유형을 자동으로 감지합니다 — 매장 또는 포장용."
     },
     {
      "t": "포장 및 배달",
      "d": "얼마나 팔렸고 얼마나 남았는지 즉시 확인할 수 있습니다."
     },
     {
      "t": "실시간 매출 대시보드",
      "d": "인터넷이 끊겨도 주문이 접수됩니다."
     }
    ],
    "stepsH": "",
    "steps": [],
    "faq": [
     {
      "q": "패스트푸드에 특화되어 있나요?",
      "a": "네, 속도에 최적화되어 있습니다 — 큰 버튼, 최소한의 탭, 자동 출력."
     },
     {
      "q": "배달도 되나요?",
      "a": "네, 배달 에이전시 및 자체 배달과 연동됩니다."
     },
     {
      "q": "실시간으로 매출을 볼 수 있나요?",
      "a": "네, 실시간 대시보드에서 매출, 인기 메뉴 및 피크 시간을 확인할 수 있습니다."
     }
    ],
    "ctaH": "패스트푸드 POS를 체험하세요"
   }
  }
 },
 {
  "key": "order-management",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "buyurtma-boshqaruvi",
   "ru": "upravleniye-zakazami",
   "en": "order-management",
   "ko": "order-management"
  },
  "content": {
   "uz": {
    "title": "Buyurtma boshqaruvi — Har bir qadam nazorat ostida",
    "desc": "Buyurtmalarni mehmon telefonidan orqa ofisgacha kuzating. Har bir ilova uni keyingisiga avtomatik uzatadi — hech bir tiket yo'qolmaydi.",
    "name": "Buyurtma boshqaruvi",
    "h1": "Buyurtma boshqaruvi — har bir qadam nazorat ostida",
    "lead": "Bitta buyurtmani mehmon telefonidan orqa ofisgacha kuzating. Har bir ilova uni keyingisiga avtomatik uzatadi — hech bir tiket yo'qolmaydi.",
    "probH": "Nima uchun buyurtma boshqaruvi kerak?",
    "prob": [
     {
      "t": "Tiketlar yo'qoladi",
      "d": "Qog'oz tiketlar chiqib ketadi yoki yo'qoladi. Natijada buyurtma bajarilmaydi."
     },
     {
      "t": "Qayta kiritish",
      "d": "Bitta buyurtmani bir nechta joyga qayta kiritish kerak — vaqtni oladi va xatolarga olib keladi."
     },
     {
      "t": "Kechikishlar",
      "d": "Buyurtma kechikadi, lekin qachon tayyorligini aniq bilmaysiz."
     }
    ],
    "featH": "Octopos buyurtmalarni qanday boshqaradi?",
    "featP": "Bitta buyurtma — barcha nuqtalar sinxron. Hech qanday qayta kiritish yo'q.",
    "feat": [
     {
      "t": "Avtomatik sinxronlash",
      "d": "Mehmon buyurtma berganda, u darhol POS, oshxona va Dash'ga tushadi."
     },
     {
      "t": "Holat kuzatuvi",
      "d": "Yangi → jarayonda → tayyor — har bir qadam ko'rinadi."
     },
     {
      "t": "Sabab bilan bekor qilish",
      "d": "Har bir bekor qilish sababi bilan qayd etiladi — nazorat to'liq."
     },
     {
      "t": "Oflayn ishlash",
      "d": "Internet uzilsa ham buyurtmalar qabul qilinadi — ulanish tiklanishda sinxronlanadi."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Tizimni sozlang",
      "d": "Menyu va stollarni kiriting."
     },
     {
      "t": "Jamoa ishni boshlasin",
      "d": "Ofitsiantlar va oshxona darhol ishlaydi."
     },
     {
      "t": "Buyurtmalarni kuzating",
      "d": "Har bir buyurtmaning holati real vaqtda ko'rinadi."
     }
    ],
    "faq": [
     {
      "q": "Buyurtmalar qanday qabul qilinadi?",
      "a": "Ofitsiantlar planshet orqali, mehmonlar QR menyu orqali — ikkala yo'nalishda."
     },
     {
      "q": "Buyurtma holatini kuzatish mumkinmi?",
      "a": "Ha, har bir buyurtmaning holati real vaqtda ko'rinadi — qabul qilindi, tayyorlanmoqda, yetkazildi."
     },
     {
      "q": "Bekor qilinsa nima bo'ladi?",
      "a": "Bekor qilingan buyurtma tizimda qayd etiladi va boshqaruvchi xabardor qilinadi."
     }
    ],
    "ctaH": "Buyurtmalarni boshqaring"
   },
   "ru": {
    "title": "Управление заказами — Контроль на каждом этапе",
    "desc": "Отслеживайте заказ от телефона гостя до бэк-офиса. Каждое приложение передаёт его дальше автоматически — ни один тикет не потеряется.",
    "name": "Управление заказами",
    "h1": "Управление заказами — контроль на каждом этапе",
    "lead": "Отслеживайте заказ от телефона гостя до бэк-офиса. Каждое приложение передаёт его дальше автоматически — ни один тикет не потеряется.",
    "probH": "Зачем нужно управление заказами?",
    "prob": [
     {
      "t": "Тикеты теряются",
      "d": "Бумажные тикеты рвутся или теряются. В результате заказ не выполняется."
     },
     {
      "t": "Повторный ввод",
      "d": "Один заказ нужно ввести в несколько мест — это отнимает время и вызывает ошибки."
     },
     {
      "t": "Задержки",
      "d": "Заказ задерживается, но когда будет готов — непонятно."
     }
    ],
    "featH": "Как Octopos управляет заказами?",
    "featP": "Один заказ — все точки синхронизированы. Повторный ввод исключён.",
    "feat": [
     {
      "t": "Автосинхронизация",
      "d": "Гость заказал — он сразу появляется в POS, кухне и Dash."
     },
     {
      "t": "Отслеживание статуса",
      "d": "Новый → в работе → готов — каждый шаг виден."
     },
     {
      "t": "Отмена с причиной",
      "d": "Каждая отмена фиксируется с причиной — полный контроль."
     },
     {
      "t": "Офлайн-режим",
      "d": "Заказы принимаются даже без интернета — синхронизация при восстановлении."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Настройте систему",
      "d": "Внесите меню и столы."
     },
     {
      "t": "Команда начинает работу",
      "d": "Официанты и кухня сразу работают."
     },
     {
      "t": "Отслеживайте заказы",
      "d": "Статус каждого заказа виден в реальном времени."
     }
    ],
    "faq": [
     {
      "q": "Как принимаются заказы?",
      "a": "Официанты через планшет, гости через QR меню — оба направления."
     },
     {
      "q": "Можно ли отслеживать статус заказа?",
      "a": "Да, статус каждого заказа виден в реальном времени."
     },
     {
      "q": "Что происходит при отмене?",
      "a": "Отменённый заказ фиксируется в системе, и управляющий уведомляется."
     }
    ],
    "ctaH": "Управляйте заказами"
   },
   "en": {
    "title": "Order Management — Control at every step",
    "desc": "Track an order from the guest's phone to the back office. Each app passes it along automatically — no ticket gets lost.",
    "name": "Order Management",
    "h1": "Order Management — control at every step",
    "lead": "Track a single order from the guest's phone to the back office. Each app passes it along automatically — no ticket gets lost.",
    "probH": "Why do you need order management?",
    "prob": [
     {
      "t": "Tickets get lost",
      "d": "Paper tickets fall out or get lost. As a result, orders go unfulfilled."
     },
     {
      "t": "Re-entry",
      "d": "A single order needs to be re-entered in multiple places — it takes time and leads to errors."
     },
     {
      "t": "Delays",
      "d": "Orders are delayed, but you don't know exactly when they'll be ready."
     }
    ],
    "featH": "How Octopos manages orders?",
    "featP": "A single order — all points synchronized. No re-entry needed.",
    "feat": [
     {
      "t": "Auto sync",
      "d": "When a guest places an order, it instantly appears in POS, kitchen and Dash."
     },
     {
      "t": "Status tracking",
      "d": "New → in progress → ready — every step is visible."
     },
     {
      "t": "Cancellation with reason",
      "d": "Every cancellation is logged with a reason — full control."
     },
     {
      "t": "Offline mode",
      "d": "Orders are accepted even when the internet goes down — they sync when connection is restored."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Set up the system",
      "d": "Add menu and tables."
     },
     {
      "t": "Team starts working",
      "d": "Waiters and kitchen start working immediately."
     },
     {
      "t": "Track orders",
      "d": "Every order status is visible in real time."
     }
    ],
    "faq": [
     {
      "q": "How are orders taken?",
      "a": "Waiters via tablet, guests via QR menu — both channels."
     },
     {
      "q": "Can I track order status?",
      "a": "Yes, every order's status is visible in real time — received, preparing, delivered."
     },
     {
      "q": "What happens if an order is cancelled?",
      "a": "Cancelled orders are logged in the system and the manager is notified."
     }
    ],
    "ctaH": "Manage your orders"
   },
   "ko": {
    "title": "주문 관리 — 모든 단계에서 통제",
    "desc": "게스트의 휴대폰에서 백 오피스까지 주문을 추적하세요. 각 앱이 자동으로 다음 앱으로 전달합니다 — 티켓이 분실되지 않습니다.",
    "name": "주문 관리",
    "h1": "주문 관리 — 모든 단계에서 통제하세요",
    "lead": "게스트의 휴대폰에서 백 오피스까지 단일 주문을 추적하세요. 각 앱이 자동으로 전달합니다 — 티켓이 분실되지 않습니다.",
    "probH": "주문 관리가 필요한 이유",
    "prob": [
     {
      "t": "티켓 분실",
      "d": "종이 티켓이 빠지거나 분실됩니다. 결과적으로 주문이 이행되지 않습니다."
     },
     {
      "t": "재입력",
      "d": "단일 주문을 여러 곳에 다시 입력해야 합니다 — 시간이 걸리고 오류가 발생합니다."
     },
     {
      "t": "지연",
      "d": "주문이 지연되지만 언제 준비되는지 정확히 알 수 없습니다."
     }
    ],
    "featH": "Octopos가 주문을 관리하는 방법",
    "featP": "단일 주문 — 모든 지점이 동기화됩니다. 재입력이 필요 없습니다.",
    "feat": [
     {
      "t": "자동 동기화",
      "d": "게스트가 주문하면 POS, 주방 및 Dash에 즉시 나타납니다."
     },
     {
      "t": "상태 추적",
      "d": "신규 → 진행 중 → 준비 완료 — 모든 단계가 표시됩니다."
     },
     {
      "t": "사유별 취소",
      "d": "모든 취소는 사유와 함께 기록됩니다 — 완전한 통제."
     },
     {
      "t": "오프라인 모드",
      "d": "인터넷이 끊겨도 주문이 접수됩니다 — 연결이 복구되면 동기화됩니다."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "시스템 설정",
      "d": "메뉴와 좌석을 추가합니다."
     },
     {
      "t": "팀이 작업 시작",
      "d": "웨이터와 주방이 즉시 작업을 시작합니다."
     },
     {
      "t": "주문 추적",
      "d": "모든 주문 상태가 실시간으로 표시됩니다."
     }
    ],
    "faq": [
     {
      "q": "주문은 어떻게 접수되나요?",
      "a": "웨이터는 태블릿을 통해, 게스트는 QR 메뉴를 통해 — 두 채널에서."
     },
     {
      "q": "주문 상태를 추적할 수 있나요?",
      "a": "네, 모든 주문 상태를 실시간으로 확인할 수 있습니다 — 접수, 조리 중, 배달 완료."
     },
     {
      "q": "주문이 취소되면 어떻게 되나요?",
      "a": "취소된 주문은 시스템에 기록되고 관리자에게 알림이 갑니다."
     }
    ],
    "ctaH": "주문을 관리하세요"
   }
  }
 },
 {
  "key": "bill-management",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "hisob-tartibi",
   "ru": "poryadok-v-uchete",
   "en": "bill-management",
   "ko": "bill-management"
  },
  "content": {
   "uz": {
    "title": "Hisob tartibi — Restoran hisobini nazorat qilish",
    "desc": "Restorandagi barcha jarayonlarning shaffofligi va aniq hisobi. Inson omilini kamaytiring, kassa va omborni mukammal bog'lang. Octopos bilan buyurtmalardan hisobotgacha har qadam nazorat ostida.",
    "name": "Hisob tartibi",
    "h1": "Restorandagi barcha jarayonlarning shaffofligi va aniq hisobi",
    "lead": "Inson omilini kamaytiring: kassa va omborni mukammal bog'lang. Har bir buyurtma, har bir hisob-kitob va har bir qoldiq real vaqtda ko'rinadi — taxminlar, xatolar va chalkashliklar yo'qoladi.",
    "probH": "Nima uchun restoranlar hisobda qiyinchilikka duch keladi?",
    "prob": [
     {
      "t": "Qo'lda kiritish xatolari",
      "d": "Ofitsiantlar buyurtmani qo'lda kiritganda miqdor, narx va tarkibda adashishlar yuz beradi. Bu bevosita hisob-kitobga ta'sir qiladi."
     },
     {
      "t": "Hisob-kitobda nomuvofiqlik",
      "d": "Kassa va ombor orasidagi bog'lanish yo'q bo'lsa, chiqimlar va qoldiqlar o'zaro mos kelmaydi. Buni aniqlash kech bo'lishi mumkin."
     },
     {
      "t": "Ko'zgu yo'q",
      "d": "Real vaqtda nima sodir bo'layotganini ko'rmagan egalar, faqat kun oxiridagi hisobotga tayanadi — va u ham har doim to'liq emas."
     }
    ],
    "featH": "Shaffoflik va aniq hisob — bitta tizimda",
    "featP": "Octopos har bir operatsiyani avtomatik qayd etadi. Siz istalgan vaqtda, istalgan joydan nazorat qilishingiz mumkin.",
    "feat": [
     {
      "t": "Amaliyotlar nazorati",
      "d": "Cheklarni barcha o'zgartirish va bekor qilishlar tizimda qayd etiladi va menejer tasdiqlashini talab qiladi. Har bir harakat iz qoldiradi."
     },
     {
      "t": "Aniq ombor hisobi",
      "d": "Har bir savdo paytida texnologik xaritalar bo'yicha mahsulotlarni avtomatik hisobdan chiqarish. Ombordagi qoldiq doimo real vaqtga mos."
     },
     {
      "t": "Real vaqtli hisobotlar",
      "d": "Daromad, chiqim va foyda tendentsiyalari bir zumda ko'rinadi. Kun, hafta yoki oy bo'yicha tahlil — bitta bosing."
     },
     {
      "t": "Ruxsatsiz o'zgarishlarni cheklash",
      "d": "Har bir xodim faqat o'ziga tegishli funksiyalarga kirishadi. Katta miqdordagi tranzaksiyalar yoki o'zgartirishlar avtomatik bloklanadi."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Menyu va stollarni kiriting",
      "d": "Bir marta sozlang — tizim o'zi qolganini qiladi."
     },
     {
      "t": "Jamoa ishni boshlasin",
      "d": "Ofitsiantlar va oshxona darhol buyurtma qabul qila boshlaydi."
     },
     {
      "t": "Hisobotlarni ko'ring",
      "d": "Real vaqtda daromad, qoldiq va foydani kuzating."
     }
    ],
    "faq": [
     {
      "q": "Nima uchun qo'lda hisob-kitob xavfli?",
      "a": "Qo'lda hisob-kitob inson omiliga bog'liq — xatoliklar va nomuvofiqliklar yuzaga keladi. Octopos avtomatik ravishda barcha operatsiyalarni qayd etadi."
     },
     {
      "q": "Octopos boshqa POS tizimlaridan qanday farq qiladi?",
      "a": "Octopos faqat kasadan iborat emas — u ombor, oshxona, hisobotlar va boshqaruvni bitta platformada birlashtiradi."
     },
     {
      "q": "Bepul sinov muddati bormi?",
      "a": "Ha, 30 kun bepul sinov mavjud. Karta talab qilinmaydi."
     }
    ],
    "ctaH": "Restoraningizni nazorat ostiga oling"
   },
   "ru": {
    "title": "Порядок в учёте — Контроль ресторана без хаоса",
    "desc": "Исключите человеческий фактор и хаос в учёте ресторана. Полный контроль над расходами и остатками на складе в реальном времени. Octopos — от заказа до отчёта.",
    "name": "Порядок в учёте",
    "h1": "Исключите человеческий фактор и хаос в учёте ресторана",
    "lead": "Полный контроль над расходами и остатками на складе в реальном времени. Каждый заказ, каждая операция и каждый остаток видны немедленно — без догадок, ошибок и разногласий.",
    "probH": "Почему рестораны теряют контроль над учётом?",
    "prob": [
     {
      "t": "Ручной ввод с ошибками",
      "d": "Официанты вводят заказы вручную — с ошибками в количестве, цене и составе. Это напрямую влияет на итоговый расчёт."
     },
     {
      "t": "Расхождения в расчётах",
      "d": "Без связки кассы и склада расходы и остатки не совпадают. Обнаружить расхождение удаётся слишком поздно."
     },
     {
      "t": "Отсутствие видимости",
      "d": "Владелец, не видящий происходящее в реальном времени, опирается лишь на итоговый отчёт за день — и тот не всегда полон."
     }
    ],
    "featH": "Прозрачность и точный учёт — в одной системе",
    "featP": "Octopos автоматически фиксирует каждую операцию. Вы можете контролировать всё из любого места в любое время.",
    "feat": [
     {
      "t": "Контроль операций",
      "d": "Все изменения и отмены чеков фиксируются в системе и требуют подтверждения управляющего. Каждое действие оставляет след."
     },
     {
      "t": "Точный складской учёт",
      "d": "Автоматическое списание ингредиентов по техкартам при каждой продаже. Остатки на складе всегда соответствуют реальности."
     },
     {
      "t": "Отчёты в реальном времени",
      "d": "Выручка, расходы и прибыль видны мгновенно. Тренды за день, неделю или месяц — в один клик."
     },
     {
      "t": "Ограничение несанкционированных изменений",
      "d": "Каждый сотрудник имеет доступ только к своим функциям. Крупные транзакции или правки автоматически блокируются."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Настройте меню и столы",
      "d": "Один раз внесите данные — система сделает остальное."
     },
     {
      "t": "Запустите команду",
      "d": "Официанты и кухня сразу начинают принимать заказы."
     },
     {
      "t": "Смотрите отчёты",
      "d": "Выручка, остатки и прибыль — всё в реальном времени."
     }
    ],
    "faq": [
     {
      "q": "Зачем нужен автоматический учёт?",
      "a": "Ручной учёт зависит от человека — ошибки и расхождения неизбежны. Octopos автоматически фиксирует все операции."
     },
     {
      "q": "Чем Octopos отличается от других POS?",
      "a": "Octopos — это не просто касса: склад, кухня, отчёты и управление на одной платформе."
     },
     {
      "q": "Есть ли бесплатный пробный период?",
      "a": "Да, 30 дней бесплатно. Карта не требуется."
     }
    ],
    "ctaH": "Возьмите ресторан под контроль"
   },
   "en": {
    "title": "Bill Management — Keep your restaurant accounts in order",
    "desc": "Transparent processes and accurate accounting in your restaurant. Reduce human error, connect your register and inventory seamlessly. With Octopos, every step from orders to reports is under control.",
    "name": "Bill Management",
    "h1": "Transparent processes and accurate accounting for your restaurant",
    "lead": "Reduce human error: connect your register and inventory seamlessly. Every order, every calculation and every balance is visible in real time — no more guesswork, errors or confusion.",
    "probH": "Why do restaurants struggle with accounting?",
    "prob": [
     {
      "t": "Manual entry errors",
      "d": "When waiters enter orders manually, mistakes in quantity, price and ingredients happen. This directly affects accounting."
     },
     {
      "t": "Accounting mismatches",
      "d": "Without a link between register and inventory, expenses and balances don't match. It may be too late to detect."
     },
     {
      "t": "No real-time visibility",
      "d": "Owners who can't see what's happening in real time rely only on end-of-day reports — which are never complete."
     }
    ],
    "featH": "Transparency and accuracy — in one system",
    "featP": "Octopos automatically records every transaction. You can check from anywhere, anytime.",
    "feat": [
     {
      "t": "Transaction control",
      "d": "All modifications and cancellations on receipts are logged in the system and require manager approval. Every action leaves a trace."
     },
     {
      "t": "Accurate inventory tracking",
      "d": "Products are automatically deducted from inventory with each sale based on tech cards. Inventory levels are always up to date."
     },
     {
      "t": "Real-time reports",
      "d": "Revenue, expenses and profit trends are visible instantly. Analyze by day, week or month — one click away."
     },
     {
      "t": "Restrict unauthorized changes",
      "d": "Each employee only accesses their assigned functions. Large transactions or changes are automatically blocked."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Add menu and tables",
      "d": "Set up once — the system handles the rest."
     },
     {
      "t": "Team starts working",
      "d": "Waiters and kitchen start taking orders immediately."
     },
     {
      "t": "View reports",
      "d": "Monitor revenue, balances and profit in real time."
     }
    ],
    "faq": [
     {
      "q": "Why is manual accounting risky?",
      "a": "Manual accounting relies on human effort — errors and discrepancies occur. Octopos automatically records all operations."
     },
     {
      "q": "How does Octopos differ from other POS systems?",
      "a": "Octopos isn't just a register — it combines inventory, kitchen, reports and management in one platform."
     },
     {
      "q": "Is there a free trial?",
      "a": "Yes, 30-day free trial available. No credit card required."
     }
    ],
    "ctaH": "Take control of your restaurant"
   },
   "ko": {
    "title": "계산 관리 — 레스토랑 회계를 정리하세요",
    "desc": "레스토랑의 모든 과정을 투명하고 정확하게 관리하세요. 인건비를 줄이고, 매장과 재고를 완벽하게 연결하세요. Octopos로 주문부터 보고서까지 모든 단계를 통제하세요.",
    "name": "계산 관리",
    "h1": "계산 관리 — 레스토랑 회계를 정리하세요",
    "lead": "인건비를 줄이고, 매장과 재고를 완벽하게 연결하세요. 모든 주문, 계산 및 재고가 실시간으로 표시됩니다 — 더 이상의 추측, 오류 또는 혼란이 없습니다.",
    "probH": "레스토랑이 회계에 어려움을 겪는 이유",
    "prob": [
     {
      "t": "수기 입력 오류",
      "d": "웨이터가 주문을 수동으로 입력하면 수량, 가격 및 재료에서 오류가 발생합니다. 이는 회계에 직접적인 영향을 미칩니다."
     },
     {
      "t": "회계 불일치",
      "d": "매장과 재고가 연결되지 않으면 비용과 잔액이 일치하지 않습니다. 발견하기에는 이미 늦을 수 있습니다."
     },
     {
      "t": "실시간 시야 부족",
      "d": "실시간으로 무슨 일이 일어나고 있는지 볼 수 없는 오너는 하루 마감 보고서에만 의존합니다 — 완전하지 않습니다."
     }
    ],
    "featH": "투명성과 정확성 — 하나의 시스템에서",
    "featP": "Octopos는 모든 거래를 자동으로 기록합니다. 언제 어디서나 확인할 수 있습니다.",
    "feat": [
     {
      "t": "거래 통제",
      "d": "영수증의 모든 수정 및 취소는 시스템에 기록되며 관리자 승인이 필요합니다. 모든 작업은 흔적을 남깁니다."
     },
     {
      "t": "정확한 재고 추적",
      "d": "각 판매 시 기술 카드에 따라 제품이 자동으로 재고에서 차감됩니다. 재고 수준은 항상 최신 상태를 유지합니다."
     },
     {
      "t": "실시간 보고서",
      "d": "수익, 비용 및 이익 추세를 즉시 확인할 수 있습니다. 일, 주 또는 월별로 분석하세요 — 클릭 한 번이면 됩니다."
     },
     {
      "t": "무단 변경 제한",
      "d": "각 직원은 할당된 기능에만 접근합니다. 큰 거래나 변경은 자동으로 차단됩니다."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "메뉴와 좌석 추가",
      "d": "한 번 설정하면 시스템이 나머지를 처리합니다."
     },
     {
      "t": "팀이 작업 시작",
      "d": "웨이터와 주방이 즉시 주문을 접수하기 시작합니다."
     },
     {
      "t": "보고서 확인",
      "d": "수익, 잔액 및 이익을 실시간으로 모니터링합니다."
     }
    ],
    "faq": [
     {
      "q": "수기 회계가 위험한 이유는?",
      "a": "수기 회계는 인력에 의존합니다 — 오류와 불일치가 발생합니다. Octopos는 모든 거래를 자동으로 기록합니다."
     },
     {
      "q": "Octopos는 다른 POS 시스템과 어떻게 다른가요?",
      "a": "Octopos는 단순한 계산대가 아닙니다 — 재고, 주방, 보고서 및 관리를 하나의 플랫폼에서 통합합니다."
     },
     {
      "q": "무료 체험이 있나요?",
      "a": "네, 30일 무료 체험이 가능합니다. 신용카드가 필요 없습니다."
     }
    ],
    "ctaH": "레스토랑을 통제하세요"
   }
  }
 },
 {
  "key": "reducing-shortages",
  "app": "dash",
  "slugs": {
   "uz": "kamomadni-yoqotish",
   "ru": "borba-s-nedostachey",
   "en": "reducing-shortages",
   "ko": "reducing-shortages"
  },
  "content": {
   "uz": {
    "title": "Kafedagi kamomadni yo'qotish — Har bir mahsulot hisobda",
    "desc": "Avtomatik ombor hisobi va real vaqt nazorati — kamomadlar sezilarli kamayadi. Har bir mahsulot hisobda.",
    "name": "Kamomadni yo'qotish",
    "h1": "Kafedagi kamomadni yo'qotish",
    "lead": "Har bir mahsulot hisobda — ortiqcha sarflarga joy yo'q. Avtomatik ombor hisobi va real vaqt nazorati bilan kamomadlar sezilarli kamayadi.",
    "probH": "Nima uchun restoranlar kamomadga duch keladi?",
    "prob": [
     {
      "t": "Omborda nazorat yo'q",
      "d": "Qayerga sarflanayotgani noma'lum — faqat buxгалтерiyada ko'rinadi."
     },
     {
      "t": "Qo'lda hisob-kitob xatolari",
      "d": "Inson omili noto'g'ri ma'lumotlarga olib keladi — kamomad sababini aniqlash qiyin."
     },
     {
      "t": "Oldindan bashorat qilib bo'lmaydi",
      "d": "Qaysi mahsulot tugayotgani va qachon buyurtma qilish kerakligini oldindan bilish mumkin emas."
     }
    ],
    "featH": "Octopos qanday yordam beradi?",
    "featP": "Avtomatik hisob-kitob va nazorat — kamomadlar o'z-o'zidan kamayadi.",
    "feat": [
     {
      "t": "Avtomatik ombor hisobi",
      "d": "Har bir sotilgan mahsulot avtomatik hisobdan chiqariladi — qo'lda hisob-kitob kerak emas."
     },
     {
      "t": "Zaxira ogohlantirishlari",
      "d": "Chegaralarni sozlang — mahsulot tugayotganini yoki sarf oshayotganini darhol bilasiz."
     },
     {
      "t": "Sarf tahlili",
      "d": "Qaysi mahsulot ko'proq sarflanayotgani va nima uchun — barcha ma'lumotlar tahlilda."
     },
     {
      "t": "Buyurtmani rejalashtirish",
      "d": "Tizim qachon va qancha buyurtma qilish kerakligini aniqlaydi — ortiqcha ham, kam ham bo'lmaydi."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Mahsulotlarni qo'shing",
      "d": "Barcha mahsulotlarni va boshlang'ich qoldiqlarni tizimga kiriting."
     },
     {
      "t": "Sotish avtomatik hisobdan chiqaradi",
      "d": "Har bir sotish avtomatik ravishda ombordagi qoldiqlarni kamaytiradi."
     },
     {
      "t": "Nazorat qiling",
      "d": "Kamomadlarni oldindan ko'ring va o'z vaqtida buyurtma bering."
     }
    ],
    "faq": [
     {
      "q": "Kamomadlar qanday kamayadi?",
      "a": "Avtomatik ombor hisobi va real vaqt nazorati tufayli kamomadlar sezilarli darajada kamayadi."
     },
     {
      "q": "Qachon buyurtma qilish kerakligini bilish mumkinmi?",
      "a": "Ha, tizim ombor qoldiqlarini tahlil qilib, optimal buyurtma vaqtini aniqlaydi."
     },
     {
      "q": "Sarf tahlili bormi?",
      "a": "Ha, qaysi mahsulot ko'proq sarflanayotganini va nima uchun batafsil ko'rish mumkin."
     }
    ],
    "ctaH": "Kamomadlarni yo'qotmoqchimisiz?"
   },
   "ru": {
    "title": "Борьба с недостачей — Контроль склада ресторана",
    "desc": "Автоматический складской учёт и контроль в реальном времени. Каждый продукт на учёте — лишних списаний быть не может.",
    "name": "Борьба с недостачей",
    "h1": "Борьба с недостачей на складе ресторана",
    "lead": "Автоматический складской учёт и контроль в реальном времени. Каждый продукт на учёте — лишних списаний быть не может.",
    "probH": "Почему рестораны теряют контроль над складом?",
    "prob": [
     {
      "t": "Нет контроля на складе",
      "d": "Куда уходит продукция — неизвестно; факты видны только в бухгалтерии."
     },
     {
      "t": "Ошибки ручного учёта",
      "d": "Человеческий фактор приводит к неточным данным — найти причину недостачи сложно."
     },
     {
      "t": "Предсказать невозможно",
      "d": "Какой продукт заканчивается и когда нужно делать заказ — узнать заранее не получается."
     }
    ],
    "featH": "Что делает Octopos для борьбы с недостачей?",
    "featP": "Автоматический учёт и контроль — недостачи снижаются сами.",
    "feat": [
     {
      "t": "Автоматический складской учёт",
      "d": "Каждый проданный товар автоматически списывается со склада — ручной подсчёт не нужен."
     },
     {
      "t": "Оповещения о запасах",
      "d": "Настройте пороги — система уведомит, когда продукция заканчивается или расход превышен."
     },
     {
      "t": "Анализ расходов",
      "d": "Какой продукт тратится больше и почему — все данные в аналитике."
     },
     {
      "t": "Планирование закупок",
      "d": "Система определяет, когда и сколько заказывать — ни лишнего, ни недостающего."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Добавьте продукцию",
      "d": "Внесите все товары на складе и начальные остатки в систему."
     },
     {
      "t": "Продажи списываются автоматически",
      "d": "Каждая продажа автоматически уменьшает остатки на складе."
     },
     {
      "t": "Контролируйте",
      "d": "Предвидите недостачи и делайте заказы вовремя."
     }
    ],
    "faq": [
     {
      "q": "Как снижаются недостачи?",
      "a": "Автоматический складской учёт и контроль в реальном времени."
     },
     {
      "q": "Можно ли узнать, когда делать заказ?",
      "a": "Да, система анализирует остатки и определяет оптимальное время заказа."
     },
     {
      "q": "Есть ли анализ расходов?",
      "a": "Да, какой продукт тратится больше и почему — всё в аналитике."
     }
    ],
    "ctaH": "Хотите избавиться от недостач?"
   },
   "en": {
    "title": "Reducing Shortages — Every product accounted for",
    "desc": "Automatic inventory and real-time control — shortages decrease significantly. Every product is tracked.",
    "name": "Reducing Shortages",
    "h1": "Reducing Shortages — every product accounted for",
    "lead": "Automatic inventory and real-time control — shortages decrease significantly. Every product is tracked.",
    "probH": "Why shortages happen",
    "prob": [
     {
      "t": "Manual deduction errors",
      "d": "Staff forget to log ingredients or enter wrong quantities — stock numbers drift from reality."
     },
     {
      "t": "Theft and pilferage",
      "d": "Without accountability, products disappear — and there's no way to trace who took what."
     },
     {
      "t": "No audit trail",
      "d": "When every staff member has the same access, there's no way to hold anyone accountable."
     }
    ],
    "featH": "Eliminate shortages with automation",
    "featP": "Automatic deductions and full accountability — every product is accounted for.",
    "feat": [
     {
      "t": "Auto deduction",
      "d": "Every sale automatically deducts ingredients — no manual entry, no opportunity for errors."
     },
     {
      "t": "Staff audit trail",
      "d": "Every action is logged with the employee's name — full transparency and accountability."
     },
     {
      "t": "Real-time alerts",
      "d": "Get notified instantly when stock drops unexpectedly — catch issues before they escalate."
     },
     {
      "t": "Waste reports",
      "d": "Detailed reports show where products go — spot patterns and reduce waste over time."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Set up inventory",
      "d": "Add your ingredients and define recipes for each menu item."
     },
     {
      "t": "Link to POS",
      "d": "Connect inventory to your POS — every sale triggers automatic deductions."
     },
     {
      "t": "Watch shortages disappear",
      "d": "Track accountability in real time and watch stock accurately update."
     }
    ],
    "faq": [
     {
      "q": "How does Octopos reduce shortages?",
      "a": "Every transaction automatically deducts ingredients. No manual entry means no opportunity for theft or errors."
     },
     {
      "q": "Can I see who made changes?",
      "a": "Yes, every action is logged with the staff member's name."
     },
     {
      "q": "Does it work in real time?",
      "a": "Yes, stock levels update instantly with every sale."
     }
    ],
    "ctaH": "Stop losing money"
   },
   "ko": {
    "title": "품질 관리 — 모든 제품이 추적됩니다",
    "desc": "자동 재고 관리와 실시간 통제 — 품질이 크게 줄어듭니다. 모든 제품이 추적됩니다.",
    "name": "품질 관리",
    "h1": "품질 관리 — 모든 제품이 추적됩니다",
    "lead": "자동 재고 관리와 실시간 통제 — 품질이 크게 줄어듭니다. 모든 제품이 추적됩니다.",
    "probH": "품질이 발생하는 이유",
    "prob": [
     {
      "t": "수기 차감 오류",
      "d": "직원이 재료를 기록하거나 잘못된 수량을 입력하면 재고 수치가 실제와 달라집니다."
     },
     {
      "t": "도난 및 절도",
      "d": "책임감이 없으면 제품이 사라지고 누가 가져갔는지 추적할 방법이 없습니다."
     },
     {
      "t": "감사 기록 부족",
      "d": "모든 직원이 동일한 접근 권한을 가지면 책임을 물을 방법이 없습니다."
     }
    ],
    "featH": "자동화로 품질을 제거하세요",
    "featP": "자동 차감과 완전한 책임감 — 모든 제품이 추적됩니다.",
    "feat": [
     {
      "t": "자동 차감",
      "d": "모든 판매가 자동으로 재료를 차감합니다 — 수기 입력이 없으면 오류의 기회도 없습니다."
     },
     {
      "t": "직원 감사 기록",
      "d": "모든 작업이 직원 이름과 함께 기록됩니다 — 완전한 투명성과 책임감."
     },
     {
      "t": "실시간 알림",
      "d": "재고가 예상치 못하게 떨어지면 즉시 알림을 받습니다 — 문제가 확대되기 전에 발견합니다."
     },
     {
      "t": "낭비 보고서",
      "d": "상세한 보고서가 제품의 흐름을 보여줍니다 — 패턴을 파악하고 시간이 지남에 따라 낭비를 줄입니다."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "재고 설정",
      "d": "재료를 추가하고 각 메뉴 항목에 대한 레시피를 정의합니다."
     },
     {
      "t": "POS 연결",
      "d": "재고를 POS와 연결합니다 — 모든 판매가 자동 차감을 트리거합니다."
     },
     {
      "t": "품질이 사라지는 것을 확인하세요",
      "d": "실시간으로 책임감을 추적하고 재고가 정확하게 업데이트되는 것을 확인합니다."
     }
    ],
    "faq": [
     {
      "q": "Octopos가 품질을 줄이는 방법은?",
      "a": "모든 거래가 자동으로 재료를 차감합니다. 수기 입력이 없으면 도난이나 오류의 기회가 없습니다."
     },
     {
      "q": "누가 변경했는지 볼 수 있나요?",
      "a": "네, 모든 작업이 직원 이름과 함께 기록됩니다."
     },
     {
      "q": "실시간으로 작동하나요?",
      "a": "네, 각 판매 시 재고 수준이 즉시 업데이트됩니다."
     }
    ],
    "ctaH": "손실을 멈추세요"
   }
  }
 },
 {
  "key": "remote-cafe-management",
  "app": "dash",
  "slugs": {
   "uz": "kafeni-boshqarish",
   "ru": "distantsionnoye-upravleniye",
   "en": "remote-cafe-management",
   "ko": "remote-cafe-management"
  },
  "content": {
   "uz": {
    "title": "Kafeni telefonadan boshqarish — Har qayerdan nazorat",
    "desc": "Qayerda bo'lsangiz ham, kafengizni to'liq boshqaring. Analitika, ombor, moliya va xodimlar — real vaqtda.",
    "name": "Kafeni boshqarish",
    "h1": "Kafeni telefonadan boshqarish",
    "lead": "Ishoningizdan qat'i nazar, kafengizni har qayerdan nazorat qiling. Analitika, ombor, moliya va xodimlar — real vaqtda.",
    "probH": "Nima uchun egalar masofadan boshqarishi kerak?",
    "prob": [
     {
      "t": "Fizik mavjudlik kerak",
      "d": "Savdo hajmi, qoldiqlar va xodimlar faqat kafeda bo'lganingizda ko'rinadi."
     },
     {
      "t": "Xodimlarga ishonish qiyin",
      "d": "Nima sodir bo'layotganini bilish uchun doimiy joyda bo'lish kerak — bu mumkin emas."
     },
     {
      "t": "Tez qarorlar qiyin",
      "d": "Savdo tushib ketayotganini yoki ombor qisqarayotganini faqat kechqurun bilasiz."
     }
    ],
    "featH": "Octopos nima beradi?",
    "featP": "Barcha ma'lumotlar real vaqtda — telefon yoki kompyuteringizda.",
    "feat": [
     {
      "t": "Mobil ilova",
      "d": "iOS va Android ilova orqali istalgan vaqtda tizimga kiring."
     },
     {
      "t": "Real vaqt hisobotlari",
      "d": "Joriy savdo, qoldiqlar va xodimlar faoliyatini jonli ko'ring."
     },
     {
      "t": "Xabardorlik",
      "d": "Kritik holatlar — kam qoldiqlar, bekor qilingan cheklar — darhol xabardorlik."
     },
     {
      "t": "Xodimlarni boshqarish",
      "d": "Smenalar, ruxsatlar va kirishlarni masofadan turib belgilang."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Ilovani o'rnating",
      "d": "iOS yoki Android ga Octopos ni yuklab oling."
     },
     {
      "t": "Tizimga kiring",
      "d": "Login va parol bilan barcha ma'lumotlaringizga kiring."
     },
     {
      "t": "Nazorat qiling",
      "d": "Qayerda bo'lsangiz ham, istalgan vaqtda to'liq boshqarish."
     }
    ],
    "faq": [
     {
      "q": "Telefondan boshqarish mumkinmi?",
      "a": "Ha, iOS va Android ilova orqali istalgan vaqtda tizimga kiring."
     },
     {
      "q": "Xabardor qilish tizimi bormi?",
      "a": "Ha, kritik holatlar — kam qoldiqlar, bekor qilingan cheklar — darhol xabardor qilinadi."
     },
     {
      "q": "Xodimlarni masofadan boshqarish mumkinmi?",
      "a": "Ha, smenalar, ruxsatlar va turnirlarni masofadan turib belgilash mumkin."
     }
    ],
    "ctaH": "Kafengizni istalgan joydan boshqaringmi?"
   },
   "ru": {
    "title": "Удалённое управление кафе — Полный контроль из любого места",
    "desc": "Удалённое управление кафе с телефона: аналитика, склад, финансы и персонал — в реальном времени из любой точки мира.",
    "name": "Дистанционное управление",
    "h1": "Удалённое управление кафе с телефона",
    "lead": "Где бы вы ни были — полный контроль над вашим заведением. Аналитика, склад, финансы и персонал — в реальном времени.",
    "probH": "Почему владельцы кафе не могут контролировать всё?",
    "prob": [
     {
      "t": "Нужно присутствовать лично",
      "d": "Объём продаж, остатки и действия персонала видны только при нахождении в кафе."
     },
     {
      "t": "Доверие к персоналу — риск",
      "d": "Без возможности контролировать процессы, владелец не знает, что происходит в его заведении."
     },
     {
      "t": "Позднее принятие решений",
      "d": "Снижение продаж или уменьшение остатков на складе становится известно только к вечеру."
     }
    ],
    "featH": "Что даёт Octopos для удалённого управления?",
    "featP": "Все данные в реальном времени — на вашем телефоне или компьютере.",
    "feat": [
     {
      "t": "Мобильное приложение",
      "d": "iOS и Android приложение для доступа в систему в любое время."
     },
     {
      "t": "Отчёты в реальном времени",
      "d": "Текущие продажи, остатки и активность персонала — всё вживую."
     },
     {
      "t": "Уведомления",
      "d": "Критические ситуации — малые остатки, отменённые чеки — мгновенные оповещения."
     },
     {
      "t": "Управление персоналом",
      "d": "Смены, роли и доступы настраивайте удалённо."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Установите приложение",
      "d": "Скачайте Octopos на iOS или Android."
     },
     {
      "t": "Войдите в систему",
      "d": "Ваш логин и пароль дают доступ ко всем данным кафе."
     },
     {
      "t": "Контролируйте",
      "d": "Откуда угодно, в любое время — полное управление вашим кафе."
     }
    ],
    "faq": [
     {
      "q": "Можно ли управлять с телефона?",
      "a": "Да, через приложение iOS и Android в любое время."
     },
     {
      "q": "Есть ли система уведомлений?",
      "a": "Да, критические ситуации — мгновенные оповещения."
     },
     {
      "q": "Можно ли управлять персоналом удалённо?",
      "a": "Да, смены, роли и доступы настраиваются удалённо."
     }
    ],
    "ctaH": "Хотите управлять кафе из любой точки мира?"
   },
   "en": {
    "title": "Remote Cafe Management — Full control from anywhere",
    "desc": "Manage your cafe from your phone: analytics, inventory, finance and staff — in real time from anywhere in the world.",
    "name": "Remote Cafe Management",
    "h1": "Remote Cafe Management — full control from anywhere",
    "lead": "Manage your cafe from your phone: analytics, inventory, finance and staff — in real time from anywhere in the world.",
    "probH": "Why remote management matters",
    "prob": [
     {
      "t": "Can't be everywhere",
      "d": "When you're not on-site, you rely on phone calls and trust. Visibility disappears."
     },
     {
      "t": "Delayed decisions",
      "d": "Waiting for daily reports means reacting to yesterday's problems instead of today's."
     },
     {
      "t": "Trust issues",
      "d": "Without transparent data, you can't be sure if operations are running correctly."
     }
    ],
    "featH": "Your cafe in your pocket",
    "featP": "Full access to everything happening in your cafe — from anywhere in the world.",
    "feat": [
     {
      "t": "Live dashboard",
      "d": "Real-time sales, orders and performance — updated as it happens, on your phone."
     },
     {
      "t": "Inventory alerts",
      "d": "Get notified when stock runs low before it impacts service. Never run out unexpectedly."
     },
     {
      "t": "Staff oversight",
      "d": "See who's working, what they're doing and how performance stacks up — remotely."
     },
     {
      "t": "Financial reports",
      "d": "Revenue, expenses and profit — available anytime, anywhere, in real time."
     }
    ],
    "stepsH": "Get started in 3 steps",
    "steps": [
     {
      "t": "Connect your cafe",
      "d": "Plug in your POS and existing systems in minutes."
     },
     {
      "t": "Set up your dashboard",
      "d": "Customize views, alerts and permissions."
     },
     {
      "t": "Manage from anywhere",
      "d": "Access everything from your phone, wherever you are."
     }
    ],
    "faq": [
     {
      "q": "Can I manage from my phone?",
      "a": "Yes, the full dashboard is available on mobile."
     },
     {
      "q": "Do I need to be at the cafe?",
      "a": "No, everything is accessible remotely — sales, inventory, staff and reports."
     },
     {
      "q": "Is it secure?",
      "a": "Yes, role-based access ensures staff only see what they need."
     }
    ],
    "ctaH": "Manage your cafe remotely"
   },
   "ko": {
    "title": "원격 카페 관리 — 어디서든 완전한 통제",
    "desc": "휴대폰으로 카페를 관리하세요: 분석, 재고, 재무 및 직원 — 세계 어디서든 실시간으로.",
    "name": "원격 카페 관리",
    "h1": "원격 카페 관리 — 어디서든 완전한 통제",
    "lead": "휴대폰으로 카페를 관리하세요: 분석, 재고, 재무 및 직원 — 세계 어디서든 실시간으로.",
    "probH": "원격 관리가 중요한 이유",
    "prob": [
     {
      "t": "모든 곳에 있을 수 없음",
      "d": "여러 지점을 운영할 때 모든 매장에 동시에 있을 수는 없습니다."
     },
     {
      "t": "지연된 의사결정",
      "d": "실시간 데이터 없이 의사결정을 내리면 기회를 놓치거나 문제가 커질 수 있습니다."
     },
     {
      "t": "신뢰 문제",
      "d": "직원의 보고만 믿고 운영하면 불투명한 관리가 될 수 있습니다."
     }
    ],
    "featH": "카페가 주머니 속에",
    "featP": "언제 어디서든 카페의 모든 것을 확인하고 관리하세요.",
    "feat": [
     {
      "t": "실시간 대시보드",
      "d": "매출, 주문, 고객 수를 실시간으로 확인하세요. 지연 없이."
     },
     {
      "t": "재고 알림",
      "d": "원재료가 부족해지면 자동으로 알림을 받으세요. 품절 위기를 사전에 방지."
     },
     {
      "t": "직원 감독",
      "d": "직원의 근무 시간, 주문 처리 속도, 매출 기여도를 원격으로 모니터링하세요."
     },
     {
      "t": "재무 보고서",
      "d": "일별, 주별, 월별 재무 보고서를 자동으로 생성하고 확인하세요."
     }
    ],
    "stepsH": "3단계로 시작하세요",
    "steps": [
     {
      "t": "카페 연결",
      "d": "카페의 POS 시스템을 Octopos에 연결하세요."
     },
     {
      "t": "대시보드 설정",
      "d": "대시보드 레이아웃과 알림을 설정하세요."
     },
     {
      "t": "어디서든 관리",
      "d": "휴대폰으로 어디서든 카페를 관리하세요."
     }
    ],
    "faq": [
     {
      "q": "휴대폰으로 관리할 수 있나요?",
      "a": "네, 전체 대시보드를 모바일에서 사용할 수 있습니다."
     },
     {
      "q": "카페에 있을 필요가 없나요?",
      "a": "네, 매출, 재고, 직원 및 보고서에 원격으로 접근할 수 있습니다."
     },
     {
      "q": "보안이 되나요?",
      "a": "네, 역할 기반 접근 제어로 직원이 필요한 것만 볼 수 있습니다."
     }
    ],
    "ctaH": "카페를 원격으로 관리하세요"
   }
  }
 },
 {
  "key": "cafe-automation",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "kafe-avtomatlashtirish",
   "ru": "avtomatizatsiya-kafe",
   "en": "cafe-automation",
   "ko": "cafe-automation"
  },
  "content": {
   "uz": {
    "title": "Kafe avtomatlashtirish — Boshqaruvni soddalashtiring",
    "desc": "Kafe va restoranni avtomatlashtirish: POS, oshxona displey, QR menyu va boshqaruv paneli — bitta platformada. 30 kun bepul.",
    "name": "Kafe avtomatlashtirish",
    "h1": "Kafe avtomatlashtirish — boshqaruvni soddalashtiring",
    "lead": "Kafe va restoranni bitta platformada boshqaring — POS, oshxona displey, QR menyu va analitika. Boshlang'ich bosqichda bepul.",
    "probH": "Nima uchun kafe avtomatlashtirish kerak?",
    "prob": [
     {
      "t": "Qo'lda boshqarish",
      "d": "Hisob-kitob, buyurtmalar va ombor — hammasi qo'lda. Vaqt ketadi va xatolar yuz beradi."
     },
     {
      "t": "Chalkashliklar",
      "d": "Tizimsiz ishlaganda buyurtmalar aralashadi, hisob xato bo'ladi va nazorat qiyin."
     },
     {
      "t": "Ko'rinish yo'q",
      "d": "Daromad, qoldiq va xarajatlar real vaqtda ko'rinmasa, to'g'ri qaror qabul qilish qiyin."
     }
    ],
    "featH": "Octopos nima taklif qiladi?",
    "featP": "Beshta ilova, bitta platforma — barcha operatsiyalaringiz sinxron ishlaydi.",
    "feat": [
     {
      "t": "POS tizimi",
      "d": "Vizual zal rejasi, stol boshqaruvi va tezkor buyurtma olish — bir necha bosish bilan."
     },
     {
      "t": "Oshxona displeyi",
      "d": "Buyurtmalar avtomatik yo'naltiriladi, taymerlar va ovozli signal bilan."
     },
     {
      "t": "QR menyu",
      "d": "Mehmonlar o'zlari buyurtma beradi — ofitsiantsiz ham ishlaydi."
     },
     {
      "t": "Boshqaruv paneli",
      "d": "Daromad, ombor va hisobotlar — bitta joyda. Real vaqtda tahlil."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Dash'ni tayyorlang",
      "d": "Pozitsiyalarni qo'shing, zal rejasini chizing va xodimlarni belgilang."
     },
     {
      "t": "POS'ni ishga tushiring",
      "d": "Jamoa sodda interfeysi orqali buyurtma qabul qila boshlaydi."
     },
     {
      "t": "Oshxonani faollashtiring",
      "d": "Oshxona displeyini o'rnating va buyurtmalarni kuzating."
     }
    ],
    "faq": [
     {
      "q": "Qanday biznes turlariga mos keladi?",
      "a": "Kafelar, restoranlar, barlar, fast food va boshqa umumiy ovqatlanish maskanlari."
     },
     {
      "q": "Qurilmalar talab qilinadimi?",
      "a": "Har qanday planshet yoki kompyuter — alohida uskuna sotib olish shart emas."
     },
     {
      "q": "O'rnatish qancha vaqt oladi?",
      "a": "1-2 soat ichida tizim to'liq ishga tushiriladi."
     }
    ],
    "ctaH": "Kafengizni avtomatlashtiring"
   },
   "ru": {
    "title": "Автоматизация кафе — Упростите управление",
    "desc": "Автоматизация кафе и ресторана: POS, кухонный экран, QR-меню и панель управления — на одной платформе. Первый месяц бесплатно.",
    "name": "Автоматизация кафе",
    "h1": "Автоматизация кафе — упростите управление",
    "lead": "Управляйте кафе и рестораном на одной платформе — POS, кухонный экран, QR-меню и аналитика. Первый месяц бесплатно.",
    "probH": "Зачем автоматизировать кафе?",
    "prob": [
     {
      "t": "Ручное управление",
      "d": "Расчёты, заказы и склад — всё вручную. Это отнимает время и приводит к ошибкам."
     },
     {
      "t": "Хаос и путаница",
      "d": "Без системы заказы путаются, расчёт неверный, а контроль затруднён."
     },
     {
      "t": "Нет видимости",
      "d": "Выручка, остатки и расходы не видны в реальном времени — принимать решения трудно."
     }
    ],
    "featH": "Что предлагает Octopos?",
    "featP": "Пять приложений, одна платформа — все операции синхронизированы.",
    "feat": [
     {
      "t": "POS-система",
      "d": "Визуальный план зала, управление столами и быстрый приём заказов — в несколько касаний."
     },
     {
      "t": "Кухонный экран",
      "d": "Заказы автоматически направляются — с таймерами и звуковыми сигналами."
     },
     {
      "t": "QR-меню",
      "d": "Гости заказывают сами — работает и без официанта."
     },
     {
      "t": "Панель управления",
      "d": "Выручка, склад и отчёты — в одном месте. Аналитика в реальном времени."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Настройте Дашборд",
      "d": "Добавьте позиции, спроектируйте зал и задайте права сотрудников."
     },
     {
      "t": "Запустите POS",
      "d": "Команда сразу начнёт принимать заказы через простой интерфейс."
     },
     {
      "t": "Подключите кухню",
      "d": "Установите кухонный экран и наблюдайте за заказами."
     }
    ],
    "faq": [
     {
      "q": "Какие заведения подходят?",
      "a": "Кафе, рестораны, бары, фастфуд и другие заведения общественного питания."
     },
     {
      "q": "Нужно ли покупать оборудование?",
      "a": "Любой планшет или компьютер — покупка специального оборудования не требуется."
     },
     {
      "q": "Сколько времени занимает настройка?",
      "a": "1-2 часа — и система полностью запущена."
     }
    ],
    "ctaH": "Автоматизируйте кафе"
   },
   "en": {
    "title": "Cafe Automation — Simplify your management",
    "desc": "Automate your cafe and restaurant: POS, kitchen display, QR menu and management panel — on one platform. 30 days free.",
    "name": "Cafe Automation",
    "h1": "Cafe Automation — simplify your management",
    "lead": "POS, kitchen display, QR menu and management panel — on one platform. 30 days free.",
    "probH": "Why automate your cafe?",
    "prob": [
     {
      "t": "Too many tools",
      "d": "Billing, orders and inventory — all in different apps. It wastes time and causes errors."
     },
     {
      "t": "Manual processes",
      "d": "Without a system, orders get mixed up, bills are wrong, and control is difficult."
     },
     {
      "t": "No unified view",
      "d": "Revenue, stock and expenses not visible in real time — making decisions is hard."
     }
    ],
    "featH": "One platform, everything connected",
    "featP": "Five apps, one platform — all your operations work in sync.",
    "feat": [
     {
      "t": "POS & ordering",
      "d": "Visual floor plan, table management and quick order taking — in a few taps."
     },
     {
      "t": "Kitchen display",
      "d": "Orders are automatically routed — with timers and audio alerts."
     },
     {
      "t": "QR menu",
      "d": "Guests order themselves — works even without a waiter."
     },
     {
      "t": "Management dashboard",
      "d": "Revenue, inventory and reports — all in one place. Real-time analytics."
     }
    ],
    "stepsH": "Get started in three steps",
    "steps": [
     {
      "t": "Tell us about your cafe",
      "d": "Add menu items, design your floor plan and set up staff permissions."
     },
     {
      "t": "We set it up",
      "d": "Our team configures everything so you can start taking orders right away."
     },
     {
      "t": "Start serving smarter",
      "d": "Launch your cafe with a modern system your team will love."
     }
    ],
    "faq": [
     {
      "q": "What does cafe automation include?",
      "a": "POS, kitchen display, QR menu, inventory, reports and staff management."
     },
     {
      "q": "How long does setup take?",
      "a": "Most cafes are up and running within a day."
     },
     {
      "q": "Is training included?",
      "a": "Yes, we provide free setup assistance and training."
     }
    ],
    "ctaH": "Automate your cafe"
   },
   "ko": {
    "title": "카페 자동화 — 관리를 간소화",
    "desc": "카페와 레스토랑을 자동화하세요: POS, 주방 디스플레이, QR 메뉴 및 관리 패널 — 하나의 플랫폼에서. 30일 무료.",
    "name": "카페 자동화",
    "h1": "카페 자동화 — 관리를 간소화하세요",
    "lead": "POS, 주방 디스플레이, QR 메뉴 및 관리 패널 — 하나의 플랫폼에서. 30일 무료.",
    "probH": "카페를 자동화해야 하는 이유",
    "prob": [
     {
      "t": "너무 많은 도구",
      "d": "과금, 주문과 재고가 각각 다른 앱에 있습니다. 시간을 낭비하고 오류를 유발합니다."
     },
     {
      "t": "수기 프로세스",
      "d": "시스템이 없으면 주문이 뒤섞이고, 계산서가 잘못되고, 관리가 어려워집니다."
     },
     {
      "t": "통합된 뷰 부족",
      "d": "매출, 재고와 비용이 실시간으로 보이지 않아 의사결정이 어렵습니다."
     }
    ],
    "featH": "하나의 플랫폼, 모든것이 연결됨",
    "featP": "다섯 가지 앱, 하나의 플랫폼 — 모든 운영이 동기화됩니다.",
    "feat": [
     {
      "t": "POS 및 주문",
      "d": "시각적 매장 도면, 좌석 관리와 빠른 주문 접수 — 몇 번의 탭으로 가능합니다."
     },
     {
      "t": "주방 디스플레이",
      "d": "주문이 자동으로 라우팅됩니다 — 타이머와 오디오 알림이 포함됩니다."
     },
     {
      "t": "QR 메뉴",
      "d": "손님이 직접 주문합니다 — 웨이터 없이도 작동합니다."
     },
     {
      "t": "관리 대시보드",
      "d": "매출, 재고와 보고서가 모두 한 곳에 있습니다. 실시간 분석."
     }
    ],
    "stepsH": "세 단계로 시작하세요",
    "steps": [
     {
      "t": "카페에 대해 알려주세요",
      "d": "메뉴 항목을 추가하고, 매장 도면을 설계하며, 직원 권한을 설정합니다."
     },
     {
      "t": "설정해 드립니다",
      "d": "팀이 모든 것을 구성하여 즉시 주문을 접수할 수 있도록 합니다."
     },
     {
      "t": "더 스마트하게 서비스 시작",
      "d": "팀이 좋아할 현대적인 시스템으로 카페를 시작하세요."
     }
    ],
    "faq": [
     {
      "q": "카페 자동화에 무엇이 포함되나요?",
      "a": "POS, 주방 디스플레이, QR 메뉴, 재고, 보고서 및 직원 관리."
     },
     {
      "q": "설정에 얼마나 걸리나요?",
      "a": "대부분의 카페는 하루 내에 설정되고 운영됩니다."
     },
     {
      "q": "교육이 포함되나요?",
      "a": "네, 무료 설정 지원과 교육을 제공합니다."
     }
    ],
    "ctaH": "카페를 자동화하세요"
   }
  }
 },
 {
  "key": "restaurant-management",
  "app": "pos-restaurant",
  "slugs": {
   "uz": "restoran-boshqaruvi",
   "ru": "upravleniye-restoranom",
   "en": "restaurant-management",
   "ko": "restaurant-management"
  },
  "content": {
   "uz": {
    "title": "Restoran boshqaruvi — Butun biznesni bir joydan boshqaring",
    "desc": "Ko'p filialli restoran boshqaruvi: analitika, ombor, moliya va xodimlar — bitta boshqaruv panelidan. Real vaqt.",
    "name": "Restoran boshqaruvi",
    "h1": "Restoran boshqaruvi — butun biznesni bir joydan boshqaring",
    "lead": "Analitika, ombor, moliya va xodimlar — bitta boshqaruv panelidan. Ko'p filiallarni ham boshqarishingiz mumkin.",
    "probH": "Nima uchun boshqaruv paneli kerak?",
    "prob": [
     {
      "t": "Ma'lumotlar tarqalgan",
      "d": "Hisobotlar, ombor va moliya alohida — hammasini bir joyda ko'rish qiyin."
     },
     {
      "t": "Ko'p filial",
      "d": "Bir nechta filialni boshqarish — har biri alohida Excel da bo'lsa, chalkashlik bo'ladi."
     },
     {
      "t": "Nazorat yo'q",
      "d": "Xodimlarning kirishi va ruxsatlari nazorat qilinmasa, xavfsizlik muammo bo'ladi."
     }
    ],
    "featH": "Dash nima beradi?",
    "featP": "Barcha ma'lumotlar bitta joyda — real vaqtda tahlil qilishingiz mumkin.",
    "feat": [
     {
      "t": "Real vaqtli tahlil",
      "d": "Daromad, foyda va tendentsiyalar — bir zumda ko'rinadi."
     },
     {
      "t": "Ombor va moliya",
      "d": "Qoldiq, xarajat va daromad — hammasi bitta joyda."
     },
     {
      "t": "Rol boshqaruvi",
      "d": "Har bir xodim faqat o'ziga tegishli funksiyalarga kirishadi."
     },
     {
      "t": "Ko'p filial",
      "d": "Bir nechta filialni bitta joydan boshqaring — menyu, inventar va hisobotlar."
     }
    ],
    "stepsH": "Uch qadamda boshlang",
    "steps": [
     {
      "t": "Filiallarni qo'shing",
      "d": "Bitta yoki bir nechta filial — hammasi bitta joyda."
     },
     {
      "t": "Ma'lumotlarni kiriting",
      "d": "Menyu, ombor va xodimlarni sozlang."
     },
     {
      "t": "Boshqaring",
      "d": "Real vaqtda nazorat qiling."
     }
    ],
    "faq": [
     {
      "q": "Bitta tizim bilan nechta filialni boshqarish mumkin?",
      "a": "Cheksiz. Barcha filiallar bitta dashboard dan boshqariladi."
     },
     {
      "q": "Filiallar o'rtasidagi ma'lumotlar sinxronlanadimi?",
      "a": "Ha, barcha ma'lumotlar real vaqtda sinxronlanadi."
     },
     {
      "q": "Masofadan boshqarish mumkinmi?",
      "a": "Ha, istalgan joydan internet orqali to'liq boshqarish imkoniyati."
     }
    ],
    "ctaH": "Restoranni boshqaring"
   },
   "ru": {
    "title": "Управление рестораном — Весь бизнес в одном месте",
    "desc": "Управление сетью ресторанов: аналитика, склад, финансы и персонал — из одной панели управления. В реальном времени.",
    "name": "Управление рестораном",
    "h1": "Управление рестораном — весь бизнес в одном месте",
    "lead": "Аналитика, склад, финансы и персонал — из одной панели управления. Можно управлять и сетью ресторанов.",
    "probH": "Зачем нужна панель управления?",
    "prob": [
     {
      "t": "Данные разрознены",
      "d": "Отчёты, склад и финансы в разных местах — сложно увидеть общую картину."
     },
     {
      "t": "Несколько точек",
      "d": "Управлять несколькими точками, если каждая в отдельном Excel — хаос."
     },
     {
      "t": "Нет контроля",
      "d": "Доступ сотрудников и разрешения не контролируются — вопрос безопасности."
     }
    ],
    "featH": "Что даёт Dash?",
    "featP": "Все данные в одном месте — анализируйте в реальном времени.",
    "feat": [
     {
      "t": "Аналитика в реальном времени",
      "d": "Выручка, прибыль и тенденции — видны мгновенно."
     },
     {
      "t": "Склад и финансы",
      "d": "Остатки, расходы и доходы — всё в одном месте."
     },
     {
      "t": "Ролевой доступ",
      "d": "Каждый сотрудник видит только свои данные."
     },
     {
      "t": "Многоточечное управление",
      "d": "Управляйте несколькими точками из одного места — меню, склад и отчёты."
     }
    ],
    "stepsH": "Начните за три шага",
    "steps": [
     {
      "t": "Добавьте точки",
      "d": "Одна или несколько точек — всё в одном месте."
     },
     {
      "t": "Введите данные",
      "d": "Настройте меню, склад и персонал."
     },
     {
      "t": "Управляйте",
      "d": "Контролируйте в реальном времени."
     }
    ],
    "faq": [
     {
      "q": "Сколько точек можно управлять?",
      "a": "Неограниченно. Все точки из одного дашборда."
     },
     {
      "q": "Синхронизируются ли данные между точками?",
      "a": "Да, все данные синхронизируются в реальном времени."
     },
     {
      "q": "Можно ли управлять удалённо?",
      "a": "Да, полное управление из любой точки мира через интернет."
     }
    ],
    "ctaH": "Управляйте рестораном"
   },
   "en": {
    "title": "Restaurant Management — Run your entire business from one place",
    "desc": "Multi-location restaurant management: analytics, inventory, finance and staff — from one dashboard. Real-time.",
    "name": "Restaurant Management",
    "h1": "Restaurant Management — run your entire business from one place",
    "lead": "Multi-location restaurant management: analytics, inventory, finance and staff — from one dashboard. Real-time.",
    "probH": "Why restaurant management software matters",
    "prob": [
     {
      "t": "Scattered data",
      "d": "Sales in one app, inventory in another, staff in spreadsheets. Nothing connects."
     },
     {
      "t": "No central control",
      "d": "Managing multiple locations without a unified view leads to inconsistencies and lost revenue."
     },
     {
      "t": "Manual reporting",
      "d": "Compiling reports from multiple sources takes days. By the time you have them, they're outdated."
     }
    ],
    "featH": "Everything in one dashboard",
    "featP": "Complete visibility across all your locations — analytics, staff, finance and inventory.",
    "feat": [
     {
      "t": "Multi-location view",
      "d": "Compare performance across branches, identify top performers and spot issues instantly."
     },
     {
      "t": "Staff & roles",
      "d": "Assign roles, set permissions, manage schedules and track performance — all from one place."
     },
     {
      "t": "Financial overview",
      "d": "Revenue, expenses, profit margins and cash flow — updated in real time across all locations."
     },
     {
      "t": "Inventory control",
      "d": "Track stock levels, set alerts for low inventory and manage suppliers from one dashboard."
     }
    ],
    "stepsH": "Get started in 3 steps",
    "steps": [
     {
      "t": "Add your locations",
      "d": "Connect each branch to your central dashboard."
     },
     {
      "t": "Set up roles & permissions",
      "d": "Define who sees what across your organization."
     },
     {
      "t": "Manage from anywhere",
      "d": "Access real-time data on phone or desktop."
     }
    ],
    "faq": [
     {
      "q": "Can I manage multiple locations?",
      "a": "Yes, view and manage all locations from a single dashboard."
     },
     {
      "q": "Does it include staff management?",
      "a": "Yes, roles, permissions, schedules and performance tracking."
     },
     {
      "q": "Is there a mobile app?",
      "a": "Yes, manage your restaurant from anywhere on your phone."
     }
    ],
    "ctaH": "Take control of your restaurant"
   },
   "ko": {
    "title": "레스토랑 관리 — 모든 비즈니스를 한 곳에서 관리",
    "desc": "다지점 레스토랑 관리: 분석, 재고, 재무 및 직원 — 하나의 대시보드에서. 실시간.",
    "name": "레스토랑 관리",
    "h1": "레스토랑 관리 — 모든 비즈니스를 한 곳에서 관리하세요",
    "lead": "다지점 레스토랑 관리: 분석, 재고, 재무 및 직원 — 하나의 대시보드에서. 실시간.",
    "probH": "레스토랑 관리 소프트웨어가 중요한 이유",
    "prob": [
     {
      "t": "분산된 데이터",
      "d": "여러 시스템에 데이터가 흩어져 있으면 비즈니스 전체를 한눈에 파악하기 어렵습니다."
     },
     {
      "t": "중앙 통제 부족",
      "d": "각 지점이 독립적으로 운영되면 정책과 기준을 통일하기 어렵습니다."
     },
     {
      "t": "수기 보고",
      "d": "수기로 보고서를 작성하면 시간이 오래 걸리고 정확성이 떨어집니다."
     }
    ],
    "featH": "모든것이 하나의 대시보드에서",
    "featP": "모든 지점을 한눈에 파악하고 효율적으로 관리하세요.",
    "feat": [
     {
      "t": "다지점 보기",
      "d": "하나의 화면에서 모든 지점의 매출, 주문 및 실적을 비교하세요."
     },
     {
      "t": "직원 및 역할",
      "d": "직원별 역할과 권한을 설정하고, 일정과 성과를 관리하세요."
     },
     {
      "t": "재무 개요",
      "d": "매출, 비용, 이익을 실시간으로 확인하고 재무 상태를 파악하세요."
     },
     {
      "t": "재고 관리",
      "d": "원재료 재고를 추적하고, 자동 주문 알림으로 품절을 방지하세요."
     }
    ],
    "stepsH": "3단계로 시작하세요",
    "steps": [
     {
      "t": "지점 추가",
      "d": "각 지점을 시스템에 등록하세요."
     },
     {
      "t": "역할 및 권한 설정",
      "d": "직원별 역할과 접근 권한을 설정하세요."
     },
     {
      "t": "어디서든 관리",
      "d": "휴대폰이나 컴퓨터로 어디서든 관리하세요."
     }
    ],
    "faq": [
     {
      "q": "다지점을 관리할 수 있나요?",
      "a": "네, 하나의 대시보드에서 모든 지점을 보고 관리할 수 있습니다."
     },
     {
      "q": "직원 관리가 포함되나요?",
      "a": "네, 역할, 권한, 일정 및 성과 추적이 포함됩니다."
     },
     {
      "q": "모바일 앱이 있나요?",
      "a": "네, 휴대폰으로 어디서든 레스토랑을 관리할 수 있습니다."
     }
    ],
    "ctaH": "레스토랑을 통제하세요"
   }
  }
 }
];
