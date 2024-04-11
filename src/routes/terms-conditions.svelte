<script>
  import { theme } from '$lib/stores/theme';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'dark',
    header: 'dark',
  };
  const title = 'Terms &amp; Conditions | Climate Policy Radar';
  const excerpt = 'Terms and conditions';
  const image = 'https://climatepolicyradar.org/images/logo.jpg';
  const path = '/terms-conditions';
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Wrapper type="content">
  <h1>Terms &amp; Conditions</h1>
</Wrapper>
