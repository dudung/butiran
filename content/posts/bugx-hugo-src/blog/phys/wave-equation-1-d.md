---
title: "wave equation 1-d"
date: 2022-03-29T02:46:00+07:00
lastmod: 2022-03-29T06:29:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'wave-equation', '1-d', 'draft']
url: "0025"
draft: false
---
Menarik untuk melihat hasil penelusuran bahwa terdapat beberapa konsep berbeda yang berbagi istilah yang sama. Istilah yang dimaksud di sini adalah persamaan gelombang. Istilah ini digunakan untuk persamaan yang menghubungkan laju rambat, frekuensi, dan panjang gelombang suatu gelombang [[1](#r01), [2](#r02), [3](#r03), [4](#r04)], fungsi yang menggambarkan bentuk gelombang dan perambatannya sebagai fungsi posisi dan waktu [[5](#r05), [6](#r06), [7](#r07)], dan suatu persamaan diferensial parsial linier orde kedua [[8](#r08), [9](#r09), [10](#r10), [11](#r11)]. Istilah ini mungkin merupakan suatu polisemi [[12](#r12)].


## relations
Ketiga arti yang berbeda dari istilah persamaan gelombang saling terkait yang dapat dirunut dari persamaan gelombang dengan penggunaan ketiga.

Persamaan gelombang 1-d dapat dituliskan sebagai

\begin{equation}\label{eqn:wave-equation}
\frac{\partial^2 \psi}{\partial x^2} - \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2} = 0
\end{equation}

dengan $\psi = \psi(x, t)$ menggambarkan simpangan suatu besaran fisis pada posisi $x$ dan saat waktu $t$. Salah satu solusi dari Persamaan \eqref{eqn:wave-equation} adalah

\begin{equation}\label{eqn:wave-equation-solution}
\psi = A \sin (kx - \omega t + \phi),
\end{equation}

dengan $A$ amplitudo, $k$ bilangan gelombang, $\omega$ frekuensi angular, dan $\phi$ fasa awal. Agar fungsi yang digambarkan oleh Persamaan \eqref{eqn:wave-equation-solution} dapat berpindah untuk mengilustrasikan perambatan suatu gelombang argumen pada fungsi $\sin$ harus bernilai tetap, misalnya

\begin{equation}\label{eqn:wave-equation-solution-argument}
kx - \omega t + \phi = 0.
\end{equation}

Dan $\phi$ merupakan nilai yang dapat dipilih agar cocok dengan syarat awal yang diberikan, sehingga dapat bernilai berapa saja. Dengan $k = 2\pi/\lambda$, $\omega = 2\pi/T$, $f = 1/T$, dan dipilih $\phi = 0$, serta digunakan $x = vt$ maka akan diperoleh

\begin{equation}\label{eqn:speed-frequency-wavelength-relation}
\begin{array}{rcl}
kx - \omega t & = & 0 \newline
kx & = & \omega t \newline
\displaystyle \frac{2\pi}{\lambda} x & = & \displaystyle \frac{2\pi}{T} t \newline
\displaystyle \frac{2\pi}{\lambda} vt & = & \displaystyle \frac{2\pi}{T} t \newline
v & = & \displaystyle \frac{\lambda}{T} \newline
v & = & \lambda f,
\end{array}
\end{equation}

yang memberikan hubungan antara $v$ laju rambat, $\lambda$ panjang gelombang, dan $f$ frekuensi suatu gelombang.

Tabel <a name='tab1'>1</a>. Ketiga persamaan yang dikenal dengan istilah yang sama dan rujukannya.

Persamaan | Nama | Rujukan
:- | :- | :-
$\displaystyle\frac{\partial^2 \psi}{\partial x^2} - \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2} = 0$ | Persamaan Gelombang | [[1](#r01), [2](#r02), [3](#r03), [4](#r04)]
$\psi = A \sin (kx - \omega t + \phi)$ | Persamaan Gelombang | [[5](#r05), [6](#r06), [7](#r07)]
$\displaystyle v = f \lambda = \frac{\omega}{k}$ | Persamaan Gelombang | [[8](#r08), [9](#r09), [10](#r10), [11](#r11)]

Suku terakhir kolom pertama baris terbawah pada Tabel [1](#tab1) terdapat $\omega/k$ yang dituliskan agar dapat langsung terlihat kaitan besaran-besaran pada persamaan terakhir ini dengan dua persamaan sebelumnya.


## other solutions
Selain Persamaan \eqref{eqn:wave-equation-solution} yang mengambarkan gelombang yang merambat ke kanan, gelombang yang merambat ke kiri

\begin{equation}\label{eqn:wave-equation-solution-to-left}
\psi = A \sin (kx + \omega t + \phi),
\end{equation}

juga merupakan solusi dari Persamaan \eqref{eqn:wave-equation} dan juga superposisi keduanya dengan amplitudo yang sama

\begin{equation}\label{eqn:wave-equation-solution-stationary-wave}
\psi = B \sin kx \cos \omega t,
\end{equation}

yang merupakan gelombang berdiri atau gelombang stasioner.


## illustrations
Persamaan-persamaan yang merupakan solusi dari Persamaan \eqref{eqn:wave-equation} dapat digambarkan seperti di bawah ini.

{{< svg "/static/img/wave/wave-to-right.svg" "fig1" "1" "Gelombang merambat ke kanan untuk beberapa waktu dengan fungsinya $\psi = A \sin (kx - \omega t + \phi)$." >}}

Gelombang yang merambat ke kanan, dengan fungsinya diberikan pada Persamaan \eqref{eqn:wave-equation-solution}, disajikan pada Gambar [1](#fig1). Perhatikan bagaimana puncak dan lembahnya bergeser ke kanan pada waktu-waktu $t$, $t + T/4$, $t + T/2$, dan $t + 3T/4$.

{{< svg "/static/img/wave/wave-to-left.svg" "fig2" "2" "Gelombang merambat ke kiri untuk beberapa waktu dengan fungsinya $\psi = A \sin (kx + \omega t + \phi)$." >}}

Gelombang yang merambat ke kanan, dengan fungsinya diberikan pada Persamaan \eqref{eqn:wave-equation-solution-to-left}, disajikan pada Gambar [2](#fig2). Perhatikan bagaimana puncak dan lembahnya bergeser ke kiri pada waktu-waktu $t$, $t + T/4$, $t + T/2$, dan $t + 3T/4$.

{{< svg "/static/img/wave/wave-stationary.svg" "fig3" "3" "Gelombang stasioner untuk beberapa waktu dengan fungsinya $\psi = B \sin (kx) \cos (\omega t + \phi)$." >}}

Gelombang stasioner yang tidak merambat karena merupakan superposisi dari gelombang yang merambat ke kanan dan gelombang yang merambat ke kiri, dengan fungsinya diberikan pada Persamaan \eqref{eqn:wave-equation-solution-stationary-wave}, disajikan pada Gambar [3](#fig3). Perhatikan bagaimana puncak dan lembahnya tetap posisinya akan tetapi berubah ketinggiannya pada waktu-waktu $t$, $t + T/4$, $t + T/2$, dan $t + 3T/4$.


## use
Solusi persamaan gelombang dalam bentuk gelombang yang merambat ke kanan pada Persamaan \eqref{eqn:wave-equation-solution} dapat merepresentasikan berbagai besaran fisis, sebagaimana diberikan pada tabel berikut.

Tabel <a name='tab2'>2</a>. Beberapa contoh sistem fisis yang melibatkan gelombang dan jenis gelombangnya.

Sistem | Simpangan | Besaran | Jenis
:- | :- | :- | :-
tali | $y(x, t)$ | posisi vertikal bagian tali | transversal
gelombang EM | $E(x, t)$ | medan listrik | transversal
gelombang EM | $B(x, t)$ | medan magnetik | transversal
bunyi | $\Delta p(x, t)$ | beda tekanan udara | longitudinal
air | $u(x, t)$ | posisi partikel air | transversal dan longitudinal

Gelombang-gelombang yang diberikan pada Tabel [2](#tab2) pada keadaan sebenarnya tidak hanya merambat arah $x$, akan tetapi juga dapat merambat pada beberapa arah sekaligus.


## exer
1. Apa yang perlu dilakukan agar dapat menunjukkan bahwa Persamaan \eqref{eqn:wave-equation-solution} merupakan solusi dari Persamaan \eqref{eqn:wave-equation}?
2. Apa yang perlu dilakukan agar dapat menunjukkan bahwa Persamaan \eqref{eqn:wave-equation-solution-to-left} merupakan solusi dari Persamaan \eqref{eqn:wave-equation}?
3. Apa yang perlu dilakukan agar dapat menunjukkan bahwa Persamaan \eqref{eqn:wave-equation-solution-stationary-wave} merupakan solusi dari Persamaan \eqref{eqn:wave-equation}?
4. Bagaimana cara agar Persamaan \eqref{eqn:wave-equation-solution-stationary-wave} dapat diperoleh dari Persamaan \eqref{eqn:wave-equation-solution} dan Persamaan \eqref{eqn:wave-equation-solution-to-left}? Syarat apa yang diperlukan?
5. Bagaimana kira-kira gerak partikel air bila gelombang pada air merupakan gelombang transversal sekaligus gelombang longitudinal?


## notes
1. <a name='r01'></a>Tom Henderson, "The Wave Equation", The Physics Classroom, 2012, url <https://www.physicsclassroom.com/class/waves/Lesson-2/The-Wave-Equation> [20220329].
2. <a name='r02'></a>-, "The wave equation", Wave parameters and behaviours, Bitsize, BBC, 2022, url <https://www.bbc.co.uk/bitesize/guides/zq4tyrd/revision/6> [20220329]. 
3. <a name='r03'></a>Deva, "The Wave Equation", Save My Exams Ltd., 2022, url <https://www.savemyexams.co.uk/as/physics/cie/22/revision-notes/7-waves/7-1-waves-transverse--longitudinal/7-1-3-the-wave-equation/> [20220329].
4. <a name='r04'></a>FuseSchool - Global Education, "Wave Equation | Waves | Physics | FuseSchool", YouTube, 14.01.2021, url <https://www.youtube.com/watch?v=Zj8JQJtVl0c> [20220329].
5. <a name='r05'></a>David, "The equation of a wave", Khan Academy, 2022, url <https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/mechanical-waves/v/wave-equation> [20220329].
6. <a name='r06'></a>Bozeman Science, "Wave Equation", YouTube, 06.06.2015, url <https://www.youtube.com/watch?v=Jw_aGOrTDPo> [20220329].
7. <a name='r07'></a>UNSW Physics, "Sinusoidal wave equation", YouTube, 15.09.2017, url <https://www.youtube.com/watch?v=UFt7vP7OBEE> [20220329].
8. <a name='r08'></a>Carl Rod Nave, "Carl Rod Nave", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Waves/waveq.html> [20220329]. 
9. <a name='r09'></a>Paul Dawkins, "The Wave Equation", Paul's Online Notes, 1/31/2019, url <https://tutorial.math.lamar.edu/classes/de/TheWaveEquation.aspx> [20220329].
10. <a name='r10'></a>Daniel Mittleman, "Waves and the Wave Equation", ENGN1560 Applied Electromagnetics, Mittleman Lab, School of Engineering, Brown University, 27.01.17, url <https://www.brown.edu/research/labs/mittleman/sites/brown.edu.research.labs.mittleman/files/uploads/lecture02_0.pdf> [20220329]. 
11. <a name='r11'></a>Wikipedia contributors, "Wave equation", Wikipedia, The Free Encyclopedia, 13 March 2022, 10:27 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1076867444> [20220329].
12. <a name='r13'></a>Richard Nordquist, "Polysemy (Words and Meanings)", ThoughtCo, September 09, 2019, url <https://www.thoughtco.com/polysemy-words-and-meanings-1691642> [20220329].
