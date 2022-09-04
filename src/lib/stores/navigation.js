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
  // {
  //   label: 'What we do',
  //   link: 'what-we-do',
  //   submenu: [
  //     {
  //       label: 'Product',
  //       link: 'what-we-do#product'
  //     },
  //     {
  //       label: 'Technology',
  //       link: 'what-we-do#tech'
  //     },
  //     {
  //       label: 'Our Data',
  //       link: 'what-we-do#data'
  //     },
  //   ]
  // },
  {
    label: 'News and Commentaries',
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