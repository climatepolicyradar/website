<script>
  import { onMount } from 'svelte';
  import { fade } from "svelte/transition";
  import Icon from '$lib/Components/Icon.svelte';
  export let icon;
  export let title;
  export let description1;
  export let description2;

  onMount(() => {

  })
</script>

  <div class="c-panel" transition:fade>
    <div class="c-panel__col c-panel__col-title left">
      <Icon name={icon} />
      <h4 class="c-panel__title">{title}</h4>
    </div>
    <div class="c-panel__col c-panel__col-text right">
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  </div>

<style>
  
  .c-panel {
    display: flex;
    flex-direction: column;
  }
  .c-panel:not(:first-child) {
    margin-top: 32px;
  }
  @media (min-width: 768px) {
    .c-panel:not(:first-child) {
      margin-top: 0;
    }
  }
  
  
  .c-panel__col-title {
    
    background: var(--color-indigo);
    color: white;
    display: flex;
    
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  @media (min-width: 768px) {
    .c-panel__col-title {
      padding: 24px;
    }
  }

  .c-panel__title {
    font-size: 16px;
    padding-left: 8px;
  }
  @media (min-width: 768px) {
    .c-panel__title {
      font-size: 24px;
    }
  }
  
  .c-panel__col-text {
    background: var(--color-indigo-200);
    padding: 16px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    font-size: 14px;
    line-height: 1.25em;
  }
  @media (min-width: 768px) {
    .c-panel__col-text {
      padding: 24px;
      font-size: 16px;
      flex-grow: 1;
    }
  }
</style>