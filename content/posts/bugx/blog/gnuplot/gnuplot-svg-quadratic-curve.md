---
title: "gnuplot svg quadratic curve"
date: 2022-08-06T18:47:00+0700
lastmod: 2022-08-07T21:28:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['gnuplot', 'svg', 'bugx', 'quadratic']
url: "0137"
draft: false
---
Persamaan kuadrat dapat dinyatakan dalam bentuk standar, terfaktorkan, dan verteks [[1](#r01)]. Bentuk terfaktorkan kadang disebut juga dengan bentuk memotong [[2](#r02)].


## gnuplot features
+ Informasi bentuk fungsi ditampilkan mengikuti nilai koefisiennya [[3](#r03)].
+ Titik-titik data tersimpan dalam berkas skrip gnuplot dan bukan dalam berkas terpisah [[4](#r04)].
+ Terdapat berbagai jenis bentuk titik data [[5](#r05)].


## standard form
Fungsi kuadrat dalam bentuk standar dapat digambarkan sebagai berikut.

{{< svg
  "/static/img/gnuplot/quadratic-curve-standard.svg"
  "#fig1"
  "1"
  "Bentuk standar fungsi kuadrat dengan $a = 1$, $b = -10$, dan $c= 21$."
>}}

Hasil pada Gambar [1](#fig1) diperoleh dengan kode berikut ini

```bash
# quadratic-curve-standard.gnu
# plot quadratic curve using standard form
# Sparisoma Viridi
# dudung@gmail.com
# 2022.08.06.40198

# define a quadratic function
a = 1
b = -10
c = 21
f(x) = a * x**2 + b * x + c

# define data points
$data << EOD
3 0
7 0
EOD

# set terminal and output file
set output "quadratic-curve-standard.svg"
set term svg size 480,300 font "Times, 14"

# set axes settings
set xtics 1
set xrange [0:10]
set xlabel "x"
set ytics 5
set yrange [-5:25]
set ylabel "y"
set grid

# set number of samples
set samples 100

# do plotting
set label "f(x) = " . a . "x^2 + " . b . "x + " . c at 5,10 center
plot f(x) t "" lw 2 lc 7, "$data" w p t "" ps 1 pt 7 lc 6
```

yang dipanggil menggunakan gnuplot.


## factored form
Fungsi kuadrat dalam bentuk terfaktorkan dapat digambarkan sebagai berikut.

{{< svg
  "/static/img/gnuplot/quadratic-curve-factored.svg"
  "#fig2"
  "2"
  "Bentuk terfaktorkan fungsi kuadrat dengan $a = 0.5$, $x_1 = 2$, dan $x_2 = 8$."
>}}

Hasil pada Gambar [2](#fig2) diperoleh dengan kode berikut ini

```bash
# quadratic-curve-factored.gnu
# plot quadratic curve using factored form
# Sparisoma Viridi
# dudung@gmail.com
# 2022.08.06.40198

# define a quadratic function
a = 0.5
x1 = 2
x2 = 8
f(x) = a * (x - x1) * (x - x2)
y1 = f(x1)
y2 = f(x2)

# define data points
$data << EOD
2 0
8 0
EOD

# set terminal and output file
set output "quadratic-curve-factored.svg"
set term svg size 480,300 font "Times, 14"

# set axes settings
set xtics 1
set xrange [0:10]
set xlabel "x"
set ytics 2.5
set yrange [-5:10]
set ylabel "y"
set grid

# set number of samples
set samples 100

# do plotting
set label \
sprintf("f(x) = %.2f (x - %.1f) (x - %.1f)", a, x1, x2) \
at 5,2.5 center
plot f(x) t "" lw 2 lc 7, "$data" w p t "" ps 1 pt 7 lc 6
```
yang dipanggil menggunakan gnuplot.


## vertex form
Fungsi kuadrat dalam bentuk terfaktorkan dapat digambarkan sebagai berikut.

{{< svg
  "/static/img/gnuplot/quadratic-curve-vertex.svg"
  "#fig3"
  "3"
  "Bentuk verteks fungsi kuadrat dengan $a = 0.2$, $x_p = 5$, dan $k = 3$."
>}}

Hasil pada Gambar [3](#fig3) diperoleh dengan kode berikut ini

```bash
# quadratic-curve-vertex.gnu
# plot quadratic curve using vertex form
# Sparisoma Viridi
# dudung@gmail.com
# 2022.08.07.40198

# define a quadratic function
a = 0.2
xp = 5
k = 3
f(x) = a * (x - xp)**2 + k

# define data points
$data << EOD
0 8
5 3
EOD

# set terminal and output file
set output "quadratic-curve-vertex.svg"
set term svg size 480,300 font "Times, 14"

# set axes settings
set xtics 1
set xrange [0:10]
set xlabel "x"
set ytics 1
set yrange [3:8]
set ylabel "y"
set grid

# set number of samples
set samples 100

# do plotting
set label \
sprintf("f(x) = %.2f (x - %.1f)^2 + %.1f", a, xp, k) \
at 5,6 center
plot f(x) t "" lw 2 lc 7, "$data" w p t "" ps 1 pt 7 lc 6
```

yang dipanggil menggunakan gnuplot.


## forms conversion
Konversi antara dua bentuk dari ketiga bentuk persamaan kuadrat dapat ditelusuri dengan mengubah satu bentuk menjadi bentuk lain sehingga diperoleh hubungan koefisien-koefisien antar bentuk asal dan bentuk tujuan.

Bentuk standar, terfaktorkan, dan verteks diberikan oleh persamaan

\begin{equation}\label{eqn:standard-form}
f_S(x) = ax^2 + bx + c,
\end{equation}

\begin{equation}\label{eqn:factored-form}
f_F(x) = a(x - x_1)(x - x_2),
\end{equation}

\begin{equation}\label{eqn:vertex-form}
f_V(x) = a(x - x_p)^2 + k,
\end{equation}

di mana indeks bawah $S$ untuk standar, $F$ untuk terfaktorkan, dan $V$ untuk verteks.

Persamaan \eqref{eqn:factored-form} dapat menjadi Persamaan \eqref{eqn:standard-form} dengan

\begin{equation}\nonumber
\begin{array}{rcl}
x_1 + x_2 & = & \displaystyle -\frac{b}{a}, \newline
x_1 \ \ x_2 & = & \displaystyle \frac{c}{a},
\end{array}
\end{equation}

dan Persaman \eqref{eqn:vertex-form} dapat menjadi Persamaan \eqref{eqn:standard-form} dengan

\begin{equation}\nonumber
\begin{array}{rcl}
x_p & = & \displaystyle -\frac{b}{2a}, \newline
x_p^2 & = & \displaystyle \frac{c - k}{a}.
\end{array}
\end{equation}

Koefisien $a$ pada Persamaan \eqref{eqn:standard-form}, \eqref{eqn:factored-form}, dan \eqref{eqn:vertex-form} bernilai sama.


## to-do
+ Mempelajari karakter kurva parabola dan makna parameter $a$, $b$, $c$, $x_1$, $x_2$, $x_p$, dan $k$.
+ Mengaitkannya dengan gerak parabola dan besaran kinematika $x_0$, $y_0$, $v_{0x}$, $v_{0y}$, $a_y$.
+ Membuat template lintasan parabola dan besaran kinematika terkaitnya.


## notes
1. <a name='r01'></a>The Albert Team, "Forms of Quadratics: Explanations, Tips, and Examples", Learn By Doing, Inc., 1 Mar 2022, url <https://www.albert.io/blog/forms-of-quadratics/> [20220806].
2. <a name='r02'></a>Vivian Loh, "Converting Between Different Forms of a Quadratic", Expii, Inc., 2019, url <https://www.expii.com/t/converting-between-different-forms-of-a-quadratic-4852> [20220806]. 
3. <a name='r03'></a>Tom Fenech, "Answer to 'gnuplot title variables separated by text'", Stack Overflow, 20 Sep 2014, url <https://stackoverflow.com/a/25950105/9475509> [20220806].
4. <a name='r04'></a>Ciro Santilli Путлер Капут 六四事, "Answer to 'How to plot data without a separate file by specifying all points inside the Gnuplot script?'", Stack Overflow, 18 Nov 2019, url <https://stackoverflow.com/a/33064653/9475509> [20220806].
5. <a name='r05'></a>Christoph, "Answer to 'How set point type from data in gnuplot?'", Stack Overflow, 14 Apr 2015, url <https://stackoverflow.com/a/29624574/9475509> [20220806].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}