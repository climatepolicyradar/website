<script>
  export let color = 'grey';
  export let upper = false;
</script>

<span class="c-pill c-pill--{color}" class:c-pill--upper="{upper}">
  <slot />
</span>

<style>
  .c-pill {
    display: inline-flex;
    border-radius: 30px;
    min-width: 98px;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 1;
    align-items: center;
    justify-content: center;
  }

  .c-pill--upper {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 500;
  }

  .c-pill--white {
    color: var(--color-indigo);
    background-color: #fff;
  }

  .c-pill--blue {
    color: #fff;
    background-color: var(--color-blue-500);
  }

  .c-pill--blue-100 {
    color: var(--color-indigo);
    background-color: var(--color-blue-100);
  }

  .c-pill--grey {
    color: var(--color-indigo);
    background-color: var(--color-grey);
  }
</style>
