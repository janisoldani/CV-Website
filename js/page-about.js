// js/page-about.js

initNavbar();

// Section-Titel
setText("about-title", c.sections.about.title);
setText("about-subtitle", c.sections.about.subtitle);

// About-Cards rendern
const aboutContainer = document.getElementById("about-cards");
if (aboutContainer && Array.isArray(c.aboutCards)) {
  c.aboutCards.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <p class="card-tagline">${escapeHtml(item.category)}</p>
      <h4 class="card-title">${escapeHtml(item.title)}</h4>
      <p class="card-body">${escapeHtml(item.body)}</p>
    `;
    aboutContainer.appendChild(card);
  });
}

initFooter();
