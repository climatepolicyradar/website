<script>
  import Arrow from './Icons/Arrow.svelte'
  import ArrowRound from './Icons/ArrowRound.svelte'
  import Default from './Icons/Default.svelte'
  import Github from './Icons/Github.svelte'
  import Graph from './Icons/Graph.svelte'
  import Impact from './Icons/Impact.svelte'
  import Learn from './Icons/Learn.svelte'
  import LinkedIn from './Icons/LinkedIn.svelte'
  import Machine from './Icons/Machine.svelte'
  import Mission from './Icons/Mission.svelte'
  import Radar from './Icons/Radar.svelte'
  import Research from './Icons/Research.svelte'
  import Trends from './Icons/Trends.svelte'
  import Twitter from './Icons/Twitter.svelte'
  import Wellbeing from './Icons/Wellbeing.svelte'
  import Moonshot from './Icons/Moonshot.svelte'
  import Excellence from './Icons/Excellence.svelte'
  import Truth from './Icons/Truth.svelte'
  import Transparency from './Icons/Transparency.svelte'
  import Learning from './Icons/Learning.svelte'
  import EmotionalIntelligence from './Icons/EmotionalIntelligence.svelte'
  import Collaboration from './Icons/Collaboration.svelte'
  import Text from './Icons/Text.svelte'
  import SemanticSearch from './Icons/SemanticSearch.svelte'
  import TextMagnifier from './Icons/TextMagnifier.svelte'
  import DocSwitch from './Icons/DocSwitch.svelte'
  import Knowledge from './Icons/Knowledge.svelte'
  import Graph2 from './Icons/Graph2.svelte'
  import Scales from './Icons/Scales.svelte'
  import Spring from './Icons/Spring.svelte'
  import Middle from './Icons/Middle.svelte'
  import Global from './Icons/Global.svelte'
  import Thinking from './Icons/Thinking.svelte'
  import Search from './Icons/Search.svelte'
  import Globe from './Icons/Globe.svelte'
  import Sun from './Icons/Sun.svelte'
  import Central from './Icons/Central.svelte'
  import Policy from './Icons/Policy.svelte'
  import Researchers from './Icons/Researchers.svelte'
  import UserGroup from './Icons/UserGroup.svelte'
  import PrivateSector from './Icons/PrivateSector.svelte'

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
    moonshot: Moonshot,
    excellence: Excellence,
    truth: Truth,
    transparency: Transparency,
    learning: Learning,
    emotionalIntelligence: EmotionalIntelligence,
    collaboration: Collaboration,
    text: Text,
    semanticSearch: SemanticSearch,
    textMagnifier: TextMagnifier,
    docSwitch: DocSwitch,
    knowledge: Knowledge,
    graph2: Graph2,
    scales: Scales,
    spring: Spring,
    middle: Middle,
    global: Global,
    thinking: Thinking,
    search: Search,
    globe: Globe,
    sun: Sun,
    central: Central,
    policy: Policy,
    researchers: Researchers,
    userGroup: UserGroup,
    privateSector: PrivateSector,
  }

  export let name
  export let size = '64px'
  export let fill = 'var(--color-blue)'
  export let theme = 'light'

  const iconComponent = icons.hasOwnProperty(name) ? icons[name] : Default
</script>

{#if iconComponent}
  <span class="c-icon c-icon--{name} c-icon--{theme}" style="--icon-size: {size};">
    <svelte:component this={iconComponent} {fill} />
  </span>
{/if}

<style>
  .c-icon {
    display: inline-block;
    width: var(--icon-size);
    flex-shrink: 0;
  }

  :global(.c-icon > img) {
    max-width: 100%;
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
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 48px;
    height: 48px;
    background: linear-gradient(134.5deg, rgba(50, 35, 50, 1) 0%, rgba(31, 147, 255, 1) 0%, rgba(255, 255, 255, 1) 53%);
    border-radius: 50%;
    z-index: 0;
  }

  .c-icon--arrowRound:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 1;
  }
  .c-icon--moonshot,
  .c-icon--excellence,
  .c-icon--truth,
  .c-icon--transparency,
  .c-icon--learning,
  .c-icon--emotionalIntelligence,
  .c-icon--collaboration {
    width: 64px;
    height: 50px;
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
