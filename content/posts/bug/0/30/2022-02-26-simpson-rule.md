---
layout: butir
authors: [viridi]
title: simpson rule
permalink: pages/0303
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["numerical", "integration", "partition", "simpson rule"]
date: 2022-03-09 16:14:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/30/2022-02-26-simpson-rule.md
twitter_username: 6unpnp
nodes: []
---
Salah satu metode integrasi numerik dengan partisi adalah aturan Simpson, yang membagi luas di bawah kurva dengan partisi-partisi berjumlah genap yang dibatasi kurva parabola dan sumbu mendatar [[1](#r01)]. Metode ini memerlukan jumlah titik $N \ge 2$ dan $N /2 = \lfloor N/2 \rfloor$. Dengan demikian bila digunakan jumlah partisi $N$ yang dianggap pasti bernilai genap diperoleh faktor pembagi pada lebar partisi yang berbeda [[2](#r02)], dibandingkan dengan memilih bahwa $N = 2M$ [[1](#r01)].


## formulation
Suatu kurva dengan luas di bawahnya dibagi dalam setiap dua partisi yang dibatasi dengan kurva parabola dan sumbu mendatar diberikan pada gambar berikut ini.

![]({{ site.baseurl}}/assets/img/0/30/0303-a.png) \
Gambar <a name='fig1'>1</a>. Partisi pada integrasi numerik dengan aturan Simpson.

Terdapat fungsi $f(x)$ yang diintegralkan mulai dari $x = x_1$ sampai dengan $x = x_5$ menggunakan empat buah partisi atau $N = 4$ sehingga terdapat luas trapesium $A_1$, .., $A_4$ seperti diberikan pada Gambar [1](#fig1). Untuk dua partisi berurutan, yang dimulai dengan partisi berindeks ganjil, dapat dituliskan

\begin{equation}\label{eqn:simpson-rule-single-partition}
A_i + A_{i+1} = \left[ f(x_i) + 4f(x_{i+1}) + f(x_{i+2}) \right] \frac{\Delta x}{3},
\end{equation}

dengan $\Delta x = x_{i+1} - x_i$, untuk $i = 1, .., N$. Gambar [1](#fig1) memberikan ilustrasi untuk $N = 4$.

Dengan demikian untuk $N$ partisi dapat dituliskan

\begin{equation}\label{eqn:simpson-rule}
\int_{x_i}^{x_f} f(x) \ dx \approx \sum_{i = 1}^{2M}
\left[ f(x_i) + 4f(x_{i+1}) + f(x_{i+2}) \right] \frac{\Delta x}{3},
\end{equation}

dengan

\begin{equation}\label{eqn:simpson-rule-dx}
\Delta x = \frac{x_f - x_i}{N},
\end{equation}

di mana $N$ jumlah partisi, $x_i$ batas bawah integral, dan $x_f$ batas atas integral. Terdapat syarat tambahan bahwa $N$ harus merupakan bilangan genap dan bernilai lebih dari atau sama dengan dua sehingga penjumlahan pada ruas kanan Persamaan \eqref{eqn:simpson-rule} dilakukan untuk $N = 2M$ suku. Cara ini lebih mudah secara komputasi untuk memformulasikan suku-sukunya ke dalam $2M$ buah partisi ketimbang dalam $N$ buah partisi.


## a code
Implementasi Persamaan \eqref{eqn:simpson-rule} dan \eqref{eqn:simpson-rule-dx} dalam bahasa pemrograman Python salah satunya adalah seperti berikut ini

```python
# 0301-simpson.py
# Integration with simpson's rule
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

# define number of half parabolic areas
N = 10
if (N / 2) != int(N /2):
	N = N + 1
dx = (xend - xbeg) / N
M = int(N / 2)

# calculate definite integral
total = 0
x = xbeg
for i in range(M):
  area = ( f(x) + 4 * f(x+dx) + f(x+2*dx) ) * dx / 3
  total = total + area
  x = x + 2 * dx

# display results
print("Simpson's rule")
print("f(x) = ", fxs)
print("xbeg = ", xbeg)
print("xend = ", xend)
print("N = ", N)
print("integral = ", total)

```

yang akan memberikan hasil

```batch
==== RESTART: 0301-simpson.py ====
Simpson's rule
f(x) =  3x^2
xbeg =  1
xend =  2
N =  10
integral =  7.0
```

bila dijalankan. Program di atas dapat pula dijalankan secara daring di OneCompiler [3xu7gxycg](https://onecompiler.com/python/3xu7gxycg).

### assure n even
Perhatikan pada program yang diberikan bahwa terdapat baris

```python
N = 10
if (N / 2) != int(N /2):
	N = N + 1
dx = (xend - xbeg) / N
M = int(N / 2)
```

yang memaksa agar $N$ selalu bernilai genap, dengan menambahkannya dengan satu bila merupakan bilangan ganjil, yang kemudian diterapkan pada

```python
# calculate definite integral
total = 0
x = xbeg
for i in range(M):
  area = ( f(x) + 4 * f(x+dx) + f(x+2*dx) ) * dx / 3
  total = total + area
  x = x + 2 * dx
```

dengan asumsi bahwa $M = \frac12 N$ dengan $N$ bilangan genap.


## note
1. <a name="r01"></a>Eric W. Weisstein, "Simpson's Rule", from MathWorld--A Wolfram Web Resource, url  <https://mathworld.wolfram.com/SimpsonsRule.html> [20220309].
2. <a name="r02"></a>Wikipedia contributors, "Simpson's rule", Wikipedia, The Free Encyclopedia, 6 March 2022, 19:03 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1075614881> [20220309].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0303?src=hash&amp;ref_src=twsrc%5Etfw">#bug0303</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1501486318102417410?ref_src=twsrc%5Etfw">March 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
