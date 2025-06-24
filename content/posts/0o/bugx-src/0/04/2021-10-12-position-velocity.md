---
layout: butir
authors: [viridi]
title: position velocity
permalink: pages/0040
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "position", "velocity"]
date: 2021-10-12 20:39:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/04/2021-10-12-position-velocity.md
twitter_username: 6unpnp
nodes: []
---
Hubungan antara posisi dan kecepatan dapat diperoleh dengan menggunakan persamaan-persaman gerak atau turunan kalkulus [[1](#r01)]. Analisa posisi, kecepatan, dan juga percepatan dapat dilakukan dengan turunan [[2](#r02)].


## v from x
Dengan menggunakan diferensial

\begin{equation}\label{eqn-1}
v = \frac{dx}{dt},
\end{equation}

yang menggambarkan bagaimana informasi fungsi kecepatan $v$ dapat diperoleh dari fungsi posisi $x$, di mana keduanya merupakan fungsi dari waktu $t$. Sebagai contoh bila terdapat fungsi posisi

$$
x = -t^4 + 4t^2 - 10t + 2,
$$

maka akan diperoleh

$$
v = -4t^3 + 8t - 10,
$$

yang merupakan fungsi kecepatannya. Terkadang untuk menunjukkan bahwa posisi dan kecepatan merupakan fungsi dari waktu $t$ secara eksplisit, keduanya dituliskan sebagai $x(t)$ dan $v(t)$.


## x from v
Dengan menggunakan integral

\begin{equation}\label{eqn-2}
x - x_0 = \int_{t_0}^t v \ dt.
\end{equation}

Perhatikan urutan dari fungsi posisi $x$ pada ruas kiri, yaitu $x = x(t)$ dan $x_0 = x(t_0)$, terkait dengan batas bawah dan batas atas integral pada ruas kanan, yaitu $t_0$ dan $t$. Sebagai ilustrasi, suatu benda bergerak dengan fungsi kecepatan

$$
v = 3t^2 - 2t + 10 
$$

dan memiliki syarat awal $x(2) = 24$ (atau saat $t_0 = 2$, $x_0 = 24$), maka

$$
\require{cancel}
\begin{array}{rcl}
x - x(2) & = & \displaystyle \int_2^t (3t^2 - 2t + 10) \ dt \newline
& = & \displaystyle \left[ t^3 - t^2 + 10t \right]_2^t \newline
& = & (t^3 - t^2 + 10t) - (2^3 - 2^2 + 10 \cdot 2) \newline
& = & (t^3 - t^2 + 10t) - (8 - 4 + 20) \newline
& = & (t^3 - t^2 + 10t) - 24 \newline
& = & t^3 - t^2 + 10t - 24 \newline
x - 24 & = & t^3 - t^2 + 10t - 24 \newline
x & = & t^3 - t^2 + 10t - \cancel{24} + \cancel{24} \newline
& = & t^3 - t^2 + 10t
\end{array}
$$

adalah fungsi posisinya.


## note
1. <a name="r01"></a>Glenn Elert, "Equations of Motion", The Physics Hypertextbook, 2021, url <https://physics.info/motion-equations/> [20211012].
2. <a name="r02"></a>-, "How to Analyze Position, Velocity, and Acceleration with Differentiation", Dummies, John Wiley & Sons, Inc., 2021, url <https://www.dummies.com/education/math/calculus/how-to-analyze-position-velocity-and-acceleration-with-differentiation/> [20211012].

## &nbsp;
[position](0030.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
