---
layout: post
authors: [viridi]
title: quadratic formula
permalink: pages/0401
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["root", "root finding method", "analytical method", "quadratic formula"]
date: 2022-01-25 06:20:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/40/2022-01-24-quadratic-formula.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Persamaan kuadrat atau disebut juga persamaan dengan derajat dua memiliki bentuk $ax^2 + bx + c = 0$ dengan $a$, $b$, $c$ diketahui, $a \ne 0$, dan $x$ merupakan nilai yang ingin dicari [[1](#r01)]. Nilai $x$ dapat diperoleh dengan melengkapi bentuk kuadrat dari persamaan kuadrat [[2](#r02)], sehingga memberikan formula kuadrat [[3](#r03)].


## equation and formula
Persamaan kuadrat berbentuk

\begin{equation}\label{eqn:quadratic-equation}
ax^2 + bx + c = 0
\end{equation}

dapat dilengkapi bentuk kuadratnya

$$
\begin{array}{rcl}
ax^2 + bx + c & = & 0 \newline
\displaystyle x^2 + \frac{b}{a} x + \frac{c}{a} & = & \newline
\displaystyle x^2 + \frac{b}{a} x & = & \displaystyle -\frac{c}{a} \newline
\displaystyle x^2 + \frac{b}{a} x + \frac{b^2}{4a^2} & = & \displaystyle -\frac{c}{a} + \frac{b^2}{4a^2} \newline
\displaystyle \left( x + \frac{b}{2a} \right)^2 & = & \displaystyle -\frac{4ac}{4a \cdot a} + \frac{b^2}{4a^2} \newline
& = & \displaystyle \frac{1}{4a^2} \left( -4ac + b^2 \right) \newline
\displaystyle x + \frac{b}{2a} & = & \displaystyle \pm \frac{1}{2a} \sqrt{-4ac + b^2} \newline
x & = & \displaystyle - \frac{b}{2a} \pm \frac{1}{2a} \sqrt{-4ac + b^2} \newline
& = & \displaystyle - \frac{b}{2a} \pm \frac{1}{2a} \sqrt{-4ac + b^2},
\end{array}
$$

yang lebih umum dituliskan dalam bentuk

\begin{equation}\label{eqn:quadratic-formula}
x_{1, 2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\end{equation}

dan dikenal sebagai formula kuadrat.

## discriminant
Formula kuadrat tidak hanya menghasilkan solusi dari persamaan kuadrat tetapi juga memberikan informasi mengenai sifat solusi yang diperoleh, di mana informasi ini tersimpan dalam diskriminan yang memberitahu apakah solusinya berupa bilangan riil atau kompleks dan berapa jumlah solusi dari masihg-masing jenis bilangan untuk diharapkan [[4](#r04)].

Tabel <a name='tab1'>1</a> Nilai diskriminan dan artinya.

Nilai Diskriminan | Catatan | Hasil
:- | :- | :- | :-
$b^2 - 4ac = 0$ |  | Satu solusi rasional <br> berulang
$b^2 - 4ac > 0$ | kuadrat sempurna | Dua solusi rasional
$b^2 - 4ac > 0$ | bukan kuadrat <br >sempurna | Dua solusi irasional
$b^2 - 4ac < 0$ |  | Dua solusi kompleks

Untuk saat ini akan dibatas dulu pada satu solusi berulang atau dua solusi yang keduanya merupakan bilangan rasional.


## implementation
Impementasi dari Persamaan \eqref{eqn:quadratic-formula} dan pemanfaatan diskriminan diberikan pada program berikut ini.

```python
# 0401-quadratic-formula.py
# Solve quadratic equation using quadartic formula
# Sparisoma Viridi | https://github.com/dudung/bugx
# 20220124 Create this program.

# import the math module
import math

# create cofficients for quadratic equation
def equation(x1, x2):
    a = 1
    b = -(x1 + x2)
    c = x1 * x2
    return [c, b, a]

# calculate discriminant of a quadratic equation
def discriminant(coef):
    c = coef[0]
    b = coef[1]
    a = coef[2]
    D = b * b - 4 * a * c;
    return D

# calculate roots of a quadratic equation
def root(coef):
    b = coef[1]
    a = coef[2]
    D = discriminant(coef)
    if(D >= 0):
        x1 = (-b - math.sqrt(D)) / (2*a)
        x2 = (-b + math.sqrt(D)) / (2*a)
    else:
        x1 = "not real"
        x2 = "not real"
    return x1, x2

# define a quadratic equation ax^2 + bx + c with [c, b, a]
quad_eqn = [9, -10, 1]

# create a quadratic equation from (x - x1)(x - x2)
quad_eqn = equation(3, -10)

# calculate discriminant
disc = discriminant(quad_eqn)

# calculate only real roots using quadratic formula
x1, x2 = root(quad_eqn)

# print results
print("equation: ", quad_eqn, sep='')
print("D = ", disc, sep='')
print("x1 = ", x1, sep='')
print("x2 = ", x2, sep='')
```

Kode di atas dapat dicoba di OneCompiler [3xrazmhzv](https://onecompiler.com/python/3xrazmhzv). Koefisien persamaan kuadrat $a$, $b$, $c$ diungkapkan dalam bentuk larik `[c0, c1, c2]` yang merepresentasikan persamaan $c_0 + c_1 x + c_2 x^2 = 0$ atau dengan kata lain $c_2 = a$, $c_1 = b$, dan $c_0 = c$. Larik ini akan digunakan oleh fungsi `root` dan `discriminant`. Selain itu terdapat pula fungsi `equation` yang menghasilkan larik tersebut dengan masukannya adalah akar-akar persamaan dari persamaan $(x - x_1)(x - x_2) = 0$.

### some cases
Tiga buah fungsi kuadrat diberikan pada Gambar [1](#fig1) untuk dibandingkan keberadaan akar-akarnya secara grafis dengan menggunakan Persamaan \eqref{eqn:quadratic-formula} melalui program `0401-quadratic-formula.py` yang diberikan.

![]({{ site.baseurl }}/assets/img/0/40/0401-a.png) \
Gambar <a name='fig1'>1</a>. Tiga fungsi kuadrat yang tidak memiliki akar riil (atas, $\color{#ac5}{\blacktriangle}$), satu akar riil berulang (tengah, $\color{#c55}{\small\blacksquare}$), dan dua akar riil (bawah, $\color{#58c}{\Large\bullet}$).

Program `0401-quadratic-formula.py` dijalankan dengan hasil

```
========== RESTART: 0401-quadratic-formula.py ==========
equation: [34, -10, 1]
D = -36
x1 = not real
x2 = not real
>>> 
========== RESTART: 0401-quadratic-formula.py ==========
equation: [25, -10, 1]
D = 0
x1 = 5.0
x2 = 5.0
>>> 
========== RESTART: 0401-quadratic-formula.py ==========
equation: [16, -10, 1]
D = 36
x1 = 2.0
x2 = 8.0
```

yang cocok dengan Gambar [1](#fig1).


## exer
1. Apa hasil dari program `0401-quadratic-formula.py` bila digunakan larik `[9, -10, 10]` sebagai masukan koefisien dari fungsi `root`?
2. Bagaimana larik yang dihasilkan oleh fungsi `equation` bila kedua argumennya adalah `3` dan `5`?


## note
1. <a name='r01'></a>Rod Pierce, "Quadratic Equation", MathIsFun.com, Rod Pierce (Ed.), 31 Aug 2021, url <https://www.mathsisfun.com/algebra/quadratic-equation.html> [20220124].
2. <a name='r02'></a>Eric W. Weisstein, "Quadratic Equation", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 21 Jan 2022, url <https://mathworld.wolfram.com/QuadraticEquation.html> [20220124]
3. <a name='r03'></a>Wikipedia contributors, "Quadratic formula", Wikipedia, The Free Encyclopedia, 25 December 2021, 14:47 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1062001380> [20220124].
4. <a name='r04'></a>Lumen Learning, "The Discriminant", Intermediate Algebra, Lumen Waymaker,  url <https://courses.lumenlearning.com/intermediatealgebra/chapter/read-the-discriminant/> [20220124].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0401?src=hash&amp;ref_src=twsrc%5Etfw">#bug0401</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1485619675015053315?ref_src=twsrc%5Etfw">January 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) kedua akar bukan bilangan riil (not real); &nbsp;
2) `[15, -8, 1]`; &nbsp;
</ans>


{% comment %}
{% endcomment %}
