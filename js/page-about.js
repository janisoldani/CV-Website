// js/page-about.js

initNavbar();

const skillIcons = {
  code: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  framework: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  tool: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
};

// === WHO I AM Section ===
const intro = c.aboutIntro;
if (intro) {
  setText("about-badge", intro.badge);
  setText("about-hero-title", intro.title);
  setText("about-hero-subtitle", intro.subtitle);

  const aboutText = document.getElementById("about-text");
  if (aboutText) {
    aboutText.innerHTML = intro.text.map(p => `<p>${p}</p>`).join("");
  }
}

// === Quick Facts ===
const factsList = document.getElementById("quick-facts-list");
if (factsList && Array.isArray(c.quickFacts)) {
  c.quickFacts.forEach(fact => {
    const row = document.createElement("div");
    row.className = "quick-facts-row";
    row.innerHTML = `
      <span class="quick-facts-label">${escapeHtml(fact.label)}</span>
      <span class="quick-facts-value${fact.highlight ? " quick-facts-highlight" : ""}">${escapeHtml(fact.value)}</span>
    `;
    factsList.appendChild(row);
  });
}

// === Skills Categories ===
const skillsContainer = document.getElementById("skills-container");
if (skillsContainer && Array.isArray(c.skillCategories)) {
  c.skillCategories.forEach(cat => {
    const card = document.createElement("article");
    card.className = "card skill-category-card";
    card.innerHTML = `
      <div class="skill-category-header">
        <span class="skill-category-icon">${skillIcons[cat.icon] || ""}</span>
        <h4 class="card-title">${escapeHtml(cat.title)}</h4>
      </div>
      <div class="skills-tags">
        ${cat.tags.map(tag => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    `;
    skillsContainer.appendChild(card);
  });
}

// === Beyond Code Section ===
const bc = c.beyondCode;
if (bc) {
  setText("beyond-badge", bc.badge);
  setText("beyond-title", bc.title);
  setText("beyond-subtitle", bc.subtitle);

  // Hero image
  const beyondHero = document.getElementById("beyond-hero");
  if (beyondHero && bc.heroImage) {
    beyondHero.innerHTML = `<img src="${bc.heroImage.src}" alt="${escapeHtml(bc.heroImage.alt)}" class="beyond-hero-img" />`;
  }

  // Photo mosaic
  const beyondGallery = document.getElementById("beyond-gallery");
  if (beyondGallery && Array.isArray(bc.gallery)) {
    bc.gallery.forEach(img => {
      const card = document.createElement("div");
      card.className = "beyond-mosaic-item";
      card.innerHTML = `
        <img src="${img.src}" alt="${escapeHtml(img.alt)}" />
        <div class="beyond-overlay">
          <span class="beyond-overlay-label">${escapeHtml(img.label)}</span>
          <p class="beyond-overlay-insight">${escapeHtml(img.insight)}</p>
        </div>
      `;
      beyondGallery.appendChild(card);
    });
  }

  // Ironman card
  const beyondIronman = document.getElementById("beyond-ironman");
  if (beyondIronman && bc.ironman) {
    beyondIronman.innerHTML = `
      <span class="ironman-target">${escapeHtml(bc.ironman.target)}</span>
      <h3 class="ironman-title">${escapeHtml(bc.ironman.title)}</h3>
      <p class="ironman-text">${escapeHtml(bc.ironman.text)}</p>
      <div class="ironman-distances">
        <span class="ironman-dist"><strong>1.9 km</strong> Swim</span>
        <span class="ironman-dist"><strong>90 km</strong> Bike</span>
        <span class="ironman-dist"><strong>21.1 km</strong> Run</span>
      </div>
    `;
  }
}

// === Testimonials ===
const testimonialsContainer = document.getElementById("testimonials-container");
if (testimonialsContainer && Array.isArray(c.testimonials)) {
  c.testimonials.forEach(item => {
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

// === CV Download ===
const cvBtn = document.getElementById("cv-download-btn");
if (cvBtn && c.personal.cvUrl) {
  cvBtn.href = c.personal.cvUrl;
}

initFooter();
