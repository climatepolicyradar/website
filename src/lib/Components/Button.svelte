<script>
  import Icon from './Icon.svelte';
  export let arrow = undefined;
  export let action = undefined;
  export let color = 'grey';
  export let href = undefined;
  export let rel = '';
  export let size = 'md';
  export let target = '_self';
  export let type = 'has-cta';
</script>

{#if href}
  <a
    class="c-button c-button--{size} c-button--{color} c-button--{type} {$$props.class ||''}"
    class:c-button--has-icon={arrow}
    {href}
    {target}
    {rel}
  >
    <slot />
    {#if arrow}
      <Icon name="arrow" size="14px" fill="currentColor" />
    {/if}
  </a>
{:else}
  <button
    class="c-button c-button--{size} c-button--{color} {$$props.class || ''}"
    class:c-button--has-icon={arrow}
    on:click={action}
  >
    <slot />
    {#if arrow}
      <Icon name="arrow" size="14px" fill="currentColor" />
    {/if}
  </button>
{/if}

<style>
  .c-button {
    display: inline-flex;
    position: relative;
    appearance: none;
    border: 0;
    border-radius: 60px;
    padding: 16px 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    line-height: 1;
    transition: background-color 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  @media only screen and (min-width: 720px) {
    .c-button {
      font-size: 24px;
      padding: 24px 40px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .c-button:hover {
      background-color: var(--color-white);
      box-shadow: 0 0 32px rgba(31, 147, 255, 0.12);
      color: var(--color-indigo);
    }
  }

  .c-button--cta {
    flex-shrink: 0;
    padding: 8px 24px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    justify-content: center;
  }

  @media only screen and (min-width: 321px) {
    .c-button--cta {
      padding: 8px 32px;
    }
  }

  .c-button--xs {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1;
  }

  @media only screen and (min-width: 321px) {
    .c-button--xs {
      padding: 16px 24px;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    .c-button--xs {
      padding: 16px 32px;
    }
  }

  .c-button--sm {
    padding: 16px 48px 16px 24px;
    font-size: 14px;
    line-height: 17px;
  }

  .c-button--md {
    font-size: 18px;
  }

  .c-button--no-cta {
    padding: 16px 32px;
  }

  @media (min-width: 768px) {
    .c-button--no-cta {
      padding: 24px 48px;
    }
  }

  .c-button--lg {
    padding: 16px 32px;
    font-size: 18px;
    min-width: 280px;
    font-weight: 500;
  }

  .c-button--white {
    color: var(--color-indigo);
    background-color: #fff;
  }
  .c-button--white:hover {
    color: var(--color-indigo);
    background-color: var(--color-sky);
  }
  .c-button--blue {
    color: #fff;
    background-color: var(--color-blue);
  }
  .c-button--blue:hover {
    color: #fff;
    background-color: var(--color-indigo);
  }

  .c-button--dark {
    background-color: var(--color-indigo);
    color: #fff;
  }

  .c-button--dark-glow {
    background-color: var(--color-indigo);
    color: #fff;
  }
  .c-button--dark-glow:hover {
    background-color: var(--color-blue);
    color: #fff;
  }

  .c-button--dark-glow::before,
  .c-button--blue:hover::before,
  .c-button--white::before {
    position: absolute;
    content: '';
    inset: 0;
    z-index: -1;
    background: linear-gradient(149.87deg, #236cde 0%, #ffffff 120.59%);
    opacity: 0.4;
    box-shadow: 0px 4px 14px rgba(7, 30, 74, 0.09);
    filter: blur(14px);
    border-radius: 30px;
  }

  .c-button--grey {
    background-color: var(--color-grey);
    color: var(--color-indigo);
  }

  .c-button--sky-fade {
    background-color: rgba(235, 242, 255, 0.4);
    color: #fff;
  }

  .c-button--has-icon {
    justify-content: space-between;
    align-items: center;
  }

  .c-button--lg.c-button--has-icon {
    padding-right: 23px;
  }

  @media (min-width: 768px) {
    .c-button--has-icon {
      min-width: 280px;
      padding: 24px 32px;
    }
  }

  :global(.c-button .c-icon) {
    margin-left: 1rem;
  }

  :global(.c-button span) {
    display: contents;
  }
</style>
