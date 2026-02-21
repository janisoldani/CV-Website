// js/page-creativity.js

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderPhotography();
  renderVideos();
  renderBooks();
  initFooter();
});

function renderPhotography() {
  const photo = c.creativity.photography;

  setText("photo-badge", photo.badge);
  setText("photo-title", photo.title);
  setText("photo-subtitle", photo.subtitle);

  // Hero image
  const heroEl = document.getElementById("photo-hero");
  if (photo.heroImage) {
    const img = document.createElement("img");
    img.className = "beyond-hero-img";
    img.src = photo.heroImage.src;
    img.alt = photo.heroImage.alt;
    heroEl.appendChild(img);
  }

  // Gallery with lightbox
  const galleryEl = document.getElementById("photo-gallery");
  photo.gallery.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "beyond-mosaic-item";
    div.innerHTML = `
      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" />
      <div class="beyond-overlay">
        <span class="beyond-overlay-label">${escapeHtml(item.label)}</span>
      </div>
    `;
    div.addEventListener("click", () => openLightbox(i));
    galleryEl.appendChild(div);
  });
}

function renderVideos() {
  const vid = c.creativity.videos;

  setText("video-badge", vid.badge);
  setText("video-title", vid.title);
  setText("video-subtitle", vid.subtitle);

  const container = document.getElementById("video-container");
  vid.items.forEach(item => {
    const card = document.createElement("div");
    card.className = "video-card";

    if (item.youtubeId) {
      card.innerHTML = `
        <div class="video-embed">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${escapeHtml(item.youtubeId)}"
            title="${escapeHtml(item.title)}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <p class="video-title">${escapeHtml(item.title)}</p>
        <p class="video-description">${escapeHtml(item.description)}</p>
      `;
    } else {
      card.innerHTML = `
        <div class="video-embed video-placeholder">
          <div class="video-placeholder-inner">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>Coming soon</span>
          </div>
        </div>
        <p class="video-title">${escapeHtml(item.title)}</p>
        <p class="video-description">${escapeHtml(item.description)}</p>
      `;
    }

    container.appendChild(card);
  });
}

function renderBooks() {
  const books = c.creativity.books;

  setText("books-badge", books.badge);
  setText("books-title", books.title);
  setText("books-subtitle", books.subtitle);

  const container = document.getElementById("books-container");
  books.items.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <span class="book-genre">${escapeHtml(book.genre)}</span>
      <h3 class="book-title">${escapeHtml(book.title)}</h3>
      <p class="book-author">${escapeHtml(book.author)}</p>
      <p class="book-note">${escapeHtml(book.note)}</p>
    `;
    card.addEventListener("click", () => openBookModal(book));
    container.appendChild(card);
  });
}

// ── Book Cover Modal ───────────────────────────────────────

let bookModalEl = null;

function openBookModal(book) {
  if (!bookModalEl) {
    bookModalEl = document.createElement("div");
    bookModalEl.className = "book-modal-overlay";
    bookModalEl.style.display = "none";
    bookModalEl.innerHTML = `
      <div class="book-modal">
        <button class="book-modal-close" id="book-modal-close">&times;</button>
        <div id="book-modal-cover-area"></div>
        <h3 class="book-modal-title" id="book-modal-title"></h3>
        <p class="book-modal-author" id="book-modal-author"></p>
        <p class="book-modal-genre" id="book-modal-genre"></p>
        <p class="book-modal-teaser" id="book-modal-teaser"></p>
      </div>
    `;
    document.body.appendChild(bookModalEl);

    document.getElementById("book-modal-close").addEventListener("click", closeBookModal);
    bookModalEl.addEventListener("click", e => { if (e.target === bookModalEl) closeBookModal(); });
    document.addEventListener("keydown", e => {
      if (bookModalEl && bookModalEl.style.display !== "none" && e.key === "Escape") closeBookModal();
    });
  }

  const coverArea = document.getElementById("book-modal-cover-area");
  if (book.coverUrl) {
    coverArea.innerHTML = `<img class="book-modal-cover" src="${escapeHtml(book.coverUrl)}" alt="Cover: ${escapeHtml(book.title)}" />`;
  } else {
    coverArea.innerHTML = `
      <div class="book-modal-placeholder">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
        <span>Cover coming soon</span>
      </div>
    `;
  }

  document.getElementById("book-modal-title").textContent = book.title;
  document.getElementById("book-modal-author").textContent = book.author;
  document.getElementById("book-modal-genre").textContent = book.genre;
  document.getElementById("book-modal-teaser").textContent = book.teaser || "";

  bookModalEl.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeBookModal() {
  if (bookModalEl) {
    bookModalEl.style.display = "none";
    document.body.style.overflow = "";
  }
}

// ── Lightbox ──────────────────────────────────────────────

let lightboxEl = null;
let lightboxIndex = 0;

function openLightbox(index) {
  const images = c.creativity.photography.gallery;
  lightboxIndex = index;

  if (!lightboxEl) {
    lightboxEl = document.createElement("div");
    lightboxEl.className = "lightbox";
    lightboxEl.style.display = "none";
    lightboxEl.innerHTML = `
      <button class="lightbox-nav" id="lb-prev">&#8592;</button>
      <div class="lightbox-content">
        <img class="lightbox-img" id="lb-img" src="" alt="" />
        <span class="lightbox-label" id="lb-label"></span>
      </div>
      <button class="lightbox-nav" id="lb-next">&#8594;</button>
      <button class="lightbox-close" id="lb-close">&times;</button>
    `;
    document.body.appendChild(lightboxEl);

    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lb-prev").addEventListener("click", () => navigateLightbox(-1, images));
    document.getElementById("lb-next").addEventListener("click", () => navigateLightbox(1, images));
    lightboxEl.addEventListener("click", e => { if (e.target === lightboxEl) closeLightbox(); });
    document.addEventListener("keydown", e => {
      if (!lightboxEl || lightboxEl.style.display === "none") return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1, images);
      if (e.key === "ArrowRight") navigateLightbox(1, images);
    });
  }

  updateLightbox(images);
  lightboxEl.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function updateLightbox(images) {
  const item = images[lightboxIndex];
  document.getElementById("lb-img").src = item.src;
  document.getElementById("lb-img").alt = item.alt;
  document.getElementById("lb-label").textContent = item.label;
}

function navigateLightbox(dir, images) {
  lightboxIndex = (lightboxIndex + dir + images.length) % images.length;
  updateLightbox(images);
}

function closeLightbox() {
  if (lightboxEl) {
    lightboxEl.style.display = "none";
    document.body.style.overflow = "";
  }
}
