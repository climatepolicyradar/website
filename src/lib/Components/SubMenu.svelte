<script>
  export let theme;
  export let name;
  export let activeSubMenu;
  export let align;
  export let count;

  let active;
  $: active = name === activeSubMenu;

</script>

<nav class="c-secondary-nav c-secondary-nav--{theme} {align === 'center' ? 'center-align': ''} {count < 3 ? 'no-flex': ''}" class:active>
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