---
layout: latest
title: Using machine learning to classify climate targets
date: 16 May 2024
thumb: /images/using-machine-learning-to-classify-climate-targets/newplot.png
topics:
  - Blog
excerpt: >-
  With the first biennial transparency report (BTR) submissions due to the
  UNFCCC this year, and the next round of nationally determined contributions
  (NDCs) in 2025, all eyes will be on targets: reporting on targets, and
  progress against them. 


  That is why the team at Climate Policy Radar has developed a classifier that automatically extracts net zero targets, emissions reduction targets, and any other quantified target by a national government.
featured: false
---
With the first [biennial transparency report](https://unfccc.int/biennial-transparency-reports) (BTR) submissions due to the UNFCCC this year, and the next round of [nationally determined contributions](https://sdg.iisd.org/news/un-initiative-enters-next-phase-to-support-new-round-of-ndcs/#:~:text=The%20next%20round%20of%20nationally,is%20able%20to%20do%20so.%E2%80%9D) (NDCs) in 2025, all eyes will be on targets: reporting on targets, and progress against them. 

That is why the team at Climate Policy Radar has developed a classifier that automatically extracts net zero targets, emissions reduction targets, and any other quantified target by a national government.

**Targets**

Quantified targets (i.e. the reduction of emissions by a certain date, or targets for energy production from renewables) are one of the best indicators available for the level of ambition on climate, indicating the direction of travel and speed of a country’s intended actions. Targets are a critical tool of accountability, drive momentum, and create understanding of cumulative progress in an area to help identify, for example, where more resources need to be deployed. 

Targets guide the creation and implementation of national, regional and local policies; can provide signals for the private sector, shaping economic activities such as investment decisions; create a frame for accountability, through civil society and the legal system, and generate momentum for increased ambition, as countries take cues from each other. 

**CPR’s targets classifier**

Target identification is resource intensive work. At present, there are few scalable methods for extracting climate targets from national laws or policies, instead relying heavily on manual research, which involves sifting through long, technical documents.

In order to scale and accelerate target identification, the team at Climate Policy Radar has trained a machine learning model to automatically extract and identify targets from our database of 6000+ relevant documents from all jurisdictions: national climate laws, policies, and UNFCCC submissions, and developed an interface that allows users to explore this dataset.

Our classifier automatically extracts net zero targets, emissions reduction targets, and any other quantified target by a national government.

Targets can be difficult to define; confirming whether or not there is intent (i.e. if a target has been set or is merely being discussed) can be hard to determine. We have used a broad and inclusive definition of targets, testing definitions based on ClimateBERT-NetZero [methodology](https://aclanthology.org/2023.emnlp-main.975.pdf), Net Zero Tracker [codebook](https://zerotracker.net/methodology). It includes any quantifiable net-zero target (national or sector level) for any type of GHG (carbon dioxide, methane, or all GHGs). This means we are able to capture language that is often excluded from emissions reduction definitions, such as ‘zero emissions’, ‘climate positive’ and ‘science-based targets’.

Our Targets Explorer allows you to explore and visualise these different target types, target and publication years, sources, and geographies. You can use the tool to explore: 

* Different target types (net zero, reduction, other) by the year in which they were set
* Target deadlines by the year in which they were set
* The 10 largest sub-categories of ‘other’ targets by the year in which they were set
* Targets across climate laws, policies, and UNFCCC submissions by the year in which they were set
* Targets by geography, world bank region, or political group by the year in which they were set

![](https://lh7-us.googleusercontent.com/YjHeCY4XRZcMjLIVTb53OmaF2-dF0ToQ8sTqV74x7R4FE2ENaUgWNCtvXnmLMcjmEdjflwNx3VBo9yefTy_YqoaXVyKYmiI1fMjp1G2EChZ7OmI3T3wBBQK8mgr6JPPWPgN07yggobnhABibxHWpmpw)

Visual from Climate Policy Radar Labs: Targets Explorer

We hope that this work enables users to explore the breadth and depth of climate-related national targets in greater detail, and to identify gaps, trends, and opportunities at scale.

Climate Policy Radar is open data and open source: our data and code are free to use, and our Targets dataset and model are publicly available at the links below. Our open science approach is deliberate and serves as a springboard for innovation, so we invite you to ideate, provide feedback and learn with us.

Our data scientists Kalyan Dutia and Mátyás Juhász presented a paper on Targets at [ICLR 2024](https://iclr.cc/) – The Twelfth International Conference on Learning Representations on 11th May 2024. You can read the paper here: <https://arxiv.org/abs/2404.02822>

**Relevant links**

Targets Explorer: [https://labs.climatepolicyradar.org/targets](https://labs.climatepolicyradar.org/targets/)  

Dataset: <https://huggingface.co/datasets/ClimatePolicyRadar/national-climate-targets> 

Model: <https://huggingface.co/ClimatePolicyRadar/national-climate-targets>