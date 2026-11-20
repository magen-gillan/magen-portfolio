(() => {
  "use strict";
  const COPY = {
    en: {
      navHome: "Home", navApps: "Apps", navVisuals: "Visuals", navStats: "Downloads", navAbout: "About",
      heroEyebrow: "INDEPENDENT MAKER · ANDROID STUDIO", heroTitleA: "Small ideas.", heroTitleB: "Thoughtfully built.",
      heroLede: "I make useful Android tools that feel a little more human — shaped by curiosity, careful details, and the people who use them.",
      exploreApps: "Explore the apps", githubProfile: "Visit GitHub", heroFootnote: "A focused collection of tools for everyday Android.",
      alishaName: "Alisha", alishaRole: "Your guide to Magen", alishaOpen: "Meet Alisha", alishaClose: "Close Alisha's note", alishaPrompt: "TAP", alishaMessage: "Hi, I’m Alisha. I can guide you to the Magen app for video, downloads, music or wallpapers.", alishaAction: "Explore the four apps", liveLabel: "HERE", scrollCue: "SCROLL TO EXPLORE",
      signalLabel: "THE MAGEN ECOSYSTEM", signalText: "Four focused apps. One thoughtful point of view.", visualsEyebrow: "THE WORK IN VIEW", visualsTitle: "A closer look at the Magen world.", visualsIntro: "The identity, guide, and four app marks that make this small Android ecosystem feel like one place.",
      metricApps: "ANDROID APPS", metricLanguages: "LANGUAGES", metricCare: "CARE IN EVERY DETAIL",
      appsEyebrow: "TOOLS FOR YOUR PHONE", appsTitle: "Meet the Magen apps.",
      appsIntro: "Each one has a clear job: play your media, bring a download within reach, keep music organized, or make your favorite wallpapers feel alive.",
      statsEyebrow: "GITHUB RELEASE METRICS", statsTitle: "Downloads, straight from GitHub.", statsIntro: "An all-release count of APK file downloads across the four public repositories.",
      statsTotalLabel: "TOTAL APK DOWNLOADS", statsSummaryDetail: "Combined across all four apps", statsSourceLabel: "GITHUB RELEASE APK COUNTS", statsChecking: "CHECKING GITHUB…", statsLive: "LIVE FROM GITHUB", statsSaved: "SHOWING SAVED COUNTS", statsPartial: "PARTIAL GITHUB DATA", statsUnavailable: "GITHUB DATA UNAVAILABLE",
      statsDownloadLabel: "APK file downloads", statsNoData: "Download counts are temporarily unavailable.", statsOpenRepo: "View repository", statsFootnote: "Counts sum GitHub's download_count for every APK file attached to public releases. Separate APK variants have separate counters. These are file downloads, not unique people, app installs or active users. Values are cached in this browser for 30 minutes to stay within GitHub's public API limits.",
      liveRelease: "LATEST PUBLIC RELEASES", releaseChecking: "CHECKING GITHUB…", releaseLive: "LIVE FROM GITHUB", releaseFallback: "SHOWING SAVED RELEASE INFO",
      downloadLatest: "Download latest APK", sourceCode: "Source", details: "Details", allReleases: "All releases", appNumber: "APP",
      detailHighlights: "WHAT IT DOES WELL", screenshotsPending: "PROVIDED APP VISUAL", screenshotsPendingLong: "The supplied visual is shown here as part of this app's identity.", appIconAlt: "App icon", mediaLabel: "APP VISUAL", brandVisualLabel: "BRAND / IDENTITY", brandVisualName: "Magen Gillan", guideVisualLabel: "GUIDE / ALISHA", guideVisualName: "Alisha", techLabel: "BUILT WITH",
      aboutEyebrow: "A NOTE FROM THE MAKER", aboutTitle: "Technology should feel useful, calm, and a little bit delightful.",
      aboutBody: "Magen is an independent collection of Android projects built around a simple idea: thoughtful software can make everyday things easier without getting in the way. Alisha is the friendly face that connects them.",
      moreOnGithub: "More of the work on GitHub", makerLabel: "THE PERSON BEHIND MAGEN", closingEyebrow: "BUILT IN THE OPEN",
      closingTitle: "Find your next favorite tool.", closingBody: "All four apps are open source. Explore the code, read what’s new, or download the latest release.",
      browseApps: "Browse all apps", footerNote: "Made with intention. Shared in the open.",
      languageSwitch: "عربي", languageAria: "Switch to Arabic", themeLight: "Switch to light theme", themeDark: "Switch to dark theme",
      menuOpen: "Open navigation", menuClose: "Close navigation", closeDetails: "Close details", downloadAlt: "Download latest APK",
      releaseLabel: "LATEST", apiUnavailable: "Live release info is temporarily unavailable. Showing the latest saved links.",
      mediaLabel: "ALISHA / MAGEN GUIDE"
    },
    ar: {
      navHome: "الرئيسية", navApps: "التطبيقات", navVisuals: "الصور", navStats: "التنزيلات", navAbout: "عن Magen",
      heroEyebrow: "صانع مستقل · تطبيقات أندرويد", heroTitleA: "أفكار صغيرة.", heroTitleB: "تنفيذ بعناية.",
      heroLede: "أصنع أدوات أندرويد مفيدة وقريبة من الناس، بتصميمها بدافع الفضول والاهتمام بالتفاصيل ومن يستخدمها.",
      exploreApps: "اكتشف التطبيقات", githubProfile: "GitHub", heroFootnote: "مجموعة مركزة من الأدوات اليومية لأندرويد.",
      alishaName: "أليشا", alishaRole: "دليلتك إلى Magen", alishaOpen: "تعرّف إلى أليشا", alishaClose: "إغلاق رسالة أليشا", alishaPrompt: "اضغط", alishaMessage: "مرحبًا، أنا أليشا. أساعدك في العثور على تطبيق Magen المناسب للفيديو أو التنزيل أو الموسيقى أو الخلفيات.", alishaAction: "استكشف التطبيقات الأربعة", liveLabel: "معك", scrollCue: "تابع لاكتشاف المزيد",
      signalLabel: "منظومة MAGEN", signalText: "أربعة تطبيقات، ورؤية واحدة تهتم بالتفاصيل.", visualsEyebrow: "العمل أمامك", visualsTitle: "نظرة أقرب إلى عالم Magen.", visualsIntro: "هوية Magen ودليلتها وأيقونات تطبيقاتها الأربعة في مساحة بصرية واحدة.",
      metricApps: "تطبيقات أندرويد", metricLanguages: "لغتان", metricCare: "عناية بكل تفصيل",
      appsEyebrow: "أدوات لهاتفك", appsTitle: "تعرّف إلى تطبيقات Magen.",
      appsIntro: "لكل تطبيق مهمة واضحة: تشغيل وسائطك، وتنزيل ما تحتاجه، وتنظيم موسيقاك، أو جعل خلفياتك المفضلة أكثر حيوية.",
      statsEyebrow: "إحصاءات إصدارات GitHub", statsTitle: "التنزيلات من GitHub مباشرة.", statsIntro: "مجموع تنزيلات ملفات APK عبر الإصدارات العامة للمستودعات الأربعة.",
      statsTotalLabel: "إجمالي تنزيلات ملفات APK", statsSummaryDetail: "مجموع التطبيقات الأربعة", statsSourceLabel: "عدادات ملفات APK في GitHub Releases", statsChecking: "جارٍ التحقق من GitHub…", statsLive: "مباشر من GitHub", statsSaved: "عرض أعداد محفوظة", statsPartial: "بيانات GitHub جزئية", statsUnavailable: "بيانات GitHub غير متاحة",
      statsDownloadLabel: "تنزيلات ملفات APK", statsNoData: "تعذر جلب عدادات التنزيل مؤقتًا.", statsOpenRepo: "فتح المستودع", statsFootnote: "تجمع الأرقام download_count الذي يعرضه GitHub لكل ملفات APK المرفقة بالإصدارات العامة. لكل ملف أو نسخة بديلة عداد مستقل. هذه تنزيلات للملفات وليست عدد الأشخاص أو التثبيتات أو المستخدمين النشطين. تحفظ القيم في هذا المتصفح 30 دقيقة لمراعاة حدود واجهة GitHub العامة.",
      liveRelease: "أحدث الإصدارات العامة", releaseChecking: "جارٍ التحقق من GitHub…", releaseLive: "مباشر من GitHub", releaseFallback: "عرض بيانات الإصدار المحفوظة",
      downloadLatest: "تنزيل أحدث APK", sourceCode: "المصدر", details: "التفاصيل", allReleases: "كل الإصدارات", appNumber: "تطبيق",
      detailHighlights: "أبرز ما يقدمه", screenshotsPending: "الصورة المرفقة للتطبيق", screenshotsPendingLong: "تظهر الصورة المرفقة هنا كجزء من هوية هذا التطبيق.", appIconAlt: "أيقونة التطبيق", mediaLabel: "صورة التطبيق", brandVisualLabel: "الهوية / الشعار", brandVisualName: "Magen Gillan", guideVisualLabel: "الدليلة / أليشا", guideVisualName: "أليشا", techLabel: "مبني باستخدام",
      aboutEyebrow: "ملاحظة من المطوّر", aboutTitle: "ينبغي أن تكون التقنية مفيدة وهادئة، وفيها لمسة من المتعة.",
      aboutBody: "Magen مجموعة مستقلة من مشاريع أندرويد تقوم على فكرة بسيطة: يمكن للبرمجيات المدروسة أن تسهّل تفاصيل يومك دون أن تقف في طريقك. وأليشا هي الوجه الودود الذي يجمع هذه التطبيقات.",
      moreOnGithub: "شاهد المزيد من العمل على GitHub", makerLabel: "الشخص وراء MAGEN", closingEyebrow: "مفتوح المصدر",
      closingTitle: "اكتشف أداتك التالية.", closingBody: "التطبيقات الأربعة مفتوحة المصدر. تصفح الشيفرة، واكتشف الجديد، أو نزّل أحدث إصدار.",
      browseApps: "تصفح التطبيقات", footerNote: "صُنع بعناية، ومتاح للجميع.",
      languageSwitch: "EN", languageAria: "Switch to English", themeLight: "التبديل إلى المظهر الفاتح", themeDark: "التبديل إلى المظهر الداكن",
      menuOpen: "فتح قائمة التنقل", menuClose: "إغلاق قائمة التنقل", closeDetails: "إغلاق التفاصيل", downloadAlt: "تنزيل أحدث APK",
      releaseLabel: "الأحدث", apiUnavailable: "تعذر جلب بيانات الإصدار مؤقتًا. تظهر روابط أحدث إصدار محفوظة.",
      mediaLabel: "أليشا / دليلة MAGEN"
    }
  };
  const CACHE_KEY = "magen-atlas-github-v2";
  const CACHE_TTL = 30 * 60 * 1000;
  const state = { lang: "en", theme: "dark", releases: {}, downloadStats: {}, dialogId: null, releaseFailures: null, releaseCacheHits: 0 };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const t = (key) => COPY[state.lang][key] || COPY.en[key] || key;
  const appList = Array.isArray(window.MAGEN_APPS) ? window.MAGEN_APPS : [];
  try { localStorage.removeItem("magen-atlas-github-v1"); } catch { /* ignore unavailable storage */ }
  const savedCache = (() => { try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch { return {}; } })();

  function secureHttpsUrl(value, fallback) {
    try { const parsed = new URL(value); return parsed.protocol === "https:" ? parsed.href : fallback; }
    catch { return fallback; }
  }
  function readAppCache(appId, key) {
    const cached = savedCache[appId]?.[key];
    return cached && Date.now() - cached.savedAt < CACHE_TTL ? cached.value : null;
  }
  function readAnyAppCache(appId, key) { return savedCache[appId]?.[key]?.value || null; }
  function setAppCache(appId, key, value) {
    savedCache[appId] ||= {};
    savedCache[appId][key] = { savedAt: Date.now(), value };
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(savedCache)); } catch { /* private browsing may disable storage */ }
  }
  function fallbackRelease(app) {
    return { tag_name: app.versionFallback, html_url: app.releaseFallback, published_at: "", asset: { name: app.downloadNameFallback, browser_download_url: app.apkFallback } };
  }
  function currentRelease(app) { return state.releases[app.id] || readAppCache(app.id, "release") || fallbackRelease(app); }
  function imageUrl(app, path) {
    return `https://raw.githubusercontent.com/magen-gillan/${encodeURIComponent(app.repo)}/main/${path.split("/").map(encodeURIComponent).join("/")}`;
  }
  function iconUrl(app) { return imageUrl(app, app.iconPath); }

  function renderVisualGallery() {
    const gallery = $("#visualGallery");
    if (!gallery) return;
    const entries = [
      { className: "visual-card--brand", src: "assets/magen-mark.jpg", label: t("brandVisualLabel"), name: t("brandVisualName"), alt: t("brandVisualName") },
      { className: "visual-card--guide", src: "assets/alisha-guide.png", label: t("guideVisualLabel"), name: t("guideVisualName"), alt: "Alisha, Magen guide" },
      ...appList.map((app) => ({ className: "visual-card--app", src: app.mediaPath, label: `${t("mediaLabel")} / ${app.name}`, name: app.name, alt: app.mediaAlt[state.lang] }))
    ];
    gallery.innerHTML = entries.map((entry) => `<figure class="visual-card ${entry.className} reveal">
      <div class="visual-card-media"><img src="${esc(entry.src)}" alt="${esc(entry.alt)}" loading="lazy"></div>
      <figcaption><span>${esc(entry.label)}</span><strong>${esc(entry.name)}</strong></figcaption>
    </figure>`).join("");
    observeReveals(gallery);
  }

  function renderApps() {
    const grid = $("#appsGrid");
    if (!grid) return;
    grid.innerHTML = appList.map((app, index) => {
      const rel = currentRelease(app);
      const apk = rel.asset?.browser_download_url || app.apkFallback;
      const file = rel.asset?.name || app.downloadNameFallback;
      const tags = app.features[state.lang].slice(0, 2).map((feature) => `<span class="feature-chip">${esc(feature)}</span>`).join("");
      return `<article class="app-card reveal" style="--app-accent:${esc(app.accent)}" data-app-id="${esc(app.id)}">
        <div class="app-card-art">
          <span class="app-index">${t("appNumber")} / 0${index + 1}</span>
          <div class="app-icon-stage app-media-stage"><img class="app-media-hero" src="${esc(app.mediaPath)}" alt="${esc(app.mediaAlt[state.lang])}" loading="lazy"><span class="app-preview-note">${esc(t("mediaLabel"))}</span></div>
        </div>
        <div class="app-card-body">
          <div class="app-meta-line"><span class="app-category">${esc(app.category[state.lang])}</span><span class="app-version">${esc(rel.tag_name || app.versionFallback)}</span></div>
          <h3>${esc(app.name)}</h3>
          <p class="app-description">${esc(app.description[state.lang])}</p>
          <div class="app-features">${tags}</div>
          <div class="app-card-actions">
            <a class="download-button" href="${esc(secureHttpsUrl(apk, app.apkFallback))}" target="_blank" rel="noreferrer" aria-label="${esc(t("downloadAlt"))} — ${esc(app.name)}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg><span>${esc(t("downloadLatest"))}</span>
            </a>
            <a class="source-button" href="https://github.com/magen-gillan/${encodeURIComponent(app.repo)}" target="_blank" rel="noreferrer">${esc(t("sourceCode"))} <span aria-hidden="true">↗</span></a>
            <button class="details-button" type="button" data-open-app="${esc(app.id)}">${esc(t("details"))} <span aria-hidden="true">＋</span></button>
            <span class="release-file">${esc(file)}</span>
          </div>
        </div>
      </article>`;
    }).join("");
    observeReveals(grid);
  }

  function formatCount(value) {
    return new Intl.NumberFormat(state.lang === "ar" ? "ar" : "en").format(Math.max(0, Number(value) || 0));
  }
  function renderDownloadStats() {
    const grid = $("#downloadStatsGrid");
    if (!grid) return;
    const records = appList.map((app) => state.downloadStats[app.id]);
    const complete = records.length > 0 && records.every((item) => Number.isFinite(item?.totalDownloads));
    const total = $("#downloadStatsTotal");
    if (total) total.textContent = complete ? formatCount(records.reduce((sum, item) => sum + item.totalDownloads, 0)) : "—";
    const status = $("#downloadStatsStatus");
    if (status) {
      const sources = records.map((item) => item?.source || "loading");
      const key = sources.every((source) => source === "live") ? "statsLive"
        : sources.some((source) => source === "loading") ? "statsChecking"
        : sources.some((source) => source === "live") ? "statsPartial"
        : sources.some((source) => source === "saved") ? "statsSaved" : "statsUnavailable";
      status.textContent = t(key);
      status.classList.toggle("is-live", key === "statsLive");
      status.classList.toggle("is-fallback", key === "statsSaved" || key === "statsPartial");
    }
    grid.innerHTML = appList.map((app, index) => {
      const stats = state.downloadStats[app.id] || { source: "loading" };
      const hasCount = Number.isFinite(stats.totalDownloads);
      const statusText = stats.source === "live" ? t("statsLive") : stats.source === "saved" ? t("statsSaved") : stats.source === "error" ? t("statsUnavailable") : t("statsChecking");
      const statusClass = stats.source === "live" ? "is-live" : stats.source === "saved" || stats.source === "error" ? "is-fallback" : "";
      const meta = hasCount
        ? (state.lang === "ar" ? `${formatCount(stats.apkAssetCount)} ملف APK · ${formatCount(stats.releaseCount)} إصدار عام` : `${formatCount(stats.apkAssetCount)} APK assets · ${formatCount(stats.releaseCount)} public releases`)
        : t(stats.source === "error" ? "statsNoData" : "statsChecking");
      const repoUrl = `https://github.com/magen-gillan/${encodeURIComponent(app.repo)}`;
      return `<article class="download-stat-card reveal" style="--app-accent:${esc(app.accent)}">
        <div class="download-stat-top"><span class="mono-label">${t("appNumber")} / 0${index + 1}</span><span class="download-stat-source ${statusClass}">${esc(statusText)}</span></div>
        <h3>${esc(app.name)}</h3>
        <div class="download-stat-value" aria-label="${esc(hasCount ? formatCount(stats.totalDownloads) : t("statsNoData"))}">${esc(hasCount ? formatCount(stats.totalDownloads) : "—")}</div>
        <p class="download-stat-label">${esc(t("statsDownloadLabel"))}</p>
        <div class="download-stat-meta">${esc(meta)}</div>
        <a class="download-stat-repo" href="${esc(repoUrl)}" target="_blank" rel="noreferrer">${esc(t("statsOpenRepo"))} <span aria-hidden="true">↗</span></a>
      </article>`;
    }).join("");
    observeReveals(grid);
  }

  function renderDialog(app) {
    const rel = currentRelease(app);
    const features = app.features[state.lang].map((item) => `<li>${esc(item)}</li>`).join("");
    const content = $("#dialogContent");
    content.innerHTML = `<span class="dialog-topline">${esc(app.category[state.lang])} · ${esc(rel.tag_name || app.versionFallback)}</span>
      <h2 class="dialog-title" id="dialogTitle">${esc(app.name)}</h2>
      <p class="dialog-description">${esc(app.description[state.lang])}</p>
      <div class="dialog-columns"><div><span class="dialog-features-title">${esc(t("detailHighlights"))}</span><ul class="dialog-feature-list">${features}</ul></div>
        <div class="dialog-media" role="img" aria-label="${esc(app.mediaAlt[state.lang])}"><img src="${esc(app.mediaPath)}" alt="${esc(app.mediaAlt[state.lang])}"><span>${esc(t("screenshotsPendingLong"))}</span></div></div>
      <div class="dialog-stack">${esc(t("techLabel"))} · ${esc(app.stack)}</div>
      <div class="dialog-actions"><a class="download-button" href="${esc(secureHttpsUrl(rel.asset?.browser_download_url || app.apkFallback, app.apkFallback))}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg>${esc(t("downloadLatest"))}</a><a class="source-button" href="https://github.com/magen-gillan/${encodeURIComponent(app.repo)}" target="_blank" rel="noreferrer">${esc(t("sourceCode"))} ↗</a><a class="source-button" href="${esc(secureHttpsUrl(rel.html_url, app.releaseFallback))}" target="_blank" rel="noreferrer">${esc(t("allReleases"))} ↗</a></div>`;
  }

  function openDetails(appId) {
    const app = appList.find((item) => item.id === appId);
    if (!app) return;
    state.dialogId = appId;
    renderDialog(app);
    const dialog = $("#appDialog");
    if (!dialog.open) dialog.showModal();
  }

  async function fetchJson(url) {
    const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" }, mode: "cors" });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    return response.json();
  }
  function selectApk(assets) {
    const apks = (assets || []).filter((asset) => /\.apk$/i.test(asset.name || "") && !/\.sha256$/i.test(asset.name || ""));
    return apks.find((asset) => /arm64-v8a/i.test(asset.name) && !/^latest\.apk$/i.test(asset.name))
      || apks.find((asset) => /arm64/i.test(asset.name) && !/^latest\.apk$/i.test(asset.name))
      || apks.find((asset) => /^latest\.apk$/i.test(asset.name))
      || apks[0] || null;
  }
  async function fetchAllReleases(app) {
    const releases = [];
    for (let page = 1; ; page += 1) {
      const batch = await fetchJson(`https://api.github.com/repos/magen-gillan/${encodeURIComponent(app.repo)}/releases?per_page=100&page=${page}`);
      if (!Array.isArray(batch)) throw new Error(`Unexpected releases response for ${app.repo}`);
      releases.push(...batch);
      if (batch.length < 100) return releases;
    }
  }
  async function loadRepositoryData(app) {
    const freshRelease = readAppCache(app.id, "release");
    const freshStats = readAppCache(app.id, "downloads");
    const savedRelease = freshRelease || readAnyAppCache(app.id, "release");
    const savedStats = freshStats || readAnyAppCache(app.id, "downloads");
    if (savedRelease) state.releases[app.id] = savedRelease;
    state.downloadStats[app.id] = savedStats ? { ...savedStats, source: "saved" } : { source: "loading" };
    renderApps();
    renderDownloadStats();
    if (freshRelease && freshStats) { state.releaseCacheHits += 1; return; }
    try {
      const releases = await fetchAllReleases(app);
      const published = releases.filter((release) => !release.draft);
      const latest = published.find((release) => !release.prerelease) || published[0];
      const asset = latest && selectApk(latest.assets);
      if (!latest || !asset) throw new Error(`No published APK release for ${app.repo}`);
      const releaseData = {
        tag_name: latest.tag_name || app.versionFallback,
        html_url: latest.html_url || app.releaseFallback,
        published_at: latest.published_at || "",
        asset: { name: asset.name, browser_download_url: asset.browser_download_url }
      };
      let totalDownloads = 0;
      let apkAssetCount = 0;
      for (const release of published) {
        for (const releaseAsset of release.assets || []) {
          if (/\.apk$/i.test(releaseAsset.name || "")) {
            apkAssetCount += 1;
            const count = Number(releaseAsset.download_count);
            if (Number.isFinite(count) && count > 0) totalDownloads += count;
          }
        }
      }
      const statsData = { totalDownloads, apkAssetCount, releaseCount: published.length };
      state.releases[app.id] = releaseData;
      state.downloadStats[app.id] = { ...statsData, source: "live" };
      setAppCache(app.id, "release", releaseData);
      setAppCache(app.id, "downloads", statsData);
      renderApps();
      renderDownloadStats();
      if (state.dialogId === app.id) renderDialog(app);
    } catch (error) {
      if (!state.downloadStats[app.id] || state.downloadStats[app.id].source === "loading") state.downloadStats[app.id] = { source: "error" };
      renderDownloadStats();
      throw error;
    }
  }
  async function loadGitHubData() {
    const results = await Promise.allSettled(appList.map((app) => loadRepositoryData(app)));
    state.releaseFailures = results.filter((item) => item.status === "rejected").length;
    const status = $("#releaseStatus");
    if (status) {
      const fallback = state.releaseFailures !== 0 || state.releaseCacheHits > 0;
      status.textContent = t(fallback ? "releaseFallback" : "releaseLive");
      status.classList.toggle("is-live", !fallback);
      status.classList.toggle("is-fallback", fallback);
      status.title = state.releaseFailures ? t("apiUnavailable") : "";
    }
  }

  function applyLanguage(lang, persist = true) {
    state.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach((node) => {
      const value = t(node.dataset.i18n);
      if (value) node.textContent = value;
    });
    const releaseStatus = $("#releaseStatus");
    if (releaseStatus && state.releaseFailures !== null) {
      const fallback = state.releaseFailures !== 0 || state.releaseCacheHits > 0;
      releaseStatus.textContent = t(fallback ? "releaseFallback" : "releaseLive");
      releaseStatus.classList.toggle("is-live", !fallback);
      releaseStatus.classList.toggle("is-fallback", fallback);
      releaseStatus.title = state.releaseFailures ? t("apiUnavailable") : "";
    }
    const languageButton = $("#languageToggle");
    if (languageButton) { languageButton.innerHTML = `${esc(t("languageSwitch"))} <span aria-hidden="true">↗</span>`; languageButton.setAttribute("aria-label", t("languageAria")); }
    const themeButton = $("#modeToggle");
    if (themeButton) { themeButton.setAttribute("aria-label", state.theme === "dark" ? t("themeLight") : t("themeDark")); themeButton.title = themeButton.getAttribute("aria-label"); }
    const menu = $("#menuToggle");
    if (menu) menu.setAttribute("aria-label", menu.getAttribute("aria-expanded") === "true" ? t("menuClose") : t("menuOpen"));
    const close = $("#dialogClose");
    if (close) close.setAttribute("aria-label", t("closeDetails"));
    const alishaButton = $("#alishaInteract");
    if (alishaButton) alishaButton.setAttribute("aria-label", alishaButton.getAttribute("aria-expanded") === "true" ? t("alishaClose") : t("alishaOpen"));
    document.title = state.lang === "ar" ? "Magen Gillan — تطبيقات أندرويد مستقلة" : "Magen Gillan — Independent Android Apps";
    const desc = $("meta[name='description']");
    if (desc) desc.content = state.lang === "ar" ? "Magen Gillan — تطبيقات أندرويد مفيدة بعناية. تعرّف إلى أليشا وتطبيقات Magen Player وDownload وAudio وWallpaper." : "Magen Gillan — independent Android apps, thoughtfully built. Meet Alisha and explore Magen Player, Download, Audio and Wallpaper.";
    renderApps();
    renderVisualGallery();
    renderDownloadStats();
    if (state.dialogId) { const app = appList.find((item) => item.id === state.dialogId); if (app) renderDialog(app); }
    if (persist) { try { localStorage.setItem("magen-lang", state.lang); } catch { /* ignore unavailable storage */ } }
  }
  function applyTheme(theme, persist = true) {
    state.theme = theme === "light" ? "light" : "dark";
    document.body.classList.toggle("light", state.theme === "light");
    document.documentElement.style.colorScheme = state.theme;
    const button = $("#modeToggle");
    if (button) { button.setAttribute("aria-label", state.theme === "dark" ? t("themeLight") : t("themeDark")); button.title = button.getAttribute("aria-label"); }
    if (persist) { try { localStorage.setItem("magen-theme", state.theme); } catch { /* ignore unavailable storage */ } }
  }
  function observeReveals(root = document) {
    const items = $$(".reveal:not([data-observed])", root);
    if (!items.length) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible")); return;
    }
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); instance.unobserve(entry.target); } });
    }, { threshold: .08, rootMargin: "0px 0px -28px 0px" });
    items.forEach((item, index) => { item.dataset.observed = "true"; item.style.transitionDelay = `${Math.min(index % 2, 1) * 80}ms`; observer.observe(item); });
  }
  function configureAlisha() {
    const video = $("#alishaVideo");
    const source = $("#alishaSource");
    if (!video || !source) return;
    const localPath = "assets/alisha-welcome.mp4";
    const isGitHubPages = location.hostname.endsWith("github.io");
    let usedFallback = isGitHubPages;
    const useLocal = () => {
      if (usedFallback) return;
      usedFallback = true;
      source.src = localPath;
      video.load();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.play().catch(() => {});
    };
    if (!isGitHubPages) source.src = "/manus-storage/alisha_welcome_28a53648.mp4";
    video.addEventListener("error", useLocal);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.autoplay = false;
      video.removeAttribute("autoplay");
      video.pause();
    } else {
      video.play().catch(() => {});
    }
    video.load();
  }

  function detectBrowserLanguage() {
    const languages = [navigator.language, ...(Array.isArray(navigator.languages) ? navigator.languages : [])].filter(Boolean);
    const preferred = languages.find((language) => /^(ar|en)(?:[-_]|$)/i.test(language));
    return preferred && /^ar(?:[-_]|$)/i.test(preferred) ? "ar" : "en";
  }
  function initialLanguage() {
    const early = window.MAGEN_INITIAL_LANGUAGE;
    if (early === "ar" || early === "en") return early;
    try {
      const saved = localStorage.getItem("magen-lang");
      if (saved === "ar" || saved === "en") return saved;
    } catch { /* browser storage may be unavailable */ }
    return detectBrowserLanguage();
  }

  function init() {
    document.documentElement.classList.add("has-motion");
    state.lang = initialLanguage();
    try { state.theme = localStorage.getItem("magen-theme") || "dark"; } catch { state.theme = "dark"; }
    applyTheme(state.theme, false);
    applyLanguage(state.lang, false);
    renderApps();
    renderDownloadStats();
    observeReveals();
    configureAlisha();
    const alishaButton = $("#alishaInteract");
    const alishaMessage = $("#alishaMessage");
    if (alishaButton && alishaMessage) {
      alishaButton.addEventListener("click", () => {
        const open = alishaButton.getAttribute("aria-expanded") !== "true";
        alishaButton.setAttribute("aria-expanded", String(open));
        alishaButton.setAttribute("aria-label", t(open ? "alishaClose" : "alishaOpen"));
        alishaMessage.hidden = !open;
      });
      $("#alishaAction")?.addEventListener("click", () => {
        alishaMessage.hidden = true;
        alishaButton.setAttribute("aria-expanded", "false");
        alishaButton.setAttribute("aria-label", t("alishaOpen"));
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !alishaMessage.hidden) {
          alishaMessage.hidden = true;
          alishaButton.setAttribute("aria-expanded", "false");
          alishaButton.setAttribute("aria-label", t("alishaOpen"));
          alishaButton.focus();
        }
      });
    }
    $("#yearNow").textContent = String(new Date().getFullYear());
    $("#languageToggle").addEventListener("click", () => applyLanguage(state.lang === "en" ? "ar" : "en"));
    $("#modeToggle").addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
    $("#menuToggle").addEventListener("click", (event) => {
      const button = event.currentTarget;
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
      $("#primaryNav").classList.toggle("is-open", open);
    });
    $$("#primaryNav a").forEach((link) => link.addEventListener("click", () => {
      $("#primaryNav").classList.remove("is-open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
      $("#menuToggle").setAttribute("aria-label", t("menuOpen"));
    }));
    $("#appsGrid").addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-app]");
      if (button) openDetails(button.dataset.openApp);
    });
    $("#dialogClose").addEventListener("click", () => $("#appDialog").close());
    $("#appDialog").addEventListener("click", (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });
    loadGitHubData();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();
