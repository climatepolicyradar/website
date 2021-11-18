<script>
  import Icon from './Icon.svelte';

  export let name = undefined;
  export let role = undefined;
  export let bio = undefined;
  export let image = undefined;
  export let action = undefined;

  // Only show modal if person has a Bio set
  const handleClick = () => {
    if (action && bio) {
      action();
    }
  };
</script>

<div class="c-card c-card--team" class:has-bio={bio} on:click={handleClick}>
  <div class="c-card__media">
    {#if image.src}
      <img
        class="c-card__image"
        src={`/${image.src}`}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
    {/if}

    {#if bio}
      <Icon name="arrowRound" fill="var(--color-indigo)" />
    {/if}
  </div>
  <div class="c-card__content">
    {#if name}
      <h3 class="c-card__name u-type-h3">{name}</h3>
    {/if}

    {#if role}
      <div class="c-card__role">{role}</div>
    {/if}
  </div>
</div>

<style>
  .c-card--team {
    display: flex;
    margin-bottom: 24px;
    flex-direction: column;
    gap: 16px;
    border-radius: 30px;
  }

  @media only screen and (min-width: 321px) {
    .c-card--team {
      margin-bottom: 24px;
    }
  }

  @media only screen and (min-width: 768px) {
    .c-card--team {
      margin-bottom: 40px;
      gap: 33px;
    }
  }

  .c-card__media {
    position: relative;
  }

  .c-card__image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 30px;
    transition: box-shadow 0.3s ease-in-out;
  }

  .c-card--team.has-bio:hover .c-card__image {
    cursor: pointer;
    box-shadow: 0 0 32px rgba(255, 255, 255, 0.4);
  }

  .c-card__name {
    margin-bottom: 8px;
  }

  :global(.c-card--team .c-icon) {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
</style>
