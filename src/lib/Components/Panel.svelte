<script>
import Wrapper from "./Wrapper.svelte";

</script>
<div class="c-panel-wrapper">
  <div class="c-panel">
    <Wrapper type="standard">
      <div class="c-panel__content">
        <div class="c-panel__col-1">
          <div class="c-panel__heading u-type-body-xxl">
            <slot name="heading"><!-- optional fallback --></slot>
          </div>
          <div class="c-panel__copy u-type-body-xxl">
            <slot name="copy"><!-- optional fallback --></slot>
          </div>
        </div>
        <div class="c-panel__col-2">
          <slot name="aside"><!-- optional fallback --></slot>
        </div>
      </div>
    </Wrapper>
  </div>
</div>

<style>
  .c-panel-wrapper {
    position: relative;
  }

  .c-panel-wrapper::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 200%;
    background-image: linear-gradient(134.5deg, rgba(50,35,50,1) 0%, rgba(235,242,255,1) 0%, rgba(255,255,255,1) 35%);
    z-index: -1;
  }

  .c-panel {
    background: #FFFFFF;
    box-shadow: 0 0 55px 25px rgba(7, 30, 74, 0.05);
    border-radius: 30px;
    margin: 0 auto;
    padding: 48px 24px;
    width: calc(100% - 24px);
    max-width: 1280px;
  }

  @media only screen and (min-width: 720px) {
    .c-panel {
      padding: 90px 0;
    }
  }

  @media only screen and (min-width: 720px) {
    .c-panel__content {
      display: flex;
      align-items: center;
    }
  }

  .c-panel__heading {
    color: var(--color-blue-500);
    margin-bottom: 16px;
  }

  .c-panel__col-1 {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 720px) {
    .c-panel__col-1,
    .c-panel__col-2 {
      flex-basis: 50%;
      flex-shrink: 0;
      flex-grow: 0;
      margin-bottom: 0;
    }

    .c-panel__col-2 {
      padding-left: 96px;
    }
  }

  :global(.c-panel__copy > div p:first-child) {
    margin-top: 0;
  }

  :global(.c-panel__copy > div p:last-child) {
    margin-bottom: 0;
  }
</style>
