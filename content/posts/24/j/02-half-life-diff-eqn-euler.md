+++
title = 'half-life diff eqn euler'
date = 2024-10-05T17:06:00+07:00
draft = false
math = true
tags = ['radioactivity', 'half-life', 'euler']
authors = ['viridi']
url = '24j02'
+++
Relation between half-life and time step<!--more-->

Some examples of first order differential equations are mechanical systems, electrical circuits, population models, Newton's law of cooling, and compartemental analysis [^drakos_1966].
Solution of a differential equation can be approximated using many methods, where one of the oldest and easiest to use is Euler's method [^dawkins_2022]. As analytical solution, the exponential function is used for investigating temperature of heated objects, population growth and radioactive decay [^foster-greenwood_2011]. In radioactive decay a useful measurement point is the time take for half of the initial amount of material do decay, which is known as half-life [^robbins_2021]. Certain model of population growth and radioactive decay share similar differential equations, which also have similar solution.

When solving differential equation of radioactive decay with numerical approach, which is Euler method ini this case, the half-life will depend on the chosen time step. In order to obtain the right time step, a coefficient is required, where its value relates to time step value.

Suppose that a half-life $T_\frac12$ is defined, than the decay constant would be

$$\tag{1}
\lambda = \frac{\ln 2}{T_\frac12}
$$

from [half-life and decay constant](../24j03) relation. 

Since Euler method is derived from the simple forward difference expression [^brorson_2022], following relation between [half-time and time step](../2118)

$$\tag{2}
T_\frac12 = \left( \frac{\sqrt[n]{2} \ln 2}{\sqrt[n]{2} - 1} \right) \Delta t.
$$

can be used. Substitute Eqn (2) to Eqn (1) will give

$$\tag{3}
\lambda = \frac{\sqrt[n]{2} - 1}{\sqrt[n]{2} \Delta t},
$$

which holds for $T_\frac12 = n \Delta t$ with $n = 1, 2, 3, ..$.

Using $N_0 = 1600$, $\Delta t = 0.1$, $n = 10$, total time $t_{\rm tot} = M \Delta t$ with $M = 20$ following results are obtained.

Table 1. Decay of entity $N$ from $t = 0$ to $t = 2$ with $T_\frac12 = 1$.
$t$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | $n$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | $N$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Note &nbsp;&nbsp;&nbsp;&nbsp;
:-: | :-: | :-: | :-:
0.00 | 0 | 1600.00 | $N_0$
0.10 | 1 | 1492.85 |
0.20 | 2 | 1392.88 |
0.30 | 3 | 1299.60 |
0.40 | 4 | 1212.57 |
0.50 | 5 | 1131.37 |
0.60 | 6 | 1055.61 |
0.70 | 7 | 984.92 |
0.80 | 8 | 918.96 |
0.90 | 9 | 857.42 |
1.00 | 10 | 800.00 | $\tfrac12 N_0$
1.10 | 11 | 746.43 |
1.20 | 12 | 696.44 |
1.30 | 13 | 649.80 |
1.40 | 14 | 606.29 |
1.50 | 15 | 565.69 |
1.60 | 16 | 527.80 |
1.70 | 17 | 492.46 |
1.80 | 18 | 459.48 |
1.90 | 19 | 428.71 |
2.00 | 20 | 400.00 | $\tfrac14 N_0$

Results in Table 1 can be obtained using following code

```py
N = 1600
dt = 0.1

n = 10
Thalf = n * dt

rn2 = 2 ** (1/n)
lam = (rn2 - 1) / (rn2 * dt)

M = 21
for i in range(M):
  Ns = f'{N:.2f}'
  ts = f'{i*dt:.2f}'
  print(ts, Ns)
  
  N = (1 - lam * dt) * N
```

which is available on OneCompiler [42uaqagv7](https://onecompiler.com/python/42uaqagv7).

Eqn (3) can be further written in the form of

$$\tag{4}
\lambda = \frac{2^{\Delta t / T_\frac12} - 1}{2^{\Delta t / T_\frac12} \Delta t},
$$

which is more applicable, especially when half-time $T_\frac12$ is a non-integer multiple of time step $\Delta t$.


[^brorson_2022]: Stuart Brorson (curator), "Forward Euler method", in Numerically Solving Ordinary Differential Equations, Northeastern University, 26 Jul 2022, url https://math.libretexts.org/Bookshelves/Differential_Equations/Numerically_Solving_Ordinary_Differential_Equations_(Brorson)/01%3A_Chapters/1.02%3A_Forward_Euler_method [20241006].
[^dawkins_2022]: Paul Dawkins, "Euler's Method", 16 Nov 2022, url https://tutorial.math.lamar.edu/classes/de/eulersmethod.aspx [20241005].
[^drakos_1966]: Nikos Drakos (converter), "Examples of First-Order Differential Equations",  Department of Mathematics, Oregon State University, 5 Feb 1996, url https://sites.science.oregonstate.edu/math/home/programs/undergrad/CalculusQuestStudyGuides/ode/first/examples/examples.html [20241005].
[^foster-greenwood_2011]: Briana Foster-Greenwood, "Exponential Functions: Population Growth, Radioactive Decay, and More", Math 1650.002 (Precalculus), 14 Oct 2011, url https://sites.math.unt.edu/~baf0018/courses/handouts/exponentialnotes.pdf [20241005].
[^robbins_2021]: Chris Robbins, "Physical, biological and effective half-life", Ionactive, 29 Sep 2021, url https://ionactive.co.uk/resource-hub/guidance/physical-biological-and-effective-half-life [20241005].
