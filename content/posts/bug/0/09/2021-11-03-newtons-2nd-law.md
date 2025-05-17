---
layout: butir
authors: [viridi]
title: newton's 2nd law
permalink: pages/0092
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["dynamics", "newton's law of motion", "second law", "2nd"]
date: 2021-11-05 06:41:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/09/2021-11-03-newtons-2nd-law.md
twitter_username: 6unpnp
nodes: []
---
Hukum II Newton sebenarnya melibatkan hukum I Newton tanpa secara eksplisit dinyatakan, di mana hukum II ini merupakan bentuk yang lebih umumnya dari hukum I [[1](#ref01)]. Salah satu yang sering menjadi sumber permasalah dalam memahami hukum ini adalah suku $F = ma$ dianggap sebagai suatu gaya dan bukan jumlah gaya-gaya [[2](#ref02)].


## original text
Hukum II Newton menyatakan [[3](#ref03), [4](#ref04), [5](#ref05), [6](#ref06)]

> Mutationem motus proportionalem esse vi motrici impressae, et fieri secundum lineam rectam qua vis illa imprimitur.

sebagaimana bersumber dari text aslinya dan terdapat [[7](#ref07)]

> The alteration of motion is ever proportional to the motive force impressed; and is made in the direction of the right line in which that force is impressed.

merupakan terjemahan standar pertama, yang sampai saat ini, di tahun 2021, masih menarik untuk membahas pengubahan terjemahannya [[8](#ref08)].


## common text
Saat ini umumnya hukum II Newton berbunyi [[9](#ref09)]

> A body acted upon by a force moves in such a manner that the time rate of change of momentum equals the force.

yang dapat diterjemahkan menjadi

> Sebuah benda yang karena suatu gaya bergerak sedemikian rupa sehingga laju perubahan momentum terhadap waktu sama dengan gaya.

Pernyataan ini dapat diekspresikan dalam bentuk 

\begin{equation}\label{eqn-newtons-laws-of-motion-2nd}
\vec{F}_{\rm net} = \frac{d\vec{p}}{dt},
\end{equation}

dengan $\vec{F}_{\rm net}$ adalah jumlah semua gaya yang bekerja pada benda, $\vec{p}$ momentum linier, dan $t$ waktu.


## forces
Dengan menggunakan hukum II Newton permasalahan gerak benda secara umum dapat dirumuskan seberapa pun jumlah gaya yang berkerja pada suatu benda, walaupun belum tentu persamaan geraknya dapat dipecahkan.

### gravitational force
Dekat dengan permukaan bumi gaya gravitasi dituliskan sebagai

\begin{equation}\label{eqn-force-gravitational}
\vec{F}_G = m \vec{g},
\end{equation}

dengan $m$ massa dan $\vec{g}$ percepatan gravitas.

### drag force
Benda berbentuk bola yang bergerak dalam fluida akan mengalami gaya gesek berbentuk

\begin{equation}\label{eqn-force-drag}
\vec{F}_D = -6\pi R \eta (\vec{v} - \vec{u}),
\end{equation}

dengan $D$ diameter benda, $\eta$ viskositas fluida, $\vec{v}$ kecepatan benda, dan $\vec{u}$ kecepatan fluida.

### buoyant force
Benda yang tercelup dalam fluida akan mengalami gaya angkat fluida atau gaya Archimedes

\begin{equation}\label{eqn-force-buoyant}
\vec{F}_A = -\rho V \vec{g},
\end{equation}

yang arahnya berlawanan dengan arah gravitasi $\vec{g}$, di mana $\rho$ massa jenis fluida, dan $V$ volume benda yang tercelup dalam fluida.

### electric force
Benda bermuatan akan mengalami gaya listrik

\begin{equation}\label{eqn-force-electric}
\vec{F}_E = q \vec{E},
\end{equation}

dengan $q$ muatan benda dan $\vec{E}$ medan listrik.

### magnetic force
Dalam ruang bermedan magnetik benda bermuatan yang bergerak akan dipengaruhi gaya magnetik berbentuk

\begin{equation}\label{eqn-force-magnetic}
\vec{F}_B = q \vec{v} \times \vec{B},
\end{equation}

dengan $q$ muatan benda, $\vec{v}$ kecepatan benda, dan $\vec{B}$ medan magnetik.

### spring force
Benda yang terikat pegas akan mengalami gaya pegas

\begin{equation}\label{eqn-force-spring}
\vec{F}_S = -k \left( \left| \vec{r} - \vec{o} \right| - L \right) \frac{\vec{r} - \vec{o}}{\left| \vec{r} - \vec{o} \right|},
\end{equation}

dengan $k$ konstanta pegas, $L_0$ panjang normal pegas dan $\vec{o}$ posisi ujung pegas tertambatkan, serta $\vec{r}$ posisi benda.


## a body with many forces
Dalam sebuah sistem, belum tentu sistem seperti ini ada dalam keadaan sebenarnya :grin:, sebuah benda mengalami berbagai gaya seperti pada Gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/09/0092-a.png) \
Gambar <a name="fig1">1</a>. Sebuah benda mengalami berbagai gaya dalam suatu sistem yang dibuat-buat.

Hukum II Newton untuk benda pada Gambar [1](#fig1) adalah

\begin{equation}\label{eqn-force-many-forces}
\begin{array}{rcl}
m \vec{a} & = & \sum \vec{F} \newline
& = & \vec{F}_A + \vec{F}_B + \vec{F}_D + \vec{F}_E + \vec{F}_G + \vec{F}_S \newline
& = & -\rho V \vec{g} + q \vec{v} \times \vec{B} - 6\pi R \eta (\vec{v} - \vec{u}) \newline
&& \displaystyle + q \vec{E} + m \vec{g} - k \left( \left| \vec{r} - \vec{o} \right| - L \right) \frac{\vec{r} - \vec{o}}{\left| \vec{r} - \vec{o} \right|} \newline
\displaystyle m \frac{d^2\vec{r}}{dt^2} & = &  (m -\rho V) \ \vec{g} + q \ (\vec{E} + \vec{v} \times \vec{B}) + 6\pi R \eta \vec{u} \newline
&& \displaystyle - 6\pi R \eta \vec{v} - k \left( \left| \vec{r} - \vec{o} \right| - L \right) \frac{\vec{r} - \vec{o}}{\left| \vec{r} - \vec{o} \right|},
\end{array}
\end{equation}

merupakan suatu persamaan suatu persamaan diferensial orde dua dan non-linier yang (mungkin) dapat dipecahkan. Penulisan Perasamaaan \eqref{eqn-force-many-forces} dapat disederhakanan menjadi

\begin{equation}\label{eqn-force-many-forces-simplified}
\frac{d^2\vec{r}}{dt^2} = \vec{f}_0 + \vec{f}_1(\vec{r}) + \vec{f}_2(\vec{v}),
\end{equation}

dengan menyembunyikan kerumitannya dalam

\begin{equation}\label{eqn-force-many-forces-simplified-f0}
\vec{f}_0 = (m -\rho V) \ \vec{g} + q \ (\vec{E} + \vec{v} \times \vec{B}) + 6\pi R \eta \vec{u},
\end{equation}

yang berupa fungsi konstan,

\begin{equation}\label{eqn-force-many-forces-simplified-f1}
\vec{f}_1(\vec{r}) = -k \left( \left| \vec{r} - \vec{o} \right| - L \right) \frac{\vec{r} - \vec{o}}{\left| \vec{r} - \vec{o} \right|},
\end{equation}

yang merupakan fungsi dari posisi benda $\vec{r}$, dan

\begin{equation}\label{eqn-force-many-forces-simplified-f2}
\vec{f}_2(\vec{v}) = -6\pi R \eta \vec{v},
\end{equation}

yang merupakan fungsi dari kecepatan benda $\vec{v}$.

### k = 0, B = 0
Bila tidak ada pegas berkonstanta $k$ dan medan magnetik $\vec{B}$ maka Persamaan \eqref{eqn-force-many-forces} akan menjadi

\begin{equation}\label{eqn-force-many-forces-k=0-B=0}
m \frac{d\vec{v}}{dt} = \vec{c}_0 + c_1 \vec{v}
\end{equation}

dengan

\begin{equation}\label{eqn-force-many-forces-k=0-B=0-c0}
\vec{c}_0 = \left(1 - \frac{\rho V}{m} \right) \vec{g} + \left( \frac{q}{m} \right) \vec{E} + \left( \frac{6\pi R \eta}{m} \right) \vec{u},
\end{equation}

\begin{equation}\label{eqn-force-many-forces-k=0-B=0-c1}
c_1 = - \frac{6\pi R \eta}{m}.
\end{equation}

Perhatikan bahwa Persamaan \eqref{eqn-force-many-forces-k=0-B=0} merupakan persamaan diferensial orde pertama tidak homogen linier [[10](#ref10)], yang kerumitannya terletak pada konstanta $\vec{c}_0$ saat akan diserap oleh $\vec{v}$, sehingga dapat memberikan persamaan diferensial orde pertama homogen linier [[11](#ref11)], agar lebih mudah dipecahkan.

### numerical solution
Secara umum Persamaan \eqref{eqn-force-many-forces-simplified} dapat dipecahkan dengan menggunakan metode numerik. Salah satu metode yang dapat digunakan adalah metode Euler[[11](#ref11)], yang memungkin Persamaan \eqref{eqn-force-many-forces-simplified} dipecahkan menjadi beberapa baris persamaan numerik

\begin{equation}\label{eqn-force-many-forces-numerical}
\begin{array}{rcl}
\vec{a}_i & = & \vec{f}_0 + \vec{f}_1(\vec{r}_i) + \vec{f}_2(\vec{v}_i), \newline
\vec{v} _{i+1} & = & \vec{v}_i + \vec{a}_i \ \Delta t, \newline
\vec{r} _{i+1} & = & \vec{r}_i + \vec{v}_i \ \Delta t, \newline
t _{i + 1} & = & t_i + \Delta t, \newline
i & = & i + 1,
\end{array}
\end{equation}

yang dimulai dengan $i = 0$ dan syarat awal $\vec{r}_0 = \vec{r}(0)$ dan $\vec{v}_0 = \vec{v}(0)$ serta $t_0 = 0$. Secara iteratif dengan memiliki langkah waktu $\Delta t$ cukup kecil dalam meneksekusi Persaamaan \eqref{eqn-force-many-forces-numerical}, akan diperoleh solusi numerik dari Persamaan \eqref{eqn-force-many-forces-simplified}.


## exer
1. Apakah $F = ma$  merupakan salah satu gaya yang bekerja pada benda?
2. Mengapa dalam membahas sistem pada Gambar [1](#fig1) tidak disinggung mengenai gaya normal?
3. Bila terdapat solusi analitik dari suatu persamaan diferensial, apakah boleh tetap menggunakan metode numerik untuk memecahkan permasalahannya?
4. Kapankah metode Euler akan sama persis dengan solusi analitiknya?
5. Dengan semakin kecil nilai $\Delta t$ umumnya akan diperoleh hasil yang semakin baik. Mengapa tidak digunakan saja nilai yang sekecil mungkin?


## note
1. <a name="r01"></a>Julius O. Smith III, "Physical Audio Signal Processing", W3K Publishing, 2010, online 21 May 2021, url <https://ccrma.stanford.edu/~jos/pasp/Newton_s_Three_Laws_Motion.html> [20211103].
2. <a name="r02"></a>"What is Newton's second Law?", Khan Academi, 2021, url <https://www.khanacademy.org/science/physics/forces-newtons-laws/newtons-laws-of-motion/a/what-is-newtons-second-law> [20211103].
3. <a name="r03"></a>Brian D. Ellis, "Newton's Concept of Motive Force", Journal of the History of Ideas, vol. 23, no. 2, pp. 273-278, Apr-Jun 1962, url <https://doi.org/10.2307/2708161>.
4. <a name="r04"></a>Gary Garber, "Newton’s Second Axiom", Boston University, 26 Sep 2012, url <https://blogs.bu.edu/ggarber/archive/bua-py-25/newtons-second-axiom/> [20211103].
5. <a name="r05"></a>Ed Dellian, "„Mutationem motus proportionalem esse vi motrici impressae“ or: How to Understand Newton’s Second Law of Motion, After All", url <http://www.neutonus-reformatus.de/download/dellian_second_law_of_motion.pdf> [20211103].
6. <a name="r06"></a>Giermin sahagun, "Newton's Second Law", Scribd, url <https://de.scribd.com/document/168109953> [20211103].
7. <a name="r07"></a>Sir Isaac Newton, John Machin, "The Mathematical Principles of Natural Philosophy", translated into English by Andrew Motte, Middle-Temple-Gate, London, 1729, p. 19, url <http://archive.org/details/bub_gb_Tm0FAAAAQAAJ> [20211103].
8. <a name="r08"></a>Ajay Sharma, "Newton’s generalized form of second law gives F =ma", IOSR Journal Of Applied Physics, vol. 13, no. 2, ser. I, pp. 61-138, Mar–Apr 2021, url <https://doi.org/10.9790/4861-13020161138> 
9. <a name="r09"></a>Wikipedia contributors, "Newton's laws of motion", Wikipedia, The Free Encyclopedia, 27 October 2021, 06:01 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1052069527> [20211103].
10. <a name="r10"></a>Carl R. Nave, "First Order Non-homogeneous Differential Equation", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Math/deinhom.html> [20211104].
11. <a name="r11"></a>Carl R. Nave, "First Order Homogeneous DE", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/diff.html#c2> [20211104].
12. <a name="r12"></a>Murray Bourne, "Euler's Method - a numerical solution for Differential Equations", Differential Equations, chap. 11, InMath, 29 Oct 2021, url <https://www.intmath.com/differential-equations/11-eulers-method-des.php> [20211105].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [newton's laws of motion](0090.html) &bull; [newton's 1st law](0091.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $F = ma$ bukanlah salah satu gaya tetapi jumlah semua gaya yang bekerja pada benda; &nbsp; 2) Gaya normal muncul bila dua benda padat bersentuhan &nbsp; 3) Boleh tetapi tidak disarankan; &nbsp; 4) Untuk GLB; &nbsp; 5) Dengan $\Delta t$ yang amat kecil, waktu perhitungan akan semakin lama; &nbsp;
</ans>
