---
title: "divergence theorem"
date: 2022-03-22T19:28:00+07:00
lastmod: 2022-03-23T05:13:00+07:00
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['mathematics', 'theorem', 'divergence', 'intro', 'draft']
url: "0015"
draft: false
---
Teorema divergensi merupakan suatu pernyataan matematik mengenai fakta fisis bahwa tanpa adanya penciptaan atau penghancuran materi, kerapatan dalam suatu wilayah ruang hanya dapat berubah dengan adanya aliran masuk ke dalam atau keluar dari wilayah tersebut melalui batasnya [[1](#r01)]. Teorema ini menghubungkan antara fluks medan vektor yang melewati suatu permukaan tertutup dengan divergensi medan tersebut di dalam volume tertutup [[2](#r02)]. Dengan teorema ini dapat diperoleh persamaan-persamaan Maxwell bentuk integral dari bentuk diferensial atau sebaliknya [[3](#r03)].


## nabla
Operator nabla dalam koordinat kartesian memiliki bentuk [[4](#r04)]

\begin{equation}\label{eqn:nabla}
\vec{\nabla} = \hat{x}\frac{\partial}{\partial x} + \hat{y}\frac{\partial}{\partial y} + \hat{z}\frac{\partial}{\partial z}
\end{equation}

dan bila diterapkan dan bentuk perkalian titik, misalnya pada suatu vektor $\vec{F}$

\begin{equation}\label{eqn:vector-F}
\vec{F} = \hat{x} F_x + \hat{y} F_y + \hat{z} F_z
\end{equation}

akan memberikan

\begin{equation}\label{eqn:nabla-divergence}
\vec{\nabla} \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z},
\end{equation}

yang disebut sebagai divergensi dari $\vec{F}$. Secara umum $F_x = F_x(x, y, z)$, $F_y = F_y(x, y, z)$, dan $F_z = F_z(x, y, z)$. Ruas kiri Persamaan \eqref{eqn:nabla-divergence} sering dibaca dengan "del dot F".


## theorem
Teorema divergensi secara sederhana dapat dituliskan sebagai

\begin{equation}\label{eqn:divergence-theorem}
\int_V (\vec{\nabla} \cdot \vec{F}) \ dV = \oint_A \vec{F} \cdot d\vec{A}
\end{equation}

dengan volume $V$ adalah ruang yang terlingkupi oleh permukaan tertutup $A$.


## charge density
Muatan $q$ dapat diperoleh dengan mengintegralkan rapat muatannya untuk seluruh volume

\begin{equation}\label{eqn:charge-density-integral}
q = \int \rho \ dV
\end{equation}

atau

\begin{equation}\label{eqn:charge-density-differential}
\rho = \frac{dq}{dV}
\end{equation}

yang merupakan bentuk diferensialnya.


## use
Di sini hanya akan disinggung pemanfaatan teorema divergensi yang diberikan oleh Persamaan \eqref{eqn:divergence-theorem} pada hukum Gauss untuk kelistrikan dan hukum Gauss untuk kemagnetan.

### electricity
Hukum Gauss untuk kelistrikan memiliki bentuk

\begin{equation}\label{eqn:gauss-law-electricity}
\oint \vec{E} \cdot d\vec{A} = \frac{q}{\varepsilon_0}.
\end{equation}

Penerapan Persamaan \eqref{eqn:divergence-theorem} dan \eqref{eqn:charge-density-integral} pada kiri dan kanan Persamaan \eqref{eqn:gauss-law-electricity} akan menghasilkan

\begin{equation}\label{eqn:gauss-law-electricity-to-divergence}
\begin{array}{rcl}
\displaystyle \oint \vec{E} \cdot d\vec{A} & = & \displaystyle \frac{q}{\varepsilon_0} \newline
\displaystyle \int (\vec{\nabla} \cdot \vec{E}) \ dV & = & \displaystyle \int \frac{\rho}{\varepsilon_0} \ dV,
\end{array}
\end{equation}

yang selanjutnya dapat memberikan

\begin{equation}\label{eqn:gauss-law-electricity-differential}
\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0}
\end{equation}

yang merupakan persamaan pertama dari persamaan-persamaan Maxwell.

{{< svg "/static/img/bugx/blank.svg" "fig1" "1" "Beberapa muatan listrik dan beberapa permukaan tertutup Gauss." >}}

Ilustrasi dari hubungan antara fluks medan listrik yang melewati suatu permukaan tertutup dengan divergensi medan tersebut di dalam volume tertutup untuk muatan dan medan listrik diberikan pada Gambar [1](#fig1).

### magnetism
Hukum Gauss untuk kemagnetan memiliki bentuk

\begin{equation}\label{eqn:gauss-law-magnetism}
\oint \vec{B} \cdot d\vec{A} = 0,
\end{equation}

yang dengan menggunakan Persamaan \eqref{eqn:divergence-theorem} dan langkah-langkah seperti pada hukum Gauss untuk kelistrikan akan menghasilkan

\begin{equation}\label{eqn:gauss-law-magnetism-differential}
\vec{\nabla} \cdot \vec{B} = 0
\end{equation}

yang merupakan persamaan kedua dari persamaan-persamaan Maxwell.

{{< svg "/static/img/bugx/blank.svg" "fig2" "2" "Beberapa sumber medan magnet dan beberapa permukaan tertutup Gauss." >}}

Ilustrasi dari hubungan antara fluks medan magnet yang melewati suatu permukaan tertutup dengan divergensi medan tersebut di dalam volume tertutup untuk sumber dan medan magnet diberikan pada Gambar [2](#fig2).

Persamaan \eqref{eqn:gauss-law-electricity-differential} merupakan hukum Gauss untuk kelistrikan dalam bentuk diferensial dan Persamaan \eqref{eqn:gauss-law-magnetism-differential} merupakan hukum Gauss untuk kemagnetan dalam bentuk diferensial. Keduanya merupaka dua persamaan pertama dari empat persamaan Maxwell.


## exer
1. Terkait dengan keberadaan monopol listrik, apakah makna dari Persamaan \eqref{eqn:gauss-law-electricity-differential} dan Gambaf [1](#fig1)?
2. Terkait dengan keberadaan monopol magnet apakah makna dari Persamaan \eqref{eqn:gauss-law-magnetism-differential} dan Gambaf [2](#fig2)?


## notes
1. <a name='r01'></a>Eric W. Weisstein, "Divergence Theorem", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 2022, url <https://mathworld.wolfram.com/DivergenceTheorem.html> [20220322].
2. <a name='r02'></a>Wikipedia contributors, "Divergence theorem", Wikipedia, The Free Encyclopedia, 14 March 2022, 18:11 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1077137550> [20220322].
3. <a name='r03'></a>Carl Rod Nave, "Maxwell's Equations", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq.html> [20220322].
4. <a name='r04'></a>Wikipedia-Autoren, "Nabla-Operator", Wikipedia – Die freie Enzyklopädie, 15. August 2021, 18:44 UTC, url <https://de.wikipedia.org/w/index.php?oldid=214790423> [20220322].

{{< citeas >}}