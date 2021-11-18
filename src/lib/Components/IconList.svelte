<script>
  export let orientation = 'vertical';
</script>
<ul class="c-icon-list c-icon-list--{orientation}">
  <slot/>
</ul>
<style>
  .c-icon-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* .c-icon-list--vertical {} */

  :global(.c-icon-list--vertical .c-icon-list-item) {
    margin-bottom: 2rem;
  }

  :global(.c-icon-list--vertical .c-icon-list-item:last-child) {
    margin-bottom: 0;
  }

  .c-icon-list--horizontal {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  @media only screen and (min-width: 720px) {
    .c-icon-list--horizontal {
      flex-direction: row;
    }
  }

  :global(.c-icon-list--horizontal .c-icon-list-item) {
    flex: 1;
  }
</style>
