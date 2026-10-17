<script lang="ts">
  let { large = false }: { large?: boolean } = $props();
  const id = $props.id();
  const headerShape = 'M90 43 C72 20 53 12 34 23 C14 34 11 54 24 73 C40 91 73 95 90 127 C107 95 137 91 155 73 C170 54 165 34 147 24 C128 13 109 21 90 43Z';
  const menuShape = 'M90 34 C76 22 58 16 42 23 C25 30 20 44 27 59 C43 77 73 81 90 113 C107 81 134 78 150 60 C159 44 153 29 138 23 C121 16 104 22 90 34Z';
</script>

<svg class:large class="heart" viewBox="0 0 180 144" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id={`${id}-face`} x1="0" y1="0" x2="0" y2="1">
      {#if large}
        <stop stop-color="#267fab" />
        <stop offset=".48" stop-color="#176aab" />
        <stop offset="1" stop-color="#1364a4" />
      {:else}
        <stop stop-color="#a3c9ce" />
        <stop offset=".3" stop-color="#8bbbc7" />
        <stop offset=".64" stop-color="#29799f" />
        <stop offset="1" stop-color="#14578e" />
      {/if}
    </linearGradient>
    <filter id={`${id}-relief`} x="-35%" y="-35%" width="170%" height="190%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="soft-alpha" />
      <feOffset in="soft-alpha" dy={large ? -15 : -16} result="raised-alpha" />
      <feComposite in="SourceAlpha" in2="raised-alpha" operator="out" result="lower-edge" />
      <feFlood flood-color={large ? '#00285f' : '#00385e'} flood-opacity=".95" />
      <feComposite in2="lower-edge" operator="in" result="shade" />
      <feOffset in="soft-alpha" dy={large ? 12 : 7} result="lowered-alpha" />
      <feComposite in="SourceAlpha" in2="lowered-alpha" operator="out" result="upper-edge" />
      <feFlood flood-color={large ? '#8ab8c9' : '#b3d0cf'} flood-opacity={large ? '.85' : '.7'} />
      <feComposite in2="upper-edge" operator="in" result="light" />
      <feMerge>
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="shade" />
        <feMergeNode in="light" />
      </feMerge>
      <feGaussianBlur stdDeviation={large ? 1.4 : 1.8} />
      <feDropShadow dx="1" dy={large ? 9 : 10} stdDeviation={large ? 5 : 6} flood-color="#003367" flood-opacity=".75" />
    </filter>
  </defs>
  <path
    d={large ? headerShape : menuShape}
    transform="translate(0 -12.96) scale(1 1.18)"
    fill={`url(#${id}-face)`}
    filter={`url(#${id}-relief)`}
  />
</svg>

<style>
  .heart {
    display: block;
    width: 1.35em;
    height: 1.08em;
    overflow: visible;
    flex-shrink: 0;
  }

  .large {
    width: clamp(3rem, 6.5vw, 6rem);
    height: auto;
  }
</style>
