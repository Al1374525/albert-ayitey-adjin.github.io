/* =========================================================
   charts.js — interactive KPI radar (Chart.js via CDN).
   Reads RADAR from data.js. Isolated so removing this file
   (and its <script> tag) cleanly removes the chart.
   ========================================================= */

   (function kpiRadar() {
    const canvas = document.getElementById("kpi-radar");
    const toggles = document.getElementById("player-toggles");
    if (!canvas || !toggles || typeof Chart === "undefined") return;
  
    const COLORS = ["#0F766E", "#2DD4BF", "#46536B"];
  
    const datasets = RADAR.players.map((p, i) => ({
      label: p.name,
      data: p.data,
      borderColor: COLORS[i],
      backgroundColor: COLORS[i] + "22",
      pointBackgroundColor: COLORS[i],
      borderWidth: 2,
      pointRadius: 3,
    }));
  
    const chart = new Chart(canvas, {
      type: "radar",
      data: { labels: RADAR.labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0E1726",
            titleFont: { family: "'IBM Plex Mono', monospace", size: 11 },
            bodyFont: { family: "'IBM Plex Mono', monospace", size: 11 },
            padding: 10,
          },
        },
        scales: {
          r: {
            min: 0, max: 100,
            ticks: { display: false },
            grid: { color: "#E1E6E4" },
            angleLines: { color: "#E1E6E4" },
            pointLabels: {
              font: { family: "'IBM Plex Mono', monospace", size: 11 },
              color: "#46536B",
            },
          },
        },
      },
    });
  
    /* toggle buttons */
    RADAR.players.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.className = "ptoggle";
      btn.setAttribute("aria-pressed", "true");
      btn.innerHTML = `<span class="swatch" style="background:${COLORS[i]}"></span>${p.name}`;
      btn.addEventListener("click", () => {
        const meta = chart.getDatasetMeta(i);
        meta.hidden = !meta.hidden;
        btn.classList.toggle("off", meta.hidden);
        btn.setAttribute("aria-pressed", String(!meta.hidden));
        chart.update();
      });
      toggles.appendChild(btn);
    });
  })();
  