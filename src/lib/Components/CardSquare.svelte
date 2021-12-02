<script>
  import Icon from './Icon.svelte';
  import Pill from './Pill.svelte';

  export let pill = undefined;
  export let title = undefined;
  export let date = undefined;
  export let source = undefined;
  export let excerpt = undefined;
  export let link = undefined;
  export let target = '_self';
  export let rel = '';
  export let logo = undefined;
  export let background = '#000'
  export let logoWidth = undefined;
  export let logoHeight = undefined;
  export let logoAlt = undefined;
</script>

<a class="c-card c-card--square" href={link} {target} {rel}>
  <div class="c-card__header" style="background: {background}">
    {#if pill}
      <Pill color="indigo">{pill}</Pill>
    {/if}

    {#if date}
      <span class="c-card__date u-type-body-xs">{date}</span>
    {/if}
    {#if logo}
      <div class="c-card__logo-wrapper">
        <img
          class="c-card__logo"
          src={logo}
          alt={logoAlt}
          title={source}
          loading="lazy"
        />
      </div>
      <!-- {#if source}
        <div class="c-card__source">{source}</div>
      {/if} -->
    {/if}
  </div>

  <div class="c-card__content">
    {#if title}
      <h3 class="c-card__title u-type-h3">{title}</h3>
    {/if}

    
    {#if excerpt}
      <div class="c-card__excerpt">
        <div class="c-card__excerpt-inner">
          {excerpt}
        </div>
      </div>
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
    flex-direction: column;
    background-color: var(--color-indigo-100);
    color: var(--color-indigo);
    border-radius: 30px;
    transition: background-color 0.2s ease-in, box-shadow 0.4s ease-in;
  }

  .c-card--square:hover {
    background-color: var(--color-white);
    /* box-shadow: 0 0 48px rgba(31, 147, 255, 0.12); */
    box-shadow: -8px -8px 16px rgba(0,0,0, 0.12);
  }

  .c-card__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 24px 36px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    transition: filter 1s;
  }
  .c-card__date {
    opacity: 0.8;
    color: var(--color-white);
  }
  .c-card__logo-wrapper {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .c-card__logo {
    height: 36px;
    object-fit: contain;
    object-position: left center;
    transform: scale(1);
    transition: transform 1s;
  }

  .c-card--square:hover .c-card__logo {
    transform: scale(1.2);
  }
  .c-card--square:hover .c-card__header {
    filter: brightness(115%);
  }

  /* .c-card__source {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    color: var(--color-white);
  } */

  .c-card__content {
    padding: 24px 36px;
  }

  .c-card__footer {
    display: flex;
    margin-top: auto;
    margin-bottom: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 24px 36px;
  }

  

  .c-card__title {
    margin-bottom: 1rem;
  }

  .c-card__excerpt {
    margin-bottom: 1rem;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.7;
    overflow: hidden;
    position: relative;
  }

  .c-card__cta {
    font-weight: 500;
  }

  :global(.c-card--square .c-icon) {
    transition: transform 0.2s ease-in;
  }
</style>
