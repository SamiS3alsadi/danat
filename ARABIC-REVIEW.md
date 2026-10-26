# Arabic translation review — Danat Aldonia

Every Arabic string shipped in Phases 3 and 4, next to its English source.
Generated from `src/i18n/translations.ts`, `src/i18n/meta.ts` and
`src/data/fleet.json`, so this file reflects exactly what is in the build.

**Brand name used throughout:** دانة الدنيا

`AR_INDEXABLE` is still `false`, so none of this is indexable yet. Lift that
flag in `src/i18n/routes.ts` once this review is signed off.

**Review notes are collected at the end — four items need a decision.**

---

## 1. Page metadata (titles and descriptions)

Titles stay under 60 characters, descriptions under 155.

| # | English | Arabic |
|---|---|---|
| 1 | **Home — title:** Premium Car Rental Dubai \| Danat Aldonia Rent a Car | تأجير سيارات في دبي \| دانة الدنيا لتأجير السيارات |
| 2 | **Home — description:** (from siteConfig.description) Every car, every budget, one standard of service. Rent economy to supercars in Dubai with 60-minute delivery, insurance included and no hidden fees. | كل سيارة، كل ميزانية، مستوى خدمة واحد. استأجر من الاقتصادية إلى الخارقة في دبي مع توصيل خلال 60 دقيقة وتأمين شامل وبدون رسوم خفية. |
| 3 | **Fleet — title:** Car Rental Fleet Dubai \| Danat Aldonia | أسطول السيارات في دبي \| دانة الدنيا |
| 4 | **Fleet — description:** Browse every category from economy to supercars. Filter by category, body type and seats. Delivery across Dubai, insurance included. | تصفّح كل الفئات من الاقتصادية إلى السيارات الخارقة. فلتر حسب الفئة ونوع الهيكل وعدد المقاعد. توصيل في دبي وتأمين شامل. |
| 5 | **Pricing — title:** Car Rental Prices in Dubai \| Danat Aldonia | أسعار تأجير السيارات في دبي \| دانة الدنيا |
| 6 | **Pricing — description:** Daily, weekly and monthly plans for every category we rent. No hidden fees, insurance included, one standard of service at every budget. | خطط يومية وأسبوعية وشهرية لكل فئة نوفّرها. بدون رسوم خفية، تأمين شامل، ومستوى خدمة واحد لكل ميزانية. |
| 7 | **About — title:** About Us \| Danat Aldonia Car Rental Dubai | من نحن \| دانة الدنيا لتأجير السيارات في دبي |
| 8 | **About — description:** Every car, every budget, one standard of service. How Danat Aldonia rents across every category in Dubai, with delivery and transparent pricing. | كل سيارة، كل ميزانية، مستوى خدمة واحد. كيف تعمل دانة الدنيا في تأجير جميع الفئات في دبي مع التوصيل وأسعار شفافة. |
| 9 | **FAQ — title:** Car Rental FAQ \| Danat Aldonia Dubai | الأسئلة الشائعة \| دانة الدنيا لتأجير السيارات |
| 10 | **FAQ — description:** Documents, minimum age, insurance, deposits, delivery and payment — what to know before renting a car in Dubai, in any category. | المستندات المطلوبة والحد الأدنى للعمر والتأمين ومبلغ التأمين والتوصيل والدفع — ما تحتاج معرفته قبل استئجار سيارة في دبي. |
| 11 | **Contact — title:** Contact Us \| Danat Aldonia Car Rental Dubai | اتصل بنا \| دانة الدنيا لتأجير السيارات في دبي |
| 12 | **Contact — description:** Call, WhatsApp or email Danat Aldonia to book a car in Dubai. 24/7 support, 60-minute delivery, and the same service standard for every category. | اتصل بنا أو راسلنا على واتساب أو البريد لحجز سيارة في دبي. دعم على مدار الساعة، توصيل خلال 60 دقيقة، ونفس الخدمة لكل فئة. |
| 13 | **Delivery areas — title:** Car Delivery Across Dubai \| Danat Aldonia | مناطق توصيل السيارات في دبي \| دانة الدنيا |
| 14 | **Delivery areas — description:** We deliver to Dubai Marina, Downtown, Business Bay, JBR, Palm Jumeirah, DIFC and beyond within 60 minutes, whichever category you rent. | نوصّل إلى مرسى دبي ووسط مدينة دبي وخليج الأعمال وجميرا بيتش ريزيدنس ونخلة جميرا ومركز دبي المالي وغيرها خلال 60 دقيقة. |
| 15 | **Terms — title:** Terms & Conditions \| Danat Aldonia Rent a Car | الشروط والأحكام \| دانة الدنيا لتأجير السيارات |
| 16 | **Terms — description:** Rental requirements, booking and cancellation, insurance excess, security deposits and traffic fines for car rentals with Danat Aldonia in Dubai. | شروط الاستئجار والحجز والإلغاء ومبلغ التحمل في التأمين والتأمين المالي والمخالفات المرورية لدى دانة الدنيا في دبي. |
| 17 | **Privacy — title:** Privacy Policy \| Danat Aldonia Rent a Car | سياسة الخصوصية \| دانة الدنيا لتأجير السيارات |
| 18 | **Privacy — description:** How Danat Aldonia collects, uses and safeguards your personal information when you book a car rental in Dubai. | كيف تجمع دانة الدنيا معلوماتك الشخصية وتستخدمها وتحميها عند حجز سيارة في دبي. |

### Car page title template

| # | English | Arabic |
|---|---|---|
| 19 | Rent {brand} {name} in Dubai \| AED {price}/day | استأجر {brand} {name} في دبي \| {price} درهم/يوم |
| 20 | Car Not Found \| Danat Aldonia | السيارة غير موجودة \| دانة الدنيا |

---

## 2. FAQ page call-to-action

| # | English | Arabic |
|---|---|---|
| 21 | Still have questions? | لا تزال لديك أسئلة؟ |
| 22 | Our team is available 24/7 to assist you with any inquiries regarding our fleet, pricing, or rental policies. | فريقنا متاح على مدار الساعة طوال أيام الأسبوع للإجابة عن أي استفسار بخصوص أسطولنا أو الأسعار أو سياسات الاستئجار. |
| 23 | Message Us on WhatsApp | راسلنا على واتساب |

---

## 3. Trust badges (home page)

| # | English | Arabic |
|---|---|---|
| 24 | **Fully Insured** — Comprehensive coverage | **تأمين شامل** — تغطية تأمينية كاملة |
| 25 | **Free Delivery** — Anywhere in Dubai | **توصيل مجاني** — إلى أي مكان في دبي |
| 26 | **60-min Delivery** — Fast doorstep service | **توصيل في 60 دقيقة** — خدمة سريعة إلى بابك |
| 27 | **No Hidden Fees** — Transparent pricing | **بدون رسوم خفية** — أسعار شفافة |
| 28 | **Secure Booking** — Verified by SSL | **حجز آمن** — موثّق بشهادة SSL |
| 29 | **4.9 / 5 Rating** — Trusted by 500+ clients | **تقييم 4.9 من 5** — ثقة أكثر من 500 عميل |

---

## 4. 404 page (in-tree)

| # | English | Arabic |
|---|---|---|
| 30 | Error 404 | خطأ 404 |
| 31 | Page Not | الصفحة غير |
| 32 | Found | موجودة |
| 33 | The car or page you're looking for has left the garage. Let's get you back on the road. | السيارة أو الصفحة التي تبحث عنها غادرت المرآب. دعنا نعيدك إلى الطريق. |
| 34 | Back to Home | العودة إلى الرئيسية |
| 35 | Browse Fleet | تصفّح الأسطول |
| 36 | Chat on WhatsApp | تحدّث معنا على واتساب |

---

## 5. Error page

| # | English | Arabic |
|---|---|---|
| 37 | Something Went Wrong | حدث خطأ ما |
| 38 | We hit a | واجهنا |
| 39 | roadblock | عقبة |
| 40 | An unexpected error occurred. Our team has been notified. You can try again, or contact us directly. | حدث خطأ غير متوقع وقد تم إبلاغ فريقنا. يمكنك المحاولة مرة أخرى أو التواصل معنا مباشرة. |
| 41 | Try Again | حاول مرة أخرى |
| 42 | Back to Home | العودة إلى الرئيسية |
| 43 | Chat on WhatsApp | تحدّث معنا على واتساب |

---

## 6. Cookie consent

| # | English | Arabic |
|---|---|---|
| 44 | Cookie consent | الموافقة على ملفات تعريف الارتباط |
| 45 | We use cookies to improve your experience and understand how our site is used. | نستخدم ملفات تعريف الارتباط لتحسين تجربتك وفهم كيفية استخدام موقعنا. |
| 46 | See our | راجع |
| 47 | Privacy Policy | سياسة الخصوصية |
| 48 | Accept | موافق |
| 49 | Decline | رفض |

---

## 7. Spec values

| # | English | Arabic |
|---|---|---|
| 50 | transmission: Automatic | أوتوماتيك |
| 51 | transmission: Manual | يدوي |
| 52 | fuel: Petrol | بنزين |
| 53 | fuel: Diesel | ديزل |
| 54 | fuel: Electric | كهربائي |
| 55 | fuel: Hybrid | هجين |

---

## 8. Accessibility labels and image alt text

| # | English | Arabic |
|---|---|---|
| 56 | Skip to main content | تخطَّ إلى المحتوى الرئيسي |
| 57 | Loading | جارٍ التحميل |
| 58 | Toggle Menu | إظهار القائمة |
| 59 | Scroll previous | التمرير إلى السابق |
| 60 | Scroll next | التمرير إلى التالي |
| 61 | Why choose Danat Aldonia | لماذا تختار دانة الدنيا |
| 62 | Pickup date | تاريخ الاستلام |
| 63 | Return date | تاريخ الإرجاع |
| 64 | Danat Aldonia | دانة الدنيا |
| 65 | Danat Aldonia Car Rental | دانة الدنيا لتأجير السيارات |
| 66 | Luxury Car Dubai | سيارة فاخرة في دبي |
| 67 | Danat Aldonia luxury car | سيارة فاخرة من دانة الدنيا |

---

## 9. Other UI strings

| # | English | Arabic |
|---|---|---|
| 68 | Est. Dubai · Luxury Mobility | تأسست في دبي · تنقّل فاخر |
| 69 | Estimated total | الإجمالي التقديري |
| 70 | day | يوم |
| 71 | days | أيام |
| 72 |  (monthly rate) |  (سعر شهري) |
| 73 |  (weekly rate) |  (سعر أسبوعي) |

---

## 10. Car descriptions and luggage (fleet.json)


### Lamborghini Huracan EVO Spyder

| # | English | Arabic |
|---|---|---|
| 74 | **Description:** The Lamborghini Huracan EVO Spyder is the pinnacle of open-top performance. With its roaring V10 engine and cutting-edge aerodynamics, it offers an adrenaline-fueled driving experience like no other in Dubai. | لامبورغيني هوراكان إيفو سبايدر هي قمة الأداء المكشوف. بمحرك V10 الهادر وديناميكية هوائية متقدمة، تقدّم تجربة قيادة مليئة بالإثارة لا تشبه غيرها في دبي. |
| 75 | **Meta description:** Rent the Lamborghini Huracan EVO Spyder in Dubai with insurance included in the price and delivery anywhere in the city. | استأجر لامبورغيني هوراكان إيفو سبايدر في دبي مع تأمين شامل في السعر وتوصيل إلى أي مكان في المدينة. |
| 76 | **Luggage:** 1 Small | حقيبة صغيرة |

### Rolls Royce Cullinan

| # | English | Arabic |
|---|---|---|
| 77 | **Description:** Experience the ultimate in luxury and presence with the Rolls Royce Cullinan. The first SUV from the legendary marque, it offers unparalleled comfort and status for your Dubai journey. | اختبر قمة الفخامة والحضور مع رولز رويس كولينان. أول سيارة دفع رباعي من العلامة الأسطورية، تمنحك راحة ومكانة لا تُضاهى في رحلتك بدبي. |
| 78 | **Meta description:** Rent the Rolls-Royce Cullinan in Dubai and have it delivered to your hotel, office or home within 60 minutes. | استأجر رولز رويس كولينان في دبي مع توصيل إلى فندقك أو مكتبك أو منزلك خلال 60 دقيقة. |
| 79 | **Luggage:** 3 Large | 3 حقائب كبيرة |

### Land Rover Range Rover Sport

| # | English | Arabic |
|---|---|---|
| 80 | **Description:** The Range Rover Sport blends commanding off-road capability with refined luxury. Its striking silhouette, sumptuous interior, and dynamic performance make it the ultimate choice for Dubai's roads and beyond. | تجمع رينج روفر سبورت بين قدرات الطرق الوعرة والفخامة الراقية. تصميمها اللافت ومقصورتها الفارهة وأدائها الديناميكي يجعلها الخيار الأمثل لطرق دبي وما بعدها. |
| 81 | **Meta description:** Rent the Range Rover Sport in Dubai with comprehensive insurance included at no extra cost. | استأجر رينج روفر سبورت في دبي مع تأمين شامل مضمَّن دون تكلفة إضافية. |
| 82 | **Luggage:** 3 Large | 3 حقائب كبيرة |

### Mercedes-Benz S500

| # | English | Arabic |
|---|---|---|
| 83 | **Description:** The Mercedes-Benz S500 defines the pinnacle of automotive luxury. With its executive cabin, cutting-edge technology, and silky-smooth performance, it is the benchmark for prestige motoring in Dubai. | تُجسّد مرسيدس-بنز S500 قمة الفخامة في عالم السيارات. بمقصورتها التنفيذية وتقنياتها المتقدمة وأدائها السلس، هي المعيار الذهبي للقيادة الراقية في دبي. |
| 84 | **Meta description:** Rent the Mercedes-Benz S500 in Dubai with delivery to your hotel, office or home across the city within 60 minutes. | استأجر مرسيدس-بنز S500 في دبي مع توصيل إلى فندقك أو مكتبك أو منزلك في أنحاء المدينة خلال 60 دقيقة. |
| 85 | **Luggage:** 3 Large | 3 حقائب كبيرة |

### Porsche 911 GT3

| # | English | Arabic |
|---|---|---|
| 86 | **Description:** The Porsche 911 GT3 is a track-bred legend tamed for the streets of Dubai. Its naturally aspirated flat-six screams to 9,000 rpm, delivering a raw, visceral driving experience matched by razor-sharp aerodynamics and precision handling. | بورشه 911 GT3 أسطورة وُلدت على الحلبة ورُوّضت لشوارع دبي. محركها سداسي الأسطوانات المسطح يصل إلى 9,000 دورة في الدقيقة، ليمنح تجربة قيادة نقية وحيوية تدعمها ديناميكية هوائية فائقة الدقة وتحكّم استثنائي. |
| 87 | **Meta description:** Rent the Porsche 911 GT3 in Dubai with no hidden fees — the price you see is the price you pay. | استأجر بورشه 911 GT3 في دبي بدون رسوم خفية — السعر الذي تراه هو السعر الذي تدفعه. |
| 88 | **Luggage:** 1 Small | حقيبة صغيرة |

---

# 11. Legal text (own section, as requested)

This is the text most worth a careful read — it carries legal meaning.


## Privacy Policy

| # | English | Arabic |
|---|---|---|
| 89 | **Heading:** Privacy Policy | سياسة الخصوصية |
| 90 | **Intro:** At Danat Aldonia Rent a Car, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services. | في دانة الدنيا لتأجير السيارات، نلتزم بحماية خصوصيتك. توضّح هذه السياسة كيف نجمع معلوماتك الشخصية ونستخدمها ونحميها عند استخدامك موقعنا أو خدماتنا. |
| 91 | **1. Information Collection** | **1. جمع المعلومات** |
| 92 | We collect personal information such as your name, contact details, driving license information, and payment details necessary for the car rental process. | نجمع معلومات شخصية مثل الاسم وبيانات التواصل ومعلومات رخصة القيادة وتفاصيل الدفع اللازمة لإتمام عملية تأجير السيارة. |
| 93 | **2. Use of Information** | **2. استخدام المعلومات** |
| 94 | Your information is used to process bookings, manage rentals, provide 24/7 support, and comply with UAE legal requirements for car rental operations. | نستخدم معلوماتك لمعالجة الحجوزات وإدارة عمليات الاستئجار وتقديم الدعم على مدار الساعة والالتزام بالمتطلبات القانونية في الإمارات لتشغيل خدمات تأجير السيارات. |
| 95 | **3. Data Sharing** | **3. مشاركة البيانات** |
| 96 | We do not sell your data. Information may be shared with government authorities (RTA/Police) as required by law or with insurance providers during claims processing. | لا نبيع بياناتك. قد تُشارَك المعلومات مع الجهات الحكومية (هيئة الطرق والمواصلات أو الشرطة) وفقاً لما يقتضيه القانون، أو مع شركات التأمين أثناء معالجة المطالبات. |

## Terms & Conditions

| # | English | Arabic |
|---|---|---|
| 97 | **Heading:** Terms & Conditions | الشروط والأحكام |
| 98 | **1. Rental Requirements** | **1. شروط الاستئجار** |
| 99 | All drivers must be at least 21 years of age (25 for supercars). A valid UAE driving license or an international driving permit along with a home-country license is required. | يجب أن يكون عمر جميع السائقين 21 عاماً على الأقل (25 عاماً للسيارات الخارقة). يُطلب وجود رخصة قيادة إماراتية سارية أو رخصة قيادة دولية مع رخصة بلد الإقامة. |
| 100 | **2. Booking & Cancellation** | **2. الحجز والإلغاء** |
| 101 | Bookings are confirmed upon receipt of a partial or full payment. Cancellations made within 48 hours of the pickup time may be subject to a cancellation fee. | تُعتمد الحجوزات عند استلام دفعة جزئية أو كاملة. وقد تخضع عمليات الإلغاء التي تُجرى خلال 48 ساعة من موعد الاستلام لرسوم إلغاء. |
| 102 | **3. Insurance & Liability** | **3. التأمين والمسؤولية** |
| 103 | Vehicle rental includes comprehensive insurance coverage. However, the hirer is responsible for the insurance excess amount in case of an accident where the hirer is at fault (Police Report is mandatory). | يشمل تأجير المركبة تغطية تأمينية شاملة. ومع ذلك، يتحمّل المستأجر مبلغ التحمّل في حال وقوع حادث يكون فيه المستأجر مخطئاً (تقرير الشرطة إلزامي). |
| 104 | **4. Security Deposit** | **4. مبلغ التأمين** |
| 105 | A refundable security deposit is required for all rentals. This deposit covers potential traffic fines, Salik charges, or minor damages not covered by insurance. The refund process takes 21-30 business days. | يُطلب مبلغ تأمين قابل للاسترداد لجميع عمليات الاستئجار. يغطي هذا المبلغ المخالفات المرورية المحتملة ورسوم سالك أو الأضرار البسيطة غير المشمولة بالتأمين. وتستغرق عملية الاسترداد من 21 إلى 30 يوم عمل. |

---

# Review notes — four decisions needed

1. **Legal text is machine-drafted.** Sections 11 (privacy and terms) carry legal
   meaning in the UAE. I am not a qualified translator and this has had no legal
   review. Treat it as a draft for a native speaker to correct before indexing.

2. **"AED" is left in Latin.** Prices render as `AED 1,200` on Arabic pages too.
   Common in the UAE, and the schema's `priceCurrency` must stay the ISO code
   either way — but say the word and I will switch the visible label to `درهم`.

3. **The pre-existing Arabic FAQ answers use Arabic-Indic numerals** (٢١، ٦٠، ٢٥)
   while everything new uses Western digits, per your decision. The FAQ copy
   predates this work, so I left it; it is inconsistent until someone normalizes it.

4. **Two trust badges state unverified claims:** "4.9 / 5 Rating" and
   "Trusted by 500+ clients" (now also in Arabic). I translated the existing copy
   rather than invent or drop it, but if those numbers are not backed by real
   reviews they should come off both locales.

Also worth knowing: the **WhatsApp prefill messages are still English** in both
locales (e.g. "Hi, I'd like to rent a car in Dubai..."). An Arabic visitor gets an
English draft message. That was not in the Group A/B/C inventory, so it is not
done — tell me if you want it in the next pass.

