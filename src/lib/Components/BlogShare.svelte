<script>
  import { page } from '$app/stores';
  import Icon from './Icon.svelte';

  let currentUrl = encodeURIComponent(`${$page.host}${$page.path}`)
</script>

<div class="c-share">
  <span>Share</span>
  <div class="c-share__links">
    <a
      href="https://www.linkedin.com/sharing/share-offsite/?url={currentUrl ? currentUrl : ''}"
      class="c-share__link"
      target="_blank"
      rel="noopener noreferrer external"
    >
      <Icon name="linkedin" size="22px" fill="var(--color-indigo)" />
    </a>
    <a
      href="https://twitter.com/intent/tweet?url={currentUrl}"
      class="c-share__link"
      target="_blank"
      rel="noopener noreferrer external"
    >
      <Icon name="twitter" size="22px" fill="var(--color-indigo)" />
    </a>
  </div>
</div>

<style>
  .c-share {
    display: flex;
    align-items: center;
    background-color: var(--color-grey);
    padding: 16px 32px;
    border-radius: 50px;
    margin-bottom: 40px;
    max-width: 250px;
  }

  @media only screen and (min-width: 1024px) {
    .c-share {
      position: sticky;
      top: 150px;
      right: 0;
      margin-bottom: 0;
    }
  }

  .c-share__links {
    margin-left: 48px;
  }

  .c-share__link {
    display: inline-block;
    margin-right: 24px;
  }
</style>
