---
layout: post
authors: [viridi]
title: line charge e field beyond
permalink: pages/0341 
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "charge distribution", "continue", "line charge", "electric field", "beyond wire end"]
date: 2022-01-07 08:03:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/34/2022-01-06-line-charge-e-field-beyond.md
twitter_username: 6unpnp
nodes: []
---
Medan listrik oleh muatan garis, yang umumnya berbentuk kawat atau batang lurus, dengan rapat muatan seragam umumnya ingin dihitung di sisi kawat atau batang pada jarak tertentu terhadap batang [[1](#r01)], yang untuk kawat berhingga dapat dinyatakan dengan koordinat posisi [[2](#r02)] ataupun sudut [[3](#r03)], yang pemilihan arah koordinatnya kadang masih tidak konsisten. Selain itu terdapat pula posisi lain, yaitu pada jarak tertentuk dari ujung kawat dan menerus dari panjang kawat [[4](#r04)], yang penurunannya agak sedikit berbeda. Kedua kelompok kasus ini dapat diperoleh bila pada awal perumusannya medan listrik dihitung pada posisi jauh di luar sisi panjang kawat, yang dapat memberikan gambaran lebih umum, akan tetapi sering diabaikan atau dibahas dengan tidak lengkap pada banyak buku teks [[5](#r05)].


## electric field
Elemen muatan $dq$, pembentuk suatu distribusi muatan, yang terdapat pada posisi $\vec{r}_q$ akan menyebabkan elemen medan listrik $d\vec{E}$ pada posisi $\vec{r}$ dalam bentuk

\begin{equation}\label{eqn:efield-charge-distribution}
d\vec{E}_q = k \ \frac{dq}{| \vec{r} - \vec{r}_q  |^3} \ (\vec{r} - \vec{r}_q).
\end{equation}

Hasil integral dari Persamaan \eqref{eqn:efield-charge-distribution} akan memberikan medan listrik $\vec{E}_q$ pada posisi $\vec{r}$ akibat distribusi muatan tersebut. Untuk muatan garis elemen muatannya

\begin{equation}\label{eqn:charge-element}
dq = \lambda dl,
\end{equation}

dengan $\lambda$ adalah rapat muatan liinier, yang di sini akan dibatasi bernilai konstan atau $\lambda \ne \lambda(l)$.


## a distance from an end
Medan listrik dapat dihitung pula pada suatu jarak tertentuk dari salah satu ujung, yang posisinya merupakan garis terusan dari muatan garis. Untuk pada jarak $B$ di sebelah kanan mautan garis dengan panjang $L$ ilustrasinya diberikan pada Gambar [1](#fig1) berikut ini, dengan $x_1$ dapat bernilai sembarang, $x_2 = x_1 + L$, dan $x_3 = x_2 + B$.

![]({{ site.baseurl}}/assets/img/0/34/0341-a.png) \
Gambar <a name="fig1">1</a>. Elemen muatan $dq$ memberikan elemen medan lisrik $d\vec{E}$ pada suatu titik berjarak $B$ dari ujung kanan suatu mautan garis dengan rapat muatan linier $\lambda$.

Dengan menggunakan informasi dari Gambar [1](#fig1) dan paragraf sebelumnya dapat diperoleh

\begin{equation}\label{eqn:relative-position}
\begin{array}{rcl}
\vec{r} - \vec{r}_q & = & [(x_1 + L + B) \ \hat{x}] - (x \ \hat{x}) \newline
& = & [(x_1 + L + B) - x] \ \hat{x}, \newline
| \vec{r} - \vec{r}_q | & = & | (x_1 + L + B) - x |.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:charge-element} dan \eqref{eqn:relative-position} ke Persamaan \eqref{eqn:efield-charge-distribution} akan memberikan

\begin{equation}\label{eqn:dE-distance-one-end}
\begin{array}{rcl}
d\vec{E}_q & = & \displaystyle k \ \frac{dq}{| \vec{r} - \vec{r}_q |^3} \ (\vec{r} - \vec{r}_q) \newline
& = & \displaystyle k \ \frac{dq}{| \vec{r} - \vec{r}_q |^2} \ \frac{(\vec{r} - \vec{r}_q)}{| \vec{r} - \vec{r}_q |} \newline
& = & \displaystyle k \ \frac{dq}{( \vec{r} - \vec{r}_q )^2} \ \hat{x} \newline
& = & \displaystyle k \ \frac{\lambda dx}{[(x_1 + L + B) - x]^2} \ \hat{x}, \newline
\vec{E}_q & = & \displaystyle (\hat{x} k\lambda) \int \frac{dx}{[(x_1 + L + B) - x]^2},
\end{array}
\end{equation}

yang merupakan persamaan yang harus dipecahkan untuk mendapatkan medan listrik di titik $\rm P$ akibat distribusi muatan yang membentang dari $x = x_1$ sampai $x = x_2$. Ilustrasi batas-batas integral ini diberikan pada Gambar [2](#fig2).

![]({{ site.baseurl}}/assets/img/0/34/0341-b.png) \
Gambar <a name="fig2">2</a>. Batas bawah dan batas atas integral untuk mendapatkan medan listrik di titik $\rm P$.

Bentuk integral tak-tentu dan tertentu dari Persamaan \eqref{eqn:dE-distance-one-end} adalah

\begin{equation}\label{eqn:E-distance-one-end-solution}
\begin{array}{rcl}
\vec{E}_q & = & \displaystyle \frac{k\lambda}{(x_1 + L + B) - x} \ \hat{x}, \newline
\vec{E}_q ({\rm P}) & = & \displaystyle \left[ \frac{k\lambda}{(x_1 + L + B) - x} \right] _{x = x_1} ^{x_1 + L} \ \hat{x} \newline
& = & \displaystyle k\lambda \left( \frac{1}{B} - \frac{1}{L + B} \right) \ \hat{x} \newline
& = & \displaystyle k\lambda \left[ \frac{L}{B(L + B)} \right] \ \hat{x}.
\end{array}
\end{equation}

Persamaan \eqre{eqn:E-distance-one-end-solution} dapat diperiksa dengan mengamati medan listik pada jarak $B > > L$ atau ukuran muatan garis jauh lebih kecil dari titik pengamatan yang akan membuat $B(L+B) \approx B^2$ sehingga diperoleh

\begin{equation}\label{eqn:E-distance-one-end-solution-from-a-far}
\begin{array}{rcl}
\vec{E}_q ({\rm P}) & = & \displaystyle k \left( \frac{\lambda L}{B^2} \right) \ \hat{x} \newline
& = &  \displaystyle k \frac{Q}{B^2} \ \hat{x},
\end{array}
\end{equation}

yang merupakan medan listrik oleh sebuah muatan titik.


## beyond line charge
Pada suatu posisi $\vec{r}$ yang berada di luar sisi muatan garis, elemen muatan $dq$ penyebab elemen medan listrik $d\vec{E}_q$ diilustrasikan pada Gambar [3](#fig3) berikut ini, yang merupakan bentuk yang lebih umum dari sistem yang diberikan pada Gambar [1](#fig1) sebelumnya. Sistem pada Gambar [3](#fig3) ini bila digunakan $R = 1$ akan menjadi sistem pada Gambar [1](#fig1). Pada gambar di bawah ini $x_1 = x_0$, lalu pada kedua garis vertikal lainnya berturut-turut adalah $x_2$ dan $x_3$ seperti pada Gambar [1](#fig1).

![]({{ site.baseurl}}/assets/img/0/34/0341-c.png) \
Gambar <a name="fig3">3</a>. Elemen medan listrik pada jarak tegak lurus $R$ dan jarak sejajar $B$ dari ujung kanan suatu muatan garis dengan rapat muatan linier $\lambda$.

Dengan informasi dari Gambar [3](#fig3) dan paragraf sebelumnya dapat diperoleh

\begin{equation}\label{eqn:relative-position-beyond}
\begin{array}{rcl}
\vec{r} - \vec{r}_q & = & (A \ \hat{x} + R \hat{y}) - (x \ \hat{x}) \newline
& = & (A - x) \ \hat{x} + R \ \hat{y}, \newline
| \vec{r} - \vec{r}_q | & = & \sqrt{(A - x)^2 + R^2},
\end{array}
\end{equation}

dengan $A = x_1 + L + B$. Selanjutnya, substitusi Persamaan \eqref{eqn:charge-element} dan \eqref{eqn:relative-position-beyond} ke Persamaan \eqref{eqn:efield-charge-distribution} akan memberikan

\begin{equation}\label{eqn:dE-distance-beyond}
\begin{array}{rcl}
d\vec{E}_q & = & \displaystyle k \ \frac{dq}{| \vec{r} - \vec{r}_q |^3} \ (\vec{r} - \vec{r}_q) \newline
& = & \displaystyle k \ \frac{\lambda \ dx}{[ (A - x)^2 + R^2 ]^{3/2}} \ [(A - x) \ \hat{x} + R \ \hat{y}], \newline
& = & dE _{qx} \ \hat{x} + dE _{qy} \ \hat{y},
\end{array}
\end{equation}

dengan

\begin{equation}\label{eqn:dEx-distance-beyond}
\begin{array}{rcl}
dE _{qx} & = & \displaystyle k\lambda \ \frac{(A - x) \ dx}{[ (A - x)^2 + R^2 ]^{3/2}}, \newline 
E _{qx} & = & \displaystyle k\lambda \int \frac{(A - x) \ dx}{[ (A - x)^2 + R^2 ]^{3/2}}
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:dEy-distance-beyond}
\begin{array}{rcl}
d\vec{E} _{qy} & = & \displaystyle k \ \frac{R \lambda \ dx}{[ (A - x)^2 + R^2 ]^{3/2}}, \newline
\vec{E} _{qy} & = & \displaystyle k R \lambda \int \frac{dx}{[ (A - x)^2 + R^2 ]^{3/2}}.
\end{array}
\end{equation}

Baris terakhir dari Persamaan \eqref{eqn:dEx-distance-beyond} dan \eqref{eqn:dEy-distance-beyond} perlu dipecahkan bentuk integralnya. Batas-batas integralnya adalah dari $x_1$ sampai $x_2$ atau dalam bentuk sudut seperti pada Gambar [4](#fig4). Terdapat hubungan

\begin{equation}\label{eqn:R-(A-x)-ctg-theta}
R = (A - x) \cot \theta
\end{equation}

yang dapat digunakan untuk memecahkan kedua integral tersebut.

![]({{ site.baseurl}}/assets/img/0/34/0341-d.png) \
Gambar <a name="fig4">4</a>. Batas bawah dan atas integral untuk mendapatkan medan listrik di titik $\rm P$ akibat distribusi muatan linier yang membentang dari $x = x_1$ sampai $x = x_2$.

Bentuk integral tak-tentu dan tertentu dari Persamaan \eqref{eqn:dEx-distance-beyond} dan \eqref{eqn:dEy-distance-beyond}, dengan $A - x_1 = L + B$ dan $A - x_ 2 = B$, adalah

\begin{equation}\label{eqn:Ex-distance-beyond-solution}
\begin{array}{rcl}
E _{qx} & = & \displaystyle k\lambda \int \frac{(A - x) \ dx}{[ (A - x)^2 + R^2 ]^{3/2}} \newline
& = & \displaystyle \frac{k\lambda}{[ (A - x)^2 + R^2 ]^{1/2}} + C, \newline
E _{qx}({\rm P}) & = & \displaystyle k\lambda \left( \frac{1}{\sqrt{B^2 + R^2}} - \frac{1}{\sqrt{(L + B)^2 + R^2}} \right)
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:Ey-distance-beyond-solution}
\begin{array}{rcl}
E _{qy} & = & \displaystyle k R \lambda \int \frac{dx}{[ (A - x)^2 + R^2 ]^{3/2}} \newline
& = & \displaystyle -\frac{k \lambda}{R} \frac{(A - x)}{\sqrt{(A - x)^2 + R^2}} + C, \newline
E _{qy}({\rm P}) & = & \displaystyle -\frac{k \lambda}{R} \left( \frac{B}{\sqrt{B^2 + R^2}} - \frac{L + B}{\sqrt{(L + B)^2 + R^2}} \right).
\end{array}
\end{equation}

Untuk memeriksa hasil akhirnya, digunakan $R = 0$ yang akan memberikan

$$
E _{qx}({\rm P}) = k\lambda \left( \frac{1}{B} - \frac{1}{L + B} \right)
$$

dan

$$
E _{qy}({\rm P}) = 0,
$$

yang cocok dengan kasus sebelumnya seperti ditunjukkan oleh Persamaan \eqref{eqn:E-distance-one-end-solution}. Dengan demikian dapat dituliskan

\begin{equation}\label{eqn:E-distance-beyond-solution}
\begin{array}{rcl}
\vec{E} _{qx} & = & \displaystyle k\lambda \left( \frac{1}{\sqrt{B^2 + R^2}} - \frac{1}{\sqrt{(L + B)^2 + R^2}} \right) \hat{x} \newline
&&  \displaystyle - \frac{k \lambda}{R} \left( \frac{B}{\sqrt{B^2 + R^2}} - \frac{L + B}{\sqrt{(L + B)^2 + R^2}} \right) \hat{y},
\end{array}
\end{equation}

merupakan solusi untuk sistem ini yang merupakan bentuk yang lebih umum dari Persamaan \eqref{eqn:E-distance-one-end-solution}.


## exer
1. Perhatikan Persamaan \eqref{eqn:Ey-distance-beyond-solution} saat digunakan $R = 0$. Bagaimana dengan suku $R^{-1}$ di depannya?


## note
1. <a name='r01'></a>Carl R. Nave, "Electric Field of Line Charge", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elelin.html> [20220106].
2. <a name='r02'></a>Floris, JosephSanders (ed.), "Answer to 'Electric field due to a finite line charge'", Physics Stack Exchange, 25 Apr 2015, 1 Oct 2021 (edited), url <https://physics.stackexchange.com/a/178386> [20210106].
3. <a name='r03'></a>Shashank, Vishnu (ed.), "Answer to 'Electric field due to a finite line charge'", Physics Stack Exchange, 26 Apr 2015, 3 May 2020 (edited), url <https://physics.stackexchange.com/a/178460> [20210106].
4. <a name='r04'></a>bhdmia, "Field at End of Line of Charge 2", Physics Forums, 21 Jan 2017, url https://www.physicsforums.com/threads/electric-field-at-the-end-of-a-line-of-charge.901069 [20220106].
5. <a name='r05'></a>Robert J. Rowley, "Finite line of charge", American Journal of Physics [Am J Phys], vol 74, no 12, p 1120-1125, Dec 2006, url <https://doi.org/10.1119/1.2348889>.

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0341?src=hash&amp;ref_src=twsrc%5Etfw">#bug0341</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1480399687710511104?ref_src=twsrc%5Etfw">January 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field](0282.html) &bull; [charge distribution](0283.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) pindahkan ke dalam kurang sehingga sesuatu kurang sesuatu sama dengan nol; &nbsp;
</ans>


{% comment %}
{% endcomment %}
