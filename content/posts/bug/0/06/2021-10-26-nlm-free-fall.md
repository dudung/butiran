---
layout: butir
authors: [viridi]
title: nlm free fall
permalink: pages/0064
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "equations", "nonuniform", "linear", "motion", "constant", "acceleration", "free fall"]
date: 2021-10-26 21:02:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/06/2021-10-26-nlm-free-fall.md
twitter_username: 6unpnp
nodes: []
---
Gerak jatuh bebas atau GJB dialami oleh benda yang jatuh dengan hanya dipengaruhi oleh gaya gravitasi tanpa mempertimbankan gesekan udara [[1](#r01)]. Eksperimen untuk mengamati GJB harus dilakukan dalam lingkungan vakum agar hambatan udara tidak mempengaruhi hasil, yang untuk benda-benda kecil dan halus permukaannya sampai suatu massa jenis tertentu eksperimen masih dapat dilakukan dengan adanya udara [[2](#r02)]. Sebenarnya suatu GJB dapat lebih umum, di mana benda tidak harus bergerak hanya ke bawah, dengan benda yang bergerak ke atas pun dalam termasuk dalam GJB selama hanya gaya gravitasi yang bekerja padanya [[3](#r03)], sehingga dapat melingkupi gerak benda-benda langit [[4](#r04)]. Saat ini hanya dibahas mengenai gerak dekat dengan permukaan bumi sehingga percepatan gravitasi dapat dianggap konstan.


## gravity of earth
Gravitasi bumi atau percepatan gravitasi bumi dinyatakan dengan variabel $g$ bernilai antara $9.764 \ \rm m/s^2$ sampai $9.825 \ \rm m/s^2$ dengan nilai standarnya adalah $g_0 = 9.807 \ \rm m/s^2$ [[5](#r05)]. Dalam pembelajaran digunakan nilai $10 \ \rm m/s^2$ untuk memudahkan [[6](#r06)].


## formula
Terdapat dua cara menyatakan arah $+$ yaitu ke atas (berlawanan arah dengan $g$) dan ke bawah (searah dengan $g$). Masing-masing digunakan bergantung pada permasalahan yang dipecahkan. Pemilihan arah sebaiknya memudahkan pemecahan permasalahan. Arah vertikal umumnya digunakan $y$ atau $z$. Di sini akan digunakan $y$.

### up +
Dipilih arah $+$ adalah ke atas, sehingga

\begin{equation}\label{eqn-a-up}
a = -g,
\end{equation}

adalah percepatannya, yang membuat kecepatan setiap saatnya $v$ menjadi

\begin{equation}\label{eqn-v-up}
v = v_0 - gt,
\end{equation}

dengan $v_0$ kecepatan awal dan $t$ waktu. Selanjutnya, fungsi ketinggian setiap saatnya $y$ adalah

\begin{equation}\label{eqn-y-up}
y = y_0 + v_0 t - \tfrac12 gt^2,
\end{equation}

dengan $y_0$ adalah ketinggian awal.

### down +
Dapat pula arah $+$ diambil ke bawah sehingga

\begin{equation}\label{eqn-a-down}
a = g,
\end{equation}

adalah percepatannya. Pilihan ini membuat kecepatan setiap saatnya $v$ menjadi

\begin{equation}\label{eqn-v-down}
v = v_0 + gt,
\end{equation}

dengan $v_0$ kecepatan awal dan $t$ waktu. Dengan demikian, fungsi posisi vertikal setiap saatnya $y$ adalah

\begin{equation}\label{eqn-y-down}
y = y_0 + v_0 t + \tfrac12 gt^2,
\end{equation}

dengan $y_0$ adalah posisi vertikal awal.

Perhatikan bahwa antara Persamaan \eqref{eqn-a-up}, \eqref{eqn-v-up}, \eqref{eqn-y-up} dengan Persamaan \eqref{eqn-a-down}, \eqref{eqn-v-down}, \eqref{eqn-y-down} hanya berbeda pada suku yang mengandung percepatan $a$, yang dapat bernilai $-g$ atau $+g$.


## frame of reference
Kerangka acuan untuk suatu GJB dapat dipilih sedemikian rupa bergantung dari cara pandang atau posisi pengamat. Ilustrasi mengenai hal ini diberikan dalam Gambar [1](#fig1) berikut.

![]({{ site.baseurl }}/assets/img/0/06/0064-a.png) \
Gambar <a name="fig1">1</a>. Sebuah benda (kotak berwarna hijau) dijatuhkan tanpa kecepatan awal, atau $v_0 = 0$, dari ketinggian $H$ dan disaksikan oleh dua orang pengamat berbeda, $\rm A$ (berpakain merah) dan $\rm B$ (berpakaian biru), yang masing-masing memiliki kerangka acuan berbeda.

Umumnya koordinat $y = 0$ diambil pada posisi masing-masing pengamat dan nilai koordinat membesar dengan menjauh dari pengamat.

Tabel <a name="tab1">1</a>. Pengamat atau observer ($\rm Obs$) dan variabel serta persamaan kinematikanya.
 
$\rm Obs$ | $\rm A$        | $\rm B$
:-: | :-: | :-:
$a$          | $g$            | $-g$
$v$          | $gt$           | $-gt$ 
$y$          | $\frac12 gt^2$ | $H - \frac12 gt^2$
$y(0)$       | $0$            | $H$
$y(T)$       | $H$            | $0$
$\|\Delta y\|$ | $H$ | $H$
$v(T)$       | $\sqrt{2gH}$   | $-\sqrt{2gH}$
$T$          | $\displaystyle\sqrt{\frac{2H}{g}}$ | $\displaystyle\sqrt{\frac{2H}{g}}$

Terdapat dua besaran yang tidak bergantung pada kerangka acuan yang dipilih, yaitu jarak yang ditempuh benda $\|\Delta y\|$ dan waktunya $T$.

$\rm Obs$ | $\rm A$ | $\rm B$
:-: | :-: | :-:
$a$ | ![]({{ site.baseurl }}/assets/img/0/06/0064-b-a1.png) | ![]({{ site.baseurl }}/assets/img/0/06/0064-b-a2.png)
$v$ | ![]({{ site.baseurl }}/assets/img/0/06/0064-b-v1.png) | ![]({{ site.baseurl }}/assets/img/0/06/0064-b-v2.png)
$y$ | ![]({{ site.baseurl }}/assets/img/0/06/0064-b-y1.png) | ![]({{ site.baseurl }}/assets/img/0/06/0064-b-y2.png)

Gambar <a name="fig2">2</a>. Grafik percepatan $a$, kecepatan $v$, dan ketinggian $y$ benda menurut pengamat $\rm A$ (kiri) dan $\rm B$ (kanan), dengan $g = 10$, $H = 80$ dan $T = 4$.

Persamaan-persamaan dan nilai-nilai besaran pada Tabel [1](#tab1) digunakan untuk membuat Gambar [2](#fig2). Dapat terlihat bahwa walaupun grafiknya tampak berbeda, interpretasi arti fisisnya tetap sama. Perbedaan ini muncul karena masing-masing pengamat menggunakan kerangka acuan yang berbeda.

## exer
1. Misalkan terdapat pengamat $\rm C$ yang memiliki kerangka acuan yang terletak di puncak gedung seperti pengamat $\rm A$ pada Gambar [1](#fig1) akan tetapi memiliki arah $+$ ke atas seperti pengamat $\rm B$. Tentukan $y(0)$ dan $y(T)$.


## note
1. <a name="r01"></a>Tom Henderson, "Introduction to Free Fall", The Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/1DKin/Lesson-5/Introduction> [20211026].
2. <a name="r02"></a>Carl R. Nave, "Uniformly Accelerated Motion The Freely Falling Object", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Class/PhSciLab/freefall.html> [20201026].
3. <a name="r03"></a>Wikipedia contributors, "Free fall", Wikipedia, The Free Encyclopedia, 29 September 2021, 13:54 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1047185824> [20211026].
4. <a name="r04"></a>The Editors of Encyclopaedia Britannica, Emily Rodriguez, "free-fall", Encyclopedia Britannica, 25 Oct 2016, url <https://www.britannica.com/science/free-fall-physics> [20211026].
5. <a name="r05"></a>Wikipedia contributors, "Gravity of Earth", Wikipedia, The Free Encyclopedia, 24 October 2021, 23:13 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1051675703> [20211026].
6. <a name="r06"></a>Steve Baker, "Why do we use g=10m/s2?", Quora, 11 Sep 2018, url <https://www.quora.com/Why-do-we-use-g-10m-s2> [20211026].


## &nbsp;
[position](0030.html) &bull; [velocity](0050.html) &bull; [velocity acceleration](0041.html) &bull; [position velocity](0040.html) &bull; [kinematics equations 1d](0060.html) &bull; [nonuniform linear motion](0063.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $0$ dan $-80$; &nbsp;
</ans>
