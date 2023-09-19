<script>
  export let number = 1;
  export let className = "";
</script>

<div class="center">
  <button
    class="one-class margin {className}"
    on:click={() => {
      window.scroll({
        top: window.innerHeight * number,
        behavior: "smooth",
      });
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  </button>
</div>

<style>
  .one-class {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-weight: 500;
    flex-basis: 1;
    padding: 1rem 1rem;
    min-width: max-content;
    background-color: rgba(20, 8, 23, 0.5);
    text-align: center;
    font-size: 0.875rem;
    font-weight: bold;
    border-radius: 9999px;
    backdrop-filter: blur(10px);
    transition: all 0.2s;
    border: 0;
    outline-offset: 50%;
    z-index: 10;
    aspect-ratio: 1/1;
    outline: var(--jlightpink) solid 2px;
    color: var(--jlightpink);
  }

  .one-class:hover {
    background-color: rgba(65, 25, 74, 0.5);
    transform: scale(1.05, 1.05);
    opacity: 1;
  }

  .one-class:active {
    background-color: rgba(64, 79, 84, 0.9);
    opacity: 0.9;
  }

  .one-class svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: currentColor;
  }
</style>
