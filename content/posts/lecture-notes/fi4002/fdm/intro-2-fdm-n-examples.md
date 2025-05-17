---
title: "intro 2 fdm & examples"
date: 2023-11-01T06:52:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0130"
---
{{< toc >}}


## theory
+ `08-apr-2020` [Persamaan diferensial parsial](https://doi.org/10.5281/zenodo.3744577)
+ `10-apr-2020` [Persamaan diferensial parsial dengan spreadsheet](https://doi.org/10.5281/zenodo.3747500)


## examples
+ `08-aug-2019` [Diffusion Simulation with JS: Writing Your Own ABM Code](https://www.slideshare.net/sparisoma/diffusion-simulation-with-js-writing-your-own-abm-code)
+ `27-jun-2020` [Molecular Dynamics (MD) Method and Agent-Based Model (AMB) in Simulation of Stem Cell Deposition on the Surface with Nanopattern: Simulator Design](https://www.slideshare.net/sparisoma/molecular-dynamics-md-method-and-agentbased-model-amb-in-simulation-of-stem-cell-deposition-on-the-surface-with-nanopattern-simulator-design)
+ `25-sep-2019` [Compaction of two-dimensional system of composite spherical particles under influence of self-gravitation: Between lock-and-key model and tetris-structure](https://www.slideshare.net/sparisoma/compaction-of-twodimensional-system-of-composite-spherical-particles-under-influence-of-selfgravitation-between-lockandkey-model-and-tetrisstructure)
+ `21-aug-2019` [Head-on collision of two spherical grains with 2-d internal structure](https://www.slideshare.net/sparisoma/headon-collision-of-two-spherical-grains-with-2d-internal-structure)
+ `09-aug-2019` [Simulation of Blood Cell Separation System Based on Inertia and Elasticity using Molecular Dynamics Method (a simulation design)](https://www.slideshare.net/sparisoma/simulation-of-blood-cell-separation-system-based-on-inertia-and-elasticity-using-molecular-dynamics-method-a-simulation-design)
+ `10-jul-2019` [Molecular Dynamics Simulation of Floating Spheres Forming Two-Dimensional Hexagonal Close Packed Structure](https://www.slideshare.net/sparisoma/molecular-dynamics-simulation-of-floating-spheres-forming-twodimensional-hexagonal-close-packed-structure)
+ `29-jun-2019` [Granular buoyant force in a two-dimensional intruder-particles bed system](https://www.slideshare.net/sparisoma/granular-buoyant-force-in-a-twodimensional-intruderparticles-bed-system)
+ `31-oct-2018` [Simulation of snake-like swimming system using granular model](https://doi.org/10.5281/zenodo.2673046)


## bvp with matrix
+ Qingkai Kong, Timmy Siaw, Alexandre Bayen, "Finite Difference Method" in Python Programming And Numerical Methods: A Guide For Engineers And Scientists, Academic Press, 1st edition, Nov 2020, url https://pythonnumericalmethods.berkeley.edu/notebooks/chapter23.03-Finite-Difference-Method.html [20231101]
+ Equations
$$\tag{1}
\frac{dy}{dx} = \frac{y_{i+1} - y_{i-1}}{2h}
$$
$$\tag{2}
\frac{d^2y}{dx^2} = \frac{y_{i+1} -2y_i + y_{i-1}}{h^2}
$$
+ Problem
$$
\frac{d^2y}{dt^2} = -g
$$
with $t \in [0, 5]$, $h = 0.5$, $y_0 = 35$, $y_{10} = 10$.
+ How to get $v_0$?


## ivp
+ It requires both $y_0$ and $v_0$
+ Equation
$$
y_{i+1} = y_i + h \frac{dy}{dx}
$$
+ Smaller $h$ gives better result, but it might be no efficient.


## assignment
+ url https://github.com/dudung/lecture-notes/issues/20
