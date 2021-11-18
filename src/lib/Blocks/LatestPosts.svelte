<script>
  import Button from '$lib/Components/Button.svelte';
  import CardsList from '$lib/Components/CardsList.svelte';
  import CardSplit from '$lib/Components/CardSplit.svelte';
  import Heading from '$lib/Components/Heading.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  export let posts = [];
  export let limit = 10;
  export let cardTheme = 'light';
</script>

<div class="b-latest-posts">
  <Wrapper>
    <Heading>
      <h3 class="u-type-body-xxl">Latest</h3>
      <Button color="grey" href="/latest" type="no-cta">View all</Button>
    </Heading>
    <CardsList>
      {#each posts as post, i}
        {#if limit >= i + 1}
          <CardSplit
            theme={cardTheme}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            image={post.thumb}
            slug={post.slug}
          />
        {/if}
      {/each}
    </CardsList>
  </Wrapper>
</div>

<style>
  :global(.b-latest-posts) {
    position: relative;
    overflow: hidden;
  }

  :global(.b-latest-posts::before) {
    content: "";
    width: 2000px;
    height: 2000px;
    position: absolute;
    top: 0;
    left: 35%;
    background-image: url('/images/arc-bg-light.png');
    z-index: -1;
  }
</style>