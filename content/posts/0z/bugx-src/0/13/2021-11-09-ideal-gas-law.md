---
layout: butir
authors: [viridi]
title: ideal gas law
permalink: pages/0131
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ideal gas", "kinetic theory of gases", "ideal gas law"]
date: 2021-11-09 21:09:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/13/2021-11-09-ideal-gas-law.md
twitter_username: 6unpnp
nodes: []
---
Hukum gas ideal, yang adalah persamaan keadaan suatu gas ideal hipotetikal, merupakan suatu pendekatan yang baik untuk banyak jenis gas dalam berbagai keadaan akan tetapi dengan berbagai keterbatasan [[1](#r01)]. Gas riil akan mendekati kelakukan gas ideal pada keadaan dengan kerapatan dan tekanan cukup rendah dengan temperatur cukup tinggi, sehingga energi kinetik molekul-molekul gas dapat mengatasi gaya-gaya antar molekul [[2](#r02)], yang dalam keadaan ini semua energi dalam berbentuk energi kinetik dan semua perubahan energi dalam diikuti dengan perubahan temperatur [[3](#r03)]. Atau dengan kata lain temperatur sebenarnya merupakan suatu ukuran dari energi kinetik rata-rata molekul-molekul suatu gas ideal [[4](#r04)]. Terdapat hukum-hukum sederhana gas, yaitu hukum Boyle, hukum Charles, dan hukum Avogadro, yang apabila dikombinasikan akan menghasilkan hukum gas ideal [[5](#r05)]. Ada dua cara menuliskan hukum ini, yaitu sebagai persamaan termodinamika fungsional atau termodinamika statistik [[6](#r06)].


## constants
Dalam masing-masing bentuk cara penulisan hukum ini, termodinamika fungsional atau termodinamika statistik, terdapat satu konstanta, yaitu $R$ dan $k$. Kedua konstanta tersebut terhubung melalui satu bilangan $N_{\rm A}$.

Tabel <a name="tab1">1</a>. Konstanta dan bilangan dengan nilainya yang digunakan pada hukum gas ideal.

Nama | Simbol | Nilai | Satuan
:- | :-: | :-: | :-:
Kontanta gas | $R$ | $8.3145$ | $\rm J/mol \cdot K$
Kontanta Boltzmann | $k$ | $1.38066 \times 10^{-23}$ | $\rm J/K$
Bilangan Avogadro | $N_{\rm A}$ | $6.0221 \times 10^{23}$ | $\rm mol^{-1}$

Persamaan berikut

\begin{equation}\label{eqn-ideal-gas-law-k-r-na}
R = k N_{\rm A},
\end{equation}

menghubungkan konstanta dan bilangan pada Tabel [1](#tab1). Selain itu terdapat pula

\begin{equation}\label{eqn-n-n-na}
n = \frac{N}{N_{\rm A}},
\end{equation}

yang mengaitkan antara jumlah partikel gas $N$ dengan jumlah mol gas $n$.


## variables
Pada persamaan gas ideal terdapat variabel-variabel yang nilainya dapat diubah selalu suatu proses berlangsung dari keadaan awal ke keadaan akhir.

Tabel <a name="tab2">2</a>. Variabel-variabel yang digunakan pada hukum gas ideal.

Variabel | Simbol | Satuan
:-: | :-: | :-:
Tekanan | $p$ | $\rm Pa$, $\rm N/m^2$, $\rm atm$
Volume | $V$ | $\rm m^3$, $\rm l$
Temperatur | $T$ | $\rm K$
Mol gas | $n$ | $\rm mol$
Jumlah partikel | $N$ | $-$

Kaitan antara $N$ dan $n$ telah diberikan oleh Persamaan \eqref{eqn-n-n-na}. Hubungan antara beberapa satuan adalah sebagai berikut

$$
1 \ {\rm Pa} = 1 \ {\rm N/m^2},
$$

$$
1 \ {\rm atm} = 1.01326 \times 10^5 \ {\rm Pa},
$$

$$
1 \ {\rm m^3} = 1000 \ \mathcal{l}.
$$

Hubungan terakhir ini sebenarnya melalui $1 \ \mathcal{l} = 1 \ {\rm dm^3}$. Selain itu terdapat pula

$$
1 \ {\rm atm} = 760 \ {\rm mmHg}
$$

yang memanfaatkan raksa atau Hg dalam barometernya.


## boyle's law
Tekanan berbanding terbalik dengan volume atau

\begin{equation}\label{eqn-law-boyle}
p_1 V_1 = p_2 V_2,
\end{equation}

bila diekspresikan dengan dua titik tekanan dan volume.


## charles's law
Terdapat hubungan proporsional langsung antara volume dan temperatur (dalam $K$) atau

\begin{equation}\label{eqn-law-charles}
\frac{V_1}{T_1} = \frac{V_2}{T_2},
\end{equation}

bila dengan dua titik volume dan temperatur.


## avogadro's law
Volume gas sebanding dengan jumlah gas pada temperatur dan tekanan tetap

\begin{equation}\label{eqn-law-avogadro}
\frac{V_1}{n_1} = \frac{V_2}{n_2},
\end{equation}

dengan menuliskan dua titik volume dan jumlah gas.


## amontons's law
Bila jumlah gas tetap dan volume tidak berubah maka tekanan akan sebanding dengan temperatur atau

\begin{equation}\label{eqn-law-amontons}
\frac{p_1}{T_1} = \frac{p_2}{T_2},
\end{equation}

bila menggunakan dua titik temperatur dan tekanan. Hukum ini dikenal pula sebagai hukum Gay-Lussac [[7](#r07)].


## boyle--gay-lussac
Terdapat gabungan hukum-hukum gas dalam bentuk

\begin{equation}\label{eqn-law-boyle-gay-lussac}
\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2},
\end{equation}

yang dikenal sebagai hukum Boyle--Gay-Lussac [[8](#r08)].


## ideal gas law
Dengan melakukan kombinasi hukum-hukum sebelumnya setelah sebelumnya menetapkan kondisi yang tepat dapat diperoleh hubungan

\begin{equation}\label{eqn-law-ideal-gas-tf}
pV = nRT
\end{equation}

yang merupakan hukum gas ideal. Persamaan \eqref{eqn-law-ideal-gas-tf} merupakan bentuk termodinamika fungsional dan

\begin{equation}\label{eqn-law-ideal-gas-ts}
pV = NkT
\end{equation}

merupakan bentuk termodinamika statistik.


## exer
1. Dalam suatu wadah dapat diukur dengan alat tertentu terdapat sekitar $60 \times 10^{23}$ partikel gas. Berapakah jumlah mol gas tersebut?
2. Tekanan dalam suatu ruang percobaan adalah sekitar $5.05 \times 10^5 \ \rm Pa$. Berapa kali tekanan ini dibandingkan dengan tekanan di ruang terbuka umumnya?
3. Hubungan apa yang diperoleh bila Persamaan \eqref{eqn-law-ideal-gas-tf} dibagi dengan Persamaan \eqref{eqn-law-ideal-gas-ts}?


## note
1. <a name="r01"></a>Wikipedia contributors, "Ideal gas law", Wikipedia, The Free Encyclopedia, 20 September 2021, 23:55 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1045518963> [20211109].
2. <a name="r02"></a>Dayna Wiebe, Jason Donev, "Ideal gas approximation", Energy Education, 2021, url <https://energyeducation.ca/encyclopedia/Ideal_gas_approximation> [20211109].
3. <a name="r03"></a>Carl R. Nave, "Ideal Gas Law", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Kinetic/idegas.html> [20211109].
4. <a name="r04"></a>"Gas Laws", Kents Hill Physics, url <https://www.kentshillphysics.net/thermodynamics/gas-laws/> [20211109].
5. <a name="r05"></a>Duke LeTran, "The Ideal Gas Law" in Physical & Theoretical Chemistry, LibreTexts, 16 Aug 2000, url <https://chem.libretexts.org/@go/page/1522> [20211109].
6. <a name="r06"></a>Glenn Elert, "Gas Laws", The Physics Hypertextbook, 2021, url <https://physics.info/gas-laws/> [20211109].
7. <a name="r07"></a>Alla Ahmad, "Gay-Lussac's or Amontons's Law for an Ideal Gas", Wolfram Demonstrations Project, 5 Jan 2015, url <https://demonstrations.wolfram.com/GayLussacsOrAmontonssLawForAnIdealGas/> [20211109].
8. <a name="r08"></a>Loes Moene, "Boyle & Gay-Lussac", Prezi, 21 Apr 2014, url <https://prezi.com/rwu5s0fas8lg/boyle-gay-lussac/> [20211109].


## &nbsp;
[kinetic theory of gases](0130.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $9.96 \approx 10 \ \rm mol$; &nbsp;
2) $5$; &nbsp;
3) $R = k N_{\rm A}$; &nbsp;
</ans>

