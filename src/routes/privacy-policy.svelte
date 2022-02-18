<script>
  import { theme } from '$lib/stores/theme';
  import Banner from '$lib/Blocks/Banner.svelte';
  import MetaTags from '$lib/Components/MetaTags.svelte';

  $theme = {
    footer: 'light',
    header: 'light',
  };
</script>

<svelte:head>
  <MetaTags
    title="Privacy Policy | Climate Policy Radar"
    excerpt="Climate Policy Radar privacy policy"
    image="https://climatepolicyradar.org/images/logo.png"
  />
</svelte:head>

<Banner theme="light" size="sm">
  <h1 slot="heading" class="u-gradient-text--dark-to-blue">Privacy Policy</h1>
  <div class="b-content__wrapper">
    <p>
      Climate Policy Radar CIC, registered at Sustainable County Hall, 3rd
      Floor, Westminster Bridge Road, London SE1 7PB, is a Community Interest
      Company Limited by Guarantee registered in England and Wales (13377442),
      hereafter collectively referred to as 'Climate Policy Radar', ‘CPR’, ‘we’
      or the ‘Company’.
    </p>
    <p>
      We are committed to protecting and respecting your privacy. This Privacy
      Notice will explain how we collect and use your Personal Data and sets out
      your rights under the relevant laws of Data Protection. All details are
      coming soon, but don't worry, you're safe, GDPR and all.
    </p>
  </div>
</Banner>

<style>
  .b-content__wrapper :global(p),
  .b-content__wrapper :global(li),
  .b-content__wrapper :global(a),
  .b-content__wrapper :global(span) {
    font-size: 16px;
    line-height: 24px;
  }
</style>
