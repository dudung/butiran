+++
title = 'Vibration wave some equations'
date = 2024-02-02T05:10:20+07:00
draft = false
tags = ['vibration']
math = true
+++
Some equations related to propagation of vibration as wave.
<!--more-->


## wave frequency
Wave frequency $f$ can be obtained from

$$\tag{1}
f = v \lambda,
$$

with speed of wave $v$ and wavelength $\lambda$.


## wave equation
Wave, propagation of oscillation, is described by

$$\tag{2}
\frac{\partial^2 \psi}{\partial x^2} - \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2} = 0
$$

for 1-D case and

$$\tag{3}
\nabla^2 \psi - \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2} = 0
$$

for 
for 3-D case.


## solution of wave equation
For (2) the solution is

$$\tag{4}
\psi(x, t) = A \sin(kx - \omega t + \phi_0),
$$

with amplitude $A$, wavenumber $k$, angular frequency $\omega$, and initial phase $\phi_0$, and

$$\tag{5}
\psi(\vec{r}, t) = A \sin(\vec{k} \cdot \vec{r} - \omega t + \phi_0),
$$

is the solution for (3)