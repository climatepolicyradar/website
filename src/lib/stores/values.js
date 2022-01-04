import { readable, writable } from 'svelte/store';

const activeTabIndex = writable(0);

const values = readable([
  {
    title: 'Moonshot intention with grounded urgent action',
    description1: 'We seek to bring about meaningful change towards a better future, using data effectively to make a difference to people and planet.',
    description2: 'In particular, we want to influence and change the way evidence informs policy and investment decisions. While this is a marathon, and we’re in it for the long haul, the urgency of the challenge means we are committed to sprints and to achieving short term goals, without losing sight of our long term mission.',
    icon: 'moonshot'
  },
  {
    title: 'Excellence',
    description1: 'We strive to be excellent at what we do and how we do it.',
    description2: 'Holding ourselves to the highest standard of research and development, operations, management and engagement with our stakeholders.',
    icon: 'excellence'
  },
  {
    title: 'Truth Seeking',
    description1: 'We will be honest and act with integrity in the data we produce and the way that we communicate what it means.',
    description2: 'We will make an active effort to avoid bias in all our practices and importantly, in the way we collect, curate and communicate data. We will be dispassionate about any given course of action as long as there is evidence to show its effectiveness - there are no silver bullets.',
    icon: 'truth'
  },
  {
    title: 'Transparency',
    description1: 'We will make our data, analyses and platform available for others to use and build on.',
    description2: 'We will be open about how we work and what we do, and explain our data and analyses clearly using language that is readily understood by our target audiences. We will be leaders in open sourcing climate data and contributing to open source efforts globally.',
    icon: 'transparency'
  },
  {
    title: 'Learning and experimenting',
    description1: 'We seek to continuously learn and improve ourselves and our organisation and to advance a culture of evidence-based decision making',
    description2: 'Through constant learning from others’ successes, mistakes and through innovation and experimentation where things have not been tried before. We embrace failure, will interrogate our mistakes openly, and try and improve on our weaknesses.',
    icon: 'learning'
  },
  {
    title: 'Emotional intelligence',
    description1: 'We are committed to intelligent and empathic communication with our team, stakeholders, and audiences.',
    description2: 'We will be honest, reliable, approachable, and practice generosity and integrity in all our dealings with others, both in Climate Policy Radar and externally.',
    icon: 'emotionalIntelligence'
  },
  {
    title: 'Bridge building and collaboration',
    description1: 'We take a radical collaboration approach to our work - both internally and externally. We do not view other people and organisations as competitors, but rather as allies.',
    description2: 'We do not view other people and organisations as competitors, but rather as allies. Everyone in the team will contribute their unique skills, insights and work with others to maximise synergies. We will build links with the broad climate change community, and collaborate and integrate with other climate change data providers and organisations.',
    icon: 'collaboration'
  }
])

export { values, activeTabIndex };