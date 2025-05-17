---
title: "linear interpolation"
date: 2023-08-29T20:07:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0023"
---
Fungsi linier yang dibuat untuk menghubungkan dua buah titik data terdekat akan menyediakan informasi sehingga titik-titik lain di antara kedua titik data tersebut dapat diperoleh menggunakan fungsi tersebut. Hal ini dengan asumsi bahwa hubungan antara variabel bebas dan terikatnya antara kedua titik data bersifat linier.


## range $0$ and $1$
Ilustrasi paling sederhana untuk interpolasi adalah mencari fungsi

$$\tag{1}
f(x) = c_0 + c_1 x, \ \ \ \ 0 \le x \le 1.
$$

Terdapat dua titik data $(0, y_0)$ dan $(1, y_1)$ yang memenuhi

$$\tag{2}
f(0) = y_0, \ \ \ \ f(1) = y_1.
$$

Substitusi Persamaan (2) ke Persamaan (1) akan memberikan

$$\tag{3}
y_0 = c_0
$$

dan

$$\tag{4}
y_1 = c_0 + c_1.
$$

Substitusi Persamaan (3) ke Persamaan (4) akan memberikan

$$\tag{5}
c_1 = y_1 - y_0.
$$

Dengan demikian Persamaan (1) dapat dituliskan kembali menjadi

$$\tag{6}
f(x) = y_0 + (y_1 - y_0) x, \ \ \ \ 0 \le x \le 1.
$$


## range $x_0$ and $x_1$
Rentang $x$ dalam Persamaan (6) dapat diperluas menjadi $x_0$ dan $x_1$ dengan

$$\tag{7}
0 = \frac{x_0 - x_0}{x_1 - x_0}
$$

dan

$$\tag{8}
1 = \frac{x_1 - x_0}{x_1 - x_0},
$$

sehingga dapat memberikan

$$\tag{9}
0 \le \frac{x - x_0}{x_1 - x_0} \le 1
$$

atau

$$\tag{10}
x_0 \le x \le x_1.
$$

Titik data dalam Persamaan (2) perlu dimodifikasi menjadi

$$\tag{11}
f(x_0) = y_0, \ \ \ \ f(x_1) = y_1,
$$

yang apabila disubstitusikan ke Persamaan (1) akan memberikan

$$\tag{12}
y_0 = c_0 + c_1 x_0
$$

dan

$$\tag{13}
y_1 = c_0 + c_1 x_1.
$$

Dari Persamaan (12) dan (13) akan diperoleh

$$\tag{14}
c_1 = \frac{y_1 - y_0}{x_1 - x_0}
$$

dan

$$\tag{15}
c_0 = \tfrac12(y_0 + y_1) - \tfrac12 (x_0 + x_1) c_1.
$$


## range $x_{i}$ and $x_{i+1}$
Dengan menggunakan persamaan-persamaan sebelumnya dapat dituliskan bentuk yang umum, bila terdapat data $(x_i, y_i)$ dan  $(x_{i+1}, y_{i+1})$, dapat diperoleh

$$\tag{16}
c_{1,i} = \frac{y_{i+1} - y_i}{x_{i+1} - x_i}
$$

dan

$$\tag{17}
c_{0,i} = \tfrac12(y_{i+1} + y_i) - \tfrac12 (x_{i+1} + x_i) c_{1,i},
$$

dengan fungsinya adalah

$$\tag{18}
f_i(x) = c_{0,i} + c_{1,i} x, \ \ \ \ x_i \le x \le x_{i+1}.
$$

Perhatikan bahwa bila terdapat $N$ titik data, maka hanya akan terdapat $N-1$ fungsi interpolasi linier sepert yang diberikan dalam Persamaan (17).


## an example
Sebagai contoh dapat dimisalkan terdapat titik-titik data sebagai berikut.

Tabel 1. Titik data $(x_i, y_i)$, $i = 1, .., N$ dengan $N = 5$.

$i$ | $x$ | $y$
:-: | :-: | :-:
1 | 0 | 0
2 | 1 | 1
3 | 2 | 3
4 | 3 | 6
5 | 4 | 10

Dengan menggunakan Persamaan (15) dan (16) dapat diperoleh nilai-nilai $c_1$ dan $c_0$ sebagai berikut.

Tabel 2. Nilai-nilai $c_0$ dan $c_1$ untuk data pada Tabel 1.

$x_i \le x \le x_{i+1}$ | $c_0$ | $c_1$
:-: | :-: | :-:
$0 \le x \le 1$ | $0$ | $1$
$1 \le x \le 2$ | $-1$ | $2$
$2 \le x \le 3$ | $-3$ | $3$
$3 \le x \le 4$ | $-6$ | $4$

Secara sederhana proses untuk memperoleh nilai-nilai $c_0$ dan $c_1$ pada Tabel 1 dapat mengikuti diagram alir berikut, yang merupakan ilustrasi umum dengan detil iterasi untuk setiap titik data tersiratkan dalam beberapa blok.

{{< mermaid align="left" >}}
flowchart TD
  B --> I --> P1 --> o1a
  o1b --> P2 --> O --> E
  B(["Begin"])
  I[/"{(xi, yi) | i = 1 .. N}"/]
  P1["{c0} = f(x, y, N)"]
  o1a(("1"))
  o1b(("1"))
  P2["{c1} = g(x, y, N)"]
  O[/"{c0}, {c1}"/]
  E(["End"])
{{< /mermaid >}}

Gambar 1. Diagram alir untuk menghitung nilai-nilai $c_0$ dan $c_1$ dari $N$ titik data.


## codes
Nilai-nilai $c_0$ dan $c_1$ pada Tabel 2 dapat pula dihitung dengan menggunakan program berikut

```python
x = [0, 1, 2, 3, 4]
y = [0, 1, 3, 6, 10]
N = min(len(x), len(y))

c0 = []
c1 = []

for i in range(N - 1):
  c1i = (y[i+1] - y[i]) / (x[i+1] - x[i])
  c0i = 0.5 * (y[i+1] + y[i]) - 0.5 * (x[i+1] + x[i]) * c1i
  
  c0.append(c0i)
  c1.append(c1i)

print("c0 =", c0)
print("c1 =", c1)
```

yang akan memberikan hasil

```shell
c0 = [0.0, -1.0, -3.0, -6.0]
c1 = [1.0, 2.0, 3.0, 4.0]
```

dengan contoh programnya tersedia di https://onecompiler.com/python/3zjzynwmr.


Selanjutnya adalah bagaimana menggunakan nilai-nilai $c_0$ dan $c_0$ untuk semua rentang data, yang dalam contoh di atas terdapat empat rentang data. Salah satu implementasinya adalah seperti dalam kode berikut.

```python
import math
import matplotlib.pyplot as plt

xdata = [0, 1, 2, 3, 4]
ydata = [0, 1, 3, 6, 10]
c0 = [0.0, -1.0, -3.0, -6.0]
c1 = [1.0, 2.0, 3.0, 4.0]

def interp(x, xdata, c0, c1):
  i = -1
  for j in range(len(xdata) - 1):
    if (xdata[j] <= x) and (x <= xdata[j+1]):
      i = j
      break
  
  y = c0[i] + c1[i] * x
  return y

N = 17
x = [i * 0.25 for i in range(N)]
y = [interp(i, xdata, c0, c1) for i in x]

plt.grid()

plt.xlabel("x")
plt.ylim([0, 4])

plt.ylabel("y")
plt.ylim([-1, 11])
plt.yticks([*range(11)], [*range(11)])
plt.plot(x, y, '.', xdata, ydata, "ro")
plt.show()
```

Hasil dari kode di atas, yang tersedia di http://tpcg.io/_OE0CH4, diberikan pada Gambar 2 di bawah ini.

{{< svg "img/fi4002/linear_interpolation_ranges_4.svg" >}}

Gambar 2. Hasil interpolasi linier untuk titik-titik data pada Tabel 1 yang terdiri dari titik-titik data dan titik-titik hasil interpolasi.

Perhatikan bahwa terdapat titik-titik lain yang bukan merupakan titik-titik data pad Gambar 2. Titik-titik data digambarkan dengan lingkaran berukuran lebih besar, sedangkan titik-titik hasil interpolasi linier di antara  dua titik data berurutan digambarkan dengan lingkaran berukuran lebih kecil.


## exercises
1. Perhatikan Gambar 1, tunjukkan bahwa interpolasi yang dihasilkan merupakan interpolasi linier pada setiap rentangnya. Setidaknya sampaikan argumen secara kualitatif dengan menggunakan gambar tersebut.
2. Gunakan data lain untuk memeriksa apakah program yang diberikan tetap bekerja.
