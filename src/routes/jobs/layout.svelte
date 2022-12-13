<script>
  import PostContent from '$lib/Blocks/PostContent.svelte';
  import Button from '$lib/Components/Button.svelte';
  import CardCompact from '$lib/Components/CardCompact.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import { theme } from '$lib/stores/theme';

  $theme = {
    footer: 'light',
    header: 'light',
  };

  export let title;
  export let applyLink;
  export let topics = [];
  const metaTitle = `${title} | Jobs | Climate Policy Radar`;
  const excerpt = 'Join us to build tools that help inform better decisions';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = `/${title}`;
</script>

<MetaTags title={metaTitle} {excerpt} {image} {path} />

<Spacer size="2xl" />

<Wrapper type="content-wide">
  <Pill color="white">Jobs</Pill>
  <Spacer size="xs" />
  <h1>{title}</h1>
  <Spacer size="md" />

  <div class="b-content__inner">
    <div class="b-content__body">
      <PostContent>
        <slot />
      </PostContent>
    </div>
    <div class="b-content__cta">
      <div class="c-jobs__cta">
        <p class="c-jobs__cta-copy">
          To apply for this role, please send us your CV and tell us why you
          would like to work with us.
        </p>
        <Button
          type="cta"
          color="white"
          href="mailto:jobs@climatepolicyradar.org?subject={title}"
          >Apply now</Button
        >
      </div>
      <a
        href="/jobs#open-positions"
        class="b-content__cta-link"
        sveltekit:noscroll>View all other jobs</a
      >
    </div>
  </div>
</Wrapper>

<style>
  @media only screen and (min-width: 1024px) {
    .b-content__inner {
      display: flex;
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
      position: relative;
      margin-left: 40px;
      margin-top: 0;
    }
  }

  .c-jobs__cta {
    background-color: var(--color-indigo-600);
    border-radius: 30px;
    padding: 36px;
    color: var(--color-grey);
  }

  @media only screen and (min-width: 720px) {
    .c-jobs__cta-copy {
      margin-bottom: 64px;
    }
  }

  .b-content__cta-link {
    color: var(--color-indigo-600);
    text-decoration: underline;
    margin-bottom: 80px;
  }

  @media only screen and (min-width: 1024px) {
    .b-content__cta-link {
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: 0;
    }
  }

  @media only screen and (min-width: 720px) {
    .c-jobs__cta {
      min-width: 340px;
      position: sticky;
      top: 150px;
      right: 0;
    }
  }
</style>
