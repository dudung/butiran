---
layout: post
authors: [viridi]
title: basic method
permalink: pages/0420
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: mathematics
tags: ["basic method", "mathematical physics", "analytical method", "approximate method", "numerical method", "direct method", "iterative method"]
date: 2022-01-25 17:30:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/42/2022-01-25-basic-method.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Berdasarkan kebiasaan metode-metode untuk menyelesaikan masalah dalam fisika matematika dapat dibagi menjadi dua kelas, metode analitik (analytical methods) dan metode hampiran (aproximate methods) [[1](#r01)]. Dalam matematika beberapa masalah dapat dipecahkan secara analitik dan numerik, dengan metoda analitik lebih disukai karena lebih cepat dan solusinya eksak [[2](#r02)]. Solusi eksak dalam fisika digunakan untuk solusi yang menangkap keseluruhan aspek fisika dan matematika suatu masalah [[3](#r03)], karena tidak menggunakan aproksimasi [[4](#r04)] dan merupakan representasi simbolik [[5](#r05)], yang bila cukup dengan jumlah data berhingga akan menjadi bentuk tertutup atau closed form [[6](#r06)]. Dalam komputasi matematika metode iteratif (iterative method) merupakan prosedur matematika yang menggunakan nilai awal untuk menghasilkan rangkaian hampiran solusi yang lebih baik dengan kriteria penghentian tertentu, di mana metode ini berlawanan dengan metode langsung (direct method) yang menyelesaikan masalah dengan sejumlah berhingga rangkaian operasi [[7](#r07)].


## polynomial roots
Akar suatu persamaan polinomial dapat dicari dengan menggunakan metode langsung dan iteratif [[8](#r08)], dengan contoh metode langsungnya adalah metode kuadrat akar Graeffe [[9](#r09)] dan metode iteratifnya adalah metode bisection dan iterasi titik tetap [[10](#r10)]. Untuk persamaan kuadrat atau polinomial orde dua, formula kuadrat termasuk dalam metode langsung karena jumlah langkah operasi, yang meliputi operasi penjumlahan, pengurangan, pembagian dan perkalian dapat ditentukan, akan tetapi untuk polinomial dengan orde lebih tinggi metode ini sulit untuk digunakan, walapun ada [[11](#r11)].


## linear system of equations
Sistem persamaan linier, yang merupakan terjemahan dari system of linear equations (SLE) dan linear system of equations [[12](#r12)], dapat dipecahkan menggunakan metode langsung seperti eliminasi Gauss dan faktorisasi LU [[13](#r13)] atau metode iteratif seperti metode Gauss-Seidel dan Successive Over-Relaxation (SOR) [[14](#r14)].

Tabel <a name='tab1'>1</a> Perbandingan metode langsung dan iteratif untuk pemecahan SLE.

Metode | Langsung | Iteratif
:- | :-
Langkah | Tertentu bergantung <br> ukuran matriks | Fleksibel dengan <br> memilih antara akurasi <br> atau waktu komputasi
Waktu komputasi | Dapat diperkirakan <br> berdasarkan jumlah <br> langkah | Bergantung akurasi <br> yang diinginkan 
Tepat untuk | Matriks kecil | Matriks besar <br> dengan banyak nol
Penghentian | Harus diselesaikan <br> atau solusi belum <br> diperoleh | Minimal satu siklus, <br> lalu sesuai akurasi <br> yang diinginkan

Metode langsung menggunakan sumber daya komputasi secara besar-besaran, akan tetapi amat bagus untuk menyelesaikan matriks berukuran kecil, handal dan cepat [[15](#r15)].


## example
Sebagai contoh akan dipilih mencari satu  akar dari suatu persamaan kuadrat dengan diskriminan $D > 0$.

```python
import math

a = 1
b = -100
c = 196

D = b*b - 4*a*c
x = (-b - math.sqrt(D)) / (2*a)
print("x = ", x, sep='')
```

Program di atas merupakan penerapan metode langsung dengan menggunakan formula kuadrat. Kode dapat dicoba di OneCompiler [3xrdp6ggx](https://onecompiler.com/python/3xrdp6ggx). Bandingkan dengan kode berikut ini.

```python
def f(x):
  a = 1
  b = -100
  c = 196
  y = a*x*x + b*x + c
  return y

def fx(x):
  a = 2
  b = -100
  y = a*x + b
  return y

err = 10
eps = 1E-20
x = 0
i = 0
print(i, ": x = ", x, sep='')

while err > eps:
  xnew = x - f(x)/fx(x)
  err = abs(xnew - x)
  x = xnew
  i = i + 1
  print(i, ": x = ", x, sep='')
```

Program kedua di atas merupakan penerapan dari metode iteratif yang dikenal sebagai metode Newton-Raphson. Kode dapat dicoba di OneCompiler [3xrdpfxwq](https://onecompiler.com/python/3xrdpfxwq).

Tabel <a name='tab1'>2</a> Mencari satu akar dari persamaan kuadrat dengan metode langsung dan iteratif.

Kelompok <br> Metode | Langsung | Iteratif
:- | :- | :-
Metode | Formula Kuadrat | Newton-Raphson
Fungsi | $f(x) = ax^2 + bx + c$ | $f(x) = ax^2 + bx + c$
Turunan <br> fungsi | Tidak perlu | $f'(x) = 2ax + b$
Persamaan | $\displaystyle x = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$ | $\displaystyle x_{i + 1} = x_i - \frac{f(x_i)}{f'(x_i)}$
Tebakan <br> awal | Tidak perlu | $x = 0$
Keluaran | `x = 2.0` | `0: x = 0` <br> `1: x = 1.96` <br> `2: x = 1.9999833472106578` <br> `3: x = 1.9999999999971112` <br> `4: x = 1.9999999999999998` <br> `5: x = 2.0` <br> `6: x = 2.0`
Batas <br> kesalahan <br> perhitungan <br> $\varepsilon$ | Tidak perlu | $10^{-20}$

Dapat terlihat secara tersirat pada Tabel [2](#tab2) bahwa jumlah langkah dengan metode langsung dapat diperkirakan, akan tetapi pada metode iteratif masih bergantung pada batas kesalahan perhitungan $\varepsilon$ yang diberikan.

Coba modifikasi program yang diberikan untuk fungsi kuadrat $f(x) = x^2 - 100x + 1875$ bagaimanakah hasilnya? Jangan gunakan alat bantu seperti Google [[16](#r16)]. :smile:


## exer
1. Dengan mengacu pada Tabel [2](#tab2) berapakah nilai akar bila digunakan $\varepsilon = 0.001$?
2. Dengan metode iteratif pada Tabel [2](#tab2) bagaimana untuk mendapatkan akar keduanya? Dan berapa akarnya? Perlu berapa iterasi? Gunakan $\varepsilon = 10^{-20}$.
3. Dengan metode langsung pada Tabel [2](#tab2) bagaimana untuk mendapatkan akar keduanya? Berapa akarnya?


## note
1. <a name='r01'></a>V. K. Andreev, "Basic Method for Solving Equations of Mathematical Physics", Computational Methods and Algorithms, Volume 1, Vladimir V. Shaidurov, Olivier Pironneau (Eds.), Encyclopedia of Life Support Systems (EOLSS), url <https://www.eolss.net/sample-chapters/c02/E6-04-01.pdf> [20220125].
2. <a name='r02'></a>Jason Brownlee, "", Machinery Learning Mastery, 13 Apr 2018, url <https://machinelearningmastery.com/analytical-vs-numerical-solutions-in-machine-learning/> [20220125].
3. <a name='r03'></a>Eric W. Weisstein, "Exact Solution", from MathWorld--A Wolfram Web Resource, Wolfram Research, 21 Jan 2022, url <https://mathworld.wolfram.com/ExactSolution.html> [20220125].
4. <a name='r04'></a>Pengwuino, "Answer to 'What does an exact solution to a pde mean?'", Physics Forum, 30 Nov 2011, url <https://www.physicsforums.com/threads/what-does-an-exact-solution-to-a-pde-mean.555623/#post-3643407> [20220125].
5. <a name='r05'></a>Alex Jones, "Asnwer to 'What is the main difference between the exact and numerical solution?'", Quora, 29 Jul 2022, url <https://www.quora.com/What-is-the-main-difference-between-the-exact-and-numerical-solution/answer/Alex-Jones-1227> [20220125].
6. <a name='r06'></a>Mark van Hoeij, "Closed Form Solutions", Florida State University, ISSAC 2017, 2 Aug 2017, url <https://www.math.fsu.edu/~hoeij/issac2017.pdf> [20220125].
7. <a name='r07'></a>Wikipedia contributors, "Iterative method", Wikipedia, The Free Encyclopedia, 3 January 2022, 05:59 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1063462370> [20220125].
8. <a name='r08'></a>Wikipedia contributors, "Numerical analysis", Wikipedia, The Free Encyclopedia, 27 December 2021, 12:57 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1062275306> [20220125].
9. <a name='r09'></a>Sanyasiraju V. S. S. Yedida, "Graeffe's Root SquaringMethod", Transcendental Equations, Department of Mathematics, Indian Institute Of Technology Madras, Chennai, url <https://math.iitm.ac.in/public_html/sryedida/caimna/transcendental/polynomial%20methods/direct.html> [20220125].
10. <a name='r10'></a>"Iterations Methods for Locating a Root", Solution of Non-linear Equations in One Variable, IGNOU, Indira Gandhi National Open University, 2017, url <https://www.egyankosh.ac.in/bitstream/123456789/18065/1/Unit-2.pdf> [20220125].
11. <a name='r11'></a>FaadooEngineers, "Methods of solving roots of polynomial equations", FaaDoO Engineers, url <http://www.faadooengineers.com/online-study/post/cse/numerical-analysis/1427/methods-of-solving-roots-of-polynomial-equations> [20220125].
12. <a name='r12'></a>"Systems of Linear Equation", Science Direct, 2022, url <https://www.sciencedirect.com/topics/mathematics/systems-of-linear-equation> [20220125].
13. <a name='r13'></a>Chen Greif, "Numerical Solution of Linear Systems", Department of Computer Science, The University of British Columbia, Vancouver B.C. 17 Dec 2008, url <https://www.cs.tau.ac.il/~dcor/Graphics/adv-slides/Solving.pdf> [20220125].
14. <a name='r14'></a>Yousef Saad, "Iterative methods for linear systems of equations: A brief historical journey", arXiv:1908.01083v1 [math.HO], Fri, 2 Aug 2019 22:42:47 UTC, url <https://arxiv.org/abs/1908.01083v1> [20220125].
15. <a name='r15'></a>StudySession, "Direct Vs Iterative Numerical Methods", YouTube, 28.07.2020, url <https://www.youtube.com/watch?v=CHUlnCSkg5k> [20220125].
16. <a name='r16'></a>url <https://www.google.com/search?q=solving+x%5E2+-+100x+%2B+1875&oq=solving+x%5E2+-+100x+%2B+1875&aqs=chrome..69i57.2854j0j9&sourceid=chrome&ie=UTF-8> [20220125].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0420?src=hash&amp;ref_src=twsrc%5Etfw">#bug0420</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1485921815805702148?ref_src=twsrc%5Etfw">January 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $x = 1.9999999999971112$; &nbsp;
2) syarat awal $x = 100$ memberikan akar $x = 98.0$ dalam 5 iterasi; &nbsp;
3) gunakan $\displaystyle x = \frac{-b + \sqrt{b^2 - 4ac}}{2a}$, diperoleh $x = 98.0$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
