<script lang="ts">
  import FlyIn from "./FlyIn.svelte";
  import Github from "../icons/Github.svelte";
  import Linkedin from "../icons/Linkedin.svelte";
</script>

<FlyIn>
  <div id="contactMePage">
    <div id="contactMeContainer">
      <div id="contactMeTitle" class="hubot text-l center">Contact Me</div>
      <div id="contactMeText" class="text-m center">
        Feel free to contact me through any of the following platforms!
      </div>
      <div id="contactMeLinks">
        <a
          class="links"
          target="_blank"
          rel="noopener"
          href="https://github.com/jacobng24"
          title="GitHub"><Github /></a
        >
        <a
          class="links"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/jacob-ng-301743296/"
          title="LinkedIn"><Linkedin /></a
        >
      </div>
    </div>
  </div></FlyIn
>

<style>
  :global(svg) {
    max-width: 50px;
    display: block;
  }
</style>
