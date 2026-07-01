/* =========================================================
   main.js — behavior + rendering from data.js.
   You shouldn't need to edit this to change content.
   ========================================================= */

   const $ = (s, el = document) => el.querySelector(s);
   const $$ = (s, el = document) => [...el.querySelectorAll(s)];
   const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
   
   /* ---------- populate identity ---------- */
   document.title = `${SITE.name} — ${SITE.role}`;
   $("#hero-name").innerHTML = SITE.name.replace(" ", "<br>");
   $("#hero-role").textContent = SITE.tools;
   $("#hero-lede").textContent = SITE.tagline;
   $("#eyebrow-role").textContent = `// ${SITE.role.toLowerCase()}`;
   $$("[data-email]").forEach(a => { a.href = `mailto:${SITE.email}`; if (a.dataset.email === "text") a.textContent = SITE.email; });
   $$("[data-linkedin]").forEach(a => a.href = SITE.linkedin);
   $$("[data-github]").forEach(a => a.href = SITE.github);
   $("#footer-loc").textContent = `${SITE.name} · ${SITE.location}`;
   $("#year").textContent = "© " + new Date().getFullYear();
   
   /* ---------- hero terminal: type query, run, filter grid ---------- */
   (function terminal() {
     const queryEl = $("#term-query");
     const grid = $("#dots");
     const statusEl = $("#term-status-text");
     const replayBtn = $("#replay");
     const TOTAL = 200, KEEP = 12;
     const KEYWORDS = /\b(SELECT|FROM|WHERE|AND)\b/g;
   
     let dots = [];
     function buildGrid() {
       grid.innerHTML = "";
       dots = [];
       const frag = document.createDocumentFragment();
       for (let i = 0; i < TOTAL; i++) {
         const d = document.createElement("div");
         d.className = "dot";
         frag.appendChild(d);
         dots.push(d);
       }
       grid.appendChild(frag);
     }
   
     function highlight(text) {
       return text.replace(KEYWORDS, '<span class="kw">$1</span>');
     }
   
     function runFilter() {
       const keep = new Set();
       while (keep.size < KEEP) keep.add(Math.floor(Math.random() * TOTAL));
       dots.forEach((d, i) => d.classList.add(keep.has(i) ? "on" : "dim"));
       statusEl.innerHTML = `<b>${KEEP} rows</b> returned · 95%+ filtered`;
     }
   
     function play() {
       buildGrid();
       statusEl.textContent = "300+ rows loaded";
       const full = HERO_QUERY.join("\n");
   
       if (reduceMotion) {
         queryEl.innerHTML = highlight(full);
         runFilter();
         return;
       }
   
       let i = 0;
       queryEl.innerHTML = '<span class="cursor"></span>';
       const t = setInterval(() => {
         i++;
         queryEl.innerHTML = highlight(full.slice(0, i)) + '<span class="cursor"></span>';
         if (i >= full.length) {
           clearInterval(t);
           setTimeout(() => {
             queryEl.innerHTML = highlight(full);
             runFilter();
           }, 450);
         }
       }, 26);
     }
   
     replayBtn.addEventListener("click", play);
     play();
   })();
   
   /* ---------- stats counters ---------- */
   (function stats() {
     const row = $("#stat-row");
     STATS.forEach(s => {
       const el = document.createElement("div");
       el.className = "stat reveal";
       el.innerHTML = `<div class="num" data-target="${s.value}" data-suffix="${s.suffix}" data-dec="${s.decimals || 0}">0${s.suffix}</div>
         <div class="lbl">${s.label}</div><div class="note">${s.note}</div>`;
       row.appendChild(el);
     });
   
     const animate = (numEl) => {
       const target = parseFloat(numEl.dataset.target);
       const suffix = numEl.dataset.suffix;
       const dec = parseInt(numEl.dataset.dec, 10);
       if (reduceMotion) { numEl.textContent = target.toFixed(dec) + suffix; return; }
       const dur = 1100, start = performance.now();
       function tick(now) {
         const p = Math.min((now - start) / dur, 1);
         const eased = 1 - Math.pow(1 - p, 3);
         numEl.textContent = (target * eased).toFixed(dec) + suffix;
         if (p < 1) requestAnimationFrame(tick);
       }
       requestAnimationFrame(tick);
     };
   
     const io = new IntersectionObserver(entries => {
       entries.forEach(en => {
         if (en.isIntersecting) { animate($(".num", en.target)); io.unobserve(en.target); }
       });
     }, { threshold: 0.4 });
     $$(".stat", row).forEach(s => io.observe(s));
   })();
   
   /* ---------- skills ---------- */
   (function skills() {
     const grid = $("#skill-grid");
     SKILLS.forEach(g => {
       const card = document.createElement("div");
       card.className = "skill-card reveal" + (g.learning ? " learning" : "");
       card.innerHTML = `<h3>${g.group}</h3>
         <div class="chips">${g.items.map(i => `<span class="chip">${i}</span>`).join("")}</div>`;
       grid.appendChild(card);
     });
   })();
   
   /* ---------- projects ---------- */
   (function projects() {
     const holder = $("#project-list");
     PROJECTS.forEach((p, idx) => {
       const link = p.link || (idx === 0 && SITE.chelseaRepo ? SITE.chelseaRepo : null);
       const card = document.createElement("article");
       card.className = "proj reveal";
       card.innerHTML = `
         <h3>${p.title}</h3>
         <div class="stack">${p.stack}</div>
         <p class="desc">${p.summary}</p>
         ${p.status.length ? `<div class="pills">${p.status.map(s =>
           `<span class="pill ${s.done ? "done" : "next"}">${s.label}</span>`).join("")}</div>` : ""}
         <div class="proj-actions">
           ${p.details ? `<button class="toggle-details" aria-expanded="false">Read the case study ↓</button>` : ""}
           ${link ? `<a href="${link}" target="_blank" rel="noopener">View on GitHub →</a>` : ""}
         </div>
         ${p.details ? `<div class="case"><div class="case-inner">
           <div class="case-block"><h4>The question</h4><p>${p.details.question}</p></div>
           <div class="case-block"><h4>The approach</h4><p>${p.details.approach}</p></div>
           <div class="case-block"><h4>The insight</h4><p>${p.details.insight}</p></div>
         </div></div>` : ""}
         ${p.chart ? `<div class="chart-demo">
           <div class="demo-label"><b>Interactive demo</b> — the side-by-side KPI comparison this pipeline is built to feed (sample data). Toggle candidates:</div>
           <div class="chart-flex">
             <div class="player-toggles" id="player-toggles"></div>
             <div class="chart-holder"><canvas id="kpi-radar" aria-label="Sample KPI radar comparison chart" role="img"></canvas></div>
           </div>
         </div>` : ""}
       `;
       holder.appendChild(card);
   
       const btn = $(".toggle-details", card);
       if (btn) {
         btn.addEventListener("click", () => {
           const panel = $(".case", card);
           const open = panel.classList.toggle("open");
           btn.setAttribute("aria-expanded", open);
           btn.textContent = open ? "Hide the case study ↑" : "Read the case study ↓";
         });
       }
     });
   })();
   
   /* ---------- experience ---------- */
   (function experience() {
     const holder = $("#xp-list");
     EXPERIENCE.forEach(x => {
       const el = document.createElement("div");
       el.className = "xp-item reveal";
       el.innerHTML = `<h3>${x.title}</h3><div class="meta">${x.meta}</div>
         <ul>${x.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`;
       holder.appendChild(el);
     });
   })();
   
   /* ---------- credentials ---------- */
   (function credentials() {
     const holder = $("#cred-list");
     CREDENTIALS.forEach(c => {
       const el = document.createElement("div");
       el.className = "mini reveal";
       el.innerHTML = `<h3>${c.title}</h3><div class="meta">${c.meta}</div><p>${c.body}</p>`;
       holder.appendChild(el);
     });
   })();
   
   /* ---------- scroll reveal ---------- */
   (function reveal() {
     const els = $$(".reveal");
     if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
     const io = new IntersectionObserver(entries => {
       entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
     }, { threshold: 0.12 });
     els.forEach(e => io.observe(e));
   })();
   