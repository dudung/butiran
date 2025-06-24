---
layout: butir
authors: [viridi]
title: displacement 2d
permalink: pages/0032
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "displacement", "2d"]
date: 2021-10-05 20:09:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/03/2021-10-04-displacement-2d.md
twitter_username: 6unpnp
nodes: []
---
Perpindahan merupakan suatu besaran vektor yang menyatakan seberapa jauh obyek dari posisi awalnya, atau dengan kata lain merupakan total perubahan posisi obyek [[1](#r01)], di mana perpindahan dihitung dengan mengurangi posisi akhir dengan posisi awal [[2](#r02), [3](#r03), [4](#r04)].


## formula
Perpindahan dihitung menggunakan

\begin{equation}\label{eqn-01}
\Delta \vec{r} = \vec{r}_f - \vec{r}_i
\end{equation}

dengan indeks $i$ dan $f$ berarti inisial (awal) dan final (akhir). Untuk kasus 1-D Persamaan \eqref{eqn-01} akan menjadi

\begin{equation}\label{eqn-02}
\Delta x = x_f - x_i,
\end{equation}

yang dapat bernilai positif ataupun negatif karena perpindahan merupakan besaran vektor.


## 2-d motion
Sebagai ilustrasi suatu benda bergerak dalam 2-d dengan informasi waktu $t$, posisi $(x, y)$ diberikan sebagai berikut ini, di mana dari satu titik ke titik lainnya benda bergerak dengan kecepatan konstan dan lintasan lurus.

$n$         | 1 | 2 | 3 | 4 |  5 | 6  | 7  |  8 
$t_n \ (\rm s)$ | 0 | 2 | 6 | 8 | 12 | 14 | 16 | 20
$x_n \ (\rm m)$ | 1 | 7 | 7 | 9 |  9 |  2 |  2 |  1
$y_n \ (\rm m)$ | 1 | 1 | 5 | 5 |  9 |  9 |  4 |  4

Tabel sebelumnya dapat digambarkan seperti pada Gambar [1](#fig1) berikut.

![]({{ site.baseurl }}/assets/img/0/03/0032-a.png) \
Gambar <a name="fig1">1</a>. Posisi benda pada $t = t_1, .., t_9$, dengan antar titik benda berpindah mengikuti lintasan berupa garis lurus dan satu kotak berukuran $1 \ {\rm m} \times 1 \ {\rm m}$.

Dengan demikian dapat dituliskan dengan menggunakan tabel atau Gambar [1](#fig1), sebagai contoh, bahwa

$$
\vec{r}_4 = 9 \hat{x} + 5 \hat{y},
$$

saat $t = t_4 = 8 \ \rm s$. Selanjutnya dapat diperoleh perpindahan antara $t = t_3$ dan $t = t_6$

$$
\begin{array}{rcl}
\Delta \vec{r}_{3-6} & = & \vec{r}_6 - \vec{r}_3 \newline
& = & (2 \hat{x} + 9 \hat{y}) - (7 \hat{x} + 5 \hat{y}) \newline
& = & (2 - 7) \hat{x} + (9 - 5) \hat{y} \newline
& = & -5 \hat{x} + 4 \hat{y},
\end{array}
$$

dengan menggunakan Persaaman \eqref{eqn-01}. Perpindahan total antara $t = t_1$ sampai $t = t_8$ adalah

$$
\begin{array}{rcl}
\Delta \vec{r}_{1-8} & = & \vec{r}_8 - \vec{r}_1 \newline
& = & (1 \hat{x} + 4 \hat{y}) - (1 \hat{x} + 1 \hat{y}) \newline
& = & (1 - 1) \hat{x} + (4 - 1) \hat{y} \newline
& = & 0 \hat{x} + 3 \hat{y} \newline
& = & 3 \hat{y}.
\end{array}
$$

![]({{ site.baseurl }}/assets/img/0/03/0032-b.png)
![]({{ site.baseurl }}/assets/img/0/03/0032-c.png) \
Gambar <a name="fig2">2</a>. Perpindahan $\Delta \vec{r}_{i-f}$ antara $t_i = t_3$ dan $t_f = t_6$ (kiri) dan antara $t_i = t_1$ dan $t_f = t_8$ (kanan).

Hasil perhitungan sebelumnya untuk $\vec{r} _{3-6}$ dan $\vec{r} _{1-8}$ dapat dikonfirmasi dengan menggunakan grafik seperti pada Gambar [2](#fig2).


## x-t and y-t
Selain ilustrasi dalam Gambar [2](#fig2) terdapat pula cara lain untuk menggambarkan gerak benda, yaitu dalam bentuk grafik $x-t$ dan $y-t$ seperti pada Gambar [3](#fig3) berikut.

![]({{ site.baseurl }}/assets/img/0/03/0032-d.png)
![]({{ site.baseurl }}/assets/img/0/03/0032-e.png) \
Gambar <a name="fig3">3</a>. Kurva $x-t$ (kiri) dan $y-t$ (kanan) untuk gerak benda mulai dari $t = t_1$ sampai $t = t_8$.

Perhatikan bahwa saat kurva merupakan garis mendatar, misalnya untuk $t_2 \le t \le t_3$ pada $x-t$, benda tidak bergerak pada arah tersebut (arah $x$).


## exer
1. Saat $t_5 \le t \le t_6$, pada arah apa benda bergerak dan pada arah apa benda diam?


## note
1. <a name="r01"></a>-, "Distance and Displacement", the Physics Classroom, url <https://www.physicsclassroom.com/class/1DKin/Lesson-1/Distance-and-Displacement> [20211004].
2. <a name="r02"></a>Kevin Beck, "Distance vs Displacement: What's the Difference & Why it Matters (w/ Diagram)", Sciencing, 28 Dec 2020, url <https://sciencing.com/distance-vs-displacement-whats-the-difference-why-it-matters-w-diagram-13720227.html> [20211004].
3. <a name="r03"></a>-, "Distance and displacement review", Khan Academy, url <https://www.khanacademy.org/science/in-in-class-11-physics-cbse-hindi/in-in-11-motion-in-a-straight-line-hindi/distance-displacement-and-coordinate-systems-hindi/a/relative-motion-review-article> [20211004].
4. <a name="r04"></a>Paul Peter Urone, Roger Hinrichs, Fatih Gozuacik, Denise Pattison, Catherine Tabor, "2.1 Relative Motion, Distance, and Displacement", Physics for High School, OpenStax, 23 Jul 2021, url <https://openstax.org/books/physics/pages/2-1-relative-motion-distance-and-displacement> [20211004].


## &nbsp;
[meter](0037.html) &bull; [length](0036.html) &bull; [position](0030.html) &bull; [relative position](0031.html) &bull; [displacement 1d](0033.html) &bull; [distance 2d](0034.html) &bull; [distance 1d](0035.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Benda bergerak ke arah $-x$ dan diam pada arah $y$.
</ans>
