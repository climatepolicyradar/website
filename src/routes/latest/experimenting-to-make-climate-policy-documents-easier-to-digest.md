---
layout: latest
title: Experimenting to make climate policy documents easier to digest
date: 15 February 2023
thumb: /images/experimenting-to-make-climate-policy-documents-easier-to-digest/cpr-timeline.jpg
topics:
  - Blog
excerpt: We recently experimented with some common natural language processing
  techniques to turn laws and policies into timelines of the dates mentioned
  within them, a potentially efficient and powerful way to present key
  information from long law and policy documents.
author: Kalyan Dutia
featured: false
---
We recently experimented with some common [natural language processing](https://climatepolicyradar.org/latest/building-natural-language-search-for-climate-change-laws-and-policies) techniques to turn climate policies and laws into timelines of the dates mentioned within them. Dates can serve as key data points to track progress and climate commitments - who committed to halving emissions by 2030, phasing out gasoline and diesel cars by 2028, or doubling renewables by next year? 

We think timelines can be an efficient and powerful way to present key information from long law and policy documents (the average length of laws and policies in our database is over 60 pages), making them easier to digest by the people tasked with their analysis. Our idea was inspired by a demo we saw on [building a timeline from a Wikipedia page](https://observablehq.com/@winkjs/how-to-visualize-timeline-of-a-wiki-article).

## Building a prototype to extract dates from climate policies - the data science details

Our approach was simple: we identified mentions of date entities using a pre-trained [spaCy](https://spacy.io/) pipeline, filtered year mentions using regex, and extracted (parsed) these to dates using the python [dateparser](https://dateparser.readthedocs.io/en/latest/) library (e.g. ‘November 2019’ became day=01, month=11, year=2019).

As the resulting timelines were sometimes very long, we decided to split them by preposition - for example ‘since 2019’, ‘by 2019’ and ‘in 2019’. This can also help to signal the context in which dates are discussed in the text, such as goals. 

We noticed some false positives - the timeline view was extracting dates that were in references (for example, the timeline picked up the year from citations within the text, such as  \[Title], \[Author], 2019).  We would exclude these in a future version by pattern matching on common reference formats.

![A demo of the timeline view of a document in Climate Policy Radar's database](/images/experimenting-to-make-climate-policy-documents-easier-to-digest/cpr-timeline.jpg "A demo of the timeline view of a document in Climate Policy Radar's database")

*This demo shows how our prototype extracted dates and related prepositions from the UK policy “[Greening Finance: A Roadmap to Sustainable Investing](https://app.climatepolicyradar.org/document/united-kingdom_2021_greening-finance-a-roadmap-to-sustainable-investing_10239_4855)”.*

## Generating policy insights

There are lots of ways that tracking dates in policies could generate valuable insights. The data could make it easier to identify the deadlines by which governments have committed to actions or goals, and to analyse delivery of policy and strategies - i.e. whether governments tend to overpromise and underdeliver, or vice versa.

Dates could be a useful way to take stock of action and ambition on a particular issue across governments, like the phase-out of fossil fuel cars by country - an area to watch given the rise in data and movements on this issue in recent years. Longer-term, it may also be possible to assess whether ambition in some countries influences or stokes ambition in others.

We also [spotted another interesting use](https://twitter.com/NachmanyMichal/status/1605196753527050240) of this timeline view, discovering that the Dutch [2016 National Climate Adaptation Strategy](https://app.climatepolicyradar.org/document/netherlands_2016_national-climate-adaptation-strategy_8708_1447) mentions 2020, and then doesn’t have any explicit commitments until 2050. This could signal a (problematic) lack of detailed planning for the medium term. However these details could also exist in other policy documents, so the next step would be to aggregate them at the country level - something we’re looking to work on next.

To explore this further, we fetched the years mentioned in a sample of national adaptation strategies in our database. What we saw indicated that most strategies tended to only mention a few ‘landmark’ dates, e.g. 2015, 2030, 2050, with no explicit planning for years in between these.

![A second demo of documents in the Climate Policy Radar database organised by country with dates extracted](/images/experimenting-to-make-climate-policy-documents-easier-to-digest/timeline-view-cpr.png "Documents organised by country with dates extracted")

*This [demo shows](https://twitter.com/KDutia/status/1605207519265280000) all the years mentioned in various countries’ adaptation strategies, ordered by least years mentioned to most.*

## What next?

This experiment has given us lots of ideas related to future research directions and product features, a few of which were contributed by a helpful Twitter community:

### Potential product features

* An automated timeline of key events on country pages within the [Climate Policy Radar tool](https://app.climatepolicyradar.org/).

### Generating useful insights

* Finding temporal patterns (trends and gaps) in policy documents can provide signals about national and aggregate climate action and ambition. 
* Governments mentioning past dates in documents could signpost previous policy actions they’ve taken, providing a useful start in linking policies together by their references.

Experiments like this are a springboard for us to scrutinise and iterate on early ideas we’re testing out, and we’re gearing up to do more. We’ve been greatly benefiting from our network’s ideas - so if you want to share yours, [please get in touch](https://climatepolicyradar.org/contact).