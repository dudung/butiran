---
layout: butir
authors: [viridi]
title: kinematics graphs
permalink: pages/0043
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "position", "velocity", "acceleration", "graph", "xva", "consecutive motion"]
date: 2021-10-14 10:51:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/04/2021-10-14-kinematics-graphs.md
twitter_username: 6unpnp
nodes: []
---
Kurang baiknya pemahaman mengenai grafik kinematika, e.g. $x-t$, $v-t$, $a-t$, merupakan studi yang menarik karena terdapat berbagai kebingungan [[1](#r01)], yang masih teramati sampai beberapa saat yang lalu [[2](#r02)]. Salah satu pendekatan untuk membantu pemahaman dilakukan dengan memanfaatkan alat bantu microcomputer based laborator atau MBL [[3](#r03)]. Dan untuk menyelamai lebih dalam, pengamatan pergerakan mata saat peserta mengerjakan tes terkait materi ini pun dilakukan [[4](#r04)]. Hal ini menunjukkan pentingnya peran grafik kinematika dalam fisika. Gerak lurus dengan percepatan yang merupakan fungsi waktu dapat pula dianalisis menggunakan grafik selain dengan kalkulus [[5](#r05)]. Kemudahan menggambarkan grafik pun telah banyak tersedia secara daring, walau masih dengan variabel dummy $y - x$ [[6](#r06)]. 


## x, v, a relations
Hubungan antara fungsi posisi $x$, kecepatan $v$, dan percepatan $a$ dapat digambarkan dalam Tabel [1](#tab1) berikut.

Tabel <a name="tab1">1</a>. Relasi antar fungsi-fungsi posisi $x$, kecepatan $v$, dan percepatan $a$.

&nbsp; | $x-v$ | $v-a$
:-: | :-: | :-:
$ \displaystyle \frac{d}{dt}$ | $ \displaystyle v = \frac{dx}{dt} $ | $ \displaystyle a = \frac{dv}{dt} $
$\displaystyle \int dt$ | $ \displaystyle x = \int v \ dt $ | $ \displaystyle v = \int a \ dt $

Perhatikan bahwa perlu digunakan diferensial $(d/dt)$ dan integral $(\int dt)$ untuk memperoleh $v$ dari $x$ dan sebaliknya, serta $a$ dari $v$ dan sebaliknya.


## uniform linear motion
Gerak lurus dengan kecepatan tetap disebut sebagai GLB (gerak lurus beraturan). Hubungan antara fungsi posisi $x$, kecepatan $v$, dan percepatannya $a$ diberikan oleh Gambar [1](#fig1) berikut.

![]({{ site.baseurl }}/assets/img/0/04/0043-b1.png) | $x = \frac32t - 3$
![]({{ site.baseurl }}/assets/img/0/04/0043-b2.png) | $v = \frac32$
![]({{ site.baseurl }}/assets/img/0/04/0043-b3.png) | $a = 0$

Gambar <a name="fig1">1</a>. Grafik posisi $x$ (atas), kecepatan $v$ (tengah), dan percepatan $a$ (bawah) suatu GLB.

Dengan menggunakan relasi dalam Tabel [1](#tab1) dapat diperiksa persamaan-persamaan dalam Gambar [1](#fig1).


## non-uniform linear motion
Gerak lurus dengan kecepatan berubah bersifat umum, yang termasuk di dalamnya adalah gerak lurus dengan percepatan tetap ($a \ne 0$) yang dikenal sebagai GLBB (gerak lurus berubah beraturan). Gambar [2](#fig2) memberikan ilustrasi hubungan antara fungsi posisi $x$, kecepatan $v$, dan percepatannya $a$.

![]({{ site.baseurl }}/assets/img/0/04/0043-a1.png) | $x = -\frac12t^2 + t + 1$
![]({{ site.baseurl }}/assets/img/0/04/0043-a2.png) | $v = -t + 1$
![]({{ site.baseurl }}/assets/img/0/04/0043-a3.png) | $a = -1$

Gambar <a name="fig2">2</a>. Suatu GLBB dan grafik posisi $x$ (atas), kecepatan $v$ (tengah), dan percepatannya $a$ (bawah).

Perhatikan bahwa dengan menggunakan hubungan dalam Tabel [1](#tab1) dapat diperoleh $v$ dari $x$ dan kemudian $a$ dari $v$ pada Gambar [2](#fig2).


## a consecutive motion
Gerak lurus dengan percepatan berubah [[5](#r05)], selain GLBB, meliputi pula gerak konsekutif dengan percepatan bernilai tetap tertentu untuk suatu selang waktu dan bernilai tetap lainnya untuk selang waktu lain [[5](#r05)], yang salah satu contohnya diberikan dalam Gambar [3](#fig3).

![]({{ site.baseurl }}/assets/img/0/04/0043-c1.png) | $x = \left\\{\begin{array}{rr} 4t + 1, & 0 \le t < 4, \newline -2t^2 + 20t - 31, & 4 \le t < 8, \end{array}\right.$
![]({{ site.baseurl }}/assets/img/0/04/0043-c2.png) | $v = \left\\{\begin{array}{rr} 4, & 0 \le t < 4, \newline -4t + 20, & 4 \le t < 8, \end{array}\right.$
![]({{ site.baseurl }}/assets/img/0/04/0043-c3.png) | $a = \left\\{\begin{array}{rr} 0, & 0 \le t < 4, \newline -4, & 4 \le t < 8, \end{array}\right.$

Gambar <a name="fig3">3</a>. Grafik posisi $x$ (atas), kecepatan $v$ (tengah), dan percepatannya $a$ (bawah) suatu gerak konsekutif dengan dua nilai percepatan.

Untuk gerak konsekutif yang lebih rumit misalnya dengan tiga nilai percepatan atau lebih, dapat dikonstruksi dengan cara yang sama.


## note
1. <a name="r01"></a>Robert J. Beichner, "Testing student interpretation of kinematics graphs", American Journal of Physics, vol. 62, no. 8, pp. 750-755, 762, Aug 1994, url <https://doi.org/10.1119/1.17449>.
2. <a name="r02"></a>B. D. Amin, E. P. Sahib, Y. I. Harianto, A. J. Patandean, H. Herman, E. H. Sujiono, "The Interpreting Ability on Science Kinematics Graphs of Senior High School Students in South Sulawesi, Indonesia", Indonesian Journal of Science Education, vol. 9, no. 2, pp. 179-186, Jun 2020, url <https://doi.org/10.15294/jpii.v9i2.23349>.
3. <a name="r03"></a>Victor Antwi, Elwin Savelsbergh, Harrie Eijkelhof, "Understanding kinematics graphs using MBL tools, simulations and graph samples in an interactive engagement context in a Ghanaian university", Journal of Physics: Conference Series, vol. 1076, no. 1, p. 012002, Sep 2018, url <https://doi.org/10.1088/1742-6596/1076/1/012002>.
4. <a name="r04"></a>P. Klein, S. Becker, S. Küchemann, J. Kuhn, "Test of understanding graphs in kinematics: Item objectives confirmed by clustering eye movement transitions", Physical Review Physics Education Research, vol. 17, no. 1, p. 013102, Jan-Jun 2021, url <https://doi.org/10.1103/PhysRevPhysEducRes.17.013102>.
5. <a name="r05"></a>Sunil Kumar Singh, "2.11 Non-uniform acceleration", Kinematics fundamentals, OpenStax, Connexions, 28 Sep 2008, url <https://cnx.org/contents/UYPplaH7@29.32:rAfmPbOW@2/Non-uniform-acceleration> [20211014].
6. <a name="r06"></a>"Graphing Calculator", Desmos, 2021, url <https://www.desmos.com/?lang=en> [20211014].
7. <a name="r07"></a>CONCEPTREE Learning, "Motion in One Dimension-Connected Motion and Consecutive Motion", YouTube, 07.11.2020, url <https://www.youtube.com/watch?v=UBNXLTxViDs> [20211014].

## &nbsp;
[position](0030.html) &bull; [position velocity](0040.html) &bull; [velocity acceleration](0041.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
