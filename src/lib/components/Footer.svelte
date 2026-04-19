<script lang="ts">
  import Icon from "@iconify/svelte"
</script>

<footer>
  <p>
    Copyright © 2024 Los Compits. Todos los derechos reservados.
    <br />
    Hecho con <Icon icon="mdi:heart" /> y <Icon icon="vscode-icons:file-type-svelte" /> por Los Compits
  </p>
</footer>

<style>
  footer {
    display: grid;
    place-content: center;
    background: var(--shell-footer-surface);
    border-block-start: 1px solid var(--shell-footer-border);
    p {
      color: var(--shell-footer-text-muted);
      text-align: center;
    }
  }
</style>