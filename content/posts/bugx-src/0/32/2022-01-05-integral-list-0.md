---
layout: post
authors: [viridi]
title: integral list 0
permalink: pages/0320
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["mathematics", "integral", "list", "table"]
date: 2022-01-10 19:28:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/32/2022-01-05-integral-list-0.md
twitter_username: 6unpnp
nodes: []
---
Terdapat banyak sumber daftar atau tabel integral yang dapat diakses untuk 112 fungsi [[1](#r01)], 134 fungsi [[2](#r02)] dan sejumlah lainnya [[3](#r03)]. Fungsi-fungsi yang dicantumkan di sini adalah yang digunakan pada bugx.


## int00
Medan lisrik oleh muatan garis pada jarak tegak lurus tertentu untuk komponen searah dengan muatan garis melibatkan bentuk integral berikut

\begin{equation}\label{eqn:int-00}
\begin{array}{rcl}
\displaystyle \int \frac{x \ dx}{(R^2 + x^2)^{3/2}} & = & \displaystyle \int \frac{\frac12 d(R^2 + x^2)}{(R^2 + x^2)^{3/2}} \newline
& = & \frac12 \cdot -2 \displaystyle \frac{1}{(R^2 + x^2)^{1/2}} + C \newline
& = & - \displaystyle \frac{1}{(R^2 + x^2)^{1/2}} + C,
\end{array}
\end{equation}

dengan $C$ suatu konstanta.


## int01
Medan lisrik oleh muatan garis pada jarak tegak lurus tertentu untuk komponen tegak lurus muatan garis melibatkan bentuk integral berikut

\begin{equation}\label{eqn:int-01}
\begin{array}{rcl}
\displaystyle \int \frac{dx}{(R^2 + x^2)^3} & = & \displaystyle \int \frac{d(R\cot\theta)}{(R^2 + R^2 \cot^2 \theta)^{3/2}} \newline
& = & \displaystyle \int \frac{-R \csc^2 \theta d\theta}{(R^2 \csc^2 \theta)^{3/2}} \newline
& = & \displaystyle \int \frac{-R \csc^2 \theta d\theta}{R^3 \csc^3 \theta} \newline
& = & \displaystyle - \frac{1}{R^2} \int \frac{d\theta}{ \csc \theta} \newline
& = & \displaystyle - \frac{1}{R^2} \int \sin\theta d\theta \newline
& = & \displaystyle \frac{1}{R^2} \ \cos\theta + C \newline
& = & \displaystyle \frac{1}{R^2} \ \frac{x}{\sqrt{R^2 + x^2}} + C,
\end{array}
\end{equation}

dengan $C$ suatu konstanta. Dengan hubungan

$$
\tan\theta = \frac{R}{x}, \ \ \ \ \cot\theta = \frac{x}{R},
$$

sehingga

$$
\cos \theta = \frac{x}{\sqrt{R^2 + x^2}}
$$

yang menjelaskan bagaimana baris terakhir pada Persamaan \eqref{eqn:int-01} diperoleh dari baris sebelumnya.


## int02
Medan listrik pada jarak $B$ dari ujung kanan suatu muatan garis dengan rapat muatan linier $\lambda$ dan $A = (x_1 + L + B)$ memerlukan pemecahan bentuk integral berikut

\begin{equation}\label{eqn:int-02}
\begin{array}{rcl}
\displaystyle \int \frac{dx}{(A - x)^2} & = & \displaystyle \int \frac{-d(A - x)}{(A - x)^2} \newline
& = & \displaystyle \frac{1}{(A - x)} + C,
\end{array}
\end{equation}

dengan $C$ suatu konstanta.


## int03
Komponen medan listrik pada arah $x$ di luar daerah muatan garis pada jarak tegak lurus $R$ dan jarak sejajar $B$ dari ujung kanan melibatkan bentuk integral

\begin{equation}\label{eqn:int-03}
\begin{array}{rcl}
\displaystyle \int \frac{(A - x) \ dx}{[ (A - x)^2 + R^2 ]^{3/2}} & = & \displaystyle \int \frac{ -\frac12 \ d[(A - x)^2 + R^2]}{[ (A - x)^2 + R^2 ]^{3/2}} \newline
& = & -\frac12 \displaystyle \cdot -2 \ \frac{1}{[ (A - x)^2 + R^2 ]^{1/2}} + C \newline
& = & \displaystyle \frac{1}{[ (A - x)^2 + R^2 ]^{1/2}} + C,
\end{array}
\end{equation}

dengan $C$ adalah konstanta.


## int04
Komponen medan listrik pada arah $y$ di luar daerah muatan garis pada jarak tegak lurus $R$ dan jarak sejajar $B$ dari ujung kanan perlu memecahkan bentuk integral

\begin{equation}\label{eqn:int-04}
\begin{array}{rcl}
\displaystyle \int \frac{dx}{[ (A - x)^2 + R^2 ]^{3/2}} & = & \displaystyle \int \frac{-d(A - x)}{[ (A - x)^2 + R^2 ]^{3/2}} \newline
& = & \displaystyle \int \frac{-d(R \cot\theta)}{[ (R \cot\theta)^2 + R^2 ]^{3/2}} \newline
& = & \displaystyle \int \frac{-R(-\csc^2\theta d\theta)}{R^3 \csc^3 \theta} \newline
& = & \displaystyle \frac{1}{R^2} \int \frac{d\theta}{\csc\theta} \newline
& = & \displaystyle \frac{1}{R^2} \int \sin\theta d\theta \newline
& = & \displaystyle -\frac{1}{R^2} \cos\theta + C \newline
& = & \displaystyle -\frac{1}{R^2} \frac{(A - x)}{\sqrt{(A - x)^2 + R^2}} + C,
\end{array}
\end{equation}

dengan $C$ adalah konstanta dan hubungan 

$$
(A - x) = R \cot \theta, \ \ \ \ \cos\theta = \frac{(A - x)}{\sqrt{(A - x)^2 + R^2}}
$$

diperlukan pada untuk mendapatkan baris terakhir.


## int05
Komponen $x$ dan $y$ medan listrik oleh cakram dengan menggunakan elemen luas pada koordinat polar memerlukan bentuk berikut

\begin{equation}\label{eqn:int-05a}
\begin{array}{rcl}
\displaystyle \int \frac{r^2 dr}{(z^2 + r^2)^{3/2}} & = & \displaystyle \int \frac{r \ \frac12 d(z^2 + r^2)}{(z^2 + r^2)^{3/2}} \newline
& = & \displaystyle - \frac{r}{\sqrt{z^2 + r^2}} + \int \frac{dr}{\sqrt{z^2 + r^2}}.
\end{array}
\end{equation}

Suku kedua pada ruas kanan Persamaan \eqref{eqn:int-05a} dipecahkan dengan

\begin{equation}\label{eqn:int-05b}
\begin{array}{rcl}
\displaystyle \int \frac{dr}{\sqrt{z^2 + r^2}} & = & \displaystyle \int \frac{d(z\cot\theta)}{\sqrt{z^2 + (z\cot\theta)^2}} \newline
& = & \displaystyle \int \frac{-z\csc^2\theta d\theta}{\sqrt{z^2 + z^2 \cot^2\theta}} \newline
& = & \displaystyle - \int \frac{\csc^2 \theta d\theta}{\csc\theta} \newline
& = & \displaystyle - \int \csc\theta d\theta.
\end{array}
\end{equation}

Suku pada ruas kanan Persamaan \eqref{eqn:int-05b} dipecahkan dengan

\begin{equation}\label{eqn:int-05c}
\begin{array}{rcl}
\int \csc\theta d\theta & = & \int \csc\theta d\theta \newline
& = & \displaystyle \int \csc\theta d\theta \cdot \frac{\cot\theta + \csc\theta}{\cot\theta + \csc\theta} \newline
& = & \displaystyle \int \frac{\csc\theta \cot\theta + \csc^2 \theta}{\csc\theta + \cot\theta} d\theta  \newline
& = & \displaystyle \int \frac{-d(\csc\theta + \cot\theta)}{\csc\theta + \cot\theta} \newline
& = & - \ln |\csc\theta + \cot\theta| + C.
\end{array}
\end{equation}

Pada Persamaan \eqref{eqn:int-05b} telah digunakan

$$
\cot\theta = \frac{r}{z}
$$

sehingga dapat diperoleh

$$
\csc\theta = \frac{\sqrt{z^2 + r^2}}{z}
$$

yang akan membuat Persamaan \eqref{eqn:int-05c} menjadi

\begin{equation}\label{eqn:int-05d}
\begin{array}{rcl}
\int \csc\theta d\theta & = & \displaystyle - \ln \left| \frac{\sqrt{z^2 + r^2}}{z} + \frac{r}{z}  \right| + C.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:int-05d} akan membuat Persamaan \eqref{eqn:int-05b} menjadi

\begin{equation}\label{eqn:int-05e}
\begin{array}{rcl}
\displaystyle \int \frac{dr}{\sqrt{z^2 + r^2}} & = & \displaystyle - \int \csc\theta d\theta \newline
& = & \displaystyle \displaystyle \ln \left| \frac{\sqrt{z^2 + r^2}}{z} + \frac{r}{z}  \right| + C.
\end{array}
\end{equation}

Substitusi hasil di atas ke Persamaan \eqref{eqn:int-05a} akan menghasilkan

\begin{equation}\label{eqn:int-05f}
\begin{array}{rcl}
\displaystyle \int \frac{r^2 dr}{(z^2 + r^2)^{3/2}} & = & \displaystyle - \frac{r}{\sqrt{z^2 + r^2}} + \int \frac{dr}{\sqrt{z^2 + r^2}} \newline
& = & \displaystyle - \frac{r}{\sqrt{z^2 + r^2}} \newline
&& \displaystyle + \ln \left| \frac{\sqrt{z^2 + r^2}}{z} + \frac{r}{z}  \right| + C,
\end{array}
\end{equation}

yang telah dikonfirmasi [[4](#r04)].


## note
1. <a name='r01'></a>B. E. Shapiro, "Table of Integrals", 2005, url <https://www.physics.umd.edu/hep/drew/IntegralTable.pdf> [20220105].
2. <a name='r02'></a> B.E.Shapiro, "Table of Integrals", Integral-Table.com, 15 Jul 2014, url <http://integral-table.com/> [20220105].
3. <a name='r03'></a>Wikipedia contributors, "Lists of integrals", Wikipedia, The Free Encyclopedia, 6 December 2021, 07:41 UTC, <https://en.wikipedia.org/w/index.php?oldid=1058901573> [20220105].
4. <a name='r04'></a>"D[\(40)-Divide[r,Sqrt[Power[z,2]+Power[r,2]]]+Log[Divide[Sqrt[Power[z,2]+Power[r,2]],z]+Divide[r,z]]\(41),r]", Wolfram Alpha, Computational Intelligence, 2022, url <https://www.wolframalpha.com/input/?i2d=true&i=D%5B%5C%2840%29-Divide%5Br%2CSqrt%5BPower%5Bz%2C2%5D%2BPower%5Br%2C2%5D%5D%5D%2BLog%5BDivide%5BSqrt%5BPower%5Bz%2C2%5D%2BPower%5Br%2C2%5D%5D%2Cz%5D%2BDivide%5Br%2Cz%5D%5D%5C%2841%29%2Cr%5D> [20220110].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[line charge electric field](0285.html) &bull; [line charge e field beyond](0286.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
