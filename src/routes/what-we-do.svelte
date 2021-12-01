<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  $theme = {
    footer: 'light',
    header: 'dark',
  };
  onMount(() => {
    window.scrollTo(0,0)
  })

</script>

<svelte:head>
  <title>What We Do | Climate Policy Radar</title>
</svelte:head>

<Banner theme="dark" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>What We Do</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading">We do lots of <br> great things</h1>
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