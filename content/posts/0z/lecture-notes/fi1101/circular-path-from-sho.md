---
title: "circular path from sho"
date: 2023-06-24T20:45:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi1101']
draft: false
math: true
url: "0001"
---
Lintasan melingkar adalah bentuk lintasan yang dilalui oleh benda yang bergerak melingkar ([Byju's, 2023](https://byjus.com/jee/circular-motion/)). Terdapat berbagai bentuk bangun datar ([Utami & Nailufar, 2022](https://www.kompas.com/skola/read/2021/01/22/192636669/ciri-ciri-dan-sifat-bangun-datar)), yang salah satunya adalah lingkaran. Lintasan melingkar merupakan kurva yang melingkupi lingkaran. Kurva ini dapat dinyatakan dengan beberapa bentuk persamaan lingkaran ([Turito, 2022](https://www.turito.com/blog/one-on-one-online-tutoring/equation-of-a-circle)). Selain terkait dengan kinematika gerak melingkar ([Wikipedia, 2023](https://en.wikipedia.org/w/index.php?oldid=1160541978)), lintasan melingkar yang merupakan bagian dari pola-pola Lissajous, dapat pula diperoleh dari superposisi dua gerak harmonis sederhana ([Electrical4U, 2020](https://www.electrical4u.com/lissajous-patterns-of-cro/)). Bagaimana lintasan berbentuk lingkaran dapat diperoleh dari gerak harmonis sederhana (GHS) atau simple harmonic motion (SHO) akan disinggung di sini.


## simple harmonic motion
Secara umum suatu GHS dapat dinyatakan dengan

$$
\psi = A \sin (\omega t + \phi) + c,
$$

dengan $\psi$ adalah suatu besaran yang nilai maksimumnya atau amplitudonya adalah $A$, $\omega$ adalah frekuensi angular, $t$ adalah waktu, dan $\phi$ adalah fasa awal, serta $c$ adalah titik kesetimbangan atau nilai rata-rata $\psi$.

Untuk dapat menggambarkan lintasan melingkar pada bidang $xy$ diperlukan dua GHS, masing-masing pada arah $x$ dan $y$, yang dapat dituliskan dalam bentuk

$$\tag{1}
x = A_x \sin (\omega_x t + \phi_x) + x_c
$$

dan

$$\tag{2}
y = A_y \sin (\omega_y t + \phi_y) + y_c
$$

di mana $x$ dan $y$ masing-masing menyatakan posisi pada arah $x$ dan $y$.

Persamaan (1) dan (2) dapat pula dipandang sebagai fungsi-fungsi parametrik untuk sebuah lingkaran ([Glen, 2023](https://www.statisticshowto.com/parametric-function/)), karena keduanya dinyatakan dalam sebuah parameter, yang dalam hal ini adalah $t$.


## equations of a circle
Terdapat berbagai bentuk persamaan yang menyatakan suatu lingkaran ([Pierce, 2022](https://www.mathsisfun.com/algebra/circle-equations.html)), yaitu bentuk standar

$$\tag{3}
(x - x_c)^2 + (y - y_c) = R^2
$$

dan bentuk umum

$$\tag{4}
x^2 + y^2 + Ax + Bx + C = 0.
$$

Persamaan (3) dapat diubah ke Persamaan (4) dan sebaliknya.


## pythagorean identity
Dari identitas-indentitas trigonometri dapat dituliskan

$$\tag{5}
\sin^2 z + \cos^2 z = 1,
$$

yang merupakan salah satu dari identitas Pythagorean ([Stapel, 2023](https://www.purplemath.com/modules/idents.htm)).


## parametric equations to an equation of a circle
Persamaan (1) dan (2) dapat dituliskan kembali menjadi

$$\tag{6}
\left( \frac{x - x_c}{A_x} \right) = \sin (\omega_x t + \phi_x)
$$

dan

$$\tag{7}
\left( \frac{y - y_c}{A_y} \right) = \sin (\omega_y t + \phi_y).
$$

Dengan memilih $A_x = A_y = R$, $\omega_x = \omega_y = \omega$, $\phi_x = \frac12\pi$, dan $\phi_y = 0$, maka kedua Persamaan (6) dan (7) akan menjadi

$$\tag{8}
\left( \frac{x - x_c}{R} \right) = \cos \omega t
$$

dan

$$\tag{9}
\left( \frac{y - y_c}{R} \right) = \sin \omega t.
$$

Selanjutnya dengan menggunakan Persamaan (5), penjumlahan kuadrat dari masing-masing Persamaan (8) dan (9) akan memberikan

$$\tag{10}
\left( \frac{x - x_c}{R} \right)^2 + \left( \frac{y - y_c}{R} \right)^2 = 1, 
$$

yang apabila kedua ruas dikalikan dengan $R^2$ akan menghasilkan


$$
(x - x_c)^2 + (y - y_c) = R^2,
$$

yang merupakan bentuk umum dari persamaan lingkaran pada Persamaan (3).


## plot of trajectory
Untuk menggambarkan lintasan melingkar menggunakan Python perlu terlebih dahulu didefinisikan besaran-besaran angular yang melibatkan nilai $\pi$. Untuk itu diperlukan modul bulit-in `math`, dengan penggunaannya adalah sebagai berikut ini.

```python
import math

T = 1
Nt = 100
dt = T / Nt
omega = 2 * math.pi / T

xc = 1
yc = 3
R = 2
Ax = R
Ay = R
omegax = omega
omegay = omega

phix = 0.5 * math.pi
phiy = 0

```

Selanjutnya adalah membuat titik-titik data untuk digambarkan. Salah satu caranya adalah menggunakan fitur list comprehension dalam Python seperti di bawah ini.

```python
t = [i * dt for i in range(Nt+1)]
x = [Ax * math.sin(omegax * i + phix) + xc for i in t]
y = [Ay * math.sin(omegax * i + phiy) + yc for i in t]
```

Data yang dibuat di atas kemudian digambarkan dengan bantuan fungsi `pyplot` dalam paket `matplotlib` yang digunakan seperti disajikan di bawah ini.

```python
import matplotlib.pyplot as plt

plt.plot(x, y, 'r-')
plt.grid()
plt.xlabel('x')
plt.ylabel('y')
plt.show()
```

Eksekusi ketiga bagian kode yang diberikan di atas akan menghasilkan lintasan melingkar seperti pada Gambar 1.

{{< svg "img/parametrics_circle.svg" >}}

Gambar 1. Lingkaran dengan persamaan $(x-1)^2 + (y-3)^2 = 4$.

Pusat lingkaran pada Gambar 1 adalah $(1,3)$ dengan jari-jari $R = 2$ sebagaimana diberikan dalam bagian pertama kode yang disertakan, yaitu `xc = 1`, `yc = 3`, dan `R = 2`.


## questions
1. Apa topik dalam kinematika yang membuat benda bergerak menempuh lintasan melingkar?
2. Terkait dengan hukum II Newton, apa konsep gaya yang menyebabkan benda bergerak menempuh lintasan melingkar?
3. Terkait dengan konsep gaya yang ditanyakan sebelumnya, gaya-gaya apa saja yang dapat membuat benda bergerak menenempuh lintasan melingkar?
4. Pada sebuah benda yang bergerak di atas lantai mendatar kasar, gaya apa yang membuatnya selalu membelok sehingga bergerak menempuh lintasan melingkar?
5. Apakah lintasan melingkar dapat digambarkan dengan lansung menggunakan Persamaan (3) atau (4)? Bila ya, tunjukkan caranya.
6. Dalam implementasinya, mana yang lebih mudah digunakan untuk menggambarkan lintasan melingkar, Persaman (1) dan (2) dengan parameter tertentu atau Persamaan (3)? Jelaskan alasannya.
7. Apakah data `x` dan `y` dalam kode di atas dapat dihasilkan tanpa menggunakan fitur list comprehension dalam Python? Berikan contoh implementasinya.
