<script>
  import { values } from '$lib/stores/values';
  import Heading from '$lib/Components/Heading.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import ValuePanel from '$lib/Components/ValuePanel.svelte';
</script>

<Wrapper>
  <div class="b-values__header">
    <Heading>
      <h3 class="u-type-body-xxl">Our Values</h3>
    </Heading>
  </div>

  <Spacer size="md" />

  <div class="b-values__content">
    {#each $values as value, index}
      <ValuePanel
        title={value.title}
        icon={value.icon}
        description1={value.description1}
        description2={value.description2}
      />
    {/each}
  </div>
</Wrapper>

<style>
  @media (min-width: 768px) {
    .b-values__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
      row-gap: 3rem;
      align-content: stretch;
    }
    :global(.c-panel) {
      align-self: stretch;
    }
  }

  :global(.b-values .b-values__header .c-heading) {
    margin-bottom: 0;
  }

  :global(.c-accordion-item__button) {
    position: absolute;
  }
</style>
