<script lang="ts">
  import heroDesktopImage from "$lib/assets/images/hero-1333.webp";
  import heroCompactImage from "$lib/assets/images/hero-480.webp";
  import heroMediumImage from "$lib/assets/images/hero-828.webp";

  const heroImageSet = `${heroCompactImage} 480w, ${heroMediumImage} 828w, ${heroDesktopImage} 1333w`;
</script>

<section id="hero" aria-labelledby="hero-title">
  <img
    class="hero-image"
    src={heroDesktopImage}
    srcset={heroImageSet}
    sizes="100vw"
    alt=""
    width={1333}
    height={922}
    fetchpriority="high"
    loading="eager"
    decoding="async"
  />

  <div class="hero-copy">
    <h1 id="hero-title">Los Compit's</h1>
    <p>Cumbia, Salsa y Son Cubano</p>
  </div>
</section>

<style>
  section {
    --hero-focus-inline: 50%;
    --hero-focus-block: 100%;
    --hero-overlay-opacity: 0.42;
    --hero-overlay-stop: 78%;

    position: relative;
    isolation: isolate;
    overflow: clip;
    background-color: rgb(10 10 10);
    min-block-size: clamp(18rem, 68vw, 46rem);
    display: grid;
    place-items: center;
    text-align: center;
  }

  section::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at 50% 45%,
        rgb(0 0 0 / 0) 18%,
        rgb(0 0 0 / var(--hero-overlay-opacity)) var(--hero-overlay-stop)
      );
    z-index: 1;
    pointer-events: none;
  }

  .hero-image {
    position: absolute;
    inset: 0;
    z-index: 0;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    object-position: var(--hero-focus-inline) var(--hero-focus-block);
  }

  .hero-copy {
    position: relative;
    z-index: 2;
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