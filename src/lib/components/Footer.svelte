<script lang="ts">
    import Icon from "@iconify/svelte";


  const currentYear = new Date().getFullYear();
</script>

<footer aria-labelledby="footer-title">
  <article>
    <section aria-labelledby="footer-title">
      <p><small>Los Compits · Barcelona</small></p>
      <h2 id="footer-title">Ritmo callejero con alma latina</h2>
      <p>
        Nacidos entre plazas y calles de Barcelona, llevamos cumbia, salsa y son cubano a
        festivales, vermuts, celebraciones y eventos que piden cercanía, baile y carácter.
      </p>
    </section>
  </article>

  <section aria-label="Cierre legal y créditos">
    <small>© {currentYear} Los Compits. Música nacida en las calles de Barcelona.</small>
    <small>Hecho con <Icon icon="mdi:heart" /> y <Icon icon="mdi:music" /> por Los Compits</small>
  </section>
</footer>

<style>
  footer {
    display: grid;
    gap: var(--space-l);
    color: var(--shell-footer-text);
    text-wrap: pretty;

    :where(h2, p, small) {
      margin: 0;
    }

    > article {
      display: grid;
      gap: var(--space-l);

      > :where(section) {
        display: grid;
        gap: var(--space-xs);
      }

      > section {
        > p:first-child {
          color: var(--shell-footer-text-muted);
          font-size: var(--font-size-small);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        > h2 {
          color: var(--shell-footer-text);
          text-wrap: balance;
        }

        > p:last-child {
          max-inline-size: 60ch;
          color: var(--shell-footer-text-muted);
        }
      }
    }

    > article + section {
      display: grid;
      padding-block-start: var(--space-s);
      border-block-start: 1px solid color-mix(in oklch, var(--shell-footer-border) 55%, transparent);
      text-align: center;
      
      small {
        color: var(--shell-footer-text-muted);
      }
    }
  }

  @container content (width >= 48rem) {
    footer {
      > article {
        grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 1fr));
        align-items: start;
      }

      > article + section {
        grid-template-columns: 1fr auto;
        align-items: center;
      }
    }
  }
</style>