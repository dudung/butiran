---
layout: butir
authors: [viridi]
title: kinematics 2d
permalink: pages/0080
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "2d"]
date: 2021-10-29 07:57:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/08/2021-10-27-kinematics-2d.md
twitter_username: 6unpnp
nodes: []
---
Gerak dalam 2d melibatkan besaran-besaran vektor seperti perpindahan $x$ dan $y$, kecepatan $v_x$ dan $v_y$, serta percepatan $a_x$ dan $a_y$, di mana pada keadaan umum komponen gerak 2d dapat saling dipisahkan sehingga menghasilkan dua gerak 1d yang tak saling bergantung, yang selanjutnya dipecahkan dengan pengetahuan mengenai kinematika 1d [[1](#r01)]. Yang termasuk dalam kinematika 2d adalah rangkaian beberapa gerak lurus pada arah tegak lurus yang membentuk gerak zigzag, superposisi dua gerak lurus pada arah saling tegak lurus, dan gerak parabola [[2](#r02)], serta ada pula yang menambahkan gerak pada bidang miring dan gerak melingkar [[3](#r03)]. Mungkin pula dapat ditambahkan gerak yang membentuk kurva Lissajous [[4](#r04)].


## formula
Secara umum persamaan untuk posisi yang dapat digunakan adalah sebagai berikut

\begin{equation}\label{eqn-nonuniform-linear-motion-x}
x = x_0 + v_{0x} t + \tfrac12 a_x t^2,
\end{equation}

\begin{equation}\label{eqn-nonuniform-linear-motion-y}
y = y_0 + v_{0y} t + \tfrac12 a_y t^2,
\end{equation}

untuk gerak lurus berubah beraturan (GLBB), di mana untuk gerak lurus beraturan (GLB) dapat diperoleh dengan membuat $a_x$ atau $a_y$ bernilai nol.

Selanjutnya perlu persamaan gerak harmonik sederhana (GHS)

\begin{equation}\label{eqn-simple-harmonic-motion-x}
x = x_c + A_x \sin (\omega_x t + \delta_x),
\end{equation}

\begin{equation}\label{eqn-simple-harmonic-motion-y}
y = y_c + A_y \sin (\omega_y t + \delta_y),
\end{equation}

bila gerak melingkar dan pola Lissajous ikut dipertimbangkan.

Untuk nilai-nilai kecepatan $v_x$ dan $v_y$, serta percepatan $a_x$ dan $a_y$ dapat dicari dengan menggunakan hubungan

\begin{equation}\label{eqn-v-drdt}
v = \frac{dr}{dt}
\end{equation}

dan

\begin{equation}\label{eqn-a-dvdt}
a = \frac{dv}{dt},
\end{equation}

di mana $r$ dapat berupa $x$ atau $y$.


## zigzag motion through the city
Dalam kota untuk mencapai suatu tempat, umumnya tidak dapat dilakukan dengan bergerak lurus, akan tetapi perlu berbelok-belok. Penyederhaan berpindah dari satu tempat ke tempat lain, misalnya tempat tinggal (apartment) ($\rm A$), taman (park) $\rm P$, pertokoan (mall) $\rm M$, ataupun kantor (office) $\rm O$, diilustrasikan pada Gambar [1](#fig1) berikut ini.

![]({{ site.baseurl }}/assets/img/0/08/0080-a.png) \
Gambar <a name="fig1">1</a>. Tiga contoh lintasan zigzag dalam suatu kota, dengan ukuran grid $1 \ {\rm cb} \times 1 \ {\rm cb}$.

Satuan blok dalam kota atau city block ($\rm cb$)  yang berukuran kira-kira $100,584 \ \rm m$ untuk Midwest U.S. [[5](#r05)], yang dapat dibulatkan untuk penyederhaan di sini, misalnya mendekati $100 \ \rm m$.

Dengan kecepatan yang diperbolehkan di dalam hampir banyak kota [[6](#r06)], kendaraan diasumsikan selalu ber-GLB dari satu titik ke titik lainnya dengan laju $10 \ \rm m/s$ dalam area pada Gambar [1](#fig1). Dengan demikian jarak satu blok akan ditempuhnya dalam waktu $10 \ \rm s$. Seseorang yang berada pada perumahan $\rm A_1$ ingin berpiknik di taman tengah kota dengan masuk lewat pintu taman $\rm P_1$. Waktu yang dibutuhkankannya untuk sampai ke tempat tujuan dan fungsi posisinya $x$ dan $y$ setiap saat pun dapat diperoleh.

Dari dapat diperoleh jarak yang ditempuhnya $d$ yaitu $4.5 \ \rm bc$ yang akan menjadi $450 \ \rm m$. Dengan kecepatan yang diasumsikan akan diperoleh

$$
\Delta t = \frac{d}{v} = \frac{450 \ \rm m}{10 \ \rm m/s} = 45 \ \rm s,
$$

yang merupakan waktu dari titik $\rm A_1$ ke titik $\rm P_1$. Selanjutnya

$$
x = \left\{
\begin{array}{ll}
900, & 0 \le t \lt 15, \newline
900 - 10 (t - 15), & 15 \le t \lt 45,
\end{array}
\right.
$$

dan

$$
y = \left\{
\begin{array}{ll}
150 + 10 t, & 0 \le t \lt 15, \newline
300, & 15 \le t \lt 45,
\end{array}
\right.
$$

merupakan fungsi posisinya setiap saat yang berlaku mulai $t = 0 \ \rm s$ sampai $t = 45 \ \rm s$. Dengan Persamaan \eqref{eqn-v-drdt} dapat diperoleh 

$$
v_x = \left\{
\begin{array}{ll}
0, & 0 \le t \lt 15, \newline
-10, & 15 \le t \lt 45,
\end{array}
\right.
$$

dan

$$
v_y = \left\{
\begin{array}{ll}
10, & 0 \le t \lt 15, \newline
0, & 15 \le t \lt 45,
\end{array}
\right.
$$

yang merupakan fungsi kecepatan setiap saatnya. Untuk fungsi percepatannya akan diperoleh nilai nol untuk $0 \le t \lt 45$.


## crossing a river
Menyeberangi sungai menggunakan kapal merupakan salah satu permasalah yang menarik, yang secara prinsip fisika mirip dengan mendaratkan pesawat saat terdapat angin dengan arah tegak lurus arah pendaratan atau crosswind landing [[7](#r07)]. Terdapat perahu (boat) $\rm B$ yang memiliki kecepatan $\vec{v} _{\rm BR}$ relatif terhadap sungai $\rm R$ dan sungai sungai (river) $\rm R$ memiliki kecepatan alirannya $v _{\rm RO}$ relatif terhadap pingir sungai $\rm O$.

![]({{ site.baseurl }}/assets/img/0/07/0070-a.png) \
Gambar <a name="fig2">2</a>. Sebuah perahu $\rm B$ menyeberang tegak lurus arah aliran sungai $\rm R$.

Untuk permasalahan dengan nilai-nilai kecepatan seperti pada Gambar [2](#fig2) dapat dituliskan

\begin{equation}\label{eqn-river-crossing-x}
x = 3t,
\end{equation}

\begin{equation}\label{eqn-river-crossing-y}
y = 4t,
\end{equation}

sebagai fungsi posisi kapal setiap saat dengan mengambil titik $(0, 0)$ pada titik keberangkatan kapal. Atau

\begin{equation}\label{eqn-river-crossing-r}
\vec{r} = 3t \ \hat{x} + 4t \ \hat{y},
\end{equation}

bila ingin dituliskan dalam bentuk vektor.


## parabolic motion
Terdapat 10 [[8](#r08)] sampai 20 [[9](#r09)] contoh penerapan gerak parabola dalam kehidupan sehari-hari. Fungsi posisi setiap saatnya adalah

\begin{equation}\label{eqn-parabolic-motion-x}
x = x_0 + v_0 \cos \theta,
\end{equation}

\begin{equation}\label{eqn-parabolic-motion-y}
y = y_0 + v_0 \sin \theta - \tfrac12 gt^2,
\end{equation}

dengan posisi awal $x_0$, $y_0$,besar kecepatan awal $v_0$, sudut tembak terhadap arah horizontal $\theta$, dan besar percepatan gravitasi $g$. Persamaan \eqref{eqn-parabolic-motion-x} merupakan suatu GLB sedangkan Persamaan \eqref{eqn-parabolic-motion-y} merupakan suatu GLBB.

![]({{ site.baseurl }}/assets/img/0/08/0080-c1.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-c2.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-c3.png)

Gambar <a name="fig3">3</a>. Kurva gerak parabola dengan variasi: posisi awal $x_0$, $y_0$ (kiri), sudut tembak (tengah), dan besar kecepatan (kanan), dengan waktu dibatasi $0 \le t \lt 10$.

Kurva suatu gerak parabola dapat berubah dengan melakukan variasi posisi awal $x_0$ dan atau $y_0$, sudut tembaknya $\theta$, atau besarnya kecepatan tembak $v_0$. Beberapa contoh telah diberikan pada Gambar [3](#fig3).


## motion on an incline
Gerak benda pada bidang miring umumnya diselesaikan dengan gerak 1d karena merupakan suatu GLBB dengan percepatannya sebanding dengan percepatan gravitasi [[10](#r10)], bila sumbu $x$ diambil sejajar permukaan bidang miring dan $y$ tegak lurus permukaan bidang miring. Pada eksperimen juga telah umum besaran kinematika yang diamati adalah pada arah sejajar permukaan bidang miring [[11](#r11)].

![]({{ site.baseurl }}/assets/img/0/08/0080-d.png) \
Gambar <a name="fig4">4</a>. Benda bergerak turun tanpa kecepatan awal di atas bidang miring licin: kerangka acuan dipilih agar benda hanya bergerak 1d (kiri), kerangka acuan membuat gerak benda menjadi 2d (kanan).

Kerangka acuan yang terletak pada bidang miring, $x$ sejajar dan $y$ tegak lurus permukaan, lebih akrab digunakan karena membuat gerak benda menjadi gerak 1-d, sebagaimana disajikan pada Gambar [4](#fig4) (kiri). Gerak hanya terjadi pada arah $x'$ dan benda diam pada arah $y'$. Tanda ' digunakan untuk membedakannya dengan kerangka acuan pada Gambar [4](#fig4) (kanan), yang kerangka acuannya membuat benda bergerak dalam 2d dengan pada masing-masing arah, $x$ dan $y$, terdapat percepatan.

Untuk kerangka acuan $x'y'$ dapat diperoleh bahwa

\begin{equation}\label{eqn-incline-xy-prime-x}
x = \tfrac12 g\sin\theta \ t^2,
\end{equation}

\begin{equation}\label{eqn-incline-xy-prime-y}
y = 0,
\end{equation}

sedangkan untuk kerangka acuan $xy$

\begin{equation}\label{eqn-incline-xy-x}
x = \tfrac12 g\sin\theta \cos\theta \ t^2,
\end{equation}

\begin{equation}\label{eqn-incline-xy-y}
y = 9 - \tfrac12 g\sin\theta \sin\theta \ t^2.
\end{equation}

Dengan memasukkan nilai-nilainya dapat diperoleh tabel berikut.

Tabel <a name="tab1">1</a>. Variabel kinematika untuk kerangka acuan $x'y'$ dan $xy$ bagi benda turun di atas bidang miring licin.

$t$ | $x'$  | $y'$ | $x$   | $y$
:-: | :-:   | :-:  | :-:   | :-:  
$0$ | $0$   | $0$  | $0$   | $9$
$1$ | $3$   | $0$  | $2.4$ | $7.2$
$2$ | $12$  | $0$  | $9.6$ | $1.8$

{% comment %}
0.5 10 0.6 0.8 t^2
2.4 t^2
2.4 0 = 0
2.4 1 = 2.4
2.4 4 = 9.6

9 - 0.5 10 0.6 0.6 t^2
9 - 1.8 t^2
9 - 1.8 0 = 9
9 - 1.8 1 = 7.2
9 - 1.8 4 = 1.8
{% endcomment %}

Pengambaran yang kurang presisi membuat penggambarannya pada Gambar [4](#fig4) kurang cocok dengan nilai-nilai pada Tabel [1](#tab1).

![]({{ site.baseurl }}/assets/img/0/08/0080-e.png) \
Gambar <a name="fig5">5</a>. Dengan kerangka acuan membuat gerak benda menjadi 2d, benda bergerak turun tanpa kecepatan awal di atas bidang miring licin.

Dengan menggunakan aplikasi spreadsheet penggambaran pada Gambar [5](#fig5) dapat dilakukan dengan lebih teliti yang merupakan konfirmasi untuk Tabel [1](#tab1).


## circular motion
Fungsi posisi gerak melingkar dapat dituliskan dalam bentuk

\begin{equation}\label{eqn-circular-motion-x}
x = x_c + A \sin \omega t,
\end{equation}

\begin{equation}\label{eqn-circular-motion-y}
y = y_c + A \sin \omega t,
\end{equation}

yang merupakan gerak 2d. Dengan berpindah dari koordinat kartesian $xy$ ke koordinat polar $r\theta$ fungsi posisinya setiap saatnya menjadi

\begin{equation}\label{eqn-circular-motion-r}
r = A
\end{equation}

sebagai posisi radial yang bernilai konstan dan

\begin{equation}\label{eqn-circular-motion-theta}
\theta = \theta_0 + \omega_0 t + \tfrac12 \alpha^2
\end{equation}

sebagai posisi angularnya, dengan sudut awal $\theta_0$, frekuensi angular awal $\omega_0$, dan percepatan angular $\alpha$. Bila $\alpha = 0$ maka $\omega = \omega_0$ untuk setiap saat $t$.

![]({{ site.baseurl }}/assets/img/0/08/0080-f1.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-f2.png)

Gambar <a name="fig6">6</a>. Gerak melingkar beraturan: dalam sistem koordinat kartesian menjadi gerak 2d (kiri) dan dalam sistem koordinat polar menjadi gerak 1d (kanan).

Parameter-parameter $x_c = y_c = 1$, $A = 1$, $T = 20$, $\omega_0 = 0$, $\theta_0 = 0$, $\alpha = 0$ digunakan untuk membuat grafik pada Gambar [6](#fig6). Bila tidak benar-benar diperlukan, disarankan untuk menyederhanakan sistem gerak 2d menjadi sistem gerak 1d sehingga memudahkan pemecahan permasalahan.


## pola lissajous
Lingkaran merupakan salah satu pola Lissajous, yang pola umumnya dapat dibentuk dengan persamaan

\begin{equation}\label{eqn-lissaous-x}
x = A_x \sin (\omega_x t + \phi_x),
\end{equation}

\begin{equation}\label{eqn-lissajous-y}
y = A_y \sin (\omega_y t + \phi_y),
\end{equation}

yang agak mirip dengan Persamaan \eqref{eqn-circular-motion-x} dan {eqn-circular-motion-y}. Nilai $A_x$ dan $A_y$ akan menentukan jarak terjauh pada arah $x$ dan $y$ yang bisa digambarkan, $\omega_x$ dan $\omega_y$ keberulangan terhadap waktu, serta $\phi_x$ dan $\phi_y$ fasa awal atau pergeseran osilasi antar kedua arah, $x$ dan $y$.

$\begin{array}{cc} & \phi_{y-x} \newline \omega_{y/x} & \end{array}$ | $0$ | $\frac14 \pi$ | $\frac12 \pi$ | $\frac34 \pi$ | $\pi$
:-: | :-: | :-: | :-: | :-: | :-:
1.0 | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.0-0.00.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.0-0.25.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.0-0.50.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.0-0.75.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.0-1.00.png)
1.5 | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.5-0.00.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.5-0.25.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.5-0.50.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.5-0.75.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-1.5-1.00.png)
2.0 | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.0-0.00.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.0-0.25.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.0-0.50.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.0-0.75.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.0-1.00.png)
2.5 | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.5-0.00.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.5-0.25.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.5-0.50.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.5-0.75.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-2.5-1.00.png)
3.0 | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-3.0-0.00.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-3.0-0.25.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-3.0-0.50.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-3.0-0.75.png) | ![]({{ site.baseurl }}/assets/img/0/08/0080-g-3.0-1.00.png)

Gambar <a name="fig7">7</a>. Beberapa contoh pola Lissajous dengan variasi nilai $\phi_{y-x}$ dan $\omega_{y/x}$.

Pada Gambar [7](#fig7) terdapat dua parameter yang divariasikan, yaitu

\begin{equation}\label{eqn-lissaous-phi-yx}
\phi_{y-x} = \phi_y - \phi_x, \ \ \ \ \phi_x = 0
\end{equation}

dan

\begin{equation}\label{eqn-lissaous-omega-yx}
\omega_{y/x} = \frac{\omega_y}{\omega_x}.
\end{equation}

Untuk Persamaan \eqref{eqn-lissaous-phi-yx} diperlukan referensi nilai $\phi_x$ sedangkan untuk Persamaan \eqref{eqn-lissaous-omega-yx} tidak diperlukan referensi nilai $\omega_x$.


## exer
1. Bila $y = y_c + A_y \sin (\omega_y t + \delta_y)$, carilah persamaan untuk $v_y$ dan $a_y$.
2. Carilah fungsi posisi setiap saatnya $x$ dan $y$ untuk seseorang yang berangkat dari titik $\rm A_2$ yang merupakan rumahnya ke titik $\rm M_1$ yang merupakan pertokoan.
3. Terdapat kapal yang ingin menyeberang sungai tegak lurus seperti pada Gambar [2](#fig2) akan tetapi dengan kecepatan kapal relatif terhadap sungai adalah $12 \ \rm m/s$ dan kecepatan aliran sungai $5 \ \rm m/s$. Tentukan besar kecepatan kapal terhadap pinggir sungai.
4. Pada suatu gerak parabola diketahui $v_{0x} = 30 \ \rm m/s$, $v_{0y} = 40 \ \rm m/s$, $g = 10 \ \rm m/s^2$. Tentukan posisi horisontal titik tertinggi yang dapat dicapai benda dan waktunya.
5. Kerangka acuan mana yang memudahkan pemecahan masalah pada Gambar [4](#fig4)?
6. Tuliskan hubungan antara $r$ dan $x$, $y$ dalam Gambar [6](#fig6).
7. Tuliskan nilai $\phi_{y-x}$ dan $\omega_{y/x}$ untuk pola Lissajous yang membentuk lingkaran. Gunakan Gambar [7](#fig7) bila dapat membantu.


## note
1. <a name="r01"></a>Michael Richmond, "Kinematics in Two Dimensions", Physics 311 University Physics I, Winter 2001, url <http://spiff.rit.edu/classes/phys311.old/lectures/kine2d/kine2d.html> [20211027].
2. <a name="r02"></a>Paul Peter Urone, Roger Hinrichs, Kim Dirks, Manjula Sharma, "Two-Dimensional Kinematics" in College Physics, OpenStax CNX, 6 Jul 2021, url <https://phys.libretexts.org/@go/page/1423> [20211027].
3. <a name="r03"></a>David Morin, "Kinematics in 2-D (and 3-D)", Problems and Solutions in Introductory Mechanics, Draft version, August 2014, url <https://scholar.harvard.edu/files/david-morin/files/problemschap3.pdf> [20211027].
4. <a name="r04"></a>Wikipedia contributors, "Lissajous curve", Wikipedia, The Free Encyclopedia, 10 June 2021, 12:10 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1027858127 [20211027].
5. <a name="r05"></a>"Convert city block [Midwest U.S.] to meters -
Conversion of Measurement Units", ConvertUnits.com, url <https://www.convertunits.com/from/city+block+[Midwest+U.S.]/to/meters> [20211028].
6. <a name="r06"></a>Wikipedia contributors, "Speed limits by country", Wikipedia, The Free Encyclopedia, 27 October 2021, 16:38 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1052142752> [20211028].
7. <a name="r07"></a>Rhett Allain, "In Physics, Crossing a River Is Just Like Landing a Plane", Wired, 19.09.2017 09:00, url <https://www.wired.com/story/in-physics-crossing-a-river-is-just-like-landing-a-plane/> [20211028].
8. <a name="r08"></a>"10 Projectile Motion Examples in Real Life", StudiosGuy, url <https://studiousguy.com/projectile-motion-examples/> [20211028].
9. <a name="r09"></a>"20 Examples of projectile motion", DewWool, 16 Mar 2021, url <https://dewwool.com/20-examples-of-projectile-motion/> [20211028].
10. <a name="r10"></a>Wolfgang Christian, "Illustration 3.2: Motion on an Incline", Open Source Physics, 2014, url <https://www.compadre.org/osp/EJSS/3921/model3/91.htm> [20211028].
11. <a name="r11"></a>"Motion on an Incline", Vernier, 7 Dec 2019, url <https://www.vernier.com/experiment/phys-am-1_motion-on-an-incline/> [20211028].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [superposition principle](0070.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $v_y = \omega_y A_y \cos (\omega_y t + \delta_y)$, $a_y = -\omega_y^2 A_y \sin (\omega_y t + \delta_y)$; &nbsp; 2) $
x = \left\{
\begin{array}{ll}
150 + 10t, & 0 \le t \lt 5, \newline
200, & 5 \le t \lt 15, \newline
200 + 10(t-15), & 15 \le t \lt 40,
\end{array}
\right.
$, $
y = \left\{
\begin{array}{ll}
0, & 0 \le t \lt 5, \newline
600 - 10(t-5), & 5 \le t \lt 15, \newline
0, & 15 \le t \lt 40,
\end{array}
\right.
$; &nbsp; 3) $13 \ \rm m/s$; &nbsp; 4) $120 \ \rm m$ dan $4 \ \rm s$; &nbsp; 5) kiri; &nbsp; 6) $r = \sqrt{(x - x_c)^2 + (y - y_c)^2}$; &nbsp; 7) $\phi_{y-x} = \frac12 \pi$ dan $\omega_{y/x} = 2$; &nbsp;
</ans>
