---
layout: butir
authors: [viridi]
title: average velocity
permalink: pages/0051
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "velocity", "average velocity"]
date: 2021-10-17 19:59:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/05/2021-10-15-average-velocity.md
twitter_username: 6unpnp
nodes: []
---
Kecepatan rata-rata dapat didefinisikan sebagai perpindahan dibagi selang waktu [[1](#r01)]. Sebagaimana kecepatan satu dari kecepatan rata-rata adalah $\rm m/s$ dan kecepatan rata-rata merupakan besaran vektor.


## formula
Kecepatan rata-rata diperoleh melalui

\begin{equation}\label{eqn-1}
\bar{v} = \frac{x_f - x_i}{t_f - t_i} \equiv v_{\rm avg},
\end{equation}

dengan $x_i$ dan $x_f$ adalah posisi inisial (awal) dan final (akhir), demikian juga dengan $t_i$ dan $t_f$ yang merupakan waktu inisial dan final. Terkadang Persamaan \eqref{eqn-1} dituliskan pula sebagai

\begin{equation}\label{eqn-1a}
\bar{v} = \frac{\Delta x}{\Delta t},
\end{equation}

dengan $\Delta x = x_f - x_i$ dan $\Delta t = t_f - t_i$. Lambang $v_{\rm avg}$ digunakan bila kecepatan harus dinyatakan dengan lambang vektor (panah di atasnya) $\vec{v}$, sehingga tidak perlu ada garis mendatar di atas panah seperti $\bar{\vec{v}}$. Hal ini dikuatirkan kurang jelas terlihat.


## misconception
Terdapat konsep yang keliru mengenai kecepatan rata-rata sebagaimana disajikan dalam bentuk suatu kalkulator [[2](#r02)], yang menghitung

\begin{equation}\label{eqn-2}
\bar{v} = \frac12 (v_i + v_f),
\end{equation}

di mana hal ini hanya berlaku untuk gerak lurus dan percepatan konstan [[3](#r03)]. Indeks $i$ berarti inisial (awal) dan $f$ berarti final (akhir).

Dalam kinematika untuk gerak lurus dengan percepatan $a$ tetap terdapat hubungan-hubungan

\begin{equation}\label{eqn-3a}
v_f = v_i + a(t_f - t_i),
\end{equation}

\begin{equation}\label{eqn-3b}
x_f = x_i + v_i (t_f - t_i) + \frac12 a(t_f - t_i)^2,
\end{equation}

\begin{equation}\label{eqn-3c}
v_f^2 = v_i^2 + 2a(x_f - x_i).
\end{equation}

Dengan menggunakan Persamaan \eqref{eqn-3a} - \eqref{eqn-3c} dapat dilakukan langkah-langkah berikut

$$
\require{cancel}
\begin{array}{rcl}
v_f^2 & = & v_i^2 + 2a(x_f - x_i) \newline
v_f^2 - v_i^2 & = & 2a(x_f - x_i) \newline
(v_f - v_i)(v_f + v_i) & = & 2a(x_f - x_i) \newline
(v_f - v_i)(v_f + v_i) & = & \displaystyle 2 \ \left( \frac{v_f - v_i}{t_f - t_i} \right) \ (x_f - x_i) \newline
\cancel{(v_f - v_i)}(v_f + v_i) & = & \displaystyle 2 \ \frac{\cancel{v_f - v_i}}{t_f - t_i} \ (x_f - x_i) \newline
(v_f + v_i) & = & \displaystyle \frac{2}{t_f - t_i} \ (x_f - x_i) \newline
\displaystyle \frac12 (v_f + v_i) & = & \displaystyle \frac{x_f - x_i}{t_f - t_i} \newline
\displaystyle \frac12 (v_f + v_i) & = & \bar{v}.
\end{array}
$$

Pada baris pertama digunakan Persamaan \eqref{eqn-3c}, setelah itu digunakan hubungan $a^2 - b^2 = (a + b)(a - b)$, dan selanjutnya pada baris keempat disubstitusikan Persamaan \eqref{eqn-3a}. Pada baris terakhir digunakan definisi dari kecepatan rata-rata dari Persamaan \eqref{eqn-1} sehingga dapat diperoleh Persamaan \eqref{eqn-2} yang berlaku hanya untuk gerak lurus dengan percepatan $a$ bernilai konstan.


## 2d motion
Sebagai ilustrasi diambil gerak 2d yang akan digunakan untuk menghitung perpindahan pada beberapa selang waktu sebagai contohnya. Gambar [1](#fig1) berikut menggambarkan bentuk lintasan yang dibahas.

![]({{ site.baseurl }}/assets/img/0/05/0051-a.png) \
Gambar <a name="fig1">1</a>. Suatu lintasan terdiri dari lima titik dengan waktu pada tiap-tiap titik adalah $t_1 \dots t_6$ dan grid berukuran $1 \ {\rm m} \times 1 \ {\rm m}$.

Informasi waktu pada masing-masing titik dalam Gambar [1](#fig1) diberikan pada Tabel [1](#tab1) di bawah ini.

Tabel <a name="tab1">1</a>. Waktu pada titik-titik dalam Gambar [1](#fig1).

$n$ | 1 | 2 | 3 | 4 | 5
:-: | :-: | :-: | :-: | :-:
$t_n \ ({\rm s}) $ | 2 | 8 | 15 | 22 | 27

Perpindahan dari titik 1 ke titik 2 ($\Delta \vec{r} _{12}$), dari titik 1 ke titik 3 ($\Delta \vec{r} _{13}$), dari titik 1 ke titik 4 ($\Delta \vec{r} _{14}$), dan dari titik 1 ke titik 5 ($\Delta \vec{r} _{15}$) disajikan dalam Gambar [2](#fig2) berikut ini, yang nanti nilai-nilainya akan digunakan untuk menghitung kecepatan rata-rata.

![]({{ site.baseurl }}/assets/img/0/05/0051-b.png) | ![]({{ site.baseurl }}/assets/img/0/05/0051-c.png)
![]({{ site.baseurl }}/assets/img/0/05/0051-d.png) | ![]({{ site.baseurl }}/assets/img/0/05/0051-e.png)

Gambar <a name="fig2">2</a>. Perpindahan dari titik 1 ke titik 2, 3, 4, dan 5.

Dari Gambar [2](#fig2) dapat jelas diperoleh perpindahan $\Delta \vec{r} _{if}$ berikut, yang juga dapat dituliskan dengan notasi besar vektor $\|\Delta \vec{r} _{if} \|$ dan arahnya $\hat{n} _{if}$.

Tabel <a name="tab2">2</a>. Perpindahan dari titik 1 ke titik 2, 3, 4, dan 5.

$i$ | $f$ | $\Delta \vec{r}_{if}$ | $\|\Delta \vec{r}_{if} \| \ \hat{n} _{if}$
:-: | :-: | :-: | :-:
1 | 2 | $12 \hat{x}$ | $12 \hat{x}$
1 | 3 | $12 \hat{x} - 5 \hat{y}$ | $13 \ \left(\frac{12}{13} \hat{x} - \frac{5}{13} \hat{y} \right)$
1 | 4 | $8 \hat{x} - 6 \hat{y}$ | $10 \ \left(\frac{4}{5} \hat{x} - \frac{3}{5} \hat{y} \right)$
1 | 5 | $4 \hat{x} - 3 \hat{y}$ | $5 \ \left(\frac{4}{5} \hat{x} - \frac{3}{5} \hat{y} \right)$

Dengan menggunakan informasi dari Tabel [1](#tab1) dan [2](#tab2) serta Persaaman \eqref{eqn-1} dapat diperoleh kecepatan rata-rata antara waktu 1 ke 2, 1 ke 3, 1 ke 4, dan 1 ke 5.

Tabel <a name="tab3">3</a>. Kecepatan rata-rata $\vec{v}_{\rm avg}$ antara titik 1 ke titik 2, 3, 4, dan 5.

$i$ | $f$ | $\|\Delta \vec{r}_{if} \| \ \hat{n} _{if}$ | $\Delta t$ | $\vec{v} _{\rm avg}$
:-: | :-: | :-: | :-: | :-:
1 | 2 | $12 \hat{x}$ | 6 | $2 \hat{x}$ 
1 | 3 | $13 \ \left(\frac{12}{13} \hat{x} - \frac{5}{13} \hat{y} \right)$ | 13 | $\left(\frac{12}{13} \hat{x} - \frac{5}{13} \hat{y} \right)$
1 | 4 | $10 \ \left(\frac{4}{5} \hat{x} - \frac{3}{5} \hat{y} \right)$ | 20 | $0.5 \ \left(\frac{4}{5} \hat{x} - \frac{3}{5} \hat{y} \right)$
1 | 5 | $5 \ \left(\frac{4}{5} \hat{x} - \frac{3}{5} \hat{y} \right)$ | 25 | $0.2 \ \left(\frac{4}{5} \hat{x} - \frac{3}{5} \hat{y} \right)$

Dengan memikian telah diperolah kecepatan rata-rata antara waktu $t_1$ dan $t_2$, $t_1$ dan $t_3$, $t_1$ dan $t_4$, dan $t_1$ dan $t_5$, sebagaimana diberikan dalam Tabel [3](#tab3).


## table
Selain dengan menggunakan grafik seperti pada Gambar [1](#fig1), data dalam posisi dan waktu bentuk tabel dapat pula digunakan untuk menghitung kecepatan rata-rata. Dengan menggunakan Tabel [1](#tab1) dan [2](#tab2) dapat diperoleh.

Tabel <a name="tab4">4</a>. Posisi dan waktu titik 1, 2, 3, 4, dan 5 dari Gambar [1](#fig1).

$n$ | $x$ | $y$ | $t$
:-: | :-: | :-: | :-:
1 |  0 | 7 |  2
2 | 12 | 7 |  8
3 | 12 | 2 | 15
4 |  8 | 1 | 22
5 |  4 | 4 | 27

Dengan Persamaan \eqref{eqn-1} dan data dalam Tabel [4](#tab4) dapat diperoleh kecepatan rata-rata antara waktu $t_i$ dan $t_f$.


## function
Fungsi waktu $t$ dari posisi $x$ merupakan alternatif sumber informasi untuk menghitung kecepatan rata-rata, yang dalam hal ini Persamaan \eqref{eqn-1} akan menjadi

\begin{equation}\label{eqn-4}
\bar{v}_{if} = \frac{x(t_f) - x(t_i)}{t_f - t_i},
\end{equation}

dengan telah diketahui $x(t)$ untuk setiap $t$ dalam rentang waktu yang ingin dicari kecepatan rata-ratanya. Sebagai ilustrasi suatu fungsi posisi memiliki bentuk

\begin{equation}\label{eqn-5a}
x = R \cos \omega t
\end{equation}

dan

\begin{equation}\label{eqn-5b}
y = R \sin 2 \omega t
\end{equation}

dengan $T = 0.25 \ {\rm s}$, $R = 5 \ {\rm m}$ dan $\Delta t = 0.05T$, serta $\omega = 2 \pi / T$.

:-: | :-:
![]({{ site.baseurl }}/assets/img/0/05/0051-f.png) <br> <center>(a)</center> | ![]({{ site.baseurl }}/assets/img/0/05/0051-g.png) <br> <center>(b)</center>
![]({{ site.baseurl }}/assets/img/0/05/0051-h.png) <br> <center>(c)</center> | ![]({{ site.baseurl }}/assets/img/0/05/0051-i.png) <br> <center>(d)</center>

Gambar <a name="fig3">3</a>. (a) Lintasan berbentuk pola Lissajous, (b) $\Delta \vec{r} _{12}$, (c) $\Delta \vec{r} _{15}$, dan (b) $\Delta \vec{r} _{1,17}$, 

Pola Lissajous [[3](#r03)] pada Gambar [3](#fig3) dibentuk dengan 20 titik yang kemudian dihaluskan kurvanya. Perpindahan dan kecepatan rata-ratanya adalah sebagai berikut ini
```
i  f    Δx         Δy        Δt         vavgx     vavgy
1  2   -2.447E-1   2.939E+0  1.250E-2  -1.958E+1   2.351E+2
1  5   -3.455E+0   2.939E+0  5.000E-2  -6.910E+1   5.878E+1
1  17  -3.455E+0  -2.939E+0  2.000E-1  -1.727E+1  -1.469E+1
```
dengan sebagai contoh

$$
\vec{v}_{\rm avg} = -6.910 \times 10^1 \ \hat{x} + 5.878 \times 10^1 \ \hat{y}
$$

adalah untuk antara waktu $t_1$ dan $t_5$. Untuk rentang waktu yang lain dapat dengan mudah dicari dari Persamaan \eqref{eqn-5a} dan \eqref{eqn-5b} serta nilai-nilai parameter yang diberikan.


## 1d motion
Gerak 1d berlaku sama dengan gerak 2d yang tepat menggunakan Persamaan \eqref{eqn-1} atau \eqref{eqn-1a}. Hal yang perlu diperhatikan adalah $x$ di sini (ataupun $y$ atau $z$) adalah vektor sehingga dalam menghitung perpindahan, sebelum dibagi waktu untuk mendapatkan kecepatan rata-rata, dapat bernilai positif maupun negatif.

Sebagai contoh sebuah balok bergerak di atas bidang mendatar licin dari satu titik ke titik lainnya yang terletak di sepanjang sumbu $x$. Saat bergerak antar titik  kecepatan benda bernilai konstan. Terdapat empat titik. Waktu dan posisi benda pada keempat titik tersebut diberikan sebagai berikut.

Tabel <a name="tab5">5</a>. Waktu $t$ dan posisi balok $x$ yang bergerak sepanjang sumbu $x$, dengan $t$ dalam $\rm s$ dan $x$ dalam $\rm m$.

$n$ | 1 | 2 | 3 | 4
:-: | :-: | :-: | :-:
$t_n$ | 0 | 4 | 14 | 16
$x_n$ | 2 | 6 | -4 | 0

Posisi balok selain dinyatakan dengan Tabel [5](#tab5) dapat pula dinyatakan dengan persamaan

\begin{equation}\label{eqn-6}
x = \left\\{
\begin{array}{rc}
t + 2, & 0 \le t < 4, \newline
-t + 10, & 4 \le t < 14, \newline
2t - 32, & 14 \le t < 16,
\end{array}
\right.
\end{equation}

yang telah menggunakan informasi bahwa antar dua titik balok bergerak dengan kecepatan konstan.

![]({{ site.baseurl }}/assets/img/0/05/0051-j.png) \
Gambar <a name="fig4">4</a>. Fungsi posisi suatu balok yang bergerak di sepanjang sumbu $x$.

Dengan menggunakan Persamaan \eqref{eqn-6} dapat digambarkan kurva dari $x$ sebagaimana disajikan dalam Gambar [4](#fig4) sebelumnya.

Sedangkan untuk fungsi kecepatannya, dengan informasi kecepatan antar titik adalah konstan, dapat diperoleh

\begin{equation}\label{eqn-7}
v = \left\\{
\begin{array}{rc}
1, & 0 \le t < 4, \newline
-1, & 4 \le t < 14, \newline
2, & 14 \le t < 16,
\end{array}
\right.
\end{equation}

dengan grafiknya diberikan pada Gambar [5](#fig5) berikut ini.

![]({{ site.baseurl }}/assets/img/0/05/0051-k.png) \
Gambar <a name="fig5">5</a>. Fungsi kecepatan suatu balok yang bergerak di sepanjang sumbu $x$.

Kecepatannya dapat pula dinyatakan dengan tabel berikut.

Tabel <a name="tab6">6</a> Kecepatan balok bergerak sepanjang sumbu $x$. 

$t$ | $v$
:-: | :-:
$0 \le t < 4$ | $1$
$4 \le t < 14$ | $-1$
$14 \le t < 16$ | $2$

Persamaan \eqref{eqn-7}, Gambar [5](#fig5), Tabel [6](#tab6) menggambarkan data yang sama, yaitu fugnsi kecepatan balok, akan tetapi dengan cara yang berbeda. Ketiganya memiliki kelebihan dan kekurangan masing-masing. Untuk Persamaan \eqref{eqn-6}, Gambar [4](#fig4), Tabel [5](#tab5) ketiganya tidak persis menggambarkan hal yang sama, yaitu fungsi posisi balok, karena pada tabel hanya posisi titik-titik tertentu yang diberikan sedangkapan pada grafik dan persamaan, semua posisi diberikan. Selain itu terdapat pula informasi tambahan bahwa antar dua titik benda bergerak dengan kecepatan tetap.

### vavg for 2 < t < 12
Dengan menggunakan Gambar [4](#fig4) dan Gambar [5](#fig5) dapat dicari perpindahan antara $2 < t < 12$ dan kemudian dengan $\Delta t = 12 - 2 = 10$ dapat dicari kecepatan rata-ratanya.

![]({{ site.baseurl }}/assets/img/0/05/0051-l1.png) | ![]({{ site.baseurl }}/assets/img/0/05/0051-l2.png)

Gambar <a name="fig6">6</a>. Perpindahan $\Delta x_{2,12} = -6$ dapat diperoleh dari grafik $x-t$ (kiri) ataupun $v-t$ (kanan).

Gambar [6](#fig6) memberikan ilustrasi bagaimana memperoleh perpindahan $\Delta x_{2,12}$ yang bernilai $-6$, di mana pada grafik $x-t$ diperoleh dengan menarik garis vertikal dari posisi awal ke posisi akhir dan pada grafik $v-t$ menghitung luas di bawah kurva yang dalam hal ini adalah $(+2) + (-8) = -6$. Kedua cara memberikan hasil yang sama. Selanjutnya dikarenakan $\Delta t = 10$ maka dapat diperolah bahwa $\bar{x}_{2,12} = -6 / 10 = -0.6$.

### vavg for 4 < t < 16
Kembali menggunakan Gambar [4](#fig4) dan Gambar [5](#fig5) dapat dicari perpindahan antara $4 < t < 16$ sebagaimana diilustrasikan pada Gambar [7](#fig7).

![]({{ site.baseurl }}/assets/img/0/05/0051-m1.png) | ![]({{ site.baseurl }}/assets/img/0/05/0051-m2.png)

Gambar <a name="fig7">7</a>. Perpindahan $\Delta x_{4,16} = -6$ dapat diperoleh dari grafik $x-t$ (kiri) ataupun $v-t$ (kanan).

Dari Gambar [6](#fig6) bahwa untuk grafik $v-t$ jumlah luas di bawah kurva adalah $(-10) + (+4) = -6$, sedangkan untuk grafik $x-t$ sudah cukup jelas bagaimana perpindahan $\Delta x_{4,16}$ dapat diperoleh. Selanjutnya dengan $\Delta t = 16 - 4 = 12$ dapat diperoleh kecepatan rata-ratanya adalah $\bar{x}_{4,16} = -6 / 12 = -0.5$.


## exer
1. Tentukanlah kecepatan rata-rata antara $t_4$ dan $t_5$ pada Gambar [1](#fig1).
2. Dengan melihat bentuk fungsi posisi $\vec{r}(t)$ pada Gambar [3](#fig3), carilah vektor perpindahan yang akan sama dengan $\Delta\vec{r}_{15}$.
3. Gunakan Gambar [4](#fig4) dan Gambar [5](#fig5) untuk  menghitung $\Delta x_{28}$.
3. Hitunglah $\Delta x_{10,16}$ dari Gambar [4](#fig4) dan Gambar [5](#fig5).


## note
1. <a name="r01"></a>Carl. R. Nave, "Average Velocity, General", HyperPhysics, Georgia State University, USA, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/vel2.html#c3> [20211015].
2. <a name="r02"></a>Edward Furey, "Average Velocity Calculator", CalculatorSoup, Online Calculators, 2021, url <https://www.calculatorsoup.com/calculators/physics/velocity_avg.php> [20211015].
3. <a name="r03"></a>Carl. R. Nave, "Average Velocity, Straight Line", HyperPhysics, Georgia State University, USA, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/vel2.html#c2> [20211015].
4. <a name="r04"></a>Wikipedia contributors, "Lissajous curve", Wikipedia, The Free Encyclopedia, 10 June 2021, 12:10 UTC, <https://en.wikipedia.org/w/index.php?oldid=1027858127 [20211017].


## &nbsp;
[position](0030.html) &bull; [velocity](0050.html) &bull; [displacement 2d](0032.html) &bull; [displacement 1d](0033.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\bar{\vec{v}} _{45} = -\frac45 \hat{x} + \frac35 \hat{y}$; &nbsp; 2) $\Delta\vec{r}_{7,11}$; &nbsp; 3) $0$; &nbsp; 4) $0$; &nbsp;
</ans>
