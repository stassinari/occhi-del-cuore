export const sections = [
  { slug: 'guestbook', label: 'Guestbook', side: 'left' },
  { slug: 'chat', label: 'Chat', side: 'left' },
  { slug: 'forum', label: 'Forum', side: 'left' },
  { slug: 'contattami', label: 'Contattami', side: 'left' },
  { slug: 'fotogallery', label: 'Fotogallery', side: 'right' },
  { slug: 'iniziative', label: 'Iniziative', side: 'right' },
  { slug: 'news', label: 'News', side: 'right' },
  { slug: 'iscriviti', label: 'Iscriviti', side: 'right' }
] as const;

export type Section = (typeof sections)[number];
