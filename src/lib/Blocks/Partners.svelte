<script>
  import Pill from '$lib/Components/Pill.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';
</script>

<Wrapper>
  <div class="b-partners">
    <div class="b-partners__group">
      <div class="b-partners__group__header">
        <h3 class="u-type-body-xxl">Our funders</h3>
      </div>
      <div class="b-partners__group__items">
        <a class="b-partners__group__item" href="https://quadrature.ai/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/quadrature-logo.png" alt="Quadrature logo" width="412" height="70" loading="lazy" />
        </a>
        <a class="b-partners__group__item" href="https://climatesubak.org/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/subak-logo.png" alt="Subak logo" width="322" height="136" loading="lazy" />
        </a>
      </div>
    </div>
    <div class="b-partners__group">
      <div class="b-partners__group__header">
        <h3 class="u-type-body-xxl">Our partners</h3>
      </div>
      <div class="b-partners__group__items b-partners__group__items--partners">
        <a class="b-partners__group__item" href="https://www.lse.ac.uk/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/lse-logo.png" alt="LSE logo" width="235" height="240" loading="lazy" />
        </a>

        <a class="b-partners__group__item" href="https://www.lse.ac.uk/granthaminstitute/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/grantham-logo.png" alt="Grantham Research Institute on Climate Change and the Environment logo" width="696 " height="180" loading="lazy" />
        </a>

        <a class="b-partners__group__item" href="https://www.worldpolicycenter.org/about/about-world" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/world-policy-logo.png" alt="The World Policy Analysis Center logo" width="400" height="300" loading="lazy" />
        </a>

        <a class="b-partners__group__item" href="https://www.worldbank.org/en/home" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/world-bank-logo.png" alt="The World Bank logo" width="600" height="140" loading="lazy" />
        </a>

        <a class="b-partners__group__item" href="https://southsouthnorth.org/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/south-south-north-logo.png" alt="South South North logo" width="280" height="280" loading="lazy" />
        </a>

        <a class="b-partners__group__item" href="https://cdkn.org/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/cdkn-logo.png" alt="Climate & Development Knowledge Network logo" width="539" height="240" loading="lazy" />
        </a>

        <a class="b-partners__group__item" href="https://www.adobe.com/" target="_blank" rel="nofollow noopener noreferrer">
          <img src="/images/partners/adobe-logo.png" alt="Adobe logo" width="720" height="188" loading="lazy" />
        </a>
      </div>
    </div>
  </div>
</Wrapper>

<style>
  .b-partners {
    padding: 64px 0;
  }

  .b-partners__group {
    display: flex;
    flex-direction: column;
    padding: 64px 0;
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
      gap: 32px;
    }
  }

  .b-partners__group__item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: var(--color-grey);
    height: 96px;
    padding: 16px;
    width: 50%;
  }

  @media only screen and (min-width: 720px) {
    .b-partners__group__item {
      height: 180px;
      padding: 24px 48px;
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
      max-width: 240px;
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
