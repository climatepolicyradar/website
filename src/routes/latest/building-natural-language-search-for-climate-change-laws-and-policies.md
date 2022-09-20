---
layout: latest
title: Building natural language search for climate change laws and policies
date: 20 September 2022
thumb: /images/building-natural-language-search-for-climate-change-laws-and-policies/natural-language-search-on-climate-policy-radar.jpg
topics:
  - Blog
excerpt: Our goal is to make it easier and faster to interrogate climate change
  laws and policies. This blog post details how and why we designed the search
  function of Climate Policy Radar's app the way we did, using natural language
  search.
author: Kalyan
featured: true
---
There is no guide book to tackling climate change. So often, the best way to figure out what works and what doesn’t is to learn from evidence, so that decision-makers can replicate successful decisions and avoid failed ones. 

As laws and policies are critical in achieving temperature and resilience goals, we knew that opening up existing but hard-to-access sources of information on these documents would be a vital first step towards building such an evidence base for climate policy. 

We wanted to make it easier and faster to interrogate climate change laws and policies. So we built an app that allows people to search the full text of the thousands of laws and policies [in our database](https://climatepolicyradar.org/latest/climate-policy-radar-launches-its-global-climate-policy-database), which we’ve sourced (to start with) from our partners at the [Grantham Research Institute at LSE](https://www.lse.ac.uk/granthaminstitute/). This blog post details how and why we designed the search function of our app the way we did, using natural language search.

## The problem with keyword-based search

If you’re a civil servant, researcher or concerned citizen researching climate change strategies, you will often want to find parts of laws or policies related to a specific concept or theme, such as ‘low carbon fuels’, ‘urban mitigation’ or ‘marine toxins’. You would probably do one or more of the following:

* Use an [existing policy database](https://climate-laws.org/) to search for laws and policies that might contain concepts of interest, and then scroll down the documents  (or use ‘ctrl find’) to find them.
* Google your search terms - you are not very likely to get search results that include the original laws and policies, and even if you do find the document, you’d have to find your concept in it.
* Tap into professional networks or read research reports to identify where and how certain ideas were implemented, and then find the original laws and policies through either a policy search engine or a government website.

On top of that, a significant drawback is that you would have to work hard to capture all the different ways a concept such as ‘urban mitigation’ might be mentioned in policy, and could fall victim to your own blind spots and those of your professional networks. In doing this, you’d likely miss key policy actions that could help to inform future climate policy.

So, we set out to build a way for people to be able to conceptually search large collections of laws and policies, also known as ‘semantic’ or ‘natural language’ search.

## What is natural language search?

Natural language search allows you to find what you’re looking for without having to type out precise keywords. This is useful because often certain concepts are described in lots of different ways - like ‘internal combustion engines’, ‘internal combustion engine vehicle’, ‘ICEV’, ‘fossil fuel car’, and ‘gasoline car’ all describe most of the cars you’ll find on today’s roads. With natural language search, you can use the terms you use and hear every day because the tool will recognise them as related and relevant terms, meaning you get a much richer search experience.

Take a look at the example below to see this in action.

![A screenshot showing how natural language search gives better results than exact keyword search on the Climate Policy Radar app](/images/building-natural-language-search-for-climate-change-laws-and-policies/natural-language-search-of-climate-laws-and-policies.jpg "Natural language search on Climate Policy Radar")

*Left: natural language search reveals that there are several parts of policies relevant to the concept of ‘urban mitigation’. Right: an exact search on Climate Policy Radar for ‘urban mitigation’ returns no results.*

## Building natural language search

To enable natural language search for climate laws and policies, we leant on recent advances in machine learning - namely [transformer models](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)) and [self-supervised learning](https://neptune.ai/blog/self-supervised-learning). 

We built our semantic search using a method called ‘dense retrieval’, where each phrase in our climate policy and law database (corpus) is converted into a vector. Each of these vectors is a coordinate in a shared space, and the space they exist in is essentially a map of meaning - the closer together two vectors, the more similar they are in meaning. So when a user enters a query, the search term is converted into a vector in the same space, and the closest phrases in our policy text corpus are returned as these are the ones with most similar meaning.

![A diagram showing different text passages represented as vectors](/images/building-natural-language-search-for-climate-change-laws-and-policies/dense-retrieval-for-urban-mitigation-on-climate-policy-radar.jpg "Dense retrieval for the search query ‘urban mitigation’")

*Dense retrieval for the search query ‘urban mitigation’. The two passages related to the concept of ‘urban mitigation’ are returned as their vectors are closest to that of the query.*

Doing this allowed natural language search - after entering a query, our app would return phrases in policy text that were semantically similar to the query they’d entered. This also overcame the problem of ‘vocabulary mismatch’, which is where different words describe the same thing.

Dense retrieval on its own isn’t the most effective way to build semantic search, though. Why? [The model we used](https://huggingface.co/sentence-transformers/msmarco-distilbert-dot-v5) was trained on all of [BookCorpus](https://arxiv.org/abs/1506.06724v1) and English Wikipedia and then tailored (‘fine-tuned’ in tech speak) for search using a dataset called MSMarco. This means that while it has an understanding of many common concepts, it starts to fall down when applied to a more specific domain - say, climate policy.

A way around this is to run ‘[fuzzy text searches](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html)’ in parallel to semantic searches. This ensures that a user is returned passages with words from their query if they exist, even if the semantic search model doesn’t understand what these words mean. After some tweaking, we built a search function that performs the following searches when a user enters a query, each of which has a different amount of influence on the final ranking of the text passage and document in the search results list:

* semantic search and fuzzy text search on text within documents
* semantic search and fuzzy text search on document descriptions
* exact text search and fuzzy text search on document titles.

What’s next for Climate Policy Radar?

We’ve still got a way to go with improving the search function of our app. In the next few months we will:

* Develop methods to improve our fuzzy search, and finetune our semantic search model so it better understands the climate policy domain. 
* Enable search in multiple languages, through extending our natural language search to work across non-English languages, extracting text from PDFs in multiple languages, and automatically translating this text.
* Conduct bias and ethics review to understand and start to mitigate any harmful biases in this model.

We’re also working on using machine learning to pull concepts (like technologies and climate targets) out of our law and policy dataset; preparing to serve our user interface in multiple languages; and scaling our architecture to serve our users. 

Climate Policy Radar is free for everyone to use - [head to our growing app](https://app.climatepolicyradar.org/) to test out our natural language search yourself and begin exploring climate change laws and policies from all over the world now.

We’re keeping a diary of the updates we make [in our changelog](https://climatepolicyradar.notion.site/Climate-Policy-Radar-s-Public-Changelog-1f028d2141e946adaebb8a420f50029c) - follow it and send us your thoughts as we iterate and learn. Later in the year we will release our public roadmap. You can also [follow us on social media](https://twitter.com/climatepolradar).