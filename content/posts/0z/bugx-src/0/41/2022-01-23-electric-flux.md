---
layout: post
authors: [viridi]
title: electric flux
permalink: pages/0411
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["charge", "gauss's law", "electric field", "surface", "electric flux"]
date: 2022-01-24 14:00:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/41/2022-01-23-electric-flux.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Fluks listrik merupakan salah satu sifat medan listrik yang dapat dibayangkan sebagai jumlah garis medan listrik yang berpotongan dengan suatu luas yang diberikan [[1](#r01)], di mana kerapatan garis-garis ini terkait dengan kekuatan medan listrik [[2](#r02)]. Konsep fluks ini selalu didefinisikan berdasarkan suatu permukaan dan sebuah medan, yang dalam hal ini adalah medan listrik [[3](#r03)]. Terdapat ilustrasi peran medan, luas permukaan, dan sudut antar keduanya yang bersifat interaktif [[4](#r04)].

## formula
Suatu luas $\vec{A}$ yang ditembus oleh garis-garis medan lisrik $\vec{E}$ akan menghasilkan

\begin{equation}\label{eqn:electric-flux}
\Phi_E = \vec{E} \cdot \vec{A}
\end{equation}

yang merupakan fluks listrik $\Phi_E$. Bila medan listrik tidak tetap arah dan besarnya terhadap permukaan yang dipilih maka Persamaan \eqref{eqn:electric-flux} akan menjadi berbentuk integral

\begin{equation}\label{eqn:electric-flux-integral}
\Phi_E = \int \vec{E} \cdot d\vec{A},
\end{equation}

dengan $d\vec{A}$ adalah elemen luas permukaan pembentuk seluruh luas $\vec{A}$ yang akan ditinjau.

![]({{ site.baseurl }}/assets/img/0/41/0411-a.png) \
Gambar <a name='fig1'>1</a>. Fluks listrik dengan sudut antara medan listrik $\vec{E}$ dan luas $\vec{A}$: (a) tetap, (b) tidak tetap karena medan listrik yang menyebar, (c) tidak tetap karena permukaan yang melengkung.

Persamaan \eqref{eqn:electric-flux} digunakan untuk kasus pada Gambar [1](#fig1)(a) dan Persamaan \eqref{eqn:electric-flux} digunakan untuk kasus pada Gambar [1](#fig1)(b) dan (c). Untuk kasus pada Gambar [1](#fig1)(a) dapat juga bila medan listriknya menyebar tapi permukaannya melengkung, misalnya adap muatan titik dan permukaan bebentuk selubung bola.

Kedua Persamaan \eqref{eqn:electric-flux} dan \eqref{eqn:electric-flux-integral} bersifat umum, sebagai contoh untuk fluks magnetik simbol $E$ diganti dengan $B$, sehingga dapat diterapkan pada konsep lain seperti fluida, energi, dan partikel [[5](#r05)].


## normal vector
Suatu permukaan dapat dituliskan dalam bentuk

\begin{equation}\label{eqn:surface-vector}
\vec{A} = \hat{n} A,
\end{equation}

dengan $\hat{n}$ merupakan vektor satuan normal, vektor satuan dari vektor normal yang merupakan vektor yang tegak lurus permukaan pada suatu titik yang diberikan [[6](#r06)]. Untuk bidang $xy$ vektor satuan normalnya adalah $\hat{z}$ dan untuk permukaan bola adalah $\hat{r}$.


## exer
1. Terdapat muatan titik yang dilingkupi oleh permukaan berbentuk selubung bola dengan pusatnya terletak pada muatan titik. Untuk sistem ini, termasuk kasua yang mana pada Gambar [1](#fig1)? Mengapa?
2. Terdapat keping luas bermuatan seragam yang di atas terdapat luas berbentuk bidang datar segiempat dengan orientasi tertentu. Terkait dengan Gambar [1](#fig1), termasuk kasus yang mana?


## note
1. <a name='r01'></a>The Editors of Encyclopaedia Britannica, Erik Gregersen, William L. Hosch, Grace Young, "electric flux", Encyclop&aelig;dia Britannica, 2 Sep 2020, url <https://www.britannica.com/science/electric-flux> [20220123].
2. <a name='r02'></a>Wikipedia contributors, "Electric flux", Wikipedia, The Free Encyclopedia, 22 October 2021, 10:11 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1051240845> [20220123].
3. <a name='r03'></a>Ryan Martin, Emma Neary, Joshua Rinaldo, Olivia Woodman, Contributing Students, "Flux of the Electric Field", Introductory Physics - Building Models to Describe Our World, Queen’s University, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/19487> [20220123].
4. <a name='r04'></a>Milica Marković, "Field Visualization", Electromagnetics, Ximera, The Ohio State University, 2022, url <https://ximera.osu.edu/electromagnetics/electromagnetics/electrostatics/digInGaussLaw> [20220123].
5. <a name='r05'></a>"Scientific definitions for flux", Dictionary.com, 2022, url <https://www.dictionary.com/browse/flux> [20220123].
6. <a name='r06'></a>Eric W. Weisstein, "Normal Vector", from MathWorld--A Wolfram Web Resource, url <https://mathworld.wolfram.com/NormalVector.html> [20220123].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0411?src=hash&amp;ref_src=twsrc%5Etfw">#bug0411</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1485507594748035072?ref_src=twsrc%5Etfw">January 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) kasus (a) karena arah medan listrik \vec{E} dan arah luas \vec{A} selalu sama; &nbsp;
2) kasus (a); &nbsp;
</ans>


{% comment %}
{% endcomment %}
