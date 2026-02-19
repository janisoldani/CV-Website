// js/project-detail.js

// Get project ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Find project
const project = c.projects.find(p => p.id === projectId);

if (!project) {
  window.location.replace("work.html");
} else {
  initNavbar();

  // PROJECT DETAIL
  setText("project-category", project.category);
  setText("project-title", project.title);
  setText("project-description", project.description);

  // Tags
  const projectTagsContainer = document.getElementById("project-tags");
  if (projectTagsContainer) {
    projectTagsContainer.innerHTML = project.tags
      .map(tag => `<span class="project-detail-tag">${escapeHtml(tag)}</span>`)
      .join("");
  }

  // Detail-Sektionen: leere Sektionen ausblenden
  const sectionFields = [
    "project-problemstellung",
    "project-zielsetzung",
    "project-vorgehen",
    "project-losung",
    "project-learnings"
  ];

  sectionFields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const value = project[id.replace("project-", "")];
    if (value) {
      el.textContent = value;
    } else {
      const section = el.closest(".project-detail-section");
      if (section) section.style.display = "none";
    }
  });

  // Technical Steps (Bullet List)
  const techStepsList = document.getElementById("tech-steps-list");
  const techStepsContainer = document.getElementById("project-tech-steps");
  if (techStepsList && Array.isArray(project.technicalSteps) && project.technicalSteps.length) {
    techStepsList.innerHTML = project.technicalSteps
      .map(step => `<li>${escapeHtml(step)}</li>`)
      .join("");
  } else if (techStepsContainer) {
    techStepsContainer.style.display = "none";
  }

  // Screenshots/Media – ausblenden wenn leer
  const mediaSection = document.getElementById("project-media");
  if (mediaSection && !mediaSection.children.length) {
    const section = mediaSection.closest(".project-detail-section");
    if (section) section.style.display = "none";
  }

  // Links
  const githubLink = document.getElementById("project-github");
  if (githubLink && project.githubUrl) {
    githubLink.href = project.githubUrl;
    githubLink.style.display = "inline-flex";
  } else if (githubLink) {
    githubLink.style.display = "none";
  }

  const demoLink = document.getElementById("project-demo");
  if (demoLink && project.demoUrl) {
    demoLink.href = project.demoUrl;
    demoLink.style.display = "inline-flex";
  } else if (demoLink) {
    demoLink.style.display = "none";
  }

  // Links-Sektion ausblenden wenn weder GitHub noch Demo vorhanden
  if (!project.githubUrl && !project.demoUrl) {
    const linksSection = document.querySelector(".project-detail-links");
    if (linksSection) linksSection.style.display = "none";
  }

  initFooter();
}
