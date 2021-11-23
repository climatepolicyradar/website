<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  import BlogShare from '$lib/Components/BlogShare.svelte';
  import Button from '$lib/Components/Button.svelte';
  import CardsList from '$lib/Components/CardsList.svelte';
  import CardSplit from '$lib/Components/CardSplit.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import PostContent from '$lib/Blocks/PostContent.svelte';
  import PostMeta from '$lib/Components/PostMeta.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  export let title;
  export let date;
  export let author;
  export let excerpt;
  export let topics = [];

  $theme = {
    footer: 'light',
    header: 'light',
  };

  let relatedPosts = [];
  let relatedPostsLimit = 3;

  async function getLatestPosts() {
    const res = await fetch(`/latest/posts.json`);
    const { posts } = await res.json();
    return posts;
  }
  async function getTeam() {
    let response = await fetch("../data/about.json");
    let aboutInfo = await response.json();
    return aboutInfo;
  }
  const promise = getTeam();

  onMount(() => {
    getLatestPosts().then((posts) => {
      relatedPosts = posts.filter((post) => post.title !== title);
    });
  });
</script>

<svelte:head>
  <title>{title} | Climate Policy Radar</title>
  <meta name="description" content={excerpt} />
</svelte:head>

<section class="b-content">
  <Spacer size="2xl" />
  <Wrapper type="content-wide">
    {#each topics as topic}
      <Pill color="white">{topic}</Pill>
    {/each}

    <Spacer size="xs" />
    <h1>{title}</h1>
    {#await promise}
      <p>Loading...</p>
    {:then aboutInfo}
      <PostMeta {author} {date} team={aboutInfo.team} />
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
    
    <Spacer size="md" />

    <div class="b-content__inner">
      <div class="b-content__body">
        <PostContent>
          <slot />
        </PostContent>
      </div>
      <div class="b-content__cta">
        <BlogShare />
      </div>
    </div>
  </Wrapper>
</section>

<Spacer size="lg" />

<Wrapper type="content-wide">
  <Heading>
    <h3>More from the blog</h3>
    <Button href="/latest/" type="cta">View all</Button>
  </Heading>

  <CardsList>
    {#if relatedPosts}
      {#each relatedPosts as post, i}
        {#if relatedPostsLimit > i}
          <CardSplit
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            image={post.thumb}
            slug={post.slug}
          />
        {/if}
      {/each}
    {/if}
  </CardsList>
</Wrapper>

<style>
  .b-content {
    background-image: url('/images/arc-bg-light.png');
    background-position: top left;
    background-repeat: no-repeat;
  }

  .b-content__inner {
    display: flex;
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 1024px) {
    .b-content__inner {
      flex-direction: row;
    }
  }

  .b-content__cta {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 24px;
  }

  @media only screen and (min-width: 1024px) {
    .b-content__cta {
      flex-direction: column;
      flex-shrink: 0;
      position: relative;
      margin-left: 100px;
      margin-top: 0;
    }
  }
</style>
