<script lang="ts">
    import favicon from '$lib/assets/icons/favicon.svg';
    import heroImage from '$lib/assets/images/hero.webp';
    import { preferences } from '$lib/preferences.svelte';
    import "$lib/styles/index.css";
    import { onMount } from 'svelte';

    let { children } = $props();

    const pageTitle = 'Los Compits | Cumbia, Salsa y Son Cubano en Barcelona';
    const pageDescription =
        'Grupo de músicos de Barcelona que interpreta cumbia, salsa y son cubano para eventos, calles y celebraciones.';
    const siteUrl = 'https://www.loscompits.es/';

    onMount(() => {
        void preferences.initialize();
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="preload" as="image" href={heroImage} type="image/webp" fetchpriority="high" />
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
</svelte:head>

{@render children()}