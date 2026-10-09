<script lang="ts">
  let { large = false }: { large?: boolean } = $props();
</script>

<span class:large class="heart" aria-hidden="true">♥</span>

<style>
  .heart {
    display: inline-block;
    line-height: 1;
    color: #86d6e5;
    text-shadow: 0 -1px 1px #e7f4e6, 0 3px 1px #12618a, 1px 5px 4px #003a66;
    flex-shrink: 0;
    font-family: Georgia, serif;
  }

  .large {
    font-size: clamp(2.5rem, 6.5vw, 6rem);
    color: #1688c1;
    text-shadow: 0 -3px 3px #88c6dc, 0 5px 2px #064c8b, 2px 9px 7px #003365;
  }
</style>
