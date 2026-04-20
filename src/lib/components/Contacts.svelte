<script lang="ts">
  import Icon from "@iconify/svelte"
</script>

<section id="contact" aria-labelledby="contact-title">
  <div>
    <h2 id="contact-title">Llevemos el ritmo a tu próximo evento</h2>

    <p>
      Tocamos en vermuts, festivales, fiestas de barrio, bodas y celebraciones privadas.
    </p>
    <p>
      Cuéntanos qué estás organizando y te proponemos el formato que mejor encaje.
    </p>
  </div>

  <article aria-labelledby="contact-options-title">
    <div>
      <h3 id="contact-options-title">Habla con la banda</h3>
      <p>Elige el canal que te resulte más cómodo y te responderemos lo antes posible.</p>
    </div>

    <ul aria-label="Canales principales de contacto">
      <li>
        <a href="mailto:info@loscompits.com">
          <Icon icon="mdi:email" />
          <span>Escríbenos</span>
          <strong>info@loscompits.com</strong>
        </a>
      </li>

      <li>
        <a href="tel:+34123456789">
          <Icon icon="mdi:phone" />
          <span>Llámanos</span>
          <strong>+34 123 456 789</strong>
        </a>
      </li>
    </ul>

    <div aria-labelledby="social-title">
      <h3 id="social-title">También puedes encontrarnos aquí</h3>

      <ul aria-label="Redes sociales de Los Compits">
        <li>
          <a
            href="https://www.instagram.com/los_compitss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:instagram" />
            <span>Instagram</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/loscompits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:facebook" />
            <span>Facebook</span>
          </a>
        </li>
      </ul>
    </div>
  </article>
</section>

<style>
section {
  --contact-band-border: light-dark(
    color-mix(in oklch, var(--color-earth-400) 38%, transparent),
    color-mix(in oklch, var(--color-earth-600) 44%, transparent)
  );
  --contact-band-glow: light-dark(
    oklch(from var(--color-sun-400) l c h / 0.18),
    oklch(from var(--color-mango-500) l c h / 0.1)
  );
  --contact-band-top: light-dark(
    color-mix(in oklch, var(--color-mango-400) 10%, var(--surface-page)),
    color-mix(in oklch, var(--color-earth-900) 68%, var(--surface-page))
  );
  --contact-band-bottom: light-dark(
    color-mix(in oklch, var(--color-guava-400) 8%, var(--surface-page)),
    color-mix(in oklch, var(--color-night-900) 82%, var(--color-earth-900))
  );

  display: grid;
  gap: var(--space-m);
  padding-block: var(--space-l);
  place-items: center;
  background:
    radial-gradient(
      circle at 50% 0%,
      var(--contact-band-glow) 0%,
      transparent 58%
    ),
    linear-gradient(
      180deg,
      var(--contact-band-top) 0%,
      var(--contact-band-bottom) 100%
    );
  border-block-start: 0;
  border-block-end: 1px solid var(--contact-band-border);

  > div {
    inline-size: min(100%, 56rem);
    display: grid;
    gap: var(--space-s);
    justify-items: center;
    text-align: center;

    > h2 {
      text-wrap: balance;
    }

    > p {
      max-inline-size: 58ch;
      color: var(--text-muted);
    }
  }

  article {
    inline-size: min(100%, 58rem);
    display: grid;
    gap: var(--space-m);
    padding: var(--space-m);
    border: 1px solid color-mix(in oklch, var(--contact-band-border) 85%, transparent);
    border-radius: 1.5rem;
    background: light-dark(
      var(--surface-overlay),
      color-mix(in oklch, var(--surface-overlay) 82%, var(--color-earth-900))
    );
    box-shadow: 0 1rem 2rem oklch(0% 0 0 / 0.08);

    > div:first-child {
      display: grid;
      gap: var(--space-2xs);
      justify-items: center;
      text-align: center;

      > h3 {
        font-size: var(--font-size-small);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-soft);
      }

      > p {
        max-inline-size: 46ch;
        color: var(--text-soft);
      }
    }

    > ul {
      display: grid;
      gap: var(--space-xs);
      list-style: none;

      a {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: var(--space-2xs) var(--space-xs);
        padding: var(--space-s);
        border: 1px solid color-mix(in oklch, var(--border-subtle) 80%, transparent);
        border-radius: 1rem;
        background: color-mix(in oklch, var(--surface-elevated) 82%, transparent);
        color: var(--text-primary);
        text-decoration: none;
        transition:
          transform 180ms ease,
          border-color 180ms ease,
          background-color 180ms ease;

        &:is(:hover, :focus-visible) {
          transform: translateY(-2px);
          border-color: var(--accent);
          background: color-mix(in oklch, var(--accent-soft) 24%, var(--surface-elevated));
        }

        :global(svg) {
          inline-size: 1.5rem;
          block-size: 1.5rem;
          color: var(--accent-strong);
        }

        span {
          font-size: var(--font-size-small);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-soft);
        }

        strong {
          grid-column: 2;
          font-size: var(--font-size-m);
        }
      }
    }

    > div:last-child {
      display: grid;
      gap: var(--space-xs);
      justify-items: center;
      text-align: center;

      > h3 {
        font-size: var(--font-size-small);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-soft);
      }

      > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--space-xs);
        list-style: none;

        a {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          padding-inline: var(--space-s);
          padding-block: var(--space-xs);
          border: 1px solid color-mix(in oklch, var(--border-subtle) 75%, transparent);
          border-radius: 999px;
          background: color-mix(in oklch, var(--surface-elevated) 74%, transparent);
          color: var(--text-primary);
          text-decoration: none;
          transition:
            border-color 180ms ease,
            background-color 180ms ease,
            transform 180ms ease;

          &:is(:hover, :focus-visible) {
            transform: translateY(-1px);
            border-color: var(--accent);
            background: color-mix(in oklch, var(--accent-soft) 20%, var(--surface-elevated));
          }

          :global(svg) {
            inline-size: 1.125rem;
            block-size: 1.125rem;
            color: var(--accent-strong);
          }
        }
      }
    }
  }
}

  @container content (width >= 48rem) {
    section {
      padding-inline: var(--space-2xl);
      gap: var(--space-l);

      article {
        padding: var(--space-l);

        > ul {
          grid-template-columns: repeat(2, minmax(0, 1fr));
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