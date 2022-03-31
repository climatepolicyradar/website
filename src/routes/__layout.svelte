<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/jobs/jobs.json`);
    const { jobs } = await res.json();
    const teamRes = await fetch(`/data/team.json`);
    const { team } = await teamRes.json();
    return {
      props: { jobs, team },
    };
  }
</script>

<script>
  import { onMount, setContext, afterUpdate } from 'svelte';
  import { browser } from '$app/env';
  import { page, navigating } from '$app/stores';
  import Header from '$lib/Components/Header.svelte';
  import Footer from '$lib/Components/Footer.svelte';
  import RequestModal from '$lib/Blocks/RequestModal.svelte';
  import PreloadingIndicator from '$lib/Components/PreloadingIndicator.svelte';
  import { modalStore, mobileMenuOpen } from '$lib/stores/theme';
  import '../global.css';
  import MediaQuery from '$lib/Components/MediaQuery.svelte';
  import GoogleAnalytics from '$lib/Components/GoogleAnalytics.svelte';

  $: active = $page.path.split('/')[1];

  // When change url, close the nav
  $: $navigating, ($mobileMenuOpen = false);

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      modalStore.closeAll();
      $mobileMenuOpen = false;
    }
  };

  export let jobs;
  export let team;
  setContext('jobs', jobs);
  setContext('team', team);

  onMount(() => {
    history.pushState = new Proxy(history.pushState, {
      apply(target, thisArg, argumentsList) {
        Reflect.apply(target, thisArg, argumentsList);
        window.scrollTo(0, 0);
      },
    });
  });
</script>

<svelte:body on:keydown={handleEscapeKey} />

<MediaQuery />
<GoogleAnalytics />

<a class="u-sr-only u-sr-only-focusable" href="#main"> Skip to content </a>

<Header {active} {jobs} />

<main id="main">
  {#if $navigating}
    <PreloadingIndicator />
  {/if}

  <slot />

  <Footer {active} />
  <RequestModal open={$modalStore.cta} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
