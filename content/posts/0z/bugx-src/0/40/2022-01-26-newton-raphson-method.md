---
layout: post
authors: [viridi]
title: newton-raphson method
permalink: pages/0403
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["root", "root finding method", "numerical method", "newton-raphson method"]
date: 2022-01-26 21:29:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/40/2022-01-26-newton-raphson-method.md
twitter_username: 6unpnp
nodes: []
youtube:
---
.. [[1](#r01)].


## formula
Metode Newton-Raphson memerlukan satu titik sebagai syarat awal, yang merupakan tebakan awal untuk akar, misalnya $x_1$. Nilai ini kemudian diperbaiki melalu rumusan iteratif

\begin{equation}\label{eqn:newton-raphson-method}
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)},
\end{equation}

dengan $f(x)$ adalah fungsi yang ingin dicari akarnya dan $f'(x)$ adalah turunan dari fungsi tersebut.


```
# 0403-newton-raphson.py
# Impelement Newton-Raphson method
# Sparisoma Viridi | https://github.com/dudung/bug
# 20220126 Create this program.

# define a polynomial function and its derivativve
def poly(x):
    x1 = 2.0
    x2 = 5.0
    x3 = 9.87654321
    f = (x - x1) * (x - x2) * (x - x3)
    fx1 = (x - x2) * (x - x3)
    fx2 = (x - x1) * (x - x3)
    fx3 = (x - x1) * (x - x2)
    fx = fx1 + fx2 + fx3
    return f, fx

# define initial conditions
x1 = 100

# define accuracy
eps = 1E-14

# Set initial error
f1, fx1 = poly(x1)
err = abs(f1)

# Find a root
n = 0
print("n x")
while err > eps:
    f1, fx1 = poly(x1)
    x2 = x1 - f1 / fx1
    f2, fx2 = poly(x2)
    err = abs(f1)
    x1 = x2
    n = n + 1
    print(n, x2)

# Resume result
print("step = ", n, sep='')
print("err = ", err, sep='')
print("root = ", x1, sep='')
```

```
============ RESTART: 0403-newton-raphson.py ===========
n x
1 68.57943328973627
2 47.65146466568203
3 33.728453898954925
4 24.490707389328925
5 18.400427840707824
6 14.446544420628541
7 11.977534952176475
8 10.587696230350925
9 10.00000625203186
10 9.881306106256702
11 9.876550723839335
12 9.876543210018745
13 9.87654321
14 9.87654321
step = 14
err = 0.0
root = 9.87654321
```

## note
1. <a name='r01'></a>

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
