---
layout: butir
authors: [viridi]
title: trapezoidal rule
permalink: pages/0302
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["numerical", "integration", "partition", "trapezoidal rule"]
date: 2022-03-09 15:58:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/30/2022-02-25-trapezoidal-rule.md
twitter_username: 6unpnp
nodes: []
---
Salah satu metode integrasi numerik dengan partisi adalah aturan trapesium, yang membagi luas di bawah kurva dengan partisi-partisi berbentuk trapesium untuk menghitung suatu integral tertentu [[1](#r01)]. Aturan ini merupakan salah satu dari aturan-aturan terpenting dalam teori integrasi [[2](#r02)]. Metode ini memerlukan jumlah titik $N \ge 2$.


## formulation
Suatu kurva dengan luas di bawahnya dibagi dalam partisi-partisi berbentuk trapesium diberikan pada gambar berikut ini.

![]({{ site.baseurl}}/assets/img/0/30/0302-a.png) \
Gambar <a name='fig1'>1</a>. Partisi pada integrasi numerik dengan aturan trapesium.

Terdapat fungsi $f(x)$ yang diintegralkan mulai dari $x = x_1$ sampai dengan $x = x_5$ menggunakan empat buah partisi atau $N = 4$ sehingga terdapat luas trapesium $A_1$, .., $A_4$ seperti diberikan pada Gambar [1](#fig1). Untuk satu partisi dapat dituliskan

\begin{equation}\label{eqn:trapezoidal-rule-single-partition}
A_i = \left[ f(x_i) + f(x_{i+1}) \right] \frac{\Delta x}{2},
\end{equation}

dengan $\Delta x = x_{i+1} - x_i$, untuk $i = 1, .., N$. Gambar [1](#fig1) memberikan ilustrasi untuk $N = 4$.

Dengan demikian untuk $N$ partisi dapat dituliskan

\begin{equation}\label{eqn:trapezoidal-rule}
\int_{x_i}^{x_f} f(x) \ dx \approx \sum_{i = 1}^N
\left[ f(x_i) + f(x_{i+1}) \right] \frac{\Delta x}{2},
\end{equation}

dengan

\begin{equation}\label{eqn:trapezoidal-rule-dx}
\Delta x = \frac{x_f - x_i}{N},
\end{equation}

di mana $N$ jumlah partisi, $x_i$ batas bawah integral, dan $x_f$ batas atas integral.


## a code
Implementasi Persamaan \eqref{eqn:trapezoidal-rule} dan \eqref{eqn:trapezoidal-rule-dx} dalam bahasa pemrograman Python salah satunya adalah seperti berikut ini

```python
# 0301-trapezoidal.py
# Integration with trapezoidal rule
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

# define number of trapezoidal areas
N = 10
dx = (xend - xbeg) / N

# calculate definite integral
total = 0
x = xbeg
for i in range(N):
  area = (f(x) + f(x+dx)) * dx / 2
  total = total + area
  x = x + dx

# display results
print("Trapezoidal rule")
print("f(x) = ", fxs)
print("xbeg = ", xbeg)
print("xend = ", xend)
print("N = ", N)
print("integral = ", total)
```

yang akan memberikan hasil

```batch
==== RESTART: 0301-trapezoidal.py ====
Trapezoidal rule
f(x) =  3x^2
xbeg =  1
xend =  2
N =  10
integral =  7.005000000000004
```

bila dijalankan. Program di atas dapat pula dijalankan secara daring di OneCompiler [3xu7ggwcf](https://onecompiler.com/python/3xu7ggwcf).


## note
1. <a name="r01"></a>GeeksforGeeks, nitin mittal, code_hunt, varshagumber28, "Trapezoidal Rule for Approximate Value of Definite Integral", GeeksforGeeks, 17 Jun 2021, url <https://www.geeksforgeeks.org/trapezoidal-rule-for-approximate-value-of-definite-integral/> [20220309].
2. <a name="r02"></a>anjalishukla1859, "Trapezoidal Rule", GeeksforGeeks, 24 Jun 2021, url <https://www.geeksforgeeks.org/trapezoidal-rule/> [20220309].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0302?src=hash&amp;ref_src=twsrc%5Etfw">#bug0302</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1501482265381343236?ref_src=twsrc%5Etfw">March 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
