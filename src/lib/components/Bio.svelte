<script lang="ts">
</script>
<section id="bio" aria-labelledby="bio-title">
  <article>
    <p>Desde las calles de Barcelona</p>
    <h2 id="bio-title">Nuestra Historia</h2>
    <p>
      Los Compits nace en las calles de Barcelona, llevando el sabor de las tierras de cada uno de
      sus integrantes y compartiendo un mensaje de alegría, igualdad y cercanía que no deja
      indiferente a nadie.
    </p>

    <p>
      El nombre de la banda habla de amistad, carnalismo y buena onda. Venimos de lugares distintos
      del mundo, sin lazos de sangre, pero con la misma energía para hacer bailar, celebrar y dejar
      atrás los prejuicios que todavía nos rodean.
    </p>
  </article>
</section>

<style>
  section {
    display: grid;
    gap: var(--space-s);
    padding-block: var(--space-xl);
    place-items: center;
    background-image:
      url("../assets/images/loscompits.webp"), 
      linear-gradient(
        180deg,
        light-dark(
          color-mix(in oklch, var(--surface-page) 96%, var(--color-sun-400)),
          color-mix(in oklch, var(--surface-page) 90%, var(--color-earth-900))
        ) 0%,
        light-dark(
          color-mix(in oklch, var(--surface-page) 100%, var(--color-sand-50)),
          color-mix(in oklch, var(--surface-page) 94%, var(--color-night-900))
        ) 100%
    );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    > article {
      inline-size: min(100%, 58rem);
      display: grid;
      gap: var(--space-m);
      padding: var(--space-m);
      border: 1px solid color-mix(in oklch, var(--border-subtle) 78%, transparent);
      border-radius: 1.5rem;
      background: light-dark(
        color-mix(in oklch, var(--surface-overlay) 92%, var(--color-sand-50)),
        color-mix(in oklch, var(--surface-overlay) 88%, var(--color-earth-900))
      );
      box-shadow: 0 1rem 2rem oklch(0% 0 0 / 0.04);

      > h2 {
        text-align: center;
      }

      > p {
        margin: 0 auto;
        max-inline-size: 60ch;
        text-align: center;
        color: var(--text-primary);

        &:nth-of-type(1) {
          color: var(--text-soft);
          font-size: var(--font-size-small);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
      }
    }
  }

  @container content (width >= 48rem) {
    section {
      padding-inline: var(--space-2xl);
      gap: var(--space-l);

      > article {
        padding: var(--space-l);
      }
    }
  }

  @container content (width >= 72rem) {
    section {
      padding-inline: var(--space-3xl);
    }
  }
</style>