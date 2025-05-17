---
title: "temperatur conversion formula"
date: 2023-08-24T18:52:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0019"
---
There are three common temperature scales, that each scale has its uses and conversion formulas between them are available ([Helmenstine, 2019](https://www.thoughtco.com/temperature-conversion-formulas-609324)). Here illustrations how to obtain the formulas are given.


## the ratios
Notice three different temperature scales in following figure.

{{< svg "img/fi4002/temperature_scales_cfk.svg" >}}

Figure 1. Temperature scales and some references points ([LivePhysics, 2023](https://www.livephysics.com/tools/thermodynamics-tools/temperature-scales-conversions/)).

The ratios holds for any temperature scales are as follow


$$\tag{1}
\frac{F - 32}{212 - 32} = \frac{C - 0}{100 - 0} = \frac{K - 273.15}{373.15 - 273.15},
$$

which are obtained from Figure 1. Equation (1) can produce

$$\tag{2}
\begin{array}{rcl}
F & = & \displaystyle \frac{212 - 32}{100 - 0} (C - 0) + 32 \newline
&&\newline
& = & \displaystyle \frac{180}{100} C  + 32 \newline
&&\newline
& = & \displaystyle \frac{9}{5} C + 32
\end{array}
$$

and

$$\tag{3}
\begin{array}{rcl}
C & = & \displaystyle \frac{100 - 0}{212 - 32} (F - 32) + 0 \newline
&&\newline
& = & \displaystyle \frac{100}{180} (F - 32) \newline
&&\newline
& = & \displaystyle \frac{5}{9} (F - 32),
\end{array}
$$

which we are already very familiar with.


## challenges
1. What are the important points, related to water, which can be considered as points used in the temperature conversion formulas?
2. Try to obtain the formula $C = C(K)$, $K = K(C)$ and $F = F(K)$, $K = K(F)$.
