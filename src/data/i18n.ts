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
  "hero.t1": {
    en: "Use the best one,",
    ru: "Используйте лучшее,",
    ko: "최고만 쓰세요,",
    tr: "En iyisini kullan,",
  },
  "hero.t2": {
    en: "boss!",
    ru: "шеф!",
    ko: "사장님!",
    tr: "patron!",
  },
  "hero.trust": {
    en: "No bank card needed · Live in 1–3 days · Works without internet",
    ru: "Карта не нужна · Запуск за 1–3 дня · Работает без интернета",
    ko: "카드 불필요 · 1–3일 만에 도입 · 인터넷 없이 작동",
    tr: "Kart gerekmez · 1–3 günde kurulum · İnternetsiz çalışır",
  },
  "trust.1t": {
    en: "30+ businesses",
    ru: "30+ заведений",
    ko: "30곳 이상의 매장",
    tr: "30+ işletme",
  },
  "trust.1d": {
    en: "Restaurants and shops run on Octopos",
    ru: "Рестораны и магазины работают на Octopos",
    ko: "레스토랑과 매장이 Octopos를 사용합니다",
    tr: "Restoran ve marketler Octopos kullanıyor",
  },
  "trust.2t": {
    en: "Live in 1–3 days",
    ru: "Запуск за 1–3 дня",
    ko: "1–3일 만에 도입",
    tr: "1–3 günde kurulum",
  },
  "trust.2d": {
    en: "Including menu setup, hardware and training",
    ru: "С меню, оборудованием и обучением",
    ko: "메뉴 등록, 장비 연결, 교육 포함",
    tr: "Menü, donanım ve eğitim dahil",
  },
  "trust.3t": {
    en: "Works offline",
    ru: "Работает офлайн",
    ko: "오프라인에서도 작동",
    tr: "Çevrimdışı çalışır",
  },
  "trust.3d": {
    en: "Sales continue when the internet drops",
    ru: "Продажи продолжаются без интернета",
    ko: "인터넷이 끊겨도 판매는 계속됩니다",
    tr: "İnternet kesilse de satış sürer",
  },
  "trust.4t": {
    en: "Telegram support in 4 languages",
    ru: "Поддержка в Telegram на 4 языках",
    ko: "텔레그램 4개 언어 지원",
    tr: "Telegram'da 4 dilde destek",
  },
  "trust.4d": {
    en: "Uzbek, Russian, English and Korean",
    ru: "Узбекский, русский, английский и корейский",
    ko: "우즈베크어, 러시아어, 영어, 한국어",
    tr: "Özbekçe, Rusça, İngilizce ve Korece",
  },
  "mock.pending": {
    en: "Pending",
    ru: "Ожидает",
    ko: "대기 중",
    tr: "Bekliyor",
  },
  "mock.voidTitle": {
    en: "Void request",
    ru: "Запрос на отмену",
    ko: "취소 요청",
    tr: "İptal talebi",
  },
  "mock.voidText": {
    en: "Dilnoza K. asked to void 1 × Osh - 0.5",
    ru: "Dilnoza K. просит отменить 1 × Osh - 0.5",
    ko: "Dilnoza K. 님이 Osh - 0.5 1개 취소를 요청했습니다",
    tr: "Dilnoza K., 1 × Osh - 0.5 iptalini istedi",
  },
  "mock.reason": {
    en: "Reason",
    ru: "Причина",
    ko: "사유",
    tr: "Sebep",
  },
  "mock.reasonChanged": {
    en: "Guest changed their mind",
    ru: "Гость передумал",
    ko: "고객 변심",
    tr: "Müşteri fikrini değiştirdi",
  },
  "mock.sentBy": {
    en: "Requested by",
    ru: "Отправил",
    ko: "요청자",
    tr: "Talep eden",
  },
  "mock.approve": {
    en: "Approve",
    ru: "Подтвердить",
    ko: "승인",
    tr: "Onayla",
  },
  "mock.reject": {
    en: "Reject",
    ru: "Отклонить",
    ko: "거절",
    tr: "Reddet",
  },
  "mock.attention": {
    en: "Needs attention",
    ru: "Требует внимания",
    ko: "확인 필요",
    tr: "Dikkat gerektiriyor",
  },
  "mock.s1t": {
    en: "3 items below zero",
    ru: "3 позиции ниже нуля",
    ko: "재고 0 미만 3건",
    tr: "3 ürün sıfırın altında",
  },
  "mock.s1a": {
    en: "Fix balances",
    ru: "Исправить остатки",
    ko: "재고 수정",
    tr: "Stokları düzelt",
  },
  "mock.s2t": {
    en: "2 unfinished stock counts",
    ru: "2 незавершённые инвентаризации",
    ko: "미완료 재고 실사 2건",
    tr: "2 tamamlanmamış sayım",
  },
  "mock.s2a": {
    en: "Finish",
    ru: "Завершить",
    ko: "완료하기",
    tr: "Tamamla",
  },
  "mock.s3t": {
    en: "1 batch expires soon",
    ru: "У 1 партии истекает срок",
    ko: "유통기한 임박 1건",
    tr: "1 partinin süresi doluyor",
  },
  "mock.s3a": {
    en: "Use these first",
    ru: "Используйте их первыми",
    ko: "먼저 사용하세요",
    tr: "Önce bunları kullanın",
  },
  "mock.r1t": {
    en: "Stock levels",
    ru: "Состояние запасов",
    ko: "재고 현황",
    tr: "Stok durumu",
  },
  "mock.r1d": {
    en: "See stock of items and ingredients",
    ru: "Запасы товаров и ингредиентов",
    ko: "상품과 재료 재고 보기",
    tr: "Ürün ve malzeme stokunu görün",
  },
  "mock.r2t": {
    en: "Stock counts",
    ru: "Инвентаризации",
    ko: "재고 실사",
    tr: "Sayımlar",
  },
  "mock.r2d": {
    en: "Count the goods and see the differences",
    ru: "Пересчитайте товар и увидьте расхождения",
    ko: "상품을 세고 차이를 확인하세요",
    tr: "Ürünleri sayın, farkları görün",
  },
  "mock.r3t": {
    en: "What to order",
    ru: "Что нужно заказать",
    ko: "발주 필요 품목",
    tr: "Ne sipariş edilmeli",
  },
  "mock.r3d": {
    en: "What to buy and from whom",
    ru: "Что и у кого купить",
    ko: "무엇을 누구에게서 살지",
    tr: "Ne ve kimden alınacak",
  },
  "mock.register": {
    en: "Main register",
    ru: "Основная касса",
    ko: "메인 계산대",
    tr: "Ana kasa",
  },
  "mock.open": {
    en: "Open",
    ru: "Открыта",
    ko: "영업 중",
    tr: "Açık",
  },
  "mock.shiftOpened": {
    en: "Shift opened",
    ru: "Смена открыта",
    ko: "근무 시작",
    tr: "Vardiya açıldı",
  },
  "mock.sales": {
    en: "Sales",
    ru: "Продажи",
    ko: "매출",
    tr: "Satış",
  },
  "mock.gross": {
    en: "Gross sales",
    ru: "Валовые продажи",
    ko: "총매출",
    tr: "Brüt satış",
  },
  "mock.disc": {
    en: "Discounts",
    ru: "Скидки",
    ko: "할인",
    tr: "İndirimler",
  },
  "mock.sur": {
    en: "Surcharges",
    ru: "Наценки",
    ko: "추가 요금",
    tr: "Ek ücretler",
  },
  "mock.net": {
    en: "Net sales",
    ru: "Чистые продажи",
    ko: "순매출",
    tr: "Net satış",
  },
  "mock.writeOff": {
    en: "Write-offs",
    ru: "Списания",
    ko: "취소 내역",
    tr: "İptaller",
  },
  "mock.void": {
    en: "Voided (5)",
    ru: "Отменено (5)",
    ko: "취소 (5)",
    tr: "İptal edilen (5)",
  },
  "mock.mistake": {
    en: "Entry mistake (3)",
    ru: "Ошибка ввода (3)",
    ko: "입력 오류 (3)",
    tr: "Giriş hatası (3)",
  },
  "mock.changed": {
    en: "Guest changed their mind (2)",
    ru: "Гость передумал (2)",
    ko: "고객 변심 (2)",
    tr: "Müşteri fikrini değiştirdi (2)",
  },
  "mock.search": {
    en: "What are you looking for?",
    ru: "Что ищете?",
    ko: "무엇을 찾으세요?",
    tr: "Ne arıyorsunuz?",
  },
  "mock.delivery": {
    en: "Delivery",
    ru: "Доставка",
    ko: "배달",
    tr: "Teslimat",
  },
  "mock.toDoor": {
    en: "To your door",
    ru: "До двери",
    ko: "문 앞까지",
    tr: "Kapınıza kadar",
  },
  "mock.payOnline": {
    en: "Online payment",
    ru: "Онлайн-оплата",
    ko: "온라인 결제",
    tr: "Online ödeme",
  },
  // Receipt (Receipt.astro): printed-receipt labels; POS wording where it has one.
  "rc.order": { en: "Order #128", ru: "Заказ #128", ko: "주문 #128", tr: "Sipariş #128" },
  "rc.address": { en: "1 Sample Street", ru: "ул. Образцовая, 1", ko: "샘플로 1", tr: "Örnek Sokak, 1" },
  "rc.date": { en: "Date", ru: "Дата", ko: "날짜", tr: "Tarih" },
  "rc.table": { en: "Table", ru: "Стол", ko: "테이블", tr: "Masa" },
  "rc.tableV": { en: "Hall, Table 4", ru: "Зал, стол 4", ko: "홀, 테이블 4", tr: "Salon, Masa 4" },
  "rc.waiter": { en: "Waiter", ru: "Официант", ko: "직원", tr: "Garson" },
  "rc.waiterV": { en: "Waiter 1", ru: "Официант 1", ko: "직원 1", tr: "Garson 1" },
  "rc.source": { en: "Source", ru: "Источник", ko: "출처", tr: "Kaynak" },
  "rc.dineIn": { en: "Dine-In", ru: "В зале", ko: "매장 식사", tr: "Restoranda" },
  "rc.items": { en: "Items", ru: "Товары", ko: "메뉴", tr: "Ürünler" },
  "rc.price": { en: "Price", ru: "Цена", ko: "가격", tr: "Fiyat" },
  "rc.subtotal": { en: "Subtotal", ru: "Промежуточный итог", ko: "소계", tr: "Ara toplam" },
  "rc.service": { en: "Service 10%", ru: "Обслуживание 10%", ko: "봉사료 10%", tr: "Servis %10" },
  "rc.vat": { en: "VAT 12% (incl.)", ru: "НДС 12% (в т. ч.)", ko: "부가세 12% (포함)", tr: "KDV %12 (dahil)" },
  "rc.total": { en: "Total", ru: "Итого", ko: "합계", tr: "Toplam" },
  "rc.cash": { en: "Cash", ru: "Наличные", ko: "현금", tr: "Nakit" },
  "rc.type": { en: "Type", ru: "Тип", ko: "유형", tr: "Tür" },
  "rc.sale": { en: "Sale", ru: "Продажа", ko: "판매", tr: "Satış" },
  "rc.thanks": { en: "Thank you for visiting!", ru: "Спасибо за визит!", ko: "방문해 주셔서 감사합니다!", tr: "Ziyaretiniz için teşekkürler!" },
  "rc.again": { en: "We hope to see you again.", ru: "Ждём вас снова.", ko: "또 오세요.", tr: "Yine bekleriz." },
  // Hero POS screen (PosHero.astro): wording copied from kdsx-pos-v2/public/locales.
  "pos.alt": { en: "RestaurantPOS — order screen", ru: "RestaurantPOS — экран заказа", ko: "RestaurantPOS — 주문 화면", tr: "RestaurantPOS — sipariş ekranı" },
  "pos.search": { en: "Search for items", ru: "Поиск товаров", ko: "상품 검색", tr: "Ürün ara" },
  "pos.menu": { en: "Menu", ru: "Меню", ko: "메뉴", tr: "Menü" },
  "pos.variants3": { en: "3 variants", ru: "3 варианта", ko: "3개 옵션", tr: "3 varyant" },
  "pos.newSale": { en: "New sale", ru: "Новая продажа", ko: "새 판매", tr: "Yeni satış" },
  "pos.dineIn": { en: "Dine-In", ru: "В зале", ko: "매장 식사", tr: "Restoranda" },
  "pos.send": { en: "Send", ru: "Отправить", ko: "전송", tr: "Gönder" },
  "pos.notes": { en: "Notes...", ru: "Заметки...", ko: "메모...", tr: "Notlar..." },
  "pos.subtotal": { en: "Subtotal", ru: "Промежуточный итог", ko: "소계", tr: "Ara toplam" },
  "pos.total": { en: "Total", ru: "Итого", ko: "합계", tr: "Toplam" },
  "pos.checkout": { en: "Checkout", ru: "Оплата", ko: "결제", tr: "Ödeme" },
  "pos.drinks": { en: "Drinks", ru: "Напитки", ko: "음료", tr: "İçecekler" },
  "pos.service": { en: "Service 10%", ru: "Обслуживание 10%", ko: "봉사료 10%", tr: "Servis %10" },
  "mock.date": { en: "12 Nov, 13:45", ru: "12 нояб., 13:45", ko: "11월 12일 13:45", tr: "12 Kas, 13:45" },
  "mock.bannerT": { en: "One is never enough", ru: "Одного всегда мало", ko: "하나로는 부족해요", tr: "Bir tane asla yetmez" },
  "mock.bannerD": {
    en: "Can't pick just one roll? Then try a few.",
    ru: "Сложно выбрать один ролл? Тогда попробуйте несколько.",
    ko: "롤 하나만 고르기 어렵다면 여러 개를 맛보세요.",
    tr: "Tek bir rulo seçmek zor mu? O zaman birkaçını deneyin.",
  },
  "mock.choose": { en: "Choose", ru: "Выбрать", ko: "고르기", tr: "Seç" },
  "pos.tabLock": { en: "Lock", ru: "Заблокировать", ko: "잠금", tr: "Kilitle" },
  "pos.tabFloor": { en: "Floor", ru: "План", ko: "지도", tr: "Kat" },
  "pos.tabHome": { en: "Home", ru: "Главная", ko: "홈", tr: "Ev" },
  "pos.tabOrders": { en: "Orders", ru: "Заказы", ko: "주문", tr: "Sipariş" },
  "pos.tabInbox": { en: "Inbox", ru: "Входящие", ko: "알림", tr: "Gelen" },
  "pos.tabMore": { en: "More", ru: "Ещё", ko: "더보기", tr: "Diğer" },
  // Features section (Features.astro). Captions are site copy; the rest is the apps' own wording
  // (kdsx-dash-v2 / kdsx-pos-v2 public/locales).
  "ft.heading": { en: "The screens you’ll use every day", ru: "Экраны, которыми вы будете пользоваться каждый день", ko: "매일 쓰게 될 화면", tr: "Her gün kullanacağınız ekranlar" },
  "ft.plT": { en: "Profit and loss", ru: "Прибыли и убытки", ko: "손익", tr: "Kâr ve zarar" },
  "ft.plD": {
    en: "See on the Dash home page how every sale splits between costs and what you keep.",
    ru: "На главной странице Dash видно, как каждая продажа делится между затратами и тем, что остаётся вам.",
    ko: "Dash 홈에서 매출이 비용과 남는 금액으로 어떻게 나뉘는지 확인하세요.",
    tr: "Her satışın maliyetler ile size kalan arasında nasıl bölündüğünü Dash ana sayfasında görün.",
  },
  "ft.period": { en: "Period", ru: "Период", ko: "기간", tr: "Dönem" },
  "ft.today": { en: "Today", ru: "Сегодня", ko: "오늘", tr: "Bugün" },
  "ft.yesterday": { en: "Yesterday", ru: "Вчера", ko: "어제", tr: "Dün" },
  "ft.week": { en: "This week", ru: "Эта неделя", ko: "이번 주", tr: "Bu hafta" },
  "ft.netSales": { en: "Net sales", ru: "Чистая выручка", ko: "순매출", tr: "Net satışlar" },
  "ft.grossProfit": { en: "Gross profit (estimated)", ru: "Валовая прибыль (оценка)", ko: "매출 총이익 (추정)", tr: "Brüt kâr (tahmini)" },
  "ft.where": { en: "Where the money goes", ru: "Куда уходят деньги", ko: "돈의 흐름", tr: "Para nereye gidiyor" },
  "ft.whereHint": {
    en: "How every sale splits between costs and what you keep.",
    ru: "Как каждая продажа делится между затратами и тем, что остаётся вам.",
    ko: "매출이 비용과 남는 금액으로 어떻게 나뉘는지 보여줍니다.",
    tr: "Her satışın maliyetler ile size kalan arasında nasıl bölündüğü.",
  },
  "ft.cogs": { en: "Cost of sales", ru: "Себестоимость продаж", ko: "매출원가", tr: "Satılan malın maliyeti" },
  "ft.labour": { en: "Labour", ru: "Оплата труда", ko: "인건비", tr: "İşçilik" },
  "ft.opex": { en: "Operating expenses", ru: "Операционные расходы", ko: "운영비", tr: "İşletme giderleri" },
  "ft.opProfit": { en: "Operating profit", ru: "Операционная прибыль", ko: "영업이익", tr: "Faaliyet kârı" },
  "ft.repT": { en: "Hourly revenue and top items", ru: "Почасовая выручка и топ товаров", ko: "시간대별 매출과 인기 상품", tr: "Saatlik gelir ve en çok satanlar" },
  "ft.repD": {
    en: "Your busiest and quietest hours, and which dishes bring in the money.",
    ru: "Самые загруженные и тихие часы и блюда, которые приносят выручку.",
    ko: "가장 바쁜 시간과 한산한 시간, 매출을 만드는 메뉴를 확인하세요.",
    tr: "En yoğun ve sakin saatleriniz, geliri hangi yemeklerin getirdiği.",
  },
  "ft.hourly": { en: "Hourly revenue", ru: "Почасовая выручка", ko: "시간대별 매출", tr: "Saatlik gelir" },
  "ft.hourlyHint": {
    en: "Gross sales by hour — spot peaks and slow stretches.",
    ru: "Валовая выручка по часам — найдите пики и спады.",
    ko: "시간별 총매출로 피크와 한산한 시간을 확인하세요.",
    tr: "Saate göre brüt satışlar — zirveleri ve yavaş dönemleri görün.",
  },
  "ft.topItems": { en: "Top items", ru: "Топ товаров", ko: "인기 상품", tr: "En çok satan ürünler" },
  "ft.stopT": { en: "Availability", ru: "Доступность", ko: "판매 가능 수량", tr: "Kullanılabilirlik" },
  "ft.stopD": {
    en: "Stop selling a dish that has run out with one tap.",
    ru: "Остановите продажу закончившегося блюда одним касанием.",
    ko: "다 떨어진 메뉴는 한 번의 탭으로 판매를 중지하세요.",
    tr: "Biten bir yemeğin satışını tek dokunuşla durdurun.",
  },
  "ft.availability": { en: "Availability", ru: "Доступность", ko: "판매 가능 수량", tr: "Kullanılabilirlik" },
  "ft.restricted": { en: "Restricted", ru: "С ограничениями", ko: "제한됨", tr: "Kısıtlı" },
  "ft.searchItems": { en: "Search items or variants...", ru: "Поиск товаров или вариантов...", ko: "메뉴 또는 옵션 검색...", tr: "Ürün veya varyant ara..." },
  "ft.stopped": { en: "Stopped", ru: "Остановлены", ko: "중지됨", tr: "Durduruldu" },
  "ft.available": { en: "Available", ru: "Доступно", ko: "판매 가능", tr: "Satışta" },
  "ft.floorT": { en: "Floor plan", ru: "План зала", ko: "플로어 플랜", tr: "Kat planı" },
  "ft.floorD": {
    en: "Which tables are taken, how long guests have been seated, and who called the waiter.",
    ru: "Какие столы заняты, сколько гости уже сидят и кто позвал официанта.",
    ko: "어느 테이블이 사용 중인지, 손님이 얼마나 앉아 있었는지, 누가 직원을 호출했는지 보여줍니다.",
    tr: "Hangi masalar dolu, misafirler ne kadar süredir oturuyor ve kim garson çağırdı.",
  },
  "ft.all": { en: "All", ru: "Все", ko: "전체", tr: "Tümü" },
  "ft.free": { en: "Available", ru: "Свободно", ko: "사용 가능", tr: "Müsait" },
  "ft.busy": { en: "Occupied", ru: "Занято", ko: "사용 중", tr: "Dolu" },
  "ft.min35": { en: "35 min", ru: "35 мин", ko: "35분", tr: "35 dk" },
  "ft.min12": { en: "12 min", ru: "12 мин", ko: "12분", tr: "12 dk" },
  "ft.min58": { en: "58 min", ru: "58 мин", ko: "58분", tr: "58 dk" },
  "ft.inboxT": { en: "Inbox", ru: "Входящие", ko: "받은 편지함", tr: "Gelen Kutusu" },
  "ft.inboxD": {
    en: "Online orders, refund and void requests in one place.",
    ru: "Онлайн-заказы, запросы на возврат и аннулирование в одном месте.",
    ko: "온라인 주문, 환불 및 취소 요청을 한곳에서.",
    tr: "Online siparişler, iade ve iptal talepleri tek yerde.",
  },
  "ft.inbox": { en: "Inbox", ru: "Входящие", ko: "받은 편지함", tr: "Gelen Kutusu" },
  "ft.markAll": { en: "Mark all read", ru: "Прочитать все", ko: "모두 읽음 처리", tr: "Tümünü okundu işaretle" },
  "ft.pending": { en: "Order awaiting approval", ru: "Заказ ожидает подтверждения", ko: "승인 대기 중인 주문", tr: "Sipariş onay bekliyor" },
  "ft.pendingD": { en: "Order #0031 is waiting to be accepted", ru: "Заказ #0031 ожидает подтверждения", ko: "주문 #0031이(가) 승인 대기 중", tr: "#0031 siparişi onay bekliyor" },
  "ft.openOrder": { en: "Open order", ru: "Открыть заказ", ko: "주문 열기", tr: "Siparişi aç" },
  "ft.refundReq": { en: "Refund request", ru: "Запрос на возврат", ko: "환불 요청", tr: "İade talebi" },
  "ft.refundD": {
    en: "Dilnoza K. requested to refund 2 items on order #0022",
    ru: "Dilnoza K. запросила возврат 2 позиций заказа #0022",
    ko: "Dilnoza K.님이 주문 #0022의 상품 2개 환불을 요청했습니다",
    tr: "Dilnoza K., #0022 numaralı siparişteki 2 ürünün iadesini istedi",
  },
  "ft.refundAmt": { en: "Refund", ru: "Возврат", ko: "환불 금액", tr: "İade" },
  // Apps-carousel crops (AppCardMock.astro): each app's own wording.
  "mk.park": { en: "Park", ru: "Отложить", ko: "보류", tr: "Beklet" },
  "mk.items2": { en: "2 items", ru: "2 позиции", ko: "2개 항목", tr: "2 öğe" },
  "mk.items4": { en: "4 items", ru: "4 позиции", ko: "4개 항목", tr: "4 öğe" },
  "kd.new": { en: "New", ru: "Новый", ko: "신규", tr: "Yeni" },
  "kd.inProgress": { en: "In progress", ru: "В процессе", ko: "진행 중", tr: "Hazırlanıyor" },
  "kd.dineIn": { en: "Dine-In", ru: "В ресторане", ko: "매장 식사", tr: "Restoranda" },
  "kd.table": { en: "Table", ru: "Стол", ko: "테이블", tr: "Masa" },
  "kd.takeout": { en: "Takeout", ru: "Навынос", ko: "포장", tr: "Paket" },
  "kd.start": { en: "Start", ru: "Начать", ko: "시작", tr: "Başlat" },
  "od.preparing": { en: "Preparing", ru: "Готовится", ko: "준비 중", tr: "Hazırlanıyor" },
  "od.ready": { en: "Ready", ru: "Готово", ko: "준비 완료", tr: "Hazır" },
  "gs.at": { en: "You're at", ru: "Вы за", ko: "현재 위치", tr: "Bulunduğunuz masa" },
  "gs.table5": { en: "Table 5", ru: "Стол 5", ko: "5번 테이블", tr: "Masa 5" },
  "gs.viewMenu": { en: "View menu", ru: "Открыть меню", ko: "메뉴 보기", tr: "Menüyü görüntüle" },
  "gs.callWaiter": { en: "Call waiter", ru: "Позвать официанта", ko: "직원 호출", tr: "Garson çağır" },
  "gs.requestBill": { en: "Request bill", ru: "Запросить счёт", ko: "계산서 요청", tr: "Hesap iste" },
  "ws.bannerT": { en: "MacBook Pro 14. Built for a long day.", ru: "MacBook Pro 14. На весь долгий день.", ko: "MacBook Pro 14. 긴 하루를 위해.", tr: "MacBook Pro 14. Uzun bir gün için." },
  "ws.see": { en: "View", ru: "Смотреть", ko: "보기", tr: "Gör" },
  "ws.cod": { en: "Pay on delivery", ru: "Оплата при получении", ko: "수령 시 결제", tr: "Kapıda ödeme" },
  "ds.soonD": {
    en: "Offer jobs to couriers, fixed price or bids",
    ru: "Предлагайте заказы курьерам: фиксированная цена или ставки",
    ko: "배달원에게 작업 제안: 고정 가격 또는 입찰",
    tr: "Kuryelere iş teklif edin: sabit fiyat veya teklifler",
  },
  // Storefront mock (pickup is new; the rest predate it).
  "mock.pickup": { en: "Pickup", ru: "Самовывоз", ko: "포장", tr: "Gel-al" },
  "car.prev": { en: "Previous", ru: "Назад", ko: "이전", tr: "Önceki" },
  "car.next": { en: "Next", ru: "Вперёд", ko: "다음", tr: "Sonraki" },
  "calc.cta": { en: "Try the online store", ru: "Попробовать онлайн-магазин", ko: "온라인 스토어 체험하기", tr: "Çevrimiçi mağazayı deneyin" },
  "tm.phPhoto": { en: "Restaurant photo", ru: "Фото ресторана", ko: "레스토랑 사진", tr: "Restoran fotoğrafı" },
  "tm.phStat": { en: "One concrete number and what it means", ru: "Одна конкретная цифра и её пояснение", ko: "구체적인 숫자 하나와 설명", tr: "Tek somut rakam ve açıklaması" },
  "tm.phQuote": { en: "A short quote from the restaurant owner goes here.", ru: "Здесь будет короткий отзыв владельца ресторана.", ko: "레스토랑 사장님의 짧은 후기가 여기에 들어갑니다.", tr: "Restoran sahibinin kısa yorumu burada yer alacak." },
  "tm.phRole": { en: "Restaurant owner, city", ru: "Владелец ресторана, город", ko: "레스토랑 사장, 도시", tr: "Restoran sahibi, şehir" },
  "plans.stockFrom": { en: "Stock control — from Growth", ru: "Складской учёт — с тарифа Growth", ko: "재고 관리 — Growth부터", tr: "Stok kontrolü — Growth'tan itibaren" },
  "plans.plus": { en: "Everything in {name}, plus:", ru: "Всё из {name}, плюс:", ko: "{name}의 모든 기능, 그리고:", tr: "{name} planındaki her şey, ayrıca:" },
  "plans.feature": { en: "Feature", ru: "Возможность", ko: "기능", tr: "Özellik" },
  "plans.compare": { en: "Compare plans", ru: "Сравнить тарифы", ko: "요금제 비교", tr: "Planları karşılaştır" },
  "nf.title": { en: "Page not found", ru: "Страница не найдена", ko: "페이지를 찾을 수 없습니다", tr: "Sayfa bulunamadı" },
  "nf.body": { en: "There is no page at this address, or it has moved. Continue from the home page.", ru: "По этому адресу страницы нет или она была перенесена. Продолжите с главной.", ko: "이 주소에는 페이지가 없거나 이동되었습니다. 홈에서 계속하세요.", tr: "Bu adreste sayfa yok ya da taşındı. Ana sayfadan devam edin." },
  "nf.home": { en: "Home page", ru: "На главную", ko: "홈으로", tr: "Ana sayfa" },
  "ft.agent": { en: "Octopos Agent", ru: "Octopos Agent", ko: "Octopos Agent", tr: "Octopos Agent" },
  "nav.cta": {
    en: "Try it free",
    ru: "Попробовать бесплатно",
    ko: "무료로 시작",
    tr: "Ücretsiz deneyin",
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

  "hero.title": {
    en: "Use the best one, boss!",
    ru: "Используйте лучшее, шеф!",
    ko: "최고만 쓰세요, 사장님!",
    tr: "En iyisini kullan, patron!",
  },
  "hero.body": {
    en: "Point of sale, kitchen display, QR menu, online store and delivery in one system, with stock, fiscal receipts and reports built in. Sales keep going when the internet drops.",
    ru: "Касса, кухонный экран, QR-меню, онлайн-магазин и доставка в одной системе. Склад, фискальные чеки и отчёты тоже здесь. Продажи не останавливаются, даже если пропал интернет.",
    ko: "POS, 주방 디스플레이, QR 메뉴, 온라인 스토어, 배달까지 하나의 시스템으로. 재고, 회계 영수증, 리포트도 함께 들어 있습니다. 인터넷이 끊겨도 판매는 멈추지 않습니다.",
    tr: "Kasa, mutfak ekranı, QR menü, online mağaza ve teslimat tek sistemde. Stok, mali fişler ve raporlar da burada. İnternet kesilse bile satış durmaz.",
  },
  "hero.cta": {
    en: "Try it free →",
    ru: "Попробовать бесплатно →",
    ko: "무료로 시작하기 →",
    tr: "Ücretsiz dene →",
  },

  /* ---------- apps section / apps index ---------- */
  "apps.body": {
    en: "Eight apps in one synced system. Tap a card to open the app page.",
    ru: "Восемь приложений в одной синхронной системе. Нажмите на карточку, чтобы открыть страницу приложения.",
    ko: "하나의 동기화 시스템 속 여덟 개의 앱. 카드를 눌러 앱 페이지로 이동하세요.",
    tr: "Senkron bir sistemde sekiz uygulama. Uygulama sayfası için karta dokun.",
  },
  "faq.heading": {
    en: "Frequently asked questions",
    ru: "Частые вопросы",
    ko: "자주 묻는 질문",
    tr: "Sık sorulan sorular",
  },
  "faq.1q": {
    en: "Does the system keep working without internet?",
    ru: "Система работает без интернета?",
    ko: "인터넷 없이도 동작하나요?",
    tr: "İnternet kesilirse sistem çalışır mı?",
  },
  "faq.1a": {
    en: "Yes. Octopos is offline-first: sales, orders and the cash register keep working during outages, and everything syncs automatically when the connection returns.",
    ru: "Да. Octopos работает офлайн: продажи, заказы и касса продолжают работать при обрыве связи, а данные синхронизируются автоматически.",
    ko: "네. Octopos는 오프라인 우선으로, 연결이 끊겨도 판매·주문·계산대 업무가 계속되고 복구 후 자동 동기화됩니다.",
    tr: "Evet. Octopos çevrimdışı önceliklidir: kesintide satış, sipariş ve kasa çalışmaya devam eder, bağlantı dönünce her şey otomatik eşitlenir.",
  },
  "faq.2q": {
    en: "What does the subscription include?",
    ru: "Что входит в подписку?",
    ko: "구독에는 무엇이 포함되나요?",
    tr: "Aboneliğe neler dahil?",
  },
  "faq.2a": {
    en: "Every plan includes all updates and Telegram support. Features open up by plan: fiscal receipts and the kitchen display from Starter; stock, inventory counts and payroll from Growth; managing several branches centrally on Scale. Add-ons are billed separately.",
    ru: "В каждый тариф входят все обновления и поддержка в Telegram. Функции зависят от тарифа: фискальные чеки и кухонный экран — с Starter; склад, инвентаризация и зарплата — с Growth; централизованное управление несколькими филиалами — в Scale. Дополнительные услуги оплачиваются отдельно.",
    ko: "모든 요금제에 전체 업데이트와 텔레그램 지원이 포함됩니다. 기능은 요금제에 따라 열립니다: 전자(재정) 영수증과 주방 디스플레이는 Starter부터, 재고·재고 실사·급여는 Growth부터, 여러 지점 중앙 관리는 Scale에서 가능합니다. 부가 서비스는 별도입니다.",
    tr: "Her plana tüm güncellemeler ve Telegram desteği dahildir. Özellikler plana göre açılır: mali fiş ve mutfak ekranı Starter'dan, stok, sayım ve bordro Growth'tan, birden fazla şubeyi merkezden yönetme Scale'de. Eklentiler ayrıca ücretlendirilir.",
  },
  "faq.3q": {
    en: "Will it work with my hardware?",
    ru: "Совместимо ли с моим оборудованием?",
    ko: "기존 장비와 호환되나요?",
    tr: "Mevcut donanımımla çalışır mı?",
  },
  "faq.3a": {
    en: "Yes — Android tablets, Windows PCs, ESC/POS printers, cash drawers and barcode scanners. Ask for a demo for the full list.",
    ru: "Да — Android-планшеты, Windows-ПК, ESC/POS-принтеры, денежные ящики и сканеры штрих-кодов. Полный список — на демо.",
    ko: "네. Android 태블릿, Windows PC, ESC/POS 프린터, 금전함, 바코드 스캐너와 호환됩니다. 전체 목록은 데모에서 확인하세요.",
    tr: "Evet — Android tabletler, Windows PC'ler, ESC/POS yazıcılar, para çekmeceleri ve barkod okuyucular. Tam liste için demo isteyin.",
  },
  "faq.4q": {
    en: "How fast can we launch?",
    ru: "Как быстро запустимся?",
    ko: "출시까지 얼마나 걸리나요?",
    tr: "Ne kadar sürede yayına geçeriz?",
  },
  "faq.4a": {
    en: "Usually 1–3 days: we import your menu, connect the hardware and train your team. Chains get a dedicated rollout plan.",
    ru: "Обычно 1–3 дня: импортируем меню, подключаем оборудование и обучаем команду. Для сетей — отдельный план.",
    ko: "보통 1~3일이면 메뉴 등록, 장비 연결, 직원 교육을 마칩니다. 체인 매장은 별도 계획으로 진행합니다.",
    tr: "Genelde 1-3 gün: menüyü aktarır, donanımı bağlar, ekibi eğitiriz. Zincirler için özel plan yapılır.",
  },
  "faq.5q": {
    en: "Can we migrate data from our old system?",
    ru: "Можно ли перенести данные из старой системы?",
    ko: "기존 시스템 데이터를 이전할 수 있나요?",
    tr: "Eski sistemdeki veriler taşınır mı?",
  },
  "faq.5a": {
    en: "Yes — menus, prices and stock import from Excel, and you can run both systems in parallel during the transition.",
    ru: "Да — меню, цены и остатки импортируются из Excel, возможен параллельный запуск.",
    ko: "네. 메뉴·가격·재고를 Excel에서 가져오고, 전환 기간에는 기존 시스템과 병행 운영할 수 있습니다.",
    tr: "Evet — menü, fiyat ve stok Excel'den içe aktarılır; geçişte paralel çalışabilirsiniz.",
  },
  "faq.6q": {
    en: "Which payment methods can we accept?",
    ru: "Какие способы оплаты поддерживаются?",
    ko: "어떤 결제를 받을 수 있나요?",
    tr: "Hangi ödeme yöntemleri var?",
  },
  "faq.6a": {
    en: "Cash, cards, QR, Payme and Click — everything is recorded automatically and lands in your reports.",
    ru: "Наличные, карты, QR, Payme и Click — всё учитывается автоматически и попадает в отчёты.",
    ko: "현금, 카드, QR, Payme, Click을 지원하며 모두 자동 집계되어 리포트에 반영됩니다.",
    tr: "Nakit, kart, QR, Payme ve Click — hepsi otomatik işlenir ve raporlara yansır.",
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
  "lightbox.view": {
    en: "Image viewer",
    ru: "Просмотр фото",
    ko: "이미지 보기",
    tr: "Görüntüleyici",
  },
  "lightbox.close": {
    en: "Close",
    ru: "Закрыть",
    ko: "닫기",
    tr: "Kapat",
  },
  "lightbox.zoomIn": {
    en: "Zoom in",
    ru: "Приблизить",
    ko: "확대",
    tr: "Yakınlaştır",
  },
  "lightbox.zoomOut": {
    en: "Zoom out",
    ru: "Отдалить",
    ko: "축소",
    tr: "Uzaklaştır",
  },
  "lightbox.prev": {
    en: "Previous image",
    ru: "Предыдущее фото",
    ko: "이전 이미지",
    tr: "Önceki görsel",
  },
  "lightbox.next": {
    en: "Next image",
    ru: "Следующее фото",
    ko: "다음 이미지",
    tr: "Sonraki görsel",
  },

  /* ---------- solutions ---------- */
  "sol.4t": {
    en: "Own delivery",
    ru: "Собственная доставка",
    ko: "자체 배달",
    tr: "Kendi teslimatı",
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
  "feat.pos-restaurant.5": {
    en: "Table reservations, with reserved tables shown on the floor plan",
    ru: "Бронирование столов с отметкой на плане зала",
    ko: "테이블 예약 및 홀 배치도에 예약 테이블 표시",
    tr: "Masa rezervasyonu, rezerve masalar salon planında",
  },
  "feat.pos-restaurant.6": {
    en: "Customer-facing display showing the order and total",
    ru: "Экран для покупателя: заказ и сумма перед глазами",
    ko: "고객용 디스플레이: 주문 내역과 금액 표시",
    tr: "Müşteri ekranı: sipariş ve tutar görünür",
  },
  "feat.pos-restaurant.7": {
    en: "Cash in and cash out recorded at the till",
    ru: "Учёт внесения и изъятия наличных в кассе",
    ko: "계산대 현금 입출금 기록",
    tr: "Kasaya nakit giriş ve çıkış kaydı",
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
  "feat.pos-market.5": {
    en: "Separate prices for customer groups, such as wholesale",
    ru: "Отдельные цены для групп покупателей, например оптовые",
    ko: "도매 등 고객 그룹별 별도 가격",
    tr: "Müşteri grupları için ayrı fiyatlar, örneğin toptan",
  },
  "feat.pos-market.6": {
    en: "Customer-facing display showing items and total",
    ru: "Экран для покупателя: товары и сумма перед глазами",
    ko: "고객용 디스플레이: 상품과 금액 표시",
    tr: "Müşteri ekranı: ürünler ve tutar görünür",
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
  "feat.dash.5": {
    en: "AI menu import: products and dish photos from a picture or a list",
    ru: "ИИ-импорт меню: товары и фото блюд из снимка или списка",
    ko: "AI 메뉴 가져오기: 사진이나 목록에서 상품과 음식 사진 생성",
    tr: "Yapay zekâ ile menü aktarımı: fotoğraf veya listeden ürünler ve yemek görselleri",
  },
  "feat.dash.6": {
    en: "Customer base, segments and debt tracking",
    ru: "База клиентов, сегменты и контроль задолженности",
    ko: "고객 데이터베이스, 세그먼트, 미수금 관리",
    tr: "Müşteri tabanı, segmentler ve borç takibi",
  },
  "feat.dash.7": {
    en: "Price lists: separate prices per sales channel and customer group",
    ru: "Прайс-листы: свои цены для каналов продаж и групп клиентов",
    ko: "가격표: 판매 채널 및 고객 그룹별 가격",
    tr: "Fiyat listeleri: satış kanalı ve müşteri grubuna göre ayrı fiyat",
  },
  "feat.dash.8": {
    en: "Suppliers: purchase orders, goods receipt, bills and payments",
    ru: "Поставщики: заказы, приёмка, счета и оплата",
    ko: "공급업체: 발주, 입고, 청구서, 결제",
    tr: "Tedarikçiler: sipariş, mal kabul, fatura ve ödeme",
  },
  "feat.dash.9": {
    en: "Production runs, batches and expiry dates",
    ru: "Производство, партии и сроки годности",
    ko: "생산, 로트, 유통기한 관리",
    tr: "Üretim, partiler ve son kullanma tarihleri",
  },
  "feat.dash.10": {
    en: "Print price labels with barcodes",
    ru: "Печать ценников со штрихкодом",
    ko: "바코드 가격 라벨 인쇄",
    tr: "Barkodlu fiyat etiketi basma",
  },
  "feat.dash.11": {
    en: "Multi-currency: dollar prices sold at the day's exchange rate",
    ru: "Мультивалютность: цены в долларах продаются по курсу дня",
    ko: "다중 통화: 달러 가격을 당일 환율로 판매",
    tr: "Çoklu para birimi: dolar fiyatları günün kuruyla satılır",
  },
  "feat.dash.12": {
    en: "Payroll, including commission and delivery pay",
    ru: "Расчёт зарплаты с комиссией и оплатой за доставку",
    ko: "수수료 및 배달 수당을 포함한 급여 계산",
    tr: "Komisyon ve teslimat ücreti dahil maaş hesaplama",
  },
  "feat.dash.13": {
    en: "Customise your receipt design",
    ru: "Настройка дизайна чека",
    ko: "영수증 디자인 직접 설정",
    tr: "Fiş tasarımını kendiniz ayarlayın",
  },
  "feat.dash.14": {
    en: "Telegram alerts: voids, approval requests, low stock",
    ru: "Уведомления в Telegram: отмены, запросы на подтверждение, остатки",
    ko: "텔레그램 알림: 취소, 승인 요청, 재고 부족",
    tr: "Telegram bildirimleri: iptaller, onay talepleri, düşük stok",
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
  "feat.website.5": {
    en: "Multiple languages, your own pages and themes",
    ru: "Несколько языков, свои страницы и темы",
    ko: "다국어, 자체 페이지, 테마",
    tr: "Birden fazla dil, kendi sayfalarınız ve temalar",
  },
  "feat.website.6": {
    en: "Site analytics and a history of every change",
    ru: "Статистика сайта и история всех изменений",
    ko: "사이트 통계 및 모든 변경 이력",
    tr: "Site istatistikleri ve her değişikliğin geçmişi",
  },
  "feat.dispatch.0": {
    en: "Assign or change the courier on a delivery order",
    ru: "Назначить или сменить курьера для доставки",
    ko: "배달 주문에 배달원 배정 또는 변경",
    tr: "Teslimat siparişine kurye atama veya değiştirme",
  },
  "feat.dispatch.1": {
    en: "Offer the job to every courier or to chosen ones",
    ru: "Предложить заказ всем курьерам или выбранным",
    ko: "모든 배달원 또는 선택한 배달원에게 작업 제안",
    tr: "İşi tüm kuryelere veya seçilenlere teklif etme",
  },
  "feat.dispatch.2": {
    en: "Fixed price or bids: couriers name their price, you choose",
    ru: "Фиксированная цена или ставки: курьеры называют цену, вы выбираете",
    ko: "고정 가격 또는 입찰: 배달원이 가격을 제시하고 직접 선택",
    tr: "Sabit fiyat veya teklifler: kuryeler fiyat verir, siz seçersiniz",
  },
  "feat.dispatch.3": {
    en: "Address from the map and a note for the courier: intercom, where to leave it",
    ru: "Адрес с карты и заметка для курьера: домофон, где оставить",
    ko: "지도에서 주소 선택, 배달원 메모: 인터폰, 놓아둘 곳",
    tr: "Haritadan adres ve kurye notu: diyafon, nereye bırakılacağı",
  },
  "feat.dispatch.4": {
    en: "The delivery fee is recorded separately, not added to the order total",
    ru: "Стоимость доставки учитывается отдельно и не добавляется к сумме заказа",
    ko: "배달비는 따로 기록되며 주문 금액에 더해지지 않음",
    tr: "Teslimat ücreti ayrı kaydedilir, sipariş tutarına eklenmez",
  },
  "feat.dispatch.5": {
    en: "A notification in Inbox when couriers respond",
    ru: "Уведомление во «Входящих», когда курьеры отвечают",
    ko: "배달원이 응답하면 알림함에 알림",
    tr: "Kuryeler yanıt verdiğinde Gelen Kutusu'nda bildirim",
  },


  /* ---------- app descriptions ---------- */
  "app.pos-restaurant.desc": {
    en: "Live floor plan, orders in seconds, split checks and strict cash discipline. For tablets and all-in-ones.",
    ru: "Живой план зала, заказы за секунды, деление чека и строгая кассовая дисциплина. Для планшетов и моноблоков.",
    ko: "실시간 플로어 플랜, 초 단위 주문, 청구서 분할, 엄격한 현금 규율. 태블릿과 올인원용.",
    tr: "Canlı kat planı, saniyeler içinde sipariş, hesap bölme ve sıkı kasa disiplini. Tablet ve hepsi bir arada cihazlar için.",
  },
  "app.pos-market.desc": {
    en: "MarketPOS for bazaars and markets: orders, receipts and delivery management. Restaurant POS capabilities plus throughput features.",
    ru: "MarketPOS для базаров и магазинов: заказы, чеки и доставка. Возможности ресторанного POS плюс функции для оборота.",
    ko: "바자르와 마켓을 위한 MarketPOS: 주문, 영수증, 배달 관리. 레스토랑 POS 기능에 판매량 기능 추가.",
    tr: "Pazar ve marketler için MarketPOS: siparişler, fişler ve teslimat yönetimi. Restoran POS yetenekleri artı hacim özellikleri.",
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
    en: "Give delivery orders to your own couriers: assign them or offer the job, and see couriers' answers in Inbox.",
    ru: "Передавайте доставки своим курьерам: назначайте или предлагайте заказ и видьте ответы курьеров во «Входящих».",
    ko: "배달 주문을 자체 배달원에게 맡기세요. 배정하거나 작업을 제안하고, 배달원의 응답을 알림함에서 확인하세요.",
    tr: "Teslimat siparişlerini kendi kuryelerinize verin: atayın veya işi teklif edin, kuryelerin yanıtlarını Gelen Kutusu'nda görün.",
  },
  "app.soon": { en: "Coming soon", ru: "Скоро", ko: "출시 예정", tr: "Yakında" },
  "v.Planshet · Web": { en: "Tablet · Web", ru: "Планшет · Веб", ko: "태블릿 · 웹", tr: "Tablet · Web" },


  /* ---------- detail page ---------- */
  "common.back": {
    en: "← Apps",
    ru: "← Приложения",
    ko: "← 앱",
    tr: "← Uygulamalar",
  },
  "common.showAll": {
    en: "Show all",
    ru: "Показать все",
    ko: "모두 보기",
    tr: "Tümünü göster",
  },
  "common.showMore": {
    en: "More",
    ru: "Подробнее",
    ko: "더 보기",
    tr: "Daha fazla",
  },
  "common.showPrices": {
    en: "Show prices",
    ru: "Показать тарифы",
    ko: "요금 보기",
    tr: "Fiyatları göster",
  },
  "common.details": {
    en: "Details",
    ru: "Характеристики",
    ko: "사양",
    tr: "Özellikler",
  },
  "common.showAllPhotos": {
    en: "Show all screenshots",
    ru: "Показать все скриншоты",
    ko: "스크린샷 모두 보기",
    tr: "Tüm ekran görüntüleri",
  },
  "theme.toggle": {
    en: "Theme",
    ru: "Тема",
    ko: "테마",
    tr: "Tema",
  },
  "cta.tryFree": {
    en: "Try it free →",
    ru: "Попробовать бесплатно →",
    ko: "무료로 시작 →",
    tr: "Ücretsiz dene →",
  },
  "cta.next": {
    en: "Next ›",
    ru: "Далее ›",
    ko: "다음 ›",
    tr: "Sonraki ›",
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
  "v.RestaurantPOS · Oshxona": {
    en: "RestaurantPOS · Kitchen",
    ru: "RestaurantPOS · Кухня",
    ko: "RestaurantPOS · 주방",
    tr: "RestaurantPOS · Mutfak",
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
    en: "Shop home page: banner, catalogue and delivery",
    ru: "Главная магазина: баннер, каталог и доставка",
    ko: "쇼핑몰 홈: 배너, 카탈로그, 배송",
    tr: "Mağaza ana sayfası: afiş, katalog ve teslimat",
  },
  "frame.website.website-catalog": {
    en: "Category: products, filters and sorting",
    ru: "Категория: товары, фильтры и сортировка",
    ko: "카테고리: 상품, 필터, 정렬",
    tr: "Kategori: ürünler, filtreler ve sıralama",
  },
  "frame.website.website-product": {
    en: "Product page",
    ru: "Страница товара",
    ko: "상품 페이지",
    tr: "Ürün sayfası",
  },
  "frame.website.website-mobile": {
    en: "On a phone",
    ru: "На телефоне",
    ko: "휴대폰 화면",
    tr: "Telefonda",
  },
  "frame.website.website-dark": {
    en: "Dark mode",
    ru: "Тёмная тема",
    ko: "다크 모드",
    tr: "Karanlık mod",
  },


  /* ---------- logos ---------- */

  /* ---------- integrations ---------- */
  /* ---------- problems / proof / steps ---------- */
  "prob.heading": {
    en: "Familiar problems, ready solutions",
    ru: "Знакомые проблемы, готовые решения",
    ko: "익숙한 문제, 준비된 해결책",
    tr: "Tanıdık sorunlar, hazır çözümler",
  },
  "prob.body": {
    en: "You can't stand at the till every day. Octopos records every receipt, every gram of stock and every void.",
    ru: "Владелец не может каждый день стоять у кассы. Octopos записывает каждый чек, каждый грамм продуктов и каждую отмену.",
    ko: "사장님이 매일 계산대를 지킬 수는 없습니다. Octopos는 모든 영수증, 모든 재료 사용량, 모든 취소를 기록합니다.",
    tr: "Her gün kasanın başında duramazsınız. Octopos her fişi, her gram malzemeyi ve her iptali kaydeder.",
  },
  "prob.7p": {
    en: "Worried about tax inspections?",
    ru: "Беспокоитесь о налоговых проверках?",
    ko: "세무 조사가 걱정되시나요?",
    tr: "Vergi denetimi mi endişelendiriyor?",
  },
  "prob.7t": {
    en: "A fiscal receipt for every sale, automatically",
    ru: "Фискальный чек на каждую продажу, автоматически",
    ko: "모든 판매에 회계 영수증 자동 발행",
    tr: "Her satışa otomatik mali fiş",
  },
  "prob.7d": {
    en: "Octopos works with the fiscal module: every sale goes to the tax system automatically, and the cashier does nothing extra. Our clients already work this way.",
    ru: "Octopos работает с фискальным модулем: каждая продажа автоматически уходит в налоговую систему, кассиру ничего не нужно делать дополнительно. Наши клиенты уже так работают.",
    ko: "Octopos는 회계 모듈과 연동됩니다. 모든 판매가 자동으로 세무 시스템에 전송되며, 계산원이 따로 할 일은 없습니다. 이미 저희 고객들이 이렇게 사용하고 있습니다.",
    tr: "Octopos mali modülle çalışır: her satış otomatik olarak vergi sistemine gider, kasiyerin ek bir şey yapmasına gerek yoktur. Müşterilerimiz zaten bu şekilde çalışıyor.",
  },
  "common.swipe": {
    en: "← Swipe →",
    ru: "← Листайте →",
    ko: "← 옆으로 넘기기 →",
    tr: "← Kaydırın →",
  },
  "common.fullscreen": {
    en: "Full screen",
    ru: "Весь экран",
    ko: "전체 화면",
    tr: "Tam ekran",
  },
  "fisc.1t": {
    en: "Refunds get a fiscal receipt too",
    ru: "Возврат тоже с фискальным чеком",
    ko: "환불도 회계 영수증 발행",
    tr: "İadeler de mali fişle",
  },
  "fisc.1d": {
    en: "Every refund is issued with its own fiscal receipt.",
    ru: "Каждый возврат оформляется отдельным фискальным чеком.",
    ko: "모든 환불은 별도의 회계 영수증으로 처리됩니다.",
    tr: "Her iade ayrı bir mali fişle kesilir.",
  },
  "fisc.2t": {
    en: "MXIK and package codes",
    ru: "Коды ИКПУ и упаковки",
    ko: "MXIK 및 포장 코드",
    tr: "MXIK (IKPU) ve ambalaj kodları",
  },
  "fisc.2d": {
    en: "Set once per product, or once for the whole business.",
    ru: "Задаются один раз для товара или для всего бизнеса.",
    ko: "상품별로 또는 사업장 전체에 한 번만 설정합니다.",
    tr: "Ürün başına ya da tüm işletme için bir kez ayarlanır.",
  },
  "fisc.3t": {
    en: "Tax QR code on the receipt",
    ru: "QR-код налоговой на чеке",
    ko: "영수증에 세무 QR 코드",
    tr: "Fişte vergi QR kodu",
  },
  "fisc.3d": {
    en: "The customer can check the receipt in the tax system via the QR.",
    ru: "Покупатель может проверить чек в налоговой системе по QR-коду.",
    ko: "손님은 QR로 세무 시스템에서 영수증을 확인할 수 있습니다.",
    tr: "Müşteri fişi QR ile vergi sisteminde doğrulayabilir.",
  },
  "fisc.4t": {
    en: "The fiscal day closes itself",
    ru: "Фискальный день закрывается сам",
    ko: "회계일 자동 마감",
    tr: "Mali gün kendiliğinden kapanır",
  },
  "fisc.4d": {
    en: "When the shift or business day closes, the fiscal day closes too.",
    ru: "При закрытии смены или рабочего дня закрывается и фискальный день.",
    ko: "교대나 영업일을 마감하면 회계일도 함께 마감됩니다.",
    tr: "Vardiya veya iş günü kapanınca mali gün de kapanır.",
  },
  "fisc.5t": {
    en: "No receipt gets lost",
    ru: "Чек не потеряется",
    ko: "영수증이 누락되지 않습니다",
    tr: "Hiçbir fiş kaybolmaz",
  },
  "fisc.5d": {
    en: "If the fiscal module doesn't answer, the receipt is re-sent automatically.",
    ru: "Если фискальный модуль не ответил, чек отправляется повторно автоматически.",
    ko: "회계 모듈이 응답하지 않으면 영수증이 자동으로 다시 전송됩니다.",
    tr: "Mali modül yanıt vermezse fiş otomatik olarak yeniden gönderilir.",
  },
  "fisc.6t": {
    en: "Service charge and VAT done right",
    ru: "Обслуживание и НДС правильно",
    ko: "봉사료와 부가세 정확하게",
    tr: "Servis ücreti ve KDV doğru",
  },
  "fisc.6d": {
    en: "Shown on separate lines, as the tax rules require.",
    ru: "Отдельными строками на чеке, как требует налоговая.",
    ko: "세법 요건에 맞게 영수증에 별도 줄로 표시됩니다.",
    tr: "Vergi kurallarına uygun şekilde ayrı satırlarda gösterilir.",
  },
  "prob.1p": {
    en: "Cashiers voiding receipts?",
    ru: "Кассир отменяет чеки?",
    ko: "직원이 영수증을 몰래 취소하나요?",
    tr: "Kasiyer fişleri iptal mi ediyor?",
  },
  "prob.1t": {
    en: "Voids only with manager approval",
    ru: "Отмена только с разрешения менеджера",
    ko: "취소는 매니저 승인으로만",
    tr: "İptal yalnızca yönetici onayıyla",
  },
  "prob.1d": {
    en: "Voiding an order or a dish needs a manager's approval. The request appears on the POS and in Telegram: who asked, when, and why. Reject it and the receipt stays as it was.",
    ru: "Чтобы отменить заказ или блюдо, нужно подтверждение менеджера. Запрос приходит на кассу и в Telegram: кто, когда и по какой причине. Отклоните, и чек не изменится.",
    ko: "주문이나 메뉴를 취소하려면 매니저 승인이 필요합니다. 요청은 POS와 텔레그램으로 옵니다: 누가, 언제, 어떤 이유로 요청했는지. 거절하면 영수증은 그대로입니다.",
    tr: "Bir siparişi veya yemeği iptal etmek için yönetici onayı gerekir. Talep kasaya ve Telegram'a gelir: kim, ne zaman, hangi sebeple. Reddederseniz fiş değişmez.",
  },
  "prob.2p": {
    en: "Stock going missing?",
    ru: "Продукты пропадают со склада?",
    ko: "창고에서 재료가 사라지나요?",
    tr: "Depodan ürün mü kayboluyor?",
  },
  "prob.2t": {
    en: "Every gram in stock is accounted for",
    ru: "Каждый грамм на складе под учётом",
    ko: "재고의 모든 그램을 기록합니다",
    tr: "Depodaki her gram kayıt altında",
  },
  "prob.2d": {
    en: "Every dish sold is deducted from stock by its recipe. After a stock count, the variance report shows which product came up short and by how much. You get a Telegram alert when something is running low.",
    ru: "Каждое проданное блюдо списывается со склада по техкарте. После инвентаризации отчёт по расхождениям показывает, какого продукта не хватает и сколько. Когда что-то заканчивается, приходит уведомление в Telegram.",
    ko: "판매된 메뉴는 레시피에 따라 재고에서 차감됩니다. 재고 실사 후 차이 보고서에서 어떤 재료가 얼마나 부족한지 확인할 수 있습니다. 재고가 떨어져 가면 텔레그램으로 알림이 옵니다.",
    tr: "Satılan her yemek reçetesine göre stoktan düşülür. Sayımdan sonra fark raporu hangi üründen ne kadar eksik çıktığını gösterir. Bir ürün azaldığında Telegram'a bildirim gelir.",
  },
  "prob.3p": {
    en: "Cash drawer not adding up at the end of the shift?",
    ru: "В конце смены касса не сходится?",
    ko: "교대가 끝날 때 현금이 맞지 않나요?",
    tr: "Vardiya sonunda kasa tutmuyor mu?",
  },
  "prob.3t": {
    en: "Every shift in one report",
    ru: "Каждая смена в одном отчёте",
    ko: "모든 교대를 하나의 리포트로",
    tr: "Her vardiya tek raporda",
  },
  "prob.3d": {
    en: "When the business day closes, gross sales, discounts, refunds, voids and cash or card payments are on one page. Cash put into or taken from the drawer is recorded separately.",
    ru: "При закрытии дня валовые продажи, скидки, возвраты, отмены и оплаты наличными или картой видны на одной странице. Внесение и изъятие наличных записываются отдельно.",
    ko: "영업일을 마감하면 총매출, 할인, 환불, 취소, 현금·카드 결제가 한 페이지에 정리됩니다. 금고에 넣거나 꺼낸 현금도 따로 기록됩니다.",
    tr: "İş günü kapandığında brüt satış, indirimler, iadeler, iptaller ve nakit ya da kartla ödemeler tek sayfada. Kasaya konan ve kasadan alınan nakit ayrıca kaydedilir.",
  },
  "prob.6p": {
    en: "Aggregators taking a cut of every order?",
    ru: "Агрегаторы берут комиссию с каждого заказа?",
    ko: "배달 플랫폼이 주문마다 수수료를 떼가나요?",
    tr: "Platformlar her siparişten komisyon mu alıyor?",
  },
  "prob.6t": {
    en: "Your own website and Telegram, no commission",
    ru: "Свой сайт и Telegram, без комиссии",
    ko: "자체 웹사이트와 텔레그램, 수수료 없이",
    tr: "Kendi siteniz ve Telegram, komisyonsuz",
  },
  "prob.6d": {
    en: "Open an online store under your own brand. Orders go straight to your POS, are paid with Payme or Click, and your own couriers deliver them.",
    ru: "Откройте онлайн-магазин под своим брендом. Заказы попадают прямо в кассу, оплачиваются через Payme и Click, а доставляют ваши курьеры.",
    ko: "자체 브랜드로 온라인 스토어를 여세요. 주문은 바로 POS로 들어오고, Payme와 Click으로 결제되며, 자체 배달원이 배달합니다.",
    tr: "Kendi markanızla online mağaza açın. Siparişler doğrudan kasaya düşer, Payme ve Click ile ödenir, kendi kuryeleriniz teslim eder.",
  },
  "prob.x2t": {
    en: "Does the internet going down stop sales?",
    ru: "Пропал интернет, и продажи встали?",
    ko: "인터넷이 끊기면 판매가 멈추나요?",
    tr: "İnternet kesilince satış duruyor mu?",
  },
  "prob.x2d": {
    en: "No. Octopos Agent runs on a computer in your restaurant, so tills, printers and kitchen screens keep working together without the internet. Everything syncs once it's back.",
    ru: "Нет. Octopos Agent работает на компьютере в вашем заведении: кассы, принтеры и кухонные экраны продолжают работать вместе без интернета. Когда связь вернётся, всё синхронизируется.",
    ko: "아니요. Octopos Agent가 매장 컴퓨터에서 실행되어 POS, 프린터, 주방 화면이 인터넷 없이도 함께 작동합니다. 인터넷이 돌아오면 모두 동기화됩니다.",
    tr: "Hayır. Octopos Agent işletmenizdeki bilgisayarda çalışır; kasalar, yazıcılar ve mutfak ekranları internet olmadan da birlikte çalışmaya devam eder. Bağlantı gelince her şey senkronize olur.",
  },
  "prob.x3t": {
    en: "Customers buying on credit?",
    ru: "Клиенты берут в долг?",
    ko: "손님이 외상으로 가져가나요?",
    tr: "Müşteriler veresiye mi alıyor?",
  },
  "prob.x3d": {
    en: "Every customer's debt and payments are on record. One report shows who owes how much and for how long.",
    ru: "Долги и оплаты каждого клиента на учёте. Один отчёт показывает, кто сколько должен и с какого времени.",
    ko: "고객별 외상과 결제 내역이 모두 기록됩니다. 누가 얼마를, 언제부터 갚지 않았는지 한 리포트에서 확인하세요.",
    tr: "Her müşterinin borcu ve ödemeleri kayıt altında. Kimin ne kadar ve ne zamandan beri borçlu olduğunu tek raporda görürsünüz.",
  },
  "prob.x4t": {
    en: "Rewriting prices every time the dollar moves?",
    ru: "Переписываете цены при каждом скачке доллара?",
    ko: "달러 환율이 바뀔 때마다 가격을 고치시나요?",
    tr: "Dolar her oynadığında fiyatları yeniden mi yazıyorsunuz?",
  },
  "prob.x4d": {
    en: "Price items in dollars and the till sells them in so'm at the day's rate. Enter the rate; no need to change prices by hand.",
    ru: "Укажите цену в долларах, и касса продаст товар в сумах по курсу дня. Вводите курс, а цены вручную менять не нужно.",
    ko: "상품 가격을 달러로 설정하면 POS에서 당일 환율로 숨 단위로 판매됩니다. 환율만 입력하면 가격을 직접 바꿀 필요가 없습니다.",
    tr: "Ürünü dolarla fiyatlandırın, kasa günün kuruyla sum olarak satsın. Kuru girersiniz, fiyatları elle değiştirmenize gerek kalmaz.",
  },
  "prob.x5t": {
    en: "Entering the menu takes days?",
    ru: "Ввод меню занимает дни?",
    ko: "메뉴 입력에 며칠씩 걸리나요?",
    tr: "Menüyü girmek günler mi alıyor?",
  },
  "prob.x5d": {
    en: "Upload a photo of your menu or a plain list (Excel works too). AI adds the dishes, categories and prices to your item library and even creates photos of your dishes: the first 20 images are free.",
    ru: "Загрузите фото меню или простой список (можно Excel). ИИ добавит блюда, категории и цены в каталог и даже создаст фотографии блюд: первые 20 изображений бесплатно.",
    ko: "메뉴 사진이나 간단한 목록(엑셀도 가능)을 올리세요. AI가 메뉴, 카테고리, 가격을 상품 목록에 추가하고 음식 사진까지 만들어 드립니다. 처음 20장은 무료입니다.",
    tr: "Menünüzün fotoğrafını veya düz bir listeyi yükleyin (Excel de olur). Yapay zekâ yemekleri, kategorileri ve fiyatları ürün listenize ekler, hatta yemeklerinizin fotoğraflarını oluşturur: ilk 20 görsel ücretsiz.",
  },
  "prob.x6t": {
    en: "Need different prices on Yandex and Uzum?",
    ru: "Нужны другие цены в Yandex и Uzum?",
    ko: "Yandex와 Uzum에서 가격을 다르게 하고 싶으신가요?",
    tr: "Yandex ve Uzum'da farklı fiyat mı gerekiyor?",
  },
  "prob.x6d": {
    en: "Each sales channel gets its own prices: dine-in, QR menu, website, Telegram, Yandex Eats and Uzum Tezkor. Wholesale customers can have their own price list too.",
    ru: "У каждого канала продаж свои цены: зал, QR-меню, сайт, Telegram, Yandex Eats и Uzum Tezkor. Для оптовых клиентов тоже можно сделать свой прайс-лист.",
    ko: "판매 채널마다 가격을 따로 설정하세요: 매장, QR 메뉴, 웹사이트, 텔레그램, Yandex Eats, Uzum Tezkor. 도매 고객용 가격표도 만들 수 있습니다.",
    tr: "Her satış kanalının kendi fiyatı olur: salon, QR menü, web sitesi, Telegram, Yandex Eats ve Uzum Tezkor. Toptan müşteriler için de ayrı fiyat listesi yapılabilir.",
  },
  "prob.x7t": {
    en: "Guests left waiting for a waiter?",
    ru: "Гости долго ждут официанта?",
    ko: "손님이 직원을 기다리고 있나요?",
    tr: "Misafirler garson mu bekliyor?",
  },
  "prob.x7d": {
    en: "With the QR code on the table, guests call the waiter or ask for the bill from their phone. On the POS floor plan, that table is marked with a red bell.",
    ru: "По QR-коду на столе гость со своего телефона зовёт официанта или просит счёт. На плане зала в кассе этот стол отмечается красным колокольчиком.",
    ko: "테이블의 QR 코드로 손님이 휴대폰에서 직원을 호출하거나 계산서를 요청합니다. POS 플로어 플랜에서 해당 테이블에 빨간 벨이 표시됩니다.",
    tr: "Masadaki QR kod ile misafir telefonundan garson çağırır veya hesap ister. Kasadaki salon planında o masa kırmızı zille işaretlenir.",
  },
  "proof.1l": {
    en: "Restaurants and shops run on Octopos",
    ru: "ресторанов и магазинов работают на Octopos",
    ko: "레스토랑과 매장이 Octopos를 사용합니다",
    tr: "Restoran ve market Octopos kullanıyor",
  },
  "proof.2v": {
    en: "1–3 days",
    ru: "1–3 дня",
    ko: "1–3일",
    tr: "1–3 gün",
  },
  "proof.2l": {
    en: "To go live, including menu setup, hardware and training",
    ru: "На запуск, включая меню, оборудование и обучение",
    ko: "메뉴 등록, 장비 연결, 교육까지 포함한 도입 기간",
    tr: "Menü, donanım ve eğitim dahil kurulum süresi",
  },
  "proof.3v": {
    en: "Offline",
    ru: "Офлайн",
    ko: "오프라인",
    tr: "Çevrimdışı",
  },
  "proof.3l": {
    en: "Sales continue when the internet drops",
    ru: "Продажи продолжаются без интернета",
    ko: "인터넷이 끊겨도 판매는 계속됩니다",
    tr: "İnternet kesilse de satış sürer",
  },
  "proof.4l": {
    en: "Support in Uzbek, Russian, English and Korean",
    ru: "Поддержка на узбекском, русском, английском и корейском",
    ko: "우즈베크어, 러시아어, 영어, 한국어로 지원",
    tr: "Özbekçe, Rusça, İngilizce ve Korece destek",
  },
  "steps.heading": {
    en: "How we get you started",
    ru: "Как мы запускаемся",
    ko: "시작하는 방법",
    tr: "Nasıl başlıyoruz",
  },
  "steps.1t": {
    en: "Sign up",
    ru: "Зарегистрируйтесь",
    ko: "가입하세요",
    tr: "Kaydolun",
  },
  "steps.1d": {
    en: "Start on the free plan yourself, or message us on Telegram and we'll get in touch.",
    ru: "Начните сами на бесплатном тарифе или напишите в Telegram, и мы свяжемся с вами.",
    ko: "무료 요금제로 직접 시작하거나 텔레그램으로 연락 주시면 저희가 연락드립니다.",
    tr: "Ücretsiz planla kendiniz başlayın ya da Telegram'dan yazın, size dönelim.",
  },
  "steps.2t": {
    en: "We set it up",
    ru: "Мы всё настраиваем",
    ko: "저희가 설정합니다",
    tr: "Kurulumu biz yaparız",
  },
  "steps.2d": {
    en: "We enter your menu and prices (Excel import works too) and connect tablets, printers and the cash drawer.",
    ru: "Вносим меню и цены (можно из Excel), подключаем планшеты, принтеры и денежный ящик.",
    ko: "메뉴와 가격을 등록하고(엑셀 가져오기 가능) 태블릿, 프린터, 금고를 연결합니다.",
    tr: "Menü ve fiyatları gireriz (Excel'den de olur), tablet, yazıcı ve para çekmecesini bağlarız.",
  },
  "steps.3t": {
    en: "We train your team",
    ru: "Обучаем вашу команду",
    ko: "직원 교육을 해드립니다",
    tr: "Ekibinizi eğitiriz",
  },
  "steps.3d": {
    en: "We walk cashiers, waiters and cooks through it. Most places are fully running within 1–3 days.",
    ru: "Показываем кассирам, официантам и поварам. Обычно за 1–3 дня всё полностью работает.",
    ko: "계산원, 서빙 직원, 주방 직원에게 사용법을 알려드립니다. 보통 1–3일이면 완전히 운영됩니다.",
    tr: "Kasiyer, garson ve aşçılara gösteririz. Çoğu işletme 1–3 günde tamamen çalışır hale gelir.",
  },
  "tm.heading": {
    en: "What our clients say",
    ru: "Что говорят наши клиенты",
    ko: "고객 후기",
    tr: "Müşterilerimiz ne diyor",
  },
  "agent.help": {
    en: "Installation guide:",
    ru: "Инструкция по установке:",
    ko: "설치 가이드:",
    tr: "Kurulum kılavuzu:",
  },
  /* ---------- order journey ---------- */
  "apps.heading": {
    en: "Eight apps, one synced system.",
    ru: "Восемь приложений, одна синхронная система.",
    ko: "여덟 개의 앱, 하나의 동기화 시스템.",
    tr: "Sekiz uygulama, senkron bir sistem.",
  },
  "journey.body": {
    en: "An order moves from screen to screen on its own, and nobody types it twice.",
    ru: "Заказ сам переходит с экрана на экран, и никто не вводит его заново.",
    ko: "주문은 화면에서 화면으로 저절로 넘어가고, 아무도 다시 입력하지 않습니다.",
    tr: "Sipariş ekrandan ekrana kendiliğinden geçer, kimse onu yeniden yazmaz.",
  },
  "journey.1t": {
    en: "The guest orders via QR",
    ru: "Гость заказывает через QR",
    ko: "손님이 QR로 주문",
    tr: "Misafir QR ile sipariş verir",
  },
  "journey.1d": {
    en: "They scan the QR code on the table, browse the menu and order without installing an app.",
    ru: "Сканирует QR-код на столе, смотрит меню и заказывает без установки приложения.",
    ko: "테이블의 QR 코드를 스캔해 메뉴를 보고 앱 설치 없이 주문합니다.",
    tr: "Masadaki QR kodu okutur, menüye bakar ve uygulama kurmadan sipariş verir.",
  },
  "journey.2t": {
    en: "The waiter confirms",
    ru: "Официант подтверждает",
    ko: "직원이 확인",
    tr: "Garson onaylar",
  },
  "journey.2d": {
    en: "They confirm the QR order, or enter the order on the tablet themselves.",
    ru: "Подтверждает QR-заказ или сам вводит заказ на планшете.",
    ko: "QR 주문을 확인하거나 태블릿에 직접 주문을 입력합니다.",
    tr: "QR siparişini onaylar ya da siparişi tablete kendisi girer.",
  },
  "journey.3t": {
    en: "The kitchen cooks",
    ru: "Кухня готовит",
    ko: "주방에서 조리",
    tr: "Mutfak hazırlar",
  },
  "journey.3d": {
    en: "The order appears on the kitchen screen instantly, with its waiting time.",
    ru: "Заказ сразу появляется на кухонном экране вместе со временем ожидания.",
    ko: "주문이 대기 시간과 함께 주방 화면에 즉시 나타납니다.",
    tr: "Sipariş bekleme süresiyle birlikte anında mutfak ekranında görünür.",
  },
  "journey.4t": {
    en: "The guest is notified",
    ru: "Гость в курсе",
    ko: "손님에게 알림",
    tr: "Misafir haberdar olur",
  },
  "journey.4d": {
    en: "When the dish is ready, the guest sees their number on the screen in the hall.",
    ru: "Когда блюдо готово, гость видит свой номер на экране в зале.",
    ko: "음식이 준비되면 손님은 홀 화면에서 자신의 번호를 확인합니다.",
    tr: "Yemek hazır olunca misafir numarasını salondaki ekranda görür.",
  },
  "journey.5t": {
    en: "Payment taken",
    ru: "Оплата принята",
    ko: "결제 완료",
    tr: "Ödeme alınır",
  },
  "journey.5d": {
    en: "Cash, card, Payme or Click. The bill can also be split between several people.",
    ru: "Наличные, карта, Payme или Click. Счёт можно разделить на несколько человек.",
    ko: "현금, 카드, Payme, Click. 여러 명이 나눠서 결제할 수도 있습니다.",
    tr: "Nakit, kart, Payme veya Click. Hesap birkaç kişiye bölünebilir.",
  },
  "journey.6t": {
    en: "You see the result",
    ru: "Вы видите результат",
    ko: "결과를 바로 확인",
    tr: "Sonucu siz görürsünüz",
  },
  "journey.6d": {
    en: "Sales, stock levels and profit update on your phone right away.",
    ru: "Продажи, остатки на складе и прибыль сразу обновляются в вашем телефоне.",
    ko: "매출, 재고, 이익이 휴대폰에서 즉시 업데이트됩니다.",
    tr: "Satışlar, stok ve kâr telefonunuzda anında güncellenir.",
  },
  "journey.dt": {
    en: "With delivery",
    ru: "Если есть доставка",
    ko: "배달이 있다면",
    tr: "Teslimat varsa",
  },
  "journey.dd": {
    en: "Orders from your website or Telegram take the same path; then Dispatch hands them to a courier via Telegram and you follow the courier on the map.",
    ru: "Заказы с сайта или из Telegram проходят тот же путь, затем Dispatch передаёт их курьеру через Telegram, а вы следите за курьером на карте.",
    ko: "웹사이트나 텔레그램 주문도 같은 경로를 거치고, Dispatch가 텔레그램으로 배달원에게 전달하며, 사장님은 지도에서 배달원을 확인합니다.",
    tr: "Web sitenizden veya Telegram'dan gelen siparişler de aynı yoldan geçer; ardından Dispatch onu Telegram üzerinden kuryeye verir, siz de kuryeyi haritada izlersiniz.",
  },
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
    en: "Start on the free plan and move up as the business grows. Add-on prices are listed below.",
    ru: "Начните с бесплатного тарифа и переходите на следующий по мере роста. Цены на дополнительные услуги ниже.",
    ko: "무료 요금제로 시작하고 사업이 커지면 상위 요금제로 옮기세요. 부가 서비스 요금은 아래에 있습니다.",
    tr: "Ücretsiz planla başlayın, işletme büyüdükçe bir üst plana geçin. Ek hizmet fiyatları aşağıda.",
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
    en: "Choose plan",
    ru: "Выбрать тариф",
    ko: "요금제 선택",
    tr: "Planı seç",
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
  "plans.perMonthUzs": {
    en: "UZS/mo",
    ru: "сум/мес",
    ko: "so'm/월",
    tr: "so'm/ay",
  },
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
  "plans.orders": {
    en: "{n} orders/mo",
    ru: "{n} заказов/мес",
    ko: "주문 {n}건/월",
    tr: "{n} sipariş/ay",
  },
  "plans.items": {
    en: "{n} menu items",
    ru: "{n} товаров",
    ko: "상품 {n}개",
    tr: "{n} ürün",
  },
  "plans.fiscalFrom": {
    en: "Fiscal receipts — from Starter",
    ru: "Фискальные чеки — с тарифа Starter",
    ko: "전자 영수증(재정) — Starter부터",
    tr: "Mali fiş — Starter'dan itibaren",
  },
  "plans.ordersNote": {
    en: "Every plan includes 50 online orders a month (website and Telegram). Need more? See the",
    ru: "В каждом тарифе 50 онлайн-заказов в месяц (сайт и Telegram). Нужно больше —",
    ko: "모든 요금제에 월 50건의 온라인 주문(웹사이트·텔레그램)이 포함됩니다. 더 필요하면",
    tr: "Her plan ayda 50 online sipariş içerir (web sitesi ve Telegram). Daha fazlası için:",
  },
  "plans.ordersLink": {
    en: "Online Store add-on",
    ru: "дополнение «Онлайн-магазин»",
    ko: "온라인 스토어 부가 서비스",
    tr: "Çevrimiçi Mağaza eklentisi",
  },
  "prob.planFrom": {
    en: "From {name} plan",
    ru: "С тарифа {name}",
    ko: "{name} 요금제부터",
    tr: "{name} planından itibaren",
  },
  "calc.heading": {
    en: "How much commission do you pay aggregators each month?",
    ru: "Сколько комиссии вы платите агрегаторам в месяц?",
    ko: "배달 플랫폼에 매달 수수료를 얼마나 내고 있나요?",
    tr: "Aracı platformlara ayda ne kadar komisyon ödüyorsunuz?",
  },
  "calc.body": {
    en: "Enter your own numbers and compare with the price of your own online store.",
    ru: "Введите свои цифры и сравните с ценой собственного онлайн-магазина.",
    ko: "직접 수치를 입력하고 자체 온라인 스토어 가격과 비교해 보세요.",
    tr: "Kendi rakamlarınızı girin ve kendi çevrimiçi mağazanızın fiyatıyla karşılaştırın.",
  },
  "calc.orders": {
    en: "Online orders per month",
    ru: "Онлайн-заказов в месяц",
    ko: "월 온라인 주문 수",
    tr: "Aylık online sipariş",
  },
  "calc.check": { en: "Average order", ru: "Средний чек", ko: "평균 주문 금액", tr: "Ortalama sipariş" },
  "calc.commission": {
    en: "Aggregator commission",
    ru: "Комиссия агрегатора",
    ko: "플랫폼 수수료",
    tr: "Platform komisyonu",
  },
  "calc.som": { en: "UZS", ru: "сум", ko: "숨", tr: "UZS" },
  "calc.somMo": { en: "UZS/mo", ru: "сум/мес", ko: "숨/월", tr: "UZS/ay" },
  "calc.empty": {
    en: "Fill in all three fields and the result appears here.",
    ru: "Заполните все три поля — результат появится здесь.",
    ko: "세 칸을 모두 입력하면 여기에 결과가 표시됩니다.",
    tr: "Üç alanı da doldurun, sonuç burada görünür.",
  },
  "calc.youPay": {
    en: "Commission to aggregators",
    ru: "Комиссия агрегатору",
    ko: "플랫폼 수수료",
    tr: "Platforma komisyon",
  },
  "calc.store": { en: "Online Store", ru: "Онлайн-магазин", ko: "온라인 스토어", tr: "Çevrimiçi Mağaza" },
  "calc.save": {
    en: "You save every month",
    ru: "Экономия каждый месяц",
    ko: "매달 절약 금액",
    tr: "Her ay tasarrufunuz",
  },
  "calc.noSave": {
    en: "At this volume the aggregator is still cheaper. Recalculate as orders grow.",
    ru: "При таком объёме агрегатор пока дешевле. Пересчитайте, когда заказов станет больше.",
    ko: "이 주문량에서는 아직 플랫폼이 더 저렴합니다. 주문이 늘면 다시 계산해 보세요.",
    tr: "Bu hacimde platform şimdilik daha ucuz. Siparişler arttıkça yeniden hesaplayın.",
  },
  "calc.big": {
    en: "Over 10,000 orders we agree the price individually — message us on Telegram.",
    ru: "Для более 10 000 заказов цену обсуждаем отдельно — напишите в Telegram.",
    ko: "10,000건 이상은 가격을 별도로 협의합니다. 텔레그램으로 문의하세요.",
    tr: "10.000'den fazla sipariş için fiyatı ayrıca belirleriz — Telegram'dan yazın.",
  },
  "calc.note": {
    en: "Courier and payment provider costs are not included.",
    ru: "Расходы на курьеров и платёжные системы не учтены.",
    ko: "배달원 및 결제 수수료는 포함되지 않았습니다.",
    tr: "Kurye ve ödeme sağlayıcı maliyetleri dahil değildir.",
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
  "ct.self": {
    en: "Or start free on your own",
    ru: "Или начните бесплатно сами",
    ko: "또는 직접 무료로 시작하기",
    tr: "Ya da kendiniz ücretsiz başlayın",
  },
  "ct.callMe": {
    en: "Request a call",
    ru: "Заказать звонок",
    ko: "전화 요청",
    tr: "Arama talep et",
  },
  /* ---------- callback form ---------- */
  "lead.name": {
    en: "Your name",
    ru: "Ваше имя",
    ko: "이름",
    tr: "Adınız",
  },
  "lead.namePh": {
    en: "Aziz",
    ru: "Азиз",
    ko: "Aziz",
    tr: "Aziz",
  },
  "lead.phone": {
    en: "Phone number",
    ru: "Номер телефона",
    ko: "전화번호",
    tr: "Telefon numarası",
  },
  "lead.type": {
    en: "Your business",
    ru: "Ваш бизнес",
    ko: "업종",
    tr: "İşletmeniz",
  },
  "lead.optional": {
    en: "(optional)",
    ru: "(необязательно)",
    ko: "(선택)",
    tr: "(isteğe bağlı)",
  },
  "lead.typeRestaurant": {
    en: "Restaurant",
    ru: "Ресторан",
    ko: "레스토랑",
    tr: "Restoran",
  },
  "lead.typeCafe": {
    en: "Café",
    ru: "Кафе",
    ko: "카페",
    tr: "Kafe",
  },
  "lead.typeMarket": {
    en: "Shop / market",
    ru: "Магазин / маркет",
    ko: "마트 / 상점",
    tr: "Market / mağaza",
  },
  "lead.typeOther": {
    en: "Other",
    ru: "Другое",
    ko: "기타",
    tr: "Diğer",
  },
  "lead.city": {
    en: "City",
    ru: "Город",
    ko: "도시",
    tr: "Şehir",
  },
  "lead.cityPh": {
    en: "Tashkent",
    ru: "Ташкент",
    ko: "타슈켄트",
    tr: "Taşkent",
  },
  "lead.invalid": {
    en: "Enter your name and a full phone number.",
    ru: "Введите имя и полный номер телефона.",
    ko: "이름과 전체 전화번호를 입력하세요.",
    tr: "Adınızı ve tam telefon numaranızı girin.",
  },
  "lead.submit": {
    en: "Call me back",
    ru: "Перезвоните мне",
    ko: "전화해 주세요",
    tr: "Beni arayın",
  },
  "lead.sending": {
    en: "Sending…",
    ru: "Отправляем…",
    ko: "보내는 중…",
    tr: "Gönderiliyor…",
  },
  "lead.privacy": {
    en: "We only use your number to get in touch with you.",
    ru: "Номер используется только для связи с вами.",
    ko: "전화번호는 연락 목적으로만 사용됩니다.",
    tr: "Numaranız yalnızca sizinle iletişim için kullanılır.",
  },
  "lead.okTitle": {
    en: "Thank you! We've got your request",
    ru: "Спасибо! Заявка принята",
    ko: "감사합니다! 요청이 접수되었습니다",
    tr: "Teşekkürler! Talebiniz alındı",
  },
  "lead.okBody": {
    en: "We'll be in touch shortly.",
    ru: "Мы скоро свяжемся с вами.",
    ko: "곧 연락드리겠습니다.",
    tr: "En kısa sürede size ulaşacağız.",
  },
  "lead.errTitle": {
    en: "We couldn't send your request",
    ru: "Не удалось отправить заявку",
    ko: "요청을 보내지 못했습니다",
    tr: "Talebinizi gönderemedik",
  },
  "lead.errBody": {
    en: "Please call us or message us on Telegram, and we'll answer right away.",
    ru: "Пожалуйста, позвоните нам или напишите в Telegram, ответим сразу.",
    ko: "전화 또는 텔레그램으로 연락 주시면 바로 답해 드리겠습니다.",
    tr: "Lütfen bizi arayın ya da Telegram'dan yazın, hemen yanıt verelim.",
  },
  "ct.heading": {
    en: "Shall we start today?",
    ru: "Начнём сегодня?",
    ko: "오늘 시작할까요?",
    tr: "Bugün başlayalım mı?",
  },
  "ct.body": {
    en: "Leave your name and number. We'll call, walk you through everything and answer your questions.",
    ru: "Оставьте имя и номер. Мы позвоним, всё покажем и ответим на ваши вопросы.",
    ko: "이름과 연락처를 남겨 주세요. 전화로 모든 것을 보여 드리고 질문에 답해 드립니다.",
    tr: "Adınızı ve numaranızı bırakın. Arayıp her şeyi gösterelim ve sorularınızı yanıtlayalım.",
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
    en: "Point of sale for restaurants, cafés and shops.",
    ru: "Кассовая система для ресторанов, кафе и магазинов.",
    ko: "레스토랑, 카페, 매장을 위한 POS 시스템.",
    tr: "Restoran, kafe ve mağazalar için kasa sistemi.",
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
  "v.RestaurantPOS · Order": { en: "RestaurantPOS · Order", ru: "RestaurantPOS · Order", ko: "RestaurantPOS · Order", tr: "RestaurantPOS · Order" },
  "v.RestaurantPOS · Payme": { en: "RestaurantPOS · Payme", ru: "RestaurantPOS · Payme", ko: "RestaurantPOS · Payme", tr: "RestaurantPOS · Payme" },
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
    en: "Start trial",
    ru: "Начать пробный период",
    ko: "무료 체험 시작",
    tr: "Denemeyi başlat",
  },
  "wizard.proceed": {
    en: "Continue →",
    ru: "Продолжить →",
    ko: "계속하기 →",
    tr: "Devam et →",
  },
  "wizard.creatingKitchen": {
    en: "Creating your kitchen...",
    ru: "Создание вашей кухни...",
    ko: "계정을 설정 중입니다...",
    tr: "Projeniz hazırlanıyor...",
  },
  "wizard.submit": {
    en: "Start trial",
    ru: "Начать пробный период",
    ko: "무료 체험 시작",
    tr: "Denemeyi başlat",
  },
  "wizard.submitting": {
    en: "Sending…",
    ru: "Отправка…",
    ko: "전송 중…",
    tr: "Gönderiliyor…",
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
    en: "Octopos — POS software for restaurants, cafés and shops",
    ru: "Octopos — кассовая программа для ресторанов, кафе и магазинов",
    ko: "Octopos — 레스토랑, 카페, 매장을 위한 POS",
    tr: "Octopos — restoran, kafe ve mağazalar için kasa yazılımı",
  },
  "meta.home.desc": {
    en: "POS, kitchen display, QR menu, online store, inventory and fiscal receipts in one system for restaurants, cafés and shops in Uzbekistan. Free plan available.",
    ru: "Касса, кухонный экран, QR-меню, онлайн-магазин, склад и фискальные чеки в одной системе для ресторанов, кафе и магазинов Узбекистана. Есть бесплатный тариф.",
    ko: "POS, 주방 디스플레이, QR 메뉴, 온라인 스토어, 재고, 회계 영수증을 하나로. 우즈베키스탄의 레스토랑, 카페, 매장을 위한 시스템. 무료 요금제 제공.",
    tr: "Kasa, mutfak ekranı, QR menü, online mağaza, stok ve mali fişler tek sistemde. Özbekistan'daki restoran, kafe ve mağazalar için. Ücretsiz plan var.",
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
