<script lang="ts">
  let { title, description, path = '/' }: {
    title: string;
    description: string;
    path?: string;
  } = $props();

  const siteUrl = 'https://fabio-occhidelcuore.it';
  const imageUrl = `${siteUrl}/images/social-preview.jpg`;
  const imageAlt = 'Gli Occhi del Cuore: occhi azzurri, cuore blu e i ritratti di Biascica, Corinna e Stanis nelle cornici rosa.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="it_IT" />
  <meta property="og:site_name" content="Gli Occhi del Cuore — Fans Club" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`${siteUrl}${path}`} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={imageAlt} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="twitter:image:alt" content={imageAlt} />
</svelte:head>
