<script lang="ts">
  import Heart from './Heart.svelte';
  import FabioPortrait from './FabioPortrait.svelte';
  import { sections } from '#lib/navigation.ts';
  let { side }: { side: 'left' | 'right' } = $props();
</script>

<aside class="sidebar" class:right={side === 'right'} aria-label={side === 'left' ? 'La posta di Fabio' : 'Menù di Fabio'}>
  <div class="decorations">
    {#if side === 'left'}
      <div class="polaroid"><FabioPortrait /></div>
      <a class="envelope" href="/contattami/">
        <span>La Posta<br />di<br />Fabio</span>
      </a>
    {:else}
      <div class="speech-bubble">Menù<br />di<br />Fabio</div>
      <img class="couple" src="/images/couple-heart.webp" alt="Due protagonisti di Gli Occhi del Cuore in una cornice rosa a cuore" width="600" height="497" />
    {/if}
  </div>
  <nav aria-label={side === 'left' ? 'Comunità di Fabio' : 'Fans club'}>
    {#each sections.filter((section) => section.side === side) as section}
      <a href="/{section.slug}/"><Heart /><span>{section.label}</span></a>
    {/each}
  </nav>
</aside>

<style>
  .sidebar {
    min-width: 0;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    border-radius: 18px 18px 22px 22px;
    background: linear-gradient(155deg, #a0c6cc 0%, #1888b8 28%, #087faf 60%, #1688b0);
    box-shadow: inset 2px 3px 5px #7da9bd, inset -3px -4px 5px #17668f, 4px 7px 6px #003765;
    margin: 10px 4% 16px;
  }
  .decorations { position: relative; flex: 1; min-height: 0; }
  .polaroid { position: absolute; width: 119%; height: auto; max-width: none; top: 1%; left: -3%; }
  .envelope {
    position: absolute;
    left: 4%; top: 60%; width: 91%; aspect-ratio: 1.55;
    display: grid; place-items: center;
    transform: rotate(-15deg);
    color: #a65385;
    background: var(--paper-color);
    border: 5px ridge #eee9de;
    box-shadow: 2px 5px 4px #15608d;
    text-decoration: none;
    font-size: clamp(.875rem, 2.3vw, 2.3rem);
    letter-spacing: .06em;
    text-align: center;
    line-height: 1.02;
    text-shadow: 1px 1px 1px #d9a1b5;
  }
  .envelope::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(25deg, transparent 49.5%, #b5afa14d 50%, transparent 50.5%);
  }
  .speech-bubble {
    position: absolute; top: 6%; left: -5%; width: 108%; height: 35%;
    border-radius: 50%; display: grid; align-content: center; text-align: center;
    font-size: clamp(1.3rem, 2.75vw, 2.8rem); line-height: 1.05;
    font-weight: normal; color: #a45c83; background: var(--paper-color);
    box-shadow: 2px 3px 5px #206292;
    text-shadow: 1px 2px 2px #bc8b9f;
  }
  .speech-bubble::after {
    content: ''; position: absolute; top: 89%; left: 31%; width: 23%; height: 31%;
    background: var(--paper-color); clip-path: polygon(26% 0, 100% 0, 0 100%);
  }
  .couple { position: absolute; top: 47%; left: -34%; width: 119%; height: auto; max-width: none; }
  nav { display: grid; gap: .6em; padding: 0 6% 21%; font-size: clamp(.75rem, 2vw, 2rem); }
  nav a {
    display: flex; align-items: center; gap: .45em;
    color: #ecebd3; text-decoration: none; font-weight: 900;
    text-shadow: 1px 1px 1px #fff4dc, 2px 3px 2px #144d73;
  }
  nav a:hover { color: #fff; text-decoration: underline; text-underline-offset: .15em; }

  @media (max-width: 640px) {
    .sidebar { margin: 1rem .65rem; min-height: 380px; }
    .decorations { flex: none; height: 240px; }
    .polaroid { width: min(100%, 170px); top: 5px; left: 50%; transform: translateX(-50%); }
    .envelope { top: 157px; width: min(85%, 145px); left: 50%; transform: translateX(-50%) rotate(-15deg); font-size: 1.1rem; border-width: 3px; }
    .speech-bubble { top: 10px; width: min(100%, 170px); height: 110px; left: 50%; transform: translateX(-50%); font-size: 1.5rem; }
    .couple { top: 115px; width: min(100%, 175px); left: 50%; transform: translateX(-50%); }
    nav { font-size: clamp(.875rem, 3.8vw, 1.4rem); padding: 2rem .6rem 1.5rem; gap: .7em; }
  }
</style>
