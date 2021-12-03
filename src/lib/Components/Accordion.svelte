<script>
  export let type = 'statement'
</script>

<div class="c-accordion c-accordion--{type}">
  <slot />
</div>

<style>
   @media (min-width: 768px) {
    :global(.c-accordion:not(.c-accordion--simple)) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }

  }
</style>
