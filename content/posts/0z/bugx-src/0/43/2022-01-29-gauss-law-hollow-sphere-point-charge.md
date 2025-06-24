---
layout: post
authors: [viridi]
title: gauss's law hollow sphere point charge
permalink: pages/0434
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["gaussian surface", "charge", "gauss's law", "electric field", "spherical symmetry", "hollow sphere", "point charge"]
date: 2022-01-30 21:00:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/43/2022-01-29-gauss-law-hollow-sphere-point-charge.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Dengan memilih permukaan Gauss yang sesuai dengan simetri yang dimiliki oleh medan listrik akibat suatu distribusi muatan, integral pada hukum Gauss dapat diselesaikan untuk memperoleh rumusan medan listriknya [[1](#r01)].


## system
Bola pejal berongga berbahan konduktor yang berapat muatan seragam dapat diperoleh rumusan medan listriknya pada setiap jarak $r$ dari titik origin yang berhimpit dengan pusat bola. Sistem ini dapat dibuat lebih rumit dengan menempatkan sebuah muatan titik di tengah-tengah rongga bola pejal tersebut, dengan sitemnya diberikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/43/0434-a.png) \
Gambar <a name='fig1'>1</a>. Bola berongga bermuatan seragam dan muatan titik di tengah rongga dengan permukaan Gaussnya.

Secara umum bentuk fungsi medan listrik $E = E(r)$ merupakan superposisi dari medan listrik oleh satu titik muatan dan oleh bola pejal berongga berapat muatan seragam.


## superposition
Medan listrik oleh satu titik muatan diberikan oleh

\begin{equation}\label{eqn:gauss-law-point-charge}
E_1(r) = \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2},
\end{equation}

dan medan listrik oleh bola pejal berongga berapat muatan seragam diberikan oleh

\begin{equation}\label{eqn:gauss-law-hollow-sphere}
E_2(r) = \left\\{
\begin{array}{cc}
0, & 0 < r \le R_1, \newline
\displaystyle \frac{1}{4\pi\varepsilon_0} \left( \frac{r^3 - R_1^3}{R_2^3 - R_1^3} \right) \frac{Q}{r^2}, & R_1 \le r \le R_2, \newline
\displaystyle \frac{1}{4\pi\varepsilon_0} \ \frac{Q}{r^2}, & r \le R_2.
\end{array}
\right.
\end{equation}

Sistem yang berupa bola berongga pejal isolator dengan satu titik muatan di tengah-tengah rongganya dapat diperoleh dengan menghitung superposisi kedua medan listrik dari Persamaan \eqref{eqn:gauss-law-point-charge} dan \eqref{eqn:gauss-law-hollow-sphere} yang akan memberikan

\begin{equation}\label{eqn:gauss-law-hollow-sphere-point-charge}
E_2(r) = \left\\{
\begin{array}{cc}
\displaystyle \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2}, & 0 < r \le R_1, \newline
\displaystyle  \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2} + \frac{1}{4\pi\varepsilon_0} \left( \frac{r^3 - R_1^3}{R_2^3 - R_1^3} \right) \frac{Q}{r^2}, & R_1 \le r \le R_2, \newline
\displaystyle \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2} + \frac{1}{4\pi\varepsilon_0} \ \frac{Q}{r^2}, & r \le R_2.
\end{array}
\right.
\end{equation}

Selain dengan menggunakan cara superposisi ini, medan listrik dapat pula diperoleh dengan menggunakan hukum Gauss, yang akan memberikan hasil yang sama.

![]({{ site.baseurl }}/assets/img/0/43/0434-b.png) \
Gambar <a name='fig2'>2</a>. Medan listrik $E$ sebagai fungsi jarak $r$ dari pusat origin untuk bola pejal berongga yang terbuat dari isolator bermuatan seragam dengan muatan total $Q$ dan muatan titik $q$ di tengah rongga.

Ilustrasi grafik medan listrik $E$ sebagai fungsi jarak dari origin $r$ diberikan pada Gambar [2](#fig2) dengan $Q = 1 \ {\rm nC}$, $q = 5 \ {\rm pC}$, $R_1 = 1 \ {\rm \mu m}$, dan $R_2 = 2 \ {\rm \mu m}$.


## exer
1. Menurut Persamaan \eqref{eqn:gauss-law-hollow-sphere-point-charge}, untuk $r \le R_2$, berapakah muatan total yang dilingkupi oleh permukaan Gaussnya?


## note
1. <a name='r01'></a>Milica Marković, "Calculation of electric field using Gauss’s Law", Electromagnetics, Ximera, The Ohio State University, 2022, url <https://ximera.osu.edu/electromagnetics/electromagnetics/electrostatics/digInGaussLaw> [20220130].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0434?src=hash&amp;ref_src=twsrc%5Etfw">#bug0434</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1487787697640857603?ref_src=twsrc%5Etfw">January 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $q_{\rm enc} = q + Q$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
