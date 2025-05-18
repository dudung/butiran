---
layout: post
authors: [viridi]
title: biot-savart law straight wire
permalink: pages/0511
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["biot-savart law", "electric current", "magnetic field", "straight wire"]
date: 2022-02-27 19:13:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/51/2022-02-26-biot-savart-law-straight-wire.md
twitter_username: 6unpnp
nodes: []
youtube: JLHJqfZPwbU
---
Medan magnetik oleh kawat lurus berarus dapat diperoleh dengan menggunakan hukum Biot-Savart [[1](#r01)] dan bila kawatnya amat panjang dapat menggunakan hukum Ampere [[2](#r02)]. Perihal medan magnetik oleh kawat lurus berarus dengan panjang berhingga masih menjadi pembahasan yang menarik, seperti bila ingin menerapkan hukum Ampere dengan perumusan yang lebih umum [[3](#r03)] dan pemanfaatannya untuk menghitung berbagai bentuk simpul arus [[4](#r04)].


## the law
Elemen arus listrik yang mengalir pada sebuah kawat $Id\vec{l}$ akan memberikan elemen medan magnetik $d\vec{B}$ pada posisi $\vec{r}$ dari kawat yang diberikan oleh hukum Biot-Savart

\begin{equation}\label{eqn:biot-savart-law}
d\vec{B} = \frac{\mu_0}{4\pi} \frac{Id\vec{l} \times \vec{r}}{r^3},
\end{equation}

seperti digambarkan berikut ini.

![]({{ site.baseurl}}/assets/img/0/51/0511-a.png) \
Gambar <a name='fig1'>1</a>. Elemen medan magnetik $d\vec{B}$ yang disebabkan oleh elemen arus $Id\vec{l}$ terlihat dengan perspektif dan tampak atas, depan, bawah.

Pusat koordinat dipilih berada pada kawat dan sumbu $z$ sejajar pada kawat sehingga dapat digunakan sistem koordinat silinder $(r, \theta, z)$ sebagaimana disajikan pada Gambar [1](#fig1).


## application
Di sini akan diterapkan hukum Biot-Savart untuk kawat lurus dengan panjang berhingga, salah satu ujung tak-hingga, dan kedua ujung tak-hingga.

### straight wire
Agar hukum Biot-Savart dapat diterapkan dengan mudah Gambar [1](#fig1) perlu diperjelas dengan menambahkan batas-batas integral untuk $dl$ seperti pada gambar berikut ini.

![]({{ site.baseurl}}/assets/img/0/51/0511-b.png) \
Gambar <a name='fig2'>2</a>. Elemen medan magnetik $d\vec{B}$ pada posisi $\vec{r}$ dari kawat yang disebabkan oleh elemen arus $Id\vec{l}$ tampak depan dan batas-batas integralnya.

Dari Gambar [2](#fig2) dapat diperoleh

\begin{equation}\label{eqn:tan-theta-1}
\tan \theta_1 = \frac{h}{-z_1}
\end{equation}

dan

\begin{equation}\label{eqn:tan-theta-2}
\tan \theta_2 = \frac{h}{-z_2}
\end{equation}

dengan batas bawah integral adalah $z = -z_1$ dan batas atas integral adalah $z = -z_2$. Dapat pula dituliskan

\begin{equation}\label{eqn:cot-theta}
\cot \theta = \frac{z}{h}
\end{equation}

sehingga

\begin{equation}\label{eqn:cot-theta-z}
z = h \cot \theta
\end{equation}

dan diferensialnya

\begin{equation}\label{eqn:ctg-theta-dz}
dz = -h \csc^2 \theta d\theta.
\end{equation}

Vektor posisi relatif titik pengamatan terhadap elemen arus diperoleh dari Gambar [2](#fig2)

\begin{equation}\label{eqn:r-rel}
\vec{r} = h \vec{r} + z \hat{z},
\end{equation}

sehingga besarnya adalah

\begin{equation}\label{eqn:r-rel-mag}
r = \sqrt{h^2 + z^2}.
\end{equation}

Substitusi Persamaan \eqref{eqn:cot-theta-z} ke Persamaan \eqref{eqn:r-rel-mag} akan memberikan

\begin{equation}\label{eqn:r-rel-mag-csc}
r = h\csc \theta.
\end{equation}

Dan

\begin{equation}\label{eqn:idl}
Id\vec{l} = Idz\hat{z}
\end{equation}

adalah elemen arus pada Gambar [2](#fig2). Substitusi  Persamaan \eqref{eqn:r-rel}, \eqref{eqn:r-rel-mag-csc}, dan \eqref{eqn:idl} ke Persamaan \eqref{eqn:biot-savart-law} akan menghasilkan

\begin{equation}\label{eqn:biot-savart-law-straight-wire}
\begin{array}{rcl}
d\vec{B} & = & \displaystyle \frac{\mu_0}{4\pi} \frac{Idz\hat{z} \times (h \vec{r} + z \hat{z})}{(h\csc \theta)^3} \newline
& = & \displaystyle \hat{\theta} \frac{\mu_0}{4\pi} \frac{h I}{h^3\csc^3 \theta} \ dz \newline
& = & \displaystyle \hat{\theta} \frac{\mu_0}{4\pi} \frac{h I}{h^3\csc^3 \theta} \ (-h \csc^2 \theta d\theta) \newline
& = & \displaystyle -\hat{\theta} \frac{\mu_0}{4\pi} \frac{I}{h} \frac{d\theta}{\csc\theta} \newline
& = & \displaystyle -\hat{\theta} \frac{\mu_0}{4\pi} \frac{I}{h} \sin\theta d\theta.
\end{array}
\end{equation}

Integral Persamaan \eqref{eqn:biot-savart-law-straight-wire} akan memberikan

\begin{equation}\label{eqn:biot-savart-law-straight-wire-b}
\begin{array}{rcl}
\vec{B} & = & \int d\vec{B} \newline
& = & \displaystyle -\hat{\theta} \frac{\mu_0}{4\pi} \frac{I}{h} \int \sin\theta d\theta \newline
& = & \displaystyle -\hat{\theta} \frac{\mu_0}{4\pi} \frac{I}{h} (-\cos\theta) \newline
& = & \displaystyle \hat{\theta} \frac{\mu_0}{4\pi} \frac{I}{h} \cos\theta.
\end{array}
\end{equation}

Dari Persamaan \eqref{eqn:cot-theta-z} dapat diperoleh

\begin{equation}\label{eqn:cos-theta-z}
\cos \theta = \frac{z}{\sqrt{z^2 + h^2}}.
\end{equation}

Dengan bantuan Persamaan \eqref{eqn:cos-theta-z} maka Persamaan \eqref{eqn:biot-savart-law-straight-wire-b} dapat menjadi

\begin{equation}\label{eqn:biot-savart-law-straight-wire-b-with-bounds}
\vec{B} = \hat{\theta} \frac{\mu_0}{4\pi} \frac{I}{h} \left( \frac{z_2}{\sqrt{z_2^2 + h^2}} - \frac{z_1}{\sqrt{z_1^2 + h^2}} \right),
\end{equation}

yang perlu memperhatikan nilai batas bawah dan batas atas $z$ pada kawat berarus $I$ penyebab medan magnetik $\vec{B}$. Tanda positif dan negatif perlu dimasukkan. Gambar [2](#fig2) menunjukkan batas bawah integral adalah $z = -z_1$ dan batas atasnya adalah $z = -z_2$.

Dengan menggunakan Persamaan \eqref{eqn:biot-savart-law-straight-wire-b-with-bounds} dapat diperoleh untuk kawat berhingga, semi tak-hingga, dan tak hingga pada kedua ujungnya.


## cases
Terdapat beberapa kasus yang dapat disinggung terkait dengan pemanfaatan Persamaan \eqref{eqn:biot-savart-law-straight-wire-b-with-bounds} seperti diberikan pada tabel di bawah ini.

Tabel <a name='tab1'>1</a>. Beberapa sistem kawat lurus berarus dan medan magnetik yang disebabkannya.

No | Kasus | $B$
:-: | :-:
1 | ![]({{ site.baseurl }}/assets/img/0/51/0511-c1.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ \frac{-l}{\sqrt{l^2 + h^2}} - \frac{-(l+L)}{\sqrt{(l+L)^2 + h^2}} \right]$
2 | ![]({{ site.baseurl }}/assets/img/0/51/0511-c2.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left( \frac{L+l}{\sqrt{(L+l)^2 + h^2}} - \frac{l}{\sqrt{l^2 + h^2}} \right)$
3 | ![]({{ site.baseurl }}/assets/img/0/51/0511-c3.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ \frac{l}{\sqrt{l^2 + h^2}} - \frac{-(L-l)}{\sqrt{(L-l)^2 + h^2}} \right]$
4 | ![]({{ site.baseurl }}/assets/img/0/51/0511-c4.png) |$\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ \frac{L-l}{\sqrt{(L-l)^2 + h^2}} - \frac{(-l)}{\sqrt{l^2 + h^2}} \right]$
5 | ![]({{ site.baseurl }}/assets/img/0/51/0511-d1.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ \frac{-l}{\sqrt{l^2 + h^2}} - (-1) \right]$
6 | ![]({{ site.baseurl }}/assets/img/0/51/0511-d2.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left( 1 - \frac{l}{\sqrt{l^2 + h^2}} \right)$
7 | ![]({{ site.baseurl }}/assets/img/0/51/0511-d3.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ \frac{l}{\sqrt{l^2 + h^2}} - (-1) \right]$
8 | ![]({{ site.baseurl }}/assets/img/0/51/0511-d4.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ 1 - \frac{(-l)}{\sqrt{l^2 + h^2}} \right]$
9 | ![]({{ site.baseurl }}/assets/img/0/51/0511-e.png) | $\displaystyle\frac{\mu_0}{4\pi} \frac{I}{h} \left[ 1 - (-1) \right]$

Salah satu kasus yang amat dikenal adalah untuk kawat lurus panjang dengan medan magnetik diamati pada daerah di tengah-tengah kawat, yang pada Tabel [1](#tab1) tercantum pada baris terakhir (kasus nomor 9) berupa

\begin{equation}\label{eqn:biot-savart-law-straight-wire-long-both-end}
B = \frac{\mu_0 I}{2\pi h}
\end{equation}

dan untuk kawat lurus panjang dengan medan magnetik diamati pada daerah di ujung kawat

\begin{equation}\label{eqn:biot-savart-law-straight-wire-long-one-end}
B = \frac{\mu_0 I}{4\pi h}
\end{equation}

yang tercantum pada Tabel [1](#tab1) di dua baris terakhir (kasus bernomor 7 dan 8) dengan $l = 0$.

![]({{ site.baseurl }}/assets/img/0/51/0511-f.png) \
Gambar <a name='fig3'>3</a>. Medan magnetik yang disebabkan oleh
kawat lurus panjang semi tak-hingga (kiri) dan kawat lurus panjang tak-hingga (kanan).

Dua buah kawat lurus panjang semi tak-hingga digabungkan, medan magnetik yang disebabkan keduanya akan menjadi seperti medan magnetik yang disebabkan oleh sebuah kawat lurus panjang tak-hingga. Ilustrasi mengenai kedua kasus ini diberikan pada Gambar [3](#fig3).


## exer
1. Terdapat sebuah simpul (loop) kawat berarus $I$ berbentuk segiempat dan ingin ingin dicari medan magnetik pada sembarang titik di dalam simpul. Kasus nomor berapa pada Tabel [1](#tab1) yang dapat dimanfaatkan?
2. Menlanjutkan pertanyaan sebelumnya, bagaimana bila untuk sembarang titik di luar simpul? Kasus nomor berapa pada Tabel [1](#tab1) yang dapat dimanfaatkan?
3. Kasus nomor berapa pada Tabel [1](#tab1) yang besar medan magnetiknya hanya merupakan fungsi dari jarak tegak lurus titik amat terhadap kawat atau $h$? 


## note
1. <a name='r01'></a>Sunil Kumar Singh, "Magnetic field due to current in straight wire", Electricity and Magnetism, OpenStax CNS, Rice University, 8 Aug 2009, url <https://cnx.org/contents/UBPo-xuY@13.2:QW8ntuAW@10/Magnetic-field-due-to-current-in-straight-wire> [20220227].
2. <a name='r02'></a>Carl Rod Nave, "Magnetic Field of Current", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/magcur.html#c3> [20220227].
3. <a name='r03'></a>T. Charitat, F. Graner, "About the magnetic field of a finite wire", European Journal of Physics [Eur J Phys], vol 24, no 3, p 267-270, May 2003, url <https://doi.org/10.1088/0143-0807/24/3/306>.
4. <a name='r04'></a>Jorge Enrique García-Farieta, Alejandro Hurtado Márquez, "Beyond the Magnetic Field of a Finite Wire: A Teaching Approach Using the Superposition Principle", The Physics Teacher [], vol 59, no 5, p 348-350, May 2021, url <https://doi.org/10.1119/10.0004885>.

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0511?src=hash&amp;ref_src=twsrc%5Etfw">#bug0511</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1497907628793798659?ref_src=twsrc%5Etfw">February 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) kasus 3 dan 4; &nbsp;
2) kasus 1 dan 2; &nbsp;
3) kasus 9; &nbsp;
</ans>


{% comment %}
{% endcomment %}
