import type { IconName } from '../components/ui/Icon.astro';
import type { Locale } from '../i18n/config';
import { ROUTES, type RouteKey } from '../i18n/routes';

export interface ServiceContent {
  metaTitle: string;
  description: string;
  title: string;
  lead: string;
  signsTitle: string;
  signs: string[];
  approach: string[];
  faqs: Array<{ q: string; a: string }>;
}

export interface Service {
  /** Key in ROUTES: it gives the URL in each language. */
  key: RouteKey;
  icon: IconName;
  /** Blog posts to suggest, by slug. Drafts are skipped automatically. */
  posts: string[];
  es: ServiceContent;
  ca: ServiceContent;
}

/**
 * Landing pages for each main reason to come to therapy, in Spanish and
 * Catalan. src/pages/[service].astro and src/pages/ca/[service].astro build
 * one page per entry. The Catalan text needs a native review.
 */
export const SERVICES: Service[] = [
  {
    key: 'online',
    icon: 'online',
    posts: ['empezar-terapia-dudas-frecuentes', 'senales-para-ir-al-psicologo'],
    es: {
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
    },
    ca: {
      metaTitle: 'Teràpia psicològica en línia a tot Espanya',
      description:
        "Teràpia psicològica en línia per videotrucada des de qualsevol lloc d'Espanya, en català o en castellà. Sessions de 60 minuts per 40 €. Primera sessió 35 €.",
      title: 'Teràpia psicològica en línia',
      lead: "Sessions per videotrucada des de qualsevol lloc d'Espanya, en català o en castellà. 40 € la sessió de 60 minuts.",
      signsTitle: 'Per a tu si',
      signs: [
        'Vius fora de Barcelona o viatges sovint.',
        'Et costa encaixar els desplaçaments a la teva setmana.',
        'Et sents més a gust parlant des de casa.',
        'Vols començar ja, sense esperar a tenir temps per anar a la consulta.',
      ],
      approach: [
        'Treballem igual que a la consulta: els mateixos enfocaments, la mateixa confidencialitat. Només necessites un lloc tranquil, auriculars i connexió a internet.',
      ],
      faqs: [
        {
          q: 'Funciona igual que la teràpia presencial?',
          a: 'Sí. La manera de treballar és la mateixa i la relació terapèutica es construeix igual.',
        },
        {
          q: 'Què necessito?',
          a: 'Un mòbil, una tauleta o un ordinador amb càmera, connexió a internet i un lloc on puguis parlar amb tranquil·litat.',
        },
        { q: 'Com pago?', a: 'Per transferència o Bizum, abans de la sessió.' },
      ],
    },
  },
  {
    key: 'anxiety',
    icon: 'anxiety',
    posts: ['como-saber-si-tengo-ansiedad', 'senales-para-ir-al-psicologo'],
    es: {
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
    },
    ca: {
      metaTitle: "Psicòloga per a l'ansietat a Barcelona",
      description:
        "Psicòloga per a l'ansietat en línia i a Barcelona: insomni, pressió al pit, pensaments que no s'aturen, obsessions i atacs de pànic. Primera sessió 35 €.",
      title: "Psicòloga per a l'ansietat, en línia i a Barcelona",
      lead: "Quan la ment no s'atura, el cos tampoc descansa. T'ajudo a entendre què manté la teva ansietat i a trobar maneres de calmar-te que et serveixin.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        "Insomni, pressió al pit o pensaments que no s'aturen.",
        'Anticipes constantment que pot passar alguna cosa dolenta.',
        'Tens obsessions o rumiacions que no aconsegueixes apartar.',
        'Has tingut atacs de pànic o et fa por que tornin.',
        'Et costa gaudir del present perquè sempre estàs pendent del futur.',
      ],
      approach: [
        "Primer entenem què dispara la teva ansietat i què la manté. Després practiquem maneres de regular el cos i de relacionar-te d'una altra manera amb els pensaments.",
        'Integro teràpia cognitivoconductual, teràpies de tercera generació i, si hi ha experiències de fons, EMDR.',
      ],
      faqs: [
        { q: 'Es pot treballar en línia?', a: 'Sí, es treballa igual que a la consulta.' },
        { q: 'Quantes sessions calen?', a: 'Depèn de cada persona. Ho anem revisant sobre la marxa.' },
        {
          q: 'Necessito medicació?',
          a: 'Això ho valora el teu metge. A teràpia treballem la part psicològica i, si cal, ens coordinem.',
        },
      ],
    },
  },
  {
    key: 'emdr',
    icon: 'trauma',
    posts: ['que-es-emdr-terapia-trauma', 'estilos-de-apego-relaciones', 'jovenes-el-dolor-que-nadie-ve'],
    es: {
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
    },
    ca: {
      metaTitle: 'Teràpia EMDR en línia i a Barcelona',
      description:
        "Teràpia EMDR per al trauma en línia i a Barcelona amb una psicòloga general sanitària formada en EMDR nivell I i II. Al teu ritme, sense haver-ho d'explicar tot.",
      title: 'Teràpia EMDR per al trauma, en línia i a Barcelona',
      lead: "El trauma no sempre ve d'una cosa extrema. De vegades neix d'anys de crítiques, abandonament o relacions insegures, i continua pesant en el present.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Sents que experiències del passat continuen influint en el teu present.',
        'Vius en alerta, com si el teu cos no es pogués relaxar.',
        "Revius records dolorosos o evites el que te'ls recorda.",
        'Repeteixes patrons que no entens.',
        'Et costa confiar en els altres.',
      ],
      approach: [
        "Treballo amb EMDR (formació de nivell I i II), una teràpia recomanada per l'OMS per a l'estrès posttraumàtic. Ajuda a processar records que continuen actius perquè pesin menys.",
        'Anem al teu ritme i no cal que ho expliquis tot de cop.',
      ],
      faqs: [
        {
          q: "Què és l'EMDR?",
          a: "Una teràpia que fa servir estimulació bilateral, per exemple moviments oculars, mentre es treballa un record. Ajuda que el cervell el processi d'una altra manera.",
        },
        { q: 'Es pot fer en línia?', a: 'Sí.' },
        { q: "Ho he d'explicar tot?", a: 'No. Tu decideixes què comparteixes i quan.' },
        {
          q: 'És només per a traumes greus?',
          a: 'No. També es fa servir amb experiències que semblen petites però que continuen fent mal.',
        },
      ],
    },
  },
  {
    key: 'stress',
    icon: 'stress',
    posts: ['burnout-sintomas-recuperacion', 'como-saber-si-tengo-ansiedad'],
    es: {
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
    },
    ca: {
      metaTitle: "Teràpia per a l'estrès i el burnout",
      description:
        "Teràpia per a l'estrès i el burnout en línia i a Barcelona: esgotament, falta de motivació, límits a la feina i autoexigència. Primera sessió 35 €.",
      title: "Teràpia per a l'estrès i el burnout",
      lead: 'Quan les exigències superen durant molt de temps el que pots sostenir, el cos i la ment en passen factura.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Sents que ja no pots amb tot.',
        'Estàs esgotat físicament i mentalment, encara que descansis.',
        'Has perdut la motivació o gaudeixes molt menys de la teva feina.',
        'Tens la sensació de viure amb el pilot automàtic.',
        'Et costa posar límits a la feina.',
      ],
      approach: [
        "Identifiquem què t'està esgotant i què ho sosté. Treballem els límits, l'autoexigència i el descans real, perquè recuperis energia i sigui més difícil tornar al mateix punt.",
      ],
      faqs: [
        {
          q: 'El burnout i la depressió són el mateix?',
          a: 'No, tot i que comparteixen símptomes com el cansament o la falta de ganes. A la primera sessió veiem què et passa.',
        },
        {
          q: 'He de deixar la feina?',
          a: "No necessàriament. Moltes vegades el canvi és en com t'hi relaciones.",
        },
      ],
    },
  },
  {
    key: 'selfEsteem',
    icon: 'confidence',
    posts: ['rabia-constante-necesidad-de-atacar', 'metacognicion-comprender-tu-funcionamiento'],
    es: {
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
    },
    ca: {
      metaTitle: "Teràpia per a l'autoestima i l'autoexigència",
      description:
        "Teràpia per a l'autoestima i l'autoexigència, en línia i a Barcelona: comparar-te, no valorar-te, no posar límits. Primera sessió 35 €.",
      title: "Teràpia per a l'autoestima i l'autoexigència",
      lead: "Aquesta veu que t'exigeix tant es pot suavitzar.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Ets molt exigent amb tu.',
        'Sents que mai no fas les coses prou bé.',
        'Et compares constantment amb els altres.',
        'Et costa reconèixer els teus èxits o posar límits.',
      ],
      approach: [
        "Veiem d'on ve tanta exigència i quina funció té. Treballem perquè et tractis amb més cura i confiïs més en el teu criteri.",
      ],
      faqs: [
        {
          q: 'I si no estic malament, només vull confiar més en mi?',
          a: 'És un bon motiu per venir. No cal estar malament per començar.',
        },
      ],
    },
  },
  {
    key: 'grief',
    icon: 'grief',
    posts: ['el-duelo-vivir-con-una-perdida', 'estilos-de-apego-relaciones'],
    es: {
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
    },
    ca: {
      metaTitle: 'Teràpia per al dol, en línia i a Barcelona',
      description:
        'Teràpia per al dol en línia i a Barcelona: pèrdues, ruptures i dols que els altres no veuen. Un espai per elaborar la pèrdua al teu ritme.',
      title: 'Teràpia per al dol',
      lead: 'Perdre algú o alguna cosa important fa mal, i de vegades el dolor no troba alleujament.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        "Sents culpa, ràbia o un buit difícil d'explicar.",
        'Et costa reprendre el dia a dia o parlar del que ha passat.',
        'És una pèrdua que els altres no veuen: una ruptura, un projecte, una etapa.',
      ],
      approach: [
        "La teràpia és un espai per expressar el dolor, elaborar la pèrdua i avançar al teu ritme, sense que ningú et digui com t'hauries de sentir.",
      ],
      faqs: [
        { q: 'Quant dura un dol?', a: 'No hi ha un temps fix. Cada dol és diferent.' },
        {
          q: 'Quan convé demanar ajuda?',
          a: "Quan el dolor no cedeix, t'impedeix continuar amb la teva vida o sents que el portes en solitud.",
        },
      ],
    },
  },
  {
    key: 'growth',
    icon: 'self',
    posts: ['metacognicion-comprender-tu-funcionamiento', 'empezar-terapia-dudas-frecuentes'],
    es: {
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
    },
    ca: {
      metaTitle: 'Teràpia per créixer, encara que estiguis bé',
      description:
        'Teràpia de creixement personal en línia i a Barcelona: decisions, bloquejos, límits, solitud o falta de sentit. No cal estar malament per començar.',
      title: 'Teràpia per créixer, encara que estiguis bé',
      lead: "No cal estar malament per venir a teràpia. De vegades vols decidir amb més claredat, confiar més en tu o sortir d'un bloqueig.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et costa prendre decisions importants.',
        "Saps què vols canviar, però alguna cosa t'atura.",
        'Vols posar límits sense sentir culpa.',
        "Vols entendre't millor i saber per què repeteixes certes coses.",
        'Et costa connectar amb la gent o et sents diferent.',
        'Et falta sentit o motivació, encara que tot vagi bé.',
        'Passes hores i hores atrapat al mòbil o a les pantalles i ho vols canviar.',
      ],
      approach: [
        'Poder fer conscients molts dels processos inconscients de la nostra vida és la clau per tenir una vida plena.',
        "Posem sobre la taula què vols canviar i què t'atura, i avancem amb objectius concrets.",
      ],
      faqs: [
        {
          q: 'És el mateix que el coaching?',
          a: 'És diferent. Soc psicòloga general sanitària i treballo també amb el que hi ha a sota: la teva història, les teves emocions i els teus patrons.',
        },
      ],
    },
  },
];

/** URL slug of a service in a language, without slashes or the /ca/ prefix. */
export function serviceSlug(service: Service, locale: Locale): string {
  const route: Partial<Record<Locale, string>> & { es: string } = ROUTES[service.key];
  return (route[locale] ?? route.es).replace(/^\/(ca\/)?|\/$/g, '');
}
