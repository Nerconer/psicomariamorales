// Share image of each translated page (/og/<locale>-<key>.jpg), generated at
// build time from the page's own headline, the prices and the design tokens.
import type { APIRoute, GetStaticPaths } from 'astro';
import { OG_KEYS, ogText, type OgKey } from '../../data/og';
import { LOCALES, type Locale } from '../../i18n/config';
import { renderOgImage } from '../../lib/og-image';

export const getStaticPaths = (() =>
  (Object.keys(LOCALES) as Locale[]).flatMap((locale) =>
    OG_KEYS.map((key) => ({ params: { image: `${locale}-${key}` }, props: { locale, key } }))
  )) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { locale, key } = props as { locale: Locale; key: OgKey };
  const jpg = await renderOgImage(locale, ogText(key, locale));
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
