+++
title = 'half-life decay const'
date = 2024-10-06T12:16:00+07:00
draft = false
math = true
tags = ['radioactivity', 'half-life']
authors = ['viridi']
url = '24j03'
+++
Half-life and decay constant of radioactive material<!--more-->

As result of nuclear instability, radioactivity refers to the particles which are emitted from nuclei, where the most common types of radiation are called alpha, beta, and gamma radiation [^nave_2024]. There is also other point of view, that radioactivity is the act of emitting radiation spontaneously, where this is done by an atomic nucleus that is unstable for some reason and it wants to give up some energy in order to shift to a more stable configuration [^denny_1997]. There is an important term related to radioactivity known as half-life, which the interval of time required for the number of disintegrations per second of a radioactive material to decrease by one-half or, equivalently, is time interval required for one-half of the atomic nuclei of a radioactive sample to decay (change spontaneously into other nuclear species by emitting particles and energy) [^britannica_2024]. Half-life is inversely proportional to decay constant with proportional constant 0.693 or ln 2 [^huda_2021].

At time $t$ with decay constant or decay rate $\lambda$, if number of nuclei is $N(t)$ and number of expected decays per second is $\lambda N(t)$, then we have 

$$\tag{1}
\frac{dN(t)}{dt} = - \lambda N(t)
$$

as the amount of number of parent nuclei decrease [^belyaev_2015]. The differential equation has following solution

$$\tag{2}
N(t) = N_0 e^{-\lambda(t - t_0)},
$$

where $N_0 =  N(t_0)$. For simplicity it is common to set $t_0 = 0$ and the time interval is measured from $t = 0$.

At half-life or $t = T_{\frac12}$ amount of nuclei is

$$\tag{3}
N(T_{\frac12}) = \tfrac12 N_0.
$$

Using the half-life and Eqn (3), Eqn (2) will give

$$
\tfrac12 N_0 = N_0 e^{-\lambda T_\frac12},
$$

which can be further simplified into

$$
\tfrac12 = e^{-\lambda T_\frac12}.
$$

Rearrange the terms in previous equation and have

$$
2 = e^{\lambda T_\frac12}.
$$

Take natural logarithm of both sides and get

$$
\ln 2 = \lambda T_\frac12.
$$

Then following

$$
T_\frac12 = \frac{\ln 2}{\lambda}
$$

is the relation between half-life $T_\frac12$ and decay constant $\lambda$.


[^belyaev_2015]: Alexander S Belyaev, "Radioactivity", University of Southampton, United Kingdom, 23 Feb 2015, url https://www.personal.soton.ac.uk/ab1u06/teaching/phys3002/course/06_radioactivity.pdf, 
[^britannica_2024]: The Editors of Encyclopaedia Britannica "half-life", Encyclopedia Britannica, 19 Jan 2024, url https://www.britannica.com/science/half-life-radioactivity [20241006].
[^denny_1997]: Shawn Denny, Mike Pizzuti, Chelene Neal, Kate Bessiere, "What Is Radioactivity?", ACHRE Report, May 1997, url https://ehss.energy.gov/ohre/roadmap/achre/intro_9_2.html [20241006].
[^huda_2021]: Noor Al-Huda Talib Al-Aaraji, "Half-Lives: Physical, Biological, and Effective", Al-Mustaqbal University College, Iraq, 31 Oct 2021, url https://www.uomus.edu.iq/img/lectures21/MUCLecture_2023_91020162.pdf [20241006].
[^nave_2024]: Carl Rod Nave, "Radioactivity", Hyperphysics, 2024, url http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/radact.html [20241006].
