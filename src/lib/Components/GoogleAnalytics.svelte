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
