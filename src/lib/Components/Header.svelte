<script>
  import { theme, mobileMenuOpen } from '$lib/stores/theme';
  import { activeSubMenu } from '$lib/stores/navigation';
  import Logo from '$lib/Components/Logo.svelte';
  import Nav from '$lib/Components/Nav.svelte';
  import Wrapper from './Wrapper.svelte';
  import Button from './Button.svelte';

  let sticky;
  let y = 0;
  $: sticky = y > 40;

  let color;
  $: color = sticky || $mobileMenuOpen || $theme.header === 'light' ? 'dark-glow' : 'white';

  export let active;
  export let jobs;

</script>

<svelte:window bind:scrollY={y} />

<header class="c-site-header" class:sticky>
  <Wrapper type="full">
    <Wrapper type="x-wide">
      <div class="c-site-header__inner">
        <a class="c-site-header__logo" href="/" on:click={() => ($activeSubMenu = null)}>
          <Logo theme={sticky ? 'light' : $theme.header} />
        </a>

        <Button class="c-site-header__menu-button" {color} size="cta" action={() => ($mobileMenuOpen = !$mobileMenuOpen)}>
          {#if $mobileMenuOpen}
            Close
          {:else}
            Menu
          {/if}
        </Button>

        <Nav theme={sticky ? 'light' : $theme.header} {active} {jobs} open={$mobileMenuOpen} />
      </div>
    </Wrapper>
  </Wrapper>
</header>

<style>
  .c-site-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: all 0.2s ease;
  }

  .c-site-header__inner {
    display: flex;
    width: 100%;
    padding: 8px 16px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    isolation: isolate;
  }

  @media (min-width: 321px) {
    .c-site-header__inner {
      padding: 16px 24px;
    }
  }

  .c-site-header__logo {
    display: inline-block;
    height: 40px;
    transition: all 0.15s ease;
  }

  @media (min-width: 321px) {
    .c-site-header__logo {
      height: 60px;
    }
  }

  .sticky {
    background-color: var(--color-sky);
  }

  .sticky .c-site-header__logo {
    height: 40px;
  }

  :global(.c-site-header__menu-button) {
    position: relative;
    z-index: 101;
  }

  :global(.c-site-header__menu-button.open) {
    position: relative;
    z-index: 101;
  }

  @media (min-width: 1024px) {
   :global(.c-site-header__menu-button) {
      display: none !important;
    }
  }
</style>
