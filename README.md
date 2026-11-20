# Magen Gillan — Independent Android Apps

**الموقع التعريفي:** [magen-gillan.github.io/magen-portfolio](https://magen-gillan.github.io/magen-portfolio/)

صفحة تعريف ساكنة ومتجاوبة لمجموعة Magen، بالعربية والإنجليزية، تُبنى عبر Vite مع مكوّن ReactDrops الأصلي `DepthField` في بداية الصفحة، بينما تبقى أقسام المحتوى وإحصاءات GitHub خفيفة وتعمل دون خادم أو قاعدة بيانات.

## التطبيقات المعروضة

- **Magen Player** — مشغل فيديو محلي لأندرويد: [المستودع](https://github.com/magen-gillan/magen-player) · [أحدث إصدار](https://github.com/magen-gillan/magen-player/releases/latest)
- **Magen Download** — تنزيل الفيديو والصوت لأندرويد: [المستودع](https://github.com/magen-gillan/Magen-download) · [أحدث إصدار](https://github.com/magen-gillan/Magen-download/releases/latest)
- **Magen Audio** — مشغل موسيقى لمكتبتك المحلية: [المستودع](https://github.com/magen-gillan/magen-audio) · [أحدث إصدار](https://github.com/magen-gillan/magen-audio/releases/latest)
- **Magen Wallpaper** — إدارة الخلفيات وجدولتها: [المستودع](https://github.com/magen-gillan/magen-wallpaper) · [أحدث إصدار](https://github.com/magen-gillan/magen-wallpaper/releases/latest)

تقرأ الصفحة بيانات أحدث إصدار عام من GitHub Releases وتختار ملف APK الملائم للتنزيل. عند تعذر واجهة GitHub تستخدم بيانات احتياطية وروابط محفوظة. كما تتضمن بطاقات للتفاصيل، ومزايا كل تطبيق، ورابط المستودع والإصدارات.

## أليشا والصور

تعرض الصفحة مقطع أليشا المقدم من صاحب المشروع كرسوم متحركة صامتة ومتكررة. يمكن تفعيل بطاقة أليشا لعرض إرشاد مختصر باللغتين ثم الانتقال إلى التطبيقات. هذا تفاعل إرشادي ثابت، وليس محادثة ذكاء اصطناعي. احترامًا لإعداد تقليل الحركة يتوقف التشغيل التلقائي عند تفعيله.

يعرض قسم الصور الأصول الستة المرسلة من صاحب المشروع: شعار Magen، صورة أليشا، وصورة لكل من Magen Player وMagen Download وMagen Audio وMagen Wallpaper. تستخدم بطاقات التطبيقات الصور نفسها داخل الواجهة ونافذة التفاصيل بدل الصور القديمة أو التنويهات المؤقتة.

## البنية والتشغيل

- `index.html` — محتوى الصفحة والبيانات الوصفية الأساسية ونقطة تركيب React.
- `styles.css` — التصميم المتجاوب والمظهر الداكن/الفاتح والحركات.
- `projects.js` — قائمة التطبيقات الأربعة وبيانات وروابط احتياطية لأحدث APK.
- `app.js` — اللغات وRTL، التفاعلات، أليشا، وقراءة إصدارات GitHub.
- `src/main.jsx` — تركيب React وتهيئة `DepthField` بعنوان `Magen Gillan` وإعداداته المطلوبة.
- `src/components/depth-field.*` — ملفات المكوّن الأصلي المثبت عبر ReactDrops/shadcn، بما فيها renderer وmodel وCSS.
- `public/assets/` — أصول أليشا والشعار والصور الست المستخدمة في المعرض والمكوّن.
- `public/robots.txt` و`public/sitemap.xml` — إعدادات الزحف وخريطة الموقع.
- `package.json` و`vite.config.js` — أوامر React/Vite والبناء المناسب لمسار GitHub Pages.

لتشغيل الموقع محليًا من جذر المستودع:

```bash
npm install
npm run dev
```

لإنشاء نسخة النشر استخدم `npm run build`. ينشر GitHub Pages مجلد `dist` من الفرع `main` على الرابط أعلاه؛ ويحتوي `.github/workflows/pages.yml` على مسار التثبيت والبناء والنشر.
