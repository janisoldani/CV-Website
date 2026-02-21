// js/page-experience.js

initNavbar();

setText("experience-title", c.sections.experience.title);
setText("experience-subtitle", c.sections.experience.subtitle);

(function () {
  const container = document.getElementById("bilateral-timeline");
  if (!container || !Array.isArray(c.experience)) return;

  c.experience.forEach((row) => {
    const isParallel = row.education && row.work;

    // Education cell
    let eduHtml = "";
    if (row.education) {
      const edu = row.education;
      const badge = edu.current
        ? '<span class="bt-badge-current">Now</span>'
        : "";
      eduHtml = `
        <div class="bt-card">
          <div class="bt-card-title">${escapeHtml(edu.title)}${badge}</div>
          ${edu.institution ? `<div class="bt-card-institution">${escapeHtml(edu.institution)}</div>` : ""}
          ${edu.note ? `<div class="bt-card-note">${escapeHtml(edu.note)}</div>` : ""}
        </div>`;
    }

    // Work cell
    let workHtml = "";
    if (row.work) {
      const work = row.work;
      const badge = work.current
        ? '<span class="bt-badge-current">Now</span>'
        : "";
      workHtml = `
        <div class="bt-card">
          <div class="bt-card-role">${escapeHtml(work.role)}${badge}</div>
          <div class="bt-card-company">${escapeHtml(work.company)}</div>
          ${work.description ? `<div class="bt-card-note">${escapeHtml(work.description)}</div>` : ""}
        </div>`;
    }

    const dotClass = isParallel ? "bt-dot bt-dot--parallel" : "bt-dot";

    container.insertAdjacentHTML("beforeend", `
      <div class="bt-row">
        <div class="bt-edu-cell">${eduHtml}</div>
        <div class="bt-axis-cell">
          <div class="bt-period">${escapeHtml(row.period)}</div>
          <div class="${dotClass}"></div>
        </div>
        <div class="bt-work-cell">${workHtml}</div>
      </div>
    `);
  });
})();

initFooter();
