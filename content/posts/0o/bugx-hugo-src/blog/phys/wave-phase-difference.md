---
title: "wave phase difference"
date: 2022-04-04T03:07:00+07:00
lastmod: 2022-04-04T05:26:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'wave', 'phase-difference', 'distance', 'reflection', 'draft']
url: "0033"
draft: false
---
Perbedaan fasa dua buah gelombang dapat disebabkan oleh perbedaan panjang lintasan yang ditempuh [[1](#r01)] dan sebagai tambahan bila terdapat pemantulan dengan kondisi tertentu [[2](#r02)].


## wave
Solusi persamaan gelombang dapat berbentuk

\begin{equation}\label{eqn:wave-equation-solution}
\begin{array}{rcl}
y(x, t) & = & A \sin (kx - \omega t + \varphi) \newline
& = & A \sin (\omega t - kx + \phi)
\end{array}
\end{equation}

yang menggambarkan gelombang secara matematika, dengan $A$ amplitudo, $\omega$ frekuensi sudut, $t$ waktu, $k$ bilangan gelombang, $x$ posisi, dan $\varphi$ fasa serta $\phi$ fasa awal yang dapat dipilih. Bentuk pada baris kedua lebih dipilih untuk saat ini karena pada fasor digunakan $\omega t + \phi$, sehingga $kx$ dapat diserap ke dalam $\phi$ dengan lebih mudah.


## distance
Pada sebuah gelombang yang merambat perbedaan fasa antara dua titik bergantung pada jarak antar dua titik tersebut sebagaimana diberikan pada gambar berikut.

{{< svg "/static/img/wave/phase-difference-different-time.svg" "fig1" "1" "Sebuah gelombang pada dua buah waktu berbeda $t_1$ dan $t_2$ dan dua buah titik yang terpisahkan dengan jarak $\Delta x$." >}}

Dua buah titik yang diambil sebagai contoh pada Gambar [1](#fig1) memiliki jarak pisah $\Delta x$, yang terlihat dari gambar bernilai $\frac34 \lambda$, berlaku baik pada waktu $t_1$ maupun $t_2 > t_1$. Jarak pisah ini dapat diperoleh dari bentuk fungsi sinusoidal yang berbeda fasa $\frac32 \pi$

\begin{equation}\label{eqn:sine-wave-phase-difference-34pi}
\begin{array}{rcl}
(\omega t) - (\omega t - \phi)  & = & \tfrac32 \pi \newline
\phi & = & \newline
k \Delta x &  = & \newline
\displaystyle \frac{2\pi}{\lambda} \Delta x & = & \tfrac32 \pi \newline
\Delta x & = & \tfrac34 \lambda.
\end{array}
\end{equation}

Di sini telah diperoleh bagaimana peran beda panjang lintasan yang ditempuh gelombang memberikan beda fasa. Gelombang pada posisi kedua menempuh lintasan lebih panjang sebesar $\tfrac34 \lambda$ dibanding dengan gelombang pada posisi pertama.


## double slit
Pada peristiwa interferensi cahaya oleh dua celah sempit, dikatakan bahwa kedua celah merupakan sumber cahaya monokromatik dan koheren. Monokromatik artinya memiliki panjang gelombang tunggal dan koheren artinya memiliki fasa yang sama. Sebelum kedua celah diletakkan sebuah sumber cahaya yang merupakan sumber monokromatik, kemudian posisi sumber harus diatur sedemikian rupa sehingga panjang lintasan yang ditempuh masing-masing berkas sama panjang. Ilustrasi posisi sumber yang masih umum diberikan pada gambar berikut ini.

{{< svg "/static/img/wave/phase-differrence-double-slit-source.svg" "fig2" "2" "Sumber ${\rm S}_0$ dan kedua celah sebagai sumber ${\rm S}_1$ dan ${\rm S}_2$." >}}

Perhatikan bahwa sumber ${\rm S}_1$ berbeda fasa dengan sumber asalnya ${\rm S}_0$ sebesar $k x_0$, sedangkan ${\rm S}_1$ berbeda fasa dengan sumber asalnya ${\rm S}_0$ sebesar $k x_0 + k \delta x$. Untuk membuat sumber ${\rm S}_1$ dan ${\rm S}_2$ menjadi sumber yang koheren perlu dibuat agar $k \delta x = 0$ dengan $\delta x = 0$, bila tidak maka sumber ${\rm S}_2$ dan ${\rm S}_1$ memiliki beda fasa $\phi = k \delta x$, yang tidak diinginkan karena bukan merupakan dua sumber yang koheren.

Pada titik ${\rm P}$ pada layar dengan posisi vertikal $y = 0$ atau posisi angular $\theta = 0$ seharusnya terjadi interferensi maksimum yang memenuhi

\begin{equation}\label{eqn:double-slit-interference-max}
d \sin\theta = m \lambda
\end{equation}

untuk $m = 0$. Di sini $d$ adalah jarak antar kedua celah sempit. Kondisi pada Persamaan \eqref{eqn:double-slit-interference-max} akan menjadi interferensi maksimum untuk $m = 0$ bila kedua sumber ${\rm S}_1$ dan ${\rm S}_2$ merupakan dua buah sumber yang koheren.


## reflection
Refleksi dapat pula menyebakan perbedaan fasa antara gelombang datang dan gelombang pantul pada posisi tepat sebelum bidang pantul dan tepat sesudah bidang pantul sehingga perbedaan jarak antara kedua titik dapat diabaikan dan tidak menyebabkan beda fasa akibat perbedaan panjang lintasan yang ditempuh. Terdapat dua kasus pemantulan yaitu kasus pertama cahaya datang dari medium $1$ dengan kerapatan lebih tinggi ke medium $2$ dengan kerapatan lebih rendah atau $n_1 > n_2$ dan kasus kedua cahaya datang dari medium $1$ dengan kerapatan lebih rendah ke medium $2$ dengan kerapatan lebih tinggi atau $n_1 < n_2$.

{{< svg "/static/img/wave/phase-difference-reflection-0.svg" "fig3" "3" "Cahaya datang dari medium $1$ dengan kerapatan lebih tinggi ke medium $2$ dengan kerapatan lebih rendah atau $n_1 > n_2$." >}}

Saat cahaya datang dari medium dengan kerapatan lebih tinggi dan dipantulkan pada batas medium dengan medium berikutnya memiliki kerapatan lebih rendah, antar gelombang pantul dan gelombang datang tidak terdapat beda fasa. Hal in diilustasikan pada Gambar [3](#fig3) dengan titik di mana panah merah (gelombang datan) dan panah biru (gelombang pantul) bertemu.

{{< svg "/static/img/wave/phase-difference-reflection-1.svg" "fig4" "4" "Cahaya datang dari medium $1$ dengan kerapatan lebih rendah ke medium $2$ dengan kerapatan lebih tinggi atau $n_1 < n_2$." >}}

Saat cahaya datang dari medium dengan kerapatan lebih rendah dan dipantulkan pada batas medium dengan medium berikutnya memiliki kerapatan lebih tinggi, antar gelombang pantul dan gelombang datang terdapat beda fasa sebesar $\pi$. Hal in diilustasikan pada Gambar [4](#fig4) dengan titik di mana panah merah (gelombang datan) dan panah biru (gelombang pantul) bertemu.


## refraction
Pembiasan tidak menyebabkan perubahan fasa baik untuk kasus pertama $n_1 > n_2$ ataupun untuk kasus kedua $n_1 < n_2$. Ilustrasi keduanya telah dititipkan pada Gambar [3](#fig3) dan [4](#fig4). Saat terjadi pembiasan panjang gelombang dalam medium akan memenuhi hubungan [[3](#r03)]

\begin{equation}\label{eqn:wavelength-in-medium}
\lambda_0 = n_1 \lambda_1 =  n_2 \lambda_2,
\end{equation}

dengan $\lambda_0$ adalah panjang gelombang cahaya di vakum dengan $n_0 = 1$.



## notes
1. <a name='r01'></a> t.b.a.
2. <a name='r02'></a> t.b.a.
3. <a name='r03'></a>Wikipedia contributors, "Refractive index", Wikipedia, The Free Encyclopedia, 15 March 2022, 07:57 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1077240310> [20220404].

{{< citeas >}}
