<script context="module">
  import { XMLParser } from 'fast-xml-parser'
  const parser = new XMLParser()

  export async function load({ fetch }) {
    let jobs = []
    const res = await fetch('https://climate-policy-radar.jobs.personio.com/xml')
    const text = await res.text()
    // format the personio data into a jobs array
    // due to the format of the XML a single job will be an object and multiple jobs will be an array
    let json = null
    try {
      json = parser.parse(text, { trim: true })
    } catch (e) {
      console.error(e)
    }
    if (json) {
      if (json['workzag-jobs']) {
        if (json['workzag-jobs'].position) {
          const personioJobs = json['workzag-jobs'].position
          if (Array.isArray(personioJobs)) {
            jobs = personioJobs.map((job) => ({
              id: job.id,
              title: job.name,
            }))
          } else {
            jobs.push({
              id: personioJobs.id,
              title: personioJobs.name,
            })
          }
        }
      }
    }

    return {
      props: { jobs },
    }
  }
</script>

<script>
  import { onMount, setContext, afterUpdate } from 'svelte'
  import { browser } from '$app/env'
  import { page, navigating } from '$app/stores'
  import Header from '$lib/Components/Header.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import PreloadingIndicator from '$lib/Components/PreloadingIndicator.svelte'
  import { modalStore, mobileMenuOpen } from '$lib/stores/theme'
  import '../global.css'
  import MediaQuery from '$lib/Components/MediaQuery.svelte'
  import CookieConsent from '$lib/Components/CookieConsent.svelte'
  import GoogleAnalytics from '$lib/Components/GoogleAnalytics.svelte'

  $: active = $page.path.split('/')[1]

  // When change url, close the nav
  $: $navigating, ($mobileMenuOpen = false)

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      modalStore.closeAll()
      $mobileMenuOpen = false
    }
  }

  export let jobs
  setContext('jobs', jobs)

  onMount(() => {
    history.pushState = new Proxy(history.pushState, {
      apply(target, thisArg, argumentsList) {
        Reflect.apply(target, thisArg, argumentsList)
        window.scrollTo(0, 0)
      },
    })
  })
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
  <CookieConsent />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
