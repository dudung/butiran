---
title: "uniform linear motion"
date: 2023-07-25T20:44:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi1101']
draft: false
math: true
url: "0004"
---
Sebagaimana dapat tergambarkan dari namanya, gerak lurus beraturan atau GLB adalah suatu gerak pada lintasan lurus dengan kecepatan tetap ([Yukimura, 2023](https://www.yukimura-physics.com/en/uniform-linear-motion/)), yang berarti bahwa kecepatan sesaat tidak berubah terhadap waktu ([Phyley, 2022](https://www.phyley.com/uniform-linear-motion)). Sistem pada keadaan ini dapat dicapai bila tidak ada gaya yang bekerja pada pada sistem sebagaimana menurut hukum pertama Newton dan kecepatan awal sistem tidak nol ([Britannica, 2017](https://www.britannica.com/science/linear-motion)). GLB secara umum dapat teramati pada kegiatan sehari-hari seperti kendaraan bergerak, benda di atas ban berjalan, dan lain-lain.


# linear motion
Gerak lurus adalah gerak yang menempuh lintasan berupa garis lurus. Dalam sistem 2-d, lintasannya dapat merupakan garis lurus dengan persamaan 

$$\tag{1}
x = a,
$$

$$\tag{2}
y = b,
$$

atau

$$\tag{3}
y = cx + d.
$$

Di sini, agar lebih sederhana, untuk sementara hanya dibahas gerak pada arah $x$, yang dapat diperluas pada sembarang lintasan lurus, baik dalam sistem 2-d ataupun 3-d.

Gerak yang menempuh lintasan berupa garis lurus, tidak harus merupakan GLB, akan tetapi dapat pula merupakan gerak lurus berubah beraturan (GLBB), gerak osilasi, dan gerak-gerak lainnya.


# equations
Dari empat persamaan kinematika ([Albert, 2022](https://www.albert.io/blog/kinematic-equations/); [Henderson, 2022](https://www.physicsclassroom.com/class/1DKin/Lesson-6/Kinematic-Equations)), hanya terdapat satu persamaan untuk gerak lurus beraturan

$$\tag{4}
(x - x_0) = v \ (t - t_0),
$$

dikarenakan percepatan $a$ bernilai nol. Umumnya dipilih bahwa waktu awal $t_0$ bernilai nol, sehingga persaman sebelumnya menjadi lebih sederhana

$$\tag{5}
x = x_0 + vt,
$$

yang merupakan bentuk yang akrab dikenal.


# graphs
 Dapat digambarkan grafik percepatan $a$, kecepatan $v$, dan posisi $x$ setiap saat $t$ untuk benda yang melakukan GLB.

{{< svg "img/fi1101/0004/a0.svg" >}}
Gambar 1. Percepatan $a = 0$.

{{< svg "img/fi1101/0004/a0-v2.svg" >}}
Gambar 2. Kecepatan  $v = 2$.

{{< svg "img/fi1101/0004/a0-v2-x1.svg" >}}
Gambar 3. Posisi $x = 2t + 1$.


# derivative
Antara posisi dengan kecepatan dan kecepatan dengan percepatan $a$ dapat dihubungkan melalui turunan. Untuk posisi $x$ dan kecepatan $v$ diberikan oleh

$$\tag{6}
v = \frac{dx}{dt}
$$

dan untuk kecepatan $v$ dan percepatan $a$ diberikan oleh

$$\tag{7}
a = \frac{dv}{dt}.
$$

Dari Gambar 1 dapat diperoleh

$$\tag{8}
\begin{array}{rcl}
x & = & 2t + 1 \newline
v & = & \displaystyle \frac{d}{dt} \left(
2t + 1 \right) \newline
& = & 2 \newline
a & = & \displaystyle \frac{d}{dt} \left(
0 \right) \newline
& = & 0,
\end{array}
$$

yang memberikan Gambar 2 dan 1 menggunakan Persamaan (6) dan (7).


# antiderivative
Sebagai proses berlawanan dari mencari turunan, terdapat anti-turunan yang melibatkan integral, yang mengaitkan antara kecepatan dengan percepatan dan posisi dengan kecepatan. Dapat diperoleh kecepatan $v$ dari percepatan $a$

$$\tag{9}
v = \int a \ dt
$$

dan posisi $x$ dari kecepatan $v$

$$\tag{10}
x = \int v \ dt,
$$

yang memerlukan syarat awal $v(t_0)$ untuk Persamaan (9) dan $x(t_0)$ untuk Persamaan (10), di mana umumnya dipilih $t_0 =  0$ untuk memudahkan.

Implementasi Persamaan (9) dengan syarat awal $v(0) = 2$ akan diperoleh

$$\tag{11}
\begin{array}{rcl}
v - v(0) & = & \displaystyle \int_0^t 0 \ dt \newline
v - 2 & = & 0 \newline
v & = & 2,
\end{array}
$$

yang menjelaskan diperolehnya Gambar 2 dari Gambar 1.

Selanjutnya adalah pemanfaatan Persamaan (10) dari hasil Persamaan (11) dengan syarat awal $x(0) = 1$ akan menghasilkan

$$\tag{12}
\begin{array}{rcl}
x - x(0) & = & \displaystyle \int_0^t 2 \ dt \newline
v - 1 & = & 2t \newline
v & = & 2t + 1,
\end{array}
$$

yang menjelaskan diperolehnya Gambar 3 dari Gambar 2.


# more general formulation
Persamaan (9) dan (10) dapat dibuat menjadi lebih general, setelah dilengkapi syarat awalnya, menjadi

$$\tag{13}
v(t) - v(t_0) = \int_{t_0}^t a \ dt
$$

dan

$$\tag{14}
x(t) - x(t_0) = \int_{t_0}^t v \ dt.
$$

Penerapan kedua persamaan terakhir ini akan menghasilkan

$$\tag{15}
v(t) = v(t_0)
$$

dan

$$\tag{16}
x(t) = x(t_0) + v \ (t - t_0).
$$

Dengan $x = x(t)$ dan $x_0 = x(t_0)$ Persamaan (16) akan menjadi Persamaan (4).


## exercises
1. Apakah waktu awal harus menggunakan simbol $t_0$? Dapatkah menggunakan simbol lain seperti $t_i$? Bagaimana dengan $t_n$, dengan $n = 1, 2, 3, \dots$? Bagaimana dengan $t_f$? Adakah arti khusus dari indeks bawah $i$ dan $f$?
2. Sebuah benda titik bergerak dengan kecepatan konstan
$5 \ \rm m/s$. Tentukan fungsi posisi setiap saatnya bila posisi awalnya, saat $t_1 = 0 \ \rm s$, adalah $10 \ \rm m$.
3. Suatu benda berada pada posisi $20 \ \rm m$ saat $t_2 = 2 \ \rm s$. Bila benda tersebut bergerak dengan kecepatan tetap $5 \ \rm m/s$, tentukan posisi setiap saatnya.
4. Tentukan posisi benda setiap saat bila benda tersebut bergerak dengan kecepatan tetap $5 \ \rm m/s$ dan posisinya saat $t_3 = 5 \ \rm s$ adalah $35 \ \rm m$.
5. Bandingkan rumusan posisi benda setiap saat pada ketiga problem sebelumnya dan bahas pola yang diperoleh.
6. Tentukan posisi benda $x(t_4)$ dan waktunya $t_4$ sehingga memberikan posisi benda setiap saat yang sama dengan problem sebelumnya.