---
layout: post
authors: [viridi]
title: electric field and source
permalink: pages/0360
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "electric field", "source"]
date: 2022-01-14 09:08:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/36/2022-01-14-electric-field-and-source.md
twitter_username: 6unpnp
nodes: []
---
Konsep medan listrik digunakan untuk melakukan visualisasi bagaimana sebuah muatan atau kumpulan muatan mempengaruhi daerah di sekitarnya, yang merupakan suatu analogi dengan $g$ yang walau disebut sebagai percepatan gravitasi, akan tetapi sebenarnya merupakan medan gravitasi [[1](#r01)]. Sumber medan listrik dapat berupa satu atau beberapa muatan titik [[2](#r02)], distribusi kontinu muatan [[3](#r03)], ataupun medan magnetik yang berubah terhadap waktu [[4](#r04)]. Terdapat diskusi menarik mengapa sumber yang terakhir yang bersifat dinamis tidak dibedakan, misalnya dengan notasi yang berbeda, terhadap sumber yang bersifat statis [[5](#r05)]. Lebih dalam lagi sifat, asal, dan perambatan medan listrik, telah dikaji dan menghasilkan wawasan baru untuk fisika fundamental mengenai hal ini yang didasarkan atas kehadiran string yang bervibrasi dalam ruang dan proses eksitasi-dirinya [[6](#r06)]. Di sini hanya akan dibahas medan listrik yang disebabkan oleh satu muatan titik, beberapa muatan titik, dan distribusi kontinu muatan.


## point charges and charge distributions
Medan listrik oleh muatan titik $q_i$ yang terletak pada $\vec{r}_i$ akan memberikan medan listrik $\vec{E}_i$ pada sembarang posisi $\vec{r}$ dalam bentuk

\begin{equation}\label{eqn:electric-field-point-charge}
\vec{E}_i = k \frac{q_i}{|\vec{r}-\vec{r}_i|^3} \ (\vec{r}-\vec{r}_i)
\end{equation}

dan bila terdapat banyak muatan titik maka medan listrik di sembarang posisi $\vec{r}$ akan menjadi

\begin{equation}\label{eqn:electric-field-point-charges}
\vec{E} = \sum _{i = 1}^N k \frac{q_i}{|\vec{r}-\vec{r}_i|^3} \ (\vec{r}-\vec{r}_i)
\end{equation}

untuk $N$ buat muatan titik dan diamati pada posisi $\vec{r} \ne \vec{r}_i$. Kumpulan titik-titik muatan yang diskrit dapat dianggap sebagai distribusi kontinu muatan sehingga Persamaan \eqref{eqn:electric-field-point-charges} akan menjadi

\begin{equation}\label{eqn:electric-field-charge-distribution}
\vec{E} = \int k \frac{dq}{|\vec{r}-\vec{r}_q|^3} \ (\vec{r}-\vec{r}_q)
\end{equation}

dengan $\vec{r}_q$ adalah posisi elemen $dq$ pada muatan kontinu dengan

\begin{equation}\label{eqn:charge-distribution-total-charge}
Q = \int dq
\end{equation}

adalah total muatannya.

![]({{ site.baseurl }}/assets/img/0/36/0360-a.png) \
Gambar <a name="fig1">1</a>. (a) Satu muatan titik, (b) beberapa muatan titik, (c) banyak muatan titik atau distribusi diskrit muatan, (d) distribusi kontinu muatan, (e) pada jarak jauh distribusi muatan kontinu terlihat sebagai muatan titik.

Saat dalam ruang terdapat banyak muatan titik yang tersebar dengan tidak merata, melihat dengan jarak berbeda akan mengubah cara pandang kita, misalnya pertama-tama terlihat sebagai satu muatan titik, lalu menjadi kumpulan muatan titik, yang selanjutnya dapat menjadi distribusi diskrit muatan dan kemudian kontinu, dan akhirnya kembali menjadi satu muatan titik, sebagaimana diilustrasikan pada Gambar [1](#fig1). Formula untuk menghitung muatan oleh masing-masing cara pandang telah diberikan pada Persamaan \eqref{eqn:electric-field-point-charge}, \eqref{eqn:electric-field-point-charges}, dan \eqref{eqn:electric-field-charge-distribution}.


## exer
1. Bila banyak muatan titik tersebar secara seragam dalam ruang, apakah ilustrasi pada Gambar [1](#fig1) masih tepat?
2. Untuk kumpulan muatan titik atau distribusi diskrit muatan, apakah dapat menggunakan integral? Bila ya, apa syaratnya? Apakah untuk saat ini direkomendasikan?


## note
1. <a name='r01'></a>Andrew Duffy, "Electric field", PY106 - Elementary Physics II, Boston University, 7 Jul 1999, url <http://physics.bu.edu/~duffy/PY106/Electricfield.html> [20220114].
2. <a name='r02'></a>Jeffrey W. Schnick, "The Electric Field Due to one or more Point Charges", University Physics, Physics LibreTexts, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/5872> [20220114].
3. <a name='r03'></a>cnxuniphysics, "Calculating Electric Fields of Charge Distributions", University Physics Volume 2, BCcampus, 15 Sep 2016, url <https://opentextbc.ca/universityphysicsv2openstax/chapter/calculating-electric-fields-of-charge-distributions/> [20220114].
4. <a name='r04'></a>Wikipedia contributors, "Electric field", Wikipedia, The Free Encyclopedia, 5 January 2022, 20:48 UTC, <https://en.wikipedia.org/w/index.php?oldid=1063959710> [20220114].
5. <a name='r05'></a>Dipendra, Mike W., "Sources of electric field", Department of Physics, College of Engineering, University of Illinois at Urbana-Champaign, 12 Mar 2010, url <https://van.physics.illinois.edu/qa/listing.php?id=15508&t=sources-of-electric-field> [20220114].
6. <a name='r06'></a>Narahari V. Joshi, "The Nature, Origin and Propagation of the Electric Field: A New Insight to Fundamental Physics", Journal of Modern Physics [J Mod Phys], vol 7, no 10, p 1132-1137, Jun 2016, url <http://dx.doi.org/10.4236/jmp.2016.710102>.

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0360?src=hash&amp;ref_src=twsrc%5Etfw">#bug0360</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1481810251251068928?ref_src=twsrc%5Etfw">January 14, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electrostatic force](0351.html) &bull; [electric field](0352.html) &bull;[electric potential](0353.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Tidak;
2) ya, menggunakan fungssi delta Dirac $dq = q_i \ \delta(\vec{r} - \vec{r}_i)$, tidak untuk saat ini lebih baik menggunakan penjumlahan; &nbsp;
</ans>


{% comment %}
{% endcomment %}
