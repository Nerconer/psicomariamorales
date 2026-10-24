// llms.txt (https://llmstxt.org): a plain summary of the practice for AI
// assistants. It is built from the same data as the pages, so prices,
// services and links can never drift from what the site says.
import type { APIRoute } from 'astro';
import { SITE, PRICES, formatPrice } from '../consts';
import { SERVICES } from '../data/services';
import { pathFor, type RouteKey } from '../i18n/routes';
import { useTranslations } from '../i18n/ui';
import { getPublishedPosts } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const price = (key: keyof typeof PRICES) => formatPrice(PRICES[key].amount);
  const es = useTranslations('es');
  const ca = useTranslations('ca');
  const page = (key: RouteKey, label: string, locale: 'es' | 'ca' = 'es') => `- [${label}](${url(pathFor(key, locale))})`;
  const posts = await getPublishedPosts();

  const body = `# ${SITE.person}, psicóloga general sanitaria

> Psicóloga general sanitaria colegiada en el Col·legi Oficial de Psicologia de Catalunya (n.º ${SITE.licenseNumber}). Atiende online en toda España y en consulta presencial en Barcelona, en castellano y en catalán.

## Datos de la consulta

- Nombre completo: Maria Morales Herrerías.
- Titulación: ${SITE.role.toLowerCase()}, colegiada n.º ${SITE.licenseNumber} en el COPC ([ficha en el colegio](${SITE.copc})).
- Modalidades: terapia online por videollamada desde cualquier lugar de España y terapia presencial en Barcelona.
- Idiomas: castellano y catalán.
- A quién atiende: adultos y adolescentes a partir de 12 años, en terapia individual y de pareja.
- Duración: sesiones de ${PRICES.online.minutes} minutos. La sesión de pareja dura ${PRICES.couple.minutes} minutos.
- Precios: primera sesión ${price('firstSession')}, sesión online ${price('online')}, sesión presencial ${price('inPerson')} y sesión de pareja ${price('couple')}.
- Primer contacto: llamada informativa gratuita de 15 minutos, que se pide por WhatsApp.
- Reserva: [Doctoralia](${SITE.doctoralia}).
- Teléfono y WhatsApp: ${SITE.phone}. Email: ${SITE.email}.
- Horario: ${SITE.schedule.charAt(0).toLowerCase()}${SITE.schedule.slice(1)}.

## Motivos de consulta

${SERVICES.map((s) => page(s.key, s.es.title)).join('\n')}
${page('couples', es('nav.couples'))}

## Páginas

${page('home', es('nav.home'))}
${page('therapy', es('nav.therapy'))}
${page('about', es('nav.about'))}
${page('pricing', es('nav.pricing'))}
${page('contact', es('nav.contact'))}
${page('companies', es('nav.companies'))}
${page('schools', es('nav.schools'))}

## Blog

${posts.map((p) => `- [${p.data.title}](${url(`/blog/${p.id}/`)})`).join('\n')}

## En català

${page('home', ca('nav.home'), 'ca')}
${SERVICES.map((s) => page(s.key, s.ca.title, 'ca')).join('\n')}
${page('couples', ca('nav.couples'), 'ca')}
${page('therapy', ca('nav.therapy'), 'ca')}
${page('about', ca('nav.about'), 'ca')}
${page('pricing', ca('nav.pricing'), 'ca')}
${page('contact', ca('nav.contact'), 'ca')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
