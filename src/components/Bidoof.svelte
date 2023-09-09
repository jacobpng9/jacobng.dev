<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import bidoof from "../images/bidoof.jpeg";
  import FlyIn from "./FlyIn.svelte";
</script>

<FlyIn>
  <div class="blurbcontainer">
    <section
      class="blurb"
      style="font-size: 18px"
      in:fly={{ easing: quintOut, duration: 1000, delay: 400 }}
    >
      <span class=" text-l hubot" style="color: var(--jpurple)">About Me</span>
      <br />Hello! My name is Jacob Ng, a current high school junior at Brophy
      College Preparatory. I have been learning all sorts of languages like
      Java, Python, HTML, CSS, and Javascript since Freshman year. <br /><br />I
      love music, video games, and fashion. Enjoy the website and my portfolios!
    </section>
  </div>
  <div
    class="imagecontainer"
    in:fly={{ easing: quintOut, duration: 1000, delay: 400 }}
  >
    <img src={Bidoof} alt="" class="aboutimage" />
  </div>
</FlyIn>
