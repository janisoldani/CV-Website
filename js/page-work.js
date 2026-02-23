// js/page-work.js

initNavbar();

// Section-Titel
setText("work-title", c.sections.work.title);
setText("work-subtitle", c.sections.work.subtitle);

// Projekte rendern
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer && Array.isArray(c.projects)) {
  // hidden: true projects are excluded (e.g. Running Dashboard — content not ready)
  c.projects.filter(p => !p.hidden).forEach((project) => {
    const card = document.createElement("a");
    card.href = `project-detail.html?id=${project.id}`;
    card.className = "project-card";

    if (project.status === "in-progress") {
      card.classList.add("project-card-in-progress");
    }

    card.innerHTML = `
      ${project.status === "in-progress" ? '<div class="project-status-badge">In Progress</div>' : ""}
      <div class="project-category">${escapeHtml(project.category)}</div>
      <div class="project-title">${escapeHtml(project.title)}</div>
      <div class="project-description">${escapeHtml(project.description)}</div>
      <div class="project-tags">
        ${project.tags
          .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
          .join("")}
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}

initFooter();
