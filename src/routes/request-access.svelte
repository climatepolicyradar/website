<script context="module">
  export const prerender = true;
</script>

<script>
  import { theme } from '$lib/stores/theme';
  import RequestForm from '$lib/Blocks/RequestForm.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'light',
    header: 'light',
  };
  const title = 'Request Early Access | Climate Policy Radar';
  const excerpt = 'Request early access';
  const image = 'https://climatepolicyradar.org/images/logo.png';
  const path = '/request-access';
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="light" size="xxs" contentType="form">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Request Early Access</Pill>
    <Spacer size="sm" />
  </svelte:fragment>
</Banner>

<Wrapper>
  <RequestForm />
</Wrapper>
