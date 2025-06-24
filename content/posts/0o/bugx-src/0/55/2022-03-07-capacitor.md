---
layout: post
authors: [viridi]
title: capacitor
permalink: pages/0550
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["capacitor", "geometry", "parallel plate", "spherical plate", "cylindrical plate", "capacitance"]
date: 2022-03-07 15:52:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/55/2022-03-07-capacitor.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Kapasitor merupakan devais untuk menyimpan energi listrik, yang tersusun atas dua konduktor dalam jarak dekat dan terisolasi secara listrik satu dengan lainnya [[1](#r01)]. Terdapat setidaknya tiga geometri kapasitor yang umum [[2](#r02)], yang memiliki karakter yang mirip saat jarak antar pelat diubah [[3](#r03)].


## variable, symbol, unit
Untuk menyatakan sebuah kapasitor umumnya digunakan variabel $C$, yang disimbolkan dengan ---| |---, di mana garis horisontal menggambarkan kawat konektor dan dua garis tegak menggambarkan kapasitor pelat sejajar. Satuan kapasitansi, kemampuan kapasitor untuk menyimpan energi berbentuk  muatan listrik, adalah farad atau F.


## capacitance
Kapasitansi adalah sifat listrik konduktor atau rangkaian konduktor yang mengukur jumlah muatan listrik yang terpisahkan (positif saja atau negatif saja) yang dapat tersimpan pada konduktor untuk setiap satuan perubahan beda potensial [[4](#r04)], di mana untuk kapasitor menjadi

\begin{equation}\label{eqn:capacitance}
C = \frac{Q}{V}
\end{equation}

di mana $C$ adalah kapasitansi, $Q$ muatan yang tersimpan dalam kapasitor, dan $V$ adalah beda potensial antara kedua pelat kapasitor.


## geometry
Terdapat tiga geometri kapasitor yang umum dibahas yaitu pelat sejajar, pasangan kulit bola, dan pasangan kulit silinder [[2](#r02)].

Tabel <a name='tab1'>1</a>. Berbagai jenis geometri kapasitor dan kapasitansinya.

Geometri | Kapasitansi | Eqn
:-: | :-: | :-:
![]({{ site.baseurl }}/assets/img/0/55/0550-a.png) | $\displaystyle C = \epsilon_0 \frac{A}{d}$ | <a name='capacitance-parallel-plate'></a>$\rm(1a)$
![]({{ site.baseurl }}/assets/img/0/55/0550-b.png) | $\displaystyle C = \epsilon_0 \frac{4 \pi R_1 R_2}{R_2 - R_1}$ | <a name='capacitance-spherical-plate'></a>$\rm(1b)$
![]({{ site.baseurl }}/assets/img/0/55/0550-c.png) | $\displaystyle C = \epsilon_0 \frac{2 \pi h}{\ln(R_2/R_1)}$ | <a name='capacitance-cylindrical-plate'></a>$\rm(1c)$

Untuk kapasitor pasangan kulit bola pada Tabel [1](#tab1) pelat meliputi kulit bola utuh. Digambarkan hanya sebagian agar terlihat parameter masing-masing pelat yang meliputi radius, luas, muatan, serta arah medan listriknya.


### aproximation
Untuk jari-jari yang luas $R_1 > > \Delta R$ dan $R_2 > > \Delta R$ dengan $R_2 = R_1 + \Delta R$ akan membuat Persamaan <a href='#capacitance-sperical-plate'>$\rm(1b)$</a> dapat dituliskan menjadi

$$
\begin{array}{rcl}
C & = & \displaystyle \epsilon_0 \frac{4 \pi R_1 R_2}{R_2 - R_1} \newline
& = &  \displaystyle \epsilon_0 \frac{4 \pi R_1 (R_1 + \Delta R)}{\Delta R} \newline
& \approx &  \displaystyle \epsilon_0 \frac{4 \pi R_1^2}{\Delta R} \newline
\end{array} 
$$

dengan jarak antar pelat $d = \Delta R$ dan luas pelat $A = 4\pi R_1^2$ akan menghasilkan

$$
\epsilon_0 \frac{4 \pi R_1^2}{\Delta R} = \epsilon_0 \frac{A}{d},
$$

yang tak lain adalah Persamaan <a href='#capacitance-parallel-plate'>$\rm(1a)$</a>.

Dengan menggunakan deret Taylor dapat diperoleh bahwa

\begin{equation}\label{eqn:taylor-series-r1-r2}
\ln (R_1 + \Delta R) \approx \ln R_1 + \frac{\Delta R}{R_1}
\end{equation}

yang dapat digunakan pada Persamaan <a href='#capacitance-cylindrical-plate'>$\rm(1c)$</a>.


## arrangements
Kapasitor dapat disusun seri dan paralel, dengan kapasitor ekivalen untuk susunan seri adalah

\begin{equation}\label{eqn:series-arrangement}
C_{\rm ser} = \sum_{i = 1}^{N} C_i
\end{equation}

dan untuk susunan paralel adalah

\begin{equation}\label{eqn:parallel-arrangement}
\frac{1}{C_{\rm par}} = \sum_{i = 1}^{N} \frac{1}{C_i}
\end{equation}

yang dapat digunakan untuk menyederhanakan susunan kapasitor yang lebih kompleks.


## exer
1. Dengan melihat Persamaan <a href='#capacitance-parallel-plate'>$\rm(1a)$</a>, <a href='#capacitance-sperical-plate'>$\rm(1b)$</a>, dan <a href='#capacitance-cylindrical-plate'>$\rm(1c)$</a> apakah satuan dari $C$? Apakah sama ketiga geometri di atas? Apakah satuan dari $\epsilon_0$?
2. Apakah yang diperoleh saat Persaman \eqref{eqn:taylor-series-r1-r2} diunakan pada Persamaan <a href='#capacitance-cylindrical-plate'>$\rm(1c)$</a>? Apakah akah diperoleh kembali Persamaan <a href='#capacitance-parallel-plate'>$\rm(1a)$</a>?
3. Apakah rumusan resistor ekivalen untuk susunan seri dan paralel resistor sama dengan untuk kapasitor ekivalen untuk susunan seri dan paralel kapasitor?


## note
1. <a name='r01'></a>The Editors of Encyclopaedia Britannica, Adam Augustyn, Aakanksha Gaur, Erik Gregersen, Parul Jain, William L. Hosch, "capacitor", Encyclopaedia Britannica, 22 Jan 2020, url <https://www.britannica.com/technology/capacitor> [20220307].
2. <a name='r02'></a>S. J. Ling, "Capacitors and Capacitance", University Physics Volume 2, Pressbooks, 2016, 
url <https://opentextbc.ca/universityphysicsv2openstax/chapter/capacitors-and-capacitance/> [20220307].
3. <a name='r03'></a>Doubtnu Web Dest, "a parallel plate capacitor, a spherical capacitor and a cylindrical capacitor", Doubnut, 24 Jun 2021, url <https://www.doubtnut.com/question-answer-physics/you-have-a-parallel-plate-capacitor-a-spherical-capacitor-and-a-cylindrical-capacitor-each-capacitor-645066437> [20220307].
4. <a name='r04'></a>The Editors of Encyclopaedia Britannica, Adam Augustyn, Parul Jain, Thinley Kalsang Bhutia, William L. Hosch, Gloria Lotha, Grace Young, "capacitance", Encyclopaedia Britannica, 20 Nov 2019, url <https://www.britannica.com/science/capacitance> [20220307].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0550?src=hash&amp;ref_src=twsrc%5Etfw">#bug0550</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1500755417810739206?ref_src=twsrc%5Etfw">March 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\rm F$, ya sama, $\rm F/m$; &nbsp;
2) ya; &nbsp;
3) tidak; &nbsp;
</ans>


{% comment %}
{% endcomment %}
