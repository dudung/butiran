---
layout: post
authors: [viridi]
title: linear interpolation
permalink: pages/0501
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["interpolation", "liniear", "python"]
date: 2022-02-22 05:08:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/50/2022-02-21-linear-interpolation.md
twitter_username: 6unpnp
nodes: []
youtube: 0yxhLIB-0s0
---
Interpolasi linier merupakan salah satu jenis interpolasi, yang melibatkan pembangkitan nilai baru berdasarkan himpunan nilai-nilai yang ada, yang dicapai dengan membuat secara geometri sebuah garis lurus antara dua titik berurutan pada sebuah grafik atau bidang [[1](#r01)]. Interpolasi dari himpunan titik-titik data didefinisikan sebagai rangkaian interpolan linier antar setiap pasang titik-titik data, yang menghasilkan kurva kontinu akan tetapi dengan turunan diskontinu [[2](#r02)]. Dalam bahasa pemrograman Python dengan menggunakan `numpy` interpolasi linier dapat dilakukan dengan hanya satu baris kode [[3](#r03)]. Terdapat banyak kalkulator interpolasi linier yang telah tersedia secara daring [[4](#r04)], yang juga dilengkapi rumusnya [[5](#r05)].


## between two points
Terdapat dua pasang data yaitu $(x_1, y_1)$ dan $(x_2, y_2)$, ingin dicari nilai $y$ untuk suatu nilai $x$ di mana $x_1 < x < x_2$. Hal ini dapat dilakukan dengan memperhatikan ilustrasi berikut ini.

![]({{ site.baseurl}}/assets/img/0/50/0501-a.png) \
Gambar <a name='fig1'>1</a>. Hubungan titik-titik data $(x_1, y_1)$ dan $(x_2, y_2)$ dengan nilai yang ingin diperoleh $y$ bila diketahui $x$.

Dari Gambar [1](#fig1), melalui hubungan segitiga sebangun [[6](#r06)], dapat diperoleh perumusan berikut ini

\begin{equation}\label{eqn:linear-interpolation-two-points}
\begin{array}{rcl}
\displaystyle \frac{y - y_1}{y_2 - y_1} & = & \displaystyle \frac{x - x_1}{x_2 - x_1} \newline
y - y_1 & = & \displaystyle \left( \frac{y_2 - y_1}{x_2 - x_1} \right) (x - x_1) \newline
y & = & \displaystyle \left( \frac{y_2 - y_1}{x_2 - x_1} \right) (x - x_1) + y_1 \newline
& = & \displaystyle \left( \frac{y_2 - y_1}{x_2 - x_1} \right) x + \left[ y_1 - \left( \frac{y_2 - y_1}{x_2 - x_1} \right) x_1 \right] \newline
f(x) & = & c_1 x + c_0,
\end{array}
\end{equation}

dengan

\begin{equation}\label{eqn:linear-interpolation-two-points-c0}
c_0 = y_1 - \left( \frac{y_2 - y_1}{x_2 - x_1} \right) x_1
\end{equation}

dan

\begin{equation}\label{eqn:linear-interpolation-two-points-c1}
c_1 = \frac{y_2 - y_1}{x_2 - x_1}.
\end{equation}

Persamaan \eqref{eqn:linear-interpolation-two-points-c0} dan \eqref{eqn:linear-interpolation-two-points-c1} dapat digeneralisasi sehingga berlaku untuk $N$ pasang data dengan $N > 2$.


## n points
Terdapat $N$ titik data dengan $N > 2$ dalam bentuk $(x_1, x_2)$, .., $(x_N, x_N)$. Dalam interpolasi linier di mana suatu titik $x$ pasti berada pada rentang $x_i \le x \le x_{i+1}$, perlu ditentukan nilai $i$, dengan $1 < i < N-1$. Bila diasumsikan bahwa rentang antara dua titik adalah sama

\begin{equation}\label{eqn:points-interval}
L = x_{i+1} - x_i,
\end{equation}

salah satu cara untuk menentukannya $i$ adalah dengan menggunakan

\begin{equation}\label{eqn:interval}
i = 1 + \left\lfloor \frac{x - x_1}{L} \right\rfloor.
\end{equation}

Kurung $\lfloor \ \rfloor$ merupakan fungsi floor [[7](#r07)]. Setelah mendapatkan $i$ untuk suatu $x$ dari Persamaan \eqref{eqn:interval}, maka digunakan Persamaan \eqref{eqn:linear-interpolation-two-points}, \eqref{eqn:linear-interpolation-two-points-c0}, dan \eqref{eqn:linear-interpolation-two-points-c1} untuk mendapatkan nilai $y$.


## example
Terdapat data beberapa titik seperti diberikan pada gambar berikut ini.

![]({{ site.baseurl}}/assets/img/0/50/0501-b.png) \
Gambar <a name='fig2'>2</a>. Titik-titik data $(1, 11)$, $(4, 18)$, $(7, 7)$, dan $(10, 5)$.

Akan dilakukan interpolasi linier pada empat titik data yang diberikan pada Gambar [2](#fig2) sehingga dapat dicari nilai $y$ pada sembarang $x$ untuk $1 \le x \le 10$.

![]({{ site.baseurl}}/assets/img/0/50/0501-c.png) \
Gambar <a name='fig3'>3</a>. Garis-garis fungsi interpolasi linier untuk titik-titik data $(1, 11)$, $(4, 18)$, $(7, 7)$, dan $(10, 5)$.

Hasil interpolasi linier berupa rangkaian garis-garis lurus antar dua titik terdekat dari Gambar [2](#fig3) diberikan pada Gambar [3](#fig3).

### code
Terdapat program sederhana menggunakan bahasa pemrograman Python berikut ini

```python
# 0501-lin-inter.py
# Linear interpolation
# Sparisoma Viridi | https://github.com/dudung
# 20220221 Create this example.

# import package
import numpy as np

# define data points
x = [1, 4, 7, 10]
y = [11, 18, 7, 5]

# create coefficients c0 and c1 with zero values
c0 = [0, 0, 0]
c1 = [0, 0, 0]

# calculate c0 and c1
N = len(c0)
for i in range(N):
  c1[i] = (y[i+1] - y[i]) / (x[i+1] - x[i])
  c0[i] = y[i] - c1[i] * x[i]

# define linear interpolation function f(x)
def f(xx):
    i = int(np.floor((xx - x[0])/(x[1] - x[0])))
    if i > N - 1:
        i = i - 1
    y = c0[i] + c1[i] * xx
    return y

# use the function
for xx in range(1, 11):
  yy = f(xx)
  print(xx, yy)

```

yang akan memberikan hasil berikut

```batch
==== RESTART: 0501-lin-inter.py ====
1 11.0
2 13.333333333333332
3 15.666666666666666
4 18.0
5 14.333333333333332
6 10.666666666666664
7 7.0
8 6.333333333333333
9 5.666666666666666
10 5.0
```

saat dijalankan. Program tersebut dapat dijalan secara daring di OneCompiler [3xu2hf4vv](https://onecompiler.com/python/3xu2hf4vv).

### results
Hasil keluaran program dapat disajikan dalam bentuk tabel berikut ini.

Tabel <a name='tab1'>1</a> Hasil keluaran program `0501-lin-inter.py`.

$x$ | $y$
:-: | :-:
$\color{#88e}{1}$ | $\color{#88e}{11}$
2 | 13.33
3 | 15.67
$\color{#88e}{4}$ | $\color{#88e}{18}$
5 | 14.33
6 | 10.67
$\color{#88e}{7}$ | $\color{#88e}{7}$
8 | 6.33
9 | 5.67
$\color{#88e}{10}$ | $\color{#88e}{5}$

Perhatikan bahwa nilai-nilai telah dibulatkan sampai dua angka di belakang koma pada Tabel [1](#tab1) untuk yang bukan bilangan bulat. Nilai-nilai berwarna ($\color{#88e}\blacksquare$) adalah titik-titik data, sedangkan yang lainnnya merupakan hasil interpolasi.

![]({{ site.baseurl}}/assets/img/0/50/0501-d.png) \
Gambar <a name='fig4'>4</a>. Garis-garis fungsi interpolasi linier dan titik-titik hasil interpolasi ($\circ$) serta titik-titik datanya semula ($\color{#88e}\blacksquare$). 

Perhatikan bahwa pada Gambar [4](#fig4) telah terdapat titik-titik di pada garis-garis hasil interpolasi linier, yang semula hanya menghubungkan titik-titik data pada Gambar [3](#fig3) dan belum ada titik-titik lain di antara titik-titik data.


## exer
1. Dengan menggunakan program `0501-lin-inter.py` carilah nilai $y$ untuk $x = 3.5, 6.5, 9.5$. Tampilkan sampai tiga angka di belakang koma.
2. Bagaimana dengan cepat mencari nilai-nilai yang diminta pada soal sebelumnya tanpa melakukan kompilasi programnya?


## note
1. <a name='r01'></a>Techopedia, "Linear Interpolation", Technopedia, 29 Jun 2017, url <https://www.techopedia.com/definition/20366/linear-interpolation> [20220221].
2. <a name='r02'></a>Wikipedia contributors, "Linear interpolation", Wikipedia, The Free Encyclopedia, 7 January 2022, 14:58 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1064278127> [20220221].
3. <a name='r03'></a>David S. Fulford, "Linear Interpolation In Python a Single Line of Code", Towards Data Science, 29 Jun 2020, url <https://towardsdatascience.com/linear-interpolation-in-python-a-single-line-of-code-25ab83b764f9> [20220221].
4. <a name='r04'></a>"Linear Interpolation Calculator", EasyCalculation.com, Free Online Calculator and Converter, url <https://www.easycalculation.com/analytical/linear-interpolation.php> [20220221].
5. <a name='r05'></a>Jimmy Raymond, "Linear Interpolation Equation Calculator Engineering - Interpolator Formula", AJ Design Software, 2015, url <https://www.ajdesigner.com/phpinterpolation/linear_interpolation_equation.php> [20220221].
6. <a name='r06'></a>Admin, "Similar Triangles", BYJU'S, 10 Mar 2021, url <https://byjus.com/maths/similar-triangles/> [20220221].
7. <a name='r07'></a>Eric W. Weisstein, "Floor Function", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 2022, url <https://mathworld.wolfram.com/FloorFunction.html> [20220221].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0501?src=hash&amp;ref_src=twsrc%5Etfw">#bug0501</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1495883081122971649?ref_src=twsrc%5Etfw">February 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) 16.833, 8.833, 5.333; &nbsp;
2) pada command line Python tuliskan print(f(3.5)), print(f(3.5)), dan print(f(3.5)); &nbsp;
</ans>


{% comment %}
{% endcomment %}
