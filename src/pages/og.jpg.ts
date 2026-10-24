// Default share image at /og.jpg (blog posts point to it): the Spanish home card.
import type { APIRoute } from 'astro';
import { ogText } from '../data/og';
import { renderOgImage } from '../lib/og-image';

export const GET: APIRoute = async () => {
  const jpg = await renderOgImage('es', ogText('home', 'es'));
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
