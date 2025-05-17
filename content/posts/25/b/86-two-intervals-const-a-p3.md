+++
title = 'two intervals const a p3'
date = '2025-02-24T19:43:00+07:00'
draft = false
authors = ['viridi']
type = 'slides'
math = true
tags = ['pos', 'velo', 'acc', 'piecewise']
categories = ['kinematics']
url = '25b86'
+++

+ Position
$$\tag{D3}
x(t) = \left\\{
\begin{array}{cc}
x_0 + v_0(t - t_0) + \tfrac12 a_0(t - t_0)^2, & t_0 \le t < t_1, \\\\[0.5em]
x_1 + v_1(t - t_1) + \tfrac12 a_1(t - t_1)^2, & t_1 \le t < t_2,
\end{array}
\right.
$$
with $t_{n+1} = t_n + \tau_n$, where $\tau_n$ is $n$-th time interval.
+ Initial conditions
  - $x(t_0) = x_0$,
  - $x(t_1) = x_1$ and $x(t_1) = x_0 + v_0(t_1 - t_0) + \tfrac12 a_0(t_1 - t_0)^2$.
