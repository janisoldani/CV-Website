// js/page-contact.js

initNavbar();

// Section-Titel
setText("contact-title", c.sections.contact.title);
setText("contact-subtitle", c.sections.contact.subtitle);
setText("contact-intro", c.sections.contact.introText);
setText("contact-email-label-prefix", c.sections.contact.emailLabelPrefix);

// E-Mail-Link
const emailLink = document.getElementById("contact-email-link");
if (emailLink) {
  emailLink.textContent = c.personal.email;
  emailLink.href = `mailto:${c.personal.email}`;
}

// E-Mail-Button
const emailButton = document.getElementById("contact-email-link-btn");
if (emailButton) {
  emailButton.textContent = c.sections.contact.ctaButtonLabel;
  emailButton.addEventListener("click", () => {
    window.location.href = `mailto:${c.personal.email}`;
  });
}

// Social Links
const linkLinkedIn = document.getElementById("link-linkedin");
if (linkLinkedIn) linkLinkedIn.href = c.links.linkedin;

const linkGithub = document.getElementById("link-github");
if (linkGithub) linkGithub.href = c.links.github;

initFooter();
