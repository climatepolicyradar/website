<script>
  export let columnsTiny = 1;
  export let columnsMobile = 1;
  export let columnsTablet = 2;
  export let columnsDesktop = 3;
  export let gap = '40px';
</script>

<div class="c-cards-grid" style="--desktop-cols: {columnsDesktop}; --tablet-cols: {columnsTablet}; --mobile-cols: {columnsMobile}; --tiny-cols: {columnsTiny}; --gap: {gap};">
  <slot />
</div>

<style>
  .c-cards-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    width: 100%;
  }

  :global(.c-cards-grid .c-card) {
      flex-basis: calc((100% / var(--tiny-cols)) - ((var(--tiny-cols) - 1) * var(--gap)) / var(--tiny-cols));
      flex-grow: 0;
      flex-shrink: 0;
    }

  @media (min-width: 321px) {
    :global(.c-cards-grid .c-card) {
      flex-basis: calc((100% / var(--mobile-cols)) - ((var(--mobile-cols) - 1) * var(--gap)) / var(--mobile-cols));
      flex-grow: 0;
      flex-shrink: 0;
    }
  }

  @media (min-width: 580px) {
    :global(.c-cards-grid .c-card) {
      flex-basis: calc((100% / var(--tablet-cols)) - ((var(--tablet-cols) - 1) * var(--gap)) / var(--tablet-cols));
    }
  }

  @media (min-width: 900px) {
    :global(.c-cards-grid .c-card) {
      flex-basis: calc((100% / var(--desktop-cols)) - ((var(--desktop-cols) - 1) * var(--gap)) / var(--desktop-cols));
    }
  }
</style>
