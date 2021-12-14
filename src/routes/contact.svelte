<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import { Body } from 'svelte-body';
  import Pill from '$lib/Components/Pill.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import ContactForm from '$lib/Blocks/ContactForm.svelte';

  $theme = {
    footer: 'dark',
    header: 'dark',
  };
  onMount(() => {
    // window.scrollTo(0,0)
  })
</script>

<svelte:head>
  <title>Contact | Climate Policy Radar</title>
  <meta name="description" content="Get in touch with not-for profit data-led climate startup, Climate Policy Radar" />
</svelte:head>

<Body class="has-gradient--dark-blue" />

<Spacer size="2xl" />

<Wrapper>
  <Pill color="blue" upper>Contact</Pill>
  <Spacer size="sm" />
  <ContactForm />
</Wrapper>
