/** i18n dictionary + runtime.
 *
 * Server always renders Uzbek (the default). This dictionary holds the
 * en/ru/ko/tr overrides, keyed by `data-i18n` attributes in the markup.
 * `applyLang()` swaps text on load and on language change; when the target
 * is `uz` it restores the original server-rendered text.
 *
 * Template placeholders: `{n}` (data-n), `{name}` (data-name).
 * Attribute translations: `data-i18n-attr="aria-label:key;alt:key2"`.
 */

export const LANGS = [
  { code: "uz", native: "O'zbekcha" },
  { code: "en", native: "English" },
  { code: "ru", native: "Русский" },
  { code: "ko", native: "한국어" },
  { code: "tr", native: "Türkçe" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];
export type Dict = Partial<Record<Lang, string>>;

/** All route locales. `uz` is the default and lives at the site root. */
export const LOCALES = ["uz", "en", "ru", "ko", "tr"] as const;
/** Locales that get a URL prefix (`/en`, `/ru`, `/ko`, `/tr`). */
export const PREFIXED_LOCALES = ["en", "ru", "ko", "tr"] as const;

export const STRINGS: Record<string, Dict> = {
  /* ---------- top nav ---------- */
  "nav.apps": { en: "Apps", ru: "Приложения", ko: "앱", tr: "Uygulamalar" },
  "nav.solutions": {
    en: "Solutions",
    ru: "Решения",
    ko: "솔루션",
    tr: "Çözümler",
  },
  "nav.pricing": { en: "Pricing", ru: "Тарифы", ko: "요금제", tr: "Fiyatlar" },
  "nav.contact": {
    en: "Contact",
    ru: "Контакты",
    ko: "연락처",
    tr: "İletişim",
  },
  "nav.lang": { en: "Language", ru: "Язык", ko: "언어", tr: "Dil" },
  "nav.menu": { en: "Menu", ru: "Меню", ko: "메뉴", tr: "Menü" },

  /* ---------- hero ---------- */
  "hero.title1": {
    en: "One platform.",
    ru: "Одна платформа.",
    ko: "하나의 플랫폼.",
    tr: "Tek platform.",
  },
  "hero.title2": {
    en: "Eight apps.",
    ru: "Восемь приложений.",
    ko: "여덟 개의 앱.",
    tr: "Sekiz uygulama.",
  },
  "hero.body": {
    en: "POS, KDS, dashboard, QR menu, web store and courier dispatcher — one subscription, one data source. Keeps working when the internet goes down.",
    ru: "POS, KDS, дашборд, QR-меню, веб-магазин и диспетчер курьеров — одна подписка, один источник данных. Продолжает работать без интернета.",
    ko: "POS, KDS, 대시보드, QR 메뉴, 웹 스토어, 쿠리어 디스패처 — 하나의 구독, 하나의 데이터 소스. 인터넷이 끊겨도 계속 작동합니다.",
    tr: "POS, KDS, gösterge paneli, QR menü, web mağaza ve kuryer dağıtıcısı — tek abonelik, tek veri kaynağı. İnternet kesilse de çalışmaya devam eder.",
  },
  "hero.cta": {
    en: "Try it free →",
    ru: "Попробовать бесплатно →",
    ko: "무료로 시작하기 →",
    tr: "Ücretsiz dene →",
  },
  "hero.trust": {
    en: "✓ No credit card · ✓ Live today · ✓ Works offline",
    ru: "✓ Карта не нужна · ✓ Запуск сегодня · ✓ Работает офлайн",
    ko: "✓ 카드 불필요 · ✓ 바로 시작 · ✓ 오프라인 작동",
    tr: "✓ Kredi kartı gerekmez · ✓ Bugün başla · ✓ Çevrimdışı çalışır",
  },

  /* ---------- apps section / apps index ---------- */
  "apps.heading": {
    en: "Eight apps, one synced system.",
    ru: "Восемь приложений, одна синхронная система.",
    ko: "여덟 개의 앱, 하나의 동기화 시스템.",
    tr: "Sekiz uygulama, senkron bir sistem.",
  },
  "apps.body": {
    en: "Eight apps in one synced system. Tap a card to open the app page.",
    ru: "Восемь приложений в одной синхронной системе. Нажмите на карточку, чтобы открыть страницу приложения.",
    ko: "하나의 동기화 시스템 속 여덟 개의 앱. 카드를 눌러 앱 페이지로 이동하세요.",
    tr: "Senkron bir sistemde sekiz uygulama. Uygulama sayfası için karta dokun.",
  },
  "apps.viewAll": {
    en: "All apps →",
    ru: "Все приложения →",
    ko: "모든 앱 보기 →",
    tr: "Tüm uygulamalar →",
  },
  "imgCount": {
    en: "{n} images",
    ru: "{n} изображений",
    ko: "{n}개 이미지",
    tr: "{n} görsel",
  },
  "imgPending": {
    en: "Screenshots coming soon",
    ru: "Скриншоты скоро",
    ko: "스크린샷 곧 공개",
    tr: "Ekran görüntüleri yakında",
  },

  /* ---------- solutions ---------- */
  "sol.heading": {
    en: "Ready-made solutions for your business",
    ru: "Готовые решения для вашего бизнеса",
    ko: "비즈니스를 위한 완성형 솔루션",
    tr: "İşiniz için hazır çözümler",
  },
  "sol.1t": {
    en: "Restaurants & cafés",
    ru: "Рестораны и кафе",
    ko: "레스토랑·카페",
    tr: "Restoranlar ve kafeler",
  },
  "sol.1d": {
    en: "Floor plan, QR menu, kitchen display and courier — a full cycle from the table to the report.",
    ru: "План зала, QR-меню, экран кухни и курьер — полный цикл от стола до отчёта.",
    ko: "플로어 플랜, QR 메뉴, 키친 디스플레이와 쿠리어 — 테이블에서 리포트까지 전 과정.",
    tr: "Kat planı, QR menü, mutfak ekranı ve kurye — masadan rapora tam döngü.",
  },
  "sol.2t": {
    en: "Markets & stores",
    ru: "Магазины и рынки",
    ko: "마트·상점",
    tr: "Marketler ve mağazalar",
  },
  "sol.2d": {
    en: "Barcode, scale, inventory, payments and cash reports — built for retail volume.",
    ru: "Штрихкод, весы, остатки, оплата и кассовые отчёты — создано для торговых оборотов.",
    ko: "바코드, 저울, 재고, 결제와 현금 리포트 — 리테일 볼륨을 위해 설계.",
    tr: "Barkod, terazi, stok, ödeme ve kasa raporları — perakende hacmi için tasarlandı.",
  },
  "sol.3t": {
    en: "Online ordering",
    ru: "Онлайн-заказы",
    ko: "온라인 주문",
    tr: "Çevrimiçi sipariş",
  },
  "sol.3d": {
    en: "Web store, Telegram and aggregators (Yandex Eats, Uzum Tezkor) — all into one checkout.",
    ru: "Веб-магазин, Telegram и агрегаторы (Yandex Eats, Uzum Tezkor) — всё в одной кассе.",
    ko: "웹 스토어, 텔레그램, 애그리게이터(Yandex Eats, Uzum Tezkor) — 모두 하나의 결제로.",
    tr: "Web mağaza, Telegram ve toplayıcılar (Yandex Eats, Uzum Tezkor) — hepsi tek kasada.",
  },
  "sol.4t": {
    en: "Own delivery",
    ru: "Собственная доставка",
    ko: "자체 배달",
    tr: "Kendi teslimatı",
  },
  "sol.4d": {
    en: "Dispatcher panel, couriers via Telegram, live map and an unlimited number of couriers.",
    ru: "Панель диспетчера, курьеры через Telegram, живая карта и неограниченное число курьеров.",
    ko: "디스패처 패널, 텔레그램 쿠리어, 실시간 지도, 무제한 쿠리어 수.",
    tr: "Dağıtım paneli, Telegram üzerinden kuryeler, canlı harita ve sınırsız kurye sayısı.",
  },

  /* ---------- features ---------- */
  "feat.heading": {
    en: "What can each app do?",
    ru: "Что умеет каждое приложение?",
    ko: "각 앱은 무엇을 할 수 있나요?",
    tr: "Her uygulama ne yapabilir?",
  },
  "feat.pos-restaurant.0": {
    en: "Offline-first: sales keep going when the internet drops",
    ru: "Офлайн-first: продажи продолжаются без интернета",
    ko: "오프라인 우선: 인터넷이 끊겨도 판매 지속",
    tr: "Öncelikle çevrimdışı: internet kesilse de satış sürer",
  },
  "feat.pos-restaurant.1": {
    en: "Live floor plan with drag-and-drop sections",
    ru: "Живой план зала с перетаскиванием секций",
    ko: "드래그 앤 드롭 섹션이 있는 실시간 플로어 플랜",
    tr: "Sürükle-bırak bölümleriyle canlı kat planı",
  },
  "feat.pos-restaurant.2": {
    en: "Split checks and partial payments",
    ru: "Деление чека и частичная оплата",
    ko: "청구서 분할 및 부분 결제",
    tr: "Hesap bölme ve kısmi ödeme",
  },
  "feat.pos-restaurant.3": {
    en: "Manager PIN for voids and refunds",
    ru: "PIN менеджера для сторно и возвратов",
    ko: "취소·환불용 매니저 PIN",
    tr: "İptal ve iade için yönetici PIN'i",
  },
  "feat.pos-restaurant.4": {
    en: "ESC/POS printing and cash drawer control",
    ru: "Печать ESC/POS и управление денежным ящиком",
    ko: "ESC/POS 인쇄 및 현금 서랍 제어",
    tr: "ESC/POS yazdırma ve kasa çekmecesi kontrolü",
  },
  "feat.pos-market.0": {
    en: "Fast checkout with barcode scanner and scale",
    ru: "Быстрая продажа со сканером штрихкода и весами",
    ko: "바코드 스캐너와 저울로 빠른 계산",
    tr: "Barkod okuyucu ve teraziyle hızlı satış",
  },
  "feat.pos-market.1": {
    en: "Stock levels and out-of-stock stop-list",
    ru: "Остатки товаров и стоп-лист распродажи",
    ko: "재고 수준과 품절 스톱 리스트",
    tr: "Stok seviyeleri ve tükendi stop-list'i",
  },
  "feat.pos-market.2": {
    en: "Returns, exchanges and store credit",
    ru: "Возвраты, обмены и возврат в магазин",
    ko: "반품, 교환 및 매장 크레딧",
    tr: "İade, değişim ve mağaza kredisi",
  },
  "feat.pos-market.3": {
    en: "Shift open/close and cash reports",
    ru: "Открытие/закрытие смены и кассовые отчёты",
    ko: "시프트 개폐와 현금 리포트",
    tr: "Vardiya açma/kapama ve kasa raporları",
  },
  "feat.pos-market.4": {
    en: "Delivery order management",
    ru: "Управление заказами доставки",
    ko: "배달 주문 관리",
    tr: "Teslimat siparişi yönetimi",
  },
  "feat.dash.0": {
    en: "Real-time profit & loss (P&L) dashboard",
    ru: "Панель прибыли и убытков в реальном времени",
    ko: "실시간 손익(P&L) 대시보드",
    tr: "Gerçek zamanlı kâr-zarar (P&L) paneli",
  },
  "feat.dash.1": {
    en: "Inventory, recipes and loss tracking",
    ru: "Инвентарь, рецепты и контроль потерь",
    ko: "재고, 레시피, 손실 추적",
    tr: "Stok, reçete ve kayıp takibi",
  },
  "feat.dash.2": {
    en: "Staff roles, permissions and payroll",
    ru: "Роли сотрудников, права и зарплата",
    ko: "직원 역할, 권한과 급여",
    tr: "Personel rolleri, izinler ve bordro",
  },
  "feat.dash.3": {
    en: "Delivery dispatcher panel with a live map",
    ru: "Панель доставки с живой картой",
    ko: "실시간 지도가 있는 배달 디스패처 패널",
    tr: "Canlı haritalı dağıtım paneli",
  },
  "feat.dash.4": {
    en: "Website builder and SEO settings",
    ru: "Конструктор сайта и настройки SEO",
    ko: "웹사이트 빌더 및 SEO 설정",
    tr: "Web sitesi oluşturucu ve SEO ayarları",
  },
  "feat.kitchen.0": {
    en: "Live order board routed by station",
    ru: "Живая доска заказов по станциям",
    ko: "스테이션별 실시간 주문 보드",
    tr: "İstasyon bazlı canlı sipariş panosu",
  },
  "feat.kitchen.1": {
    en: "Start / pause / bump workflow",
    ru: "Запуск / пауза / бамп заказов",
    ko: "시작 / 일시정지 / 범프 워크플로",
    tr: "Başlat / duraklat / tamamla akışı",
  },
  "feat.kitchen.2": {
    en: "Sound alerts for new orders",
    ru: "Звуковые уведомления о новых заказах",
    ko: "신규 주문 알림음",
    tr: "Yeni sipariş için sesli uyarı",
  },
  "feat.kitchen.3": {
    en: "86-list to stop items that ran out",
    ru: "Список 86 для закончившихся позиций",
    ko: "품절 항목의 86 리스트",
    tr: "Tükenen ürünler için 86 listesi",
  },
  "feat.kitchen.4": {
    en: "3–8 column density and date filters",
    ru: "Плотность 3–8 колонок и фильтры по дате",
    ko: "3–8열 밀도 및 날짜 필터",
    tr: "3–8 sütun yoğunluğu ve tarih filtreleri",
  },
  "feat.ods.0": {
    en: "Large-type ready-order numbers",
    ru: "Крупные номера готовых заказов",
    ko: "큰 글씨 준비 완료 주문 번호",
    tr: "Büyük puntolu hazır sipariş numaraları",
  },
  "feat.ods.1": {
    en: "Sound and green edge when ready",
    ru: "Звук и зелёная рамка, когда готово",
    ko: "완료 시 소리와 초록 테두리",
    tr: "Hazır olduğunda ses ve yeşil çerçeve",
  },
  "feat.ods.2": {
    en: "Preparing / Ready two-column screen",
    ru: "Экран в две колонки: Preparing / Ready",
    ko: "Preparing / Ready 2열 화면",
    tr: "Preparing / Ready iki sütunlu ekran",
  },
  "feat.ods.3": {
    en: "Media slideshow when idle",
    ru: "Медиа-слайдшоу в простое",
    ko: "유휴 시간 미디어 슬라이드쇼",
    tr: "Boşta kaldığında medya slayt gösterisi",
  },
  "feat.ods.4": {
    en: "Auto fullscreen kiosk mode",
    ru: "Авто-полноэкранный киоск-режим",
    ko: "자동 전체화면 키오스크 모드",
    tr: "Otomatik tam ekran kiosk modu",
  },
  "feat.guest.0": {
    en: "QR code — no app install, straight in the browser",
    ru: "QR-код — без установки приложения, сразу в браузере",
    ko: "QR 코드 — 앱 설치 없이 바로 브라우저에서",
    tr: "QR kod — uygulama gerekmez, doğrudan tarayıcıda",
  },
  "feat.guest.1": {
    en: "Waiter call, bill request and feedback",
    ru: "Вызов официанта, запрос чека и отзыв",
    ko: "웨이터 호출, 계산서 요청, 피드백",
    tr: "Garson çağırma, hesap isteme ve geri bildirim",
  },
  "feat.guest.2": {
    en: "Live order status (accepted → ready)",
    ru: "Живой статус заказа (принят → готов)",
    ko: "실시간 주문 상태(접수 → 완료)",
    tr: "Canlı sipariş durumu (kabul → hazır)",
  },
  "feat.guest.3": {
    en: "Trust mode: staff confirms the order",
    ru: "Режим доверия: сотрудник подтверждает заказ",
    ko: "신뢰 모드: 직원이 주문 확인",
    tr: "Güven modu: personel siparişi onaylar",
  },
  "feat.guest.4": {
    en: "Add items by joining the same table",
    ru: "Добавление позиций к тому же столу",
    ko: "같은 테이블에 항목 추가",
    tr: "Aynı masaya ürün ekleme",
  },
  "feat.website.0": {
    en: "Runs on your own domain and brand",
    ru: "Работает на вашем домене и под вашим брендом",
    ko: "자기 도메인과 브랜드로 운영",
    tr: "Kendi alan adınız ve markanızla çalışır",
  },
  "feat.website.1": {
    en: "Payments via Payme, Click and Uzum",
    ru: "Оплата через Payme, Click и Uzum",
    ko: "Payme, Click, Uzum 결제",
    tr: "Payme, Click ve Uzum ile ödeme",
  },
  "feat.website.2": {
    en: "Delivery zones, pricing and live tracking",
    ru: "Зоны доставки, цены и живое отслеживание",
    ko: "배달 지역, 가격, 실시간 추적",
    tr: "Teslimat bölgeleri, fiyatlandırma ve canlı takip",
  },
  "feat.website.3": {
    en: "Telegram login and order history",
    ru: "Вход через Telegram и история заказов",
    ko: "텔레그램 로그인과 주문 내역",
    tr: "Telegram girişi ve sipariş geçmişi",
  },
  "feat.website.4": {
    en: "SEO: sitemap, JSON-LD and hreflang for languages",
    ru: "SEO: карта сайта, JSON-LD и hreflang для языков",
    ko: "SEO: 사이트맵, JSON-LD, hreflang",
    tr: "SEO: site haritası, JSON-LD ve hreflang",
  },
  "feat.dispatch.0": {
    en: "Courier offers via Telegram (bid)",
    ru: "Предложения курьеров через Telegram (тендер)",
    ko: "텔레그램을 통한 쿠리어 제안(입찰)",
    tr: "Telegram üzerinden kurye teklifleri (ihale)",
  },
  "feat.dispatch.1": {
    en: "Couriers and addresses on a live map",
    ru: "Курьеры и адреса на живой карте",
    ko: "실시간 지도 위의 쿠리어와 주소",
    tr: "Canlı haritada kuryeler ve adresler",
  },
  "feat.dispatch.2": {
    en: "Cash collection and courier settlement",
    ru: "Сбор наличных и расчёты с курьерами",
    ko: "현금 수금 및 쿠리어 정산",
    tr: "Nakit tahsilat ve kurye hesabı",
  },
  "feat.dispatch.3": {
    en: "Unlimited number of couriers",
    ru: "Неограниченное число курьеров",
    ko: "쿠리어 수 무제한",
    tr: "Sınırsız kurye sayısı",
  },
  "feat.dispatch.4": {
    en: "Vehicle type and location in real time",
    ru: "Тип транспорта и локация в реальном времени",
    ko: "차량 유형과 위치 실시간 추적",
    tr: "Araç türü ve konum gerçek zamanlı",
  },

  /* ---------- app descriptions ---------- */
  "app.pos-restaurant.desc": {
    en: "Live floor plan, orders in seconds, split checks and strict cash discipline. For tablets and all-in-ones.",
    ru: "Живой план зала, заказы за секунды, деление чека и строгая кассовая дисциплина. Для планшетов и моноблоков.",
    ko: "실시간 플로어 플랜, 초 단위 주문, 청구서 분할, 엄격한 현금 규율. 태블릿과 올인원용.",
    tr: "Canlı kat planı, saniyeler içinde sipariş, hesap bölme ve sıkı kasa disiplini. Tablet ve hepsi bir arada cihazlar için.",
  },
  "app.pos-market.desc": {
    en: "OctoPos for bazaars and markets: orders, receipts and delivery management. Restaurant POS capabilities plus throughput features.",
    ru: "OctoPos для базаров и магазинов: заказы, чеки и доставка. Возможности ресторанного POS плюс функции для оборота.",
    ko: "바자르와 마켓을 위한 OctoPos: 주문, 영수증, 배달 관리. 레스토랑 POS 기능에 판매량 기능 추가.",
    tr: "Pazar ve marketler için OctoPos: siparişler, fişler ve teslimat yönetimi. Restoran POS yetenekleri artı hacim özellikleri.",
  },
  "app.dash.desc": {
    en: "Real-time revenue, costs, margins, stock and deep analytics across multiple locations.",
    ru: "Доходы, расходы, маржа, остатки и глубокая аналитика по нескольким точкам в реальном времени.",
    ko: "실시간 매출, 비용, 마진, 재고와 다지점 심층 분석.",
    tr: "Gerçek zamanlı gelir, gider, marj, stok ve çok şubeli derin analiz.",
  },
  "app.kitchen.desc": {
    en: "Paperless smart kitchen. Sort and time dishes by stations (bar, grill, cold section).",
    ru: "Умная кухня без бумаги. Сортировка и таймеры по станциям (бар, гриль, холодный цех).",
    ko: "종이 없는 스마트 키친. 스테이션별(바, 그릴, 콜드) 분류와 타이머.",
    tr: "Kağıtsız akıllı mutfak. İstasyonlara göre (bar, ızgara, soğuk) sıralama ve zamanlama.",
  },
  "app.ods.desc": {
    en: "Big-type ready orders on a hall screen with sound calls for guests and couriers.",
    ru: "Крупные номера готовых заказов на экране зала со звуковым вызовом для гостей и курьеров.",
    ko: "홀 스크린의 큰 글씨 준비 주문, 게스트·쿠리어를 위한 알림음.",
    tr: "Salonda büyük puntolu hazır siparişler, misafirler ve kuryeler için sesli çağrı.",
  },
  "app.guest.desc": {
    en: "Browse dishes with photos via a table QR code, add to cart and pay instantly — no app.",
    ru: "Блюда с фото по QR-коду стола, в корзину и мгновенная оплата — без приложения.",
    ko: "테이블 QR로 사진과 함께 메뉴 확인, 장바구니 담기, 즉시 결제 — 앱 없이.",
    tr: "Masa QR koduyla fotoğraflı menüyü gezin, sepete ekleyin ve anında ödeyin — uygulama yok.",
  },
  "app.website.desc": {
    en: "Fast website under your own domain and brand. Orders integrate straight into the same cash register.",
    ru: "Быстрый сайт под вашим доменом и брендом. Заказы сразу попадают в ту же кассу.",
    ko: "자기 도메인과 브랜드의 빠른 웹사이트. 주문은 같은 계산대로 바로 연동.",
    tr: "Kendi alan adınız ve markanız altında hızlı web sitesi. Siparişler aynı kasaya doğrudan entegre olur.",
  },
  "app.dispatch.desc": {
    en: "Assign orders to your own couriers, track them on a map via GPS and show the customer an ETA.",
    ru: "Распределение заказов своим курьерам, GPS-отслеживание на карте и показ времени доставки клиенту.",
    ko: "자체 쿠리어에 주문 배분, GPS 지도 추적, 고객에게 예상 도착 시간 표시.",
    tr: "Siparişleri kendi kuryelerinize dağıtın, GPS ile haritadan takip edin ve müşteriye tahmini süreyi gösterin.",
  },

  /* ---------- detail page ---------- */
  "common.back": {
    en: "← Apps",
    ru: "← Приложения",
    ko: "← 앱",
    tr: "← Uygulamalar",
  },
  "cta.tryFree": {
    en: "Try it free →",
    ru: "Попробовать бесплатно →",
    ko: "무료로 시작 →",
    tr: "Ücretsiz dene →",
  },
  "cta.next": {
    en: "Next — {name}",
    ru: "Далее — {name}",
    ko: "다음 — {name}",
    tr: "Sonraki — {name}",
  },

  /* ---------- meta labels ---------- */
  "meta.Tur": { en: "Type", ru: "Тип", ko: "유형", tr: "Tür" },
  "meta.Qurilmalar": {
    en: "Devices",
    ru: "Устройства",
    ko: "기기",
    tr: "Cihazlar",
  },
  "meta.Oflayn": {
    en: "Offline",
    ru: "Офлайн",
    ko: "오프라인",
    tr: "Çevrimdışı",
  },
  "meta.Tillar": {
    en: "Languages",
    ru: "Языки",
    ko: "언어",
    tr: "Diller",
  },
  "meta.Integratsiya": {
    en: "Integrations",
    ru: "Интеграции",
    ko: "연동",
    tr: "Entegrasyonlar",
  },
  "meta.Chiqim": { en: "Output", ru: "Вывод", ko: "출력", tr: "Çıktı" },
  "meta.Yordam": {
    en: "Support",
    ru: "Поддержка",
    ko: "지원",
    tr: "Destek",
  },

  /* ---------- meta values (translated only; brand names stay as-is) ---------- */
  "v.Restoran POS": {
    en: "Restaurant POS",
    ru: "POS для ресторана",
    ko: "레스토랑 POS",
    tr: "Restoran POS",
  },
  "v.Market POS": {
    en: "Market POS",
    ru: "POS для магазина",
    ko: "마켓 POS",
    tr: "Market POS",
  },
  "v.Tahlil Paneli": {
    en: "Analytics panel",
    ru: "Аналитическая панель",
    ko: "분석 패널",
    tr: "Analiz paneli",
  },
  "v.Oshxona Ekrani": {
    en: "Kitchen display",
    ru: "Экран кухни",
    ko: "키친 디스플레이",
    tr: "Mutfak ekranı",
  },
  "v.Berish ekrani": {
    en: "Pickup screen",
    ru: "Экран выдачи",
    ko: "수령 화면",
    tr: "Teslim ekranı",
  },
  "v.QR Stol Menyusi": {
    en: "QR table menu",
    ru: "QR-меню стола",
    ko: "테이블 QR 메뉴",
    tr: "Masa QR menüsü",
  },
  "v.Veb-Sayt + Do'kon": {
    en: "Website + store",
    ru: "Сайт + магазин",
    ko: "웹사이트 + 스토어",
    tr: "Web sitesi + mağaza",
  },
  "v.Kuryer Boshqaruvi": {
    en: "Courier management",
    ru: "Управление курьерами",
    ko: "쿠리어 관리",
    tr: "Kurye yönetimi",
  },
  "v.Ha — Lokal Server": {
    en: "Yes — local server",
    ru: "Да — локальный сервер",
    ko: "예 — 로컬 서버",
    tr: "Evet — yerel sunucu",
  },
  "v.Cloud — Real Vaqt": {
    en: "Cloud — real time",
    ru: "Облако — реальное время",
    ko: "클라우드 — 실시간",
    tr: "Bulut — gerçek zamanlı",
  },
  "v.GPS — Real Vaqt": {
    en: "GPS — real time",
    ru: "GPS — реальное время",
    ko: "GPS — 실시간",
    tr: "GPS — gerçek zamanlı",
  },
  "v.Cloud — Onlayn": {
    en: "Cloud — Online",
    ru: "Облако — онлайн",
    ko: "클라우드 — 온라인",
    tr: "Bulut — Çevrimiçi",
  },
  "v.O'zbek · Rus · Ingliz": {
    en: "Uzbek · Russian · English",
    ru: "Узбекский · Русский · Английский",
    ko: "우즈벡어 · 러시아어 · 영어",
    tr: "Özbekçe · Rusça · İngilizce",
  },
  "v.Planshet · Monoblok · Kassa": {
    en: "Tablet · All-in-one · POS",
    ru: "Планшет · Моноблок · POS",
    ko: "태블릿 · 올인원 · POS",
    tr: "Tablet · Hepsi bir arada · POS",
  },
  "v.Mac · PC · Telefon": {
    en: "Mac · PC · Phone",
    ru: "Mac · PC · Телефон",
    ko: "Mac · PC · 전화",
    tr: "Mac · PC · Telefon",
  },
  "v.TV · Planshet · Monoblok": {
    en: "TV · Tablet · All-in-one",
    ru: "TV · Планшет · Моноблок",
    ko: "TV · 태블릿 · 올인원",
    tr: "TV · Tablet · Hepsi bir arada",
  },
  "v.Smart TV · HDMI · Kiosk": {
    en: "Smart TV · HDMI · Kiosk",
    ru: "Smart TV · HDMI · Киоск",
    ko: "스마트 TV · HDMI · 키오스크",
    tr: "Akıllı TV · HDMI · Kiosk",
  },
  "v.Telefon · Planshet": {
    en: "Phone · Tablet",
    ru: "Телефон · Планшет",
    ko: "전화 · 태블릿",
    tr: "Telefon · Tablet",
  },
  "v.Brauzer · Mobil": {
    en: "Browser · Mobile",
    ru: "Браузер · Мобильный",
    ko: "브라우저 · 모바일",
    tr: "Tarayıcı · Mobil",
  },
  "v.Telefon · Web": {
    en: "Phone · Web",
    ru: "Телефон · Web",
    ko: "전화 · 웹",
    tr: "Telefon · Web",
  },
  "v.ESC/POS · Kassa Chog'i": {
    en: "ESC/POS · Cash drawer",
    ru: "ESC/POS · Денежный ящик",
    ko: "ESC/POS · 현금 서랍",
    tr: "ESC/POS · Kasa çekmecesi",
  },
  "v.Chek · Yetkazib Berish": {
    en: "Receipt · Delivery",
    ru: "Чек · Доставка",
    ko: "영수증 · 배달",
    tr: "Fiş · Teslimat",
  },
  "v.Onlayn Hisobot": {
    en: "Online reports",
    ru: "Онлайн-отчёты",
    ko: "온라인 리포트",
    tr: "Çevrimiçi raporlar",
  },
  "v.Stol QR Kodlari": {
    en: "Table QR codes",
    ru: "QR-коды столов",
    ko: "테이블 QR 코드",
    tr: "Masa QR kodları",
  },
  "v.SEO · Domen · Brend": {
    en: "SEO · Domain · Brand",
    ru: "SEO · Домен · Бренд",
    ko: "SEO · 도메인 · 브랜드",
    tr: "SEO · Alan adı · Marka",
  },
  "v.Yo'nalish · Statistika": {
    en: "Routes · Statistics",
    ru: "Маршруты · Статистика",
    ko: "경로 · 통계",
    tr: "Rotalar · İstatistikler",
  },
  "v.Qog'oz Cheksiz": {
    en: "Paperless",
    ru: "Без бумаги",
    ko: "종이 없음",
    tr: "Kağıtsız",
  },
  "v.OctoPos · Oshxona": {
    en: "OctoPos · Kitchen",
    ru: "OctoPos · Кухня",
    ko: "OctoPos · 주방",
    tr: "OctoPos · Mutfak",
  },

  /* ---------- frame notes (screenshots) ---------- */
  "frame.pos-restaurant.pos-main-view": {
    en: "Fast ordering from the floor and menu",
    ru: "Быстрый заказ из зала и меню",
    ko: "플로어와 메뉴에서 빠른 주문",
    tr: "Kat ve menüden hızlı sipariş",
  },
  "frame.pos-restaurant.pos-floor-plan": {
    en: "Floor plan: sections and table states",
    ru: "План зала: секции и статусы столов",
    ko: "플로어 플랜: 섹션과 테이블 상태",
    tr: "Kat planı: bölümler ve masa durumları",
  },
  "frame.pos-restaurant.pos-menu": {
    en: "Dish menu: sections and prices",
    ru: "Меню блюд: разделы и цены",
    ko: "요리 메뉴: 섹션과 가격",
    tr: "Yemek menüsü: bölümler ve fiyatlar",
  },
  "frame.pos-restaurant.pos-orders": {
    en: "Order list and their status",
    ru: "Список заказов и их статус",
    ko: "주문 목록과 상태",
    tr: "Sipariş listesi ve durumları",
  },
  "frame.pos-restaurant.pos-orders-filter": {
    en: "Filtering orders by status",
    ru: "Фильтр заказов по статусу",
    ko: "상태별 주문 필터",
    tr: "Duruma göre sipariş filtreleme",
  },
  "frame.pos-restaurant.pos-checkout": {
    en: "Payment: cash, card and QR",
    ru: "Оплата: наличные, карта и QR",
    ko: "결제: 현금, 카드, QR",
    tr: "Ödeme: nakit, kart ve QR",
  },
  "frame.pos-restaurant.pos-stop-list": {
    en: "Stopping sales (stop-list)",
    ru: "Остановка продаж (стоп-лист)",
    ko: "판매 중지(스톱 리스트)",
    tr: "Satışı durdurma (stop-list)",
  },
  "frame.pos-restaurant.pos-notifications": {
    en: "Order and cash notifications",
    ru: "Уведомления заказов и кассы",
    ko: "주문 및 현금 알림",
    tr: "Sipariş ve kasa bildirimleri",
  },
  "frame.pos-restaurant.pos-notifications-requests": {
    en: "Customer requests: call and bill",
    ru: "Запросы гостя: вызов и чек",
    ko: "고객 요청: 호출과 계산서",
    tr: "Müşteri istekleri: çağırma ve hesap",
  },
  "frame.pos-restaurant.pos-delivery-address": {
    en: "Delivery address on the map",
    ru: "Адрес доставки на карте",
    ko: "지도 위 배달 주소",
    tr: "Haritada teslimat adresi",
  },
  "frame.pos-restaurant.pos-delivery-job": {
    en: "Order handed to the courier",
    ru: "Заказ передан курьеру",
    ko: "쿠리어에게 전달된 주문",
    tr: "Kuryeye verilen sipariş",
  },
  "frame.pos-restaurant.pos-delivery-man-informations": {
    en: "Courier details and delivery status",
    ru: "Данные курьера и статус доставки",
    ko: "쿠리어 정보와 배달 상태",
    tr: "Kurye bilgileri ve teslimat durumu",
  },
  "frame.pos-restaurant.pos-more-settings": {
    en: "General settings section",
    ru: "Раздел общих настроек",
    ko: "일반 설정 섹션",
    tr: "Genel ayarlar bölümü",
  },
  "frame.pos-restaurant.pos-more-settings-appearance": {
    en: "Appearance and theme settings",
    ru: "Настройки вида и темы",
    ko: "보기 및 테마 설정",
    tr: "Görünüm ve tema ayarları",
  },
  "frame.pos-restaurant.pos-more-business-day": {
    en: "Business day: shift and register open",
    ru: "Рабочий день: смена и открытие кассы",
    ko: "영업일: 시프트와 계산대 개방",
    tr: "İş günü: vardiya ve kasa açılışı",
  },
  "frame.pos-restaurant.pos-more-business-day-register": {
    en: "Cash report: sales and balance check",
    ru: "Кассовый отчёт: продажи и остаток",
    ko: "현금 리포트: 판매와 잔액 검증",
    tr: "Kasa raporu: satış ve bakiye kontrolü",
  },
  "frame.pos-restaurant.pos-more": {
    en: "Devices and account information",
    ru: "Устройства и аккаунт",
    ko: "기기와 계정",
    tr: "Cihazlar ve hesap",
  },
  "frame.pos-restaurant.pos-lock": {
    en: "Lock screen with a PIN",
    ru: "Экран блокировки с PIN-кодом",
    ko: "PIN 잠금 화면",
    tr: "PIN ile kilit ekranı",
  },
  "frame.pos-restaurant.Screen Shot 2026-10-08 at 7.14.52 PM": {
    en: "Additional app screen",
    ru: "Дополнительный экран приложения",
    ko: "앱의 추가 화면",
    tr: "Uygulamanın ek ekranı",
  },
  "frame.pos-restaurant.Screen Shot 2026-10-08 at 7.15.10 PM": {
    en: "Additional app screen",
    ru: "Дополнительный экран приложения",
    ko: "앱의 추가 화면",
    tr: "Uygulamanın ek ekranı",
  },
  "frame.pos-market.pos-market": {
    en: "Market mode: fast checkout",
    ru: "Режим магазина: быстрая продажа",
    ko: "마켓 모드: 빠른 계산",
    tr: "Market modu: hızlı satış",
  },
  "frame.pos-market.pos-market-orders": {
    en: "Order and receipt list",
    ru: "Список заказов и чеков",
    ko: "주문 및 영수증 목록",
    tr: "Sipariş ve fiş listesi",
  },
  "frame.pos-market.pos-market-checkout": {
    en: "Accepting payment at the register",
    ru: "Приём оплаты на кассе",
    ko: "계산대 결제 수락",
    tr: "Kasada ödeme kabulü",
  },
  "frame.pos-market.pos-market-delivery": {
    en: "Delivery orders",
    ru: "Заказы доставки",
    ko: "배달 주문",
    tr: "Teslimat siparişleri",
  },
  "frame.pos-market.pos-market-notifications": {
    en: "New order notifications",
    ru: "Уведомления о новых заказах",
    ko: "신규 주문 알림",
    tr: "Yeni sipariş bildirimleri",
  },
  "frame.pos-market.pos-market-settings": {
    en: "Store settings",
    ru: "Настройки магазина",
    ko: "스토어 설정",
    tr: "Mağaza ayarları",
  },
  "frame.dash.dash-main": {
    en: "Profit, costs and trends on the main dashboard",
    ru: "Прибыль, расходы и тренды на главном экране",
    ko: "메인 대시보드의 손익, 비용, 트렌드",
    tr: "Ana panelde kâr, gider ve trendler",
  },
  "frame.dash.dash-orders": {
    en: "Order list and dispatcher board",
    ru: "Список заказов и доска диспетчера",
    ko: "주문 목록과 디스패처 보드",
    tr: "Sipariş listesi ve dağıtım panosu",
  },
  "frame.dash.dash-catalog": {
    en: "Menu catalog: sections and dishes",
    ru: "Каталог меню: разделы и блюда",
    ko: "메뉴 카탈로그: 섹션과 요리",
    tr: "Menü kataloğu: bölümler ve yemekler",
  },
  "frame.dash.dash-catalog-menu": {
    en: "Menu editor: price and ingredients",
    ru: "Редактор меню: цена и состав",
    ko: "메뉴 편집기: 가격과 구성",
    tr: "Menü düzenleyici: fiyat ve içerik",
  },
  "frame.dash.dash-inventory": {
    en: "Inventory: stock, receipts and losses",
    ru: "Склад: остатки, приёмка и потери",
    ko: "재고: 수량, 입고와 손실",
    tr: "Stok: miktar, kabul ve kayıplar",
  },
  "frame.dash.dash-reports": {
    en: "Reports: sales, payments and usage",
    ru: "Отчёты: продажи, оплаты и использование",
    ko: "리포트: 판매, 결제, 사용량",
    tr: "Raporlar: satış, ödeme ve kullanım",
  },
  "frame.dash.dash-administration": {
    en: "Administration: staff, roles and locations",
    ru: "Администрирование: сотрудники, роли, точки",
    ko: "관리: 직원, 역할, 지점",
    tr: "Yönetim: personel, roller ve şubeler",
  },
  "frame.dash.dash-account": {
    en: "Account and subscription details",
    ru: "Аккаунт и подписка",
    ko: "계정 및 구독 정보",
    tr: "Hesap ve abonelik bilgileri",
  },
  "frame.dash.dash-website": {
    en: "Pages of the website builder",
    ru: "Страницы конструктора сайта",
    ko: "웹사이트 빌더의 페이지",
    tr: "Web sitesi oluşturucunun sayfaları",
  },
  "frame.dash.dash-website-settings": {
    en: "Website settings and SEO",
    ru: "Настройки сайта и SEO",
    ko: "웹사이트 설정과 SEO",
    tr: "Web sitesi ayarları ve SEO",
  },
  "frame.kitchen.kitchen-active-orders": {
    en: "Live order board by station",
    ru: "Живая доска заказов по станциям",
    ko: "스테이션별 실시간 주문 보드",
    tr: "İstasyon bazlı canlı sipariş panosu",
  },
  "frame.kitchen.kitchen-orders-size-adjuster": {
    en: "Column count adjustment (3–8)",
    ru: "Настройка числа колонок (3–8)",
    ko: "열 수 조정(3–8)",
    tr: "Sütun sayısı ayarı (3–8)",
  },
  "frame.kitchen.kitchen-filter": {
    en: "Date and status filters",
    ru: "Фильтры по дате и статусу",
    ko: "날짜·상태 필터",
    tr: "Tarih ve durum filtreleri",
  },
  "frame.kitchen.kitchen-unactive-orders": {
    en: "Completed orders history",
    ru: "История завершённых заказов",
    ko: "완료된 주문 내역",
    tr: "Tamamlanan sipariş geçmişi",
  },
  "frame.kitchen.kitchen-stop-list": {
    en: "Out-of-stock items (86 list)",
    ru: "Закончившиеся позиции (86)",
    ko: "품절 항목(86 리스트)",
    tr: "Tükenen ürünler (86 listesi)",
  },
  "frame.kitchen.kitchen-more-settings": {
    en: "Kitchen settings: language and theme",
    ru: "Настройки кухни: язык и тема",
    ko: "키친 설정: 언어와 테마",
    tr: "Mutfak ayarları: dil ve tema",
  },
  "frame.kitchen.kitchen-more": {
    en: "Device and account information",
    ru: "Информация об устройстве и аккаунте",
    ko: "기기 및 계정 정보",
    tr: "Cihaz ve hesap bilgileri",
  },
  "frame.ods.ods": {
    en: "Ready orders screen (for TV)",
    ru: "Экран готовых заказов (для ТВ)",
    ko: "준완료 주문 화면(TV용)",
    tr: "Hazır sipariş ekranı (TV için)",
  },
  "frame.ods.ods-settings": {
    en: "Screen settings: font, sound, slideshow",
    ru: "Настройки экрана: шрифт, звук, слайдшоу",
    ko: "화면 설정: 글꼴, 소리, 슬라이드쇼",
    tr: "Ekran ayarları: yazı tipi, ses, slayt gösterisi",
  },
  "frame.website.website-hero": {
    en: "Homepage hero section",
    ru: "Герой главной страницы",
    ko: "홈페이지 히어로 섹션",
    tr: "Ana sayfa hero bölümü",
  },
  "frame.website.website-menus-1": {
    en: "Online menu: dish list",
    ru: "Онлайн-меню: список блюд",
    ko: "온라인 메뉴: 요리 목록",
    tr: "Çevrimiçi menü: yemek listesi",
  },
  "frame.website.website-menus-2": {
    en: "Menu sections and search",
    ru: "Разделы меню и поиск",
    ko: "메뉴 섹션과 검색",
    tr: "Menü bölümleri ve arama",
  },
  "frame.website.website-locations": {
    en: "Branch addresses on the map",
    ru: "Адреса филиалов на карте",
    ko: "지도 위 지점 주소",
    tr: "Haritada şube adresleri",
  },
  "frame.website.website-about-us": {
    en: "About us page",
    ru: "Страница «О нас»",
    ko: "회사 소개 페이지",
    tr: "Hakkımızda sayfası",
  },
  "frame.website.website-contacts": {
    en: "Contact page and map",
    ru: "Страница контактов и карта",
    ko: "연락처 페이지와 지도",
    tr: "İletişim sayfası ve harita",
  },
  "frame.website.website-delivery": {
    en: "Delivery terms",
    ru: "Условия доставки",
    ko: "배달 조건",
    tr: "Teslimat koşulları",
  },
  "frame.website.website-checkout": {
    en: "Cart and order checkout",
    ru: "Корзина и оформление заказа",
    ko: "장바구니와 주문 결제",
    tr: "Sepet ve sipariş tamamlama",
  },

  /* ---------- logos ---------- */
  "logos.heading": {
    en: "Restaurants already running on Octopos",
    ru: "Рестораны, которые уже работают на Octopos",
    ko: "이미 Octopos를 사용 중인 레스토랑",
    tr: "Octopos ile çalışan restoranlar",
  },
  "logos.sub": {
    en: "From single cafés to multi-location chains — real businesses, real results.",
    ru: "От небольших кафе до сетей — реальный бизнес, реальные результаты.",
    ko: "소규모 카페부터 다지점 체인까지 — 실제 비즈니스, 실제 결과.",
    tr: "Tek kafeden çok şubeli zincirlere — gerçek işletmeler, gerçek sonuçlar.",
  },

  /* ---------- integrations ---------- */
  "int.heading": {
    en: "Works with payments and services",
    ru: "Работает с платежами и сервисами",
    ko: "결제·서비스와 연동",
    tr: "Ödeme ve servislerle çalışır",
  },
  "int.note": {
    en: "Payme and Click are built in — connect once and take payments in any app.",
    ru: "Payme и Click встроены — подключите один раз и принимайте платежи в любом приложении.",
    ko: "Payme와 Click 내장 — 한 번 연결하면 모든 앱에서 결제를 받을 수 있습니다.",
    tr: "Payme ve Click yerleşiktir — bir kez bağlayın, tüm uygulamalarda ödeme alın.",
  },

  /* ---------- plans ---------- */
  "plans.heading": {
    en: "One transparent subscription",
    ru: "Одна прозрачная подписка",
    ko: "하나의 투명한 구독",
    tr: "Tek şeffaf abonelik",
  },
  "plans.body": {
    en: "No hidden fees. No confusing tiers. Everything included.",
    ru: "Без скрытых платежей. Без запутанных уровней. Всё включено.",
    ko: "숨겨진 비용 없음. 복잡한 요금제 없음. 모두 포함.",
    tr: "Gizli ücret yok. Karmaşık kademe yok. Her şey dahil.",
  },
  "plans.monthly": {
    en: "Monthly",
    ru: "Помесячно",
    ko: "월간",
    tr: "Aylık",
  },
  "plans.yearly": {
    en: "Yearly",
    ru: "Ежегодно",
    ko: "연간",
    tr: "Yıllık",
  },
  "plans.saveNote": {
    en: "Billed annually · save 10%",
    ru: "Оплата за год · экономия 10%",
    ko: "연간 결제 · 10% 절약",
    tr: "Yıllık ödeme · %10 tasarruf",
  },
  "plans.startFree": {
    en: "Start free",
    ru: "Начать бесплатно",
    ko: "무료 시작",
    tr: "Ücretsiz başla",
  },
  "plans.getStarted": {
    en: "Get started",
    ru: "Начать",
    ko: "시작",
    tr: "Başla",
  },
  "plans.popular": {
    en: "Most popular",
    ru: "Самый популярный",
    ko: "인기",
    tr: "En popüler",
  },
  "plans.noCard": {
    en: "No credit card required",
    ru: "Карта не требуется",
    ko: "카드 불필요",
    tr: "Kredi kartı gerekmez",
  },
  "plans.perMonth": { en: "/mo", ru: "/мес", ko: "/월", tr: "/ay" },
  "plans.perYear": { en: "/yr", ru: "/год", ko: "/년", tr: "/yıl" },
  "plans.locations": {
    en: "{n} locations",
    ru: "{n} локаций",
    ko: "지점 {n}개",
    tr: "{n} şube",
  },
  "plans.aiPhotos": {
    en: "{n} AI photos/mo",
    ru: "{n} AI фото/мес",
    ko: "AI 사진 {n}장/월",
    tr: "{n} AI fotoğraf/ay",
  },
  "plans.onlineOrders": {
    en: "{n} online orders/mo",
    ru: "{n} онлайн-заказов/мес",
    ko: "온라인 주문 {n}건/월",
    tr: "{n} online sipariş/ay",
  },
  "plans.loading": {
    en: "Loading…",
    ru: "Загрузка…",
    ko: "로딩 중…",
    tr: "Yükleniyor…",
  },
  "plans.helpH": {
    en: "Running a franchise or need setup help?",
    ru: "Управляете франшизой или нужна помощь с настройкой?",
    ko: "프랜차이즈를 운영하거나 설정 도움이 필요하신가요?",
    tr: "Franchise işletiyor musunuz ya da kurulumda yardıma mı ihtiyacınız var?",
  },
  "plans.helpB": {
    en: "We centralize menus, inventory and reports across all locations — and help digitize menus, draw the floor plan and train your staff.",
    ru: "Централизуем меню, инвентарь и отчёты по всем точкам — и помогаем оцифровать меню, нарисовать план зала и обучить персонал.",
    ko: "모든 지점의 메뉴, 재고, 리포트를 중앙화하고, 메뉴 디지털화, 플로어 플랜 작성, 직원 교육을 도와드립니다.",
    tr: "Tüm şubelerde menü, stok ve raporları merkezileştiriyoruz — menüleri dijitalleştirme, kat planı ve personel eğitiminde yardımcı oluyoruz.",
  },
  "plans.helpCta": {
    en: "Message us on Telegram",
    ru: "Написать в Telegram",
    ko: "텔레그램으로 보내기",
    tr: "Telegram'dan yazın",
  },

  /* ---------- add-ons ---------- */
  "add.heading": {
    en: "Extra services",
    ru: "Дополнительные сервисы",
    ko: "추가 서비스",
    tr: "Ek hizmetler",
  },
  "add.t1": {
    en: "Online store",
    ru: "Онлайн-магазин",
    ko: "온라인 스토어",
    tr: "Çevrimiçi mağaza",
  },
  "add.b1": {
    en: "Ordering from your own website and Telegram, with no commission. Tiers differ only in how many online orders are included.",
    ru: "Собственный сайт и заказы в Telegram без комиссии. Уровни отличаются только количеством включённых онлайн-заказов.",
    ko: "수수료 없는 자체 웹사이트와 텔레그램 주문. 등급은 포함된 온라인 주문 수만 다릅니다.",
    tr: "Komisyonsuz kendi web siteniz ve Telegram siparişleri. Seviyeler yalnızca dahil olan online sipariş sayısında farklıdır.",
  },
  "add.b2": {
    en: "Deliver with your own couriers: dispatch, courier app, live tracking and cash settlement.",
    ru: "Доставляйте своими курьерами: диспетчерская, приложение курьера, отслеживание и расчёты наличными.",
    ko: "자체 배달원으로 배달하세요: 배차, 배달원 앱, 실시간 추적, 현금 정산.",
    tr: "Kendi kuryelerinizle teslim edin: sevk, kurye uygulaması, canlı takip ve nakit mutabakatı.",
  },
  "add.t3": {
    en: "Photo Studio",
    ru: "Фотостудия",
    ko: "포토 스튜디오",
    tr: "Fotoğraf Stüdyosu",
  },
  "add.b3": {
    en: "Touch up, clean backgrounds, restyle and create photorealistic product photos in one consistent style.",
    ru: "Ретушь, чистый фон, единый стиль и новые фотореалистичные снимки товаров.",
    ko: "보정, 배경 정리, 스타일 통일, 실사 상품 사진 생성을 한 가지 스타일로.",
    tr: "Rötuş, temiz arka plan, tek tip stil ve fotogerçekçi ürün fotoğrafları.",
  },
  "add.note": {
    en: "Every plan already includes 50 online orders.",
    ru: "В каждом тарифе уже есть 50 онлайн-заказов.",
    ko: "모든 요금제에 온라인 주문 50건이 이미 포함됩니다.",
    tr: "Her planda zaten 50 online sipariş vardır.",
  },
  "add.orders": {
    en: "{n} online orders/mo",
    ru: "{n} онлайн-заказов/мес",
    ko: "온라인 주문 {n}건/월",
    tr: "{n} online sipariş/ay",
  },
  "add.photos": {
    en: "{n} photos/mo",
    ru: "{n} фото/мес",
    ko: "사진 {n}장/월",
    tr: "{n} fotoğraf/ay",
  },
  "add.f1": {
    en: "Your own domain",
    ru: "Свой домен",
    ko: "자체 도메인",
    tr: "Kendi alan adınız",
  },
  "add.f2": {
    en: "Your brand only",
    ru: "Только ваш бренд",
    ko: "오직 당신의 브랜드",
    tr: "Sadece sizin markanız",
  },
  "add.f3": {
    en: "No commission",
    ru: "Без комиссии",
    ko: "수수료 없음",
    tr: "Komisyonsuz",
  },
  "add.d1": {
    en: "Dispatch panel",
    ru: "Панель диспетчера",
    ko: "디스패치 패널",
    tr: "Sevk paneli",
  },
  "add.d2": {
    en: "Telegram couriers",
    ru: "Курьеры в Telegram",
    ko: "텔레그램 배달원",
    tr: "Telegram kuryeleri",
  },
  "add.d3": {
    en: "Live GPS",
    ru: "Живой GPS",
    ko: "실시간 GPS",
    tr: "Canlı GPS",
  },
  "add.d4": {
    en: "Cash settlement",
    ru: "Расчёты наличными",
    ko: "현금 정산",
    tr: "Nakit mutabakatı",
  },
  "add.d5": {
    en: "Unlimited couriers",
    ru: "Безлимит курьеров",
    ko: "무제한 배달원",
    tr: "Sınırsız kurye",
  },
  "add.s1": {
    en: "Touch up",
    ru: "Ретушь",
    ko: "보정",
    tr: "Rötuş",
  },
  "add.s2": {
    en: "Clean backgrounds",
    ru: "Чистый фон",
    ko: "배경 정리",
    tr: "Temiz arka plan",
  },
  "add.s3": {
    en: "Consistent style",
    ru: "Единый стиль",
    ko: "스타일 통일",
    tr: "Tek tip stil",
  },
  "add.s4": {
    en: "Photorealistic shots",
    ru: "Фотореалистичные снимки",
    ko: "실사 상품 사진",
    tr: "Fotogerçekçi çekimler",
  },

  /* ---------- contact / footer ---------- */
  "ct.heading": {
    en: "Let's start today",
    ru: "Начнём сегодня",
    ko: "오늘 시작하세요",
    tr: "Bugün başlayalım",
  },
  "ct.body": {
    en: "Request a demo or ask us anything — we reply on Telegram.",
    ru: "Запросите демо или задайте вопрос — ответим в Telegram.",
    ko: "데모를 요청하거나 궁금한 점을 물어보세요 — 텔레그램에서 답변드립니다.",
    tr: "Demo isteyin ya da sorun — Telegram'dan yanıtlıyoruz.",
  },
  "ct.demo": {
    en: "Request a demo",
    ru: "Запросить демо",
    ko: "데모 요청",
    tr: "Demo iste",
  },
  "ct.support": {
    en: "Support",
    ru: "Поддержка",
    ko: "고객 지원",
    tr: "Destek",
  },
  "ft.tagline": {
    en: "Everything in one place — eight apps, one platform.",
    ru: "Всё в одном месте — восемь приложений, одна платформа.",
    ko: "모든 것이 한 곳에 — 여덟 개의 앱, 하나의 플랫폼.",
    tr: "Her şey bir arada — sekiz uygulama, tek platform.",
  },
  "ft.contact": { en: "Contact", ru: "Контакты", ko: "연락처", tr: "İletişim" },
  "ft.product": { en: "Product", ru: "Продукт", ko: "제품", tr: "Ürün" },
  "ft.company": { en: "Company", ru: "Компания", ko: "회사", tr: "Şirket" },
  "ft.docs": { en: "Docs", ru: "Документация", ko: "문서", tr: "Dokümanlar" },
  "ft.rights": {
    en: "All rights reserved",
    ru: "Все права защищены",
    ko: "모든 권리 보유",
    tr: "Tüm hakları saklıdır",
  },
  "ft.payments": {
    en: "Payment methods",
    ru: "Способы оплаты",
    ko: "결제 수단",
    tr: "Ödeme yöntemleri",
  },

  /* ---------- app type (tur) ---------- */
  "v.Boshqaruv": { en: "Dashboard", ru: "Панель управления", ko: "대시보드", tr: "Gösterge Paneli" },
  "v.KDS Tizimi": { en: "KDS System", ru: "Система KDS", ko: "KDS 시스템", tr: "KDS Sistemi" },
  "v.ODS Ekran": { en: "ODS Screen", ru: "Экран ODS", ko: "ODS 화면", tr: "ODS Ekranı" },
  "v.QR Menyu": { en: "QR Menu", ru: "QR-меню", ko: "QR 메뉴", tr: "QR Menü" },
  "v.Veb-Do'kon": { en: "Web Store", ru: "Веб-магазин", ko: "웹 스토어", tr: "Web Mağaza" },
  "v.Logistika": { en: "Logistics", ru: "Логистика", ko: "물류", tr: "Lojistik" },

  /* ---------- meta values (after claim cleanup) ---------- */
  "v.Payme · Click": { en: "Payme · Click", ru: "Payme · Click", ko: "Payme · Click", tr: "Payme · Click" },
  "v.Telegram": { en: "Telegram", ru: "Telegram", ko: "Telegram", tr: "Telegram" },
  "v.Excel · API": { en: "Excel · API", ru: "Excel · API", ko: "Excel · API", tr: "Excel · API" },
  "v.OctoPos · OctoOrder": { en: "OctoPos · OctoOrder", ru: "OctoPos · OctoOrder", ko: "OctoPos · OctoOrder", tr: "OctoPos · OctoOrder" },
  "v.OctoPos · Payme": { en: "OctoPos · Payme", ru: "OctoPos · Payme", ko: "OctoPos · Payme", tr: "OctoPos · Payme" },
  "v.Telegram · Maps API": { en: "Telegram · Maps API", ru: "Telegram · Maps API", ko: "Telegram · Maps API", tr: "Telegram · Maps API" },
  "v.Full HD · 4K": { en: "Full HD · 4K", ru: "Full HD · 4K", ko: "Full HD · 4K", tr: "Full HD · 4K" },

  /* ---------- start-free wizard ---------- */
  "wizard.title": {
    en: "Create your Octopos account",
    ru: "Создайте аккаунт Octopos",
    ko: "Octopos 계정 만들기",
    tr: "Octopos hesabı oluşturun",
  },
  "wizard.subtitle": {
    en: "Tell us about your restaurant and we’ll prepare a personalized demo.",
    ru: "Расскажите о своём ресторане — подготовим персональное демо.",
    ko: "레스토랑 정보를 알려주시면 개인화된 데모를 준비해드립니다.",
    tr: "Restoranınız hakkında bilgi verin — size özel bir demo hazırlayalım.",
  },
  "wizard.businessLabel": {
    en: "Restaurant Name",
    ru: "Название ресторана",
    ko: "매장 이름",
    tr: "Restoran adı",
  },
  "wizard.businessPlaceholder": {
    en: "e.g. The Burger Joint",
    ru: "напр., The Burger Joint",
    ko: "예: 더 버거 조인트",
    tr: "örn. The Burger Joint",
  },
  "wizard.startTrial": {
    en: "Start Instant Trial",
    ru: "Начать мгновенно",
    ko: "무료 체험 시작",
    tr: "Anında Başlat",
  },
  "wizard.proceed": {
    en: "Click to proceed with onboarding...",
    ru: "Нажмите, чтобы продолжить регистрацию...",
    ko: "온보딩을 진행하려면 클릭하세요...",
    tr: "Kayda devam etmek için düğmeye tıklayın...",
  },
  "wizard.creatingKitchen": {
    en: "Creating your kitchen...",
    ru: "Создание вашей кухни...",
    ko: "계정을 설정 중입니다...",
    tr: "Projeniz hazırlanıyor...",
  },
  "wizard.submit": {
    en: "Submit",
    ru: "Отправить запрос",
    ko: "요청 보내기",
    tr: "Gönder",
  },
  "wizard.submitting": {
    en: "Processing...",
    ru: "Обработка...",
    ko: "처리 중...",
    tr: "İşleniyor...",
  },
  "wizard.close": {
    en: "Close",
    ru: "Закрыть",
    ko: "닫기",
    tr: "Kapat",
  },
  "wizard.error": {
    en: "An error occurred. Please try again",
    ru: "Произошла ошибка. Попробуйте ещё раз",
    ko: "오류가 발생했습니다. 다시 시도해주세요",
    tr: "Bir hata oluştu. Lütfen tekrar deneyin",
  },
  "wizard.errorTitle": {
    en: "Submission Failed",
    ru: "Не удалось отправить",
    ko: "제출 실패",
    tr: "Gönderim Başarısız",
  },
  "wizard.errorBody": {
    en: "Oops! Something broke on our end. For a fast fix, email us at support@octopos.uz",
    ru: "Упс! У нас возникла ошибка. Для быстрого решения напишите на support@octopos.uz",
    ko: "문제가 발생했습니다. 빠른 처리 원하시면 support@octopos.uz 로 메일 주세요",
    tr: "Sorun oldu! Hızlı çözüm için support@octopos.uz adresine yazın",
  },
  "wizard.welcomeBackTitle": {
    en: "Welcome back",
    ru: "С возвращением",
    ko: "다시 오신 것을 환영합니다",
    tr: "Tekrar hoş geldiniz",
  },
  "wizard.welcomeBackBody": {
    en: 'You already created a trial account for "{name}".',
    ru: "У вас уже есть пробный аккаунт для «{name}».",
    ko: '"{name}" 체험 계정이 이미 생성되어 있습니다.',
    tr: '"{name}" için zaten bir deneme hesabı oluşturdunuz.',
  },
  "wizard.continue": {
    en: "Continue to your dashboard",
    ru: "Перейти в панель управления",
    ko: "대시보드로 이동",
    tr: "Panelinize devam edin",
  },
  "wizard.startFresh": {
    en: "Create a new account instead",
    ru: "Создать новый аккаунт",
    ko: "새 계정 만들기",
    tr: "Yeni bir hesap oluşturun",
  },

  /* ---------- agent download ---------- */
  "dl.heading": {
    en: "Install the Octopos Agent",
    ru: "Установите Octopos Agent",
    ko: "Octopos Agent 설치하기",
    tr: "Octopos Agent'ı yükleyin",
  },
  "dl.body": {
    en: "The Octopos Agent runs on a computer in your restaurant and keeps your tills, printers and kitchen displays connected — even if the internet drops. Install it once; we manage updates remotely.",
    ru: "Octopos Agent работает на компьютере в вашем ресторане и поддерживает связь касс, принтеров и кухонных экранов — даже при обрыве интернета. Установите один раз; обновлениями управляем удалённо.",
    ko: "Octopos Agent는 매장의 컴퓨터에서 실행되며 인터넷이 끊겨도 POS, 프린터, 주방 디스플레이 연결을 유지합니다. 한 번만 설치하면 업데이트는 원격으로 관리됩니다.",
    tr: "Octopos Agent restoranınızdaki bir bilgisayarda çalışır ve internet kesilse bile kasa, yazıcı ve mutfak ekranlarını bağlı tutar. Bir kez yükleyin; güncellemeleri uzaktan yönetiriz.",
  },
  "dl.windows": { en: "Windows", ru: "Windows", ko: "Windows", tr: "Windows" },
  "dl.windowsBody": {
    en: "Installs the agent and local server as Windows services.",
    ru: "Устанавливает агент и локальный сервер как службы Windows.",
    ko: "에이전트와 로컬 서버를 Windows 서비스로 설치합니다.",
    tr: "Agent ve yerel sunucuyu Windows hizmetleri olarak kurar.",
  },
  "dl.linux": { en: "Linux", ru: "Linux", ko: "Linux", tr: "Linux" },
  "dl.linuxBody": {
    en: "Contains the agent, local server, and service units.",
    ru: "Содержит агент, локальный сервер и файлы служб.",
    ko: "에이전트, 로컬 서버, 서비스 유닛을 포함합니다.",
    tr: "Agent, yerel sunucu ve hizmet birimlerini içerir.",
  },
  "dl.macos": { en: "macOS", ru: "macOS", ko: "macOS", tr: "macOS" },
  "dl.macosBody": {
    en: "Contains the agent, local server, and service units.",
    ru: "Содержит агент, локальный сервер и файлы служб.",
    ko: "에이전트, 로컬 서버, 서비스 유닛을 포함합니다.",
    tr: "Agent, yerel sunucu ve hizmet birimlerini içerir.",
  },
  "dl.winX64": { en: "x64", ru: "x64", ko: "x64", tr: "x64" },
  "dl.winArm": { en: "ARM64", ru: "ARM64", ko: "ARM64", tr: "ARM64" },
  "dl.linX64": { en: "AMD64", ru: "AMD64", ko: "AMD64", tr: "AMD64" },
  "dl.linArm": { en: "ARM64", ru: "ARM64", ko: "ARM64", tr: "ARM64" },
  "dl.macX64": { en: "Intel", ru: "Intel", ko: "Intel", tr: "Intel" },
  "dl.macArm": { en: "Apple Silicon", ru: "Apple Silicon", ko: "Apple Silicon", tr: "Apple Silicon" },
  "dl.download": {
    en: "Download",
    ru: "Скачать",
    ko: "다운로드",
    tr: "İndir",
  },

  /* ---------- SEO: page titles + descriptions ---------- */
  "meta.home.title": {
    en: "Octopos — One platform, eight apps",
    ru: "Octopos — Одна платформа, восемь приложений",
    ko: "Octopos — 하나의 플랫폼, 여덟 개의 앱",
    tr: "Octopos — Tek platform, sekiz uygulama",
  },
  "meta.home.desc": {
    en: "POS, KDS, dashboard, QR menu, web store and courier dispatcher — one subscription, one data source. A complete system for restaurants in Uzbekistan.",
    ru: "POS, KDS, дашборд, QR-меню, веб-магазин и диспетчер курьеров — одна подписка, один источник данных. Полное решение для ресторанов в Узбекистане.",
    ko: "POS, KDS, 대시보드, QR 메뉴, 웹 스토어, 쿠리어 디스패처 — 하나의 구독, 하나의 데이터 소스. 우즈베키스탄 레스토랑을 위한 완벽한 시스템.",
    tr: "POS, KDS, gösterge paneli, QR menü, web mağaza ve kuryer dağıtıcısı — tek abonelik, tek veri kaynağı. Özbekistan'daki restoranlar için eksiksiz bir sistem.",
  },
  "meta.apps.title": {
    en: "Apps — Octopos",
    ru: "Приложения — Octopos",
    ko: "앱 — Octopos",
    tr: "Uygulamalar — Octopos",
  },
  "meta.apps.desc": {
    en: "The eight apps in the Octopos ecosystem: POS, KDS, dashboard, QR menu, web store and courier.",
    ru: "Восемь приложений экосистемы Octopos: POS, KDS, дашборд, QR-меню, веб-магазин и курьер.",
    ko: "Octopos 생태계의 여덟 개 앱: POS, KDS, 대시보드, QR 메뉴, 웹 스토어, 쿠리어.",
    tr: "Octopos ekosistemindeki sekiz uygulama: POS, KDS, gösterge paneli, QR menü, web mağaza ve kuryer.",
  },
};

/* ---------------- runtime ---------------- */

export function isLang(v: unknown): v is Lang {
  return (
    typeof v === "string" &&
    LANGS.some((l) => l.code === v)
  );
}

/** Current locale is decided by the URL path (`/en/...`), so each language
 *  is a real, crawlable URL. Uzbek is the default at the site root. */
export function getLang(): Lang {
  try {
    const seg = location.pathname.split("/")[1] ?? "";
    if ((PREFIXED_LOCALES as readonly string[]).includes(seg)) return seg as Lang;
  } catch (_) {}
  return "uz";
}

/** Build the URL for `lang` from any current path (strips an existing
 *  locale prefix first). Used by the language switcher for navigation. */
export function localizePath(lang: Lang, pathname?: string): string {
  let p = pathname ?? "/";
  if (typeof location !== "undefined" && pathname === undefined) {
    p = location.pathname;
  }
  const parts = p.split("/");
  if ((LOCALES as readonly string[]).includes(parts[1] ?? "")) parts.splice(1, 1);
  const rest = parts.join("/") || "/";
  if (lang === "uz") return rest.startsWith("/") ? rest : `/${rest}`;
  return `/${lang}${rest.startsWith("/") ? rest : `/${rest}`}`;
}

export function setLang(l: Lang): void {
  try {
    localStorage.setItem("lang", l);
  } catch (_) {}
}

/** Translation lookup. With one arg uses the current client language
 *  (falls back to null → caller keeps the server-rendered Uzbek text). */
export function tr(key: string, lang?: string): string | null {
  const l = (lang ?? getLang()) as Lang;
  return STRINGS[key]?.[l] ?? null;
}

/** True when the key exists (used to decide whether to emit data-i18n). */
export function has(key: string): boolean {
  return STRINGS[key] != null;
}

const origText = new WeakMap<Element, string>();
const origAttr = new WeakMap<Element, Map<string, string>>();

/** Swap every [data-i18n] element to `lang` (default: stored language).
 *  Uzbek restores the original server-rendered text. Dispatches a
 *  `langchange` event so dynamic UI (plans, hover labels) can re-render. */
export function applyLang(lang?: string): void {
  const eff: Lang = isLang(lang) ? lang : getLang();
  document.documentElement.lang = eff;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    if (!origText.has(el)) origText.set(el, el.textContent ?? "");
    const base = origText.get(el)!;
    const key = el.getAttribute("data-i18n")!;
    let s = eff === "uz" ? base : STRINGS[key]?.[eff] ?? base;
    const n = el.getAttribute("data-n");
    if (n != null) s = s.replace(/\{(\w+)\}/g, (m, w) => (w === "n" ? n : m));
    const name = el.getAttribute("data-name");
    if (name != null) s = s.replace(/\{name\}/g, name);
    el.textContent = s;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr") ?? "";
    for (const pair of spec.split(",")) {
      const [attr, key] = pair.split(":").map((x) => x.trim());
      if (!attr || !key) continue;
      let m = origAttr.get(el);
      if (!m) {
        m = new Map();
        origAttr.set(el, m);
      }
      if (!m.has(attr)) m.set(attr, el.getAttribute(attr) ?? "");
      const base = m.get(attr)!;
      const s = eff === "uz" ? base : STRINGS[key]?.[eff] ?? base;
      el.setAttribute(attr, s);
    }
  });

  document.dispatchEvent(
    new CustomEvent("langchange", { detail: { lang: eff } }),
  );
}
