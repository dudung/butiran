---
layout: post
authors: [viridi]
title: charge distribution
permalink: pages/0281
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "charge distribution", "continue", "discrete"]
date: 2022-01-05 10:45:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/28/2022-01-02-charge-distribution.md
twitter_username: 6unpnp
nodes: []
---
Unit terkecil muatan yang dapat diisolasi secara prinsip adalah muatan suatu elektron tunggal, yang amat kecil nilainya dan jarang kita berurusan langsung dengannya, sehingga lebih nyaman untuk mendeskripsikan muatan sebagai suatu kuantitas yang kontinu pada suatu daerah dalam ruang [[1](#r01)]. Akan tetapi perlu diingat bahwa karena muatan terkuantisasi, tidak terdapat distribusi muatan yang benar-benar kontinu [[2](#r02)]. Seperti halnya rapat massa, rapat muatan dapat bergantung posisi dan dalam teori elektromagnetik klasik rapat muatan diidealisasi sebagai suatu fungsi skalar kontinu dari posisi sebagaimana fluida [[3](#r03)]. Untuk distribusi muatan kontinu terdapat rapat muatan garis, rapat muatan luas, dan rapat muatan volume [[4](#r04)]. Dengan menggunakan ketiga rapat muatan ini dan bersama-sama dengan susunan muatan titik, dapat dibuat generalisasi hukum gaya Coulomb untuk keempat macam distribusi muatan (volume, permukaan, linier, dan titik) menjadi penjumlahan dari tiga integral dan satu somasi [[5](#r05)]. Terdapat pula keadaan khusus saat setiap muatan yang melingkupi suatu ruang dengan dimensi jauh lebih kecil dari jaraknya terhadap titik pengamatan dapat dianggap sebagai suatu titik muatan [[6](#r06)].


## linear charge density
Rapat muatan linier atau garis $\lambda$ diperoleh dari

\begin{equation}\label{eqn:liniear-charge-density}
\lambda = \frac{dq}{dl}
\end{equation}

dengan elemen panjang $dl$ dapat berupa $dx$, $dy$, $dz$, dan $dr$ untuk muatan berbentuk garis sejajar sumbu $x$, $y$, $z$, dan berarah radial, $Rd\theta$ untuk muatan garis berbentuk cincin atau busur lingkaran dengan jari-jari $R$, dan elemen panjang lainnya yang perlu dipilih khusus seperti pada bentuk poligon ataupun heliks. Secara umum, untuk bentuk kurva sembarang, hubungan antara elemen muatan $dq$ dan muatan totalnya $Q$ adalah sebagai berikut.

![]({{ site.baseurl }}/assets/img/0/28/0281-a.png) \
Gambar <a name="fig1">1</a>. Muatan garis $Q$ dengan elemen muatan $dq$ dan rapat muatan linier $\lambda$.

Total muatan suatu muatan garis diperoleh dari

\begin{equation}\label{eqn:liniear-charge-density-charge}
Q = \int dq = \int \lambda dl,
\end{equation}

dengan batas bawah integral merupakan permulaan integral dan batas atas integral merupakan akhir integral. Secara umum $\lambda = \lambda(l)$. Terdapat pula hubungan

\begin{equation}\label{eqn:liniear-charge-density-uniform-1}
Q = \int \lambda dl = \lambda \int dl = \lambda L
\end{equation}

atau

\begin{equation}\label{eqn:liniear-charge-density-uniform-2}
\lambda = \frac{Q}{L},
\end{equation}

saat rapat muatan garis $\lambda$ bersifat seragam atau bernilai konstan.


## surface charge density
Rapat muatan permukaan didapatkan dari

\begin{equation}\label{eqn:surface-charge-density}
\sigma = \frac{dq}{dA}
\end{equation}

dengan $dA$ adalah elemen luas yang dapat berbentuk $(dx)(dy)$, $(dy)(dz)$, $(dz)(dx)$ untuk pelat berbentuk segiempat, $(dr)(rd\theta)$ untuk pelat berbentuk cakram, cakram berongga, atau track sector [[7](#r07)], yang ketiganya bergantung dari batas-batas integral untuk elemen $dr$ dan $rd\theta$. Akan tetapi secara umum, untuk bentuk permukaan sembarang, hubungan antara elemen muatan $dq$ dan muatan totalnya $Q$ adalah sebagai berikut.

![]({{ site.baseurl }}/assets/img/0/28/0281-b.png) \
Gambar <a name="fig2">2</a>. Muatan permukaan $Q$ dengan elemen muatan $dq$ dan rapat muatan permukaan $\sigma$.

Total muatan suatu muatan permukaan diperoleh dari

\begin{equation}\label{eqn:surface-charge-density-charge}
Q = \int dq = \int \sigma dA,
\end{equation}

dengan batas bawah integral merupakan permulaan integral dan batas atas integral merupakan akhir integral, yang masing-masing perlu ditentukan untuk setiap elemen panjang (elemen luas merupakan perkalian dari dua elemen panjang). Secara umum, misalnya untuk sistem koordinat kartesian, $\sigma = \sigma(A) = \sigma(x, y)$. Mirip seperti pada kasus rapat muatan garis, terdapat hubungan

\begin{equation}\label{eqn:surface-charge-density-uniform-1}
Q = \int \sigma dA = \sigma \int dA = \sigma A
\end{equation}

atau

\begin{equation}\label{eqn:surface-charge-density-uniform-2}
\sigma = \frac{Q}{A},
\end{equation}

saat rapat muatan permukaan $\sigma$ bersifat seragam atau bernilai tetap (bukan merupakan fungsi koordinat).


## volume charge density
Rapat muatan volume dihasilkan dari

\begin{equation}\label{eqn:volume-charge-density}
\rho = \frac{dq}{dV}
\end{equation}

dengan $dV$ adalah elemen volume yang dapat berbentuk $(dx)(dy)(dz)$ untuk bentuk balok, $(dr)(rd\theta)(dz)$ untuk bentuk silinder, dan $(dr) (rd\theta) (r\sin\theta d\phi)$ untuk bentuk bola. Untuk bentuk volume sembarang, hubungan antara elemen muatan $dq$ dan muatan totalnya $Q$ adalah sebagai berikut.

![]({{ site.baseurl }}/assets/img/0/28/0281-c.png) \
Gambar <a name="fig3">3</a>. Muatan volume $Q$ dengan elemen muatan $dq$ dan rapat muatan volume $\rho$.

Selanjutnya, total muatan suatu muatan permukaan diperoleh dari

\begin{equation}\label{eqn:volume-charge-density-charge}
Q = \int dq = \int \rho dV,
\end{equation}

dengan batas bawah integral merupakan permulaan integral dan batas atas integral merupakan akhir integral, yang masing-masing perlu ditentukan untuk setiap elemen panjang (elemen volume merupakan perkalian dari tiga elemen panjang). Secara umum, misalnya untuk sistem koordinat kartesian, $\sigma = \sigma(V) = \sigma(x, y, z)$. Mirip seperti pada kasus rapat muatan garis dan rapat muatan permukaan, terdapat hubungan

\begin{equation}\label{eqn:volume-charge-density-uniform-1}
Q = \int \rho dV = \rho \int dV = \rho V
\end{equation}

atau

\begin{equation}\label{eqn:volume-charge-density-uniform-2}
\rho = \frac{Q}{V},
\end{equation}

saat rapat muatan volume $\rho$ bersifat seragam atau bukan merupakan fungsi dari koordinat.


## exer
1. Rapat muatan garis berbentuk $\lambda = c_1$, dengan $c_1$ suatu nilai konstan, untuk suatu muatan garis yang membentang dari $x = a$ sampai $x a + L_1$. Tentukan muatan total muatan tersebut.
2. Tedapat suatu bola pejal berjari-jari $R$ yang memiliki rapat muatan volume seragam $\rho = 3c_2/4\pi R^3$. Berapakah muatan total bola tersebut?
3. Suatu cakram dengan jari-jari $R$ memiliki rapat muatan permukaan yang merupakan fungsi $r$ berbentuk $\sigma = c_3/r$. Tentukan muatan total cakram tersebut.
4. Terdapat batang lurus dengan panjang $L$ yang dapat dianggap sebagai muatan garis dengan rapat muatan liniernya diberikan pada gambar berikut. <br>
	![]({{ site.baseurl }}/assets/img/0/28/0281-d.png) \
	Gambar <a name="fig4">4</a>. Rapat muatan garis tidak homogen suatu batang lurus dengan panjang $L$ sebagai fungsi dari $x/L$. <br>
	Tentukan bentuk fungsi rapat muatan liniernya $\lambda = \lambda(z)$ dengan $z \in [0, 1]$. Variabel $z = x/L$ ini telah dinormalisasi pada rentang antara $0$ dan $1$.
5. Berapakah muatan total dari batang lurus pada Gambar [4](#fig4)?
6. Perhatikan gambar di bawah ini yang menyajikan rapat massa linier suatu batang denga panjang $L = 4 \ {\rm mm}$. <br>
	![]({{ site.baseurl }}/assets/img/0/28/0281-e.png) \
	Gambar <a name="fig5">5</a>. Rapat muatan garis tidak homogen suatu batang lurus dengan panjang $L$ sebagai fungsi dari $x$. <br>
	Apakah Gambar [5](#fig5) terkait dengan Gambar [4](#fig4)? Bila ya, jelaskan.
7. Apakah Gambar <a name="fig4">4</a> dan Gambar <a name="fig5">5</a> memberikan ilustrasi untuk sistem yang sama? Mengapa?
	

## note
1. <a name='r01'></a>Steven W. Ellingson, "Charge Distributions", Electrical Engineering, Virginia Polytechnic Institute and State University, 22 Mar 2021, url <https://eng.libretexts.org/@go/page/3925> [20220102].
2. <a name='r02'></a>Samuel J. Ling, Jeff Sanny, William Moebs, Daryl Janzen, "Calculating Electric Fields of Charge Distributions", Introduction to Electricity, Magnetism, and Circuits, 28 Nov 2018, url <https://openpress.usask.ca/physics155/chapter/1-5-calculating-electric-fields-of-charge-distributions/> [20220102].
3. <a name='r03'></a>Wikipedia contributors, "Charge density", Wikipedia, The Free Encyclopedia, 27 November 2021, 09:06 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1057386843> [20220102].
4. <a name='r04'></a>Carl R. Nave, "Continuous Charge Distributions", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/conchg.html> [20220102].
5. <a name='r05'></a>A.A. Kaufman, B.I. Anderson, "Principles of Electric Methods in Surface and Borehole Geophysics", Methods in Geochemistry and Geophysics, 2010, url <https://www.sciencedirect.com/topics/earth-and-planetary-sciences/charge-distribution> [20220102].
6. <a name='r06'></a>Amsh, "Charge Distributions", Winner Science, 22 Aug 2018, url <https://winnerscience.com/charge-distributions/> [20220102].
7. <a name='r07'></a>"The Windows Disk Management 1", installsetupconfig.com, 2019, url <https://www.installsetupconfig.com/win32programming/windowsdiskapis2.html> [20220103].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0281?src=hash&amp;ref_src=twsrc%5Etfw">#bug0281</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1476426337065660417?ref_src=twsrc%5Etfw">December 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $Q = c_1 L_1$; &nbsp;
2) $Q = c_2$; &nbsp;
3) $Q = 2\pi R c_3$; &nbsp;
4) $\lambda(x) = 4(x - x^2)$; &nbsp;
5) $Q = \frac43 \ {\rm \mu C}$; &nbsp;
6) ya, Gambar [5](#fig5) merupakan grafik $\lambda = \lambda(x)$, sedangkan Gambar [4](#fig4) merupakan grafik $\lambda = \lambda(z)$ dengan $z = x/L$; &nbsp;
7) ya, karena $Q = \int_0^2 \lambda(z) \ dz$ akan memberikan hasil yang sama denggan $Q = \int_0^4 \lambda(x) \ dx$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
