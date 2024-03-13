<script>
import Button from "./Button.svelte";

  export let title = undefined;
  export let excerpt = undefined;
  export let link = undefined;
  export let linkCopy = 'Apply';
  export let target = '_self';
  export let rel = '';
</script>

<a class="c-card c-card--compact" href={link} {target} {rel}>
  <div class="c-card__content">
    {#if title}
      <h3 class="c-card__title u-type-body-xl">{title}</h3>
    {/if}

    {#if excerpt}
      <div class="c-card__excerpt u-type-body-sm">{excerpt}</div>
    {/if}
  </div>

  {#if link}
    <div class="c-card__footer">
      <Button type="cta" color="white" href={link} {target} class="c-card__cta">{linkCopy}</Button>
    </div>
  {/if}
</a>

<style>
  .c-card--compact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    background-color: var(--color-grey);
    color: var(--color-indigo);
    border-radius: 30px;
    margin-bottom: 24px;
    transition: background-color 0.2s ease-in, box-shadow 0.3s ease-in;
  }

  a.c-card--compact {
    text-decoration: none;
  }

  a.c-card--compact .c-card__title {
    text-decoration: underline;
  }

  @media only screen and (min-width: 321px) {
    .c-card--compact {
      padding: 32px;
    }
  }

  @media only screen and (min-width: 720px) {
    .c-card--compact {
      flex-direction: row;
      align-items: center;
      padding: 40px;
    }
  }

  .c-card--compact:last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 720px) {
    .c-card--compact {
      margin-bottom: 40px;
    }
  }

  .c-card--compact:hover {
    box-shadow: 0 0 48px rgba(31, 147, 255, 0.12);
  }

  .c-card__content {
    padding-right: 3rem;
  }
  
  .c-card__title {
    margin-bottom: 1rem;
  }

  .c-card__excerpt {
    color: var(--color-indigo-500);
    text-decoration: none;
  }

  .c-card__footer {
    flex-shrink: 0;
  }

  :global(.c-card--compact .c-card__cta) {
    margin-top: 32px;
  }

  @media only screen and (min-width: 720px) {
    :global(.c-card--compact .c-card__cta) {
      margin-top: 0;
    } 
  }
</style>
