// js/page-experience.js

const skillIcons = {
  code:      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  framework: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  ai:        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
  web:     '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  tool:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  data:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>',
  banking: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/></svg>'
};

initNavbar();

setText("experience-badge", c.sections.experience.badge);
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
    if (hasBullets) {
      card.dataset.expandable = "";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-expanded", "false");
    }

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

      card.addEventListener("click", () => {
        card.classList.toggle("is-open");
        card.setAttribute("aria-expanded", card.classList.contains("is-open").toString());
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    }

    return card;
  }

  // Extract only the start year from a period string (e.g. "2021 – 2023" → "2021", "Aug 2020" → "2020")
  function startYear(period) {
    const match = period.match(/\d{4}/);
    return match ? match[0] : period;
  }

  // ── Render rows ───────────────────────────────────────────────
  [...c.experience].reverse().forEach((row) => {
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
    const dotEl = document.createElement("div");
    dotEl.className = isParallel ? "bt-dot bt-dot--parallel" : "bt-dot";
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

// === Skills Section ===
setText("skills-badge", c.sections.skills.badge);
setText("skills-heading", c.sections.skills.title);
setText("skills-subtitle", c.sections.skills.subtitle);

const skillsContainer = document.getElementById("skills-container");
if (skillsContainer && Array.isArray(c.skillCategories)) {
  c.skillCategories.forEach(cat => {
    const card = document.createElement("article");
    card.className = "card skill-category-card";
    card.innerHTML = `
      <div class="skill-category-header">
        <span class="skill-category-icon">${skillIcons[cat.icon] || ""}</span>
        <h4 class="card-title">${escapeHtml(cat.title)}</h4>
      </div>
      <div class="skills-tags">
        ${cat.tags.map(tag => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    `;
    skillsContainer.appendChild(card);
  });
}

initFooter();
