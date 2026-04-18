<script lang="ts">
  import Icon from "@iconify/svelte"
</script>

<section id="contact">
  <h2>Nuestros Contactos</h2>
  <article>
    <p>¿Quieres que toquemos en tu evento?</p>
    <p>Estamos listos para llevar la magia de Los Compits a tu próxima celebración.</p>

    <ul>
      <li><Icon icon="mdi:email" /> Email: <a href="mailto:info@loscompits.com">info@loscompits.com</a></li>
      <li><Icon icon="mdi:phone" /> Teléfono: <a href="tel:+34123456789">+34 123 456 789</a></li>
      <li><Icon icon="mdi:share-variant" /> Redes sociales:
        <ul>
          <li>
            <a
              href="https://www.facebook.com/loscompits"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon icon="mdi:facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/los_compitss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon icon="mdi:instagram" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </article>
</section>

<style>
  article > ul {
    display: grid;
    gap: var(--space-sm);
  }

  article > ul > li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  article > ul > li > :global(svg) {
    flex: none;
  }

  li ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-inline-start: var(--space-xs);
  }

  li ul a {
    inline-size: var(--size-control-md);
    block-size: var(--size-control-md);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-round);
    background: var(--surface-elevated);
  }
  
  li ul a :global(svg) {
    inline-size: var(--size-icon-lg);
    block-size: var(--size-icon-lg);
  }
</style>