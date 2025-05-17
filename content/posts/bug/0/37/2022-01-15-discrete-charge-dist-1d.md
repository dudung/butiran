---
layout: post
authors: [viridi]
title: discrete charge dist 1d
permalink: pages/0371
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "electric field", "discrete charge distribution", "1d"]
date: 2022-01-15 18:05:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/37/2022-01-15-discrete-charge-dist-1d.md
twitter_username: 6unpnp
nodes: []
---
Sistem kristal paling sederhana yang dapat digunakan untuk menghitung sifat fonon adalah sebuah rantai atom-atom yang berjarak sama yang geraknya dibatasi pada satu-dimensi [[1](#r01)]. Bila atom-atom tersebut kehilangan atau ketambahan elektron akan menjadi ion, sehingga terdapat kristas ion satu-dimensi, yang misalnya ingin dihitung energi kohesinya [[2](#r02)]. Salah satu sistem atom 1d yang ada adalah carbyne, suatu rantai atom-atom karbon yang berikatan ganda atau alternasi ikatan tunggal dan triple, yang sayangnya belum cukup stabil [[3](#r03)] dan telah terdapat perhitungannya menggunakan prinsip pertama [[4](#r04)]. Dalam hal kekuatan tarik spesifik carbyn menggungguli grafena, nanotube karbon, dan intan [[5](#r05)]. Kembali ke sistem ion 1d, walaupun hanya merupakan sistem kristal hipotetical [[6](#r06)], akan tetapi tetap menarik untuk dipelajari dan bermanfaat. Salah satunya adalah saat menyederhanakan analisis dari kisi atom 3d dengan memodelkannya menjadi kisi 1d atau rantai linier, misalnya dalam mempelajari fonon [[7](#r07)].


## limitation
Untuk saat ini sistem 1d yang akan disinggung dibatasi hanya sampai dua jenis muatan berjarak sama $a$ dan medan listrik yang diamati berada pada jarak $b$ dari muatan paling kanan.

![]({{ site.baseurl }}/assets/img/0/37/0371-a.png) \
Gambar <a name='fig1'>1</a>. Sistem rantai muatan 1d dengan jarak antar muatan $a$ dan medan listrik total yang dihasilkannya pada titik $\rm P$.

Alternasi tanda muatan dibatasi hanya sampai bersifat biner, sehingga dapat mengakomodasi hanya muatan positif atau hanya muatan negatif, dan satu muatan positif dan satu muatan negatif berselang-seling. Koordinat $x = 0$ dipilih pada muatan paling kanan.


## monodispersed system
Sistem dengan satu jenis muatan dapat terbagi atas semua muatan bertanda positif dan semua muatan bertanda negatif.

### all positive
Sistem rantai 1d muatan positif diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/37/0371-b.png) \
Gambar <a name='fig2'>2</a>. Sistem rantai muatan 1d dengan jarak antar muatan $a$, semua muatan bertanda positif, dan medan listrik total yang dihasilkannya pada titik $\rm P$.

Posisi muatan $q_i = +Q$ adalah

\begin{equation}\label{eqn:position-positive-mono}
\vec{r}_i = (1 - i)a \ \hat{x},
\end{equation}

dengan $i = 1, 2, .., N$ untuk sistem dengan $N$ buah muatan.

### all negative
Sistem rantai 1d muatan negatif diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/37/0371-c.png) \
Gambar <a name='fig4'>4</a>. Sistem rantai muatan 1d dengan jarak antar muatan $a$, semua muatan bertanda negatif, dan medan listrik total yang dihasilkannya pada titik $\rm P$.

Posisi muatan $q_i = -Q$ adalah

\begin{equation}\label{eqn:position-negative-mono}
\vec{r}_i = (1 - i)a \ \hat{x},
\end{equation}

dengan $i = 1, 2, .., N$ untuk sistem dengan $N$ buah muatan.


## bidispersed system
Untuk sistem dengan dua jenis muatan, saat ini, dibatasi hanya yang berselang-seling satu muatan positif dan satu muatan negatif.

![]({{ site.baseurl }}/assets/img/0/37/0371-d.png) \
Gambar <a name='fig4'>4</a>. Sistem rantai muatan 1d dengan jarak antar muatan $a$, tanda muatan berselang-seling positif-negatif, dan medan listrik total yang dihasilkannya pada titik $\rm P$.

Dalam sistem ini diperlukan dua definisi posisi muatan, yaitu untuk muatan positif $q_{2i-1} = +Q$

\begin{equation}\label{eqn:position-bi-positive}
\vec{r} _{2i-1} = (2 - 2i)a \ \hat{x},
\end{equation}

dan untuk muatan negatif $q_{2i} = -Q$

\begin{equation}\label{eqn:position-bi-negative}
\vec{r} _{2i} = (1 - 2i)a \ \hat{x},
\end{equation}

dengan $i = 1, 2, .., \frac12N$ untuk sistem dengan $N$ buah muatan.


## electric field
Medan listrik $\vec{E}_i$ oleh satu muatan titik $q_i$, yang terletak di posisi $\vec{r}_i$,  diberikan oleh

\begin{equation}\label{eqn:electric-field-point-charge}
\vec{E}_i = k \frac{q_i}{|\vec{r} - \vec{r}_i|^3} \ (\vec{r} - \vec{r}_i),
\end{equation}

dengan $\vec{r}$ adalah posisi titik amat, yang untuk Gambar [1](#fig1), [2](#fig2), [3](#fig3), dan [4](#fig4) adalah titik $\rm P$. Koordinat muatan-muatan secara umum berada di kiri titik amat sehingga

\begin{equation}\label{eqn:relative-position}
\begin{array}{rcl}
\vec{r} - \vec{r}_i & = & (b \ \hat{x}) - (r_i \ \hat{x}) \newline
& = & (b - r_i) \ \hat{x}, \newline
| \vec{r} - \vec{r}_i | & = & (b - r_i),
\end{array}
\end{equation}

dengan $\vec{r}_i = r_i \ \hat{x}$. Baris akhir Persamaan \eqref{eqn:relative-position} lebih umumnya adalah $\|b - r_i\|$, akan tetapi dapat menjadi seperti di atas karena $b > r_i$ dari gambar yang diberikan. Atau dari Persamaan \eqref{eqn:position-positive-mono}, \eqref{eqn:position-negative-mono}, \eqref{eqn:position-bi-positive}, dan \eqref{eqn:position-bi-negative} akan didapatkan $r_i \le 0$.

Substitusi Persamaan \eqref{eqn:relative-position} ke Persamaan \eqref{eqn:electric-field-point-charge} akan menghasilkan

\begin{equation}\label{eqn:electric-field-one-charge}
\begin{array}{rcl}
\vec{E}_i & = & \displaystyle k \frac{q_i}{(b - r_i)^3} \ (b - r_i) \hat{x} \newline
& = & \displaystyle k \frac{q_i}{(b - r_i)^2} \ \hat{x}.
\end{array}
\end{equation}

Total medan listrik di titik amat $\rm P$ akibat semua muatan menjadi

\begin{equation}\label{eqn:electric-field-all-charges}
\begin{array}{rcl}
\vec{E} & = & \displaystyle \sum_{i = 1}^N \vec{E}_i
\newline
& = & \displaystyle \sum _{i = 1}^N k \frac{q_i}{(b - r_i)^2} \ \hat{x}, \newline
& = & \displaystyle \hat{x} k \sum _{i = 1}^N \frac{q_i}{(b - r_i)^2},
\end{array}
\end{equation}

dengan

\begin{equation}\label{eqn:magnitude-ri}
r_i = \vec{r}_i \cdot \hat{x}
\end{equation}

menggunakan $\vec{r}_i$ Persamaan \eqref{eqn:position-positive-mono}, \eqref{eqn:position-negative-mono}, \eqref{eqn:position-bi-positive}, dan \eqref{eqn:position-bi-negative}.


## exer
1. Selain dengan menggunakan Persamaan \eqref{eqn:electric-field-all-charges} untuk sistem dalam Gambar [4](#fig4), apakah terdapat cara lain untuk menghitungya? Kaitkan dengan sistem dalam Gambar [2](#fig2) dan [3](#fig3).
2. Untuk sistem dengan satu jenis muatan, Gambar [2](#fig2) atau [3](#fig3), bila $b = a$, bagaimana suku di dalam somasi atau penjumlahan?


## note
1. <a name='r01'></a>Peter Hadley, "1-d chain of atoms", PHY.F20 Molecular and Solid State Physics, Technische Universität Graz, Austria, 15 May 2018, url <http://lampx.tugraz.at/~hadley/ss1/phonons/1d/1dphonons.php> [20220115].
2. <a name='r02'></a>Stephan LeBohec, "Homework 1", Physics 5510 - Solid State Physics I, Department of Physics & Astronomy, The University of Utah, Fall 2014, url <https://web.physics.utah.edu/~lebohec/P5510/Homework/hw01.pdf> [20220115].
3. <a name='r03'></a>"Carbyne could be strongest material yet", BBS News, 10 Oct 2013, url <https://www.bbc.com/news/science-environment-24475337> [20220115].
4. <a name='r04'></a>Mingjie Liu, Vasilii I. Artyukhov, Hoonkyung Lee, Fangbo Xu, Boris I. Yakobson, "Carbyne from First Principles: Chain of C Atoms, a Nanorod or a Nanorope", ACS Nano [ASC Nano], vol 7, no 11, p 10075–10082, Nov 2013, url <https://doi.org/10.1021/nn404177r>.
5. <a name='r05'></a>Wikipedia contributors, "Linear acetylenic carbon", Wikipedia, The Free Encyclopedia, 4 October 2021, 04:10 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1048079828> [20220115].
6. <a name='r06'></a>"A one-dimensional chain of alternating singlyionized positive and negative ions", bartleby, 19 Aug 2020, url <https://www.bartleby.com/questions-and-answers/x/dc2ac0ca-7a5e-4e1f-95a5-42fa732e936f> [20220115]. 
7. <a name='r07'></a>Wikipedia contributors, "Phonon", Wikipedia, The Free Encyclopedia, 29 December 2021, 10:01 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1062588084> [20220115].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0371?src=hash&amp;ref_src=twsrc%5Etfw">#bug0371</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1482305655197552640?ref_src=twsrc%5Etfw">January 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field and source](0360.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ya, sistem dengan semua muatan positif $a' = 2a$ digabungkan dengan sistem dengan semua muatan negatif $a' = 2a$ dan $b' = a + b$; &nbsp;
2) $\displaystyle \frac{1}{a^2} + \frac{1}{4a^2} + \frac{1}{9a^2} + \dots$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
