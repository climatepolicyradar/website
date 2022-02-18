<script>
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'dark',
    header: 'dark',
  };
</script>

<svelte:head>
  <MetaTags
    title="Terms &amp; Conditions | Climate Policy Radar"
    excerpt="Terms and conditions"
    image="https://climatepolicyradar.org/images/logo.svg"
  />
</svelte:head>

<Wrapper type="content">
  <h1>Terms &amp; Conditions</h1>
</Wrapper>
