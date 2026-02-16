// js/shared.js — Gemeinsame Helfer für alle Seiten

const c = window.SITE_CONTENT;

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && typeof value === "string") {
    el.textContent = value;
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initNavbar() {
  setText("navbar-name", c.personal.name);

  const navbarProfilePhoto = document.getElementById("navbar-profile-photo");
  if (navbarProfilePhoto) {
    if (c.personal.photoUrl) {
      navbarProfilePhoto.src = c.personal.photoUrl;
      navbarProfilePhoto.alt = c.personal.photoAlt || c.personal.name;
    }
  }

  // Click auf Profilbild-Container → Kontaktseite
  const navbarProfileImage = document.querySelector(".navbar-profile-image");
  if (navbarProfileImage) {
    navbarProfileImage.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
    navbarProfileImage.style.cursor = "pointer";
  }

  const navbarLinkedIn = document.getElementById("navbar-linkedin");
  if (navbarLinkedIn) navbarLinkedIn.href = c.links.linkedin;
}

function initFooter() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  setText("footer-owner-name", c.footer.ownerName);
  setText("footer-built-with", c.footer.builtWith);
}
