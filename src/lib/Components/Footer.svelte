<script>
  import { theme } from '$lib/stores/theme'
  import { socialLinks } from '$lib/stores/social-links.js'
  import Icon from '$lib/Components/Icon.svelte'
  import Wrapper from './Wrapper.svelte'
  import { menu } from '$lib/stores/navigation'

  const aboutMenu = $menu[0]
  const whatMenu = $menu[1]
  const news = $menu[2]
  const jobsMenu = $menu[3]
  const contact = $menu[4]

  const copyrightYear = new Date().getFullYear()
</script>

<Wrapper type="wide">
  <footer class="c-site-footer c-site-footer--{$theme.footer}">
    <nav class="c-site-footer__nav">
      <div class="c-site-footer__nav-col">
        <h4 class="u-type-body-md c-site-footer__nav-header">{aboutMenu?.label}</h4>
        {#each aboutMenu.submenu as item}
          <a sveltekit:prefetch href="/{item.link}" class="c-site-footer__nav-item u-type-body-md">{item.label}</a>
        {/each}
      </div>

      <div class="c-site-footer__nav-col">
        <h4 class="c-site-footer__nav-header">
          {whatMenu?.label}
        </h4>
        {#each whatMenu.submenu as item}
          <a sveltekit:prefetch href="/{item.link}" class="c-site-footer__nav-item u-type-body-md">{item.label}</a>
        {/each}
      </div>
      <div class="c-site-footer__nav-col">
        <h4 class="c-site-footer__nav-header">{jobsMenu?.label}</h4>
        {#each jobsMenu.submenu as item}
          <a sveltekit:prefetch href="/{item.link}" class="c-site-footer__nav-item u-type-body-md">{item.label}</a>
        {/each}
      </div>
      <div class="c-site-footer__nav-col">
        <a sveltekit:prefetch href="/{news.link}" class="c-site-footer__nav-item u-type-body-md">{news.label}</a>
        <a sveltekit:prefetch href="/media" class="c-site-footer__nav-item u-type-body-md">Media</a>
        <a sveltekit:prefetch href="/{contact.link}#get-in-touch" class="c-site-footer__nav-item u-type-body-md"
          >{contact.label}</a
        >
        <a sveltekit:prefetch href="/privacy-policy" class="c-site-footer__nav-item u-type-body-md">Privacy Policy</a>
        <a
          target="_blank"
          href="https://3566c5a7.sibforms.com/serve/MUIEAPkXK4liqQjleE87527EfcD9gDzY26dQhnJOxNeXZK_TvEAjl_Qu7rrkysJS2ODrj1LioiH24HTGbul2vS1sAxYCPHtu7PgnhZrAE9yCfaFrJ7vzmvBc3u87cs_pkC_99nQ2AqBONHtLwErrV7mcVga2qNlO1xetSeqVVWYsrVPRjg6Rc978eQEMasGQc4PFgIfMFza8TJEv"
          class="c-site-footer__nav-item u-type-body-md">Sign up to our newsletter</a
        >
      </div>
    </nav>

    <div class="c-site-footer__lower {$theme.footer === 'light' ? 'theme-light' : 'theme-dark'}">
      <div class="c-site-footer__address">
        Climate Policy Radar CIC
        <br />Sustainable Ventures
        <br />County Hall, 3rd Floor
        <br />Westminster Bridge Road
        <br />London
        <br />SE1 7PB
      </div>

      <div class="c-site-footer__social">
        <nav class="c-site-footer__social-links">
          {#if socialLinks}
            {#each socialLinks as link}
              <a class="c-site-footer__social-link" href={link.url} target="_blank" rel="noopener noreferrer external">
                <span class="u-sr-only">Follow us on {link.name}</span>
                <Icon name={link.id} fill={$theme.footer === 'light' ? 'var(--color-indigo)' : '#fff'} size="32px" />
              </a>
            {/each}
          {/if}
        </nav>
        <div class="c-site-footer__copyright">
          Copyright &copy;{copyrightYear} Climate Policy Radar CIC - All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
</Wrapper>

<style>
  .c-site-footer {
    width: 100%;
    margin: auto;
    margin-bottom: 0;
    padding-top: 64px;
    margin-top: 64px;
    padding-bottom: 96px;
  }
  .c-site-footer--light {
    border-top: 1px solid var(--color-indigo-300);
  }

  .c-site-footer--dark {
    border-top: 1px solid var(--color-indigo-500);
  }

  .c-site-footer__lower {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-top: 64px;
  }
  .c-site-footer__lower.theme-light {
    border-top: 1px solid var(--color-indigo-300);
  }
  .c-site-footer__lower.theme-dark {
    border-top: 1px solid var(--color-indigo-500);
  }

  @media only screen and (min-width: 768px) {
    .c-site-footer__lower {
      flex-direction: row;
      padding-top: 80px;
    }
  }

  @media only screen and (min-width: 768px) {
    .c-site-footer {
      /* padding-top: 120px; */
      padding-top: 80px;
      margin-top: 80px;
      flex-direction: row;
    }
  }

  .c-site-footer__address {
    font-size: 15px;
    line-height: 24px;
    color: var(--color-indigo-500);
    margin-top: 64px;
    margin-bottom: 64px;
  }

  .c-site-footer__lower.theme-dark .c-site-footer__address {
    color: var(--color-indigo-200);
  }

  @media only screen and (min-width: 768px) {
    .c-site-footer__address {
      margin: 0;
    }
  }

  .c-site-footer__nav-col:not(:first-child) {
    margin-top: 32px;
  }
  .c-site-footer__nav-header {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .c-site-footer__nav-header a {
    font-weight: 500;
    font-size: 16px;
  }
  .c-site-footer__nav-header a:hover {
    text-decoration: underline;
  }

  .c-site-footer__nav-item {
    margin-bottom: 12px;
    display: block;
  }
  .c-site-footer__nav-item:hover {
    text-decoration: underline;
  }

  /* .c-site-footer__nav-item.is-active {
    text-decoration: underline;
  } */

  @media only screen and (min-width: 768px) {
    .c-site-footer__nav {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
    }
    .c-site-footer__nav-item {
      font-size: 15px;
    }
    .c-site-footer__nav-col {
      width: 25%;
    }
    .c-site-footer__nav-col:not(:first-child) {
      margin-top: 0;
    }
  }

  .c-site-footer__social {
    display: flex;
    flex-direction: column;
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
    color: var(--color-indigo-500);
    font-size: 12px;
  }

  .c-site-footer__lower.theme-dark .c-site-footer__copyright {
    color: var(--color-indigo-200);
  }

  .c-site-footer--dark .c-site-footer__nav-item {
    color: #fff;
  }

  .c-site-footer--light .c-site-footer__nav-item {
    color: var(--color-indigo);
  }
</style>
