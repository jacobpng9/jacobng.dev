<script>
</script>

<button
  class="one-class"
  on:click={() => {
    window.scroll({
      top: window.outerHeight,
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
    style="color: var(--jpurple)"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
    />
  </svg>
</button>

<style>
  .one-class {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-weight: 500;
    flex-basis: 1;
    padding: 1rem 1rem;
    min-width: max-content;
    background-color: rgba(64, 79, 84, 0.5);
    text-align: center;
    font-size: 0.875rem;
    font-weight: bold;
    border-radius: 9999px;
    backdrop-filter: blur(20px);
    transition: all 0.2s;
    outline: 2px solid rgba(9, 7, 58, 0.5);
    outline-offset: 50%;
    position: absolute;
    right: 50%;
    bottom: 1rem;
    z-index: 10;
    aspect-ratio: 1/1;
    transform: translateX(50%);
  }

  .one-class:hover {
    background-color: rgba(64, 79, 84, 1);
    background-opacity: 1;
  }

  .one-class:active {
    background-color: rgba(64, 79, 84, 0.9);
    background-opacity: 0.9;
  }

  .one-class svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: currentColor;
  }
</style>
