<script>
    import { activeTabIndex } from '$lib/stores/values';
    import Icon from '$lib/Components/Icon.svelte';
    const handleClick = () => {
      $activeTabIndex = index;
    }
    export let index;
    export let title;
    export let icon;

    let active;
    $: active = index === $activeTabIndex;
</script>

<div class="c-tab" class:active={active} on:click={handleClick}>
  <Icon name={icon} fill={active ? 'var(--color-white)' : 'var(--color-blue)'} />
  <h4 class="c-tab__title">{title}</h4>
</div>

<style>
  .c-tab {
    background: var(--color-indigo);
    padding: 16px;
    color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* width: 75%; */
    flex-shrink: 0;
  }
  @media (min-width: 768px) {
    /* .c-tab {
      width: 32%;
    } */
  }
  @media (min-width: 1024px) {
    /* .c-tab {
      width: 25%;
    } */
  }

  .c-tab.active {
    background: var(--color-blue);
    
  }

  .c-tab__title {
    text-align: center;
  }
</style>