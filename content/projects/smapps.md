---
title: "Smapps"
date: 2016-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["machine learning", "android", "clustering", "python", "web-scraping"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: false
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Find Similar Android Apps"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
editPost:
    URL: "https://github.com/mhetrerajat/mhetrerajat.github.io"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

- Scraped around 60K apps along with their description, rating, rating histogram and the number of reviews, installs.
- Create features from app description with a bag of words methodology to remove stop words along with TF- IDF to prioritize important words.
- Designed a model with K Nearest neighbor to retrieve similar apps.
- Designed K-means clustering to find create categories of similar apps.

**Tech Stack: Python, Pandas, Selenium, beautifulsoup, scikit-learn, Flask**
