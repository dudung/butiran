---
layout: post
authors: [viridi]
title: electrostatic force
permalink: pages/0351
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge"]
date: 2021-12-30 13:08:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/35/2021-12-28-electrostatic-force.md
twitter_username: 6unpnp
nodes: []
youtube: -CYZC0f1ia8
---
Gaya antar dua benda bermuatan disebut sebagai listrik [[1](#r01), [2](#r02), [3](#r03)], gaya elektrik [[4](#r04), [5](#r05)], gaya elektrostatik [[6](#r06), [7](#r07)], atau gaya Coulomb [[8](#r08)]. Gaya elektrostatik termasuk di dalam gaya elektromagnetik [[9](#r09)], dengan gaya elektromagnetik bersama-sama dengan gaya gravitasi, gaya nuklir kuat, dan gaya nuklir lemah merupakan empat gaya fundamental yang membentuk kompleksitas alam semesta di sekitar kita [[10](#r10)]. 


## formula
Besar gaya elektrostatik antara dua buah muatan $q_i$ dan $q_j$ yang terpisah jarak $r_{ij}$ diberikan oleh

\begin{equation}\label{eqn-electrostatic-force-two-point-charges}
F_{ij} = F_{ji} = k \frac{ |q_i| |q_j|}{r_{ij}^2}
\end{equation}

yang dikenal sebagai hukum Coulomb untuk gaya listrik [[3](#r03)], dengan $k$ adalah konstanta elektrostatik yang dalam tiga angka berarti adalah $8.99 \times 10^9 \ {\rm N \cdot m^2/C^2}$ [[11](#r11)] atau juga disebut konstanta Coulomb yang bila dengan lebih banyak angka berarti menjadi $8.987551787$ $\times$ $10^9$ ${\rm N \cdot m^2/C^2}$ dengan saat kuliah di universitas sering diajari cara mudah untuk mengingat nilai ini sebagai $9 \times 10^9$ [[12](#r12)].

![]({{ site.baseurl }}/assets/img/0/35/0351-a.png) \
Gambar <a name="fig1">1</a>. Beberapa muatan dan garis-garis yang menggambarkan jarak antar dua muatan, serta gaya tarik-menarik ($\color{#0b5}{\blacksquare}$) dan gaya tolak-menolak ($\color{#fc0}{\blacksquare}$) antar dua muatan.

Persamaan \eqref{eqn-electrostatic-force-two-point-charges} hanya memberikan besar gaya dan belum arahnya, sehingga bila terdapat tiga muatan seperti pada Gambar [1](#fig1) gaya dapat berlaku sebagai gaya tarik-menarik atau gaya tolak-menolak, terlebih bila tanda muatan belum didefinisikan.

### example 1
Sebagai contoh diberikan gambar enam titik muatan untuk dihitung gaya antar dua muatannnya.

![]({{ site.baseurl }}/assets/img/0/35/0351-b.png) \
Gambar <a name="fig2">2</a>. Enam buah muatan $q_i = q = 12 \ {\rm \mu C}$, $i = 1, 2, \dots, 6,$ terpisahkan dengan jarak yang berkelipatan $1 \ {\rm \mu m}$.

Dengan menggunakan informasi dalam Gambar [2](#fig2) dan rumusan dalam Persamaan \eqref{eqn-electrostatic-force-two-point-charges} dapat dihitung $F_{54}$, $F_{32}$, dan $F_{24}$, yaitu

\begin{equation}\label{eqn:fcoul-f54}
\begin{array}{rcl}
F_{45} & = & \displaystyle k \frac{|q_4| |q_5|}{r_{45}^2} = k \frac{|12\mu| |12\mu|}{(3\mu)^2} \newline
& = & \displaystyle k \frac{144 \mu^2}{9 \mu^2} = 16k,
\end{array}
\end{equation}

\begin{equation}\label{eqn:fcoul-f32}
\begin{array}{rcl}
F_{32} & = & \displaystyle k \frac{|q_3| |q_2|}{r_{32}^2} = k \frac{|12\mu| |12\mu|}{(4\mu)^2} \newline
& = & \displaystyle k \frac{144 \mu^2}{16 \mu^2} = 9k,
\end{array}
\end{equation}

\begin{equation}\label{eqn:fcoul-f24}
\begin{array}{rcl}
F_{24} & = & \displaystyle k \frac{|q_2| |q_4|}{r_{24}^2} = k \frac{|12\mu| |12\mu|}{(5\mu)^2} \newline
& = & \displaystyle k \frac{144 \mu^2}{25 \mu^2} = 5.76k.
\end{array}
\end{equation}

Hasil pada Persamaan \eqref{eqn:fcoul-f54}, \eqref{eqn:fcoul-f32}, dan \eqref{eqn:fcoul-f24} masih dalam $k$, yang untuk mendapatkan nilai numerik akhirnya masih perlu disubstitusikan, misalnya untuk kemudahan dengan $k \approx 9 \times 10^9 \ {\rm N \cdot m^2/C^2}$, yang akan memberikan hasil $F_{45} = 144 \ {\rm GN}$, $F_{32} = 81 \ {\rm GN}$, dan $F_{24} = 51.84 \ {\rm GN}$. Perhatikan bahwa telah digunakan prefiks SI sehingga satuannya menjadi giganewton, di mana $1 \ {\rm GN} = 10^9 \ {\rm N}$.


## charge sign
Bila tanda muatan, positif ($+$) dan negatif($-$) diikutsertakan, rumusan pada Persamaan \eqref{eqn-electrostatic-force-two-point-charges} perlu diubah menjadi

\begin{equation}\label{eqn-electrostatic-force-two-point-charges-vector}
\vec{F} _{ij} = k \frac{ q_i q_j}{r _{ij}^2} \ \hat{r} _{ij}
\end{equation}

dengan

\begin{equation}\label{eqn-relative-position}
\vec{r}_{ij} = \vec{r}_i - \vec{r}_j,
\end{equation}

\begin{equation}\label{eqn-distance-two-points}
r_{ij} = |\vec{r} _{ij}| = \sqrt{\vec{r} _{ij} \cdot \vec{r} _{ij}},
\end{equation}

\begin{equation}\label{eqn-unit-vector}
\hat{r} _{ij} = \frac{\vec{r} _{ij}}{r _{ij}}.
\end{equation}

### example 2
Sebagai ilustrasi terdapat dua buah muatan yang tandanya belum diketahui dengan posisi masing-masing diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/35/0351-c.png) \
Gambar <a name="fig3">3</a>. Dua buah muatan $q_1$ dan $q_2$ yang masing-masing terletak pada $(3 \ {\rm\mu m}, 3 \ {\rm\mu m})$ dan $(6 \ {\rm\mu m}, 6 \ {\rm\mu m})$.

Ingin dihitung gaya $\vec{F} _{12}$ atau gaya pada muatan $q_1$ akibat keberadaan muatan $q_2$ dan gaya $\vec{F} _{21}$ atau gaya pada muatan $q_2$ akibat keberadaan muatan $q_1$.

#### information
Dari Gambar [3](#fig3) dapat diperoleh informasi

\begin{equation}\label{eqn:info-r1}
\vec{r}_1 = (3 \hat{x} + 3 \hat{y}) \times 10^{-6} \ {\rm m}
\end{equation}

dan

\begin{equation}\label{eqn:info-r2}
\vec{r}_2 = (6 \hat{x} + 6 \hat{y}) \times 10^{-6} \ {\rm m}.
\end{equation}

#### relative position, distance, unit vector
Dengan Persamaan \eqref{eqn-relative-position}, \eqref{eqn-distance-two-points}, dan \eqref{eqn-unit-vector} serta Gambar [3](#fig3) dapat dihitung vektor posisi relatif, jarak antar dua titik, dan vektor satuannya.

Penerapan Persamaan \eqref{eqn-relative-position} untuk muatan $q_1$ menghasilkan

\begin{equation}\label{eqn:r12}
\begin{array}{rcl}
\vec{r}_{12} & = & \vec{r}_1 - \vec{r}_2 \newline
& = & [(3 \hat{x} + 3 \hat{y}) \times 10^{-6}] - [(6 \hat{x} + 6 \hat{y}) \times 10^{-6}] \newline
& = & [(3 \hat{x} + 3 \hat{y}) - (6 \hat{x} + 6 \hat{y})] \times 10^{-6} \newline
& = & [(3 - 6) \hat{x} + (3 - 6) \hat{y})] \times 10^{-6} \newline
& = & (-3 \hat{x} -3 \hat{y}) \times 10^{-6} \newline
& = & -3(\hat{x} + \hat{y}) \times 10^{-6}
\end{array}
\end{equation}

dan untuk muatan $q_2$

\begin{equation}\label{eqn:r21}
\begin{array}{rcl}
\vec{r}_{21} & = & \vec{r}_2 - \vec{r}_1 \newline
& = & [(6 \hat{x} + 6 \hat{y}) \times 10^{-6}] - [(3 \hat{x} + 3 \hat{y}) \times 10^{-6}] \newline
& = & [(6 \hat{x} + 6 \hat{y}) - (3 \hat{x} + 3 \hat{y})] \times 10^{-6} \newline
& = & [(6 - 3) \hat{x} + (6 - 3) \hat{y})] \times 10^{-6} \newline
& = & (3 \hat{x} 3 \hat{y}) \times 10^{-6} \newline
& = & 3(\hat{x} + \hat{y}) \times 10^{-6}.
\end{array}
\end{equation}

Persamaan \eqref{eqn:r12} dan \eqref{eqn:r21} telah memberikan konfirmasi hubungan

\begin{equation}\label{eqn:r21-r12}
\vec{r} _{21} = - \vec{r} _{12}
\end{equation}

secara numerik.

Penerapan Persamaan \eqref{eqn-distance-two-points} pada Persamaan \eqref{eqn:r12} dan \eqref{eqn:r12} akan menghasilkan

\begin{equation}\label{eqn:r12-distance}
\begin{array}{rcl}
r_{12} & = & | \vec{r}_{12} |  = \sqrt{\vec{r} _{12} \cdot \vec{r} _{12}} \newline
& = & 3 \sqrt{-(\hat{x} + \hat{y}) \cdot -(\hat{x} + \hat{y})} \times 10^{-6} \newline
& = & 3 \sqrt{2} \times 10^{-6}
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:r21-distance}
\begin{array}{rcl}
r_{21} & = & | \vec{r}_{21} | = \sqrt{\vec{r} _{21} \cdot \vec{r} _{21}} \newline
& = & 3 \sqrt{(\hat{x} + \hat{y}) \cdot (\hat{x} + \hat{y})} \times 10^{-6} \newline
& = & 3 \sqrt{2} \times 10^{-6},
\end{array}
\end{equation}

yang dapat diperoleh juga melalui Persaamaan \eqref{eqn:r21-r12} dengan

\begin{equation}\label{eqn:r21-r12-magnitude}
\begin{array}{rcl}
|\vec{r} _{21}| & = & |- \vec{r} _{12}| \newline
r _{12} & = & r _{21}.
\end{array}
\end{equation}

Selanjutnya adalah menerapkan Persamaan \eqref{eqn-unit-vector} yang memberikan

\begin{equation}\label{eqn:r12-unit}
\begin{array}{rcl}
\hat{r} _{12} & = & \displaystyle \frac{\vec{r} _{12}}{r _{12}} \newline
& = & \displaystyle \frac{-3(\hat{x} + \hat{y}) \times 10^{-6}}{3 \sqrt{2} \times 10^{-6}} \newline
& = & \displaystyle -\frac12 \sqrt{2} (\hat{x} + \hat{y})
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:r21-unit}
\begin{array}{rcl}
\hat{r} _{21} & = & \displaystyle \frac{\vec{r} _{21}}{r _{21}} \newline
& = & \displaystyle \frac{3(\hat{x} + \hat{y}) \times 10^{-6}}{3 \sqrt{2} \times 10^{-6}} \newline
& = & \displaystyle \frac12 \sqrt{2} (\hat{x} + \hat{y}).
\end{array}
\end{equation}

Dengan demikian penyebut dan vektor satuan untuk Persamaan \eqref{eqn-electrostatic-force-two-point-charges-vector} telah diperoleh.

![]({{ site.baseurl }}/assets/img/0/35/0351-d.png) \
Gambar <a name="fig4">4</a>. Vektor-vektor posisi relatif dan vektor-vektor satuan untuk kedua muatan.

Ilustrasi vektor-vektor untuk Persamaan \eqref{eqn:r12} dan \eqref{eqn:r12-unit} diberikan pada Gambar [4](#fig4) di bagian kanan bawah sedang untuk Persamaan \eqref{eqn:r21} dan \eqref{eqn:r21-unit} vektor-vektornya diberikan pada Gambar [4](#fig4) di bagian kiri atas. Vektor-vektor mengarah pada muatan yang sedang ditinjau dan berasal dari muatan penyebabnya. Perhatikan bahwa untuk vektor satuan, besarnya adalah satu.

#### case q1 > 0 and q2 > 0
Bila $q_1 = +3 \ {\rm nC}$ dan $q_2 =  +3 \ {\rm nC}$ dan vektor-vektor posisi relatif dan vektor-vektor satuan untuk kedua muatan diperoleh dari Persamaan \eqref{eqn:r12} dan \eqref{eqn:r12-unit} untuk $\vec{F} _{12}$ dan dari Persamaan \eqref{eqn:r21} dan \eqref{eqn:r21-unit} untuk $\vec{F} _{21}$, maka dapat diperoleh

\begin{equation}\label{eqn:f12-case-1}
\begin{array}{rcl}
\vec{F} _{12} & = & \displaystyle k \frac{q_1 q_2}{r _{12}^2} \hat{r} _{12} \newline
& = & \displaystyle (9 \ {\rm G}) \frac{(+3 \ {\rm n})(+3 \ {\rm n})}{(3\sqrt{2} \ {\rm \mu})^2} \left[ -\frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & \displaystyle 4.5 \frac{\rm G n^2}{\rm \mu^2} \left[ -\frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & (\color{#f90}{4.5 \times 10^3}) \left[ \color{#0b5}{-\frac12 \sqrt{2} (\hat{x} + \hat{y})} \right]
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:f21-case-1}
\begin{array}{rcl}
\vec{F} _{21} & = & \displaystyle k \frac{q_2 q_1}{r _{21}^2} \hat{r} _{21} \newline
& = & \displaystyle (9 \ {\rm G}) \frac{(+3 \ {\rm n})(+3 \ {\rm n})}{(3\sqrt{2} \ {\rm \mu})^2} \left[ \frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & \displaystyle 4.5 \frac{\rm G n^2}{\rm \mu^2} \left[ \frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & (\color{#f90}{4.5 \times 10^3}) \left[ \color{#0b5}{\frac12 \sqrt{2} (\hat{x} + \hat{y})} \right].
\end{array}
\end{equation}

Persamaan \eqref{eqn:f12-case-1} dan \eqref{eqn:f21-case-1} ditulikan dalam bentuk $\rm(\color{#f90}{besar})[\color{#0b5}{arah}]$ sehingga memudahkan untuk memilah informasi mengenai kedua gaya bila diperlukan.

![]({{ site.baseurl }}/assets/img/0/35/0351-e.png) \
Gambar <a name="fig5">5</a>. Dua buah muatan positif dan gaya yang bekerja pada masing-masing muatan akibat adanya muatan lain.

Arah kedua gaya pada Persamaan \eqref{eqn:f12-case-1} dan \eqref{eqn:f21-case-1} disajikan dalam Gambar [5](#fig5), dengan gaya pertama yang bekerja muatan $q_1$ mengarah ke kiri bawah dan gaya kedua yang bekerja pada muatan $q_2$ mengarah ke kanan atas. Dengan demikian jelas terlihat bahwa gaya elektrostatik pada kedua muatan merupakan gaya tolak-menolak.

#### case q1 > 0 and q2 < 0
Selanjutnya bagaimana bila $q_1 = +3 \ {\rm nC}$ dan $q_2 =  -3 \ {\rm nC}$? Kedua muatan berbeda tanda. Vektor-vektor posisi relatif dan vektor-vektor satuan untuk kedua muatan kembali diperoleh dari Persamaan \eqref{eqn:r12} dan \eqref{eqn:r12-unit} untuk $\vec{F} _{12}$ dan dari Persamaan \eqref{eqn:r21} dan \eqref{eqn:r21-unit} untuk $\vec{F} _{21}$. Dapat diperoleh

\begin{equation}\label{eqn:f12-case-2}
\begin{array}{rcl}
\vec{F} _{12} & = & \displaystyle k \frac{q_1 q_2}{r _{12}^2} \hat{r} _{12} \newline
& = & \displaystyle (9 \ {\rm G}) \frac{(+3 \ {\rm n})(-3 \ {\rm n})}{(3\sqrt{2} \ {\rm \mu})^2} \left[ -\frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & \displaystyle 4.5 \frac{\rm G n^2}{\rm \mu^2} \left[ \frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & (\color{#f90}{4.5 \times 10^3}) \left[ \color{#0b5}{\frac12 \sqrt{2} (\hat{x} + \hat{y})} \right]
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:f21-case-2}
\begin{array}{rcl}
\vec{F} _{21} & = & \displaystyle k \frac{q_2 q_1}{r _{21}^2} \hat{r} _{21} \newline
& = & \displaystyle (9 \ {\rm G}) \frac{(-3 \ {\rm n})(+3 \ {\rm n})}{(3\sqrt{2} \ {\rm \mu})^2} \left[ \frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & \displaystyle 4.5 \frac{\rm G n^2}{\rm \mu^2} \left[ -\frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & (\color{#f90}{4.5 \times 10^3}) \left[ \color{#0b5}{-\frac12 \sqrt{2} (\hat{x} + \hat{y})} \right].
\end{array}
\end{equation}

Kembali digunakan cara penulisan dalam bentuk $\rm(\color{#f90}{besar})[\color{#0b5}{arah}]$ untuk Persamaan \eqref{eqn:f12-case-2} dan \eqref{eqn:f21-case-2}
 yang akan memudahkan pemilahan informasi besar dan arah dari kedua gaya.

![]({{ site.baseurl }}/assets/img/0/35/0351-f.png) \
Gambar <a name="fig6">6</a>. Dua buah muatan berbeda tanda dan gaya yang bekerja pada masing-masing muatan akibat adanya muatan lain.

Arah kedua gaya pada Persamaan \eqref{eqn:f12-case-2} dan \eqref{eqn:f21-case-2} disajikan dalam Gambar [6](#fig6), dengan gaya pertama yang bekerja muatan $q_1$ mengarah ke kanan atas dan gaya kedua yang bekerja pada muatan $q_2$ mengarah ke kiri bawah. Gaya pada kedua muatan merupakan gaya tarik-menarik sebagaimana terlihat pada Gambar [6](#fig6).

#### case q1 < 0 and q2 < 0
Kasus lain adalah bila $q_1 = -3 \ {\rm nC}$ dan $q_2 =  -3 \ {\rm nC}$ atau kedua muatan bertanda sama dengan tandanya negatif. Dengan cara yang sama, vektor-vektor posisi relatif dan vektor-vektor satuan untuk kedua muatan diperoleh dari Persamaan \eqref{eqn:r12} dan \eqref{eqn:r12-unit} untuk $\vec{F} _{12}$ dan dari Persamaan \eqref{eqn:r21} dan \eqref{eqn:r21-unit} untuk $\vec{F} _{21}$. Perhitungan yang dilakukan akan memberikan

\begin{equation}\label{eqn:f12-case-3}
\begin{array}{rcl}
\vec{F} _{12} & = & \displaystyle k \frac{q_1 q_2}{r _{12}^2} \hat{r} _{12} \newline
& = & \displaystyle (9 \ {\rm G}) \frac{(-3 \ {\rm n})(-3 \ {\rm n})}{(3\sqrt{2} \ {\rm \mu})^2} \left[ -\frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & \displaystyle 4.5 \frac{\rm G n^2}{\rm \mu^2} \left[ -\frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & (\color{#f90}{4.5 \times 10^3}) \left[ \color{#0b5}{-\frac12 \sqrt{2} (\hat{x} + \hat{y})} \right]
\end{array}
\end{equation}

dan

\begin{equation}\label{eqn:f21-case-3}
\begin{array}{rcl}
\vec{F} _{21} & = & \displaystyle k \frac{q_2 q_1}{r _{21}^2} \hat{r} _{21} \newline
& = & \displaystyle (9 \ {\rm G}) \frac{(-3 \ {\rm n})(-3 \ {\rm n})}{(3\sqrt{2} \ {\rm \mu})^2} \left[ \frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & \displaystyle 4.5 \frac{\rm G n^2}{\rm \mu^2} \left[ \frac12 \sqrt{2} (\hat{x} + \hat{y}) \right] \newline
& = & (\color{#f90}{4.5 \times 10^3}) \left[ \color{#0b5}{\frac12 \sqrt{2} (\hat{x} + \hat{y})} \right].
\end{array}
\end{equation}

Untuk memudahkan untuk memilah informasi besar dan arah kedua gaya bila, Persamaan \eqref{eqn:f12-case-3} dan \eqref{eqn:f21-case-3} ditulikan dalam bentuk $\rm(\color{#f90}{besar})[\color{#0b5}{arah}]$.

![]({{ site.baseurl }}/assets/img/0/35/0351-g.png) \
Gambar <a name="fig7">7</a>. Dua buah muatan negatif dan gaya yang bekerja pada masing-masing muatan akibat adanya muatan lain.

Terlihat bahwa gaya elektrostatik pada kedua muatan merupakan gaya tolak-menolak sebagaimana diilustrasikan pada Gambar [7](#fig7). Arah gaya yang bekerja pada muatan $q_1$ yang diberikan oleh Persamaan \eqref{eqn:f12-case-3} tergambarkan ke arah kiri bawah, sedangkan pada muatan $g_2$ yang diberikan oleh Persamaan \eqref{eqn:f21-case-3} tergambarkan ke arah kanan atas.

Dengan demikian dapat disarikan dari Gambar [5](#fig5), [6](#fig6), dan [7](#fig7) bahwa
+ gaya interaksi antar dua muatan titik sejajar dengan garis yang menghubungkan kedua muatan,
+ gaya antara dua buah muatan berbeda tanda akan berarah tarik-menarik, dan
+ gaya antara dua buah muatan bertanda sama akan berarah tolak-menolak.

Selanjutnya kedua persamaan, yaitu Persamaan \eqref{eqn-electrostatic-force-two-point-charges} dan \eqref{eqn-electrostatic-force-two-point-charges-vector} memberikan hasil yang sama, akan tetapi Persamaan \eqref{eqn-electrostatic-force-two-point-charges} membutuhkan informasi arah gaya dari tanda kedua muatan, sedangkan Persamaan \eqref{eqn-electrostatic-force-two-point-charges-vector} telah menyimpan informasi arah gaya pada kedua muatan di dalam formulasinya.


## basic form
Terdapat pula penulisan gaya Coulomb yang tidak menggunakan indeks untuk gaya dan jarak antar kedua muatan, serta hanya indeks $1$ dan $2$ untuk kedua muatannya sehingga amat ringkas bentuknya [[13](#r13), [14](#r14)]

\begin{equation}\label{eqn-coulomb-force-basic-form}
F = k \frac{q_1 q_2}{r^2},
\end{equation}

dengan pengertian arah gaya antar kedua muatan, tarik-menarik atau tolak-menolak, perlu dipahami terlebih dahulu terkait dengan jenis kedua muatan (keduanya positif, positif-negatif, atau keduanya negatif). Persamaan \eqref{eqn-coulomb-force-basic-form} ini tepat bila hanya ingin menghitung besar gaya antar dua muatan, akan tetapi bila terdapat lebih dari dua muatan, perumusan ini dapat menjadi lebih merepotkan ketimbang perumusan dengan notasi vektor pada Persamaan \eqref{eqn-electrostatic-force-two-point-charges-vector}.


## not point charges
Gaya elektrostatik yang diungkapkan oleh hukum Coulomb juga berlaku untuk disribusi muatan, atau muatan yang ukurannya (dan juga bentuknya) perlu dipertimbankang, yang secara teknis dilakukan menggunakan bentuk integral [[15](#r15)].

![]({{ site.baseurl }}/assets/img/0/35/0351-h.png) \
Gambar <a name="fig8">8</a>. Gaya elektrostatik antara: (a) dua muatan titik; (b) muatan titik dengan distribusi muatan, dan (c) distribusi muatan dengan distribusi muatan.

Tabel <a name='tab1'>1</a>. Tiga kemungkinan interaksi bila sumber muatan dapat berbentuk muatan titik atau distribusi muatan.

Gambar [8](#fig8) | $q_1$ | $q_2$ | $\vec{F}_{21}$
:-: | :-: | :-: | :-:
--- | --- | --- | ---
(a) | muatan<br>titik | muatan<br>titik | $\displaystyle k \frac{q_2 q_1}{r_{21}^2} \hat{r}_{21}$
(b) | distribusi<br>muatan | muatan<br>titik |  $\displaystyle \int k \frac{q_2 dq_1}{r_{21}^2} \hat{r}_{21}$
(c) | distribusi<br>muatan| distribusi<br>muatan |  $\displaystyle \int \int k \frac{dq_2 dq_1}{r_{21}^2} \hat{r}_{21}$

Persamaan \eqref{eqn-electrostatic-force-two-point-charges}, \eqref{eqn-electrostatic-force-two-point-charges-vector}, dan \eqref{eqn-coulomb-force-basic-form} hanya mengakomodasi bila dua benda yang bermuatan berbentuk muatan titik. Akan tetapi benda yang berinteraksi dapat pula berbentuk distribusi muatan. Kemungkinan interaksi antar dua benda yang dapat berbentuk muatan titik atau distribusi muatan diberikan pada Gambar [8](#fig8) dan formulasi gaya elektrostatik terkaitnya diberikan pada Tabel [1](#tab1). Sebagi contohnya diambil gaya pada muatan $q_2$ akibat adanya muatan $q_1$ yang berada di sebelah kanan pada Gambar [8](#fig8).


## term
Untuk pembahasan ini istilah gaya elektrostatik bila terkait dengan hukum Coulomb dirasakan lebih tepat, walaupun diskusi mengenai kedua istilah gaya listrik dan gaya elektrostatik belum konklusif [[16](#r16)].


## exer
1. Dengan memanfaatkan Gambar [2](#fig2) hitunglah besar gaya-gaya $F_{45}$, $F_{42}$, dan $F_{23}$.
2. Perhatikan Gambar [6](#fig6) dan bagaimana arah gaya antar kedua muatan bila $q_1 < 0$ dan $q_2 > 0$?
3. Untuk menghitung hanya besar gaya antara dua muatan titik, persamaan mana yang paling mudah untuk digunakan dari Persamaan \eqref{eqn-electrostatic-force-two-point-charges}, \eqref{eqn-electrostatic-force-two-point-charges-vector}, dan \eqref{eqn-coulomb-force-basic-form}?
4. Bila terdapat tiga muatan titik dan ingin dihitung gaya resultan pada salah satu muatan akibat dua muatan lainnya, mana persamaan yang paling mudah digunakan karena lebih terstruktur antara Persamaan \eqref{eqn-electrostatic-force-two-point-charges}, \eqref{eqn-electrostatic-force-two-point-charges-vector}, dan \eqref{eqn-coulomb-force-basic-form}?
5. Apakah hukum Coulomb berlaku untuk bukan muatan titik? Misalnya untuk distribusi muatan?


## note
1. <a name='r01'></a>Carl R. Nave, "Coulomb's Law: Like charges repel, unlike charges attract", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elefor.html> [20211228].
2. <a name='r02'></a>Betsy Chesnutt (In.), "Electric Force: Definition & Equation", Study.com, 5 Nov 2015, url <https://study.com/academy/lesson/electric-force-definition-equation.html> [20211228].
3. <a name='r03'></a>McAllister, "Electric force", Khan Academy, 2021, url <https://www.khanacademy.org/science/electrical-engineering/ee-electrostatics/ee-electric-force-and-electric-field/a/ee-electric-force> [20211228].
4. <a name='r04'></a>Tom Henderson, "Newton's Laws and the Electrical Force", The Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/estatics/Lesson-3/Newton-s-Laws-and-the-Electrical-Force> [20211228].
5. <a name='r05'></a>Admin, "Electrical Force", BYJU'S, 12 Jul 2020, url <https://byjus.com/physics/electrical-force/> [20211228].
6. <a name='r06'></a>Anne Marie Helmenstine, "Chemistry Definitions: What are Electrostatic Forces?", ThoughtCo, 17 Jan 2020, url <https://www.thoughtco.com/p-604451> [20211228].
7. <a name='r07'></a>Wikipedia contributors, "Electrostatics", Wikipedia, The Free Encyclopedia, 27 December 2021, 05:52 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1062235033> [20211228].
8. <a name='r08'></a>The Editors of Encyclopaedia Britannica, Erik Gregersen, Gloria Lotha, Emily Rodriguez, "Coulomb force", Encyclopedia Britannica, 25 Oct 2016, url <https://www.britannica.com/science/Coulomb-force> [20211228].
9. <a name='r09'></a>Nipun, "Difference Between Electrostatic and Electromagnetic Force", Pediaa, 24 Nov 2015, url <https://pediaa.com/difference-between-electrostatic-and-electromagnetic-force/> [20211228].
10. <a name='r10'></a>Lee Johnson, "What is Electromagnetic Force?", Sciencing, 2 Nov 2020, url <https://sciencing.com/what-is-electromagnetic-force-13710454.html> [20211228].
11. <a name='r11'></a>Glenn Elert, "Coulomb's Law", The Physics Hypertextbook, 2021, url <https://physics.info/coulomb/> [20211228].
12. <a name='r12'></a>ParalynxEngineering.com, "Coulomb's Constant Explained", Paralynx Engineering Inc., 1 Nov 2016, url <https://www.paralynxengineering.com/coulombs-constant-explained.shtml> [20211228].
13. <a name='r13'></a>Endah Murniaseh, "Bagaimana Bunyi Hukum Coulomb dan Rumusnya?", Tirto.id, 19 Agustus 2021, url <https://tirto.id/giLh> [20211230].
14. <a name='r14'></a>Kontributor Wikipedia, "Hukum Coulomb", Wikipedia, Ensiklopedia Bebas, 16 Agustus 2021, 03.44 UTC, url <https://id.wikipedia.org/w/index.php?oldid=18980016> [20211230].
15. <a name='r15'></a>miha priimek, "Answer to 'Coulomb$'$s Law - Why the Coulomb$'$s law is valid only for point and static charges?'" Physics StackExhange, 1 Sep 2014, url <https://physics.stackexchange.com/a/133485> [20211230].
16. <a name='r16'></a>Caroline Soto, "What is the difference between electric force and electrostatic force?", Quora, 30 Aug 2018, url <https://qr.ae/pG679U> [20211230].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0351?src=hash&amp;ref_src=twsrc%5Etfw">#bug0351</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1481236713188261891?ref_src=twsrc%5Etfw">January 12, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field](0352.html) &bull; [electric potential](0353.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) dengan hukum III Newton diperoleh $F_{54} = F_{45} = 144 \ {\rm GN}$, $F_{42} = F_{24} = 51.84 \ {\rm GN}$, $F_{23} = F_{32} = 81 \ {\rm GN}$; &nbsp;
2) arahnya saling mendekat atau tarik-menarik; &nbsp;
3) menggunakan persamaan terakhir; &nbsp;
4) dengan persamaan kedua; &nbsp;
5) ya, berlaku pula untuk distribusi muatan; &nbsp;
</ans>


{% comment %}
{% endcomment %}
