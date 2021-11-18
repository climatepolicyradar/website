<script>
  import Wrapper from './Wrapper.svelte';

  export let id = undefined;
</script>

<div {id} class="c-two-column">
  <Wrapper>
    <div class="c-two-column__content">
      <div class="c-two-column__col-1">
        <slot name="col-1"><!-- optional fallback --></slot>
      </div>
      <div class="c-two-column__col-2">
        <slot name="col-2"><!-- optional fallback --></slot>
      </div>
    </div>
  </Wrapper>
</div>

<style>
  .c-two-column__content {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media (min-width: 768px) {
    .c-two-column__content {
      flex-direction: row;
    }

    .c-two-column__col-1,
    .c-two-column__col-2 {
      flex-basis: 50%;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
</style>
