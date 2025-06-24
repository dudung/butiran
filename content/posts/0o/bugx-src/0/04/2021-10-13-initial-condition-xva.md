---
layout: butir
authors: [viridi]
title: initial condition xva
permalink: pages/0042
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "position", "velocity", "acceleration", "initial condition", "xva"]
date: 2021-10-13 20:29:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/04/2021-10-13-initial-condition-xva.md
twitter_username: 6unpnp
nodes: []
---
Dalam menerapkan hukum II Newton, yang umumnya merupakan persamaan diferensial, perlu dinyatakan syarat awal berupa kecepatan awal dan posisi awal, di mana permasalahan seperti ini termasuk suatu permasalan nilai awal [[1](#r01)].


## not unique
Pemilihan syarat awal atau IC (initial condition) tidak unik karena, bila sebelumnya telah diketahui fungsinya hanya akan menentukan konstant integrasi, misalnya

$$
\int 2x \ dx = x^2 + C,
$$

di mana IC akan menentukan nilai C ini. Misalkan terdapat fungsi posisi partikel setiap saat

$$
x = t^2 - 4,
$$

yang akan memberikan bahwa $x(0) = -4$, $x(1) = -3$, dan $x(2) = 0$. Ketiga nilai ini dapat digunakan sebagi syarat awal saat ingin memperoleh solusi fungsi posisi $x$ dari fungsi kecepatan

$$
v = 2t.
$$

Ketiga nilai tersebut akan digunakan dalam ketiga kasus di bawah ini.

### case 1
Dalam kasus ini IC yang diberikan adalah $x(0) = -4$ dengan fungsi kecepatannya adalah $v = 2t$. Dengan demikian

$$
\begin{array}{rcl}
x - x(0) & = & \displaystyle \int_0^t 2t \ dt \newline
& = & \displaystyle \left[ t^2 \right]_0^t \newline
& = & (t^2) - (0^2) \newline
x - x(0) & = & t^2 \newline
x - (-4) & = & t^2 \newline
x & = & t^2 - 4
\end{array}
$$

dapat diperoleh solusinya.

### case 2
Dalam kasus ini IC yang diberikan adalah $x(1) = -3$ dengan fungsi kecepatannya adalah $v = 2t$. Dengan demikian

$$
\begin{array}{rcl}
x - x(1) & = & \displaystyle \int_1^t 2t \ dt \newline
& = & \displaystyle \left[ t^2 \right]_1^t \newline
& = & (t^2) - (1^2) \newline
x - x(1) & = & t^2 - 1 \newline
x - (-3) & = & t^2 - 1 \newline
x & = & t^2 - 4
\end{array}
$$

dapat diperoleh solusinya.

### case 3
Dalam kasus ini IC yang diberikan adalah $x(2) = 0$ dengan fungsi kecepatannya adalah $v = 2t$. Dengan demikian

$$
\begin{array}{rcl}
x - x(2) & = & \displaystyle \int_2^t 2t \ dt \newline
& = & \displaystyle \left[ t^2 \right]_2^t \newline
& = & (t^2) - (2^2) \newline
x - x(2) & = & t^2 - 4 \newline
x - 0 & = & t^2 - 4 \newline
x & = & t^2 - 4
\end{array}
$$

dapat diperoleh solusinya.

Perhatikan bahwa asalkan IC yang diberikan tepat menggambarkan sistemnya, tetap akah diperoleh solusi yang benar. Pada contoh di atas IC ditentukan dari fungsi posisi $x$ yang telah diketahui lebih dulu sehingga hanya untuk memberikan gambaran.


## a &rarr; v &rarr; x
Bila terdapat fungsi percepatan $a$ dan ingin ddiperoleh fungsi kecepatan $v$ dan kemudian fungsi posisi $x$ maka diperlukan dua IC yaitu nilai-nilai $v_0$ dan $x_0$ saat $t_0$. Sebagai contoh, misalkan terdapat

$$
a = -10
$$

dan $t_0 = 1$, $v_0 = v(t_0) = 2$, $x_0 = x(t_0) = 3$. Langkah pertama adalah memperoleh $v$ dari integrasi $a$ terhadap waktu $t$ dan dilanjutkan dengan mencari $x$ dari integral $v$ terhadap waktu $t$. Untuk langkah pertama

$$
\begin{array}{rcl}
v - v(t_0) & = & \displaystyle \int_{t_0}^t a \ dt \newline
v - v(1) & = & \displaystyle \int_1^t (-10) \ dt \newline
& = & \displaystyle (-10) \left[ t \right]_1^t \newline
& = & \displaystyle (-10) \left[ (t) - (1) \right] \newline
& = & -10t + 10 \newline
v - 2 & = & -10t + 10 \newline
v & = & -10t + 12
\end{array}
$$

akan diperoleh fungsi kecepatan. Selanjutnya adalah langkah kedua dengan memanfaatkan fungsi kecepatan yang baru saja diperoleh, yang akan memberikan

$$
\begin{array}{rcl}
x - x(t_0) & = & \displaystyle \int_{t_0}^t v \ dt \newline
x - x(1) & = & \displaystyle \int_1^t (-10t + 12) \ dt \newline
& = & \displaystyle \left[ -5t^2 + 12t \right]_1^t \newline
& = & (-5t^2 + 12t) - (-5 \cdot 1^2 + 12 \cdot 1) \newline
& = & (-5t^2 + 12t) - (-5 + 12) \newline
& = & -5t^2 + 12t - 7 \newline
x - 3 & = & -5t^2 + 12t - 7 \newline
x & = & -5t^2 + 12t - 4
\end{array}
$$

yang merupakan fungsi posisi. Dengan demikian dapat diresumekan

$$
\begin{array}{rcl}
a & = & -10, \newline
v & = & -10t + 12, \newline
x & = & -5t^2 + 12t - 4,
\end{array}
$$


bila $v(1) = 2$ dan $x(1) = 3$. Dengan melakukan diferensial terhadap waktu $t$ pada $x$ akan diperoleh $v$, dan saat diterapkan pada $v$ akan diperoleh $a$. Langkah terakhir ini adalah hanya sekedar untuk memastikan bahwa solusi yang diperoleh sesuai dengan fungsi percepatan yang diberikan.


## note
1. <a name="r01"></a>Birne Binegar, "Lecture 7: Constant of Integration and Initial Conditions", Math 2233 Differential Equations, Spring 1999, p. 29, url <http://lie.math.okstate.edu/~binegar/2233/2233-l07.pdf> [20211013].


## &nbsp;
[position](0030.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
