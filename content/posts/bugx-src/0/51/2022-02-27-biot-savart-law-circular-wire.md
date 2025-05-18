---
layout: post
authors: [viridi]
title: biot-savart law circular wire
permalink: pages/0512
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["biot-savart law", "electric current", "magnetic field", "circular wire"]
date: 2022-02-27 17:45:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/51/2022-02-27-biot-savart-law-circular-wire.md
twitter_username: 6unpnp
nodes: []
youtube: nvmaFYYnteI
---
Medan magnetik oleh kawat berbentuk busur lingkaran berarus dapat diperoleh dengan menggunakan hukum Biot-Savart [[1](#r01)], sedangkan untuk sistem ideal solenodia dan toroida dapat menggunakan hukum Ampere [[2](#r02)].


## the law
Elemen arus listrik yang mengalir pada sebuah kawat $Id\vec{l}$ akan memberikan elemen medan magnetik $d\vec{B}$ pada posisi $\vec{r}$ dari kawat yang diberikan oleh hukum Biot-Savart

\begin{equation}\label{eqn:biot-savart-law}
d\vec{B} = \frac{\mu_0}{4\pi} \frac{Id\vec{l} \times \vec{r}}{r^3},
\end{equation}

seperti digambarkan berikut ini.

![]({{ site.baseurl}}/assets/img/0/51/0512-a.png) \
Gambar <a name='fig1'>1</a>. Elemen medan magnetik $d\vec{B}$ yang disebabkan oleh elemen arus $Id\vec{l}$ pada titik amat yang terletap pada posisi relatif $\vec{r}$ terhadap kawat berarus.

Kawat berarus dapat berbentuk sembarang kurva. Bentuk yang umum adalah garis lurus dan busur lingkaran.


## application
Di sini akan diterapkan hukum Biot-Savart untuk kawat berbentuk busur lingkaran yang merupakan bentuk yang lebih umum dari bentuk lingkaran.

### arc wire
Agar hukum Biot-Savart dapat diterapkan dengan mudah Gambar [1](#fig1) perlu diperjelas dengan elemen integral untuk $dl = Rd\theta$ seperti pada gambar berikut ini.

![]({{ site.baseurl}}/assets/img/0/51/0512-b.png) \
Gambar <a name='fig2'>2</a>. Elemen medan magnetik $d\vec{B}$ pada posisi relatif $\vec{r}$ dari kawat dengan elemen arus $Id\vec{l}$ dengan elemen panjang kawat adalah $Rd\theta$.

Dari Gambar [2](#fig2) dapat diperoleh elemen medan magnetik $d\vec{B}$ ($\color{#0b5}{\blacksquare}$) pada titik di sepanjang sumbu $z$ yang disebabkan oleh elemen arus pada kawat $Id\vec{l}$ ($\color{#f94}{\blacksquare}$). Selain itu keseluruhan elemen medan magnetik ($\color{#0b5}{\blacksquare}$ dan $\color{#cda}{\blacksquare}$) akibat elemen arus ($\color{#f94}{\blacksquare}$) juga digambarkan untuk kembali mengingatkan mengenai aplikasi dari aturan tangan kanan. Untuk titik pengamatan di sepanjang sumbu $z$ hanya $d\vec{B}$ yang berwarna hijau lebih gelap ($\color{#0b5}{\blacksquare}$) yang berperan.

Pada koordinat silinder dapat diperoleh

\begin{equation}\label{eqn:cylindrical-coordinate-dl}
d\vec{l} = Rd\theta \ \hat{\theta}
\end{equation}

seperti diberikan pada Gambar [2](#fig2). Dan dari gambar tersebut didapatkan pula

\begin{equation}\label{eqn:relative-position}
\vec{r} = z\hat{z} - R\hat{r},
\end{equation}

sehingga

\begin{equation}\label{eqn:relative-position-mag}
r = \sqrt{z^2 + R^2}.
\end{equation}

Dari Gambar [2](#fig2) dapat dituliskan

\begin{equation}\label{eqn:tan-beta}
z = R \tan \beta.
\end{equation}

Vektor satuan pada Persaman \eqref{eqn:cylindrical-coordinate-dl} dapat dinyatakan dengan vektor satuan pada koordinat kartesian

\begin{equation}\label{eqn:theta-hat}
\hat{\theta} = -\hat{x} \sin \theta + \hat{y} \cos \theta,
\end{equation}

dengan $\theta$ bermula dari sumbu $x$ menuju sumbu $y$ dan untuk Persamaan \eqref{eqn:relative-position}

\begin{equation}\label{eqn:r-hat}
\hat{r} = \hat{x} \cos \theta + \hat{y} \sin \theta.
\end{equation}

Substitusi Persamaan \eqref{eqn:cylindrical-coordinate-dl}, \eqref{eqn:relative-position}, dan \eqref{eqn:relative-position-mag}, serta \eqref{eqn:theta-hat} dan \eqref{eqn:r-hat} ke Persamaan \eqref{eqn:biot-savart-law} akan memberikan

\begin{equation}\label{eqn:biot-savart-law-arc-wire}
\begin{array}{rcl}
d\vec{B} & = & \displaystyle \frac{\mu_0}{4\pi} \frac{IR d\theta (-\hat{x} \sin \theta + \hat{y} \cos \theta)}{(z^2 + R^2)^{3/2}} \newline
&& \times (z\hat{z} - R\cos\theta\hat{x} - R\sin\theta\hat{y})
\end{array}
\end{equation}

Suku-suku yang terlibat dalam perkalian silang pada Persamaan \eqref{eqn:biot-savart-law-arc-wire} akan memberikan

$$
z \sin \theta \hat{y} + R \sin^2 \theta \hat{z} + z \cos \theta \hat{x} + R \cos^2 \theta \hat{z}
$$

yang akan menjadi

$$
z \cos \theta \hat{x} + z \sin \theta \hat{y} + R \hat{z},
$$

sehingga bila disubstitukan kembali ke Persamaan \eqref{eqn:biot-savart-law-arc-wire} akan menghasilkan

\begin{equation}\label{eqn:biot-savart-law-arc-wire-2}
\begin{array}{rcl}
d\vec{B} & = & \displaystyle \hat{x} \frac{\mu_0}{4\pi} \frac{IR z \cos \theta d\theta}{(z^2 + R^2)^{3/2}} \newline
&& \displaystyle + \hat{y} \frac{\mu_0}{4\pi} \frac{IR z \sin \theta d\theta}{(z^2 + R^2)^{3/2}} \newline
&& \displaystyle + \hat{z} \frac{\mu_0}{4\pi} \frac{IR^2 d\theta}{(z^2 + R^2)^{3/2}} \newline
\vec{B} & = & \displaystyle \int d\vec{B} \newline
& = & \hat{x} B_x + \hat{y} B_y + \hat{z} B_z.
\end{array}
\end{equation}

Masing-masing komponen dari Persamaan \eqref{eqn:biot-savart-law-arc-wire-2} adalah

\begin{equation}\label{eqn:biot-savart-law-arc-wire-bx}
B_x = \frac{\mu_0}{4\pi} \frac{IR z}{(z^2 + R^2)^{3/2}} (\sin \theta_2 - \sin \theta_1),
\end{equation}

\begin{equation}\label{eqn:biot-savart-law-arc-wire-by}
B_y = -\frac{\mu_0}{4\pi} \frac{IR z}{(z^2 + R^2)^{3/2}} (\cos \theta_2 - \cos \theta_1),
\end{equation}

\begin{equation}\label{eqn:biot-savart-law-arc-wire-bz}
B_z = \frac{\mu_0}{4\pi} \frac{IR^2}{(z^2 + R^2)^{3/2}} (\theta_2 - \theta 1),
\end{equation}

dengan $\theta_1$ dan $\theta_2$ adalah batas bawah dan atas integral yang diukur dari sumbu $x+$ berputar ke arah sumbu $y+$.


## cases
Terdapat beberapa kasus yang dapat disinggung terkait dengan pemanfaatan Persamaan \eqref{eqn:biot-savart-law-arc-wire-bx}, \eqref{eqn:biot-savart-law-arc-wire-by}, dan \eqref{eqn:biot-savart-law-arc-wire-bz} seperti diberikan pada tabel di bawah ini.

Tabel <a name='tab1'>1</a>. Beberapa sistem kawat berbentuk busur lingkaran berarus dan medan magnetik yang disebabkannya.

No | Kasus | Keterangan
:-: | :-: | :-:
1 | ![]({{ site.baseurl }}/assets/img/0/51/0512-c1.png) | $\theta_1 = 0$, <br>$\theta_2 = \pi$, <br>$z > 0$, <br><br>$B_x = 0$, <br>$B_y > 0$, <br>$B_z > 0$
2 | ![]({{ site.baseurl }}/assets/img/0/51/0512-c2.png) | $\theta_1 = \pi$, <br>$\theta_2 = 2\pi$, <br>$z > 0$, <br><br>$B_x = 0$, <br>$B_y < 0$, <br>$B_z > 0$
3 | ![]({{ site.baseurl }}/assets/img/0/51/0512-c3.png) | $\theta_1 = \frac12 \pi$, <br>$\theta_2 = \frac32 \pi$, <br>$z > 0$, <br><br>$B_x < 0$, <br>$B_y = 0$, <br>$B_z > 0$
4 | ![]({{ site.baseurl }}/assets/img/0/51/0512-c4.png) | $\theta_1 = \frac32 \pi$, <br>$\theta_2 = \frac12 \pi$, <br>$z > 0$, <br><br>$B_x > 0$, <br>$B_y = 0$, <br>$B_z > 0$
5 | ![]({{ site.baseurl }}/assets/img/0/51/0512-d.png) | $\theta_1 = 0$, <br>$\theta_2 = 2\pi$, <br>$z > 0$, <br><br>$B_x = 0$, <br>$B_y = 0$, <br>$B_z > 0$
6 | ![]({{ site.baseurl }}/assets/img/0/51/0512-e.png) | $\theta_1 \in [0, 2\pi]$, <br>$\theta_2 > \theta_1$, <br>$z = 0$, <br><br>$B_x = 0$, <br>$B_y = 0$, <br>$B_z > 0$

Sebagai ilustrasi pemanfaatan Tabel [1](#tab1), misalnya digunakan kasus nomor 5 akan tetapi dengan $z = 0$, yang akan membuat Persamaan \eqref{eqn:biot-savart-law-arc-wire-bx}, \eqref{eqn:biot-savart-law-arc-wire-by}, dan \eqref{eqn:biot-savart-law-arc-wire-bz} menjadi

\begin{equation}\label{eqn:biot-savart-law-arc-wire-bx-case-5-z=0}
B_x = 0,
\end{equation}

\begin{equation}\label{eqn:biot-savart-law-arc-wire-by-case-5-z=0}
B_y = 0,
\end{equation}

\begin{equation}\label{eqn:biot-savart-law-arc-wire-bz-case-5-z=0}
B_z = \frac{\mu_0 I}{2R},
\end{equation}

sehingga

\begin{equation}\label{eqn:biot-savart-law-circular-loop-center-point}
\vec{B} = \hat{z} \frac{\mu_0 I}{2R}
\end{equation}

adalah medan listrik totalnya yang hanya terdiri dari komponen pada arah $z$.


# exer
1. Untuk kasus nomor 5 pada Tabel [1](#tab1), bagaimana arah medan magnetik di sepanjang sumbu $z$, di atas dan di bawah simpul melingkar?
2. Mengapa untuk kasus nomor 6 pada Tabel [1](#tab1) tidak terdapat komponen medan magnetik pada arah $x$ dan $y$?


## note
1. <a name='r01'></a>Andrew Duffy, Ali Loewy, "Magnetic Field from an Arc of Current", Physlets, Boston University, 2nd Semester, 20 Sep 2019, url <http://physics.bu.edu/~duffy/semester2/c14_arc.html> [20220227].
2. <a name='r02'></a>Fred Harris, "Ampere's Law", Physics 272: Physics II, Section 1, University of Hawaii, 30 Oct 2014, url <https://www.phys.hawaii.edu/~fah/272www/272lectures_2014/lecture%2025(24)b.pdf> [20220227].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0512?src=hash&amp;ref_src=twsrc%5Etfw">#bug0512</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1497883766408495110?ref_src=twsrc%5Etfw">February 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) arahnya sama; &nbsp;
2) karena $B_x =0$ dan $B_y = 0$ bila $z = 0$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
