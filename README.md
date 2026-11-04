<div align="center">

# Magen Gillan — Project Atlas

**معرض مشاريع Magen Gillan — صفحة تقديمية حية لكل المشاريع مع روابط مباشرة**

**A living showcase page for all my projects — web apps, Android apps, and their direct links.**

**🌐 Live site | الموقع المباشر: [magen-gillan.github.io/magen-portfolio](https://magen-gillan.github.io/magen-portfolio/)**

</div>

---

## ✨ What is this? | ما هذه الصفحة؟

**EN:** Project Atlas is a single-page showcase (pure HTML/CSS/JS, no build step) that presents all of my active projects. Every project card opens a detail dialog with the stack, latest release, and direct links: **Visit site** for web projects, **Download APK** for Android apps, and the **source repository**. Release tags and APK download links are refreshed automatically from the GitHub API when the page loads.

**AR:** «أطلس المشاريع» صفحة عرض تقديمية من صفحة واحدة (HTML/CSS/JS خالصة بدون خطوة بناء) تعرض جميع مشاريعي النشطة. كل بطاقة مشروع تفتح نافذة تفاصيل فيها التقنيات وآخر إصدار والروابط المباشرة: **زيارة الموقع** للمشاريع الويب، **تحميل APK** لتطبيقات أندرويد، و**المستودع المصدر**. تُحدَّث أرقام الإصدارات وروابط التحميل تلقائياً من GitHub API عند فتح الصفحة.

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

## 🛠 Tech stack | التقنيات

- **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build step
- **GitHub Pages** for hosting (deploys automatically from `main`)
- **GitHub REST API** for live release/APK refresh (`app.js → refreshLiveReleases()`)
- Bilingual UI (English / العربية) with RTL support, dark mode, and localStorage preferences

## 📁 Structure | بنية المشروع

```
magen-portfolio/
├── index.html    # الصفحة الرئيسية | main page
├── styles.css    # التصميم | styling
├── app.js        # الواجهة، اللغة، جلب الإصدارات الحية | UI, i18n, live releases
├── projects.js   # قائمة المشاريع | the project catalog (edit this to add/remove projects)
└── TODO.md / plan.md
```

## ➕ Adding a project | إضافة مشروع

**EN:** Append an entry to `window.PROJECTS` in `projects.js` with: `id` (exact repo name), `name`, `kind`/`kindAr`, `desc`/`descAr`, `lang`, `repo`, optional `site` (for web projects), `updated`, `files`, `release`, `download` (direct APK URL for Android apps), and `downloadLabel`. The card counter and dialog links update automatically.

**AR:** أضف سطراً جديداً إلى `window.PROJECTS` في `projects.js` بالحقول: `id` (اسم المستودع كما هو)، `name`، `kind`/`kindAr`، `desc`/`descAr`، `lang`، `repo`، و`site` اختيارياً (للمشاريع الويب)، `updated`، `files`، `release`، و`download` (رابط APK المباشر لتطبيقات أندرويد) و`downloadLabel`. العداد وروابط النافذة تُحدَّث تلقائياً.

---

<div align="center">

© 2026 [Magen Gillan](https://github.com/magen-gillan) · Built from open source, one project at a time.

</div>
