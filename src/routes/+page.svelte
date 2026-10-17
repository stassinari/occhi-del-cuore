<script lang="ts">
  import BurstPortrait from "#lib/components/BurstPortrait.svelte";
</script>

<svelte:head>
  <title>Gli Occhi del Cuore — Fans Club</title>
  <meta
    name="description"
    content="Il fans club di Fabio. Cuori blu, cornici rosa e Duccio che ha aperto tutto. Dai, dai, dai!"
  />
</svelte:head>

<div class="homepage">
  <h1 class="visually-hidden">Gli Occhi del Cuore — Fans Club di Fabio</h1>
  <img
    class="cover"
    src="/images/gli-occhi-del-cuore.webp"
    alt="Due grandi occhi azzurri sopra un cuore blu con la scritta Gli Occhi del Cuore"
    width="1448"
    height="1086"
    fetchpriority="high"
  />
  <div class="cast" aria-label="I protagonisti di Gli Occhi del Cuore">
    <div class="cast-left">
      <BurstPortrait
        id="biascica"
        src="/images/biascica.webp"
        label="Biascica nella cornice rosa a esplosione"
        photoX={45}
        photoY={95}
        photoSize={370}
      />
    </div>
    <div class="cast-center">
      <BurstPortrait
        id="corinna"
        src="/images/corinna.webp"
        label="Corinna nella cornice rosa a esplosione"
        rotation={-167.7}
        photoX={80}
        photoY={85}
        photoSize={380}
      />
    </div>
    <div class="cast-right">
      <BurstPortrait
        id="stanis"
        src="/images/stanis.webp"
        label="Stanis nella cornice rosa a esplosione"
        rotation={133.7}
        flip="horizontal"
        photoX={55}
        photoY={95}
        photoSize={390}
      />
    </div>
  </div>
</div>

<style>
  .homepage {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #173a7a;
  }
  .cover {
    display: block;
    width: 100%;
    height: 92%;
    object-fit: fill;
  }
  .cast {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .cast > * {
    position: absolute;
    object-fit: fill;
    max-width: none;
  }
  .cast-left {
    left: 0;
    bottom: 1%;
    width: 34%;
    height: 36%;
  }
  .cast-center {
    left: 31%;
    bottom: 0;
    width: 34%;
    height: 37%;
  }
  .cast-right {
    right: 0;
    bottom: 1%;
    width: 35%;
    height: 41%;
  }
  @media (max-width: 640px) {
    .homepage {
      aspect-ratio: 1.2;
    }
  }
</style>
