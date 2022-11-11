<script>
  import Icon from '$lib/Components/Icon.svelte'
  import IconList from '$lib/Components/IconList.svelte'
  import IconListItem from '$lib/Components/IconListItem.svelte'
  import Wrapper from '$lib/Components/Wrapper.svelte'

  export let theme = 'light'
</script>

<div class="b-how b-how--{theme}">
  <Wrapper>
    <div class="b-how__content">
      <h3 class="b-how__heading u-type-body-xxl u-color-blue">We are open data, open source</h3>

      <Wrapper type="content" align="left">
        <p class="b-how__copy u-type-body-xxl u-mt-0">This means our work:</p>
      </Wrapper>

      <IconList orientation="horizontal">
        <IconListItem orientation="vertical">
          <Icon name="scales" />
          Democratises access to information and promotes climate justice, as often those who need access to data the most
          are least able to pay for it.
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="spring" />
          Provides a springboard for innovation, accelerating research efforts and catalysing collaboration.
        </IconListItem>
        <IconListItem orientation="vertical">
          <Icon name="middle" />
          Corrects biases - by opening up our models to scrutiny and ensuring that we remain neutral and impartial.
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
