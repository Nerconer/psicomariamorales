// Content Security Policy, shared by the two deployments. The Worker in front
// of workers.dev sends it as a header. GitHub Pages cannot set headers, so the
// layout also writes it in a <meta> tag, which is what applies in production.
//
// Inline scripts are allowed because Astro inlines its small component scripts.
// Third parties are limited to the analytics provider and to Doctoralia, whose
// widget only loads after the visitor clicks for it.
const DIRECTIVES = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cloud.umami.is https://platform.docplanner.com",
  "connect-src 'self' https://cloud.umami.is https://api-gateway.umami.dev",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://platform.docplanner.com",
  "frame-src https://*.doctoralia.es https://*.docplanner.com",
  "font-src 'self' data:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
];

export const CSP_HEADER = DIRECTIVES.join('; ');

// Browsers ignore frame-ancestors in a <meta> tag and warn about it in the
// console, so it only goes in the header.
export const CSP_META = DIRECTIVES.filter((d) => !d.startsWith('frame-ancestors')).join('; ');
