# Albert Ayitey-Adjin | Software Engineer Portfolio

My personal portfolio site, focused on software engineering. It covers my projects, experience, skills, and full resume, with the tech used listed under each item.

**Live site:** https://al1374525.github.io/albert-ayitey-adjin.github.io/

## What's on the site

- **Hero:** a short intro as a software engineer (B.S. in Computer Science, Old Dominion University).
- **Projects:**
  - *Environmental Early-Warning Anomaly Detector* (Python, OOP, dependency injection, unit testing, anomaly detection, monitoring and alerting).
  - *BetterSwipe*, a senior capstone (Python, Django, React, SQL, relational schema design, Git and GitHub).
- **Experience:** IT Support Analyst (volunteer) and Resident Assistant. Roles without a coding stack list the skills applied instead of tools.
- **Skills:** languages, frameworks and data, engineering practices, and infrastructure and tools.
- **Resume:** the full resume on the page, with a tech line under each project and role.
- **Contact:** email, GitHub, and LinkedIn.

## What changed in this version

- Repositioned from a data / business analyst portfolio to a **software engineering** portfolio.
- Removed the Chelsea FC Midfield Recruitment Analytics project so the software projects lead.
- Added the Anomaly Detector and BetterSwipe as featured projects, each with its tech tags.
- Added a resume section with the tech used under each project and role.
- Redesigned with a **Spider-Man-inspired palette**: near-black background with red and blue accents and a subtle web pattern in the hero.
- Rebuilt as a single self-contained `index.html` (no build step, no framework).

## Design

| Token | Value | Use |
|---|---|---|
| Ink | `#0A0C16` | Page background |
| Panel | `#111528` | Cards and resume block |
| Red | `#E62429` | Primary accent, buttons, section rules |
| Blue | `#2B4CB0` | Secondary accent, borders, web pattern |
| Blue (soft) | `#8EA5FF` | Links and tech tags |

Fonts (Google Fonts): Barlow Condensed for headings, IBM Plex Sans for body text, and JetBrains Mono for tags and labels. Colors and fonts are CSS variables at the top of `index.html`.

## Tech

- HTML, CSS, and a small amount of vanilla JavaScript (copy-email button)
- Responsive layout that works from phone width up
- Respects reduced-motion settings; keyboard focus states are visible
- No dependencies or build tooling

## Run locally

Open `index.html` in a browser. To serve it locally instead:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

The site is served by GitHub Pages from this repository.

1. Replace `index.html` with the new version.
2. Commit and push to the branch Pages publishes from (usually `main`).
3. Wait a minute or two, then reload the live site.

## Editing content

- **Add or change a project:** copy an `<article class="card">` block in the `#projects` section and edit the text and the tag list.
- **Update the resume:** edit the `#resume` section. Each project and role has a `.tech` line for the tools or skills applied.
- **Change colors:** edit the CSS variables in the `:root` block at the top of the file.

## Contact

- Email: albertayiteyadjin@gmail.com
- GitHub: https://github.com/Al1374525
- LinkedIn: https://linkedin.com/in/albert-a-9995131ab