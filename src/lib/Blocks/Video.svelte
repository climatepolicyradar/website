<script>
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import Button from '$lib/Components/Button.svelte';
</script>

<Wrapper>
  <div class="video-container">
    <iframe src="https://www.youtube-nocookie.com/embed/zrpA5n9Z93Y?rel=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <p class="u-type-body-xxl u-text-center">
    Watch our video to learn how to use Climate Policy Radar's search tool to search thousands of climate policies, laws and strategies.
  </p>
  <p class="u-type-body-xl u-text-center">Launch our app now to search the full text of thousands of climate laws and policies.</p>
  <div class="video__button">
    <Button
      color="blue"
      size="lg"
      href="https://app.climatepolicyradar.org"
      arrow>Start your search</Button>
  </div>
</Wrapper>

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video__button {
    text-align: center;
  }
</style>
