<script>
  export let theme = 'light';
  export let id = undefined;
</script>

<div {id} class="b-single-column b-single-column--{theme}">
  <div class="b-single-column__content">
    <slot />
  </div>
</div>

<style>
  .b-single-column__content {
    max-width: 720px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 46px;
    padding: 120px 32px;
  }

  @media only screen and (min-width: 321px) {
    .b-single-column__content {
      padding: 120px 72px;
    }
  }

  @media only screen and (min-width: 720px) {
    .b-single-column__content {
      padding: 240px 0;
    }
  }
</style>
