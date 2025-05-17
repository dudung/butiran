---
layout: post
authors: [viridi]
title: discrete charge dist 2d
permalink: pages/0372
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "electric field", "discrete charge distribution", "2d"]
date: 2022-01-16 11:53:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/37/2022-01-15-discrete-charge-dist-2d.md
twitter_username: 6unpnp
nodes: []
---
Medan listrik pada suatu titik amat akibat dua atau lebih muatan merupakan penjumlahan secara vektor dari medan listrik oleh masing-masing muatan pada titik tersebut [[1](#r01)]. Suatu bahan berjenis konduktor mengijinkan muatan bebas untuk bergerak di dalamnya [[2](#r02)] dan telah ditelaah bagaimana distribusi muatan diskrit tersebut pada berbagai bentuk konduktor dua-dimensi yang bersimetri, meliputi elips, hypotrochoid, dan bermacam poligon [[3](#r03)]. Di sini untuk sementara akan dibahas sistem dua dimensi untuk muatan diskrit yang terikat, tidak mudah bergerak, dan medan listrik yang dihasilkannya pada sebuah titik amat tertentu.


## electric field
Sebuah muatan titik $q_i$ yang berada pada posisi $\vec{r}_i$ akan meyebabkan medan listrik $\vec{E}_i$ berbentuk

\begin{equation}\label{eqn:electric-field-point-charge}
\vec{E}_i = k \frac{q_i}{|\vec{r} - \vec{r}_i|^3} \ (\vec{r} - \vec{r}_i),
\end{equation}

pada posisi titik amat $\vec{r}$. Untuk sistem 2d, yang sedang dibahas saat ini, baik vektor posisi muatan maupun vektor posisi titik amat akan memiliki komponen pada arah $x$ dan $y$.


## rectilinear grid
Grid rektilinier mirip dengan grid Kartesian, yang lebih fleksibel karena tidak harus berjarak spasi yang sama [[4](#r04)], untuk saat ini tetap dipiih berspasi sama untuk masing-masing $x$ dan $y$, akan tetapi tidak perlu sama antar $x$ dan $y$.

![]({{ site.baseurl }}/assets/img/0/37/0372-a.png) \
Gambar <a name='fig1'>1</a>. Beberapa muatan, $q_1$, $q_2$, $q_3$, dalam grid rektilinier, medan listrik yang dihasilkannya, $\vec{E}_1$, $\vec{E}_2$, $\vec{E}_1$, pada suatu titik amat $\rm P$ (atas) dan resultannya $\vec{E} _{\rm Total}$ (bawah).

Posisi muatan dan titik amat dapat dinyatakan dengan kelipatan dari $a$ pada arah $x$ dan $b$ pada arah $y$.

Tabel <a name='tab1'>1</a>. Koordinat titik dan vektor posisinya pada grid rektilinier.

Titik | $a$ | $b$ | $\vec{r}$
:-: | :-: | :-: | :-:
$q_1$ | $0$ | $5$ | $5b\vec{y}$
$q_2$ | $3$ | $4$ | $3a\vec{x} + 4b\vec{y}$
$q_3$ | $5$ | $2$ | $5a\vec{x} + 2b\vec{y}$
$\rm P$ | $3$ | $2$ | $3a\vec{x} + 2b\vec{y}$

Selanjutnya adalah menggunakan informasi posisi muatan-muatan dan titik amat dari Tabel [1](#tab1) pada Persamaan \eqref{eqn:electric-field-point-charge} untuk mendapatkan medan listrik pada titik amat $\rm P$ akibat salah satu muatan, yang kemudian ketiganya dijumlahkan untuk mendapatkan resultannya.


## other regular grids
Selain grid rektilinier, masih dalam jenis grid teratur atau terstruktur, terdapat grid segitiga dan heksagonal yang penentuan koordinatnya agak sedikit berbeda, menggunakan vektor satuan yang tidak saling tegak lurus [[5](#r05)].

![]({{ site.baseurl }}/assets/img/0/37/0372-b.png) \
Gambar <a name='fig2'>2</a>. Beberapa muatan, $q_1$, $q_2$, $q_3$, dalam grid heksagonal dengan vektor gridnya $\vec{a}$, $\vec{b}$, dan suatu titik amat.

Dari Gambar [2](#fig2) posisi-posisi ketiga muatan dan titik amat belum terlihat jelas, yang dapat diperoleh dengan menggunakan kedua vektor grid $\vec{a}$ dan $\vec{b}$ sebagaimana diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/37/0372-c.png) \
Gambar <a name='fig3'>3</a>. Koordinat ketiga muatan, $q_1$, $q_2$, $q_3$, dan titik amat dalam grid heksagonal dengan vektor gridnya $\vec{a}$, $\vec{b}$.

Pemilihan vektor kisi atau grid tidak unik [[6](#r06)], sehingga pendefinisian yang lain akan menghasilkan nilai koordinat berbeda. Informasi dari Gambar [3](#fig3) dapat disarikan dalam tabel berikut.

Tabel <a name='tab2'>2</a>. Koordinat titik dan vektor posisinya pada grid heksagonal.

Titik | $\vec{a}$ | $\vec{b}$ | $\vec{r}$
:-: | :-: | :-: | :-:
$q_1$ | $5$ | $5$ | $5\vec{a} + 5\vec{b}$
$q_2$ | $8$ | $5$ | $8\vec{a} + 5\vec{b}$
$q_3$ | $5$ | $1$ | $5\vec{a} + \vec{b}$
$\rm P$ | $7$ | $3$ | $7\vec{a} + 3\vec{b}$

Dengan menggunakan informasi dari Tabel [2](#tab2) dapat diperoleh vektor posisi untuk setiap titik muatan dan titik amat, yang kemudian akan digunakan pada Persamaan \eqref{eqn:electric-field-point-charge} untuk mendapatkan medan listrik pada titik amat $\rm P$ akibat salah satu muatan dari $q_1$, $q_2$, atau $q_3$.

![]({{ site.baseurl }}/assets/img/0/37/0372-d.png) \
Gambar <a name='fig4'>4</a>. Medan listrik $\vec{E}_1$, $\vec{E}_2$, $\vec{E}_3$, akibat muatan $q_1$, $q_2$, dan $q_3$ di titik amat $\rm P$ dan resultannya $\vec{E} _{\rm Total}$.

Setelah mendapatkan medan listrik akibat masing-masing muatan di titik amat $\rm P$, ketiga medan listrik tesebut dijumlahkan secara vektor untuk mendapatkan medan listrik totalnya.

### grid or lattice vectors
Vektor kisi menghubungkan dua titik kisi [[7](#r07)], dengan titik kisi adalah suatu titik perpotongan antara dua atau lebih garis grid dalam larik titik-titik yang berjarak teratur [[8](#r08)]. Kembali ke Gambar [2](#fig2) terdapat setidaknya tiga pasang vektor grid yang dapat digunakan, yang akan memberikan koordinat yang berbeda pada sistem grid heksagonal akan tetapi koordinat yang sama pada sistem koordinat Cartesiannya.

![]({{ site.baseurl }}/assets/img/0/37/0372-e.png) \
Gambar <a name='fig5'>5</a>. Grid heksagonal dan tiga pilihan untuk pasangan vektor grid yang berbeda dalam menyatakan titik $\rm A$ dari pusat koordinat $(0, 0)$.

Perbandingan ketig pasang vektor kisi dari Gambar [5](#fig5) diberikan pada tabel berikut ini.

Tabel <a name='tab3'>3</a>. Vektor grid heksagonal, koordinat heksagonal, dan vektor posisi dalam sistem koordinat Kartesian.

$\vec{a}/a$ | $\vec{b}/a$ | ${\rm A}$ | $\vec{r}/a$
:-: | :-: | :-: | :-:
$\hat{x}$ | $-\frac12\hat{x}+\frac12\sqrt{3}\hat{y}$ | $(6, 5)$ | $\frac52\hat{x}+\frac52\sqrt{3}\hat{y}$
$\hat{x}$ | $\frac12\hat{x}+\frac12\sqrt{3}\hat{y}$ | $(0, 5)$ | $\frac52\hat{x}+\frac52\sqrt{3}\hat{y}$
$\frac12\hat{x}+\frac12\sqrt{3}\hat{y}$ | $-\frac12\hat{x}+\frac12\sqrt{3}\hat{y}$ | $(5, 0)$ | $\frac52\hat{x}+\frac52\sqrt{3}\hat{y}$

Perhatikan kolom terakhir pada Tabel [3] yang memberikan posisi yang sama menurut koordinat Kartesian. Jadi walaupun vektor grid heksagonal tidak unik akan tetapi tetap memberikan koordinat yang sama.


## exer
1. Bagaimana bentuk $\vec{a}$ dan $\vec{b}$ pada grid hexagonal pada Gambar [2](#fig2)?
2. Apa metode penjumlahan vektor yang digunakan pada Gambar [1](#fig1)(atas) dan [4](#fig4)?
3. Tentukan koordinat titik $\rm B$ pada Gambar [5](#fig5) menurut masing-masing vektor grid heksagonalnya.


## note
1. <a name='r01'></a>Kip Ingram (Inst.), "Electric Field: Discrete & Continuous Charge Distributions", Study.com, 21 Dec 2021, url <https://study.com/academy/lesson/electric-field-discrete-continuous-charge-distributions.html> [20220115].
2. <a name='r02'></a>OpenStax College, "Conductors and Electric Fields in Static Equilibrium", Physics, Lumen Learning, url <https://courses.lumenlearning.com/physics/chapter/18-7-conductors-and-electric-fields-in-static-equilibrium/> [20220115].
3. <a name='r03'></a>Marko Kleine Berkenbusch, Isabelle Claus, Catherine Dunn, Leo P. Kadanoff, Maciej Nicewicz, Shankar C. Venkataramani, "Discrete Charges on a Two Dimensional Conductor", Journal of Statistical Physics [J Stat Phys], vol 116, no, p 1301–1358, Sep 2004, url <https://doi.org/10.1023/B:JOSS.0000041741.27244.ac>. [`PDF`](https://arxiv.org/abs/cond-mat/0310257v2)
4. <a name='r04'></a>"Rectilinear Grid", Data Analysis and Assessment Center, Department of Defense, High Performance Computing Modernization Program, 10 Dec 2020, url <https://daac.hpc.mil/gettingStarted/Rectilinear_Grid.html> [20220115].
5. <a name='r05'></a>"Grids" in Programming Challenges, Texts in Computer Science Springer, New York, 2003, p 268-290, url <https://doi.org/10.1007/0-387-22081-X_12>.
6. <a name='r06'></a>Wikipedia contributors, "Bravais lattice", Wikipedia, The Free Encyclopedia, 6 January 2022, 11:35 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1064066363> [20220115].
7. <a name='r07'></a>J. Evans, Timothy Grove (Insts.), "Lattice Geometry, Lattice Vectors, and Reciprocal Vectors", Structure of Earth Materials, MIT Open Courseware, Fall 2004, url <https://ocw.mit.edu/courses/earth-atmospheric-and-planetary-sciences/12-108-structure-of-earth-materials-fall-2004/lecture-notes/lec7.pdf> [20220116].
8. <a name='r08'></a>"Lattice point", AoPS Online, 2021, url <https://artofproblemsolving.com/wiki/index.php/Lattice_point> [20220116].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0372?src=hash&amp;ref_src=twsrc%5Etfw">#bug0372</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1482577166345056261?ref_src=twsrc%5Etfw">January 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field and source](0360.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\vec{a} = a\hat{x}$ dan $\vec{b} = -\frac12a\hat{x} + \frac12\sqrt{3}a\hat{y}$; &nbsp;
2) metode poligon; &nbsp;
3) $(5, 3)$, $(1, 3)$, $(4, -1)$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
