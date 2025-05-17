---
layout: butir
authors: [viridi]
title: transformation scale intro
permalink: pages/0230
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["least square", "linear regression", "line"]
date: 2021-12-05 16:00:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/23/2021-12-04-transformation-scale-intro.md
---
Dilasi merupakan transformasi dalam geometri yang mana sebuah obyek matematika terekspansi (menjadi lebih besar) atau terkompresi (menjadi lebih kecil) sedemikian sehingga hasilnya mirip dengan aslinya [[1](#r01)]. Hal ini mirip dengan saat kita melihat suatu benda di sekeliling kita secara langsung dibandingkan dengan setelah direkam oleh kamera dan dilihat melalui layar komputer. Terjadi perubahan koordinat dari dunia-ke-kerangka, yang untuk beberapa aplikasi juga dari kerangka-ke-dunia (frame-to-world) [[2](#r02)]. Penskalaan (scale) yang merupakan salah satu transformasi dasar [[3](#r03)], dapat menjelaskan hal tersebut. Salah satu aplikasi dalam transformasi Kartesian 2d yang bersifat konformal, afin, dan polinomial adalah mengubah proyeksi tidak diketahui menjadi suatu proyeksi yang diketahui [[4](#r04)], dengan implementasinya adalah dalam aplikasi untuk melakukan koreksi perspektif foto [[5](#r05)]. Penerapan yang lebih sederhana adalah bagaimana menggambarkan koordinat dunia (yang terlihat melalui suatu jendela) ke dalam koordinat komputer (yang terlihat melalui viewport suatu devais) [[6](#r06)] atau yang lebih sederhana lagi adalah saat melakukan konversi nilai temperatur dari suatu skala temperatur ke skala temperatur yang lain [[7](#r07)].


## temperature scale conversion
Untuk membantu melakukan konversi temperatur antar berbagai skala temperatur yang berbeda telah tersedia kalkulator secara daring [[9](#r09)], yang prinsipnya akan disampaikan di sini. Sebagai contoh, misalkan terdapat dua skala temperatur berbeda yang memiliki dua titik acuan yang sama. Sebut yang pertama dengan skala $\rm X$ dan yang kedua dengan skala $\rm Y$ sebagaimana disajikan dalam Gambar [1](#fig1) berikut ini.

![]({{site.baseurl}}/assets/img/0/23/0230-a.png) \
Gambar <a name="fig1">1</a>. Dua buah termometer berskala berbeda, yaitu $\rm X$ (kiri) dan $\rm Y$ (kanan), yang masing-masing memiliki dua titik acuan yang sama, titik atas ($\color{#c00}{\large\circ}$) dan titik bawah ($\color{#07c}{\large\circ}$), serta titik tertentu ($\color{#2c6}{\large\circ}$).

Pada setiap skala temperatur perbandingan antara jarak suatu titik ke titik acuan bawahnya dibagi jarak titik acuan atas ke titik acuan bawah harus selalu sama, yang dapat dirumuskan sebagai

\begin{equation}\label{eqn:equal-ratio-between-scales}
\frac{x - x_0}{x_1 - x_0} = \frac{y - y_0}{x_1 - x_0},
\end{equation}

dengan poisisi titik indeks $0$ terletak di bawah indeks $1$ dalam arah yang sama untuk kedua skala, yang dalam hal ini kebetulan dapat dinyatakan bahwa $0 \equiv \rm min$ dan $1 \equiv \rm max$.

Tabel <a name="tab1">1</a>. Beberapa skala temperatur dan beberapa nilai-nilainya [[9](#r09)]. 

Skala      | Satuan | $x_0$  | $x_1$
:-         | :-:    |  -:    | -:
Celsius    | °C     |   0.00 | 100.00
Fahrenheit | °F     |  32.00 | 212.00
Kelvin     |  K     | 273.15 | 373.15
Rankine    | °R     | 491.67 | 671.67
Delisle    | °De    | 150.00 |   0.00
Newton     | °Ré    |   0.00 |  33.00
Réaumur    | °Ré    |   0.00 |  80.00
Rømer      | °Rø    |   7.50 |  60.00

Bila diambil contoh baris pertama dan kedua dari Tabel [1](#tab1), atau $x \equiv C$ dan $y \equiv F$, dengan menggunakan Persamaan \eqref{eqn:equal-ratio-between-scales} akan diperoleh

\begin{equation}\label{eqn:equal-conversion-c-from-f}
\begin{array}{rcl}
\displaystyle \frac{x - x_0}{x_1 - x_0} & = & \displaystyle \frac{y - y_0}{x_1 - x_0} \newline
\displaystyle \frac{C - 0}{100 - 0} & = & \displaystyle \frac{F - 32}{212 - 32} \newline
\displaystyle \frac{C}{100} & = & \displaystyle \frac{F - 32}{180} \newline
C & = & \displaystyle \frac{100}{180}(F - 32) \newline
& = & \displaystyle \frac59 (F - 32)
\end{array}
\end{equation}

atau dengan cara yang mirip akan diperoleh

\begin{equation}\label{eqn:equal-conversion-f-from-c}
F = \frac95 C + 32.
\end{equation}

Dengan demikian telah ditunjukkan bahwa Persamaan \eqref{eqn:equal-conversion-c-from-f} dan \eqref{eqn:equal-conversion-f-from-c} dapat diperoleh dari bentuk yang lebih umum dari Persamaan \eqref{eqn:equal-ratio-between-scales}.

## world to screen transformation
Terdapat banyak istilah sistem koordinat dalam suatu program grafik [[10](#r10)], dengan yang akan dibahas di sini adalah sistem koordinat dunia dalam 2d dan sistem koordinat layar. Sistem koordinat dunia memiliki origin pada sudut kiri bawah [[11](#r11)], sedangkan komputer grafik pada sudut kiri atas [[12](#r12)], sebagaimana diilustrasikan berikut ini.

![]({{site.baseurl}}/assets/img/0/23/0230-b.png) \
Gambar <a name="fig2">2</a>. Sistem koordinat dunia (kiri) dan sistem koordinat layar (kanan) dengan origin dan arah positif sumbu $y$ yang berbeda.

Untuk kedua sistem koordinat pada Gambar [2](#fig2) arah positf $x$ memiliki arah yang sama, yaitu kiri ke kanan, akan tetapi untuk $y$ berbeda. Pada sistem koordinat dunia, umumnya arah $y$ adalah ke atas, sedangkan pada sistem koordinat layar adalah ke bawah. Selanjutnya agar lebih umum titik $(0, 0)$ pada Gambar [2](#fig2) akan disebut sebagai titik minium ($\rm min$) sehingga tidak perlu menentukan suatu origin. Ini memudahkan untuk mendefinisikan jendela pada sistem koordinat dunia dan viewport pada sistem koordinat layar.

### x transformation
Untuk koordinat $x$ proses transformasi mirip dengan konversi skala temperatur sebagaimana disajikan dalam Gambar [3](#fig3).

![]({{site.baseurl}}/assets/img/0/23/0230-c.png) \
Gambar <a name="fig3">3</a>. Transformasi $x$ to $X$ harus menjaga rasio $l$ ke $L$ untuk kedua sistem koordinat.

Menggunakan Persamaan \eqref{eqn:equal-ratio-between-scales} dan informasi pada Gambar [3](#fig3) dapat diperoleh hubungan

\begin{equation}\label{eqn:equal-conversion-xs-from-xw}
\begin{array}{rcl}
\displaystyle \frac{X - X_{\rm min}}{X_{\rm max} - X_{\rm min}} & = & \displaystyle \frac{x - x_{\rm min}}{x_{\rm max} - x_{\rm min}} \newline
X - X _{\rm min} & = & \displaystyle \left( \frac{X _{\rm max} - X _{\rm min}}{x _{\rm max} - x _{\rm min}} \right) (x - x _{\rm min}) \newline
X & = & \displaystyle \left( \frac{X _{\rm max} - X _{\rm min}}{x _{\rm max} - x _{\rm min}} \right) (x - x _{\rm min}) + X _{\rm min}
\end{array}
\end{equation}

dan juga

\begin{equation}\label{eqn:equal-conversion-xw-from-xs}
x = \left( \frac{x _{\rm max} - x _{\rm min}}{X _{\rm max} - X _{\rm min}} \right) (X - X _{\rm min}) + x _{\rm min}.
\end{equation}

Perhatikan bahwa Persamaan \eqref{eqn:equal-conversion-xs-from-xw} dapat menjadi Persamaan \eqref{eqn:equal-conversion-xw-from-xs} hanya dengan menukar $x$ dan $X$.

### y transformation
Khusus untuk koordinat $y$, walapun prosesnya sama akan tetapi suku $\rm min$ dan $\rm max$ ada yang tertukar karena sistem koordinat layar yang berbeda dengan sistem koordinat dunia.

![]({{site.baseurl}}/assets/img/0/23/0230-d.png) \
Gambar <a name="fig4">4</a>. Transformasi $y$ to $Y$ juga harus menjaga rasio $l$ ke $L$ untuk kedua sistem koordinat.

Dengan mengikuti cara untuk memperoleh Persamaan \eqref{eqn:equal-conversion-xs-from-xw} dan \eqref{eqn:equal-conversion-xw-from-xs}, yaitu menggunakan Persamaan \eqref{eqn:equal-ratio-between-scales} dan informasi pada Gambar [4](#fig4) dapat diperoleh hubungan

\begin{equation}\label{eqn:equal-conversion-ys-from-yw}
\begin{array}{rcl}
\displaystyle \frac{Y - Y_{\rm max}}{Y_{\rm min} - Y_{\rm max}} & = & \displaystyle \frac{y - y_{\rm min}}{y_{\rm max} - y_{\rm min}} \newline
Y - Y _{\rm max} & = & \displaystyle \left( \frac{Y _{\rm max} - Y _{\rm min}}{y _{\rm max} - y _{\rm min}} \right) (y - y _{\rm min}) \newline
Y & = & \displaystyle \left( \frac{Y _{\rm min} - Y _{\rm max}}{y _{\rm max} - y _{\rm min}} \right) (y - y _{\rm min}) + Y _{\rm max}
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:equal-conversion-yw-from-ys}
y = \left( \frac{y _{\rm max} - y _{\rm min}}{Y _{\rm min} - Y _{\rm max}} \right) (Y - Y _{\rm max}) +y _{\rm min}.
\end{equation}

Perhatikan perbedaan Persamaan \eqref{eqn:equal-conversion-ys-from-yw} dan \eqref{eqn:equal-conversion-yw-from-ys} dengan Persamaan \eqref{eqn:equal-conversion-xs-from-xw} dan \eqref{eqn:equal-conversion-xw-from-xs}. Oleh karena itu Persamaan \eqref{eqn:equal-conversion-ys-from-yw} tidak dapat menjadi Persamaan \eqref{eqn:equal-conversion-yw-from-ys} hanya dengan menukar $y$ dan $Y$.

### maintaining aspect ratio
Persamaan \eqref{eqn:equal-conversion-xs-from-xw}, \eqref{eqn:equal-conversion-xw-from-xs}, \eqref{eqn:equal-conversion-ys-from-yw}, dan \eqref{eqn:equal-conversion-yw-from-ys} belum memastikan bahwa bila terdapat suatu obyek, ukurannya tetap. Akan tetapi hanya dapat memastikan bahwa obyek tergambarkan dalam kedua sistem koordinat.

![]({{site.baseurl}}/assets/img/0/23/0230-e.png) \
Gambar <a name="fig5">5</a>. Transformasi dari sistem koordinat dunia ke sistem koordinat layar rasio panjang dan lebar kedua area pada masing-masing sistem koordinat tidak sama, dengan gambar asal di sebelah kiri dan hasil transformasi di sebelah kanan.

Untuk memastikan ukurannya tetap diperlukan rasio perbandingan ukuran benda pada arah vertikal dan horizontal pada kedua sistem koordinat yang sebagai konsekuensinya dapat menyebabkan obyek terpotong pada salah satu sistem koordinat seperti disajikan pada Gambar [5](#fig5). Hal ini di luar dari pembahasan saat ini.


## exer
1. Apakah masih digunakan simbol derajat atau $^\circ$ pada penulisan temperatur dalam skala kelvin?
2. Pada termometer skala celcius atau $\rm ^\circ C$ dan  fahrenheit atau $\rm ^\circ F$, apa titik acuan atas dan bawahnya?
3. Perolehlah fungsi untuk konversi skala Celcius ke R&eacute;aumur dan sebaliknya.
4. Apa yang berbeda antara Persamaan \eqref{eqn:equal-conversion-ys-from-yw} dan \eqref{eqn:equal-conversion-yw-from-ys} dengan Persamaan \eqref{eqn:equal-conversion-xs-from-xw} dan \eqref{eqn:equal-conversion-xw-from-xs}?
5. Dari Gambar [5](#fig5) manakah gambar yang menjaga rasio ukurannya saat ditransformasi dari gambar asal di sebelah kiri ke sebelah kanan?


## note
1. <a name="r01"></a>"Dilation", Mathematics Glossary, Government of Alberta, url <https://www.learnalberta.ca/content/memg/division03/Dilation/index.html> [20211204].
2. <a name="r02"></a>Ren Ng, "Lecture 5: Transform II", Computer Graphics and Imaging, UC Berkeley CS184/284A, url <https://cs184.eecs.berkeley.edu/uploads/lectures/05_transforms-2/05_transforms-2_slides.pdf> [20211204].
3. <a name="r03"></a>Ren Ng, "Lecture 4/5: Transform", Computer Graphics and Imaging, UC Berkeley CS184/284A, url <https://cs184.eecs.berkeley.edu/uploads/lectures/04_transforms-1/04_transforms-1_slides.pdf> [20211204].
4. <a name="r04"></a>R. Knippers, "5. Coordinate transformations", Geometric Aspects of Mapping, International Institute for Geo-Information Science and Earth Observation (ITC), Enschede, Aug 2009, url <https://kartoweb.itc.nl/geometrics/Coordinate%20transformations/coordtrans.html> [20211204].
5. <a name="r05"></a>Deepak Gupta, "9 Best Apps to Correct Perspective of Photos", AndroidCure, 4 Jan 2021, url <https://androidcure.com/best-apps-correct-perspective-photos/> [20211204].
6. <a name="r06"></a>soumya7, Akanksha_Rai, Rajput-Ji, princiraj1992, SURENDRA_GANGWAR, subham348, anikaseth98, khushboogoyal499, "Window to Viewport Transformation in Computer Graphics with Implementation", GeeksforGeeks, 4 Jun 2021, url <https://www.geeksforgeeks.org/window-to-viewport-transformation-in-computer-graphics-with-implementation/> [20211204].
7. <a name="r07"></a>Anne Marie Helmenstine, "Temperature Conversion Formulas", ThoughtCo, 16 Feb 2021, url <https://www.thoughtco.com/temperature-conversion-formulas-609324> [20211204].
8. <a name="r08"></a>Sergey Gershtein, Anna Gershtein, "Temperature Conversion: Fahrenheit (°F), Celsius (°C) and more", onvert-Me.Com, 2019, url <https://m.convert-me.com/en/convert/temperature/> [20211204].
9. <a name="r09"></a>Wikipedia contributors, "Conversion of scales of temperature", Wikipedia, The Free Encyclopedia, 13 November 2021, 12:45 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1055034432> [20211205].
10. <a name="r10"></a>John Bell, Andy Johnson, "Coordinate Systems", CS 488 Computer Graphics I, the University of Illinois Chicago, Spring 2005, url <https://www.cs.uic.edu/~jbell/CourseNotes/ComputerGraphics/Coordinates.html> [20211205].
11. <a name="r11"></a>Rick Parent, "Drawing and Coordinate Systems", CSE 581: Interactive Computer Graphics, Department of Computer Science and Engineering, Ohio State University, Autumn 2011, url <http://web.cse.ohio-state.edu/~parent.1/classes/581/Lectures/4.2DviewingHandout.pdf> [20211205].
12. <a name="r12"></a>Josh Lee, "Answer to 'Why Java 2D origin is at the top left corner?'", Stack Overflow, 15 Mar 2011, url <https://stackoverflow.com/a/5306974> [20211205].

### comments
<blockquote class="twitter-tweet" data-lang="en" data-theme="light" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0230?src=hash&amp;ref_src=twsrc%5Etfw">#bug0230</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1467253204622606339?ref_src=twsrc%5Etfw">December 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## &nbsp;
[coord sys 2d intro](0010.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) tidak; &nbsp;
2) temperatur es mencair dan air mendidih; &nbsp;
3) $C = \frac54 R&eacute;$, $R&eacute; = \frac45 C$; &nbsp;
4) pada transformasi antara $y$ dan $Y$ titik acuan atas dan bawahnya berbeda; &nbsp;
5) gambar b dan d; &nbsp;
</ans>
