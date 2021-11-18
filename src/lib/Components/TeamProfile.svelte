<script>
  import Icon from './Icon.svelte';

  export let person;
</script>

<article class="c-team-profile">
  <div class="c-team-profile__media">
    {#if person.image.src}
      <img
        class="c-team-profile__image"
        src={`/${person.image.src}`}
        alt={person.image.alt}
        width={person.image.width}
        height={person.image.height}
        loading="lazy"
      />
    {/if}
  </div>

  <div class="c-team-profile__content">
    <h2 class="u-type-body-xxl">{person.name}</h2>
    <span class="u-type-body-xl c-team-profile__role">{person.role}</span>

    <div class="c-team-profile__content-inner">
      {#if person.social}
        <nav class="c-team-profile__social">
          {#each person.social as social}
            <a href={social.url} target="_blank" rel="noopener noreferrer external">
              <span class="u-sr-only">Follow {person.name} on {social.network}</span>
              <Icon name={social.network} size="32px" fill="#071e4a" />
            </a>
          {/each}
        </nav>
      {/if}

      {#if person.bio}
        <p class="c-team-profile__bio">{person.bio}</p>
      {/if}

      {#if person.highlights}
        {#each person.highlights as highlight}
          <p>{highlight}</p>
        {/each}
      {/if}
    </div>
  </div>
</article>

<style>
  .c-team-profile {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  @media (min-width: 768px) {
    .c-team-profile {
      flex-direction: row;
    }
  }

  .c-team-profile__role {
    color: var(--color-indigo-400);
  }

  .c-team-profile a {
    color: #fff;
    display: inline-block;
  }

  .c-team-profile__media {
    flex: 40%;
    font-size: 0;
  }

  .c-team-profile__content {
    flex: 60%;
    padding: 32px 32px 32px 0;
  }

  .c-team-profile__image {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 30px;
  }

  .c-team-profile__content-inner p,
  .c-team-profile__content-inner li,
  .c-team-profile__content-inner span {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 24px;
  }

  :global(.c-team-profile__social .c-icon) {
    margin-top: 8px;
    margin-right: 8px;
  }
</style>
