<script>
  import { theme } from '$lib/stores/theme'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Banner from '$lib/Blocks/Banner.svelte'
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte'
  import ClimateData from '$lib/Blocks/ClimateData.svelte'
  import DataScience from '$lib/Blocks/DataScience.svelte'
  import Audience from '$lib/Blocks/Audience.svelte'
  import OpenData from '$lib/Blocks/OpenData.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import MetaTags from '$lib/Components/MetaTags.svelte'
  import Button from '$lib/Components/Button.svelte'

  $theme = {
    footer: 'light',
    header: 'dark',
  }
  const title = 'What We Do | Climate Policy Radar'
  const excerpt = 'Data science and AI for researching climate change policies and laws'
  const image = 'https://climatepolicyradar.org/images/logo.png'
  const path = 'what-we-do'
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="dark" size="sm">
  <h1 slot="heading">Data science and AI for researching climate change policies and laws</h1>
  <p slot="subheading">
    Using leading data science methods and artificial intelligence, we’re building the world’s largest open knowledge
    base for climate law and policy. Our goal is to provide useful and accessible big data and insights to inform
    climate action.
  </p>
</Banner>

<Spacer size="lg" />

<section id="offering">
  <Wrapper>
    <h2 class="u-type-body-xxxl u-text-center u-gradient-text--dark-to-blue">
      Our offering: open data and tools for climate policy
    </h2>
    <p class="u-type-body-xxl u-text-center">
      Our open, cost-free and AI-powered tool is the first of its kind. It allows you to quickly and easily search
      through the complete text of thousands of climate change interventions, laws, policies and litigation cases from
      every country. Use our data to identify climate policy gaps, opportunities for action and examples of best
      practice.
    </p>
    <div class="search__button">
      <Button color="blue" size="lg" href="https://app.climatepolicyradar.org" arrow>Start your search</Button>
    </div>
  </Wrapper>
</section>

<Spacer size="lg" />

<section id="data">
  <ClimateData />
</section>

<Spacer size="lg" />

<section class="b-values" id="ai">
  <DataScience />
</section>

<Spacer size="lg" />

<section id="resources">
  <Wrapper>
    <h3 class="u-type-body-xxl u-color-blue">Sharing knowledge and resources</h3>
    <Spacer size="sm" />
    <Wrapper type="content" align="left">
      <p class="u-type-body-xl u-mt-0">
        All our data are free for anyone to access and use <a href="https://app.climatepolicyradar.org/" target="_blank"
          >through our web tool</a
        >. We are also working towards releasing a set of open APIs so that individuals and organisations can use our
        codes in their own programmes of work.
      </p>

      <p class="u-type-body-xl u-mt-0">
        Soon we will launch data visualisations to make it easier to explore and contextualise trends in data, working
        towards analyses and publication of our insights.
      </p>

      <p class="u-type-body-xl u-mt-0">
        We regularly post updates about our progress <a href="/latest">on our blog</a> and
        <a
          href="https://climatepolicyradar.notion.site/Climate-Policy-Radar-s-Public-Changelog-1f028d2141e946adaebb8a420f50029c"
          target="_blank">changelog</a
        >.
      </p>
    </Wrapper>
  </Wrapper>
</section>

<Spacer size="lg" />

<section id="audience">
  <Audience />
</section>

<Spacer size="lg" />

<section id="open-data">
  <OpenData />
</section>

<style>
  .search__button {
    text-align: center;
  }
</style>
