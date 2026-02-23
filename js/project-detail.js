// js/project-detail.js

// Get project ID from URL parameters
// OWASP A03 — Input Validation: validate the ?id= query parameter before use.
// Allowlist: alphanumeric characters and hyphens only, max 64 chars.
// This is the ONLY user-controlled input on this static site.
const urlParams = new URLSearchParams(window.location.search);
const projectId = validateUrlParam(urlParams.get("id"), {
  maxLength: 64,
  pattern: /^[a-zA-Z0-9-]+$/
});

// Find project — projectId is null if validation failed, so no project is found
const project = projectId ? c.projects.find(p => p.id === projectId) : null;

if (!project) {
  window.location.replace("work.html");
} else {
  // Update page title and OG meta tags so sharing a project URL shows the
  // correct title + description in LinkedIn / WhatsApp previews.
  document.title = `${project.title} — Janis Oldani`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = project.description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = `${project.title} — Janis Oldani`;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = project.description;

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

  // Gallery / Screenshots/Media
  const mediaSection = document.getElementById("project-media");
  const mediaSectionWrapper = mediaSection ? mediaSection.closest(".project-detail-section") : null;

  if (project.gallery && project.gallery.length && mediaSection) {
    // Update heading
    const mediaHeading = mediaSectionWrapper ? mediaSectionWrapper.querySelector("h2") : null;
    if (mediaHeading) mediaHeading.textContent = "Gallery";

    // Render gallery grid
    const galleryEl = document.createElement("div");
    galleryEl.className = "project-gallery";
    project.gallery.forEach((item, idx) => {
      const cell = document.createElement("div");
      cell.className = "project-gallery-item";
      cell.innerHTML = `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy"><span class="project-gallery-label">${escapeHtml(item.label)}</span>`;
      cell.addEventListener("click", () => openLightbox(idx));
      galleryEl.appendChild(cell);
    });
    mediaSection.appendChild(galleryEl);

    // Lightbox
    let currentIndex = 0;

    function openLightbox(idx) {
      currentIndex = idx;
      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.id = "lightbox-overlay";
      overlay.innerHTML = `
        <button class="lightbox-close" id="lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="Previous">&#8592;</button>
        <div class="lightbox-content">
          <img class="lightbox-img" id="lightbox-img" src="" alt="">
          <p class="lightbox-label" id="lightbox-label"></p>
        </div>
        <button class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="Next">&#8594;</button>
      `;
      document.body.appendChild(overlay);
      updateLightboxImage();
      document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
      document.getElementById("lightbox-prev").addEventListener("click", (e) => { e.stopPropagation(); navigate(-1); });
      document.getElementById("lightbox-next").addEventListener("click", (e) => { e.stopPropagation(); navigate(1); });
      overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    }

    function updateLightboxImage() {
      const img = document.getElementById("lightbox-img");
      const label = document.getElementById("lightbox-label");
      const item = project.gallery[currentIndex];
      if (img) { img.src = item.src; img.alt = item.alt; }
      if (label) label.textContent = item.label;
    }

    function navigate(dir) {
      currentIndex = (currentIndex + dir + project.gallery.length) % project.gallery.length;
      updateLightboxImage();
    }

    function closeLightbox() {
      const overlay = document.getElementById("lightbox-overlay");
      if (overlay) overlay.remove();
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    }

    function handleKeydown(e) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") navigate(-1);
      else if (e.key === "ArrowRight") navigate(1);
    }
  } else if (mediaSection && !mediaSection.children.length) {
    if (mediaSectionWrapper) mediaSectionWrapper.style.display = "none";
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
