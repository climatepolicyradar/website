<script lang="ts" context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/data/press.json');
    const data = await res.json();
    const { pressClippings } = data;
    return { props: { pressClippings } };
  };
</script>

<script>
  import { theme } from '$lib/stores/theme';
  import { Body } from 'svelte-body';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Press from '$lib/Blocks/Press.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  export let pressClippings;
  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<svelte:head>
  <title>Media | Climate Policy Radar</title>
  <meta name="description" content="Climate Policy Radar in the Press" />
</svelte:head>

<Body class="has-gradient--blue-to-white" />

<Banner theme="none" size="xs">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Media</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading" class="u-gradient-text--dark-to-blue">In the Media</h1>
</Banner>

<Wrapper>
  <Press limit={99} {pressClippings} />
</Wrapper>

<style>
</style>
