// WhatsApp link with a pre-filled first message. The text is neutral on
// purpose: nothing about the reason for therapy, which would be health data.
export function whatsappUrl(text: string) {
  return `https://wa.me/34611193569?text=${encodeURIComponent(text)}`;
}

export const FREE_CALL_WHATSAPP = whatsappUrl(
  'Hola Maria, me gustaría pedir la llamada informativa gratuita de 15 minutos.'
);

// Same links with the first message in Catalan, for the Catalan pages.
export const WHATSAPP_BY_LOCALE = {
  es: whatsappUrl('Hola Maria, me gustaría pedir información.'),
  ca: whatsappUrl("Hola Maria, m'agradaria demanar informació."),
} as const;

export const FREE_CALL_BY_LOCALE = {
  es: FREE_CALL_WHATSAPP,
  ca: whatsappUrl("Hola Maria, m'agradaria demanar la trucada informativa gratuïta de 15 minuts."),
} as const;

export const SITE = {
  person: 'Maria Morales',
  role: 'Psicóloga General Sanitaria',
  roleCa: 'Psicòloga General Sanitària',
  name: 'Maria Morales · Psicóloga',
  brand: 'PsicoMariaMorales',
  tagline: 'Psicóloga sanitaria en Barcelona · Terapia presencial y online',
  doctoralia: 'https://www.doctoralia.es/maria-morales-herrerias/psicologo/barcelona',
  licenseNumber: '35153',
  // Shown as "+7 años acompañando a personas" on the home and about pages.
  experienceYears: 7,
  // Public profile at the Col·legi Oficial de Psicologia de Catalunya
  copc: 'https://www.copc.cat/es/contacte/maria-morales-herrerias-179636',
  phone: '+34 611 19 35 69',
  // How the number is shown on the page: the local format people dial,
  // without the +34 that confuses many older visitors.
  phoneLocal: '611 19 35 69',
  phoneHref: 'tel:+34611193569',
  whatsapp: whatsappUrl('Hola Maria, me gustaría pedir información.'),
  email: 'info@psicomariamorales.com',
  address: 'Carrer de los Castillejos, 326, Eixample, 08025 Barcelona',
  // Same address split for structured data, plus its coordinates. If the
  // practice moves, update these three together with `address` and `maps`.
  postalAddress: { street: 'Carrer de los Castillejos, 326', postalCode: '08025', locality: 'Barcelona' },
  geo: { latitude: 41.40945, longitude: 2.17465 },
  // Google Business Profile: the reviews and the map both open here.
  maps: 'https://maps.app.goo.gl/9Kkk12zpmd7HVBC27',
  schedule: 'De 9:00 a 21:00 h',
  scheduleCa: 'De 9.00 a 21.00 h',
  linkedin: 'https://www.linkedin.com/in/maria-morales-herrer%C3%ADas-7213a0175/',
  instagram: 'https://www.instagram.com/psicomariamorales/',
};

// Single source for session prices and lengths. Pricing page, schema and any
// copy that quotes a price read from here, so a change is made in one place
// (and then mirrored by hand on Doctoralia).
export const PRICES = {
  firstSession: { amount: 35, minutes: 60 },
  online: { amount: 40, minutes: 60 },
  inPerson: { amount: 50, minutes: 60 },
  couple: { amount: 70, minutes: 90 },
} as const;

export const formatPrice = (amount: number) => `${amount} €`;

const amounts = Object.values(PRICES).map((p) => p.amount);
export const PRICE_RANGE = `${formatPrice(Math.min(...amounts))} - ${formatPrice(Math.max(...amounts))}`;

// Public reviews shown on the site. Update by hand when new ones come in: the
// site never copies review texts, it shows the aggregate and links out.
export const REVIEWS: {
  doctoralia: { rating: number; count: number; slug: string };
  // Google Business Profile. Leave count at 0 until there are reviews: the
  // site then shows only the link, without a rating.
  google: { rating: number; count: number; url: string };
} = {
  doctoralia: { rating: 5, count: 3, slug: 'maria-morales-herrerias' },
  google: { rating: 0, count: 0, url: SITE.maps },
};

// The only host that is public, indexed and measured. Every other host (the
// workers.dev deployment, previews, localhost) is a test environment.
export const PRODUCTION_HOST = 'psicomariamorales.com';

export const ANALYTICS = {
  // Umami Cloud account on the EU region: statistics are hosted in the EU,
  // which is what the privacy policy states.
  umamiSrc: 'https://cloud.umami.is/script.js',
  umamiWebsiteId: 'a03ab628-fc28-4501-8127-93ccdc1f6dd6',
};
