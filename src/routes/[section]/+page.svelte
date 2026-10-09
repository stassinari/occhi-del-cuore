<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.section.label} — Gli Occhi del Cuore</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content={data.copy.status} />
</svelte:head>

<article class="section-page">
  <p class="eyebrow">{data.copy.eyebrow}</p>
  <h1>{data.section.label}</h1>
  <p class="construction">{data.copy.status}</p>
  <p>{data.copy.body}</p>
  <a class="home-link" href="/">♥ Torna alla homepage</a>
</article>
