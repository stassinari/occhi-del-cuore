<script lang="ts">
  import type { Snippet } from 'svelte';
  import Header from './Header.svelte';
  import Sidebar from './Sidebar.svelte';
  let { children }: { children: Snippet } = $props();
</script>

<a class="skip-link" href="#main">Vai al contenuto</a>
<div class="site-frame">
  <Header />
  <div class="site-body">
    <Sidebar side="left" />
    <main id="main" tabindex="-1">{@render children()}</main>
    <Sidebar side="right" />
  </div>
</div>
