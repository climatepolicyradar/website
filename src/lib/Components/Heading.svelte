<script>
  export let size = undefined;
</script>

<div class="c-heading c-heading--{size}">
  <slot />
</div>

<style>
  .c-heading {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
  }
</style>
