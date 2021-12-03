<script>
  import Accordion from '$lib/Components/Accordion.svelte';
  import AccordionItem from '$lib/Components/AccordionItem.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import TwoColumn from '$lib/Components/TwoColumn.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  export let id = undefined;
</script>

<Wrapper>

  <div class="b-values__header">
    <Heading>
      <h3 class="u-type-body-xxl">Our Values</h3>
    </Heading>
  </div>

  <Spacer size="md" />

  <Accordion>
    <AccordionItem
      number="1"
      color="indigo"
      type="statement"
      title="Moonshot intention with grounded urgent action"
      icon="moonshot"
    >
      <p class="u-type-body-md">
        We seek to bring about meaningful change towards a better future, using data effectively
        to make a difference to people and planet.
      </p>
      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          In particular, we want to influence and change the way evidence informs policy and
          investment decisions. While this is a marathon, and we’re in it for the long haul, the
          urgency of the challenge means we are committed to sprints and to achieving short term
          goals, without losing sight of our long term mission.
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem number="2" color="indigo" type="statement" title="Excellence" icon="excellence">
      <p class="u-type-body-md">
        We strive to be excellent at what we do and how we do it.
      </p>
      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          Holding ourselves to the highest standard of research and development, operations, management and engagement with our stakeholders.
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem number="3" color="indigo" type="statement" title="Truth seeking" icon="truth">
      <p class="u-type-body-md">
        We will be honest and act with integrity in the data we produce and the way that we
        communicate what it means.
      </p>
      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          We will make an active effort to avoid bias in all our practices and importantly, in the way we collect, curate and communicate data. We will be dispassionate about any given course of action as long as there is evidence to show its effectiveness - there are no silver bullets.
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem number="4" color="indigo" type="statement" title="Transparency" icon="transparency">
      <p class="u-type-body-md">
        We will make our data, analyses and platform available for others to use and build on.
      </p>
      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          We will be open about how we work and what we do, and explain our data and analyses clearly using language that is readily understood by our target audiences. We will be leaders in open sourcing climate data and contributing to open source efforts globally.
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem number="5" color="indigo" type="statement" title="Learning and experimenting" icon="learning">
      <p class="u-type-body-md">
        We seek to continuously learn and improve ourselves and our organisation and to advance a
        culture of evidence-based decision making
      </p>
      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          Through constant learning from others’ successes, mistakes and through innovation and experimentation where things have not been tried before. We embrace failure, will interrogate our mistakes openly, and try and improve on our weaknesses.
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem number="6" color="indigo" type="statement" title="Emotional intelligence" icon="emotionalIntelligence">
      <p class="u-type-body-md">
        We are committed to intelligent and empathic communication with our team, stakeholders,
        and audiences.
      </p>
      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          We will be honest, reliable, approachable, and practice generosity and integrity in all our dealings with others, both in Climate Policy Radar and externally.
        </p>
      </svelte:fragment>
    </AccordionItem>
    <AccordionItem
      number="7"
      color="indigo"
      type="statement"
      title="Bridge building and collaboration"
      icon="collaboration"
    >
      <p class="u-type-body-md">
        We take a radical collaboration approach to our work - both internally and externally. We
        do not view other people and organisations as competitors, but rather as allies.
      </p>

      <svelte:fragment slot="expanded">
        <p class="u-type-body-md">
          We do not view other people and organisations as competitors, but rather as allies. Everyone in the team will contribute their unique skills, insights and work with others to maximise synergies. We will build links with the broad climate change community, and collaborate and integrate with other climate change data providers and organisations.
        </p>
      </svelte:fragment>
    </AccordionItem>
  </Accordion>
</Wrapper>

<style>

  :global(.b-values .b-values__header .c-heading) {
    margin-bottom: 0;
  }

  :global(.c-accordion-item__button) {
    position: absolute;
  }
</style>

