---
layout: butir
authors: [viridi]
title: internal energy
permalink: pages/0134
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ideal gas law", "state", "process", "cycle", "internal energy"]
date: 2021-11-14 17:12:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/13/2021-11-13-internal-energy.md
twitter_username: 6unpnp
nodes: []
---
Energi dalam atau energi internal suatu gas ideal merupakan fungsi dari temperatur saja [[1](#r01)], sehingga merupakan suatu variabel keadaan [[2](#r02)]. Energi dalam suatu gas adalah jumlah energi kinetik partikel-partikel dalam gas [[3](#r03)] dan juga energi potensialnya, yang untuk gas ideal diabaikan karena tidak ada interaksi inter-partikel [[4](#r04)]. Energi dalam dapat dituliskan dalam tiga besaran ekstensif, yaitu entropi, volume, dan massa [[5](#r05)].


## monoatomic gas
Energi dalam suatu gas ideal monoatomik diberikan oleh [[4](#r04)]

\begin{equation}\label{eqn-internal-energy}
U = \tfrac32 NkT = \tfrac32 nRT,
\end{equation}

dengan $N$ jumlah partikel gas, $k$ konstanta Boltzmann, dan $T$ temperatur, serta $n$ jumlah mol gas. Dan perubahannya [[1](#r01)]

\begin{equation}\label{eqn-internal-energy-change}
dU = C_V dT,
\end{equation}

dengan $C_V = \frac32 nR$ adalah kapasitas panas pada volume tetap dan bila dilakukan integrasi akan diperoleh

\begin{equation}\label{eqn-internal-energy-change-integral}
\Delta U = U_f - U_i = C_V (T_f - T_i) = C_V \Delta T,
\end{equation}

dengan indeks $f$ dan $i$ masing-masing menggambarkan keadaan akhir (final) dan awal (inisial). Persamaan \eqref{eqn-internal-energy} menjelaskan bahwa untuk gas monoatomik energi dalam suatu gas terdiri dari energi translasi saja [[6](#r06)].


## state variable
Energi dalam suatu gas merupakan suatu variabel keadaan sehingga perubahannya hanya bergantung pada keadaan awal dan keadaan akhir, tidak bergantung pada lintasan yang ditempuh suatu proses.

![]({{ site.baseurl }}/assets/img/0/13/0134-a.png) \
Gambar <a name="fig1">1</a>. Sejumlah $384.8695 \ \rm mol$ gas ideal monoatomik mengalami tiga proses $1 \rightarrow 2$, $2 \rightarrow 3$, dan $3 \rightarrow 1$.

Dengan menggunakan persamaan gas ideal dapat diperoleh bahwa $T_1 = 1000 \ \rm K$, $T_2 = 2000 \ \rm K$, dan $T_3 = 1000 \ \rm K$. Untuk gas monoatomik $C_V = \frac32 nR = 4799.99 \approx 4800 \ \rm J/K$. Dengan demikian dapat dihitung bahwa

$$
\Delta U_{1 \rightarrow 2} = C_V (T_2 - T_1) = 4800 \cdot (2000-1000) = 4.8 \times 10^6 \ \rm J,
$$

$$
\Delta U_{2 \rightarrow 3} = C_V (T_3 - T_2) = 4800 \cdot (1000-2000) = -4.8 \times 10^6 \ \rm J,
$$

$$
\Delta U_{3 \rightarrow 1} = C_V (T_3 - T_2) = 4800 \cdot (1000-1000) = 0 \ \rm J,
$$

sehingga

$$
\begin{array}{rcl}
\Delta U_{1 \rightarrow 2 \rightarrow 3 \rightarrow 1} & = & \Delta U_{1 \rightarrow 2} + \Delta U_{2 \rightarrow 3} + \Delta U_{3 \rightarrow 1} \newline
& = & 4.8 \times 10^6 - 4.8 \times 10^6 + 0 \newline
& = & 0
\end{array}
$$

atau secara simbolik saja

$$
\require{cancel}
\newcommand\ccancel[2][black]{\color{#1}{\cancel{\color{black}{#2}}}}
\newcommand\cbcancel[2][black]{\color{#1}{\bcancel{\color{black}{#2}}}}
\newcommand\cxcancel[2][black]{\color{#1}{\xcancel{\color{black}{#2}}}}
\begin{array}{rcl}
\Delta U_{1 \rightarrow 2 \rightarrow 3 \rightarrow 1} & = & \Delta U_{1 \rightarrow 2} + \Delta U_{2 \rightarrow 3} + \Delta U_{3 \rightarrow 1} \newline
& = & C_V (T_2 - T_1) + C_V (T_3 - T_2) + C_V (T_1 - T_3) \newline
& = & \ccancel[red]{C_V T_2} - \cxcancel[green]{C_V T_1} + \cbcancel[blue]{C_V T_3} - \ccancel[red]{C_V T_2} + \cxcancel[green]{C_V T_1} - \cbcancel[blue]{C_V T_3} \newline
& = & 0.
\end{array}
$$

Perhitungan dengan simbolik pada baris kedua dari terakhir lebih disarankan ketimbang perhitungan numerik karena lebih dapat memperkenalkan kesalahan.

![]({{ site.baseurl }}/assets/img/0/13/0134-b.png) \
Gambar <a name="fig2">2</a>. Gas ideal monoatomik $384.8695 \ \rm mol$ mengalami dua proses terpisah, $1 \rightarrow 2 \rightarrow 3$ dan $1 \rightarrow 3$, yang memiliki keadaan awal dan akhir sama.

Ilustrasi pada Gambar [2](#fig2), yang merupakan pengubahan dari Gambar [1](#fig1), memberikan ilustrasi dua proses berbeda akan tetapi dengan keadaan awal dan akhir sama, yang akan memberikan

$$
\Delta U_{1 \rightarrow 2 \rightarrow 3} = \Delta U_{1 \rightarrow 3}
$$

perubahan energi dalam gas yang sama.


# exer
1. Sebutkan tiga proses khusus yang terdapat pada Gambar [1](#fig1).
2. Pada proses apa $\Delta U = 0$?
3. Bagaimana nilai $\Delta U$ suatu siklus?
4. Sebutkan rumus untuk $C_V$ gas ideal monoatomik.
5. Dari ketiga keadaan pada Gambar [2](#fig2), mana yang temperaturnya paling tingggi? Dan berapakah nilainya?


## note
1. <a name="r01"></a>W. Craig Carter, "Internal Energy of an Ideal Gas",28-09-2002, url <http://pruffle.mit.edu/3.00/Lecture_11_web/node1.html> [20111113].
2. <a name="r02"></a>Muller-Steinhagen, Hans Michael Gottfried, "Internal Energy", Thermopedia, 13 February 2011, url <https://dx.doi.org/10.1615/AtoZ.i.internal_energy>.
3. <a name="r03"></a>George M. Bodner, "Energy, Enthalpy, and the First Law of Thermodynamics" in General Chemistry, Division of Chemical Education, Purdue University, url <https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch21/chemical.php> [20211113].
4. <a name="r04"></a>Boundless, "Internal Energy of an Ideal Gas", Concept Version 10, in Boundless Physics, Book Version 3, url <http://kolibri.teacherinabox.org.au/modules/en-boundless/www.boundless.com/physics/textbooks/boundless-physics-textbook/temperature-and-kinetic-theory-12/kinetic-theory-105/internal-energy-of-an-ideal-gas-383-5642/index.html> [20211113].
5. <a name="r05"></a>Wikipedia contributors, "Internal energy", Wikipedia, The Free Encyclopedia, 7 November 2021, 09:57 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1053983664>.
6. <a name="r06"></a>Bernd A. Berg, "Heat Capacities of Gases", General Physics A (PHY2048), 4 Dec 2003, url <http://www.hep.fsu.edu/~berg/teach/phy2048/1202.pdf> [20211114].


## &nbsp;
[kinetic theory of gases](0130.html) &bull; [ideal gas law](0131.html)  &bull; [state, process, cycle](0132.html) &bull; [special processes](0133.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) isobarik, isokhoric, isotermal; &nbsp;
2) isotermal; &nbsp;
3) $0$; &nbsp;
4) $\frac32 nR$; &nbsp;
5) keadaan $2$, $T_2 = 2000 \ \rm K$; &nbsp;
</ans>
