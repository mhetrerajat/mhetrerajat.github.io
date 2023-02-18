---
title: "Sequence Models"
date: 2023-02-18T11:04:21-05:00
draft: true
tags: ["Sequence Models", "Recurrent Neural Networks", "Long Short-Term Memory", "gated r"]
showToc: true
TocOpen: true
hidemeta: false
math: true
comments: false
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
summary: Deep dive into Sequential Data and Sequence Models
---

## Introduction

Many real-world problems involving sequential data, such as time series data or natural language, the current data point is often dependent on previous data points in the sequence. For example, in natural language, the meaning of a word can depend on the context of the previous words. In a time series, the current value may depend on the previous values in the series.

To capture these dependencies, we need a way to incorporate information from previous data points into our predictions about the current data point. One way to do this is to use a fixed-length window of previous data points, but this approach can be limited because the window size may not be appropriate for all situations.

RNNs, on the other hand, can capture long-term dependencies in sequential data by maintaining a "memory" of previous data points.

## RNNs

The basic RNN architecture consists of a set of recurrently connected cells, where each cell takes an input vector x_t at time step t and produces an output

vector h_t at the same time step, along with a hidden state vector h_{t-1} that is passed from the previous time step. The output vector h_t is then passed to the next time step as the hidden state h_{t-1}.

The equations for a simple RNN cell can be written as:

$$h_t = \tanh(W_{xh} * x_t + W_{hh} * h_{t-1} + b_h)$$
$$y_t = W_{hy} * h_t + b_y$$

Where:

- h_t is the hidden state at time step t
- x_t is the input at time step t
    y_t is the output at time step t
    W_{xh} is the weight matrix connecting the input to the hidden state
    W_{hh} is the weight matrix connecting the previous hidden state to the current hidden state
    W_{hy} is the weight matrix connecting the hidden state to the output
    b_h and b_y are the bias terms for the hidden state and output, respectively
    \tanh is the activation function (commonly the sigmoid function or hyperbolic tangent function)

The input vector x_t, the hidden state vector h_t, and the output vector y_t can all be vectors of any length, depending on the specific problem being solved.

## LSTM (Long Short Term Memory)

Sure, let's say we want to use a language model to predict the next word in the following sentence:

"I want to buy a _____"

If we were using a basic RNN for this task, the network would process the input sequence "I want to buy a" one word at a time, maintaining a hidden state that represents its "memory" of the previous words. However, if the sequence is long or has complex dependencies, the gradients used for updating the network's weights can become very small, making it difficult for the network to capture long-term dependencies.

LSTM networks were designed to address this problem by introducing a gating mechanism that allows the network to selectively update and forget information from the previous hidden state. For example, let's say the LSTM network has already processed the words "I want to buy" and is now trying to predict the next word. The network will first take the hidden state from the previous time step and compute three different gates: the input gate, the forget gate, and the output gate.

The input gate controls how much new information is added to the cell state, which represents the network's "memory" of the previous inputs. In our example, the input gate might decide to add information about the type of product that the person wants to buy, based on the context of the previous words.

The forget gate controls how much information is removed from the cell state, allowing the network to selectively forget information that is no longer relevant. For example, if the person changes their mind about what they want to buy, the forget gate might remove the information about the original product they were considering.

The output gate controls how much information is used to compute the output. For example, if the LSTM network is being used for text generation, the output gate might control how much of the previous hidden state is used to generate the next word in the sequence.

By selectively updating and forgetting information in the cell state, LSTM networks are able to better capture long-term dependencies in the input sequence, allowing them to generate more accurate predictions.

### Timeline

- 1997: Original LSTM architecture proposed by Hochreiter and Schmidhuber
  - Introduced the LSTM cell, consisting of an input gate, an output gate, a forget gate, and a memory cell
  - The input gate controls how much new information is added to the cell's memory, the forget gate decides which information to discard, and the output gate determines how much of the cell's memory is used to generate the output
  - Addressed the vanishing gradient problem, which makes it challenging for RNNs to learn long-term dependencies, by introducing the memory cell, which stores the information over long periods.
  - Changes introduced: Introduced the LSTM cell, consisting of an input gate, an output gate, a forget gate, and a memory cell.
  - Reason for changes: Addressed the vanishing gradient problem, which makes it challenging for RNNs to learn long-term dependencies, by introducing the memory cell, which stores the information over long periods.

- 1999: Peephole connections added to LSTM
  - Added a connection from the memory cell to the input and forget gates, allowing them to
  - Changes introduced: Added a connection from the memory cell to the input and forget gates, allowing them the current state of the memory cell.
  - Reason for changes: By allowing the gates to peek at the memory cell, the peephole connections give the LSTM more control over its internal state, making it easier to capture long-term dependencies.

- 2000: Gated Recurrent Unit (GRU) introduced by Cho et al.
  - Changes introduced: Simplified the LSTM cell by combining the a single "update" gate and merging the memory cell and output gate.
  - Reason for changes: The GRU has fewer parameters than the LSTM and is therefore easier to train. The simplified architecture also reduces the risk of overfitting and allows the network to generalize better to new data.

- 2014: LSTM with forget gates replaced by input gates by Greff et al.
  - Changes introduced: Replaced the forget gates with input gates, which allowed the network to learn when to reset the memory cell to zero.
  - Reason for changes: The forget gates in the original LSTM can sometimes cause the network to forget important information. By replacing them with input gates, the network can learn to selectively reset the memory cell to zero, while retaining the important information.

- 2015: Highway Networks applied to LSTMs by Srivastava et al
  - Changes introduced: Applied the concept of highway networks to LSTMs, allowing the network to selectively pass information from one time step to the next.
  - Reason for changes: Highway networks allow the network to learn when to pass information from one layer to the next, making it easier to capture long-term dependencies.

- 2016: Zoneout regularization introduced by Krueger et al.
  - Changes introduced: Introduced a new regularization technique called zoneout, which randomly drops out hidden units and cell states during training.
  - Reason for changes: Zoneout helps prevent overfitting and allows the network to generalize better to new data by introducing random variations into the network during training.
