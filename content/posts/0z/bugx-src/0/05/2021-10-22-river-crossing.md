---
layout: butir
authors: [viridi]
title: river crossing
permalink: pages/0055
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "velocity", "relative velocity", "river", "crossing"]
date: 2021-10-23 07:36:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/05/2021-10-22-river-crossing.md
twitter_username: 6unpnp
nodes: []
---
Menyeberangi sungai dengan perahu merupakan suatu problem fisika yang menarik untuk dibahas, yang umumnya adalah mencari waktu minimum untuk menyeberang [[1](#r01)], kecepatan perahu menurut kerangka acuan yang diam di pinggir sungai [[2](#r02)], sudut gerak perahu agar dapat menyeberang tegak lurus arah aliran sungai [[3](#r03)], dan jarak sepanjang tepi seberang sungai searah aliran sungai, [[4](#r04)] yang telah pula divisualisasikan [[5](#r05)], bahkan dengan nilai-nilai kecepatan dan sudut gerak perahu yang dapat diubah [[6](#r06)]. Selain itu terdapat pula permasalahan yang melibatkan kecepatan arus sungai yang bergantung posisi sehingga agak tidak nyata [[7](#r07)] dibandingkan dengan kecepatan arus sungai pada umumnya [[8](#r08)]. Kemudian, penyelesaian dengan langkah-langkah terstruktur [[3](#r03)] menggelitik untuk dikaji lebih lanjut dalam mendukung pembelajaran yang lebih efektif dan efisien.


## boat orientation
Penggambaran bagaimana orientasi awal perahu sebelum bergerak dan setelah mencapai seberang sungai perlu untuk diperjelas. Beberapa sumber bahkan tidak merasa perlu membahas hal ini dengan gambar dan cukup dalam bentuk soal [[10](#r10), [11](#r11)], akan tetapi terdapat pula ilustrasi (dan animasi) yang baik [[2](#r02)].

![]({{ site.baseurl }}/assets/img/0/05/0055-a.png) \
Gambar <a name="fig1">1</a>. Saat perahu bergerak dengan $\vec{v} _{\rm BR}$ dan terbawa arus sungai $\vec{v} _{\rm RO}$, orientasi awal perahu terhadap arah aliran sungai $\theta$ tidak berubah: $\frac12 \pi < \theta \le \pi$ (atas), $\theta = \frac12 \pi$ (tengah), $0 \le \theta$ < $\frac12 \pi$ (bawah).

Pada Gambar [1](#fig1) diberikan contoh tiga orientasi awal perahu, di mana keadaan kedua (tengah) dan ketiga (bawah) telah terwakilkan, sedangkan keadaan pertama (atas) masih menggambarkan suatu keadaan khusus. Hal ini karena keadaan terakhir ini bergantung pada komponenen $\vec{v}_{\rm BR}$ pada arah aliran sungai.


## boat velocity
Kecepatan perahu yang diberikan $\vec{v} _{\rm BR}$ adalah kecepatan perahu relatif terhadap sungai $\rm R$, sedangkan kecepatan aliran sungai $\vec{v} _{\rm RO}$ telah dinyatakan relatif terhadap kerangka acuan $\rm O$ yang diam terhadap pinggir sungai. Dengan demikian, kecepatan perahu terhadap kerangka acuan $\rm O$ adalah penjumlahan vektor dari $\vec{v} _{\rm BR}$ dan $\vec{v} _{\rm RO}$

\begin{equation}\label{eqn-vector-addition-relative-velocity}
\vec{v} _{\rm BO} = \vec{v} _{\rm BR} + \vec{v} _{\rm RO},
\end{equation}

dengan

\begin{equation}\label{eqn-magnitude-vector-addition}
\|\vec{v} _{\rm BO}\| = \sqrt{ \|\vec{v} _{\rm BR}\|^2 + \|\vec{v} _{\rm RO}\|^2 },
\end{equation}

adalah besarnya [[2](#r02)]. Umumnya digunakan $\vec{v} _{\rm B} \equiv \vec{v} _{\rm B0}$ dan $\vec{v} _{\rm R} \equiv \vec{v} _{\rm RO}$, dengan tidak menuliskan indeks $\rm O$ bila merupakan kerangka acuan yang diam atau paling umum.

![]({{ site.baseurl }}/assets/img/0/05/0055-b.png) \
Gambar <a name="fig2">2</a>. Lima kemungkinan $\vec{v} _{\rm BR}$ yang akan memberikan $\vec{v} _{\rm BO}$ berbeda untuk $\vec{v} _{\rm RO}$ yang sama.

Lima keadaan pada Gambar [2](#fig2) terkait dengan ilustrasi pada Gambar [1](#fig1) sebelumnya, di mana Gambar [1](#fig1) (atas) lebih dibuat umum menjadi tiga kemungkinan dengan Gambar [2](#fig2) (a), (b), dan (c).


## minimum crossing time
Untuk dapat menyeberangi sungai dengan waktu minimum maka sudut gerak perahu harus tegak lurus dengan arah aliran sungai [[1](#r01)]. Bila perahu memiliki kecepatan relatif terhadap sungai

\begin{equation}\label{eqn-boat-velocity-relative-to-river}
\vec{v} _{\rm BR} = v _{\rm BR} \ ( \cos \alpha \ \hat{x} + \sin \alpha \ \hat{y})
\end{equation}

dan lebar sungai adalah $l_{\rm R}$ maka waktu yang dibutuhkan untuk menyeberang sungai adalah

\begin{equation}\label{eqn-boat-crossing-time}
t _{\rm cross} = \frac{l _{\rm R}}{v _{\rm BR} \ \sin \alpha},
\end{equation}

dengan $\alpha$ adalah orientasi awal perahu terhadap arah aliran sungai, besaran yang ingin divariasikan. Agar Persamaan \eqref{eqn-boat-crossing-time} bernilai minimum maka $\sin \alpha$ dibuat bernilai maksimum, yaitu $1$. Dengan demikian $\alpha = \frac12 \pi$. Nilai ini akan membuat Persamaan \eqref{eqn-boat-velocity-relative-to-river} menjadi

\begin{equation}\label{eqn-boat-velocity-relative-to-river-mininum-time}
\vec{v} _{\rm BR} = v _{\rm BR} \sin \alpha \ \hat{y},
\end{equation}

yang berarah tegak lurus aliran sungai. Dengan demikian waktu menyeberang $t _{\rm cross}$ minimum diperoleh saat perahu memiliki orientasi tegak lurus arah aliran sungai.

![]({{ site.baseurl }}/assets/img/0/05/0055-c.png) \
Gambar <a name="fig3">3</a>. Waktu untuk menyeberangi sungai $t _{\rm cross}$ untuk berbagai nilai orientasi awal perahu $\alpha$ dengan lebar sungai $l _{\rm R} = 100$ dan laju perahu relatif terhadap sungai $v _{\rm BR} = 5$.

Orientasi perahu $\alpha$ yang membuat waktu menyeberang $t _{\rm cross}$ menjadi minimum diberikan pada Gambar [3](#fig3), dengan nilai $\alpha$ dinyatakan dalam satuan $\pi$, e.g. $0.5$ berarti $\frac12 \pi$. Titik minimum diberikan oleh $\alpha = \frac12 \pi$, sebagaimana diprediksi oleh Persamaan \eqref{eqn-boat-crossing-time}.


## downstream distance
Bila perahu bergerak dengan arah awal tegak lurus arah aliran sungai, maka perahu akan tiba di seberang sungai pada suatu titik tertentu dan  bukan pada titik yang lurus dengan titik keberangkatannya melainkan bergeser searah dengan arah aliran sungai (downstream). Jarak antar kedua titik di seberang sungai ini dapat ditentukan bila waktu perahu menyeberang sungai $t _{\rm cross}$ diketahui [[4](#r04)]. Dengan menggunakan informasi dari Persamaan \eqref{eqn-vector-addition-relative-velocity} dan \eqref{eqn-boat-crossing-time}, jarak antar kedua titik di seberang sungai (downstream distance, $d _{\rm downs}$), di mana titik pertama tepat di seberang titik keberangkatan dan titik kedua adalah total jarak perahu terseret oleh arus sungai, diberikan oleh

\begin{equation}\label{eqn-boat-downstream-distance}
d _{\rm downs} = v_x \ t _{\rm cross},
\end{equation}

yang dapat pula dituliskan menjadi

\begin{equation}\label{eqn-boat-downstream-distance-2}
\begin{array}{rcl}
d _{\rm downs} & = & \displaystyle ( v _{\rm BR} \ \cos \alpha + v _{\rm RO} )  \ \frac{l _{\rm R}}{v _{\rm BR} \ \sin \alpha} \newline
& = & \displaystyle \left( \frac{v _{\rm BR} \ \cos \alpha + v _{\rm RO}}{v _{\rm BR} \ \sin \alpha} \right) \ l _{\rm R},
\end{array}
\end{equation}

dengan menggabungkan komponen kecepatan pada arah aliran sungai untuk menggantikan $v_x$.

![]({{ site.baseurl }}/assets/img/0/05/0055-d.png) \
Gambar <a name="fig4">4</a>. Jarak dua titik di seberang sungai $d _{\rm downs}$ terhadap varisi orientasi perahu $\alpha$ untuk  laju perahu terhadap sungai $v _{\rm BR} = 5$, laju arus sungai $v _{\rm RO} = 3$, dan lebar sungai $l _{\rm R} = 100$.

Gambar [4](#fig4) memberikan ilustrasi nilai-nilai jarak antar dua titik di seberang sungai $d _{\rm downs}$ saat orientasi perahu $\alpha$ divariasikan. Nilai-nilai $d _{\rm downs}$ yang ditampilkan masih bergantung pada nilai-nilai parameter berupa laju perahu relatif terhadap sungai $v _{\rm BR}$, lebar sungai $l _{\rm R}$, dan laju aliran sungai $v _{\rm RO}$. Bila nilai-nilai parameter ini diubah maka grafik pada Gambar [4](#fig4) juga akan berubah.


## straight accross the river
Agar perahu dapat selalu bergerak tegak lurus arah aliran sungai, menuju titik di seberang sungai yang persis di atas titik keberangkatannya atau dengan kata lain $d _{\rm downs} = 0$, perahu perlu berangkat dengan sudut tertentu $\alpha$ terhadap arah aliran sungai. Keadaan $d _{\rm downs} = 0$ ini dapat dicapai dengan nilai $\alpha > \frac12 \pi$. Permasalahan ini dapat diselesaikan dengan menggunakan penjumlahan vektor [[3](#r03)] atau kalkulus [[9](#r09)].

![]({{ site.baseurl }}/assets/img/0/05/0055-e.png) \
Gambar <a name="fig5">5</a>. Nilai $d _{\rm downs}$ untuk berbagai nilai $\alpha$ dengan $v _{\rm BR} = 5$, $v _{\rm RO} = 3$, dan $l _{\rm R} = 100$.

Terlihat bahwa untuk kasud dalam Gambar [5](#fig5) agar perahu dapat mencapai titik yang lurus diseberang titik keberangkatannya ($d _{\rm downs} = 0$) diperlukan orientasi perahu $\alpha \approx 0.7 \pi$ atau (b). Secara kasar hal ini tepat, yang secara umum masih bergantung pada nilai-nilai $v _{\rm BR}$, $v _{\rm RO}$, dan $l _{\rm R}$, karena telah terpehuni $\alpha > \frac12 \pi$.


## exer
1. Dengan menggunakan Gambar [5](#fig5) perkirakan nilai $d _{\rm downs}$ untuk $\alpha = \frac14 \pi$.


## note
1. <a name="r01"></a>Jitender Singh, "Relative Velocity and River Boat Problem",  Concepts of Physics, 15 Dec 2019, url <https://www.concepts-of-physics.com/mechanics/relative-velocity-and-river-boat-problem.php> [20211022].
2. <a name="r02"></a>Tom Henderson, "Relative Velocity and Riverboat Problems", The Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/vectors/Lesson-1/Relative-Velocity-and-Riverboat-Problems> [20211022].
3. <a name="r03"></a>Heidi Fencl, "Motion of a Boat in a River", Physics, Unversity of Wisconsin-Green Bay, url <https://www.uwgb.edu/fenclh/problems/definitions/2/> [20211022].
4. <a name="r04"></a>Serife Sarica, "Riverboat Problems with Examples", Physics Tutorial, url <https://www.physicstutorials.org/home/mechanics/1d-kinematics/riverboat-problems> [20211022].
5. <a name="r05"></a>F. McCulley, "River Crossing Problem Level 1", The Physics Aviary, url <https://www.thephysicsaviary.com/Physics/APPrograms/RiverCrossingProblem/index.html> [20211022].
6. <a name="r06"></a>Tom Walsh, "Relative Velocity: Boat Crossing a River", oPhysics: Interactive Physics Simulations, url <https://ophysics.com/k11.html> [20211022].
7. <a name="r07"></a>Lisa Jardine-Wright, Mark Warner (co-founders), "Crossing a River", Isaac Physics, Department for Education, University of Cambridge, url <https://isaacphysics.org/questions/boat_river?stage=all> [20211022].
8. <a name="r08"></a>David Hamburg, "River Velocity Explained: How Fast Do Rivers Flow?", Globo Surf, 18 Dec 2020, url <https://www.globosurfer.com/river-velocity/> [20211021].
9. <a name="r09"></a>Heike, "Answer to 'Vector physics boat problem'", Mathematics Stack Exchange, 23 Oct 2011, url <https://math.stackexchange.com/q/75065> [20211022].
10.  <a name="r10"></a>Mikrajuddin Abdullah, "Fisika Dasar I", Fisika, Institut Teknologi Bandung, Mar 2016, p. 159, url <https://fmipa.itb.ac.id/fisika-dasar-i/> [20211022].
11.  <a name="r11"></a>David Halliday, Robert Resnick, Jearl Walker, "Fundamentals of Physics", Wiley, 10th Edition, Extended Version, Dec 2013, pp. 88-89, url <https://isbnsearch.org/isbn/9781118230725>.


## &nbsp;
[velocity](0050.html) &bull; [vector 2d intro](0013.html) &bull; [relative velocity](0054.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) 184.85, (175, 150-200); &nbsp;
</ans>
