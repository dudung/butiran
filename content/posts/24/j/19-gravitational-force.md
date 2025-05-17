+++
title = 'gravitational force'
date = 2024-10-13T06:05:06+07:00
math = true
draft = false
tags = ['butiran', 'force']
authors = ['viridi']
url = '24j19'
+++
Force between two masses, also between mass and field, considered in butiran.

<!--more-->

When we talk about force between two masses at distance some terms come up, such gravity, gravitational force, and gravitation. Gravity is a real force but not in the traditional sense, because at fundamental level there are not any action-at-distance forces, since it just a mass creating gravitational field and then the other mass moving and interacting with this field [^baird_2022]. It is better to use the term gravitational force instead of gravity about the force between to masses that are not in contact [^gpt4o_2022]. Newton's law of universal gravitation usually present the force in scalar form [^henderson_2022], which is not easy to use for interaction more than to masses. The vector form [^bridge_2017] will be used here since it is more general and easier to use in calculating force superposition. There is also gravitional force on a mass in a gravitational field as weight of a mass is calculated near earth surface [^nasa_2022].

Mass $m_i$ will experience gravitational force

$$\tag{1}
\vec{F} _{G,i} = m_i \vec{g}
$$

in gravitational field $\vec{g}$, where source of gravitational field is atually another mass or mass distribution.

Mass $m_i$ will experience gravitational force

$$\tag{2}
\vec{F} _{G,ij} = -G \frac{m_i m_j}{r _{ij}^2} \hat{r} _{ij}
$$

due to existence of other mass $m_j$, where position of mass $m_i$ is $\vec{r}_i$ and position of mass $m_j$ is $\vec{r}_j$.

Relative position of mass $m_i$ from mass $m_j$ is

$$\tag{3}
\vec{r} _{ij} = \vec{r}_i - \vec{r}_j,
$$

distance between two masses is

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
\vec{g}_j(\vec{r}) = -G \frac{m_j}{|\vec{r} - \vec{r}_j|^3} (\vec{r} - \vec{r}_j)
$$

as gravitational field produced by mass $m_j$ experienced by another mass in the surrounding of mass $m_j$.

**Challenge 1**. Show the steps to obtained Eqn (6) from Eqns (1) and (2). If necessary use also Eqns (3) and (5).


[^bridge_2017]: Simon Bridge, "Why is there a minus sign in front of the vector form of Newton's law of universal gravitation?", Quora, 27 Sep 2017, url https://qr.ae/p2UWj1 [20241013].
[^henderson_2022]: Tom Henderson, Trevor Fayas, "Newton's Law of Universal Gravitation", The Physics Class Room, Jul 2022, url https://www.physicsclassroom.com/class/circles/lesson-3/newton-s-law-of-universal-gravitation [20241013].
[^baird_2022]: Christopher S. Baird, "Why is gravity not a real force?", Science Questions with Surprising Answers, 5 Aug 2022, url https://www.wtamu.edu/~cbaird/sq/2022/08/05/why-is-gravity-not-a-real-force/ [20241013].
[^gpt4o_2022]: GPT-4o, "Gravity vs Gravitational Force", ChatGPT, 13 Oct 2024, url https://chatgpt.com/share/670b17e8-43d4-800a-a374-13fe63072334 [20241013].
[^nasa_2022]: -, "Weight Equation", Gelnn Research Center, NASA, 22 Jul 2022, url https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/weight-gravitational-force/ [20241013].
