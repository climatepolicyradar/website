<script>
  import { policymaking } from '$lib/stores/policymaking'
  import Heading from '$lib/Components/Heading.svelte'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import ValuePanel from '$lib/Components/ValuePanel.svelte'
</script>

<Wrapper>
  <div class="b-values__header">
    <Heading>
      <h3 class="u-type-body-xxl">The need for informed climate change policymaking</h3>
    </Heading>
    <p class="u-type-body-xl">
      Laws and policies are essential to slashing global emissions, building climate-resilient, adaptive communities and
      economies, and accounting for loss and damage from climate impacts.
    </p>
    <p class="u-type-body-xl">
      Yet data on existing climate policies and laws are currently hard to find and analyse. Documents and data are
      spread across diffuse resources in different languages, in inconsistent formats. This makes it difficult to learn
      from successes and mistakes and to develop ambitious ways forward.
    </p>
    <p class="u-type-body-xl">
      We are working to open up and make sense of that data to support informed policymaking, track progress and model
      policy risk. Use our open data tools for:
    </p>
  </div>

  <Spacer size="sm" />

  <div class="b-values__content">
    {#each $policymaking as value, index}
      <ValuePanel
        title={value.title}
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
      grid-template-columns: repeat(4, 1fr);
      /* grid-template-columns: 25% 25% 25% 25%; */
      columns: 4;
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
