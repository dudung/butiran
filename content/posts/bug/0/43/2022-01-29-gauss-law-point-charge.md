---
layout: post
authors: [viridi]
title: gauss's law point charge
permalink: pages/0431
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["gaussian surface", "charge", "gauss's law", "electric field", "spherical symmetry", "point charge"]
date: 2022-01-30 09:54:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/43/2022-01-29-gauss-law-point-charge.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Hukum Gauss dapat digunakan untuk memperoleh medan listrik oleh satu titik muatan ataupun distribusi muatan, yang dalam penerapannya perlu memilih permukaan Gauss yang bersesuaian simetrinya sehingga integrasi dapat dilakukan [[1](#r01)], setidaknya dengan mudah.


## system
Sebuah muatan titik $q$ yang terletak di origin akan memberikan medan listrik pada setiap titik di sekitarnya dalam bentuk

\begin{equation}\label{eqn:electric-field-form}
\vec{E} = E(r) \ \hat{r}
\end{equation}

yang menggambarkan simetri bola.

![]({{ site.baseurl }}/assets/img/0/43/0431-a.png) \
Gambar <a name='fig1'>1</a>. Muatan titik dengan permukaan Gaussnya.

Agar pemanfaatan hukum Gauss dapat mudah dilakukan dipilih bentuk permukaan berbentuk bola seperti diberikan pada Gambar [1](#fig1), yang memiliki bentuk

\begin{equation}\label{eqn:gaussian-surface}
\begin{array}{rcl}
\displaystyle \oint d\vec{A} & = & \displaystyle \oint \hat{r} \ dA \newline
& = & \displaystyle \int_0^\pi \int_0^{2\pi} \hat{r} \ (r d\theta) (r \sin\theta d\phi) \newline
& = & \displaystyle \hat{r} \ r^2 \int_0^\pi \sin\theta d\theta  \int_0^{2\pi} d\phi \newline
& = & \hat{r} \ 4\pi r^2.
\end{array}
\end{equation}

Dengan bentuk permukaan ini akan diperoleh

\begin{equation}\label{eqn:enclosed-charge}
q_{\rm enc} = q,
\end{equation}

sebagai muatan yang terlingkupi oleh permukaan Gaussnya seperti diilusrasikan pada Gambar [1](#fig1).


## electric field
Dengan menggunakan hukum Gauss dan Persamaan \eqref{eqn:electric-field-form}, \eqref{eqn:gaussian-surface}, dan \eqref{eqn:enclosed-charge} dapat diperoleh

\begin{equation}\label{eqn:gauss-law-point-charge}
\begin{array}{rcl}
\displaystyle \oint \vec{E} \cdot d\vec{A} & = & \displaystyle \frac{q_{\rm enc}}{\varepsilon_0} \newline
\displaystyle \oint E(r) \ \hat{r} \cdot \hat{r} \ dA & = & \newline
\displaystyle \oint E(r) dA & = & \newline
\displaystyle \oint E(r) (r d\theta) (r \sin\theta d\phi) & = & \newline
\displaystyle  E(r) \ r^2 \oint \sin\theta d\theta d\phi & = & \newline
\displaystyle E(r) \ r^2 \int_0^\pi \sin\theta d\theta \int_0^{2\pi} d\phi & = & \newline
E(r) \ r^2 \ (2) \ (2\pi) & = & \newline
E(r) & = & \displaystyle \frac{1}{4\pi r^2} \frac{q_{\rm enc}}{\varepsilon_0} \newline
& = & \displaystyle \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2},
\end{array}
\end{equation}

yang merupakan medan listrik akibat muatan titik yang terletak di origin atau pusat koordinat. Persamaan \eqref{eqn:gauss-law-point-charge} ini berlaku untuk $r > 0$.

![]({{ site.baseurl }}/assets/img/0/43/0431-b.png) \
Gambar <a name='fig2'>2</a>. Medan listri $E$ sebagai fungsi jarak $r$ dari pusat koordinat akibat satu muatan titik.

Grafik $E(r)$ yang diperoleh dari Persamaan \eqref{eqn:gauss-law-point-charge} diberikan pada Gambar [2](#fig2), yang merupakan fungsi $E \propto 1/r^2$.


## exer
1. Apakah Persamaan \eqref{eqn:gauss-law-point-charge} juga berlaku untuk $q < 0$?
2. Gambar [2](#fig2) adalah untuk $q > 0$, bagaimana grafik untuk $q < 0$?


## note
1. <a name='r01'></a>Milica Marković, "Calculation of electric field using Gauss’s Law", Electromagnetics, Ximera, The Ohio State University, 2022, url <https://ximera.osu.edu/electromagnetics/electromagnetics/electrostatics/digInGaussLaw> [20220130].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0431?src=hash&amp;ref_src=twsrc%5Etfw">#bug0431</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1487619849077784578?ref_src=twsrc%5Etfw">January 30, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ya; &nbsp;
2) grafik untuk $q < 0$ adalah grafik untuk $q > 0$ yang dicerminkan terhadap sumbu mendatar; &nbsp;
</ans>


{% comment %}
{% endcomment %}
