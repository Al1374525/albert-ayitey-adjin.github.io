/* =========================================================
   data.js — ALL site content lives here.
   Edit this file to update the site. You should almost
   never need to touch index.html, styles.css, or main.js.
   ========================================================= */

   const SITE = {
    name: "Albert Ayitey-Adjin",
    role: "Data / Business Analyst",
    tools: "SQL · Python · Excel",
    tagline: "I turn raw, messy data into clear answers people can act on.",
    location: "Lorton, VA",
    email: "albertayiteyadjin@gmail.com",
    linkedin: "https://www.linkedin.com/in/albert-a-9995131ab",
    github: "https://github.com/Al1374525",
    // TODO: set this to your Chelsea repo URL once it's public:
    chelseaRepo: "",
  };
  
  /* Hero terminal: the query that "runs" on load */
  const HERO_QUERY = [
    "SELECT player, age, minutes",
    "FROM premier_league_midfielders",
    "WHERE age < 24 AND minutes > 900;",
  ];
  
  /* Animated impact stats */
  const STATS = [
    { value: 25, suffix: "%", label: "reduction in support tickets", note: "from ticket-data analysis" },
    { value: 99.9, suffix: "%", label: "infrastructure uptime", note: "tracked via uptime KPIs", decimals: 1 },
    { value: 95, suffix: "%+", label: "dataset noise filtered", note: "Chelsea recruitment pipeline" },
    { value: 40, suffix: "%", label: "lift in user self-sufficiency", note: "via data-driven training" },
  ];
  
  /* Skills — grouped. "learning: true" renders the dashed honest card */
  const SKILLS = [
    { group: "Querying & languages", items: ["SQL", "SQLite", "Python", "Java"] },
    { group: "Analysis", items: ["Data cleaning", "ETL", "EDA", "Data modeling", "KPI reporting"] },
    { group: "Tools", items: ["Excel · PivotTables", "Git / GitHub", "VS Code"] },
    { group: "Currently learning", items: ["Power BI", "Tableau", "Statistics"], learning: true },
  ];
  
  /* Projects — case-study format. "details" powers the expandable panel */
  const PROJECTS = [
    {
      title: "Chelsea FC Midfield Recruitment Analytics",
      stack: "SQL (SQLite) · Git",
      summary:
        "An end-to-end SQL workflow that scouts undervalued central midfielders — ingesting 300+ Premier League player records from FBref, cleaning them into an analysis-ready SQLite table, and filtering to under 15 viable Under-24 targets with 900+ minutes.",
      status: [
        { label: "Built — SQL pipeline & data cleaning", done: true },
        { label: "Built — multi-condition filtering queries", done: true },
        { label: "Next — KPI scoring model", done: false },
        { label: "Next — interactive Power BI dashboard", done: false },
      ],
      details: {
        question: "Which affordable young midfielders are actually worth a scout's time?",
        approach:
          "Ingest raw FBref exports → clean and type-correct into SQLite → apply layered WHERE filters (age, minutes, position) → shape an output table ready for KPI scoring.",
        insight:
          "95%+ of the raw dataset is noise for this question. A handful of well-chosen filters turns 300+ rows into a defensible shortlist before any advanced modeling is needed.",
      },
      link: null, // populated from SITE.chelseaRepo in main.js if set
      chart: true, // renders the interactive KPI radar demo under this project
    },
    {
      title: "OptiStock — investment insight tool",
      stack: "Python",
      summary:
        "A Python project exploring how data and modeling can help newer investors make sense of the stock market. A working sandbox for applying analysis to financial data — and the reason I'm now sharpening my statistics and dashboarding skills.",
      status: [],
      details: null,
      link: "https://github.com/Al1374525/optiStock",
      chart: false,
    },
  ];
  
  /* KPI radar demo — SAMPLE data, labeled as such in the UI.
     Shows the kind of side-by-side comparison the Chelsea project builds. */
  const RADAR = {
    labels: ["Progressive passes", "Pass completion %", "Tackles won", "Interceptions"],
    players: [
      { name: "Candidate A", data: [78, 88, 62, 70] },
      { name: "Candidate B", data: [64, 91, 75, 58] },
      { name: "Candidate C", data: [85, 79, 55, 81] },
    ],
  };
  
  /* Experience */
  const EXPERIENCE = [
    {
      title: "IT Support Professional — Victory Bible Church International",
      meta: "Lorton, VA · May 2022 – Present",
      bullets: [
        "Analyzed three years of support-ticket data in Excel to spot recurring failure patterns, building recurring reports that drove preventive maintenance and cut ticket volume by 25%.",
        "Designed status-at-a-glance reporting on infrastructure health, tracking uptime KPIs and sustaining 99.9% uptime across departments.",
        "Turned ticket-trend findings into targeted training that lifted user self-sufficiency by 40%.",
      ],
    },
    {
      title: "Resident Assistant — Global Friendship House",
      meta: "Norfolk, VA · Jun 2022 – Aug 2023",
      bullets: [
        "Analyzed resident feedback to redesign event programming, increasing participation by 25%.",
        "Maintained 100% incident-reporting accuracy through detailed logs and compliance checks.",
      ],
    },
  ];
  
  /* Education & certs */
  const CREDENTIALS = [
    {
      title: "B.S. in Computer Science",
      meta: "Old Dominion University · Norfolk, VA · 2024",
      body: "Graduated top 10%. Coursework: databases & SQL, algorithms, data structures, statistics, cybersecurity.",
    },
    {
      title: "CompTIA Security+",
      meta: "2026",
      body: "Validates a security-minded foundation in data handling, systems, and risk.",
    },
  ];
  