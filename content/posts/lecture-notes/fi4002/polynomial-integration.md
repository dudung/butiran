---
title: "polynomial integration"
date: 2023-08-24T17:39:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0018"
---
Polynomial is sum of terms, which is built with constant, variables, and exponent ([Pierce, 2021](https://www.mathsisfun.com/algebra/polynomials.html)),  where the exponent is greater and equal to zero ([Gruber & user103828, 2015](https://math.stackexchange.com/a/321264/645927)). Then integral of any polynomial is simply sum of the integrals of its tems, whose formula of its indefinite integral is well known ([Nave, 2017](http://hyperphysics.phy-astr.gsu.edu/hbase/intpol.html)) and its definite integral can be calculated  with the help of the formula, e.g. using Python ([Mehta, 2021](https://www.geeksforgeeks.org/integration-in-a-polynomial-for-a-given-value/)). Simpson's rule can calculate integral of polynomial function by approxymating it with set of quadratic functions ([Kong et al., 2020](https://pythonnumericalmethods.berkeley.edu/notebooks/chapter21.04-Simpsons-Rule.html)), but not recommended since it is not very efficient compared to the use of its indefinite integral formula.


## integral of a term
Suppose that there is a tems

$$\tag{1}
u_n(x) = a_n x^n
$$

with $a_n \in \mathbb{R}$, $x \in \mathbb{R}$, $n \in \mathbb{W}$, where $\mathbb{r}$ stands for real number and $\mathbb{W}$ stands for whole number, natural number and zero.

Integral of Equation (1) is simply

$$\tag{2}
\begin{array}{rcl}
v_{n+1}(x) & = & \displaystyle \int u_n(x) \ dx \newline
& = & \displaystyle \int a_n x^n \ dx \newline
& = &  \displaystyle a_n \int x^n \ dx \newline
& = &  \displaystyle a_n \left( \frac{1}{n+1} x^{n+1} \right) + c \newline
& = &  \displaystyle \left( \frac{a_n}{n+1} \right) x^{n+1} + c \newline
& = &  \displaystyle b_{n+1} x^{n+1} + c.
\end{array}
$$
