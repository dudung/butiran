---
layout: post
authors: [viridi]
title: finite difference approximation
permalink: pages/0532
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["differential equation", "finite difference approximation"]
date: 2022-03-15T17:37:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/0/53/2022-03-15-finite-difference-approximation.md
twitter_username: 6unpnp
nodes: []
---
Pendekatan beda hingga untuk turunan merupakan satu metode tersederhana dan tertua untuk menyelsaikan persamaan diferensial [[1](#r01)]. Secara umum sulit untuk menyelesaikan persamaan diferensial dengan syarat batas pada sepanjang tepi domain dan amat langka formula analitiknya dapat diperoleh sebagai solusi, di sini metode beda hingga berperan dengan menggantikan turunan pada persamaan diferensial dengan aproksimasi beda hingga, yang menghasilkan sejumlah besar sistem persamaan aljabar untuk dipecahkan, sebagai ganti menyelesaikan persamaan diferensial semula, yang dapat dengan mudah diselesaikan pada suatu komputer [[2](#r02)].


## taylor series
Suatu fungsi dapat dinyatakan dengan deret Taylor

\begin{equation}\label{eqn:taylor-series}
\begin{array}{c}
f(x) = f(x_0) + f'(x_0) (x - x_0) \newline
\+ f{\''}(x_0) \tfrac12 (x - x_0)^2 \newline
\+ f{\'\''}(x_0) \tfrac16 (x - x_0)^3 \newline
\+ f^{iv}(x_0) \tfrac{1}{24} (x - x_0)^4
\end{array}
\end{equation}

bila dituliskan sampai lima suku pertama. Selanjutnya dengan $\Delta x = x - x_0 \equiv h$ dan $x = x_0 + h$ Persamaan \eqref{eqn:taylor-series} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:taylor-series-pos-h}
\begin{array}{c}
f(x_0 + h) = f(x_0) + f'(x_0) h \newline
\+ f{\''}(x_0) \tfrac12 h^2 + f{\'\''}(x_0) \tfrac16 h^3 \newline
\+ f^{iv}(x_0) \frac{1}{24} h^4,
\end{array}
\end{equation}

yang dengan cara yang mirip untuk $-h$ akan diperoleh

\begin{equation}\label{eqn:taylor-series-min-h}
\begin{array}{c}
f(x_0 - h) = f(x_0) - f'(x_0) h \newline
\+ f{\''}(x_0) \tfrac12 h^2 - f{\'\''}(x_0) \tfrac16 h^3 \newline
\+ f^{iv}(x_0) \frac{1}{24} h^4.
\end{array}
\end{equation}


## first derivative
Dengan mengurangi Persamaan \eqref{eqn:taylor-series-pos-h} dengan Persamaan \eqref{eqn:taylor-series-min-h} akan diperoleh

$$
\begin{array}{rcl}
f(x_0 + h) - f(x_0 - h) & = & 2h f'(x_0) + f{'''}(x_0) \tfrac13 h^3 \newline
\displaystyle \frac{f(x_0 + h) - f(x_0 - h)}{2h} & = & f'(x_0) + \tfrac16 h^2 f{'''}(x_0)
\end{array}
$$

yang akan menghasilkan

\begin{equation}\label{eqn:finite-difference-app-1st-derivative-x0}
\begin{array}{c}
\displaystyle f'(x_0) = \frac{f(x_0 + h) - f(x_0 - h)}{2h} + O(h^2)
\end{array}
\end{equation}

dengan $O(h^2) = \frac16 h^2 f{\'''}(x_0)$ merupakan kesalahan akibat pemotongan suku deret Taylor, yang sebanding dengan $h^2$. Agar lebih umum biasanya $x \equiv x_0$ karena berlaku untuk setiap $x$ sehingga diperoleh

\begin{equation}\label{eqn:finite-difference-app-1st-derivative}
\begin{array}{c}
\displaystyle f'(x) = \frac{f(x + h) - f(x - h)}{2h} + O(h^2)
\end{array}
\end{equation}

yang merupakan rumusan beda hingga tengah untuk turunan pertama.


## second derivative
Dengan menjumlahkan Persamaan \eqref{eqn:taylor-series-pos-h} dengan Persamaan \eqref{eqn:taylor-series-min-h} akan diperoleh

$$
\begin{array}{rcl}
f(x_0 + h) + f(x_0 - h) & = & 2 f(x_0) + h^2 f''(x_0) + f^{iv}(x_0) \frac{1}{12} h^4 \newline
f(x_0 + h) - 2 f(x_0) + f(x_0 - h) & = & h^2 f''(x_0) + f^{iv}(x_0) \frac{1}{12} h^4 \newline
\displaystyle \frac{f(x_0 + h) - 2 f(x_0) + f(x_0 - h)}{h^2} & = & f''(x_0) + \frac{1}{12} h^2 f^{iv}(x_0)
\end{array}
$$

dan, dengan terlebih dahulu mengganti $x_0$ dengan $x$ agar lebih umum, selanjutnya akan memberikan

\begin{equation}\label{eqn:finite-difference-app-2nd-derivative}
\begin{array}{c}
\displaystyle f{\''}(x) = \frac{f(x + h) - 2f(x) + f(x - h)}{h^2} + O(h^2),
\end{array}
\end{equation}

yang merupakan rumusan beda hingga tengah untuk turunan kedua, dengan $O(h^2) = \frac{1}{12} h^2 f^{iv}(x_0)$ merupakan kesalahan akibat pemotongan suku deret Taylor, yang sebanding dengan $h^2$.


## using index
Notasi dengan fungsi dengan argumennya $f(x + h)$, $f(x)$, dan $f(x - h)$ akan lebih kompak dituliskan menggunakan indeks, selain karena memang nilainya diskrit, akan tetapi juga karena kelak akan menggunakan komputer untuk menyelesaikannya. Dengan demikian dapat Persamaan \eqref{eqn:finite-difference-app-1st-derivative} dan \eqref{eqn:finite-difference-app-2nd-derivative} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:fda-1st-derivative}
f'(x) \equiv f_i' = \frac{f_{i+1} - f_{i-1}}{2h}
\end{equation}

dan

\begin{equation}\label{eqn:fda-2nd-derivative}
f\'\'(x) \equiv f_i\'\' = \frac{f_{i+1} - 2 f_i + f_{i-1}}{h^2},
\end{equation}

yang mengubah semua turunan, baik turunan pertama maupun turunan kedua, dengan fungsinya sehingga dihasillkan persamaan-persamaan aljabar.

Persamaan diferensial yang akan dipecahkan umumnya menghubungkan antara $f_i$, $f_i'$, dan $f_i''$ serta turunan-turunan lainnya, yang kemudian akan dihubungan dengan titik-titik di sekitarnya melalui Persamaan \eqref{eqn:fda-1st-derivative} dan \eqref{eqn:fda-2nd-derivative}. Mengingat yang diselesaikan adalah suatu persamaan diferensial, dibutuhkan pula konstanta integrasi yang disebut sebagai syarat batas (boundary condition, BC). Terdapat lima jenis syarat batas [[3](#r03)].


## exer
1. Sebanding dengan lebar grid $h$ pangkat berapa kesalahan pendekatan beda hingga untuk turunan pertama dan kedua?
2. Terdapat berapa jenis syarat batas? Sebutkan nama-nama syarat batas tersebut.


## note
1. <a name="r01"></a>Pascal Frey, Facultad de Ciencias Físicas y Matemáticas, "The finite difference method", MA691 Numerical Simulation of Complex PDE Problems, Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile, 8 Apr 2008, p 79, url <https://www.ljll.math.upmc.fr/frey/cours/UdC/ma691/ma691_ch6.pdf> [20220315].
2. <a name="r02"></a>Randall J. LeVeque, "Finite Difference Methods
for Differential Equations", AMath 585–586, University of Washingthon, Sep 2005 (draft version), p 3, url <https://edisciplinas.usp.br/pluginfile.php/41896/mod_resource/content/1/LeVeque%20Finite%20Diff.pdf> [20220315].
3. <a name="r03"></a>Fiaz Ur Rehman, Mathematics Lectures, "Different Types of Boundary Conditions", YouTube, 06.04.2020, url <https://www.youtube.com/watch?v=-n3jHwmNejg> [20220315].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0532?src=hash&amp;ref_src=twsrc%5Etfw">#bug0532</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1503681119656767490?ref_src=twsrc%5Etfw">March 15, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) sebanding dengan $h^2$ baik untuk pendekatan turunan pertama maupun kedua; &nbsp;
2) lima, Dirichlet, Neumann, Robin, mixed, dan Cauchy; &nbsp;
</ans>
