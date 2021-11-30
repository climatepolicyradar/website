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
      label: 'Team',
      link: 'about#team'
    },
    {
      label: 'Values',
      link: 'about#values'
    },
    {
      label: 'Funders',
      link: 'about#funders'
    },
    {
      label: 'Partners',
      link: 'about#partners'
    },
    {
      label: 'Press',
      link: 'about#press'
    }
  ]
  },
  {
    label: 'What we do',
    link: 'what-we-do',
    submenu: [
      {
        label: 'Product',
        link: 'what#product'
      },
      {
        label: 'Technology',
        link: 'what#tech'
      },
      {
        label: 'Our Data',
        link: 'what#data'
      },
    ]
  },
  {
    label: 'Newsroom',
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
    label: 'Contact',
    link: 'contact',
    submenu: []
  }
])

export { activeSubMenu, menu };