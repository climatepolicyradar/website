<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/latest/posts.json`);
    const { posts } = await res.json();
    const featuredPosts = posts.filter((post) => post.featured).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    const partnersRes = await fetch(`/data/partners.json`);
    const { partnerList } = await partnersRes.json();

    return {
      props: { featuredPosts, partnerList },
    };
  }
</script>

<script>
  import { modalStore, theme } from '$lib/stores/theme';
  import About from '$lib/Blocks/About.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Button from '$lib/Components/Button.svelte';
  import How from '$lib/Blocks/How.svelte';
  import LatestPosts from '$lib/Blocks/LatestPosts.svelte';
  import OpenData from '$lib/Blocks/OpenData.svelte';
  import Partners from '$lib/Blocks/Partners.svelte';
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Why from '$lib/Blocks/Why.svelte';
  import Video from '$lib/Blocks/Video.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'light',
    header: 'dark',
  };

  export let featuredPosts;
  export let partnerList;
  const title =
    'Climate Policy Radar | Building the evidence base for evidence-based policymaking';
  const excerpt = 'Building the evidence base for evidence-based policymaking';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = '/';
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner size="lg" theme="dark">
  <h1 slot="heading">
    Building the evidence base for evidence-based policymaking
  </h1>
  <p slot="subheading">
    Giving policymakers, researchers and civil society tools for better policy
    design and accountability.
  </p>
  <div class="home-cta">
    <Button
      color="blue"
      size="lg"
      href="https://app.climatepolicyradar.org"
      arrow>Log in</Button
    >
    <Button color="white" size="lg" href="https://app.climatepolicyradar.org/auth/sign-up" arrow
      >Sign up</Button
    >
  </div>
</Banner>

<SingleColumn>
  <p class="u-type-body-xxxl u-text-center u-gradient-text--dark-to-blue">
    We are on a mission to map and analyse the climate policy landscape globally
    and drive the transition to a low carbon, resilient world.
  </p>
</SingleColumn>

<!-- <Video />

<Spacer size="lg" /> -->

<Why />

<Spacer size="lg" />

<How theme="light" />

<Spacer size="lg" />

<About />

<Partners {partnerList} />

<Spacer size="md" />

<OpenData />

<Spacer size="md" />

<LatestPosts posts={featuredPosts} limit="1" cardTheme="dark" />

<style>
  :global(.home-cta .c-button) {
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    :global(.home-cta .c-button) {
      margin-top: 0;
      margin-right: 1rem;
    }
  }
</style>
