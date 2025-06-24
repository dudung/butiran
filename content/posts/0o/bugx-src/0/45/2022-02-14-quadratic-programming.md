---
layout: post
authors: [viridi]
title: quadratic programming
permalink: pages/0452
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["optimization", "minimum", "maximum", "optimization problem", "quadratic programming"]
date: 2022-02-15 08:51:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/45/2022-02-14-quadratic-programming.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Sedikit lebih umum dari pemrograman linier akan membawa kita pada pemrograman kuadrat atau quadratic programming, yang masih berfokus pada kasus konveks [[1](#r01)], di mana telah terdapat berbagai solver dalam Python seperti CVXOPT, CVXPY, Gurobi, MOSEK, qpOASES, dan quadprog [[2](#r02)]. Pemrograman kuadrat memiliki aplikasi pada bidang keuangan, berbagai jenis sistem komputer, statistik, produksi bahan kimia, dan algoritma untuk menyelesaikan pemrograman tak-linier yang lebih rumit [[3](#r03)].


## formula
Suatu pemrograman kuadratik adalah masalah melakukan optimasi suatu fungsi obyektif kuadratik yang tunduk pada kendala linier, yang perumusaman fungsi obybektifnya dapat terdiri dari tiga suku dengan suku kedua bertanda positif [[4](#r04)] atau cukup dua suku dengan suku kedua bertanda negatif [[5](#r05)]. Di sini akan digunakan hanya dua suku dengan suku kedua bertanda positif, di mana suku ketiga dapat dihilangkan karena tidak berdampak pada solusi $x^\*$ [[4](#r04)], sehingga memberikan

\begin{equation}\label{eqn:minimize}
{\rm Minimumkan}: \ \ \ \ \ \ \ \ \frac12 x^T Q x + R^T x,
\end{equation}

\begin{equation}\label{subject-to}
\begin{array}{rl}
{\rm patuhi}:  \ \ \ \ \ \ \ \ & Ax \le b, \newline
& A_{eq} x = b_{eq},
\end{array}
\end{equation}

dengan $x \in \mathbb{R}^n$ adalah vektor variabel desain yang memiliki $n$ elemen. Vektor dan matriks yang lain berdimensi $Q \in \mathbb{R}^{n \times n}$, $R \in \mathbb{R}^n$, $A \in \mathbb{R}^{m \times n}$, $b \in \mathbb{R}^m$, $A_{eq} \in \mathbb{R}^{l \times n}$, dan $b_{eq} \in \mathbb{R}^l$, dengan $n$ adalah jumlah variabel desain, $m$ jumlah kendala pertidaksamaan, dan $l$ adalah jumlah kendala persamaan.


## least square
Kuadrat terkecil merupakan salah satu motivasi praktis dari pemrograman kuadratik yang akan dibahas di sini. Pertimbangkan suatu sistem persamaan linier yang bersifat terdeterminasi-berlebih (overdetermined), suatu matriks 'kurus' $A$ dan persamaan yang akan diselesaikan dalam bentuk

\begin{equation}\label{linear-system-of-equations}
y = Ax,
\end{equation}

dengan $x \in \mathbb{R}^n$ merupakan vektor yang tidak diketahui, $y \in \mathbb{R}^m$ termasuk data yang diketahui, dan $A \in \mathbb{R}^{m \times n}$ adalah matriks yang diketahui dengan $m > n$. Dalam kondisi yang sesuai Persamaan \eqref{linear-system-of-equations} tidak memiliki solusi unik karena terdapat lebih banyak persamaan dari yang tidak diketahui, sehingga sistem ini disebut sebagai sistem persamaan terdeterminasi-berlebih.

Salah satu pendekatan adalah dengan mencari solusi 'terbaik cocok' (best fit), yang untuk mencapainya didefinsikan kesalahan residual (residual error) sebagai

\begin{equation}\label{residual-error}
r = Ax - y,
\end{equation}

dan menganggap bahwa solusi $x^\*$ meminimumkan norm dari residual, $\|\|r\|\|$. Solusi ini disebut sebagai solusi 'kuadrat terkecil'. Seringnya pendekatan ini digunakan dalam analisis regresi, di antara banyak aplikasi sebagaimana akan ditunjukkan di bawah ini.

### linear regression
Pada regresi linier, istilah linier merujuk pada hubungan antara parameter yang diestimasi dengan hasilnya [[6](#r06)], dan tidak perlu linier dengan datanya. Sebagai contoh terdapat pasangan data $(x_i, y_i)$ untuk $i = 1, 2, \dots, N$ dengan $N > 0$ yang akan dicocokan dengan kurva polinomial order $5$

\begin{equation}\label{polynomial-5th-order}
y = \sum_{j = 0}^5 c_j x^j.
\end{equation}

Tujuannya adalah menentukan parameter $c_j$, $j = 0, .., 5$ yang terbaik agar cocok dengan data dalam arti tertentu. Untuk itu dapat dihitung residual $r_i$ untuk setiap pasangan data $(x_i, y_i)$

\begin{equation}\label{residual-error-i}
\begin{array}{rcl}
c_0 + c_1 x_1 + c_2 x_1^2 + c_3 x_1^3 + c_4 x_1^4 + c_5 x_1^5 - y_1 & =  & r_1, \newline
c_0 + c_1 x_2 + c_2 x_2^2 + c_3 x_2^3 + c_4 x_2^4 + c_5 x_2^5 - y_2 & =  & r_2, \newline
c_0 + c_1 x_3 + c_2 x_3^2 + c_3 x_3^3 + c_4 x_3^4 + c_5 x_3^5 - y_3 & =  & r_3, \newline
\vdots & = & \vdots \newline
c_0 + c_1 x_N + c_2 x_N^2 + c_3 x_N^3 + c_4 x_N^4 + c_5 x_N^5 - y_N & =  & r_N.
\end{array}
\end{equation}

Persamaan \eqref{residual-error-i} dapat diutliskan dalam bentuk matriks-vektor $Ac - y = r$, dengan

\begin{equation}\label{matrix-vector-a}
A = \left[
\begin{array}{cccccc}
1 & x_1 & x_1^2 & x_1^3 & x_1^4 & x_1^5 \newline
1 & x_2 & x_2^2 & x_2^3 & x_2^4 & x_2^5 \newline
1 & x_3 & x_3^2 & x_3^3 & x_3^4 & x_3^5 \newline
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots \newline
1 & x_N & x_N^2 & x_N^3 & x_N^4 & x_N^5 \newline
\end{array}
\right]
\end{equation}

\begin{equation}\label{matrix-vector-c}
c = \left[
\begin{array}{c}
c_0 \newline
c_1 \newline
c_2 \newline
c_3 \newline
c_4 \newline
c_5
\end{array}
\right],
\end{equation}

\begin{equation}\label{matrix-vector-y}
y = \left[
\begin{array}{c}
y_1 \newline
y_2 \newline
y_3 \newline
\vdots \newline
y_N
\end{array}
\right],
\end{equation}

dan

\begin{equation}\label{matrix-vector-r}
r = \left[
\begin{array}{c}
r_1 \newline
r_2 \newline
r_3 \newline
\vdots \newline
r_N
\end{array}
\right].
\end{equation}

Selanjutnya untuk menghitung kecocokan optimal untuk $c$, dilakukan dengan meminimumkan kuadrat dari residual, yang merupakan fungsi obyektifnya

\begin{equation}\label{objective-function}
\begin{array}{rcl}
f(x) & = & \frac12 ||r||^2 \newline
& = & \frac12 r^Tr \newline
& = & \frac12 (Ac - y)^T (Ac - y) \newline
& = & \frac12 c^T A^T A c - \frac12 y^T A c - \frac12 c^T A^T y + \frac12 y^T y \newline
& = & \frac12 c^T A^T A c - y^T A c + \frac12 y^T y.
\end{array}
\end{equation}

Perhatkan bahwa Persamaan \eqref{objective-function} merupakan fungsi kuadrat dalam variabel $c$ dan masalah ini tidak memiliki kendala. Sebagai hasilnya dapat dihitung turunan fungsi obyektif terhadap $c$ dan menyamakannya dengan nol untuk meminimumkannya

\begin{equation}\label{objective-function-minimum}
\begin{array}{rcl}
\displaystyle \frac{\partial}{\partial c} f(x) & = 0 \newline
\displaystyle \frac{\partial}{\partial c} \left( \frac12 c^T A^T A c - y^T A c + \frac12 y^T y \right) & = 0 \newline
A^T A c - A^T y & = & \newline
A^T A c & = & A^T y \newline
(A^T A)^{-1} A^T A c & = & (A^T A)^{-1} A^T y \newline
I c & = & (A^T A)^{-1} A^T y \newline
c & = & (A^T A)^{-1} A^T y,
\end{array}
\end{equation}

yang menghasilkan suatu formula langsung untuk mencocokkan koefisien polinomial $c_j$ dengan $j = 0, 1, \dots, 5$ menggunakan data yang diberikan.

## examples
Terdapat banyak contoh yang dapat diperoleh dengan berselancar. Untuk saat ini diberikan satu contoh berikut ini.

### linear regression
Untuk memberikan ilustrasi implementasi dari kuadrat terkecil pada regresi linier gambar berikut ini memberikan suatu data buatan.

![]({{ site.baseurl}}/assets/img/0/45/0452-a.png) \
Gambar <a name='fig1'>1</a>. Data buatan yang dicocokan dengan kurva polinomial berorde ketiga.

Dengan menggunakan aplikasi spreadsheet Microsoft Excel diperoleh oleh bentuk persamaan polinomialnya adalah

\begin{equation}\label{eqn:polynomial-3rd-order-spreadsheet-fit}
y = 0.756 + 3.355 x - 0.363 x^2 + 0.012 x^3
\end{equation}

dengan datanya dapat tersedia pada berkas [0452-a.txt](https://github.com/dudung/datax/blob/master/bugx/0452-a.txt).

Selanjutnya adalah menerapkan Persamaan \eqref{objective-function-minimum} pada data yang diberikan oleh Gambar [1](#fig1), yang salam satu implementasinya dengan bahasa pemrograman Python adalah seperti berikut ini.

```python
# 0452-qp-ls-lr-poly3.pg
# Impelement QP for LS in the case of LR for POLY3
# Sparisoma Viridi | https://github.com/dudung/bug
# 20220215 Create this program.

# abbreviations
# QP quaratic programming
# LS least square
# LR linear regression
# POLY3 polynomial function of 3rd order

# import numpy
import numpy as np

# open file, read lines and store them in a list, close file
fn = '0452-a.txt'
print('file:', fn)
with open(fn) as f:
    lines = f.readlines()

# create empty list
x = [[]]
y = [[]]
A = []

# iterate through lines but ommit the first element
for l in lines[1:]:
    s = l.rstrip('\n') 
    s = s.split('\t')
    xi = float(s[0])
    yi = float(s[1])

    x[0].append(xi)
    y[0].append(yi)
    
    p0 = 1
    p1 = xi
    p2 = xi**2
    p3 = xi**3
    Ai = [p0, p1, p2, p3]
    A.append(Ai)

# create numpy array
x = np.transpose(np.array(x))
y = np.transpose(np.array(y))
A = np.array(A)

# find c via some temporary variables
AT = np.transpose(A)
ATA = np.matmul(AT, A)
ATA_1 = np.linalg.inv(ATA)
ATA_1AT = np.matmul(ATA_1, AT)
c = np.matmul(ATA_1AT, y)

# print dimension of matrices
print()
print('y:', y.shape)
print('A:', A.shape)
print('AT:', AT.shape)
print('ATA:', ATA.shape)
print('ATA_1:', ATA_1.shape)
print('ATA_1AT:', ATA_1AT.shape)
print('c: ', c.shape)

# print results
print()
print('c = ')
print(c)
```

dengan

```batch
==== RESTART: 0452-qp-ls-lr-poly3.py ====
file: 0452-a.txt

y: (101, 1)
A: (101, 4)
AT: (4, 101)
ATA: (4, 4)
ATA_1: (4, 4)
ATA_1AT: (4, 101)
c:  (4, 1)

c = 
[[ 0.75618375]
 [ 3.35558613]
 [-0.36394393]
 [ 0.01210265]]
```

adalah hasilnya saat dijalankan. Di bawah ini diberikan perbandingan hasil yang baru saja diperoleh dengan yang diberikan pada Gambar [1](#fig1).

Tabel <a name='tab1'>1</a> Nilai $c$ yang diperoleh menggunakan spreadsheet dan Python melalui Persamaan \eqref{objective-function-minimum}.

Koefisien | Spreadsheet | Python
:-: | :-: | :-:
$c_0$ |  $0.756$ |  $0.75618375$
$c_1$ |  $3.355$ |  $3.35558613$
$c_2$ | $-0.363$ | $-0.36394393$
$c_3$ |  $0.012$ |  $0.01210265$

Hasil dengan suatu spreadsheet dapat dibuat lebih teliti terlihat bila diatur cara menampilkannya. Hasil pada Tabel [1](#tab1) masih menggunakan opsi standar.


## note
1. <a name='r01'></a>Johan Löfberg, "Quadratic programming", YALMIP, 17 Sep 2016, url <https://yalmip.github.io/tutorial/quadraticprogramming/> [20220209].
2. <a name='r02'></a>Stéphane Caron, "Quadratic Programming in Python", scaron.info, Apr 2017, url <https://scaron.info/blog/quadratic-programming-in-python.html> [20220209].
3. <a name='r03'></a>Jack Heider, Dajun Yue, Fengqi You, "Quadratic programming", CHEM_ENG 345: Process Optimization, Chemical and Biological Engineering Department, Northwestern University, Spring 2015, 7 June 2015, url <https://optimization.mccormick.northwestern.edu/index.php?oldid=3876> [20220209].
4. <a name='r04'></a>Scott Moura, "Chapter 2: Quadratic Programming", CE 191 — Civil and Environmental Engineering Systems Analysis, University of California, Berkeley, 10 Dec 2014, url <https://ecal.berkeley.edu/files/ce191/CH02-QuadraticProgramming.pdf> [20220214].
5. <a name='r05'></a>Ronald H. W. Hoppe, "Chapter 3 Quadratic Programming", MATH 6367 - Optimization Theory, University of Boston, 25 Oct 2006, url <https://www.math.uh.edu/~rohop/fall_06/Chapter3.pdf> [20220214].
6. <a name='r06'></a>Charlie, "Answer to 'What does linear stand for in linear regression?'", Cross Validated, 24 Mar 2011, url <https://stats.stackexchange.com/a/8706/342139> [20220214].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
