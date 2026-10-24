// Thin Worker in front of the static build. It serves the test deployment on
// workers.dev and its preview URLs, which must never be indexed. Production
// (main) is published on GitHub Pages; the production checks are kept so this
// Worker stays safe if it is ever put in front of the real domain again.

import { CSP_HEADER } from '../src/csp';
import { PRODUCTION_HOST } from '../src/consts';

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const SECURITY_HEADERS: Record<string, string> = {
  'Content-Security-Policy': CSP_HEADER,
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
};

const BLOCK_ALL_ROBOTS = 'User-agent: *\nDisallow: /\n';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const isProduction = url.hostname === PRODUCTION_HOST;

    if (url.hostname === `www.${PRODUCTION_HOST}`) {
      url.hostname = PRODUCTION_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (!isProduction && url.pathname === '/robots.txt') {
      return new Response(BLOCK_ALL_ROBOTS, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex, nofollow' },
      });
    }

    const assetResponse = await env.ASSETS.fetch(request);
    const response = new Response(assetResponse.body, assetResponse);

    for (const [name, value] of Object.entries(SECURITY_HEADERS)) response.headers.set(name, value);

    // Files under /_astro/ carry a content hash in their name, so they never
    // change and can be cached for a year.
    if (url.pathname.startsWith('/_astro/'))
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    if (!isProduction) response.headers.set('X-Robots-Tag', 'noindex, nofollow');

    return response;
  },
};
