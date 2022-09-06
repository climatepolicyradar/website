<script>
  import Icon from "./Icon.svelte";

  export let theme = 'light';
  export let title = undefined;
  export let image = undefined;
  export let date = undefined;
  export let excerpt = undefined;
  export let slug = undefined;
  export let target = '_self';
  export let rel = '';
</script>

<a class="c-card c-card--split c-card--split-{theme}" href={`/latest/${slug}`} {target} {rel}>
  <div class="c-card__media">
    {#if image}
      <img src={`${image}`} alt={`Thumbnail for ${title}`} class="c-card__image">
    {/if}
  </div>
  <div class="c-card__content">
    {#if date}
      <span class="c-card__date">{date}</span>
    {/if}

    {#if title}
      <div class="c-card__title u-type-h2" role="heading">{title}</div>
    {/if}

    {#if excerpt}
      <p class="c-card__excerpt">{excerpt}</p>
    {/if}

    <div class="c-card__footer">
      <span class="c-card__cta">Read more</span>
      <Icon name="arrowRound" fill={theme === 'light' ? 'var(--color-indigo)' : 'var(--color-grey)' } />
    </div>
  </div>
</a>

<style>
  .c-card--split {
    display: block;
    background-color: var(--color-grey);
    border-radius: 30px;
    padding: 10px;
    color: var(--color-indigo-600);
    margin-bottom: 24px;
  }

  .c-card--split.c-card--split-dark {
    background-color: var(--color-indigo-600);
    color: var(--color-grey);
  }

  @media only screen and (min-width: 720px) {
    .c-card--split {
      display: flex;
      padding: 24px;
      margin-bottom: 40px;
    }
  }

  @media only screen and (min-width: 720px) {
    .c-card--split {
      display: flex;
    }
  }

  .c-card__media {
    border-radius: 30px;
    overflow: hidden;
  }

  .c-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .c-card__content {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  @media only screen and (min-width: 720px) {
    .c-card__content {
      padding: 24px 0 0 48px;
    }
  }

  @media only screen and (min-width: 720px) {
    .c-card__media,
    .c-card__content {
      flex-basis: 50%;
    }
  }

  .c-card__date {
    display: inline-block;
    margin-bottom: 8px;
    color: var(--color-indigo-500);
  }

  .c-card--split.c-card--split-dark .c-card__date {
    color: var(--color-indigo-200);
  }

  .c-card__excerpt {
    line-height: 24px;
  }

  .c-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
  }

  .c-card__cta {
    font-weight: 500;
  }
</style>
