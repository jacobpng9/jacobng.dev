<script>
  const buttons = ["Home", "About", "Projects", "Photos", "Contact"];
</script>

{#each buttons as b, number}
  <button class="head resetButton"
    on:click={() =>
      window.scroll({
        top: window.innerHeight * number,
        behavior: "smooth",
      })}
  >
    {b}
  </button>
{/each}
