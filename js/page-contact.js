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
// OWASP A07 (defence in depth): Rate-limit the email action client-side.
// Allows 3 clicks per 60 s. If exceeded, disables the button for 10 s and
// shows a friendly message instead of silently failing (graceful 429-equivalent).
// NOTE: True IP-based rate limiting requires a server-side endpoint. If a
// contact form with a backend is ever added, use express-rate-limit or a CDN
// WAF rule to enforce limits at the server level.
const emailRateLimit = createRateLimiter("contact_email", 3, 60 * 1000);
const emailButton = document.getElementById("contact-email-link-btn");
if (emailButton) {
  emailButton.textContent = c.sections.contact.ctaButtonLabel;
  emailButton.addEventListener("click", () => {
    if (!emailRateLimit()) {
      // Graceful feedback — inform the user instead of silently blocking
      const original = emailButton.textContent;
      emailButton.textContent = "Please wait…";
      emailButton.disabled = true;
      setTimeout(() => {
        emailButton.textContent = original;
        emailButton.disabled = false;
      }, 10_000);
      return;
    }
    window.location.href = `mailto:${c.personal.email}`;
  });
}

// Social Links
const linkLinkedIn = document.getElementById("link-linkedin");
if (linkLinkedIn) linkLinkedIn.href = c.links.linkedin;

const linkGithub = document.getElementById("link-github");
if (linkGithub) linkGithub.href = c.links.github;

initFooter();
