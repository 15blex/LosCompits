<script lang="ts">
  import { preferences } from "$lib/preferences.svelte";
  import Icon from "@iconify/svelte";

  const onclick = () => {
    preferences.setColorScheme(preferences.colorScheme === "light" ? "dark" : "light");
  };
</script>

<button
  {onclick}
  aria-label={preferences.colorScheme === "light"
    ? "Activar modo oscuro"
    : "Activar modo claro"}
>
  <Icon
    icon={preferences.colorScheme === "light" ? "mdi:weather-night" : "mdi:white-balance-sunny"}
    width="24px"
    height="24px"
  />
</button>

<style>
  button {
    display: grid;
    place-items: center;
    padding: 0;
    color: var(--shell-header-control);
    transition:
      color 180ms ease;

    &:is(:hover, :focus-visible) {
      color: var(--shell-header-control-hover);
    }
  }

</style>
