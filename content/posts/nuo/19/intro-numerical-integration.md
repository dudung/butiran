+++
title = 'intro numerical integration'
date = 2024-03-16T17:52:00+07:00
draft = false
tags = ['fi4002']
math = true
url = '1981'
+++
Numerical integration: A short introduction
<!--more-->

+ [intro_num_integ.pdf](https://osf.io/2akug)


## outline
+ Intro 3
+ Theory 10
+ Some rules and errors 18
+ Case $y = x^2$ 25
+ Practical formulas 34
+ Closing 42


## intro
Suppose that there is $f(x)$ with $x \in [a, b]$, where

$$\tag{1}
\int_a^b f(x) dx.
$$

is to be calculated.


## discretization
Value of $x$ can be disretized as follow

$$\tag{2}
x_i = a + \Delta x (i - 1), \ \ \ \ i = 0, 1, .., n-1, n,
$$

where

$$\tag{3}
\Delta x = \frac{b-a}{n}
$$

is increment step.

**Assignment 1**. Proove that $x_0 = a$ and $x_n = b$ using (2) and (3).


## formula
In general (4) can be approximated

$$\tag{4}
\int_a^b f(x) dx \approx \sum_{i = 1}^n g_e(x_{i-1}, x_i) \Delta x,
$$

where $g_e(x_i, x_j)$ is different for various types of Riemann sums and index $e$ stands for certain type of Rieman sum.


## lhr & rhl
Left hand rule (LHR) is using

$$\tag{5}
g_L(x_i, x_j) = f(x_i),
$$

while

$$\tag{6}
g_R(x_i, x_j) = f(x_j),
$$

is used for right hand rule (RHR).


## mpr & trapezoid rule
Mid point rule (MPR) is using

$$\tag{7}
g_M(x_i, x_j) = f( \tfrac12 (x_i + x_j) ),
$$

which is different than trapezoid rule

$$\tag{8}
g_T(x_i, x_j) = \tfrac12 ( f(x_i) + f(x_j) ).
$$

Notice the difference between (6) and (7).


## simpson's rule
Other approach in Riemann sum is 

$$\tag{9}
g_S(x_i, x_j) = \left\\{
\begin{array}{cc}
\tfrac13 ( f(x_i) + 2 f(x_j)), & \lfloor i / 2 \rfloor = i/2, \newline \newline
\tfrac13 ( 2 f(x_i) + f(x_j)), & \lfloor i / 2 \rfloor \ne i/2,
\end{array}
\right.
$$

which is known as Simpson's rule. Note that $n$ or number of partitions must be even or there should be at least three points $x_i$, $x_{i+1}$, and $x_{i+2}$ for (8) to work.


## refs
+ Petra Menz and Nicola Mulberry, "Numerical Integration", in Calculus Early Transcendentals: Integral & Multi-Variable Calculus for Social Sciences, adapted from Lyryx' textbook, Calculus Early Transcendentals an Open Text (VERSION 2017- REVISION A), Department of Mathematics, Simon Fraser University, 1 Jun 2020, url https://www.sfu.ca/math-coursenotes/Math%20158%20Course%20Notes/sec_Numerical_Integration.html [20240316].
+ M. Bourne, “Riemann Sums Applet”, Interactive Mathematics, url https://www.intmath.com/integration/riemann-sums.php [20240317].
