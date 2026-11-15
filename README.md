# Magen Gillan — Independent Android Apps

**الموقع التعريفي:** [magen-gillan.github.io/magen-portfolio](https://magen-gillan.github.io/magen-portfolio/)

صفحة تعريف ساكنة ومتجاوبة لمجموعة Magen، بالعربية والإنجليزية، مبنية بـ HTML وCSS وJavaScript دون إطار عمل أو خادم أو قاعدة بيانات.

## التطبيقات المعروضة

- **Magen Player** — مشغل فيديو محلي لأندرويد: [المستودع](https://github.com/magen-gillan/magen-player) · [أحدث إصدار](https://github.com/magen-gillan/magen-player/releases/latest)
- **Magen Download** — تنزيل الفيديو والصوت لأندرويد: [المستودع](https://github.com/magen-gillan/Magen-download) · [أحدث إصدار](https://github.com/magen-gillan/Magen-download/releases/latest)
- **Magen Audio** — مشغل موسيقى لمكتبتك المحلية: [المستودع](https://github.com/magen-gillan/magen-audio) · [أحدث إصدار](https://github.com/magen-gillan/magen-audio/releases/latest)
- **Magen Wallpaper** — إدارة الخلفيات وجدولتها: [المستودع](https://github.com/magen-gillan/magen-wallpaper) · [أحدث إصدار](https://github.com/magen-gillan/magen-wallpaper/releases/latest)

تقرأ الصفحة بيانات أحدث إصدار عام من GitHub Releases وتختار ملف APK الملائم للتنزيل. عند تعذر واجهة GitHub تستخدم بيانات احتياطية وروابط محفوظة. كما تتضمن بطاقات للتفاصيل، ومزايا كل تطبيق، ورابط المستودع والإصدارات.

## أليشا والصور

تعرض الصفحة مقطع أليشا المقدم من صاحب المشروع كرسوم متحركة صامتة ومتكررة. يمكن تفعيل بطاقة أليشا لعرض إرشاد مختصر باللغتين ثم الانتقال إلى التطبيقات. هذا تفاعل إرشادي ثابت، وليس محادثة ذكاء اصطناعي. احترامًا لإعداد تقليل الحركة يتوقف التشغيل التلقائي عند تفعيله.

حُذفت لقطات الواجهات القديمة من المشاريع الأربعة، ولا تتوفر حاليًا لقطات حديثة تمثل واجهات Magen الحالية. لذلك تعرض البطاقات أيقونات التطبيقات وتنبيه انتظار الصور الجديدة بدلًا من صور قديمة. ستضاف اللقطات الجديدة عند تزويدها.

## البنية والتشغيل

- `index.html` — محتوى الصفحة والبيانات الوصفية الأساسية.
- `styles.css` — التصميم المتجاوب والمظهر الداكن/الفاتح والحركات.
- `projects.js` — قائمة التطبيقات الأربعة وبيانات وروابط احتياطية لأحدث APK.
- `app.js` — اللغات وRTL، التفاعلات، أليشا، وقراءة إصدارات GitHub.
- `assets/alisha-welcome.mp4` — أصل أليشا المتحرك المقدم من المستخدم.
- `assets/alisha-poster.webp` — ملصق الفيديو وصورة المشاركة.
- `robots.txt` و`sitemap.xml` — إعدادات الزحف وخريطة الموقع.

لتشغيل الملفات محليًا من جذر المستودع:

```bash
python3 -m http.server 8000
```

ينشر GitHub Pages الموقع من الفرع `main` والجذر `/` على الرابط أعلاه. يحتوي `.github/workflows/pages.yml` على مسار النشر الحالي.