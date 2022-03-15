<script>
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'light',
    header: 'dark',
  };
  const title = 'What We Do | Climate Policy Radar';
  const excerpt = 'What We Do';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = 'what-we-do';
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="dark" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>What We Do</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading">We do lots of <br /> great things</h1>
</Banner>

<Spacer size="2xl" />

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
</style>
