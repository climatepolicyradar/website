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
  
  
  .c-panel:not(:first-child) {
    margin-top: 32px;
  }
  @media (min-width: 768px) {
    .c-panel {
      display: flex;
    }
    
  }
  @media (min-width: 1024px) {
    .c-panel {
      max-width: 700px;
      
    }
    .c-panel:nth-child(odd) {
      margin-right: auto;
    }
    .c-panel:nth-child(even) {
      margin-left: auto;
    }
  }
  .c-panel__title {
    font-size: 16px;
    padding-left: 8px;
  }
  @media (min-width: 768px) {
    .c-panel__title {
      padding-left: 0;
      text-align: center;
      margin-top: 16px;
    }
  }
  .c-panel__col {

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
      justify-content: center;
      flex-direction: column;
      width: 25%;
      text-align: center;
      border-top-right-radius: 0;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;

    }
    /* .c-panel__col-title.left {
      border-top-right-radius: 0;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      order: 1;
    }
    .c-panel__col-title.right {
      border-top-left-radius: 0;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      order: 2;
    } */
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
      width: 75%;
      font-size: 16px;
      border-bottom-left-radius: 0;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    /* .c-panel__col-text.left {
      border-bottom-right-radius: 0;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      order: 1;
    }
    .c-panel__col-text.right {
      border-bottom-left-radius: 0;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      order: 2;
    } */
  }
</style>