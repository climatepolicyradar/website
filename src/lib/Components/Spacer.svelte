<script>
  export let size = 'md';
</script>
<div class="o-spacer o-spacer--{size}"></div>
<style>
  .o-spacer {
    width: 100%;
    min-height: 1px;
  }

  .o-spacer--xs {
    height: 24px;
  }

  .o-spacer--sm {
    height: 32px;
  }

  .o-spacer--md {
    height: 64px;
  }

  .o-spacer--lg {
    height: 96px;
  }

  .o-spacer--xl {
    height: 96px;
  }

  @media only screen and (min-width: 720px) {
    .o-spacer--xl {
      height: 120px;
    }
  }

  .o-spacer--2xl {
    height: 96px;
  }

  @media only screen and (min-width: 321px) {
    .o-spacer--2xl {
      height: 120px;
    }
  }

  @media only screen and (min-width: 720px) {
    .o-spacer--2xl {
      height: 160px;
    }
  }

  .o-spacer--3xl {
    height: 160px;
  }

  @media only screen and (min-width: 720px) {
    .o-spacer--3xl {
      height: 192px;
    }
  }

  .o-spacer--4xl {
    height: 192px;
  }

  @media only screen and (min-width: 720px) {
    .o-spacer--3xl {
      height: 240px;
    }
  }
</style>
