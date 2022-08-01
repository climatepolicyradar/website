<script>
  import { GTM } from '$lib/stores/google';
  import { page } from '$app/stores';
  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', GTM, {
        page_path: $page.path,
      });
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-ZD1WWE49TL">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date());
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
    });
    gtag('config', 'G-ZD1WWE49TL');
  </script>
</svelte:head>
