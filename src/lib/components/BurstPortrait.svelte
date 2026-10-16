<script lang="ts">
  let { id, src, label, rotation = 0 }: {
    id: string;
    src: string;
    label: string;
    rotation?: number;
  } = $props();

  // Both contours are traced from Biascica's frame, independently of the photo.
  const outer = '114,80 248,196 373,78 313,198 480,160 349,267 517,305 345,328 451,391 338,376 415,501 277,400 257,480 233,408 122,506 158,386 34,402 135,334 18,316 134,272 68,201 170,220';
  const inner = '148,132 247,215 326,141 295,235 419,200 328,275 454,299 321,315 399,368 319,354 372,449 273,376 257,433 242,379 151,459 176,364 85,381 160,326 76,310 154,279 103,226 188,243';
</script>

<svg viewBox="18 78 499 428" preserveAspectRatio="none" role="img" aria-label={label} class="burst-portrait">
  <defs>
    <clipPath id={`${id}-photo`}><polygon points={inner} /></clipPath>
    <linearGradient id={`${id}-pink`} x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#d487bb" />
      <stop offset=".5" stop-color="#b65096" />
      <stop offset="1" stop-color="#cb7bb0" />
    </linearGradient>
  </defs>
  <g transform={`rotate(${rotation} 267.5 262.5)`}>
    <polygon points={outer} fill={`url(#${id}-pink)`} stroke="#8e518b" stroke-width="2" stroke-linejoin="round" />
    <polygon points={inner} fill="#37223b" stroke="#e6a5ce" stroke-width="9" stroke-linejoin="miter" />
    <g clip-path={`url(#${id}-photo)`}>
      <image href={src} x="-25" y="35" width="480" height="480" preserveAspectRatio="xMidYMid slice" transform={`rotate(${-rotation} 267.5 262.5)`} />
    </g>
  </g>
</svg>

<style>
  .burst-portrait { display: block; width: 100%; height: 100%; overflow: visible; }
</style>
