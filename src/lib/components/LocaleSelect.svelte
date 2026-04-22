<script lang="ts">
  import { preferences } from "$lib/preferences.svelte";
  import Icon from "@iconify/svelte";

  const locales = [
    { code: "es", label: "Español", flag: "circle-flags:lang-es" },
    { code: "cat", label: "Català", flag: "circle-flags:lang-ca" },
    { code: "it", label: "Italiano", flag: "circle-flags:lang-it" },
    { code: "fr", label: "Français", flag: "circle-flags:lang-fr" },
    { code: "de", label: "Deutsch", flag: "circle-flags:lang-de" },
    { code: "en", label: "English", flag: "circle-flags:uk" },
  ] as const;

  const onchange = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    preferences.setLocale(select.value as Locale);
  };
</script>

{#snippet selectButton()}
  <button aria-haspopup="listbox" aria-label="Selecciona el idioma">
    <Icon icon={locales.find(loc => loc.code === preferences.locale)?.flag || "mdi:earth"} width="28px" height="28px"/>
  </button>
{/snippet}

<select {onchange} value={preferences.locale} name="Idiomma" aria-label="Selecciona el idioma">
  {@render selectButton()}
  {#each locales as loc (loc.code)}
    <option value={loc.code}>
      <Icon icon={loc.flag} width="20px" height="20px" /> {loc.label}
    </option>
  {/each}
</select>

<style>
  @supports selector(select::picker(select)) {
    select {
      display: grid;
      place-items: center;
      padding: 0;
      
      button {
        inline-size: 100%;
        block-size: 100%;
        display: grid;
        place-items: center;
        padding: 0;
      }
    }
  }
</style>