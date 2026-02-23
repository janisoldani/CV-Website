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
      // OWASP A03: safeSetSrc validates src before assignment (rejects javascript:, data:, http:)
      safeSetSrc(navbarProfilePhoto, c.personal.photoUrl);
      navbarProfilePhoto.alt = c.personal.photoAlt || c.personal.name;
    }
  }

  // Click on profile image → contact page
  const navbarProfileImage = document.querySelector(".navbar-profile-image");
  if (navbarProfileImage) {
    navbarProfileImage.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
    navbarProfileImage.style.cursor = "pointer";
    // Accessibility: interactive element needs an accessible label
    navbarProfileImage.setAttribute("role", "button");
    navbarProfileImage.setAttribute("aria-label", "Go to contact page");
    navbarProfileImage.setAttribute("tabindex", "0");
    navbarProfileImage.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") window.location.href = "contact.html";
    });
  }

  const navbarLinkedIn = document.getElementById("navbar-linkedin");
  // OWASP A03: safeSetHref validates URL protocol before assigning href
  if (navbarLinkedIn) {
    safeSetHref(navbarLinkedIn, c.links.linkedin);
    // Accessibility: icon-only links need a text alternative (WCAG 1.1.1)
    navbarLinkedIn.setAttribute("aria-label", "LinkedIn profile (opens in new tab)");
  }
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

// ─────────────────────────────────────────────────────────────────────────────
// createPicture — WebP-first <picture> element builder (TODO-03 image performance)
// ─────────────────────────────────────────────────────────────────────────────
// Returns a <picture> that serves the .webp version when the browser supports it
// and falls back to the original JPEG/PNG automatically.
//
// WebP files don't need to exist yet — if missing, the browser uses the <img>
// fallback silently. Once you run scripts/optimize-images.ps1 and the .webp
// files land in assets/, every gallery image switches to WebP automatically.
//
// @param {string}  src          Path to the original image (JPEG/PNG)
// @param {string}  alt          Alt text for the image
// @param {object}  [opts]
//   className  {string}   CSS class applied to the <img>
//   lazy       {boolean}  Whether to add loading="lazy" (default: true)
//   priority   {boolean}  Add fetchpriority="high" for above-fold LCP images
// @returns {HTMLPictureElement}
function createPicture(src, alt, opts = {}) {
  const { className = "", lazy = true, priority = false } = opts;

  const picture = document.createElement("picture");

  // WebP source — browser tries this first; 404 on missing .webp is silent
  const sourceWebp = document.createElement("source");
  sourceWebp.type = "image/webp";
  sourceWebp.srcset = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  // Fallback <img> with original format
  const img = document.createElement("img");
  img.alt = alt;
  if (className) img.className = className;
  if (lazy) img.loading = "lazy";
  if (priority) img.setAttribute("fetchpriority", "high");
  safeSetSrc(img, src);

  picture.appendChild(sourceWebp);
  picture.appendChild(img);
  return picture;
}
