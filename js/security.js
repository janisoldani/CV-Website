// js/security.js — Client-side security hardening utilities
// OWASP Top 10 2021 aligned. Load BEFORE content.js and all page scripts.
//
// This site is a 100% static portfolio with no server, no user-submitted forms,
// and no API keys. The attack surface is small, but these defences harden it:
//
//   A03 Injection         — validateUrlParam, getSafeHref, safeSetSrc, isValidYouTubeId
//   A05 Misconfiguration  — CSP / referrer meta tags added to every HTML page
//   A07 Auth failures     — N/A (no auth); createRateLimiter guards the email action
//
// ── API KEY GUIDANCE (for future server/API additions) ────────────────────────
//   If you ever add a backend or call an API (e.g. OpenAI, Garmin):
//     1. NEVER hardcode API keys in JS files that are served to the browser.
//     2. Store secrets in environment variables on the server (.env, not committed).
//     3. Call the API from a server-side function / serverless endpoint only.
//     4. The browser receives only the endpoint's sanitised response — never the key.
//     5. Rotate any key that has ever been committed to git via the provider dashboard.
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// 1. URL PROTOCOL VALIDATION  (OWASP A03 — Injection)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the URL unchanged if its protocol is in the allowlist; "#" otherwise.
 * Relative paths (no colon) are treated as same-origin and always allowed.
 *
 * Use safeSetHref() to set a DOM property.
 * For innerHTML template literals wrap with escapeHtml():
 *   `href="${escapeHtml(getSafeHref(url))}"`
 *
 * @param {string}   url      Raw URL string from content.js
 * @param {string[]} allowed  Allowlisted protocols (default: https, mailto)
 * @returns {string}          Original URL if valid, "#" if rejected
 */
function getSafeHref(url, allowed = ["https:", "mailto:"]) {
  if (typeof url !== "string" || url.trim() === "") return "#";
  // Relative paths are same-origin — allow without protocol check
  if (!url.includes(":")) return url;
  try {
    const { protocol } = new URL(url, window.location.href);
    return allowed.includes(protocol) ? url : "#";
  } catch {
    return "#"; // Malformed URL
  }
}

/**
 * Safely sets an anchor element's href after validating the URL protocol.
 * Uses the DOM property setter which handles encoding — do NOT escapeHtml here.
 *
 * @param {HTMLElement} el       Anchor element
 * @param {string}      url      URL from content.js
 * @param {string[]}    allowed  Allowlisted protocols
 */
function safeSetHref(el, url, allowed = ["https:", "mailto:"]) {
  if (el) el.href = getSafeHref(url, allowed);
}


// ─────────────────────────────────────────────────────────────────────────────
// 2. IMAGE SRC VALIDATION  (OWASP A03 — Injection)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Safely sets an img element's src after validating it is a same-origin relative
 * path or an absolute HTTPS URL. Rejects javascript:, data:, http:, blob:.
 *
 * @param {HTMLImageElement} el   Image element
 * @param {string}           src  Path or URL from content.js
 */
function safeSetSrc(el, src) {
  if (!el || typeof src !== "string" || src.trim() === "") return;
  // Relative paths (no protocol) are same-origin — always safe
  if (!src.startsWith("//") && !src.includes("://")) {
    el.src = src;
    return;
  }
  try {
    const { protocol } = new URL(src);
    if (protocol === "https:") {
      el.src = src; // Only HTTPS absolute URLs are accepted
    }
    // http:, javascript:, data:, blob: are silently rejected
  } catch {
    // Malformed URL — do not set src
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// 3. URL PARAMETER VALIDATION  (OWASP A03 — Injection)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Validates a URL query parameter value against an allowlist pattern and length
 * limit. Returns the value if valid, null otherwise.
 *
 * The only user-controlled input on this static site is the ?id= parameter in
 * project-detail.html. Validate before any lookup or DOM operation.
 *
 * @param {string|null} value     Raw value from URLSearchParams.get()
 * @param {object}      opts
 *   maxLength {number}   Maximum character count (default: 64)
 *   pattern   {RegExp}   Allowlist regex (default: alphanumeric + hyphens)
 * @returns {string|null}         Validated value, or null if invalid/missing
 */
function validateUrlParam(value, opts = {}) {
  if (value === null || typeof value !== "string") return null;
  const maxLength = opts.maxLength ?? 64;
  const pattern   = opts.pattern   ?? /^[a-zA-Z0-9-]+$/;
  // Reject empty strings and anything exceeding the length limit
  if (value.length === 0 || value.length > maxLength) return null;
  // Allowlist validation — rejects anything not matching the expected format
  if (!pattern.test(value)) return null;
  return value;
}


// ─────────────────────────────────────────────────────────────────────────────
// 4. YOUTUBE ID VALIDATION  (OWASP A03 — Injection)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns true only if id is a valid YouTube video ID (exactly 11 base64url
 * characters). Prevents arbitrary URL injection into iframe src attributes.
 *
 * @param {string} id  YouTube video ID from content.js
 * @returns {boolean}
 */
function isValidYouTubeId(id) {
  // YouTube IDs are always exactly 11 characters from the base64url alphabet
  return typeof id === "string" && /^[A-Za-z0-9_-]{11}$/.test(id);
}


// ─────────────────────────────────────────────────────────────────────────────
// 5. CLIENT-SIDE RATE LIMITER  (OWASP A07 — defence in depth)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Creates a sliding-window rate limiter backed by localStorage.
 *
 * IMPORTANT: This is a client-side defence only. It prevents accidental rapid
 * re-clicks and makes abuse marginally harder, but a determined user can bypass
 * it by clearing localStorage. For true rate limiting (by IP or session):
 *   — Use server middleware: express-rate-limit, Fastify rate-limit, etc.
 *   — Or configure a CDN/WAF rule (Cloudflare Rate Limiting, AWS WAF, etc.)
 * Add this when a contact form or any server endpoint is introduced.
 *
 * @param {string} key       Unique localStorage key for this action
 * @param {number} maxCalls  Maximum calls allowed within the window
 * @param {number} windowMs  Sliding time window in milliseconds
 * @returns {function(): boolean}  Call this to check: true = allowed, false = throttled
 */
function createRateLimiter(key, maxCalls, windowMs) {
  const storageKey = `_rl_${key}`;
  return function isAllowed() {
    const now = Date.now();
    let timestamps = [];
    try {
      const stored = localStorage.getItem(storageKey);
      const parsed = stored ? JSON.parse(stored) : [];
      timestamps = Array.isArray(parsed) ? parsed : [];
    } catch {
      timestamps = [];
    }
    // Slide the window: discard timestamps older than windowMs
    timestamps = timestamps.filter(ts => now - ts < windowMs);
    if (timestamps.length >= maxCalls) {
      try { localStorage.setItem(storageKey, JSON.stringify(timestamps)); } catch { /* quota */ }
      return false; // Throttled
    }
    timestamps.push(now);
    try { localStorage.setItem(storageKey, JSON.stringify(timestamps)); } catch { /* quota */ }
    return true; // Allowed
  };
}
