<script>
  import Banner from '$lib/Blocks/Banner.svelte';
  import Pill from '$lib/Components/Pill.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';
  import { theme } from '$lib/stores/theme';

  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<Banner theme="light" size="sm">
  <svelte:fragment slot="pill">
    <Pill color="blue" upper>Maintenance</Pill>
    <Spacer size="sm" />
  </svelte:fragment>

  <h1 slot="heading" class="u-gradient-text--dark-to-blue">
    Down for maintenance
  </h1>
  <p>Our app is currently down for maintenance. We will be back soon.</p>
  <p><a href="/">Visit our homepage.</a></p>
</Banner>

<style>
  p {
    font-size: 1.2em;
  }
  a {
    color: var(--color-indigo);
    text-decoration: underline;
  }
</style>
