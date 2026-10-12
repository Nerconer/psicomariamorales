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
  // Public profile at the Col·legi Oficial de Psicologia de Catalunya
  copc: 'https://www.copc.cat/es/contacte/maria-morales-herrerias-179636',
  phone: '+34 611 19 35 69',
  phoneHref: 'tel:+34611193569',
  whatsapp: whatsappUrl('Hola Maria, me gustaría pedir información.'),
  email: 'info@psicomariamorales.com',
  address: 'Carrer de los Castillejos, 326, Eixample, 08025 Barcelona',
  // Same address split for structured data, plus its coordinates. If the
  // practice moves, update these three together with `address` and `maps`.
  postalAddress: { street: 'Carrer de los Castillejos, 326', postalCode: '08025', locality: 'Barcelona' },
  geo: { latitude: 41.40945, longitude: 2.17465 },
  maps: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x12a4a2daca5fde37:0x2af25dd8aff241ca?sa=X&ved=1t:8290&ictx=111',
  schedule: 'De 9:00 a 19:00 h',
  scheduleCa: 'De 9.00 a 19.00 h',
  linkedin: 'https://www.linkedin.com/in/maria-morales-herrer%C3%ADas-7213a0175/',
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
  doctoralia: { rating: 5, count: 2, slug: 'maria-morales-herrerias' },
  google: { rating: 0, count: 0, url: SITE.maps },
};

export const ANALYTICS = {
  // Umami Cloud account on the EU region: statistics are hosted in the EU,
  // which is what the privacy policy states.
  umamiSrc: 'https://cloud.umami.is/script.js',
  umamiWebsiteId: 'da719459-4222-4708-998b-4ca98794f3d2',
};
