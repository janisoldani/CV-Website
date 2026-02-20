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

  initTagPopovers();
}

function initTagPopovers() {
  const TAG_SELECTOR = ".project-tag, .skill-tag, .project-detail-tag, .detail-tag";
  const popover = document.createElement("div");
  popover.className = "tag-popover";
  popover.setAttribute("role", "tooltip");
  document.body.appendChild(popover);

  let activeTag = null;

  function show(tag) {
    const text = tag.textContent.trim();
    const def = c.tagDefinitions && c.tagDefinitions[text];
    if (!def) return;

    popover.textContent = def;
    popover.classList.add("is-visible");
    activeTag = tag;

    // Position below the tag
    const rect = tag.getBoundingClientRect();
    const popW = popover.offsetWidth;
    const popH = popover.offsetHeight;

    let left = rect.left + rect.width / 2 - popW / 2;
    let top = rect.bottom + 10;

    // Viewport corrections
    if (left < 8) left = 8;
    if (left + popW > window.innerWidth - 8) left = window.innerWidth - popW - 8;
    if (top + popH > window.innerHeight - 8) {
      top = rect.top - popH - 10;
      popover.classList.add("is-above");
    } else {
      popover.classList.remove("is-above");
    }

    popover.style.left = left + window.scrollX + "px";
    popover.style.top = top + window.scrollY + "px";
  }

  function hide() {
    popover.classList.remove("is-visible");
    popover.classList.remove("is-above");
    activeTag = null;
  }

  document.body.addEventListener("click", function (e) {
    const tag = e.target.closest(TAG_SELECTOR);
    if (tag) {
      e.stopPropagation();
      if (tag === activeTag) {
        hide();
      } else {
        hide();
        show(tag);
      }
      return;
    }
    if (!popover.contains(e.target)) {
      hide();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hide();
  });
}
