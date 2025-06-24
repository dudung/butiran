---
title: "relativistic kinetic energy"
date: 2022-04-10T21:06:00+07:00
lastmod: 2022-04-11T14:52:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'relativity', 'momentum-energy', 'dispersion', 'draft']
url: "0051"
draft: false
---
Konversi massa menjadi energi sebagai suatu mekanisme astofisika dapat memberikan cara interpretasi baru pada hubungan energi-massa [[1](#r01)], di mana hubungan ini dikenal pula sebagai hubungan dispersi relativistik yang merupakan suatu persamaan relativistik yang menghubungkan energi total (energi relativistik) dengan massa invarian (massa diam) dan momentum [[2](#r02)]. Terdapat penurunan hubungan ini dengan menggunakan segitiga yang menggambarkan proporsi energi kinetik dan energi diam [[3](#r03)] dan dua cara lain [[4](#r04)], yang perlu agak dikoreksi detil prosesnya. Di sini akan disinggung terlebih dahulu rumusan energi kinetiknya.


## kinetic energy
Energi kinetik partikel bermassa $m$ memiliki bentuk

\begin{equation}\label{eqn:kinetic-energy-non-relativistic}
K = \tfrac12 mv^2
\end{equation}

yang telah dikenal sebelumnya, yang merupakan energi kinetik non-relativistik. Sedangkan untuk energi kinetik relativistik akan berbentuk [[5](#r05)]

\begin{equation}\label{eqn:kinetic-energy-relativistic}
K = (\gamma - 1) mc^2
\end{equation}

dengan

\begin{equation}\label{eqn:lorentz-factor}
\gamma = \frac{1}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}
\end{equation}

adalah faktor Lorentz.


## maclaurin series
Sembarang fungsi $f(x)$ dapat dituliskan sebagai deret Maclaurin

\begin{equation}\label{eqn:maclaurin-series}
f(x) = \sum_{n = 0}^N  \frac{x^n}{n!} \left. \frac{d^n f(x)}{dx^n} \right|_{x = 0},
\end{equation}

dengan jumlah suku yang terlibat ditentukan melalui nilai $N$. Perhatikan bahwa bila diperlukan hanya satu suku maka $N = 0$ mengingat indeks pada bagian penjumlahan di ruas kanan Persamaan \eqref{eqn:maclaurin-series} dimulai dari $n = 0$.

Bila terdapat fungsi berbentuk

\begin{equation}\label{eqn:a-function}
f(x) = \frac{1}{\sqrt{1 - x^2}},
\end{equation}

maka dapat dituliskan

\begin{equation}\label{eqn:a-function-0}
f(x) = (1 - x^2)^{-1/2}, \ \ \ \ f(0) = 1,
\end{equation}

\begin{equation}\label{eqn:a-function-1}
f^{i}(x) = x(1 - x^2)^{-3/2}, \ \ \ \ f^{i}(0) = 0,
\end{equation}

\begin{equation}\label{eqn:a-function-2}
f^{ii}(x) = (1 - x^2)^{-3/2} + 3x^2(1 - x^2)^{-5/2}, \ \ \ \ f^{ii}(0) = 1,
\end{equation}

dan seterusnya.

Substitusi Persamaan \eqref{eqn:a-function-0}, \eqref{eqn:a-function-1}, dan \eqref{eqn:a-function-0} ke Persamaan \eqref{eqn:maclaurin-series} akan menghasilkan

\begin{equation}\label{eqn:maclaurin-series-fx}
\begin{array}{rcl}
f(x) & = & 1 + 0 \cdot x + \tfrac12 \cdot 1 \cdot x^2 + \dots \newline
& = & 1 + \tfrac12 x^2 + \dots \newline
& \approx & 1 + \tfrac12 x^2
\end{array}
\end{equation}

yang merupakan aproksimasi untuk $x < < 1$.


## low speed
Selanjutnya substitusi hasil dari Persamaan \eqref{eqn:maclaurin-series-fx} ke Persamaan \eqref{eqn:kinetic-energy-relativistic}, dengan

\begin{equation}\label{eqn:low-velocity}
x \equiv v/c < < 1
\end{equation}

untuk laju rendah, akan diperoleh

\begin{equation}\label{eqn:kinetic-energy-relativistic-to-non}
\begin{array}{rcl}
K & \approx & \displaystyle \left[ 1 + \tfrac12 \left( \frac{v}{c} \right)^2 - 1 \right] \ mc^2 \newline
& \approx & \displaystyle \tfrac12 \left( \frac{v}{c} \right)^2 mc^2 = \tfrac12 mv^2,
\end{array}
\end{equation}

yang akan kembali ke energi kinetik non-relativistik.


## photon
Energi foton diberikan oleh [[7](#r07)]

\begin{equation}\label{eqn:photon-energy}
E = h \nu,
\end{equation}

dengan $h$ konstanta Planck dan $\nu$ frekuensi foton. Untuk photon yang tidak bermassa energi kinetiknya adalah energi totalnya [[8](#r08)].


## exer
1. Untuk $v / c < 1$ akan tetapi tidak memenuhi $v / c < < 1$ bagaimanakah untuk rumusan energi kinetik yang diperoleh?
2. Bagaimana rumusan energi kinetik dari foton yang tidak bermassa?


## notes
1. <a name='r01'></a>Conrad Ranzan, "Mass-to-Energy Conversion, the Astrophysical Mechanism", Journal of High Energy Physics, Gravitation and Cosmology [J High Energy Phys Gravit Cosmol], vol 5, no 2, p, Apr 2019, url <https://doi.org/10.4236/jhepgc.2019.52030>.
2. <a name='r02'></a>Wikipedia contributors, "Energy–momentum relation", Wikipedia, The Free Encyclopedia, 10 March 2022, 15:39 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1076332908> [20220410].
3. <a name='r03'></a>kamaljeet69420, "Energy Momentum Formula", GeeksforGeeks, 9 Mar 2022, url <https://www.geeksforgeeks.org/energy-momentum-formula/> [20220410].
4. <a name='r04'></a>Baalateja Kataru, "", Physics Scribbles, Medium 1 Sep 2019, url <https://medium.com/physics-scribbles/1d1336740504> [20220410].
5. <a name='r05'></a>Darin Acosta, "Relativistic Momentum", PHY2061 Enriched Physics 2 - Electromagnetism Lecture Notes, 11 Oct 2015, url <http://www.phys.ufl.edu/~acosta/phy2061/lectures/Relativity4.pdf> [20220411].
6. <a name='r06'></a>Eric W. Weisstein, "Maclaurin Series", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 7 Apr 2022, url <https://mathworld.wolfram.com/MaclaurinSeries.html> [20220411].
7. <a name='r07'></a>anna v, "Answer to 'Do photons have kinetic energy?'", Physics Stack Exchange, 14 Dec 2019, url <https://physics.stackexchange.com/a/519529/260719> [20220411].
8. <a name='r08'></a>Christopher S. Baird, "Why is light pure energy?", Science Questions with Surprising Answers, West Texas A&M University, 12 Jan 2015, url <https://www.wtamu.edu/~cbaird/sq/mobile/2015/01/12/why-is-light-pure-energy/> [20220411].

{{< citeas >}}
