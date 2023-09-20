<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import FlyIn from "./FlyIn.svelte";
  import Button from "./Button.svelte";
</script>

<FlyIn>
  <div id="projects">
    <div id="">
    </div>
  </div>
  <div in:fly={{ easing: quintOut, duration: 1000, delay: 200 }}>
      <Button number={2} className={"margin"} />
    </div>
</FlyIn>