<script lang="ts">
  import '../app.css';
  import SiteFrame from '#lib/components/SiteFrame.svelte';
  let { children } = $props();
</script>

<SiteFrame>{@render children()}</SiteFrame>
