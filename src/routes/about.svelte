<script lang="ts" context="module">

  export const load = async ({ fetch }) => {
      const res = await fetch('/data/team.json');
      const data = await res.json();
      const { team } = data;

      const pressRes = await fetch('/data/press.json');
      const pressData = await pressRes.json();
      const { pressClippings } = pressData;

      return { props: { team, pressClippings } };
  };
</script>

<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import StickyNav from '$lib/Components/StickyNav.svelte';
  import Team from '$lib/Blocks/Team.svelte';
  import OurValues from '$lib/Blocks/OurValues.svelte';
  import Icon from '$lib/Components/Icon.svelte';
  import IconList from '$lib/Components/IconList.svelte';
  import IconListItem from '$lib/Components/IconListItem.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import Press from '$lib/Blocks/Press.svelte';

  export let team;
  export let pressClippings;

  $theme = {
    footer: 'light',
    header: 'dark',
  };

  onMount(() => {
    //window.scrollTo(0,0)
  })
</script>

<svelte:head>
  <title>About | Climate Policy Radar</title>
  <meta name="description" content="We are an open data climate startup" />
</svelte:head>

<Banner theme="dark" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>About</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading">We are an open data <br> climate startup</h1>
</Banner>

<!-- <StickyNav>
  <a href="#mission">Our Mission</a>
  <a href="#values">Values</a>
  <a href="#team">Team</a>
</StickyNav> -->

<Spacer size="2xl" />

<section id="mission">
  <!-- <SingleColumn>
    <p class="u-type-body-xxl u-text-center u-gradient-text--dark-to-blue">
      We are on a mission to map and analyse the climate policy landscape globally and drive the
      transition to a low carbon, resilient world.
    </p>
  </SingleColumn> -->

  <Wrapper>

    <Wrapper type="content" align="left">
      <h2 class="u-type-body-xxl">We are on a mission to map the <br>global climate policy landscape</h2>
    </Wrapper>

    <Spacer size="md" />

    <IconList orientation="horizontal">
      <IconListItem orientation="vertical">
        <Icon name="machine" />
        <p class="u-type-body-md">
          Using Machine Learning and Natural Language Processing we are working to radically scale collection and analysis of policy data, equipping decision makers with rich, high quality, insight-enabling data.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="mission" />
        <p class="u-type-body-md">
          We are founded and led by a team of experienced of international climate policy and machine learning and natural language processing experts. Climate Policy Radar spins off ten years of experience leading the Climate Change Laws of the World project at the London School of Economics, and harnesses cutting edge technology to support ambitious climate action. 
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="research" />
        <p class="u-type-body-md">
          Operating at the intersection of technology, AI, policy, social justice and high impact, we are a proud member of the movement to harness digital technologies and AI for the planet. All of our code is open source and open access. We seek collaborations with those who share the vision of meeting the Sustainable Development Goals through open digital public goods, which are necessary conditions for an equitable, sustainable and resilient society.
        </p>
      </IconListItem>
    </IconList>
  </Wrapper>
</section>

<Spacer size="2xl" />

<section class="b-values" id="values">
  <OurValues />
</section>

<Spacer size="lg" />

<section id="team">
  <Team members={team} />
</section>

<Spacer size="lg" />

<section id="media">
  <Wrapper>
    <Heading>
      <h3 class="u-type-body-xxl">In the Media</h3>
    </Heading>
    <Press limit={3} link="/media" {pressClippings} />
  </Wrapper>
</section>