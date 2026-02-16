// js/main.js — Nur noch Hero + Skills + CTA (index.html)

initNavbar();

// HERO
setText("hero-title-line1", c.hero.titleLine1);
const titleLine2El = document.getElementById("hero-title-line2");
if (titleLine2El) {
  if (c.hero.titleLine2) {
    titleLine2El.textContent = c.hero.titleLine2;
  } else {
    titleLine2El.style.display = "none";
    const br = titleLine2El.previousElementSibling;
    if (br && br.tagName === "BR") br.style.display = "none";
  }
}
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
  profilePhoto.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
  profilePhoto.style.cursor = "pointer";
}

setText("availability-pill-label", c.availability.pillLabel);
setText("availability-status-text", c.availability.statusText);

// Hero-Buttons
setText("hero-primary-cta", c.hero.primaryCta);
setText("hero-tertiary-cta", c.hero.tertiaryCta);
setText("hero-secondary-cta", c.hero.secondaryCta);

// SKILLS
const skillsContainer = document.getElementById("skills-tags");
if (skillsContainer && Array.isArray(c.personal.skills)) {
  c.personal.skills.forEach((skill) => {
    const tag = document.createElement("span");
    tag.className = "skill-tag";
    tag.textContent = skill;
    skillsContainer.appendChild(tag);
  });
}

// CTA
const ctaBtn = document.getElementById("cta-email-btn");
if (ctaBtn) {
  ctaBtn.href = `mailto:${c.personal.email}`;
}

initFooter();
