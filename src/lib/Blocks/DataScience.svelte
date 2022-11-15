<script>
  import { dataScience } from '$lib/stores/dataScience'
  import Heading from '$lib/Components/Heading.svelte'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import ValuePanel from '$lib/Components/ValuePanel.svelte'
</script>

<Wrapper>
  <div class="b-values__header">
    <Heading>
      <h3 class="u-type-body-xxl u-color-blue">Data science and AI</h3>
    </Heading>
    <p class="u-type-body-xl">
      We use innovative data science and AI methods to turn masses of unstructured text from climate policy and legal
      documents into structured, usable and useful information.
    </p>
  </div>

  <Spacer size="sm" />

  <div class="b-values__content">
    {#each $dataScience as value, index}
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
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 2rem;
      row-gap: 2rem;
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
