---
layout: butir
authors: [viridi]
title: rectangular rule
permalink: pages/0301
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["numerical", "integration", "partition", "rectangular rule", "midpoint", "left-endpoint", "right-endpoint", "approximation"]
date: 2022-01-23 20:18:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/30/2022-02-23-rectangle-rule.md
twitter_username: 6unpnp
nodes: []
---
Istilah aturan persegi panjang atau rectangular rule umumnya mengacu pada pendekatan titik tengah atau midpoint, baik secara eksplisit dinyatakan [[1](#r01)] ataupun secara implisit dalam penjelasannya dengan menggunakan simbol lain [[2](#r02)]. Penggunaan partisi untuk mendekati luas di bawah kurva dapat pula menggunakan pendekatan ujung-kiri (left-endpoint) dan ujung-kanan (right-endpoint) [[3](#r03)], serta ukuran partisi yang tidak perlu sama [[4](#r04)]. Di sini hanya akan dibahas pendekatan dengan ujung-kir, ujung-kanan, dan titik tengah.


## partition and point
Integrasi numerik secara umum merupakan perhitungan integral tertenu sehingga memerlukan informasi batas bawah dan batas atas integra, misalnya $x_{\rm beg}$ dan $x_{\rm end}$. Bila terdapat $N$ buah partisi maka dapat diperoleh

\begin{equation}\label{eqn:rectangular-rule-partition-width}
\Delta x = \frac{x_{\rm end} - x_{\rm beg}}{N}
\end{equation}

yang merupakan lebar partisinya dan

\begin{equation}\label{eqn:rectangular-rule-partition-point}
x_i = x_{\rm beg} + \Delta x (i - 1), \ \ \ \ i = 1, 2, .., N+1,
\end{equation}

adalah titik-titik pada kurva.


## left-endpoint
Suatu fungsi $f(x)$ dapat digambarkan berikut ini dengan luas di bawahnya didekati menggunakan partisi-partisi berupa persegi panjang yang ujung-kiri sisi atasnya mengenai garis kurva.

![]({{ site.baseurl }}/assets/img/0/30/0301-a.png) \
Gambar <a name='fig1'>1</a>. Pendekatan luas di bawah kurva dengan partisi berbentuk persegi panjang ujung-kiri.

Dengan menggunakan Gambar [1](#fig1) dapat diperoleh

\begin{equation}\label{eqn:rectangular-rule-left-endpoint}
\int_{x_{\rm beg}}^{x_{\rm end}} f(x) \ dx \approx \sum_{i = 1}^N f(x_i) \ \Delta x,
\end{equation}

dengan $N$ adalah jumlah partisi yang masing-masingnya memiliki lebar $\Delta x$.

Sebagai implementasinya dapat digunakan program berikut yang dituliskan dalam bahasa pemrograman Python

```python
# 0301-rectangle-beg-point.py
# Integration with rectangle rule beg point
# Sparisoma Viridi | https://github.com/dudung
# 20220223 Start this example

# define a function
fxs = "3x^2"
def f(x):
  y = 3 * x * x
  return y

# define integral lower and upper bounds
xbeg = 1
xend = 2

# define number of rectangle areas
N = 10
dx = (xend - xbeg) / N

# calculate definite integral
total = 0
x = xbeg
for i in range(N):
  area = f(x) * dx
  total = total + area
  x = x + dx

# display results
print("Rectangle Rule Beg Point")
print("f(x) = ", fxs)
print("xbeg = ", xbeg)
print("xend = ", xend)
print("N = ", N)
print("integral = ", total)

```

yang akan memberikan hasil

```batch
==== RESTART: 0301-rectangle-beg-point.py ====
Rectangle Rule Beg Point
f(x) =  3x^2
xbeg =  1
xend =  2
N =  10
integral =  6.555000000000004
```

saat dijalankan. Program di atas dapat dijalankan secara daring di OneCompiler [3xu7gdptx](https://onecompiler.com/python/3xu7gdptx).


## right-endpoint
Suatu fungsi $f(x)$ dapat digambarkan berikut ini dengan luas di bawahnya didekati menggunakan partisi-partisi berupa persegi panjang yang ujung-kanan sisi atasnya mengenai garis kurva.

![]({{ site.baseurl }}/assets/img/0/30/0301-b.png) \
Gambar <a name='fig2'>2</a>. Pendekatan luas di bawah kurva dengan partisi berbentuk persegi panjang ujung-kanan.

Dengan menggunakan Gambar [2](#fig2) dapat diperoleh

\begin{equation}\label{eqn:rectangular-rule-rigth-endpoint}
\int_{x_{\rm beg}}^{x_{\rm end}} f(x) \ dx \approx \sum_{i = 1}^N f(x_{i + 1}) \ \Delta x,
\end{equation}

dengan $N$ adalah jumlah partisi yang masing-masingnya memiliki lebar $\Delta x$.

Sebagai implementasinya dapat digunakan program berikut yang dituliskan dalam bahasa pemrograman Python

```python
# 0301-rectangle-end-point.py
# Integration with rectangle rule end point
# Sparisoma Viridi | https://github.com/dudung
# 20220223 Start this example

# define a function
fxs = "3x^2"
def f(x):
  y = 3 * x * x
  return y

# define integral lower and upper bounds
xbeg = 1
xend = 2

# define number of rectangle areas
N = 10
dx = (xend - xbeg) / N

# calculate definite integral
total = 0
x = xbeg
for i in range(N):
  area = f(x+dx) * dx
  total = total + area
  x = x + dx

# display results
print("Rectangle Rule End Point")
print("f(x) = ", fxs)
print("xbeg = ", xbeg)
print("xend = ", xend)
print("N = ", N)
print("integral = ", total)

```

yang akan memberikan hasil

```batch
==== 0301-rectangle-end-point.py ====
Rectangle Rule End Point
f(x) =  3x^2
xbeg =  1
xend =  2
N =  10
integral =  7.455000000000006
```

saat dijalankan. Program di atas dapat dijalankan secara daring di OneCompiler [3xu7gewh6](https://onecompiler.com/python/3xu7gewh6).


## midpoint
Suatu fungsi $f(x)$ dapat digambarkan berikut ini dengan luas di bawahnya didekati menggunakan partisi-partisi berupa persegi panjang yang titik-tengan sisi atasnya mengenai garis kurva.

![]({{ site.baseurl }}/assets/img/0/30/0301-c.png) \
Gambar <a name='fig3'>3</a>. Pendekatan luas di bawah kurva dengan partisi berbentuk persegi panjang titik-tengan.

\begin{equation}\label{eqn:rectangular-rule-midpoint}
\int_{x_{\rm beg}}^{x_{\rm end}} f(x) \ dx \approx \sum_{i = 1}^N f( x_{i + \frac12}) \ \Delta x,
\end{equation}

dengan $N$ adalah jumlah partisi yang masing-masingnya memiliki lebar $\Delta x$, serta

\begin{equation}\label{eqn:rectangular-rule-partition-midpoint}
x_{i + \frac12} = \tfrac12 ( x_i + x_{i+1} ),
\end{equation}

yang merupakan titik tengah suatu partisi.

Sebagai implementasinya dapat digunakan program berikut yang dituliskan dalam bahasa pemrograman Python

```python
# 0301-rectangle-mid-point.py
# Integration with rectangle rule mid point
# Sparisoma Viridi | https://github.com/dudung
# 20220223 Start this example

# define a function
fxs = "3x^2"
def f(x):
  y = 3 * x * x
  return y

# define integral lower and upper bounds
xbeg = 1
xend = 2

# define number of rectangle areas
N = 10
dx = (xend - xbeg) / N

# calculate definite integral
total = 0
x = xbeg
for i in range(N):
  area = f(x+dx/2) * dx
  total = total + area
  x = x + dx

# display results
print("Rectangle Rule Mid Point")
print("f(x) = ", fxs)
print("xbeg = ", xbeg)
print("xend = ", xend)
print("N = ", N)
print("integral = ", total)

```

yang akan memberikan hasil

```batch
==== 0301-rectangle-mid-point.py ====
Rectangle Rule Mid Point
f(x) =  3x^2
xbeg =  1
xend =  2
N =  10
integral =  6.997500000000006
```

saat dijalankan. Program di atas dapat dijalankan secara daring di OneCompiler [3xu7gfvcv](https://onecompiler.com/python/3xu7gfvcv).


## discussion
Perhatikan bahwa hasil aturan persegi panjang dengan ujung-kiri, ujung-kanan, dan titik-tengah memberikan hasil yang berbeda. Pada contoh di atas baru dicoba dengan jumlah partiksi $N = 10$, dengan aturan persegi panjang titik-tengah memberikan hasil yang paling mendekati hasil perhitungan secara analitik yaitu $7$. Pembandingan ketiga pendekatan dapat dilakukan lebih jauh untuk melihat sampai jumlah partisi berapa ketiganya akan memberikan hasil yang paling baik.


## note
1. <a name="r01"></a>Eric Cai, "Rectangular Integration (a.k.a. The Midpoint Rule) – Conceptual Foundations and a Statistical Application in R", The Chemical Statistician, 20 Jan 2014, url <https://chemicalstatistician.wordpress.com/2014/01/20/rectangular-integration-a-k-a-the-midpoint-rule/> [20220223].
2. <a name="r02"></a>Belgin Seymenoğlu, "The Rectangular Rule", MATH6501 Mathematics for Engineers 1, Department of Mathematics
University College London, Autumn 2016, p 72, url <https://www.ucl.ac.uk/~zcahge7/files/6501-LecturesNotes-full.pdf> [20220223].
3. <a name="r03"></a>Gilbert Strang, Edwin 'Jed' Herman, OSCRiceUniversity, "Approximating Areas", Calculus Volume 1, Pressbooks, 20 Aug 2019, url <https://opentextbc.ca/calculusv1openstax/chapter/approximating-areas/> [20220223].
4. <a name="r04"></a>Joseph Nebus, "How To Numerically Integrate Like A Mathematician", nebusresearch, 11 Oct 2014, url <https://nebusresearch.wordpress.com/tag/composite-rectangle-rule/> [20220223].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0301?src=hash&amp;ref_src=twsrc%5Etfw">#bug0301</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1496473002372136963?ref_src=twsrc%5Etfw">February 23, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
