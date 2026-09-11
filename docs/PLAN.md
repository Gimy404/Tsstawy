# خطة العمل الرئيسية وخارطة الطريق (Master Refactoring Plan) - مستودع Tsstawy

> **التاريخ:** 11 سبتمبر 2026  
> **الحالة:** بانتظار موافقة المالك (STOP GATE 1)  
> **الهدف:** تحويل المستودع إلى معرض أعمال وخدمات تسويق رقمي مستقل، سريع، آمن، ومضبوط الـ SEO باسم "محمد جمال".

---

## 1. التوصية العامة للمستودع (Recommendation)
* **القرار:** **الإبقاء على المستودع (KEEP)** وتأهيله وتنظيفه.
* **السبب:** التصميم الحالي يخدم تخصص التسويق الرقمي بشكل ممتاز ويحتوي على صفحات متخصصة لكل خدمة. المشاكل الموجودة هي مشاكل تقنية، تنظيمية، وهوية، وسيتم حلها جميعاً دون المساس بالمظهر العام للموقع.

---

## 2. مقارنة هيكل المجلدات: قبل وبعد (Folder Structure: Before vs After)

### الهيكل الحالي (Before):
```text
Tsstawy/
├── .git/
├── _DataURI/                            <-- مجلد مسحوب غير ضروري
├── fonts.googleapis.com/                 <-- خطوط مسحوبة مشتتة
├── fonts.gstatic.com/
├── googleads.g.doubleclick.net/          <-- ملفات إعلانات مسحوبة لا قيمة لها
├── pagead2.googlesyndication.com/        <-- ملفات إعلانات مسحوبة
├── tpc.googlesyndication.com/            <-- ملفات تتبع
├── www.google.com/                       <-- iframes ميتة
├── www.googletagmanager.com/             <-- سكربتات تتبع قديمة
├── muradmurad.com/                       <-- نسخة مكررة بالكامل ومجلدات ووردبريس
│   ├── index.html
│   ├── wp-content/
│   └── wp-includes/
├── index.html                           <-- 4500 سطر، كود مدمج، روابط مكسورة
├── SEM.html                             <-- صفحات فرعية بهوية شخص آخر
├── branding.html
├── content-writing.html
├── influencers.html
├── mystery-shopper.html
├── social-media-management.html
└── website-design.html
```

### الهيكل المستهدف بعد التنظيم (After):
```text
Tsstawy/
├── .git/
├── .gitignore                           <-- استبعاد ملفات النظام والملفات المؤقتة
├── README.md                            <-- دليل احترافي للمشروع بالإنجليزية والعربية
├── docs/                                <-- مجلد التوثيق والخطط
│   ├── AUDIT.md
│   ├── PLAN.md
│   ├── DECISIONS.md
│   ├── TEST-PLAN.md
│   ├── HOW-IT-WORKS.md
│   └── VERIFICATION-REPORT.md
├── assets/                              <-- تجميع كافة الأصول في مكان واحد منظم
│   ├── css/                             <-- ملفات التنسيق المحلية مع تعليقات بالعربي
│   │   ├── main.css
│   │   └── vendor/
│   ├── js/                              <-- ملفات الجافاسكريبت النظيفة
│   │   ├── main.js
│   │   └── vendor/                      <-- مكتبات خارجية نظيفة ومحدثة
│   ├── images/                          <-- الصور والشعارات
│   └── fonts/                           <-- الخطوط
├── pages/                               <-- أو تنظيم الصفحات بشكل مباشر ومرتب
│   ├── branding.html
│   ├── content-writing.html
│   ├── influencers.html
│   ├── mystery-shopper.html
│   ├── sem.html
│   ├── social-media-management.html
│   └── website-design.html
├── index.html                           <-- الصفحة الرئيسية النظيفة باسم محمد جمال
├── robots.txt                           <-- تعليمات الفهرسة لمحركات البحث
└── sitemap.xml                          <-- خريطة الموقع لمحركات البحث
```

---

## 3. خطوات إعادة الهيكلة المرتبة (Ordered Refactoring Steps)

كل خطوة ستكون في Commit مستقل ومنفصل:

| الخطوة | كود الـ Commit | الوصف الفني | الجهد المتوقع |
|---|---|---|---|
| 1 | `chore: add .gitignore and clean git hygiene` | إضافة ملف `.gitignore` لمنع رفع ملفات النظام والملفات المؤقتة | صغير (Small) |
| 2 | `chore: remove scraped advertising and tracking directories` | حذف المجلدات المهملة المسحوبة بالخطأ (`googleads`, `pagead2`, `tpc`, `_DataURI`, `www.google.com`) | صغير (Small) |
| 3 | `refactor: consolidate assets into clean assets folder` | تنظيم ملفات الـ CSS والـ JS والصور والخطوط داخل مجلد `assets/` بدلاً من المسارات المشوشة | متوسط (Medium) |
| 4 | `refactor: localize external stylesheets and fix missing styles.css` | فك ارتباط الـ CSS بسيرفر `muradmurad.com` وتحميلها محلياً وإنشاء `styles.css` لمنع أخطاء 404 | متوسط (Medium) |
| 5 | `refactor: clean dead wordpress code and unused scripts` | إزالة أكواد ووردبريس الميتة (كتتبع الإيموجي واختبارات الكانفاس المهملة) | متوسط (Medium) |
| 6 | `docs: add comprehensive bilingual README and HOW-IT-WORKS` | إنشاء ملف `README.md` وملف `docs/HOW-IT-WORKS.md` بمخطط توضيحي لكيفية عمل الموقع | متوسط (Medium) |

---

## 4. قائمة الإصلاحات والتحسينات المقترحة (Bug Fixes & Improvements)

> ⚠️ **هذه القائمة تحتاج لموافقتك المنفصلة لأنها تغير في النصوص والوظائف:**

1. **إصلاح الـ SEO وحذف الكانونيكال القديم (Fix Canonical & Meta Tags):**
   - تعديل `<link rel="canonical">` ليشير إلى رابط موقعك الحي: `https://gimy404.github.io/Tsstawy/`.
   - تعديل الـ Title و Meta Description و OpenGraph لتكون بالكامل باسم **Mohamed Gamal**.
2. **إصلاح نموذج الاتصال (Fix Contact Forms):**
   - إزالة رابط Caldera Forms القديم المعطل لـ muradmurad.com.
   - ربط النموذج إما بخدمة مجانية لإرسال النماذج (مثل Formspree أو Web3Forms) أو تحويل الزر إلى زر تواصل فوري عبر واتساب (`https://wa.me/201098726800`).
3. **توحيد الهوية والبيانات في الصفحات الفرعية (Rebrand Subpages):**
   - استبدال أي إشارة لـ "مرad مرad" في الصفحات السبعة بالاسم الصحيح: **Mohamed Gamal**.
   - تحديث أرقام التواصل وروابط السوشيال ميديا في جميع الفوترز (LinkedIn, WhatsApp, Email).
4. **تنظيف مكتبات FontAwesome (Deduplicate Icons):**
   - الإبقاء على نسخة واحدة فقط من FontAwesome 6 وحذف الـ 7 استدعاءات المكررة.
5. **إضافة ملفات الفهرسة (SEO Essentials):**
   - إنشاء `robots.txt` يسمح لمحركات البحث بفهرسة الصفحات.
   - إنشاء `sitemap.xml` يضم روابط جميع الخدمات لسرعة ظهورها في جوجل.

---

## 5. مقترحات تسمية المستودع (Naming Proposals - Section 7)

| الاسم الحالي | اقتراح 1 | اقتراح 2 | اقتراح 3 | ⭐ الترشيح النهائي | ليه | الوصف المقترح (English) | Topics |
|---|---|---|---|---|---|---|---|
| `Tsstawy` | `site-mohamed-gamal-marketing` | `portfolio-digital-marketer` | `mohamedgamal-portfolio` | `site-mohamed-gamal-marketing` | اسم واضح ومعياري يبدأ ببادئة `site-` ويصف تماماً محتوى المعرض وصاحبه أمام العملاء | Personal portfolio and digital marketing consultancy services website for Mohamed Gamal. | `portfolio`, `digital-marketing`, `seo`, `branding`, `website-design` |

> 📌 **ملاحظة:** عملية التسمية سيتم تأجيل تنفيذها إلى المرحلة الثامنة بعد موافقتك.

---

## 6. تقييم المخاطر وخطة التراجع (Risks & Rollback Plan)

| الخطر المحتمل | مستوى الخطر | الإجراء الوقائي | خطة التراجع عند حدوث مشكلة |
|---|---|---|---|
| حدوث خلل في المظهر البصري لـ Elementor عند تعديل الـ CSS | متوسط | عدم تعديل أسماء الـ classes الخاصة بـ Elementor وفحص الصفحات قبل وبعد | التراجع الفوري عبر `git checkout backup/pre-refactor-2026-09-11` |
| تأثر ظهور الموقع على GitHub Pages | منخفض | العمل في فرع منفصل `refactor/reorganize-structure` وعدم الدمج مع `main` إلا بعد موافقتك | إلغاء الفرع والعودة للنسخة الأصلية على `main` بضغطة زر |
| فقدان أي صورة أو أصل مطلوب | منخفض | الاحتفاظ بنسخة كاملة من المجلدات وعدم حذف أي أصل فعلي مستخدم | استرجاع الملف من الـ Tag المحفوظ |
