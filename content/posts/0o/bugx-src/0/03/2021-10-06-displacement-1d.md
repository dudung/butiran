---
layout: butir
authors: [viridi]
title: displacement 1d
permalink: pages/0033
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "displacement", "1d"]
date: 2021-10-07 21:22:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/03/2021-10-06-displacement-1d.md
twitter_username: 6unpnp
nodes: []
---
Perpindahan suatu benda didefinisikan sebagai suatu vektor yang mengarah mulai dari suatu posisi awal (inisial) ke suatu posisi akhir (final) [[1](#r01)].


## formula
Untuk kasus 1-d perpindahan dihitung menggunakan

\begin{equation}\label{eqn-01}
\Delta x_{i-f} = x_f - x_i,
\end{equation}

yang dapat bernilai positif ataupun negatif karena perpindahan merupakan besaran vektor, dengan indeks $i$ berarti awal (inisial) dan indeks $f$ berarti akhir (final).


## 1-d motion
Gambar [1](#fig1) berikut memberikan ilustrasi gerak benda dalam 1-d. Abaikan keberadaan sumbu $y$ karena selama benda bergerak, ia terus menempel dengan lantai sehingga hal ini merupakan gerak dalam 1-d.

![]({{ site.baseurl }}/assets/img/0/03/0033-a.png) \
Gambar <a name="fig1">1</a>. Gerak benda dalam 1-d yang melibatkan gerak maju ($v$ ke kanan, menuju $+x$) dan mundur ($v$ ke kiri, menuju $-x$).

Nilai indeks $i$ (inisial) dan $f$ (final) dalam Persamaan \eqref{eqn-01} disesuaikan dengan kasus yang dibahas, misalnya untuk Gambar [1](#fig1) dapat 

Untuk melengkapi informasi Gambar [1](#fig1), berikut adalah data informasi waktunya.

$n$             | 1 | 2 |  3 |  4 |  5 |  6
$t_n \ \rm (s)$ | 0 | 6 | 10 | 22 | 30 | 34
$x_n \ \rm (m)$ | 2 | 8 | 16 |  4 | 12 |  4

Posisi $x$ dalam tabel di atas hanya merupakan informasi berulang karena nilai-nilainya sudah dapat dibaca pada Gambar [1](#fig1). Untuk seluruh variasi yang mungkin dapat dituliskan nilai-nilai perpindahan antara waktu inisial $t = t_i$ dan waktu final $t = t_f$, dengan dengan $t_i < t_f$.

$\Delta x_{\rm i-f}$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$
$x_1$                |   0   |   6   |  14   |   2   |  10   |   2
$x_2$                |   -   |   0   |   8   |  -4   |   4   |   0
$x_3$                |   -   |   -   |   0   | -12   |  -4   | -12
$x_4$                |   -   |   -   |   -   |   0   |   8   |   0
$x_5$                |   -   |   -   |   -   |   -   |   0   |  -8
$x_6$                |   -   |   -   |   -   |   -   |   -   |   0

Bagian sel pada tabel yang berisi - adalah untuk kondisi yang tidak mungkin, yaitu $t_i > t_f$. Sebagai contoh perpindahan antara $t = t_3 dan $t = t_6$ adalah

$$
\Delta x _{3-6} = x_6 - x_3 = 4 - 16 = -12,
$$

yang dapat ditemukan dalam tabel terakhir pada baris 4 dan kolom 7 (atau perpotongan baris $x_3$ dengan kolom $x_6$). Selain itu Gambar [1](#fig1) sebelumnya dapat pula digunakan untuk menghitung perpindahan dengan menempatkan benda pada $t_i$ (tanpa warna, garis putus-putus) dan benda pada $t_f$ (berwarna biru muda, garis utuh) dan menggambarkan vektor dari $x_i$ ke $x_f$ sebagaimana diberikan dalam Gambar [2](#fig2) berikut.

![]({{ site.baseurl }}/assets/img/0/03/0033-b.png) \
Gambar <a name="fig2">2</a>. Perpindahan $\Delta t_{i-f}$ untuk berbagai waktu awal (inisial) $t_i$ dan waktu akhir (final) $t_f$.

Hasil dalam Gambar [2](#fig2) dapat kembali dikonfirmasi dengan nilai-nilai dalam tabel sebelumnya.


## x-t graph
Informasi waktu dan posisi dari tabel kedua atau tabel terakhir dapat disajikan seperti Gambar [3](#fig3) berikut.

![]({{ site.baseurl }}/assets/img/0/03/0033-c.png) \
Gambar <a name="fig3">3</a>. Grafik posisi $x$ sebagai fungsi waktu $t$, dengan satu kotak berarti $4 \ {\rm s} \times 2 \ {\rm m}$.

Yang ditampikal pada Gambar [3](#fig3) merupakan representasi lain dari Gambar [1](#fig1), di mana semua posisi ditangkap dalam satu gambar dengan adanya indeks waktu $t$ sebagai sumbu mendatarnya dan posisi $x$ sebagai sumbu tegaknya. Mirip dengan cara pada Gambar [2](#fig2), informasi pada Gambar [3](#fig3) ini pun dapat digunakan untuk mendapatkan perpindahan $\Delta_{i-f}$ dari waktu awal (inisial) $t = t_i$ sampai waktu akhir (final) $t = t_f$. Persamaan \eqref{eqn-01} kembali digunakan dan vektor digambarkan dari $x_i$ ke $x_f$ sebagaimana dalam Gambar [4](#fig4) berikut.

![]({{ site.baseurl }}/assets/img/0/03/0033-d.png) \
Gambar <a name="fig4">4</a>. Perpindahan $\Delta_{i-f}$ diperoleh dari grafik $x-t$, untuk berbagai waktu awal (inisial) $t_i$ dan waktu akhir (final) $t_f$.

Hasil-hasil dalam Gambar [4](#fig4) dapat dikonfirmasi dengan Gambar [2](#fig2) dan hasil perhitungan dalam tabel kedua.


## v-t graph
Dengan mencari kemiringan garis pada setiap selang $t_n$ dan $t_{n+1}$ dapat diperoleh grafik kecepatan $v$ terhadap waktu $t$ yang diberikan oleh Gambar [5](#fig5).

![]({{ site.baseurl }}/assets/img/0/03/0033-e.png) \
Gambar <a name="fig5">5</a>. Grafik kecepatan $v$ sebagai fungsi waktu $t$, dengan satu kotak berarti $4 \ {\rm s} \times 1 \ {\rm m/s}$.

Dengan menghitung luas di bawah kurva, yang dapat bernilai positif maupun negatif, mulai dari $t = t_i$ sampai $t = t_f$ akan dapat diperoleh nilai perpindahan $\Delta t_{i-f}$.

{% comment %}
3-6, 1-6, 1-5, 3-4
{% endcomment %}

![]({{ site.baseurl }}/assets/img/0/03/0033-f.png) \
Gambar <a name="fig6">6</a>. Perpindahan $\Delta x_{i-f}$ dengan menghitung luas di bahwa kurva mulai dari $t = t_i$ sampai $t = t_f$.

Kembali hasil Gambar [6](#fig6) dapat dikonfirmasi dengan hasil perhitungan pada tabel kedua atau Gambar [2](#fig2) dan Gambar [4](#fig4).


## another v-t graph
Grafik $v-t$ tidaklah harus berbentuk hanya garis mendatar, akan tetapi dapat juga garis dengan kemiringan tertentu seperti pada  Gambar [7](#fig7) berikut, di mana untuk saat ini yang hanya perlu menghitung luas di bawah kurva, cara menentukan perpindahan $\Delta x_{i-f}$ tetaplah sama dan tidak bergantung dari bentuk kurvanya.

![]({{ site.baseurl }}/assets/img/0/03/0033-g.png) \
Gambar <a name="fig7">7</a>. Grafik $v-t$ dengan hanya kecepatan tetap (kiri) dan bila terdapat pula percepatan (kanan).

Total perpindahan dari kedua grafik $v-t$ dalam Gambar [7](#fig7) adalah nol, yaitu dengan menghitung luas di bawah kurva untuk $t = 0 \ \rm s$ sampai $t = 10 \ \rm s$ untuk bagian kiri dan $t = 0 \ \rm s$ sampai $t = 9 \ \rm s$ untuk bagian kanan.


# exer
1. Dengan menggunakan Gambar [6](#fig6) jelaskan mengapa perpindahan $\Delta x_{3-6}$ dan $\Delta x_{3-4}$ memberikan hasil yang sama?


## note
1. <a name="r01"></a>Carl. R. Nave, "Displacement", HyperPhysics, Georgia State University, USA, 2017, 
url <http://hyperphysics.phy-astr.gsu.edu/hbase/posit.html#c2> [20211006].


## &nbsp;
[meter](0037.html) &bull; [length](0036.html) &bull; [position](0030.html) &bull; [relative position](0031.html) &bull; [displacement 2d](0032.html) &bull; [distance 2d](0034.html) &bull; [distance 1d](0035.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Perpindahan $\Delta_{4-5} = -\Delta_{5-6}$ sehingga perpindahan $\Delta x_{3-6} = \Delta x_{3-4}$ karena $\Delta x_{3-6} = \Delta x_{3-4} + \Delta x_{4-5} + \Delta x_{5-6}$; &nbsp;
</ans>
