// js/page-experience.js

initNavbar();

setText("experience-title", c.sections.experience.title);
setText("experience-subtitle", c.sections.experience.subtitle);

(function () {
  const container = document.getElementById("bilateral-timeline");
  if (!container || !Array.isArray(c.experience)) return;

  // Build a single card (education or work)
  function makeCard(item, type, period) {
    const card = document.createElement("div");
    card.className = "bt-card";

    const hasBullets = Array.isArray(item.bullets) && item.bullets.length > 0;
    if (hasBullets) card.dataset.expandable = "";

    // ── Title / Role line ─────────────────────────────────────────
    const titleEl = document.createElement("div");
    titleEl.className = type === "edu" ? "bt-card-title" : "bt-card-role";
    titleEl.appendChild(document.createTextNode(type === "edu" ? item.title : item.role));

    if (item.current) {
      const badge = document.createElement("span");
      badge.className = "bt-badge-current";
      badge.textContent = "Now";
      titleEl.appendChild(badge);
    }

    if (hasBullets) {
      const arrow = document.createElement("span");
      arrow.className = "bt-card-toggle";
      arrow.setAttribute("aria-hidden", "true");
      titleEl.appendChild(arrow);
    }

    card.appendChild(titleEl);

    // ── Institution / Company ─────────────────────────────────────
    const sub = type === "edu" ? item.institution : item.company;
    if (sub) {
      const subEl = document.createElement("div");
      subEl.className = type === "edu" ? "bt-card-institution" : "bt-card-company";
      subEl.textContent = sub;
      card.appendChild(subEl);
    }

    // ── Period label (visible on hover / open) ────────────────────
    if (hasBullets && period) {
      const periodEl = document.createElement("div");
      periodEl.className = "bt-card-period";
      periodEl.textContent = period;
      card.appendChild(periodEl);
    }

    // ── Expandable bullets ────────────────────────────────────────
    if (hasBullets) {
      const bulletsDiv = document.createElement("div");
      bulletsDiv.className = "bt-card-bullets";

      const ul = document.createElement("ul");
      item.bullets.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
      bulletsDiv.appendChild(ul);
      card.appendChild(bulletsDiv);

      card.addEventListener("click", () => card.classList.toggle("is-open"));
    }

    return card;
  }

  // Extract only the start year from a period string (e.g. "2021 – 2023" → "2021", "Aug 2020" → "2020")
  function startYear(period) {
    const match = period.match(/\d{4}/);
    return match ? match[0] : period;
  }

  // ── Render rows ───────────────────────────────────────────────
  c.experience.forEach((row) => {
    const isParallel = row.education && row.work;

    const rowEl = document.createElement("div");
    rowEl.className = "bt-row";

    // Education cell
    const eduCell = document.createElement("div");
    eduCell.className = "bt-edu-cell";
    if (row.education) eduCell.appendChild(makeCard(row.education, "edu", row.period));

    // Axis cell — show only start year
    const axisCell = document.createElement("div");
    axisCell.className = "bt-axis-cell";
    const periodEl = document.createElement("div");
    periodEl.className = "bt-period";
    periodEl.textContent = startYear(row.period);
    const dotEl = document.createElement("div");
    dotEl.className = isParallel ? "bt-dot bt-dot--parallel" : "bt-dot";
    axisCell.appendChild(periodEl);
    axisCell.appendChild(dotEl);

    // Work cell
    const workCell = document.createElement("div");
    workCell.className = "bt-work-cell";
    if (row.work) workCell.appendChild(makeCard(row.work, "work", row.period));

    rowEl.appendChild(eduCell);
    rowEl.appendChild(axisCell);
    rowEl.appendChild(workCell);
    container.appendChild(rowEl);
  });
})();

initFooter();
