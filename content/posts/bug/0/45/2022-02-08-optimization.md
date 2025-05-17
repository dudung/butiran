---
layout: post
authors: [viridi]
title: optimization
permalink: pages/0450
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["optimization", "minimum", "maximum", "interactive graphical approach", "optimization problem", "classification of optimization problem"]
date: 2022-02-08 08:05:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/45/2022-02-08-optimization.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Dalam matematika optimasi atau lebih umumnya disebut sebagai masalah optimasi merupakan masalah yang dipecahkan dengan mencari nilai terbesar atau terkecilnya, dengan terdapat batasan, yang dapat dipecahkan melalui pencarian titik ekstrim atau pemanfaatan pengujian turunan pertama [[1](#r01)]. Dalam sains data secara formal masalah optimasi merupakan suatu masalah untuk mencari keadaan terbaik menurut fungsi obyektif, seperti menentukan parameter pada model random forest, posisi bidak catur, bobot jaringan saraf dalam model deep learning, atau penempatan urutan stasiun pada peta [[2](#r02)]. Dalam optimasi, pemrograman linier (linear programming) dan pemrograman kuadrat (quadratic programming) merupakan dua di antara sedemikian banyak sub-bidang [[3](#r03)]. Klasifikasi masalah optimasi dapat didasari pada keberadaan batasan, sifat variabel desain, struktur masalah, sifat persamaan-persamaan yang terlibat, nilai permisif variabel desisi, sifat deterministik variabel, separabilitas fungsi, dan jumlah fungsi obyektif [[4](#r04)]. Masalah optimasi masih terus dikembangkan pendekatannya, seperti adanya pendekatan menggunakan grafik yang iteraktif [[5](#r05)].


## terms
Terdapat setidaknya tiga terjemahan optimization dari bahasa Inggris ke bahasa Indonesia, yaitu optimasi, optimisasi dan optimalisasi, yang ketiganya memiliki arti mirip dan terdapat di KBBI [[6](#r06)]. Di sini digunakan yang pertama karena paling pendek dan juga pada suatu saat paling banyak digunakan [[7](#r07)].


## subfields
Untuk saat ini dicantumkan hanya dua sub-bidang sebagai berikut ini dari sejumlah sub-bidang yang ada [[3](#r03)].
1. **Pemrograman linier** adalah pemrograman untuk mencari nilai nilai minimum atau maksimum dengan batasan diatur menjadi minimum yang diberikan hanya dengan kesamaan dan ketidaksamaan linier, dengan kasus untuk fungsi obyektif bersifat linier.
2. **Pemrograman kuadrat** mirip dengan pemrograman linier dengan fungsi obyektifnya dapat memiliki suku-suku kudarat.


## definitions
Terdapat beberapa definisi terkait dengan optimasi [[8](#r08)] seperti dicantumkan di bawah ini.
+ **Fungsi obyektif** $f : \mathbb{R}^n \mapsto \mathbb{R}$ merupakan fungsi bernilai riil yang akan diminimumkan atau dimaksimumkan pada suatu himpunan alternatif.
+ **Variabel desisi** $x \in X$ merupakan variabel yang nilainya dapat berubah pada himpunan alternatif dalam rangka menaikkan atau menurunkan nilai fungsi obyektif.
+ **Wilayah feasibel** $X \subseteq \mathbb{R}^n$ (tertutup) merupakan himpunan keseluruhan dari alternatif bagi variabel desisi di mana fungsi obyektif akan dioptimumkan, di mana wilayah ini disebut juga sebagai wilayah batas.
+ **Solusi optimal** $x^\* \in X, f(x^\*) \ge f(x)$ merupakan nilai variabel desisi yang mencapai maksimum atau minimum fungsi obyektif pada wilayah feasibel.
+ **Pertidaksamaan linier** merupakan suatu ketidaksamaan yang dapat dituliskan dalam bentuk $a^Tx \le b$ atau $a^Tx \ge b$, dengan $a \in \mathbb{R}^n$ dan $b \in \mathbb{R}$.
+ **Fungsi linier** merupakan fungsi linier pada $\mathbb{R}^n$ dalam bentuk $f(x) = c^Tx$ $= c_1 x_1 + c_2 x_2 + \dots + c_n x_n$ dengan $c = [c_1, c_2, \dots, c_n]^T \in \mathbb{R}^n$.

dan [[9](#r09)]

+ **Fungsi kuadrat** merupakan fungsi kuadrat pada $\mathbb{R}^n$ dalam bentuk $f(x) = q^T x + \frac12 x^TQx$.

Perhatikan bahwa $x = [x_1, x_2, \dots, x_n]^T \in \mathbb{R}^n$ dan bukan suatu variabel tunggal. Di sini notasi vektor ataupun matriks tidak digunakan.


## note
1. <a name='r01'></a>Paul Dawkins, "Optimization", Calculus I, Lamar University, 30 May 2018, url <https://tutorial.math.lamar.edu/classes/calci/optimization.aspx> [20220208].
2. <a name='r02'></a>Cornellius Yudha Wijaya, "Have you heard about the Optimization Problem?", Towards Data Science, 8 Jun 2020, url <> [20220208].
3. <a name='r03'></a>
Wikipedia contributors, "Mathematical optimization", Wikipedia, The Free Encyclopedia, 17 January 2022, 07:41 UTC, <https://en.wikipedia.org/w/index.php?oldid=1066201313> [20220208].
4. <a name='r04'></a>D. Nagesh Kumar, "Introduction and Basic Concepts", Optimization Methods: M1L3, Department of Civil Engineering, Indian Institute of Science, 7 Dec 2007, url <https://nptel.ac.in/content/storage2/courses/105108127/pdf/Module_1/M1L3slides.pdf> [20220208].
5. <a name='r05'></a>Max Antonio González-Palacios, Juan Emmanuel Ayala-Hernández, Luz Antonio Aguilera-Cortés, "On the solution of optimization problems. An interactive graphical approach", Journal of Applied Research and Technology [J Appl Res Technol], vol 16, no 5, p 357-372, Oct 2018, url <http://ref.scielo.org/3pp367> [20220208].
6. <a name='r06'></a>Ivan Lanin, "Optimasi, optimisasi, dan optimalisasi", Twitter, 10 May 2018, url <https://twitter.com/ivanlanin/status/994574167285485569> [20220208].
7. <a name='r07'></a>MERAK, "Optimasi, Optimisasi, atau Optimalisasi? Mana yang Benar?", NewBiegger, Blogspot, 23 Apr 20216, url <http://newbiegger.blogspot.com/2016/04/optimasi-optimisasi-atau-optimalisasi.html> [20220208].
8. <a name='r08'></a>James V. Burke, "Definition", Math 407 Linear Optimization, Mathematics Department, University of Washington, Fall 2020, url <https://sites.math.washington.edu/~burke/crs/407/PS/defn1-3.pdf> [20220208].
9. <a name='r09'></a>Jack Heider, Dajun Yue, Fengqi You, "Quadratic programming", Northwestern University Open Text Book on Process Optimization, 7 Jun 2015, url <https://optimization.mccormick.northwestern.edu/index.php?oldid=3876> [20220208].


### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
