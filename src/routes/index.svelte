<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/latest/posts.json`);
    const { posts } = await res.json();
    const featuredPosts = posts.filter(post => post.featured);
    const partnersRes = await fetch(`/data/partners.json`)
    const { partnerList } = await partnersRes.json();

    return {
      props: { featuredPosts, partnerList },
    };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { modalStore, theme } from '$lib/stores/theme';
  import About from '$lib/Blocks/About.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Button from '$lib/Components/Button.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import How from '$lib/Blocks/How.svelte';
  import LatestPosts from '$lib/Blocks/LatestPosts.svelte';
  import OpenData from '$lib/Blocks/OpenData.svelte';
  import Partners from '$lib/Blocks/Partners.svelte';
  import Press from '$lib/Blocks/Press.svelte';
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Why from '$lib/Blocks/Why.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  $theme = {
    footer: 'light',
    header: 'dark',
  };

  export let featuredPosts;
  export let partnerList;
  onMount(() => {
    window.scrollTo(0,0)
  })
</script>

<svelte:head>
  <title>Climate Policy Radar | Building the evidence base for evidence-based policymaking</title>
  <meta name="description" content="Building the evidence base for evidence-based policymaking" />
</svelte:head>

<Banner size="lg" theme="dark">
  <h1 slot="heading">Building the evidence base for evidence-based policymaking</h1>
  <p slot="subheading">
    Giving policymakers, researchers and civil society tools for better policy design and
    accountability.
  </p>
  <Button color="white" size="lg" action={() => ($modalStore.cta = true)} arrow>
    Request early access
  </Button>
</Banner>

<SingleColumn>
  <p class="u-type-body-xxl u-text-center u-gradient-text--dark-to-blue">
    We are on a mission to map and analyse the climate policy landscape globally and drive the
    transition to a low carbon, resilient world.
  </p>
</SingleColumn>

<Why />

<Spacer size="2xl" />

<How theme="light" />

<Spacer size="2xl" />

<About />

<Partners {partnerList} />

<OpenData />

<Spacer size="lg" />

<LatestPosts posts={featuredPosts} limit="1" cardTheme="dark" />

<Spacer size="sm" />

<Wrapper>
  <Heading>
    <h3>In the press</h3>
  </Heading>
  <Press limit="3" link="/press" />
</Wrapper>

<Spacer size="lg" />
