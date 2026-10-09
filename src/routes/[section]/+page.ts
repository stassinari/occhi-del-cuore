import { error } from '@sveltejs/kit';
import { sections } from '#lib/navigation.ts';
import { sectionCopy } from '#lib/section-copy.ts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => sections.map(({ slug }) => ({ section: slug }));

export const load: PageLoad = ({ params }) => {
  const section = sections.find(({ slug }) => slug === params.section);
  if (!section) error(404, 'Questa pagina non esiste nel sito di Fabio.');
  return { section, copy: sectionCopy[section.slug] };
};
