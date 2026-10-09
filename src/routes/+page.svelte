<svelte:head>
  <title>Gli Occhi del Cuore — Fans Club</title>
  <meta name="description" content="Il fans club di Fabio. Cuori blu, cornici rosa e Duccio che ha aperto tutto. Dai, dai, dai!" />
</svelte:head>

<div class="homepage">
  <h1 class="visually-hidden">Gli Occhi del Cuore — Fans Club di Fabio</h1>
  <img class="cover" src="/images/gli-occhi-del-cuore.webp" alt="Due grandi occhi azzurri sopra un cuore blu con la scritta Gli Occhi del Cuore" width="660" height="400" fetchpriority="high" />
  <div class="cast" aria-label="I protagonisti di Gli Occhi del Cuore">
    <img class="cast-left" src="/images/cast-left.webp" alt="Un protagonista nella cornice rosa a esplosione" width="600" height="508" />
    <img class="cast-center" src="/images/cast-center.webp" alt="Una protagonista nella cornice rosa a esplosione" width="600" height="554" />
    <img class="cast-right" src="/images/cast-right.webp" alt="Un altro protagonista nella cornice rosa a esplosione" width="600" height="583" />
  </div>
</div>

<style>
  .homepage { position: relative; width: 100%; height: 100%; overflow: hidden; }
  .cover { display: block; width: 100%; height: 100%; object-fit: fill; }
  .cast { position: absolute; inset: 0; pointer-events: none; }
  .cast img { position: absolute; object-fit: fill; max-width: none; }
  .cast-left { left: 0; bottom: 1%; width: 34%; height: 36%; }
  .cast-center { left: 31%; bottom: 0; width: 34%; height: 37%; }
  .cast-right { right: 0; bottom: 1%; width: 35%; height: 41%; }
  @media (max-width: 640px) { .homepage { aspect-ratio: 1.2; } }
</style>
