<script>
  export let color = undefined;
</script>

<div class="c-badge c-badge--{color}">
  <slot />
</div>

<style>
  .c-badge {
    position: absolute;
    top: -10px;
    right: -20px;
    font-size: 10px;
    height: 16px;
    min-width: 16px;
    line-height: 16px;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .c-badge--blue {
    color: #fff;
    background-color: var(--color-blue-600);
  }
</style>
