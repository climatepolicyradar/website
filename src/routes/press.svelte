<script>
  import { theme } from '$lib/stores/theme';
  import { Body } from 'svelte-body';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Press from '$lib/Blocks/Press.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<svelte:head>
  <title>Press | Climate Policy Radar</title>
  <meta name="description" content="Climate Policy Radar in the Press" />
</svelte:head>


<Body class="has-gradient--blue-to-white" />

<Banner theme="none" size="xs">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Press &amp; Media</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading" class="u-gradient-text--dark-to-blue">
    In the Press
  </h1>
</Banner>

<Wrapper>
  <Press limit="9" showMore />
</Wrapper>

<style>

</style>