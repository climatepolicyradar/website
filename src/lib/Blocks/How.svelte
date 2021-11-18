<script>
  import Icon from '$lib/Components/Icon.svelte';
  import IconList from '$lib/Components/IconList.svelte';
  import IconListItem from '$lib/Components/IconListItem.svelte';
import Spacer from '$lib/Components/Spacer.svelte';
  import Wrapper from '$lib/Components/Wrapper.svelte';

  export let theme = 'light';
</script>

<div class="b-how b-how--{theme}">
  <Wrapper>
    <div class="b-how__content">
      <h3 class="b-how__heading u-type-body-xxl u-color-blue">How</h3>

      <Wrapper type="content" align="left">
        <p class="b-how__copy u-type-body-xxl u-mt-0">
          We map the world's climate laws and policies - countries, states, and cities, making sense
          of the breadth and depth of policy pathways.
        </p>
      </Wrapper>

      <IconList orientation="horizontal">
        <IconListItem orientation="vertical">
          <Icon name="machine" />
          Using machine learning and natural language processing to radically scale and accelerate data
          collection and analysis
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="trends" />
          Surfacing trends, creating context, and identifying opportunities
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="research" />
          Working with our research and knowledge brokering partners, ensuring data and insights get
          to those who need them
        </IconListItem>
      </IconList>
    </div>
  </Wrapper>
</div>

<style>

  :global(.b-how__content .c-icon-list) {
    margin-top: 64px;
  }

  @media only screen and (min-width: 720px) {
    :global(.b-how__content .c-icon-list) {
      margin-top: 64px;
    }
  }

  .b-how__heading {
    margin-bottom: 16px;
  }

</style>
