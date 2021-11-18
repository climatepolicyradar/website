<script>
  export let orientation = 'horizontal';
  export let alignment = 'center';
</script>

<li class="u-type-body-lg c-icon-list-item c-icon-list-item--{orientation} c-icon-list-item--alignment-{alignment}">
  <slot />
</li>
<style>
  .c-icon-list-item {
    display: flex;
    color: var(--color-indigo-500);
  }

  :global(.c-icon-list-item h3) {
    color: var(--color-indigo);
  }

  .c-icon-list-item--horizontal {
    flex-direction: row;
    align-items: center;
  }

  .c-icon-list-item--alignment-top {
    align-items: flex-start;
  }

  .c-icon-list-item--vertical {
    flex-direction: column;
  }

  :global(.c-icon-list-item .c-icon) {
    margin-right: 2rem;
  }
</style>
