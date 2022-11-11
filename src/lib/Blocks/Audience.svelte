<script>
  import Wrapper from '$lib/Components/Wrapper.svelte'

  export let theme = 'light'
</script>

<div class="b-audience b-audience--{theme}">
  <Wrapper>
    <div class="b-audience__content">
      <h3 class="b-audience__heading u-type-body-xxl u-color-blue">Who our climate law and policy database is for</h3>

      <Wrapper type="content" align="left">
        <p class="b-audience__copy u-type-body-xl u-mt-0">
          The data and knowledge we generate are open and free to everyone. But we believe the people who will benefit
          from them the most are:
        </p>
      </Wrapper>

      <div class="b-audience__passages u-type-body-lg">
        <div class="b-audience__passage">
          <h4>Policymakers</h4>
          <p>
            Use our tool to explore ‘menus’ of policy options and find out what climate change interventions are being
            implemented where and by whom, and identify best practice to shape policy design.
          </p>
        </div>
        <div class="b-audience__passage">
          <h4>Researchers</h4>
          <p>
            Explore our data to identify different climate change policies, policy instruments and climate targets
            worldwide; model the potential impact of climate laws and policies and carry out cost-benefit analyses; and
            evaluate the effectiveness of climate change strategies.
          </p>
        </div>
        <div class="b-audience__passage">
          <h4>Citizens and civil society</h4>
          <p>
            Access our information to guide voting choices, question decisions, highlight insufficient action and
            suggest alternative ways forward. Our data will help strengthen strategic legal cases to challenge
            governments and corporations and claim damages for the consequences of climate change.
          </p>
        </div>
        <div class="b-audience__passage">
          <h4>Private sector</h4>
          <p>
            Apply our data to integrate relevant laws and policies into risk modelling. Our data will also lead to a
            better understanding of the regulatory environment, guiding smarter investment decisions, climate finance
            deployment and responsible lending.
          </p>
        </div>
      </div>
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
  }
</style>
