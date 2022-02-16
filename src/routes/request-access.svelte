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

  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<svelte:head>
  <title>Request Early Access | Climate Policy Radar</title>
</svelte:head>

<Banner theme="light" size="xxs" contentType="form">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Request Early Access</Pill>
    <Spacer size="sm" />
  </svelte:fragment>
  <p class="u-type-body-lg">
    We are working towards our first limited product release to a small group of
    users in March 2022. If you would like to have early access, please leave
    your details below, and we will be in touch.
  </p>
</Banner>

<Wrapper>
  <RequestForm />
</Wrapper>
