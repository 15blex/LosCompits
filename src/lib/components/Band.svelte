<script lang="ts">
  import abraham from "$lib/assets/images/band/abraham.jpeg";
  import facundo from "$lib/assets/images/band/facu.jpeg";
  import lalo from "$lib/assets/images/band/lalo.jpeg";
  import lucas from "$lib/assets/images/band/lucas.jpeg";
  import omar from "$lib/assets/images/band/omar.jpeg";
  import ricardo from "$lib/assets/images/band/ricardo.jpeg";

  const members = [
    {
      id: "omar",
      name: "Omar Alejandro Ramos Narváez",
      role: "Percusiones, Voz",
      country: "Mexico",
      img: omar,
    },
    {
      id: "facundo",
      name: "Facundo López",
      role: "Percusiones, Voz",
      country: "Argentina",
      img: facundo,
    },
    {
      id: "lucas",
      name: "Lucas Raiquen Pereyra",
      role: "Trompeta",
      country: "Argentina",
      img: lucas,
    },
    {
      id: "ricardo",
      name: "Ricardo Garcia Gutierrez",
      role: "Trompeta",
      country: "Mexico",
      img: ricardo,
    },
    {
      id: "abraham",
      name: "Abraham Ruvalcaba",
      role: "Guitarra, Voz",
      country: "Mexico",
      img: abraham,
    },
    {
      id: "lalo",
      name: "Lalo Abbadié",
      role: "Contrabajo, Voz",
      country: "Mexico",
      img: lalo,
    },
  ] as const;
</script>

<section id="band" aria-labelledby="band-title">
  <svg class="band-waves band-waves--top" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,128L40,122.7C80,117,160,107,240,106.7C320,107,400,117,480,144C560,171,640,213,720,213.3C800,213,880,171,960,154.7C1040,139,1120,149,1200,149.3C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" />
    <path d="M0,224L34.3,208C68.6,192,137,160,206,149.3C274.3,139,343,149,411,176C480,203,549,245,617,245.3C685.7,245,754,203,823,170.7C891.4,139,960,117,1029,128C1097.1,139,1166,181,1234,192C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1406,0C1371,0,1303,0,1234,0C1166,0,1097,0,1029,0C960,0,891,0,823,0C754,0,686,0,617,0C549,0,480,0,411,0C343,0,274,0,206,0C137,0,69,0,34,0L0,0Z" />
  </svg>
  
  <h2 id="band-title">La Banda</h2>

  <article>
    <p>Los Compits es una banda de cumbia, salsa y son cubano con sede en Barcelona.</p>
    <p>
      Fundada en 2024, la banda se ha ganado un lugar destacado en la escena musical local gracias a
      su energía contagiosa y su habilidad para fusionar ritmos tradicionales con un toque moderno.
    </p>

    <ul class="members" aria-label="Integrantes de Los Compits">
      {#each members as member (member.id)}
        <li>
          <article class="member" aria-label={member.name}>
            <img
              src={member.img}
              alt={member.name}
              width={350}
              height={525}
              loading="lazy"
              decoding="async"
            />

            <div class="member-copy">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.country}</p>
            </div>
          </article>
        </li>
      {/each}
    </ul>
  </article>

  <svg class="band-waves band-waves--bottom" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,106.7C672,85,768,107,864,138.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
    <path d="M0,288L40,277.3C80,267,160,245,240,213.3C320,181,400,139,480,144C560,149,640,203,720,224C800,245,880,235,960,208C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
  </svg>
</section>

<style>
  section {
    position: relative;
    isolation: isolate;
    display: grid;
    gap: var(--space-m);
    padding-block: calc(var(--space-l) + clamp(4rem, 8vw, 6rem));
    place-items: center;
    overflow: clip;
    background: light-dark(
      color-mix(in oklch, var(--color-sand-100) 92%, var(--color-mango-400)),
      color-mix(in oklch, var(--color-night-900) 86%, var(--color-earth-900))
    );

    > .band-waves {
      position: absolute;
      inset-inline: 0;
      inline-size: 100%;
      pointer-events: none;
      z-index: 0;

      path {
        transition: fill 180ms ease;
      }
    }

    > .band-waves--top {
      inset-block-start: 0;
      block-size: clamp(7rem, 12vw, 10rem);

      path:first-of-type {
        fill: light-dark(
          oklch(from var(--color-mango-400) l c h / 0.16),
          oklch(from var(--color-guava-500) l c h / 0.12)
        );
      }

      path:last-of-type {
        fill: light-dark(
          oklch(from var(--color-sun-400) l c h / 0.12),
          oklch(from var(--color-earth-600) l c h / 0.1)
        );
      }
    }

    > .band-waves--bottom {
      inset-block-end: 0;
      block-size: clamp(6rem, 10vw, 8rem);

      path:first-of-type {
        fill: light-dark(
          oklch(from var(--color-guava-400) l c h / 0.14),
          oklch(from var(--color-leaf-500) l c h / 0.1)
        );
      }

      path:last-of-type {
        fill: light-dark(
          oklch(from var(--color-leaf-400) l c h / 0.12),
          oklch(from var(--color-night-400) l c h / 0.09)
        );
      }
    }

    > :where(h2, article) {
      position: relative;
      z-index: 1;
    }

    > article {
      display: grid;
      gap: var(--space-m);
    }
  }

  p {
    margin: 0 auto;
    text-align: center;
  }

  .members {
    margin-block-start: var(--space-xl);
    display: grid;
    list-style: none;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );


    > li {
      display: grid;
    }

    .member {
      display: grid;
      gap: var(--space-s);
      padding: var(--space-s);
      border: 1px solid color-mix(in oklch, var(--border-subtle) 78%, transparent);
      border-radius: 1.25rem;
      background: color-mix(in oklch, var(--surface-elevated) 92%, transparent);
      box-shadow: 0 0.75rem 1.5rem oklch(0% 0 0 / 0.06);
      transition:
        transform 180ms ease,
        border-color 180ms ease,
        background-color 180ms ease;

      &:is(:hover, :focus-within) {
        transform: translateY(-4px);
        border-color: color-mix(in oklch, var(--accent) 60%, var(--border-strong));
        background: color-mix(in oklch, var(--accent-soft) 16%, var(--surface-elevated));
      }

      > img {
        inline-size: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        border-radius: 0.9rem;
        border: 1px solid color-mix(in oklch, var(--border-subtle) 60%, transparent);
        background: var(--surface-section);
      }

      .member-copy {
        display: grid;
        gap: var(--space-2xs);
        padding-inline: var(--space-2xs);
        padding-block-end: var(--space-2xs);

        > h3 {
          font-size: var(--font-size-m);
          line-height: 1.15;
          text-align: center;
          color: var(--text-primary);
        }

        > p {
          margin: 0;
          max-inline-size: none;
          text-align: center;
        }

        > p:nth-of-type(1) {
          color: var(--text-muted);
        }

        > p:last-of-type {
          justify-self: center;
          padding-inline: var(--space-xs);
          padding-block: var(--space-3xs);
          border-radius: 999px;
          background: color-mix(in oklch, var(--accent-soft) 72%, var(--surface-elevated));
          color: var(--text-primary);
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
    }

    p {
      max-inline-size: 60ch;
    }

    .members {
      gap: var(--space-m);
    }
  }

  @container content (width >= 72rem) {
    section {
      padding-inline: var(--space-3xl);
    }

    p {
      max-inline-size: 80ch;
    }

    .members {
      gap: var(--space-l);
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
  }
</style>