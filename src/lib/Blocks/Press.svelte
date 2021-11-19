<script>
  // import { pressClippings } from '$lib/stores/press-clippings';
  import Button from '$lib/Components/Button.svelte';
  import CardsGrid from '$lib/Components/CardsGrid.svelte';
  import CardSquare from '$lib/Components/CardSquare.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  export let limit = 3;
  export let showMore = false;
  export let link = undefined;
  export let pressClippings;

  $: items = pressClippings.slice(0, limit);

  const showAll = () => limit = 99;
</script>

<CardsGrid columnsDesktop="3" columnsMobile="1">
  {#each items as item, i}
    <CardSquare
      visible={i + 1 <= limit}
      pill={item.type}
      date={item.date}
      title={item.title}
      excerpt={item.source}
      link={item.url}
      target="_blank"
      rel="noopener noreferrer external"
      logo={item.logo.filename ? `/images/press/${item.logo.filename}` : null}
      logoWidth={item.logo.width}
      logoHeight={item.logo.height}
      logoAlt={item.logo.alt}
    />
  {/each}
</CardsGrid>

<Spacer size="md" />

{#if pressClippings.length > limit && showMore}
   <div class="u-text-center">
     <Button color="grey" action={() => showAll()}>Show more</Button>
   </div>
{/if}

{#if link}
<div class="u-text-center">
  <Button color="grey" href="{link}" type="no-cta">View all</Button>
</div>
{/if}
