---
title: "time dilation"
date: 2022-04-09T05:47:00+07:00
lastmod: 2022-04-10T18:39:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'relativity', 'time-dilation']
url: "0047"
draft: false
---
Apa yang akan terjadi saat sebuah jam cahaya bergerak dengan cepat, mendekati laju cahaya, adalah jam akan melambat detaknya [[1](#r01)]. Jam cahaya yang detaknya melambat ini terlihat oleh pengamat yang bergerak relatif terhadap jam cahaya tersebut dan fenomena ini dikenal sebagai dilasi waktu yang merupakan bagian dari teori relativitas khusus [[2](#r02)]. Dilasi waktu atau time dilation merupakan memanjangnya rentang waktu antara dua kejadian bagi seorang pengamat dalam kerangka acuan inersial yang bergerak relatif terhadap kerangka diam, kerangka di mana dua kejadian yang diamati tersebut terjadi pada tempat yang sama [[3](#r03)]. Melambatnya waktu ini sebagaimana dirasakan oleh seorang pengamat dibandingkan dengan pengamat lain, bergantung pada gerak relatif mereka atau posisi terhadap medan gravitasi, yang merupakan konsekuensi dari relativitas Einstein, di mana waktu tidak bersifat absolut sebagaimana terlihatnya [[4](#r04)]. Suatu yang sulit diterima adalah bahwa bagaimana pada ketinggian yang berbeda dari pusat bumi, waktu akan berlalu dengan laju yang berbeda, pada tempat yang lebih tinggi posisinya waktu akan lebih cepat berubah dibanding dengan pada tempat yang lebih rendah posisinya [[5](#r05)].


## frames
Terdapat dua kerangka acuan yang akan digunakan di sini, yaitu kerangka pertama yang diam dan kerangka kedua yang bergerak dengan laju tetap relatif terhadap kerangka pertama, di mana keduanya merupakan kerangka acuan inersial, suatu kerangka acuan di mana hukum-hukum fisika berlaku dengan sama [[6](#r06)].

{{< svg "/static/img/phys/relativity/moving-frame-t1.svg" "fig1" "1" "Benda ($\color{#f44}{\Large\bullet}$) bergerak dengan laju tetap $v$ pada waktu $t = t_1$ menurut pengamat ${\rm P}$." >}}

Sebuah benda berbentuk lingkaran merah ($\color{#f44}{\Large\bullet}$) terlihat bergerak dengan laju tetap $v$ ke kanan pada kerangka acuan $xyz$ dan terlihat diam pada kerangka acuan $x'y'z'$.

{{< svg "/static/img/phys/relativity/moving-frame-t2.svg" "fig2" "2" "Benda ($\color{#f44}{\Large\bullet}$) bergerak dengan laju tetap $v$ pada waktu $t = t_2$ menurut pengamat ${\rm P}$." >}}

Kerangka acuan $x'y'z'$ merupakan kerangka diam bagi benda, akan tetapi merupakan kerangka bergerak bagi pengamat ${\rm P}$. Kerangka acuan $xyz$ merupakan kerangka diam bagi pengamat ${\rm P}$ karena ia tidak bergerak dalam kerangka acuan tersebut. Hal yang sama juga menjelaskan mengapa kerangka acuan $x'y'z'$ merupakan kerangka diam bagi benda karena benda tidak bergerak dalam kerangka acuan tersebut.


## symbols
Terdapat setidaknya penggunaan simbol yang berbeda untuk besaran pada kerangka diam dan bergerak sebagaimana diberikan pada tabel berikut ini.

Tabel <a name='tab1'>1</a>. Beberapa konvensi penggunaan simbol untuk waktu pada kerangka diam dan bergerak.

Ref | Waktu<br>proper | Waktu<br>terdilasi
:-: | :-: | :-:
[[7](#r07)] | $\Delta t_0$ | $\Delta t$ 
[[8](#r08)] | $\Delta t$ | $\Delta t'$ 
[[9](#r09)] | $\Delta \tau$ | $\Delta t$
[[10](#r10)] | $\Delta t_0$ | $\Delta t$ 

Waktu propser adalah waktu yang dirasakan benda atau partikel dalam kerangka diamnya [[9](#r09)] atau selang waktu diukur dengan menggunakan jam yang sama [[10](#r10)]. Di sini akan digunakan notasi pada baris kedua dari Tabel [1](#tab1). Dan sebaiknya saat memecahkan suatu masalah terkait hal ini tidak sekedar merujuk pada besarannya, misalnya $\Delta t$ dan $\Delta t'$ akan tetapi juga artinya sehingga dengan notasi manapun pemahaman yang mengarah ke solusi akan dapat diperoleh.


## two identical clocks
Dengan menggunakan dua jam cahaya yang identik, jam pertama diletakkan pada kerangka diam dan jam kedua diletakkan pada kerangka bergerak. Jarak antar kedua ujung adalah $L_0$.

{{< svg "/static/img/phys/relativity/light-clock.svg" "fig3" "3" " Jam cahaya yang berada pada kerangka diam dengan $\delta t = \frac12 \Delta t$." >}}

Pada kerangka diam dalam satu detak $\Delta t$ berkas cahaya telah menempuh jarak $L_0$ dua kali, yaitu kali pertama saat menjauhi sisi bawah dan menuju sisi atas, lalu kali kedua saat setelah dipantulkan dari sisi atas menuju sisi bawah. Peristiwa pemantulan oleh sisi atas yang berupa cermin diasumsikan berlangsung seketika. Dengan demikian dapat diperoleh

\begin{equation}\label{eqn:lc-rest-frame-l0}
L_0 = c \ \tfrac12 \Delta t,
\end{equation}

dengan $\Delta t$ waktu proper dan $L_0$ panjang propser.

{{< svg "/static/img/phys/relativity/lc-time-dilation-perpendicular-all.svg" "fig4" "4" "Berkas cahaya pada jam cahaya yang berada pada kerangka bergerak menurut pengamat pada kerangka diam." >}}

Pada kerangka yang bergerak berkas cahaya $\color{#f00}{\rightarrow}$ pada sebuah jam cahaya akan terlihat merambat seperti pada Gambar [4](#fig4). Untuk setengah selang waktu atau $\frac12 \Delta t$ panjang lintasan yang ditempuh berkas cahaya adalah

\begin{equation}\label{eqn:lc-td-hypotenuse-ray}
D = c \ \tfrac12\Delta t'
\end{equation}

dan dengan sisi tinggi segitiga adalah $L_0$ dan alasnya adalah $v  \ \tfrac12 \Delta t'$ maka dapat diperoleh bahwa

\begin{equation}\label{eqn:lc-td-hypotenuse-triangle}
D^2 = L_0^2 + \tfrac14 v^2 (\Delta t')^2.
\end{equation}

Substitusi Persamaan \eqref{eqn:lc-rest-frame-l0} dan \eqref{eqn:lc-td-hypotenuse-ray} ke Persamaan \eqref{eqn:lc-td-hypotenuse-triangle} akan menghasilkan

\begin{equation}\label{eqn:time-dilation-derivation}
\begin{array}{rcl}
\tfrac14 c^2 (\Delta t')^2 & = & \tfrac14 c^2 (\Delta t)^2 + \tfrac14 v^2 (\Delta t')^2 \newline
c^2 (\Delta t')^2 & = & c^2 (\Delta t)^2 + v^2 (\Delta t')^2 \newline
(c^2 - v^2) (\Delta t')^2 & = & c^2 (\Delta t)^2 \newline
\displaystyle \left( \frac{c^2 - v^2}{c^2} \right) (\Delta t')^2 & = & (\Delta t)^2 \newline
\displaystyle \left( 1 - \frac{v^2}{c^2} \right) (\Delta t')^2 & = & c^2 (\Delta t)^2 \newline
(\Delta t')^2 & = & \displaystyle \frac{(\Delta t)^2} { \displaystyle \left( 1 - \frac{v^2}{c^2} \right) } \newline
\Delta t' & = & \displaystyle \frac{\Delta t} { \displaystyle \sqrt{ 1 - \frac{v^2}{c^2} } },
\end{array}
\end{equation}

yang memberikan waktu terdilasi $\Delta t'$ dari waktu proper $\Delta t$.


## beta and gamma
Terdapat dua koefisien yang sering digunakan yaitu

\begin{equation}\label{eqn:lorentz-factor}
\gamma = \frac{1}{ \displaystyle \sqrt{ 1 - \frac{v^2}{c^2} } } = \frac{1}{\sqrt{ 1 - \beta^2} }
\end{equation}

yang dikenal sebagai faktor Lorentz [[11](#r11)] dan terdapat pula

\begin{equation}\label{eqn:speed-parameter}
\beta = \frac{v}{c},
\end{equation}

suatu koefisien tak berdimensi, yang merupakan suatu perbandingan antar $v$ dengan $c$, yang sering muncul [[12](#r12)]. Persamaan \eqref{eqn:speed-parameter} disebut juga sebagai parameter laju [[13](#r13), [14](#r14)]. Dengan demikian Persamaan \eqref{eqn:time-dilation-derivation} dapat dituliskan menjadi

\begin{equation}\label{eqn:time-dilation}
\Delta t' = \gamma \Delta t
\end{equation}

menggunakan Persamaan \eqref{eqn:lorentz-factor}.


## exer
1. Tuliskan rentang nilai parameter laju $\beta$ pada Pesamaan \eqref{eqn:speed-parameter}.
2. Terkait dengan pertanyaan sebelumnya, tuliskan pula rentang nilai faktor Lorentz pada Persamaan \eqref{eqn:lorentz-factor}.
3. Dengan melihat rentang nilai faktro Lorentz, yang diperoleh dari rentang parameter kecepatan, perkirakan perbandingan dari waktu terdilasi dengan waktu proper pada Persamaan \eqref{eqn:time-dilation}. Mana nilai yang lebih besar? Apakah artinya?
{{< svg "/static/img/phys/relativity/lc-time-dilation-perpendicular-history.svg" "fig5" "5" "Berkas cahaya pada jam cahaya yang berada pada kerangka bergerak menurut pengamat pada kerangka diam, disajikan per baris untuk saat yang berbeda: $t'$ (atas), $t' + \tfrac12 \Delta t'$ (tengah), dan $t' + \Delta t'$ (bawah)." >}}
4. Bandingkan ilustrasi pada Gambar [4](#fig4) dan [5](#fig5) untuk menjelaskan lintasan berkas cahaya pada sebuah jam cahaya yang berada pada kerangka bergerak sebagaimana diamati oleh pengamat pada kerangka diam. Dari kedua gambar tersebut, gambar mana yang lebih jelas? Mengapa?
5. Apa nama konsep yang digunakan pada Gambar [4](#fig4) dan [5](#fig5) sehingga gerak benda dilihat oleh pengamat pada kerangka diam menjadi
penjumlahan vektor dari gerak benda pada kerangka bergerak dan gerak kerangka bergerak.


## notes
1. <a name='r01'></a>John D. Norton, "Special Theory of Relativity: Clocks and Rods", HPS 0410 Einstein for Everyone, 15 Jan 2022, url <https://sites.pitt.edu/~jdnorton/teaching/HPS_0410/chapters/Special_relativity_clocks_rods/index.html> [20220410].
2. <a name='r02'></a>The Editors of Encyclopaedia Britannica, Barbara A. Schreiber, Adam Augustyn, Piyush Bhathya, Erik Gregersen, Robert Lewis, Gloria Lotha, "time dilation", Encyclopedia Britannica, 1 Jun 2021, url <https://www.britannica.com/science/time-dilation> [20220410].
3. <a name='r03'></a>OpenStax, "Time Dilation", Universtity Physics, OpenStax CNX, 20 Feb 2022, url <https://phys.libretexts.org/@go/page/4515> [20220410].
4. <a name='r04'></a>Andrew May, "What is time dilation?", Live Science, 18 Nov 2021, url <https://www.livescience.com/what-is-time-dilation> [20220410].
5. <a name='r05'></a>Ethan Siegel, "Time dilation is real, and your head ages faster than your feet", Big Think, 6 Apr 2022, url <https://bigthink.com/starts-with-a-bang/time-dilation/> [20220410].
6. <a name='r06'></a>Michael Richmond, "Inertial frames", Physics 200 Introduction to Special Relativity, 11 Nov 2014, url <http://spiff.rit.edu/classes/phys200/lectures/inertial/inertial.html> [20220410].
7. <a name='r07'></a>
Jim Reidy, Ken Wester, "Time Dilation", Ole Miss, QuarkNet, University of Mississippi, 7 Feb 2022, url <https://www.phy.olemiss.edu/HEP/QuarkNet/time.html> [20220410].
8. <a name='r08'></a>Wikipedia contributors, "Time dilation", Wikipedia, The Free Encyclopedia, 5 April 2022, 02:04 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1081058033> [20220410].
9. <a name='r09'></a>Robert G. Brown, "Proper Time and Time Dilation", Physics 319 Classical Electrodynamics, Part II, Duke University Physics Department, Durham, 28 Dec 2007, url <https://webhome.phy.duke.edu/~rgb/Class/phy319/phy319/node125.html> [20220410].
10. <a name='r10'></a>David Halliday, Robert Resnick, Jearl Walker, "Fundamentals of Physics", 10th Edition, Extended, Wiley, Dec 2013, p 1116, url <https://isbnsearch.org/isbn/9781118230718> [20220410].
11. <a name='r11'></a>Baalateja Kataru, "Deriving the Lorentz Factor (γ) of Special Relativity", Physics Scribbles, Medium, 31 Jul 2019, url <https://medium.com/physics-scribbles/d5462f3b3b91> [20220410].
12. <a name='r12'></a>Ed Daw, "Lecture 1 - Introduction, then Beta
(β) and Gamma (γ)", PHY206 - Special Relativity, The University of Sheffield, 10 Feb 2012, url <https://www.hep.shef.ac.uk/edaw/PHY206/Site/2012_course_files/phy206rlec1.pdf> [20220410].
13. <a name='r13'></a>Tao Zhou, "Chapter 37 Relativity", University Heights, Newark, New Jersey, 30 Aug 2009, url <https://web.njit.edu/~taozhou/bbb/ch37.pdf> [20220410].
14. <a name='r14'></a>Malcolm McMillan, "Notes on a Few Topics in Special Relativity", Physics 200 Relativity and Quanta, Department of Physics and Astronomy, University of British Columbia, Vancouver, British Columbia, Canada, Fall 1998; revised 2011, url <https://phas.ubc.ca/~mcmillan/rqpdfs/zrelativity_notes.pdf> [20220410].


{{< citeas >}}
