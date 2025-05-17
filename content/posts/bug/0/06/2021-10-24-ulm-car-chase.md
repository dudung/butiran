---
layout: butir
authors: [viridi]
title: ulm car chase
permalink: pages/0062
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "equations", "uniform", "linear", "problem", "car", "chase"]
date: 2021-10-25 15:51:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/06/2021-10-24-ulm-car-chase.md
twitter_username: 6unpnp
nodes: []
---
Geral lurus beraturan atau GLB [[1](#r01)] memiliki permasalah menarik untuk dibahas, yang salah satunya adalah pengejaran kendaraan oleh kendaraan lain, di mana dapat kendaraan pertama bergerak lebih dahulu dari kendaraan kedua [[2](#r02)] atau kedua bergerak dengan salah satu kendaraan telah berada di depan kendaraan lainnya [[3](#r03)]. Kendaraan yang berada di belakang harus memiliki kecepatan tetap lebih besar dari kecepatan tetap kendaraan yang berada di depan. Umumnya pada permasalah pengejaran dua kendaraan, kendaran yang mengejar memiliki percepatan [[4](#r04)].


## equations
Setiap benda yang ber-GLB mengikuti persamaan

\begin{equation}\label{eqn-uniform-linear-motion}
x = x_0 + v \ (t - t_0),
\end{equation}

dengan $x$ posisi setiap saat, $x_0$ posisi awal, $v$ kecepatan, $t$ waktu, dan $t_0$ waktu awal. Bila terdapat banyak benda maka Persamaan \eqref{eqn-uniform-linear-motion} dapat dibuat menjadi

\begin{equation}\label{eqn-uniform-linear-motion-n}
x_n = x_{n0} + v_n \ (t - t_{n0}),
\end{equation}

dengan $n$ adalah untuk benda ke-$n$, misalnya $\rm A$, $\rm B$, $\dots$. Bagian persamaan yang mengandung $(t - t_0)$ menjadi amat berperan karena persamaan kinematikannya akan bergeser dengan waktu awal $t_0$, yang dalam pengertian teknisnya adalah benda atau kendaraan bergerak kemudian atau belakangan (pada $t = t_0$ dan bukan pada $t = 0$).


## curve shift
Ilustrasi pergeseran dengan mengubah $t$ menjadi $t - t_0$ dapat dilihat pada gambar-gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/06/0062-a1.png) <br> <center>(a)</center> | ![]({{ site.baseurl }}/assets/img/0/06/0062-a2.png) <br> <center>(b)</center>
![]({{ site.baseurl }}/assets/img/0/06/0062-a3.png) <br> <center>(c)</center> | ![]({{ site.baseurl }}/assets/img/0/06/0062-a4.png) <br> <center>(d)</center>

Gambar <a name="fig1">1</a>. Posisi gerak benda ber-GLB dengan $v = 2$ dan $x_0 = 0$ yang dimulai pada: (a) $t_0 = 0$, (b) $t_0 = 2$, (c) $t_0 = 3$, (d) $t_0 = 5$.

Pengaruh dari suku $(t - t_0)$ diilustrasikan dalam Gambar [1](#fig1) yang persamaan-persamaannya diberikan dalam Tabel [1](#tab1) berikut.

Tabel <a name="tab1">1</a>. Persamaan-persamaan untuk kurva $x-t$ pada Gambar [1](#fig1).

Gambar 1 | $x = f(t - t_0)$ | $x = f(t)$ 
:-: | :- | :-
(a) | $x = 2(t - 0)$ | $x = 2t$
(b) | $x = 2(t - 2)$ | $x = 2t - 4$
(c) | $x = 2(t - 3)$ | $x = 2t - 6$
(d) | $x = 2(t - 5)$ | $x = 2t - 10$

Kolom kedua Tabel [1](#tab1) memberikan gambaran yang jelas bahwa persamaan garis semula, dalam hal ini $x = 2t$, digeser dengan menggantikan $t$ dengan $t - t_0$. Kolom ketiga adalah fungsi yang biasa digunakan dengan jejak adanya pergeseran dengan $t \rightarrow (t - t_0)$ sudah tidak lagi terlihat.

![]({{ site.baseurl }}/assets/img/0/06/0062-b1.png) <br> <center>(a)</center> | ![]({{ site.baseurl }}/assets/img/0/06/0062-b2.png) <br> <center>(b)</center>
![]({{ site.baseurl }}/assets/img/0/06/0062-b3.png) <br> <center>(c)</center> | ![]({{ site.baseurl }}/assets/img/0/06/0062-b4.png) <br> <center>(d)</center>

Gambar <a name="fig2">2</a>. Posisi gerak benda ber-GLB dengan $v = 1$ dan $x_0 = 2$ yang dimulai pada: (a) $t_0 = 0$, (b) $t_0 = 1$, (c) $t_0 = 4$, (d) $t_0 = 7$.

Bila $x_0 \ne 0$ maka akan diperoleh grafik seperti pada Gambar [2](#fig2). Dua grafik terakhir terpotong dikarenakan tampilan dibatasi untuk $0 \le t \le 10$.

Tabel <a name="tab2">2</a>. Persamaan-persamaan untuk kurva $x-t$ pada Gambar [2](#fig2).

Gambar 1 | $x = f(t - t_0)$ | $x = f(t)$ 
:-: | :- | :-
(a) | $x = (t - 0)$ | $x = t$
(b) | $x = (t - 1)$ | $x = t - 1$
(c) | $x = (t - 4)$ | $x = t - 4$
(d) | $x = (t - 7)$ | $x = t - 7$

Persamaan-persamaan dalam Tabel [1](#tab1) dan [2](#tab2) digambarkan hanya untuk $t \ge t_0$ dalam rentang penggambaran grafik $0 \le t \le 10$.

![]({{ site.baseurl }}/assets/img/0/06/0062-c1.png) <br> <center>(a)</center> | ![]({{ site.baseurl }}/assets/img/0/06/0062-c2.png) <br> <center>(b)</center>
![]({{ site.baseurl }}/assets/img/0/06/0062-c3.png) <br> <center>(c)</center> | ![]({{ site.baseurl }}/assets/img/0/06/0062-c4.png) <br> <center>(d)</center>

Gambar <a name="fig3">3</a>. Posisi gerak benda ber-GLB dengan berbagai nilai $x_0$, $v$, dan $t_0$.

Untuk variasi nilai-nilai yang lain dari $x_0$, $v$, dan $t_0$ suatu benda yang ber-GLB dapat dilihat pada Gambar [3](#fig3).


## chasee vs chaser
Dengan menggunakan istilah benda yang bergerak di depan disebut pekejar(chasee) sedangkan yang dibelakang disebut pengejar (chaser), sebagaimana awalah pe bekerja pada kata tatar dan suluh [[5](#r05)], perujukan ke kedua benda menjadi lebih singkat dan jelas. Memang pekejar belum sering digunakan.

![]({{ site.baseurl }}/assets/img/0/06/0062-f1.png) | ![]({{ site.baseurl }}/assets/img/0/06/0062-f2.png)

Gambar <a name="fig3f">3f</a>. Contoh pekejar $\rm A$ dan pengejar $\rm B$ diamati mulai dari posisi awal $x_0$ yang sama dengan waktu kemunculan berbeda (kiri) dan diamati pada waktu awal yang sama $t_0$ dengan posisi berbeda (kanan).

Persaamaan \eqref{eqn-uniform-linear-motion-n} mengisyaratkan bahwa terdapat dua besaran yang unik milik pekejar dan pengejar, yaitu waktu awal $t_0$ dan posisi awal $x_0$. Terdapat dua contoh, di mana yang pertama posisi awal keduanya sama dan waktu mulai teramatinya berbeda sehingga terdapat selang waktu (time delay) antara pekejar dan pengejar mulai teramati dalam sistem [[2](#r02)], sedangkan yang kedua adalah keduanya sejak awal telah teramati dalam sistem atau dengan kata lain waktu awalnya sama akan tetapi pekejar telah berada pada jarak tertentu di depan pengejar, yang menyatakan terdapat jarak pisah (separation distance) antar keduanya [[3](#r03)]. Pada Gambar [3f](#fig3f) contoh pertama diberikan pada bagian kiri dan contoh kedua pada bagian kanan.


## time delay
Contoh pertama adalah pengejar bergerak beberapa saat setelah pekejar bergerak. Pekejar $\rm A$ bergerak mulai dari $t = t _{0 \rm A}$ dan pengejar $\rm B$ bergerak kemudian pada saat $t = t _{0\rm B} > t _{0 \rm A}$ dengan posisi awal keduanya adalah $x = x_0$. Bila kecepatan pekejar adalah $v _{\rm A}$ dan pengejar $v _{\rm B}$ maka persamaan kinematika kedua benda adalah

\begin{equation}\label{eqn-uniform-linear-motion-chasee}
x_{\rm A} = x_0 + v_{\rm A} \ (t - t_{0\rm A}),
\end{equation}

dan

\begin{equation}\label{eqn-uniform-linear-motion-chaser}
x_{\rm B} = x_0 + v_{\rm B} \ (t - t_{0\rm B}).
\end{equation}

Perhatikan bahwa Persamaan \eqref{eqn-uniform-linear-motion-chasee} dan \eqref{eqn-uniform-linear-motion-chaser} memiliki bentuk yang sama, yang dibedakan hanya dengan indeks $\rm A$ dan $\rm B$, dengan dalam hal ini $x _{0\rm A} = x _{0\rm B} = x_0$. Selanjutnya, pekejar dapat disusul oleh pengejar bila $v _{\rm B} > v _{\rm A}$. Ilustrasi mengenai hal ini dapat dilihat pada Gambar [4](#fig4) dan Tabel [3](#fig3).

![]({{ site.baseurl }}/assets/img/0/06/0062-d1.png) \
![]({{ site.baseurl }}/assets/img/0/06/0062-d2.png) \
Gambar <a name="fig4">4</a>. Grafik pekejar $\rm A$ dan pengejar $\rm B$ untuk keadaan: pekejar tidak dapat disusul (atas) dan pekejar dapat disusul (bawah).

Pada Gambar [4](#fig4) diperoleh dengan nilai-nilai umum $t _{0\rm A} = 2$, $t _{0\rm B} = 4$, dan $x _{0\rm A} = x _{0\rm A} = x_0 = 0$, dengan $v _{\rm A} = 2$, $v _{\rm B} = 4$ (atas) dan $v _{\rm A} = 4$, $v _{\rm B} = 2$ (bawah). Pada keadaan pekejar $\rm A$ dapat tersusul pengejar $\rm B$, waktu tersusul diperoleh $t = 6$ pada posisi $x _{\rm A} = x _{\rm B} = 4$.

Tabel <a name="tab3">3</a>. Kondisi dan keadaan kedua benda terkait dengan kurva $x-t$ pada Gambar [4](#fig4).

Kondisi | Keadaan | Posisi relatif $x_{\rm AB}$
:- | :-
$v _{\rm B} < v _{\rm A}$ | Pengejar $\rm B$ tidak dapat menyusul pekejar $\rm A$ | Semakin besar
$v _{\rm B} = v _{\rm A}$ | Pengejar $\rm B$ tidak dapat menyusul pekejar $\rm A$ | Tetap
$v _{\rm B} > v _{\rm A}$ | Pengejar $\rm B$ dapat menyusul pekejar $\rm A$ | Semakin kecil sampai tersusul lalu semakin besar

Keadaan untuk kondisi $v _{\rm B} = v _{\rm A}$ pada Tabel [3](#tab3) tidak diberikan dalam Gambar [4](#fig4), yang merupakan dua garis sejajar atau memiliki kemiringan sama karena memiliki kecepatan yang sama.

Kembali ke Persamaan \eqref{eqn-uniform-linear-motion-chasee} dan \eqref{eqn-uniform-linear-motion-chaser}, dengan data yang diberikan untuk membuat Gambar [4](#fig4), dapat dituliskan

$$
\begin{array}{c}
x_{\rm A} = 0 + 1(t - 2) = t - 2, \newline
x_{\rm B} = 0 + 2(t - 4) = 2t - 8.
\end{array}
$$

Kondisi tersusul adalah saat posisi kedua benda sama atau $x_{\rm A} = x_{\rm B}$ yang akan memberikan

$$
\begin{array}{rcl}
x_{\rm B} & = & x_{\rm A} \newline
2t - 8 & = & = t - 2 \newline
2t - t & = & 8 - 2 \newline
t & = & 6,
\end{array}
$$

waktu pekejar $\rm A$ tersusul oleh pengejar $\rm B$. Kemudian dengan melakukan substitusi nilai waktu ini ke persamaan sebelumnya, $x_{\rm A}$ ataupun $x_{\rm B}$, dapat diperoleh posisi di mana kejadian tersusul terjadi, yaitu $x_{\rm A} = x_{\rm B} = 4$. Dengan demikian

$$
\begin{array}{c}
t = 6, \newline
x = 4,
\end{array}
$$

adalah waktu dan posisi pekejar $\rm A$ tersusul oleh pengejar $\rm B$.


## separation distance
Contoh kedua adalah baik pekejar $v _{\rm A}$ dan pengejar $v _{\rm B}$ pada waktu yang sama telah bergerak akan tetapi pekejar berada pada jarak tertentu di depan pengejar. Untuk contoh ini $t _{0 \rm A} = t _{0 \rm B}$ dan $x _{0 \rm A} > x _{0 \rm B}$, dengan $\Delta x _{\rm AB} = x _{0 \rm A} - x _{0 \rm B}$ adalah jarak pisah keduanya atau seberapa jauh pekejar telah berada di depan pengejarnya. Persamaan keduanya akan menjadi

\begin{equation}\label{eqn-uniform-linear-motion-chasee-2}
x_{\rm A} = x_{0\rm A} + v_{\rm A} \ (t - t_0),
\end{equation}

dan

\begin{equation}\label{eqn-uniform-linear-motion-chaser-2}
x_{\rm B} = x_{0\rm B} + v_{\rm B} \ (t - t_0).
\end{equation}

Perhatikan bahwa kedua Persamaan \eqref{eqn-uniform-linear-motion-chasee-2} dan \eqref{eqn-uniform-linear-motion-chasee-2} juga memiliki bentuk yang sama, yang dibedakan hanya dengan indeks $\rm A$ dan $\rm B$. Dalam hal ini $t _{0\rm A} = t _{0\rm B} = t_0$.  Kemudian, sama seperti pada contoh sebelumnya, pekejar dapat disusul oleh pengejar bila $v _{\rm B} > v _{\rm A}$. Gambar [5](#fig5) dan Tabel [3](#fig3) memberikan ilustrasi mengenai hal ini.

![]({{ site.baseurl }}/assets/img/0/06/0062-e1.png) \
![]({{ site.baseurl }}/assets/img/0/06/0062-e2.png) \
Gambar <a name="fig5">5</a>. Grafik pekejar $\rm A$ dan pengejar $\rm B$ untuk keadaan: pekejar tidak dapat disusul (atas) dan pekejar dapat disusul (bawah).

Pada Gambar [5](#fig5) diperoleh dengan nilai-nilai umum $t _{0\rm A} = t _{0\rm B} = 0$, dan $x _{0\rm A} = 4$, $x _{0\rm A} = 2$, dengan $v _{\rm A} = 2$, $v _{\rm B} = 1$ (atas) dan $v _{\rm A} = 1$, $v _{\rm B} = 2$ (bawah). Pada keadaan pekejar $\rm A$ dapat tersusul pengejar $\rm B$, waktu tersusul diperoleh $t = 2$ pada posisi $x _{\rm A} = x _{\rm B} = 6$.

Dengan data yang diberikan untuk membuat Gambar [4](#fig4) dan bantuan Persamaan \eqref{eqn-uniform-linear-motion-chasee-2} dan \eqref{eqn-uniform-linear-motion-chaser-2}, dapat dituliskan

$$
\begin{array}{c}
x_{\rm A} = 4 + t, \newline
x_{\rm B} = 2 + 2t.
\end{array}
$$

Dikatakan pekejar $\rm A$ tersusul oleh pengejar $\rm B$ adalah pada kondisi posisi kedua benda sama atau $x_{\rm A} = x_{\rm B}$, sehingga

$$
\begin{array}{rcl}
x_{\rm B} & = & x_{\rm A} \newline
2 + 2t & = & = 4 + t \newline
-t + 2t & = & 4 - 2 \newline
t & = & 2,
\end{array}
$$

memberikan waktu pekejar $\rm A$ tersusul oleh pengejar $\rm B$. Dengan melakukan substitusi nilai waktu ini ke persamaan sebelumnya, $x_{\rm A}$ ataupun $x_{\rm B}$, dapat diperoleh posisi di mana kejadian tersusul terjadi, yaitu $x_{\rm A} = x_{\rm B} = 6$. Jdi

$$
\begin{array}{c}
t = 2, \newline
x = 6,
\end{array}
$$

adalah waktu dan posisi pekejar $\rm A$ tersusul oleh pengejar $\rm B$.


## exer
1. Tentukanlah $x_0$, $v$, dan $t_0$ dari Gambar [3](#fig3) (a).
2. Gunakan Gambar [3](#fig3) (b) untuk mencari nilai-nilai $x_0$, $v$, dan $t_0$.
3. Carilah dari Gambar [3](#fig3) (c) nilai-nilai $x_0$, $v$, dan $t_0$.
4. Hitunglah $x_0$, $v$, dan $t_0$ menggunakan Gambar [3](#fig3) (d).
5. Tentukan kapan dan di mana pekejar tersusul oleh pengejar untuk kedua contoh pada Gambar [3f](#fig3f).


## note
1. <a name="r01"></a>-, "Uniform Linear Motion" in College Physics, Physics, LibreText, 31 Dec 2020, url <https://phys.libretexts.org/@go/page/31883> [20211024].
2. <a name="r02"></a>Jim Hamm, "Solving Constant Velocity Chase Problem", YouTube, 26.09.2013, url <https://www.youtube.com/watch?v=2ipbU7n3oNA> [20211024].
3. <a name="r03"></a>Physics Explained, "Two cars with constant velocity. When will the faster car catch the slower one?", YouTube, 08.06.2020, url <https://www.youtube.com/watch?v=ADOQlKRIqEQ> [20211024].
4. <a name="r04"></a>Benny98, "Finding Time and Vf: Car chase problem", Physics Forum, 19 Sep 2018, url <https://www.physicsforums.com/threads/955778/> [20211024].
5. <a name="r05"></a>Fransiska Noel, "Pengaji dan Pengkaji", Tribun Manado, 21 Oktober 2014 1443, url <https://manado.tribunnews.com/2014/10/21/pengaji-dan-pengkaji> [20211025].


## &nbsp;
[position](0030.html) &bull; [velocity](0050.html) &bull; [kinematics equations 1d](0060.html) &bull; [uniform linear motion](0061.html) &bull; [kinematics graphs](0043.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $x_0 = 4$, $v = 0.5$, $t_0 = 0$; &nbsp; 2) $x_0 = 0$, $v = 5$, $t_0 = 0$; &nbsp; 3) $x_0 = 10$, $v = -1$, $t_0 = 0$; &nbsp; 4) $x_0 = 10$, $v = -2$, $t_0 = 5$; &nbsp; 4) $t = 6$, $x = 6$ dan $t = 6$, $x = 8$; &nbsp;
</ans>
