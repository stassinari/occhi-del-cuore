<script lang="ts">
  import PortraitShadows from './PortraitShadows.svelte';

  let { photoX = 35, photoY = 0, photoSize = 540 }: {
    photoX?: number;
    photoY?: number;
    photoSize?: number;
  } = $props();

  // Independent contours follow the asymmetry of the screenshot's heart.
  const outer = 'M294 111 C253 52 202 12 145 10 C81 5 26 62 13 132 C-4 207 33 271 91 310 C156 354 226 392 291 468 C344 403 421 365 505 308 C564 270 592 217 587 158 C583 84 549 34 486 17 C411 -5 344 43 294 111 Z';
  const inner = 'M294 130 C263 80 211 48 160 54 C104 57 68 103 61 164 C51 218 69 261 104 284 C172 319 235 362 294 429 C346 370 415 334 483 285 C526 255 546 215 540 166 C534 109 512 75 470 61 C405 38 341 77 294 130 Z';
</script>

<svg viewBox="0 0 600 497" role="img" aria-label="Stanis e Corinna in una cornice rosa a cuore" class="couple-portrait">
  <defs>
    <clipPath id="couple-photo"><path d={inner} /></clipPath>
    <linearGradient id="couple-pink" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#d487bb" />
      <stop offset=".5" stop-color="#b65096" />
      <stop offset="1" stop-color="#cb7bb0" />
    </linearGradient>
    <PortraitShadows id="couple" />
  </defs>
  <g filter="url(#couple-outer-shadow)">
    <path d={outer} fill="url(#couple-pink)" stroke="#8e518b" stroke-width="2" stroke-linejoin="round" />
    <path d={inner} fill="#37223b" />
    <g clip-path="url(#couple-photo)">
      <image href="/images/stanis-corinna.webp" x={photoX} y={photoY} width={photoSize} height={photoSize} preserveAspectRatio="xMidYMid slice" />
      <path d={inner} fill="white" filter="url(#couple-inner-shadow)" />
    </g>
    <path d={inner} fill="none" stroke="#d18ab7" stroke-width="2" stroke-linejoin="round" />
  </g>
</svg>

<style>
  .couple-portrait { display: block; width: 100%; height: auto; overflow: visible; }
</style>
