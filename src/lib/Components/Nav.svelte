<script>
  import { modalStore, mobileMenuOpen } from '$lib/stores/theme';
  import { activeSubMenu, menu } from '$lib/stores/navigation';
  import Badge from './Badge.svelte';
  import Button from './Button.svelte';
  import SubMenu from './SubMenu.svelte';
import IconListItem from './IconListItem.svelte';

  const toggleSubMenu = (e, name) => {
    e.preventDefault();
    const lastActive = document.querySelector(`.c-secondary-nav.active`);
    if (lastActive) {
      lastActive.classList.remove('active');
    }
    if($activeSubMenu === name) {
      closeSubMenu();
    }
    else {
      $activeSubMenu = name;
    }

  }

  const closeSubMenu = () => {
    $activeSubMenu = null;
  }


  export let theme;
  export let active;
  export let jobs;
</script>

<nav
  class="c-primary-nav c-primary-nav--{theme}"
  class:is-open={$mobileMenuOpen}
  role="navigation"
  aria-label="Main"
>
  {#each $menu as item}
    <div class="c-primary-nav-item">
      <a on:click={(e) => {
        if(!item.submenu.length) {
          return closeSubMenu();
        };
        return toggleSubMenu(e, item.link);
        }} sveltekit:prefetch href={`/${item.link}`} class:is-active={active === item.link}> 
          {item.label}
          {#if item.link === 'jobs'}
            <Badge color="blue">{jobs.length}</Badge>
          {/if}
      </a>
      {#if item.submenu.length}
        <SubMenu {theme} name={item.link} align={item.submenuAlign} count={item.submenu.length} bind:activeSubMenu={$activeSubMenu}>
          {#each item.submenu as subItem}
            <a class="c-secondary-nav-link" on:click={closeSubMenu} href={`/${subItem.link}`}>{subItem.label}</a>
          {/each}
        </SubMenu>
      {/if}
    </div>
  {/each}
  
  <Button color="dark-glow" size="cta" action={() => ($modalStore.cta = true)}>
    Request early access
  </Button>
</nav>

<style>
  .c-primary-nav--dark a {
    color: #fff;
  }

  nav {
    font-size: 16px;
    font-weight: 500;
  }
  nav .c-primary-nav-item {
    position: relative;
  }

  /* Mobile Nav */
  @media (max-width: 1023px) {
    nav {
      display: none;
    }

    nav.is-open {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
      top: 0;
      min-height: 100vh;
      left: 0;
      right: 0;
      background-color: var(--color-sky);
      isolation: isolate;
      z-index: 1;
      box-shadow: 0 0 14px rgba(164, 205, 251, 0.7);
    }

    nav.is-open .c-primary-nav-item {
      color: var(--color-indigo);
    }

    nav.is-open .c-primary-nav-item + .c-primary-nav-item {
      margin-top: 2rem;
    }

    :global(nav .c-button--cta) {
      margin-top: auto;
      margin-bottom: 0;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    nav {
      display: flex;
      align-items: center;
    }

    .c-primary-nav-item + .c-primary-nav-item,
    :global(.c-primary-nav .c-primary-nav-item + .c-button) {
      margin-left: 3rem;
    }

    .c-primary-nav-item {
      display: inline-block;
      position: relative;
    }
  }

  @media (min-width: 1280px) {
    .c-primary-nav-item + .c-primary-nav-item,
    :global(.c-primary-nav .c-primary-nav-item + .c-button) {
      margin-left: 4rem;
    }
  }

  a {
    position: relative;
    color: var(--color-indigo);
    text-decoration: none;
  }

  a.is-active {
    color: var(--color-blue);
  }

  /* Sub nav */
  @media (min-width: 1024px) {
    .c-secondary-nav-link {
      display: block;
      width: 50%;
      color: var(--color-indigo) !important;
      margin-top: 2rem;
    }
    .c-secondary-nav-link + .c-secondary-nav-link {
      margin-left: 0;
    }
  }
</style>
