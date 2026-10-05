import type { IconName } from '../components/ui/Icon.astro';

export interface Service {
  slug: string;
  icon: IconName;
  metaTitle: string;
  description: string;
  title: string;
  lead: string;
  signsTitle: string;
  signs: string[];
  approach: string[];
  faqs: Array<{ q: string; a: string }>;
  /** Blog posts to suggest, by slug. Drafts are skipped automatically. */
  posts: string[];
}

/**
 * Landing pages for each main reason to come to therapy. They are generated
 * by src/pages/[service].astro, one page per entry, at /<slug>/.
 */
export const SERVICES: Service[] = [
  {
    slug: 'terapia-online',
    icon: 'online',
    metaTitle: 'Terapia psicológica online en toda España',
    description:
      'Terapia psicológica online por videollamada desde cualquier lugar de España, en castellano o en catalán. Sesiones de 60 minutos por 40 €. Primera sesión 35 €.',
    title: 'Terapia psicológica online',
    lead: 'Sesiones por videollamada desde cualquier lugar de España, en castellano o en catalán. 40 € la sesión de 60 minutos.',
    signsTitle: 'Para ti si',
    signs: [
      'Vives fuera de Barcelona o viajas a menudo.',
      'Te cuesta encajar los desplazamientos en tu semana.',
      'Te sientes más a gusto hablando desde tu casa.',
      'Quieres empezar ya, sin esperar a tener tiempo para ir a consulta.',
    ],
    approach: [
      'Trabajamos igual que en consulta: mismos enfoques, misma confidencialidad. Solo necesitas un sitio tranquilo, auriculares y conexión a internet.',
    ],
    faqs: [
      {
        q: '¿Funciona igual que la terapia presencial?',
        a: 'Sí. La forma de trabajar es la misma y la relación terapéutica se construye igual.',
      },
      {
        q: '¿Qué necesito?',
        a: 'Un móvil, tablet u ordenador con cámara, conexión a internet y un sitio donde puedas hablar con tranquilidad.',
      },
      { q: '¿Cómo pago?', a: 'Por transferencia o Bizum, antes de la sesión.' },
    ],
    posts: ['empezar-terapia-dudas-frecuentes', 'senales-para-ir-al-psicologo'],
  },
  {
    slug: 'psicologa-ansiedad-barcelona',
    icon: 'anxiety',
    metaTitle: 'Psicóloga para la ansiedad en Barcelona',
    description:
      'Psicóloga para la ansiedad online y en Barcelona: insomnio, presión en el pecho, pensamientos que no paran, obsesiones y ataques de pánico. Primera sesión 35 €.',
    title: 'Psicóloga para la ansiedad, online y en Barcelona',
    lead: 'Cuando la mente no para, el cuerpo tampoco descansa. Te ayudo a entender qué mantiene tu ansiedad y a encontrar formas de calmarte que te sirvan.',
    signsTitle: 'Te reconoces si',
    signs: [
      'Insomnio, presión en el pecho o pensamientos que no paran.',
      'Anticipas constantemente que algo malo puede ocurrir.',
      'Tienes obsesiones o rumiaciones que no consigues apartar.',
      'Has tenido ataques de pánico o te da miedo que vuelvan.',
      'Te cuesta disfrutar del presente porque siempre estás pendiente del futuro.',
    ],
    approach: [
      'Primero entendemos qué dispara tu ansiedad y qué la mantiene. Después practicamos formas de regular el cuerpo y de relacionarte de otra manera con los pensamientos.',
      'Integro terapia cognitivo-conductual, terapias de tercera generación y, si hay experiencias de fondo, EMDR.',
    ],
    faqs: [
      { q: '¿Se puede trabajar online?', a: 'Sí, se trabaja igual que en consulta.' },
      {
        q: '¿Cuántas sesiones hacen falta?',
        a: 'Depende de cada persona. Lo vamos revisando sobre la marcha.',
      },
      {
        q: '¿Necesito medicación?',
        a: 'Eso lo valora tu médico. En terapia trabajamos la parte psicológica y, si hace falta, nos coordinamos.',
      },
    ],
    posts: ['como-saber-si-tengo-ansiedad', 'senales-para-ir-al-psicologo'],
  },
  {
    slug: 'terapia-emdr-barcelona',
    icon: 'trauma',
    metaTitle: 'Terapia EMDR online y en Barcelona',
    description:
      'Terapia EMDR para el trauma online y en Barcelona con una psicóloga general sanitaria formada en EMDR nivel I y II. A tu ritmo, sin tener que contarlo todo.',
    title: 'Terapia EMDR para el trauma, online y en Barcelona',
    lead: 'El trauma no siempre viene de algo extremo. A veces nace de años de críticas, abandono o relaciones inseguras, y sigue pesando en el presente.',
    signsTitle: 'Te reconoces si',
    signs: [
      'Sientes que experiencias del pasado siguen influyendo en tu presente.',
      'Vives en alerta, como si tu cuerpo no pudiera relajarse.',
      'Revives recuerdos dolorosos o evitas lo que te los recuerda.',
      'Repites patrones que no entiendes.',
      'Te cuesta confiar en los demás.',
    ],
    approach: [
      'Trabajo con EMDR (formación de nivel I y II), una terapia recomendada por la OMS para el estrés postraumático. Ayuda a procesar recuerdos que siguen activos para que pesen menos.',
      'Vamos a tu ritmo y no hace falta que lo cuentes todo de golpe.',
    ],
    faqs: [
      {
        q: '¿Qué es EMDR?',
        a: 'Una terapia que usa estimulación bilateral, por ejemplo movimientos oculares, mientras se trabaja un recuerdo. Ayuda a que el cerebro lo procese de otra manera.',
      },
      { q: '¿Se puede hacer online?', a: 'Sí.' },
      { q: '¿Tengo que contarlo todo?', a: 'No. Tú decides qué compartir y cuándo.' },
      {
        q: '¿Es solo para traumas graves?',
        a: 'No. También se usa con experiencias que parecen pequeñas pero siguen doliendo.',
      },
    ],
    posts: ['que-es-emdr-terapia-trauma', 'estilos-de-apego-relaciones', 'jovenes-el-dolor-que-nadie-ve'],
  },
  {
    slug: 'terapia-estres-burnout',
    icon: 'stress',
    metaTitle: 'Terapia para el estrés y el burnout',
    description:
      'Terapia para el estrés y el burnout online y en Barcelona: agotamiento, falta de motivación, límites en el trabajo y autoexigencia. Primera sesión 35 €.',
    title: 'Terapia para el estrés y el burnout',
    lead: 'Cuando las exigencias superan durante mucho tiempo lo que puedes sostener, el cuerpo y la mente pasan factura.',
    signsTitle: 'Te reconoces si',
    signs: [
      'Sientes que ya no puedes con todo.',
      'Estás agotado física y mentalmente, aunque descanses.',
      'Has perdido la motivación o disfrutas mucho menos de tu trabajo.',
      'Tienes la sensación de vivir en piloto automático.',
      'Te cuesta poner límites en el trabajo.',
    ],
    approach: [
      'Identificamos qué te está drenando y qué lo sostiene. Trabajamos los límites, la autoexigencia y el descanso real, para que recuperes energía y sea más difícil volver al mismo punto.',
    ],
    faqs: [
      {
        q: '¿Burnout y depresión son lo mismo?',
        a: 'No, aunque comparten síntomas como el cansancio o la falta de ganas. En la primera sesión vemos qué te está pasando.',
      },
      {
        q: '¿Tengo que dejar mi trabajo?',
        a: 'No necesariamente. Muchas veces el cambio está en cómo te relacionas con él.',
      },
    ],
    posts: ['burnout-sintomas-recuperacion', 'como-saber-si-tengo-ansiedad'],
  },
  {
    slug: 'terapia-autoestima',
    icon: 'confidence',
    metaTitle: 'Terapia para la autoestima y la autoexigencia',
    description:
      'Terapia para la autoestima y la autoexigencia, online y en Barcelona: compararte, no valorarte, no poner límites. Primera sesión 35 €.',
    title: 'Terapia para la autoestima y la autoexigencia',
    lead: 'Esa voz que te exige tanto se puede suavizar.',
    signsTitle: 'Te reconoces si',
    signs: [
      'Eres muy exigente contigo.',
      'Sientes que nunca haces las cosas lo suficientemente bien.',
      'Te comparas constantemente con los demás.',
      'Te cuesta reconocer tus logros o poner límites.',
    ],
    approach: [
      'Vemos de dónde viene tanta exigencia y qué función cumple. Trabajamos para que te trates con más cuidado y confíes más en tu criterio.',
    ],
    faqs: [
      {
        q: '¿Y si no estoy mal, solo quiero confiar más en mí?',
        a: 'Es un buen motivo para venir. No hace falta estar mal para empezar.',
      },
    ],
    posts: ['rabia-constante-necesidad-de-atacar', 'metacognicion-comprender-tu-funcionamiento'],
  },
  {
    slug: 'terapia-duelo',
    icon: 'grief',
    metaTitle: 'Terapia para el duelo, online y en Barcelona',
    description:
      'Terapia para el duelo online y en Barcelona: pérdidas, rupturas y duelos que otros no ven. Un espacio para elaborar la pérdida a tu ritmo.',
    title: 'Terapia para el duelo',
    lead: 'Perder a alguien o algo importante duele, y a veces el dolor no encuentra alivio.',
    signsTitle: 'Te reconoces si',
    signs: [
      'Sientes culpa, rabia o un vacío difícil de explicar.',
      'Te cuesta retomar tu día a día o hablar de lo que ha pasado.',
      'Es una pérdida que otros no ven: una ruptura, un proyecto, una etapa.',
    ],
    approach: [
      'La terapia es un espacio para expresar el dolor, elaborar la pérdida y avanzar a tu ritmo, sin que nadie te diga cómo deberías sentirte.',
    ],
    faqs: [
      { q: '¿Cuánto dura un duelo?', a: 'No hay un tiempo fijo. Cada duelo es distinto.' },
      {
        q: '¿Cuándo conviene pedir ayuda?',
        a: 'Cuando el dolor no cede, te impide seguir con tu vida o sientes que lo llevas en soledad.',
      },
    ],
    posts: ['el-duelo-vivir-con-una-perdida', 'estilos-de-apego-relaciones'],
  },
  {
    slug: 'crecimiento-personal',
    icon: 'self',
    metaTitle: 'Terapia para crecer, aunque estés bien',
    description:
      'Terapia de crecimiento personal online y en Barcelona: decisiones, bloqueos, límites, soledad o falta de sentido. No hace falta estar mal para empezar.',
    title: 'Terapia para crecer, aunque estés bien',
    lead: 'No hace falta estar mal para venir a terapia. A veces quieres decidir con más claridad, confiar más en ti o salir de un bloqueo.',
    signsTitle: 'Te reconoces si',
    signs: [
      'Te cuesta tomar decisiones importantes.',
      'Sabes lo que quieres cambiar, pero algo te frena.',
      'Quieres poner límites sin sentir culpa.',
      'Quieres entenderte mejor y saber por qué repites ciertas cosas.',
      'Te cuesta conectar con la gente o te sientes diferente.',
      'Te falta sentido o motivación, aunque todo vaya bien.',
      'Pasas horas y horas atrapado en el móvil o en las pantallas y quieres cambiarlo.',
    ],
    approach: [
      'Poder hacer conscientes muchos de los procesos inconscientes de nuestra vida es la clave para tener una vida plena.',
      'Ponemos sobre la mesa qué quieres cambiar y qué te frena, y avanzamos con objetivos concretos.',
    ],
    faqs: [
      {
        q: '¿Es lo mismo que coaching?',
        a: 'Es distinto. Soy psicóloga general sanitaria y trabajo también con lo que hay debajo: tu historia, tus emociones y tus patrones.',
      },
    ],
    posts: ['metacognicion-comprender-tu-funcionamiento', 'empezar-terapia-dudas-frecuentes'],
  },
];

export const serviceHref = (slug: string) => `/${slug}/`;
