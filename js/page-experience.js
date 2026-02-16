// js/page-experience.js

initNavbar();

// Section-Titel
setText("experience-title", c.sections.experience.title);
setText("experience-subtitle", c.sections.experience.subtitle);

// Timeline rendern
const timelineContainer = document.getElementById("timeline-container");
if (timelineContainer && Array.isArray(c.experience)) {
  c.experience.forEach((item) => {
    const entry = document.createElement("div");
    entry.className = "timeline-item";

    let tagsHtml = "";
    if (Array.isArray(item.tags) && item.tags.length) {
      tagsHtml = `<div class="timeline-tags">${item.tags.map((t) => `<span class="timeline-tag">${escapeHtml(t)}</span>`).join("")}</div>`;
    }

    entry.innerHTML = `
      <div class="timeline-dot"></div>
      <p class="timeline-period">${escapeHtml(item.period)}</p>
      <h4 class="timeline-role">${escapeHtml(item.role)}</h4>
      <p class="timeline-company">${escapeHtml(item.company)}</p>
      <p class="timeline-description">${escapeHtml(item.description)}</p>
      ${tagsHtml}
    `;
    timelineContainer.appendChild(entry);
  });
}

initFooter();
