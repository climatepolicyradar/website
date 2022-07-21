<script>
  import Wrapper from '$lib/Components/Wrapper.svelte';
</script>

<Wrapper>
  <div class="video-container">
    <iframe src="https://www.youtube-nocookie.com/embed/zrpA5n9Z93Y?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
</style>