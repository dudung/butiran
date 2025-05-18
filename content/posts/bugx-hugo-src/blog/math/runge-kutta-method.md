---
title: "runge-kutta method"
date: 2022-03-22T05:34:00+07:00
lastmod: 2022-03-22T12:23:00+07:00
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['mathematics', 'computation', 'numerical', 'method', 'draft']
url: "0012"
draft: false
---
Metode Runge-Kutta merupakan kelas metode yang secara bijak memanfaatkan informasi kemiringan kurva pada lebih dari satu titik untuk mengekstrapolasi solusi pada langkah selanjutnya [[1](#r01)]. Metode ini mengintegrasi secara numerik persamaan diferensial biasa menggunakan langkah coba-coba pada titik tengah suatu rentang agar suku kesalahan pada orde lebih rendah saling meniadakan [[2](#r02)]. Anggota keluarga metode Runge-Kutta yang paling dikenal adalah RK4, metode klasik Runge-Kutta atau cukup metode Runge-Kutta [[3](#r03)]. Telah terdapat contoh penerapan metode ini dalam berbagai bahasa pemrograman [[4](#r04)]. Metode ini pun dapat dijalankan beberapa processor secara paralel dalam menyelesaikan persamaan diferensial [[5](#r05)].


## ode 1st order
Suatu persamaan diferensial biasa (PDB) orde satu dapat dituliskan dalam bentuk

\begin{equation}\label{eqn:ode-1st-order}
\frac{dy}{dx} = f(x, y)
\end{equation}

dengan $y = y(x)$.


## euler method
Dengan metode Euler Persamaan \eqref{eqn:ode-1st-order} memiliki

\begin{equation}\label{eqn:ode-1st-order-euler-method}
y_{n+1} = y_n + h \ f(x_n, y_n) + O(h^2),
\end{equation}

sebagai solusi numeriknya [[6](#r06)], yang merupakan suatu permasalahan nilai awal, dengan $h$ adalah rentang antar langkah

\begin{equation}\label{eqn:euler-method-step}
x_{n+1} = x_n + h.
\end{equation}

Suku $O(h^2)$ pada Persamaan \eqref{eqn:ode-1st-order-euler-method} merupakan order akuras [[7](#r07)], yang dalam hal ini sebanding dengan $h^2$, dikenal sebagai simbol Landau [[8](#r08)].


## rk2
Formula untuk orde dua metode Runge-Kutta memiliki bentuk

\begin{equation}\label{eqn:runge-kutta-2-step-1}
k_1 = h \ f(x_n, y_n),
\end{equation}

\begin{equation}\label{eqn:runge-kutta-2-step-2}
k_2 = h \ f(x_{n + \frac12 h}, y_{n + \frac12 k_1}),
\end{equation}

\begin{equation}\label{eqn:runge-kutta-2-step-3}
y_{n + 1} = y_n + k_2 + O(h^3),
\end{equation}

dan perlu ditambahkan pula Persamaan \eqref{eqn:euler-method-step}.


## rk4
Formula untuk orde dua metode Runge-Kutta memiliki bentuk

\begin{equation}\label{eqn:runge-kutta-4-step-1}
k_1 = h \ f(x_n, y_n),
\end{equation}

\begin{equation}\label{eqn:runge-kutta-4-step-2}
k_2 = h \ f(x_{n + \frac12 h}, y_{n + \frac12 k_1}),
\end{equation}

\begin{equation}\label{eqn:runge-kutta-4-step-3}
k_3 = h \ f(x_{n + \frac12 h}, y_{n + \frac12 k_2}),
\end{equation}

\begin{equation}\label{eqn:runge-kutta-4-step-4}
k_4 = h \ f(x_{n + h}, y_{n + k_3}),
\end{equation}

\begin{equation}\label{eqn:runge-kutta-4-step-5}
y_{n + 1} = y_n + \tfrac16 k_1 + \tfrac13 k_2 + \tfrac13 k_3 + \tfrac16 k_4 + O(h^5),
\end{equation}

dan perlu ditambahkan pula Persamaan \eqref{eqn:euler-method-step}.


## example 1
Misalkan terdapat suatu PDB orde pertama berbentuk

\begin{equation}\label{eqn:ode-1st-order-example-1}
\frac{dy}{dx} = -cy
\end{equation}

yang akan digunakan sebagai contoh. Di sini $f(x, y) = f(y)$ dan $c$ suatu koefisien.

### analytical solution
Persamaan \eqref{eqn:ode-1st-order-example-1} memiliki

\begin{equation}\label{eqn:ode-1st-order-analytical-solution-example-1}
y = Ae^{-cx}
\end{equation}

sebagai solusi analitiknya dengan $A$ suatu koefisien.

### euler solution
Dengan menerapkan Persaamaan \eqref{eqn:ode-1st-order-euler-method} pada Persamaan \eqref{eqn:ode-1st-order-example-1} akan diperoleh

\begin{equation}\label{eqn:ode-1st-order-euler-method-example-1}
\begin{array}{rcl}
y_{n+1} & = & y_n - hcy_n \newline
& = & (1 - hc) \ y_n
\end{array}
\end{equation}

sebagai solusinya dan dibutuhkan syarat awal $x_0$ dan $y_0 = y(x_n)$ pada $n = 0$.

### rk2 solution
Dengan menerapkan Persamaan \eqref{eqn:runge-kutta-2-step-1} pada Persamaan \eqref{eqn:ode-1st-order-example-1} akan diperoleh

\begin{equation}\label{eqn:example-1-rk-2-step-1}
k_1 = -h \ cy_n.
\end{equation}

Penggunaan Persamaan \eqref{eqn:runge-kutta-2-step-2} pada Persamaan \eqref{eqn:ode-1st-order-example-1} menghasilkan

\begin{equation}\label{eqn:example-1-rk-2-step-2}
\begin{array}{rcl}
k_2 & = & -h \ c \ (y_n - \tfrac12 hc \ y_n) \newline
& = & (-hc + \tfrac1 2h^2c^2) \ y_n.
\end{array}
\end{equation}

Dan substitusi Persamaan \eqref{eqn:example-1-rk-2-step-1} dan \eqref{eqn:example-1-rk-2-step-2} ke Persamaan \eqref{eqn:example-1-rk-2-step-3} akan memberikan

\begin{equation}\label{eqn:example-1-rk-2-step-3}
\begin{array}{rcl}
y_{n+1} & = & y_n + (-hc + \tfrac1 2h^2c^2) \ y_n \newline
& = & (1 - hc + \tfrac1 2h^2c^2) \ y_n
\end{array}
\end{equation}

sebagai solusinya dan dibutuhkan syarat awal $x_0$ dan $y_0 = y(x_n)$ pada $n = 0$.

### rk4 solution
Dengan menerapkan Persamaan \eqref{eqn:runge-kutta-4-step-1} pada Persamaan \eqref{eqn:ode-1st-order-example-1} akan diperoleh

\begin{equation}\label{eqn:example-1-rk-4-step-1}
k_1 = -h \ cy_n.
\end{equation}

Penggunaan Persamaan \eqref{eqn:runge-kutta-4-step-2} pada Persamaan \eqref{eqn:ode-1st-order-example-1} menghasilkan

\begin{equation}\label{eqn:example-1-rk-4-step-2}
\begin{array}{rcl}
k_2 & = & -h \ c \ (y_n - \tfrac12 hc \ y_n) \newline
& = & (-hc + \tfrac1 2h^2c^2) \ y_n.
\end{array}
\end{equation}

Substitusi Penggunaan Persamaan \eqref{eqn:runge-kutta-4-step-3} pada Persamaan \eqref{eqn:ode-1st-order-example-1} memberikan

\begin{equation}\label{eqn:example-1-rk-4-step-3}
\begin{array}{rcl}
k_3 & = & -h \ c \ [ y_n + \tfrac12 (-hc + \tfrac1 2h^2c^2) \ y_n ] \newline
& = & (-hc + \tfrac12 h^2c^2 - \tfrac18 h^3c^3) \ y_n.
\end{array}
\end{equation}

Selanjutnya penggunaan Penggunaan Persamaan \eqref{eqn:runge-kutta-4-step-3} pada Persamaan \eqref{eqn:ode-1st-order-example-1} akan memperoleh

\begin{equation}\label{eqn:example-1-rk-4-step-4}
\begin{array}{rcl}
k_4 & = & -h \ c \ [ y_n + (-hc + \tfrac12 h^2c^2 - \tfrac18 h^3c^3) \ y_n ] \newline
& = & (-hc + h^2c^2 - \tfrac12 h^3c^3 + \tfrac18 h^4c^4) \ y_n.
\end{array}
\end{equation}

Dan substitusi Persamaan \eqref{eqn:example-1-rk-4-step-1}, \eqref{eqn:example-1-rk-4-step-2}, \eqref{eqn:example-1-rk-4-step-3}, dan \eqref{eqn:example-1-rk-4-step-4} ke Persamaan \eqref{eqn:runge-kutta-4-step-5} akan menghasilkan

\begin{equation}\label{eqn:example-1-rk-4-step-5}
\begin{array}{rcl}
y_{n+1} & = & y_n + \tfrac16 (-hc) \ y_n + \tfrac13 (-hc + \tfrac1 2h^2c^2) \ y_n \newline
&& + \tfrac13 (-hc + \tfrac12 h^2c^2 - \tfrac18 h^3c^3) \ y_n \newline
&& + \tfrac16 (-hc + h^2c^2 - \tfrac12 h^3c^3 + \tfrac18 h^4c^4) \ y_n \newline
& = & (1 - hc + \tfrac12 h^2c^2 - \tfrac18 h^3 c^3 + \tfrac1{48} h^4 c^4) \ y_n
\end{array}
\end{equation}

sebagai solusinya dan dibutuhkan syarat awal $x_0$ dan $y_0 = y(x_n)$ pada $n = 0$.

### the solutions
Permasalahan pada Persamaan\eqref{eqn:ode-1st-order-example-1} memiliki solusi analitik yang diberikan oleh Persamaan \eqref{eqn:ode-1st-order-analytical-solution-example-1} dan solusi analitiknya oleh Persamaan \eqref{eqn:ode-1st-order-euler-method-example-1}, \eqref{eqn:example-1-rk-2-step-3}, dan \eqref{eqn:example-1-rk-4-step-5}.

Tabel <a name='tab1'>1</a>. Beberapa hal terkait dengan contoh pada Persamaan \eqref{eqn:ode-1st-order-example-1}.
Hal | Persamaan terkait
:- | :-
Persamaan Diferensial | $\displaystyle \frac{dy}{dx} = -cy$
Analitik | $y = Ae^{-cx}$
Metode Euler | $y_{n + 1} = (1 - hc) \ y_n$
Metode RK2 | $\displaystyle y_{n + 1} = (1 - hc + \tfrac1 2h^2c^2) \ y_n$
Metode RK4 | $\displaystyle y_{n + 1} = (1 - hc + \tfrac12 h^2c^2 - \tfrac18 h^3 c^3 + \tfrac1{48} h^4 c^4) \ y_n$

Solusi-solusi numerik yang diberikan pada Tabel [1](#tab1) tidak selalu perlu untuk dituliskan dalam bentuk eksplisitnya sehingg terlihat jelas $y_{n+1} = y_{n+1}(y_n)$ akan tetapi cukup dengan menerapkan Persamaan-persamaan \eqref{eqn:example-1-rk-2-step-1}, \eqref{eqn:example-1-rk-2-step-2}, \eqref{eqn:example-1-rk-2-step-3}  untuk metode RK2 dan Persamaan-persamaan \eqref{eqn:example-1-rk-4-step-1}, \eqref{eqn:example-1-rk-4-step-2}, \eqref{eqn:example-1-rk-4-step-3}, \eqref{eqn:example-1-rk-4-step-4}, \eqref{eqn:example-1-rk-4-step-5} untuk metode RK4. Contoh formula eksplisit pada Tabel [1](#tab1) diberikan naya sebagai ilustrasi keterkaitan antar metode numerik.


## example 2
Suatu sistem fisis yang mirip dengan Persamaan\eqref{eqn:ode-1st-order-example-1} adalah benda berbentuk bola yang jatuh dalam fluida karena tarikan gaya gravitasi bumi. Arah positif $y$ diambil ke atas dengan sehingga percepatan gravitasi $\vec{g} = -g_0 \hat{y}$. Terdapat tiga gaya yang bekerja pada bola.

1. Gaya gravitasi bumi
\begin{equation}\label{eqn:example-2-gravitational-force}
\vec{F}_G = -\frac16 \pi D^3 \rho g_0 \hat{y},
\end{equation}
dengan $\rho$ massa jenis bola dan $D$ adalah diameter bola.
2. Gaya apung fluida
\begin{equation}\label{eqn:example-2-buoyant-force}
\vec{F}_B = \frac16 \pi D^3 \rho_0 g_0 \hat{y},
\end{equation}
dengan $\rho_0$ massa jenis fluida.
3. Gaya gesek fluida
\begin{equation}\label{eqn:example-2-drag-force}
\vec{F}_D = -3 \pi \eta_0 D \vec{v},
\end{equation}
dengan $\eta_0$ adalah kekentalan fluida.

Hukum Newton II memberikan

\begin{equation}\label{eqn:example-2-newton-law-2-step-1}
\begin{array}{rcl}
\sum \vec{F} & = & m \vec{a} \newline
\vec{F}_G + \vec{F}_B + \vec{F}_D & = & \displaystyle \tfrac16 \pi D^3\rho \frac{d\vec{v}}{dt} \newline
-\frac16 \pi D^3 \rho g_0 \hat{y}  && \newline
+\frac16 \pi D^3 \rho_0 g_0 \hat{y} && \newline 
-3\pi \eta_0 D \vec{v} & = & \newline
-\frac16 \pi D^3 (\rho - \rho_0) g_0 \hat{y} && \newline
-3\pi \eta_0 D \vec{v} & = & \newline
\displaystyle -\left(\frac{\rho - \rho_0}{\rho}\right) g_0 \hat{y} - \frac{3\pi \eta_0 D}{\frac16 \pi D^3 \rho} \vec{v} & = & \displaystyle \frac{d\vec{v}}{dt} \newline
\displaystyle -\left(1 - \frac{\rho_0}{\rho} \right) g_0 \hat{y} - \frac{18 \eta_0}{D^2 \rho} \vec{v} & = &
\end{array}
\end{equation}

yang dapat dituliskan tanpa notasi vektornya menjadi

\begin{equation}\label{eqn:example-2-newton-law-2-step-2}
\begin{array}{rcl}
\displaystyle \frac{dv}{dt} & = & \displaystyle -\frac{18 \eta_0}{D^2 \rho} v - \left(1 - \frac{\rho_0}{\rho} \right) g_0 \newline
& = & \displaystyle -\left( \frac{18 \eta_0}{D^2 \rho} \right) \left[ v + \frac{D^2 \rho}{18 \eta_0} \left(1 - \frac{\rho_0}{\rho} \right) g_0 \right].
\end{array}
\end{equation}

Misalkan suatu konstanta

\begin{equation}\label{eqn:example-2-newton-law-2-step-3}
c = \frac{18 \eta_0}{D^2 \rho},
\end{equation}

sehingga Persamaan \eqref{eqn:example-2-newton-law-2-step-2} dapat disederhanakan penulisannya menjadi

\begin{equation}\label{eqn:example-2-newton-law-2-step-4}
\frac{dv}{dt} = - c \left[ v + \frac{g_0}{c} \left(1 - \frac{\rho_0}{\rho} \right) \right].
\end{equation}

Dapat didefinisikan suatu besaran baru

\begin{equation}\label{eqn:example-2-newton-law-2-step-5}
u = v + \frac{g_0}{c} \left(1 - \frac{\rho_0}{\rho} \right),
\end{equation}

yang akan membuat Persamaan \eqref{eqn:example-2-newton-law-2-step-4} menjadi

\begin{equation}\label{eqn:example-2-newton-law-2-step-6}
\frac{du}{dt} = - cu,
\end{equation}

yang bentuknya telah serupa dengan Persamaan \eqref{eqn:ode-1st-order-example-1}. Dengan demikian solusi pada Tabel [1](#tab1) dapat diterapkan pada Persamaan \eqref{eqn:example-2-newton-law-2-step-6}.

### real parameters
Minyak motor SAE 50 memiliki viskositas (dinamis) $0.630 \ {\rm Pa \cdot s}$ pada $20 \ {\rm ^\circ C}$ [[9](#r09)], massa jenis aluminium adalah $2710 \ {\rm kg/m^3}$ [[10](#r10)], dan massa jenis air murni adalah $998.2 \ {\rm kg/m^3}$ pada $20 \ {\rm ^\circ C}$ [[11](#r11)], serta standar gravitasi bernilai $9.80665 \ {\rm m/s^2}$ [[12](#r12)]. Bola-bola aluminum dapat berukuran $0.5^"$, $1^"$, $1.25^"$, $1.5^"$, $2^"$, $2.5^"$, $3$, dan $3.5^"$ [[13](#r13)], dengan konversi $1^" = 2.54 \ {\rm cm}$ [[14](#r14)]. Data-data ini dapat digunakan untuk mencari solusi dari sistem fisis pada Persamaan \eqref{eqn:example-2-newton-law-2-step-2}.


## exer
1. Tunjukkan bagaimana pengaruh dari nilai $h$ terhadap hasil yang diperoleh dari solusi-solusi yang diberikan pada Tabel [1](#tab1).
2. Apakah satuan dari $c$ pada Persamaan \eqref{eqn:example-2-newton-law-2-step-3}?


## notes
1. <a name='r01'></a>Nikos Drakos, R. Sureshkumar, Michael Zeltkevic (translator), "Runge-Kutta Methods", 10.001: Numerical Solution of Ordinary Differential Equations, 15 Apr 1998, url <https://web.mit.edu/10.001/Web/Course_Notes/Differential_Equations_Notes/node5.html> [20220322].
2. <a name='r02'></a>Eric W. Weisstein, "Runge-Kutta Method", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 2022, url <https://mathworld.wolfram.com/Runge-KuttaMethod.html> [20220322].
3. <a name='r03'></a>Wikipedia contributors, "Runge–Kutta methods", Wikipedia, The Free Encyclopedia, 9 March 2022, 07:21 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1076075901> [20220322].
4. <a name='r04'></a>GeeksforGeeks, Sam007, vt_m, divyesh072019, piotrkopec
amartyaghoshgfg, "Runge-Kutta 4th Order Method to Solve Differential Equation", GeeksforGeeks, 21 Jan 2022, url <https://www.geeksforgeeks.org/runge-kutta-4th-order-method-solve-differential-equation/> [20220322].
5. <a name='r05'></a>Iman Al Fajri, Hendra Mesra, Jeffry Kusuma, "Solving Ordinary Differential Equation Using Parallel Fourth Order Runge-Kutta Method With Three Processors", Jurnal Matematika, Statistika & Komputasi, [J Mat Stat Kom], vol 17, no 3, p 349-356, May 2021, url <https://doi.org/10.20956/j.v17i3.12490>.
6. <a name='r06'></a>freeCodeCamp.org, "Euler's Method Explained with Examples", freeCodeCamp, 26 Jan 2022, url <https://www.freecodecamp.org/news/eulers-method-explained-with-examples/> [20220322].
7. <a name='r07'></a>Wikipedia contributors, "Order of accuracy", Wikipedia, The Free Encyclopedia, 30 January 2022, 12:46 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1068844657> [20220322].
8. <a name='r08'></a>Eric W. Weisstein, "Landau Symbols", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 2022, url <https://mathworld.wolfram.com/LandauSymbols.html> [20220322].
9. <a name='r09'></a>"Motor Oils - Dynamic Viscosities", The Engineering ToolBox, 2011, url <https://www.engineeringtoolbox.com/dynamic-viscosity-motor-oils-d_1759.html> [20220322].
10. <a name='r10'></a>"Density of Aluminium", Thyssenkrupp Materials (UK) Ltd, 2022, url <https://www.thyssenkrupp-materials.co.uk/density-of-aluminium.html> [20220322].
11. <a name='r11'></a>"Pure Water Density Standard", Merck KGaA, Darmstadt, Germany, 2022, url <https://www.sigmaaldrich.com/ID/en/product/sial/denwat> [20220322].
12. <a name='r12'></a>"standard acceleration of gravity", The NIST Reference on Constant, Units, and Uncertainty, url <https://physics.nist.gov/cgi-bin/cuu/Value?gn> [20220322].
13. <a name='r13'></a>"Aluminum Solid Ball No Hole", Liberty Brass Turning Company, 2019, url <https://libertybrass.com/products/aluminum-solid-ball-no-hole> [20220322].
14. <a name='r14'></a>"Convert inches to cm", unitconverters.net, 2022, url <https://www.unitconverters.net/length/inches-to-cm.htm> [20220322].

{{< citeas >}}