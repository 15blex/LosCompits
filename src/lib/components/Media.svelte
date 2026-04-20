<section id="media" aria-labelledby="media-title">
  <div class="media-heading">
    <p>Sonido, calle y escenario</p>
    <h2 id="media-title">Medios</h2>
    <p>
      Muy pronto compartiremos vídeos, fotos y momentos en directo para que puedas ver la energía de
      Los Compits también fuera del escenario.
    </p>
  </div>

  <article aria-labelledby="media-preview-title">
    <div class="media-preview">
      <p>Próximamente</p>
      <h3 id="media-preview-title">Aquí aparecerán nuestros vídeos, sesiones y galerías</h3>
      <p>
        Esta sección está preparada para crecer sin romper el diseño: puedes usarla más adelante
        para incrustar un vídeo destacado, una pequeña galería o enlaces a actuaciones grabadas.
      </p>
    </div>

    <ul aria-label="Tipos de contenido que se mostrarán próximamente">
      <li>
        <article>
          <small>Vídeo</small>
          <strong>Directos y sesiones</strong>
          <p>Espacio preparado para incrustaciones o miniaturas.</p>
        </article>
      </li>
      <li>
        <article>
          <small>Galería</small>
          <strong>Fotos de la banda</strong>
          <p>Ideal para imágenes de conciertos, calle o backstage.</p>
        </article>
      </li>
      <li>
        <article>
          <small>Prensa</small>
          <strong>Clips y menciones</strong>
          <p>Perfecto para reseñas, publicaciones o apariciones destacadas.</p>
        </article>
      </li>
    </ul>
  </article>
</section>

<style>
  section {
    display: grid;
    gap: var(--space-m);
    padding-block: var(--space-xl);
    place-items: center;
    background: linear-gradient(
      180deg,
      light-dark(
        color-mix(in oklch, var(--surface-page) 98%, var(--color-sun-400)),
        color-mix(in oklch, var(--surface-page) 92%, var(--color-earth-900))
      ) 0%,
      light-dark(
        color-mix(in oklch, var(--surface-page) 92%, var(--color-sand-100)),
        color-mix(in oklch, var(--surface-page) 88%, var(--color-night-900))
      ) 100%
    );

    .media-heading {
      display: grid;
      gap: var(--space-2xs);
      justify-items: center;
      text-align: center;

      > p:first-child {
        color: var(--text-soft);
        font-size: var(--font-size-small);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      > h2 {
        text-wrap: balance;
      }

      > p:last-child {
        max-inline-size: 58ch;
        color: var(--text-muted);
      }
    }

    > article {
      inline-size: min(100%, 62rem);
      display: grid;
      gap: var(--space-m);
      padding: var(--space-m);
      border: 1px solid color-mix(in oklch, var(--border-subtle) 76%, transparent);
      border-radius: 1.5rem;
      background: light-dark(
        color-mix(in oklch, var(--surface-overlay) 94%, var(--color-sand-50)),
        color-mix(in oklch, var(--surface-overlay) 88%, var(--color-earth-900))
      );
      box-shadow: 0 1rem 2rem oklch(0% 0 0 / 0.05);

      .media-preview {
        display: grid;
        gap: var(--space-xs);
        justify-items: center;
        padding: var(--space-l);
        border-radius: 1.25rem;
        background:
          radial-gradient(
            circle at 50% 20%,
            light-dark(
              oklch(from var(--color-sun-400) l c h / 0.16),
              oklch(from var(--color-mango-500) l c h / 0.1)
            ) 0%,
            transparent 58%
          ),
          light-dark(
            color-mix(in oklch, var(--surface-section) 94%, var(--color-sand-50)),
            color-mix(in oklch, var(--surface-section) 88%, var(--color-night-900))
          );
        border: 1px solid color-mix(in oklch, var(--border-subtle) 74%, transparent);
        text-align: center;

        > p:first-child {
          color: var(--text-soft);
          font-size: var(--font-size-small);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        > h3 {
          max-inline-size: 18ch;
          text-wrap: balance;
        }

        > p:last-child {
          max-inline-size: 54ch;
          color: var(--text-muted);
        }
      }

      > ul {
        display: grid;
        gap: var(--space-xs);
        list-style: none;

        article {
          display: grid;
          gap: var(--space-2xs);
          min-block-size: 100%;
          padding: var(--space-s);
          border: 1px solid color-mix(in oklch, var(--border-subtle) 78%, transparent);
          border-radius: 1rem;
          background: color-mix(in oklch, var(--surface-elevated) 82%, transparent);

          > small {
            color: var(--text-soft);
            font-size: var(--font-size-small);
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          > strong {
            color: var(--text-primary);
            font-size: var(--font-size-m);
          }

          > p {
            color: var(--text-muted);
          }
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

        > ul {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
    }
  }

  @container content (width >= 72rem) {
    section {
      padding-inline: var(--space-3xl);
    }
  }
</style>