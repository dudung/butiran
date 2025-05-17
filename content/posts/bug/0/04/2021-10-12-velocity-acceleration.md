---
layout: butir
authors: [viridi]
title: velocity acceleration
permalink: pages/0041
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "velocity", "acceleration"]
date: 2021-10-13 17:29:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/04/2021-10-12-velocity-acceleration.md
twitter_username: 6unpnp
nodes: []
---
Untuk kasus gerak lurus dengan percepatan konstan hubungan antara kecepatan dan percepatan (juga dengan posisi) bisa didapatkan dengan menggunakan persamaa-persamaan gerak [[1](#r01)]. Percepatan merupakan laju perubahan kecepatan dibagi selang waktu perubahan [[2](#r02)], yang secara umum percepatan merupakan turunan dari kecepatan terhadap waktu [[3](#r03)].


## a from v
Dengan memanfaatkan diferensial

\begin{equation}\label{eqn-1}
a = \frac{dv}{dt}.
\end{equation}

Persamaan \eqref{eqn-1} mengilustrasikan bagaimana informasi fungsi percepatan $a$ dapat diperoleh dari fungsi kecepatan $v$, dengan keduanya merupakan fungsi dari waktu $t$. Suatu gerak jatuh bebas, gerak yang hanya dipengaruhi oleh gaya gravitasi [[3](#r03)], memiliki fungsi kecepatan

$$
v = v_0 - gt,
$$

dengan mengambil arah positif ke atas yang berlawanan dengan arah percepatan gravitasi $g$. Dengan menggunakan Persamaan \eqref{eqn-1} dapat diperoleh bahwa

$$
a = -g,
$$

yang menegaskan bahwa memang hanya gaya gravitasi yang mempengaruhi gerak benda dengan percepatan benda adalah negatif dari percepatan gravitasi. Hal terakhir ini terkait dengan pemilihan arah positif koordinat saat merumuskan fungsi kecepatan $v$.


## v from a
Dengan memanfaatkan integral

\begin{equation}\label{eqn-2}
v - v_0 = \int_{t_0}^t a \ dt,
\end{equation}

di mana $v_0$ merupakan syarat awal. Perhatikan urutan dari fungsi kecepatan $v$ pada ruas kiri, yaitu $v = v(t)$ dan $v_0 = v(t_0)$, terkait dengan batas bawah dan batas atas integral pada ruas kanan, yaitu $t_0$ dan $t$. Misalkan terdapat benda yang bergerak dengan fungsi percepatan

$$
a = 1 + 2t + 3t^2 + 4t^3 
$$

di mana saat $t_0 = 1$ kecepatannya adalah $v(t_0) = 5$, maka

$$
\begin{array}{rcl}
v - v_0 & = & \displaystyle \int_{t_0}^t (1 + 2t + 3t^2 + 4t^3) \ dt \newline
v - v(t_0) & = & \displaystyle \left[ t + t^2 + t^3 + t^4 \right]_{t_0}^t \newline
v - v(1) & = & \displaystyle \left[ t + t^2 + t^3 + t^4 \right]_1^t \newline
v - 5 & = & (t + t^2 + t^3 + t^4) - (1 + 1 + 1 + 1) \newline
v & = & t + t^2 + t^3 + t^4 - 4 + 5 \newline
& = & 1 + t + t^2 + t^3 + t^4
\end{array}
$$

adalah fungsi kecepepatannya.


## note
1. <a name="r01"></a>Lee Johnson, "How to Find Acceleration With Velocity & Distance", Sciencing,  Leaf Group Media, 8 Dec 2020, url <https://sciencing.com/acceleration-velocity-distance-7779124.html> [20211013].
2. <a name="r02">Sally, "How are acceleration, time and velocity related?", Socratic Q&A, 10 Jun 2014, </a>url <https://socratic.org/answers/104812> [20211013].
3. <a name="r03"></a>Carl R. Nave, "Calculus Application for Constant Acceleration", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/acons.html#c2> [20211013].
4. <a name="r04"></a>Wikipedia contributors, "Free fall", Wikipedia, The Free Encyclopedia, 29 September 2021, 13:54 UTC, <https://en.wikipedia.org/w/index.php?oldid=1047185824> [20211013].


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
