---
layout: butir
authors: [viridi]
title: consecutive motion
permalink: pages/0044
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "position", "velocity", "acceleration", "graph", "xva", "consecutive motion"]
date: 2021-10-14 20:22:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/04/2021-10-14-consecutive-motion.md
twitter_username: 6unpnp
nodes: []
---
Suatu GLB (gerak lurus beraturan) yang dilanjutkan oleh GLBB (gerak lurus berubah beraturan), dan kemudian diteruskan oleh GLB atau GLBB lainnya kadang tidak memiliki istilah yang tegas dan cukup dirujuk dengan kasus yang lebih rumit dalam pembahasan gerak lurus dengan perceptan tetap [[1](#r01)]. Akan tetapi terdapat pula penggunaan istilah gerak konsekutif [[2](#r02)].


## initial condition
Pada suatu gerak konsekutif, umumnya syarat awal diberikan pada rentang waktu pertama. Untuk rentang waktu yang lain, syarat awalnya adalah nilai akhir dari rentang waktu sebelumnya. Sebagai ilustasi bila

$$
a = \left\{
\begin{array}{rr}
a_1, & t_0 \le t < t_1, \newline
a_2, & t_1 \le t < t_2,
\end{array}
\right.
$$

maka syarat awalnya adalah $v_{10} = v(t_0)$ untuk rentang waktu $t_0 \le t < t_1$, sedangkan untuk untuk rentang waktu $t_1 \le t < t_2$ syarat awalnya adalah $v_{20} = v(t_1)$ yang diperoleh dengan fungsi kecepatan pada rentang pertama yang telah diperoleh. Sebagai ilustrasi

$$
a = \left\{
\begin{array}{rr}
1, & 0 \le t < 2, \newline
0, & 2 \le t < 3, \newline
-1, & 3 \le t < 5,
\end{array}
\right.
$$

dengan syarat awal $v(0) = 1$. Pada rentang $0 \le t < 2$ dapat diperoleh

$$
\begin{array}{rcl}
v - v(0) & = & \displaystyle \int_0^t 1 \ dt \newline
& = & \left[ t \right]_0^t \newline
& = & (t) - (0) \newline
v - 1 & = & t \newline
v & = & t + 1
\end{array}
$$

solusinya. Dengan solusi ini dapat ditentukan bahwa $v(2) = 3$ yang akan menjadi syarat awal pada rentang $2 \le t < 3$. Pada rentang ini

$$
\begin{array}{rcl}
v - v(2) & = & \displaystyle \int_2^t 0 \ dt \newline
& = & \left[ c \right]_2^t \newline
& = & (c) - (c) \newline
v - 3 & = & 0 \newline
v & = & 3
\end{array}
$$

merupakan solusinya. Perhatikan bahwa $c$ merupakan suatu konstanta. Dengan solusi yang baru saja diperoleh akan didapatkan $v(3) = 3$. Untuk rentang $3 \le t < 5$ dapat diperoleh solusinya.

$$
\begin{array}{rcl}
v - v(3) & = & \displaystyle \int_3^t -1 \ dt \newline
& = & \left[ -t \right]_3^t \newline
& = & (-t) - (-3) \newline
v - 3 & = & -t + 3 \newline
v & = & -t + 6.
\end{array}
$$

Dengan demikian dapat dituliskan untuk seluruh rentang waktunya

$$
v = \left\{
\begin{array}{rr}
t + 1, & 0 \le t < 2, \newline
3, & 2 \le t < 3, \newline
-t + 6, & 3 \le t < 5,
\end{array}
\right.
$$

fungsi kecepatan yang diperoleh. Perhatikan bagaimana syarat awal pada suatu rentang waktu digunakan untuk mendapatkan nilai fungsi di akhir rentang waktu tersebut yang kemudian menjadi syarat awal pada rentang waktu berikutnya. Konsekutif memang berarti mengikuti secara terus-menerus.

Untuk memperoleh fungsi posisi $x$ dari fungsi kecepatan $v$ yang baru saja diberikan, diperlukan syarat awal $x(0)$ dan kemudian langkah-langkah yang sama kembali dilakukan.


## some cases
Dengan menggunakan parameter $c_2$, $c_1$, dan $c_0$ untuk suatu fungsi waktu seperti

\begin{equation}\label{eqn-1}
f(t) = c_2 t^2 + c_1 t + c_0,
\end{equation}

dapat dilihat bahwa $a$ hanya memiliki $c_0$, $v$ memiliki $c_1$ dan $c_0$, sedangkan $x$ memiliki ketiganya, $c_2$, $c_1$, dan $c_0$. Terdapat parameter berikut
```
 a   v
 1   1  1
 0   0  3
-1  -1  6
```
yang merupakan parameter dari contoh pada bagian sebelumnya, hanya untuk $a$ dan $v$ karena $x$ belum dihitung. Representasi $c_2$, $c_1$, dan $c_0$ dalam bentuk ini yang akan digunakan pada bagian berikutnya.

### 3 a
Dengan menggunakan parameter berikut
```
 a   v		   x		
 1   1   0   0.5   0    0
-1  -1  16  -0.5  16  -64
 0	 0   0   0     0   64
```
dapat diperoleh Gambar [1](#fig1) di bawah ini.

![]({{ site.baseurl }}/assets/img/0/04/0044-a1.png) \
![]({{ site.baseurl }}/assets/img/0/04/0044-a2.png) \
![]({{ site.baseurl }}/assets/img/0/04/0044-a3.png) \
Gambar <a name="fig1">1</a>. Grafik percepatan $a$ (atas), kecepatan $v$ (tengah), dan posisi $x$ (bawah) untuk kasus 3 a.

### 4 a
Dengan menggunakan parameter berikut
```
 a   v    x		
-1  -1    0  -0.5    0    0
 0   0   -5   0     -5   12.5
 1   1  -15   0.5  -15   62.5
 2   2  -30   1    -30  175
```
dapat diperoleh Gambar [2](#fig2) di bawah ini.

![]({{ site.baseurl }}/assets/img/0/04/0044-b1.png) \
![]({{ site.baseurl }}/assets/img/0/04/0044-b2.png) \
![]({{ site.baseurl }}/assets/img/0/04/0044-b3.png) \
Gambar <a name="fig2">2</a>. Grafik percepatan $a$ (atas), kecepatan $v$ (tengah), dan posisi $x$ (bawah) untuk kasus 4 a.

### 5 a
Dengan menggunakan parameter berikut
```
 a   v        x		
 0   0    0   0      0     0
-1  -1    4  -0.5    4    -8
 2   2  -20   1    -20    88
-3  -3   40  -1.5   40  -272
 4   4  -72   2    -72   624
```
dapat diperoleh Gambar [3](#fig3) di bawah ini.

![]({{ site.baseurl }}/assets/img/0/04/0044-c1.png) \
![]({{ site.baseurl }}/assets/img/0/04/0044-c2.png) \
![]({{ site.baseurl }}/assets/img/0/04/0044-c3.png) \
Gambar <a name="fig3">3</a>.  Grafik percepatan $a$ (atas), kecepatan $v$ (tengah), dan posisi $x$ (bawah) untuk kasus 5 a.

Kasus untuk tiga nilai percepatan (3 a), empat nilai percepatan (4 a), dan lima nilai percepatan (5 a) telah diberikan berturut-turut pada Gambar [1](#fig1), [2](#fig2), dan [3](#fig3).


## note
1. <a name="r01"></a>Richard Fitzpatrick, "Motion with constant acceleration", in Classical Mechanics: An Introductory Course, the University of Texas at Austin, 2 Feb 2006, url <https://farside.ph.utexas.edu/teaching/301/lectures/node18.html> [20211014].
2. <a name="r02"></a>CONCEPTREE Learning, "Motion in One Dimension-Connected Motion and Consecutive Motion", YouTube, 07.11.2020, url <https://www.youtube.com/watch?v=UBNXLTxViDs> [20211014].


## &nbsp;
[position](0030.html) &bull; [position velocity](0040.html) &bull; [velocity acceleration](0041.html) &bull; [kinematics graphs](0043.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
