---
title: "Machine Learning Glossary"
date: 2020-02-11T17:35:22-05:00
draft: false
tags: ["machine learning", "deep learning", "computer vision"]
showToc: true
TocOpen: true
hidemeta: false
comments: false
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
summary: Glossary of terms from Machine Learning, Computer Vision, Natural Language Processing, and Statistics.
---

## I.I.D. Assumption

I.I.D. stands for Independent and Identically Distributed. In the standard supervised learning setting, we assume that the training and test data are drawn independently from identical distributions. This is commonly called the IID assumption.

**References**

- [On the importance of the i.i.d. assumption in statistical learning](https://stats.stackexchange.com/a/214315)

---

## Generalization

Generalization is a definition to demonstrate how well is a trained model to classify or forecast unseen data. Refers to your model's ability to make correct predictions on new, previously unseen data as opposed to the data used to train the model.

**References**

- [UToronto - Generalization](https://www.cs.toronto.edu/~lczhang/321/notes/notes09.pdf)

---

## Sequence Models

Sequence models are a type of machine learning model that are designed to work with sequential data, such as time series data or natural language. In general, sequence models aim to learn the underlying patterns and dependencies within a sequence of data, and use this knowledge to make predictions or generate new sequences.

## Boosting

Bagging is a technique where multiple models are trained on random samples of the training data set, with replacement. These models are then aggregated, usually by taking the average of their predictions, to create a final prediction. The idea behind bagging is that by training multiple models on different subsets of the data, we can reduce the variance of the model and improve its generalization performance.

## Bagging

Boosting is a technique where multiple weak models are combined to form a strong model. In boosting, each model is trained on a weighted version of the training data set, with the weights changing in each iteration to emphasize the samples that were misclassified in the previous iteration. The idea behind boosting is to focus on the samples that are hard to classify and gradually improve the model's accuracy by iteratively adjusting the weights of the training data set.
