<script>
  import Icon from './Icon.svelte';
  import Pill from './Pill.svelte';

  export let pill = undefined;
  export let title = undefined;
  export let date = undefined;
  export let excerpt = undefined;
  export let link = undefined;
  export let target = '_self';
  export let rel = '';
  export let logo = undefined;
  export let logoWidth = undefined;
  export let logoHeight = undefined;
  export let logoAlt = undefined;
</script>

<a class="c-card c-card--square" href={link} {target} {rel}>
  <div class="c-card__header">
    {#if pill}
      <Pill color="white">{pill}</Pill>
    {/if}

    {#if date}
      <span class="c-card__date u-type-body-xs">{date}</span>
    {/if}
  </div>

  <div class="c-card__content">
    {#if title}
      <h3 class="c-card__title u-type-h3">{title}</h3>
    {/if}

    {#if excerpt}
      <div class="c-card__excerpt">{excerpt}</div>
    {/if}

    {#if logo}
      <img
        class="c-card__logo"
        src={logo}
        width={logoWidth}
        height={logoHeight}
        alt={logoAlt}
        loading="lazy"
      />
    {/if}
  </div>

  {#if link}
    <div class="c-card__footer">
      <span class="c-card__cta">Read more</span>
      <Icon name="arrowRound" fill="var(--color-indigo)" />
    </div>
  {/if}
</a>

<style>
  .c-card--square {
    display: flex;
    padding: 24px 36px;
    flex-direction: column;
    background-color: var(--color-grey);
    color: var(--color-indigo);
    border-radius: 30px;
    transition: background-color 0.2s ease-in, box-shadow 0.4s ease-in;
  }

  .c-card--square:hover {
    background-color: var(--color-sky);
    box-shadow: 0 0 48px rgba(31, 147, 255, 0.12);
  }

  .c-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .c-card__content {
    padding-bottom: 3rem;
  }

  .c-card__footer {
    display: flex;
    margin-top: auto;
    margin-bottom: 0;
    justify-content: space-between;
    align-items: center;
  }

  .c-card__date {
    opacity: 0.5;
  }

  .c-card__title {
    margin-bottom: 1rem;
  }

  .c-card__excerpt {
    margin-bottom: 1rem;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.5;
  }

  .c-card__logo {
    width: 100px;
    height: 40px;
    object-fit: contain;
    object-position: left center;
  }

  .c-card__cta {
    font-weight: 500;
  }

  :global(.c-card--square .c-icon) {
    transition: transform 0.2s ease-in;
  }
</style>
