<script>
  import Icon from './Icon.svelte';
</script>

<a class="c-card c-card--team-cta" href="/jobs#open-positions" sveltekit:noscroll>
  <div class="c-card__header">
    <h3 class="c-card__name u-type-h3">Interested in joining our team?</h3>
  </div>
  <div class="c-card__footer">
    <span>Check out our job openings</span>
    <Icon theme="dark" name="arrowRound" fill="var(--color-indigo)" />
  </div>
</a>

<style>
  .c-card--team-cta {
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    background-color: var(--color-indigo);
    position: relative;
    padding: 32px;
    height: 323px;
    justify-content: space-between;
    color: var(--color-white);
    transition: box-shadow 0.3s ease-in-out;
  }

  @media only screen and (max-width: 767px) {
    .c-card--team-cta {
      flex-basis: 100%;
    }
  }

  .c-card--team-cta:hover {
    box-shadow: 0 0 32px rgba(255, 255, 255, 0.4);
  }

  .c-card--team-cta:before {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 30px;
    background: linear-gradient(134.5deg, rgba(50,35,50,1) 0%, rgba(31,147,255,1) 0%, rgba(255,255,255,1) 53%);
    z-index: 0;
  }

  .c-card--team-cta:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: var(--color-indigo);
    z-index: 1;
  }

  .c-card--team-cta .c-card__header,
  .c-card--team-cta .c-card__footer {
    position: relative;
    z-index: 3;
  }

  .c-card--team-cta .c-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(.c-card--team-cta .c-card__footer .c-icon) {
    margin-left: 16px;
  }
</style>
