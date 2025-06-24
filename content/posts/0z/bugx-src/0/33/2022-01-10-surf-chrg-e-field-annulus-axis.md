---
layout: post
authors: [viridi]
title: surf chrg e field annulus axis
permalink: pages/0332
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "charge distribution", "continue", "surface charge", "electric field", "ring", "axis", "center", "annulus"]
date: 2022-01-10 10:31:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/33/2022-01-10-surf-chrg-e-field-annulus-axis.md
twitter_username: 6unpnp
nodes: []
---
Medan listrik oleh muatan permukaan berbentuk cakram pada posisi di sepanjang sumbu utamanya dapat diperoleh dari medan listrik oleh muatan garis berbentuk cincin yang diintegralkan terhadap jari-jari cincin [[1](#r01)] atau terhadap sudut yang dibentuk oleh sumbu utama cakram dan sisi yang menghubungkan titik amat dengan posisi radial cincin [[2](#r02)]. Di sepanjang sumbu cakram medan listrik merupakan fungsi dari jarak terhadap pusat cakram [[3](#r03)]. Ketimbang langsung membahas cakram, formulasi yang tersedia dapat diperluas menjadi bentuk anulus, suatu cakram dengan lubang berupa lingkaran tepat di tengah-tengahnya [[4](#r04)].


## ring of charge
Medan listrik oleh cincin bermuatan $Q$ dengan jari-jari $R$ pada titik amat $\rm P$ yang berjarak $H$ dari pusat cincin diberikan oleh

\begin{equation}\label{eqn:E-ring-charge-axis-solution}
\vec{E}({\rm P}) = \hat{z} k \frac{Q \ H}{(H^2 + R^2)^{3/2}},
\end{equation}

dengan ilustrasinya diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/33/0332-a.png) \
Gambar <a name='fig1'>1</a>. Medan listrik $\vec{E}$ akibat muatan garis, yang berbentuk cincin dengan jari-jari $R$ dan muatan total $Q$, pada suatu titik amat $\rm P$ yang berjarak $H$ dari pusat cincin.

Persamaan \eqref{eqn:E-ring-charge-axis-solution} diperoleh untuk rapat muatan linier $\lambda$ yang bersifat seragam atau $\lambda \ne \lambda(r\theta)$, dengan $r\theta$ adalah posisi panjang di sepanjang keliling cincin.


## surface charge density
Rapat muatan permukaan secara umum berbentuk

\begin{equation}\label{eqn:surface-charge-density}
\sigma = \frac{dq}{dA},
\end{equation}

yang bila bersifat seragam akan menjadi

\begin{equation}\label{eqn:surface-charge-density-uniform}
\sigma = \frac{Q}{A},
\end{equation}

dengan $Q$ adalah muatan total cakram dan $A$ adalah luas cakram. Untuk suatu cakram elemen digunakan

\begin{equation}\label{eqn:disc-surface-element}
dA = 2\pi r dr
\end{equation}

sebagai elemen luasnya.


## uniformly charged annulus
Suatu muatan permukaan berbentuk anulus dapat dibentuk dari elemen cincin bermuatan yang telah diberikan pada Gambar [1](#fig1).

![]({{ site.baseurl }}/assets/img/0/33/0332-b.png) \
Gambar <a name='fig2'>2</a>. Elemen medan listrik $d\vec{E}$ akibat elemen cincin dengan tebal $dR$ dan muatan $dQ$.

Persamaan \eqref{eqn:E-ring-charge-axis-solution} perlu dituliskan menjadi

\begin{equation}\label{eqn:dE-disc}
d\vec{E} = \hat{z} k \frac{dq \ H}{(H^2 + r^2)^{3/2}},
\end{equation}

karena sekarang menjadi elemen medan listrik $d\vec{E}$ yang disebabkan oleh elemen muatan $dq$ yang terletak pada posisi $\vec{r}$. Substitusi Persamaan \eqref{eqn:surface-charge-density} dan \eqref{eqn:disc-surface-element} ke Persamaan \eqref{eqn:dE-disc} akan memberikan

\begin{equation}\label{eqn:E-annulus-uniformly-charged}
\begin{array}{rcl}
d\vec{E} & = & \displaystyle \hat{z} k \frac{\sigma dA \ H}{(H^2 + r^2)^{3/2}} \newline
& = & \displaystyle \hat{z} k \frac{\sigma 2\pi rdr \ H}{(H^2 + r^2)^{3/2}}, \newline
\vec{E} & = & \int d\vec{E}, \newline
& = & \displaystyle \hat{z} k \sigma 2\pi H \int \frac{ rdr}{(H^2 + r^2)^{3/2}} \newline
& = & \displaystyle - \hat{z} k \sigma 2\pi H \frac{1}{(H^2 + r^2)^{1/2}} + C, \newline
\vec{E}({\rm P}) & = & \displaystyle - \hat{z} k \sigma 2\pi H  \left[ \frac{1}{(H^2 + r^2)^{1/2}} \right] _{r = R_1} ^{R_2} \newline
& = & \displaystyle - \hat{z} k \sigma 2\pi H  \left[ \frac{1}{(H^2 + R_2^2)^{1/2}} \right. \newline
&& \displaystyle \left. - \frac{1}{(H^2 + R_1^2)^{1/2}} \right] \newline
& = & \displaystyle \hat{z} k \sigma 2\pi H  \left[ \frac{1}{(H^2 + R_1^2)^{1/2}} \right. \newline
&& \displaystyle \left. - \frac{1}{(H^2 + R_2^2)^{1/2}} \right],
\end{array}
\end{equation}

di mana baris terakhir ditukar agar nilai medan listrik bertanda positif, dikarenakan $R_2 > R_1$ sebagai batas-batas integral yang ilustrasinya telah diberikan pada Gambar [2](#fig2).


## uniformly charged disc
Untuk suatu cakram berapat muatan permukaan seragam Persaman \eqref{eqn:E-annulus-integral} akan menjadi

\begin{equation}\label{eqn:E-disc-uniformly-charged}
\begin{array}{rcl}
\vec{E}({\rm P}) & = & \displaystyle \hat{z} k \sigma 2\pi H  \left( \frac{1}{H} - \frac{1}{\sqrt{H^2 + R^2}} \right) \newline
& = & \displaystyle \hat{z} k \sigma 2\pi \left( 1 - \frac{H}{\sqrt{H^2 + R^2}} \right) \newline
& = & \displaystyle \hat{z} k \sigma 2\pi \left( 1 - \frac{1}{\sqrt{1 + (R/H)^2}} \right),
\end{array}
\end{equation}

yang diperoleh dengan menerapkan $R_1 = 0$ dan $R_2 = R$. Seperti halnya muatan titik, cincin, dan garis, pada jarak yang jauh dari cakram medan listrik juga akan menjadi nol, yang diperoleh dengan menerapkan $H = \infty$.

### above and below
Baik Persamaan \eqref{eqn:E-annulus-uniformly-charged} maupun \eqref{eqn:E-disc-uniformly-charged} nilai $H$ bergantung dari posisi titik amat terhadap bidang cakram atau bidang $xy$. Agar lebih jelas kedua persamaan tersebut dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:E-annulus-uniformly-charged-z}
\begin{array}{rcl}
\vec{E}_{\rm annu}(z) & = & \displaystyle \hat{z} k \sigma 2\pi z  \left( \frac{1}{\sqrt{z^2 + R_1^2}} \right. \newline
&& \displaystyle \left. - \frac{1}{\sqrt{z^2 + R_2^2}} \right),
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:E-disc-uniformly-charged-z}
\vec{E}_{\rm disc}(z) = \hat{z} k \sigma 2\pi z \left( \frac{1}{|z|} - \frac{1}{\sqrt{z^2 + R^2}} \right),
\end{equation}
 
yang akan bertanda positif saat $z > 0$ dan bertanda negatif saat $z < 0$.

## exer
1. Mengapa pada baris akhir suku dalam kurung pada Persamaan \eqref{eqn:E-annulus-uniformly-charged} ditukar posisinya?
2. Mengapa penyebut suku pertama dalam kurung pada Persamaan \eqref{eqn:E-disc-uniformly-charged-z} diberi tanda mutlak $\| z \|$?


## note
1. <a name='r01'></a>Carl R. Nave, "Electric Field:Disc of Charge", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elelin.html#c3> [20220110].
2. <a name='r02'></a>Jeremy Tatum, "Field on the Axis of a Uniformly Charged Disc", Celestial Mechanics (Tatum), University of Victoria, 21 Jun 2021, url <https://phys.libretexts.org/@go/page/6476> [20220110].
3. <a name='r03'></a>Toppr Admin, "Electric field of a thin charged disc", Toppr, 28 Oct 2019, url <https://www.toppr.com/ask/question/the-surface-charge-density-of-a-thin-charged-disc-of/> [20220110].
4. <a name='r04'></a>Wikipedia contributors, "Annulus (mathematics)", Wikipedia, The Free Encyclopedia, 6 January 2022, 06:30 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1064031626> [20220110].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0332?src=hash&amp;ref_src=twsrc%5Etfw">#bug0332</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1480388466202476548?ref_src=twsrc%5Etfw">January 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field](0282.html) &bull; [charge distribution](0283.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) agar hasil persamaan bernilai positif; &nbsp;
2) $\|z\| = \sqrt{z^2}$, hasil akar bernilai positif; &nbsp;
</ans>


{% comment %}
{% endcomment %}
