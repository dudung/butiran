---
layout: post
authors: [viridi]
title: lin chrg e field ring axis
permalink: pages/0330
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "charge distribution", "continue", "line charge", "electric field", "ring", "axis", "center"]
date: 2022-01-09 18:52:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/33/2022-01-09-lin-chrg-e-field-ring-axis.md
twitter_username: 6unpnp
nodes: []
---
Salah satu contoh lain penerapan rapat muatan linier $\lambda$ bersifat seragam adalah pada pada cincin bermuatan $Q$ dengan jari-jari $R$ untuk memperoleh medan listrik $\vec{E}$ di sepanjang sumbu cincin pada jarak $H$ dari pusat. Sebagai sumbu cincin dapat dipilih sumbu $z$ [[1](#r01)] atau sumbu $x$ [[2](#r02)]. Telah terdapat video penurunannya [[3](#r03)] dan juga perhitungan numeriknya menggunakan VPython [[4](#r04)]. Dengan mengananalogikan muatan listrik dengan massa, terdapat titik maksimum nilai medan di sepanjang sumbu cincin [[5](#r05)].


## electric field
Medan listrik $\vec{E}_q$ pada posisi $\vec{r}$ akibat elemen muatan $dq$ yang berada pada posisi $\vec{r}_q$ diberikan oleh

\begin{equation}\label{eqn:efield-charge-distribution}
d\vec{E}_q = k \ \frac{dq}{| \vec{r} - \vec{r}_q  |^3} \ (\vec{r} - \vec{r}_q),
\end{equation}

di mana untuk muatan garis, seperti kawat atau batang bermuatan, digunakan

\begin{equation}\label{eqn:line-charge-distribution}
dq = \lambda \ dl,
\end{equation}

dengan $\lambda$ adalah rapat muatan linier. Untuk saat ini dibatasi rapat muatan linier yang bersifat seragam atau bukan fungsi dari posisi $l$, yang dinyatakan dengan $\lambda \ne \lambda(l)$. Dengan demikian berlaku

\begin{equation}\label{eqn:line-charge-distribution-uniform}
\lambda = \frac{Q}{L}
\end{equation}

bila $L$ adalah panjang muatan garis dan $Q$ adalah muatan totalnya.


## ring of charge
Sebuah cincin berjari-jari $R$ dan bermuatan $+Q$ terletak pada bidang $xy$ seperti diberikan pada Gambar [1](#fig1). Titik amat $\rm P$ terletak pada sumbu cincin yang berhimpit dengan sumbu $y$ dan berjarak $H$ dari pusat cincin.


![]({{ site.baseurl }}/assets/img/0/33/0330-a.png) \
Gambar <a name='fig1'>1</a>. Elemen muatan $dq$ pada muatan cincin dan elemen medan listrik yang disebabkannya.

Dari Gambar [1](#fig1) dapat diperoleh

\begin{equation}\label{eqn:ring-charge-relative-position}
\begin{array}{rcl}
\vec{r} - \vec{r}_q & = & H \ \hat{z} - (R \cos\theta \ \hat{x} + R \sin\theta \ \hat{y}) \newline
| \vec{r} - \vec{r}_q | & = & \sqrt{H^2 + R^2},
\end{array}
\end{equation}

di mana telah digunakan koordinat silinder dengan

\begin{equation}\label{eqn:ring-charge-cylinder-coordinate}
\begin{array}{rcl}
x & = & r \cos \theta, \newline
y & = & r \sin \theta, \newline
r & = & x^2 + y^2.
\end{array}
\end{equation}

Untuk cincin elemen panjangnya adalah

\begin{equation}\label{eqn:ring-charge-length-element}
dl = r \ d\theta.
\end{equation}

Untuk cincin berlaku bahwa posisi radial berharga tetap $r = R$, yang akan diterapkan pada Persamaan \eqref{eqn:ring-charge-cylinder-coordinate} dan \eqref{eqn:ring-charge-length-element}. Selanjutnya adalah menggunakan Persamaan \eqref{eqn:line-charge-distribution}, \eqref{eqn:ring-charge-relative-position}, dan \eqref{eqn:ring-charge-length-element} dalam Persamaan \eqref{eqn:efield-charge-distribution} sehingga dapat diperoleh

\begin{equation}\label{eqn:dE-ring-charge}
\begin{array}{rcl}
d\vec{E} & = & k \displaystyle \frac{\lambda \ R d\theta}{(H^2 + R^2)^{3/2}} \ [ H \ \hat{z} - (R \cos\theta \ \hat{x} + R \sin\theta \ \hat{y}) ] \newline
& = & dE_z \ \hat{z} +  dE_x \ \hat{x} + dE_y \ \hat{y}.
\end{array}
\end{equation}

Untuk cincin penuh batas integral $\int d\theta$ memiliki batas bawah $0$ sampai $2\pi$ sehingga

\begin{equation}\label{eqn:Ex-ring-charge}
\begin{array}{rcl}
E_x & = & \int dE_x, \newline
& = & \displaystyle -k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \int \cos\theta \ d\theta \newline
& = & \displaystyle -k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \sin\theta \newline
E_x ({\rm P}) & = & \displaystyle -k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \left[ \sin\theta \right]_0^{2\pi} \newline
& = & 0,
\end{array}
\end{equation}

\begin{equation}\label{eqn:Ey-ring-charge}
\begin{array}{rcl}
E_y & = & \int dE_y, \newline
& = & \displaystyle -k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \int \sin\theta \ d\theta \newline
& = & \displaystyle k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \cos\theta \newline
E_y ({\rm P}) & = & \displaystyle k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \left[ \cos\theta \right]_0^{2\pi} \newline
& = & 0,
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:Ez-ring-charge}
\begin{array}{rcl}
E_z & = & \int dE_z, \newline
d\vec{E} & = & \displaystyle k \frac{\lambda \ RH}{(H^2 + R^2)^{3/2}} \int d\theta \newline
& = & \displaystyle k \frac{\lambda \ RH}{(H^2 + R^2)^{3/2}} \ \theta \newline
E_z({\rm P}) & = & \displaystyle k \frac{\lambda \ RH}{(H^2 + R^2)^{3/2}} \left[ \theta \right]_0^{2\pi} \newline
& = & \displaystyle k \frac{\lambda \ RH}{(H^2 + R^2)^{3/2}} (2\pi - 0) \newline
& = & \displaystyle k \frac{\lambda \ 2\pi R \ H}{(H^2 + R^2)^{3/2}} \newline
& = & \displaystyle k \frac{Q \ H}{(H^2 + R^2)^{3/2}}
\end{array}
\end{equation}

Untuk muatan cincin utuh $L = 2\pi L$ sehingga untuk rapat muatan linier seragam diperoleh $Q = 2\pi L \lambda$ seperti diberikan oleh Persamaan \eqref{eqn:line-charge-distribution-uniform}, sebagaimana diterapkan pada baris terakhir Persamaan \eqref{eqn:Ey-ring-charge}. Dengan demikian diperoleh

\begin{equation}\label{eqn:E-ring-charge-axis-solution}
\vec{E}({\rm P}) = \hat{z} k \frac{Q \ H}{(H^2 + R^2)^{3/2}},
\end{equation}

yang merupakan medan listrik sepanjang sumbu $z$ atau sumbu cincin untuk sistem yang diberikan pada Gambar [1](#fig1).


## at long distance
Bila medan listrik di sepanjang sumbu cincin diamati untuk jarak yang jauh atau tepatnya $H > > R$ maka solusi yang diberikan oleh Persamaan \eqref{eqn:E-ring-charge-axis-solution} akan menjadi

\begin{equation}\label{eqn:E-ring-charge-axis-solution-long-distance}
\begin{array}{rcl}
\vec{E}({\rm P}) & = & \displaystyle \hat{z} k \frac{Q \ H}{(H^2 + R^2)^{3/2}} \newline
& = & \displaystyle \hat{z} k \frac{Q}{H^{-1}(H^2 + R^2)^{3/2}} \newline
& = & \displaystyle \hat{z} k \frac{Q}{H^{-1}H^3[1 + (R/H)^2]^{3/2}} \newline
& \approx & \displaystyle \hat{z} k \frac{Q}{H^2},
\end{array}
\end{equation}

dengan bentuknya seperti medan listrik yang disebabkan oleh muatan titik. Pendekatan berikut

\begin{equation}\label{eqn:E-ring-charge-axis-solution-long-distance-approximation}
1 + (R/H)^2 \approx 1
\end{equation}

telah digunakan untuk mendapatkan baris terakhir dari Persamaan \eqref{eqn:E-ring-charge-axis-solution-long-distance}.


## circular arc
Medan listrik untuk cincin tidak penuh, atau lebih tepatnya berupa busur lingkaran, tidak dapat diperoleh dari Persamaan \eqref{eqn:E-ring-charge-axis-solution} akan tetapi harus menggunakan Persamaan \eqref{eqn:Ex-ring-charge}, \eqref{eqn:Ey-ring-charge}, dan \eqref{eqn:Ez-ring-charge}. Hal ini tidak akan dibahas di sini.


## exer
1. Suatu muatan cincin bermuatan $Q$ dengan jejari $B$ berada pada bidang $yz$. Pada jarak $W$ dari pusat cincin dan sepanjang sumbu cincin terdapat titik $\rm P$ tempat medan listriknya $\vec{E}$ ingin diamati. Bagaimanakah bentuk medan listriknya $\vec{E}({\rm P})$?


## note
1. <a name='r01'></a>Carl R. Nave, "Electric Field: Ring of Charge", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elelin.html#c2> [20220109].
2. <a name='r02'></a>Gerhard Müller, "Electric Field of Charged Ring", PHY 204: Elementary Physics II, Department of Physics, University of Rhode Island, 13 Nov 2021, url <http://www.phys.uri.edu/gerhard/PHY204/tsl34.pdf> [20220109].
3. <a name='r03'></a>Yildirim Aktas, "Example 2: Electric field of a charged ring along its axis", PHYS 2102 Physics for Science & Engineering II, Department of Physics & Optical Science, College of Liberal Arts & Sciences, The University of North Carolina at Charlotte, url <https://pages.charlotte.edu/phys2102/online-lectures/chapter-02-electric-field/2-4-electric-field-of-charge-distributions/example-2-electric-field-of-a-charged-ring-along-its-axis/> [20220109].
4. <a name='r04'></a>Rhett Allain, "Electric Field due to a Uniformly Charged Ring", Medium, 30 Apr 2020, url <https://medium.com/swlh/electric-field-due-to-a-uniformly-charged-ring-6b0adcbf7b8d> [20220109].
5. <a name='r05'></a>Jeremy Tatum, "Field on the Axis of a Ring", Celestial Mechanics (Tatum), University of Victoria, 31 Dec 2020, url <https://phys.libretexts.org/@go/page/8132> [20220109].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0330?src=hash&amp;ref_src=twsrc%5Etfw">#bug0330</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1480379097427501056?ref_src=twsrc%5Etfw">January 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field](0282.html) &bull; [charge distribution](0283.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\vec{E}({\rm P}) = \hat{x}k Q W / (W^2 + B^2)^{3/2}$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
