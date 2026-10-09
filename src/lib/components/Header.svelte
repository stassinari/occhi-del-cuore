<script lang="ts">
  import Heart from './Heart.svelte';
</script>

<header class="site-header">
  <Heart large />
  <a class="site-title" href="/" aria-label="Gli Occhi del Cuore Fans Club — homepage">
    <span>Gli OCCHI del CUORE</span>
    <span class="subtitle">FANS CLUB</span>
  </a>
  <Heart large />
</header>

<style>
  .site-header {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 0;
    padding: .15em 3% .55em;
    background: linear-gradient(110deg, #0489b9, #1575b5 55%, #067bb0);
    border-radius: 0 0 15px 15px;
    box-shadow: inset 0 2px 5px #7eb3c0, inset 0 -5px 4px #00527e,
      0 5px 3px #26366c, 0 12px 3px #df73ae, 0 18px 4px #6c276d;
  }

  .site-title {
    display: block;
    text-align: center;
    color: #f0ecd8;
    font-weight: 900;
    font-size: clamp(1.5rem, 4.4vw, 4.5rem);
    line-height: .97;
    text-shadow: 1px 1px 1px #fff8ec, 3px 5px 3px #123864;
    text-decoration: none;
  }

  .site-title span { display: block; }
  .subtitle { font-size: .7em; margin-top: .13em; }

  @media (max-width: 640px) {
    .site-header { padding: 1rem .35rem; }
    .site-title { font-size: clamp(1.2rem, 5vw, 2rem); }
  }
</style>
