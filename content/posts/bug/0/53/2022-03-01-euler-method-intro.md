---
layout: butir
authors: [viridi]
title: euler method intro
permalink: pages/0531
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["numerical", "differential equation", "initial value problem", "euler", "first order"]
date: 2022-03-15T12:39:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/0/53/2022-03-03-euler-method-intro.md
twitter_username: 6unpnp
nodes: []
---
Terdapat banyak persamaan diferensial order pertama yang tidak linier, separabel, dan eksak, yang bahkan bila masih separabel dan eksak pun tidak selalu dapat diselesaikan untuk mendapatkan suatu solusi eksplisit, di mana tanpa solusi eksplisit akan amat sulit mencari informasi mengenai solusinya [[1](#r01)]. Metode Euler merupakan salah satu solusi untuk permasalahan ini, yang dapat memecahkan persamaan diferensial biasa bila diberikan suatu kondisi atau syarat awal, di mana metode ini menganalisa persamaan diferensial dengan memanfaatkan ide linearitas lokal atau pendekatan linier [[2](#r02)]. Metode ini diperkenalkan dalam penyelesaian persamaan diferensial biasa order pertama secara numerik karena secara umum sederhana [[3](#r03)] dan memiliki berbagai keterbatasan [[4](#r04)].


## fode
Sebuah persamaan diferensial order pertama atau FODE (first order differential equation) berbentuk

\begin{equation}\label{eqn:fode}
\frac{dy}{dx} = g(x, y)
\end{equation}

ingin dicari solusinya $y = y(x)$. Bila diketahui suatu syarat awal $(x_k, y_k)$ dengan nilai $\Delta x$ yang kecil dan

\begin{equation}\label{eqn:y=f(x)}
y_k = y(x_k), \ \ \ \ y_{k+1} = y(x_{k+1}),
\end{equation}

dapat didekati bahwa

\begin{equation}\label{eqn:euler}
y_{k+1} = y_k + (x_{k+1} - x_k) g(x_k, y_k),
\end{equation}

dari pendekatan dari Persamaan \eqref{eqn:fode} berbentuk

\begin{equation}\label{eqn:gradient}
\frac{dy}{dx} \approx \frac{\Delta y}{\Delta x} = \frac{y_{k+1} - y_k}{x_{k+1} - x_k},
\end{equation}

yang merupakan gradien solusi yang dingin dicari.


## the method
Dengan sumbstitusi Persamaan \eqref{eqn:gradient} ke Persamaan \eqref{eqn:euler} akan diperoleh

\begin{equation}\label{eqn:euler-method}
y_{k+1} = y_k + (x_{k+1} - x_k) \left. \frac{dy}{dx} \right|_{x = x_k}
\end{equation}

yang merupakan metode Euler. Atau dapat pula dituliskan dalam bentuk

\begin{equation}\label{eqn:euler-method-as-function}
f(x + \Delta x) = f(x) + \Delta x \frac{df(x)}{dx},
\end{equation}

di mana $f(x)$ merupakan fungsi dari satu variabel bebas $x$. Terkait dengan Persaman \eqref{eqn:fode}, $g(x) = f'(x)$ dan $y = f(x)$.


## illustrations
Beberapa persamaan diferensial orde pertama diberikan sebagai ilustrasi.

### v from a
Suatu benda yang berbgerak dengan percepatan $a(t)$ akan memiliki persamaan diferensial

\begin{equation}\label{eqn:velo-from-acce}
\frac{dv}{dt} = a(t)
\end{equation}

untuk memperoleh rumusan kecepatannya, sehingga dapat diperoleh

\begin{equation}\label{eqn:velo-from-acce-euler}
v(t + \Delta t) = v(t) + a(t) \Delta t,
\end{equation}

dengan metode Euler. Syarat awalnya adalah $v_0 = v(t_0)$.

### x from v
Suatu benda yang berbgerak dengan kecepatan $v(t)$ akan memiliki persamaan diferensial

\begin{equation}\label{eqn:post-from-velo}
\frac{dx}{dt} = v(t)
\end{equation}

untuk memperoleh rumusan posisinya, sehingga dapat diperoleh

\begin{equation}\label{eqn:post-from-velo-euler}
x(t + \Delta t) = x(t) + v(t) \Delta t,
\end{equation}

dengan metode Euler. Syarat awalnya adalah $x_0 = x(t_0)$.

### v from a, x from v
Dua contoh sebelumnya dapat digabungkan sehingga seakan-akan memecahkan persamaan diferensial orde kedua, yang dipisahkan masing-masing menjadi dua persamaan orde pertama, yaitu

\begin{equation}\label{eqn:post-from-acc-two-fode}
\begin{array}{c}
v(t + \Delta t) = v(t) + a(t) \Delta t, \newline
x(t + \Delta t) = x(t) + v(t) \Delta t,
\end{array}
\end{equation}

dengan metode Euler. Syarat awalnya adalah $v_0 = v(t_0)$ dan $x_0 = x(t_0)$.

### two-dimensional
Bila terdapat gerak dalam dua-dimensi, Persamaan \eqref{eqn:post-from-acc-two-fode} tetap dapat dimanfaatkan dengan menggunakan notasi vektor

\begin{equation}\label{eqn:post-from-acc-two-fode-vector}
\begin{array}{c}
\vec{v}(t + \Delta t) = \vec{v}(t) + \vec{a}(t) \Delta t, \newline
\vec{r}(t + \Delta t) = \vec{r}(t) + \vec{v}(t) \Delta t,
\end{array}
\end{equation}

di mana $\vec{r} = x(t)\hat{x} + y(t)\hat{y}$ dan $\vec{v} = v_x(t)\hat{x} + v_y(t)\hat{y}$.


## examples
Sebagai contoh sistem fisis dari persamaan-persamaan yang telah diberikan disajikan gerak parabola dengan gerak partikel bermuatan pada medan magnetik yang selalu tegak lurus arah geraknya.

### parabolic motion
Gerak parabola memiliki solusi numerik

\begin{equation}\label{eqn:fode-euler-parabolic-motion}
\begin{array}{c}
\vec{a} = -g\hat{y}, \newline
\vec{v}(t + \Delta t) = \vec{v}(t) + \vec{a}(t) \Delta t, \newline
\vec{r}(t + \Delta t) = \vec{r}(t) + \vec{v}(t) \Delta t,
\end{array}
\end{equation}

dengan metode Euler untuk persamaan FODE. Syarat awalnya adalah $\vec{v}(t_0) = v_x(t_0) \hat{x} + v_y(t_0) \hat{y}$ dan $\vec{r}(t_0) = x(t_0) \hat{x} + y(t_0) \hat{y}$. Selain itu terdapat pula syarat dari lingkungannya $\vec{g} = -g\hat{y}$.


### moving charged particle in perpendicular magnetic field
Gerak partikel bermuatan dalam medan magnetik tegak lurus arah kecepatan memiliki solusi numerik

\begin{equation}\label{eqn:fode-mov-chrg-perp-mag-field-motion}
\begin{array}{c}
\vec{a} = q v_y(t) B_z \hat{x} - q v_x(t) B_z \hat{y}
, \newline
\vec{v}(t + \Delta t) = \vec{v}(t) + \vec{a}(t) \Delta t, \newline
\vec{r}(t + \Delta t) = \vec{r}(t) + \vec{v}(t) \Delta t,
\end{array}
\end{equation}

dengan metode Euler untuk persamaan FODE. Syarat awalnya adalah $\vec{v}(t_0) = v_x(t_0) \hat{x} + v_y(t_0) \hat{y}$ dan $\vec{r}(t_0) = x(t_0) \hat{x} + y(t_0) \hat{y}$. Selain itu terdapat pula syarat dari lingkungannya $\vec{B} = B_z \hat{z}$.


## exer
1. Rumusan $\displaystyle f(x + \Delta x) = f(x) + \Delta x \frac{df(x)}{dx}$ merupakan solusi untuk apa? Dan apa syaratnya?
2. Metode Euler dicontohkan untuk suatu FODE. Apakah dapat diterpakan untuk orde persamaan diferensial yang lebih tinggi? Bagaimana caranya?

## note
1. <a name="r01"></a>Paul Dawkins, "Euler's Method", Paul's Online Notes, Lamar University, 3 Dec 2018, url <https://tutorial.math.lamar.edu/classes/de/eulersmethod.aspx> [20220301].
2. <a name="r02"></a>Jenn "How to do Euler's Method? Simply Explained in 3 Powerful Examples", Calcworkshop LLC, 31 Dec 2019, url <https://calcworkshop.com/first-order-differential-equations/eulers-method-table/> [20220301].
3. <a name="r03"></a>Kenneth Howell, "Euler’s Numerical Method", Ordinary Differential Equations An Introduction to the Fundamentals, The University of Alabama in Huntsville, 28 Jun 2010, url <https://www.uah.edu/images/people/faculty/howellkb/DEText-Ch9.pdf> [20220301].
4. <a name="r04"></a>Laura Evans, "Limitations of Euler's Method for Numerical Integration", 18.034 Honors Differential Equations, Massachusetts Institute of Technology, Spring 2007, url <https://dspace.mit.edu/bitstream/handle/1721.1/55903/18-034Spring-2007/NR/rdonlyres/Mathematics/18-034Spring-2007/Projects/eulerl.pdf> [20220301].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0531?src=hash&amp;ref_src=twsrc%5Etfw">#bug0531</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1503606086951391236?ref_src=twsrc%5Etfw">March 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) solusi persamaan diferensial biasa orde pertama, syarat awal diperlukan; &nbsp;
2) ya, persamaan diferensial dengan orde lebih tinggi dipecahkan menjadi beberapa FODE yang saling terkait; &nbsp;
</ans>
