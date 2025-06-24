---
layout: post
authors: [viridi]
title: gaussian surface
permalink: pages/0410
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["closed surface", "gaussian surface", "charge", "gauss's law"]
date: 2022-01-23 18:58:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/41/2022-01-23-gaussian-surface.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Saat membicarakan hukum Gauss, terdapat konsep permukaan Gauss yang merupakan suatu permukaan khayal [[1](#r01)], suatu konstruksi matematika yang dapat berbentuk permukaan berbentuk apa saja asalkan tertutup, yang dalam implementasinya untuk meghitung fluks dengan permukaan, akan lebih mudah diselesaikan bila bentuk permukaan yang dipilih memiliki simetri tertentu [[2](#r02)]. Permukaan tertutup bukan merupakan permukaan Gauss walaupun permukaan dengan luas tak-hingga dapat merupakan pendekatan permukaan Gauss [[3](#r03)]. Terdapat pemahaman bahwa sudut antara suatu permukaan Gauss dengan medan listirk yang menembusnya perlu selalu tetap [[4](#r04)], yang tepat bila tujuan utama hukum ini adalah untuk memperoleh medan listrik dari distribusi muatan yang terlingkupi permukaan tertutup [[5](#r05)]. Akan tetapi bukan hanya itu pemanfaatan dari hukum Gauss sebenarnya. Terdapat pula informasi bahwa hukum Gauss dapat diterapkan untuk distribusi medan listrik oleh muatan cincin [[6](#r06)], yang seharusnya memerlukan syarat simetri untuk analisis Gauss agar produktif, kecuali bila merupakan penerapan solusi analisis beda hingga [[7](#r07)].


## closed surface
Permukaan Gauss harus merupakan permukaan tertutup, baik merupakan suatu permukaan yang dapat diungkapkan dengan satu fungsi ataupun merupakan gabungan dari beberapa permukaan.

![]({{ site.baseurl }}/assets/img/0/41/0410-a.png) \
Gambar <a name='fig1'>1</a>. Suatu permukaan Gauss: (a) berbentuk kotak tertutup yang terdiri dari enam bidang datar, dan (b) terbagi menjadi bagian kiri (L: left) dan kanan (R: right).

Enam bidang datar terbatas berbentuk persegi panjang dapat digunakan untuk membentuk kotak tertutup yang merupakan suatu permukaan Gauss seperti diberikan pada Gambar [1](#fig1). Dalam hal ini integral pada gambar tersebut dapat menjadi penjumlahan luas enam bidang

\begin{equation}\label{eqn:gaussian-surface-box}
\begin{array}{rcl}
S & = & \oint dS \newline
& = & \displaystyle \sum_{i = 1}^6 S_i \newline
& = & (S_3 + S_4 + S_5) + (S_1 + S_2 + S_6) \newline
& = & S_L + S_R,
\end{array}
\end{equation}

yang dapat dibagi menjadi bagian kiri dan kanan. Pembagian menjadi dua bagian ini hanya untuk memperjelas bila ada muatan di dalamnya kelak.

![]({{ site.baseurl }}/assets/img/0/41/0410-b.png) \
Gambar <a name='fig2'>2</a>. Beberapa bentuk permukaan yang membentuk ruang di antaranya.

Gabungan beberapa permukaan dengan fungsi tertentu dapat membentuk suatu ruang di antara permukaan-permukaan tersebut seperti diberikan pada Gambar [2](#fig2). Perlu kejelia untuk melihat apakah permukaan-permukaan tersebut dapat digunakan sebagai permukaan Gauss.


## enclosed charge
Setelah memahami syarat suatu permukaan Gauss, pengertian berikutnya yang perlu dipahami adalah muatan yang terlingkupi atau berada di dalam permukaan Gauss.

![]({{ site.baseurl }}/assets/img/0/41/0410-c.png) \
Gambar <a name='fig3'>3</a> Empat muatan dan permukaan Gauss berbentuk: (a) kulit bola, (b) kotak, dan (c) silinder.

Muatan-muatan pada Gambar [3](#fig3) berada keseluruhannya di dalam atau di luar permukaan Gauss. Pada aplikasinya tidak perlu selalu demikian.

![]({{ site.baseurl }}/assets/img/0/41/0410-d.png) \
Gambar <a name='fig4'>4</a>. Sebuah muatan $q_i$, $i = 1, .., 4$, berbentuk bola pejal dan permukaan Gauss yang digunakan padanya berbentuk kotak untuk $q_1$, silinder untuk $q_2$, bola untuk $q_3$ ddan $q_4$.

Ada kalanya permukaan Gauss tidak melingkupi seluruh bagian muatan akan tetapi hanya sebagiannya. Contoh-contoh kasus ini diberikan pada Gambar [4](#fig4).


## exer
1. Manakah permukaan pada Gambar [2](#fig2) yang dapat digunakan sebagai suatu permukaan Gauss?
2. Tentukan muatan yang terlingkupi oleh permukaan Gauss pada Gambar [3](#fig3)(b).
3. Tentukan mautan yang tidak terlingkupi oleh permukaan Gauss pada Gambar [3](#fig3)(a).
4. Tentukan muatan yang terlingkupi oleh permukaan Gauss yang beririsan dengan muatan $q_1$ pada Gambar [4](#fig4).
5. Tentukan muatan yang terlingkupi oleh permukaan Gauss yang beririsan dengan muatan $q_3$ pada Gambar [4](#fig4). Asumsikan berapat muatan volume $\rho$ seragam.


## note
1. <a name='r01'></a>Carl R. Nave, "Gaussian Surfaces", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/gausur.html#c1> [20220123]
2. <a name='r02'></a>Samuel J. Ling, Jeff Sanny, Bill Moebs, Many Contributing Authors, "Explaining Gauss’s Law", University Physics, OpenStax, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/4380> [20220123].
3. <a name='r03'></a>Wikipedia contributors, 'Gaussian surface', Wikipedia, The Free Encyclopedia, 28 March 2021, 03:22 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1014613716> [20220123].
4. <a name='r04'></a>Student Baba, "Gaussian Surface and Steps to Determine a Gaussian Surface with Examples", The Student Baba, 15 Sep 2019, url <https://student-baba.com/gaussian-surface-and-steps-to-determine-a-gaussian-surface-with-examples/> [20220123].
5. <a name='r05'></a>Sanjay knowledge, "What is the importance of Gauss law?", Actingcolleges.org, 22 Nov 2021, url <https://actingcolleges.org/library/acting-questions/read/92086-what-is-the-importance-of-gauss-law> [20220123].
6. <a name='r06'></a>Admin, "Gauss Law - Applications, Gauss Theorem Formula", BYJUS, 28 Jun 2021, url <https://byjus.com/jee/gauss-law/> [20220123].
7. <a name='r07'></a>Brad Barkert, "Answer to 'How do I find the electric field of a circular ring using Gauss’s law?'", Quora, 6 Dec 2018, url <https://www.quora.com/How-do-I-find-the-electric-field-of-a-circular-ring-using-Gauss-s-law/answer/Brad-Barker-24> [20220123].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0410?src=hash&amp;ref_src=twsrc%5Etfw">#bug0410</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1485220154673819648?ref_src=twsrc%5Etfw">January 23, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) (a) dan (d); &nbsp;
2) $q2$ dan $q_3$; &nbsp;
3) $q1$ dan $q_4$; &nbsp;
4) $\frac18 q_1$; &nbsp;
5) $(r/R)^3 q_3$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
