import { readable, writable } from 'svelte/store'

const activeTabIndex = writable(0)

const policymaking = readable([
  {
    title: 'Policymaking',
    description1:
      'Carry out deep dives into a wide range of  areas, assess policy options and identify best practices.',
    icon: 'moonshot',
  },
  {
    title: 'Policy tracking',
    description1: 'Track global action and progress towards meeting the goals of the Paris Agreement.',
    icon: 'excellence',
  },
  {
    title: 'Accountability',
    description1: 'Assess policy choices, draw attention to insufficient action, and advocate for alternatives.',
    icon: 'truth',
  },
  {
    title: 'Risk modelling',
    description1: 'Build law and policy metrics into risk models, and gain a better understanding of the regulatory environment.',
    icon: 'transparency',
  },
])

export { policymaking, activeTabIndex }
