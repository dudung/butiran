+++
title = 'binary plot2 pasir'
date = 2024-11-26T20:01:13+07:00
draft = false
math = true
tags = ['slide']
authors = ['viridi']
url = '24k14'
+++
Introduction to Pasir 0.0.5 in how to generate artificial datasets with two features for binary classification.

<!--more-->

Info:

- Intro to Pasir 0.05: Binary classification data with two features
  + url https://osf.io/jftmw
  + version 20241128_v5
- Outline
  + Intro 3
  + Generate and visualize datasets 13
  + Range of x1 and x2 23
  + Labels 33
  + Markers 43
  + Equations 63
  + Linear lines 67
  + Quadratic lines 77
  + Other curved lines 87  
  + Tasks 94
  + Closing 98

Sketch:

$$\tag{1}
f(x) = \left\\{
\begin{matrix}
1, & x > 0, \newline
0, & x \le 0.
\end{matrix}
\right.
$$

$$\tag{2}
\begin{array}{rcl}
f(x) & = & (c _{00}) \newline
& + & (c _{10} x + c _{01} y) \newline
& + & (c _{20} x^2 + c _{11} xy + c _{02} y^2) \newline
& + & (c _{30} x^3 + c _{21} x^2y + c _{12} xy^2 + c _{03} y^3) \newline
& + & \dots \newline
& + & (c _{n0} x^n + c _{n-1,1} x^{n-1}y + \dots + c _{1,n-1} xy^{n-1} + c _{0n} y^n)
\end{array}
$$

$$\tag{3}
c _{00} + c _{10} x + c _{01} y = 0.
$$

$$\tag{4}
(c _{00}) + (c _{10} x + c _{01} y) + (c _{20} x^2 + c _{11} xy + c _{02} y^2) = 0.
$$
