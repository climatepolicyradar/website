<script>
  import Arrow from "./Icons/Arrow.svelte";
  import ArrowRound from "./Icons/ArrowRound.svelte";
  import Default from "./Icons/Default.svelte";
  import Github from "./Icons/Github.svelte";
  import Graph from "./Icons/Graph.svelte";
  import Impact from "./Icons/Impact.svelte";
  import Learn from "./Icons/Learn.svelte";
  import LinkedIn from "./Icons/LinkedIn.svelte";
  import Machine from "./Icons/Machine.svelte";
  import Mission from "./Icons/Mission.svelte";
  import Radar from "./Icons/Radar.svelte";
  import Research from "./Icons/Research.svelte";
  import Trends from "./Icons/Trends.svelte";
  import Twitter from "./Icons/Twitter.svelte";
  import Wellbeing from "./Icons/Wellbeing.svelte";

  const icons = {
    arrow: Arrow,
    arrowRound: ArrowRound,
    github: Github,
    graph: Graph,
    impact: Impact,
    learn: Learn,
    linkedin: LinkedIn,
    machine: Machine,
    mission: Mission,
    radar: Radar,
    research: Research,
    trends: Trends,
    twitter: Twitter,
    wellbeing: Wellbeing,
  }

  export let name;
  export let size = '64px';
  export let fill = 'var(--color-blue)';
  export let theme = 'light';

  const iconComponent = icons.hasOwnProperty(name) ? icons[name] : Default
</script>

{#if iconComponent}
  <span class="c-icon c-icon--{name} c-icon--{theme}" style="--icon-size: {size};">
    <svelte:component this={iconComponent} fill={fill}/>
  </span>
{/if}

<style>
  .c-icon {
    display: inline-block;
    width: var(--icon-size);
    flex-shrink: 0;
  }

  .c-icon--arrowRound {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
  }

  .c-icon--arrowRound::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 48px;
    height: 48px;
    background: linear-gradient(134.5deg, rgba(50,35,50,1) 0%, rgba(31,147,255,1) 0%, rgba(255,255,255,1) 53%);
    border-radius: 50%;
    z-index: 0;
  }

  .c-icon--arrowRound:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
  }

  :global(.c-card .c-icon--arrowRound:after) {
    background-color: var(--color-grey);
  }

  :global(.c-card.c-card--split-dark .c-icon--arrowRound:after) {
    background-color: var(--color-indigo-600);
  }

  :global(.c-card .c-icon--dark.c-icon--arrowRound:after) {
    background-color: var(--color-indigo-600);
  }

  :global(.c-icon--arrowRound svg) {
    z-index: 2;
  }

  :global(.c-icon--arrowRound svg path) {
    fill: var(--color-indigo);
  }

  :global(.c-card--split-dark .c-icon--arrowRound svg path) {
    fill: var(--color-grey);
  }

  :global(.c-card .c-icon--dark.c-icon--arrowRound svg path) {
    fill: var(--color-white);
  }

</style>
