// js/project-detail.js

const c = window.SITE_CONTENT;

// Get project ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Find project
const project = c.projects.find(p => p.id === projectId);

if (!project) {
  document.body.innerHTML = "<h1 style='text-align:center; padding:40px;'>Projekt nicht gefunden</h1>";
} else {
  // Helper: sicheres Setzen von Text
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) {
      el.textContent = value;
    }
  }

  // NAVBAR
  setText("navbar-name", c.personal.name);

  const navbarProfilePhoto = document.getElementById("navbar-profile-photo");
  if (navbarProfilePhoto) {
    if (c.personal.photoUrl) {
      navbarProfilePhoto.src = c.personal.photoUrl;
      navbarProfilePhoto.alt = c.personal.photoAlt || c.personal.name;
    }
  }

  const navbarLinkedIn = document.getElementById("navbar-linkedin");
  if (navbarLinkedIn) navbarLinkedIn.href = c.links.linkedin;

  // PROJECT DETAIL
  setText("project-category", project.category);
  setText("project-title", project.title);
  setText("project-description", project.description);

  // Tags
  const projectTagsContainer = document.getElementById("project-tags");
  if (projectTagsContainer) {
    projectTagsContainer.innerHTML = project.tags
      .map(tag => `<span class="project-detail-tag">${tag}</span>`)
      .join("");
  }

  // Sections
  setText("project-problemstellung", project.problemstellung);
  setText("project-zielsetzung", project.zielsetzung);
  setText("project-vorgehen", project.vorgehen);
  setText("project-losung", project.losung);
  setText("project-learnings", project.learnings);

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

  // FOOTER
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  setText("footer-owner-name", c.footer.ownerName);
  setText("footer-built-with", c.footer.builtWith);
}
