---
layout: butir
authors: [viridi]
title: relative velocity
permalink: pages/0054
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "velocity", "relative velocity"]
date: 2021-10-22 09:27:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/05/2021-10-20-relative-velocity.md
twitter_username: 6unpnp
nodes: []
---
Kecepatan relatif merupakan selisih secara vektor antara kecepatan dua benda atau atau kecepepatan suatu benda terhadap benda lain dengan menganggap benda lain berada dalam keadaan diam [[1](#r01)]. Dapat pula dipandang sebagai kecepatan suatu obyek relatif terhadap obyek lain, yang merupakan kecepatan obyek pertama menurut pengamat yang bergerak bersama-sama dengan obyek kedua [[2](#r02)]. Dalam teknis perhitungannya diperlukan kemampuan penjumlahan vektor dan cara berpikir bahwa satu kerangka acuan merupakan perantara adalah satu pendekatan yang amat berguna [[3](#r03)], di mana pendekatan ini memerlukan pemahaman pemanfaatan indeks bawah [[4](#r04)], yang kadang dituliskan pula dengan notasi berbeda [[5](#r05)].



## notation
Benda $\rm A$ bergerak dengan kecepatan $\vec{v} _{\rm A}$ dan benda $\rm B$ bergerak dengan kecepatan $\vec{v} _{\rm B}$, di mana kedua kecepatan benda diukur berdasarkan suatu kerangka acuan yang sama. Kecepatan relatif benda $\rm A$ terhadap benda $\rm B$ dituliskan sebagai

\begin{equation}\label{eqn-velocity-a-relative-to-b}
\vec{v} _{\rm AB} = \vec{v} _{\rm A} - \vec{v} _{\rm B},
\end{equation}

sedangkan kecepatan relatif benda $\rm B$ terhadap benda $\rm A$ adalah sebaliknya

\begin{equation}\label{eqn-velocity-b-relative-to-a}
\vec{v} _{\rm BA} = \vec{v} _{\rm B} - \vec{v} _{\rm A}.
\end{equation}


## frame of reference
Umumnya sebagai kerangka acuan diambil sesuatu yang besar relatif terhadap kedua benda. Bila kedua benda adalah kendaraan, misalnya motor dan mobil, kerangka acuannya dapat diambil jalan, perempatan, batas kota, dan lainnya. Bila satelit cuaca adalah kedua benda, bumi dapat dipilih sebagai kerangka acuan keduanya. Terhadap kerangka acuan inilah besaran-besaran terkait diukur secara relatif, misalnya posisi [[6](#r06)] dan kecepatan seperti dalam pembahasan saat ini.


## qualitative example
Ilustrasi mengenai kerangka acuan dan bahwa setiap benda dalam sistem dapat dipilih sebagai kerangka acuan telah diberikan pada Gambar [1](#fig1).

![]({{ site.baseurl }}/assets/img/0/05/0054-a.png) \
Gambar <a name="fig1">1</a>. (a) Dua buah benda $\rm A$ dan $\rm B$ bergerak masing-masing dengan kecepatan masing-masing $\vec{v} _{\rm A}$ dan $\vec{v} _{\rm B}$ menurut kerangka acuan umum $\rm O$. (b) Kecepatan kedua benda menurut kerangka acuan $\rm A$, di mana benda $\rm A$ diam terhadap kerangka acuan ini. (c) Kecepatan kedua benda menurut kerangka acuan $\rm B$, di mana benda $\rm B$ diam terhadap kerangka acuan ini.

Saat suatu benda dipilih sebagai kerangka acuan, maka kecepatannya relatif terhadap kerangka acuan tersebut adalah nol. Dalam Gambar [1](#fig1) hal ini terlihat pada $\vec{v} _{\rm AA}$ dan $\vec{v} _{\rm BB}$, yang masing-masing berarti sebagai kecepatan benda $\rm A$ relatif terhadap kerangka acuan yang bergerak bersama-sama dengan benda $\rm A$ dan kecepatan benda $\rm B$ relatif terhadap kerangka acuan yang bergerak bersama-sama dengan benda $\rm B$.


## quantitative example
Sistem yang sama dapat diberikan nilai kecepatan sehingga pembahasannya akan menjadi lebih bersifat kuantitatif. Setelah diberikan nilai-nilai kecepatan sistem akan menjadi seperti pada Gambar [2](#fig2).

![]({{ site.baseurl }}/assets/img/0/05/0054-b.png) \
Gambar <a name="fig2">2</a>. (a) Gerak dua benda dengan kecepatan masing-masing menurut kerangka acuan umum, (b) dan (c) kecepatan relatif menurut kerangka acuan masing-masing benda.

Dengan menggunakan Persamaan \eqref{eqn-velocity-a-relative-to-b} atau \eqref{eqn-velocity-b-relative-to-a} perhitungan berikut

$$
\begin{array}{rcl}
\vec{v}_{\rm BA} & = & \vec{v}_{\rm B} - \vec{v}_{\rm A} \newline
& = & \hat{x} - 2 \ \hat{x} \newline
& = & -\hat{x}
\end{array}
$$

dan

$$
\begin{array}{rcl}
\vec{v}_{\rm AB} & = & \vec{v}_{\rm A} - \vec{v}_{\rm B} \newline
& = & 2 \ \hat{x} - \hat{x} \newline
& = & \hat{x}
\end{array}
$$

dapat dilakukan untuk memperoleh nilai-nilai pada Gambar [2](#fig2)(b) dan (c).


## one of the use
Dengan menggunakan konsep kecepatan relatif, kembali menggunakan sistem yang dibahas sebelumnya, dapat dengan mudah dipahami apakah benda $\rm A$ akan bertemu dengan benda $\rm B$ atau tidak. Sedangkan untuk menentukan kapan dan di mana, perlu menggunakan konsep posisi relatif. Pembahasan hal ini akan dilakukan menggunakan kerangka acuan yang berbeda-beda ($\rm O$, $\rm A$, dan $\rm B$).

### ref o
Pertama akan dibahas gerak kedua benda menurut kerangka acuan umum atau $\rm O$.

![]({{ site.baseurl }}/assets/img/0/05/0054-c.png) \
Gambar <a name="fig3">3</a>. Dua benda bergerak dengan posisi awal dan kecepatan awal yang berbeda, di mana $x_{\rm A} < x_{\rm B}$ dan $v_{\rm A} > v_{\rm B}$ sehingga keduanya akan dapat bertemu pada $t = 5$.

Posisi awal kedua benda adalah $x_{0\rm A} = 0$ dan $x_{0\rm B} = 5$ dan kecepatannya adalah $v_{\rm A} = 2$ dan $v_{0\rm B} = 1$. Vektor satuan tidak lagi dituliskan untuk penyederhanaan. Posisi setiap kedua benda adalah

$$
\begin{array}{rcl}
x_{\rm A} & = & x_{0\rm A} + \vec{v}_{\rm A} t\newline
& = & 0 + 2t \newline
& = & 2t
\end{array}
$$

dan

$$
\begin{array}{rcl}
x_{\rm B} & = & x_{0\rm B} + \vec{v}_{\rm B} t\newline
& = & 5 + t
\end{array}
$$

yang dapat dilukiskan dalam satu grafik seperti pada Gambar [4](#fig4) berikut ini.

![]({{ site.baseurl }}/assets/img/0/05/0054-d.png) \
Gambar <a name="fig4">4</a>. Posisi setiap saat benda $\rm A$ dan $\rm B$ yang bertemu saat $t = 5$.

Dengan menggunakan kerangka acuan $\rm O$ kapan dan di mana kedua benda bertemu dapat diperoleh dengan terlebih dahulu mencari fungsi posisi setiap saat kedua benda $x_{\rm A}$ dan $x_{\rm B}$. Posisi kedua benda pada Gambar [3](#fig3), walaupun hanya sebagai ilustrasi, telah disesuaik dengan grafik pada Gambar [4](#fig4).

### ref a
Gerak kedua benda menurut kerangka acuan $\rm A$ adalah seperti pada Gambar [5](#fig5) berikut.

![]({{ site.baseurl }}/assets/img/0/05/0054-e.png) \
Gambar <a name="fig5">5</a>. Menurut kerangka acuan $\rm A$ benda $\rm B$ bergerak ke kiri dengan $v_{\rm BA} = -1$, yang akan bertemua dengan benda $\rm A$ pada $t = 5$.

Dengan menggunakan fungsi posisi kedua benda sebelumnya $x_{\rm A}$ dan  $x_{\rm B}$ dapat diperoleh  $x_{\rm BA}$ dalam bentuk

$$
\begin{array}{rcl}
x_{\rm BA} & = & x_{\rm B} - x_{\rm A}\newline
& = & (x_{0\rm B} + \vec{v}_{\rm B} t) - (x_{0\rm A} + \vec{v}_{\rm A} t) \newline
& = & (x_{0\rm B} - x_{0\rm A}) + (\vec{v}_{\rm B} - \vec{v}_{\rm A}) t \newline
& = & (5 - 0) + \vec{v}_{\rm BA} t \newline
& = & 5 + \vec{v}_{\rm BA} t \newline
& = & 5 + (-1) t \newline
& = & 5 - t
\end{array}
$$

yang dapat digambarkan sebagai berikut grafiknya.

![]({{ site.baseurl }}/assets/img/0/05/0054-f.png) \
Gambar <a name="fig6">6</a>. Posisi setiap saat benda $\rm B$ relatif terhadap benda $\rm A$, dan akan bertemu benda $\rm A$ pada $t = 5$ saat posisi relatifnya bernilai nol.

## ref b
Berikutnya adalah menggunakan kerangka acuan yang bergerak bersama-sama dengan benda $\rm B$.

![]({{ site.baseurl }}/assets/img/0/05/0054-g.png) \
Gambar <a name="fig7">7</a>. Menurut kerangka acuan $\rm B$ benda $\rm A$ bergerak ke kanan dengan $v_{\rm AB} = 1$, yang akan bertemua dengan benda $\rm B$ pada $t = 5$.

Serupa dengan bagian sebelumnya, menggunakan fungsi posisi kedua benda yang telah diperoleh $x_{\rm A}$ dan  $x_{\rm B}$ dapat diperoleh  $x_{\rm AB}$ dalam bentuk

$$
\begin{array}{rcl}
x_{\rm AB} & = & x_{\rm A} - x_{\rm B}\newline
& = & (x_{0\rm A} + \vec{v}_{\rm A} t) - (x_{0\rm B} + \vec{v}_{\rm B} t) \newline
& = & (x_{0\rm A} - x_{0\rm B}) + (\vec{v}_{\rm A} - \vec{v}_{\rm B}) t \newline
& = & (0 - 5) + \vec{v}_{\rm AB} t \newline
& = & -5 + \vec{v}_{\rm AB} t \newline
& = & -5 + (1) t \newline
& = & -5 + t
\end{array}
$$

dengan grafiknya adalah seperti berikut ini.

![]({{ site.baseurl }}/assets/img/0/05/0054-h.png) \
Gambar <a name="fig7">7</a>. Posisi setiap saat benda $\rm A$ relatif terhadap benda $\rm B$, dan akan bertemu benda $\rm B$ pada $t = 5$ saat posisi relatifnya bernilai nol.

Dengan demikian telah dibahas gerak kedua benda menurut kerangka acuan $\rm O$, $\rm A$, dan $\rm B$. Dengan menggunakan dua kerangka acuan pertama kecepatan relatif dapat digunakan untuk memeriksa apakah kedua benda akan bertemu, yaitu saat arah kecepatan benda berbeda dengan tanda posisi awal benda. Bila benda semua di kiri dan kecepatannya ke kanan atau sebaliknya, maka titik nol akan dicapai, akan tetapi bila tidak maka kedua benda tidak akan bertemu.

Konsep kecepatan relatif ini, dalam salah satu pemanfaatan yang telah dibahas, tidak dapat berdiri sendiri melainkan perlu juga menggunakan konsep posisi relatif.


## uniformly moving environment
Dengan membatasi pada lingkungan yang gergerak dengan kecepatan tetap, dapat diperoleh bahwa eksperimen mekanika yang dilakukan pada suatu laboratorium yang bergerak dengan kecepatan tetap akan memberikan hasil yang sama sebagaimana bila laboratorium tersebut berada dalam keadaan diam [[7](#r07)]. Hal ini memberikan informasi bahwa gerak relatif antar kerangka acuan tidak mengubah hasil eksperimen sejauh gerak antar kerangka acuan merupakan gerak dengan kecepatan konstan. Dua buah contohnya diberikan dalam Tabel [1](#tab1) berikut.

Tabel <a name="tab1">1</a>. Contoh gerak dalam kerangka acuan yang bergerak dengan kecepatan konstan.

Kasus | Pengukuran | Keterangan
:- | :- :-
Perahu menyeberang sungai | Waktu menyeberang | Tak terpengaruh arus sungai
Melempar benda vertikal ke atas saat berkendaraan | Waktu benda naik dan turun | Tak terpengaruh kecepatan kendaraan

Dalam suatu lingkungan (wadah, lantai, air, udara) yang bergerak di sekitar suatu benda, kecepatan benda umumnya dinyatakan terhadap lingkungan yang bergerak tersebut dan bukan terhadap kerangka acuan umum. Hal ini yang dapat menjelaskan mengapa gerak perahu yang menyeberangi sungai secara tegak lurus arah arus terlihat seperti membentuk sudut terhadap pinggir sungai, pesawat yang terbang tidak sejajar arah angin teramati membelok, dan bola yang dilempar vertikal ke atas dalam suatu kendaraan yang bergerak terlihat sebagai gerak parabola oleh pengamat di pinggir jalan.

Pada fenomena-fenomena di atas digunakan cara berpikir bahwa satu kerangka acuan merupakan perantara sehingga dapat digunakan penjumlahan vektor [[3](#r03)]

\begin{equation}\label{eqn-vector-addition-relative-velocity}
\vec{v} _{\rm BO} = \vec{v} _{\rm BR} + \vec{v} _{\rm RO}
\end{equation}

dengan $\rm O$ adalah kerangka acuan umum (pinggir sungai, jalan, laboratorium yang diam, bumi) dan $\rm B$ adalah perahu (boat) dan $\rm R$ adalah sungai (river). Perhatikan bahwa terhadap $\rm O$ umumnya tidak dituliskan, $\vec{v} _{\rm BO} \equiv \vec{v} _{\rm B}$ dan $\vec{v} _{\rm RO} \equiv \vec{v} _{\rm R}$. Dan bila hal ini dilakukan pada Persamaan \eqref{eqn-vector-addition-relative-velocity} akan kembali diperoleh Persamaan \eqref{eqn-velocity-a-relative-to-b} atau \eqref{eqn-velocity-b-relative-to-a}.

![]({{ site.baseurl }}/assets/img/0/05/0054-i.png) \
Gambar <a name="fig8">8</a>. Gerak perahu (boat) $\rm B$ menyeberangi sungai (river) $\rm R$.

Pada sungai dengan arus mengalir ke kanan berkecepatan $3 \ \rm m/s$ [[8](#r08)] terdapat perahu yang begerak tegak lurus arah aliran sungai untuk menyeberang dari sisi bawah ke sisi atas dengan kecepatan $4 \ \rm m/s$. Kecepatan perahu $\rm B$ menurut pengamat yang diam di pinggir sungai atau kerangka acuan $\rm O$ dapat diperoleh dengan menggunakan Persamaan \eqref{eqn-vector-addition-relative-velocity}

$$
\vec{v} _{\rm BO} = \vec{v} _{\rm BR} + \vec{v} _{\rm RO} = 4\hat{y} + 3\hat{x},
$$

yang memberikan hasil seperti pada Gambar [8](#fig8). Salah satu hal yang umum ditanya pada permasalahan ini adalah posisi di mana perahu akan mencapai sisi atas sungai.


## exer
1. Dari posisi kedua benda relatif terhadap lainnya dapat diperoleh $x_{\rm AB}$ dan $x_{\rm BA}$. Apakah yang diperoleh bila kedua posisi relatif ini dijumlahkan? Cocokkah dengan fungsi posisi yang telah dihitung?
2. Bila lebar sungai pada Gambar [8](#fig8) adalah $100 \ \rm m$ berapakah jarak horisontal yang ditempuh perahu sehingga dapat menentukan posisi di mana perahu akan berlabuh pada sisi atas sungai.


## note
1. <a name="r01"></a>"relative velocity", url <https://www.merriam-webster.com/dictionary/relative%20velocity> [20211029].
2. <a name="r02"></a>Lisa Jardine-Wright, Mark Warner, "Relative Velocity", Isaac Physics, Department for Education, University of Cambridge, url <https://isaacphysics.org/concepts/cp_relative_velocity?stage=all> [20211020].
3. <a name="r03"></a>Carl R. Nave, "Relative Velocity", HyperPhysics, 2017, url http://hyperphysics.phy-astr.gsu.edu/hbase/relmot.html#c2 [20200901].
4. <a name="r04"></a>William Moebs, Samuel J. Ling, Jeff Sanny, "Relative Motion in One and Two Dimensions", OpenStax, University Physics Volume 1, Houston, Texas, 19 Sep 2016, url <https://openstax.org/books/university-physics-volume-1/pages/4-5-relative-motion-in-one-and-two-dimensions> [20211020].
5. <a name="r05"></a>Wikipedia contributors, "Relative velocity", Wikipedia, The Free Encyclopedia, 9 August 2021, 20:59 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1037985502> [20211020].
6. <a name="r06"></a>The Editors of Encyclopaedia Britannica, William L. Hosch (Assoc. Ed.), Gaurav Shukla, "Reference frame", Encyclopædia Britannica, 8 Apr. 2016, https://www.britannica.com/science/reference-frame [20211020].
7. <a name="r07"></a>Marcel Wellner, "Elements of Physics", Springer Science & Business Media, Dec 2012, p. 38, url <https://books.google.co.id/books?vid=ISBN9781461538608&printsec=frontcover> [20211021].
7. <a name="r07"></a>David Hamburg, "River Velocity Explained: How Fast Do Rivers Flow?", Globo Surf, 18 Dec 2020, url <https://www.globosurfer.com/river-velocity/> [20211021].

## &nbsp;
[position](0030.html)  &bull; [velocity](0050.html) &bull; [vector 2d intro](0013.html) &bull; [relative position](0031.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) nol, cocok; &nbsp; 2) $75 \ \rm m$; &nbsp;
</ans>
