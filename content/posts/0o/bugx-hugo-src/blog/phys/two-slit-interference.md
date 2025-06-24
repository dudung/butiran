---
title: "two slit interference"
date: 2022-03-28T04:16:00+07:00
lastmod: 2022-03-30T17:26:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'light', 'interference', 'double-slit', 'intensity']
url: "0023"
draft: false
---
Intensitas hasil interferensi dua celah [[1](#r01)] dapat dijelaskan dengan penjumlahan fungsi trigonometri melalui formula Prosthaphaeresis [[2](#r02)] dan fasor [[3](#r03)]. Di sini akan disinggung beberapa pendekatan yang digunakan.


## light source
Pada interferensi dua celah sumber cahayanya adalah kedua buah celah yang ukurannya dapat diabaikan dibandingkan dengan jarak antar kedua celah $d$. Kedua celah disinari oleh satu sumber cahaya monokromatik yang terletak di tengah-tengah kedua celah sehingga dapat dikatakan bahwa kedua celah merupakan sumber cahaya yang tidak saja monokromatik akan tetapi juga koheren.

Cahaya monokromatik artinya cahaya dengan satu warna atau hanya memiliki panjang gelombang tunggal. Cahaya matahari merupakan cahaya polikromatik karena merupakan cahaya dengan banyak panjang gelombang. Sumber cahaya monokromatik dapat dibuat dari sumber cahaya polikromatik yang kemudian dilewatkan pada kisi sehingga masing-masing panjang gelombang dapat terpisahkan, dan kemudian diambil hanya panjang gelombang yang diinginkan. Atau dapat juga digunakan bahan yang memang hanya menghasilkan panjang gelombang tunggal karena tingkat-tingkat energi diskritnya demikian.

Dua buah cahaya koheren menginsyaratkan bahwa kedua cahaya memiliki fungsi matematika dengan sudut fasa yang sama atau pun dapat berbeda fasa kelipatan bulat dari $2\pi$ atau $2m\pi$ dengan $m = 0, 1, 2, 3, \dots$.


## small angle
Interferensi dua celah merupakan sistem yang yang terdiri dari dari sumber cahaya tunggal monokromatik, dua celah sempit, dan layar. Sumber cahaya monokromatik diletakkan sebelum kedua celah dan pada posisi tepat di antara kedua celah. Lebar celah dapat diabaikan terhadap jarak kedua celah $d$ sehingga dalam pembahasan interferensi dua celah tidak disebutkan lebar celahnya. Layar berjarak $L$ dari kedua celah digunakan untuk menangkap pola-pola interferensi yang terbentuk.

{{< svg "/static/img/light/interference/two-slit-small-angle.svg" "fig1" "1" "Dua celah sebagai sumber cahaya $S_1$ dan $S_2$ memberikan berkas cahaya ke titik $\rm P$ melalu jalur berbeda $x_1$ dan $x_2$." >}}

Sumber cahaya tunggal polikromatik diletakkan sebelum kedua celah atau di sebelah kiri kedua celah, yang berperan sebagai sumber baru $S_1$ dan $S_2$, pada Gambar [1](#fig1).

Bila jarak celah ke layar $L$ jauh lebih besar dari jarak antar kedua celah $d$

\begin{equation}\label{eqn:two-slit-interference-l-larger-than-d}
L > > d
\end{equation}

akan membuat

\begin{equation}\label{eqn:two-slit-interference-theta}
\theta_1 \approx \theta_2 \approx \theta,
\end{equation}

yang merupakan suatu aproksimasi untuk mempermudah formulasi interferensi dua celah sempit. Dengan kondisi pada Persamaan \eqref{eqn:two-slit-interference-l-larger-than-d} dapat pula digunakan

\begin{equation}\label{eqn:small-angle-tan-theta}
\tan \theta \approx \sin \theta
\end{equation}

sebagai suatu pendekatan.


## parallel ray
Dengan pendekatan yang menghasilkan \eqref{eqn:two-slit-interference-theta} berkas-berkas cahaya yang semula diilustrasikan pada Gambaf [1](#fig1) dapat disajikan ulang sebagai berkas-berkas sejajar seperti pada gambar berikut.

{{< svg "/static/img/light/interference/two-slit-parallel-ray.svg" "fig2" "2" "Berkas-berkas cahaya paralel pada interferensi dua celah." >}}

Berkas yang tiba di titik $\rm P$ (titik tidak digambarkan pada Gambar [2](#fig2)) berasal dari dua sumber cahaya berbeda, yaitu $S_1$ dan $S_2$, menempuh jalur berbeda $x_1$ dan $x_2$


## path length difference
Terdapat perbedaan panjang lintasan yang dilalui oleh berkas cahaya dari sumber $S_1$ yang lewat jalur $x_1$ dan berkas cahaya dari sumber $S_2$ yang lewat jalur $x_2$. Perbedaan panjang lintasan ini adalah

\begin{equation}\label{eqn:two-slit-interference-path-length-difference}
\Delta x = x_2 - x_1 = d \sin \theta
\end{equation}

yang telah diberikan pada Gambar [2](#fig2), dengan $d$ adalah jarak antar kedua celah dan $\theta$ adalah posisi angular titik $\rm P$ terhadap arah mendatar.

Perbedaan jarak tempuh ini akan menentukan apakah pada titik $\rm P$ akan terjadi interferensi maksimum, minimum, atau keadaan di antara keduanya.


## maximum interference
Interferensi maksimum pada suatu titik $\rm P$ diperoleh bila terpenuhi kondisi

\begin{equation}\label{eqn:two-slit-interference-maximum}
d \sin \theta = m \lambda, \ \ \ \ m = 0, 1, 2, \dots,
\end{equation}

dengan $\lambda$ adalah panjang gelombang sumber cahaya monokromatik. Persamaan \eqref{eqn:two-slit-interference-maximum} telah memberikan posisi angular titik $\rm P$. Posisi vertikal titik tersebut dapat diperoleh melalui

\begin{equation}\label{eqn:two-slit-interference-maximum-y}
y_m \approx m \left( \frac{L \lambda}{d} \right) \ \ \ \ m = 0, 1, 2, \dots.
\end{equation}

Persamaan \eqref{eqn:two-slit-interference-maximum-y} ini diperoleh dengan memanfaatkan Persamaan \eqref{eqn:small-angle-tan-theta} melalui

\begin{equation}\label{eqn:two-slit-interference-angular-to-vertical}
\frac{y}{L} = \tan \theta \approx \sin \theta.
\end{equation}

Dan selanjutnya $\sin \theta$ pada Persamaan \eqref{eqn:two-slit-interference-angular-to-vertical} ini diperoleh dari Persamaan \eqref{eqn:two-slit-interference-maximum}.


## minimum interference
Interferensi minimum pada suatu titik $\rm P$ diperoleh bila terpenuhi kondisi

\begin{equation}\label{eqn:two-slit-interference-minimum}
d \sin \theta = (m + \tfrac12) \lambda, \ \ \ \ m = 0, 1, 2, \dots,
\end{equation}

dengan $\lambda$ adalah panjang gelombang sumber cahaya monokromatik. Persamaan \eqref{eqn:two-slit-interference-minimum} telah memberikan posisi angular titik $\rm P$. Posisi vertikal titik tersebut dapat diperoleh melalui

\begin{equation}\label{eqn:two-slit-interference-minimum-y}
y_m \approx (m + \tfrac12) \left( \frac{L \lambda}{d} \right) \ \ \ \ m = 0, 1, 2, \dots.
\end{equation}

Persamaan \eqref{eqn:two-slit-interference-minimum-y} ini diperoleh dengan memanfaatkan Persamaan \eqref{eqn:small-angle-tan-theta} melalui Persamaan \eqref{eqn:two-slit-interference-angular-to-vertical}

$$
\frac{y}{L} = \tan \theta \approx \sin \theta.
$$

Dan selanjutnya $\sin \theta$ pada Persamaan \eqref{eqn:two-slit-interference-angular-to-vertical} di atas diperoleh dari Persamaan \eqref{eqn:two-slit-interference-minimum}.


## interference intensity
Dapat didefinisikan beda fasa antar berkas berkas dari kedua celah dalam bentuk

\begin{equation}\label{eqn:two-slit-interference-phi}
\phi = k d \sin \theta,
\end{equation}

dengan $k$ bilangan gelombang, $d$ jarak antar celah, dan $\theta$ posisi angular titik amat ${\rm P}$ terhadap arah mendatar. Syarat interferensi maksimum dari Persamaan \eqref{eqn:two-slit-interference-maximum} dan interferensi minimum dari Persamaa \eqref{eqn:two-slit-interference-minimum} dapat digunakan untuk menggambarkan pola intensitas inteferensi oleh dua celah seperti di bawah ini.

{{< svg "/static/img/light/interference/interference-pattern-slit-2.svg" "fig1" "1" "Intensitas relatif $I/I_o$ interferensi dua celah sebagai fungsi beda fasa $\phi$ antar kedua berkas cahaya, dengan beda fasa dinyatakan dalam $\pi$." >}}

Nilai intensitas maksimum yaitu $4$ terkait dengan jumlah celah $2$ atau lebih tepatnya $4 = 2^2$ karena intensitas sebanding dengan kuadrat amplitudo medan listriknya, yang dalam hal ini mewakili cahaya sebagai medan EM. Dengan $m = 0, 1, 2, 3, \dots$ posisi-posisi intensitas maksimum pada Gambar [1](#fig1) diberikan oleh

\begin{equation}\label{eqn:max-interference-phi-position}
\begin{array}{rcl}
\phi & = & 2m \pi \newline
k d \sin \theta & = & \newline
\displaystyle \frac{2\pi}{\lambda} d \sin \theta & = & \newline
2\pi d \sin \theta & = & n 2\pi \lambda \newline
d \sin \theta & = & m \lambda
\end{array}
\end{equation}

yang merupakan Persamaan \eqref{eqn:two-slit-interference-maximum}. Hal yang sama pula untuk posisi-posisi intensitas nol atau minimum pada Gambar [1](#fig1) yang diberikan oleh

\begin{equation}\label{eqn:min-interference-phi-position}
\begin{array}{rcl}
\phi & = & (2m + 1) \pi \newline
k d \sin \theta & = & \newline
\displaystyle \frac{2\pi}{\lambda} d \sin \theta & = & \newline
2\pi d \sin \theta & = & (m + \frac12) 2\pi  \lambda \newline
d \sin \theta & = & (m + \frac12) \lambda
\end{array}
\end{equation}

yang tak lain merupakan Persamaan \eqref{eqn:two-slit-interference-minimum}.

Dengan demikian Persamaan \eqref{eqn:two-slit-interference-maximum} dan \eqref{eqn:two-slit-interference-minimum} dapat digunakan untuk menggambarkan secara kualitatif kurva intensitas seperti pada Gambar [1](#fig1), setidaknya posisi-posisi dari titik maksimum dan minimum. Untuk mengentahui berapa tinggi titik intensitas maksimum perlu perlu dihitung penjumlahan medan listrik dari kedua celah pada titik ${\rm P}$ yang dapat menggunakan penjumlahan dua vektor secara trigonometri ataupun menggunakan konsep fasor.


## exer
1. Tunjukkan bagaimana memperoleh Persamaan \eqref{eqn:two-slit-interference-maximum-y} dari Persamaan \eqref{eqn:two-slit-interference-maximum} dan \eqref{eqn:small-angle-tan-theta}.
2. Tunjukkan bagaimana memperoleh Persamaan \eqref{eqn:two-slit-interference-minimum-y} dari Persamaan \eqref{eqn:two-slit-interference-minimum} dan \eqref{eqn:small-angle-tan-theta}.


## notes
1. <a name='r01'></a>Carl Rod Nave, "Double Slit Interference", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/slits.html> [20220328].
2. <a name='r02'></a>Eric W. Weisstein, "Prosthaphaeresis Formulas", from MathWorld--A Wolfram Web Resource, Wolfram Research, Inc., 29 Mar 2022 url <https://mathworld.wolfram.com/ProsthaphaeresisFormulas.html> [20220330].
3. <a name='r03'></a>Wikipedia contributors, "Phasor", Wikipedia, The Free Encyclopedia, 23 Feb 2022, 14:21 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1073595612> [20220330].

{{< citeas >}}