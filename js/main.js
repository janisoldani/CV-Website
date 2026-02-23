// js/main.js — Homepage (index.html)

initNavbar();

// ── Target Role label (below name, above tagline) ────────────────────────────
// Renders c.availability.targetRole as a small uppercase label.
// This answers "what role are you seeking?" within the first 3 seconds.
const nameEl = document.getElementById("navbar-name");
if (nameEl && c.availability && c.availability.targetRole) {
  const roleLabel = document.createElement("p");
  roleLabel.className = "home-role-label";
  roleLabel.textContent = c.availability.targetRole;
  nameEl.insertAdjacentElement("afterend", roleLabel);
}

// ── Tagline ───────────────────────────────────────────────────────────────────
// OWASP A03: use safe DOM APIs instead of innerHTML to render newlines as <br>.
const taglineEl = document.getElementById("home-tagline");
if (taglineEl && c.personal.tagline) {
  c.personal.tagline.split("\n").forEach((line, i, arr) => {
    taglineEl.appendChild(document.createTextNode(line));
    if (i < arr.length - 1) taglineEl.appendChild(document.createElement("br"));
  });
}

// ── Availability pill (below tagline) ─────────────────────────────────────────
// Renders the availability.pillLabel as a teal pill — key recruiter signal.
// Update availability.pillLabel in content.js when status changes.
if (c.availability && c.availability.pillLabel && taglineEl) {
  const pill = document.createElement("div");
  pill.className = "pill home-availability";
  const dot = document.createElement("span");
  dot.className = "pill-dot";
  const label = document.createTextNode(c.availability.pillLabel);
  pill.appendChild(dot);
  pill.appendChild(label);
  taglineEl.insertAdjacentElement("afterend", pill);
}

// ── Profile photo in sidebar (click to expand/collapse) ──────────────────────
const homePhoto = document.getElementById("home-profile-photo");
if (homePhoto && c.personal.photoUrl) {
  // OWASP A03: safeSetSrc validates src before assignment (rejects javascript:, data:, http:)
  safeSetSrc(homePhoto, c.personal.photoUrl);
  homePhoto.alt = c.personal.photoAlt || c.personal.name;
  homePhoto.addEventListener("click", () => {
    homePhoto.classList.toggle("is-expanded");
  });
}

// ── CV download link → PDF ────────────────────────────────────────────────────
// Points to the downloadable PDF. Replace assets/cv-janis-oldani.pdf with your
// current CV file — the 0-byte placeholder must be swapped before going live.
const homeCvLink = document.getElementById("home-cv-link");
if (homeCvLink) {
  const pdfUrl = c.personal.cvPdfUrl || c.personal.cvUrl;
  safeSetHref(homeCvLink, pdfUrl);
}

// ── GitHub link ───────────────────────────────────────────────────────────────
const homeGithub = document.getElementById("home-github");
if (homeGithub) safeSetHref(homeGithub, c.links.github);

initFooter();
