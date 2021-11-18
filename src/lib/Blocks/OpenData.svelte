<script>
  import Accordion from '$lib/Components/Accordion.svelte';
  import AccordionItem from '$lib/Components/AccordionItem.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import TwoColumn from '$lib/Components/TwoColumn.svelte';
</script>

<TwoColumn>
  <svelte:fragment slot="col-1">
    <Heading>
      <h3 class="u-type-body-xxl">Open Data</h3>
    </Heading>
  </svelte:fragment>

  <svelte:fragment slot="col-2">
    <Accordion>
      <AccordionItem number="1" color="grey" type="simple">
        <p>
          We believe everyone should have access to data, and work to make ours interoperable with
          others.
        </p>
        <!-- <svelte:fragment slot="expanded">More content</svelte:fragment> -->
      </AccordionItem>
      <AccordionItem number="2" color="grey" type="simple">
        <p>Our data is open and free for non-commercial use, and our code is open source.</p>
        <!-- <svelte:fragment slot="expanded">More content</svelte:fragment> -->
      </AccordionItem>
      <AccordionItem number="3" color="grey" type="simple">
        <p>
          We are signatories of the Subak data pledge and active members of the movement to create a
          sustainable digital ecosystem for the planet. Our allies include the Coalition for Digital
          Environmental Sustainability (CODES), Camda, Climate Change AI, the Good AI and more.
        </p>
        <!-- <svelte:fragment slot="expanded">More content</svelte:fragment> -->
      </AccordionItem>
    </Accordion>
  </svelte:fragment>
</TwoColumn>
