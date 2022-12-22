<script>
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Icon from '$lib/Components/Icon.svelte'
  import IconList from '$lib/Components/IconList.svelte'
  import IconListItem from '$lib/Components/IconListItem.svelte'

  export let theme = 'light'
</script>

<div class="b-audience b-audience--{theme}">
  <Wrapper>
    <div class="b-audience__content">
      <h3 class="b-audience__heading u-type-body-xxl u-color-blue">Our users</h3>

      <Wrapper type="content" align="left">
        <p class="b-audience__copy u-type-body-xl u-mt-0">
          The data and knowledge we generate are open and free to everyone. But we believe the people who will benefit
          from them the most are:
        </p>
      </Wrapper>

      <IconList orientation="horizontal">
        <IconListItem orientation="vertical">
          <Icon name="policy" />
          <h4 class="u-type-body-xl">Policymakers</h4>
          <p class="u-type-body-md">
            Use our tool to explore ‘menus’ of policy options and find out what climate change interventions are being
            implemented where and by whom, and identify best practice to shape policy design.
          </p>
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="researchers" />
          <h4 class="u-type-body-xl">Researchers</h4>
          <p class="u-type-body-md">
            Explore our data to identify different climate change policies, policy instruments and climate targets
            worldwide; model the potential impact of climate laws and policies and carry out cost-benefit analyses; and
            evaluate the effectiveness of climate change strategies.
          </p>
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="userGroup" />
          <h4 class="u-type-body-xl">Citizens and civil society</h4>
          <p class="u-type-body-md">
            Access our information to guide voting choices, question decisions, highlight insufficient action and
            suggest alternative ways forward. Our data will help strengthen strategic legal cases to challenge
            governments and corporations and claim damages for the consequences of climate change.
          </p>
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="privateSector" />
          <h4 class="u-type-body-xl">Private sector</h4>
          <p class="u-type-body-md">
            Apply our data to integrate relevant laws and policies into risk modelling. Our data will also lead to a
            better understanding of the regulatory environment, guiding smarter investment decisions, climate finance
            deployment and responsible lending.
          </p>
        </IconListItem>
      </IconList>
    </div>
  </Wrapper>
</div>

<style>
  .b-audience__heading {
    margin-bottom: 2rem;
  }

  .b-audience__passages {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--color-indigo-500);
  }

  @media only screen and (min-width: 720px) {
    .b-audience__passages {
      gap: 2.5rem;
      flex-direction: row;
    }
    .b-audience__passage {
      flex-basis: 25%;
    }
  }
</style>
