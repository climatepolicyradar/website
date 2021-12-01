<script>
  import { mobileMenuOpen, screenSize } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  let windowWidth;

  const matches = (query) => {
    return window.matchMedia(query).matches;
  };

  const handleResize = () => {
    // Only do this if the width has changed, otherwise return.
    // Height changes on mobile devices when device menus and toolbars
    // come in and out of view and we don't want this to be 
    // triggered in those cases
    if(window.innerWidth === windowWidth) return;

    // close mobile menu on resize
    $mobileMenuOpen = false;

    // Check device width
    $screenSize = {
      sm: matches('(max-width: 767px)'),
      md: matches('(min-width: 768px) and (max-width: 1023px)'),
      lg: matches('(min-width: 1024px)'),
      // active: getActiveScreen(),
    };
    windowWidth = window.innerWidth;
  };

  onMount(() => {
    windowWidth = window.innerWidth;
    handleResize();
  });
</script>

<svelte:window on:resize={handleResize} />
