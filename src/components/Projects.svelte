<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import FlyIn from "./FlyIn.svelte";
  import Button from "./Button.svelte";
  import CalcImage from "../images/calculator.webp";
  import Screen1 from "../images/screen1.webp";
  import Filler from "../images/filler.webp";
  import Github from "../icons/Github.svelte";
  import Link from "../icons/Link.svelte";
</script>

<FlyIn>
  <div id="projects">
    <div id="title">
      <div id="projectsTitle" class="hubot text-l center">Projects</div>
    </div>
    <div class="grid-container">
      <div class="card">
        <div class="card_content">
          <div class="imagecontaine">
            <img src={CalcImage.src} alt="haii^_^" class="card_img" />
          </div>
          <span
            class="text-m hubot projectNameText"
            style="color: var(--jpurple)">Calculator</span
          >
          <div class="projectText">
            A simple calculator made with HTML, CSS, and Javascript. It was
            implemented with Svelte and Astro and deployed with Vercel.
          </div>
        </div>
        <div class="footer">
        <a
          class="links"
          target="_blank"
          rel="noopener"
          href="https://github.com/jacobng24/calculator"
          title="GitHub"><Github /></a
        >
        <a
          class="links"
          target="_blank"
          rel="noopener"
          href="https://calculator-jacobng.vercel.app/"
          title="To the calculator!"><Link /></a
        >
        </div>
      </div>
      <div class="card">
        <div class="card_content">
          <div class="imagecontaine">
            <img src={Screen1.src} alt="haii^_^" class="card_img" />
          </div>
          <span
            class="text-m hubot projectNameText"
            style="color: var(--jpurple)">Personal Website</span
          >
          <div class="projectText">
            Personal website to show off portfolios and projects.
          </div>
        </div>
        <div class="footer">
          <a
          class="links"
          target="_blank"
          rel="noopener"
          href="https://github.com/jacobng24/jacobng.dev"
          title="GitHub"><Github /></a
        >
        <a
          class="links"
          target="_blank"
          rel="noopener"
          href="https://jacobng.dev"
          title="To the website!"><Link /></a
        >
        </div>
      </div>
      <div class="card">
        <div class="card_content">
          <div class="imagecontaine">
            <img src={Filler.src} alt="haii^_^" class="card_img" />
          </div>
          <span
            class="text-m hubot projectNameText"
            style="color: var(--jpurple)">Under Construction</span
          >
          <div class="projectText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            maximus sem magna, vitae bibendum lectus eleifend vel. Sed sit amet
            massa tincidunt enim dapibus mattis
          </div>
        </div>
        <div class="footer">
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
          href="https://jacobng.dev"
          title="To the !"><Link /></a
        >
        </div>
      </div>
    </div>
  </div>
  <div in:fly={{ easing: quintOut, duration: 1000, delay: 200 }}>
    <Button number={3} className={"margin"} />
  </div>
</FlyIn>
