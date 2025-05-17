---
layout: butir
authors: [viridi]
title: average speed
permalink: pages/0052
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "velocity", "speed"]
date: 2021-10-19 15:23:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/05/2021-10-17-average-speed.md
twitter_username: 6unpnp
nodes: []
---
Laju rata-rata adalah jarak yang ditempuh dibagi dengan waktu selama gerak itu terjadi [[1](#r01), [2](#r02)], yang kadang disebut saja sebagai laju, sebagai suatu definisi yang belum final [[3](#r03)], atau penyederhanaan untuk kalangan tertentu [[4](#r04)].


## formula
Untuk menghitung laju rata $s_{\rm avg}$ dari waktu inisial $t_i$ sampai waktu final $t_f$, untuk kasus 1d, dapat diperoleh dari fungsi kecepatan $v$

\begin{equation}\label{eqn-1}
s_{\rm avg} = \frac{1}{t_f - t_i} \int_{t_i}^{t_f} \left| v \right| dt \equiv \bar{s}
\end{equation}

ataupun fungsi posisi $x$

\begin{equation}\label{eqn-2a}
s_{\rm avg} = \frac{1}{t_f - t_i} \sum_{n = 1}^N \left| x_{n+1} - x_n \right| \equiv \bar{s},
\end{equation}

dengan

\begin{equation}\label{eqn-2b}
x_n = x(t_i) + \left[ \frac{x(t_f) - x(t_i)}{N} \right] (n - 1),
\end{equation}

di mana yang lazim adalah dengan menggunakan Persaamaan \eqref{eqn-1} ketimbang Persamaan \eqref{eqn-2a}. Penggunaan Persamaan \eqref{eqn-1} pun tidak dilakukan secara eksplisit melainkan melalui menghitung luas di bahwa kurva pada grafik $v-t$. Atau secara sederhana

\begin{equation}\label{eqn-1b}
\bar{s} \equiv s_{\rm avg} = \frac{d_{if}}{t_f - t_i}
\end{equation}

bila jarak $d_{if}$ yang ditempuh antar waktu $t_i$ dan $t_f$ telah diketahui. Persamaan \eqref{eqn-1b} berlaku umum untuk kasua 1d, 2d, dan 3d.


## 1d motion
Sebuah kotak bergerak dari posisi $x_1$ sampai posisi $x_5$ mulai dari waktu $t_1$ sampai waktu $t_5$ sebagaimana diilustrasikan pada Gambar [1](#fig1) berikut ini.

![]({{ site.baseurl }}/assets/img/0/05/0052-a.png) \
Gambar <a name="fig1">1</a>. Sebuah kotak bergerak dari satu titik ke titik lainnya sepanjang sumbu $x$, dengan kecepatan benda bernilai konstan saat bergerak antar dua titik berurutan.

<div style="float:left; width:200px; padding-right:20px;">
Tabel <a name="tab1">1</a>. Posisi benda pada waktu tertentu.
<table style="width:120px;">
<tr><td>$n$</td><td>$t_n$</td><td>$x_n$</td></tr>
<tr><td>$1$</td><td>$0$</td><td>$1$</td></tr>
<tr><td>$2$</td><td>$2$</td><td>$3$</td></tr>
<tr><td>$3$</td><td>$5$</td><td>$9$</td></tr>
<tr><td>$4$</td><td>$6$</td><td>$8$</td></tr>
<tr><td>$5$</td><td>$10$</td><td>$0$</td></tr>
</table>
</div>
<div style="float:left; width:200px;">
Tabel <a name="tab2">2</a>. Kecepatan benda pada selang waktu tertentu.
<table style="width:140px;">
<tr><td style="text-align:center;">$t$</td><td>$v$</td></tr>
<tr><td>$0 \le t < 2$</td><td>$1$</td></tr>
<tr><td>$2 \le t < 5$</td><td>$2$</td></tr>
<tr><td>$5 \le t < 6$</td><td>$-1$</td></tr>
<tr><td>$6 \le t < 10$</td><td>$-2$</td></tr>
</table>
</div>
<br clear=all />

<div style="float:left; width:200px; padding-right:20px; border:0px solid black; font-size:80%;">
\begin{equation}\label{eqn-3}
x = \left\{
\begin{array}{rr}
t + 1, & 0 \le t < 2, \newline
2t - 1, & 2 \le t < 5, \newline
14 - t, & 5 \le t < 6, \newline
20 - 2t, & 6 \le t < 10,
\end{array}
\right.
\end{equation}
</div>
<div style="float:left; width:200px; border:0px solid black; font-size:80%;">
\begin{equation}\label{eqn-4}
v = \left\{
\begin{array}{rr}
1, & 0 \le t < 2, \newline
2, & 2 \le t < 5, \newline
-1, & 5 \le t < 6, \newline
-2, & 6 \le t < 10,
\end{array}
\right.
\end{equation}
</div>
<br clear=all />

<div style="float:left; width:200px; padding-right:20px; border:0px solid black;">
<img src="{{ site.baseurl }}/assets/img/0/05/0052-b1.png" />
Gambar <a name="fig2">2</a>. Posisi benda setiap saat.
</div>
<div style="float:left; width:200px; border:0px solid black;">
<img src="{{ site.baseurl }}/assets/img/0/05/0052-b2.png" />
Gambar <a name="fig3">3</a>. Kecepatan benda setiap saat.
</div>
<br clear=all />

Ilustrasi gerak benda pada Gambar [1](#fig1) diperjelas dengan informasi posisi benda dan waktu pada setiap titik pada Tabel [1](#tab1) serta kecepatan antar dua buah titik pada Tabel [2](#tab2), yang secara eksplisit dituliskan dalam Persamaan \eqref{eqn-3} dan Persamaan \eqref{eqn-4} untuk posisi $x$ dan kecepatan $v$, berturut-turut. Grafik untuk keduanya pun diberikan dalam Gambar [2](#fig2) dan [3](#fig3).

Selanjutnya dengan menggunakan tabel, di mana baris menggambarkan posisi inisial (awal) dan kolom posisi final (akhir) dapat dicari jarak $d_{if}$ dan selang waktu $\Delta t_{if}$.

Tabel <a name="tab3">3</a>. Jarak, selang waktu, dan laju rata-rata benda.

$d_{if}$ | 1 | 2 | 3 | 4 | 5
:-:|:-:|:-:|:-:|:-:|:-:|
$1$ |   |  $2$ |  $8$ |  $9$ | $17$
$2$ |   |    |  $6$ |  $7$ | $15$
$3$ |   |    |    | $1$ | $9$
$4$ |   |    |    |    | $8$
$5$ |   |    |    |    |

$\Delta t_{if}$ | 1 | 2 | 3 | 4 | 5
:-:|:-:|:-:|:-:|:-:|:-:|
$1$ |   |  $2$ |  $5$ |  $6$ | $10$
$2$ |   |    |  $3$ |  $4$ | $8$
$3$ |   |    |    | $1$ | $5$
$4$ |   |    |    |    | $4$
$5$ |   |    |    |    |

$\bar{s}_{if}$ | 1 | 2 | 3 | 4 | 5
:-:|:-:|:-:|:-:|:-:|:-:|
$1$ |   |  $1$ |  $\frac85$ |  $\frac32$ | $1.7$
$2$ |   |    |  $2$ |  $1\frac34$ | $1\frac78$
$3$ |   |    |    | $1$ | $1\frac45$
$4$ |   |    |    |    | $2$
$5$ |   |    |    |    |

Tabel [3](#tab3) bagian bawah diperoleh dengan menggunakan informasi dari tabel bagian atas dan tengah yang dimasukkan ke Persamaan \eqref{eqn-1b}. Perhatikan bahwa nilai laju rata-rata selalu berharga positif. Dan untuk semakin banyak jumlah titik yang diperhitungkan (dilewati benda) nilai jarak yang diperoleh akan semakin besar, misalnya $d_{14} > d_{13}$ karena yang pertama melewati empat titik (1, 2, 3, 4) dan yang kedua hanya tiga titik (1, 2, 3).

Dengan menggunakan Persamaan \eqref{eqn-1} yang sebenarnya adalah menghitung luas di bawah kurva dengan memutlakkan semua nilai luas yang diperoleh.

![]({{ site.baseurl }}/assets/img/0/05/0052-c1.png) <br> <center>(a)</center> | ![]({{ site.baseurl }}/assets/img/0/05/0052-c2.png) <br> <center>(b)</center>
![]({{ site.baseurl }}/assets/img/0/05/0052-c3.png) <br> <center>(a)</center> | ![]({{ site.baseurl }}/assets/img/0/05/0052-c4.png) <br> <center>(b)</center>

 Gambar <a name="fig4">4</a>. Luas di bawah kurva untuk waktu: (a) $0 - 6 \ \rm s$, (b) $0 - 7 \ \rm s$, (c) $0 - 8 \ \rm s$, dan (d) $0 - 10 \ \rm s$.

Dengan menggunakan informasi dari Gambar [4](#fig4) dapat dihitung laju rata-rata seperti dalam [4](#tab4) berikut. Ingat bahwa semua nilai luas di bawah kurva digunakan nilai mutlaknya (bila bernilai negatif, dibuat menjadi positif).

Tabel <a name="tab4">4</a>. Selang waktu, jarak, dan laju rata-rata.

$\Delta t$ | $d$ | $s_{\rm avg}$
:-: | :-: | :-:
$6 - 0 = 6$ | $\|+2\| + \|+6\| + \|-1\| = 9$ | $\frac32$
$7 - 0 = 7$ | $\|+2\| + \|+6\| + \|-1\| + \|-2\| = 11$ | $1\frac47$
$8 - 0 = 8$ | $\|+2\| + \|+6\| + \|-1\| + \|-4\| = 13$ | $1\frac58$
$10 - 0 = 10$ | $\|+2\| + \|+6\| + \|-1\| + \|-8\| = 17$ | 1.7

Nilai pada baris pertama dan terakhir pada Tabel [4](#tab4) dapat dikonfirmasi dengan nilai pada Tabel [3](#tab3).


## 2d motion
Gambar [5](#fig5) merupakan salah satu gerak 2d yang akan dijadikan sebagai contoh untuk menghitung laju rata-rata.

![]({{ site.baseurl }}/assets/img/0/05/0052-d.png) \
Gambar <a name="fig5">5</a>. Gerak 2d dengan selang waktu antara dua titik berurutan adalah $1 \ \rm s$ dan grid $1 \ {\rm m} \times 1 \ {\rm m}$.

Dengan memperhatikan Gambar [5](#fig5) dapat dihitung jarak antar dua titik berurutan sebagai seperti dalam Tabel [5](#tab5).

Tabel <a name="tab5">5</a>. Jarak antar dua titik berurutan dalam Gambar [5](#fig5).

$t_i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$
$t_f$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$
$d_{t_i - t_f}$ | $\frac56 \pi$ | $\frac56 \pi$ | $\frac56 \pi$ | $\frac52$ | $\frac52$ | $3$ | $3$ | $4$ |$5$ | $10$

Dengan demikian bila ingin dicari, misalnya antara waktu inisial (awal) $t = 2$ dan waktu final (akhir) $t = 6$ maka jarak yang ditempuh adalah

$$
\begin{array}{rcl}
d_{2-6} & = & d_{2-3} + d_{3-4} + d_{4-5} + d_{5-6} \newline
& = & \frac56 \pi + \frac52 + \frac52 + 3 \newline
& = & \frac56 \pi + 8
\end{array}
$$

dan dapat pula dicari untuk antar dua titik yang lainnya. Masih untuk waktu antara $t = 2$ dan $t = 6$ ini $\Delta t = 6 - 2 = 4$ sehingga

$$
\begin{array}{rcl}
\bar{v}_{2-6} & = & \displaystyle \frac{d_{2-6}}{\Delta t} \newline
& = & \displaystyle \frac{\frac56 \pi + 8}{4} \newline
& = & \frac{5}{24} \pi + 2
\end{array}
$$

adalah laju rata-ratanya.

Tabel <a name="tab6">6</a> Jarak antar dua titik mulai dari $t = 0$ sampai $t = 10$.

$d$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
0 | | $\frac56 \pi$ | $\frac53 \pi$ | $\frac52 \pi$ | $\frac52 \pi + \frac52$ | $\frac52 \pi + 5$ | $\frac52 \pi + 8$ | $\frac52 \pi + 11$ | $\frac52 \pi + 15$ | $\frac52 \pi + 20$ | $\frac52 \pi + 30$  
1 | | | $\frac56 \pi$ | $\frac53 \pi$ | $\frac53 \pi + \frac52$ | $\frac53 \pi + 5$ | $\frac53 \pi + 8$ | $\frac53 \pi + 11$ | $\frac53 \pi + 15$ | $\frac53 \pi + 20$ | $\frac53 \pi + 30$
2 | | | | $\frac56 \pi$ | $\frac56 \pi + \frac52$ | $\frac56 \pi + 5$ | $\frac56 \pi + 8$ | $\frac56 \pi + 11$ | $\frac56 \pi + 15$ | $\frac56 \pi + 20$ | $\frac56 \pi + 30$
3 | | | | | $\frac52$ | $5$ | $8$ | $11$ | $15$ | $20$ | $30$
4 | | | | | | $2\frac12$ | $5\frac12$ | $8\frac12$ | $12\frac12$ | $17\frac12$ | $27\frac12$
5 | | | | | | | $3$ | $6$ | $10$ | $15$ | $25$
6 | | | | | | | | $3$ | $7$ | $12$ | $22$
7 | | | | | | | | | $4$ | $9$ | $19$
8 | | | | | | | | | | $5$ | $15$
9 | | | | | | | | | | | $10$
10 | | | | | | | | | | | |

Dengan $\Delta t = t_f - t_i$ dan jarak antar dua titik terlah diberikan oleh Tabel [6](#tab6) maka laju rata-rata antar dua titik mulai dari $t = 0$ sampai $t = 10$ dapat dihitung.


## 3d motion
Salah satu masalah dalam membahas gerak 3d adalah memberikan ilustrasinya. Gambar [6](#fig6) berikut merupakan salah satu contoh gerak yang cukup sederhana dengan antar dua titik berurutan benda bergerak dengan kecepatan tetap. Secara umum bisa saja benda bergerak menguti suatu fungsi parametric $x(t)$, $y(t)$, dan $z(t)$.

![]({{ site.baseurl }}/assets/img/0/05/0052-e.png) \
Gambar <a name="fig6">6</a>. Gerak 3d dengan kecepatan konstan antar dua waktu berurutan dan grid $1 \ {\rm m} \times 1 \ {\rm m} \times 1 \ {\rm m}$.

Komponen $x$, $y$, dan $z$ untuk menghitung jarak antar dua waktu berurutan diberikan pada Gambar [6](#fig6) agar memudahkan, yang sebenarnya dapat dibaca pula dari grafik dengan menggunakan garis bantu (putus-putus) sewarna dengan vektornya. Jarak antara $t = 0$ dan $t = 3$ dapat dihitung melalui

\begin{equation}\label{eqn-5}
d_{0-3} = \sqrt{x_{0-3}^2 + y_{0-3}^2 + y_{0-3}^2}
\end{equation}

bila lintasannya berupa garis lurus, dengan

\begin{equation}\label{eqn-5b}
\begin{array}{rcl}
x_{0-3} & = & x(3) - x(0), \newline
y_{0-3} & = & y(3) - y(0), \newline
z_{0-3} & = & z(3) - z(0),
\end{array}
\end{equation}

di mana $x(3)$ berarti nilai $x$ saat $t = 3$.

Tabel <a name="tab7">7</a>. Jarak antar dua titik berurutan suatu gerak 3d pada Gambar [6](#fig6) dan laju rata-ratanya.

$t_i$ | $t_f$ | $x_{i-f}$ | $y_{i-f}$ | $z_{i-f}$ | $d$ | $\Delta t$ | $s_{\rm avg}$
:-:   | :-:   | :-:       | :-:       | :-:       | :-: | :-:        | :-:
0     | 3     | 4         | 8         | 1         | 9   | 3          | 3
3     | 10    | 3         | 6         | 2         | 7   | 7          | 1
10    | 13    | 4         | 2         | 4         | 6   | 3          | 2
13    | 15    | 2         | 1         | 2         | 3   | 2          | 1.5

Antara $t = 0$ dan $t = 10$ dapat diperoleh

\begin{array}{rcl}
d_{0-10} & = & d_{0-3} + d_{3-10} \newline
& = & 9 + 7 \newline
& = & 16
\end{array}

dan dengan $\Delta t = 10 - 0 = 10$ akan diperoleh $s_{\rm avg} = 16 / 10 = 1.6$. Laju rata-rata antar dua waktu yang lain dapat diperoleh dengan cara yang sama. Selanjutnya, hanya sebagai motivasi, contoh fungsi yang lebih rumit diberikan pada Gambar [7](#fig7) berikut ini.

![]({{ site.baseurl }}/assets/img/0/05/0052-f.png) \
Gambar <a name="fig7">7</a>. Gerak 3d mengikuti suatu fungsi parametric dengan grid $0.5 \times 0.5 \times 0.5$.

Grafik pada Gambar [7](#fig7) dapat diperoleh melalui fungsi parametric berikut

$$
\begin{array}{rcl}
x & = & 0.1 t \cos 2t, \newline
y & = & 0.1 t \sin 2t, \newline
z & = & 0.15 t,
\end{array}
$$

dengan $0 \le t \le 20$ dalam 200 langkah yang dilukis secara daring menggunakan [[5](#r05)]. Bagaimana menghitung panjang lintasan atau jarak dan kemudian laju untuk gerak 3d seperti pada Gambar [7](#fig7) tidak akan dibahas di sini. Gambar tersebut diberikan hanya untuk ilustrasi bahwa ada bentuk lintasan yang lebih rumit yang tidak dapat dihitung secara sederhana menggunakan Persamaan \eqref{eqn-1} ataupun Persamaan \eqref{eqn-2a}.


## exer
1. Hitunglah laju rata-rata antara $t = 8$ dan $t = 10$ dari Tabel [6](#tab6).
2. Dengan menggunakan Tabel [6](#tab6) carial nilai $\bar{v}_{5-10}$.
3. Carilah $\bar{s}_{3-15}$ dari Gambar [6](#fig6).

## note
1. <a name="r01"></a>Paul Peter Urone, Roger Hinrichs, "Time, Velocity, and Speed", in College Physics, OpenStax, Houston, Texas, 21 Jun 2012, url <https://openstax.org/books/college-physics/pages/2-3-time-velocity-and-speed> [20211017].
2. <a name="r02"></a>Wikipedia contributors, "Speed", Wikipedia, The Free Encyclopedia, 18 August 2021, 08:28 UTC, <https://en.wikipedia.org/w/index.php?oldid=1039365254> [20211017].
3. <a name="r03"></a>Glenn Elert, "Speed and Velocity", in the Physics Hypertextbook, 2021, url <https://physics.info/velocity/> [20211017].
4. <a name="r04"></a>Ducksters, "Physics for Kids: Speed and Velocity", Ducksters, Technological Solutions, Inc. (TSI), url <https://www.ducksters.com/science/physics/speed_and_velocity.php> [20211017].
5. <a name="r05"></a>Paul Seeburger, "Space Curves: Helix", CalcPlot3D, Monroe Community College, 18 Aug 2020, url <https://c3d.libretexts.org/CalcPlot3D/index.html#SpaceCurves> [20211019].


## &nbsp;
[position](0030.html) &bull; [velocity](0050.html) &bull; [displacement 2d](0032.html) &bull; [displacement 1d](0033.html) &bull; [average velocity](0051.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $7.5$; &nbsp; 2) $5$; &nbsp; 3) $4/3$; &nbsp;
</ans>
