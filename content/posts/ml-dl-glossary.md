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
math: true
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

## Bias - Variance Tradeoff

Bias refers to the error that occurs when a model is unable to capture the true relationship between the input features and the target variable. A model with high bias is typically oversimplified and may underfit the training data, resulting in poor accuracy on both the training and test data sets.

Variance, on the other hand, refers to the error that occurs when a model is too complex and tries to fit the training data too closely. Models with high variance tend to overfit the data, which means they perform well on the training data but fail to generalize to new data.

The trade-off between bias and variance can be explained as a seesaw where increasing one comes at the expense of the other. It refers to the balance between a model's ability to fit the training data (low bias) and its ability to generalize to new data (low variance).

## Self-Attention Mechanism

Self-attention was introduced in the Transformer architecture as an alternative to recurrent neural networks (RNNs) for capturing dependencies between tokens in a sequence.

The self-attention mechanism in the Transformer architecture is based on three learned matrices: the query matrix, the key matrix, and the value matrix. The matrices are used to compute the attention scores for each token in the input sequence, and the attention scores are then used to weight the values of the other tokens in the sequence to compute the output of the self-attention mechanism.

$$ Attention(Q, K, V) = softmax(QK^T / \sqrt(d_k)) * V $$

where `Q`, `K`, and `V` are the query, key, and value matrices, respectively, and d_k is the dimensionality of the key vectors. The softmax function is applied row-wise to the matrix `QK^T / sqrt(d_k)` to obtain the attention scores, which are then used to weight the values in the matrix `V` to obtain the output of the self-attention mechanism.

Intuitively, the attention scores represent the similarity between the query vectors and the key vectors for each token in the input sequence, and are used to weight the values of the other tokens to obtain a weighted sum that represents the output of the self-attention mechanism. The `sqrt(d_k)` term is included to stabilize the gradients during training.

### How are the values of Q, K, and V determined?

The values for query (Q), key (K), and value (V) vectors are learned during the training process. The input sequence of tokens is first embedded into a sequence of embedding vectors, and then each of these embedding vectors is transformed into query, key, and value vectors through linear transformations. These linear transformations are learned during training, and they enable the model to map the input tokens to higher-dimensional representations that capture the relevant semantic information for the task at hand.

The specific transformation used to compute the query, key, and value vectors is determined by the architecture of the model. In the case of the Transformer architecture, the query, key, and value vectors are computed by applying three different learned linear transformations to the input embedding vectors. These transformations are parameterized by learned weight matrices, which are updated during training to optimize the model's performance on the task at hand.

</details>
