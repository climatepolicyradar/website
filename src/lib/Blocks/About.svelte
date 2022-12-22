<script>
  import Button from '$lib/Components/Button.svelte'
  import Banner from './Banner.svelte'
</script>

<Banner theme="dark">
  <h3 class="b-about__heading u-type-body-xxl" slot="heading">About Climate Policy Radar</h3>
  <p class="u-type-body-xxl u-mt-0 u-gradient-text--blue-to-white" slot="subheading">
    Climate Policy Radar is a not-for-profit climate startup. We are led by a team of leading experts in international
    climate law and policy, machine learning and software development.
  </p>
  <Button href="/about" color="white" size="lg" arrow>About us</Button>
</Banner>

<style>
  .b-about__heading {
    margin-bottom: 16px;
  }
</style>
