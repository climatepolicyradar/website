<script>
  import { clickOutside } from '$lib/helpers/clickOutside';
  import { activeSubMenu } from '$lib/stores/navigation';

  const  menuItemClass = 'c-primary-nav-item-link';
  export let theme;
  export let name;
  export let align;
  export let count;
  export let toggleSubMenu;

  let active;
  $: active = name === $activeSubMenu;

</script>

<nav use:clickOutside={menuItemClass} on:click_outside={toggleSubMenu} class="c-secondary-nav c-secondary-nav--{theme} {align === 'center' ? 'center-align': ''} {count < 3 ? 'no-flex': ''}" class:active>
  <slot />
</nav>

<style>
  
  .c-secondary-nav {
    position: absolute;
    left: 0;
    top: 32px;
    background: var(--color-sky);
    width: 400px;
    border-radius: 15px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    display: block;
    z-index: 102;
  }
  
  .no-flex {
    display: block;
    width: 300px;
  }
  
  
  .active {
    position: relative;
    visibility: visible;
    opacity: 1;
    top: 8px;
  }

  @media (min-width: 1024px) {
    .c-secondary-nav {
      padding: 0 2rem;
      padding-bottom: 2rem;
      top: 32px;
      display: flex;
      flex-wrap: wrap;
    }
    .active {
      position: absolute;
    }
    .center-align {
      left: -200px;
    }
    .no-flex.center-align {
      display: block;
      left: -150px;
    }
  }

</style>