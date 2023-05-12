<script lang="ts">
  import bidoof from "../images/bidoof.jpeg";
  import viewport from "./useViewportAction";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
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
  let timeout: number;
</script>

<div
  id="aboutcards"
  use:viewport={{
    onEnter() {
      show = true;

      if (mobile) {
        timeout = setTimeout(() => {
          window.scrollBy(0, 600);
        }, 400);
      }
    },
    onExit() {
      show = false;
      clearTimeout(timeout);
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
        <br />Hello! My name is Jacob Ng, a current high school junior at Brophy
        College Preparatory. I have been learning all sorts of languages like
        Java, Python, HTML, CSS, and Javascript since Freshman year. <br /><br
        />I love music, video games, and fashion. Enjoy the website and my
        portfolios!
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
