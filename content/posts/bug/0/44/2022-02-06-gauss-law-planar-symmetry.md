---
layout: post
authors: [viridi]
title: gauss's law planar symmetry
permalink: pages/0440
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["gaussian surface", "charge", "gauss's law", "electric field", "planar symmetry", "large plate", "infinite sheet"]
date: 2022-02-07 21:27:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/44/2022-02-06-gauss-law-planar-symmetry.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Hukum Gauss dapat digunakan menurunkan medan listrik untuk geometri-geometri sederhana, yang di antaranya adalah pada pelat luas dengan rapat muatan seragam [[1](#r01)], yang akan menghasilkan medan listrik konstan di sekitar tengah-tengah pelat pada jarak mat dekat dengan pelat. Lebih jauh informasi medan listrik konstan ini dapat digunakan untuk menghitung medan listrik yang disebabkan oleh dua pelat berapat muatan seragam yang berbeda baik tanda muatan ataupun besar rapat muatannya [[2](#r02)], dua pelat dengan rapat muatan seragam masing-masing bernilai sama akan tetapi berbeda tanda [[3](#r03)], dan menentukan kapasitansi kapasitor, yang sayangnya perumusan potensial listriknya masih melupakan tanda negatif, walau dapat memperoleh hasilnya [[4](#r04)].


## illustration
Sistem pelat luas dengan rapat muatan seragam $\sigma$ diberikan pada gambar berikut untuk tanda muatan positif.

![]({{ site.baseurl }}/assets/img/0/44/0440-a.png) \
Gambar <a name='fig1'>1</a>. Pelat luas berapat muatan seragam $+\sigma$ untuk perspektifnya (kiri) dan tampaknya dari samping pelat (kanan).

Ilustrasi 3d suatu pelat luas diberikan pada Gambar [1](#fig1) (kiri) dan proyeksinya pada suatu bidang diberikan pada Gambar [1](#fig1) (kanan), di mana cara yang kedua akan digunakan untuk menjelaskan susunan sejajar berbagai pelat luas dan juga khusus untuk dua pelat pada sistem kapasitor.

![]({{ site.baseurl }}/assets/img/0/44/0440-b.png) \
Gambar <a name='fig1'>2</a>. Sebuah pelat luas berapat muatan seragam $\sigma$ dengan medan listriknya untuk muatan bertanda positif (kiri) dan bertanda muatan negatif (kanan).

Bila Gambar [1](#fig1) (kanan) hanya menggambarkan medan listrik untuk pelat bermuatan positif dengan rapat muatan seragam, maka untuk pelat positif dan negatif diberikan pada Gambar [2](#fig2), dengan pelat berwarna merah untuk tanda muatan positif dan pelat berwarna biru untuk tanda muatan negatif.


## constant electric field
Medan lisrik yang konstan baik besar dan arahnya pada pelat luas bermuatan seragam dapat didekati dengan pelat berukuran berhingga asalkan daerah observasi diambil di dekat permukaan pelat pada bagian dekat dengan tengah pelat.

![]({{ site.baseurl }}/assets/img/0/44/0440-c.png) \
Gambar <a name='fig3'>3</a>. Medan listrik di sekitar pelat berukurang berhingga $L \times L$ dan dua titik tempat oberservasi dilakukan yaitu titik $\rm P_1$ yang berjarak $d_1$ dari pelat dan titik $\rm P_2$ yang berjarak $d_2$ dari pelat.

Perhatikan arah garis-garis medan listrik di sekitar suatu pelat berhingga ukurannya dengan rapat muatan seragam $+\sigma$ dengan suatu daerah dekat pelat dan di tengah-tengah yang memiliki garis-garis medan tegak lurus dan nilai medan listrik relatif konstan. Pada jarak agak jauh dari pelat terlihat bahwa garis-garis medan listrik sudah melengkung yang berarti arah dan besarnya sudah tidak lagi tetap.

Dengan demikian agar hukum Gauss dapat diterapkan pada suatu pelat luas, permukaan Gauss harus dipilih sedemkian rupa pada daerah dengan

\begin{equation}\label{eqn:gaussian-surface-large-plate}
\frac{d}{L} < < 1,
\end{equation}

di mana $d$ yang dimaksud adalah $d_1$ pada Gambar [3](#fig3). Sedangkan $d_2$ pada gambar yang sama tidak memenuhi syarat pada Persamaan \eqref{eqn:gaussian-surface-large-plate}. Dengan syarat pada Persamaan \eqref{eqn:gaussian-surface-large-plate} akan dapat diperoleh fungsi medan listrik

\begin{equation}\label{eqn:electric-field-x-plane-positive}
\vec{E}_{+} = \left\\{
\begin{array}{cc}
\displaystyle -\frac{\sigma}{\varepsilon_0} \hat{x}, & x < x_1, \newline
\displaystyle \frac{\sigma}{\varepsilon_0} \hat{x}, & x_1 < x, \newline
\end{array}
\right.
\end{equation}

untuk Gambar [2](#fig2) (kiri) dan

\begin{equation}\label{eqn:electric-field-x-plane-negative}
\vec{E}_{-} = \left\\{
\begin{array}{cc}
\displaystyle \frac{\sigma}{\varepsilon_0} \hat{x}, & x < x_1, \newline
\displaystyle -\frac{\sigma}{\varepsilon_0} \hat{x}, & x_1 < x, \newline
\end{array}
\right.
\end{equation}

untuk Gambar [2](#fig2) (kanan). Indeks positif $+$ dan negatif $-$ pada kedua Persamaan \eqref{eqn:electric-field-x-plane-positive} dan \eqref{eqn:electric-field-x-plane-negative} menandakan tanda muatan dari rapat muatan seragamnya $\sigma$.


## gaussian surface
Terdapat dua bentuk permukaan Gauss yang sering digunakan, yaitu kotak dan silinder, di mana untuk permukaan terakhir alas dan tutupnya sejajar dengan permukaan pelat. Kedua permukaan ini akan bersifat sebagian tegak lurus dan sebagian sejajar pada medan listrik yang diberikan oleh Persamaan \eqref{eqn:electric-field-x-plane-positive} dan \eqref{eqn:electric-field-x-plane-negative}.


## exer
1. Mengapa $d_2$ pada Gambar [3](#fig3) tidak termasuk yang memenuhi Persamaan \eqref{eqn:gaussian-surface-large-plate}?
2. Mengapa tanda muatan pada rapat muatan permukaan $\sigma$ pada Persamaan \eqref{eqn:electric-field-x-plane-positive} tidak digunakan? Apa kaiatannya dengan Persamaan \eqref{eqn:electric-field-x-plane-negative}?


## note
1. <a name='r01'></a>Jon Pumplin, "Electric fields for simple geometries", PHY 232: Introductory Physics II, Spring 2000, url <https://web.pa.msu.edu/courses/2000fall/phy232/lectures/gausscond/simplegeoms.html> [20220207].
2. <a name='r02'></a>"Applications of Gauss's law (intermediate)", Khan Academy, 2022, url <https://www.khanacademy.org/science/in-in-class-12th-physics-india/in-in-electric-charges-and-field/x51bd77206da864f3:in-in-application-of-gauss-law/e/applications-of-gauss-s-law-intermediate> [20220207].
3. <a name='r03'></a>Carl Rod Nave, "Electric Field: Parallel Plates", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elesht.html#c2> [20220207].
4. <a name='r04'></a>Guest, "Using Gauss' Law To Find Capacitance", Blog moe.ron - APlusPhysics Community, 8 Mar 2011, url <https://aplusphysics.com/community/index.php?/blogs/entry/131-using-gauss-law-to-find-capacitance/> [20220207].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) bentuk garis-garis medan listriknya tidak lagi tegak lurus pada permukaan dan nila medan listriknya tidak lagi konstan; &nbsp;
2) Persamaan pertama diperuntukkan bagi $\sigma > 0$, sehingga bila digunakan $\sigma < 0$ pada persamaan ini akan menghasilkan persamaan kedua; &nbsp;
</ans>


{% comment %}
{% endcomment %}
