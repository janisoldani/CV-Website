// js/page-about.js

initNavbar();

// --- SVG icon map ---
const traitIcons = {
  analytics: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/></svg>',
  sports: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/><circle cx="12" cy="21" r="1"/></svg>',
  target: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
};

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

// === Trait Cards ===
const traitsContainer = document.getElementById("traits-container");
if (traitsContainer && Array.isArray(c.traits)) {
  c.traits.forEach(trait => {
    const card = document.createElement("article");
    card.className = "card trait-card";
    card.innerHTML = `
      <div class="trait-icon">${traitIcons[trait.icon] || ""}</div>
      <h4 class="card-title">${escapeHtml(trait.title)}</h4>
      <p class="card-body">${escapeHtml(trait.body)}</p>
    `;
    traitsContainer.appendChild(card);
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

// === Sport Section ===
const sport = c.sport;
if (sport) {
  setText("sport-badge", sport.badge);
  setText("sport-title", sport.title);
  setText("sport-subtitle", sport.subtitle);
  setText("sport-text", sport.text);

  const sportTags = document.getElementById("sport-tags");
  if (sportTags) {
    sportTags.innerHTML = sport.tags
      .map(tag => `<span class="chip">${escapeHtml(tag)}</span>`)
      .join("");
  }

  const sportStats = document.getElementById("sport-stats");
  if (sportStats && Array.isArray(sport.stats)) {
    sport.stats.forEach(stat => {
      const el = document.createElement("div");
      el.className = "stat-block";
      el.innerHTML = `
        <span class="stat-value">${escapeHtml(stat.value)}</span>
        <span class="stat-label">${escapeHtml(stat.label)}</span>
      `;
      sportStats.appendChild(el);
    });
  }
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

  // Transfer tags
  const transferTags = document.getElementById("beyond-transfer-tags");
  if (transferTags && Array.isArray(bc.transferTags)) {
    transferTags.innerHTML = bc.transferTags
      .map(tag => `<span class="chip">${escapeHtml(tag)}</span>`)
      .join("");
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

// === Tab Switch ===
(function () {
  const tabs = document.querySelectorAll(".about-tab");
  const panels = document.querySelectorAll(".about-panel");
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.toggle("is-active", t === tab));
      panels.forEach(p => p.classList.toggle("is-active", p.id === "panel-" + target));

      // Scroll tabs into view if user has scrolled past them
      const tabBar = tab.parentElement;
      const tabTop = tabBar.getBoundingClientRect().top;
      if (tabTop < 60) {
        tabBar.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
})();

initFooter();
