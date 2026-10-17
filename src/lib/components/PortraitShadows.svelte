<script lang="ts">
  let { id }: { id: string } = $props();
</script>

<filter id={`${id}-outer-shadow`} x="-15%" y="-15%" width="140%" height="140%" color-interpolation-filters="sRGB">
  <feDropShadow dx="6" dy="9" stdDeviation="5" flood-color="#07142e" flood-opacity=".65" />
</filter>
<filter id={`${id}-inner-shadow`} x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
  <feOffset in="blur" dx="5" dy="7" result="offset" />
  <feComposite in="SourceAlpha" in2="offset" operator="out" result="inset" />
  <feFlood flood-color="#180d20" flood-opacity=".85" />
  <feComposite in2="inset" operator="in" />
</filter>
