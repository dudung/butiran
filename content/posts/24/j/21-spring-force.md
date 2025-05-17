+++
title = 'spring force'
date = 2024-10-13T15:54:59+07:00
math = true
draft = false
tags = ['butiran', 'force']
authors = ['viridi']
url = '24j21'
+++
Contact force between to objects connected via a spring, or between object and a fixed point, considered in butiran.

<!--more-->

In the field of technology, spring can be considered as elastic machine component that is able to deflect under load in a prescribed manner and to recover its initial shape when unloaded, which includes several spring types such as helical spring, leaf spring, torsion-bar spring, air spring, and hydraulic spring [^britannica_2024]. Restoring force that tends to restore spring to its original shape is known as spring force, which is a contact force that can also be found in elastic materials [^bhuyan_2020]. The force obeys Hooke's law force, where the force is proportional to negative displacement with proportional coefficient called spring constant [^park_2024].

An object at position $\vec{r}_i$ attached to a point $\vec{r}_o$ by a spring with natural length $l$ and spring constant $k$ will experience spring force in the form of

$$\tag{1}
\vec{F} _{S,i} = -k (r _{io} - l) \hat{r} _{io},
$$ 

where the unit vector is

$$\tag{2}
\hat{r} _{io} = \frac{\vec{r} _{io}}{r _{io}},
$$

relative position

$$\tag{3}
\vec{r} _{io} = \vec{r}_i - \vec{r}_o,
$$

and 

$$\tag{4}
r_{io} = |\vec{r} _{io}| = \sqrt{\vec{r} _{io} \cdot \vec{r} _{io}}
$$

is distance to the fixed point.

Eqn (1) can be advanced to two objects connected by a spring, where

$$\tag{5}
\vec{F} _{S,ij} = -k (r _{ij} - l) \hat{r} _{ij}
$$

is the spring force on object $i$ due to object $j$.

**Challenge 1**. Show how Eqn (5) can be obtained from Eqn (1) and what is the difference between Eqns (1) and (5).


[^bhuyan_2020]: Satyam Bhuyan, "Spring Force", Science Facts, 11 Dec 2020, url https://www.sciencefacts.net/spring-force.html [20241013].
[^britannica_2024]: The Editors of Encyclopaedia Britannica, "spring", Encyclopedia Britannica, 13 Aug 2024, url https://www.britannica.com/technology/spring-machine-component [20241013].
[^park_2024]: Bobby Bailey, Andrew Park, James Rittenbach
"Spring Force- Hooke’s Law", OpenStax, LibreText, 12 Mar 2024, url https://phys.libretexts.org/@go/page/46157 [20241013].
