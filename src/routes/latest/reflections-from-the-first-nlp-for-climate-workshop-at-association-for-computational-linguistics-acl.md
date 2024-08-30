---
layout: latest
title: Reflections from the first NLP for climate workshop at Association for
  Computational Linguistics (ACL)
date: 29 August 2024
thumb: /images/reflections-from-the-first-nlp-for-climate-workshop-at-association-for-computational-linguistics-acl/1716195663467.jpg
topics:
  - Blog
excerpt: NLP research has great potential for climate impact in applications
  ranging from misinformation detection to better intercultural communication.
  We unearthed these use cases at the first NLP for Climate workshop at ACL 2024
  in Bangkok.
author: Kalyan Dutia
featured: false
---
NLP research has great potential for climate impact in applications ranging from misinformation detection to better intercultural communication. We unearthed these use cases at the first NLP for Climate workshop at ACL 2024 in Bangkok.

Until recently, Natural Language Processing (NLP) has been under-appreciated in climate spheres. [Climate Change AI](https://www.notion.so/Papers-from-first-Climate-NLP-workshop-ACL-2024-67b6a2d1f76c4cfab308dc7de6f49e27?pvs=21) runs workshops at all of the major Machine Learning (ML) and AI conferences every year. But these are dominated by AI applications like remote sensing and weather forecasting – which tend to use computer vision and time-series methods respectively.

That’s why together with our collaborators from ETH Zurich, the University of Zurich and the University of Oxford we organised the Climate NLP workshop at the 2024 Association for Computational Linguistics conference (ACL), the first workshop of its kind to bring together NLP and climate.

## Key takeaways

**Climate NLP is just getting started.** Running the first climate workshop at a major NLP conference felt like a moment to draw a line in the sand. We’ve grown a community of practitioners and researchers over the last few years, but there is still lots of work to do in order for climate change to be given more of a platform within the NLP community. 

**Real-world benchmarks are needed for climate.** Now that we have a growing community around this work, we need to ensure that the science of NLP is considered in a climate context. Many researchers advocated for rigorous benchmark datasets for climate.

**Effective intercultural communication is an open problem for NLP.** Whilst LLMs let us produce more text, faster, there’s a risk of leaving cultures behind due to their languages or cultural norms. This is especially important in a climate context, where those most affected by the climate crisis may not have their languages or cultures represented in LLM training data.

**Smaller LLMs are becoming incredibly useful.** Everyone, everywhere is distilling the knowledge of larger LLMs such as GPT4 into smaller ones to produce models that are specialist rather than generalist: great at one thing (such as rewriting search queries) and much cheaper to run.

## Keynotes: integrity and accountability, greenwashing, ClimateGPT and a look at progress

The keynote sessions at the workshop brought together some of the brightest minds working at the intersection of climate policy and NLP, offering deep dives into how emerging technologies can drive integrity, accountability, and real progress in addressing climate challenges.

Angel Hsu, founder and director of the [Data-Driven EnviroLab](https://datadrivenlab.org/), kicked off the keynotes with a talk on “Enhancing Climate Policy Integrity and Accountability with NLP”, where she gave a clear and motivating introduction to why NLP is vital to address accountability via filling data gaps. She also spoke about some of her team’s work on [ChatNetZero](https://chatnetzero.ai/) ([see accompanying research paper](https://openreview.net/forum?id=MmTaM7lmvu)).

The next keynote was by Gaku Morio, a Visiting Scholar at Stanford University. Last year, Gaku published work creating “[An NLP Benchmark Dataset for Assessing Corporate Climate Policy Engagement](https://www.semanticscholar.org/paper/An-NLP-Benchmark-Dataset-for-Assessing-Corporate-Morio-Manning/e041ff145b40f5dc2d5702b498e4a4ebc61adc57)” using data from thinktank InfluenceMap. Their work focuses on greenwashing and climate obstruction. Gaku gave a conceptual overview of how companies’ greenwashing can be detected using NLP and other data sources.

David Thulke, co-author of ClimateGPT, gave the most technical keynote of the day about what goes on under-the-hood when you try to train a climate-aligned large language model (LLM) from scratch. Very few people in the world have this expertise – and we were fortunate to have him presenting his work on doing this in a climate context.

Markus Leippold – one of the most prominent researchers to apply NLP to climate issues in the era of transformers – closed out the day. He spoke about the progress in the climate NLP community since he started working on these problems in 2017, and reminded us that this was only the first Climate NLP workshop: this platform for researchers is only just beginning to emerge.

## Climate NLP papers 

20 paper submissions were accepted to the workshop in total, which were presented as a mix of posters and short presentations. Below is a summary of some of the impressive, diverse and far-reaching research: you can browse the full list [here](https://openreview.net/group?id=aclweb.org/ACL/2024/Workshop/ClimateNLP#tab-accept).

### Climate policy and literature analysis

**Challenges in End-to-End Policy Extraction from Climate Action Plans** - *Nupoor Gandhi, Tom Corringham, Emma Strubell*\
NLP research can sometimes suffer from being too far-removed from the real world: actual policy data is in messy, hard-to-read PDFs. Using Californian Climate Action Plans as a case study, Nupoor and co-authors assessed the performance of state-of-the-art techniques in each of the processes required to produce decision-useful text from these documents.

**Evaluating ChatNetZero, an LLM-Chatbot to Demystify Climate Pledges** - *Angel Hsu, Mason Laney, James Zhang, Diego Manya, Linda Farczadi*\
After the release of their tool earlier this year (which helps you to analyse targets from the Net Zero Tracker dataset), it was great to see this paper. One takeaway from their work on ChatNetZero was that experts tend to prefer longer responses from systems like ChatGPT. Interestingly, this preference held true even when "embellishing language" was used: statements that are difficult to verify as either supporting or opposing climate action. For example, a phrase like "xxx is very aware of the importance of carbon neutrality" sounds positive, but doesn't actually commit to any specific stance or action on climate issues.

### Sustainability reporting and risk assessment

**Statements: Universal Information Extraction from Tables with Large Language Models for ESG KPIs** – *Lokesh Mishra, Sohayl Dhibi, Yusik Kim, Cesar Berrospi Ramis, Shubham Gupta, Michele Dolfi, Peter W. J. Staar*\
Extracting information from tables in PDFs is tricky, especially when you start to introduce nested rows and columns. Mishra and coauthors presented an approach to extract tables as sets of ‘statements’. They demonstrated that this can then be easily compared. This is a big step in being able to compare data locked in tables across climate-related documents.

### Intercultural communication in a climate context

**Envisioning NLP for intercultural climate communication** – *Steven Bird, Angelina Aquino, Ian Mongunu Gumbula*\
Based on workshops held with Aboriginal communities in Northern Australia on climate communication, the authors of this work advocated for an approach to NLP which goes beyond information broadcast or transmission in a cross-cultural communication context. This approach allows all sides of a conversation to build shared meaning and understanding. This was an incredibly inspiring step back: a reminder that even with state-of-the-art machine translation, we need to do more work to include different perspectives.

### Climate misinformation, debunking and claim detection

**EnClaim: A Style Augmented Transformer Architecture for Environmental Claim Detection** – *Diya Saha, Manjira Sinha, Tirthankar Dasgupta*\
This paper’s authors look at what happens when you provide some extra features to a model related to linguistic style – e.g. vagueness, and social and affective factors. Their approach improves on baselines on environmental claim detection by a significant amount.

### NLP applied to climate change

**CLIMATELI: Evaluating Entity Linking on Climate Change Data** – *Shijia Zhou, Siyao Peng, Barbara Plank*\
Entity linking is about disambiguating who, where or what is mentioned in some text data by connecting mentions of entities to a knowledge base such as Wikipedia. This is the first work which studies this problem in a climate context. They find that entity linking in the climate domain performs poorly, and produce a benchmark dataset which can be used to test future approaches to this problem.

## Beyond climate: Insights from elsewhere in the conference 

As well as co-hosting the Climate NLP workshop we had a chance to attend other workshops: a useful reminder that themes around climate NLP problems go beyond climate-specific language, communication, or documents.

There was significant overlap between the first [Human-Centered Large Language Modelling](https://hucllm-workshop.github.io/) workshop and our own. Particular highlights were [Barbara Plank](https://bplank.github.io/) speaking about where we can use differing opinions of labellers to our advantage in NLP (they are currently treated like errors), and [Vered Shwartz](https://www.cs.ubc.ca/~vshwartz/) convincingly arguing that we need to carefully consider intercultural communication using LLMs, as she has shown them to contain cultural biases. Another workshop shared insight into working with LLMs on Retrieval Augmented Generation (RAG) problems, which was hugely relevant to Climate Policy Radar’s own work on generative AI and our RAG tool, which we are launching at the Google.org Impact Summit in San Francisco. More on that next week, so watch this space...

Researchers and practitioners from the conference (and more widely) are sharing their work and ideas in an online community that Climate Policy Radar convenes. [If you’re working on Climate NLP and would like to join this community, please reach out.](mailto:info@climatepolicyradar.org)