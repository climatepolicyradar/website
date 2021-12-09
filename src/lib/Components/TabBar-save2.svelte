<script>
  import { activeTabIndex } from '$lib/stores/values';
  import Tab from "./Tab.svelte";
  import Wrapper from "./Wrapper.svelte";

  export let items;
</script>
  <div class="c-tab-bar__outer">
    <div class="c-tab-bar">
      <div class="c-tab-bar__wrapper">
        {#each items as value, index}
  
          <Tab icon={value.icon} title={value.title} {index} />
        {/each}
      </div>
      
    </div>
    <div class="c-tab-content">
      <div class="c-tab-content__wrapper">
       
        {#each items as value, index}
          <div class="c-tab-content__section">
            <h4 class="c-tab-content__heading">{value.title}</h4>
            <p>{value.description1}</p>
            <p>{value.description2}</p>
          </div>
          
        {/each}
      </div>
    </div>
  </div>
  
  


<style>
  .c-tab-bar {
    background: var(--color-indigo);
  }
  .c-tab-bar__wrapper {
    position: relative;
    display: flex;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 2rem;
  }
  :global(.c-tab) {
    width: 75%;
  }

  @media (min-width: 768px) {
    .c-tab-bar__outer {
      display: flex;
      justify-content: center;
    }
    .c-tab-bar {
      background: none;
      padding: 0;
    }
    .c-tab-bar__wrapper {
      display: block;
      background: var(--color-indigo);
      /* width: 100%; */
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      /* max-width: 1052px;
      margin-left: auto;
      margin-right: auto; */

    }
    :global(.c-tab) {
      width: 100%;
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
    padding: 1rem;
  }
  .c-tab-content__heading {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    .c-tab-content {
      background: none;
      padding: 0;
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