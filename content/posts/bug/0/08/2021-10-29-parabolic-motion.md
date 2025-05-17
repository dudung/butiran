---
layout: butir
authors: [viridi]
title: parabolic motion
permalink: pages/0081
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "2d", "parabolic motion"]
date: 2021-10-30 07:44:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/08/2021-10-29-parabolic-motion.md
twitter_username: 6unpnp
nodes: []
---
Gerak parabola termasuk dalam gerak-gerak yang dibahas pada kinematika 2d [[1](#ref01)], yang memiliki banyak contoh, misalnya pada berbagai cabang olahraga seperti lempar cakram, lempar palu, lempar lembing, tolak peluru, bola basket, bola voli, bola golf, baseball, ping-pong, lompat jauh, lompat tinggi [[2](#ref02)], dalam keseharian kita seperti bersin, air mengalir dari selang ataupun militer seperti tembakan pistol, menembakkan meriam [[3](#ref03)]. Sebagai suatu eksperimen, untuk membuktikan prediksi teori, menembak monyet merupakan aplikasi gerak parabola yang menarik [[4](#ref04)] dan terdapat pula contoh tayangannya [[5](#ref05)].


## formula
Gerak parabola dapat dilihat sebagai suatu superposisi dari dua gerak, yaitu gerak dengan kecepatan konstan (GLB) pada arah horisontal dan gerak dipercepat ke bawah pada arah vertikal (GLBB) dengan mengambil arah positif ke atas, berlawanan arah dengan arah percepatan gravitasi [[6](#ref06)]. Dengan demikian dapat dituliskan fungsi posisi setiap saat benda yang melakukan gerak parabola

\begin{equation}\label{eqn-parabolic-motion-r}
\vec{r} = x \ \hat{x} + y \ \hat{y},
\end{equation}

dengan

\begin{equation}\label{eqn-parabolic-motion-x}
x = x_0 + v_{0x} t 
\end{equation}

dan

\begin{equation}\label{eqn-parabolic-motion-y}
y = y_0 + v_{0y} t - \tfrac12 g t^2, 
\end{equation}

di mana $t$ adalah selang waktu $\Delta t$ atau waktu saat posisi ditinjau dikurangi waktu gerak dimulai $(t - t_0)$. Penulisan $\Delta \equiv t$ sudah umum dilakukan untuk penyederhanaan akan tetapi tetap dengan pemahaman sebagai selang waktu [[7](#ref07)].

Selanjutnya dengan menggunakan diferensial dapat diperoleh 

\begin{equation}\label{eqn-parabolic-motion-vx}
v_x = v_{0x},
\end{equation}

\begin{equation}\label{eqn-parabolic-motion-vy}
v_y = v_{0y} - g t, 
\end{equation}

yang merupakan rumusan kecepatan pada kedua arah dan

\begin{equation}\label{eqn-parabolic-motion-ax}
a_x = 0,
\end{equation}

\begin{equation}\label{eqn-parabolic-motion-ay}
a_y = -g. 
\end{equation}

Persamaan \eqref{eqn-parabolic-motion-ax} menunjukkan bahwa pada arah $x$ terjadi GLB dan informasi bahwa pada arah $y$ terjadi GLBB diberikan oleh Persamaan \eqref{eqn-parabolic-motion-ay}.


## initial position
Posisi awal diberikan oleh dua konstanta yaitu $x_0$ untuk arah $x$ dan $y_0$ untuk arah $y$. Pengaruh keduanya dijelaskan dalam gambar berikut.

![]({{ site.baseurl }}/assets/img/0/08/0081-a1.png) \
Gambar <a name="fig1">1</a>. Gerak parabola dengan $v_{0x} = 2$, $v_{0y} = 6$ untuk berbagai posisi awal: $x_0 = 2$, $y_0 = 1.5$ (kiri), $x_0 = 8$, $y_0 = 3$ (tengah), dan $x_0 = 14$, $y_0 = 2.5$ (kanan).

Terlihat bahwa nilai $x_0$ dan $y_0$ akan menentukan titik awal gerak parabola dimulai.


## horizontal velocity
Kecepatan horisontal $v_{0x}$ dapat pula divariasikan dengan membuat parameter lainnya nol.

![]({{ site.baseurl }}/assets/img/0/08/0081-a2.png) \
![]({{ site.baseurl }}/assets/img/0/08/0081-a3.png) \
Gambar <a name="fig2">2</a>. Gerak parabola dengan mengubah komponen kecepatan pada arah horisontal, dengan menyamakan: titik mencapai tanah (atas) dan titik puncak (bawah). 

Bila $v_{0x}$ divariasikan akan tetapi kecepatan vertikal $v_{0y}$ dibuat tetap maka akan terlihat bahwa tinggi puncak sama untuk semua gerak akan tetapi jangkauan horisontalnya berbeda.


## vertical velocity
Bila komponen kecepatan pada arah vertikal $v_{0y}$ divariasikan, pengaruh yang terlihat adalah pada tinggi lintasan parabola. Hal ini diilustrasikan pada Gambar [3](#fig3) berikut.

![]({{ site.baseurl }}/assets/img/0/08/0081-a4.png) \
Gambar <a name="fig3">3</a>. Lintasan parabola dengan $v_{0x} = 3$ dan $v_{0y}$ bernilai: 4 (kiri), 6 (tengah), 8 (kanan).

Dapat terlihat bahwa semakin besar nilai $v_{0y}$ akan semakin tinggi titik puncak lintasan gerak parabola.


## elevation angle
Dalam penerapannya laju awal $v_0$ telah tertentu sehingga
nilai-nilai $v_{0x}$ dan $v_{0y}$ tidak lagi bebas melainkan terhubung melalui

\begin{equation}\label{eqn-parabolic-motion-v0x}
v_{0x} = v_0 \cos \theta,
\end{equation}

\begin{equation}\label{eqn-parabolic-motion-v0y}
v_{0y} = v_0 \sin \theta,
\end{equation}

dengan $\theta$ adalah sudut elevasi [[8](#ref08)] atau sudut peluncuran [[9](#ref09)], yang dapat divariasikan.

![]({{ site.baseurl }}/assets/img/0/08/0081-a5.png) \
Gambar <a name="fig4">4</a>. Gerak parabola dengan $v_0 = 9$ dan sudut peluncuran $\theta$ bernilai: $60^\circ$ (kiri), $45^\circ$ (tengah), dan $30^\circ$ (kanan).

Pada penerapannya, selain pengaturan sudut peluncuran seperti pada tembakan tidak langsung [[10](#ref10)], untuk tempbakan langsung posisi penembak juga berpengaruh karena adanya *impact* dari peluru pada alat dan lalu penggunanya [[11](#ref11)], sehingga perlu diperhatikan untuk dapat mengenai target.


## horizontal range
Jangkauan jarak horisontal suatu gerak parabola pada lantai mendatar diberikan oleh [[12](#ref12)]

\begin{equation}\label{eqn-parabolic-motion-horizontal-range}
\Delta x = \frac{v_0^2 \sin 2\theta}{g},
\end{equation}

dengan $v_0$ laju awal, $\theta$ sudut peluncuran, dan $g$ percepatan gravitasi.

![]({{ site.baseurl }}/assets/img/0/08/0081-a6.png) \
![]({{ site.baseurl }}/assets/img/0/08/0081-a7.png) \
Gambar <a name="fig5">5</a>. Untuk suatu jangkauan tertentu terdapat dua sudut elevasi $\theta$ yang dapat digunakan, sebagai contoh: $15^\circ$ dan $75^\circ$ (atas) atau $30^\circ$ dan $60^\circ$ (bawah).

Fungsi $\sin\theta$ bernilai positif di kuadran I dan II sehingga Persamaan \eqref{eqn-parabolic-motion-horizontal-range} akan memberikan nilai yang sama untuk sudut-sudut dalam kuadran I yang memenuhi hubungan

\begin{equation}\label{eqn-parabolic-motion-horizontal-range-theta}
\theta_1 + \theta_2 = \tfrac12 \pi.
\end{equation}

Dua contoh telah diberikan pada Gambar [5](#fig5), yaitu pasangan $15^\circ$ dan $75^\circ$ serta $30^\circ$ dan $60^\circ$.


## time of flight
Terkait beberapa aplikasi gerak parabola yang dilontarkan dan mencapai suatu titik tujuan dengan ketinggian yang sama dengan posisi pelempar, waktu yang dibutuhkan untuk seluruh perjalanan benda disebut sebagai waktu melayang [[13](#ref13)]. Bila waktu untuk mencapai ketinggian maksimum adalah $T_H$ maka waktu melayang $T_F$ adalah dua kalinya dan bergantung pada komponen kecepatan pada arah vertikal $v_{0y}$, yang untuk menggambarkannya cukup melakukan simulasi pada arah vertikal [[14](#ref14)].

Waktu untuk mencapai posisi tertinggi diperoleh dengan membuat nol Persamaan \eqref{eqn-parabolic-motion-vy}

\begin{equation}\label{eqn-parabolic-motion-th}
\begin{array}{rcl}
v_y & = & v_0 \sin \theta - gt \newline
0 & = & v_0 \sin \theta - g T_H \newline
T_H & = & \displaystyle \frac{v_0 \sin \theta}{g}, \newline
\end{array}
\end{equation}

sehingga dapat diperoleh

\begin{equation}\label{eqn-parabolic-motion-time-of-flight}
T_F = 2 T_H = \displaystyle \frac{2 v_0 \sin \theta}{g}
\end{equation}

waktu melayang $T_F$.


## maximum height
Salah satu besaran yang menarik untuk dikaji pada suatu lintasan parabola adalah tinggi maksimum yang dapat dicapai benda. Tinggi ini bergantung pada komponen kecepatan pada arah vertikal $v_{0y}$ sebagaimana disimulasikan [[15](#ref15)].

Dengan menggunakan $T_H$ dari Persamaan \eqref{eqn-parabolic-motion-th} dalam Persamaan \eqref{eqn-parabolic-motion-y}

\begin{equation}\label{eqn-parabolic-motion-yh}
\begin{array}{rcl}
y & = & y_0 + v_0 \sin\theta \ t - \tfrac12 g t^2, \newline
y - y_0 & = & v_0 \sin\theta \ t - \tfrac12 g t^2, \newline
\Delta y & = & v_0 \sin\theta \ t - \tfrac12 g t^2, \newline
y_H & = & v_0 \sin\theta \ T_H - \tfrac12 g t_H^2, \newline
& = & \displaystyle v_0 \sin\theta \left( \frac{v_0 \sin \theta}{g} \right) - \tfrac12 g \left( \frac{v_0 \sin \theta}{g} \right)^2, \newline
& = & \displaystyle \frac{v_0^2 \sin^2\theta}{2g}
\end{array}
\end{equation}

dapat diperoleh tinggi maksimum.


## trajectory
Dengan menggunakan Persaamaan \eqref{eqn-parabolic-motion-x} dan \eqref{eqn-parabolic-motion-y}, sebagai dua persamaan parametrik dengan parameter $t$ [[16](#ref16)], telah dapat digambarkan lintasan gerak parabola. Akan tetapi dengan memperoleh ungkapan $t$ dari Persaamaan  \eqref{eqn-parabolic-motion-x} dan menggunakannya pada Persaamaan \eqref{eqn-parabolic-motion-y} dapat diperoleh

\begin{equation}\label{eqn-parabolic-motion-trajectory}
y = (\tan \theta) \ x - \left( \frac{g}{2 v_0^2 \cos^2 \theta} \right) \  x^2,
\end{equation}

yang merupakan fungsi lintasannya [[17](#ref17)]. Persamaan \eqref{eqn-parabolic-motion-trajectory} telah mengambil asumsi bahwa $x_0 = 0$ dan $y_0 = 0$.

![]({{ site.baseurl }}/assets/img/0/08/0081-b.png) \
Gambar <a name="fig6">6</a>. Suatu gerak parabola dengan parameter $v_0 = 10$ dan $\theta = 30^\circ$.

Jangkauan jarak horisontal $\Delta x$, tinggi maksimum $y_H$, waktu untuk mencapai puncak $t_H$, dan waktu melayang $t_F$, serta sudut peluncuran $\theta$ diberikan ilustrasinya pada Gambar [6](#fig6).


## exer
1. Dari Gambar [1](#fig2) urutkan kecepatan horisontal yang paling besar berdasarkan posisi orang dan warnanya.
2. Terdapat istilah tembakan langsung dan tidak langsung. Manakah yang termasuk contoh aplikasi gerak parabola?
3. Terdapat pasangan sudut yang memenuhi Persamaan \eqref{eqn-parabolic-motion-horizontal-range-theta} saat diterapkan pada \eqref{eqn-parabolic-motion-horizontal-range}. Apakah waktu tempuh benda yang menempuh kedua lintasan parabola sama? Mana yang lebih lama?
4. Apakah syarat untuk melihat waktu tinggi maksimum pada Persaamaan \eqref{eqn-parabolic-motion-yh} dan waktu melayang pada Persamaan \eqref{eqn-parabolic-motion-time-of-flight}?
5. Apakah syarat titik tertinggi lintasan parabola telah dicapai?


## note
1. <a name="r01"></a>Paul Peter Urone, Roger Hinrichs, Kim Dirks, Manjula Sharma, "Two-Dimensional Kinematics" in College Physics, OpenStax CNX, 6 Jul 2021, url <https://phys.libretexts.org/@go/page/1423> [20211028].
2. <a name="r02"></a>"20 Examples of projectile motion", DewWool, 16 Mar 2021, url <https://dewwool.com/20-examples-of-projectile-motion/> [20211028].
3. <a name="r03"></a>"10 Projectile Motion Examples in Real Life", StudiosGuy, url <https://studiousguy.com/projectile-motion-examples/> [20211028].
4. <a name="r04"></a>"Shoot the Monkey", Harvard Natural Sciences Lecture Demonstrations, 2021, url <https://sciencedemonstrations.fas.harvard.edu/presentations/shoot-monkey> [20211027].
5. <a name="r05"></a>Questacon, "Shoot the Monkey", YouTube, 08.02.2008, url <https://www.youtube.com/watch?v=7y_ncpf81k8> [20211029].
6. <a name="r06"></a>"Projectile motion", Physics 221 Elements of Physics, The University of Tennessee, Department of Physics and Astronomy, 
url <http://labman.phys.utk.edu/phys221core/modules/m3/projectile_motion.html> [20211029].
7. <a name="r07"></a>-, "What are the kinematic formulas?", Khan Academy, url https://www.khanacademy.org/science/physics/one-dimensional-motion/kinematic-formulas/a/what-are-the-kinematic-formulas [20211029].
8. <a name="r08"></a>"Elevation angle in a parabolic kick", Fisicalab, url <https://www.fisicalab.com/en/exercise/2150> [20211029].
9. <a name="r09"></a>Nina Henelsmith, "Projectile Motion:
Finding the Optimal Launch Angle", Whitman College, 12 May 2016, url <https://www.whitman.edu/Documents/Academics/Mathematics/2016/Henelsmith.pdf> [20211029].
10. <a name="r10"></a>Wikipedia contributors, 'Indirect fire', Wikipedia, The Free Encyclopedia, 27 August 2021, 20:14 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1040975794> [20211029].
11. <a name="r11"></a>D. Corriveau, C. A. Rabbath, A. Goudreau, "Effect of the firing position on aiming error and probability of hit", Defence Technology, vol. 15, no. 5, pp. 713-720, Oct 2019, url <https://doi.org/10.1016/j.dt.2019.08.008>.
12. <a name="r12"></a>"Horizontal Range Formula", Toppr, url <https://www.toppr.com/guides/physics-formulas/horizontal-range-formula/> [20211029].
13. <a name="r13"></a>"Time of Flight Formula", SoftSchools.com, 2020, url <https://www.softschools.com/formulas/physics/time_of_flight_formula/161/> [20211030].
14. <a name="r14"></a>Andrew Duffy, Ali Loewy, "Time of Flight", Physlabs, Boston University, 27 Sep 2019, url <http://physics.bu.edu/~duffy/semester1/c4_timeflight.html> [20211030].
15. <a name="r15"></a>Andrew Duffy, Ali Loewy, "Maximum Height", Physlabs, Boston University, 27 Sep 2019, url <http://physics.bu.edu/~duffy/semester1/c4_maxheight.html> [20211030].
16. <a name="r16"></a>Wikipedia contributors, "Parametric equation", Wikipedia, The Free Encyclopedia, 15 October 2021, 17:28 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1050082984> [20211030].
17. <a name="r17"></a>Akash Peshin, "Why Is Projectile Motion Parabolic?", Science ABC, 27 Jan 2021, url <https://www.scienceabc.com/nature/why-is-projectile-motion-parabolic.html> [20211030].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [superposition principle](0070.html) &bull; [kinematics 2d](0080.html) 
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) kiri (merah), biru (tengah), hijau (kanan); &nbsp; 2) tembakan langsung; &nbsp; 3) Tidak sama dan $\theta >>$ terkait $\Delta t >>$; &nbsp; 4) $y(0) = y(T_F)$; &nbsp; 5) $v_{0y} = 0$; &nbsp;
</ans>
