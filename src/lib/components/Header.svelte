<script lang="ts">
  import logo from '$lib/assets/images/Logo.webp';
  import { startViewTransition } from '$lib/utils';
  import Icon from '@iconify/svelte';
  import ColorSchemeToggle from './ColorSchemeToggle.svelte';
  import LocaleSelect from './LocaleSelect.svelte';

  let menuOpen = $state(false);
  const desktopQuery = '(min-width: 64rem)';

  const onclick = () => {
    document.body.style.overflow = menuOpen ? '' : 'hidden';
    startViewTransition(() => {
      menuOpen = !menuOpen;
    });
  };

  const onLinkClick = () => {
    if (menuOpen) {
      document.body.style.overflow = '';
      startViewTransition(() => {
        menuOpen = false;
      });
    }
  };

  const links: { href: string; label: string }[] = [
    { href: '#hero', label: 'Inicio' },
    { href: '#bio', label: 'Biografía' },
    { href: '#band', label: 'La Banda' },
    { href: '#media', label: 'Medios' },
    { href: '#contact', label: 'Contactos' },
  ] as const;
  
  $effect(() => {
    if (typeof window === 'undefined') return;
    
    const closeIfDesktop = () => {
      if (mql.matches && menuOpen) {
        menuOpen = false;
        document.body.style.overflow = '';  
      }
    };

    const mql = window.matchMedia(desktopQuery);

    closeIfDesktop();
    mql.addEventListener('change', closeIfDesktop);

    return () => {
      mql.removeEventListener('change', closeIfDesktop);
    };
  });
</script>

<header>
  <a href="#hero" onclick={onLinkClick}>
    <img src={logo} alt="Los Compits logo" />
  </a>

  <nav id="site-nav">
    <ul>
      {#each links as { href, label } (href)}
        <li><a href={href} onclick={onLinkClick}>{label}</a></li>
      {/each}
    </ul>
  </nav>
  
  <div>
    <ColorSchemeToggle />
    <LocaleSelect />
  </div>

  <button 
    {onclick} 
    aria-expanded={menuOpen}
    aria-controls="site-nav"
    aria-label={menuOpen ? 'Cerrar el menú de navegación' : 'Abrir el menú de navegación'}
  >
    {#if !menuOpen}
      <Icon icon="mdi:menu" width="24" height="24" />
    {:else}
      <Icon icon="mdi:close" width="24" height="24" />
    {/if}
  </button>
</header>

<style>
  header {
    --header-control-size: 48px;
    container: header / inline-size;
    background: transparent;
    color: var(--shell-header-text);
    border-block-end: 1px solid var(--shell-header-border);
    box-shadow: var(--shell-header-shadow);
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    grid-template-areas: "brand spacer options toggle";
    place-items: center;
    position: sticky;
    isolation: isolate;
    top: 0;
    z-index: 5;

    > a:first-child {
      grid-area: brand;
      z-index: 15;

      img {
        block-size: 80px;
        border-radius: 100%;
      }
    }

    nav {
      position: fixed;
      inset: 0;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      z-index: 10;
      transition:
        transform 300ms ease,
        opacity 250ms ease,
        visibility 0ms linear 300ms;

      ul {
        display: flex;
        flex-direction: column;
        block-size: 100%;
        justify-content: center;
        align-items: center;
        list-style: none;
      }

      a {
        color: var(--shell-header-link);
        transition: color 180ms ease;
        
        &:is(:hover, :focus-visible) {
          color: var(--shell-header-link-hover);
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: var(--shell-header-surface);
      backdrop-filter: blur(4px);
      z-index: 5;
    }

    &:has(> button[aria-expanded='true']) {
      nav {
        background: var(--shell-header-surface-solid);
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition:
          transform 300ms ease,
          opacity 250ms ease,
          visibility 0ms linear 0ms;
      }
    }

    > div {
      grid-area: options;
      display: flex;
      gap: var(--space-nav-gap);
      align-items: center;
      z-index: 15;
    }

    > button {
      margin-inline-start: var(--space-nav-gap);
      grid-area: toggle;
      justify-self: end;
      z-index: 15;
      inline-size: var(--header-control-size);
      block-size: var(--header-control-size);
      display: grid;
      place-items: center;
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
  }

  @media (prefers-reduced-motion: reduce) {
    nav {
      transition: none;
    }
  }

  @container header (width >= 64rem) {
    header {
      grid-template-columns: auto 1fr auto;
      grid-template-areas: "brand nav options";

      nav {
        position: static;
        inset: auto;
        transform: none;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: none;

        ul {
          flex-direction: row;
        }
      }

      > button {
        display: none;
      }
    }
  }
</style>