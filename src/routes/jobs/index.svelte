<script>
  import {getContext, onMount} from 'svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Button from '$lib/Components/Button.svelte';
  import CardCompact from '$lib/Components/CardCompact.svelte';
  import CardsList from '$lib/Components/CardsList.svelte';
  import Icon from '$lib/Components/Icon.svelte';
  import IconList from '$lib/Components/IconList.svelte';
  import IconListItem from '$lib/Components/IconListItem.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import TwoColumn from '$lib/Components/TwoColumn.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import { theme } from '$lib/stores/theme';

  $theme = {
    footer: 'light',
    header: 'dark',
  };
  const jobs = getContext('jobs');

</script>

<svelte:head>
  <title>Jobs | Climate Policy Radar</title>
  <meta name="description" content="Join us to build tools that help inform better decisions" />
</svelte:head>

<Banner theme="dark" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Jobs</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading">Join us to build tools that help inform better decisions</h1>
</Banner>


<Spacer size="2xl" />

<section id="working-here">
  <Wrapper>
    <h2 class="u-type-body-xxl">Working at<br /> Climate Policy Radar</h2>
    <Spacer size="md" />

    <IconList orientation="horizontal">
      <IconListItem orientation="vertical">
        <Icon name="impact" />
        <h3 class="u-type-body-xl">High impact</h3>
        <p class="u-type-body-md">
          A high impact and exciting mission at the intersection of technology, AI and policy. A
          chance to co-create and help us shape our journey ‒ we are building our team and vision, so your input and impact will be significant.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="mission" />
        <h3 class="u-type-body-xl">Larger community</h3>
        <p class="u-type-body-md">
          Access to a larger community of climate and data enthusiasts ‒ we are a member of Subak, an
          accelerator and cooperative for climate non-profit startups, and enjoy a joint programme of
          learning, collaborating and socialising.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="wellbeing" />
        <h3 class="u-type-body-xl">Commitment to your wellbeing</h3>
        <p class="u-type-body-md">
          A deep commitment to our employees’ mental and physical wellbeing. Among others we offer
          unlimited leave, flexible work hours, a generous wellbeing allowance, short Fridays, and
          great coffee. Hybrid work arrangement: stunning work space overlooking Westminster Bridge,
          combined with remote working.
        </p>
      </IconListItem>
    </IconList>

    <div class="b-working-here__cta">
      <Button href="/about/#values" color="grey" size="lg">
        We deeply care about our values. <span>See them here.</span>  
      </Button>
    </div>

  </Wrapper>
</section>

<Spacer size="2xl" />

<section id="open-positions" class="b-open-postion">
  <TwoColumn>
    <div class="b-open-postion__header" slot="col-1">
      <h2 class="u-type-body-xxl">Open Positions</h2>
    </div>
    <svelte:fragment slot="col-2">
      <CardsList >
        {#each jobs as job}
          <CardCompact title={job.title} excerpt={job.excerpt} link={`/jobs/${job.slug}`} />
        {/each}
      </CardsList>
      <p class="b-open-postion__cta u-type-body-lg">
        If you want to work with us, but there isn't a role that isn't quite right, <a href="/contact">drop us a line</a>.
        We also welcome collaboration on our open source projects.
      </p>
    </svelte:fragment>
  </TwoColumn>
</section>

<Spacer size="2xl" />

<style>
  :global(.b-open-postion .c-two-column) {
    padding-top: 0;
  }

  .b-open-postion {
    padding-top: 32px;
  }

  @media only screen and (min-width: 720px) {
    .b-open-postion {
      padding-top: 64px;
    }
  }

  .b-working-here__cta {
    display: flex;
    justify-content: center;
    margin-top: 64px;
  }

  .b-open-postion__header {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  

  .b-open-postion__cta {
    padding-top: 90px;
  }

  @media only screen and (min-width: 720px) {
    .b-open-postion__cta {
      position: absolute;
      bottom: 0;
      left: 0;
      max-width: 28ch;
      padding-top: 0;
    }
  }

  .b-working-here__cta span {
    text-decoration: underline;
    margin-left: 4px;
  }

  .b-open-postion__cta a {
    color: var(--color-indigo);
    text-decoration: underline;
  } 

</style>
