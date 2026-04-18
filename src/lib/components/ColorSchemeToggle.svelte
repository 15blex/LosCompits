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
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    transition: background 0.3s, color 0.3s, border 0.3s;
  }
</style>