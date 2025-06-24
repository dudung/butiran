---
title: "curl theorem"
date: 2022-03-23T04:30:00+07:00
lastmod: 2022-03-23T06:15:00+07:00
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['mathematics', 'theorem', 'curl', 'intro', 'draft']
url: "0016"
draft: false
---
Teorema curl merupakan suatu kasus khusus dari teorema Stokes dan suatu generalisasi dari Teorema Green [[1](#r01)]. Teorema ini menghubungkan antara integral suatu curl medan vektor pada suatu permukaan dengan integral garis medan vektor mengelilingi batas permukaan tersebut [[2](#r02)]. Dengan teorema ini dapat diperoleh persamaan-persamaan Maxwell bentuk integral dari bentuk diferensial atau sebaliknya [[3](#r03)].


## nabla
Operator nabla dalam koordinat kartesian memiliki bentuk [[4](#r04)]

\begin{equation}\label{eqn:nabla}
\vec{\nabla} = \hat{x}\frac{\partial}{\partial x} + \hat{y}\frac{\partial}{\partial y} + \hat{z}\frac{\partial}{\partial z}
\end{equation}

dan bila diterapkan, misalnya pada suatu vektor $\vec{F}$

\begin{equation}\label{eqn:vector-F}
\vec{F} = \hat{x} F_x + \hat{y} F_y + \hat{z} F_z
\end{equation}

dalam bentuk perkalian silang akan memberikan [[5](#r05)]

\begin{equation}\label{eqn:nabla-curl}
\begin{array}{rcl}
\vec{\nabla} \times \vec{F} & = & \displaystyle \hat{x} \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \newline
&& \displaystyle + \hat{y} \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \newline
&& \displaystyle + \hat{z} \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right),
\end{array}
\end{equation}

yang disebut sebagai curl dari $\vec{F}$. Secara umum $F_x = F_x(x, y, z)$, $F_y = F_y(x, y, z)$, dan $F_z = F_z(x, y, z)$.


## theorem
Teorema curl secara sederhana dapat dituliskan sebagai

\begin{equation}\label{eqn:curl-theorem}
\int_A (\vec{\nabla} \times \vec{F}) \cdot d\vec{A} = \oint_l \vec{F} \cdot d\vec{l}
\end{equation}

dengan $A$ adalah suatu permukaan melengkung dan $l$ adalah lintasan tertutup pada batas permukaan.

{{< svg "/static/img/bugx/blank.svg" "fig1" "1" "Suatu permukaan terbuka melengkung dan batasnya berupa lintasan tertutup." >}}

Hubungan antara lintasan tertutup pada batas permukaan $l$ dan permukaannya $A$ diberikan pada Gambar [1](#fig1). 


## faraday's law
Medan listrik $\vec{E}$ terkait dengan potensialnya melalui

\begin{equation}\label{eqn:electric-field-potential}
V = \int \vec{E} \cdot d\vec{l}.
\end{equation}

Bila integral Pada Persamaan \eqref{eqn:electric-field-potential} dilakukan dari suatu titik dan kembali ke titik tersebut maka akan diperoleh

\begin{equation}\label{eqn:electric-field-potential-close-loop}
\oint \vec{E} \cdot d\vec{l} = 0
\end{equation}

dikarena sifat $\vec{E}$ yang merupakan medan dari gaya elektrostatik yang merupakan gaya konservatif. Salah satu penerapannya adalah hukum II Kirchhoff

\begin{equation}\label{eqn:kirchhoff-2nd-rule}
\sum_{\begin{array}{c}a \rightarrow b \newline b \rightarrow a\end{array}} V = 0
\end{equation}

yang menggambarkan jumlah perubahan potensial pada suatu loop tertutup adalah nol, yang dapat terlihat dari penerapan Persamaan \eqref{eqn:electric-field-potential-close-loop} pada Persamaan \eqref{eqn:electric-field-potential}.

Hukum Faraday-Lenz dalam bentuk

\begin{equation}\label{eqn:faraday-lenz-law}
\varepsilon = -\frac{d\Phi_B}{dt}
\end{equation}

yang menggambarkan munculnya ggl induksi pada suatu loop tertutup yang fluks magnetiknya berubah dengan waktu. Ggl induksi $\varepsilon$ ini tidak lain adalah potensial listrik $V$ pada suatu loop tertutup. Perhatikan bahwa ggl induksi pada Persamaan \eqref{eqn:faraday-lenz-law} ini akan membuat suku di sebelah kanan dari Persamaan \eqref{eqn:electric-field-potential-close-loop} tidak lagi nol yang dituliskan sebagai

\begin{equation}\label{eqn:faraday-law-of-induction}
\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt},
\end{equation}

dengan

\begin{equation}\label{eqn:magnetic-field-flux}
\Phi_B = \int \vec{B} \cdot d\vec{A}
\end{equation}

adalah fluks medan magnetiknya.

{{< svg "/static/img/bugx/blank.svg" "fig2" "2" "Suatu loop tertutup saat tidak ada dan saat ada perubahan fluks magnetik padanya." >}}

Persamaan \eqref{eqn:electric-field-potential-close-loop} dan \eqref{eqn:kirchhoff-2nd-rule} berlaku pada loop tertutup yang fluks magnetiknya tidak berubah terhadap waktu. Dan saat fluks magnetiknya berubah terhadap waktu akan berlaku Persamaan \eqref{eqn:faraday-law-of-induction}. Kedua peristiwa ini diilustasikan pada Gambar [2](#fig2).


## ampere's law
Hukum Ampere dengan adanya perubahan medan fluks medan listrik dapat dituliskan sebagai

\begin{equation}\label{eqn:ampere-law}
\oint \vec{B} \cdot d\vec{l} = \mu_o I + \frac{1}{c^2} \frac{d\Phi_E}{dt},
\end{equation}

dengan

\begin{equation}\label{eqn:electric-field-flux}
\Phi_E = \int \vec{E} \cdot d\vec{A}
\end{equation}

adalah fluks medan listriknya.


## current density
Terdapat hubungan

\begin{equation}\label{eqn:current-density}
I = \int \vec{J} \cdot d\vec{A}
\end{equation}

yang mengaitkan antara arus $I$ dengan rapat arus \vec{J} yang melalui suatu elemen permukaan $d\vec{A}$. Dapat pula dituliskan

\begin{equation}\label{eqn:current-density-differential}
J = \frac{dI}{dA}
\end{equation}

sebagai bentuk diferensialnya, di mana telah diambil bahwa arah $\vec{J}$ sejajar dengan arah $d\vec{A}$.


## use
Di sini hanya akan disinggung pemanfaatan teorema curl yang diberikan oleh Persamaan \eqref{eqn:curl-theorem} pada hukum induksi Faraday-Lenz dan hukum Ampere.

### curl of e
Substitusi Persamaan \eqref{eqn:magnetic-field-flux} ke Persamaan \eqref{eqn:faraday-law-of-induction}, serta penerapan Persamaan \eqref{eqn:curl-theorem} akan menghasilkan

\begin{equation}\label{eqn:faraday-law-of-induction-curl}
\begin{array}{rcl}
\displaystyle \oint \vec{E} \cdot d\vec{l} & = & \displaystyle -\frac{d}{dt} \int \vec{B} \cdot d\vec{A} \newline
& = & \displaystyle - \int \frac{d\vec{B}}{dt} \cdot d\vec{A} \newline
\displaystyle \int (\vec{\nabla} \times \vec{E}) \cdot d\vec{A} & = &
\newline
\end{array}
\end{equation}

sehingga dapat diperoleh

\begin{equation}\label{eqn:faraday-law-differential}
\vec{\nabla} \times \vec{E} = -\frac{d\vec{B}}{dt}
\end{equation}

yang merupakan persamaan ketiga dari persamaan-persamaan Maxwell.

### curl of b
Substitusi Persamaan \eqref{eqn:electric-field-flux} dan \eqref{eqn:current-density} ke Persamaan \eqref{eqn:ampere-law}, serta penerapaan Persamaan \eqref{eqn:curl-theorem}, akan menghasilkan

\begin{equation}\label{eqn:ampere-law-curl}
\begin{array}{rcl}
\displaystyle \oint \vec{B} \cdot d\vec{l} & = & \displaystyle \mu_o \int \vec{J} \cdot d\vec{A} + \frac{1}{c^2} \frac{d}{dt} \int \vec{E} \cdot d\vec{A} \newline
& = & \displaystyle \int \mu_o \vec{J} \cdot d\vec{A} + \int \frac{1}{c^2} \frac{d\vec{E}}{dt} \cdot d\vec{A} \newline
& = & \displaystyle \int \left( \mu_o \vec{J} + \frac{1}{c^2} \frac{d\vec{E}}{dt} \right) \cdot d\vec{A} \newline
\displaystyle \int (\vec{\nabla} \times \vec{B}) \cdot d\vec{A} & = &
\end{array}
\end{equation}

sehingga dapat diperoleh

\begin{equation}\label{eqn:ampere-law-differential}
\vec{\nabla} \times \vec{B} = \mu_o \vec{J} + \frac{1}{c^2} \frac{d\vec{E}}{dt},
\end{equation}

yang merupakan persamaan keempat dari persaman-persamaan Maxwell.


## exer
1. Bagaimana menunjukkan bahwa suku kedua para ruas kanan Persamaan \eqref{eqn:ampere-law} telah sama satuannya dengan ruas kirinya? Gunakan analisis satuan.


## notes
1. <a name='r01'></a>Eric W. Weisstein, "Curl Theorem", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 2022, url <https://mathworld.wolfram.com/CurlTheorem.html> [20220323].
2. <a name='r02'></a>Wikipedia contributors, "Stokes' theorem", Wikipedia, The Free Encyclopedia, 17 March 2022, 13:02 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1077649345> [20220323].
3. <a name='r03'></a>Carl Rod Nave, "Maxwell's Equations", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/maxeq.html> [20220323].
4. <a name='r04'></a>Wikipedia-Autoren, "Nabla-Operator", Wikipedia – Die freie Enzyklopädie, 15. August 2021, 18:44 UTC, url <https://de.wikipedia.org/w/index.php?oldid=214790423> [20220323].
5. <a name='r05'></a>Eric W. Weisstein, "Curl", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 2022, url <https://mathworld.wolfram.com/Curl.html> [20220323].

{{< citeas >}}