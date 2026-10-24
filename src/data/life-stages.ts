import type { Locale } from '../i18n/config';

/**
 * Ordinary life stages in which therapy can help, shown on the home page and
 * on the therapy page. The list is Maria's. The title and intro
 * frame it and are pending her validation.
 */
export const LIFE_STAGES: Record<Locale, { title: string; intro: string; items: string[] }> = {
  es: {
    title: 'También en momentos normales de la vida',
    intro: 'No hace falta que algo vaya mal. Hay etapas que remueven mucho y en las que un acompañamiento psicológico ayuda a regular lo que sientes:',
    items: [
      'Cambio de trabajo',
      'Conflictos en el trabajo',
      'Conflictos en la pareja',
      'Pérdida o ruptura de una amistad',
      'Infidelidad de pareja',
      'Pérdida de la pareja',
      'Cambio de país',
      'Fallecimiento de un familiar, amigos o una mascota',
      'Ascenso en el trabajo',
      'Ser padre o madre',
      'Dar un paso importante en la vida',
    ],
  },
  ca: {
    title: 'També en moments normals de la vida',
    intro: "No cal que alguna cosa vagi malament. Hi ha etapes que remouen molt i en què un acompanyament psicològic ajuda a regular el que sents:",
    items: [
      'Canvi de feina',
      'Conflictes a la feina',
      'Conflictes en la parella',
      "Pèrdua o ruptura d'una amistat",
      'Infidelitat de parella',
      'Pèrdua de la parella',
      'Canvi de país',
      "Mort d'un familiar, d'amics o d'una mascota",
      'Ascens a la feina',
      'Ser pare o mare',
      'Fer un pas important a la vida',
    ],
  },
};
