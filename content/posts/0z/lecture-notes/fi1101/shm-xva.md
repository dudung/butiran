---
title: "shm x, v, a"
date: 2023-10-22T19:28:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi1101']
math: true
draft: false
url: "0109"
---
{{< toc >}}


## related notes
+ [m09-2: oscillations](../0097/)
+ [sin cos 4 quadrants](../0110/)


## simple harmonic motion
+ It is periodic motion that is a sinusoidal function of time
  $$\tag{1}
  \begin{array}{rcl}
  x(t) & = & x_m \sin \theta \newline
  & = & x_m \sin (\omega t + \phi).
  \end{array}
  $$
+ It is solution of an ODE
  $$\tag{2}
  \frac{d^2x}{dt^2} + \omega^2 x = 0.
  $$


## variables
+ Each of variables meaning in Eqn (1) are as follow.
    
  Variable | Meaning | Unit
  :-: | :-: | :-:
  $x$ | displacement | m
  $x_m$ | maximum displacement, amplitude | m
  $\omega$ | angular frequency | rad/s
  $t$ | time | s
  $\theta$ | phase | rad
  $\phi$ | initial phase, phase angle, phase constant | rad


## phase constant
+ It shifts the sine or cosine function.
+ For certain $\phi_s$ and $\phi_c$ following relation,
  $$\tag{3}
  \cos (\omega t + \phi_c) = \sin (\omega t + \phi_s),
  $$
  will hold.
+ Use trigonometric identities to relate $\phi_s$ and $\phi_c$ as in [sin cos 4 quadrants](../0110/).
