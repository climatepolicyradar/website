<script>
  import { activeTabIndex } from '$lib/stores/values';
  import Tab from "./Tab.svelte";
  import Wrapper from "./Wrapper.svelte";

  export let items;
</script>

  <div class="c-tab-bar">
    <div class="c-tab-bar__wrapper">
      {#each items as value, index}

        <Tab icon={value.icon} title={value.title} {index} />
      {/each}
    </div>
    
  </div>
  <div class="c-tab-content">
    <!-- <Wrapper> -->
      <div class="c-tab-content__wrapper">
        <h4 class="c-tab-content__heading">{items[$activeTabIndex].title}</h4>
        <p>{items[$activeTabIndex].description1}</p>
        <p>{items[$activeTabIndex].description2}</p>
      </div>
    <!-- </Wrapper> -->
  </div>
  


<style>
  .c-tab-bar {
    /* position: relative;
    display: flex;
    overflow-x: auto;
    justify-content: flex-start; */
    background: var(--color-indigo);
    /* padding: 2rem; */
    
  }
  .c-tab-bar__wrapper {
    position: relative;
    display: flex;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    .c-tab-bar {
      background: none;
      padding: 0 2rem;
    }
    .c-tab-bar__wrapper {
      background: var(--color-indigo);
      width: 100%;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      max-width: 1052px;
      margin-left: auto;
      margin-right: auto;

    }
  }
  @media (min-width: 1024px) {
    .c-tab-bar__wrapper {
      overflow-x: visible;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .c-tab-content {
    /* background: var(--color-sky); */
    padding: 1rem;
  }
  .c-tab-content__heading {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    .c-tab-content {
      background: none;
      padding: 0 2rem;
    }
    .c-tab-content__wrapper {
      padding: 2rem;
      background: var(--color-sky);
      border-bottom-right-radius: 30px;
      border-bottom-left-radius: 30px;
      max-width: 1052px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>