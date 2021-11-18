<script>
  import { mobileMenuOpen, screenSize } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  const matches = (query) => {
    return window.matchMedia(query).matches;
  };

  const handleResize = () => {
    // close mobile menu on resize
    $mobileMenuOpen = false;

    // Check device width
    $screenSize = {
      sm: matches('(max-width: 767px)'),
      md: matches('(min-width: 768px) and (max-width: 1023px)'),
      lg: matches('(min-width: 1024px)'),
      // active: getActiveScreen(),
    };
  };

  onMount(() => {
    handleResize();
  });
</script>

<svelte:window on:resize={handleResize} />
