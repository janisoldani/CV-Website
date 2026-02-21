// js/page-cv.js

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderCvHeader();
  renderCvExperience();
  renderCvEducation();
  renderCvSkills();
  renderCvLanguages();
  renderCvCertificates();
  initFooter();
});

function renderCvHeader() {
  const p = c.personal;
  const el = document.getElementById("cv-doc-header");
  el.innerHTML = `
    <div class="cv-header-top">
      <div>
        <h1 class="cv-name">${escapeHtml(p.name)}</h1>
        <p class="cv-role-line">${escapeHtml(p.role)}</p>
      </div>
    </div>
    <div class="cv-contact-line">
      <span>${escapeHtml(p.location)}</span>
      <span class="cv-sep">·</span>
      <a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a>
      <span class="cv-sep">·</span>
      <span>${escapeHtml(p.phone)}</span>
      <span class="cv-sep">·</span>
      <a href="${escapeHtml(c.links.linkedin)}" target="_blank">LinkedIn</a>
      <span class="cv-sep">·</span>
      <a href="${escapeHtml(c.links.github)}" target="_blank">GitHub</a>
    </div>
  `;
}

function renderCvExperience() {
  const el = document.getElementById("cv-experience");
  c.cv.workExperience.forEach(job => {
    const bullets = job.bullets
      .map(b => `<li>${escapeHtml(b)}</li>`)
      .join("");
    const detailHtml = job.detail
      ? `<span class="cv-job-detail">${escapeHtml(job.detail)}</span>`
      : "";
    el.innerHTML += `
      <div class="cv-job">
        <div class="cv-job-header">
          <div class="cv-job-left">
            <span class="cv-job-role">${escapeHtml(job.role)}</span>
            <span class="cv-job-company">${escapeHtml(job.company)}</span>
            ${detailHtml}
          </div>
          <span class="cv-job-period">${escapeHtml(job.period)}</span>
        </div>
        <ul class="cv-bullets">${bullets}</ul>
      </div>
    `;
  });
}

function renderCvEducation() {
  const el = document.getElementById("cv-education");
  c.cv.education.forEach(edu => {
    el.innerHTML += `
      <div class="cv-edu-item">
        <div class="cv-edu-header">
          <span class="cv-edu-degree">${escapeHtml(edu.degree)}</span>
          <span class="cv-edu-period">${escapeHtml(edu.period)}</span>
        </div>
        <span class="cv-edu-institution">${escapeHtml(edu.institution)}</span>
      </div>
    `;
  });
}

function renderCvSkills() {
  const el = document.getElementById("cv-skills");
  c.skillCategories.forEach(cat => {
    el.innerHTML += `
      <div class="cv-skill-group">
        <span class="cv-skill-category">${escapeHtml(cat.title)}</span>
        <span class="cv-skill-tags">${cat.tags.map(t => escapeHtml(t)).join(" · ")}</span>
      </div>
    `;
  });
}

function renderCvLanguages() {
  const el = document.getElementById("cv-languages");
  c.cv.languages.forEach(lang => {
    el.innerHTML += `
      <div class="cv-lang-item">
        <span class="cv-lang-name">${escapeHtml(lang.name)}</span>
        <span class="cv-lang-level">${escapeHtml(lang.level)}</span>
      </div>
    `;
  });
}

function renderCvCertificates() {
  const el = document.getElementById("cv-certificates");
  c.cv.certificates.forEach(cert => {
    el.innerHTML += `
      <div class="cv-cert-item">
        <span class="cv-cert-name">${escapeHtml(cert.name)}</span>
        <span class="cv-cert-year">${escapeHtml(cert.year)}</span>
      </div>
    `;
  });
}
