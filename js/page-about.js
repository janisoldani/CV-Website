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

// Testimonials rendern
const testimonialsContainer = document.getElementById("testimonials-container");
if (testimonialsContainer && Array.isArray(c.testimonials)) {
  c.testimonials.forEach((item) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <p class="testimonial-quote">${escapeHtml(item.quote)}</p>
      <p class="testimonial-author">${escapeHtml(item.author)}</p>
      <p class="testimonial-role">${escapeHtml(item.role)}</p>
    `;
    testimonialsContainer.appendChild(card);
  });
}

// CV-Download-Button
const cvBtn = document.getElementById("cv-download-btn");
if (cvBtn && c.personal.cvUrl) {
  cvBtn.href = c.personal.cvUrl;
}

initFooter();
