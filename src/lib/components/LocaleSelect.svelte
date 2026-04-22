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
    <Icon icon={locales.find(loc => loc.code === preferences.locale)?.flag || "mdi:earth"} width="32px" height="32px"/>
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
        border-color 180ms ease,
        transform 180ms ease;
      
      &:is(:hover, :focus-visible) {
        color: var(--shell-header-control-hover);
        border-color: var(--shell-header-control-border-hover);
      }
      
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