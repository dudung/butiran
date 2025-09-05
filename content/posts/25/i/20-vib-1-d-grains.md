+++
title = 'vib 1-d grains'
date = '2025-09-05T12:44:23+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['categ']
categories = ['scripta']
url = '25i20'
math = true
+++

<!-- more -->

+ `05-sep-2025` {{< link/gh 25i20.01 >}} Initial discussion and sketcth.


## notes
+ Source of the disturbance is a vibrator, which make the grains oscillating [^gppt-5_2025a].
+ Problem when aligning grouped objects in Word and solution with Inkscape [^gppt-5_2025b].
+ Inkscape installation for creating the figures [^viridi_2025a].


## eqns-a
+ max function
$$\tag{1}
\max(a, b) = \left\\{
\begin{array}{rc}
a, & a \ge b, \newline
b, & a < b.
\end{array}
\right.
$$
+ sign function
$$\tag{2}
{\rm sign(x)} = \left\\{
\begin{array}{rc}
1, & x > 0, \newline
0, & x = 0, \newline
-1, & x < 0.
\end{array}
\right.
$$


## egns-b
+ Weight of particle $i$ is [^gpt-5_2025c]
$$\tag{3}
\vec{W}_{i} = m_i \vec{g},
$$
with $g$ is gravitational acceleration.


## egns-c
+ Base particle has mass $m_0$, radius $R_0$, vertical position $z_0$.
+ Relative position of particle $i$ from particle $j$ is
$$\tag{4}
\vec{r}_{ij} = \vec{r}_i - \vec{r}_j.
$$
+ Relative distance of particle $i$ from particle $j$ is
$$\tag{5}
r_{ij} = |\vec{r}_{ij}|.
$$
+ Unit verctor of relative position is
$$\tag{6}
\hat{r}_{ij} = \frac{\vec{r} _{ij}}{r _{ij}}.
$$
+ Overlap between to adjacent particles is
$$\tag{7}
\xi_{ij} = \max(0, R_i + R_j - r_{ij}).
$$
+ Time derivative of overlap is
$$\tag{8}
\dot{\xi} _{ij} = - v _{ij} \ {\rm sign}(\xi _{ij}).
$$
+ Normal force on particle $i$ due to contact with particle $j$ is
$$\tag{9}
\vec{N}_{ij} = k_N \xi _{ij} \hat{r} _{ij} - \gamma_N \dot{\xi} _{ij} \hat{v} _{ij}.
$$


## egns-d
+ Number of particles is $n$.
+ Index of partile is from 1 to $n$.
+ Base or particle with index 0 is not considered as particle.
+ Net external force on particle $i$ is
$$\tag{10}
\vec{F}_i = \left\\{
\begin{array}{rc}
\vec{N} _{i, i-1} + \vec{N} _{i, i+1} + \vec{W}_i, & 0 < i < n, \newline
\vec{N} _{i, i-1} + \vec{W}_i, & i = n.
\end{array}
\right.
$$


## eqns-e
+ Newton's second law is [^openstax_2019]
$$\tag{11}
\vec{a}_i = \frac{\vec{F}_i}{m_i}
$$
for partile $i$ at time $t$.
+ Euler integration for calculating velocity from acceleration [^moussa_2023] gives
$$\tag{12}
\vec{v}_i(t + \Delta t) = \vec{v}_i(t) + \vec{a}_i \Delta t.
$$
+ With similar way, position is obtained from velocity using
$$\tag{13}
\vec{r}_i(t + \Delta t) = \vec{r}_i(t) + \vec{v}_i(t) \Delta t.
$$
+ New position, which is
$$\tag{14}
\vec{r}_i \equiv \vec{r}_i(t),
$$
will update Eqns (4)-(10). 


## refs
[^gppt-5_2025a]: GPT-5, "Vibration vs Oscillation", ChatGPT, 5 Sep 2025, url https://chatgpt.com/share/68ba7e12-7344-800a-9a49-62a2d1bc0ca6 [20250905].
[^gppt-5_2025b]: GPT-5, "Word alignment issue and using Inkscape", ChatGPT, 5 Sep 2025, url https://chatgpt.com/share/68ba9d32-2ee8-800a-ba00-490b193ffcf7 [20250905].
[^gpt-5_2025c]: GPT-5, "Gravitational force explanation", ChatGPT, 5 Sep 2025, url https://chatgpt.com/share/68bad021-df00-800a-b1ef-0b95e55fc9dc [20250905].
[^moussa_2023]: Ahmad Moussa, "Euler and Verlet Integration for Particle Physics", Gorrilla Sun, 3 Aug 2023, url https://www.gorillasun.de/blog/euler-and-verlet-integration-for-particle-physics/ [20250905].
[^openstax_2019]: OpenStax, "Newton’s Second Law", Physics 201, Joliet Junior College, 18 Jun 2019, url https://phys.libretexts.org/@go/page/18158 [20250905].
[^viridi_2025a]: Sparisoma Viridi, "Install (again) Inkscape on Windows 11: After can not aligned grouped objects inside Word", Medium, 5 Sep 2025, url https://medium.com/p/11-f84c4693fb1c [20250905].
