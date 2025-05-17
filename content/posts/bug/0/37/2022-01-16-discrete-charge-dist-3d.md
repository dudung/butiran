---
layout: post
authors: [viridi]
title: discrete charge dist 3d
permalink: pages/0373
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "electric field", "discrete charge distribution", "3d"]
date: 2022-01-16 21:52:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/37/2022-01-16-discrete-charge-dist-3d.md
twitter_username: 6unpnp
nodes: []
---
Dalam pembelajaran perhitungan medan listrik oleh sejumlah titik muatan dalam 3d, salah satu problemnya adalah sistem berbentuk sejumlah muatan yang terletak pada titik-titik sudut sebuah kubus [[1](#r01)]. Visualiasi medan listrik oleh beberapa muatan titik dalam 3d, juga permukaan ekipotensialnya, dapat digambarkan menggunakan software Maple 10 [[2](#r02)]. Dalam aplikasinya medan listrik dalam tiga dimensi menjadi penting sehingga perlu dihitung dan diukur di substation bertegangan tinggi [[3](#r03)] dan dimodelkan untuk membantu analisis pada sistem peringatan petir [[4](#r04)]. Untuk saat ini tiga muatan titik pada sudut-sudut suatu kotak dan kontribusinya pada suatu titik amat akan dibahas sebagai ilustrasi superposisi medan listrik [[5](#r05)], yang dalam hal ini bersumber dari tiga muatan titik. Sistem ini dapat diperluas menjadi bersumber dari $N$ muatan titik.


## rectangular block
Sebuah balok persegi panjang dengan panjang sisi-sisi $a$, $b$, dan $c$ merupakan bangun 3d untuk meletakkan tiga muatan titik seperti diberikan pada gambar berikut. 

![]({{ site.baseurl }}/assets/img/0/37/0373-a.png) \
Gambar <a name='fig1'>1</a>. Tiga muatan titik $q_1$, $q_2$, $q_3$, dan titik amat $\rm P$ pada titik-titik sudut suatu balok dengan panjang sisi-sisi $a$, $b$, dan $c$.

Untuk saat ini ketiga muatan pada Gambar [1](#fig1) dipilih bertanda positif, walaupun dengan menggunakan Persamaan \eqref{eqn:electric-field-point-charge} tanda muatan cukup digunakan saja, agar semua medan listriknya mengarah keluar dari sumber agar konsisten. Bila kemudian akan digunakan muatan bertanda negatif arah medan listriknya hanya perlu diubah sebaliknya.


## electric field
Pada posisi $\vec{r}_i$ terdapat sebuah muatan titik $q_i$ yang akan meyebabkan medan listrik $\vec{E}_i$ berbentuk

\begin{equation}\label{eqn:electric-field-point-charge}
\vec{E}_i = k \frac{q_i}{|\vec{r} - \vec{r}_i|^3} \ (\vec{r} - \vec{r}_i),
\end{equation}

pada posisi titik amat $\vec{r}$. Baik vektor posisi muatan titik maupun vektor posisi titik amat, keduanya akan memiliki komponen pada arah $x$, $y$ dan $z$.

### e1
Medan listrik oleh muatan $q_1$ diilustrasikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/37/0373-b.png) \
Gambar <a name='fig2'>2</a>. Medan listrik $\vec{E}_1$ akibat muatan titik $q_1$ pada titik amat $\rm P$.

Dari Gambar [2](#fig2) dapat diperoleh

\begin{equation}\label{eqn:q1-rel-pos}
\begin{array}{rcl}
\vec{r} - \vec{r}_1 & = & (a\hat{x} + c\hat{z}) - (c\hat{z}) \newline
& = & a\hat{x}, \newline
| \vec{r} - \vec{r}_1 | & = & a.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:q1-rel-pos} ke Persamaan \eqref{eqn:electric-field-point-charge} akan menghasilkan

\begin{equation}\label{eqn:q1-e-field}
\begin{array}{rcl}
\vec{E}_1 & = & \displaystyle k \frac{q_1}{|\vec{r} - \vec{r}_1|^3} \ (\vec{r} - \vec{r}_1) \newline
& = & \displaystyle k \frac{q_1}{a^3} \ (a\hat{x}) \newline
& = & \displaystyle \left( k \frac{q_1}{a^2} \right) \hat{x},
\end{array}
\end{equation}

yang merupakan medan listrik oleh muatan $q_1$.

### e2
Medan listrik oleh muatan $q_2$ diilustrasikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/37/0373-c.png) \
Gambar <a name='fig3'>3</a>. Medan listrik $\vec{E}_2$ akibat muatan titik $q_2$ pada titik amat $\rm P$.

Dari Gambar [3](#fig3) dapat diperoleh

\begin{equation}\label{eqn:q2-rel-pos}
\begin{array}{rcl}
\vec{r} - \vec{r}_2 & = & (a\hat{x} + c\hat{z}) - (b\hat{y} + c\hat{z}) \newline
& = & a\hat{x} - b\hat{y}, \newline
| \vec{r} - \vec{r}_2 | & = & (a^2 + b^2)^{1/2}.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:q2-rel-pos} ke Persamaan \eqref{eqn:electric-field-point-charge} akan menghasilkan

\begin{equation}\label{eqn:q2-e-field}
\begin{array}{rcl}
\vec{E}_2 & = & \displaystyle k \frac{q_2}{|\vec{r} - \vec{r}_2|^3} \ (\vec{r} - \vec{r}_2) \newline
& = & \displaystyle k \frac{q_2}{(a^2 + b^2)^{3/2}} \ (a\hat{x} - b\hat{y}) \newline
& = & \displaystyle k \frac{q_2}{a^2 + b^2} \ \left(\frac{a}{\sqrt{a^2 + b^2}} \hat{x} - \frac{b}{\sqrt{a^2 + b^2}} \hat{y} \right) \newline
& = & \displaystyle \left[ k \frac{aq_2}{(a^2 + b^2)^{3/2}} \right] \hat{x} - \left[ k \frac{bq_2}{(a^2 + b^2)^{3/2}} \right] \hat{y},
\end{array}
\end{equation}

yang merupakan medan listrik oleh muatan $q_2$.

### e3
Medan listrik oleh muatan $q_3$ diilustrasikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/37/0373-d.png) \
Gambar <a name='fig4'>4</a>. Medan listrik $\vec{E}_3$ akibat muatan titik $q_3$ pada titik amat $\rm P$.

Dari Gambar [4](#fig4) dapat diperoleh

\begin{equation}\label{eqn:q3-rel-pos}
\begin{array}{rcl}
\vec{r} - \vec{r}_3 & = & (a\hat{x} + c\hat{z}) - (b\hat{y}) \newline
& = & a\hat{x} - b\hat{y} + c\hat{z}, \newline
| \vec{r} - \vec{r}_3 | & = & (a^2 + b^2 + c^2)^{1/2}.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:q3-rel-pos} ke Persamaan \eqref{eqn:electric-field-point-charge} akan menghasilkan

\begin{equation}\label{eqn:q3-e-field}
\begin{array}{rcl}
\vec{E}_3 & = & \displaystyle k \frac{q_3}{|\vec{r} - \vec{r}_3|^3} \ (\vec{r} - \vec{r}_3) \newline
& = & \displaystyle k \frac{q_3}{(a^2 + b^2 + c^2)^{3/2}} \ (a\hat{x} - b\hat{y} + c\hat{z}) \newline
& = & \displaystyle k \frac{q_3}{a^2 + b^2 + c^2} \ \left( \frac{a}{\sqrt{a^2 + b^2 + c^2}} \hat{x} \right. \newline
&& \displaystyle \left. - \frac{b}{\sqrt{a^2 + b^2 + c^2}} \hat{y} + \frac{c}{\sqrt{a^2 + b^2 + c^2}} \hat{z} \right) \newline
& = & \displaystyle \left[ k \frac{aq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{x} \newline
&& \displaystyle - \left[ k \frac{bq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{y} \newline
&& \displaystyle + \left[ k \frac{cq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{z},
\end{array}
\end{equation}

yang merupakan medan listrik oleh muatan $q_1$.

### etotal
Medan listrik oleh ketiga muatan $q_1$, $q_2$, $q_3$ diilustrasikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/37/0373-e.png) \
Gambar <a name='fig5'>5</a>. Medan listrik $\vec{E} _{\rm Total}$ akibat muatan titik $q_1$, $q_2$, $q_3$ pada titik amat $\rm P$.

Dengan menjumlahkan Persamaan \eqref{eqn:q1-e-field}, \eqref{eqn:q2-e-field}, dan \eqref{eqn:q3-e-field} dapat diperoleh

\begin{equation}\label{eqn:total-e-field}
\begin{array}{rcl}
\vec{E} _{\rm Total} & = & \vec{E}_1 +  \vec{E}_2 +  \vec{E}_3 \newline
& = & \displaystyle \left( k \frac{q_1}{a^2} \right) \hat{x} \newline
&& \displaystyle + \left[ k \frac{aq_2}{(a^2 + b^2)^{3/2}} \right] \hat{x} - \left[ k \frac{bq_2}{(a^2 + b^2)^{3/2}} \right] \hat{y} \newline
&& \displaystyle + \left[ k \frac{aq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{x} \newline
&& \displaystyle - \left[ k \frac{bq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{y} \newline
&& \displaystyle + \left[ k \frac{cq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{z} \newline
& = & \displaystyle k \left[ \frac{aq_1}{(a^2)^{3/2}} + \frac{aq_2}{(a^2 + b^2)^{3/2}} + \frac{aq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{x} \newline
&& \displaystyle - k \left[ \frac{bq_2}{(a^2 + b^2)^{3/2}} + \frac{bq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{y} \newline
&& \displaystyle + k \left[ \frac{cq_3}{(a^2 + b^2 + c^2)^{3/2}} \right] \hat{z},
\end{array}
\end{equation}

yang merupakan medan listrik total $\vec{E} _{\rm Total}$ akibat ketiga muatan $q_1$, $q_2$, $q_3$.


## exer
1. Di baris ketiga dari bawah pada Persamaan \eqref{eqn:total-e-field}, mengapa suku pertama dalam kurung persegi dituliskan seperti itu dan tidak seperti pada baris kedua pada persamaan yang sama?
2. Dengan mengatur besar dan tanda ketiga muatan $q_1$, $q_2$, $q_3$, serta dimensi balok $a$, $b$, $c$, apakah mungkin diperoleh $\vec{E} _{\rm Total} = 0$ di titik amat $\rm P$?
3. Apa yang dimaksud dengan superposisi medan listrik?


## note
1. <a name='r01'></a>Admin, "A Cube Of Side A Has Point Charges Q Located At Each Of Its Vertices", BYJU'S, 3 Aug 2021, url <https://byjus.com/jee-questions/a-cube-of-side-a-has-point-charges-q-located-at-each-of-its-vertices/> [20220116].
2. <a name='r02'></a>Takao Takeuchi, "3D Equipotential and electric field lines due to point charges", Department of Mathematics and Physics, State University of New York at Alfred, Alfred, New York, 13 Sep 2006, url <https://www.maplesoft.com/applications/view.aspx?SID=4817&view=html> [20220116].
3. <a name='r03'></a>Sayed A. Ward, Samy M. Ghania, Essam M Shaalan, "Three-dimensional electric field calculation and measurements inside high voltage substations", 2011 Annual Report Conference on Electrical Insulation and Dielectric Phenomena (CEIDP), 16-19 October 2011, Cancun, Mexico, p 219-222, url <http://dx.doi.org/10.1109/CEIDP.2011.6232636>. [`PDF`](https://www.researchgate.net/publication/261396284)
4. <a name='r04'></a>Hong-yan Xing, Gui-xian He, Xin-yuan Ji, "Analysis on Electric Field Based on Three Dimensional Atmospheric Electric Field Apparatus", Journal of Electrical Engineering and Technology [J Electr Eng Technol], vol 13, no 4, p 1697-1704, Jul 2018, url <http://doi.org/10.5370/JEET.2018.13.4.1697>.
5. <a name='r05'></a>J Thomas, "Answer to 'Superposition Principle for Electric Fields'", Physics Stack Exchange, 27 Dec 2018, url <https://physics.stackexchange.com/a/450684/260719> [20220116].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0373?src=hash&amp;ref_src=twsrc%5Etfw">#bug0373</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1482726994089754624?ref_src=twsrc%5Etfw">January 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field and source](0360.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) untuk menujukkan keteraturan bentuk pembilang dan penyebut; &nbsp;
2) tidak; &nbsp;
3) medan pada suatu titik oleh banyak sumber muatan dapat diperoleh dengan menjumlahkan secara vektor medan akibat masing-masing sumber atau medan listrik akibat satu sumber tidak bergantung dengan medan listrik yang disebabkan oleh sumber lain; &nbsp;
</ans>


{% comment %}
{% endcomment %}
