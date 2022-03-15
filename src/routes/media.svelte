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
  import MetaTags from '$lib/Components/MetaTags.svelte';

  export let pressClippings;
  $theme = {
    footer: 'light',
    header: 'light',
  };
  const title = 'Media | Climate Policy Radar';
  const excerpt = 'Climate Policy Radar in the Media';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = '/media';
</script>

<MetaTags {title} {excerpt} {image} {path} />

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
