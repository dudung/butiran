---
layout: post
authors: [viridi]
title: biot-savart law
permalink: pages/0510
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["biot-savart law", "electric current", "magnetic field"]
date: 2022-02-23 06:47:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/51/2022-02-23-biot-savart-law.md
twitter_username: 6unpnp
nodes: []
youtube: LhlNHEF4gpc
---
Terdapat hukum Biot-Savart yang merupakan hasil hasil perkalian silang (cross product) antara vektor elemen arus dengan vektor posisi relatif titik pengamatan terhadap elemen arus [[1](#r01)], yang kadang disederhanakan menjadi besarnya saja dengan menggunakan fungsi trigonometri sin [[2](#r02)] yang mungkin memudahkan untuk kawat lurus akan tetapi dapat membingungkan untuk bentuk sembarang kawat. Selain itu terdapat pula ilustrasi yang mencerahkan mengenai kontribusi elemen arus pada suatu kawat lurus [[3](#r03)].


## right hand rule
Terdapat aturan tangan kanan untuk membantu abstraksi medan magnetik yang ditimbulkan oleh kawat berarus, sebagaima diilustrasikan pada gambar beriku ini.

![]({{ site.baseurl }}/assets/img/0/51/0510-a.png) \
Gambar <a name='fig1'>1</a>. Aturan tangan kanan yang menggambarkan hubungan antara elemen arus $Id\vec{l}$, posisi relatif $\vec{r}$ dari elemen arus ke titik pengamatan, dan elemen medan magnetik $d\vec{B}$ yang ditimbulkannya.

Dua posisi tangan kanan diberikan pada Gambar [1](#fig1) yang menggambarkan hubungan antara arah arus pada kawat atau elemen arus $Id\vec{l}$, posisi tempat medan magnetik ingin dicari relatif terhadap elemen arus $r$, dan elemen medan magnatik $d\vec{B}$ yang ditimbulkannya.


## biot-savart law
Hukum Biot-Savart memberikan hubungan antara $Id\vec{l}$, $\vec{r}$, dan $d\vec{B}$ dalam bentuk

\begin{equation}\label{eqn:biot-savart-law-relative-position}
d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3},
\end{equation}

dengan $\vec{r}$ adalah posisi relatif titik pengamatan, tempat elemen medan magnetik $d\vec{B}$ terhadap elemen arus $Id\vec{l}$, ingin dihitung.

![]({{ site.baseurl }}/assets/img/0/51/0510-b.png) \
Gambar <a name='fig2'>2</a>. Elemen arus $Id\vec{l}$ dan elemen medan magnetik $d\vec{B}$ yang ditimbulkannya pada titik pengamatan.

Ilustrasi dari Persamaan \eqref{eqn:biot-savart-law-relative-position} diberikan pada Gambar [2](#fig2) dengan $\vec{r}$ adalah posisi relatif titik pengamatan terhadap $Id\vec{l}$. Untuk seluruh panjang kawat, maka $d\vec{l}$ perlu diintegralkan mulai dari salah satu ujung kawat sampai ujung lainnya.


## note
1. <a name='r01'></a>Carl Rod Nave, "Biot-Savart Law", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/Biosav.html> [20220223].
2. <a name='r02'></a>Electrical4U, "Biot Savart Law: Statement, Derivation An Applications", Electrical 4 U, 3 May 2021, url <https://www.electrical4u.com/biot-savart-law/> [20220223].
3. <a name='r03'></a>Stan Zurek, "Biot-Savart law", Encyclopedia Magnetica, 16 Jan 2022, url <https://www.e-magnetica.pl/biot-savart_law> [20220223].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0510?src=hash&amp;ref_src=twsrc%5Etfw">#bug0510</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1497907940317339652?ref_src=twsrc%5Etfw">February 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
