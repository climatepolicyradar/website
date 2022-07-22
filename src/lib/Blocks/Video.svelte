<script>
  import Wrapper from '$lib/Components/Wrapper.svelte';
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte';
</script>

<Wrapper>
  <div class="video-container">
    <iframe src="https://www.youtube-nocookie.com/embed/zrpA5n9Z93Y?rel=0&playlist=zrpA5n9Z93Y&loop=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <p class="u-type-body-xxxl u-text-center">
    How to use Climate Policy Radar's search tool to search thousands of climate policies, laws and strategies
  </p>
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
</style>
