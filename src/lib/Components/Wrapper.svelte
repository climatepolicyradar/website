<script>
  export let type = 'standard';
  export let align = 'center';
</script>

<div class="o-wrapper o-wrapper--{type} o-wrapper--{align}">
  <slot />
</div>

<style>
  .o-wrapper {
    width: 100%;
    padding: 0 16px;
  }

  @media (min-width: 321px) {
    .o-wrapper {
      padding: 0 24px;
    }
  }

  .o-wrapper--center {
    margin-left: auto;
    margin-right: auto;
  }

  .o-wrapper--x-wide {
    max-width: 1440px;
    padding: 0 8px;
  }

  .o-wrapper--wide {
    max-width: 1280px;
  }

  .o-wrapper--standard {
    max-width: 1100px;
  }

  .o-wrapper--content {
    padding: 0;
    max-width: 768px;
  }
  
  .o-wrapper--content-wide {
    max-width: 1160px;
  }
</style>
