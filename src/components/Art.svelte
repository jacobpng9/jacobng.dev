<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import FlyIn from "./FlyIn.svelte";
  import Button from "./Button.svelte";

  import { images } from "./images";

  let selectedIndex = 0;
</script>

<FlyIn>
  <div class="" id="art">
    <div class="gallery">
      <ul>
        {#each images as image, i}
          <!-- Add more images as needed -->
          <li>
            <img
              src={image.url}
              alt={image.alt}
              class="artimage"
              class:none={selectedIndex % images.length !== i}
            />
          </li>
        {/each}
      </ul>
      <div class="navigation">
        <button on:click={() => (selectedIndex -= 1)}>Previous</button>
        <button on:click={() => (selectedIndex += 1)}>Next</button>
      </div>
    </div>
    <div in:fly={{ easing: quintOut, duration: 1000, delay: 200 }}>
      <Button number={3} className={"margin"} />
    </div>
  </div>
</FlyIn>

<style>
  .none {
    display: none;
  }
</style>
