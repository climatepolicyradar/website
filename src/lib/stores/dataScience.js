import { readable, writable } from 'svelte/store';

const activeTabIndex = writable(0);

const dataScience = readable([
  {
    title: 'Extracting text: document parsing',
    description1:
      'We are building and training machine learning models that can automatically read and extract text from PDFs and websites, enabling us to structure and share information from thousands of law and policy documents. This will mean we can massively ramp up the speed of data collection as we find new data sources. <a href="https://github.com/climatepolicyradar" target="_blank">Access our GitHub page for more information</a>.',
    icon: 'text',
  },
  {
    title: 'Natural language search',
    description1: 'Our application of machine learning is tackling blind spots in policy research by making it quicker, easier and more intuitive to search climate policies and laws. Our tool identifies similar and related terms to search queries, so there is no need to rely on typing specific keywords into the search bar to find relevant information. <a href="https://climatepolicyradar.org/latest/building-natural-language-search-for-climate-change-laws-and-policies" target="_blank">Find out how our natural language search works</a>.',
    icon: 'semanticSearch',
  },
  {
    title: 'Text classification and information retrieval',
    description1:
      'We are training machine learning models to identify and link useful concepts across the texts of thousands of documents. This will allow understanding of, for example, how governments address different extreme weather events, or regulate various environmental technologies. Using existing taxonomies and new bespoke ones, we will help identify concepts quickly, pinpoint trends and highlight gaps.',
    icon: 'textMagnifier',
  },
  {
    title: 'Multi-language approach',
    description1:
      '<strong>Search in English, find results in all languages:</strong> We are working towards allowing our users to input a search term in English but get results from documents that are published in different languages, plus an English translation.',
    description2:
      '<strong>User interface in other languages:</strong> We will use machine translation to offer our tool in other languages, including  all six official UN languages.',
    icon: 'docSwitch',
  },
  {
    title: 'Open knowledge graph',
    description1:
      'We are working towards an open knowledge graph that joins the dots between points in our growing structured dataset, revealing gaps, risks and opportunities. This will open up the ability to explore our data in new ways, and connect it to other datasets and APIs to start to measure the impacts of policy decisions.',
    icon: 'knowledge',
  },
  {
    title: 'Analytical tools',
    description1:
      'We will develop tools to allow stakeholders to generate their own insights, including linking our data with ‘real-world’ external data like carbon emissions. This will make it easier to link actions to outcomes, and facilitate modelling of policy effectiveness and risk analyses.',
    icon: 'graph2',
  },
]);

export { dataScience, activeTabIndex };
