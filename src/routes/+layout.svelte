<script lang="ts">
    import favicon from '$lib/assets/icons/favicon.svg';
    import heroImage from '$lib/assets/images/hero.webp';
    import { preferences } from '$lib/preferences.svelte';
    import displayFontStyles from '$lib/styles/display-font.css?url';
    import "$lib/styles/index.css";
    import { onMount } from 'svelte';

    let { children } = $props();

    const pageTitle = 'Los Compits | Cumbia, Salsa y Son Cubano en Barcelona';
    const pageDescription =
        'Grupo de músicos de Barcelona que interpreta cumbia, salsa y son cubano para eventos, calles y celebraciones.';
    const siteUrl = 'https://www.loscompits.es/';

    const enableDisplayFontStylesheet = (event: Event) => {
        if (event.currentTarget instanceof HTMLLinkElement) {
            event.currentTarget.media = 'all';
        }
    };

    onMount(() => {
        void preferences.initialize();
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="preload" as="image" href={heroImage} type="image/webp" fetchpriority="high" />
    <link rel="preload" as="style" href={displayFontStyles} />
    <link rel="stylesheet" href={displayFontStyles} media="print" onload={enableDisplayFontStylesheet} />
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <meta name="author" content="Los Compits" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={siteUrl} />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Los Compits" />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:locale" content="es_ES" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <noscript><link rel="stylesheet" href={displayFontStyles} /></noscript>
</svelte:head>

{@render children()}