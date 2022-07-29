<script>
  import { GTM } from '$lib/stores/google';
  import { page } from '$app/stores';
  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', GTM, {
        page_path: $page.path,
      });
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      })
    }
  }
</script>
