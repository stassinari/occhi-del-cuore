import type { Section } from './navigation';

type SectionCopy = {
  eyebrow: string;
  status: string;
  body: string;
};

export const sectionCopy: Record<Section['slug'], SectionCopy> = {
  guestbook: {
    eyebrow: 'Il libro degli ospiti',
    status: 'F4. F4. F4.',
    body: 'Abbiamo chiesto agli ospiti un commento sul sito. Basiti. Tutti basiti. Gli sceneggiatori sostengono che sia una reazione molto positiva.'
  },
  chat: {
    eyebrow: 'Il metodo Duccio',
    status: 'La chat segue il metodo Duccio.',
    body: '«Io non parlo proprio con nessuno, io mi faccio i cazzi miei.» Nessun messaggio in entrata, nessun messaggio in uscita. Lui sta benissimo. Chiuditi a riccio!'
  },
  forum: {
    eyebrow: 'La trama',
    status: 'Tre famiglie. Molte domande.',
    body: 'Ricchi buoni, ricchi cattivi, poveri un po’ buoni e un po’ cattivi. Il forum doveva fare chiarezza. Per ora è tutto un po’ nebuloso.'
  },
  contattami: {
    eyebrow: 'La posta di Fabio',
    status: 'La giusta telefonata, al giusto momento, alla giusta persona.',
    body: 'Fabio ha aperto una pagina contatti. René gli ha spiegato che non funziona così.'
  },
  fotogallery: {
    eyebrow: 'La fotografia',
    status: 'La fotografia non deve essere troppo bella.',
    body: 'Se no la gente cambia canale. Duccio ha garantito che qui non corriamo questo rischio.'
  },
  iniziative: {
    eyebrow: 'Un omaggio',
    status: 'Buona festa del Grazie!',
    body: 'Il tacchino costava troppo. Abbiamo messo le quaglie. Per il resto, qualsiasi somiglianza con feste americane è un omaggio.'
  },
  news: {
    eyebrow: 'Dal palinsesto',
    status: 'I greci si stanno comprando il format.',
    body: 'Fabio considera questa notizia una conferma del successo della serie. La sospensione alla terza puntata resta un dettaglio di palinsesto.'
  },
  iscriviti: {
    eyebrow: 'Il fans club di Fabio',
    status: 'Benvenuto nella fabbrica dei sogni.',
    body: 'Niente tessera, niente quota, niente email. Se però qualcuno ti chiede di portare i caffè, ti hanno scambiato per lo stagista.'
  }
};
