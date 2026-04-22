<script lang="ts">
  import { preferences } from "$lib/preferences.svelte";
  import Icon from "@iconify/svelte";

  const onclick = () => {
    preferences.setColorScheme(preferences.colorScheme === "light" ? "dark" : "light");
  };
</script>

<button {onclick} aria-label="Toggle color scheme">
  <Icon 
    icon={preferences.colorScheme === "light" ? "mdi:weather-night" : "mdi:white-balance-sunny"} 
    width="24px"
    height="24px"
  />
</button>

<style>
  button {
    inline-size: var(--header-control-size, 48px);
    block-size: var(--header-control-size, 48px);
    display: grid;
    place-items: center;
    padding: 0;
    color: var(--shell-header-control);
    background: var(--shell-header-control-surface);
    border: 2px solid var(--shell-header-control-border);
    border-radius: 999px;
    transition:
      color 180ms ease,
      background-color 180ms ease,
      border-color 180ms ease;
   
    &:is(:hover, :focus-visible) {
      color: var(--shell-header-control-hover);
      border-color: var(--shell-header-control-border-hover);
    }
  }

</style>