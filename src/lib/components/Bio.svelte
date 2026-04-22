<script lang="ts">
    import bioImage from "$lib/assets/images/loscompits-636.webp";
</script>
<section id="bio" aria-labelledby="bio-title">
  <img
    class="bio-image"
    src={bioImage}
    alt=""
    width={636}
    height={602}
    fetchpriority="low"
    loading="lazy"
    decoding="async"
  />

  <article>
    <p>Desde las calles de Barcelona</p>
    <h2 id="bio-title">Nuestra Historia</h2>
    <p>
      Los Compit's nacen en las calles de Barcelona, llevando el sabor de las tierras de cada uno de
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
    --bio-focus-inline: 50%;
    --bio-focus-block: 100%;
    --bio-overlay-opacity: 0.42;
    --bio-overlay-stop: 78%;

    position: relative;
    isolation: isolate;
    overflow: clip;
    display: grid;
    gap: var(--space-s);
    padding-block: var(--space-xl);
    place-items: center;
    background-color: rgb(10 10 10);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      background:
      radial-gradient(
        circle at 50% 45%,
        rgb(0 0 0 / 0) 18%,
        rgb(0 0 0 / var(--bio-overlay-opacity)) var(--bio-overlay-stop)
      );
    }

    > .bio-image {
      position: absolute;
      inset: 0;
      z-index: 0;
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      object-position: var(--bio-focus-inline) var(--bio-focus-block);
    }

    > article {
      position: relative;
      z-index: 2;
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
      backdrop-filter: blur(8px);

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