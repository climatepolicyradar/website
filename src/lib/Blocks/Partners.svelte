<script>
  import Wrapper from '$lib/Components/Wrapper.svelte';

  const setGroups = () => {
    let groups = [];
    partnerList.forEach((partner) => {
      if(groups.indexOf(partner.group) === -1) {
        groups.push(partner.group)
      }
    })
    return groups;
  }

  export let partnerList;
  const groups = setGroups();
  
</script>

<Wrapper>
  {#each groups as group}
    <div class="b-partners" id={group.toLowerCase()}>
      <div class="b-partners__group">
        <div class="b-partners__group__header">
          <h3 class="u-type-body-xxl">Our {group}</h3>
        </div>
        <div class="b-partners__group__items b-partners__group__items--partners">
          {#each partnerList as partner}
            {#if partner.group === group}
              <a class="b-partners__group__item" href={partner.url} target="_blank" rel="nofollow noopener noreferrer">
                <img src={partner.logo} alt={`${partner.name} logo`} width="235" height="240" loading="lazy" />
              </a>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/each}
</Wrapper>

<style>
  .b-partners {
    padding: 32px 0;
  }

  .b-partners__group {
    display: flex;
    flex-direction: column;
    padding: 32px 0;
  }

  .b-partners__group:first-child {
    padding-bottom: 0;
  }

  .b-partners__group__header {
    margin-bottom: 32px;
  }

  .b-partners__group__items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }

  @media only screen and (min-width: 720px) {
    .b-partners__group__items {
      gap: 16px;
    }
  }

  .b-partners__group__item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    height: 80px;
    padding: 0 8px;
    width: 50%;
  }

  @media only screen and (min-width: 720px) {
    .b-partners__group__item {
      height: 120px;
      padding: 0 16px;
    }
  }

  .b-partners__group__item img {
    max-width: 100%;
    max-height: 64px;
    object-fit: contain;
  }

  @media only screen and (min-width: 720px) {
    .b-partners__group__item img {
      max-height: 96px;
      max-width: 100%;
    }
  }

  .b-partners__group__items--partners {
    flex-wrap: wrap;
  }

  .b-partners__group__items--partners .b-partners__group__item {
    width: calc(50% - 8px);
  }

  @media only screen and (min-width: 720px) {
    .b-partners__group__items--partners .b-partners__group__item {
      width: calc(25% - 18px);
    }
  }
</style>
