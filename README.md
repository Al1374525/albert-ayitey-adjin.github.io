# Albert Ayitey-Adjin — Portfolio

Personal portfolio site. Data / Business Analyst — SQL · Python · Excel.

**Live:** _add your GitHub Pages link here after deploying_

## Architecture

Zero build step. Static files, deployable anywhere (GitHub Pages, Vercel, Netlify).

```
├── index.html        # structure only — almost never edit
├── css/
│   └── styles.css    # design tokens + components
└── js/
    ├── data.js       # ★ ALL content lives here — edit this file
    ├── main.js       # rendering + interactions (terminal, counters, reveals)
    └── charts.js     # interactive KPI radar (Chart.js) — self-contained
```

## Updating the site

Edit **`js/data.js`** only:

| Want to change… | Edit |
|---|---|
| Name, tagline, email, links | `SITE` |
| Impact numbers | `STATS` |
| Skills / "currently learning" | `SKILLS` |
| Projects, status pills, case studies | `PROJECTS` |
| Radar chart demo data | `RADAR` |
| Jobs / bullets | `EXPERIENCE` |
| Degree / certs | `CREDENTIALS` |

When the Chelsea repo goes public, paste its URL into `SITE.chelseaRepo` —
the "View on GitHub" link appears automatically.

To remove the chart entirely: delete `js/charts.js` and its `<script>` tag,
and set `chart: false` on the project in `data.js`.

## Deploy (GitHub Pages)

1. Push these files to the repo root.
2. Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.
3. Live in ~2 minutes at the URL shown.

## Interactions

- **Hero terminal** — types the project's real SQL filter, "runs" it, and lights the
  matching rows in a 200-dot grid (300+ → 15). Replayable.
- **Impact counters** — animate on scroll.
- **Case studies** — expandable Question / Approach / Insight panels per project.
- **KPI radar** — toggleable candidate comparison (sample data, labeled as such).
- Respects `prefers-reduced-motion`; keyboard focus visible throughout.
