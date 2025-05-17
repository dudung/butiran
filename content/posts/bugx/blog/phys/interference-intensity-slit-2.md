---
title: "interference intensity slit 2"
date: 2022-03-30T03:55:00+07:00
lastmod: 2022-03-30T17:49:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'light', 'interference', 'double-slit']
url: "0027"
draft: false
---
Distribusi intensitas pada interferensi oleh dua celah dapat diperoleh menggunakan fasor [[1](#r01)] yang lebih mudah dari menjumlahkan dua fungsi trigonomoetri dengan formula Prosthaphaeresis [[2](#r02)], dengan fungsi trigonometri yang dimaksud adalah fungsi yang merupakan solusi dari persamaan gelombang untuk medan listrik. Untuk membantu pemahaman mengenai  fasor ini, telah pula ada model mekaniknya sehingga dapat dicoba [[3](#r03)]. Dengan dua cara tersebut akan ditunjukkan bagaimana intensitas interferensi dua celah dapat diperoleh.


## phasor
Fasor (phasor) atau vektor fasa (phase vektor) adalah vektor yang arahnya ditentukan oleh sudut fasanya. Dua buah fasor yang berbeda fasa $\phi$ dapat digambarkan sebagai berikut.

{{< svg "/static/img/light/interference/phasor-rays-2.svg" "fig1" "1" "Sudut antara dua buah fasor." >}}

Penjumlahan dua buah fasor membentuk sudut $\phi$ secara umum sama dengan penjumlahkan dua buah vektor yang membentuk sudut yang sama. Ilustrasi pendahuluan penjumlahan dua buah vektor dengan aturan trapesium diberikan pada Gambar [1](#fig1) (kiri), sedang dengan aturan segitiga diberikan pada Gambar [1](#fig1) (kanan).


## resultan
Penjumlahan fasor pada interferensi dua celah dapat diilustrasikan sebagai berikut, dengan $E_o$ adalah amplitudo medan listrik dari sumber cahaya pada masing-masing celah. Atau lebih tepatnya sumber cahaya tunggal monokromatik yang menyinari celah.

{{< svg "/static/img/light/interference/phasor-max-min-slit-2.svg" "fig2" "2" "Resultan maksimum dan minimum interferensi dua celah." >}}

Dengan menggunakan fasor superposisi berkas cahaya pada suatu titik $\rm P$ dapat diperoleh untuk nilai maksimum dan minimumnya pada nilai beda fasa $\phi$ tertentu. Informasi nilai maksimum dan minimum ini berguna dalam proses menggambarkan intensitasnya. Dari Gambar [2](#fig2) dapat diperoleh bahwa interferensi maksimum

\begin{equation}\label{eqn:e-slit-2-max-phi}
E = 2E_o, \ \ \ \ \phi = 2n \pi, \ \ \ \ n = 0, 1, 2, \dots
\end{equation}

dan interferensi mininum

\begin{equation}\label{eqn:e-slit-2-min-phi}
E = 0, \ \ \ \ \phi = (2n + 1) \pi, \ \ \ \ n = 0, 1, 2, \dots
\end{equation}


dengan $\phi$ kelak dapat direpresentasikan dalam besaran lain yang menyebabkan perbedaan fasa ini.


## intensity
Intensitas sebanding dengan kuadrat amplitudo medan listrik sehingga dapat dituliskan untuk sumbernya

\begin{equation}\label{eqn:intensity-source}
I_o \propto E_o^2
\end{equation}

dan untuk hasil interferensi oleh dua celah

\begin{equation}\label{eqn:intensity-source-slit-2}
I \propto E^2.
\end{equation}

Persamaan \eqref{eqn:intensity-source} dan \eqref{eqn:intensity-source-slit-2} dapat membuat Persamaan \eqref{eqn:e-slit-2-max-phi} dan \eqref{eqn:e-slit-2-min-phi} dituliskan kembali menjadi

\begin{equation}\label{eqn:i-slit-2-max-phi}
I = 4I_o, \ \ \ \ \phi = 2n \pi, \ \ \ \ n = 0, 1, 2, \dots
\end{equation}

dan interferensi mininum

\begin{equation}\label{eqn:i-slit-2-min-phi}
I = 0, \ \ \ \ \phi = (2n + 1) \pi, \ \ \ \ n = 0, 1, 2, \dots
\end{equation}

Persamaan \eqref{eqn:i-slit-2-max-phi} dan \eqref{eqn:i-slit-2-min-phi} akan dijadikan panduan dalam menggambarkan intensitas interferensi dua celah.


## superposition
Fungsi medan listrik pada titik $\rm P$ akibat berkas cahaya yang bersumber dari celah ${\rm S}_1$ dapat dituliskan dalam bentuk

\begin{equation}\label{eqn:e-p-s1}
E_1 = E_o \sin(kx_1 - \omega t)
\end{equation}

dengan $x_1$ adalah jarak titik ${\rm P}$ terhadap celah ${\rm S}_1$. Dengan cara yang sama dapat diperoleh pula fungsi medan listrik pada titik $\rm P$ akibat berkas cahaya yang bersumber dari celah ${\rm S}_2$

\begin{equation}\label{eqn:e-p-s2}
E_2 = E_o \sin(kx_2 - \omega t),
\end{equation}

dengan $x_2$ adalah jarak titik ${\rm P}$ dari celah ${\rm S}_2$.

{{< svg "/static/img/light/interference/system-slit-2.svg" "fig3" "3" "Sistem dua celah dan layar." >}} 

Kedua celah ${\rm S}_1$ dan ${\rm S}_2$, lintasan yang ditempuh kedua berkas $x_1$ dan $x_2$, serta titik ${\rm P}$ pada layar diberikan pada Gambar [3](#fig3).

Total medan listrik pada titik ${\rm P}$ adalah superposisi dari medan listrik akibat kedua sumber

\begin{equation}\label{eqn:e-p-total}
\begin{array}{rcl}
E & = & E_1 + E_2 \newline
& = & E_o \sin(kx_1 - \omega t) + E_o \sin(kx_2 - \omega t) \newline
& = & 2E_0 \sin [\frac12 k(x_1 + x_2) - \omega t] \cos \frac12 k(x_1 - x_2) \newline
& = & 2E_0 \sin [\frac12 k(x_1 + x_2) - \omega t] \cos \frac12 k(x_2 - x_1) \newline
& = & 2E_0 \sin [\frac12 k(x_1 + x_2) - \omega t] \cos \frac12 k \Delta x
\end{array}
\end{equation}

dengan

\begin{equation}\label{eqn:path-difference-dx}
\Delta x = x_2 - x_1.
\end{equation}

Baris kedua dapat menjadi baris ketiga pada Persamaan \eqref{eqn:e-p-total} dikarenakan

\begin{equation}\label{eqn:cos-x}
\cos(-x) = \cos x.
\end{equation}

Dari Persamaan \eqref{eqn:e-p-total} dapat diperoleh intensitas relatifnya melalui Persamaan \eqref{eqn:intensity-source} dan \eqref{eqn:intensity-source-slit-2} dalam bentuk

\begin{equation}\label{eqn:i-p}
I = 4 I_o \sin^2 [\frac12 k(x_1 + x_2) - \omega t] \cos^2 \frac12 k \Delta x.
\end{equation}

Rata-rata intensitas terhadap waktu untuk masing-masing sumber

\begin{equation}\label{eqn:i-p-source-avg}
I_{i, \rm avg} = \tfrac12 I_o, \ \ \ \ i = 1, 2,
\end{equation}

dan resultannya

\begin{equation}\label{eqn:i-p-resultan-avg}
I_{\rm avg} = 2 I_o \cos^2 \frac12 k \Delta x.
\end{equation}

pada titik ${\rm P}$ dapat diperoleh. Kedua Persamaan \eqref{eqn:i-p-source-avg} dan \eqref{eqn:i-p-resultan-avg} diperoleh dari

\begin{equation}\label{eqn:sin2-avg}
\frac{1}{T} \int_t^{t+T} \sin^2 (\omega t + \gamma) = \tfrac12
\end{equation}

dengan $\gamma$ bukan fungsi dari waktu. Untuk Persamaan \eqref{eqn:i-p-source-avg} $\gamma = \pi - kx_i$, $i = 1, 2$ dan untuk Persamaan \eqref{eqn:i-p-resultan-avg} $\gamma = \pi - \frac12(x_1 + x_2)$. Dengan demikian dapat dituliskan

\begin{equation}\label{eqn:i-p-relative}
\frac{I}{I_o} = 4 \cos^2 \frac12 k \Delta x.
\end{equation}

Baris kedua Persamaan \eqref{eqn:e-p-total} dapat dituliskan kembali menjadi

\begin{equation}\label{eqn:e-p-total-dx}
\begin{array}{rcl}
E & = & E_o \sin(kx_1 - \omega t) + E_o \sin(kx_2 - \omega t + k\Delta x) \newline
& = & E_o \sin(kx_1 - \omega t) + E_o \sin[k(x_1 + x_2 - x_1) - \omega t] \newline
& = & E_o \sin(kx_1 - \omega t) + E_o \sin[k(x_1 + \Delta x) - \omega t] \newline
& = & E_o \sin(kx_1 - \omega t) + E_o \sin(kx_1 - \omega t + k\Delta x) \newline
& = & E_o \sin(kx_1 - \omega t) + E_o \sin(kx_1 - \omega t + \phi)
\end{array}
\end{equation}

sehingga cocok dengan ilustrasi fasor pada Gambar [1](#fig1). Dari baris terakhir Persamaan \eqref{eqn:e-p-total-dx} dapat diperoleh bahwa

\begin{equation}\label{eqn:phi-kdx}
\phi = k \Delta x,
\end{equation}

di mana untuk pendekatan dengan sudut $\theta$ kecil hubungan

\begin{equation}\label{eqn:phi-kdx-small-theta}
\Delta x = d \sin \theta
\end{equation}

dapat diperoleh. Persaman \eqref{eqn:phi-kdx} menggambarkan beda fasa antar fasor yang mewakili berkas cahaya dari masing-masing celah yang tiba di titik ${\rm P}$ pada layar dan Persamaan \eqref{eqn:phi-kdx-small-theta} menunjukkan beda panjang lintasan kedua berkas yang masing-masing melewati $x_1$ dan $x_2$ bergantung pada jarak antar kedua celah $d$ dan sudut $\theta$. Substitusi Persamaan \eqref{eqn:phi-kdx-small-theta} ke Persamaan \eqref{eqn:phi-kdx} akan menjelakan bahwa beda fasa antara kedua berkas yang tiba di titik ${\rm P}$ disebabkan oleh posisi angularnya $\theta$ dan jarak antar kedua celah $d$.

Substitusi Persamaan \eqref{eqn:phi-kdx} ke Persamaan \eqref{eqn:i-p-relative} akan menghasilkan

\begin{equation}\label{eqn:i-p-relative-phi}
\frac{I}{I_o} = 4 \cos^2 \frac12 \phi.
\end{equation}

Selanjutnya, Persamaan \eqref{eqn:i-slit-2-max-phi}, \eqref{eqn:i-slit-2-min-phi}, dan \eqref{eqn:i-p-relative-phi} dapat diresumekan menjadi

\begin{equation}\label{eqn:i-p-relative-slit-2}
\frac{I}{I_o} = \begin{cases}
4, & \phi = 2n \pi, \newline
0, & \phi = (2n + 1) \pi, \newline
4 \cos^2 \frac12 \phi, & 2n < \phi < 2(n + 1)\pi, 
\end{cases}
\end{equation}

dengan $n = 0, 1, 2, 3, \dots$. Kedua baris awal pada Persamaan \eqref{eqn:i-p-relative-slit-2} dapat dipereh dari baris ketiga.

{{< svg "/static/img/light/interference/interference-pattern-slit-2.svg" "fig4" "4" "Intensitas relatif $I/I_o$ interferensi dua celah sebagai fungsi beda fasa $\phi$, dengan beda fasa dinyatakan dalam $\pi$." >}}

Persamaan \eqref{eqn:i-p-relative-slit-2} digambarkan kurvanya pada Gambar [4](#fig4), dengan titik-titik maksimum dan minimum pada gambar tersebut dapat pula diperoleh dari Persamaan \eqref{eqn:i-slit-2-max-phi} dan \eqref{eqn:i-slit-2-min-phi}.


## exer
1. Apa perbedaan dari Persamaan \eqref{eqn:i-slit-2-max-phi} dan \eqref{eqn:i-slit-2-min-phi} dan Persamaan \eqref{eqn:i-p-relative-phi}?
2. Apa persamaan yang diperoleh bila Persamaan \eqref{eqn:phi-kdx-small-theta} disubstitusikan ke Persamaan \eqref{eqn:phi-kdx}, lalu hasilnya digunakan pada syarat dari Persamaan \eqref{eqn:i-slit-2-max-phi}?
3. Apa persamaan yang diperoleh bila Persamaan \eqref{eqn:phi-kdx-small-theta} disubstitusikan ke Persamaan \eqref{eqn:phi-kdx}, lalu hasilnya digunakan pada syarat dari Persamaan \eqref{eqn:i-slit-2-min-phi}?
4. Bagaimana cara memperoleh syarat interferensi minumum dalam bentuk $d\sin\theta = (n + \frac12)\lambda$ yang telah dikenal?
5. Bagaimana pula cara memperoleh syarat interferensi maksimum $d\sin\theta = n\lambda$ yang telah dikenal?


## notes
1. <a name='r01'></a>Luke Wilson, "Light and Optics - 8", Department of Physics and Astronomy, The University of Sheffield, 17 Mar 2011, url <https://www.sheffield.ac.uk/polopoly_fs/1.20730!/file/Topic8.pdf> [20220330].
2. <a name='r02'></a>Eric W. Weisstein, "Prosthaphaeresis Formulas", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 29 Mar 2022 url <https://mathworld.wolfram.com/ProsthaphaeresisFormulas.html> [20220330].
3. <a name='r03'></a>Rand S. Worland, Matthew J. Moelter, "Hands-On Hands-On Phasors Phasors and and Multiple-Slit Multiple-Slit Interference", The Physics Teacher [Phys Teach], vol 35, no 8, p 486-488, Nov 1997, url <https://doi.org/10.1119/1.2344776>.

{{< citeas >}}