<script context="module">
  export const prerender = true;
</script>

<script>
  import { theme } from '$lib/stores/theme';
  import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';
  import RequestFormShort from '$lib/Blocks/RequestFormShort.svelte';

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
  <p class="u-type-body-lg">
    To request access to our law and policy search application, please leave
    your details below, and we will be in touch.
  </p>
</Banner>

<Wrapper>
  <RequestFormShort />
</Wrapper>
