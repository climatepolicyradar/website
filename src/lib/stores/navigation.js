import { readable, writable } from 'svelte/store';

const activeSubMenu = writable(null);

const menu = readable([
  {
  label: 'Who we are',
  link: 'about',
  submenuAlign: 'left',
  submenu: [
    {
      label: 'Overview',
      link: 'about'
    },
    {
      label: 'Mission',
      link: 'about#mission'
    },
    {
      label: 'Values',
      link: 'about#values'
    },
    {
      label: 'Team',
      link: 'about#team'
    },
    {
      label: 'Funders',
      link: 'about#funders'
    },
    {
      label: 'Partners',
      link: 'about#partners'
    }
  ]
  },
  {
    label: 'What we do',
    link: 'what-we-do',
    submenu: [
      {
        label: 'Overview',
        link: 'what-we-do'
      },
      {
        label: 'Offering',
        link: 'what-we-do#offering'
      },
      {
        label: 'Data',
        link: 'what-we-do#data'
      },
      {
        label: 'AI',
        link: 'what-we-do#ai'
      },
      {
        label: 'Resources',
        link: 'what-we-do#resources'
      },
      {
        label: 'Audience',
        link: 'what-we-do#audience'
      }
    ]
  },
  {
    label: 'News',
    link: 'latest',
    submenu: []
  },
  {
    label: 'Jobs',
    link: 'jobs',
    submenuAlign: 'center',
    submenu: [
      {
        label: 'Working here',
        link: 'jobs'
      },
      {
        label: 'Open positions',
        link: 'jobs#open-positions'
      }
    ]
  },
  {
    label: 'Connect',
    link: 'contact',
    submenu: []
  }
])

export { activeSubMenu, menu };