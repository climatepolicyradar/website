<script>
  import Button from '$lib/Components/Button.svelte';
  import CardsGrid from '$lib/Components/CardsGrid.svelte';
  import CardSquare from '$lib/Components/CardSquare.svelte';
  import Spacer from '$lib/Components/Spacer.svelte';

  export let limit = 3;
  export let showMore = false;
  export let link = undefined;
  export let pressClippings;

  $: items = pressClippings ? pressClippings.slice(0, limit) : [];

  $: sortedItems = items ? sortItems(items) : [];

  const sortItems = (items) => {
    return items?.sort(function (a, b) {
      const da = new Date(a.date);
      const db = new Date(b.date)
      const timeA = da.getTime();
      const timeB = db.getTime();
      return timeB - timeA;
    });
  }
  const showAll = () => limit = 99;
</script>

<CardsGrid columnsDesktop="3" columnsMobile="1">
  {#each sortedItems as item, i}
    <CardSquare
      visible={i + 1 <= limit}
      pill={item.type}
      date={item.date}
      title={item.title}
      source={item.source}
      excerpt={item.excerpt}
      background={item.background}
      link={item.url}
      target="_blank"
      rel="noopener noreferrer external"
      logo={item.logo.src ? `/${item.logo.src}` : null}
      logoWidth={item.logo.width}
      logoHeight={item.logo.height}
      logoAlt={item.logo.alt}
    />
  {/each}
</CardsGrid>

<Spacer size="md" />

{#if pressClippings?.length > limit && showMore}
   <div class="u-text-center">
     <Button color="grey" action={() => showAll()}>Show more</Button>
   </div>
{/if}

{#if link}
<div class="u-text-center">
  <Button color="grey" href="{link}" type="no-cta">View all</Button>
</div>
{/if}
