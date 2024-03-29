<script>
  import Wrapper from '$lib/Components/Wrapper.svelte'

  const setGroups = () => {
    let groups = []
    partnerList.forEach((partner) => {
      if (groups.indexOf(partner.group) === -1) {
        groups.push(partner.group)
      }
    })
    return groups
  }

  export let partnerList
  const groups = setGroups()
</script>

<Wrapper>
  {#each groups as group}
    <div class="b-partners" id={group.toLowerCase()}>
      <div class="b-partners__group">
        <div class="b-partners__group__header">
          <h3 class="u-type-body-xxl">Our {group}</h3>
        </div>
        {#if group === 'Funders'}
          <p class="u-type-body-xl">
            We are grateful to our funders and partners — past and present — for their generous support
          </p>
        {/if}
        <div class="b-partners__group__items b-partners__group__items--partners">
          {#each partnerList as partner}
            {#if partner.group === group}
              <a class="b-partners__group__item" href={partner.url} target="_blank" rel="nofollow noopener noreferrer">
                <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
              </a>
            {/if}
          {/each}
        </div>
        {#if group === 'Partners'}
          <p class="u-type-body-xl">
            We are always seeking new collaborations on data, research and outreach. If you have an idea and want to
            work with us, <a href="/contact">get in touch</a>.
          </p>
        {/if}
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

  .b-partners__group__header:has(+ p) {
    margin-bottom: 0;
  }

  .b-partners__group__items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    background: var(--color-grey);
    border-radius: 30px;
    padding: 8px;
  }

  @media only screen and (min-width: 768px) {
    .b-partners__group__items {
      gap: 16px;
      padding: 16px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .b-partners__group__items {
      padding: 24px;
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
      width: calc(33% - 18px);
    }
  }
</style>
