<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/latest/posts.json`);
    const { posts } = await res.json();
    posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    return {
      props: { posts },
    };
  }
</script>

<script>
  import Banner from '$lib/Blocks/Banner.svelte';
  import CardsList from '$lib/Components/CardsList.svelte';
  import CardSplit from '$lib/Components/CardSplit.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import { theme } from '$lib/stores/theme';

  $theme = {
    footer: 'light',
    header: 'light',
  };

  export let posts;

</script>

<svelte:head>
  <title>Latest | Climate Policy Radar</title>
</svelte:head>

<Banner theme="light" size="xs">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Latest</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading" class="u-gradient-text--dark-to-blue">
    All the latest from our journey to map and analyse the climate policy landscape
  </h1>
</Banner>

<Wrapper>
  <CardsList>
    {#each posts as post}
      <CardSplit
        title={post.title}
        date={post.date}
        image={post.thumb}
        excerpt={post.excerpt}
        slug={post.slug} />
    {/each}
  </CardsList>
</Wrapper>
