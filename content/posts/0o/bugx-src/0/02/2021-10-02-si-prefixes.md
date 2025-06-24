---
layout: post
authors: [viridi]
title: si prefixes
permalink: pages/0022
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["unit", "si", "prefixes"]
date: 2021-10-02 19:41:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/02/2021-10-02-si-prefixes.md
twitter_username: 6unpnp
nodes: []
---
Terdapat 20 prefiks SI untuk menggantikan bilangan 10 pangkat [[1](#r01)], di mana tidak boleh lebih dari satu prefiks digunakan secara bersamaan (kasus untuk $\rm kg$) [[2](#r02)], dan sebaiknya prefiks ini digunakan untuk menghindari penulisan nilai-nilai numerik yang terlalu besar atau terlalu kecil [[3](#r03)]. Prefiks ini dikenal juga sebagai prefiks metrik, di mana semua prefiks metriks saat ini merupakan dekadik [[4](#r04)].


## no multiple prefixes
Untuk massa satuannya adalah $\rm kg$ yang telah mengandung $\rm k$ atau $10^{3}$. Dengan demikian yang tepat adalah

$$
\begin{array}{rcl}
2 \times 10^{-6} \ {\rm kg} & = & 2 \times 10^{-6} \cdot 10^3 \ {\rm g} \newline
& = & 2 \times 10^{-3} \ {\rm g} \newline
& = & 2 \ {\rm mg}
\end{array}
$$

dan bukan

$$
\require{cancel}
2 \times 10^{-6} \ {\rm kg} = 2 \ \xcancel{\rm \mu kg}.
$$

Persamaan terakhir ini merupakan hal yang salah [[2](#r02)].


## arithmetic operations
Dalam operasi aritmatika yang meliputi perkalian, pembagian, penjumlahan, dan pengurangan prefiks juga merupakan bagian dari nilai yang terkena operasi sehingga harus ikut dihitung.

Terdapat suatu komponen listrik yang memiliki beda potensial listrik $V = 1 \ {\rm mV}$ dan besar arus yang mengalir adalah $I = 8 \ {\rm mA}$, maka daya pada komponen tersebut adalah

$$
\begin{array}{rcl}
P & = & VI \newline
& = & 1 \ {\rm mV} \cdot 8 \ {\rm mA} \newline
& = & 1 \times 10^{-3} \ {\rm V} \cdot 8 \times 10^{-3} \ {\rm A} \newline
& = & 8 \times 10^{-6} \ {\rm VA} \newline
& = & 8 \times 10^{-6} \ {\rm W} \newline
& = & 8 \ {\rm \mu W}.
\end{array}
$$

Dua buah komponen elektronik disusun seri dan masing masing-masing memiliki beda potensial $10 \ \rm mV$ dan $150 \ \rm \mu V$. Beda potensial total susunan seri kedua komponen tersebut adalah

$$
\begin{array}{rcl}
V & = & V_1 + V_2 \newline
& = & 10 \ {\rm mV} + 150 \ {\rm \mu V} \newline
& = & 10 \times 10^{-3} \ {\rm V} + 150 \times 10^{-6} \ {\rm V} \newline
& = & 10000 \times 10^{-6} \ {\rm V} + 150 \times 10^{-6} \ {\rm V} \newline
& = & 10150 \times 10^{-6} \ {\rm V} \newline
& = & 10.15 \times 10^{-3} \ {\rm V} \newline
& = & 10.15 \ {\rm mV}.
\end{array}
$$

Perhatikan pada contoh terakhir bagaimana prefiks disamakan terlebih dahulu baru nilanya dapat dijumlahkan. Ingat bahwa

$$
\begin{array}{rcl}
15 \times 10^{-3} & = & 15 \times 10^{-3} \cdot 1 \newline
& = & 15 \times 10^{-3} \cdot (10^3  \cdot 10^{-3}) \newline
& = & 15 \cdot 10^3 \times 10^{-3} \cdot 10^{-3} \newline
& = & 15000 \times 10^{-6},
\end{array}
$$

yang telah digunakan pada contoh terakhir di atas, dengan bilangan dalam kurung pada baris kedua adalah nilai satu.


## square and cubic
Saat menampilkan nilai luas dan volume digunakan notasi, sebagai contoh $\rm mm^2$ dan $\rm mm^3$, yang berarti sebenarnya bahwa prefiks SI dikuadratkan dan dipangkatkan tiga.

Sebuah persegi panjang memiliki panjang $p = 4 \ \rm cm$ dan lebar $l = 2 \ \rm cm$. Hitunglah luas $A = pl$ dalam $\rm cm^2$ dan $\rm mm^2$. Untuk dalam $\rm cm^2$

$$
\begin{array}{rcl}
A & = & pl \newline
& = & (4 \ {\rm cm}) (2 \ {\rm cm}) \newline
& = & 8 \ {\rm cm^2},
\end{array}
$$

sedangkan untuk dalam $\rm mm^2$

$$
\begin{array}{rcl}
A & = & pl \newline
& = & (4 \ {\rm cm}) (2 \ {\rm cm}) \newline
& = & (40 \ {\rm mm}) (20 \ {\rm cmm}) \newline
& = & 800 \ {\rm mm^2} \newline
& = & 8 \times 10^2 \ {\rm mm^2}.
\end{array}
$$

Perhatikan bahwa $\rm mm^2$ bukanlah $\rm 10^{-3} m^2$ akan tetapi $\rm (10^{-3})^2 \ m^2$, sehingga

$$
\begin{array}{rcl}
1 \ {\rm cm}^2 & = & 1 \ {\rm (10 \ mm)^2} \newline 
& = & 100 \ {\rm mm^2} \newline
& = & 10^2 \ {\rm mm^2},
\end{array}
$$

yang menjelaskan contoh sebelumnya bahwa $8 \ {\rm cm^2} = 8 \times 10^2 \ {\rm mm^2}$.


## exer
1. Luas sebuah ubin adalah $900 \ \rm cm^2$. Nyatakan luasnya dalam $\rm dm^2$ dan $\rm m^2$.
2. Dengan menggunakan hubungan antara $\rm l$ dan $\rm dm^3$ [[5](#r05)], tentukanlah volume suatu bak mandi dalam $\rm l$ yang berbentuk kubus dengan panjang sisi $1 \ \rm m$.


## note
1. <a name="r01"></a>Christopher Stover, "SI Prefixes", from MathWorld--A Wolfram Web Resource, created by Eric W. Weisstein, url https://mathworld.wolfram.com/SIPrefixes.html [20211002].
2. <a name="r02"></a>-, "SI prefixes", the NIST Reference on Constant, Units, and Uncertainty, url <https://physics.nist.gov/cuu/Units/prefixes.html> [20211002].
3. <a name="r03"></a>-, "The SI base units: SI prefixes", National Physical Laboratory, 2021, url <https://www.npl.co.uk/si-units> [20211002].
4. <a name="r04"></a>Wikipedia contributors, "Metric prefix", Wikipedia, The Free Encyclopedia, 22 September 2021, 21:52 UTC, <https://en.wikipedia.org/w/index.php?oldid=1045874564> [20211002].
5. <a name="r05"></a>Wikipedia contributors, "Litre", Wikipedia, The Free Encyclopedia, 1 October 2021, 10:17 UTC, <https://en.wikipedia.org/w/index.php?oldid=1047543009> [20211002].


## &nbsp;
[si units](0020.html)
{% comment %} []() &bull; []() {% endcomment %}
