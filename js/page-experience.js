// js/page-experience.js

initNavbar();

// Section-Titel
setText("experience-title", c.sections.experience.title);
setText("experience-subtitle", c.sections.experience.subtitle);

// Timeline
(function () {
  const stage = document.getElementById("experience-stage");
  const track = document.getElementById("timeline-track");
  const detail = document.getElementById("timeline-detail");
  if (!stage || !track || !detail || !Array.isArray(c.experience)) return;

  const isMobile = () => window.innerWidth < 768;
  let activeIndex = -1;

  // Render timeline items (dot + year only)
  c.experience.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.dataset.index = i;

    // Extract year from period (e.g. "2024 – heute" → "2024")
    const year = item.period.match(/\d{4}/)?.[0] || item.period;

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <span class="timeline-year">${escapeHtml(year)}</span>
    `;
    track.appendChild(el);
  });

  const items = track.querySelectorAll(".timeline-item");

  function buildDetailHTML(item) {
    let tagsHtml = "";
    if (Array.isArray(item.tags) && item.tags.length) {
      tagsHtml = `<div class="detail-tags">${item.tags
        .map((t) => `<span class="detail-tag">${escapeHtml(t)}</span>`)
        .join("")}</div>`;
    }
    return `
      <p class="detail-period">${escapeHtml(item.period)}</p>
      <h4 class="detail-role">${escapeHtml(item.role)}</h4>
      <p class="detail-company">${escapeHtml(item.company)}</p>
      <p class="detail-description">${escapeHtml(item.description)}</p>
      ${tagsHtml}
    `;
  }

  function openItem(index) {
    if (index === activeIndex) return;

    // Deactivate previous
    if (activeIndex >= 0 && items[activeIndex]) {
      items[activeIndex].classList.remove("is-active");
    }

    activeIndex = index;
    const data = c.experience[index];
    items[index].classList.add("is-active");
    stage.classList.add("has-active");

    // Build detail content
    detail.innerHTML = buildDetailHTML(data);

    // Position detail vertically aligned with the active item (desktop)
    if (!isMobile()) {
      const itemRect = items[index].getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const top = itemRect.top - stageRect.top + itemRect.height / 2;
      detail.style.top = top + "px";
    } else {
      detail.style.top = "";
      // Insert detail panel after the active item in DOM flow
      items[index].after(detail);
    }

    // Trigger animation restart (reflow trick)
    detail.classList.remove("is-visible");
    void detail.offsetWidth;
    detail.classList.add("is-visible");
  }

  function closeItem() {
    if (activeIndex >= 0 && items[activeIndex]) {
      items[activeIndex].classList.remove("is-active");
    }
    activeIndex = -1;
    stage.classList.remove("has-active");
    detail.classList.remove("is-visible");

    // On mobile, move detail back to stage
    if (isMobile() && !stage.contains(detail)) {
      stage.appendChild(detail);
    }
  }

  // Desktop: mouseenter/mouseleave
  items.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (!isMobile()) openItem(Number(el.dataset.index));
    });
  });

  stage.addEventListener("mouseleave", () => {
    if (!isMobile()) closeItem();
  });

  // Mobile: tap to toggle
  items.forEach((el) => {
    el.addEventListener("click", () => {
      if (!isMobile()) return;
      const idx = Number(el.dataset.index);
      if (idx === activeIndex) {
        closeItem();
      } else {
        openItem(idx);
      }
    });
  });

  // Keyboard: Enter/Space
  items.forEach((el) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const idx = Number(el.dataset.index);
        if (idx === activeIndex) {
          closeItem();
        } else {
          openItem(idx);
        }
      }
    });
  });

  // Close on resize (viewport switch)
  window.addEventListener("resize", () => {
    closeItem();
    // Move detail back to stage if needed
    if (!stage.contains(detail)) {
      stage.appendChild(detail);
    }
  });
})();

initFooter();
