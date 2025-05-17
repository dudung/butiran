---
title: "interference intensity slit 4"
date: 2022-04-04T05:56:00+07:00
lastmod: 2022-04-04T06:03:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'light', 'interference', 'quadruple-slit', 'draft']
url: "0035"
draft: false
---
Distribusi intensitas pada interferensi oleh empat celah dapat diperoleh menggunakan fasor [[1](#r01)] yang lebih mudah dari menjumlahkan empat fungsi trigonomoetrinya, yang perlu bertahap dengan formula Prosthaphaeresis [[2](#r02)] untuk setiap dua buah fungsi. Fungsi trigonometri yang dimaksud adalah fungsi yang merupakan solusi dari persamaan gelombang untuk medan listrik.


## phasor
Fasor (phasor) atau vektor fasa (phase vektor) adalah vektor yang arahnya ditentukan oleh sudut fasanya. Empat buah fasor yang berbeda fasa $\phi$ antar dua fasor berurutan dapat digambarkan sebagai berikut.

{{< svg "/static/img/light/interference/phasor-rays-4.svg" "fig1" "1" "Empat fasor dengan sudut antara dua fasor berurutan adalah $\phi$." >}}

Penjumlahan empat buah fasor yang membentuk sudut $\phi$ antar dua buah fasor berurutan, secara umum sama dengan penjumlahkan empat buah vektor yang membentuk sudut yang sama. Ilustrasi pendahuluan penjumlahan empat buah vektor dengan aturan trapesium untuk setiap dua buah fasor diberikan pada Gambar [1](#fig1) (kiri), sedang dengan aturan segitiga, yang dalam hal ini menjadi poligon, diberikan pada Gambar [1](#fig1) (kanan).


## resultan
Penjumlahan fasor pada interferensi empat celah dapat diilustrasikan sebagai berikut, dengan $E_o$ adalah amplitudo medan listrik dari sumber cahaya pada masing-masing celah. Atau lebih tepatnya sumber cahaya tunggal monokromatik yang menyinari celah.

{{< svg "/static/img/light/interference/phasor-max-min-slit-4.svg" "fig2" "2" "Resultan maksimum dan minimum interferensi empat celah." >}}

Dengan menggunakan fasor superposisi berkas cahaya pada suatu titik $\rm P$ dapat diperoleh untuk nilai maksimum dan minimumnya pada nilai beda fasa $\phi$ tertentu. Informasi nilai maksimum dan minimum ini berguna dalam proses menggambarkan intensitasnya. Dari Gambar [2](#fig2) dapat diperoleh kondisi-kondisi interferensi maksimum dan minimum.


## intensity
Intensitas sebanding dengan kuadrat amplitudo medan listrik sehingga dapat dituliskan untuk sumbernya

\begin{equation}\label{eqn:intensity-source}
I_o \propto E_o^2
\end{equation}

dan untuk hasil interferensi oleh empat celah

\begin{equation}\label{eqn:intensity-source-slit-2}
I \propto E^2.
\end{equation}

Besar $E$ secara kualitatif telah diberikan pada Gambar [2](#fig2), yang dapat digunakan untuk menentukan titik-titik maksimum dan minimum.


## superposition
Fungsi medan listrik pada titik $\rm P$ akibat berkas cahaya yang bersumber dari celah ${\rm S}_1$ dapat dituliskan dalam bentuk

\begin{equation}\label{eqn:e-p-s1}
E_1 = E_o \sin(kx_1 - \omega t)
\end{equation}

dengan $x_1$ adalah jarak titik ${\rm P}$ terhadap celah ${\rm S}_1$. Dengan cara yang sama dapat diperoleh pula fungsi medan listrik pada titik $\rm P$ akibat berkas cahaya yang bersumber dari celah ${\rm S}_2$

\begin{equation}\label{eqn:e-p-s2}
E_2 = E_o \sin(kx_2 - \omega t),
\end{equation}

dengan $x_2$ adalah jarak titik ${\rm P}$ dari celah ${\rm S}_2$. Dan juga

\begin{equation}\label{eqn:e-p-s3}
E_3 = E_o \sin(kx_3 - \omega t),
\end{equation}

dengan $x_3$ adalah jarak titik ${\rm P}$ dari celah ${\rm S}_3$, serta

\begin{equation}\label{eqn:e-p-s4}
E_4 = E_o \sin(kx_4 - \omega t),
\end{equation}

dengan $x_4$ adalah jarak titik ${\rm P}$ dari celah ${\rm S}_4$.

{{< svg "/static/img/light/interference/system-slit-4.svg" "fig3" "3" "Sistem empat celah dan layar." >}} 

Ketiga celah ${\rm S}_1$, ${\rm S}_2$, ${\rm S}_3$, dan ${\rm S}_4$, lintasan yang ditempuh kedua berkas $x_1$, $x_2$, $x_3$, dan $x_4$, serta titik ${\rm P}$ pada layar diberikan pada Gambar [3](#fig3). 

Total medan listrik pada titik ${\rm P}$ adalah superposisi dari medan listrik akibat keempat sumber

\begin{equation}\label{eqn:e-p-total}
\begin{array}{rcl}
E & = & E_1 + E_2 + E_3 + E_4 \newline
& = & E_o \sin(kx_1 - \omega t) + E_o \sin(kx_2 - \omega t) \newline
& & + E_o \sin(kx_3 - \omega t) + E_o \sin(kx_4 - \omega t),
\end{array}
\end{equation}

yang dapat diselesaikan akan tetapi tidak dengan mudah.

Dengan tidak menggunakan Persamaan \eqref{eqn:e-p-total} akan tetapi memanfaatkan informasi nilai-nilai $\phi$ yang dapat memberikan posisi titik-titik maksimum dan minimum pada Gambar [2](#fig2) dapat diperoleh gambar berikut ini.

{{< svg "/static/img/light/interference/interference-pattern-slit-4.svg" "fig4" "4" "Intensitas relatif $I/I_o$ interferensi empat celah sebagai fungsi beda fasa $\phi$, dengan beda fasa dinyatakan dalam $\pi$." >}}

Perhatikan bagaimana informasi dari Gambar[2](#fig2) telah digunakan pada Gambar [4](#fig4) dalam menggambarkan titik-titik maksimum dan minimum interferensi oleh empat celah.


## notes
1. <a name='r01'></a>t.b.a.
2. <a name='r02'></a>Eric W. Weisstein, "Prosthaphaeresis Formulas", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 29 Mar 2022 url <https://mathworld.wolfram.com/ProsthaphaeresisFormulas.html> [20220330].

{{< citeas >}}