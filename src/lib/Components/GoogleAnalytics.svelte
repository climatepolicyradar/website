<script>
  import { page } from '$app/stores';
  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GTM-TBB5CMS', {
        page_path: $page.path,
      });
    }
  }
</script>
