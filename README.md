<div align="center">

# Magen Gillan — Project Atlas

**معرض مشاريع Magen Gillan — صفحة تقديمية حية لكل المشاريع مع روابط مباشرة**

**A living showcase page for all my projects — web apps, Android apps, and their direct links.**

**🌐 Live site | الموقع المباشر: [magen-gillan.github.io/magen-portfolio](https://magen-gillan.github.io/magen-portfolio/)**

</div>

---

## ✨ What is this? | ما هذه الصفحة؟

**EN:** Project Atlas is a single-page showcase (pure HTML/CSS/JS, no build step) that presents all of my active projects. The layout follows a clear visual hierarchy: a featured identification card for the main project (**Alisha**) at the top — name, short description, main features, and a large in-app screenshot over the app's own background art — then the remaining projects as smaller cards with real in-app screenshots. Every project card opens a detail dialog with the stack, latest release, and direct links: **Visit site** for web projects, **Download APK** for Android apps, and the **source repository**. Release tags and APK download links are refreshed automatically from the GitHub API when the page loads.

**AR:** «أطلس المشاريع» صفحة عرض تقديمية من صفحة واحدة (HTML/CSS/JS خالصة بدون خطوة بناء) تعرض جميع مشاريعي النشطة وفق تسلسل بصري واضح: بطاقة تعريف رئيسية للمشروع الأساسي (**Alisha**) أعلى الصفحة — الاسم والوصف المختصر والمزايا الرئيسية مع لقطة كبيرة من داخل التطبيق فوق خلفية من خلفيات التطبيق نفسه — ثم بقية المشاريع كبطاقات أصغر بلقطات حقيقية من داخل كل تطبيق. كل بطاقة مشروع تفتح نافذة تفاصيل فيها التقنيات وآخر إصدار والروابط المباشرة، وتُحدّث أرقام الإصدارات وروابط التحميل تلقائياً من GitHub API عند فتح الصفحة.

---

## 📦 Projects featured | المشاريع المعروضة (6)

| # | المشروع | النوع | الرابط المباشر | المصدر | أحدث إصدار |
|---|---|---|---|---|---|
| 1 | **Alisha** | AI companion · web + Android | [alisha-puce.vercel.app](https://alisha-puce.vercel.app) | [alisha](https://github.com/magen-gillan/alisha) | [android-v1.0.2 APK](https://github.com/magen-gillan/alisha/releases/download/android-v1.0.2/Alisha-Android-v1.0.2.apk) |
| 2 | **Magen Player** | Android video player | — | [magen-player](https://github.com/magen-gillan/magen-player) | [v5.5.1 APK](https://github.com/magen-gillan/magen-player/releases/download/v5.5.1/magen-player-v5.5.1-arm64-v8a.apk) |
| 3 | **Magen Download** | Android downloader | — | [Magen-download](https://github.com/magen-gillan/Magen-download) | [v2.2.5 APK](https://github.com/magen-gillan/Magen-download/releases/download/v2.2.5/Magen-download-2.2.5-arm64.apk) |
| 4 | **Magen Play** | Android music player | — | [magen-play](https://github.com/magen-gillan/magen-play) | [v2.7.8 APK](https://github.com/magen-gillan/magen-play/releases/download/v2.7.8/magen-play-v2.7.8.apk) |
| 5 | **Auto Wallpapers** | Android wallpaper manager | — | [auto-wallpapers](https://github.com/magen-gillan/auto-wallpapers) | [v4.0.6 APK](https://github.com/magen-gillan/auto-wallpapers/releases/download/v4.0.6-lint-fixes/auto-wallpapers-v4.0.6-lint-fixes.apk) |
| 6 | **Alisha Android** | Android source · beta | — | [alisha-android](https://github.com/magen-gillan/alisha-android) | [v1.0.22-arm64 beta APK](https://github.com/magen-gillan/alisha-android/releases/download/v1.0.22-arm64/Alisha-Honor-X6c-ARM64-release.apk) |

> **ملاحظة:** القاعدة المعتمدة: تطبيقات أندرويد تحصل على رابط تحميل مباشر لأحدث APK، والمشاريع الويب تحصل على رابط موقعها الحي.

---

## 🔁 How the site stays in sync | كيف يبقى الموقع متزامناً مع المستودعات

**EN:** The page reads three things live from GitHub (30-minute cache in `localStorage`, static fallback from `projects.js` when the API is unreachable): **app names** from each repo's config file (`src/app/layout.tsx` metadata for Alisha; `res/values/strings.xml` `app_name` for the Android apps), **versions, release dates & APK assets** from GitHub Releases (pre-releases included), and **in-app screenshots** from a live directory listing of each repo's screenshot folder. Any change in a repository shows up on the site automatically — no manual edits.

**AR:** تقرأ الصفحة ثلاثة أشياء مباشرة من GitHub (مع ذاكرة مؤقتة 30 دقيقة، وبيانات احتياطية من `projects.js` عند تعذر الاتصال): **أسماء التطبيقات** من ملف إعدادات كل مستودع (`src/app/layout.tsx` لمشروع Alisha و`res/values/strings.xml` لتطبيقات أندرويد)، و**الإصدارات وتواريخها وملفات APK** من GitHub Releases، و**لقطات الشاشة** من مجلد اللقطات داخل كل مستودع. أي تغيير في المستودع يظهر على الموقع تلقائياً دون تعديل يدوي.

### 📸 Screenshot folders the site reads | مجلدات اللقطات التي يقرأها الموقع

| Repo | Folder | Status |
|---|---|---|
| alisha | `screenshots/` | ✅ 2 screenshots |
| Magen-download | `fastlane/…/phoneScreenshots/` | ✅ 9 screenshots |
| magen-play | `fastlane/…/phoneScreenshots/` | ✅ 23 screenshots |
| auto-wallpapers | `metadata/en-US/images/phoneScreenshots/` | ✅ 5 screenshots |
| alisha-android | `Android/src/app/src/main/assets/xr/` | ✅ 3 images |
| magen-player | `screenshots/` | ⚠️ empty — add screenshots there and they appear automatically (launcher icon shown meanwhile) |

**AR:** أضف لقطات جديدة إلى نفس المجلد أعلاه وستظهر على الموقع تلقائياً. لقطات **magen-player** غير موجودة بعد — أضفها في مجلد `screenshots/` داخل المستودع.

---

## 🛠 Tech stack | التقنيات

- **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build step
- **GitHub Pages** for hosting (deploys automatically from `main`)
- **GitHub REST API + raw.githubusercontent** for the live layer (`app.js → syncProject()/hydrateLive()`): app names, releases & APK assets, screenshot listings — cached 30 min, static fallback offline
- Bilingual UI (English / العربية) with RTL support, dark mode, and localStorage preferences

## 📁 Structure | بنية المشروع

```
magen-portfolio/
├── index.html    # الصفحة الرئيسية | main page
├── styles.css    # التصميم | styling
├── app.js        # الواجهة، اللغة، الطبقة الحية | UI, i18n, live repo layer
├── projects.js   # قائمة المشاريع + مصادر الإعدادات | the project catalog (edit this to add/remove projects)
└── TODO.md / plan.md
```

## ➕ Adding a project | إضافة مشروع

**EN:** Append an entry to `window.PROJECTS` in `projects.js` with: `id` (exact repo name), `name` (fallback until the repo config is read), `kind`/`kindAr`, `desc`/`descAr`, `lang`, `repo`, optional `site` (for web projects), `updated`, `files`, `release`, `download` (direct APK URL for Android apps), and `downloadLabel`. New fields: `config` (which repo file holds the app name), `shots` (screenshot folder in the repo), `shotFallback` (a known screenshot path used if the API is unreachable), and optional `icon` (launcher icon shown until screenshots exist). The card counter and dialog links update automatically.

**AR:** أضف سطراً جديداً إلى `window.PROJECTS` في `projects.js` بالحقول: `id` (اسم المستودع كما هو)، `name` (احتياطي حتى يُقرأ الاسم من المستودع)، `kind`/`kindAr`، `desc`/`descAr`، `lang`، `repo`، و`site` اختيارياً، `updated`، `files`، `release`، `download` و`downloadLabel`، إضافة إلى الحقول الجديدة: `config` (الملف الذي يحمل اسم التطبيق داخل المستودع) و`shots` (مجلد اللقطات) و`shotFallback` (لقطة معروفة تُستخدم عند تعذر الاتصال) و`icon` اختيارياً (أيقونة التطبيق تظهر بدل اللقطات إلى أن تُضاف). العداد وروابط النافذة تُحدَّث تلقائياً.

---

<div align="center">

© 2026 [Magen Gillan](https://github.com/magen-gillan) · Built from open source, one project at a time.

</div>
