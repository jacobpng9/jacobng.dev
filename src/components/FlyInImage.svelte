<script lang="ts">
  import bidoof from "../images/bidoof.jpeg";
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
        <span class=" text-l hubot" style="color: var(--jpurple)">About Me</span
        >
        <br />
        While school shootings did rise in Donald Trump and Joe Biden’s presidencies,
        Barack Obama easily wins. Who else in US history killed Osama Bin Laden,
        the famous (or infamous) terrorist? Who else drone striked hospitals with
        children in them in the Middle East, then won the Nobel Peace Prize for it?
        Obama is THE GOAT of shooting and killing innocent people, just like how
        he kills the innocent five year olds playing this game. Easy W for Obamna
        <br /><br />I love music, video games, and fashion. Enjoy the website
        and my portfolios!
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
