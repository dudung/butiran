---
layout: post
authors: [viridi]
title: vector 2d intro
permalink: pages/0013
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: true
svgphys: false
category: math
tags: ["vector", "2d", "introduction"]
date: 2020-09-21 08:25:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/01/2020-09-01-vector-2d-intro.md
twitter_username: 6unpnp
nodes: []
---
A physics quantity of type vector must be specified with a magnitude and a direction [[1](#r01)], or vector is simply a quantity that has both magnitude and direction [[2](#r02)], where the magnitude is sometimes also referred to as size or length [[3](#r03)]. Further reading will explain vector as element of vector space [[4](#r04), [5](#r05)]. Here we will require only the simple definition of a vector. Vector can be drawn using a directed line segment [[6](#r06)]. Two examples about vector, which differs it from scalar, are displacement compared to distance and velocity compared to speed [[7](#r07)].

A vector $\vec{r}$ in a 2-d (two-dimension) space can be written as

\begin{equation}
\label{eqn:vec-1}
\vec{r} = r_x \ \hat{x} + r_y \ \hat{y},
\end{equation}

\begin{equation}
\label{eqn:vec-2}
\vec{r} = x \ \hat{i} + y \ \hat{j},
\end{equation}

\begin{equation}
\label{eqn:vec-3}
\vec{r} = (x, y),
\end{equation}

with $r_x \equiv x$ and $r_y \equiv y$ are vector components in $x$ and $y$ directions, respectively. Each direction is indicated by each unit vector, i.e. $\hat{x} \equiv \hat{i}$, $\hat{y} \equiv \hat{j}$. In figures a vector, or in general a matrix, can also represent in the form of

\begin{equation}
\label{eqn:vec-4}
\mathbf{r} \equiv \vec{r},
\end{equation}

with examples in Fig. <a href="#fig:vec-arrow-1">1</a>. A vector can be illustrated graphically using vector diagram in the form of an arrow [[8](#r08)], where length of the arrow represent magnitude of the vector and direction of the arrow is direction of the vector.

<oo>
svg 150 100 #fafafa fig:vec-arrow-1|Three arrows <b>a</b>, <b>b</b>, <b>c</b> representing three different vectors.

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00 fo:1
arrow 10 90 140 10
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 20 30 a

style lc:#0d0 ls:0 lw:2 lo:1 fc:#0d0 fo:1
arrow 10 10 10 80
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 80 30 b

style lc:#00f ls:0 lw:2 lo:1 fc:#00f fo:1
arrow 30 90 140 90
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 90 80 c
</oo>

There are three arrows shown in Fig. <a href="#fig:vec-arrow-1">1</a>, which are $\mathbf{a} \equiv \vec{a}$, $\mathbf{b} \equiv \vec{b}$, and $\mathbf{c} \equiv \vec{c}$, as previously described in Eqn. \eqref{eqn:vec-4}. Suppose that there is a vector $\vec{c} = 4 \hat{i} + 3 \hat{j}$ as shown in Fig. <a href="#fig:vec-arrow-2">2</a>.

<oo>
svg 240 200 #fafafa fig:vec-arrow-2|A vector $\mathbf{c} \equiv \vec{c} = 4 \hat{i} + 3 \hat{j}$ in $xy$ plane.

style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 20 20 220 180 40 40

style lc:#000 ls:0 lw:1 lo:1
arrow 20 180 220 180
arrow 20 180 20 20

style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 225 185 x
text 20 12 y

style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 15 197 0
text 55 197 1
text 95 197 2
text 135 197 3
text 175 197 4

text 5 185 0
text 5 145 1
text 5 105 2
text 5 65 3

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00 fo:1
arrow 20 180 180 60

style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 95 105 c

style lc:#000 ls:8-4 lw:0.8 lo:1
line 20 60 180 60
line 180 60 180 180
</oo>

The value of 4 is projection of vector $\vec{c}$ along $x$ direction and 3 along $y$ direction as shown with darker dashed line in Fig. <a href="#fig:vec-arrow-2">2</a>. Any vector can also be drawn like $\vec{c}$. The vector $\vec{c}$ can be drawn from any point, not necessary from (0, 0), as long the length and direction are the same.

Magnitude of a vector in Eqn. \eqref{eqn:vec-2} can be obtained using

\begin{equation}
\label{eqn:vec-2-magnitude}
r = |\vec{r}| = \sqrt{x^2 + y^2},
\end{equation}

which can also be produced using square root of dot product of the vector of itself. Dot product is one of multiplication operation of two vectors. The use of Eqn. \eqref{eqn:vec-2-magnitude} for vector in Fig. <a href="#fig:vec-arrow-2">2</a> will produce $c = \|\vec{c}\| = 5$.


## exer
1. Explain about a vector using its two important features.
2. Tell which ones are scalar and which ones are vector from following physical quantities: speed, dispacement, velocity, distance, force, pressure, mass, density, torque, momentum.
3. Explain what direction the each unit vector $\hat{i}$ and $\hat{j}$ represents. See Eqns. \eqref{eqn:vec-1} - \eqref{eqn:vec-3} when necessary.
4. Draw a vector $\vec{c} = \hat{i} - 2 \hat{j}$ using previous example in Fig. <a href="#fig:vec-arrow-2">2</a>.
5. Eqn. \eqref{eqn:vec-2-magnitude} is magnitude for vector in Eqn. \eqref{eqn:vec-2}, write the magnitude for for vector in Eqn. \eqref{eqn:vec-1}.
6. Show that magnitude of vector in Fig. <a href="#fig:vec-arrow-2">2</a> is 5.
7. Calculate $\vec{c} = \vec{a} + \vec{b}$, if $\vec{a} = 2 \ \hat{i} - \hat{j}$ and $\vec{b} = 3 \ \hat{i} + 13 \ \hat{j}$. Find magnitude of $\vec{c}$ or $\|\vec{c}\|$.
8. If $\vec{a} = 2 \ \hat{j}$ and $\vec{b} = 3 \ \hat{i} - 2 \ \hat{j}$, calculate $\vec{c} = \vec{a} - \vec{b}$ and $c = \|\vec{c}\|$ or magnitude of vector $\vec{c}$.
9. Write the vectors given in Fig. <a href="#fig:vec-quiz-fig-3">3</a>.
<oo>
svg 560 320 #fafafa fig:vec-quiz-fig-3|Some vectors: $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$, $\mathbf{d}$, $\mathbf{e}$, $\mathbf{f}$, $\mathbf{g}$, $\mathbf{h}$, $\mathbf{l}$, $\mathbf{m}$, $\mathbf{n}$, and $\mathbf{o}$.

style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 20 20 540 300 40 40

style lc:#000 ls:0 lw:1 lo:1
arrow 20 300 540 300
arrow 20 300 20 20

style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 545 304 x
text 18 12 y

style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 15 317 0
text 55 317 1
text 95 317 2
text 135 317 3
text 175 317 4
text 215 317 5
text 255 317 6
text 295 317 7
text 335 317 8
text 375 317 9
text 415 317 10
text 455 317 11
text 495 317 12

text 5 305 0
text 5 265 1
text 5 225 2
text 5 185 3
text 5 145 4
text 5 105 5
text 5 65 6

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00 fo:1
arrow 60 180 220 60

style lc:#00f ls:0 lw:2 lo:1 fc:#00f fo:1
arrow 60 260 540 60

style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0 fo:1
arrow 300 20 180 180

style lc:#e0e ls:0 lw:2 lo:1 fc:#e0e fo:1
arrow 60 20 140 100

style lc:#aa0 ls:0 lw:2 lo:1 fc:#aa0 fo:1
arrow 340 60 460 60

style lc:#0aa ls:0 lw:2 lo:1 fc:#0aa fo:1
arrow 300 140 300 60

style lc:#0cf ls:0 lw:2 lo:1 fc:#0cf fo:1
arrow 340 260 500 220

style lc:#c88 ls:0 lw:2 lo:1 fc:#c88 fo:1
arrow 540 140 500 220

style lc:#000 ls:0 lw:2 lo:1 fc:#000 fo:1
arrow 340 260 540 140

style lc:#999 ls:0 lw:2 lo:1 fc:#999 fo:1
arrow 140 260 300 180

style lc:#44f ls:0 lw:2 lo:1 fc:#44f fo:1
arrow 140 260 340 300

style lc:#955 ls:0 lw:2 lo:1 fc:#955 fo:1
arrow 340 300 300 180

style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 110 100 a
text 190 60 b
text 180 150 c
text 310 50 d
text 440 45 e
text 530 50 f
text 260 220 g
text 300 280 h
text 320 200 l
text 530 130 m
text 480 250 n
text 520 220 o
</oo>


## note
1. <a name="r01"></a>Carl R. Nave, "Basic Vector Operations", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html> [20200901].
2. <a name="r02"></a>The Editors of Encyclopaedia Britannica, "Vector", Encyclopædia Britannica, 27 May 2020, url <https://www.britannica.com/science/vector-physics> [20200901].
3. <a name="r03"></a>Daniel Haas, "Answer to 'What is a vector?", Quora, 17 Dec 2012, url <https://qr.ae/pNYJ1p> [20200901].
4. <a name="r04"></a>Eric W. Weisstein, "Vector", from MathWorld--A Wolfram Web Resource, url <https://mathworld.wolfram.com/Vector.html> [20200901].
5. <a name="r05"></a>Wikipedia contributors, "Vector (mathematics and physics)", Wikipedia, The Free Encyclopedia, 22 August 2020, 14:24 UTC, <https://en.wikipedia.org/w/index.php?oldid=974354203> [20200901].
6. <a name="r06"></a>David Frank, Duane Q. Nykamp, "An introduction to vectors", from Math Insight, url <https://mathinsight.org/vector_introduction> [20200901].
7. <a name="r07"></a>Khan Academy, "Intro to vectors & scalars \| One-dimensional motion \| Physics \| Khan Academy", YouTube, 12.06.2011, url <https://www.youtube.com/watch?v=ihNZlp7iUHE> [20200901].
8. <a name="r08"></a>GCSE Physics, "Vector Diagrams", GCSE Physics, Singapore, 21 Jun 2010, url <http://olevelphysicsblog.blogspot.com/2010/06/vector-diagrams.html> [20200901].


## &nbsp;
[coord sys 2d intro](0010.html) &bull;
[vector 2d add](0014.html)
