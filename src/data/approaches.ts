import type { IconName } from '../components/ui/Icon.astro';
import type { Locale } from '../i18n/config';

interface Approach {
  icon: IconName;
  title: string;
  text: string;
}

interface Approaches {
  title: string;
  approachesTitle: string;
  approaches: Approach[];
  techniquesTitle: string;
  techniques: Approach[];
  combineTitle: string;
  combine: string;
}

/**
 * How Maria works, at the end of the therapy page (issue #45). The Spanish text
 * is hers. The Catalan one is its translation, pending a native review.
 */
export const APPROACHES: Record<Locale, Approaches> = {
  es: {
    title: 'Cómo trabajo',
    approachesTitle: 'Mi enfoque terapéutico',
    approaches: [
      {
        icon: 'integrative',
        title: 'Terapia integradora',
        text: 'Trabajo combinando diferentes herramientas psicológicas, porque cada persona y cada situación son diferentes. Adapto la terapia a lo que necesita cada persona, en lugar de utilizar siempre el mismo método.',
      },
      {
        icon: 'bond',
        title: 'Trauma y apego',
        text: 'Exploro cómo nuestras experiencias pasadas, especialmente durante la infancia y en nuestras relaciones, pueden influir en cómo nos sentimos hoy. Por ejemplo, cómo el miedo al rechazo puede hacer que necesitemos constantemente la aprobación de los demás.',
      },
      {
        icon: 'regulation',
        title: 'Regulación emocional y corporal',
        text: 'Trabajo para que la persona aprenda a reconocer lo que siente, identificar cómo se manifiesta en su cuerpo y encontrar herramientas para gestionar la ansiedad, la tensión o el bloqueo emocional.',
      },
    ],
    techniquesTitle: 'Las técnicas que utilizo',
    techniques: [
      {
        icon: 'emdr',
        title: 'EMDR',
        text: 'Utilizo esta técnica para trabajar recuerdos o experiencias difíciles que todavía generan malestar. Mediante una estimulación bilateral guiada, ayudo a procesarlos para que dejen de provocar una reacción emocional tan intensa. Cuenta con evidencia científica, especialmente para el estrés postraumático.',
      },
      {
        icon: 'parts',
        title: 'IFS (Sistema de Familia Interna)',
        text: 'Ayudo a comprender las distintas partes de nosotros mismos: la que tiene miedo, la que intenta controlarlo todo o la que necesita agradar. Exploramos qué intentan proteger y qué necesitan, en lugar de luchar contra ellas.',
      },
      {
        icon: 'somatic',
        title: 'Técnicas somáticas',
        text: 'Utilizo recursos como la respiración, la atención a las sensaciones corporales y la orientación al entorno para ayudar a la persona a reconocer cuándo está en alerta y aprender a recuperar la calma.',
      },
      {
        icon: 'cbt',
        title: 'Terapia cognitivo-conductual (TCC)',
        text: 'Trabajamos los pensamientos y comportamientos que mantienen el malestar. Ayudo a identificar interpretaciones poco útiles, cuestionarlas y desarrollar maneras diferentes de afrontar las situaciones. Es una terapia con amplio respaldo científico para distintos problemas psicológicos.',
      },
      {
        icon: 'act',
        title: 'Terapia de aceptación y compromiso (ACT)',
        text: 'Ayudo a aprender a convivir de otra manera con las emociones y los pensamientos difíciles, sin tener que eliminarlos a toda costa. La idea es que podamos seguir haciendo cosas importantes para nosotros, aunque a veces sintamos miedo, tristeza o ansiedad.',
      },
      {
        icon: 'emotions',
        title: 'Terapia centrada en las emociones',
        text: 'Ayudo a identificar y comprender las emociones, incluso aquellas que a veces nos cuesta reconocer. Por ejemplo, descubrir que detrás del enfado puede haber tristeza, miedo al rechazo o necesidad de sentirnos comprendidos.',
      },
      {
        icon: 'schemas',
        title: 'Terapia de esquemas',
        text: 'Trabajo con patrones que se repiten en nuestra vida, como sentir que no somos suficientes, temer que nos abandonen o necesitar la aprobación de los demás. Exploramos de dónde vienen y cómo podemos responder de una forma diferente.',
      },
      {
        icon: 'polyvagal',
        title: 'Teoría polivagal',
        text: 'Me sirve como marco para comprender cómo los estados de alerta, seguridad o desconexión pueden influir en nuestras emociones y relaciones. Me ayuda a orientar el trabajo de regulación, teniendo presente que algunas de sus explicaciones teóricas siguen siendo objeto de debate científico.',
      },
    ],
    combineTitle: '¿Cómo combino estas herramientas?',
    combine:
      'Primero exploro la historia y las necesidades de cada persona. Después, establezco un plan de trabajo personalizado en el que combino la comprensión del problema, las herramientas prácticas y, cuando está indicado, el procesamiento de experiencias difíciles. Mi objetivo es que la terapia no consista únicamente en hablar, sino también en trabajar activamente para conseguir cambios duraderos.',
  },
  ca: {
    title: 'Com treballo',
    approachesTitle: 'El meu enfocament terapèutic',
    approaches: [
      {
        icon: 'integrative',
        title: 'Teràpia integradora',
        text: "Treballo combinant diferents eines psicològiques, perquè cada persona i cada situació són diferents. Adapto la teràpia al que necessita cada persona, en lloc de fer servir sempre el mateix mètode.",
      },
      {
        icon: 'bond',
        title: 'Trauma i aferrament',
        text: "Exploro com les nostres experiències passades, especialment durant la infància i en les nostres relacions, poden influir en com ens sentim avui. Per exemple, com la por al rebuig pot fer que necessitem constantment l'aprovació dels altres.",
      },
      {
        icon: 'regulation',
        title: 'Regulació emocional i corporal',
        text: "Treballo perquè la persona aprengui a reconèixer el que sent, identificar com es manifesta en el seu cos i trobar eines per gestionar l'ansietat, la tensió o el bloqueig emocional.",
      },
    ],
    techniquesTitle: 'Les tècniques que faig servir',
    techniques: [
      {
        icon: 'emdr',
        title: 'EMDR',
        text: "Faig servir aquesta tècnica per treballar records o experiències difícils que encara generen malestar. Mitjançant una estimulació bilateral guiada, ajudo a processar-los perquè deixin de provocar una reacció emocional tan intensa. Té evidència científica, especialment per a l'estrès posttraumàtic.",
      },
      {
        icon: 'parts',
        title: 'IFS (Sistema de Família Interna)',
        text: "Ajudo a comprendre les diferents parts de nosaltres mateixos: la que té por, la que intenta controlar-ho tot o la que necessita agradar. Explorem què intenten protegir i què necessiten, en lloc de lluitar-hi en contra.",
      },
      {
        icon: 'somatic',
        title: 'Tècniques somàtiques',
        text: "Faig servir recursos com la respiració, l'atenció a les sensacions corporals i l'orientació a l'entorn per ajudar la persona a reconèixer quan està en alerta i aprendre a recuperar la calma.",
      },
      {
        icon: 'cbt',
        title: 'Teràpia cognitivoconductual (TCC)',
        text: "Treballem els pensaments i els comportaments que mantenen el malestar. Ajudo a identificar interpretacions poc útils, qüestionar-les i desenvolupar maneres diferents d'afrontar les situacions. És una teràpia amb un ampli suport científic per a diferents problemes psicològics.",
      },
      {
        icon: 'act',
        title: "Teràpia d'acceptació i compromís (ACT)",
        text: "Ajudo a aprendre a conviure d'una altra manera amb les emocions i els pensaments difícils, sense haver d'eliminar-los a qualsevol preu. La idea és que puguem continuar fent coses importants per a nosaltres, encara que de vegades sentim por, tristesa o ansietat.",
      },
      {
        icon: 'emotions',
        title: 'Teràpia centrada en les emocions',
        text: "Ajudo a identificar i comprendre les emocions, fins i tot aquelles que de vegades ens costa reconèixer. Per exemple, descobrir que darrere de l'enuig hi pot haver tristesa, por al rebuig o necessitat de sentir-nos compresos.",
      },
      {
        icon: 'schemas',
        title: "Teràpia d'esquemes",
        text: "Treballo amb patrons que es repeteixen a la nostra vida, com sentir que no som prou, tenir por que ens abandonin o necessitar l'aprovació dels altres. Explorem d'on vénen i com podem respondre d'una manera diferent.",
      },
      {
        icon: 'polyvagal',
        title: 'Teoria polivagal',
        text: "Em serveix com a marc per comprendre com els estats d'alerta, seguretat o desconnexió poden influir en les nostres emocions i relacions. M'ajuda a orientar el treball de regulació, tenint present que algunes de les seves explicacions teòriques encara són objecte de debat científic.",
      },
    ],
    combineTitle: 'Com combino aquestes eines?',
    combine:
      "Primer exploro la història i les necessitats de cada persona. Després, estableixo un pla de treball personalitzat en què combino la comprensió del problema, les eines pràctiques i, quan cal, el processament d'experiències difícils. El meu objectiu és que la teràpia no consisteixi només a parlar, sinó també a treballar activament per aconseguir canvis duradors.",
  },
};
