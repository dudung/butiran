---
title: "two slit interference function resultan"
date: 2022-03-28T06:55:00+07:00
lastmod: 2022-03-31T17:24:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'light', 'interference', 'resultan', 'double-slit']
url: "0024"
draft: false
---
Interferensi dua celah [[1](#r01)] memerlukan konsep fasor untuk menjelaskan nilai intesitas pola-pola terang gelapnya, di mana konsep fasor ini lebih dikenal pada analisis rangkaian listrik [[2](#r02)]. Di sini akan diberikan resultan dari fungsi masing-masing medan listrik untuk mendapatkan intensitas interferensi dua celah sempit.


## double slit system
Sistem celah ganda atau dua celah diberikan pada gambar berikut ini, yang terdiri dari dua buah celah dan layar untuk menangkap pola-pola interferensi.

{{< svg "/static/img/light/interference/system-slit-2.svg" "fig1" "1" "Sistem dua celah dan layar." >}} 

Lebar kedua celah tidak diperhitungkan dan jarak antar kedua celah sempit tersebut adalah $d$. Kedua celah berfungsi sebagai dua sumber cahaya ${\rm S}_1$ dan ${\rm S}_2$, di mana berkas dari kedua sumber tersebut menempuh lintasan masing-masing, $x_1$ dan $x_2$, untuk mencapai suatu titik ${\rm P}$ yang terletak pada layar. Jarak layar ke celah adalah $L$. Kedua sumber cahaya ${\rm S}_1$ dan ${\rm S}_2$ merupakan sumber cahaya  monokromatik.


## electric field
Sumber cahaya ${\rm S}_1$ menghasilkan berkas cahaya yang dapat diwakili dengan medan listriknya $E_1$ dan sumber cahaya ${\rm S}_2$ menghasilkan berkas cahaya yang dapat diwakili dengan medan listriknya $E_2$. Pada suatu titik medan listrik dari masing-masing sumber dapat dinyatakan sebagai

\begin{equation}\label{eqn:two-slit-interference-electric-field}
E_j = E_o \sin (kx_j - \omega t + \varphi),  \ \ \ \ j = 1, 2,
\end{equation}

dengan $k$ bilangan gelombang, $x$ jarak suatu titik terhadap sumbernya, $\omega$ frekuensi angular, $t$ waktu, dan $\varphi$  adalah fasa awal. Jarak yang dimaksud di sini adalah panjang lintasan $x_1$ dan $x_2$ pada Gambar [1](#fig1).

Nilai fasa awal dapat dipilih sedemikian rupa sehingga dapat diperoleh untuk medan listrik dari sumber ${\rm S}_1$

\begin{equation}\label{eqn:two-slit-e1}
E_1 = E_o \sin \omega t
\end{equation}

dan untuk medan listrik dari sumber ${\rm S}_2$

\begin{equation}\label{eqn:two-slit-e2}
E_2 = E_o \sin (\omega t + \phi)
\end{equation}

pada titik ${\rm P}$. Agar dapat diperoleh Persamaan \eqref{eqn:two-slit-e1} dari Persamaan \eqref{eqn:two-slit-interference-electric-field} diperlukan hubungan

\begin{equation}\label{eqn:two-slit-e1-varphi}
\varphi = \pi - kx_1
\end{equation}

dan Agar dapat diperoleh Persamaan \eqref{eqn:two-slit-e2} dari Persamaan \eqref{eqn:two-slit-interference-electric-field} diperlukan hubungan

\begin{equation}\label{eqn:two-slit-e2-varphi}
\varphi = \pi - kx_2 - \phi,
\end{equation}

dengan

\begin{equation}\label{eqn:two-slit-e2-phi}
\phi = -k \Delta x
\end{equation}

yang merupakan beda fasa kedua berkas cahaya, di mana

\begin{equation}\label{eqn:two-slit-e2-dx}
\Delta x = x_2 - x_1
\end{equation}

yang merupakan perbedaan panjang lintasan yang ditempuh kedua berkas cahaya.


## phasor
Kedua medan listrik $E_1$ dan $E_2$ dapat digambarkan pada koordinat polar sebagai fasor atau phase vektor seperti di bawah ini. Fungsi $E_1$ pada Persamaan \eqref{eqn:two-slit-e1} dan $E_2$ pada Persamaan \eqref{eqn:two-slit-e2} tak lain adalah proyeksi pada sumbu tegak.

{{< svg "/static/img/light/interference/two-slit-phasor.svg" "fig2" "2" "Hubungan antara fasor medan listrik dari kedua celah $E_1$ dan $E_2$ pada beberapa waktu berbeda." >}}

Kedua medan listrik $E_1$ dan $E_2$ selalu berbeda fasa sebesar $\phi$ dengan ilustrasi keduanya pada beberapa waktu berbeda diberikan pada Gambar [2](#fig2). Kedua fasor medan listrik $E_1$ dan $E_2$ berwarna hijau berada pada waktu $t = t_C$, berwarna biru pada waktu $t = t_B$, dan berwarna hitam pada waktu $t = t_A$, di mana $t_C > t_B > t_A$


## resultan
Resultan kedua medan listrik $E_1$ dan $E_2$ dari kedua celah dapat diilustrasikan seperti pada gambar di bawah ini.

{{< svg "/static/img/light/interference/two-slit-phasor-resultan.svg" "fig3" "3" "Resultan fasor medan listrik $E_1$ dan $E_2$." >}}

Nilai $E$ dapat diperoleh dengan aturan penjumlahan segitiga dua buah vektor [[3](#r03)]

\begin{equation}\label{eqn:triangle-rule-vector-addition}
\begin{array}{rcl}
E^2 & = & E_1^2 + E_2^2 + 2 E_1 E_2 \cos \phi \newline
& = & E_o^2 + E_o^2 + 2 E_o E_o \cos \phi \newline
& = &  2E_o^2 + 2 E_o^2 \cos \phi \newline
& = & 2E_0^2 (1 + \cos \phi) \newline
E & = & E_o \sqrt{2 (1 + \cos \phi)}
\end{array}
\end{equation}

diperoleh amplitudo dari fasor $E$. Dan dengan  hukum sinus [[4](#r04)].

\begin{equation}\label{eqn:sine-law}
\begin{array}{rcl}
\displaystyle \frac{E}{\sin (\pi - 2\gamma)} & = & \displaystyle \frac{E_0}{\sin \gamma} \newline
\displaystyle \frac{E}{\sin 2\gamma} & = & \displaystyle \frac{E_0}{\sin \gamma} \newline
\displaystyle \frac{E}{2 \sin \gamma \cos \gamma} & = & \displaystyle \frac{E_0}{\sin \gamma} \newline
\displaystyle \frac{E}{2 \cos \gamma} & = & E_0 \newline
\displaystyle \frac{E}{2 E_0} & = & \cos \gamma \newline
\end{array}
\end{equation}

diperoleh sudut $\gamma$. Substitusi Pesamaan \eqref{eqn:triangle-rule-vector-addition} ke Persamaan \eqref{eqn:sine-law} akan menghasilkan

\begin{equation}\label{eqn:e-cos-gamma}
\cos \gamma =  \tfrac12 \sqrt{2 (1 + \cos \phi)}.
\end{equation}

Dan dapat pula diperoleh

\begin{equation}\label{eqn:e-sin-gamma}
\sin \gamma =  \tfrac12 \sqrt{2(1 - \cos \phi)}
\end{equation}

dan

\begin{equation}\label{eqn:e-tan-gamma}
\tan \gamma =  \sqrt{\frac{1 - \cos \phi}{1 + \cos \phi}}.
\end{equation}

Dengan demikian dapat diperoleh

\begin{equation}\label{eqn:e-resultan-function}
E = E_o \sqrt{2 (1 + \cos \phi)} \sin (\omega t + \gamma)
\end{equation}

sebagai resultan kedua medan listrik $E_1$ dan $E_2$, dengan $\gamma$ diberikan oleh Persamaan \eqref{eqn:e-cos-gamma} dan \eqref{eqn:e-sin-gamma}. Persamaan \eqref{eqn:e-resultan-function} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:e-resultan-function-sin-cos}
\begin{array}{rcl}
E & = & \displaystyle E_o \sqrt{2 (1 + \cos \phi)} \sin ( \omega t + \gamma) \newline
& = & \displaystyle E_o \sqrt{2 (1 + \cos \phi)} \sin \omega t \cos \gamma \newline
& & \displaystyle + E_o \sqrt{2 (1 + \cos \phi)} \cos \omega t \sin \gamma \newline
& = & \displaystyle E_o \sqrt{2 (1 + \cos \phi)} \sin \omega t \cdot \tfrac12 \sqrt{2 (1 + \cos \phi)} \newline
& & \displaystyle + E_o \sqrt{2 (1 + \cos \phi)} \cos \omega t \cdot \tfrac12 \sqrt{2(1 - \cos \phi)} \newline
& = & \displaystyle (1 + \cos \phi) E_o \sin \omega t + \sqrt{(1 - \cos^2 \phi)} E_o \cos \omega t \newline
& = & \displaystyle (1 + \cos \phi) E_o \sin \omega t + \sin \phi E_o \cos \omega t \newline
& = & E_o \sin \omega t + E_o \sin \omega t \cos \phi + E_o \cos \omega t \sin \phi \newline
& = & E_o \sin \omega t + E_o \sin (\omega t + \phi) \newline
& = & E_1 + E_2,
\end{array}
\end{equation}

yang menunjukkan bahwa fasor $E$ merupakan superposisi dari fasor $E_1$ pada Persamaan \eqref{eqn:two-slit-e1} dan $E_2$ pada Persamaan \eqref{eqn:two-slit-e2}.


## intensity
Intensitas relatif hasil interferensi dua celah dapat diperoleh dari Persamaan \eqref{eqn:e-resultan-function} dengan mengkuadratkannya sehingga dapat diperoleh

\begin{equation}\label{eqn:relative-intensity}
\begin{array}{rcl}
\displaystyle \frac{I}{I_0} & = & 2 (1 + \cos \phi)^2 \sin^2 (\omega t + \gamma) \newline
& = & 2(1 + 2 \cos 2\phi - 1) \sin^2 (\omega t + \gamma) \newline
& = & 4 \cos^2 \tfrac12 \phi \sin^2 (\omega t + \gamma).
\end{array}
\end{equation}

Suku $\cos^2 \tfrac12 \phi$ akan menentukan nilai intensitas maksimum $4$ atau minimum $0$ dari intensitas relatif pada Persamaan \eqref{eqn:relative-intensity}.

{{< svg "/static/img/light/interference/interference-pattern-slit-2.svg" "fig4" "4" "Intensitas relatif $I/I_o$ interferensi dua celah sebagai fungsi beda fasa $\phi$, dengan beda fasa dinyatakan dalam $\pi$." >}}

Nilai $\phi$ yang memberikan intensitas relatif maksimum

\begin{equation}\label{eqn:relative-intensity-max}
\begin{array}{rcl}
\tfrac12 \phi & = & m \pi \newline
\phi & = & 2m \pi
\end{array}
\end{equation}

dengan $m = 0, 1, 2, \dots.$ Dan untuk intensitas relatif minimum

\begin{equation}\label{eqn:relative-intensity-min}
\begin{array}{rcl}
\tfrac12 \phi & = & (m + \tfrac12) \pi \newline
\phi & = & (2m + 1) \pi.
\end{array}
\end{equation}

Posisi-posisi $\phi$ yang memberikan intensitas relatif maksimum dan minimum disajikan pada Gambar [4](#fig4).


## exer
1. Bagaimana cara memperoleh Gambar [4](#fig4)? Persamaan mana yang digunakan?
2. Persaamaan \eqref{eqn:relative-intensity-max} belum memberikan kondisi untuk interferensi minimum bebentuk $d\sin\theta = (m + \tfrac12) \lambda$. Bagaimana cara memperolehnya?

3. Persaamaan \eqref{eqn:relative-intensity-min} belum memberikan kondisi untuk interferensi minimum bebentuk $d\sin\theta = m \lambda$. Bagaimana cara memperolehnya?


## notes
1. <a name='r01'></a>Carl Rod Nave, "Double Slit Interference", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/slits.html> [20220328].
2. <a name='r02'></a>John M. Santiago, "How to Use Phasors for Circuit Analysis", from Circuit Analysis For Dummies, Wiley, 26 Mar 2016, url <https://www.dummies.com/article/technology/electronics/circuitry/how-to-use-phasors-for-circuit-analysis-166276/> [20220330].
3. <a name='r03'></a>Ritesh Kumar Gupta, "Addition of Vectors – Definition, Properties, Formula & Examples", Embibe, Indiavidual Pvt. Ltd., 31 Jan 2022, url <https://www.embibe.com/exams/addition-of-vectors/> [20220330].
4. <a name='r05'></a>Les Gates, Rod Pierce, "The Law of Sines", Math Is Fun, 18 Feb 2020, url <https://www.mathsisfun.com/algebra/trig-sine-law.html> [20220331].

{{< citeas >}}