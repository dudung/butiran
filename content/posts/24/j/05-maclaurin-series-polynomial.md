+++
title = 'maclaurin series polynomial'
date = 2024-10-06T21:01:00+07:00
draft = false
math = true
tags = ['maclaurin', 'polynomial']
authors = ['viridi']
url = '24j05'
+++
An example of Maclaurin series<!--more-->

One of representations of a function as an infinite sum of terms calculated from the values of the function's derivatives at a single point is known as a Taylor series [^wheaton_2016] and a Maclaurin series is a Taylor series expansion of a function about 0 [^weisstein_2024]. Both series are found similar to a power series [^art_2017].

How a Maclaurin series can represent a polynomial function is given here.

Suppose there is polynomial function represented in the form of [^mathcenter_2009]

$$\tag{1}
f(x) = \sum_{i=0}^n a_i x^i
$$

with $n$ is the degree of a polynomial. And the Maclaurin series is

$$\tag{2}
g(x) = \sum_{i=0}^n \frac{1}{i!} \left. \frac{d^i f(x)}{dx^i} \right|_{x=0} x^i.
$$

The $g(x)$ should be able to represent $f(x)$ with all of its terms. Eqn (1) will become

$$\tag{3}
f^m(0) = m! \ a_m,
$$

from $m$-th [derivative of a polynomial](../24j06) at $x=0$. Substitute Eqn (3) into Eqn (2) will give

$$
g(x) = \sum_{i=0}^n \frac{1}{i!} \ ( i! \ a_i ) \ x^i = \sum_{i=0}^n a_i x^i,
$$

which is back to Eqn (1). It has been shown that Maclaurin series can represent a polynomial function.


[^art_2017]: Simply Beautiful Art, "What is the difference between the Taylor and Maclaurin series?", Mathematics Stack Exchange, 1 Feb 2017, url https://math.stackexchange.com/a/2121750/645927 [20241006].
[^mathcenter_2009]: -, "Polynomial functions", mathcenter, 13 Oct 2009, url https://www.mathcentre.ac.uk/resources/uploaded/mc-ty-polynomial-2009-1.pdf [20241006].
[^weisstein_2024]:  Eric W. Weisstein, "Maclaurin Series" from MathWorld--A Wolfram Web Resource, 1 Oct 2024, url https://mathworld.wolfram.com/MaclaurinSeries.html [20241006].
[^wheaton_2016]: Richard Wheaton, "Numerical Simulation Methods for Predicting Reservoir Performance" in in Fundamentals of Applied Reservoir Engineering, 2016, pp 107-125, url https://doi.org/10.1016/B978-0-08-101019-8.00005-3.
