<script lang="ts">
  import bidoof from "../images/bidoof.jpg";
  import viewport from "./useViewportAction";
  import { fly, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let show = false;
</script>

<div
  id="aboutcards"
  use:viewport={{
    onEnter() {
      show = true;
    },
    onExit() {
      show = false;
    },
  }}
>
  {#if show}
    <div class="blurbcontainer">
      <section
        class="blurb"
        style="font-size: 2rem"
        in:fly={{ easing: quintOut, duration: 1000, delay: 400 }}
      >
        <span class="text-l hubot" style="color: var(--jpurple)">Jacob Ng</span>
        <br />Hello! My name is Jacob Ng, a current high school junior at Brophy
        College Preparatory. Coding is one of my favorite pastimes, and I have
        been learning all sorts of languages like Java, Python, HTML, CSS, and
        Javascript since Freshman year. I love music, video games, and fashion.
        Enjoy the website and my portfolios!
      </section>
    </div>
    <div
      class="imagecontainer"
      in:slide={{ axis: "y", easing: quintOut, duration: 1000 }}
    >
      <img src={bidoof} alt="" class="aboutimage" />
    </div>
  {/if}
</div>
