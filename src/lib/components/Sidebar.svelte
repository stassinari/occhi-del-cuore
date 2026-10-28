<script lang="ts">
  import { sections } from "#lib/navigation.ts";
  import CouplePortrait from "./CouplePortrait.svelte";
  import FabioPortrait from "./FabioPortrait.svelte";
  import Heart from "./Heart.svelte";
  let { side }: { side: "left" | "right" } = $props();
</script>

<aside
  class="sidebar"
  class:right={side === "right"}
  aria-label={side === "left" ? "La posta di Fabio" : "Menù di Fabio"}
>
  <div class="decorations" class:mail={side === "left"}>
    {#if side === "left"}
      <div class="polaroid">
        <a class="secret-trigger" href="/videos/fabio-secret.mp4" aria-label="Scopri il segreto di Fabio" aria-haspopup="dialog" data-secret-video>
          <FabioPortrait />
        </a>
      </div>
      <dialog class="secret-video" aria-label="Il segreto di Fabio" data-secret-dialog>
        <button class="secret-close" type="button" aria-label="Chiudi il video" autofocus>×</button>
        <video controls playsinline preload="none" aria-label="Il video segreto di Fabio"></video>
      </dialog>
      <a class="envelope" href="/contattami/">
        <svg class="envelope-flap" viewBox="0 0 300 194" aria-hidden="true">
          <defs>
            <filter
              id="envelope-flap-shadow"
              x="-10%"
              y="-20%"
              width="120%"
              height="150%"
              color-interpolation-filters="sRGB"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="1.5"
                flood-color="#665249"
                flood-opacity=".3"
              />
            </filter>
          </defs>
          <path
            d="M0 8 143 100 Q150 105 157 100 L300 8 V-12 H0Z"
            fill="var(--paper-color)"
            filter="url(#envelope-flap-shadow)"
          />
        </svg>
        <span>La Posta<br />di<br />Fabio</span>
      </a>
    {:else}
      <div class="speech-bubble">Menù<br />di<br />Fabio</div>
      <div class="couple">
        <CouplePortrait photoX={10} photoY={0} photoSize={540} />
      </div>
    {/if}
  </div>
  <nav aria-label={side === "left" ? "Comunità di Fabio" : "Fans club"}>
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
    background: linear-gradient(
      155deg,
      #a0c6cc 0%,
      #1888b8 28%,
      #087faf 60%,
      #1688b0
    );
    box-shadow:
      inset 2px 3px 5px #7da9bd,
      inset -3px -4px 5px #17668f,
      4px 7px 6px #003765;
    margin: 10px 4% 16px;
  }
  .decorations {
    position: relative;
    flex: 1;
    min-height: 0;
  }
  .polaroid {
    position: absolute;
    width: 119%;
    height: auto;
    max-width: none;
    top: 1%;
    left: -3%;
  }
  .mail {
    min-height: max-content;
    padding-top: 5px;
  }
  .mail .polaroid {
    position: relative;
    top: auto;
  }
  .secret-trigger {
    display: block;
    transition: rotate 120ms;
  }
  .secret-trigger:hover { rotate: -1deg; }
  .secret-trigger:focus-visible {
    outline: 2px dashed var(--paper-color);
    outline-offset: 2px;
  }
  .secret-video {
    width: min(80vw, calc((100dvh - 96px) * 16 / 9));
    max-width: none;
    max-height: none;
    padding: 0;
    border: 0;
    overflow: visible;
    background: transparent;
  }
  .secret-video::backdrop { background: transparent; }
  .secret-video video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
  }
  .secret-close {
    position: absolute;
    right: 0;
    bottom: 100%;
    width: 32px;
    height: 32px;
    padding: 0;
    border: 0;
    background: #000;
    color: #fff;
    font: 26px/1 Arial, sans-serif;
    cursor: pointer;
  }
  .secret-close:focus-visible { outline: 2px solid #fff; outline-offset: -3px; }
  @media (pointer: coarse) {
    .secret-close { width: 44px; height: 44px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .secret-trigger { transition: none; }
    .secret-trigger:hover { rotate: none; }
  }
  .mail .envelope {
    position: relative;
    top: auto;
    /* Reserve the rotated corners as well as the visible gap. */
    margin-top: calc(10.7% + 14px);
    margin-bottom: calc(10.7% + 14px);
  }
  .envelope {
    position: absolute;
    left: 4%;
    top: 60%;
    width: 91%;
    aspect-ratio: 1.55;
    display: grid;
    place-items: center;
    transform: rotate(-15deg);
    color: #a65385;
    background: var(--paper-color);
    border-radius: 2px;
    box-shadow: 3px 4.5px 2.5px #07142ea6;
    text-decoration: none;
    font-size: clamp(0.875rem, 2.3vw, 2.3rem);
    letter-spacing: 0.06em;
    text-align: center;
    line-height: 1.02;
    text-shadow: 1px 1px 1px #d9a1b5;
  }
  .envelope-flap {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }
  .envelope span {
    position: relative;
  }
  .speech-bubble {
    position: absolute;
    top: 6%;
    left: -5%;
    width: 108%;
    height: 35%;
    border-radius: 50%;
    display: grid;
    align-content: center;
    text-align: center;
    font-size: clamp(1.3rem, 2.75vw, 2.8rem);
    line-height: 1.05;
    font-weight: normal;
    color: #a45c83;
    background: var(--paper-color);
    box-shadow: 2px 3px 5px #206292;
    text-shadow: 1px 2px 2px #bc8b9f;
  }
  .speech-bubble::after {
    content: "";
    position: absolute;
    top: 89%;
    left: 31%;
    width: 23%;
    height: 31%;
    background: var(--paper-color);
    clip-path: polygon(26% 0, 100% 0, 0 100%);
  }
  .couple {
    position: absolute;
    top: 47%;
    left: -34%;
    width: 119%;
    height: auto;
    max-width: none;
  }
  nav {
    display: grid;
    gap: 0.6em;
    padding: 0 6% 21%;
    font-size: clamp(0.75rem, 2vw, 2rem);
  }
  nav a {
    display: flex;
    align-items: center;
    gap: 0.25em;
    color: #ecebd3;
    text-decoration: none;
    font-weight: 900;
    text-shadow:
      1px 1px 1px #144d73,
      2px 3px 2px #144d73;
  }
  nav a:hover {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  @media (max-width: 640px) {
    .secret-video {
      width: min(100vw, calc((100dvh - 96px) * 16 / 9));
    }
    .sidebar {
      margin: 1rem 0.65rem;
      min-height: 380px;
    }
    .decorations {
      flex: none;
      height: 240px;
    }
    .mail {
      height: auto;
    }
    .right .decorations {
      height: auto;
      padding-top: 10px;
    }
    .polaroid {
      width: min(100%, 170px);
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
    .envelope {
      top: 157px;
      width: min(85%, 145px);
      left: 50%;
      transform: translateX(-50%) rotate(-15deg);
      font-size: 1.1rem;
    }
    .mail .envelope {
      display: grid;
      margin-top: 32px;
      margin-bottom: 18px;
    }
    .speech-bubble {
      position: relative;
      top: auto;
      width: min(100%, 170px);
      height: 110px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
    }
    .couple {
      position: relative;
      top: auto;
      margin-top: 35px;
      width: min(100%, 175px);
      left: 50%;
      transform: translateX(-50%);
    }
    nav {
      margin-top: auto;
      font-size: clamp(0.875rem, 3.8vw, 1.4rem);
      padding: 2rem 0.6rem 1.5rem;
      gap: 0.7em;
    }
  }
</style>
