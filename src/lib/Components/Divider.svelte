<script>
  import Wrapper from "./Wrapper.svelte";
  export let title = 'Block';
</script>

<Wrapper>
  <h3 class="o-divider">{title}</h3>
</Wrapper>

<style>
  .o-divider {
    padding: 2rem 1rem;
    border-top: 2px solid var(--color-purple-400);
    border-bottom: 2px solid var(--color-purple-400);
  }
</style>