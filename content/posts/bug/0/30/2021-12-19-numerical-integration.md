---
layout: butir
authors: [viridi]
title: numerical integration
permalink: pages/0300
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["numerical", "integration", "partition", "rectangular", "monte carlo", "multiple integral"]
date: 2021-12-19 14:05:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/30/2021-12-19-numerical-integration.md
twitter_username: 6unpnp
nodes: []
---
Terdapat banyak fungsi yang antiderivatifnya tidak dapat atau tidak secara mudah diekspresikan dalam bentuk tertutup, atau dengan kata lain dalam bentuk fungsi yang diketahui, sehingga ketimbang mengerjakan integral dari fungsi-fungsi tersebut secara langsung, lebih baik mencari jalan lain dengan berbagai teknis integrasi numerik untuk mencari nilai aproksimasi integralnya [[1](#r01)]. Dalam matematika suatu jenis aproksimasi dari suatu integral menggunakan jumlah berhingga dikenal sebagai jumlah Riemann, yang penerapan umumnya adalah untuk menghampiri luasan suatu fungsi atau garis pada grafik, dan juga panjang kurva serta hampiran lainnya, di mana jumlah tersebut dihitung dengan membuat partisi daerah menggunakan bentuk-bentuk tertentu, seperti kotak, trapesium, parabola, atau kubik [[2](#r02)]. Pendekatan menggunakan titik kiri kotak (LRAM), titik tengah kotak (MRAM), dan titik kanan kotak (RRAM) termasuk ke dalam metode pendekatan kotak atau rectangular approximation method [[3](#r03)], yang merupakan contoh formulasi yang dapat bervariasi dari suatu pendekatan. Untuk midpoint rule atau aturan titik tengah, nama lain dari midpoint rectangular approximation method, terdapat contoh kode dalam R [[4](#r04)]. Kemudian, selain dengan menggunakan partisi, integrasi numerik dapat pula dilakukan dengan menggunakan bilancan acak, seperti pada integrasi Monte Carlo [[5](#r05)].


## sum over partitions
Membagi daerah di bawah kurva dalam sejumlah partisi dengan bentuk yang sama, yang mudah untuk dihitung, dan kemudian menjumlahkannya, akan memberikan hampiran dari integral tentu. Ilustrasi mengenai hal ini diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/30/0300-a1.png) | ![]({{ site.baseurl }}/assets/img/0/30/0300-a2.png) | ![]({{ site.baseurl }}/assets/img/0/30/0300-a3.png)

Gambar <a name="fig1">1</a>. Luas di bawah kurva dengan integral fungsi (kiri), hampiran aturan kotak empat partisi (tengah), dan hampiran trapesium empat partisi (kanan).

Hasil integral sebenarnya adalah $A_0$ yang diberikan pda Gambar [1](#fig1) (kiri) dengan dua buah hampirannya yang masing-masing menggunakan empat partisi, yaitu aturan kotak titik tengah (tengah) dan aturan trapesium (kanan). Terdapat daerah yang kosong di bawah kurva (belum terhitung) atau daerah di atas kurva (dihitung berlebih) merupakan kesalahan perhitungan integrasi numerik dibandingkan dengan hasil perhitungan analitiknya.

Dari Gambar [1](#fig1) (tengah) dan (kanan) dapat dituliskan bahwa

\begin{equation}\label{eqn:sum-over-partitions}
A_i = \sum_{j = 1}^N a_{ij}, \ \ \ \ i = 1, 2
\end{equation}

dengan $a_{ij}$ adalah partisi ke $j$ menggunakan hampiran $i$, $N = 4$ adalah jumlah partisi dan $i$ adalah hampiran yang digunakan, di mana $i = 1$ untuk aturan segiempat dan $i = 2$ untuk aturan trapesium. Secara umum

\begin{equation}\label{eqn:error}
\| A_i - A_0 \| \gt 0, \ \ \ \ i = 1, 2
\end{equation}

merupakan kesalahan perhitungan numerik yang akan diperoleh.

## coordinate system
Untuk bentuk yang lebih rumit dibandingkan dengan permasalah pada Gambar [1](#fig1), misalnya menghitung luas suatu kurva tertutup, pemilihan sistem koordinat yang tepat akan memberikan hasil perhitungan yang lebih baik.

![]({{ site.baseurl }}/assets/img/0/30/0300-b1.png) | ![]({{ site.baseurl }}/assets/img/0/30/0300-b2.png) | ![]({{ site.baseurl }}/assets/img/0/30/0300-b3.png)

Gambar <a name="fig2">2</a>. Luas kurva tertutup: sebenarnya $A_0$ (kiri), dengan hampiran segiempat titik tengah $x-y$ memberikan $A_1$ (tengah), dan dengan hampiran titik tengah $r-\theta$ memberikan $A_2$ (kanan).

Terdapat bentuk yang lebih baik dinyatakan dalam koordinat polar ketimbang koordinat kartesian, dengan salah satu contohnya telah diberikan pada Gambar [2](#fig2). Saat melakukan perhitungan menggunakan koordinat kartesian, kurva tertutup tersebut perlu dibagi menjadi dua bagian, yaitu bagian pertama yang berada di atas sumbu $x$ dan bagian kedua yang berada di bawah sumbu $x$, sehingga hasil luas totalnya $A_1$ merupakan penjumlahan dari dua bagian tersebut. Perhatikan bahwa masing-masing bagian masih terdiri dari tiga partisi.


## multiple integral
Integral lipat dua atau tiga secara prinsip dapat dihitung menggunakan hampiran integrasi numerik, dengan bentuk yang paling mudah adalah dapat terpisahkan untuk masing-masing koordinat seperti

\begin{equation}\label{eqn:multiple-integral-2}
\begin{array}{c}
\displaystyle \int_{x_1}^{x_2} \int_{y_1}^{y_2} f(x, y) \ dy dx = \newline
\displaystyle \int_{x_1}^{x_2} g(x) \ dx \int_{y_1}^{y_2} h(y) \ dy
\end{array}
\end{equation}

untuk integral lipat dua dan

\begin{equation}\label{eqn:multiple-integral-3}
\begin{array}{c}
\displaystyle \int_{x_1}^{x_2} \int_{y_1}^{y_2} \int_{z_1}^{z_2} f(x, y, z) \ dz dy dx = \newline
\displaystyle \int_{x_1}^{x_2} g(x) \ dx \int_{y_1}^{y_2} h(y) \ dy \int_{z_1}^{z_2} i(z) \ dz
\end{array}
\end{equation}

untuk integral lipat tiga. Bila bentuk pada Persamaan \eqref{eqn:multiple-integral-2} dan \eqref{eqn:multiple-integral-3} tidak dapat dicapai perlu diterapkan pembuatan partisi dimensi yang lebih tinggi.


## exer
1. Dari kedua hampiran atau aproksimasi integrasi numerik, dengan jumlah partisi yang sama, seperti tersajikan pada Gambar [1](#fig1) (tengah) dan (kanan), mana hampiran yang memberikan hasil yang lebih baik? Mengapa?
2. Perkirakan bentuk rumusan kesalahan kedua hampiran pada Gambar [1](#fig1).
3. Gambar [1](#fig1) (tengah) memberikan ilustrasi aturan segiempat titik tengah. Selain aturan ini, aturan apa saja yang masih termasuk dalam hampiran segiempat ini?
4. Bagaimana bentuk fungsi yang hasil integrasi numeriknya akan sangat baik saat menggunakan hampiran aturan segiempat?
5. Terdapat fungsi yang bila digunakan aturan trapesium, hasil integrasi numeriknya akan sangat baik. Apa bentuk umum fungsi yang termasuk dalam kategori ini?

## note
1. <a name="r01"></a>Gilbert Strang, Edwin "Jed" Herman, Paul Seeburger, Pamini Thangarajah, "Numerical Integration - Midpoint, Trapezoid, Simpson's rule", in MATH 2200: Calculus for Scientists II, Mount Royal University, Mathematics LibreTexts, 26 Jul 2021, url <https://math.libretexts.org/@go/page/10269> [20211219].
2. <a name="r02"></a>Wikipedia contributors, "Riemann sum", Wikipedia, The Free Encyclopedia, 10 December 2021, 22:06 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1059674953> [20211219].
3. <a name="r03">Khalil Sayid, Rod Pierce, "Integral Approximations", Math Is Fun, Rod Pierce (ed.), 5 Jul 2021, url <http://www.mathsisfun.com/calculus/integral-approximations.html> [20211219].
4. <a name="r04"></a>Eric Cai, "Rectangular Integration (a.k.a. The Midpoint Rule) – Conceptual Foundations and a Statistical Application in R", The Chemical Statistician, 20 Jan 2014, url <https://chemicalstatistician.wordpress.com/2014/01/20/rectangular-integration-a-k-a-the-midpoint-rule/> [20211219]. 
5. <a name="r05"></a>Keenan Crane, Kayvon Fatahalian, Stelian Coros, Michael Choquette, Se-Joon Chung, Sky Gao, Qiuyi Jia, Zach Shearer, Bryce Summers, Nick Sharp, Maxwell Slater, "Monte Carlo Integration", Computer Graphics CMU 15-462/15-662, Fall 2016, url <http://15462.courses.cs.cmu.edu/fall2016content/lectures/14_integration/14_integration_slides.pdf>

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0300?src=hash&amp;ref_src=twsrc%5Etfw">#bug0300</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1472463254597234690?ref_src=twsrc%5Etfw">December 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Aturan trapesium, selisih luasnya dengan $A_0$ lebih kecil dibandingkan aturan kotak titik tengah; &nbsp;
2) $\|A_1 - A_0\|$ dan $\|A_2 - A_0\|$; &nbsp;
3) aturan segimepat titik kiri dan aturan segiempat titik kanan; &nbsp;
4) $f(x) = c_0$, dengan $c_0$ suatu konstanta; &nbsp;
5) $f(x) = c_0 + c_1 x$, dengan $c_0$ dan $c_1$ berupa nilai konstan (bukan fungsi $x$); &nbsp;
</ans>
