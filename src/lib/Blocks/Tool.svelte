<script>
  import Icon from '$lib/Components/Icon.svelte'
  import IconList from '$lib/Components/IconList.svelte'
  import IconListItem from '$lib/Components/IconListItem.svelte'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Button from '$lib/Components/Button.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'

  export let theme = 'light'
</script>

<div class="b-how b-how--{theme}">
  <Wrapper>
    <div class="b-how__content">
      <h3 class="b-how__heading u-type-body-xxl u-color-blue">
        Open data and tools for climate policy and law research
      </h3>

      <Wrapper type="content" align="left">
        <p class="b-how__copy u-type-body-xl u-mt-0">Our free search tool enables you to:</p>
      </Wrapper>

      <IconList orientation="horizontal">
        <IconListItem orientation="vertical">
          <Icon name="search" />
          <h4>Explore</h4>
          Search through the complete text of thousands of climate change policy and law documents from every country.
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="textMagnifier" />
          <h4>Research</h4>
          Easily find parts of documents that are relevant to what you’re looking for. Our AI tool saves time by automatically
          detecting and highlighting similar words.
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="globe" />
          <h4>Analyse</h4>
          Compare different nations’ climate action plans, and explore climate laws and policies by sector.
        </IconListItem>
      </IconList>

      <Spacer size="sm" />

      <div class="video__button">
        <Button color="blue" size="lg" href="https://app.climatepolicyradar.org" arrow>Start your search</Button>
      </div>
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
