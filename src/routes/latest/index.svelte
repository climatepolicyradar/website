<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/latest/posts.json`)
    const { posts } = await res.json()
    posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

    const pressRes = await fetch('/data/press.json')
    const pressData = await pressRes.json()
    const { pressClippings } = pressData

    return {
      props: { posts, pressClippings },
    }
  }
</script>

<script>
  import Banner from '$lib/Blocks/Banner.svelte'
  import CardsList from '$lib/Components/CardsList.svelte'
  import CardSplit from '$lib/Components/CardSplit.svelte'
  import MetaTags from '$lib/Components/MetaTags.svelte'
  import Pill from '$lib/Components/Pill.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Heading from '$lib/Components/Heading.svelte'
  import Press from '$lib/Blocks/Press.svelte'
  import { theme } from '$lib/stores/theme'

  $theme = {
    footer: 'light',
    header: 'light',
  }

  export let pressClippings

  export let posts
  const title = 'Latest | Climate Policy Radar'
  const excerpt = 'All the latest from our journey to map and analyse the climate policy landscape'
  const image = 'https://climatepolicyradar.org/images/logo.png'
  const path = '/latest'
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="light" size="xs">
  <!-- <svelte:fragment slot="pill">
    <Pill color="blue" upper>Latest</Pill>
    <Spacer size="sm" />
  </svelte:fragment> -->

  <h1 slot="heading" class="u-gradient-text--dark-to-blue">News and views from Climate Policy Radar</h1>
</Banner>

<Wrapper>
  <CardsList>
    {#each posts as post}
      <CardSplit title={post.title} date={post.date} image={post.thumb} excerpt={post.excerpt} slug={post.slug} />
    {/each}
  </CardsList>
</Wrapper>

<Spacer size="lg" />

<section id="media">
  <Wrapper>
    <Heading>
      <h3 class="u-type-body-xxl">In the Media</h3>
    </Heading>
    <Press limit={3} link="/media" {pressClippings} />
  </Wrapper>
</section>
