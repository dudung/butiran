---
layout: post
authors: [viridi]
title: discrete charge distribution
permalink: pages/0370
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "electric field", "discrete charge distribution"]
date: 2022-01-15 14:41:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/37/2022-01-15-discrete-charge-distribution.md
twitter_username: 6unpnp
nodes: []
---
Konsep mengenai distribusi diskrit dan kontinu muatan kadang masih membingungkan terutama dalam penerapannya untuk sistem yang sama akan tetapi dengan berbeda cara pandang, dan pendekatannya dengan fungsi kontinu untuk distribusi diskrit [[1](#r01)]. Terdapat buku teks dengan bab Distribusi Diskrit Muatan yang di dalamnya tidak menceritakan distribusi muatan melainkan hanya satu, dua, atau sejumlah muatan yang dipandang sebagai titik-titik muatan yang terpisah [[2](#r02)], sebagai pembeda dengan bab berikutnya Distribusi Muatan kontinu yang dalam menghitung medan listriknya perlu menggunakan integral [[3](#r03)]. Dalam aplikasinya telah ditelaah energetik dan kestabilan distribusi diskrit muatan pada permukaan bola [[4](#r04)] dan untuk studi mengenai bahan pada skala nano perlu hati-hati dalam membuat model terkait muatan titik diskrit dalam bahan dielektrik [[5](#r05)]. Terdapat pula studi mengenai proses pemberian muatan pada partikel nano yang memperlihatkan situs-situs muatan diskrit [[6](#r06)]. Di sini yang dimaksud dengan distribusi diskrit muatan adalah terdapatnya fungsi menjelaskan posisi titik-titik muatan.


## discrete distribution
Suatu distribusi diskrit adalah distribusi data dalam statistik yang memiliki nilai diskrit, nilai yang terhitung, berhingga, dan berupa bilangan bulat tidak negatif [[7](#r07)]. Untuk distribusi muatan, tidak semua batasan di atas yang merupakan istilah dalam bidan statistik, dapat digunakan. Nilai yang dimaksud di sini adalah posisi muatan dan tidak perlu bilangan bulat, serta masih dapat berharga negatif. Disebut diskrit karena ada tempat-tempat yang tidak terdapat muatan. Sebagai contoh posisi muatan titik diberikan oleh

\begin{equation}\label{eqn:discrete-position}
\vec{r}_{ijk} = n_i a_x \hat{x} + n_j a_y \hat{y} + n_k a_z \hat{z},
\end{equation}

dengan $a_x$, $a_y$, $a_z$ adalah bilangan riil dan $n_i$, $n_j$, $n_k$ adalah bilangan bulat. Dengan ketentuan ini dapat dilihat bahwa posisi-posisi muatan yang diberikan oleh Persamaan \eqref{eqn:discrete-position} akan bersifat diskrit, misalnya tidak ada muatan yang berada pada $n_i$, $n_j$, ataupun $n_k$ yang bernilai pecahan. Dalam kristal, yang merupakan susunan periodik, $a_x \hat{x}$ telah digabung menjadi vektor satuan dalam ruang kristal, misalnya $\vec{a}$, $\vec{b}$, dan $\vec{c}$ [[8](#r08)], yang tidak perlu sama panjang.


## 1d, 2d, 3d arrangements
Titik-titik muatan dapat mengikuti susunan 1d, 2d, ataupun 3d. Beberapa contohnya diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/37/0370-a.png) \
Gambar <a name='fig1'>1</a>. Susunan muatan: (a) 1d, (b) 2d, dan (c) 3d.

Beberapa susunan-susunan muatan dalam 1d, 2d, dan 3d diberikan pada Gambar [1](#fig1). Agar dapat dibuat perumusan seperti pada Persamaan \eqref{eqn:discrete-position}, perlu terlebih dahulu diberikan informasi satuan panjang pada arah $x$, $y$, dan $z$.


## exer
1. Dengan menggunakan Persaamaan \eqref{eqn:discrete-position} tentukan posisi muatan untuk $\vec{r}_{123}$ bila $a_x = 3$, $a_y = 2$, dan $a_z = 1$.
2. Kembali menggunakan Persaamaan \eqref{eqn:discrete-position} tentukan posisi muatan untuk $\vec{r}_{111}$ bila $a_x = 2$, $a_y = 1$, dan $a_z = 4$.
3. Bila jarak antar muatan adalah $b$ pada Gambar [1](#fig1)(a), tentukan $\vec{r} _{+}$ dan $\vec{r} _{-}$ untuk ketiganya.


## note
1. <a name='r01'></a>Massimo Ortolano, "Answer to ''", Physics StackExchange, 21 Apr 2018, url <https://physics.stackexchange.com/a/401250/260719> [20220115].
2. <a name='r02'></a>Paul A. Tipler, Gene Mosca, "Physics for Scientists and Engineers, Volume 2 (Chapters 21-33)", 6th Edition, Dec 2007, p 693-726, url <https://isbnsearch.org/isbn/9781429201339> [20220115]. [`PDF`](https://bcs.whfreeman.com/WebPub/Physics/TiplerPhysics6e/reprint-PDFs/Tipler_Physics_6e_Chapter_21.pdf)
3. <a name='r03'></a>Paul A. Tipler, Gene Mosca, "Physics for Scientists and Engineers, Volume 2 (Chapters 21-33)", 6th Edition, Dec 2007, p 727-762, url <https://isbnsearch.org/isbn/9781429201339> [20220115]. [`PDF`](https://bcs.whfreeman.com/WebPub/Physics/TiplerPhysics6e/reprint-PDFs/Tipler_Physics_6e_Chapter_22.pdf)
4. <a name='r04'></a>Hüseyin Oymak, Şakir Erkoç, "Energetics and Stability of Discrete Charge Distribution on the Surface of a Sphere", International Journal of Modern Physics C [Int J Mod Phys C], vol 12, no 2, p 293-305, Feb 2001, url <https://doi.org/10.1142/S0129183101001699>.
5. <a name='r05'></a>Tim LaFave Jr., "Discrete charge dielectric model of electrostatic energy", Journal of Electrostatics [J Electrostat], vol 69, no 5, p 414-418, Oct 2011, url <https://doi.org/10.1016/j.elstat.2011.06.006>.
6. <a name='r06'></a>Marianne Seijo, Serge Ulrich, Montserrat Filella, Jacques Buffle, Serge Stoll, "Effects of surface site distribution and dielectric discontinuity on the charging behavior of nanoparticles. A grand canonical Monte Carlo study", Physical Chemistry Chemical Physics [Phys Chem Chem Phys], vol 8, no 48, p 5679-5688, Dec 2006, url <http://dx.doi.org/10.1039/b612118g>.
7. <a name='r07'></a>Celso Trinidad, "Discrete Distribution", CFI Education Inc., 9 Jul 2022, url <https://corporatefinanceinstitute.com/resources/knowledge/other/discrete-distribution/> [20220115].
8. <a name='r08'></a>Motohisa Hirano, "Crystal Structure", in Friction at the Atomic Level: Atomistic Approaches in Tribology, Wiley-VCH Verlag GmbH & Co. KGaA, 2018, p 255, url <https://doi.org/10.1002/9783527664986>. [`PDF`](https://onlinelibrary.wiley.com/doi/pdf/10.1002/9783527664986.app4)

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0370?src=hash&amp;ref_src=twsrc%5Etfw">#bug0370</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1482187954122784770?ref_src=twsrc%5Etfw">January 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field and source](0360.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\vec{r} _{123} = 3\hat{x} + 4\hat{y} + 3\hat{z}$; &nbsp;
2) $\vec{r} _{111} = 2\hat{x} + \hat{y} + 4\hat{z}$; &nbsp;
3) $\vec{r} _{-} = nb\hat{x}$, $\vec{r} _{+} = nb\hat{x}$, $\vec{r} _{+} = 2nb\hat{x}$ dan $\vec{r} _{-} = (2n+1)b\hat{x}$, $n = 0, 1, 2, \dots$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
