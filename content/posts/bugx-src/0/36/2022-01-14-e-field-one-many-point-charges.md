---
layout: post
authors: [viridi]
title: e field one many point charges
permalink: pages/0361
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "electric field", "one", "many", "point charge"]
date: 2022-01-14 21:59:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/36/2022-01-14-e-field-one-many-point-charges.md
twitter_username: 6unpnp
nodes: []
---
Medan listrik oleh banyak muatan titik pada suatu titik amat merupakan penjumlahan secara vektor medan listrik oleh setiap muatan di titik tersebut [[1](#r01)], yang untuk sistem dua muatan titik amat dapat berada segaris dengan kedua muatan ataupun di luar garis yang menghubungkan kedua muatan [[2](#r02)]. Dengan menggunakan simulasi interaktif PhET total medan listrik pada suatu titik amat akibat banyak muatan dapat dengan mudah diilustrasikan [[3](#r03)].

## electric field due a point charge
Suatu titik muatan $q_i$ terletak pada posisi $\vec{r}_i$ akan memberikan medan listrik $\vec{E}_i$ pada posisi $\vec{r}$ dalam bentuk

\begin{equation}\label{eqn:electric-field-point-charge}
\vec{E}_i = k \frac{q_i}{|\vec{r} - \vec{r}_i|^3} \ (\vec{r} - \vec{r}_i),
\end{equation}

dengan $k = 8.987551787 \times 10^9 \ {\rm N \cdot m^2 / C^2}$ adalah konstanta Coulomb yang sering dipermudah untuk diingat dengan $k \approx 9 \times 10^9 \ {\rm N \cdot m^2 / C^2}$ [[4](#r04)].


## illustration of three charges
Dengan menggunakan simulasi PhET yang disediakan [[3](#r03)], medan listrik oleh tiga muatan titik berharga positif $\pm1 \ \{\rm nC}$ dapat digambarkan sebagai berikut ini. Grid kotak besar berukuran $50 \ {\rm cm}$ sementara kotak kecilnya $10 \ {\rm cm}$.

![]({{ site.baseurl }}/assets/img/0/36/0361-a.png) \
Gambar <a name="fig1">1</a>. Medan listrik oleh muatan positif: satu muatan berjarak $200\sqrt{2} \ {\rm cm}$ (kiri atas), satu muatan berjarak $200 \ {\rm cm}$ (kanan atas), dua muatan yang masing-masing berjarak $200\sqrt{2} \ {\rm cm}$ dan $200 \ {\rm cm}$ (kiri bawah), dan tiga muatan (kanan bawah).

![]({{ site.baseurl }}/assets/img/0/36/0361-b.png) \
Gambar <a name="fig2">2</a>. Medan listrik oleh muatan negatif: satu muatan berjarak $200\sqrt{2} \ {\rm cm}$ (kiri atas), satu muatan berjarak $200 \ {\rm cm}$ (kanan atas), dua muatan yang masing-masing berjarak $200\sqrt{2} \ {\rm cm}$ dan $200 \ {\rm cm}$ (kiri bawah), dan tiga muatan (kanan bawah).

Terlihat pada Gambar [1](#fig1) dan [2](#fig2) bahwa untuk tiga buah muatan yang bertanda sama dan terletak pada titik-titik bujur sangkar dan titik amat terdapat pada titik terakhir yang tersisa, medan listriknya memiliki besar yang sama akan tetapi dengan tanda yang berbeda.

![]({{ site.baseurl }}/assets/img/0/36/0361-c.png) \
Gambar <a name="fig3">3</a>. Medan listrik oleh muatan negatif dan positif: satu muatan negatif berjarak tertentu (kiri atas), satu muatan negatif berjarak tertentu dan satu muatan positif berjarak $200 \ {\rm cm}$ (kanan atas), satu muatan positif berjarak $200 \ {\rm cm}$ (kiri bawah), dan tiga muatan dengan jarak muatan positif dan negatif seperti sebelumnya (kanan bawah).

Dengan tiga muatan, dua muatan positif dan satu muatan negatif, pada titik amat dapat diperoleh medan listrik total yang bernilai nol. Ilustrasi sistem yang dimaksud diberikan pada Gambar [3](#fig3).


## calculation of one, two, three charges
Sistem-sistem yang telah diilustrasikan seperti pada Gambar [1](#fig1), [2](#fig2), dan [3](#fig3) akan dibahas secara kuantitatif melalui perhitungan. Titik amat terdapat pada pojok kanan bawah suatu bujur sangkar. Muatan pertama $q_1$ berada di sebelah atas titik amat dan terletak pada titik sudut kanan atas bujur sangkar, muatan kedua $q_2$ di berada sepanjang diagonal bujur sangkar yang menuju titik amat, dan muatan ketiga $q_3$ berada di sebelah kanan titik amat dan terletak pada titik sudut kiri bawah bujur sangkar. Titik-titik sudut bujur sangkar diberi nama $\rm A$, $\rm B$, $\rm C$, dan $\rm D$ mulai dari titik kanan atas bujur sangkar dan berputar berlawanan arah dengan arah putar jarum jam, seperti diberikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/36/0361-d.png) \
Gambar <a name="fig4">4</a>. (a) Bujur sangkar $\rm ABCD$ dengan sisi $l$, (b) muatan $q_1$ dan medan listrik $\vec{E}_1$ yang disebabkannya pada titik amat $\rm D$, (c) muatan $q_3$ dan medan listrik $\vec{E}_3$ yang disebabkannya pada titik amat $\rm D$, dan (d) muatan $q_2$ dan medan listrik $\vec{E}_2$ yang disebabkannya pada titik amat $\rm D$.

Muatan pada Gambar [4](#fig4) belum bertanda karena ingin diperoleh perumusan yang umum sehingga dapat mengakomodasi baik muatan positif dan muatan negatif. Juga untuk jarak $q_2$ dari titik amat $\rm D$ yang masih bersifat umum, sehingga untuk $q_2$ terletak pada titik $\rm B$ diperlukan $h = l\sqrt{2}$.

### point charges coordinates
Dengan menggunakan sistem koordinat pada Gambar [4](#fig4)(a) dapat diperoleh tabel berikut ini.

Tabel <a name='tab1'>1</a>. Keempat titik bujur sangkar $\rm ABCD$ dan peruntukannya.

Titik | $x$ | $y$ | Peruntukkan
:-: | :-: | :-: | :-:
$\rm A$ | $l$ | $l$ | $q_1$
$\rm B$ | $0$ | $l$ | $-$, $q_2$
$\rm C$ | $0$ | $0$ | $q_3$
$\rm D$ | $l$ | $0$ | Titik amat

Perhatikan bahwa titik $B$ belum tentu untuk muatan $q_2$ karena bisa saja $q_2$ hanya terdapat pada diagonal yang $\rm BD$ dan belum mencapai titik $\rm B$.

Tabel <a name='tab2'>2</a>. Ketiga muatan dan posisinya.

Muatan | $x$ | $y$ 
:-: | :-: | :-:
$q_1$ | $l$ | $l$
$q_2$ | $l - \frac12\sqrt{2}h$ | $\frac12\sqrt{2}h$
$q_3$ | $0$ | $0$

Perhatikan bahwa saat $h = \sqrt2l$ posisi muatan $q_2$ akan berada padaa titik $\rm B$.

### electric field due to q1
Dengan menggunakan informasi dari Tabel [1](#tab1) dan [2](#tab2) dapat diperoleh

\begin{equation}\label{eqn:q1-relative-position}
\begin{array}{rcl}
\vec{r} - \vec{r}_1 & = & (l\hat{x} + 0\hat{y}) - (l\hat{x} + l\hat{y}) \newline
& = & -l\hat{y}, \newline
|\vec{r} - \vec{r}_1| & = & l,
\end{array}
\end{equation}

sehingga akan diperoleh

\begin{equation}\label{eqn:q1-electric-field}
\begin{array}{rcl}
\vec{E}_1 & = & \displaystyle k \frac{q_1}{|\vec{r} - \vec{r}_1|^3} \ (\vec{r} - \vec{r}_1) \newline
& = & \displaystyle k \frac{q_1}{l^3} \ (-l\hat{y}) \newline
& = & \displaystyle k \frac{q_1}{l^2} \ (-\hat{y})
\end{array}
\end{equation}

saat menerapkan Persamaan \eqref{eqn:electric-field-point-charge}.

### electric field due to q3
Dengan menggunakan informasi dari Tabel [1](#tab1) dan [2](#tab2) dapat diperoleh

\begin{equation}\label{eqn:q3-relative-position}
\begin{array}{rcl}
\vec{r} - \vec{r}_3 & = & (l\hat{x} + 0\hat{y}) - (0\hat{x} + 0\hat{y}) \newline
& = & l\hat{x}, \newline
|\vec{r} - \vec{r}_3| & = & l,
\end{array}
\end{equation}

sehingga akan diperoleh

\begin{equation}\label{eqn:q3-electric-field}
\begin{array}{rcl}
\vec{E}_3 & = & \displaystyle k \frac{q_3}{|\vec{r} - \vec{r}_3|^3} \ (\vec{r} - \vec{r}_3) \newline
& = & \displaystyle k \frac{q_3}{l^3} \ (l\hat{x}) \newline
& = & \displaystyle k \frac{q_3}{l^2} \ (\hat{x})
\end{array}
\end{equation}

saat menerapkan Persamaan \eqref{eqn:electric-field-point-charge}.

### electric field due to q2
Dengan menggunakan informasi dari Tabel [1](#tab1) dan [2](#tab2) dapat diperoleh

\begin{equation}\label{eqn:q2-relative-position}
\begin{array}{rcl}
\vec{r} - \vec{r}_2 & = & (l\hat{x} + 0\hat{y}) - [(l - \frac12\sqrt{2}h) \hat{x} + \frac12\sqrt{2}h\hat{y}] \newline
& = & \frac12\sqrt{2}h\hat{x} - \frac12\sqrt{2}h\hat{y}, \newline
|\vec{r} - \vec{r}_2| & = & h,
\end{array}
\end{equation}

sehingga akan diperoleh

\begin{equation}\label{eqn:q2-electric-field}
\begin{array}{rcl}
\vec{E}_2 & = & \displaystyle k \frac{q_2}{|\vec{r} - \vec{r}_2|^3} \ (\vec{r} - \vec{r}_2) \newline
& = & \displaystyle k \frac{q_2}{h^3} \ (\tfrac12\sqrt{2}h\hat{x} - \tfrac12\sqrt{2}h\hat{y}) \newline
& = & \displaystyle k \frac{q_2}{h^2} \ (\tfrac12\sqrt{2}\hat{x} - \tfrac12\sqrt{2}\hat{y})
\end{array}
\end{equation}

saat menerapkan Persamaan \eqref{eqn:electric-field-point-charge}.

### electric field due to q1, q2
Untuk mencari medan listrik akibat muatan $q_1$ dan $q_2$ di titik amat $\rm D$ dilakukan penjumlahan vektor untuk medan listrik $\vec{E}_1$ dari Persamaan \eqref{eqn:q1-electric-field} dan medan listrik $\vec{E}_2$ dari Persamaan \eqref{eqn:q2-electric-field} sehingga dapat diperoleh

\begin{equation}\label{electric-field-e1-e2}
\begin{array}{rcl}
\vec{E}_{1+2} & = & \vec{E}_1 + \vec{E}_2 \newline
& = & \displaystyle k \frac{q_1}{l^2} \ (-\hat{y}) + k \frac{q_2}{h^2} \ (\tfrac12\sqrt{2}\hat{x} - \tfrac12\sqrt{2}\hat{y}) \newline
& = & \displaystyle k \left( \frac{q_2}{h^2} \ \tfrac12\sqrt{2} \right) \hat{x} + k \left( - \frac{q_1}{l^2} - \frac{q_2}{h^2} \ \tfrac12\sqrt{2} \right) \hat{y}
\end{array}
\end{equation}

yang merupakan hasilnya.

### electric field due to q2, q3
Untuk mencari medan listrik akibat muatan $q_2$ dan $q_3$ di titik amat $\rm D$ dilakukan penjumlahan vektor untuk medan listrik $\vec{E}_2$ dari Persamaan \eqref{eqn:q2-electric-field} dan medan listrik $\vec{E}_3$ dari Persamaan \eqref{eqn:q3-electric-field} sehingga dapat diperoleh

\begin{equation}\label{electric-field-e2-e3}
\begin{array}{rcl}
\vec{E}_{2+3} & = & \vec{E}_2 + \vec{E}_3 \newline
& = & \displaystyle k \frac{q_2}{h^2} \ (\tfrac12\sqrt{2}\hat{x} - \tfrac12\sqrt{2}\hat{y}) + k \frac{q_3}{l^2} \ (\hat{x}) \newline
& = & \displaystyle k \left( \frac{q_2}{h^2} \ \tfrac12\sqrt{2} + \frac{q_3}{l^2} \right) \hat{x} + k \left( - \frac{q_2}{h^2} \ \tfrac12\sqrt{2} \right) \hat{y}
\end{array}
\end{equation}

yang merupakan hasilnya.

### electric field due to q1, q3
Untuk mencari medan listrik akibat muatan $q_1$ dan $q_3$ di titik amat $\rm D$ dilakukan penjumlahan vektor untuk medan listrik $\vec{E}_1$ dari Persamaan \eqref{eqn:q1-electric-field} dan medan listrik $\vec{E}_3$ dari Persamaan \eqref{eqn:q3-electric-field} sehingga dapat diperoleh

\begin{equation}\label{electric-field-e1-e3}
\begin{array}{rcl}
\vec{E}_{1+3} & = & \vec{E}_1 + \vec{E}_3 \newline
& = & \displaystyle k \frac{q_1}{l^2} \ (-\hat{y}) + k \frac{q_3}{l^2} \ (\hat{x}) \newline
& = & \displaystyle k \left( -\frac{q_1}{l^2} \right) \hat{y} + k \left( \frac{q_3}{l^2} \right) \hat{x}
\end{array}
\end{equation}

yang merupakan hasilnya.

### electric field due to q1, q2, q3
Untuk mencari medan listrik akibat muatan $q_1$, $q_2$, dan $q_3$ di titik amat $\rm D$ dilakukan penjumlahan vektor untuk medan listrik $\vec{E}_1$ dari Persamaan \eqref{eqn:q1-electric-field}, medan listrik $\vec{E}_2$ dari Persamaan \eqref{eqn:q2-electric-field} dan medan listrik $\vec{E}_3$ dari Persamaan \eqref{eqn:q3-electric-field} sehingga dapat diperoleh

\begin{equation}\label{electric-field-e1-e2-e3}
\begin{array}{rcl}
\vec{E}_{1+2+3} & = & \vec{E}_1 + \vec{E}_2 + \vec{E}_3 \newline
& = & \displaystyle k \frac{q_1}{l^2} \ (-\hat{y}) + k \frac{q_2}{h^2} \ (\tfrac12\sqrt{2}\hat{x} - \tfrac12\sqrt{2}\hat{y}) + k \frac{q_3}{l^2} \ (\hat{x}) \newline
& = & \displaystyle k \left( \frac{q_2}{h^2} \ \tfrac12\sqrt{2} + \frac{q_3}{l^2} \right) \hat{x} + k \left( -\frac{q_1}{l^2} - \frac{q_2}{h^2} \ \tfrac12\sqrt{2} \right) \hat{y}
\end{array}
\end{equation}

yang merupakan hasilnya.


## exer
1. Dari iustrasi yang diberikan pada Gambar [1](#fig1) dan [2](#fig2), bagaimana dapat menyimpullkan bahwa resultan medan listrik akibat ketiga muatan bernilai sama besarnya?
2. Tentukanlah jarak muatan negatif terhadap titik amat pada Gambar [3](#fig3).
3. Terkait dengan pertanyaan sebelumnya apa variabel yang menyatakan jarak titik amat terhadap muatan negatif? Bagaimana memperolehnya?


## note
1. <a name='r01'></a>Carl Rod Nave, "Multiple Point Charges", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/mulpoi.html#c2> [20211214].
2. <a name='r02'></a>Sam A. Hill, "Field of Multiple Point Charges", An Introduction to Electricity & Magnetism, url url <https://physics.nfshost.com/textbook/04-ElectricFields/03-MultipleCharges.php> [20220114].
3. <a name='r03'></a>Gregg Wolfe, Erika Gasper, John Stoke, Julie Kretchman, David Anderson, Nathan Czuba, Sudhi Oberoi, Liza Pujji, Irina Lyublinskaya, Douglas Ingram, "College Physics for AP® Courses", OpenStax, Houston, Texas, 12 Aug 2015, url <https://openstax.org/books/college-physics-ap-courses/pages/18-6-electric-field-lines-multiple-charges> [20220114].
4. <a name='r04'></a>ParalynxEngineering.com, “Coulomb’s Constant Explained”, Paralynx Engineering Inc., 1 Nov 2016, url https://www.paralynxengineering.com/coulombs-constant-explained.shtml [20220114].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0361?src=hash&amp;ref_src=twsrc%5Etfw">#bug0361</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1482003516998975489?ref_src=twsrc%5Etfw">January 14, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electrostatic force](0351.html) &bull; [electric field](0352.html) &bull;[electric potential](0353.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) panjang panah medan listrik; &nbsp;
2) sekitar $113 \ {\rm cm}$; &nbsp;
3) $h$ pada Gambar 4, diperoleh dari $\vec{E}_{1+2+3} = 0$ dengan tanda muatan seperti pada Gambar 3; &nbsp;
</ans>


{% comment %}
{% endcomment %}
