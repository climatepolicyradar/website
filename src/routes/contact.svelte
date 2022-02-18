<script context="module">
  export const prerender = true;
</script>

<script>
  import { theme } from '$lib/stores/theme';
  import { Body } from 'svelte-body';
  import Pill from '$lib/Components/Pill.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import ContactForm from '$lib/Blocks/ContactForm.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'dark',
    header: 'dark',
  };
</script>

<svelte:head>
  <MetaTags
    title={`Contact | Climate Policy Radar"`}
    excerpt="Get in touch with not-for profit data-led climate startup, Climate Policy Radar"
    image="https://climatepolicyradar.org/images/logo.svg"
  />
</svelte:head>

<Body class="has-gradient--dark-blue" />

<Spacer size="2xl" />

<Wrapper>
  <Pill color="blue" upper>Contact</Pill>
  <Spacer size="sm" />
  <ContactForm />
</Wrapper>
