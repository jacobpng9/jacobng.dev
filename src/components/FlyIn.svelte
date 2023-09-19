<script lang="ts">
  import viewport from "./useViewportAction";
  import { onMount } from "svelte";
  let mobile = false;
  onMount(() => {
    mobile = !!(
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  });
  let show = false;
</script>

<div
  id="section"
  use:viewport={{
    onEnter() {
      show = true;
    },
    onExit() {
    },
  }}
  style="display:block"
>
  {#if show}
    <slot />
  {/if}
</div>
