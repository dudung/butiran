---
layout: butir
authors: [viridi]
title: numerical differential
permalink: pages/0520
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["numerical", "differential", "limit"]
date: 2022-02-26T12:10:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/0/52/2022-02-26-numerical-differential.md
twitter_username: 6unpnp
nodes: []
---
Diferensial atau turunan diperkenalkan melalui konsep limit [[1](#r01)].


## differential
Turunan suatu fungsi $f(x)$ dapat diperoleh dengan

\begin{equation}\label{eqn:differential-of-a-function}
f'(x) = \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \frac{f(x + \Delta x) - f(x)}{\Delta x},
\end{equation}

dengan $f(x)$ merupakan fungsi yang kontinu pada titik di mana turunan fungsinya $f'(x)$ ingin diperoleh.

### polynomial function
Untuk memberikan ilustrasi pemanfaatan Persamaan \eqref{eqn:differential-of-a-function} dapat digunakan suatu polinomial, seperti $f(x) = ax^2 + bx + c$ sebagai berikut ini. Pertama-tama perlu dihitung

$$
\begin{array}{rcl}
\Delta f(x) & = & f(x + \Delta x) - f(x) \newline
& = & [ a(x + \Delta x)^2 + b (x + \Delta x) + c] \newline
&& - (ax^2 + bx + c) \newline
& = & a[x^2 + 2x\Delta x + (\Delta x)^2] + bx + b\Delta x + c] \newline
&& - ax^2 - bx - c \newline
& = & ax^2 + 2ax\Delta x + a(\Delta x)^2 + bx + b\Delta x + c \newline
&& - ax^2 - bx - c \newline
& = & ax^2 - ax^2 + bx - bx + c - c \newline
&& 2ax\Delta x + a(\Delta x)^2 + b\Delta x \newline
& = & 2ax\Delta x + a(\Delta x)^2 + b\Delta x \newline
& = & (2ax + a\Delta x + b) \Delta x \newline
\end{array}
$$

yang kemudian disubstitusikan

$$
\begin{array}{rcl}
f'(x) & = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ \displaystyle \frac{\Delta f(x)}{\Delta x} \newline
& = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ \displaystyle \frac{f(x + \Delta x) - f(x)}{\Delta x} \newline
& = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ \displaystyle \frac{(2ax + a\Delta x + b) \Delta x}{\Delta x} \newline
& = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ 2ax + a\Delta x + b \newline
& = & 2ax + b,
\end{array}
$$

yang merupakan turunan dari $f(x) = ax^2 + bx + c$.

### trigonometric function
Dengan hubungan

\begin{equation}\label{eqn:sin(a+b)}
\sin (a + b) = \sin a \cos b + \cos a \sin b
\end{equation}

dapat diperoleh

$$
\sin(x + \Delta x) = \sin x \cos \Delta x + \cos x \sin \Delta x,
$$

sehingga

$$
\begin{array}{c}
\Delta f(x) = \sin(x + \Delta x) - \sin x = \newline
\sin x (\cos \Delta x - 1) + \cos x \sin \Delta x.
\end{array}
$$

Lalu terdapat pula

$$
\left. \frac{\sin x}{x} \right|_{x = 0} = 1.
$$

Dengan menggunakan hubungan-hubungan di atas dapat diperoleh

$$
\begin{array}{rcl}
f'(x) & = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ \ \ \displaystyle \frac{\Delta f(x)}{\Delta x} \newline
& = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ \ \ \displaystyle \frac{\sin(x + \Delta x) - \sin x}{\Delta x} \newline
& = & \begin{array}{c} \lim \newline \Delta x \rightarrow 0 \end{array} \ \ \ \ \left[ \displaystyle \frac{\sin x (\cos \Delta x - 1)}{\Delta x} \right. \newline
&& \displaystyle + \left. \frac{\cos x \sin \Delta x}{\Delta x} \right] \newline
& = & \cos x,
\end{array}
$$

yang merupakan turunan dari $\sin x$.


## numerical approach
Pendekatan numerik untuk mencari turunan dapat dilakukan dengan menggunakan Persamaan \eqref{eqn:differential-of-a-function} yang hasilnya adalah nilai numerik dan bukan berupa fungsi matematika.

### polynomial function
```python
# 0520-simple-num-diff-poly.py
# Simple numerical differential polynomial function
# Sparisoma Viridi | https://github.com/dudung
# 20220226 Create this example program

# define a polynomial function and its derivative
c = [1, 3, 6]
def poly(x):
    y = c[0]  + c[1] * x + c[2] * x * x
    return y
def diff(x):
    y = c[1] + 2 * c[2] * x
    return y

N = 15
dx = 1.0
x = 1

print("poly(x) = ", c, sep='')
print("x = ", x, sep='')
print("the  dx    num")
for n in range(N):
  fx_the = diff(x)
  fx_num = (poly(x + dx) - poly(x)) / dx

  print("%.1f" % fx_the, "%.0e" % dx, "%.8f" % fx_num)
  dx = dx / 10

```

Program di atas akan memberikan hasil

```batch
==== RESTART: 0520-simple-num-diff-poly.py ====
poly(x) = [1, 3, 6]
x = 1
the  dx    num
15.0 1e+00 21.00000000
15.0 1e-01 15.60000000
15.0 1e-02 15.06000000
15.0 1e-03 15.00600000
15.0 1e-04 15.00060000
15.0 1e-05 15.00006000
15.0 1e-06 15.00000600
15.0 1e-07 15.00000060
15.0 1e-08 15.00000000
15.0 1e-09 15.00000124
15.0 1e-10 15.00000124
15.0 1e-11 14.99991242
15.0 1e-12 15.00133351
15.0 1e-13 14.99245172
15.0 1e-14 15.09903313
```

saat dijalankan yang menghitung $f'(x)$ dari $f(x) = 1 + 3x + 6x^2$ untuk $x = 1$, di mana hasil analitik adalah $f'(1) = 15$. Hasil analitik dan numerik diindikasikan dengan `the` dan `num`.

### trigonometric function

```python
# 0520-simple-num-diff-trigo.py
# Simple numerical differential trigonometric function
# Sparisoma Viridi | https://github.com/dudung
# 20220226 Create this example program

# import package
import math

# define a trigonometric function and its derivative
trigos = "2 sin 3x"
def trigo(x):
    y = 2 * math.sin(3 * x)
    return y
def diff(x):
    y = 6 * math.cos (3 * x)
    return y

N = 15
dx = 1.0
x = 1

print("trigo(x) = ", trigos, sep='')
print("x = ", x, sep='')
print("the    dx    num")
for n in range(N):
  fx_the = diff(x)
  fx_num = (trigo(x + dx) - trigo(x)) / dx

  print("%.3f" % fx_the, "%.0e" % dx, "%.8f" % fx_num)
  dx = dx / 10

```

Program di atas akan memberikan hasil

```batch
==== RESTART: 0520-simple-num-diff-trigo.py ====
trigo(x) = 2 sin 3x
x = 1
the    dx    num
-5.940 1e+00 -0.84107101
-5.940 1e-01 -5.97731404
-5.940 1e-02 -5.95176387
-5.940 1e-03 -5.94121615
-5.940 1e-04 -5.94008190
-5.940 1e-05 -5.93996768
-5.940 1e-06 -5.93995625
-5.940 1e-07 -5.93995511
-5.940 1e-08 -5.93995496
-5.940 1e-09 -5.93995547
-5.940 1e-10 -5.93995519
-5.940 1e-11 -5.93995408
-5.940 1e-12 -5.94047034
-5.940 1e-13 -5.93525229
-5.940 1e-14 -5.97855099
```

saat dijalankan yang menghitung $f'(x)$ dari $f(x) = 2 \sin 3x$ untuk $x = 1$.


## exer
1. Apakah program `0520-simple-num-diff-poly.py` dapat digunakan untuk menghitung turunan dari fungsi $f(x) = 1 + 2x + x^2 + 2x^3 + x^4$? Bila ya, bagaimana bentuk variabel `c` yang berbentuk list Python tersebut?
2. Secara umum apakah program `0520-simple-num-diff-trigo.py` dapat digunakan untuk meghitung turunan dari $f(x) = 5\cos (4x + 1)$?


## note
1. <a name="r01"></a>

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ya, c = [1, 2, 1, 2, 1]; &nbsp;
2) ya; &nbsp;
</ans>
