+++
title = 'spring pulled const velo'
date = 2024-10-08T10:58:00+07:00
draft = false
math = true
tags = ['spring-mass']
authors = ['viridi']
url = '24j10'
+++
A working note for system of two masses and one spring pulled with constant velocity<!--more-->

A mass $m_i$ connected with mass $m_j$ via a spring with constant $k_{ij}$ and normal length $l_{ij}$. Position of $m_i$ relative to $m_j$ is

$$\tag{1}
x_{ij} = x_i - x_j
$$

and the distance between mass $m_i$ and $m_j$ is

$$\tag{2}
r_{ij} = \sqrt{(x_i - x_j)^2}.
$$

Notice that $r_{ij}$ is always positive, while $x_{ij}$ can be positive or negative.

Spring force on $m_i$ due to $m_j$ is

$$\tag{3}
S_{ij} = -k_{ij}(r_{ij} - l_{ij}) u_{ij},
$$

where the unit vector is simple

$$\tag{4}
u_{ij} = \frac{x_i - x_j}{r_{ij}}.
$$

Eqns (2) and (4) can be extended from this 1-d system to 2-d and 3-d systems.

Newton's second law of motion

$$\tag{5}
\sum F = m\ddot{x}
$$

and Eqn (3) will produce

$$\tag{6}
m_i \ddot{x}\_i = -k_{ij}(r_{ij} - l_{ij}) u_{ij}
$$

with $u_{ij}$ and $r_{ij}$ are given in Eqns (2) and (4).

Suppose that $m_i$ is fixed and $m_j$ is pulled with constant velocity $v_j$ then position of $m_j$ is simply

$$\tag{7}
x_j(t) = x_{j,0} + v_j t,
$$

while position of $m_i$ can be obtained after solving Eqn (6), which can be explcitly in the form of

$$\tag{8}
\ddot{x}\_i = - \frac{k_{ij}}{m_i} \left( \sqrt{(x_i - x_j)^2} - l_{ij} \right) \left( \frac{x_i - x_j}{\sqrt{(x_i - x_j)^2}} \right).
$$

With $n$ is index of time $t$, advancement of $t$ can be formulated as

$$\tag{9}
t^{n + 1} = t^n + \Delta t
$$

with $n = 0, 1, 2, ..$. Eqn (7) is rewriten as

$$\tag{10}
x_j^{n+1} = x_j^n + v_j \Delta t
$$

and also Eqn (8) as

$$\tag{11}
\ddot{x}\_i^n = - \frac{k_{ij}}{m_i} \left( \sqrt{(x_i^n - x_j^n)^2} - l_{ij} \right) \left( \frac{x_i^n - x_j^n}{\sqrt{(x_i^n - x_j^n)^2}} \right).
$$


Using Euler's method [^howell_2010] new velocity of mass $m_i$ can be calculated
 
$$\tag{12}
\dot{x}_i^{n+1} = \dot{x}_i^n + \ddot{x}_i^n \Delta t
$$

and also its new position

$$\tag{13}
x_i^{n+1} = x_i^n + \dot{x}_i^n \Delta t.
$$

And

$$\tag{14}
x_j^0, \ \ x_i^0, \ \ t^0
$$

are the initial conditions. Simulation can be performed using Eqns (9) -- (14). Additional initial condition can also be applied, e.g. if the spring is in its normal length, then

$$\tag{15}
x_i^0 = x_j^ + l_{ij} 
$$

should hold.


[^howell_2010]: Kenneth Howell, "", Department of Mathematical Sciences, University of Alabama in Huntsville, 28 Jun 2010, url https://www.uah.edu/images/people/faculty/howellkb/DEText-Ch9.pdf [20241008].
 velocity of $m_i$ can be found as follow
 