<script lang="ts" context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/data/team.json')
    const data = await res.json()
    const { team } = data

    const pressRes = await fetch('/data/press.json')
    const pressData = await pressRes.json()
    const { pressClippings } = pressData

    const partnersRes = await fetch(`/data/partners.json`)
    const { partnerList } = await partnersRes.json()

    return { props: { team, pressClippings, partnerList } }
  }
</script>

<script>
  import { theme } from '$lib/stores/theme'
  import Wrapper from '$lib/Components/Wrapper.svelte'
  import Banner from '$lib/Blocks/Banner.svelte'
  import Spacer from '$lib/Components/Spacer.svelte'
  import SingleColumn from '$lib/Blocks/SingleColumn.svelte'
  import Team from '$lib/Blocks/Team.svelte'
  import OurValues from '$lib/Blocks/OurValues.svelte'
  import Icon from '$lib/Components/Icon.svelte'
  import IconList from '$lib/Components/IconList.svelte'
  import IconListItem from '$lib/Components/IconListItem.svelte'
  import Partners from '$lib/Blocks/Partners.svelte'
  import MetaTags from '$lib/Components/MetaTags.svelte'

  export let team
  // export let pressClippings
  export let partnerList

  let sortedTeam

  $theme = {
    footer: 'light',
    header: 'dark',
  }

  const sortAdvisory = () => {
    const advisory = team.filter((member) => member.group === 'Advisory')
    const restOfTeam = team.filter((member) => member.group !== 'Advisory')
    const sortedAdvisory = advisory.sort(function (a, b) {
      const na = a.name.split(' ')
      const nameA = na[na.length - 1]
      const nb = b.name.split(' ')
      const nameB = nb[nb.length - 1]
      if (nameA.toLowerCase() < nameB.toLowerCase()) {
        return -1
      }
      if (nameA.toLowerCase() > nameB.toLowerCase()) {
        return 1
      }
      return 0
    })
    return [...restOfTeam, ...sortedAdvisory]
  }

  $: sortedTeam = team ? sortAdvisory() : []
  const title = 'About | Climate Policy Radar'
  const excerpt = 'We are an open data climate startup'
  const image = 'https://climatepolicyradar.org/images/logo.png'
  const path = '/about'
</script>

<MetaTags {title} {excerpt} {image} {path} />

<Banner theme="dark" size="sm">
  <h1 slot="heading">We are a <br /> climate AI startup</h1>
  <p slot="subheading">
    Pioneering the application of natural language processing to climate law and policy, and championing open science
    and radical collaboration, to support informed and evidence-based decision-making.
  </p>
</Banner>

<section id="mission">
  <SingleColumn>
    <h2 class="u-type-body-xxxl u-text-center u-gradient-text--dark-to-blue">
      We are on a mission to map and analyse the global climate law and policy landscape
    </h2>
  </SingleColumn>

  <Wrapper>
    <h3 class="u-type-body-xxl u-color-blue">
      By supporting evidence-based laws and policies, our vision is to accelerate the transition to a low-carbon,
      resilient and just world.
    </h3>

    <Spacer size="md" />

    <IconList orientation="horizontal">
      <IconListItem orientation="vertical">
        <Icon name="mission" />
        <p class="u-type-body-md">
          We are led by a team of international climate change law and policy and machine learning experts, bridging the
          climate and tech worlds.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="global" />
        <p class="u-type-body-md">
          Climate Policy Radar is built on a decade of experience leading research and resource development on global
          climate laws and policies at the London School of Economics and Political Science, serving policymakers,
          researchers and civil society worldwide.
        </p>
      </IconListItem>
      <IconListItem orientation="vertical">
        <Icon name="thinking" />
        <p class="u-type-body-md">
          We believe in collaboration, not competition, and we actively seek out partners who share our ambition and
          values.
        </p>
      </IconListItem>
    </IconList>
  </Wrapper>
</section>

<Spacer size="lg" />

<section class="b-values" id="values">
  <OurValues />
</section>

<Spacer size="lg" />

<section id="team">
  <Team members={sortedTeam} />
</section>

<Spacer size="lg" />

<section>
  <Partners {partnerList} extended />
</section>
