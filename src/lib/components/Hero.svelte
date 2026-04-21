<section id="hero">
  <h1>Los Compit's</h1>
  <p>Cumbia, Salsa y Son Cubano</p>
</section>

<style>
  section {
    --hero-focus-inline: 50%;
    --hero-focus-block: 100%;
    --hero-overlay-opacity: 0.42;
    --hero-overlay-stop: 78%;

    background-color: rgb(10 10 10);
    background-image:
      radial-gradient(
        circle at 50% 45%,
        rgb(0 0 0 / 0) 18%,
        rgb(0 0 0 / var(--hero-overlay-opacity)) var(--hero-overlay-stop)
      ),
      url("../assets/images/hero.webp");
    background-repeat: no-repeat, no-repeat;
    background-size: cover, cover;
    background-position:
      center center,
      var(--hero-focus-inline) var(--hero-focus-block);
    min-block-size: clamp(18rem, 68vw, 46rem);
    display: grid;
    place-content: center;
    text-align: center;
  }

  @container content (width >= 48rem) {
    section {
      min-block-size: clamp(24rem, 58vw, 54rem);
    }
  }

  @container content (width >= 72rem) {
    section {
      min-block-size: min(70dvh, 56rem);
    }
  }

  h1,p {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    text-shadow: 0 0 1rem var(--hero-text-shadow);
    font-weight: bolder;
  }
  
  h1{
    font-size: clamp(4rem, 2.4rem + 6vw, 8rem);
    color: var(--hero-text-title);
  }
  
  p {
    font-size: clamp(1.5rem, 1rem + 2.4vw, 3rem);
    color: var(--hero-text-subtitle);
  }
</style>