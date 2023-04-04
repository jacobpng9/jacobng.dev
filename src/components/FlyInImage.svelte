<script lang="ts">
  import bidoof from "../images/bidoof.jpg";
  import viewport from "./useViewportAction";
  import { fly } from "svelte/transition";
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
        style="font-size: 18px"
        in:fly={{ easing: quintOut, duration: 1000, delay: 400 }}
      >
        <span class=" text-l hubot" style="color: var(--jpurple)">About Me</span>
        <br />Hello! My name is Jacob Ng, a current high school junior at Brophy
        College Preparatory. Coding is one of my favorite pastimes, and I have
        been learning all sorts of languages like Java, Python, HTML, CSS, and
        Javascript since Freshman year. <br><br>I love music, video games, and fashion.
        Enjoy the website and my portfolios!
      </section>
    </div>
    <div
      class="imagecontainer"
      in:fly={{ easing: quintOut, duration: 1000, delay: 400 }}
    >
      <img src={bidoof} alt="" class="aboutimage" />
    </div>
  {/if}
</div>
