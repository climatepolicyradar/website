<script>
  import Accordion from '$lib/Components/Accordion.svelte'
  import AccordionItem from '$lib/Components/AccordionItem.svelte'
  import Heading from '$lib/Components/Heading.svelte'
  import TwoColumn from '$lib/Components/TwoColumn.svelte'
</script>

<TwoColumn>
  <svelte:fragment slot="col-1">
    <Heading>
      <h3 class="u-type-body-xxl">Our data</h3>
    </Heading>
    <p class="u-type-body-lg left-paragraph">
      Our current climate policy database consists of thousands of laws, policies, strategies and action plans from all
      national governments.
    </p>
    <p class="u-type-body-lg left-paragraph">
      The data are sourced in collaboration with the Grantham Research Institute on Climate Change and the Environment
      at LSE.
    </p>
    <p class="u-type-body-lg left-paragraph">
      We are working to add additional documents, including submissions to the UNFCCC, and laws and policies from
      sub-national and local governments. We will source these by:
    </p>
  </svelte:fragment>

  <svelte:fragment slot="col-2">
    <Accordion type="simple">
      <AccordionItem number="1" color="grey" type="simple">
        <p>Collaborating with international, sectoral and regional database providers.</p>
      </AccordionItem>
      <AccordionItem number="2" color="grey" type="simple">
        <p>Extracting law, policy and strategy documents (‘scraping’) from government and other websites.</p>
      </AccordionItem>
      <AccordionItem number="3" color="grey" type="simple">
        <p>Crowd-sourcing documents.</p>
      </AccordionItem>
    </Accordion>
  </svelte:fragment>
  <svelte:fragment slot="extra">
    <p class="u-type-body-lg">
      If there is a dataset you think we should include, please <a
        href="https://forms.gle/jWPu75krbpwwy5Xt5"
        target="_blank">get in touch</a
      >.
    </p>
  </svelte:fragment>
</TwoColumn>

<style>
  @media (min-width: 768px) {
    .left-paragraph {
      margin-right: 2rem;
    }
  }
</style>
