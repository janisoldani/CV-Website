// js/main.js — Homepage (index.html)

initNavbar();

// Home sidebar
setText("hero-subtitle", c.hero.subtitle);
setText("hero-role", c.personal.role);

// GitHub link
const homeGithub = document.getElementById("home-github");
if (homeGithub) homeGithub.href = c.links.github;

initFooter();
