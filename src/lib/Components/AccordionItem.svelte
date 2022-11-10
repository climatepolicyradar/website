<script>
  import { slide } from "svelte/transition";
  import Icon from '$lib/Components/Icon.svelte';
  export let number = undefined;
  export let color = 'grey'; // grey | indigo
  export let type = 'simple'; // simple | statement
  export let expanded = false;
  export let title = undefined;
  export let icon = undefined;

  const handleClick = () => {
    if ($$slots.expanded) {
      expanded = !expanded;
    }
  }
</script>

<div
  class="c-accordion-item c-accordion-item--{color} c-accordion-item--{type}"
  class:is-expandable={$$slots.expanded}
  class:is-expanded={$$slots.expanded && expanded}
  aria-expanded={$$slots.expanded && expanded}
  on:click={handleClick}
>
  {#if number && type === 'simple'}
    <div class="c-accordion-item__number u-type-body-xxl">
      {number}
    </div>
  {/if}
  {#if icon}
    <div class="c-accordion-item__icon">
      <Icon name={icon} />
    </div>
  {/if}

  <div class="c-accordion-item__content">
    {#if title}
      <h4 class="c-accordion-item__title">{title}</h4>
    {/if}

    <div class="c-accordion-item__copy u-type-body-lg">
      <slot />
    </div>

    {#if expanded && $$slots.expanded}
      <div class="c-accordion-item__expanded u-type-body-lg" transition:slide>
        <slot name="expanded"><!-- optional fallback --></slot>
      </div>
    {/if}
  </div>

  {#if type === 'statement'}
    <div class="c-accordion-item__button">
      {#if expanded}
        <span>–</span>
      {:else}
        <span>+</span>
      {/if}
    </div>
  {/if}
</div>

<style>
  .c-accordion-item {
    padding: 24px;
    margin-bottom: 36px;
    border-radius: 30px;
    position: relative;
    transition: background-color 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;
  }

  @media only screen and (min-width: 321px) {
    .c-accordion-item {
      padding: 36px;
    }
  }

  .c-accordion-item.is-expandable:hover {
    cursor: pointer;
    box-shadow: 0 0 48px rgba(31, 147, 255, 0.4);
  }

  .c-accordion-item--simple {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 720px) {
    .c-accordion-item--simple {
      flex-direction: row;
      align-items: center;
    }
  }

  .c-accordion-item--statement {
    display: grid;
    grid-template-areas:
      'ttl num'
      'cpy btn';
    grid-template-columns: 1fr 44px;
    font-size: 16px;
    line-height: 24px;
  }

  .c-accordion-item--grey {
    color: var(--color-indigo);
    background-color: var(--color-grey);
  }

  .c-accordion-item--grey.c-accordion-item--simple .c-accordion-item__number:after {
    background-color: var(--color-grey);
  }

  .c-accordion-item--grey.c-accordion-item--simple.is-expandable:hover .c-accordion-item__number:after {
    background-color: var(--color-white);
  }

  .c-accordion-item--grey.is-expandable:hover {
    background-color: var(--color-white);
  }

  .c-accordion-item--indigo {
    color: #fff;
    background-color: var(--color-indigo);
  }

  .c-accordion-item__number, .c-accordion-item__icon {
    grid-area: num;
    z-index: 1;
  }

  @media only screen and (max-width: 720px) {
    .c-accordion-item__number, .c-accordion-item__icon {
      margin-bottom: 16px;
    }
  }

  .c-accordion-item--simple .c-accordion-item__number {
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 32px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--color-indigo);
    border-radius: 50%;
    position: inherit;
  }

  @media only screen and (min-width: 720px) {
    .c-accordion-item--simple .c-accordion-item__number {
      width: 64px;
      height: 64px;
    }
  }

  .c-accordion-item--simple .c-accordion-item__number::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 44px;
    height: 44px;
    background: linear-gradient(134.5deg, #071e4a 48.58%, #1f93ff 72.99%, rgba(22, 134, 238, 0.38) 122.32%);
    border-radius: 50%;
    z-index: -2;
  }

  @media only screen and (min-width: 720px) {
    .c-accordion-item--simple .c-accordion-item__number::before {
      width: 68px;
      height: 68px;
    }
  }

  .c-accordion-item--simple .c-accordion-item__number:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    z-index: -1;
  }

  @media only screen and (min-width: 720px) {
    .c-accordion-item--simple .c-accordion-item__number:after {
      width: 64px;
      height: 64px;
    }
  }

  .c-accordion-item--statement .c-accordion-item__number {
    text-align: center;
    font-size: 32px;
    line-height: 1;
    font-weight: 500;
  }

  @media only screen and (min-width: 720px) {
    .c-accordion-item--statement .c-accordion-item__number {
      font-size: 64px;
      line-height: 1;
    }
  }

  .c-accordion-item__title {
    grid-area: ttl;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
  }

  .c-accordion-item--statement .c-accordion-item__title {
    margin-bottom: 72px;
  }

  .c-accordion-item__copy {
    grid-area: cpy;
  }

  .c-accordion-item--statement .c-accordion-item__copy,
  .c-accordion-item--statement .c-accordion-item__expanded {
    max-width: 330px;
    padding-right: 16px;
  }

  :global(.c-accordion-item p) {
    margin: 0;
  }

  :global(.c-accordion-item p + p) {
    margin-top: 1rem;
  }

  .c-accordion-item__expanded {
    margin-top: 1rem;
  }

  .c-accordion-item__button {
    grid-area: btn;
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    justify-self: flex-end;
    flex-shrink: 0;
    font-size: 32px;
    font-weight: 400;
    border-radius: 50%;
  }

  .c-accordion-item__button span {
    position: relative;
    z-index: 2;
  }

  .c-accordion-item__button::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 48px;
    height: 48px;
    background: linear-gradient(134.5deg, rgba(50,35,50,1) 0%, rgba(31,147,255,1) 0%, rgba(255,255,255,1) 53%);
    border-radius: 50%;
    z-index: 0;
  }

  .c-accordion-item__button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    background-color: var(--color-indigo);
    border-radius: 50%;
    z-index: 1;
  }
</style>
