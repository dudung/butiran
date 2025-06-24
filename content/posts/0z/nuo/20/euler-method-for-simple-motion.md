+++
title = 'euler method for simple motion'
date = 2024-04-23T18:55:00+07:00
draft = false
math = true
tags = ['euler method', 'ode', 'simple motion']
url = '2019'
authors = ['viridi']
+++
Solving an ODE for simple motion using Euler method <!--more-->


## intro
Euler method, which is also called forward Euler method, is a first-order numerical procedure for solving ordinary differential equation (ODE) as initial value problem (IVP)
[^bhardwaj_2022]. This method can be described in only five lines of pseudocode using variables with index [^fCC_2020] or without index [^dawkins_2022]. And it is an an explicit method for solving IVP [^rosettacode_2024]. The use of Euler method for some simple motions is discussed here.


## ode
An ODE in the form of

$$\tag{1}
\frac{dx(t)}{dt} = f(t, x(t))
$$

must be supplied with initial value

$$\tag{2}
x(t_0) = x_0
$$

to be an IVP.


## solution
With time step $\Delta t$, Eqn (1) will have

$$\tag{3}
x(t + \Delta t) = x(t) + \Delta t f(t, x(t)).
$$

as an iterative solution with Eqn (2) as the initial value. It is convenient to use indexed variables for Eqn (2) as follow

$$\tag{4}
x_{n+1} = x_n + h f(t_n, x_n),
$$

where $h = \Delta t$, $t_n = t_0 + nh$, $x_n = x(t_n)$.


## notes
[^dawkins_2022]: Paul Dawkins, "Euler's Method", 16 Nov 2022, url https://tutorial.math.lamar.edu/classes/de/eulersmethod.aspx [20240423].
[^fCC_2020]: fCC, "Euler's Method Explained with Examples", freeCodeCamp, 26 Jan 2020, url https://www.freecodecamp.org/news/eulers-method-explained-with-examples/ [20240423].
[^bhardwaj_2022]: Sharad Bhardwaj, "Euler Method for solving differential equation", GeeksforGeeks, 23 Nov 2022, url https://www.geeksforgeeks.org/euler-method-solving-differential-equation/ [20240423].
[^rosettacode_2024]: Rosetta Code contributors, "Euler method", 14 Apr 2024, url https://rosettacode.org/wiki/?oldid=363664 [20240423].