---
layout: butir
authors: [viridi]
title: circular motion
permalink: pages/0082
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "2d", "circular motion", "uniform"]
date: 2021-10-31 19:03:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/08/2021-10-30-circular-motion.md
twitter_username: 6unpnp
nodes: []
---
Termasuk di dalam gerak 2d adalah gerak melingkar yang dapat diperkenalkan tanpa notasi vektor 2d dalam koordinat kartesian $(x, y)$ dan langsung ke besaran angular $\theta$, $\omega$, $\alpha$ [[1](#ref01)], menggunakan ilustrasi penjumlahan vektor untuk mendapatkan percepatan sentripetal bagi gerak melingkar beraturan atau GMB dengan masih tanpa notasi vektor dalam koordinat kartesian secara eksplisit [[2](#ref02)], dan menampillkan gerak melingkar dalam variabel-variabel koordinat kartesian secara eksplisit [[3](#ref03), [4](#ref04)].


## cartesian coordinate system
Dalam sistem koordinat Kartesius [[5](#ref05)] dapat dirumuskan fungsi posisi untuk suatu gerak melingkar beraturan atau GMB dalam bentuk

$$
x = x_c + R \cos (\omega t + \phi),
$$

$$
y = y_c + R \sin (\omega t + \phi),
$$

dengan $(x_c, y_c)$ pusat lintasan lingkaran, $R$ jari-jari, $\omega$ frekuensi angular atau frekuensi sudut, $t$ waktu, dan $\phi$ fasa awal. Umumnya untuk memudahkan dipilih $x_c = 0$ dan $y_c = 0$, yang juga akan digunakan di sini

\begin{equation}\label{eqn-circular-motion-x}
x = R \cos (\omega t + \phi),
\end{equation}

\begin{equation}\label{eqn-circular-motion-y}
y = R \sin (\omega t + \phi),
\end{equation}


Selanjutnya dengan menggunakan hubungan antara $v_x$ dan $x$, melalui

\begin{equation}\label{eqn-circular-motion-vx-dif-x}
v_x = \frac{dx}{dt},
\end{equation}

yang juga berlaku untuk $v_y$ dan $y$, dapat diperoleh dari Persamaan \eqref{eqn-circular-motion-x} dan \eqref{eqn-circular-motion-y}

\begin{equation}\label{eqn-circular-motion-vx}
v_x = -\omega R \sin (\omega t + \phi),
\end{equation}

\begin{equation}\label{eqn-circular-motion-vy}
v_y = \omega R \cos (\omega t + \phi),
\end{equation}

fungsi percepatan setiap waktunya.

Kemudian dengan menggunakan hubungan antara $a_x$ dan $v_x$, melalui

\begin{equation}\label{eqn-circular-motion-ax-dif-vx}
a_x = \frac{dv_x}{dt},
\end{equation}

yang juga berlaku untuk $a_y$ dan $v_y$, dari Persamaan \eqref{eqn-circular-motion-vx} dan \eqref{eqn-circular-motion-vy} dapat diperoleh 

\begin{equation}\label{eqn-circular-motion-ax}
a_x = -\omega^2 R \cos (\omega t + \phi),
\end{equation}

\begin{equation}\label{eqn-circular-motion-ay}
a_y = -\omega^2 R \sin (\omega t + \phi),
\end{equation}

yang adalah fungsi percepatan setiap waktunya.

![]({{ site.baseurl }}/assets/img/0/08/0082-a.png) \
Gambar <a name="fig1">1</a>. Lintasan suatu GMB dengan vektor kecepatannya (panah biru) dan percepatannya (panah hijau) pada saat $t = 0, \frac14 T, \frac58 T$ dengan urutan berlawanan arah arah putar jarum jam. 

Baik dari Persamaan \eqref{eqn-circular-motion-vx}, \eqref{eqn-circular-motion-vy}, \eqref{eqn-circular-motion-ax}, \eqref{eqn-circular-motion-ay} maupun Gambar [1](#fig1) terlihat bahwa arah kecepatan suatu GMB selalu tegak lurus dengan lintasannya dan arah percepatannya selalu menuju pusat lintasan lingkaran.

### trajectory
Dengan menggunakan Persamaan \eqref{eqn-circular-motion-x} dan \eqref{eqn-circular-motion-y} dapat diperoleh hubungan

\begin{equation}\label{eqn-circular-motion-trajectory}
x^2 + y^2 = R^2,
\end{equation}

yang menunjukkan bahwa lintasannya berbentuk lingkaran dengan pusat berada pada titik $(0, 0)$.

### tangential velocity
Dari Gambar [1](#fig1) terlihat untuk suatu GMB arah kecepatannya selalu tegak lurus dengan vektor posisinya atau lintasannya. Kecepatan ini disebut sebagai kecepatan tangensial $v_T$. Dengan menggunakan Persamaan \eqref{eqn-circular-motion-vx} dan \eqref{eqn-circular-motion-vy} dapat diperoleh hubungan

\begin{equation}\label{eqn-circular-motion-tangensial-velocity}
\begin{array}{rcl}
v & \equiv & v_T, \newline
v & = & \sqrt{v_x^2 + v_y^2} \newline
& = & \omega R, \newline
\end{array}
\end{equation}

yang menunjukkan kaitannya dengan kecepatan sudut atau kecepatan angular $\omega$.

### radial acceleration
Untuk suatu GMB telah ditunjukkan oleh Gambar [1](#fig1) bahwa arah percepatannya selalu menuju pusat lintasan lingkaran. Besarnya dapat diperoleh dengan menggunakan Persamaan \eqref{eqn-circular-motion-ax} dan \eqref{eqn-circular-motion-ay}

\begin{equation}\label{eqn-circular-motion-centripetal-acceleration}
\begin{array}{rcl}
a & \equiv & a_C \equiv a_R, \newline
a & = & \sqrt{a_x^2 + a_y^2} \newline
& = & \omega^2 R, \newline
\end{array}
\end{equation}

yang dikenal dengan percepatan sentripetal. Tanda negatif di depan Persamaan \eqref{eqn-circular-motion-ax} dan \eqref{eqn-circular-motion-ay}, yang bila dibandingkan dengan bentuk vektor posisinya pada Persamaan \eqref{eqn-circular-motion-x} dan \eqref{eqn-circular-motion-y}, telah jelas terlihat bahwa percepatan sentripetal selalu mengarah ke pusat lintasan. Pada \eqref{eqn-circular-motion-centripetal-acceleration} tanda ini hilang karena adanya operasi pengkuadratan.

Perlu diingat bahwa percepatan \eqref{eqn-circular-motion-centripetal-acceleration} memiliki bentuk demikian hanya untuk GMB. Untuk gerak lurus berubah beraturan atau GMBB akan terdapat komponen lain untuk percepatan. Dengan percepatan tidak lagi sama dengan percepatan sentripetal karena ada percepatan pada arah angular.


## polar coordinate
Pada koordinat polar [[6](#ref06)] variabelnya adalah posisi radial $r$ dan posisi angular $\theta$. Untuk lintasan berbentuk lingkaran dengan jari-jari $R$, posisi radial akan tetap sehingga

\begin{equation}\label{eqn-circular-motion-r}
r = R.
\end{equation}

Untuk posisi angular $\theta$ dapat diilustrasikan dengan menggunakan busur lingkaran. Bila panjang suatu busur lingkaran adalah $\Delta s$ dan jari-jari lingkaran adalah $R$ maka sudut yang terlingkupi busur tersebut adalah

\begin{equation}\label{eqn-circular-motion-polar-theta}
\Delta \theta = \frac{\Delta s}{R},
\end{equation}

yang dapat diingat dengan mengaitkannya dengan keliling sebuah lingkaran, di mana $\Delta \theta = 2\pi$ sehingga diperoleh $\Delta s = 2\pi R$.

![]({{ site.baseurl }}/assets/img/0/08/0082-b.png) \
Gambar <a name="fig2">2</a>. Kiri: Panjang suatu busur lingkaran $\Delta s$ yang melingkupi sudut $\Delta \theta$. Kanan: Posisi angular $\theta$ dengan padanannya posisi sepanjang keliling lingkaran $s$.

Selanjutnya sering digunakan, untuk penyederhanaan $\Delta s \equiv s$ dan $\Delta \theta \equiv \theta$ dengan tetap mengingat bahwa keduanya adalah rentang jarak dan rentang sudut. Hal ini dapat dilakukan dengan asumsi bahwa terdapat referensi titik nol untuk $s$ dan $\theta$ seperti diilustrasikan pada Gambar [2](#fig2) (kanan).


## formula
Dengan menggunakan Persamaan \eqref{eqn-circular-motion-tangensial-velocity} dan \eqref{eqn-circular-motion-polar-theta} dapat dituliskan analogi antar keduanya untuk kinematika, sementara terdapat hal-hal lain yang juga dapat dianalogikan [[7](#ref07)] akan tetapi belum disampaikan di sini.

Tabel <a name="tab1">1</a>. Analogi variabel dan persamaan kinematika antar gerak lurus dan gerak melingkar.

**Hal** | Gerak Lurus | Gerak Melingkar
:- | :- | :-
**Posisi** | $s$, $s_0$, $\Delta s$ ($\rm m$) | $\theta$, $\theta_0$, $\Delta \theta$  ($\rm rad$)
**Kecepatan** | $v$, $v_0$ ($\rm m/s$) | $\omega$, $\omega_0$  ($\rm rad/s$)
**Percepatan** | $a$ ($\rm m/s^2$) | $\alpha$  ($\rm rad/s^2$)
**Relasi** | $s = \theta \ R$ | $\displaystyle \theta = \frac{s}{R}$
| $v = \omega \ R$ | $\displaystyle \omega = \frac{v}{R}$
| $a = \alpha \ R$ | $\displaystyle \alpha = \frac{a}{R}$
**Persamaan**  | $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$
| $s = s_0 + v_0 t + \frac12 a t^2$ | $\theta = \theta_0 + \omega_0 t + \frac12 \alpha t^2$
| $v^2 = v_0^2 + 2as$ | $\omega^2 = \omega_0^2 + 2 \alpha \theta$

Pada Tabel [1](#tab1) telah ditambahkan percepatan sudut $\alpha$ yang merupakan ciri dari GMBB.


## exer
1. Apakah perbedaan nilai untuk posisi pada gerak lurus dan gerak melingkar?


## note
1. <a name="r01"></a>Robert C., "Unit 2 - 2D Kinematics - Uniform Circular Motion Review", Numerade, url <https://www.numerade.com/courses/physics-101-mechanics/motion-in-2d-or-3d/uniform-circular-motion-overview/> [20211030].
2. <a name="r02"></a>M. Dubson, "Motion in 2D", Physics 1110, Fall 2012, url <https://physicscourses.colorado.edu/phys1110/phys1110_fa12/LectureNotes/Motion2D.pdf> [20211030].
3. <a name="r03"></a>David J. Starling, "Chapter 4 - Motion in 2D and 3D", PHYS 211 General Physics: Mechanics, Penn State Hazleton, 27 Sep 2012, url <http://www.personal.psu.edu/djs75/p211/lecture/ch4.pdf> [20211030].
4. <a name="r04"></a>Beatriz Roldán Cuenya, "Chapter 4 – 2D and 3D Motion", PHY 2048 Physics for Scientists & Engineers I, Spring 2023, The University of Central Florida, url <https://physics.ucf.edu/~roldan/classes/phy2048-ch4_sp12.pdf> [20211030].
5. <a name="r05"></a>Wikipedia contributors, "Cartesian coordinate system", Wikipedia, The Free Encyclopedia, 30 August 2021, 17:35 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1041463197> [20211030].
6. <a name="r06"></a>Wikipedia contributors, "Polar coordinate system", Wikipedia, The Free Encyclopedia, 14 September 2021, 10:13 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1044261299> [20211030].
7. <a name="r07"></a>S. M. Blinder, "Analogies between Kinematics of Linear and Angular Motion", Wolfram Demonstrations Project, 9 Oct 2018, url <https://demonstrations.wolfram.com/AnalogiesBetweenKinematicsOfLinearAndAngularMotion/> [20211030].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [superposition principle](0070.html) &bull; [kinematics 2d](0080.html) &bull; [polar coordinates intro](0015.html) &bull; [uniform circular motion](0083.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Dapat bernilai berapa saja pada gerak lurus, akan tetapi pada gerak melingkar terbatas antara $0$ dan $2\pi$; &nbsp;
</ans>
