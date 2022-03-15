<script lang="ts" context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/data/team.json');
    const data = await res.json();
    const { team } = data;

    const pressRes = await fetch('/data/press.json');
    const pressData = await pressRes.json();
    const { pressClippings } = pressData;

    const partnersRes = await fetch(`/data/partners.json`);
    const { partnerList } = await partnersRes.json();

    return { props: { team, pressClippings, partnerList } };
  };
</script>

<script>
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Team from '$lib/Blocks/Team.svelte';
  import OurValues from '$lib/Blocks/OurValues.svelte';
  import Icon from '$lib/Components/Icon.svelte';
  import IconList from '$lib/Components/IconList.svelte';
  import IconListItem from '$lib/Components/IconListItem.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import Press from '$lib/Blocks/Press.svelte';
  import Partners from '$lib/Blocks/Partners.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  export let team;
  export let pressClippings;
  export let partnerList;

  let sortedTeam;

  $theme = {
    footer: 'light',
    header: 'dark',
  };

  const sortAdvisory = () => {
    const advisory = team.filter((member) => member.group === 'Advisory');
    const restOfTeam = team.filter((member) => member.group !== 'Advisory');
    const sortedAdvisory = advisory.sort(function (a, b) {
      const na = a.name.split(' ');
      const nameA = na[na.length - 1];
      const nb = b.name.split(' ');
      const nameB = nb[nb.length - 1];
      if (nameA.toLowerCase() < nameB.toLowerCase()) {
        return -1;
      }
      if (nameA.toLowerCase() > nameB.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    return [...restOfTeam, ...sortedAdvisory];
  };

  $: sortedTeam = team ? sortAdvisory() : [];
  const title = 'About | Climate Policy Radar';
  const excerpt = 'We are an open data climate startup';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = '/about';
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="dark" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>About</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading">We are an open data <br /> climate startup</h1>
</Banner>

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
      <h2 class="u-type-body-xxl">
        We are on a mission to map the <br />global climate policy landscape
      </h2>
    </Wrapper>

    <Spacer size="md" />

    <IconList orientation="horizontal">
      <IconListItem orientation="vertical">
        <Icon name="machine" />
        <p class="u-type-body-md">
          Using Machine Learning and Natural Language Processing we are working
          to radically scale collection and analysis of policy data, equipping
          decision makers with rich, high quality, insight-enabling data.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="mission" />
        <p class="u-type-body-md">
          We are founded and led by a team of experienced of international
          climate policy and machine learning and natural language processing
          experts. Climate Policy Radar spins off ten years of experience
          leading the Climate Change Laws of the World project at the London
          School of Economics, and harnesses cutting edge technology to support
          ambitious climate action.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="research" />
        <p class="u-type-body-md">
          Operating at the intersection of technology, AI, policy, social
          justice and high impact, we are a proud member of the movement to
          harness digital technologies and AI for the planet. All of our code is
          open source and open access. We seek collaborations with those who
          share the vision of meeting the Sustainable Development Goals through
          open digital public goods, which are necessary conditions for an
          equitable, sustainable and resilient society.
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
  <Team members={sortedTeam} />
</section>

<Spacer size="lg" />

<section>
  <Partners {partnerList} />
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
