---
title: "interference intensity thin film 0"
date: 2022-04-04T06:13:00+07:00
lastmod: 2022-04-04T16:18:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'light', 'interference', 'thin-film', 'draft']
url: "0037"
draft: false
---
Syarat interferensi oleh lapisan tipis ditentukan oleh tebal lapisan tipis dan indeks bias medium sebelum dan sesudah lapisan tipis relatif terhadap indeks bias lapisan tipis [[1](#r01)]. Untuk sementara hanya disajikan beda fasa yang terjadi akibat beda panjang lintasan yang ditembuh kedua berkas cahaya dan pemantulan masing-masing berkas pada batas medium.


## wave
Gelombang sinusoidal dapat direprentasikan dalam suatu fungsi matematika berbentuk

\begin{equation}\label{eqn:wave-equation-solution}
\begin{array}{rcl}
y(x, t) =  A \sin (\omega t - kx + \phi)
\end{array}
\end{equation}

dengan $A$ amplitudo, $\omega$ frekuensi sudut, $t$ waktu, $k$ bilangan gelombang, $x$ posisi, dan $\phi$ fasa awal yang dapat dipilih.


## phase difference
Beda fasa akibat perbedaan panjang lintasan dan pemantulan diberikan pada gambar berikut ini.

{{< svg "/static/img/light/interference/phase-difference-thin-film-0.svg" "fig1" "1" "Beda fasa pada lapisan tipis dengan $n_1 < n_2 > n_3$." >}}

Berkas sinar datang diberi warna merah, sinar pantul warna biru, dan sinar bias warna hijau, di mana berkas terakhir ini juga mengalami pemantulan sebelum kembali dibiaskan.


## asumption
Pada interferensi lapisan tipis diasumsikan bahwa $\theta_0 \approx 0$ atau lapisan tipis dipandang hampir tegak lurus dari atas. Dengan demikian

\begin{equation}\label{eqn:distance-in-thin-film}
\Delta x_2 = \frac{d}{\cos\theta}
\end{equation}

akan menjadi

\begin{equation}\label{eqn:distance-in-thin-film-approximation}
\Delta x_2 \approx d.
\end{equation}


## wavelength
Di dalam medium berlaku

\begin{equation}\label{eqn:wavelength-in-medium}
\lambda_0 = n_1 \lambda_1 =  n_2 \lambda_2,
\end{equation}

dengan $\lambda_0$ adalah panjang gelombang cahaya di vakum, di mana $n_0 = 1$.


## maximum interference
Kondisi interferensi maksimum lapisan tipis dipenuhi oleh

\begin{equation}\label{eqn:thin-film-interference-max}
\phi_{g,b} = k \Delta x = 2m \pi
\end{equation}

dengan $g$ berkas berwarna hijau dan $b$ berkas berwarna biru. Beda panjang lintasan antara kedua berkas $\Delta x$ dihitung sejak titik kedua berkas terpisah.


## minimum interference
Kondisi interferensi minimum lapisan tipis dipenuhi oleh

\begin{equation}\label{eqn:thin-film-interference-min}
\phi_{g,b} = k \Delta x = (2m + 1) \pi
\end{equation}

dengan $g$ berkas berwarna hijau dan $b$ berkas berwarna biru. Beda panjang lintasan antara kedua berkas $\Delta x$ dihitung sejak titik kedua berkas terpisah.


## notes
1. <a name='r01'></a>Carl Rod Nave, "Thin Films", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/thinfilm.html> [20220404].
2. url <https://courses.lumenlearning.com/physics/chapter/27-7-thin-film-interference/> [20220404].
3. url <http://physics.bu.edu/~duffy/PY106/Diffraction.html> [20220404].
4. url <http://labman.phys.utk.edu/phys136core/modules/m9/Thin%20films.html>
5. url <https://en.wikipedia.org/wiki/Thin-film_interference> [20220404].

{{< citeas >}}

