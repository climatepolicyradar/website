<script>
  import { modalStore } from '$lib/stores/theme';
</script>

<div class="o-overlay" on:click={() => modalStore.closeAll()} />

<style>
  .o-overlay {
    position: fixed;
    z-index: 101;
    background-image: linear-gradient(134.5deg, #071D49 48.58%, #071D49 72.99%, rgba(22, 134, 238, 1) 122.32%);
    inset: 0;
  }
</style>
