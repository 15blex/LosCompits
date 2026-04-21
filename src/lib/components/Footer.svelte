<script lang="ts">
  import Icon from "@iconify/svelte";

  const currentYear = new Date().getFullYear();
</script>

<footer aria-labelledby="footer-title">
  <article>
    <section aria-labelledby="footer-title">
      <p><small>Los Compit's · Barcelona</small></p>
      <h2 id="footer-title">Ritmo callejero con alma latina</h2>
      <p>
        Nacidos entre plazas y calles de Barcelona, llevamos cumbia, salsa y son cubano a
        festivales, vermuts, celebraciones y eventos que piden cercanía, baile y carácter.
      </p>
    </section>
  </article>

  <section aria-label="Cierre legal y créditos">
    <small>© {currentYear} Los Compit's. Música nacida en las calles de Barcelona.</small>
    <small>Hecho con <Icon icon="mdi:heart" /> y <Icon icon="mdi:music" /> por Los Compit's</small>
  </section>
</footer>

<style>
  footer {
    display: grid;
    gap: var(--space-m);
    color: var(--shell-footer-text);
    text-wrap: pretty;

    :where(h2, p, small) {
      margin: 0;
    }

    > article {
      inline-size: min(100%, 58rem);
      justify-self: center;
      display: grid;
      gap: var(--space-s);

      > section {
        display: grid;
        gap: var(--space-xs);
        justify-items: center;
        text-align: center;

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
          max-inline-size: 52ch;
          color: var(--shell-footer-text-muted);
        }
      }
    }

    > article + section {
      inline-size: min(100%, 58rem);
      justify-self: center;
      display: grid;
      gap: var(--space-2xs);
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
      > article + section {
        grid-template-columns: 1fr auto;
        align-items: center;
        text-align: start;

        > small:last-child {
          justify-self: end;
        }
      }
    }
  }
</style>