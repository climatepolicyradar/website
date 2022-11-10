<script>
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte';
  import ClimateData from '$lib/Blocks/ClimateData.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';
  import Button from '$lib/Components/Button.svelte';

  $theme = {
    footer: 'light',
    header: 'dark',
  };
  const title = 'What We Do | Climate Policy Radar';
  const excerpt = 'Data science and AI for researching climate change policies and laws';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = 'what-we-do';
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="dark" size="sm">
  <h1 slot="heading">Data science and AI for researching climate change policies and laws</h1>
  <p slot="subheading">
    Using leading data science methods and artificial intelligence, we’re building the world’s largest open knowledge base for climate law and policy. Our goal is to provide useful and accessible big data and insights to inform climate action.
  </p>
</Banner>

<Spacer size="lg" />

<section id="offering">
  <Wrapper>
    <h2 class="u-type-body-xxxl u-text-center u-gradient-text--dark-to-blue">
      Our offering: open data and tools for climate policy
    </h2>
    <p class="u-type-body-xxl u-text-center">
      Our open, cost-free and AI-powered tool is the first of its kind. It allows you to quickly and easily search through the complete text of thousands of climate change interventions, laws, policies and litigation cases from every country. Use our data to identify climate policy gaps, opportunities for action and examples of best practice.
    </p>
    <div class="search__button">
      <Button
      color="blue"
      size="lg"
      href="https://app.climatepolicyradar.org"
      arrow>Start your search</Button>
    </div>
  </Wrapper>
</section>

<Spacer size="lg" />

<section id="data">
  <ClimateData />
</section>

<section id="product">
  <Wrapper>
    <Wrapper type="content" align="left">
      <h2 class="u-type-body-xxl">Our Product</h2>
    </Wrapper>

    <Spacer size="md" />
  </Wrapper>
</section>

<section id="tech">
  <Wrapper>
    <Wrapper type="content" align="left">
      <h2 class="u-type-body-xxl">Our Technology</h2>
    </Wrapper>

    <Spacer size="md" />
  </Wrapper>
</section>

<section id="data">
  <Wrapper>
    <Wrapper type="content" align="left">
      <h2 class="u-type-body-xxl">Our Data</h2>
    </Wrapper>

    <Spacer size="md" />
  </Wrapper>
</section>

<style>
  .search__button {
    text-align: center;
  }
</style>
