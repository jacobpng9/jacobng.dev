<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import FlyIn from "./FlyIn.svelte";
  import Button from "./Button.svelte";
  import Screen1 from "../images/screen1.jpg";
  import Jacob from "../images/jacob1.jpg";
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
            <img src={Screen1} alt="haii^_^" class="card_img" />
          </div>
          <br />Lorem ipsum dolor sit amet,asdasdadasdasdadasdas
        </div>
        <div class="footer">
          <div class="hubot text-m" style="color: var(--jpurple)">Github</div>
        </div>
      </div>
      <div class="card">
        <div class="card_content">
          <img src={Jacob} alt="haii^_^" class="card_img" />

          <span class="text-m hubot" style="color: var(--jpurple)"
            >Personal Website</span
          >
          Personal website to show off portfolios and projects.
        </div>
        <div class="footer">
          <div class="hubot text-m" style="color: var(--jpurple)">Github</div>
        </div>
      </div>
      <div class="card">
        <div class="card_content">
          <div class="imagecontaine">
            <img src={Jacob} alt="haii^_^" class="card_img" />
          </div>
          <br />Hello! My name is Jacob Ng, a current high school junior at
          Brophy College Preparatory. I have been learning all sorts of
          languages like Java, Python, HTML, CSS, and Javascript since Freshman
          year. <br /><br />I love music, video games, and fashion. Enjoy the
          website and my portfolios!
        </div>
        <div class="footer">
          <div class="hubot text-m" style="color: var(--jpurple)">Github</div>
        </div>
      </div>
    </div>
  </div>
  <div in:fly={{ easing: quintOut, duration: 1000, delay: 200 }}>
    <Button number={2} className={"margin"} />
  </div>
</FlyIn>
