+++
title = 'electric force'
date = 2024-10-13T14:36:45+07:00
math = true
draft = false
tags = ['butiran', 'force']
authors = ['viridi']
url = '24j20'
+++
Force between two charges, also between charge and field, considered in butiran.

<!--more-->

The attraction or repulsion force between two charged particles is known as electrostatic force, which is also called Coulomb's force or Coulomb's interaction [^bhuyan_2023]. Electric force is also another name for this force that obeys Coulomb's law [^nave_2017]. The terms electrostatic force and electric force are often used interchangeably, while the first is more specific, only when electric charges are stationary, the second is more general that is also including moving charges [^gpt4o_2024]. The use of electric force term is more clear in Lorentz force law, where the term related to electric field is called electric force [^fitzpatrick_2006] instead of electrostatic force, since the charge is moving. Here we use the more general term, eletric force.

Charge $q_i$ will experience electric force

$$\tag{1}
\vec{F} _{E,i} = q_i \vec{E}
$$

in electric field $\vec{E}$, where source of electric field is atually another charge or charge distribution.

Charge $q_i$ will experience electric force

$$\tag{2}
\vec{F} _{E,ij} = -k \frac{q_i q_j}{r _{ij}^2} \hat{r} _{ij}
$$

due to existence of other charge $q_j$, where position of charge $q_i$ is $\vec{r}_i$ and position of charge $q_j$ is $\vec{r}_j$.

Relative position of charge $q_i$ from charge $q_j$ is

$$\tag{3}
\vec{r} _{ij} = \vec{r}_i - \vec{r}_j,
$$

distance between two charges is

$$\tag{4}
r_{ij} = |\vec{r} _{ij}| = \sqrt{\vec{r} _{ij} \cdot \vec{r} _{ij}},
$$

and 

$$\tag{5}
\hat{r} _{ij} = \frac{\vec{r} _{ij}}{r _{ij}}
$$

is the unit vector.

From Eqns (1) and (2) it can be obtained

$$\tag{6}
\vec{E}_j(\vec{r}) = -k \frac{q_j}{|\vec{r} - \vec{r}_j|^3} (\vec{r} - \vec{r}_j)
$$

as electric field produced by charge $q_j$ experienced by another charge in the surrounding of charge $q_j$.

**Challenge 1**. Show the steps to obtained Eqn (6) from Eqns (1) and (2). If necessary use also Eqns (3) and (5).


[^bhuyan_2023]: Satyam Bhuyan, "Electrostatic force", Science Fatct, 17 Feb 2023, url https://www.sciencefacts.net/electrostatic-force.html [20241013].
[^fitzpatrick_2006]: Richard Fitzpatrick, "The Lorentz force", Classical Electromagnetism: An intermediate level course, The University of Texas at Austin, 2 Feb 2006, url https://farside.ph.utexas.edu/teaching/em/lectures/node33.html [20241013].
[^gpt4o_2024]: GPT-4o, "Electrostatic vs Electric Force", ChatGPT, 13 Oct 2024, url https://chatgpt.com/share/670b81e1-7070-800a-a252-9607338937ca [20241013].
[^nave_2017]: Carl Rod Nave, "Coulomb's Law: Like charges repel, unlike charges attract", HyperPhysics, Aug 2017, url http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elefor.html [20241013].
