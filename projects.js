/* Magen portfolio catalog. Repository names, current releases and features are verified against the four source repositories. */
window.MAGEN_APPS = [
  {
    id: "magen-player",
    repo: "magen-player",
    name: "Magen Player",
    category: { en: "VIDEO · OFFLINE FIRST", ar: "فيديو · يعمل دون إنترنت" },
    description: {
      en: "A local-first Android video player built on libmpv and Jetpack Compose. It finds and plays videos stored on your phone—without remote streaming or network access—inside a fast, customizable glass-style interface.",
      ar: "مشغل فيديو محلي لأندرويد مبني على libmpv وJetpack Compose. يكتشف مقاطع هاتفك ويشغلها دون بث خارجي أو اتصال شبكي، ضمن واجهة زجاجية سريعة قابلة للتخصيص."
    },
    features: {
      en: ["Powerful local playback with customizable gestures", "Folder browsing, local playlists and favorites", "Arabic subtitles, frame stepping and HDR-to-SDR", "Watched history and a dedicated Shorts mode"],
      ar: ["تشغيل محلي قوي وإيماءات قابلة للتخصيص", "تصفح المجلدات وقوائم تشغيل ومفضلة محلية", "ترجمات عربية وتنقل بين الإطارات وتحويل HDR إلى SDR", "سجل مشاهدة ووضع مخصص للفيديوهات القصيرة"]
    },
    iconPath: "app/src/main/ic_launcher-web.png",
    versionFallback: "v5.5.10",
    apkFallback: "https://github.com/magen-gillan/magen-player/releases/download/v5.5.10/magen-player-arm64-v8a.apk",
    releaseFallback: "https://github.com/magen-gillan/magen-player/releases/latest",
    downloadNameFallback: "magen-player-arm64-v8a.apk",
    stack: "libmpv · Jetpack Compose",
    accent: "#58d8ef"
  },
  {
    id: "magen-download",
    repo: "Magen-download",
    name: "Magen Download",
    category: { en: "VIDEO & AUDIO · YT-DLP", ar: "فيديو وصوت · yt-dlp" },
    description: {
      en: "Download video or audio from thousands of supported sites with a clear Arabic/English Android interface. Start with the quick mode or open advanced controls for formats, quality, subtitles and audio conversion.",
      ar: "نزّل الفيديو أو الصوت من آلاف المواقع المدعومة بواجهة أندرويد واضحة بالعربية والإنجليزية. ابدأ بالوضع السريع أو استخدم الخيارات المتقدمة للتحكم في الصيغة والجودة والترجمات وتحويل الصوت."
    },
    features: {
      en: ["Share a link from another app to start", "Background progress and resumable downloads", "Simple and advanced modes", "MP3 conversion and subtitle merging; no ads or tracking"],
      ar: ["شارك الرابط من أي تطبيق لبدء التنزيل", "تنزيلات بالخلفية قابلة للاستكمال مع إظهار التقدم", "وضع بسيط وآخر متقدم", "تحويل MP3 ودمج الترجمات دون إعلانات أو تتبع"]
    },
    iconPath: "app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    versionFallback: "v2.2.11",
    apkFallback: "https://github.com/magen-gillan/Magen-download/releases/download/v2.2.11/Magen-download-2.2.11-arm64.apk",
    releaseFallback: "https://github.com/magen-gillan/Magen-download/releases/latest",
    downloadNameFallback: "Magen-download-2.2.11-arm64.apk",
    stack: "yt-dlp · Android",
    accent: "#9b8cff"
  },
  {
    id: "magen-audio",
    repo: "magen-audio",
    name: "Magen Audio",
    category: { en: "MUSIC · PERSONAL LIBRARY", ar: "موسيقى · مكتبتك الشخصية" },
    description: {
      en: "A lightweight, ad-free Android music player built with Kotlin, Jetpack Compose and Media3. It keeps a local music library quick to browse and neatly organized, with full Arabic and right-to-left support.",
      ar: "مشغل موسيقى خفيف بلا إعلانات لأندرويد، مبني باستخدام Kotlin وJetpack Compose وMedia3. يجعل مكتبتك المحلية سريعة التصفح ومنظمة، مع دعم كامل للعربية واتجاه الكتابة من اليمين إلى اليسار."
    },
    features: {
      en: ["Natural numeric sorting for tracks", "Custom folder artwork and clean folder names", "Reliable playback from the file manager", "Automatic library scanning, Arabic RTL and no tracking"],
      ar: ["ترتيب رقمي طبيعي للمقاطع", "صور مخصصة للمجلدات وأسماء واضحة", "تشغيل موثوق عند الفتح من مدير الملفات", "فحص تلقائي للمكتبة ودعم RTL دون تتبع"]
    },
    iconPath: "app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    versionFallback: "v2.9.10",
    apkFallback: "https://github.com/magen-gillan/magen-audio/releases/download/v2.9.10/latest.apk",
    releaseFallback: "https://github.com/magen-gillan/magen-audio/releases/latest",
    downloadNameFallback: "latest.apk",
    stack: "Kotlin · Media3 · Compose",
    accent: "#f4bc70"
  },
  {
    id: "magen-wallpaper",
    repo: "magen-wallpaper",
    name: "Magen Wallpaper",
    category: { en: "WALLPAPERS · AUTOMATION", ar: "خلفيات · أتمتة ذكية" },
    description: {
      en: "An anime wallpaper manager for Android that lets you build albums from your own image folders and decide when your home screen or lock screen changes—without keeping the app open or uploading your images.",
      ar: "مدير خلفيات أنمي لأندرويد يتيح لك إنشاء ألبومات من مجلدات صورك واختيار موعد تغيير خلفية الشاشة الرئيسية أو القفل، دون إبقاء التطبيق مفتوحًا أو رفع صورك إلى أي خادم."
    },
    features: {
      en: ["Multiple albums from folders on your phone", "Schedules, on-unlock changes and one-tap refresh", "Separate home-screen and lock-screen sources", "Fill/Fit/Stretch modes, shuffle and reboot rescheduling"],
      ar: ["ألبومات متعددة من مجلدات الهاتف", "جدولة وتغيير عند فتح القفل أو بضغطة واحدة", "مصادر مستقلة للشاشة الرئيسية وشاشة القفل", "أنماط عرض متعددة وترتيب عشوائي واستئناف بعد التشغيل"]
    },
    iconPath: "app/src/main/res/mipmap-xxxhdpi/ic_launcher.webp",
    versionFallback: "v4.0.15",
    apkFallback: "https://github.com/magen-gillan/magen-wallpaper/releases/download/v4.0.15/latest.apk",
    releaseFallback: "https://github.com/magen-gillan/magen-wallpaper/releases/latest",
    downloadNameFallback: "latest.apk",
    stack: "Android · WallpaperManager",
    accent: "#7ad7a1"
  }
];
