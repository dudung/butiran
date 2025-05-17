---
layout: post
authors: [viridi]
title: vector 2d add
permalink: pages/0014
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: true
svgphys: false
category: math
tags: ["vector", "2d", "introduction", "add"]
date: 2020-09-21 11:30:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/01/2020-09-21-vector-2d-add.md
twitter_username: 6unpnp
nodes: []
---
Addition of [vectors](vector) can be peformed graphically [[1](#ref1)] or by adding the corresponding components [[2](#ref2)]. We can also use trigonometry through law of sines and cosines.


## components addition
Adding corresponding components in performing vector addition is simpler and does not require any drawing but only formula. Suppose that there is first vector

\begin{equation}
\label{eqn:vadd-r1}
\vec{r}_1 = x_1 \ \hat{x} + y_1 \ \hat{y}
\end{equation}

and second vector

\begin{equation}
\label{eqn:vadd-r2}
\vec{r}_2 = x_2 \ \hat{x} + y_2 \ \hat{y}
\end{equation}

that will be the operands of vector addition operation in the form of

\begin{equation}
\label{eqn:vadd-addition}
\vec{r}_3 = \vec{r}_1 + \vec{r}_2,
\end{equation}

which gives that

\begin{equation}
\label{eqn:vadd-addition-x}
x_3 = x_1 + x_2
\end{equation}

and

\begin{equation}
\label{eqn:vadd-addition-y}
y_3 = y_1 + y_2.
\end{equation}

Let's substitute Eqns. \eqref{eqn:vadd-r1} and \eqref{eqn:vadd-r2} into Eqn. \eqref{eqn:vadd-addition} and obtain the following result

\begin{equation}
\label{eqn:vadd-addition-result}
\begin{array}{rcl}
\vec{r}_3 & = & (x_1 \ \hat{x} + y_1 \ \hat{y}) + (x_2 \ \hat{x} + y_2 \ \hat{y}) \newline
& = & x_1 \ \hat{x} + y_1 \ \hat{y} + x_2 \ \hat{x} + y_2 \ \hat{y} \newline
& = & x_1 \ \hat{x} + x_2 \ \hat{x} + y_1 \ \hat{y} + y_2 \ \hat{y} \newline
& = & (x_1 + x_2) \ \hat{x} + (y_1 + y_2) \ \hat{y} \newline
& = & x_3 \ \hat{x} + y_3 \ \hat{y},
\end{array}
\end{equation}

which simply proof Eqns. \eqref{eqn:vadd-addition-x} and \eqref{eqn:vadd-addition-y}. And how about a vector in three-dimensional space, e.g.

\begin{equation}
\label{eqn:vadd-ri}
\vec{r}_i = x_i \ \hat{x} + y_i \ \hat{y} + z_i \ \hat{z},
\end{equation}

with $i = 1, 2, 3$ as in Eqns. \eqref{eqn:vadd-r1} - \eqref{eqn:vadd-addition}. See Exercise [4](#exc4) to for this.


## graphical addition
We will discuss first vectors in two-dimensional space since they are easier to visualize than the one in three-dimensional space. The vectors are $\vec{r}_1$ and $\vec{r}_2$ as described in Eqns \eqref{eqn:vadd-r1} and \eqref{eqn:vadd-r2}. Two methods will discussed in this part.

### parallelogram method
This method related to the two-dimensional form, i.e. parallelogram, that is constructed by the two vectors used as operands in the vector addition.

<oo>
svg 600 200 #fafafa fig:vadd-graph-parallelogram|Vectors $\vec{r}_1$ and $\vec{r}_2$, and addition of them to produce $\vec{r}_3$ with parallelogram method.

// Cartesian 1
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 20 20 180 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 20 180 180 180
arrow 20 180 20 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 185 185 x
text 20 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 15 197 0
text 55 197 1
text 95 197 2
text 135 197 3
text 5 185 0
text 5 145 1
text 5 105 2
text 5 65 3

// Vector 1
style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 20 180 140 140
style lc:#0c0 ls:6-4 lw:2 lo:1 fc:#0c0
line 140 180 140 140
line 140 140 20 140
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 100 170 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 107 175 1

// Cartesian 2
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 220 20 380 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 220 180 380 180
arrow 220 180 220 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 385 185 x
text 220 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 215 197 0
text 255 197 1
text 295 197 2
text 335 197 3
text 205 185 0
text 205 145 1
text 205 105 2
text 205 65 3

// Vector 2
style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 220 180 260 100
style lc:#00f ls:6-4 lw:2 lo:1 fc:#00f
line 260 180 260 100
line 220 100 260 100
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 225 125 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 232 130 2

// Cartesian 3
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 420 20 580 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 420 180 580 180
arrow 420 180 420 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 585 185 x
text 420 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 415 197 0
text 455 197 1
text 495 197 2
text 535 197 3
text 405 185 0
text 405 145 1
text 405 105 2
text 405 65 3

// Vector 1 -- dashed
style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 420 180 540 140
style lc:#0c0 ls:6-4 lw:2 lo:1 fc:#0c0
line 460 100 580 60
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 500 170 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 507 175 1

// Vector 2 -- dased
style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 420 180 460 100
style lc:#00f ls:6-4 lw:2 lo:1 fc:#00f
line 540 140 580 60
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 425 125 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 432 130 2

// Vector 3 -- resultant
style lc:#f00 ls:0 lw:2 lo:1 fc:#f00
arrow 420 180 580 60
style lc:#f00 ls:6-4 lw:2 lo:1 fc:#f00
line 580 180 580 60
line 580 60 420 60
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 520 120 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 527 125 3
</oo>

Fig. <a href="#fig:vadd-graph-parallelogram">1</a> shows that $\vec{r}_1 = 3 \ \hat{x} + \hat{y}$, $\vec{r}_2 = \hat{x} + 2 \ \hat{y}$, and $\vec{r}_3 = 4 \ \hat{x} + 3 \ \hat{y}$. The result of $\vec{r}_3$ is simply according to Eqns. \eqref{eqn:vadd-addition-x} and \eqref{eqn:vadd-addition-y}. This graphical method known as parallelogram method. You can find tutorial about this method [[3](#ref3)]. You can see in Fig. <a href="#fig:vadd-graph-parallelogram">1</a> that vector $\vec{r}_1$ (solid green line) with its pair (dashed green line) and vector $\vec{r}_2$ (solid blue line) with its pair (dashed blue line) construct a parallelogram where the result is simply the diagonal between the two vectors (solid red line).

### polygon method
In this method, which is simply put start point of a vector to end point of another vector [[4](#ref4)].

<oo>
svg 600 200 #fafafa fig:vadd-graph-polygon|Vectors $\vec{r}_1$ and $\vec{r}_2$, and addition of them to produce $\vec{r}_3$ with polygon method.

// Cartesian 1
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 20 20 180 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 20 180 180 180
arrow 20 180 20 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 185 185 x
text 20 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 15 197 0
text 55 197 1
text 95 197 2
text 135 197 3
text 5 185 0
text 5 145 1
text 5 105 2
text 5 65 3

// Vector 1
style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 20 180 140 140
style lc:#0c0 ls:6-4 lw:2 lo:1 fc:#0c0
line 140 180 140 140
line 140 140 20 140
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 100 170 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 107 175 1

// Cartesian 2
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 220 20 380 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 220 180 380 180
arrow 220 180 220 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 385 185 x
text 220 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 215 197 0
text 255 197 1
text 295 197 2
text 335 197 3
text 205 185 0
text 205 145 1
text 205 105 2
text 205 65 3

// Vector 2
style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 220 180 260 100
style lc:#00f ls:6-4 lw:2 lo:1 fc:#00f
line 260 180 260 100
line 220 100 260 100
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 225 125 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 232 130 2

// Cartesian 3
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 420 20 580 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 420 180 580 180
arrow 420 180 420 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 585 185 x
text 420 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 415 197 0
text 455 197 1
text 495 197 2
text 535 197 3
text 405 185 0
text 405 145 1
text 405 105 2
text 405 65 3

// Vector 1 -- dashed
style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 420 180 540 140
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 500 170 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 507 175 1

// Vector 2 -- dased
style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 540 140 580 60
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 558 125 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 565 130 2

// Vector 3 -- resultant
style lc:#f00 ls:0 lw:2 lo:1 fc:#f00
arrow 420 180 580 60
style lc:#f00 ls:6-4 lw:2 lo:1 fc:#f00
line 580 180 580 60
line 580 60 420 60
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 480 115 r
style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 487 120 3
</oo>

Fig. <a href="#fig:vadd-graph-polygon">2</a> (right) show the difference of this method from the previous one. The start point of vector $\vec{r}_2$ is put to the end point of vector $\vec{r}_1$ and the result is from start point of the first vector to the end point of the last vector. The given example of addition of two vectors does not really show the difference between this two methods. It requires more vectors to show the advantage of the second method compared the first one.

### addition of four vectors
As an example, we will considered four vectors that their sum or resultant will be calculated. Not all vector are drawn simultaneously in Fig. <a href="#fig:vadd-graph-parallelogram-4v">3</a>, but only one additional vector in each graph, in order showing how the method works.

<oo>
svg 600 200 #fafafa fig:vadd-graph-parallelogram-4v|Addition of four vectors, $\vec{r}_1$, $\vec{r}_2$, $\vec{r}_3$, $\vec{r}_4$ using parallelogram method.

// Cartesian 1
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 20 20 180 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 20 180 180 180
arrow 20 180 20 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 185 185 x
text 20 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 15 197 0
text 55 197 1
text 95 197 2
text 135 197 3
text 5 185 0
text 5 145 1
text 5 105 2
text 5 65 3

style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 20 180 100 140
style lc:#0c0 ls:6-4 lw:2 lo:1 fc:#0c0
line 20 140 100 100

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00
arrow 20 180 20 140
style lc:#f00 ls:6-4 lw:2 lo:1 fc:#f00
line 100 140 100 100

style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 20 180 100 100

// Cartesian 2
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 220 20 380 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 220 180 380 180
arrow 220 180 220 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 385 185 x
text 220 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 215 197 0
text 255 197 1
text 295 197 2
text 335 197 3
text 205 185 0
text 205 145 1
text 205 105 2
text 205 65 3

style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 220 180 300 100
style lc:#00f ls:6-4 lw:2 lo:1 fc:#00f
line 260 180 340 100

style lc:#f0f ls:0 lw:2 lo:1 fc:#f0f
arrow 220 180 260 180
style lc:#f0f ls:6-4 lw:2 lo:1 fc:#f0f
line 300 100 340 100

style lc:#ce0 ls:0 lw:2 lo:1 fc:#ce0
arrow 220 180 340 100

// Cartesian 3
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 420 20 580 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 420 180 580 180
arrow 420 180 420 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 585 185 x
text 420 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 415 197 0
text 455 197 1
text 495 197 2
text 535 197 3
text 405 185 0
text 405 145 1
text 405 105 2
text 405 65 3

style lc:#ce0 ls:0 lw:2 lo:1 fc:#ce0
arrow 420 180 540 100
style lc:#ce0 ls:6-4 lw:2 lo:1 fc:#ce0
line 460 100 580 20

style lc:#f88 ls:0 lw:2 lo:1 fc:#f88
arrow 420 180 460 100
style lc:#f88 ls:6-4 lw:2 lo:1 fc:#f88
line 540 100 580 20

style lc:#8b8 ls:0 lw:2 lo:1 fc:#8b8
arrow 420 180 580 20

style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 5 160 r
text 65 170 r
text 65 100 r
text 265 100 r
text 232 192 r
text 332 120 r
text 532 120 r
text 432 120 r
text 520 20 r

style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 12 163 1
text 72 173 2
text 72 103 1+2
text 272 103 1+2
text 239 195 3
text 339 123 1+2+3
text 539 123 1+2+3
text 439 123 4
text 527 23 1+2+3+4
</oo>

Fig. <a href="#fig:vadd-graph-parallelogram-4v">3</a> shows the results of $\vec{r} _{1+2} = \vec{r}_1 + \vec{r}_2$ (left), $\vec{r} _{1+2+3} = \vec{r}_3 + \vec{r} _{1+2}$ (center), and $\vec{r} _{1+2+3+4} = \vec{r}_4 + \vec{r} _{1+2+3}$ (right), where in each step only one vector is added to the other. Actually, we can also do in another way, e.g. $(\vec{r}_1 + \vec{r}_2) + (\vec{r}_3 + \vec{r}_4) = \vec{r} _{1+2} + \vec{r} _{3+4} = \vec{r} _{1+2+3+4}$.

Now let's see how the polygon method works for those four vectors.

<oo>
svg 600 200 #fafafa fig:vadd-graph-polygon-4v|Addition of four vectors, $\vec{r}_1$, $\vec{r}_2$, $\vec{r}_3$, $\vec{r}_4$ using polygon method.

// Cartesian 1
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 20 20 180 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 20 180 180 180
arrow 20 180 20 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 185 185 x
text 20 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 15 197 0
text 55 197 1
text 95 197 2
text 135 197 3
text 5 185 0
text 5 145 1
text 5 105 2
text 5 65 3

style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 20 140 100 100

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00
arrow 20 180 20 140

style lc:#00f ls:0 lw:2 lo:1 fc:#00f
arrow 20 180 100 100

// Cartesian 2
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 220 20 380 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 220 180 380 180
arrow 220 180 220 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 385 185 x
text 220 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 215 197 0
text 255 197 1
text 295 197 2
text 335 197 3
text 205 185 0
text 205 145 1
text 205 105 2
text 205 65 3

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00
arrow 220 180 220 140

style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 220 140 300 100

style lc:#f0f ls:0 lw:2 lo:1 fc:#f0f
arrow 300 100 340 100

style lc:#ce0 ls:0 lw:2 lo:1 fc:#ce0
arrow 220 180 340 100

// Cartesian 3
style lc:#000 ls:6-2 lw:0.3 lo:0.8
grid 420 20 580 180 40 40
style lc:#000 ls:0 lw:1 lo:1
arrow 420 180 580 180
arrow 420 180 420 20
style lw:0 fc:#000 fo:1 ts:italic tw:normal tf:Times tz:16px
text 585 185 x
text 420 12 y
style lw:0 fc:#000 fo:1 ts:normal tw:normal tf:Times tz:16px
text 415 197 0
text 455 197 1
text 495 197 2
text 535 197 3
text 405 185 0
text 405 145 1
text 405 105 2
text 405 65 3

style lc:#f00 ls:0 lw:2 lo:1 fc:#f00
arrow 420 180 420 140

style lc:#0c0 ls:0 lw:2 lo:1 fc:#0c0
arrow 420 140 500 100

style lc:#f0f ls:0 lw:2 lo:1 fc:#f0f
arrow 500 100 540 100

style lc:#f88 ls:0 lw:2 lo:1 fc:#f88
arrow 540 100 580 20

style lc:#8b8 ls:0 lw:2 lo:1 fc:#8b8
arrow 420 180 580 20

style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:16px
text 5 160 r
text 40 115 r
text 65 150 r

text 205 160 r
text 240 115 r
text 325 90 r
text 305 140 r

text 405 160 r
text 440 115 r
text 525 90 r
text 560 80 r
text 520 20 r

style lw:0 fc:#000 fo:1 ts:normal tw:bold tf:Times tz:10px
text 12 163 1
text 47 118 2
text 72 153 1+2

text 212 163 1
text 247 118 2
text 332 93 3
text 312 143 1+2+3

text 412 163 1
text 447 118 2
text 532 93 3
text 567 83 4
text 527 23 1+2+3+4
</oo>

Fig. <a href="#fig:vadd-graph-polygon-4v">4</a> shows the results of $\vec{r} _{1+2} = \vec{r}_1 + \vec{r}_2$ (left), $\vec{r} _{1+2+3} = \vec{r}_1 + \vec{r}_2 + \vec{r}_3$ (center), and $\vec{r} _{1+2+3+4} = \vec{r}_1 + \vec{r}_2 + \vec{r}_3 + \vec{r}_4$ (right) using polygon method. With this method all vectors can still be drawn and their contribution to the resultan are clear.

This method will be used later in summing phasors (or rotating vectors), in explaining the interference of multiple slit and diffraction.


## trigonometry addition
Law of cosines and sines can also be used to calculate vector addition or resultan of two vectors [[5](#ref5)]. Length of both vectors and the angle between them are required fot this method.



## exer
1. Using similar way as in Eqn. \eqref{eqn:vadd-addition-result}, find formulation for $C_x$ and $C_y$, if $\vec{C} = \vec{A} + \vec{B}$. Use $\vec{A} = A_x \ \hat{x} + A_y \ \hat{y}$, $\vec{B} = B_x \ \hat{x} + B_y \ \hat{y}$, and $\vec{C} = C_x \ \hat{x} + C_y \ \hat{y}$.
2. Calculate $\vec{G} = \vec{D} + \vec{E}$, if $\vec{D} = 2 \ \hat{x} + 3 \ \hat{y}$ and $\vec{E} = 3 \ \hat{x} - 4 \ \hat{y}$.
3. There are two vectors, $\vec{B} = 12 \ \hat{x} + 3 \ \hat{y}$ and $\vec{C} = -7 \ \hat{x} + 9 \ \hat{y}$, calculate vector $\vec{D} = \vec{B} + \vec{C}$ and also its magnitude $\|\vec{D}\|$.
4. <a name="exc4"></a>Find the formulation to calculate $x_3$, $y_3$, and $z_3$ for vector addition $\vec{r}_3 = \vec{r}_1 + \vec{r}_2$, with $\vec{r}_i$ is defined in Eqn. \eqref{eqn:vadd-ri}.
5. Fig. <a href="#fig:vadd-graph-parallelogram-4v">3</a> show the process of four vectors addition $(((\vec{r}_1 + \vec{r}_2) + \vec{r}_3) + \vec{r}_4)$, draw similar graphs for the process $(\vec{r}_1 + \vec{r}_2) + (\vec{r}_3 + \vec{r}_4)$.


## note
1. <a name="ref1"></a>Carl R. Nave, "Graphical Vector Addition", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/vect.html#vec1> [20200921].
2. <a name="ref2"></a>Eric W. Weisstein, "Vector Addition", from MathWorld--A Wolfram Web Resource, url  <https://mathworld.wolfram.com/VectorAddition.html> [20200921].
3. <a name="ref3"></a>Math and Stats Help, "Find the Resultant Force using the Parallelogram Method", YouTube, 18.11.2019, url <https://www.youtube.com/watch?v=WhHO77rEIfk> [20200921].
4. <a name="ref4"></a>Simon Plus, "Episode 5: Polygon Method for Vector Addition", YouTube, 24.04.2017, url <https://www.youtube.com/watch?v=r-iKebb2FIg> [20200921].
5. <a name="ref5"></a>-, "Calculating the Resultant using the Law of Cosines and Sines", Alberta Learning, 16 Jun 2004, url <http://www.learnalberta.ca/content/sep20u/html/java/vector_addition_numerical/applethelp/lesson_1.html#2> [20200922].


## &nbsp;
[coord sys 2d intro](0010.html) &bull;
[vector 2d intro](0013.html)
