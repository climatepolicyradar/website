<script>
  import Icon from '$lib/Components/Icon.svelte'
  import IconList from '$lib/Components/IconList.svelte'
  import IconListItem from '$lib/Components/IconListItem.svelte'
  import Panel from '$lib/Components/Panel.svelte'
</script>

<Panel>
  <span slot="heading">AI for climate law and policy research</span>
  <div slot="copy">
    <p class="u-type-body-xl">
      We use data science and artificial intelligence to map and analyse the world's climate change policies and laws,
      supporting a deep understanding of what works, where, and for whom.
    </p>
    <p class="u-type-body-xl">
      By turning documents into searchable, accessible and useful information, our work aims to advance global research
      efforts to understand the effectiveness of climate laws, policies and litigation.
    </p>
  </div>
  <div slot="aside">
    <IconList>
      <IconListItem
        ><Icon name="central" size="75px" />
        <div>
          <h4>Aggregate and sort</h4>
          <p class="b-ai-paragraph">
            Bringing climate policy data together from diffuse resources - from government websites to climate
            negotiation documents.
          </p>
        </div>
      </IconListItem>
      <IconListItem
        ><Icon name="textMagnifier" size="75px" />
        <div>
          <h4>Digest and analyse</h4>
          <p class="b-ai-paragraph">
            Training AI algorithms to extract useful information from climate documents. This will help to pinpoint
            trends and highlight action gaps.
          </p>
        </div>
      </IconListItem>
      <IconListItem
        ><Icon name="sun" size="75px" />
        <div>
          <h4>Expose and share</h4>
          <p class="b-ai-paragraph">
            Building an open knowledge graph to map this information. This will enable climate policy evaluation,
            analysis and modelling. And ultimately, help to guide better decision-making.
          </p>
        </div></IconListItem
      >
    </IconList>
  </div>
</Panel>

<style>
  .b-ai-paragraph {
    margin: 0;
  }
</style>
