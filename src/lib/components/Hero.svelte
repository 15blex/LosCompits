<section id="hero">
  <h1>Los Compits</h1>
  <p>Cumbia, Salsa y Son Cubano</p>
</section>

<style>
  section {
    background: url('../assets/images/hero.webp') center/cover no-repeat;
    min-block-size: 50dvh;
    display: grid;
    place-content: center;
  }

  @container content (width > 64rem) {
    section {
      min-block-size: 80dvh;
    }
  }
</style>