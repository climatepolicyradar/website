import { readable } from 'svelte/store';

const data_types = readable([
  {
    id: 'national',
    value: 'National Policy',
    label: 'National Policy',
  },
  {
    id: 'subnational',
    value: 'Subnational Policy',
    label: 'Subnational (e.g.state) Policy',
  },
  {
    id: 'city_local',
    value: 'City and Local Policy',
    label: 'City and Local Policy',
  },
  {
    id: 'other_data_types',
    value: 'Other',
    label: 'Other...',
  },
]);

const geo_scope = readable([
  {
    id: 'global',
    value: 'Global',
    label: 'Global',
  },
  {
    id: 'east_asia_pac',
    value: 'East Asia & Pacific',
    label: 'East Asia & Pacific',
  },
  {
    id: 'europe_c_asia',
    value: 'Europe & Central Asia',
    label: 'Europe & Central Asia',
  },
  {
    id: 'latin_a_caribbean',
    value: 'Latin America & the Caribbean',
    label: 'Latin America & the Caribbean',
  },
  {
    id: 'middle_e_n_africa',
    value: 'Middle East & North Africa',
    label: 'Middle East & North Africa',
  },
  {
    id: 'north_america',
    value: 'North America',
    label: 'North America',
  },
  {
    id: 'south_asia',
    value: 'South Asia',
    label: 'South Asia',
  },
  {
    id: 'sub_sahara',
    value: 'Sub-Saharan Africa',
    label: 'Sub-Saharan Africa',
  },
]);

const data_focus = readable([
  {
    id: 'mitigation',
    value: 'Climate change mitigation',
    label: 'Climate change mitigation',
  },
  {
    id: 'adaptation',
    value: 'Climate change adaptation',
    label: 'Climate change adaptation',
  },
  {
    id: 'loss_damage',
    value: 'Loss and Damage',
    label: 'Loss and Damage',
  },
  {
    id: 'disaster',
    value: 'Disaster Risk Management & Disaster Risk Reduction',
    label: 'Disaster Risk Management & Disaster Risk Reduction',
  },
  {
    id: 'other_data_focus',
    value: 'Other',
    label: 'Other...',
  },
]);

const policy_databases = readable([
  {
    id: 'cclw',
    value: 'Climate Change Laws of the World',
    label: 'Climate Change Laws of the World (from Grantham Institute, LSE)',
  },
  {
    id: 'cpd',
    value: 'Climate Policy Database',
    label: 'Climate Policy Database (from New Climate Institute)',
  },
  {
    id: 'iea',
    value: 'IEA-IRENA',
    label: 'IEA-IRENA',
  },
  {
    id: 'preventionweb',
    value: 'PreventionWeb (from UNDRR)',
    label: 'PreventionWeb (from UNDRR)',
  },
  {
    id: 'none',
    value: 'None of the above',
    label: 'None of the above',
  },
  {
    id: 'other_policy_databases',
    value: 'Other',
    label: 'Other...',
  },
]);

const affiliation_types = readable([
  {
    value: 'Academia',
    label: 'Academia',
  },
  {
    value: 'Public Sector',
    label: 'Public Sector',
  },
  {
    value: 'Private Sector',
    label: 'Private Sector',
  },
  {
    value: 'IGO',
    label: 'IGO',
  },
  {
    value: 'NGO',
    label: 'NGO/not-for-profit organisation',
  },
  {
    value: 'Individual',
    label: 'Individual',
  },
  {
    value: 'Other',
    label: 'Other...',
  },
]);

const referral = readable([
  {
    value: 'Word of mouth',
    label: 'Word of mouth/recommendation',
  },
  {
    value: 'Event',
    label: 'Saw/heard us at an event',
  },
  {
    value: 'Search engine result',
    label: 'Search engine result',
  },
  {
    value: 'Blog or publication',
    label: 'Blog or publication',
  },
  {
    value: 'Job listing',
    label: 'Job listing',
  },
  {
    value: 'LinkedIn',
    label: 'LinkedIn',
  },
  {
    value: 'Twitter',
    label: 'Twitter',
  },
  {
    value: 'Other social media',
    label: 'Other social media',
  },
  {
    value: 'Other',
    label: 'Other...',
  },
]);

export {
  data_types,
  geo_scope,
  data_focus,
  policy_databases,
  affiliation_types,
  referral,
};
