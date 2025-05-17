---
layout: post
authors: [viridi]
title: gauss's law spherical symmetry
permalink: pages/0430
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["gaussian surface", "charge", "gauss's law", "electric field", "spherical symmetry"]
date: 2022-01-29 21:56:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/43/2022-01-29-gauss-law-spherical-symmetry.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Suatu fungsi $f: \mathbb{R}^n \rightarrow \mathbb{R}$ merupakan simetri bola bila fungsi tersebut bernilai tetap pada setiap bola yang berpusat di titik origin, dengan nilai tetap ini masih dapat merupakan fungsi dari jarak ke titik origin atau $r$ [[1](#r01)]. Dalam biolog simetri bola merupakan simetri yang dikenal selain bilateral dan radial, di mana hanya kelompok protozoa, Radiolaria dan Heliozoia yang menggambarkan simetri bola [[2](#r02)]. Istilah ini digunakan untuk mendeskripsikan geometri bintang dan planet dalam relativitas umum, untuk bumi misalnya bisa dianggap bersimetri bola maka akan diperoleh formulasi matematika yang sederhana untuk medan gravitasinya [[3](#r03)]. Pontesial suatu gaya sentral merupakan medan skalar dengan simetri bola dan gayanya sendiri merupakan medan vektor dengan simetri bola yang besar dan arahnya (keluar atau ke dalam saja) bergantung pada jarak dari titik origin [[4](#r04)]. Untuk memperoleh medan listrik dengan hukum Gauss perlu memperhatikan simetri dari distribusi muatan untuk disesuaikan dengan bentuk permukaan Gaussnya [[5](#r05)], yang dalam hal ini yang memiliki simetri bola.


## some systems
Sistem-sistem muatan yang memiliki simetri bola adalah satu muatan titik, kulit bola, bola pejal (isolator, konduktor), bola berongga (isolator, konduktor), bola berongga (isolator, konduktor) dengan muatan titik di tengah-tengah rongga.


## electric field form
Bentuk medan listrik yang dapat diperoleh berbantuan hukum Gauss dengan permukaan Gauss bersimetri bola dibatasi pada

\begin{equation}\label{eqn:electric-field-spherical-symmetry}
\vec{E} = E \ \hat{r},
\end{equation}

dengan medan listriknya

\begin{equation}\label{eqn:electric-field-radial-only}
E = E(r) \ne E(\theta, \phi),
\end{equation}

hanya diperboleh fungsi dari $r$ dan tidak boleh merupakan fungsi dari $\theta$ dan $\phi$. Dalam penerapan hukum Gauss medan listrik telah diasumsikan memenuhi Persamaan \eqref{eqn:electric-field-spherical-symmetry} dan \eqref{eqn:electric-field-radial-only} dan yang akan dicari adalah bentuk fungsinya $E = E(r)$.


## gaussian surface
Permukaan Gauss bersimetri bola adalah kulit bola dengan jari-jari $r$.

![]({{ site.baseurl }}/assets/img/0/43/0430-a.png) \
Gambar <a name='fig1'>1</a>. Elemen luas kulit bola berjari-jari $r$.

Elemen luas kulit bola secara umum adalah

\begin{equation}\label{eqn:spherical-surface-element}
d\vec{A} = \hat{r} \ dA = \hat{r} \ (rd\theta)(r\sin\theta d\phi),
\end{equation}

akan tetapi dengan simetri bola akan menjadi

\begin{equation}\label{eqn:spherical-surface-element-symmetry}
\int d\vec{A} = \hat{r} \ r^2 \int \sin\theta d\theta \int d\phi = \hat{r} \ 4\pi r^2,
\end{equation}

dengan batas integral $d\theta$ dari $0$ sampai $\pi$ dan $d\phi$ dari $0$ sampai $2\pi$.

Dengan melihat bentuk medan listrik seperti pada Persamaan \eqref{eqn:electric-field-spherical-symmetry} dan \eqref{eqn:electric-field-radial-only} sementara elemen luasnya adalah seperti pada Persamaan \eqref{eqn:spherical-surface-element}, maka fungsi medan listrik $E(r)$ dapat keluar dari integral karena bukan fungsi dari $\theta$ dan $\phi$ sehingga penyelesaiannya akan menjadi sederhana untuk

\begin{equation}\label{eqn:gauss-law-integral}
\int \vec{E} \cdot d\vec{A} = E \ (4\pi r^2),
\end{equation}

dengan menggunakan $\hat{r} \cdot \hat{r} = 1$.


## exer
1. Untuk mendapakan Persamaan \eqref{eqn:spherical-surface-element-symmetry} dari Persamaan \eqref{eqn:spherical-surface-element} apakah sama hasinya bila dengan batas integral $d\theta$ dari $0$ sampai $2\pi$ dan $d\phi$ dari $0$ sampai $\pi$? Mengapa?
2. Terdapat medan listrik, berbentuk $E(r) = r - R_0$ dengan $r > 0$, yang tandanya negatif untuk $0 < r < R_0$ dan positif untuk $r > R_0$. Apakah medan listrik dengan tanda yang dapat berubah masih termasuk ke dalam syarat pada Persamaan \eqref{eqn:electric-field-spherical-symmetry} dan \eqref{eqn:electric-field-radial-only}? Mengapa?


## note
1. <a name='r01'></a>Xander Henderson, "Answer to 'What does it mean for a function to be spherically symmetric?'", Mathematics Stack Exchange, 28 Aug 2019, url <https://math.stackexchange.com/a/3337552/645927> [20220129].
2. <a name='r02'></a>The Editors of Encyclopaedia Britannica, Darshana Das, Melissa Petruzzello, "", Encyclopaedia Britannica, 29 Apr 2021, url <https://www.britannica.com/science/symmetry-biology> [20220129].
3. <a name='r03'></a>Vikram Zaveri, "Answer to 'What is spherical symmetrical?'", Quora, 12 Mar 2019, url <https://qr.ae/pGEXQl> [20220129].
4. <a name='r04'></a>Wikipedia contributors, "Circular symmetry", Wikipedia, The Free Encyclopedia, 3 October 2021, 03:41 UTC, <https://en.wikipedia.org/w/index.php?oldid=1047893248#Spherical_symmetry> [20220129].
5. <a name='r04'></a>Milica Marković, "Calculation of electric field using Gauss’s Law", Electromagnetics, Ximera, The Ohio State University, 2022, url <https://ximera.osu.edu/electromagnetics/electromagnetics/electrostatics/digInGaussLaw> [20220129].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0430?src=hash&amp;ref_src=twsrc%5Etfw">#bug0430</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1487416444136554497?ref_src=twsrc%5Etfw">January 29, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) tidak, karena hasilnya $(0)(\pi) = 0$; &nbsp;
2) ya, karena tetap searah dengan $\hat{r}$ baik saat berarah ke luar atau ke dalam muatan; &nbsp;
</ans>


{% comment %}
{% endcomment %}
