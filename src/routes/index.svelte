<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/latest/posts.json`)
    const { posts } = await res.json()
    const featuredPosts = posts.filter((post) => post.featured).sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    const partnersRes = await fetch(`/data/partners.json`)
    const { partnerList } = await partnersRes.json()

    return {
      props: { featuredPosts, partnerList },
    }
  }
</script>

<script>
  import { modalStore, theme } from '$lib/stores/theme'
  import About from '$lib/Blocks/About.svelte'
  import Banner from '$lib/Blocks/Banner.svelte'
  import Button from '$lib/Components/Button.svelte'
  import How from '$lib/Blocks/How.svelte'
  import LatestPosts from '$lib/Blocks/LatestPosts.svelte'
  import Offering from '$lib/Blocks/Offering.svelte'
  import Partners from '$lib/Blocks/Partners.svelte'
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import Why from '$lib/Blocks/Why.svelte'
  import AI from '$lib/Blocks/AI.svelte'
  import Video from '$lib/Blocks/Video.svelte'
  import MetaTags from '$lib/Components/MetaTags.svelte'
  import Tool from '$lib/Blocks/Tool.svelte'
  import Policymaking from '$lib/Blocks/Policymaking.svelte'

  $theme = {
    footer: 'light',
    header: 'dark',
  }

  export let featuredPosts
  export let partnerList
  const title = 'Climate Policy Radar | AI for climate law and policy research'
  const excerpt =
    'Use Climate Policy Radar’s data science and AI-powered platform to search and explore thousands of climate change laws, policies and legal cases worldwide'
  const image = 'https://climatepolicyradar.org/images/logo.jpg'
  const path = '/'
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner size="lg" theme="dark" contentType="full-width">
  <h1 slot="heading">Building the evidence base for evidence-based decision-making</h1>
  <p slot="subheading">
    We build tools that open up the messy black box of climate laws, policies and case law globally, helping
    decision-makers design more effective climate change strategies.
    <br />
    <a class="anchor--banner" href="https://app.climatepolicyradar.org" target="_blank">Use our tools</a> to quickly and
    easily find information on climate laws and policies.
  </p>
  <div class="home-cta">
    <Button color="blue" size="lg" href="https://app.climatepolicyradar.org" arrow>Start exploring</Button>
  </div>
</Banner>

<Spacer size="lg" />

<Tool />

<Spacer size="md" />

<SingleColumn>
  <h2 class="u-type-body-xxxl u-text-center u-gradient-text--dark-to-blue">
    We are on a mission to map and analyse the global climate law and policy landscape to help drive the transition to a
    low-carbon, resilient and just world
  </h2>
</SingleColumn>

<Spacer size="md" />

<Policymaking />

<Spacer size="lg" />

<AI />

<Spacer size="lg" />

<About />

<Partners {partnerList} />

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

  .anchor--banner {
    color: var(--color-white);
  }
</style>
