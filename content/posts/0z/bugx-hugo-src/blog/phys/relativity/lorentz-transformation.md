---
title: "lorentz transformation"
date: 2022-04-18T12:49:00+07:00
lastmod: 2022-04-18T18:48:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'relativity', 'lorentz', 'coordinate', 'draft']
url: "0062"
draft: false
---
Persamaan-persamaan yang memungkinkan untuk mengubah koordinat spasial dan temporal dari satu sistem inersial ke sistem inersial lain yang bergerak dengan kecepatan berapapun (akan tetapi masih lebih lambat dari laju cahaya) disebut sebagai  transformasi Lorentz [[1](#r01)]. Rentang waktu antara dua kejadian akan berubah dalam suatu transformasi Lorentz yang berbeda dengan dalam transformasi Galilean, akan tetapi bila laju kerangka bergerak jauh lebih kecil dari laju cahaya dalam vakum, transformasi Lorentz dapat didekati dengan transformasi Galilean dan rentang waktu antara dua kejadian menjadi sama pada kedua kerangka [[2](#r02)]. Transformasi Lorentz secara formal mengekspresikan konsep relatif bahwa ruang dan waktu tidak absolut, bahwa panjang, waktu, dan massa bergantung dari gerak relatif antara para pengamat [[3](#r03)].


## formula
Terdapat dua kerangka acuan inersial, yaitu $oxyz$ yang diam dan $o'x'y'z'$ yang bergerak ke kanan searah dengan $x$ dan $x'$ dengan laju tetap $v$ terhadap kerangka pertama. Hubungan kedua koordinat pada kedua kerangka acuan dapat dituliskan tanpa menggukan $\gamma$ [[4](#r04)]

\begin{equation}\label{eqn:lorentz-transformation-with-gamma}
\begin{array}{rcl}
t' & = & \displaystyle \frac{\displaystyle \left( t - \frac{vx}{c^2} \right)}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}, \newline
x' & = & \displaystyle \frac{(x - vt)}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}, \newline
y' & = & y, \newline
z' & = & z,
\end{array}
\end{equation}

atau dengan $\gamma$ [[5](#r05)]

\begin{equation}\label{eqn:lorentz-transformation-without-gamma}
\begin{array}{rcl}
t' & = & \displaystyle \gamma \left( t - \frac{vx}{c^2} \right), \newline
x' & = & \gamma (x - vt), \newline
y' & = & y, \newline
z' & = & z,
\end{array}
\end{equation}

agar lebih sederhana, di mana

\begin{equation}\label{eqn:lorentz-factor}
\gamma = \frac{1}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}
\end{equation}

adalah faktor Lorentz.


## moving frame
..

{{< svg "/static/img/phys/relativity/lorentz-transformation-1.svg" "fig1" "1" "Keadaan awal saat kedua kerangka masih bersisian saat t = t' = 0." >}}

..

{{< svg "/static/img/phys/relativity/lorentz-transformation-2.svg" "fig2" "2" "Keadaan akhir saat kedua kerangka sudah terpisan dengan pengukuran waktu masing-msaing." >}}

..


## notes
1. <a name='r01'></a>-, "LORENTZ-Transformation", Lern Helfer, Duden Learnattack GmBH, 2010, url <https://www.lernhelfer.de/schuelerlexikon/physik-abitur/artikel/lorentz-transformation#> [20220418].
2. <a name='r02'></a>Lisa Jardine-Wright, Mark Warner, and Team, "Lorentz Transforms", Isaac Physics, Department for Education, University of Cambridge url <https://isaacphysics.org/concepts/cp_lorentz_transform?stage=all> [20220418].
3. <a name='r03'></a>The Editors of Encyclopaedia Britannica, "Lorentz transformations", Encyclopaedia Britannica, 11 Jan 1999, url <https://www.britannica.com/science/Lorentz-transformations> [20220418].
4. <a name='r04'></a>Carl Rod Nave, "Lorentz Transformation", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Relativ/ltrans.html#c2> [20220418].
5. <a name='r05'></a>Wikipedia contributors, "Lorentz transformation", Wikipedia, The Free Encyclopedia, 16 April 2022, 09:52 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1082993165> [20220418].

{{< citeas >}}
