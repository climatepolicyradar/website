<script>
  import { theme } from '$lib/stores/theme';
  import { socialLinks } from '$lib/stores/social-links.js';
  import Icon from '$lib/Components/Icon.svelte';
  import Wrapper from './Wrapper.svelte';

  export let active;
</script>

<Wrapper type="wide">
  <footer class="c-site-footer c-site-footer--{$theme.footer}">
    <div class="c-site-footer__address">
      Climate Policy Radar CIC
      <br />Sustainable County Hall, 3rd Floor,
      <br />Westminster Bridge Road,
      <br />London
      <br />SE1 7PB
    </div>

    <nav class="c-site-footer__nav">
      <a
        sveltekit:prefetch
        href="/latest"
        class="c-site-footer__nav-item u-type-body-md"
        class:is-active={active === 'latest'}>Latest</a
      >
      <a
        sveltekit:prefetch
        href="/media"
        class="c-site-footer__nav-item u-type-body-md"
        class:is-active={active === 'media'}>Media</a
      >
      <a
        sveltekit:prefetch
        href="/privacy-policy"
        class="c-site-footer__nav-item u-type-body-md"
        class:is-active={active === 'privacy-policy'}>Privacy Policy</a
      >
    </nav>

    <div class="c-site-footer__social">
      <nav class="c-site-footer__social-links">
        {#if socialLinks}
          {#each socialLinks as link}
            <a
              class="c-site-footer__social-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer external"
            >
              <span class="u-sr-only">Follow us on {link.name}</span>
              <Icon name={link.id} fill="{$theme.footer === 'light' ? 'var(--color-indigo)' : '#fff'}" size="32px" />
            </a>
          {/each}
        {/if}
      </nav>
      <div class="c-site-footer__copyright">
        Copyright &copy;2021 Climate Policy Radar CIC - All Rights Reserved.
      </div>
    </div>
  </footer>
</Wrapper>

<style>
  .c-site-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    margin-bottom: 0;
    padding-top: 64px;
    padding-bottom: 96px;
  }

  @media only screen and (min-width: 720px) {
    .c-site-footer {
      padding-top: 120px;
      flex-direction: row;
    }
  }

  .c-site-footer__address {
    font-size: 15px;
    line-height: 24px;
    color: var(--color-indigo-400);
    order: 2;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 720px) {
    .c-site-footer__address {
      order: 1;
      margin: 0;
    }
  }

  .c-site-footer__nav {
    display: flex;
    flex-direction: column;
    order: 1;
  }

  @media only screen and (min-width: 720px) {
    .c-site-footer__nav {
      order: 2;
    }
  }

  .c-site-footer__nav-item {
    margin-bottom: 16px;
  }

  .c-site-footer__nav-item.is-active {
    text-decoration: underline;
  }

  .c-site-footer__social {
    display: flex;
    flex-direction: column;
    order: 3;
  }

  @media only screen and (min-width: 720px) {
    .c-site-footer__social {
      align-items: flex-end;
    }
  }

  .c-site-footer__social-links {
    margin-bottom: 2rem;
  }

  .c-site-footer__social-link + .c-site-footer__social-link {
    margin-left: 45px;
  }

  .c-site-footer__copyright {
    color: var(--color-indigo-300);
    font-size: 12px;
  }

  .c-site-footer--dark .c-site-footer__nav-item {
    color: #fff;
  }

  .c-site-footer--light .c-site-footer__nav-item {
    color: var(--color-indigo);
  }
</style>
