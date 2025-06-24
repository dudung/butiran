+++
title = 'ffnn schematic and matrix'
date = 2024-04-22T09:53:00+07:00
draft = false
math = true
tags = ['machine learning', 'neural netwok', 'feed forward']
url = '2018'
authors = ['viridi']
+++
Schematic for feed forward neural network and its matrix <!--more-->


## intro
A Feedforward Neural Network (FFNN) is the simplest kind of artificial neural network, where information moves only in one direction, from the input layer through any hidden layers and finally to the output layer [^rameshkumar_2023]. With the unidirectional flow of data, absence of cycles, and reliance on backpropagation and activation functions, it forms a crucial component of the artificial intelligence (AI) and machine learning (ML) landscape, due to its ability to model complex relationships through a relatively simple architecture, which has made this kind of neural network (NN) indispensable in both historical and contemporary contexts [^fox_2024]. Normaly a schematic of FFNN is showing flow of data from left to right, i.e. input layer is on the left and output layer is on the right, but there is also a visualization of NN showing flow of data from right to left [^fulton_2019]. For fully connected layer the relations between nodes in successive layers can be represented in matrix [^chen_2023] but for others it requires also activation function.

In this post both schematics showing flow of data from left to right or from right to left are presented and also their matrix representation, in showing which schematic would have better relation to its mathematical formulation.


## schematics
A FNN with input layer, hidden layer, and output layer with some nodes can be drawn as follow.


{{< mermaid >}}
flowchart LR
  I1 --"w<sub>11</sub>"--> H1
  I1 --"w<sub>21</sub>"--> H2
  I1 --"w<sub>31</sub>"--> H3
  I1 --"w<sub>41</sub>"--> H4
  I2 --"w<sub>12</sub>"--> H1
  I2 --"w<sub>22</sub>"--> H2
  I2 --"w<sub>32</sub>"--> H3
  I2 --"w<sub>42</sub>"--> H4
  I3 --"w<sub>13</sub>"--> H1
  I3 --"w<sub>23</sub>"--> H2
  I3 --"w<sub>33</sub>"--> H3
  I3 --"w<sub>43</sub>"--> H4
  H1 --"u<sub>11</sub>"--> O1
  H1 --"u<sub>21</sub>"--> O2
  H2 --"u<sub>12</sub>"--> O1
  H2 --"u<sub>22</sub>"--> O2
  H3 --"u<sub>13</sub>"--> O1
  H3 --"u<sub>23</sub>"--> O2
  H4 --"u<sub>14</sub>"--> O1
  H4 --"u<sub>24</sub>"--> O2
  subgraph I
    I1(("I<sub>1</sub>"))
    I2(("I<sub>2</sub>"))
    I3(("I<sub>3</sub>"))
  end
  subgraph H
    H1(("H<sub>1</sub>"))
    H2(("H<sub>2</sub>"))
    H3(("H<sub>3</sub>"))
    H4(("H<sub>4</sub>"))
  end
  subgraph O
    O1(("O<sub>1</sub>"))
    O2(("O<sub>2</sub>"))
  end
  style I fill:#8c8, stroke-width:0;
  style H fill:#88f, stroke-width:0;
  style O fill:#f88, stroke-width:0;
{{< /mermaid >}}

Figure 1. A left-right schematic of 3-4-2 FFNN.

Neuron $i$ in hidden layer $H$ obtains its value via

$$\tag{1}
H_j = f\left( a_j + \sum_i w_{ji} I_i \right)
$$

and neuraon $k$ in output layer $O$ via

$$\tag{2}
O_k = f\left( b_k + \sum_j u_{kj} H_j \right),
$$

with $a_j$ and $b_k$ are bias for each related neurons.


## bias
It is common to use additional element for every layer whose value is always 1 for the bias, so that it becomes the part of weights.


## matrix
Using matrix Eqn (1) will be

$$\tag{3}
\begin{bmatrix}
1 \newline
H_1 \newline
H_2 \newline
H_3 \newline
H_4
\end{bmatrix} =
f\left(
\begin{bmatrix}
1 & 0 & 0 \newline
a_1 & w_{11} & w_{12} \newline
a_2 & w_{21} & w_{22} \newline
a_3 & w_{31} & w_{32} \newline
a_4 & w_{41} & w_{42}
\end{bmatrix}
\begin{bmatrix}
1 \newline
I_1 \newline
I_2 \newline
\end{bmatrix}
\right)
$$

and Eqn (2) will be

$$\tag{4}
\begin{bmatrix}
1 \newline
O_1 \newline
O_2
\end{bmatrix} =
f\left(
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 \newline
b_1 & u_{11} & u_{12} & u_{13} & u_{14} \newline
b_2 & u_{21} & u_{22} & u_{23} & u_{24}
\end{bmatrix}
\begin{bmatrix}
1 \newline
H_1 \newline
H_2 \newline
H_3 \newline
H_3
\end{bmatrix}
\right).
$$

Notice that the first element 1 in $\mathbf{I}$, $\mathbf{H}$, and $\mathbf{O}$ do not have any meaning, but only exist for integrating bias to the weight matrix. The two last equations can be rewritten as

$$\tag{5}
\mathbf{H} = f(\mathbf{W}\mathbf{I})
$$

and

$$\tag{6}
\mathbf{O} = f(\mathbf{U}\mathbf{H}),
$$

or

$$\tag{7}
\mathbf{O} = f(\mathbf{U}f(\mathbf{W}\mathbf{I}))
$$

as the whole feed forward flow of data.


## notes
[^chen_2023]: Andy Pokai Chen, "Using Matrix to Represent Fully Connected Layer and Its Gradient", Medium, 20 Feb 2023, url https://medium.com/p/35604d99d138 [20240422].
[^rameshkumar_2023]: Sasirekha Rameshkumar, "Deep Learning Basics — Part 7 — Feed Forward Neural Networks (FFNN)", Medium, 7 Dec 2023, url https://medium.com/p/93a708f84a31 [20240422].
[^fox_2024]: Josh Fox, "Feedforward Neural Network", Deepgram, 16 Feb 2024, url https://deepgram.com/ai-glossary/feedforward-neural-network [20240422].
[^fulton_2019]: Lawrence V. Fulton, Diane Dolezel, Jordan Harrop, Yan Yan, Christopher P. Fulton, "Classification of Alzheimer’s Disease with and without Imagery Using Gradient Boosted Machines and ResNet-50", Brain Sciences [Brain Sci], vol 9, no 9, p 212, Sep 2019, url http://doi.org/10.3390/brainsci9090212.