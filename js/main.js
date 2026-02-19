// js/main.js — Homepage (index.html)

initNavbar();

// Home sidebar – tagline
const taglineEl = document.getElementById("home-tagline");
if (taglineEl && c.personal.tagline) {
  taglineEl.innerHTML = c.personal.tagline.replace(/\n/g, "<br>");
}

// Profile photo in sidebar (click to expand/collapse)
const homePhoto = document.getElementById("home-profile-photo");
if (homePhoto && c.personal.photoUrl) {
  homePhoto.src = c.personal.photoUrl;
  homePhoto.alt = c.personal.photoAlt || c.personal.name;
  homePhoto.addEventListener("click", () => {
    homePhoto.classList.toggle("is-expanded");
  });
}

// CV download link
const homeCvLink = document.getElementById("home-cv-link");
if (homeCvLink && c.personal.cvUrl) {
  homeCvLink.href = c.personal.cvUrl;
}

// GitHub link
const homeGithub = document.getElementById("home-github");
if (homeGithub) homeGithub.href = c.links.github;

initFooter();
