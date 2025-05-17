---
layout: butir
authors: [viridi]
title: superposition principle
permalink: pages/0070
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["mechanics", "wave", "sound", "light", "superposition principle"]
date: 2021-10-27 20:21:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/07/2021-10-27-superposition-principle.md
twitter_username: 6unpnp
nodes: []
---
Prinsip superposisi Galileo menyatakan bahwa bila suatu benda mengalami dua pengaruh terpisah yang masing-masingnya membuat benda bergerak dengan karakteristik tertentu, benda akan merespon keduanya tanpa satu pengaruh mengubah pengaruh yang lain [[1](#r01)]. Atau benda akan menanggapinya dengan bergerak dengan kedua pengaruh tersebut yang saling terjumlahkan, seperti gerak menggelinding merupakan penjumlahan dari gerak rotasi dan translasi [[2](#r02)]. Contoh lain pemanfaatan prinsip superposisi dalam mekanika adalah gerak perahu menyeberangi sungai [[3](#r03)] dan gerak parabola [[4](#r04)]. Dalam gelombang prinsip ini mengatakan bahwa bila dua atau lebih gelombang melewati suatu titik, perpindahan pada titik tersebut adalah penjumlahan dari perpindahan dari masing-masing gelombang, yang digunakan untuk interferensi dan pelayangan pada bunyi [[5](#r05)] dan interferensi dan difraksi pada cahaya [[6](#r06)]. Untuk gelombang bunyi terdapat batasan penggunakan principle superposisi, seperti tidak dapat digunakan untuk gelombang yang amat besar dan gelombang kejut [[7](#r07)].


## velocity
Perahu (boat) $\rm B$ yang menyeberang sungai (river) $\rm R$ memiliki kecepatan relatif $\vec{v}_ {\rm BR}$ terhadap sungai dan sungai memiliki kecepatan aliran air $\vec{v}_ {\rm RO}$ relatif terhadap tepinya $\rm O$. 

![]({{ site.baseurl }}/assets/img/0/07/0070-a.png) \
Gambar <a name="fig1">1</a>. Gerak perahu $\rm B$ menyeberangi sungai $\rm R$.

Dengan prinsip superposisi

\begin{equation}\label{eqn-relative-velocity-addition}
\vec{v}_ {\rm BO} = \vec{v}_ {\rm BR} + \vec{v}_ {\rm RO}
\end{equation}

dapat diperoleh kecepatan relatif perahu $\vec{v}_ {\rm BO}$ terhadap tepi sungai.


## displacement (kinematics)
Gerak parabola merupakan superposisi dari GLB (gerak lurus beraturan) pada arah $x$

\begin{equation}\label{eqn-parabolic-motion-x}
x = x_0 + v_{0x} t
\end{equation}

dan GLBB (gerak lurus berubah beraturah) berupa GJB (gerak jatuh bebas) pada arah $y$

\begin{equation}\label{eqn-parabolic-motion-y}
y = y_0 + v_{0y} t - \tfrac12 gt^2.
\end{equation}

Posisi benda adalah

\begin{equation}\label{eqn-parabolic-motion-r}
\begin{array}{rcl}
\vec{r} & = & x \ \hat{x} + y \ \hat{y} \newline
& = & (x_0 + v_{0x} t) \ \hat{x} + (y_0 + v_{0y} t - \tfrac12 gt^2) \ \hat{y} \newline
& = & (x_0 \ \hat{x} + y_0 \ \hat{y}) + (v_{0x} \ \hat{x} + v_{0y} \ \hat{y}) \ t + \tfrac12 (-g \ \hat{y}) \ t^2 \newline
& = & \vec{r}_0 + \vec{v}_0 \ t + \tfrac12 \vec{a} \ t^2
\end{array}
\end{equation}

bila menggunakan notasi vektor. Ilustrasi vektor posisi $\vec{r}$ ini diberikan dalam Gambar [2](#fig2) dengan panah berwarna hijau untuk $t = 7$.

![]({{ site.baseurl }}/assets/img/0/07/0070-b.png) \
Gambar <a name="fig2">2</a>. Gerak parabola (i) merupakan superposisi dari gerak pada arah $x$ (ii) dan $y$ (iii).

Gambar [2](#fig2) memberikan ilustrasi bagaimana pada arah $x$ bekerja Persamaan \eqref{eqn-parabolic-motion-x} dan pada arah $y$ bekerja Persamaan \eqref{eqn-parabolic-motion-y}, sehingga superposisi gerak pada kedua arah tersebut menghasilkan gerak parabola $y = y(x)$. Dengan melakukan substitusi waktu $t$ pada Persamaan \eqref{eqn-parabolic-motion-y} menggunakan Persamaan \eqref{eqn-parabolic-motion-x} dapat diperoleh

\begin{equation}\label{eqn-parabolic-motion-y-x}
\begin{array}{rcl}
x & = & x_0 + v_{0x} t \newline
\displaystyle \left( \frac{x - x_0}{v_{0x}} \right) & = & t, \newline
y & = & y_0 + v_{0y} t - \tfrac12 gt^2 \newline
& = & \displaystyle y_0 + v_{0y} \left( \frac{x - x_0}{v_{0x}} \right) - \tfrac12 g \left( \frac{x - x_0}{v_{0x}} \right)^2 \newline
& = & \displaystyle y_0 + \frac{v_{0y}}{v_{0x}}(x - x_0) - \frac{g}{2 v_{0x}^2}(x^2 - 2x_0x + x_0^2) \newline
& = & \displaystyle \left( -\frac{g}{2 v_{0x}^2} \right) x^2 + \left( \frac{v_{0y}}{v_{0x}} + \frac{g x_0}{v_{0x}^2} \right) x \newline
&& \displaystyle + \left( y_0 - \frac{v_{0y} x_0}{v_{0x}} - \frac{g x_0^2}{2 v_{0x}^2} \right)
\end{array}
\end{equation}

yang merupakan persamaan untuk menggambarkan kurva berwarna merah pada Gambar [2](#fig2) (i). Atau dapat lebih sederhana dituliskan dalam bentuk

\begin{equation}\label{eqn-parabolic-motion-y-x-c210}
y = c_2 x^2 + c_1 x + c_0,
\end{equation}

dengan

\begin{equation}\label{eqn-parabolic-motion-c2}
c_2 = -\frac{g}{2 v_{0x}^2},
\end{equation}

\begin{equation}\label{eqn-parabolic-motion-c1}
c_1 = \frac{v_{0y}}{v_{0x}} + \frac{g x_0}{v_{0x}^2},
\end{equation}

\begin{equation}\label{eqn-parabolic-motion-c0}
c_0 = y_0 - \frac{v_{0y} x_0}{v_{0x}} - \frac{g x_0^2}{2 v_{0x}^2}.
\end{equation}

Dengan menggunakan Persamaan \eqref{eqn-parabolic-motion-y-x-c210} dan parameternya pada Persamaan \eqref{eqn-parabolic-motion-c2} - \eqref{eqn-parabolic-motion-c0} dapat dibuat kurva seperti ilustrasi pada Gambar [2](#fig2), sebagaimana disajikan dalam Gambar [3](#fig3) berikut.

![]({{ site.baseurl }}/assets/img/0/07/0070-c.png) \
Gambar <a name="fig3">3</a>. Kurva gerak parabola dengan $x_0 = y_0 = 0$, $v_{0x} = 30$, $v_{0y} = 40$, dan $g = 10$.

Digambarkan pula vektor-vektor posisi saat $t = 5$ (jingga), $t = 6$ (hijau), dan $t = 7$ (ungu) pada Gambar [3](#fig3).


## displacement (wave)
Perpindahan atau simpangan gelombang, yang berasal dari suatu sumber gelombang ke-$n$ yang terletak pada $\vec{r}_n$, pada suatu titik tertentu $\vec{r}$ diberikan oleh

\begin{equation}\label{eqn-wave-displacement}
y_n(\vec{r}, t) = A_n \sin \left[\vec{k}_n\cdot(\vec{r} - \vec{r}_n) - \omega_n t + \varphi_n \right]
\end{equation}

untuk setiap waktu $t$, dengan $A$ amplitudo, $k$ bilangan gelombang, $\omega$ frekuensi angular, dan $\varphi$ fasa awal. Bila terdapat lebih dari satu gelombang pada titik $\vec{r}$, maka superposisinya adalah

\begin{equation}\label{eqn-wave-displacement-superposition}
y(\vec{r}, t) = \sum_{n = 0}^N y_n(\vec{r}, t),
\end{equation}

dengan $N$ adalah jumlah gelombang dari masing-masing sumbernya.

![]({{ site.baseurl }}/assets/img/0/07/0070-d.png) \
Gambar <a name="fig4">4</a>. Dua sumber gelombang $S_{\rm A}$ dan $S_{\rm B}$ bersama-sama memberikan kontribusi perpindahan atau simpangan di titik $\rm O$ dan menghasilkan hasil superposisi $y$, dengan kedua sumber memiliki periode osilasi yang sama $T$.

Suatu contoh dengan $N = 2$ diberikan dalam Gambar [4](#fig4) dengan hasil superposisinya adalah perpindahan atau simpangan $y$ yang merupakan kontribusi dari gelombang yang berasal dari kedua sumber $S_{\rm A}$ dan $S_{\rm B}$. Untuk gelombang bunyi simpangannya berupa perbedaan tekanan udara dengan tekanan udara lingkungan dan untuk cahaya berupa amplitudo yang kuadratnya sebanding dengan intensitas (terang-gelap).


## molecular orbital
Menurut prinsip superposisi, untuk suatu molekul diatomik homonuklir fungsi gelombangnya $\Psi$ dapat dibentuk sebagai kombinasi linier dari tiga fungsi gelombang

\begin{equation}\label{eqn-quantum-ao-diatomic}
\Psi = c_A \Psi_A + c_B \Psi_B + c_{ij} \Psi_{ij},
\end{equation}

dengan $\Psi_A$ dan $\Psi_B$ adalah fungsi gelombang total dari kedua atom netral yang masih terpisahkan, $\Psi_{ij}$ adalah fungsi gelombang total dari atom yang telah tergabungkan [[8](#r08)].

![]({{ site.baseurl }}/assets/img/0/07/0070-e.png) \
Gambar <a name="fig5">5</a>. Ilustrasi superposisi dari tiga buah orbital atom (AO) membentuk satu orbital molekul (MO) untuk molekul diatomik homonuklir.

Selain itu, kombinasi linier orbital atom (LCAO) $\chi_r$ yang membentuk orbital molekul (MO) $\phi_i$ berbentuk

\begin{equation}\label{eqn-quantum-lcao-mo}
\phi_i = \sum_r c_{ri} \chi_r
\end{equation}

adalah suatu superposisi quantum dari AO [[9](#r09)]. Pada Persamaan \eqref{eqn-quantum-lcao-mo} belum terdapat suku terakhir dalam Persamaan \eqref{eqn-quantum-ao-diatomic}.


## exer
1. Tentukan bentuk lintasan dari superposisi GLBB pada arah $x$ dan GLBB pada arah $y$.
2. Terdapat lintasan dengan nama khusus untuk superposisi fungsi sinus pada arah $x$ dan $y$, dengan masing-masing dapat memiliki frekuensi dan fasa awal yang berbeda. Apakah namanya?
3. Pada alat pemilih kecepatan partikel bermuatan, gaya-gaya apa yang saling bersuperposisi sehingg dapat membuat partikel bergerak lurus?


## note
1. <a name="r01"></a>Donald E. Simanek, "Galileo's law of inertia and his method of superposition" in A brief course in classical mechanics, Feb 2005, url <https://www.lockhaven.edu/~dsimanek/ideas/kinemat.htm> [20211027].
2. <a name="r02"></a>Wikipedia contributors, "Superposition principle", Wikipedia, The Free Encyclopedia, 9 October 2021, 09:40 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1049012741> [20211027].
3. <a name="r03"></a>Paul Boynton, "Lecture 9 Projectile and Relative Motion rojectile and Relative Motion Review" in Physics 114A Introduction to Mechanics (without calculus), Department of Physics, University of Washington, 22 Jan 2008, url <http://faculty.washington.edu/boynton/114AWinter08/LectureNotes/Le9.pdf> [20211027].
4. <a name="r04"></a>"Shoot the Monkey", Harvard Natural Sciences Lecture Demonstrations, 2021, url <https://sciencedemonstrations.fas.harvard.edu/presentations/shoot-monkey> [20211027].
5. <a name="r05"></a>Lisa Jardine-Wright, Mark Warner (co-founders), "Superposition", Isaac Physics, Department for Education, University of Cambridge, url <https://isaacphysics.org/concepts/cp_superposition> [20211027].
6. <a name="r06"></a>Andrew Zimmerman Jones, "Interference, Diffraction & the Principle of Superposition", ThoughtCo, 31 Jan 2019, url <https://www.thoughtco.com/x-2699048> [20211027].
7. <a name="r07"></a>Wendell Potter, David Webb, et al., "Superposition Overview and Basics", University of California Davis, LibreTexts, 6 May 2020, url <https://phys.libretexts.org/Courses/University_of_California_Davis/UCD%3A_Physics_7C_-_General_Physics/08._Waves/8.2%3A_Wave_Interference_and_Superposition/1._Superposition_Overview_and_Basics> [20211027].
8. <a name="r08"></a>A. V. Mitin, V. A. Bityurin, A. N. Bocharov, "Investigation of LCAO approximation for diatomic molecules in Hartree-Fock method", Journal of Physics: Conference Series, vol. 1698, no. 1., p. 012033, Dec 2020, url <https://doi.org/10.1088/1742-6596/1698/1/012033>.
9. <a name="r09"></a>Wikipedia contributors, "Linear combination of atomic orbitals", Wikipedia, The Free Encyclopedia, 24 May 2021, 13:34 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1024863386> [20211027].


## &nbsp;
[uniform linear motion](0063.html) &bull; [nonuniform linear motion](0063.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Garis lurus; &nbsp; 2) Pola-pola Lissajous; &nbsp; 3) Gaya listrik dan magnetik; &nbsp;
</ans>
