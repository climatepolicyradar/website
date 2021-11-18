<script>
  import Wrapper from '$lib/Components/Wrapper.svelte';

  export let theme = 'light';
  export let size = 'md';
</script>


<div class="b-banner b-banner--{theme} b-banner--{size}">
  <Wrapper>
    <div class="b-banner__inner">
      <div class="b-banner__content">
        {#if $$slots.pill}
          <slot name="pill"><!-- optional fallback --></slot>
        {/if}

        {#if $$slots.heading}
          <div class="b-banner__heading">
            <slot name="heading"><!-- optional fallback --></slot>
          </div>
        {/if}

        {#if $$slots.subheading}
          <div class="b-banner__subheading u-type-body-xl">
            <slot name="subheading"><!-- optional fallback --></slot>
          </div>
        {/if}

        <slot><!-- optional fallback --></slot>

      </div>
    </div>
  </Wrapper>
</div>

<style>
  .b-banner {
    position: relative;
    overflow: hidden;
  }

  .b-banner__inner {
    padding: 160px 0;
    position: relative;
  }

  @media only screen and (min-width: 321px) {
    .b-banner__inner {
      padding: 240px 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .b-banner--lg .b-banner__inner { 
      padding-top: calc(240px + 92px);
    }
  }

  .b-banner--lg::before {
    content: "";
    width: 2000px;
    height: 2000px;
    position: absolute;
    top: 0;
    left: -25%;
    background-image: url('/images/arc-bg.png');
  }

  @media only screen and (min-width: 720px) {
    .b-banner::before {
      top: 360px;
      left: 50%;
    }
  }

  .b-banner--dark {
    color: #fff;
    background-color: var(--color-indigo-600);
    background: linear-gradient(134.5deg, rgba(50,35,50,1) 0%, rgba(7,29,73,1) 0%, rgba(7,29,73,1) 45%, rgba(22,134,238,1) 100%);
  }

  .b-banner--light::before {
    content: "";
    width: 2000px;
    height: 2000px;
    position: absolute;
    top: 0;
    left: -25%;
    background-image: url('/images/arc-bg-light.png');
  }

  @media only screen and (min-width: 720px) {
    .b-banner--light::before {
      left: 35%;
    }
  }

  .b-banner--md::before {
    content: "";
    width: 2000px;
    height: 2000px;
    position: absolute;
    top: 0;
    left: -25%;
    background-image: url('/images/arc-bg-minimal.png');
  }

  @media only screen and (min-width: 720px) {
    .b-banner--md::before {
      left: 35%;
    }
  }

  .b-banner--sm .b-banner__inner {
    padding: 160px 0 80px;
  }

  @media only screen and (min-width: 321px) {
    .b-banner--sm .b-banner__inner {
      padding: 240px 0;
    }
  }

  .b-banner--xs .b-banner__inner {
    padding: 240px 0 96px;
  }

  .b-banner__content {
    max-width: 860px;
  }

  .b-banner__subheading {
    max-width: 580px;
    margin-bottom: 64px;
  }

  .b-banner--md .b-banner__subheading {
    max-width: 768px;
  }

  .b-banner--md .b-banner__inner {
    padding: 160px 0;
  }
</style>
