<script lang="ts">
  import type { PageData } from './$types';
  import SocialMeta from '#lib/components/SocialMeta.svelte';
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<SocialMeta
  title={`${data.section.label} — Gli Occhi del Cuore`}
  description={data.copy.status}
  path={`/${data.section.slug}/`}
/>

<article class="section-page">
  <p class="eyebrow">{data.copy.eyebrow}</p>
  <h1>{data.section.label}</h1>
  <p class="construction">{data.copy.status}</p>
  <p>{data.copy.body}</p>
  <a class="home-link" href="/">♥ Torna alla homepage</a>
</article>
