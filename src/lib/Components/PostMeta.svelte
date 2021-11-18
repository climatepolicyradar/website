<script>
  import { team } from '$lib/stores/team-members';
  export let author = '';
  export let date = '';

  let authorData = team.filter(member => member.name === author);
</script>


  {#if authorData.length}
    <div class="c-post-meta">
      <img src="/images/team/{authorData[0].image.filename}" alt={authorData[0].image.alt} class="c-post-meta__image">
      <div class="c-post-meta__content">
        <div class="c-post-meta__author">
          <p class="c-post-meta__name">{author}</p>
          <p class="c-post-meta__role">{authorData.length ? authorData[0].role : ''}</p>
        </div>
        
        <p class="c-post-meta__date">{date}</p>
      </div>
    </div>
  {/if}


<style>
  .c-post-meta {
    display: flex;
    margin-top: 40px;
  }

  .c-post-meta__image {
    max-width: 64px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 4px 14px rgba(7, 30, 74, 0.09);
  }

  .c-post-meta__content {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .c-post-meta__name,
  .c-post-meta__role,
  .c-post-meta__date {
    margin: 0;
  }

  .c-post-meta__name {
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 6px;
  }
</style>