---
layout: butir
authors: [viridi]
title: kinematics equations 1d
permalink: pages/0060
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "equations"]
date: 2021-10-23 20:39:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/06/2021-10-23-kinematics-equations-1d.md
twitter_username: 6unpnp
nodes: []
---
Terdapat persamaan-persamaan kinematika yang berjumlah tiga [[1](#r01)], empat [[2](#r02), [3](#r03), [4](#r04)], atau lima [[5](#r05)] yang mengatikan lima variabel kinematika [[6](#r06), [7](#r07)]. Persamaan-persamaan ini dibatasi untuk digunakan hanya pada kasus gerak lurus dalam 1d dengan percepatan tetap.


## kinematic variables
Terdapat lima variabel kinematik yaitu perpindahan $\Delta x$, kecepatan awal $v_0$, kecepatan $v$, percepatan $a$, dan selang waktu $t$. Selang waktu sebenarnya lebih tepat dinyatakan dengan $\Delta t$ akan tetapi formula kinematika telah umum hanya menggunakan dan juga dengan alasan lebih jelas serta sederhana [[6](#r06)].

Bila ingin lebih detil sebenarnya perpindahan $\Delta t$ dapat diuraikan lagi menjadi posisi awal $x_0$ dan posisi $x$, serta selang waktu $\Delta t$ dapat diuraikan lagi menjadi waktu awal $t_0$ dan waktu $t$. Akan disampaikan kelebihan dan kekurangan pengunaan $\Delta x$ dan $\Delta t$ dibandingkan dengan $x$, $x_0$ dan $t$, $t_0$.


## equations
Ketiga, keempat, atau kelima persamaan yang dimaksud adalah sebagai berikut ini

\begin{equation}\label{eqn-kineq-1}
v = v_0 + at,
\end{equation}

\begin{equation}\label{eqn-kineq-2}
\Delta x = \tfrac12 (v_0 + v) \ t,
\end{equation}

\begin{equation}\label{eqn-kineq-3}
\Delta x = v_0 t + \tfrac12 a t^2,
\end{equation}

\begin{equation}\label{eqn-kineq-4}
v^2 = v_0^2 + 2a \Delta x,
\end{equation}

\begin{equation}\label{eqn-kineq-5}
\Delta x = vt - \tfrac12 a t^2.
\end{equation}

Ada pula yang menggunakan $s$ sebagai $\Delta x$. Pada setiap Persamaan \eqref{eqn-kineq-1} - \eqref{eqn-kineq-5} terdapat variabel yang tidak perlu diketahui dalam menghitung variabel yang terdapat dalam persamaan-persamaan tersebut.

Tabel <a name="tab1">1</a>. Persamaan-persamaan kinematika dan variabel yang tidak perlu diketahui ($\require{cancel}\xcancel{U}$).

No | Persamaan | $\xcancel{U}$
:- | :- | :- | :- | :-
$1$ | $v = v_0 + at$ | $\Delta x$
$2$ | $\Delta x = \tfrac12 (v_0 + v) \ t$ | $a$
$3$ | $\Delta x = v_0 t + \tfrac12 a t^2$ | $v$
$4$ | $v^2 = v_0^2 + 2a \Delta x$ | $t$
$5$ | $\Delta x = vt - \tfrac12 a t^2$ | $v_0$

Dapat terlihat dari Tabel [1](#tab1) bahwa pada masaing-masing persamaan terdapat satu variabel yang tidak perlu diketetahui $\xcancel{U}$


## flexible forms
Persamaan \eqref{eqn-kineq-1} - \eqref{eqn-kineq-5} dapat dituliskan dalam bentuk yang lebih fleksibel seperti

\begin{equation}\label{eqn-kineq-1a}
v_2 = v_1 + a(t_2 - t_1),
\end{equation}

\begin{equation}\label{eqn-kineq-2a}
x_2 - x_1 = \tfrac12 (v_1 + v_2) \ (t_2 - t_1),
\end{equation}

\begin{equation}\label{eqn-kineq-3a}
x_2 - x_1 = v_1 (t_2 - t_1) + \tfrac12 a (t_2 - t_1)^2,
\end{equation}

\begin{equation}\label{eqn-kineq-4a}
v_2^2 = v_1^2 + 2a (x_2 - x_1),
\end{equation}

\begin{equation}\label{eqn-kineq-5a}
x_2 - x_1 = v_2 (t_2 - t_1) - \tfrac12 a (t_2 - t_1)^2.
\end{equation}

Persamaan \eqref{eqn-kineq-1a} - \eqref{eqn-kineq-5a} akan kembali menjadi Persamaan \eqref{eqn-kineq-1} - \eqref{eqn-kineq-5} bila $x_2 - x_1 \equiv \Delta x$, $t_2 - t_1 \equiv \Delta t \equiv t$, $v_2 \equiv v$, $v_1 \equiv v_0$.

Kekurangan bentuk Persamaan \eqref{eqn-kineq-1a} - \eqref{eqn-kineq-5a} dibandingkan Persamaan \eqref{eqn-kineq-1} - \eqref{eqn-kineq-5} adalah lebih kompleks dalam penulisannya dan jumlah variabel yang terlibat menjadi tujuh dari yang semula hanya lima buah. Sedangkan kelebihannya adalah dapat mengakomodasi posisi akhir $x_2$ bila diketahui posisi awal $x_1$ atau sebaliknya, waktu awal tidak harus nol, dan terlihat konsisten antara variabel pada keadaan awal (indeks $1$) dan variabel pada keadaan akhir (indeks $2$).


## unnecessary dx
Bila $\Delta x$ tidak perlu diketahui maka digunakan Persamaan \eqref{eqn-kineq-1} atau \eqref{eqn-kineq-1a}.

Sebuah benda bergerak dengan kecepatan $2 \ \rm m/s$ saat waktu menunjukkan $1 \ \rm s$, tentukanlah kecepatan benda saat waktu $4 \ \rm s$ bila percepatan benda adalah $5 \ \rm m/s^2$.

Dengan menggunakan Persamaan \eqref{eqn-kineq-1} informasi yang dapat diperoleh dari soal adalah

$$
\begin{array}{l}
v_0 = 2, \newline
t \equiv \Delta t = 4 - 1 = 3, \newline
a = 5,
\end{array}
$$

dan yang ditanya adalah $v$ sehingga

$$
\begin{array}{rcl}
v & = & v_0 + at \newline
& = & 2 + 5 \cdot 3 \newline
& = & 2 + 15 \newline
& = & 17.
\end{array}
$$

Sedangkan informasi yang diperoleh dari soal bila menggunakan Persamaan \eqref{eqn-kineq-1a} adalah

$$
\begin{array}{l}
v_1 = 2, \newline
t_1 = 1, \newline
t_2 = 4, \newline
a = 5,
\end{array}
$$

dan ditanya $v_2$

$$
\begin{array}{rcl}
v_2 & = & v_1 + a (t_2 - t_1) \newline
& = & 2 + 5 \cdot (4 - 1) \newline
& = & 2 + 5 \cdot 3 \newline
& = & 2 + 15 \newline
& = & 17.
\end{array}
$$

Hasil yang diperoleh adalah sama. Cara pertama dengan Persamaan \eqref{eqn-kineq-1} memerlukan perhitungan tersirat untuk memperoleh $\Delta t \equiv t$, sedangkan cara kedua dengan Persamaan \eqref{eqn-kineq-1} tidak memerlukan langkah ini.

Pada persamaan yang sedang dibahas ini terdapat empat variabel ($v_0$, $v$, $a$, $t$) sehingga untuk contoh yang sedang dibahas, dapat dibuat tiga soal lainnya yang menanyakan $v_0$, $a$, dan $t$.


## unnecessary a
Bila $a$ tidak perlu diketahui maka digunakan Persamaan \eqref{eqn-kineq-2} atau \eqref{eqn-kineq-2a}.

Sebuah benda bergerak dengan kecepatan awal $1 \ \rm m/s$ dan kecepatan akhir $5 \ \rm m/s$ selama $4 \ \rm s$ sebagaimana teramati dengan menggunakan radar kecepatan (speed gun). Hitunglah perpindahan yang ditempuh benda selama pengamatan tersebut.

Informasi yang diperoleh dari soal bila menggunakan Persamaan \eqref{eqn-kineq-2} adalah

$$
\begin{array}{l}
v_0 = 1, \newline
v = 5, \newline
t = 4,
\end{array}
$$

sehingga perpindahan benda

$$
\begin{array}{rcl}
\Delta x & = & \frac12 (v_0 + v) t \newline
& = & \frac12 (1 + 5) \cdot 4 \newline
& = & \frac12 \cdot 6 \cdot 4 \newline
& = & 12
\end{array}
$$

dapat diperoleh. Permasalahan ini tidak cocok diselesaikan dengan menggunakan Persamaan \eqref{eqn-kineq-2a} karena informasi yang diberikan kurang, sehingga hanya dapat dituliskan

$$
\begin{array}{l}
v_1 = 1, \newline
v_2 = 5, \newline
t_2 - t_1 = 4,
\end{array}
$$

untuk mencari

$$
\begin{array}{rcl}
x_2 - x_1 & = & \frac12 (v_0 + v) (t_2 - t_1) \newline
& = & \frac12 (1 + 5) \cdot 4 \newline
& = & \frac12 \cdot 6 \cdot 4 \newline
& = & 12,
\end{array}
$$

yang membuatnya terlihat menjadi lebih kompleks dari seharusnya. Untuk contoh seperti ini disarankan menggunakan Persamaan \eqref{eqn-kineq-2} dan sebaiknya bukan \eqref{eqn-kineq-2a}.


## unnecessary v
Bila $v$ tidak perlu diketahui maka digunakan Persamaan \eqref{eqn-kineq-3} atau \eqref{eqn-kineq-3a}.

Sebuah benda dengan percepatan $1 \ \rm m/s^2$ bergerak selama $2 \ \rm s$ dari kecepatan awal $4 \ \rm m/s$. Tentukan posisi akhir benda bila posisi awalnya adalah $5 \ \rm m$.

Persoalan ini lebih sulit diselesaikan dengan Persamaan \eqref{eqn-kineq-3} karena informasi yang dapat diperoleh adalah

$$
\begin{array}{l}
v_0 = 4, \newline
t = 2, \newline
a = 1,
\end{array}
$$

dan hanya akan memperoleh

$$
\begin{array}{rcl}
\Delta x & = & v_0 t + \frac12 a t^2 \newline
& = & 4 \cdot 2 + \frac12 \cdot 1 \cdot 2^2 \newline
& = & 8 + 2 \newline
& = & 10,
\end{array}
$$

yang untuk mendapatkan posisi akhir $x$ perlu dilakukan langkah tambahan

$$
\begin{array}{rcl}
\Delta x & = & x - x_0, \newline
x & = & x_0 + \Delta x \newline
& = & 5 + 10 \newline
& = & 15.
\end{array}
$$

Dengan Persamaan \eqref{eqn-kineq-3a} informasi yang diperoleh adalah

$$
\begin{array}{l}
v_1 = 4, \newline
(t_2 - t_1) = 2, \newline
a = 1, \newline
x_1 = 5,
\end{array}
$$

dan perlu sedikit dilakukan modifikasi sehingga

$$
\begin{array}{rcl}
x_2 - x_1 & = & v_1 (t_2 - t_1) + \frac12 a (t_2 - t_1)^2, \newline
x_2 & = & x_1 + v_1 (t_2 - t_1) + \frac12 a (t_2 - t_1)^2 \newline
& = & 5 + 4 \cdot 2 + \frac12 \cdot 1 \cdot 2^2 \newline
& = & 5 + 8 + 2 \newline
& = & 15,
\end{array}
$$

yang langsung memberikan posisi akhir. Hanya saja dengan langkah kedua ini penulisannya menjadi lebih kompleks dengan suku $(t_2 - t_1)$ alih-alih $t$ yang lebih sederhana. Penulisan dengan mencampur notasi dari Persamaan \eqref{eqn-kineq-3} dan \eqref{eqn-kineq-3a} dapat dilakukan, misalnya

\begin{equation}\label{eqn-kineq-3b}
x_2 = x_1 + v_1 t + \tfrac12 a t^2,
\end{equation}

khusus untuk kasus ini. Bila makna dari masing-masing suku telah dimengerti, mudah untuk memodifikasi persamaan-persamaan kinematika sehingga sesuai dengan kebutuhan.


## unnecessary t
Bila $t$ tidak perlu diketahui maka digunakan Persamaan \eqref{eqn-kineq-4} atau \eqref{eqn-kineq-4a}. Kedua persamaan ini cukup membantu karena terkadang keduanya dilupakan dan dilakukan langkah-langkah yang lebih panjang dengan persamaan-persamaan sebelumnya.

Sebuah benda dengan kecepatan awal $3 \ \rm m/s$ bergerak sejauh $8 \ \rm m$. Bila selama menempuh jarak tersebut percepatan benda adalah $1 \ \rm m/s^2$, hitunglah kecepatan akhir benda.

Dari soal informasi yang diperoleh bila menggunakan Persamaan \eqref{eqn-kineq-3} adalah

$$
\begin{array}{l}
v_0 = 3, \newline
\Delta x = 4, \newline
a = 1,
\end{array}
$$

sehingga dapat diperoleh

$$
\begin{array}{rcl}
v^2 & = & v_0^2 + 2 a \Delta x \newline
& = & 3^2 + 2 \cdot 1 \cdot 8 \newline
& = & 9 + 16 \newline
& = & 25 \newline
v & = & \sqrt{25} \newline
& = & 5.
\end{array}
$$

Dengan Persamaan \eqref{eqn-kineq-3a} informasi yang diperoleh adalah

$$
\begin{array}{l}
v_1 = 3, \newline
x_2 - x_1 = 4, \newline
a = 1,
\end{array}
$$

yang akan memberikan

$$
\begin{array}{rcl}
v_2^2 & = & v_1^2 + 2 a (x_2 - x_1) \newline
& = & 3^2 + 2 \cdot 1 \cdot 8 \newline
& = & 9 + 16 \newline
& = & 25 \newline
v_2 & = & \sqrt{25} \newline
& = & 5.
\end{array}
$$

Cara kedua ini agak sedikit kompleks akan tetapi sia-sia karena suku $(x_2 - x_1)$ tidak memberikan manfaat tambahan.


## unnecessary v0
Bila $v_0$ tidak perlu diketahui maka digunakan Persamaan \eqref{eqn-kineq-5} atau \eqref{eqn-kineq-5a}. Kedua persamaan ini termasuk yang jarang digunakan karena kecepatan awal, yang umumnya telah diketahui, merupakan variabel yang tidak perlu diketahui.


## exer
1. Sebuah benda pada waktu nol memiliki kecepatan awal tertentu sehingga setelah bergerak selama $10 \ \rm s$ kecepatannya menjadi $12 \ \rm  m/s$. Bila percepatan benda adalah $1 \ \rm m/s^2$, tentukanlah kecepatan awal benda.
2. Dengan menggunakan radar kecepatan sebuah benda diamati selama $4 \ \rm s$ yang bergerak dengan kecepatan awal $1 \ \rm m/s$ dan kecepatan akhir $5 \ \rm m/s$. Bila posisi awal benda adalah $8 \ \rm m$, tentukan posisi akhir benda.
3. Selama menempuh perpindahan sebesar $4.5 \ \rm m$ sebuah benda bergerak dengan percepatan $1 \ \rm m/s^2$. Bila kecepatan awal benda adalah $4 \ \rm m/s$, hitunglah kecepatan akhirnya.


## note
1. <a name="r01"></a>Dan Fullerton, "Kinematic Equations" in Honors Physics, APlusPhysics, 2021, url <https://www.aplusphysics.com/courses/honors/kinematics/honors_kineqn.html> [20211023].
2. <a name="r02"></a>Carl R. Nave, "Description of Motion in One Dimension", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/mot.html#c2> [20201023].
3. <a name="r03"></a>-, "Kinematic Equations", PASCO, 2021, url <https://www.pasco.com/products/guides/kinematic-equations> [20211023].
4. <a name="r04"></a>-, "The Kinematic Equations", The Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/1DKin/Lesson-6/Kinematic-Equations> [20211023].
5. <a name="r05"></a>Wikipedia contributors, "Equations of motion", Wikipedia, The Free Encyclopedia, 2 October 2021, 16:14 UTC, <https://en.wikipedia.org/w/index.php?oldid=1047797454> [20211023].
6. <a name="r06"></a>-, "What are the kinematic formulas?", Khan Academy, url <https://www.khanacademy.org/science/physics/one-dimensional-motion/kinematic-formulas/a/what-are-the-kinematic-formulas> [20211023].
7. <a name="r07"></a>-, "Problem-Solving for Basic Kinematics" in Boundless Physics, Lumen Learning, url <https://courses.lumenlearning.com/boundless-physics/chapter/problem-solving-for-basic-kinematics/> [20211023].


## &nbsp;
[position](0030.html) &bull; [velocity](0050.html) &bull; [velocity acceleration](0041.html) &bull; [position velocity](0040.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $2 \ \rm m/s$; &nbsp; 2) $20 \ \rm m$; &nbsp; 3) $5 \ \rm m/s$; &nbsp;
</ans>
