<script>
  import Icon from '$lib/Components/Icon.svelte'
  import IconList from '$lib/Components/IconList.svelte'
  import IconListItem from '$lib/Components/IconListItem.svelte'
  import Panel from '$lib/Components/Panel.svelte'
</script>

<Panel>
  <span slot="heading">Why</span>
  <div slot="copy">
    <p>
      Countless policy decisions have to be made by policymakers in our collective drive to net zero by mid-century.
    </p>
    <p>But how are those decisions informed?</p>
  </div>
  <div slot="aside">
    <IconList>
      <IconListItem><Icon name="radar" size="75px" />Existing policy information is fragmented and siloed.</IconListItem
      >
      <IconListItem><Icon name="graph" size="75px" />Data on available and effective solutions is sparse.</IconListItem>
      <IconListItem
        ><Icon name="learn" size="75px" />The ability to learn from each other's experience is limited.</IconListItem
      >
    </IconList>
  </div>
</Panel>

<style>
  /* your styles go here */
</style>
