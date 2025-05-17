---
title: "partial differential equation"
date: 2022-03-23T09:18:00+07:00
lastmod: 2022-03-23T19:36:00+07:00
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['mathematics', 'theorem', 'curl', 'intro', 'draft']
url: "0017"
draft: false
---
Persamaan diferensial parsial (PDP) merupakan suatu persamaan yang melibatkan fungsi multivariabel dan turunannya [[1](#r01)]. Fungsi yang dimaksud merupakan sesuatu yang belum diketahui dan akan dipecahkan [[2](#r02)]. Metode separasi variabel merupakan salah satu metode yang sering digunakan dalam penyelesaian secara secara analitik [[3](#r03)]  dan untuk numerik dapat digunakan beda hingga [[4](#r04)]. Untuk lebih mendalami PDP dapat digunakan berbagai sumber yang tersedia seperti buku [[5](#r05)] dan catatan kuliah [[6](#r06)].


## simple example
Sebagai contoh sederhana dapat dibuat-buat satu fungsi dua variabel yang telah diketahui terlebih dahulu solusinya. Misalkan terdapat fungsi

\begin{equation}\label{eqn:simple-example-u-solution}
u(x, y) = e^{\alpha x} \sin \beta y,
\end{equation}

yang turunan-turunannya adalah

\begin{equation}\label{eqn:simple-example-uxn}
\frac{\partial^n u}{\partial x^n} = \alpha^n u,
\end{equation}

\begin{equation}\label{eqn:simple-example-uy2n-1}
\frac{\partial^{2n-1} u}{\partial y^{2n-1} } =  (-1)^{n+1} \beta^{2n-1} x \cos \beta y,
\end{equation}

\begin{equation}\label{eqn:simple-example-uy2n}
\frac{\partial^{2n} u}{\partial y^{2n} } =  (-1)^n \beta^{2n} u,
\end{equation}

dengan $n = 1, 2, 3, \dots$. Selanjutnya dapat dituliskan

\begin{equation}\label{eqn:simple-example-pde-1}
\alpha \beta^2 \frac{\partial u}{\partial x} + \alpha^2 \frac{\partial^2 u}{\partial y^2} = 0
\end{equation}

\begin{equation}\label{eqn:simple-example-pde-2}
\beta^2 \frac{\partial^2 u}{\partial x^2} + \alpha^2 \frac{\partial^2 u}{\partial y^2} = 0
\end{equation}

\begin{equation}\label{eqn:simple-example-pde-3}
\frac{\beta^2}{\alpha} \frac{\partial^3 u}{\partial x^3} + \alpha^2 \frac{\partial^2 u}{\partial y^2} = 0
\end{equation}

sebagai beberapa persamaan diferensial parsialnya. Persamaan \eqref{eqn:simple-example-pde-1}, \eqref{eqn:simple-example-pde-2}, dan \eqref{eqn:simple-example-pde-3} akan memiliki solusi yang sama, yaitu Persamaan \eqref{eqn:simple-example-u-solution}.


## wave equation
Salah satu PDP yang dikenal luas adalah persamaan gelombang

\begin{equation}\label{eqn:wave-equation}
\frac{\partial^2 u}{\partial x^2} - \frac{1}{v^2} \frac{\partial^2 u}{\partial t^2} = 0,
\end{equation}

dengan $u$ adalah sesuatu yang tidak diketahui (unknown) yang merupakan fungsi dari $x$ dan $t$. Persamaan \eqref{eqn:wave-equation} ini dapat dipecahkan salah satunya dengan memisalkan bentuk yang separabel

\begin{equation}\label{eqn:wave-equation-u-XT}
u = X(x) T(t)
\end{equation}

dengan $X$ hanya fungsi $x$ dan $T$ hanya fungsi $t$. Substitusi Persamaan \eqref{eqn:wave-equation-u-XT} ke Persamaan \eqref{eqn:wave-equation} akan memberikan

\begin{equation}\label{eqn:wave-equation-separation-of-variable}
\begin{array}{rcl}
\displaystyle \frac{\partial^2}{\partial x^2} [X(x) T(t)] & = & \displaystyle \frac{1}{v^2} \frac{\partial^2}{\partial x^2} [X(x) T(t)] \newline
\displaystyle T(t) \frac{\partial^2}{\partial x^2} X(x) & = & \displaystyle \frac{1}{v^2} X(x) \frac{\partial^2}{\partial t^2} T(t) \newline
\displaystyle T \frac{d^2 X}{dx^2} & = & \displaystyle \frac{1}{v^2} X \frac{d^2 T}{dt^2} \newline
\displaystyle \frac{1}{X} \frac{d^2 X}{dx^2} & = & \displaystyle \frac{1}{v^2} \frac{1}{T} \frac{d^2 T}{dt^2} \newline
\end{array}
\end{equation}

yang pada baris terakhir masing-masing ruas hanya merupakan fungsi dari satu variabel. Ruas kiri hanya fungsi dari $x$ dan ruang kanan hanya fungsi dari $t$. Kedua ruas dapat disamakan bila keduanya merupakan konstanta, misalkan saja $-k^2$. Dengan demikian dapat dituliskan untuk masing-masing ruang menjadi

\begin{equation}\label{eqn:wave-equation-separation-of-variable-x-part}
\frac{1}{X} \frac{d^2 X}{dx^2} = -k^2
\end{equation}

dan

\begin{equation}\label{eqn:wave-equation-separation-of-variable-t-part}
\frac{1}{v^2} \frac{1}{T} \frac{d^2 T}{dt^2} = -k^2.
\end{equation}

### x part
Persamaan \eqref{eqn:wave-equation-separation-of-variable-x-part} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:solution-x-part}
\frac{d^2 X}{dx^2} + k^2 X = 0
\end{equation}

yang memiliki solusi

\begin{equation}\label{eqn:solution-x-part-solution}
X = A e^{\pm ikx}.
\end{equation}

### t part
Persamaan \eqref{eqn:wave-equation-separation-of-variable-t-part} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:solution-t-part}
\frac{d^2 T}{dt^2} + \omega^2 v^2 T = 0
\end{equation}

yang memiliki solusi

\begin{equation}\label{eqn:solution-t-part-solution}
T = B e^{\pm i\omega t}.
\end{equation}

### merge solutions
Substitusi Persamaan \eqref{eqn:solution-x-part-solution} dan \eqref{eqn:solution-t-part-solution} ke Persamaan \eqref{eqn:wave-equation-u-XT} akan menghasilkan

\begin{equation}\label{eqn:wave-equation-u-XT-solution}
u = A e^{\pm ikx} \ B e^{\pm i\omega t} = C e^{i(\pm kx \pm \omega t )},
\end{equation}

dengan $C$ suatu koefisiensi sembarang sebagaimana halnya $A$ dan $B$. Dari Persamaan \eqref{eqn:wave-equation-u-XT-solution} dapat dituliskan

\begin{equation}\label{eqn:wave-equation-u-XT-solution-pp}
u_{++} = C e^{i(+kx + \omega t)},
\end{equation}

\begin{equation}\label{eqn:wave-equation-u-XT-solution-pm}
u_{+-} = C e^{i(+kx - \omega t)},
\end{equation}

\begin{equation}\label{eqn:wave-equation-u-XT-solution-mp}
u_{-+} = C e^{i(-kx + \omega t)},
\end{equation}

\begin{equation}\label{eqn:wave-equation-u-XT-solution-mm}
u_{- -} = C e^{i(-kx - \omega t)}.
\end{equation}

Kombinasi linier dari keempat persamaan di atas juga merupkan solusi. Bentuk yang umum digunakan dapat diperoleh dengan

\begin{equation}\label{eqn:wave-equation-u-XT-solution-psi}
\begin{array}{rcl}
u & = & \displaystyle \frac{u_{+-} - u_{-+}}{2_i} \newline
& = &  C \sin (kx - \omega t)
\end{array}
\end{equation}

yang merupakan gelombang yang merambat pada arah $x+$.


## finite difference
Dalam metode beda hingga turunan pertama dan kedua dicari dengan menggunaka nilai fungsi. Terdapat pendekatan beda hingga maju, mundur, dan tengah.

### 1st derivative
Turunan pertama dengan dapat dituliskan sebagai berikut untuk beda hingga maju

\begin{equation}\label{eqn:fd-1st-derivative-forward}
\frac{du}{dx} = \frac{u_{i+1} - u_{i}}{h}
\end{equation}

dan sebagai berikut untuk beda hingga mundur.

\begin{equation}\label{eqn:fd-1st-derivative-backward}
\frac{du}{dx} = \frac{u_{i} - u_{i-1}}{h}
\end{equation}

Persamaan \eqref{eqn:fd-1st-derivative-forward} dan \eqref{eqn:fd-1st-derivative-backward} akan digunakan untuk mencari turunan kedua.

### 2nd derivative
Dengan menggunakan dua kali Persamaan \eqref{eqn:fd-1st-derivative-forward} akan diperoleh

\begin{equation}\label{eqn:fd-2nd-derivative-forward}
\begin{array}{rcl}
\displaystyle
\frac{d^2 u}{dx^2} & = & \displaystyle \frac{\displaystyle \frac{u_{i+2} - u_{i+1}}{h} - \frac{u_{i+1} - u_{i}}{h}}{h} \newline
& = & \displaystyle \frac{u_{i+2} - 2u_{i+1} + u_{i}}{u^2}
\end{array}
\end{equation}

yang merupakan turunan kedua beda hingga maju. Selanjutnya dengan menggunakan Persamaan \eqref{eqn:fd-1st-derivative-forward} dan \eqref{eqn:fd-1st-derivative-backward} akan dihasilkan

\begin{equation}\label{eqn:fd-2nd-derivative-center}
\begin{array}{rcl}
\displaystyle
\frac{d^2 u}{dx^2} & = & \displaystyle \frac{\displaystyle \frac{u_{i+1} - u_{i}}{h} - \frac{u_{i} - u_{i-1}}{h}}{h} \newline
& = & \displaystyle \frac{u_{i+1} - 2u_{i} + u_{i-1}}{u^2}
\end{array}
\end{equation}

yang dikenal sebagai turunan kedua dengan beda hingga tengah. Dan yang terakhir adalah menggunakan Persamaan \eqref{eqn:fd-1st-derivative-backward} dua kali untuk mendapakan

\begin{equation}\label{eqn:fd-2nd-derivative-backward}
\begin{array}{rcl}
\displaystyle
\frac{d^2 u}{dx^2} & = & \displaystyle \frac{\displaystyle \frac{u_{i} - u_{i-1}}{h} - \frac{u_{i-1} - u_{i-2}}{h}}{h} \newline
& = & \displaystyle \frac{u_{i} - 2u_{i-1} + u_{i-2}}{u^2}
\end{array}
\end{equation}

yang adalah rumusan turunan kedua beda hingga mundur.

### solution of wave equation
Dengan menggunakan metode beda tengah pada Persamaan \eqref{eqn:fd-2nd-derivative-center} dapat dituliskan untuk pada komponen spasial

\begin{equation}\label{eqn:finite-difference-spatial}
\frac{d^2 u}{dx^2} = \frac{u_{i + 1} - 2u_i + u_{i - 1}}{h^2}
\end{equation}

dan untuk komponen temporal

\begin{equation}\label{eqn:finite-difference-temporal}
\frac{d^2 u}{dt^2} = \frac{u^{j + 1} - 2u^j + u^{j - 1}}{l^2}.
\end{equation}

Di sini digunakan indeks bawah untuk komponen spasial yang dalam hal ini dengan variabel $i$ dan indeks atas untuk komponen temporal yang dalam hal ini dengan variabel $j$.

Dengan Persamaan \eqref{eqn:finite-difference-spatial} dan \eqref{eqn:finite-difference-temporal}, Persamaan \eqref{eqn:wave-equation} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:wave-equation-finite-difference}
\frac{u_{i + 1}^j - 2u_i^j + u_{i - 1}^j}{h^2} = \frac{1}{v^2} \left( \frac{u^{j + 1}_i - 2u^j_i + u^{j - 1}_i}{l^2} \right).
\end{equation}

Suatu variabel tak berdimensi

\begin{equation}\label{eqn:wave-eqn-fd-param}
\gamma = \frac{lv}{h}
\end{equation}

dapat didefinsikan, sehingga Persamaan \eqref{eqn:finite-difference-temporal} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:wave-equation-finite-difference-solution}
\begin{array}{rcl}
\gamma^2 \left( u_{i+1}^j - 2u_i^j + u_{i-1}^j \right) & = & \displaystyle u^{j+1}_i - 2u^j_i + u^{j-1}_i \newline
-u_i^{j-1} & & \newline
+\gamma^2 u _{i+1} ^j + \gamma^2 u _{i-1} ^j & & \newline
2(1 - \gamma^2) u_i^j & = & u_i^{j+1}
\end{array}
\end{equation}

yang menggambarkan bagaimana informasi masa depan saat waktu $j + 1$ pada suatu posisi $i$ diperoleh bergantung dengan informasi pada posisi yang sama $i$ serta tetangga kiri $i-1$ dan kanannya $i+1$ pada waktu $j$, dan juga pada posisi yang sama $i$ saat waktu lebih belakang $j - 1$. Persamaan \eqref{eqn:wave-equation-finite-difference-solution} tidak digunakan pada batas kiri dan batas kanan karena ketiadaan informasi tetangga di sebelah kiri setelah lewat batas kiri dan di sebelah kanan setelah lewat batas kanan. Untuk itu Persamaan \eqref{eqn:wave-equation-finite-difference} perlu dimodifikasi dengan memanfaatkan Persamaan \eqref{eqn:fd-2nd-derivative-forward} dan \eqref{eqn:fd-2nd-derivative-backward}. Dengan menggunakan beda hingga maju diperoleh

\begin{equation}\label{eqn:wave-equation-finite-difference-solution-forward}
\begin{array}{rcl}
\gamma^2 \left( u_{i+2}^j - 2u_{i+1}^j + u_{i}^j \right) & = & \displaystyle u^{j+1}_i - 2u^j_i + u^{j-1}_i \newline
-u_i^{j-1} & & \newline
+\gamma^2 u _{i+2} ^j - 2\gamma^2 u _{i+1} ^j & & \newline
(2 + \gamma^2) u_i^j & = & u_i^{j+1}
\end{array}
\end{equation}

dan dengan beda hingga mundur didapatkan

\begin{equation}\label{eqn:wave-equation-finite-difference-solution-backward}
\begin{array}{rcl}
\gamma^2 \left( u_{i}^j - 2u_{i-1}^j + u_{i-2}^j \right) & = & \displaystyle u^{j+1}_i - 2u^j_i + u^{j-1}_i \newline
-u_i^{j-1} & & \newline
+\gamma^2 u _{i-2} ^j - 2\gamma^2 u _{i-1} ^j & & \newline
(2 + \gamma^2) u_i^j & = & u_i^{j+1}
\end{array}
\end{equation}

..


## notes
1. <a name='r01'></a>Eric W. Weisstein, "Partial Differential Equation," from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 21 Mar 2022, url <https://mathworld.wolfram.com/PartialDifferentialEquation.html> [20220323].
2. <a name='r02'></a>Wikipedia contributors, "Partial differential equation", Wikipedia, The Free Encyclopedia, 2 February 2022, 09:59 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1069442522> [20220323].
3. <a name='r03'></a>Paul Dawkins, "Partial Differential Equations", Paul's Online Notes, 6 Jun 2018, url <https://tutorial.math.lamar.edu/classes/de/intropde.aspx> [20220323].
4. <a name='r04'></a>Neil Gershenfeld, "Finite Differences: Partial Differential Equations", MAS 864 The Nature of Mathematical Modeling, 2020, url <http://fab.cba.mit.edu/classes/864.20/text/pde_diff.pdf> [20220323].
5. <a name='r05'></a>Walter A. Strauss, "Partial Differential Equation: An Introduction", John Wiley & Sons, Inc., 2nd Edition, 2008, url <https://isbnsearch.org/isbn/9780470054567> [20220323]. [`PDF`](https://s2pnd-matematika.fkip.unpatti.ac.id/wp-content/uploads/2019/03/Walter-A-Strauss-Partial-differential-equations-_-an-introduction-Wiley-2009.pdf)
6. <a name='r06'></a>Erich Miersemann, "Partial Differential Equations", Lecture Notes, Department of Mathematics, Leipzig University, Oct 2012, url <https://www.math.uni-leipzig.de/~miersemann/pdebook.pdf> [20220323].

{{< citeas >}}