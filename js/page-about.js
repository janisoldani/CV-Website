// js/page-about.js

initNavbar();

// === WHO I AM Section ===
const intro = c.aboutIntro;
if (intro) {
  setText("about-badge", intro.badge);
  setText("about-hero-title", intro.title);
  setText("about-hero-subtitle", intro.subtitle);

  const aboutText = document.getElementById("about-text");
  if (aboutText) {
    // NOTE: insertAdjacentHTML appends AFTER the badge/h1/subtitle already in #about-text.
    // intro.text contains trusted author-written HTML (<strong> tags). Must NEVER render
    // user-supplied data. Source: content.js (static, version-controlled, not user input).
    aboutText.insertAdjacentHTML("beforeend", intro.text.map(p => `<p>${p}</p>`).join(""));
  }
}

// === Quick Facts Photo ===
const quickFactsPhoto = document.getElementById("quick-facts-photo");
if (quickFactsPhoto) {
  safeSetSrc(quickFactsPhoto, c.personal.photoUrl);
}

// === Quick Facts ===
const factsList = document.getElementById("quick-facts-list");
if (factsList && Array.isArray(c.quickFacts)) {
  c.quickFacts.forEach(fact => {
    const row = document.createElement("div");
    row.className = "quick-facts-row";
    if (fact.detail) row.setAttribute("tabindex", "0");

    const label = document.createElement("span");
    label.className = "quick-facts-label";
    label.textContent = fact.label;

    const value = document.createElement("span");
    value.className = "quick-facts-value" + (fact.highlight ? " quick-facts-highlight" : "");
    if (fact.link) {
      const a = document.createElement("a");
      a.textContent = fact.value;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      safeSetHref(a, fact.link);
      a.className = "quick-facts-link";
      value.appendChild(a);
    } else {
      value.textContent = fact.value;
    }

    row.appendChild(label);
    row.appendChild(value);

    if (fact.detail) {
      const tooltip = document.createElement("span");
      tooltip.className = "fact-tooltip";
      tooltip.textContent = fact.detail;
      row.appendChild(tooltip);
    }

    factsList.appendChild(row);
  });
}

// === Beyond Code Section ===
const bc = c.beyondCode;
if (bc) {
  setText("beyond-badge", bc.badge);
  setText("beyond-title", bc.title);
  setText("beyond-subtitle", bc.subtitle);

  // Hero image — above the fold, mark as high priority for LCP
  const beyondHero = document.getElementById("beyond-hero");
  if (beyondHero && bc.heroImage) {
    const img = document.createElement("img");
    img.className = "beyond-hero-img";
    img.alt = bc.heroImage.alt;
    img.setAttribute("fetchpriority", "high");
    safeSetSrc(img, bc.heroImage.src);
    beyondHero.appendChild(img);
  }

  // Photo mosaic
  const beyondGallery = document.getElementById("beyond-gallery");
  if (beyondGallery && Array.isArray(bc.gallery)) {
    bc.gallery.forEach(item => {
      const card = document.createElement("div");
      card.className = "beyond-mosaic-item";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = item.alt;
      safeSetSrc(img, item.src);

      const overlay = document.createElement("div");
      overlay.className = "beyond-overlay";

      const labelSpan = document.createElement("span");
      labelSpan.className = "beyond-overlay-label";
      labelSpan.textContent = item.label;

      const insightP = document.createElement("p");
      insightP.className = "beyond-overlay-insight";
      insightP.textContent = item.insight;

      overlay.appendChild(labelSpan);
      overlay.appendChild(insightP);
      card.appendChild(img);
      card.appendChild(overlay);
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

// === Testimonials Section Header ===
setText("testimonials-badge", c.sections.testimonials.badge);
setText("testimonials-heading", c.sections.testimonials.title);
setText("testimonials-subtitle", c.sections.testimonials.subtitle);

// === Testimonials ===
const testimonialsContainer = document.getElementById("testimonials-container");
if (!Array.isArray(c.testimonials) || c.testimonials.length === 0) {
  const section = document.getElementById("testimonials");
  if (section) section.style.display = "none";
} else if (testimonialsContainer) {
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
if (cvBtn) {
  safeSetHref(cvBtn, c.personal.cvPdfUrl);
}

initFooter();
