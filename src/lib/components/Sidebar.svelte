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
      <div class="polaroid"><FabioPortrait /></div>
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
    gap: 0.45em;
    color: #ecebd3;
    text-decoration: none;
    font-weight: 900;
    text-shadow:
      1px 1px 1px #fff4dc,
      2px 3px 2px #144d73;
  }
  nav a:hover {
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  @media (max-width: 640px) {
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
      top: 10px;
      width: min(100%, 170px);
      height: 110px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
    }
    .couple {
      top: 115px;
      width: min(100%, 175px);
      left: 50%;
      transform: translateX(-50%);
    }
    nav {
      font-size: clamp(0.875rem, 3.8vw, 1.4rem);
      padding: 2rem 0.6rem 1.5rem;
      gap: 0.7em;
    }
  }
</style>
