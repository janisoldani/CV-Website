// js/main.js

const c = window.SITE_CONTENT;

// Helper: sicheres Setzen von Text
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && typeof value === "string") {
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

// Click auf Profilbild-Container scrollt zur Kontaktsektion
const navbarProfileImage = document.querySelector(".navbar-profile-image");
if (navbarProfileImage) {
  navbarProfileImage.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
  navbarProfileImage.style.cursor = "pointer";
}

const navbarLinkedIn = document.getElementById("navbar-linkedin");
if (navbarLinkedIn) navbarLinkedIn.href = c.links.linkedin;

// HERO
setText("hero-title-line1", c.hero.titleLine1);
setText("hero-title-line2", c.hero.titleLine2);
setText("hero-subtitle", c.hero.subtitle);

setText("hero-name", c.personal.name);
setText("hero-role", c.personal.role);
setText("hero-location", c.personal.location);
setText("hero-about", c.personal.aboutShort);

const profilePhoto = document.getElementById("profile-photo");
if (profilePhoto) {
  if (c.personal.photoUrl) {
    profilePhoto.src = c.personal.photoUrl;
    profilePhoto.alt = c.personal.photoAlt || c.personal.name;
  } else {
    profilePhoto.parentElement.style.display = "none";
  }
  // Click auf Profilbild scrollt zur Kontaktsektion
  profilePhoto.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
  profilePhoto.style.cursor = "pointer";
}

setText("availability-pill-label", c.availability.pillLabel);
setText("availability-status-text", c.availability.statusText);

// Hero-Buttons
setText("hero-primary-cta", c.hero.primaryCta);
setText("hero-tertiary-cta", c.hero.tertiaryCta);
setText("hero-secondary-cta", c.hero.secondaryCta);

// KONTAKT – E-Mail + Links
const emailLink = document.getElementById("contact-email-link");
if (emailLink) {
  emailLink.textContent = c.personal.email;
  emailLink.href = `mailto:${c.personal.email}`;
}

const emailButton = document.getElementById("contact-email-link-btn");
if (emailButton) {
  emailButton.textContent = c.sections.contact.ctaButtonLabel;
  emailButton.addEventListener("click", () => {
    window.location.href = `mailto:${c.personal.email}`;
  });
}

// Social / CV
const linkLinkedIn = document.getElementById("link-linkedin");
if (linkLinkedIn) linkLinkedIn.href = c.links.linkedin;

const linkGithub = document.getElementById("link-github");
if (linkGithub) linkGithub.href = c.links.github;

// SECTIONS – Überschriften & Texte
setText("work-title", c.sections.work.title);
setText("work-subtitle", c.sections.work.subtitle);

setText("about-title", c.sections.about.title);
setText("about-subtitle", c.sections.about.subtitle);

setText("contact-title", c.sections.contact.title);
setText("contact-subtitle", c.sections.contact.subtitle);
setText("contact-intro", c.sections.contact.introText);
setText("contact-email-label-prefix", c.sections.contact.emailLabelPrefix);

// ABOUT-CARDS dynamisch rendern
const aboutContainer = document.getElementById("about-cards");
if (aboutContainer && Array.isArray(c.aboutCards)) {
  c.aboutCards.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <p class="card-tagline">${item.category}</p>
      <h4 class="card-title">${item.title}</h4>
      <p class="card-body">${item.body}</p>
    `;
    aboutContainer.appendChild(card);
  });
}

// PROJEKTE dynamisch rendern
const projectsContainer = document.getElementById("projects-container");

if (projectsContainer && Array.isArray(c.projects)) {
  c.projects.forEach((project) => {
    const card = document.createElement("a");
    card.href = `project-detail.html?id=${project.id}`;
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-category">${project.category}</div>
      <div class="project-title">${project.title}</div>
      <div class="project-description">${project.description}</div>
      <div class="project-tags">
        ${project.tags
          .map((tag) => `<span class="project-tag">${tag}</span>`)
          .join("")}
      </div>
    `;

    projectsContainer.appendChild(card);
  });
}

// FOOTER
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

setText("footer-owner-name", c.footer.ownerName);
setText("footer-built-with", c.footer.builtWith);
