---
layout: butir
authors: [viridi]
title: elasticity
permalink: pages/0180
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["elasticity", "hooke's law", "elastic modulus"]
date: 2021-11-25 05:38:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/18/2021-11-24-elasticity.md
twitter_username: 6unpnp
nodes: []
---
Elastisitas adalah kemampuan tubuh suatu bahan yang telah terdeformasi untuk kembali ke bentuk dan ukuran semulanya setelah gaya penyebab deformasi tersebut ditiadakan [[1](#r01)], yang merupakan sifat dari bahan padatan [[2](#r02)]. Konsep ini dapat disampaikan setelah membahas modulus elastik [[3](#r03)] atau sebelumnya [[4](#r04)], dengan jenis-jenis modulus elastik yang umum adalah modulus Young, modulus geser, dan modulus bulk [[5](#r05)]. Istilah modulus bulk kadang langsung digunakan, diterjemahkan menjadi modulus kompresi, curah, ataupun limbak [[6](#r06)].


## deformation
Deformasi pada benda yang bersifat elastik hanya berlangsung saat gaya luar bekerja. Saat gaya luar tersebut ditiadakan, baik bentuk maupun ukuran benda, akan kembali ke keadaan semula.

![]({{ site.baseurl }}/assets/img/0/18/0180-a.png) \
Gambar <a name="fig1">1</a>. Saat gaya $F$ diterapkan dapat terjadi: (a) deformasi tegak lurus permukaan di mana gaya bekerja, (b), (c) deformasi sejajar permukaan di mana gaya bekerja, dan (d) deformasi tegak lurus permukaan di mana gaya bekerja dan pada semua arah.

Suatu gaya $F$ diterapkan saat $0 < t \le t_1$ dan benda mengalami deformasi. Saat $t > t_1$ gaya telah ditiadakan sehingga benda elastik bentuk dan ukurannya akan kembali seperti pada saat $t = 0$. Deformasi-deformasi pada Gambar [1](#fig1) terkait dengan (a) modulus Young $E$, (b), (c) modulus geser $G$, (d) dan modulus bulk $B$.


## hooke's law
Hukum Hooke yang dinyatakan pertama kali secara formal oleh Robert Hooke

> ut tensio, sic vis

yang dapat diterjemahkan secara literal menjadi

> As extension, so force.

atau

> Extension is directly proportional to force.

yang merupakan terjemahan formalnya [[2](#r02)]. Ungkapan ini umumnya diekspresikan secara matematika, untuk sebuah pegas dengan konstanta $k$, dalam bentuk

\begin{equation}\label{eqn-hookes-law}
F = k \Delta x
\end{equation}

dengan $F$ gaya yang bekerja pada pegas dan $\Delta x$ perpindahan ujung pegas [[7](#r07)].

![]({{ site.baseurl }}/assets/img/0/18/0180-b.png) \
Gambar <a name="fig2">2</a>. Deformasi yang terjadi pada pegas (perpindahan posisi ujung pegas terhadap posisi tanpa gaya) dan kaitannya dengan gaya yang diberikan.

Terlihat pada Gambar [2](#fig2) saat gaya diterapkan pada sebuah pegas dengan konstanta $k$ deformasi $\Delta x$ akan terjadi yang arahnya searah dengan arah gaya $F$ yang diberikan dan besarnya sebanding dengan gaya yang diberikan tersebut.


## exer
1. Bagaimana bentuk dan ukuran benda elastik saat gaya penyebab deformasi ditiadakan?
2. Jenis makanan apa yang dapat digunakan sebagai ilustrasi deformasi yang sejajar permukaan di mana gaya bekerja?
3. Gambarkan dengan suatu contoh bagaimana modulus bulk dapat teramati.
4. Mengapa saat membahas sistem pegas-benda, gaya pada benda memiliki tanda berbeda dengan gaya pada Persamaan \eqref{eqn-hookes-law}?
5. Apa saja yang dapat disimpulkan dari Gambar [2](#fig2)?


## note
1. <a name="r01"></a>The Editors of Encyclopaedia Britannica, Darshana Das, Erik Gregersen, William L. Hosch, Emily Rodriguez, Grace Young, "Elasticity", Encyclop&aelig;dia Britannica, 6 May 2021, url <https://www.britannica.com/science/elasticity-physics> [20211124].
2. <a name="r02"></a>Glenn Elert, "Elasticity", The Physics Hypertextbook, 2021, url <https://physics.info/elasticity/> [20211124].
3. <a name="r03"></a>Samuel J. Ling, Jeff Sanny, Bill Moebs, Contributing Authors, "Elasticity and Plasticity", University Physics, OpenStax, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/4044> [20211124].
4. <a name="r04"></a>Carl R. Nave, "Periodic Motion", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/permot.html> [20211124].
5. <a name="r05"></a>Wikipedia contributors, "Elastic modulus", Wikipedia, The Free Encyclopedia, 23 February 2021, 22:14 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1008553603> [20211124].
6. <a name="r06"></a>"bulk modulus", Tr-ex.me, url <https://tr-ex.me/translation/english-indonesian/bulk+modulus?search=bulk+modulus> [20211124].
7. <a name="r07"></a>Matt Williams, "What is Hooke's Law?", Phys.org, 16 Feb 2015, url <https://phys.org/news/2015-02-law.html> [20211124].


## &nbsp;
[young's modulus](0181.html) &bull; [shear modulus](0182.html) &bull; [bulk modulus](0183.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) kembali ke keadaan semula sebelum gaya penyebab deformasi diterapkan; &nbsp;
2) agar-agar berbentuk balok; &nbsp;
3) sebuah balok dalam ruangan yang tekanannya diperbesar sehingga ukuran balon mengecil dan sebaliknya; &nbsp;
4) gaya pada benda oleh pegas dan gaya pada pegas oleh benda merupakan pasangan gaya aksi dan reaksi; &nbsp;
5) besar deformasi sebanding dengan besar gaya yang diberikan, konstanta kesebandingan adalah konstanta pegas $k$, arah deformasi searah dengan arah gaya yang diberikan; &nbsp;
</ans>


{% comment %}
{% endcomment %}
