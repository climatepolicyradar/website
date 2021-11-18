import { writable } from 'svelte/store';

export const groups = ['Team', 'Board', 'Advisory'];

export const team = [
  {
    name: 'Michal Nachmany',
    role: 'Founder, CEO',
    group: ['Team', 'Board'],
    image: {
      filename: 'michal.jpg',
      width: 600,
      height: 812,
      alt: 'Michal Nachmany',
    },
    bio: 'Michal is an international climate policy and governance expert with background in law, finance, and multinational project management. She spent a decade at the Grantham Research Institute, LSE, where she led the work on the Institute’s structured datasets and tools, building evidence-based decision-making tools for national legislation and policy and low-carbon investment.',
    highlights: [
      'Advisor to Climate Action 100+, an investor coalition with over $54 trillion AUM',
      'Fellow of the UNFCCC Resilience Frontiers',
      'Speaker on climate policy and action with diverse audiences, with regular appearances on national and international media',
      'Member of the Camda Community for credible climate action',
      'Member of the Coalition for Digital Environmental Sustainability',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/michalnachmany/',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/NachmanyMichal',
      },
    ],
  },
  {
    name: 'Chris Ballard',
    role: 'CTO',
    group: ['Team'],
    image: {
      filename: 'chris.jpg',
      width: 600,
      height: 812,
      alt: '',
    },
    bio: 'Chris is a data scientist, applied machine learning practitioner and technology leader, with particular skills in Natural Language Processing.',
    highlights: [
      'He has over 20 years of experience building innovative data, analytics and machine learning solutions in the edtech and consumer market research sectors.',
      'His leadership experience spans software development, product management, consultancy, innovation and R&D. ',
      'Prior to CPR, he was Lead Research Scientist for NielsenIQ, where he led the Applied Machine Learning Research team, building Deep Learning and NLP solutions to structure ecommerce, retail and consumer data, deployed as part of major global strategic initiatives.',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/ACoAAAQd7I0BJBmw2_y32wJ8E0s_u6QfSer1aes?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BdxO8BVwNT9mmWxoP3PncrQ%3D%3D',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/chrisaballard',
      },
    ],
  },
  {
    name: 'Marcus Davies',
    role: 'Policy Analyst',
    group: ['Team'],
    image: {
      filename: 'marcus.jpg',
      width: 600,
      height: 812,
      alt: '',
    },
    bio: 'Marcus is a policy analyst with experience working on a range of international climate change policy issues.',
    highlights: [
      'He previously worked in the UK Civil Service on issues including climate diplomacy, trade and climate change and EU policy. ',
      'His policy skills include research, analysis, briefing and project management.',
      'He holds a BA in Classics and French from Oxford University and a Masters in Linguistics from SOAS, where he researched postcolonial sociolinguistics.',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/marcus-davies-9b0655143/',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/marcusodavies',
      },
    ],
  },
  {
    name: 'Kristyna Skriczka',
    role: 'Head of Operations',
    group: ['Team'],
    image: {
      filename: 'kristyna.jpg',
      width: 600,
      height: 812,
      alt: '',
    },
    bio: 'Kristyna has over 13 years of experience providing operations and business support in a multinational organisation.',
    highlights: [
      'She holds a BPS accredited BSc degree in Psychology.',
      'Recently completed her MA at the UCL Social Research Institute, focusing her dissertation on business engagement with children in the context of climate crisis, promoting children’s right to inherit a livable planet.',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/kristyna-skriczka/',
      },
    ],
  },
  {
    name: 'Paula Hightower',
    role: 'Front-end Developer',
    group: ['Team'],
    image: {
      filename: 'paula.jpg',
      width: 600,
      height: 812,
      alt: '',
    },
    bio: 'Paula is a front end developer with over 20 years experience in web development and design.',
    highlights: [
      'She has designed and developed a multitude of web-based projects, including multimedia and interactive data reporting applications, and e-commerce and brochure websites.',
      'For a period of 8 years, she also ran her own business providing pre-built website templates to hundreds of clients around the world.',
      'Paula has worked in Los Angeles, Seattle, Berlin and London.',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/paulachightower/',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/squeakie',
      },
    ],
  },
  {
    name: 'Kalyan Dutia',
    role: 'Data Scientist',
    group: ['Team'],
    image: {
      filename: 'kalyan.jpg',
      width: 600,
      height: 812,
      alt: '',
    },
    bio: 'Kalyan is a data scientist specialising in Natural Language Processing and Open Data.',
    highlights: [
      "Before joining Climate Policy Radar, he was a researcher at the Science Museum, working on an AHRC-funded project looking at connecting up the UK's museum collections using machine learning.",
      'Prior to this he worked at IBM, consulting a broad range of clients on AI and NLP solutions.',
      'He holds an MEng in Engineering Science from Oxford University.',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/kalyandutia/',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/KDutia',
      },
    ],
  },
  {
    name: 'Professor Sam Fankhauser',
    role: 'Non-executive Director',
    group: ['Board'],
    image: {
      filename: 'sam.jpg',
      width: 600,
      height: 812,
      alt: 'Professor Sam Fankhauser',
    },
    bio: 'Sam is Professor of Climate Change Economics and Policy at the University of Oxford Research and Director of Oxford Net Zero.',
    highlights: [
      'Outside academia, Sam is an Associate Director at economics consultancy Vivid Economics.',
      'He was also an inaugural member of the UK Committee on Climate Change (2008 to 2016) and served as a Non-Executive Director of CDC Group, the UK’s development finance institution (2015-21).',
      'Before joining Oxford, Sam was Director of the Grantham Research Institute on Climate Change and the Environment at the London School of Economics, where he remains a Visiting Professor.',
      'Prior to that, he worked at the European Bank for Reconstruction and Development (EBRD), the World Bank and the Global Environment Facility.',
      'He has studied economics at the University of Berne (Switzerland), the London School of Economics and University College London.',
    ],
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/sam-fankhauser-137b1ab/',
      },
      {
        network: 'twitter',
        url: 'https://twitter.com/SamFankhauser',
      },
    ],
  },
  {
    name: 'David Jensen',
    role: 'Head of Digital Transformation Task Force United Nations Environment Programme',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/davidedjensen/',
      },
    ],
  },
  {
    name: 'Baroness Bryony Worthington',
    role: 'Environmental campaigner and life peer in the UK House of Lords. ',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [],
  },
  {
    name: 'Dr Angel Hsu',
    role: 'Founder & Director of the Data-Driven Lab,  Assistant Professor,  UNC, Chapel Hill',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/angelhsu/',
      },
    ],
  },
  {
    name: 'Annett Moehner',
    role: 'Adaptation team lead, UNFCCC',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/annett-m%C3%B6hner-b96498b/',
      },
    ],
  },
  {
    name: 'Dr Shehnaaz Moosa',
    role: 'Director, South South North; Director of the CDKN programme',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/shehnaaz-moosa-787a6854/',
      },
    ],
  },
  {
    name: 'Dr Jody Heyman',
    role: 'Founding Director at WORLD Policy Analysis Center; Distinguished Professor, UCLA Fielding School of Public Health, Luskin School of Public Affairs, Geffen School of Medicine',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/jody-heymann/',
      },
    ],
  },
  {
    name: 'Dr Joana Setzer',
    role: 'Assistant Professorial Research Fellow, Grantham Research Institute, LSE.',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/joana-setzer-16418910',
      },
    ],
  },
  {
    name: 'Dr Rory Sullivan',
    role: 'CEO, Chronos Sustainability;  Chief Technical Adviser, Transition Pathway Initiative ',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/rory-sullivan-73188418/',
      },
    ],
  },
  {
    name: 'Graham Gannon',
    role: 'Head of Engineering Global Sales/Marketing Platforms, Google',
    group: ['Advisory'],
    image: false,
    bio: false,
    highlights: false,
    social: [
      {
        network: 'linkedin',
        url: 'https://www.linkedin.com/in/grahamgannon/',
      },
    ],
  },
];

export const teamMembers = writable(team);
