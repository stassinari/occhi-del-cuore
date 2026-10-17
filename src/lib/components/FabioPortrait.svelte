<script lang="ts">
  import PortraitShadows from './PortraitShadows.svelte';
</script>

<svg viewBox="0 0 600 589" role="img" aria-label="Fabio in una fotografia incorniciata" class="fabio-portrait">
  <defs>
    <PortraitShadows id="fabio" />
    <clipPath id="fabio-photo"><rect x="18" y="18" width="474" height="447" /></clipPath>
  </defs>
  <g filter="url(#fabio-outer-shadow)">
    <g transform="matrix(1 .135 -.145 .98 85 4)">
      <rect width="510" height="520" fill="var(--paper-color)" />
      <g clip-path="url(#fabio-photo)">
        <image href="/images/banana.webp" x="18" y="18" width="474" height="447" preserveAspectRatio="xMidYMid slice" />
        <rect x="18" y="18" width="474" height="447" fill="white" filter="url(#fabio-inner-shadow)" />
      </g>
    </g>
  </g>
</svg>

<style>
  .fabio-portrait { display: block; width: 100%; height: auto; overflow: visible; }
</style>
