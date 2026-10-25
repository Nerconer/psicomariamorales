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
        { q: '¿Cómo pago?', a: 'Por transferencia o Bizum, al acabar la sesión.' },
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
        { q: 'Com pago?', a: 'Per transferència o Bizum, en acabar la sessió.' },
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
  // Pages added for every card of the therapy page. Drafted for
  // Maria's review: the Spanish and the Catalan text are pending her validation.
  {
    key: 'panic',
    icon: 'panic',
    posts: ['como-saber-si-tengo-ansiedad', 'senales-para-ir-al-psicologo'],
    es: {
      metaTitle: 'Psicóloga para ataques de pánico en Barcelona',
      description:
        'Terapia para ataques de pánico online y en Barcelona: miedo repentino, síntomas físicos que asustan y miedo a que vuelvan. Un espacio para entenderlo.',
      title: 'Terapia para los ataques de pánico',
      lead: 'Un miedo intenso y repentino, con síntomas físicos que asustan. Te ayudo a entender qué le pasa a tu cuerpo y a perderle el miedo.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Sientes un miedo intenso que aparece de golpe.',
        'Se te acelera el corazón, te falta el aire o notas mareo, temblores o presión en el pecho.',
        'Has pensado que te desmayabas, que perdías el control o que te pasaba algo grave.',
        'Te da miedo que vuelva y empiezas a evitar lugares o situaciones.',
        'Estás pendiente de cada sensación del cuerpo por si es el principio de otro ataque.',
      ],
      approach: [
        'Empezamos explicando qué le pasa al cuerpo durante un ataque y por qué el miedo al miedo lo mantiene. Practicamos técnicas somáticas, como la respiración y la orientación al entorno, para que tengas algo a lo que agarrarte cuando empieza.',
        'Combino TCC y ACT para cambiar cómo te relacionas con las sensaciones y volver poco a poco a lo que has dejado de hacer.',
      ],
      faqs: [
        { q: '¿Un ataque de pánico es peligroso?', a: 'Es muy desagradable y asusta, pero pasa. Si es la primera vez o tienes dudas, conviene que te vea también un médico.' },
        { q: '¿Qué hago cuando me viene uno?', a: 'En terapia practicamos la respiración y la orientación al entorno, para que las tengas a mano cuando las necesites.' },
        { q: '¿Podré volver a hacer lo que evito?', a: 'Ese es el objetivo. Vamos poco a poco, a tu ritmo, empezando por lo que te resulta más llevadero.' },
      ],
    },
    ca: {
      metaTitle: 'Psicòloga per als atacs de pànic a Barcelona',
      description:
        'Teràpia per als atacs de pànic en línia i a Barcelona: por intensa i sobtada, símptomes físics que espanten i por que tornin. Un espai per entendre-ho.',
      title: 'Teràpia per als atacs de pànic',
      lead: "Una por intensa i sobtada, amb símptomes físics que espanten. T'ajudo a entendre què li passa al teu cos i a perdre-li la por.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Sents una por intensa que apareix de cop.',
        "Se't accelera el cor, et falta l'aire o notes mareig, tremolors o pressió al pit.",
        'Has pensat que et desmaiaves, que perdries el control o que et passava alguna cosa greu.',
        'Et fa por que torni i comences a evitar llocs o situacions.',
        "Estàs pendent de cada sensació del cos per si és el principi d'un altre atac.",
      ],
      approach: [
        "Comencem explicant què li passa al cos durant un atac i per què la por a la por el manté. Practiquem tècniques somàtiques, com la respiració i l'orientació a l'entorn, perquè tinguis on agafar-te quan comença.",
        'Combino TCC i ACT per canviar com et relaciones amb les sensacions i tornar a poc a poc al que has deixat de fer.',
      ],
      faqs: [
        { q: 'Un atac de pànic és perillós?', a: 'És molt desagradable i espanta, però passa. Si és el primer cop o tens dubtes, convé que et vegi també un metge.' },
        { q: 'Què faig quan em ve un?', a: "A teràpia practiquem la respiració i l'orientació a l'entorn, perquè les tinguis a mà quan les necessitis." },
        { q: 'Podré tornar a fer el que evito?', a: "Aquest és l'objectiu. Anem a poc a poc, al teu ritme, començant pel que et resulta més assumible." },
      ],
    },
  },
  {
    key: 'intrusive',
    icon: 'anxiety',
    posts: ['como-saber-si-tengo-ansiedad', 'metacognicion-comprender-tu-funcionamiento'],
    es: {
      metaTitle: 'Pensamientos intrusivos y obsesiones en Barcelona',
      description:
        'Terapia para pensamientos intrusivos, obsesiones y compulsiones online y en Barcelona: ideas que aparecen sin querer y acciones que repites para calmarte.',
      title: 'Pensamientos intrusivos, obsesiones y compulsiones',
      lead: 'Ideas o imágenes que aparecen sin querer y generan malestar. Te ayudo a entender cómo funcionan y a que pesen menos.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Te vienen ideas o imágenes que no quieres y que te generan mucho malestar.',
        'Te asustan o te dan vergüenza, y por eso no se las cuentas a nadie.',
        'Repites comprobaciones, rituales o pensamientos para sentirte mejor.',
        'El alivio dura poco y después tienes que volver a repetirlo.',
        'Le dedicas mucho tiempo y energía, y condiciona tu día a día.',
      ],
      approach: [
        'Empezamos entendiendo cómo funciona el ciclo: el pensamiento aparece, genera malestar y la acción que haces para calmarte acaba alimentándolo. Esas acciones repetidas son las compulsiones, y forman parte de lo que se suele llamar TOC. Aquí no ponemos ninguna etiqueta por delante, miramos qué te pasa a ti.',
        'Trabajo con TCC y ACT para que aprendas a tener esos pensamientos sin pelearte con ellos ni obedecerlos, y con técnicas de regulación corporal para el malestar que traen.',
      ],
      faqs: [
        { q: '¿Tener estos pensamientos significa que soy mala persona?', a: 'No. Los pensamientos intrusivos son muy comunes. Lo que más pesa es el malestar que te generan, y es lo que trabajamos.' },
        { q: '¿Tengo que contar todo lo que pienso?', a: 'Tú decides qué compartes y cuándo. Aquí no se juzga lo que te pasa por la cabeza.' },
        { q: '¿Es TOC?', a: 'Eso no lo puede decir una página web. Lo vemos en consulta y, si hace falta que te valore también un médico o un psiquiatra, lo hablamos.' },
      ],
    },
    ca: {
      metaTitle: 'Pensaments intrusius i obsessions a Barcelona',
      description:
        'Teràpia per a pensaments intrusius, obsessions i compulsions en línia i a Barcelona: idees que apareixen sense voler i accions que repeteixes per calmar-te.',
      title: 'Pensaments intrusius, obsessions i compulsions',
      lead: "Idees o imatges que apareixen sense voler i generen malestar. T'ajudo a entendre com funcionen i a fer que pesin menys.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et vénen idees o imatges que no vols i que et generen molt malestar.',
        'Et fan por o vergonya, i per això no les expliques a ningú.',
        'Repeteixes comprovacions, rituals o pensaments per sentir-te millor.',
        "L'alleujament dura poc i després ho has de tornar a repetir.",
        'Hi dediques molt de temps i energia, i condiciona el teu dia a dia.',
      ],
      approach: [
        "Comencem entenent com funciona el cicle: el pensament apareix, genera malestar i l'acció que fas per calmar-te l'acaba alimentant. Aquestes accions repetides són les compulsions, i formen part del que se sol anomenar TOC. Aquí no posem cap etiqueta per davant, mirem què et passa a tu.",
        "Treballo amb TCC i ACT perquè aprenguis a tenir aquests pensaments sense barallar-t'hi ni obeir-los, i amb tècniques de regulació corporal per al malestar que porten.",
      ],
      faqs: [
        { q: 'Tenir aquests pensaments vol dir que soc una mala persona?', a: 'No. Els pensaments intrusius són molt comuns. El que més pesa és el malestar que et generen, i és el que treballem.' },
        { q: "He d'explicar tot el que penso?", a: 'Tu decideixes què comparteixes i quan. Aquí no es jutja el que et passa pel cap.' },
        { q: 'És TOC?', a: 'Això no ho pot dir una pàgina web. Ho veiem a la consulta i, si cal que et valori també un metge o un psiquiatre, ho parlem.' },
      ],
    },
  },
  {
    key: 'sadness',
    icon: 'heart',
    posts: ['senales-para-ir-al-psicologo', 'empezar-terapia-dudas-frecuentes'],
    es: {
      metaTitle: 'Terapia para la tristeza y la depresión en Barcelona',
      description:
        'Terapia para la tristeza, el bajo ánimo y la depresión online y en Barcelona: cuando todo cuesta, hasta lo más simple. Un espacio para ir a tu ritmo.',
      title: 'Terapia para la tristeza y el bajo ánimo',
      lead: 'Estar sin ganas y que todo cueste, hasta las tareas más simples. Es agotador, y no tienes por qué llevarlo en soledad.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Te sientes sin ganas y todo te cuesta, hasta las tareas más simples.',
        'Lo que antes te gustaba ya no te dice nada.',
        'Te notas con menos energía de lo normal, o duermes y comes distinto.',
        'Te cuesta concentrarte o tomar decisiones.',
        'Notas una tristeza o un vacío que no sabes explicar.',
      ],
      approach: [
        'Miramos qué hay detrás de la tristeza: lo que ha pasado, cómo lo estás viviendo y qué la mantiene. Trabajo con terapia centrada en las emociones, TCC y ACT, para que puedas dar espacio a lo que sientes y volver poco a poco a lo que te importa. Empezamos con pasos pequeños, los que ahora puedas sostener.',
        'Si la tristeza dura semanas, te impide hacer tu vida o es muy intensa, conviene que también lo vea tu médico. La terapia puede ayudar y, si hace falta, nos coordinamos.',
      ],
      faqs: [
        { q: '¿Es tristeza o depresión?', a: 'Eso no lo puede decir una página web. Lo hablamos en la primera sesión y, si hace falta, te recomiendo que te valore también tu médico.' },
        { q: '¿Y si no sé por qué estoy así?', a: 'No hace falta saberlo para venir. Entender de dónde viene forma parte del trabajo.' },
        { q: '¿Cuándo conviene pedir ayuda?', a: 'Cuando llevas semanas así, te cuesta hacer tu día a día o notas que no mejora. No hace falta esperar a tocar fondo.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a la tristesa i la depressió a Barcelona',
      description:
        "Teràpia per a la tristesa, el baix estat d'ànim i la depressió en línia i a Barcelona: quan tot costa, fins i tot el més simple. Al teu ritme.",
      title: "Teràpia per a la tristesa i el baix estat d'ànim",
      lead: 'Estar sense ganes i que tot costi, fins i tot les tasques més simples. És esgotador, i no has de portar-ho en solitud.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et sents sense ganes i tot et costa, fins i tot les tasques més simples.',
        "Allò que abans t'agradava ja no et diu res.",
        'Et notes amb menys energia del normal, o dorms i menges diferent.',
        'Et costa concentrar-te o prendre decisions.',
        'Notes una tristesa o un buit que no saps explicar.',
      ],
      approach: [
        "Mirem què hi ha darrere la tristesa: el que ha passat, com ho estàs vivint i què la manté. Treballo amb teràpia centrada en les emocions, TCC i ACT, perquè puguis fer lloc al que sents i tornar a poc a poc al que t'importa. Comencem amb passos petits, els que ara puguis sostenir.",
        "Si la tristesa dura setmanes, t'impedeix fer la teva vida o és molt intensa, convé que també ho vegi el teu metge. La teràpia hi pot ajudar i, si cal, ens coordinem.",
      ],
      faqs: [
        { q: 'És tristesa o depressió?', a: 'Això no ho pot dir una pàgina web. Ho parlem a la primera sessió i, si cal, et recomano que et valori també el teu metge.' },
        { q: 'I si no sé per què estic així?', a: "No cal saber-ho per venir. Entendre d'on ve forma part de la feina." },
        { q: 'Quan convé demanar ajuda?', a: 'Quan fa setmanes que et sents així, et costa fer el dia a dia o notes que no millora. No cal esperar a tocar fons.' },
      ],
    },
  },
  {
    key: 'emotionRegulation',
    icon: 'heart',
    posts: ['rabia-constante-necesidad-de-atacar', 'metacognicion-comprender-tu-funcionamiento'],
    es: {
      metaTitle: 'Terapia de regulación emocional en Barcelona',
      description:
        'Terapia de regulación emocional online y en Barcelona: emociones desbordantes, atracones, autolesiones o tricotilomanía. Sin juicios y a tu ritmo.',
      title: 'Terapia para la regulación emocional',
      lead: 'Emociones tan intensas que cuesta entenderlas y manejarlas. A veces se intentan calmar con conductas que alivian un momento y dejan más malestar.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Tus emociones te desbordan y no sabes bien qué te pasa.',
        'Pasas de estar bien a estar fatal en pocos minutos y luego te cuesta volver.',
        'Haces cosas para calmarte que después te generan culpa o vergüenza.',
        'Te calmas con atracones, autolesiones, tricotilomanía u otras conductas que quisieras dejar.',
        'Te da vergüenza hablar de ello.',
      ],
      approach: [
        'Esas conductas son un intento de calmar algo que desborda, y tienen sentido dentro de tu historia. Trabajo sin juicios, entendiendo qué las dispara y qué necesitas en ese momento.',
        'Combino regulación emocional y corporal, técnicas somáticas, terapia centrada en las emociones y, cuando hay una historia de fondo, trauma y apego, para ir aprendiendo otras formas de calmarte.',
      ],
      faqs: [
        { q: '¿Tengo que dejar la conducta desde el primer día?', a: 'No. Primero entendemos qué función cumple y qué te da en ese momento. Los cambios se hacen poco a poco, a tu ritmo.' },
        { q: '¿Me vas a juzgar?', a: 'No. Lo que me cuentas se escucha con respeto y sin juicios. Mucha gente pasa por esto y a menudo hay una historia detrás.' },
        { q: '¿Hace falta ir también al médico?', a: 'Si alguna de estas conductas afecta a tu salud física, conviene que te vea también un médico. Podemos coordinarnos si lo necesitas.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia de regulació emocional a Barcelona',
      description:
        'Teràpia de regulació emocional en línia i a Barcelona: emocions desbordants, afartaments, autolesions o tricotil·lomania. Sense judicis i al teu ritme.',
      title: 'Teràpia per a la regulació emocional',
      lead: "Emocions tan intenses que costa entendre-les i gestionar-les. De vegades s'intenten calmar amb conductes que alleugen un moment i deixen més malestar.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Les teves emocions et desborden i no saps ben bé què et passa.',
        "Passes d'estar bé a estar fatal en pocs minuts i després et costa tornar.",
        'Fas coses per calmar-te que després et generen culpa o vergonya.',
        'Et calmes amb afartaments, autolesions, tricotil·lomania o altres conductes que voldries deixar.',
        'Et fa vergonya parlar-ne.',
      ],
      approach: [
        'Aquestes conductes són un intent de calmar alguna cosa que desborda, i tenen sentit dins la teva història. Treballo sense judicis, entenent què les dispara i què necessites en aquell moment.',
        'Combino regulació emocional i corporal, tècniques somàtiques, teràpia centrada en les emocions i, quan hi ha una història de fons, trauma i aferrament, per anar aprenent altres maneres de calmar-te.',
      ],
      faqs: [
        { q: 'He de deixar la conducta des del primer dia?', a: 'No. Primer entenem quina funció té i què et dona en aquell moment. Els canvis es fan a poc a poc, al teu ritme.' },
        { q: 'Em jutjaràs?', a: "No. El que m'expliques s'escolta amb respecte i sense judicis. Moltes persones hi passen i sovint hi ha una història al darrere." },
        { q: 'Cal anar també al metge?', a: "Si alguna d'aquestes conductes afecta la teva salut física, convé que et vegi també un metge. Podem coordinar-nos si ho necessites." },
      ],
    },
  },
  {
    key: 'irritability',
    icon: 'heart',
    posts: ['rabia-constante-necesidad-de-atacar', 'metacognicion-comprender-tu-funcionamiento'],
    es: {
      metaTitle: 'Terapia para la irritabilidad en Barcelona',
      description:
        'Terapia para la irritabilidad online y en Barcelona: estar irascible, que todo te moleste y saltar por cualquier cosa. Entender qué hay detrás.',
      title: 'Terapia para la irritabilidad',
      lead: 'Estar irascible y que todo te moleste. A menudo hay algo debajo: cansancio, tensión o una emoción que no encuentra otra salida.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Todo te molesta y saltas por cosas que antes no te afectaban.',
        'Contestas mal o gritas y después te arrepientes.',
        'Estás en tensión, con poca paciencia, casi siempre.',
        'Los demás te notan más tenso o van con cuidado contigo.',
        'Te cuesta calmarte una vez te has enfadado.',
      ],
      approach: [
        'Miramos qué hay debajo del enfado: cansancio, estrés, miedo, tristeza u otras emociones que se están expresando así. Con terapia centrada en las emociones y regulación emocional y corporal, aprendes a reconocerlas antes de que exploten.',
        'Trabajamos también con TCC y ACT, para que tengas otras formas de responder cuando algo te molesta.',
      ],
      faqs: [
        { q: '¿Por qué estoy tan irritable?', a: 'Puede haber muchas causas: estrés, cansancio, tristeza, una etapa difícil... Lo vemos en sesión.' },
        { q: '¿Es una cuestión de carácter?', a: 'No necesariamente. Muchas veces es la forma en que el cuerpo y las emociones responden a algo que se está acumulando, y eso se puede trabajar.' },
        { q: '¿Puede tener una causa física?', a: 'A veces influyen el sueño o la salud física. Si lo sospechas, conviene que te vea también un médico.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a la irritabilitat a Barcelona',
      description:
        'Teràpia per a la irritabilitat en línia i a Barcelona: estar irascible, que tot et molesti i saltar per qualsevol cosa. Entendre què hi ha al darrere.',
      title: 'Teràpia per a la irritabilitat',
      lead: 'Estar irascible i que tot et molesti. Sovint hi ha alguna cosa al darrere: cansament, tensió o una emoció que no troba una altra sortida.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        "Tot et molesta i salts per coses que abans no t'afectaven.",
        "Contestes malament o crides i després te'n penedeixes.",
        'Estàs en tensió, amb poca paciència, quasi sempre.',
        'Els altres et noten més tens o van amb compte amb tu.',
        "Et costa calmar-te un cop t'has enfadat.",
      ],
      approach: [
        "Mirem què hi ha sota l'enuig: cansament, estrès, por, tristesa o altres emocions que s'estan expressant així. Amb teràpia centrada en les emocions i regulació emocional i corporal, aprens a reconèixer-les abans que esclatin.",
        'Treballem també amb TCC i ACT, perquè tinguis altres maneres de respondre quan alguna cosa et molesta.',
      ],
      faqs: [
        { q: 'Per què estic tan irritable?', a: 'Pot haver-hi moltes causes: estrès, cansament, tristesa, una etapa difícil... Ho veiem a la sessió.' },
        { q: 'És una qüestió de caràcter?', a: "No necessàriament. Moltes vegades és la manera com el cos i les emocions responen a alguna cosa que s'està acumulant, i això es pot treballar." },
        { q: 'Pot tenir una causa física?', a: 'A vegades hi influeixen el son o la salut física. Si ho sospites, convé que et vegi també un metge.' },
      ],
    },
  },
  {
    key: 'control',
    icon: 'blocks',
    posts: ['como-saber-si-tengo-ansiedad', 'metacognicion-comprender-tu-funcionamiento'],
    es: {
      metaTitle: 'Terapia para la necesidad de control en Barcelona',
      description:
        'Terapia para la necesidad de control online y en Barcelona: anticiparlo todo, no poder delegar e irritarte si algo no sale como esperabas.',
      title: 'Terapia para la necesidad de control',
      lead: 'No poder ceder nunca el control, anticiparlo todo y sentir que todo te sobrepasa. Se puede aflojar, poco a poco.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Te cuesta delegar y acabas haciéndolo todo tú.',
        'Lo planificas todo para que no haya sorpresas.',
        'Si algo no sale como esperabas, te irritas o te bloqueas.',
        'Sientes que todo recae en ti y que no puedes parar.',
        'Ceder el control te da miedo o te genera mucha tensión.',
      ],
      approach: [
        'El control suele ser una forma de protegerte. Buscamos qué miedo o qué experiencia hay detrás, y qué pasaría si dejaras de sostenerlo todo.',
        'Trabajo con terapia de esquemas e IFS, para entender esa parte de ti que lo controla todo, y con ACT para practicar a tolerar la incertidumbre.',
      ],
      faqs: [
        { q: '¿Querer tener las cosas controladas es malo?', a: 'No. Ser organizado ayuda. Se vuelve un problema cuando no puedes parar o te genera mucha tensión.' },
        { q: '¿Tengo que dejar de ser como soy?', a: 'No. La idea es que tengas margen para elegir cuándo controlar y cuándo soltar.' },
        { q: '¿Tiene que ver con la ansiedad?', a: 'A menudo sí, porque controlar alivia la inquietud un rato. Lo vemos en consulta.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a la necessitat de control a Barcelona',
      description:
        'Teràpia per a la necessitat de control en línia i a Barcelona: anticipar-ho tot, no poder delegar i irritar-te si alguna cosa no surt com esperaves.',
      title: 'Teràpia per a la necessitat de control',
      lead: 'No poder cedir mai el control, anticipar-ho tot i sentir que tot et sobrepassa. Es pot afluixar, a poc a poc.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et costa delegar i acabes fent-ho tot tu.',
        'Ho planifiques tot perquè no hi hagi sorpreses.',
        "Si alguna cosa no surt com esperaves, t'irrites o et bloqueges.",
        'Sents que tot recau en tu i que no pots parar.',
        'Cedir el control et fa por o et genera molta tensió.',
      ],
      approach: [
        'El control sovint és una manera de protegir-te. Busquem quina por o quina experiència hi ha al darrere, i què passaria si deixessis de sostenir-ho tot.',
        "Treballo amb teràpia d'esquemes i IFS, per entendre aquesta part de tu que ho controla tot, i amb ACT per practicar a tolerar la incertesa.",
      ],
      faqs: [
        { q: 'Voler tenir les coses controlades és dolent?', a: 'No. Ser organitzat ajuda. Es converteix en un problema quan no pots parar o et genera molta tensió.' },
        { q: 'He de deixar de ser com soc?', a: 'No. La idea és que tinguis marge per triar quan controlar i quan deixar anar.' },
        { q: "Té a veure amb l'ansietat?", a: 'Sovint sí, perquè controlar alleuja la inquietud una estona. Ho veiem a la consulta.' },
      ],
    },
  },
  {
    key: 'conflicts',
    icon: 'blocks',
    posts: ['rabia-constante-necesidad-de-atacar', 'como-poner-limites-sin-sentir-culpa'],
    es: {
      metaTitle: 'Terapia para gestionar conflictos en Barcelona',
      description:
        'Terapia para gestionar conflictos con la familia, los amigos o en el trabajo, online y en Barcelona. Aprende a responder sin callarte ni explotar.',
      title: 'Terapia para gestionar conflictos',
      lead: 'Si después de una discusión te quedas dándole vueltas, o evitas hablar para no discutir, quizá se pueda hacer de otra manera. Te ayudo a entender cómo reaccionas y a resolver los conflictos con más calma.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Sientes que no resuelves bien los conflictos, en el trabajo, con la familia o con amigos.',
        'Te callas para evitar discutir y luego te quedas con la rabia.',
        'Explotas y después te arrepientes de cómo lo has dicho.',
        'Repasas las discusiones durante horas, también las que ya pasaron.',
        'Te cuesta decir lo que piensas a profesores, jefes o figuras de autoridad.',
      ],
      approach: [
        'Miramos qué pasa en ti cuando surge un conflicto: qué sientes, qué piensas y cómo reacciona tu cuerpo. A partir de ahí practicamos otras formas de responder.',
        'Trabajo la regulación emocional, para que puedas calmarte antes de responder, y la terapia cognitivo-conductual para ensayar cómo decir lo que quieres decir. Si detrás hay una parte de ti que se defiende o que calla, la escuchamos con IFS.',
      ],
      faqs: [
        { q: '¿Aprenderé a no discutir?', a: 'Discutir es normal. Lo que trabajamos es cómo te quedas tú después y cómo puedes decir lo que piensas sin romper la relación.' },
        { q: '¿Puedo venir si la otra persona no quiere venir?', a: 'Sí. Trabajamos con tu parte: cómo lo vives y cómo respondes. No hace falta que la otra persona venga.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per gestionar conflictes a Barcelona',
      description:
        'Teràpia per gestionar conflictes amb la família, els amics o a la feina, en línia i a Barcelona. Aprèn a respondre sense callar ni esclatar.',
      title: 'Teràpia per gestionar conflictes',
      lead: "Si després d'una discussió et quedes donant-hi voltes, o evites parlar per no discutir, potser es pot fer d'una altra manera. T'ajudo a entendre com reacciones i a resoldre els conflictes amb més calma.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Sents que no resols bé els conflictes, a la feina, amb la família o amb amics.',
        'Et calles per evitar discutir i després et quedes amb la ràbia.',
        'Esclates i després et sap greu com ho has dit.',
        'Repasses les discussions durant hores, també les que ja van passar.',
        "Et costa dir el que penses a professors, caps o figures d'autoritat.",
      ],
      approach: [
        "Mirem què passa en tu quan sorgeix un conflicte: què sents, què penses i com reacciona el teu cos. A partir d'aquí practiquem altres maneres de respondre.",
        "Treballo la regulació emocional, perquè puguis calmar-te abans de respondre, i la teràpia cognitivoconductual per assajar com dir el que vols dir. Si al darrere hi ha una part teva que es defensa o que calla, l'escoltem amb IFS.",
      ],
      faqs: [
        { q: 'Aprendré a no discutir?', a: 'Discutir és normal. El que treballem és com et quedes tu després i com pots dir el que penses sense trencar la relació.' },
        { q: "Puc venir si l'altra persona no vol venir?", a: "Sí. Treballem amb la teva part: com ho vius i com respons. No cal que l'altra persona vingui." },
      ],
    },
  },
  {
    key: 'dependency',
    icon: 'couple',
    posts: ['dependencia-emocional-por-que-cuesta-salir-de-ciertas-relaciones', 'estilos-de-apego-relaciones'],
    es: {
      metaTitle: 'Terapia para la dependencia emocional en Barcelona',
      description:
        'Terapia para la dependencia emocional online y en Barcelona: miedo a perder a la pareja, relaciones que cuesta dejar y necesidad constante de aprobación.',
      title: 'Terapia para la dependencia emocional',
      lead: 'Cuando el miedo a perder una relación decide por ti, cuesta saber qué quieres tú. Te acompaño a entender de dónde viene ese miedo y a sentirte con más seguridad dentro de la relación.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Cedes en cosas importantes para que no se enfade o no te deje.',
        'Necesitas que te confirmen una y otra vez que te quieren.',
        'Estar sin pareja o sin esa persona se te hace insoportable.',
        'Pones las necesidades de la otra persona por delante de las tuyas.',
        'Sigues en una relación que te hace daño por miedo a quedarte sin ella.',
      ],
      approach: [
        'Muchas veces este miedo viene de cómo aprendimos a vincularnos de pequeños. Trabajamos desde el apego y el trauma relacional para entender ese patrón y construir una seguridad que no dependa de la otra persona.',
        'Uso terapia de esquemas e IFS para dar espacio a la parte de ti que teme el abandono, y regulación emocional para sostener la angustia cuando aparece.',
      ],
      faqs: [
        { q: '¿Querer mucho es lo mismo que depender?', a: 'No. Se puede querer a alguien y poder estar bien sin esa persona. Miramos cómo te sientes tú dentro de la relación.' },
        { q: '¿Tengo que dejar la relación?', a: 'Esa decisión es tuya. Lo que hacemos es que puedas tomarla sin que el miedo decida por ti.' },
        { q: '¿Y si mi pareja me trata mal?', a: 'Cuéntamelo desde la primera sesión. Si te sientes en peligro, lo primero es tu seguridad.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a la dependència emocional a Barcelona',
      description:
        "Teràpia per a la dependència emocional en línia i a Barcelona: por de perdre la parella, relacions que costa deixar i necessitat constant d'aprovació.",
      title: 'Teràpia per a la dependència emocional',
      lead: "Quan la por de perdre una relació decideix per tu, costa saber què vols tu. T'acompanyo a entendre d'on ve aquesta por i a sentir-te amb més seguretat dins la relació.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        "Cedeixes en coses importants perquè no s'enfadi o no et deixi.",
        "Necessites que et confirmin una vegada i una altra que t'estimen.",
        "Estar sense parella o sense aquesta persona se't fa insuportable.",
        "Poses les necessitats de l'altra persona per davant de les teves.",
        'Continues en una relació que et fa mal per por de quedar-te sense.',
      ],
      approach: [
        "Moltes vegades aquesta por ve de com vam aprendre a vincular-nos de petits. Treballem des de l'aferrament i el trauma relacional per entendre aquest patró i construir una seguretat que no depengui de l'altra persona.",
        "Faig servir teràpia d'esquemes i IFS per donar espai a la part teva que tem l'abandonament, i regulació emocional per sostenir l'angoixa quan apareix.",
      ],
      faqs: [
        { q: 'Estimar molt és el mateix que dependre?', a: 'No. Es pot estimar algú i poder estar bé sense aquesta persona. Mirem com et sents tu dins la relació.' },
        { q: 'He de deixar la relació?', a: 'Aquesta decisió és teva. El que fem és que la puguis prendre sense que la por decideixi per tu.' },
        { q: 'I si la meva parella em tracta malament?', a: "Explica-m'ho des de la primera sessió. Si et sents en perill, el primer és la teva seguretat." },
      ],
    },
  },
  {
    key: 'attachment',
    icon: 'couple',
    posts: ['estilos-de-apego-relaciones', 'como-poner-limites-sin-sentir-culpa'],
    es: {
      metaTitle: 'Terapia de apego y límites en Barcelona',
      description:
        'Terapia para el apego y los límites, online y en Barcelona: confiar, decir que no y mantener relaciones estables sin repetir siempre el mismo patrón.',
      title: 'Terapia para el apego y los límites',
      lead: 'Confiar, poner límites o mantener una relación estable puede costar mucho. Lo que aprendiste de pequeño sobre cómo vincularte suele tener algo que ver.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Te cuesta confiar en los demás.',
        'Dices que sí cuando querrías decir que no, y luego te pesa.',
        'Te agobias cuando alguien se acerca demasiado, o te asustas cuando se aleja.',
        'Tus relaciones acaban siguiendo el mismo patrón.',
        'Te cuesta mantener relaciones estables.',
      ],
      approach: [
        'Trabajo desde la teoría del apego y el trauma: miramos cómo aprendiste a relacionarte y qué te sirvió entonces, aunque hoy te cueste.',
        'Con terapia de esquemas identificamos los patrones que se repiten. Practicamos poner límites en situaciones reales, con la regulación emocional necesaria para sostener la incomodidad que viene después.',
      ],
      faqs: [
        { q: '¿Se puede cambiar la forma de vincularse?', a: 'Sí, se puede ir flexibilizando. Vivir experiencias nuevas, también en terapia, ayuda a relacionarte con más confianza.' },
        { q: '¿Poner límites no es ser egoísta?', a: 'No. Un límite dice hasta dónde puedes llegar tú. Aprendemos a ponerlos sin culpa y sin dureza.' },
      ],
    },
    ca: {
      metaTitle: "Teràpia d'aferrament i límits a Barcelona",
      description:
        "Teràpia per a l'aferrament i els límits, en línia i a Barcelona: confiar, dir que no i mantenir relacions estables sense repetir sempre el mateix patró.",
      title: "Teràpia per a l'aferrament i els límits",
      lead: 'Confiar, posar límits o mantenir una relació estable pot costar molt. El que vas aprendre de petit sobre com vincular-te sol tenir-hi alguna cosa a veure.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et costa confiar en els altres.',
        'Dius que sí quan voldries dir que no, i després et pesa.',
        "T'agobies quan algú s'hi acosta massa, o t'espantes quan s'allunya.",
        'Les teves relacions acaben seguint el mateix patró.',
        'Et costa mantenir relacions estables.',
      ],
      approach: [
        "Treballo des de la teoria de l'aferrament i el trauma: mirem com vas aprendre a relacionar-te i què et va servir aleshores, encara que avui et costi.",
        "Amb la teràpia d'esquemes identifiquem els patrons que es repeteixen. Practiquem posar límits en situacions reals, amb la regulació emocional necessària per sostenir la incomoditat que ve després.",
      ],
      faqs: [
        { q: 'Es pot canviar la manera de vincular-se?', a: 'Sí, es pot anar flexibilitzant. Viure experiències noves, també a teràpia, ajuda a relacionar-te amb més confiança.' },
        { q: 'Posar límits no és ser egoista?', a: 'No. Un límit diu fins on pots arribar tu. Aprenem a posar-los sense culpa i sense duresa.' },
      ],
    },
  },
  {
    key: 'family',
    icon: 'couple',
    posts: ['estilos-de-apego-relaciones', 'como-poner-limites-sin-sentir-culpa'],
    es: {
      metaTitle: 'Terapia para relaciones familiares en Barcelona',
      description:
        'Terapia para las relaciones familiares online y en Barcelona: conflictos con padres o hermanos, roles que pesan y vínculos que generan malestar.',
      title: 'Terapia para las relaciones familiares',
      lead: 'La familia es donde aprendimos a querer y también donde a veces más duele. Te ayudo a aceptar lo que no se puede cambiar y a cambiar lo que sí.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Una relación con tu familia te genera malestar de forma habitual.',
        'Después de ver a tu familia te quedas mal varios días.',
        'Con ellos vuelves a comportarte como cuando eras pequeño.',
        'Te cuesta poner límites a tu madre, a tu padre o a tus hermanos.',
        'Cargas con un papel en casa que nadie te preguntó si querías.',
      ],
      approach: [
        'Miramos qué pasa en esa relación y qué papel has tenido tú. Después decidimos qué puedes aceptar, qué quieres cambiar y cómo hacerlo, empezando por ti.',
        'Trabajo desde el apego y el trauma, con IFS para las partes de ti que se activan con tu familia y con ACT para aceptar lo que no depende de ti.',
      ],
      faqs: [
        { q: '¿Tiene que venir mi familia?', a: 'No. Trabajamos contigo y con lo que depende de ti.' },
        { q: '¿Y si prefiero poner distancia?', a: 'Tú decides qué distancia te sienta bien. Te acompaño a verlo con calma, sin empujarte a reconciliarte ni a cortar.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a relacions familiars a Barcelona',
      description:
        'Teràpia per a les relacions familiars en línia i a Barcelona: conflictes amb pares o germans, rols que pesen i vincles que generen malestar.',
      title: 'Teràpia per a les relacions familiars',
      lead: "La família és on vam aprendre a estimar i també on de vegades fa més mal. T'ajudo a acceptar el que no es pot canviar i a canviar el que sí.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Una relació amb la teva família et genera malestar de manera habitual.',
        'Després de veure la teva família et quedes malament uns quants dies.',
        'Amb ells tornes a comportar-te com quan eres petit.',
        'Et costa posar límits a la teva mare, al teu pare o als teus germans.',
        'Carregues amb un paper a casa que ningú no et va preguntar si volies.',
      ],
      approach: [
        'Mirem què passa en aquesta relació i quin paper hi has tingut tu. Després decidim què pots acceptar, què vols canviar i com fer-ho, començant per tu.',
        "Treballo des de l'aferrament i el trauma, amb IFS per a les parts teves que s'activen amb la teva família i amb ACT per acceptar el que no depèn de tu.",
      ],
      faqs: [
        { q: 'Ha de venir la meva família?', a: 'No. Treballem amb tu i amb el que depèn de tu.' },
        { q: 'I si prefereixo posar distància?', a: "Tu decideixes quina distància et va bé. T'acompanyo a veure-ho amb calma, sense empènyer-te a reconciliar-te ni a tallar." },
      ],
    },
  },
  {
    key: 'loneliness',
    icon: 'couple',
    posts: ['jovenes-el-dolor-que-nadie-ve', 'estilos-de-apego-relaciones'],
    es: {
      metaTitle: 'Terapia para la soledad, online y en Barcelona',
      description:
        'Terapia para la soledad y la dificultad de conectar con la gente, online y en Barcelona. Un espacio para entender qué te frena y acercarte a tu ritmo.',
      title: 'Terapia para la soledad y la conexión',
      lead: 'Puedes estar rodeado de gente y sentirte solo. Te ayudo a entender qué se interpone entre tú y los demás y a acercarte a tu ritmo.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Te sientes solo, incluso cuando estás con gente.',
        'Te cuesta conectar o mantener conversaciones que vayan más allá de lo superficial.',
        'Sientes que eres diferente y que no encajas.',
        'Rechazas planes por miedo a no encajar y luego te sientes más solo.',
        'Tienes la sensación de que los demás no te entienden de verdad.',
      ],
      approach: [
        'Miramos qué te frena al acercarte a los demás: experiencias de rechazo, vergüenza, la sensación de ser distinto. Trabajo desde el apego y el trauma y con terapia centrada en las emociones, para que puedas mostrarte más como eres.',
        'Con ACT damos pasos pequeños hacia lo que te importa, aunque dé miedo.',
      ],
      faqs: [
        { q: '¿Es normal sentirse diferente?', a: 'Es una sensación muy común y no significa que haya algo mal en ti. Entender de dónde viene ayuda a vivirla de otra manera.' },
        { q: '¿La terapia me ayudará a hacer amigos?', a: 'No te daré una lista de planes. Entendemos qué te frena y probamos pequeños pasos, y la propia terapia es un lugar donde practicar la conexión.' },
        { q: '¿Y si la soledad viene con mucha tristeza?', a: 'Lo vemos en la primera sesión. Si hace falta, te sugiero consultarlo también con tu médico.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a la solitud, en línia i a Barcelona',
      description:
        'Teràpia per a la solitud i la dificultat de connectar amb la gent, en línia i a Barcelona. Un espai per entendre què et frena i acostar-te al teu ritme.',
      title: 'Teràpia per a la solitud i la connexió',
      lead: "Pots estar envoltat de gent i sentir-te sol. T'ajudo a entendre què s'interposa entre tu i els altres i a acostar-t'hi al teu ritme.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et sents sol, fins i tot quan estàs amb gent.',
        'Et costa connectar o mantenir converses que vagin més enllà del superficial.',
        'Sents que ets diferent i que no hi encaixes.',
        'Rebutges plans per por de no encaixar i després et sents més sol.',
        "Tens la sensació que els altres no t'entenen de debò.",
      ],
      approach: [
        "Mirem què et frena quan t'acostes als altres: experiències de rebuig, vergonya, la sensació de ser diferent. Treballo des de l'aferrament i el trauma i amb teràpia centrada en les emocions, perquè et puguis mostrar més com ets.",
        "Amb ACT fem passos petits cap al que t'importa, encara que faci por.",
      ],
      faqs: [
        { q: 'És normal sentir-se diferent?', a: "És una sensació molt comuna i no vol dir que hi hagi res malament en tu. Entendre d'on ve ajuda a viure-la d'una altra manera." },
        { q: "La teràpia m'ajudarà a fer amics?", a: 'No et donaré una llista de plans. Entenem què et frena i provem petits passos, i la mateixa teràpia és un lloc on practicar la connexió.' },
        { q: 'I si la solitud ve amb molta tristesa?', a: 'Ho veiem a la primera sessió. Si cal, et suggereixo consultar-ho també amb el teu metge.' },
      ],
    },
  },
  {
    key: 'avoidance',
    icon: 'self',
    posts: ['metacognicion-comprender-tu-funcionamiento', 'senales-para-ir-al-psicologo'],
    es: {
      metaTitle: 'Terapia para la evitación emocional en Barcelona',
      description:
        'Terapia para la evitación emocional online y en Barcelona: cuando el móvil, el deporte o la hiperactividad te alejan de lo que sientes. A tu ritmo.',
      title: 'Terapia para la evitación emocional',
      lead: 'El móvil, el deporte o estar siempre ocupado pueden ser una forma de no sentir lo que duele. Te ayudo a mirarlo poco a poco y sin forzarte.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Cuando algo te duele, te metes en el móvil, el trabajo, el deporte o las series.',
        'Estás siempre haciendo cosas para no parar a pensar.',
        'Cuando te quedas en silencio, te incomoda lo que aparece.',
        'Cambias de tema o te pones a hacer otra cosa si alguien te pregunta cómo estás de verdad.',
        'Sabes que hay algo que afrontar, pero lo vas dejando.',
      ],
      approach: [
        'Evitar tiene sentido, porque alivia en el momento. Vemos qué intentas no sentir y cuánto te cuesta, y nos acercamos con pasos pequeños.',
        'Con técnicas somáticas aprendes a notar y tolerar lo que sientes en el cuerpo, y con ACT a hacer espacio a lo difícil sin que te desborde.',
      ],
      faqs: [
        { q: '¿Distraerse es malo?', a: 'No. A veces distraerse es sano. Se vuelve un problema cuando es lo único que haces con lo que te duele.' },
        { q: '¿Y si no sé qué estoy evitando?', a: 'Es muy habitual. Lo vamos descubriendo juntos, sin prisa.' },
        { q: '¿Tendré que revivir lo más doloroso?', a: 'No. Vamos a tu ritmo y empezamos por lo que puedas sostener.' },
      ],
    },
    ca: {
      metaTitle: "Teràpia per a l'evitació emocional a Barcelona",
      description:
        "Teràpia per a l'evitació emocional en línia i a Barcelona: quan el mòbil, l'esport o la hiperactivitat t'allunyen del que sents. Al teu ritme.",
      title: "Teràpia per a l'evitació emocional",
      lead: "El mòbil, l'esport o estar sempre ocupat poden ser una manera de no sentir el que fa mal. T'ajudo a mirar-ho a poc a poc i sense forçar-te.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        "Quan alguna cosa et fa mal, t'enfiles al mòbil, a la feina, a l'esport o a les sèries.",
        'Estàs sempre fent coses per no aturar-te a pensar.',
        'Quan et quedes en silenci, et incomoda el que apareix.',
        'Canvies de tema o et poses a fer una altra cosa si algú et pregunta com estàs de debò.',
        'Saps que hi ha alguna cosa per afrontar, però ho vas deixant.',
      ],
      approach: [
        'Evitar té sentit, perquè alleuja en el moment. Veiem què intentes no sentir i quant et costa, i ens hi acostem amb passos petits.',
        'Amb tècniques somàtiques aprens a notar i tolerar el que sents al cos, i amb ACT a fer espai a allò difícil sense que et desbordi.',
      ],
      faqs: [
        { q: "Distreure's és dolent?", a: "No. De vegades distreure's és sa. Es converteix en un problema quan és l'únic que fas amb el que et fa mal." },
        { q: 'I si no sé què estic evitant?', a: 'És molt habitual. Ho anem descobrint junts, sense pressa.' },
        { q: 'Hauré de reviure el més dolorós?', a: 'No. Anem al teu ritme i comencem pel que puguis sostenir.' },
      ],
    },
  },
  {
    key: 'screens',
    icon: 'self',
    posts: ['jovenes-el-dolor-que-nadie-ve', 'metacognicion-comprender-tu-funcionamiento'],
    es: {
      metaTitle: 'Terapia para el abuso de pantallas en Barcelona',
      description:
        'Terapia para el uso excesivo del móvil, las series y los videojuegos, online y en Barcelona. Recupera el control y entiende qué buscas en la pantalla.',
      title: 'Terapia para el abuso de pantallas',
      lead: 'Abres el móvil, una serie o una partida y, sin darte cuenta, han pasado horas. Te ayudo a entender qué buscas ahí y a recuperar el control.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Pasas muchas horas con el móvil, las series o los videojuegos y no era lo que querías.',
        'Lo intentas dejar y te cuesta, o vuelves a los pocos minutos.',
        'Lo usas para no sentir el aburrimiento, la ansiedad o la soledad.',
        'Duermes menos o dejas de lado el trabajo, los estudios o a la gente.',
        'Después te sientes mal contigo por no haber parado.',
      ],
      approach: [
        'Las pantallas suelen cumplir una función: calmar, distraer, hacer compañía. Vemos qué te dan y qué estás evitando sentir, y buscamos otras formas de regularte.',
        'Trabajo con ACT (aceptación y compromiso), terapia cognitivo-conductual y regulación emocional, para que puedas elegir cuándo usarlas en lugar de que te arrastren.',
      ],
      faqs: [
        { q: '¿Tengo que dejar las pantallas del todo?', a: 'No. El objetivo es que decidas tú cuánto y cuándo.' },
        { q: '¿Es una adicción?', a: 'No hace falta ponerle nombre para pedir ayuda. Si notas que pierdes el control y te afecta en el día a día, lo vemos en la primera sesión.' },
      ],
    },
    ca: {
      metaTitle: "Teràpia per a l'abús de pantalles a Barcelona",
      description:
        "Teràpia per a l'ús excessiu del mòbil, les sèries i els videojocs, en línia i a Barcelona. Recupera el control i entén què busques a la pantalla.",
      title: "Teràpia per a l'abús de pantalles",
      lead: "Obres el mòbil, una sèrie o una partida i, sense adonar-te'n, han passat hores. T'ajudo a entendre què hi busques i a recuperar el control.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Passes moltes hores amb el mòbil, les sèries o els videojocs i no era el que volies.',
        'Ho intentes deixar i et costa, o hi tornes als pocs minuts.',
        "Ho fas servir per no sentir l'avorriment, l'ansietat o la solitud.",
        'Dorms menys o deixes de banda la feina, els estudis o la gent.',
        'Després et sents malament amb tu per no haver parat.',
      ],
      approach: [
        'Les pantalles solen complir una funció: calmar, distreure, fer companyia. Veiem què et donen i què estàs evitant sentir, i busquem altres maneres de regular-te.',
        "Treballo amb ACT (acceptació i compromís), teràpia cognitivoconductual i regulació emocional, perquè puguis escollir quan fer-les servir en lloc que t'arrosseguin.",
      ],
      faqs: [
        { q: 'He de deixar les pantalles del tot?', a: "No. L'objectiu és que decideixis tu quant i quan." },
        { q: 'És una addicció?', a: "No cal posar-hi nom per demanar ajuda. Si notes que perds el control i t'afecta en el dia a dia, ho veiem a la primera sessió." },
      ],
    },
  },
  {
    key: 'lifeCrisis',
    icon: 'self',
    posts: ['el-duelo-vivir-con-una-perdida', 'senales-para-ir-al-psicologo'],
    es: {
      metaTitle: 'Terapia para crisis vitales, online y en Barcelona',
      description:
        'Terapia para atravesar una separación, un cambio de trabajo, la maternidad o una enfermedad, online y en Barcelona. Un espacio para ordenar lo que sientes.',
      title: 'Terapia para crisis vitales',
      lead: 'Una separación, un cambio de trabajo, la maternidad o una enfermedad pueden mover el suelo bajo tus pies, incluso cuando el cambio lo has querido tú.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Algo ha cambiado en tu vida y no te reconoces en la nueva situación.',
        'Sientes miedo, tristeza o confusión ante lo que viene.',
        'Te cuesta decidir qué hacer ahora.',
        'Echas de menos cómo eran las cosas antes.',
        'Estás pasando por una enfermedad, tuya o de alguien cercano, y necesitas un sitio donde hablarlo.',
      ],
      approach: [
        'Un cambio grande suele remover cosas más antiguas. Ponemos orden en lo que sientes y miramos qué necesitas ahora y qué puedes sostener, a tu ritmo.',
        'Integro terapia centrada en las emociones, ACT (aceptación y compromiso) y regulación emocional y corporal, y adapto el trabajo a lo que estás viviendo.',
      ],
      faqs: [
        { q: '¿Tiene que ser algo grave?', a: 'No. Un cambio puede ser positivo y aun así desbordarte.' },
        { q: '¿Y si no sé qué quiero hacer?', a: 'Es muy habitual. No hace falta venir con la respuesta, la vamos buscando en sesión.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a crisis vitals, en línia i a Barcelona',
      description:
        'Teràpia per travessar una separació, un canvi de feina, la maternitat o una malaltia, en línia i a Barcelona. Un espai per ordenar el que sents.',
      title: 'Teràpia per a crisis vitals',
      lead: "Una separació, un canvi de feina, la maternitat o una malaltia poden moure el terra sota els teus peus, fins i tot quan el canvi l'has volgut tu.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Alguna cosa ha canviat a la teva vida i no et reconeixes en la nova situació.',
        'Sents por, tristesa o confusió davant del que ve.',
        'Et costa decidir què fer ara.',
        'Trobes a faltar com eren les coses abans.',
        "Estàs passant per una malaltia, teva o d'algú proper, i necessites un lloc on parlar-ne.",
      ],
      approach: [
        'Un canvi gran sol remoure coses més antigues. Posem ordre en el que sents i mirem què necessites ara i què pots sostenir, al teu ritme.',
        'Integro teràpia centrada en les emocions, ACT (acceptació i compromís) i regulació emocional i corporal, i adapto el treball al que estàs vivint.',
      ],
      faqs: [
        { q: 'Ha de ser una cosa greu?', a: 'No. Un canvi pot ser positiu i tot i així desbordar-te.' },
        { q: 'I si no sé què vull fer?', a: 'És molt habitual. No cal venir amb la resposta, la busquem a la sessió.' },
      ],
    },
  },
  {
    key: 'youth',
    icon: 'self',
    posts: ['jovenes-el-dolor-que-nadie-ve', 'empezar-terapia-dudas-frecuentes'],
    es: {
      metaTitle: 'Psicóloga para adolescentes y jóvenes en Barcelona',
      description:
        'Acompañamiento psicológico para adolescentes y jóvenes de 12 a 25 años, online y en Barcelona. Un espacio para ordenar dudas, emociones y cambios.',
      title: 'Acompañamiento para adolescentes y jóvenes',
      lead: 'De los 12 a los 25 años cambia casi todo a la vez: el cuerpo, las amistades, los estudios y la idea de quién eres. Un espacio propio ayuda a ordenarlo.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Notas muchos cambios y no sabes cómo llevarlos.',
        'Te sientes diferente, solo o fuera de sitio entre los demás.',
        'Dudas sobre qué estudiar, qué quieres o quién eres.',
        'Estás más irritable, triste o nervioso de lo habitual.',
        'Eres familia y tu hijo o hija se ha cerrado, y no sabes cómo acercarte.',
      ],
      approach: [
        'Es un espacio para hablar sin juicio y al ritmo de cada persona. Trabajo con terapia integradora y regulación emocional, y con trauma y apego cuando hay experiencias difíciles detrás.',
        'Con menores, la familia participa en la medida en que haga falta.',
      ],
      faqs: [
        { q: '¿Tienen que venir los padres?', a: 'Con menores, la familia forma parte del proceso en la medida en que haga falta. Lo hablamos al empezar.' },
        { q: '¿Y si mi hijo o hija no quiere venir?', a: 'Es frecuente y no se le fuerza. Puede venir a una primera sesión, conocer el espacio y decidir después.' },
      ],
    },
    ca: {
      metaTitle: 'Psicòloga per a adolescents i joves a Barcelona',
      description:
        'Acompanyament psicològic per a adolescents i joves de 12 a 25 anys, en línia i a Barcelona. Un espai per ordenar dubtes, emocions i canvis.',
      title: 'Acompanyament per a adolescents i joves',
      lead: 'Dels 12 als 25 anys canvia gairebé tot alhora: el cos, les amistats, els estudis i la idea de qui ets. Un espai propi ajuda a ordenar-ho.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Notes molts canvis i no saps com portar-los.',
        'Et sents diferent, sol o fora de lloc entre els altres.',
        'Dubtes sobre què estudiar, què vols o qui ets.',
        'Estàs més irritable, trist o nerviós del que és habitual.',
        "Ets família i el teu fill o filla s'ha tancat, i no saps com apropar-te'n.",
      ],
      approach: [
        'És un espai per parlar sense judici i al ritme de cada persona. Treballo amb teràpia integradora i regulació emocional, i amb trauma i vincle quan hi ha experiències difícils al darrere.',
        'Amb menors, la família participa en la mesura que calgui.',
      ],
      faqs: [
        { q: 'Han de venir els pares?', a: 'Amb menors, la família forma part del procés en la mesura que calgui. Ho parlem en començar.' },
        { q: 'I si el meu fill o filla no vol venir?', a: "És freqüent i no se li força. Pot venir a una primera sessió, conèixer l'espai i decidir després." },
      ],
    },
  },
  {
    key: 'perinatal',
    icon: 'heart',
    posts: ['el-duelo-vivir-con-una-perdida', 'estilos-de-apego-relaciones'],
    es: {
      metaTitle: 'Psicóloga perinatal en Barcelona y online',
      description:
        'Psicología perinatal online y en Barcelona: preparación psicológica para el parto y acompañamiento en el posparto, con formación en apego y perinatal.',
      title: 'Psicología perinatal',
      lead: 'El embarazo, el parto y el posparto traen ilusión y también miedos, dudas y mucho cansancio. Un espacio para prepararte y para acompañarte después.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Te da miedo el parto o no sabes cómo prepararte.',
        'Estás embarazada y sientes más ansiedad o tristeza de la que esperabas.',
        'Después del parto todo te desborda o te cuesta disfrutar de esta etapa.',
        'Tu parto no fue como esperabas y sigues dándole vueltas.',
      ],
      approach: [
        'Me he formado en apego y psicología perinatal (programa universitario de UNIR, 150 horas). Antes del parto trabajamos los miedos y las expectativas. Después, el posparto y los cambios en tu identidad y en tus vínculos.',
        'Uso regulación emocional y corporal, técnicas somáticas como la respiración y, si el parto fue una experiencia difícil, EMDR.',
      ],
      faqs: [
        { q: '¿Cuándo es mejor empezar?', a: 'Puedes venir durante el embarazo o después del parto. No hay un momento ideal.' },
        { q: '¿Es normal sentirse mal después de tener un bebé?', a: 'Es frecuente sentir tristeza, cansancio o miedo. Si es muy intenso o dura semanas, conviene comentarlo también con tu matrona o tu médico. En terapia nos coordinamos si hace falta.' },
      ],
    },
    ca: {
      metaTitle: 'Psicòloga perinatal a Barcelona i en línia',
      description:
        'Psicologia perinatal en línia i a Barcelona: preparació psicològica per al part i acompanyament en el postpart, amb formació en vincle i psicologia perinatal.',
      title: 'Psicologia perinatal',
      lead: "L'embaràs, el part i el postpart porten il·lusió i també pors, dubtes i molt cansament. Un espai per preparar-te i per acompanyar-te després.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Et fa por el part o no saps com preparar-te.',
        'Estàs embarassada i sents més ansietat o tristesa de la que esperaves.',
        "Després del part tot et desborda o et costa gaudir d'aquesta etapa.",
        'El teu part no va ser com esperaves i continues donant-li voltes.',
      ],
      approach: [
        "M'he format en vincle i psicologia perinatal (programa universitari d'UNIR, 150 hores). Abans del part treballem les pors i les expectatives. Després, el postpart i els canvis en la teva identitat i en els teus vincles.",
        'Faig servir regulació emocional i corporal, tècniques somàtiques com la respiració i, si el part ha estat una experiència difícil, EMDR.',
      ],
      faqs: [
        { q: 'Quan és millor començar?', a: "Pots venir durant l'embaràs o després del part. No hi ha un moment ideal." },
        { q: 'És normal sentir-se malament després de tenir un bebè?', a: 'És freqüent sentir tristesa, cansament o por. Si és molt intens o dura setmanes, convé comentar-ho també amb la teva llevadora o el teu metge. A teràpia ens coordinem si cal.' },
      ],
    },
  },
  {
    key: 'dissociation',
    icon: 'trauma',
    posts: ['que-es-emdr-terapia-trauma'],
    es: {
      metaTitle: 'Terapia para la disociación en Barcelona y online',
      description:
        'Terapia para la disociación online y en Barcelona: sentir que estás lejos de ti o vivir en automático. Un trabajo cuidadoso, a tu ritmo y sin prisa.',
      title: 'Terapia para la disociación',
      lead: 'Estás presente, pero sientes que estás lejos de ti, como si vivieras en automático. Muchas veces es una forma que tuvo tu cuerpo de protegerte.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Sientes que estás lejos de ti o que miras tu vida desde fuera.',
        'Vives en automático y te cuesta conectar con lo que sientes.',
        'Te quedas en blanco o el tiempo pasa sin que te des cuenta.',
        'Notas el cuerpo adormecido o como si no fuera tuyo.',
        'Te ocurre sobre todo cuando algo te remueve o te sientes en tensión.',
      ],
      approach: [
        'Desconectar pudo ser, en su momento, la manera de aguantar algo difícil. No lo combatimos. Primero buscamos seguridad y aprendemos a notar el cuerpo y el entorno poco a poco.',
        'Uso técnicas somáticas y regulación emocional y corporal, apoyándome en la teoría polivagal. Cuando es el momento, EMDR y trabajo con partes (IFS), siempre con cuidado y a tu ritmo.',
      ],
      faqs: [
        { q: '¿Es algo grave?', a: 'Disociar es una respuesta humana frecuente. Si es muy intensa o constante, puede hacer falta valorarlo también con un médico o un psiquiatra. En la primera sesión vemos qué te pasa.' },
        { q: '¿Tengo que contar lo que me pasó?', a: 'No. Al principio lo importante es encontrar seguridad y poder estar presente. Tú decides qué compartir y cuándo.' },
      ],
    },
    ca: {
      metaTitle: 'Teràpia per a la dissociació a Barcelona i en línia',
      description:
        'Teràpia per a la dissociació en línia i a Barcelona: sentir que estàs lluny de tu o viure en automàtic. Un treball acurat, al teu ritme i sense pressa.',
      title: 'Teràpia per a la dissociació',
      lead: 'Estàs present, però sents que estàs lluny de tu, com si visquessis en automàtic. Moltes vegades és una manera que va tenir el teu cos de protegir-te.',
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Sents que estàs lluny de tu o que mires la teva vida des de fora.',
        'Vius en automàtic i et costa connectar amb el que sents.',
        "Et quedes en blanc o el temps passa sense que te n'adonis.",
        'Notes el cos adormit o com si no fos teu.',
        'Et passa sobretot quan alguna cosa et remou o et sents en tensió.',
      ],
      approach: [
        "Desconnectar va poder ser, en el seu moment, la manera d'aguantar una cosa difícil. No ho combatem. Primer busquem seguretat i aprenem a notar el cos i l'entorn a poc a poc.",
        'Faig servir tècniques somàtiques i regulació emocional i corporal, recolzant-me en la teoria polivagal. Quan és el moment, EMDR i treball amb parts (IFS), sempre amb cura i al teu ritme.',
      ],
      faqs: [
        { q: 'És una cosa greu?', a: 'Dissociar és una resposta humana freqüent. Si és molt intensa o constant, pot caldre valorar-ho també amb un metge o un psiquiatre. A la primera sessió veiem què et passa.' },
        { q: "He d'explicar què em va passar?", a: 'No. Al principi el més important és trobar seguretat i poder estar present. Tu decideixes què comparteixes i quan.' },
      ],
    },
  },
  {
    key: 'eating',
    icon: 'regulation',
    posts: ['senales-para-ir-al-psicologo', 'empezar-terapia-dudas-frecuentes'],
    es: {
      metaTitle: 'Psicóloga para TCA en Barcelona y online',
      description:
        'Terapia para los trastornos de la conducta alimentaria (TCA) online y en Barcelona: cuando la comida, el cuerpo o el peso ocupan demasiado espacio en tu cabeza.',
      title: 'Trastornos de la conducta alimentaria (TCA)',
      lead: 'Cuando la comida, el cuerpo o el peso ocupan demasiado espacio en tu cabeza. Te acompaño a entender qué hay detrás, sin juicios.',
      signsTitle: 'Te reconoces si',
      signs: [
        'Pasas mucho tiempo pensando en la comida, en tu peso o en tu cuerpo.',
        'Te saltas comidas, restringes lo que comes o sigues reglas muy estrictas.',
        'Tienes atracones y después sientes culpa o vergüenza.',
        'Intentas compensar lo que comes con ejercicio, vómitos u otras conductas.',
        'Cómo ves tu cuerpo cada día decide cómo te sientes.',
      ],
      approach: [
        'La comida suele ser la parte que se ve. Debajo puede haber ansiedad, necesidad de control, una autoestima frágil o emociones que cuesta sostener. Empezamos por entender qué papel cumple en tu vida, sin juzgarlo.',
        'Trabajo con TCC, regulación emocional y terapia centrada en la compasión. En los TCA a menudo hace falta también seguimiento médico y nutricional: si es tu caso, lo hablamos y te oriento hacia esos profesionales.',
      ],
      faqs: [
        { q: '¿Necesito un diagnóstico para pedir ayuda?', a: 'No. Si tu relación con la comida o con tu cuerpo te genera malestar, ya es motivo suficiente para consultarlo.' },
        { q: '¿Basta con la terapia psicológica?', a: 'Depende de cada caso. A veces el tratamiento necesita también un médico o un dietista-nutricionista. Lo valoramos en consulta.' },
        { q: '¿Y si mi salud física está en riesgo?', a: 'Si tienes mareos, desmayos, una pérdida de peso rápida o vómitos frecuentes, lo primero es ir al médico o a urgencias. La terapia acompaña, pero no sustituye esa atención.' },
      ],
    },
    ca: {
      metaTitle: 'Psicòloga per a TCA a Barcelona i en línia',
      description:
        'Teràpia per als trastorns de la conducta alimentària (TCA) en línia i a Barcelona: quan el menjar, el cos o el pes ocupen massa espai al teu cap.',
      title: 'Trastorns de la conducta alimentària (TCA)',
      lead: "Quan el menjar, el cos o el pes ocupen massa espai al teu cap. T'acompanyo a entendre què hi ha al darrere, sense judicis.",
      signsTitle: "T'hi reconeixes si",
      signs: [
        'Passes molt de temps pensant en el menjar, en el teu pes o en el teu cos.',
        "Et saltes àpats, restringeixes el que menges o segueixes normes molt estrictes.",
        'Tens afartaments i després sents culpa o vergonya.',
        'Intentes compensar el que menges amb exercici, vòmits o altres conductes.',
        'Com veus el teu cos cada dia decideix com et sents.',
      ],
      approach: [
        "El menjar sol ser la part que es veu. A sota hi pot haver ansietat, necessitat de control, una autoestima fràgil o emocions que costa sostenir. Comencem entenent quin paper té a la teva vida, sense jutjar-lo.",
        "Treballo amb TCC, regulació emocional i teràpia centrada en la compassió. En els TCA sovint cal també un seguiment mèdic i nutricional: si és el teu cas, ho parlem i t'oriento cap a aquests professionals.",
      ],
      faqs: [
        { q: "Necessito un diagnòstic per demanar ajuda?", a: 'No. Si la teva relació amb el menjar o amb el teu cos et genera malestar, ja és motiu suficient per consultar-ho.' },
        { q: "N'hi ha prou amb la teràpia psicològica?", a: 'Depèn de cada cas. De vegades el tractament necessita també un metge o un dietista-nutricionista. Ho valorem a la consulta.' },
        { q: 'I si la meva salut física està en risc?', a: "Si tens marejos, desmais, una pèrdua de pes ràpida o vòmits freqüents, el primer és anar al metge o a urgències. La teràpia acompanya, però no substitueix aquesta atenció." },
      ],
    },
  },
];

/** URL slug of a service in a language, without slashes or the /ca/ prefix. */
export function serviceSlug(service: Service, locale: Locale): string {
  const route: Partial<Record<Locale, string>> & { es: string } = ROUTES[service.key];
  return (route[locale] ?? route.es).replace(/^\/(ca\/)?|\/$/g, '');
}
