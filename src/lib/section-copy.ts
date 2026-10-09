import type { Section } from './navigation';

type SectionCopy = {
  eyebrow: string;
  status: string;
  body: string;
};

export const sectionCopy: Record<Section['slug'], SectionCopy> = {
  guestbook: {
    eyebrow: 'F4 — basito',
    status: 'Il guestbook è rimasto basito.',
    body: 'Fabio voleva raccogliere i complimenti. Gli sceneggiatori hanno scritto soltanto la reazione. Per il momento, nessuno può aggiungere una battuta.'
  },
  chat: {
    eyebrow: 'Dai, dai, dai!',
    status: 'La conversazione è fuori campo.',
    body: 'Fabio parla del fans club. Stanis parla di Stanis. Qui, per ora, trovi solo il silenzio: non si inviano messaggi.'
  },
  forum: {
    eyebrow: 'La locura',
    status: 'Gli sceneggiatori sono al ristorante.',
    body: 'Tre sceneggiatori, un pranzo e nessuna discussione scritta. Il forum, per ora, è tutto qui.'
  },
  contattami: {
    eyebrow: 'La posta di Fabio',
    status: 'La busta c’è. La posta no.',
    body: 'La scenografia ha fatto il suo. La produzione non ha previsto un indirizzo: da questa pagina non parte nessuna lettera.'
  },
  fotogallery: {
    eyebrow: 'Apri tutto!',
    status: 'Duccio ha smarmellato anche le foto.',
    body: 'La luce c’è, le cornici pure. Stiamo ancora cercando qualcuno che sia rimasto a fuoco.'
  },
  iniziative: {
    eyebrow: 'La festa del grazie',
    status: 'Fabio sta organizzando.',
    body: 'Abbiamo il nome della festa. Sul programma, gli sceneggiatori non rispondono. Un’iniziativa alla volta.'
  },
  news: {
    eyebrow: 'Gli Occhi del Cuore',
    status: 'Nessuna notizia dal set.',
    body: 'Stanis avrebbe già pronto un comunicato su Stanis. Fabio preferisce aspettare una notizia sul fans club.'
  },
  iscriviti: {
    eyebrow: 'Il fans club di Fabio',
    status: 'Se sei arrivato fin qui, sei già dei nostri.',
    body: 'Niente tessera, niente modulo, niente email. Basta guardare con gli occhi del cuore. Gli sceneggiatori approvano: una scena in meno da scrivere.'
  }
};
