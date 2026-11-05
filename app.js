const I18N={en:{navProjects:'Projects',navAbout:'About',eyebrow:'Independent maker · software & digital worlds',heroTitle:'Things I’m building<br><em>right now.</em>',heroLede:'A living index of experiments, apps, and ideas by Magen Gillan — collected from GitHub and made easy to explore.',heroMeta:'Updated from source repositories',profileKicker:'THE MAKER',profileBio:'Building playful software, useful tools, and alternate digital spaces.',viewGithub:'View GitHub profile',avatarNote:'Tap ✦ to change this avatar. It is saved on this device.',selectedWork:'SELECTED WORK',footerText:'Built from open source, one project at a time.',source:'Source repository',site:'Visit site',latest:'Latest release',stack:'Built with',updated:'Last updated',private:'Private repository',public:'Public repository',download:'Download latest',release:'View release',noRelease:'No public release yet',files:'Project signals',featBadge:'Featured project',featSync:'read live from the repository',mainFeatures:'Main features',releasedOn:'Released',platform:'Platform',screenshots:'Screenshots',releaseFiles:'Release files',otherTitle:'More from the atlas.',otherNote:'Open a card for in-app screenshots, the source, the stack, and every release file.',syncNote:'App names, versions, screenshots and download links are read live from the GitHub repositories — no manual edits needed.',beta:'beta',viewAll:'View all releases',downloadFor:'Download'},ar:{navProjects:'المشاريع',navAbout:'نبذة',eyebrow:'صانع مستقل · برمجيات وعوالم رقمية',heroTitle:'أشياء أبنيها<br><em>الآن.</em>',heroLede:'فهرس حي لتجاربي وتطبيقاتي وأفكاري — مجمعة من GitHub ومصممة لتكون سهلة الاستكشاف.',heroMeta:'محدّث من المستودعات الأصلية',profileKicker:'صانع المشاريع',profileBio:'أبني برمجيات ممتعة وأدوات مفيدة ومساحات رقمية مختلفة.',viewGithub:'زيارة ملف GitHub',avatarNote:'اضغط ✦ لتغيير الصورة. تُحفظ على هذا الجهاز.',selectedWork:'أعمال مختارة',footerText:'مبني من المصدر المفتوح، مشروعًا بعد مشروع.',source:'المستودع المصدر',site:'زيارة الموقع',latest:'آخر إصدار',stack:'التقنيات',updated:'آخر تحديث',private:'مستودع خاص',public:'مستودع عام',download:'تحميل آخر إصدار',release:'عرض الإصدار',noRelease:'لا يوجد إصدار عام بعد',files:'مؤشرات المشروع',featBadge:'المشروع الرئيسي',featSync:'يُقرأ مباشرة من المستودع',mainFeatures:'المزايا الرئيسية',releasedOn:'صدر في',platform:'المنصات',screenshots:'لقطات الشاشة',releaseFiles:'ملفات الإصدار',otherTitle:'المزيد من الأطلس.',otherNote:'افتح أي بطاقة لرؤية لقطات من داخل التطبيق والمصدر والتقنيات وكل ملفات الإصدار.',syncNote:'أسماء التطبيقات والإصدارات ولقطات الشاشة وروابط التحميل تُقرأ مباشرة من مستودعات GitHub دون أي تعديل يدوي.',beta:'تجريبي',viewAll:'كل الإصدارات',downloadFor:'تحميل'}};
let lang=localStorage.getItem('atlas-lang')||'en';
const $=s=>document.querySelector(s); const t=k=>I18N[lang][k]||k;

/* ---------- live data layer (read from the GitHub repositories) ---------- */
const GH='https://api.github.com/repos/magen-gillan/';
const RAW=(p,path)=>`https://raw.githubusercontent.com/magen-gillan/${p.id}/main/${path}`;
const TTL=30*60*1000;
const fmtMB=b=>!b?'':b>=1048576?(b/1048576).toFixed(1)+' MB':Math.round(b/1024)+' KB';
const fmtDate=d=>{try{return new Date(d).toLocaleDateString(lang==='ar'?'ar':'en',{year:'numeric',month:'short',day:'numeric'})}catch(e){return d}};
function readLive(p){try{const all=JSON.parse(localStorage.getItem('atlas-live')||'{}');const v=all[p.id];if(v&&Date.now()-v.t<TTL)return v}catch(e){}return null}
function saveLive(p,v){try{const all=JSON.parse(localStorage.getItem('atlas-live')||'{}');all[p.id]={t:Date.now(),name:v.name,rel:v.rel,shots:v.shots};localStorage.setItem('atlas-live',JSON.stringify(all))}catch(e){}}
function parseName(p,txt){if(!txt)return null;if(p.config.type==='metadata'){const m=txt.match(/title:\s*["']([^"']+)["']/);return m?m[1].split(/\s+—\s+/)[0].trim():null}const m=txt.match(/<string[^>]*\sname="app_name"[^>]*>([^<]+)<\/string>/);return m?m[1].replace(/\\'/g,"'").trim():null}
async function syncProject(p){
  const c=readLive(p);if(c){p.live=c;return}
  const out={};
  await Promise.all([
    fetch(RAW(p,p.config.path)).then(r=>r.ok?r.text():null).then(txt=>{const n=parseName(p,txt);if(n)out.name=n}).catch(()=>{}),
    fetch(GH+p.id+'/releases?per_page=1').then(r=>r.ok?r.json():null).then(list=>{const r=Array.isArray(list)?list[0]:null;if(r&&r.tag_name)out.rel={tag:r.tag_name,date:r.published_at,pre:!!r.prerelease,assets:(r.assets||[]).filter(a=>/\.apk$/i.test(a.name)).map(a=>({name:a.name,size:a.size,url:a.browser_download_url}))}}).catch(()=>{}),
    p.shots&&p.shots[0]?fetch(GH+p.id+'/contents/'+p.shots[0]).then(r=>r.ok?r.json():null).then(list=>{if(Array.isArray(list)){const imgs=list.filter(f=>/\.(png|jpe?g|webp|gif)$/i.test(f.name)&&f.download_url).sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));if(imgs.length)out.shots=imgs.map(f=>({name:f.name,size:f.size,url:f.download_url}))}}).catch(()=>{}):Promise.resolve()
  ]);
  p.live=out;if(out.name||out.rel||out.shots)saveLive(p,out);
}
async function hydrateLive(){await Promise.all(PROJECTS.map(syncProject));render();renderFeatured()}
const nameOf=p=>(p.live&&p.live.name)||p.name;
const verOf=p=>(p.live&&p.live.rel)?p.live.rel.tag:(p.release||'');
function relOf(p){if(p.live&&p.live.rel)return p.live.rel;const assets=p.download?[{name:p.downloadLabel||'APK',size:0,url:p.download}]:[];return p.release?{tag:p.release,assets:assets,date:null,pre:false}:null}
function shotsOf(p){if(p.live&&p.live.shots&&p.live.shots.length)return p.live.shots;const f=[];if(p.shotFallback)f.push({name:'shot',size:0,url:RAW(p,p.shotFallback)});if(p.featured&&p.heroShotM)f.push({name:'mobile',size:0,url:RAW(p,p.heroShotM)});return f}
function visualOf(p){const s=shotsOf(p);if(s.length)return{url:s[0].url,mode:'photo'};if(p.icon)return{url:RAW(p,p.icon),mode:'icon'};return{url:null,mode:'mono'}}
const monoOf=p=>nameOf(p).split(' ').map(w=>w[0]||'').join('').slice(0,2).toUpperCase();
function shotFail(img,mono){const d=img.parentElement;if(!d)return;d.className='shot mono';img.remove();d.insertAdjacentHTML('afterbegin',`<span>${mono}</span>`)}

/* ---------- rendering ---------- */
function setLanguage(next){lang=next;localStorage.setItem('atlas-lang',lang);document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.classList.toggle('rtl',lang==='ar');$('#langToggle').textContent=lang==='ar'?'EN':'عربي';document.querySelectorAll('[data-i18n]').forEach(e=>e.innerHTML=t(e.dataset.i18n));render();renderFeatured();}
function renderFeatured(){
  const p=PROJECTS.find(x=>x.featured),el=$('#featured');if(!p||!el)return;
  const rel=relOf(p),ver=verOf(p),shots=shotsOf(p),asset=rel&&rel.assets[0];
  const desk=shots[0]?shots[0].url:'',mob=shots[1]?shots[1].url:'';
  const feats=lang==='ar'?p.featuresAr:p.features,host=p.site?p.site.replace(/^https?:\/\//,''):'';
  el.innerHTML=`
  <div class="feat-head"><p class="eyebrow"><span class="pulse"></span><span>${t('featBadge')}</span><span class="feat-sync">${t('featSync')}</span></p></div>
  <div class="feat-card">
    <div class="feat-info">
      <p class="feat-kind">${lang==='ar'?p.kindAr:p.kind}</p>
      <h2 class="feat-name">${nameOf(p)}</h2>
      <p class="feat-desc">${lang==='ar'?p.descAr:p.desc}</p>
      <p class="feat-flabel">${t('mainFeatures')}</p>
      <ul class="feat-features">${(feats||[]).map(f=>`<li>${f}</li>`).join('')}</ul>
      <div class="feat-actions">
        ${p.site?`<a class="action" href="${p.site}" target="_blank" rel="noreferrer">${t('site')} ↗</a>`:''}
        ${asset?`<a class="action alt" href="${asset.url}" target="_blank" rel="noreferrer">↓ ${t('downloadFor')}${asset.size?' · '+fmtMB(asset.size):''}</a>`:''}
        <a class="action ghost" href="${p.repo}" target="_blank" rel="noreferrer">${t('source')} ↗</a>
      </div>
      <dl class="feat-stats">
        <div><dt>${t('latest')}</dt><dd>${ver||t('noRelease')}${rel&&rel.pre?` <i class="beta">${t('beta')}</i>`:''}</dd></div>
        <div><dt>${t('releasedOn')}</dt><dd>${rel&&rel.date?fmtDate(rel.date):(p.updated?fmtDate(p.updated):'—')}</dd></div>
        <div><dt>${t('platform')}</dt><dd>${lang==='ar'?p.platformAr:p.platform}</dd></div>
      </dl>
    </div>
    <figure class="feat-visual" style="background-image:url('${RAW(p,p.heroBg)}')">
      ${desk?`<div class="feat-frame"><span class="frame-bar"><i></i><i></i><i></i><b>${host}</b></span><img src="${desk}" alt="${nameOf(p)} — ${t('screenshots')}" loading="lazy"></div>`:''}
      ${mob?`<img class="feat-phone" src="${mob}" alt="${nameOf(p)} — ${t('screenshots')}" loading="lazy">`:''}
    </figure>
  </div>
  <p class="sync-note">${t('syncNote')}</p>`;
}
function card(p,i,total){const v=visualOf(p);return `<article class="project-card ${i<2?'big':''}" data-id="${p.id}">
  <div class="shot ${v.mode}">${v.url?`<img src="${v.url}" alt="${nameOf(p)} — ${t('screenshots')}" loading="lazy" onerror="shotFail(this,'${monoOf(p)}')">`:''}${v.mode==='mono'?`<span>${monoOf(p)}</span>`:''}</div>
  <div class="card-body">
    <div class="card-top"><span class="project-number">0${i+1} / ${String(total).padStart(2,'0')}</span><span class="project-type">${lang==='ar'?p.kindAr:p.kind}</span></div>
    <div><h3>${nameOf(p)}</h3><p class="project-desc">${lang==='ar'?p.descAr:p.desc}</p></div>
    <div class="card-bottom"><span class="project-lang">${p.lang}${verOf(p)?' · '+verOf(p):''}${p.private?' · '+t('private'):''}</span><span class="arrow">↗</span></div>
  </div></article>`}
function render(){const others=PROJECTS.filter(p=>!p.featured);$('#projectGrid').innerHTML=others.map((p,i)=>card(p,i,others.length)).join('');document.querySelectorAll('.project-card').forEach(c=>c.addEventListener('click',()=>openProject(c.dataset.id)));$('.count').textContent=String(others.length).padStart(2,'0');}
function openProject(id){const p=PROJECTS.find(x=>x.id===id);if(!p)return;
  const rel=relOf(p),ver=verOf(p),shots=shotsOf(p).slice(0,8),asset=rel&&rel.assets[0];
  $('#dialogContent').innerHTML=`
  <p class="dialog-kicker">PROJECT / ${String(PROJECTS.indexOf(p)+1).padStart(2,'0')}</p>
  <h2 class="dialog-title">${nameOf(p)}</h2>
  <p class="dialog-desc">${lang==='ar'?p.descAr:p.desc}</p>
  ${shots.length?`<div class="dialog-gallery">${shots.map(s=>`<a href="${s.url}" target="_blank" rel="noreferrer" title="${s.name}"><img src="${s.url}" loading="lazy" alt="${nameOf(p)}"></a>`).join('')}</div>`:''}
  <div class="detail-grid">
    <div><div class="detail-label">${t('stack')}</div><div class="detail-value">${p.lang}</div></div>
    <div><div class="detail-label">${t('updated')}</div><div class="detail-value">${fmtDate((rel&&rel.date)||p.updated)}</div></div>
    <div><div class="detail-label">${t('latest')}</div><div class="detail-value">${ver||t('noRelease')}${rel&&rel.pre?` <i class="beta">${t('beta')}</i>`:''}</div></div>
    <div><div class="detail-label">${t('files')}</div><div class="file-list">${p.files.map(f=>`<span class="file-pill">${f}</span>`).join('')}</div></div>
  </div>
  ${rel&&rel.assets.length?`<div class="dialog-assets"><div class="detail-label" style="margin:26px 0 10px">${t('releaseFiles')} · ${rel.tag}</div>${rel.assets.map(a=>`<a class="asset" href="${a.url}" target="_blank" rel="noreferrer"><span class="asset-name">${a.name}</span><span class="asset-size">${fmtMB(a.size)}</span><span class="asset-dl">↓ ${t('downloadFor')}</span></a>`).join('')}</div>`:''}
  <div class="dialog-actions">
    ${p.site?`<a class="action" href="${p.site}" target="_blank" rel="noreferrer">${t('site')} ↗</a>`:''}
    <a class="action" href="${p.repo}" target="_blank" rel="noreferrer">${t('source')} ↗</a>
    ${asset?`<a class="action alt" href="${asset.url}" target="_blank" rel="noreferrer">↓ ${asset.name}</a>`:''}
    <a class="action ghost" href="${p.repo}/releases" target="_blank" rel="noreferrer">${t('viewAll')} ↗</a>
  </div>`;
  $('#projectDialog').showModal();}

/* ---------- chrome: dialog, toggles, avatar ---------- */
$('#dialogClose').addEventListener('click',()=>$('#projectDialog').close());$('#projectDialog').addEventListener('click',e=>{if(e.target.id==='projectDialog')$('#projectDialog').close()});$('#langToggle').addEventListener('click',()=>setLanguage(lang==='en'?'ar':'en'));$('#themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('atlas-theme',document.body.classList.contains('dark')?'dark':'light')});
const storedAvatar=localStorage.getItem('atlas-avatar');if(storedAvatar)$('#avatar').src=storedAvatar;$('#avatarInput').addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{localStorage.setItem('atlas-avatar',reader.result);$('#avatar').src=reader.result};reader.readAsDataURL(file)});if(localStorage.getItem('atlas-theme')==='dark')document.body.classList.add('dark');setLanguage(lang);
hydrateLive();
