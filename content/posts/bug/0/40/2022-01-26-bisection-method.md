---
layout: post
authors: [viridi]
title: bisection method
permalink: pages/0402
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["root", "root finding method", "numerical method", "bisection method"]
date: 2022-01-26 18:42:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/40/2022-01-26-bisection-method.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Metode bisection dalam bidang matematika merupakan suatu metode pencarian akar yang berlaku untuk sembarang fungsi kontinu dengan ketentuan diperlukan dua nilai fungsi yang berbeda tanda [[1](#r01)]. Kelebihan metode ini adalah adanya jaminan konvergensi, akan tetapi belum dapat mendeteksi bila terdapat banyak akar [[2](#r02)]. Dengan dua nilai awal, nilai ketiga diperoleh sebagai titik tengah dua nilai sebelumnya yang lalu nilai terbaru ini perlu dipilih untuk menggantikan salah satu dari dua nilai sebelumnya, dengan memperhatikan bahwa akar terdapat di antara dua nilai terakhir yang disimpan, yang bersifat intuitif [[3](#r03)].


## code 1
Salah satu contoh penerapannya adalah seperti kode berikut ini

```python
# 0402-bisection-with-list.py
# Calculate root using bisection method
# Sparisoma Viridi | https://github.com/dudung/bug
# 20220126 Create this program.

# define a quadratic function
def f(x):
    a = 1
    b = -100
    c = 475
    y = a*x*x + b*x + c
    return y

# define initial value using list
x = [0.0, 15.0]
i = len(x)

# define error and accuracy
err = abs(f(x[i-1]))
eps = 1E-2

# peform calculation
while err > eps:
    xnew = 0.5 * (x[i-1] + x[i-2])
    x.append(xnew)

    err = abs(f(x[i-1]))
    
    if f(x[i]) * f(x[i-1]) > 0:
        x[i-1], x[i-2] = x[i-2], x[i-1]

    # display results
    if i == 2:
        print("x = ")
        print(x[0])
        print(x[1])
    else:
        print(x[i])
    
    i = len(x)

# display error and accuracy
print("err = ", err, sep='')
print("eps = ", eps, sep='')
```

yang dapat dicoba di OneCompiler [3xrg22cjd](https://onecompiler.com/python/3xrg22cjd). Hasil program di atas adalah

```
========= RESTART: 0402-bisection-with-list.py =========
x = 
15.0
0.0
3.75
5.625
4.6875
5.15625
4.921875
5.0390625
4.98046875
5.009765625
4.9951171875
5.00244140625
4.998779296875
5.0006103515625
4.99969482421875
5.000152587890625
4.9999237060546875
5.000038146972656
err = 0.006866460898891091
eps = 0.01
```

yang merupakan salah satu akar dari persamaan kuadrat $f(x) = x^2 - 100x + 475$.


## formulation
Pada program sebelumnya telah diberikan bagaimana contoh implementasi metode bisection. Biasanya, agar lebih terstruktur, disampaikan dahulu perumusannya yang kemudian diikuti oleh implementasinya. Di sini ditunjukkan lebih dahulu contoh implementasinya agar dapat menjadi semangat, terutama untuk pembaca yang lebih menyukai praktek ketimbang teori.

Metode bisection memerlukan dua syarat awal, misalnya $x_1$ dan $x_2$, yang telah diasumsikan bahwa

\begin{equation}\label{eqn:bisection-initial-condition}
f(x_1) f(x_2) < 0,
\end{equation}

yang menandakan bahwa terdapat jumlah ganjil akar, setidaknya satu, di antara kedua tebakan awal $x_1$ dan $x_2$. Nama bisection diperoleh dari langkah

\begin{equation}\label{eqn:bisection-new-x}
x_3 = \tfrac12 (x_1 + x_2).
\end{equation}

Selanjutnya kedua syarat awal perlu ditukar untuk memastikan bahwa akar selalu terletak pada dua nilai terakhir, misalnya dengan

\begin{equation}\label{eqn:bisection-swap-x2-x1}
\left[ f(x_3)f(x_1) < 0 \right] \Rightarrow (x_1 \rightleftarrows x_2).
\end{equation}

Setelah itu tinggal mengulang-ulang Persamaan \eqref{eqn:bisection-new-x} dan \eqref{eqn:bisection-swap-x2-x1} sampai akurasi yang diinginkan, misalnya

\begin{equation}\label{eqn:bisection-termination}
|f(x_n)| < \varepsilon,
\end{equation}

tercapai. Program `0402-bisection-with-list.py` merupakan implementasi dari persamaan-persamaan di atas. Selanjutnya dapat pula dituliskan sebagai syarat awal

\begin{equation}\label{eqn:bisection-compact-1}
x_{n+2} = \tfrac12(x_{n+1} + x_{n}).
\end{equation}

yang dilanjutkan dengan pengulangan

\begin{equation}\label{eqn:bisection-compact-2}
x_{n+3} = \left\\{
\begin{array}{cc}
\frac12(x_{n+2} + x_{n+1}), & f(x_{n+2})f(x_{n+1}) < 0, \newline
\frac12(x_{n+2} + x_{n}), & f(x_{n+2})f(x_{n+1}) > 0, \newline
\end{array}
\right.
\end{equation}

sebagai perumusan yang lebih kompak. Implementasinya menjadi amat singkat sebagai berikut

```python
x4 = 0.5 * (x3 + x2) if poly(x3) * poly(x2) < 0 else 0.5 * (x3 + x1)
```

bila menggunakan ekspresi konditional Python [[4](#r04)].

### code 2
Program berikut ini memanfaatkan Persamaan \eqref{eqn:bisection-compact-1} dan \eqref{eqn:bisection-compact-2}.

```python
# 0402-bisection-compact.py
# Impelement bisection from only two equation
# Sparisoma Viridi | https://github.com/dudung/bug
# 20220126 Create this program.

# define a polynomial function
def poly(x):
    x1 = 2.0
    x2 = 5.0
    x3 = 9.0
    y = (x - x1) * (x - x2) * (x - x3)
    return y

# define initial conditions
x1 = 7.0
x2 = 10.0
x3 = 0.5 * (x1 + x2)

# define accuracy
eps = 1E-14

# Calculate initial error
err = abs(poly(x3))

# Find a root
n = 0
print("n x")
while err > eps:
    x4 = 0.5 * (x3 + x2) if poly(x3) * poly(x2) < 0 else 0.5 * (x3 + x1)
    err = abs(poly(x4))
    x1, x2, x3 = x2, x3, x4
    n = n +1
    print(n, x4)

# Resume result
print("step = ", n, sep='')
print("err = ", err, sep='')
print("root = ", x4, sep='')
```

dengan

```
n x
1 9.25
2 8.875
3 9.0625
4 8.96875
5 9.015625
6 8.9921875
7 9.00390625
8 8.998046875
9 9.0009765625
10 8.99951171875
11 9.000244140625
12 8.9998779296875
13 9.00006103515625
14 8.999969482421875
15 9.000015258789062
16 8.999992370605469
17 9.000003814697266
18 8.999998092651367
19 9.000000953674316
20 8.999999523162842
21 9.000000238418579
22 8.99999988079071
23 9.000000059604645
24 8.999999970197678
25 9.000000014901161
26 8.99999999254942
27 9.00000000372529
28 8.999999998137355
29 9.000000000931323
30 8.999999999534339
31 9.00000000023283
32 8.999999999883585
33 9.000000000058208
34 8.999999999970896
35 9.000000000014552
36 8.999999999992724
37 9.000000000003638
38 8.999999999998181
39 9.00000000000091
40 8.999999999999545
41 9.000000000000227
42 8.999999999999886
43 9.000000000000057
44 8.999999999999972
45 9.000000000000014
46 8.999999999999993
47 9.000000000000004
48 8.999999999999998
49 9.0
step = 49
err = 0.0
root = 9.0
```

adalah hasilnya. Program di atas dapat dicoba di OneCompiler [3xrgr8bej](https://onecompiler.com/python/3xrgr8bej),


## exer
1. Gunakan kode pertama yang diberikan dan gantilah tebakan awalnya menjadi `[70.0, 100.0]`. Berapa nilai akar yang ditemukan? Kesalahannya?
2. Pada contoh program kedua apakah dapat digunakan untuk persamaan kuadrat? Bagaimana caranya?


## note
1. <a name='r01'></a>Wikipedia contributors, "Bisection method", Wikipedia, The Free Encyclopedia, 11 January 2022, 12:47 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1065030259> [20220126].
2. <a name='r02'></a>GeeksforGeeks, Nims972, jit_t, susmitakundugoaldanga, "Program for Bisection Method", GeeksforGeeks, 6 Apr 2021, url <https://www.geeksforgeeks.org/program-for-bisection-method/> [20220126].
3. <a name='r03'></a>Francis Adrian Viernes, "Root-Finding Algorithm — Bisection Method From Scratch", Medium, 25 Aug 2021, url <https://medium.com/mlearning-ai/using-the-bisection-method-to-find-the-root-of-an-equation-97c4ba7343db> [20220126]
4. <a name='r04'></a>Vinko Vrsalovic, community wiki, "Answer to 'Does Python have a ternary conditional operator?'", Stack Overflow, 5 Aug 2020, url <https://stackoverflow.com/a/394814/9475509> [20220126].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0402?src=hash&amp;ref_src=twsrc%5Etfw">#bug0402</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1486302876985344000?ref_src=twsrc%5Etfw">January 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) x = 94.99996185302734, err = 0.006866460898891091; &nbsp;
2) bisa, kurangi salah satu akar, dan hilangkan suku terkait yang membentuk variabel y; &nbsp;
</ans>


{% comment %}
{% endcomment %}
