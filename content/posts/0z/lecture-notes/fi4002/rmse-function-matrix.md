---
title: "rmse function matrix"
date: 2023-07-26T11:35:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0005"
---
Kesalahan kuadrat rata-rata diakarkan, yang dalam bahasa Inggrisnya root mean square error atau RMSE dapat direpresentasikan dalam bentuk fungsi dan matriks. Di sini hanya fungsi linier yang diilustrasikan.


# data
Terdapat pasangan nilai $(x_i, y_i)$ dengan $i = 1, 2, \dots, N$, di mana $N$ adalah jumlah data.

Tabel 1. Contoh data dengan $N = 8$.
$i$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
$x_i$ | 2.0 | 3.0 | 4.0 | 5.0 | 6.0 | 7.0 | 8.0 | 9.0
$y_i$ | 7.0 | 8.5 | 11.0 | 13.5 | 15.0 | 16.5 | 19.5 | 21.0


# model
Suatu model linier yang memberikan hubungan antara variabel bebas $x_i$ dan variabel terikat $y_i$ memiliki bentuk

$$\tag{1}
y = c_0 + c_1 x,
$$

dengan dimensi dari $c_0$ dan $c_1$, berturut-turut, adalah sama dengan dimensi dari $y$ dan $y/x$. Dengan menggunakan suatu nilai observasi variabel bebas $x_i$ dapat diperoleh

$$\tag{2}
\hat{y}_i = c_0 + c_1 x_i,
$$

yang merupakan hasil prediksi menggunakan model.


## error
Kesalahan diperoleh dari selisih antara nilai hasil perhitungan menggunakan model $\hat{y}_i$ dengan nilai observasi variabel terikat $y_i$ dalam bentuk

$$\tag{3}
\varepsilon_i = y_i - \hat{y}_i,
$$

sehingga kesalahan totalnya menjadi

$$\tag{4}
\varepsilon = \sum_{i = 1}^N \varepsilon_i.
$$

Persamaan (3) dapat menyebabkan hasil dari Persamaan (4) bernilai kecil karena terjadinya kompensasi kesalahan positif dan negatif. Untuk mencegah hal ini, Persamaan (3) diubah menjadi

$$\tag{5}
\varepsilon_i^2 = (y_i - \hat{y}_i)^2.
$$

Agar nilai kesalahan kuadrat ini agak bebas dari jumlah data, dapat dirumuskan

$$\tag{6}
<\varepsilon^2> = \frac{1}{N} \sum_{i = 1}^N (y_i - \hat{y}_i)^2.
$$

yang merupakan rata-rata kuadrat kesalahan. Selanjutnya, untuk mendapatkan rumusan besaran kesalahan yang berdimensi sama dengan variabel yang diukur dilakukan pencarian akar dari Persamaan (6)

$$\tag{7}
\left( <\varepsilon^2> \right)^{\frac12} = \left[ \frac{1}{N} \sum_{i = 1}^N (y_i - \hat{y}_i)^2 \right]^{\frac12}
$$

yang dikenal sebagai RMSE. Dengan menggunakan Persamaan (2) dapat diperoleh

$$\tag{8}
\left( <\varepsilon^2> \right)^{\frac12} = \left[ \frac{1}{N} \sum_{i = 1}^N (y_i - c_0 - c_1 x_i)^2 \right]^{\frac12}
$$

yang merupakan bentuk khusus dari Persamaan (7), berlaku untuk model linier.


# matrix form
Perumusan RMSE dalam Persamaan (8) dapat dikatakan merupakan perumusan dalam bentuk fungsi dengan adanya model pada Persamaan (1). Dalam pendekatan model yang lain, misalnya menggunakan metode elemen hingga, finite element method atau FEM, diperoleh nilai pada node-node yang umumnya disimpan dalam bentuk matriks. Bila terdapat matriks kolom

$$\tag{9}
\mathbf{Y} = \left[
\begin{array}{c}
y_1 \newline
y_2 \newline
\dots \newline
y_{N-1} \newline
y_N
\end{array}
\right]
$$

untuk nilai observasi dan

$$\tag{10}
\mathbf{\hat{Y}} = \left[
\begin{array}{c}
\hat{y}_1 \newline
\hat{y}_2 \newline
\dots \newline
\hat{y} _{N-1} \newline
\hat{y} _N
\end{array}
\right]
$$

untuk nilai hasil pemodelan, maka

$$\tag{11}
\mathbf{Z} = \mathbf{\hat{Y}} - \mathbf{Y}
$$

merupakan matriks yang menggambarkan kesalahan. Dengan menggunakan Persamaan (11) dapat dituliskan

$$\tag{12}
\left( <\varepsilon^2> \right)^{\frac12} = \left[ \frac{1}{N} \sum_{i = 1}^N \mathbf{Z}^T \cdot \mathbf{Z} \right]^{\frac12}
$$

yang tak lain adalah bentuk matrix untuk Persamaan (7).


# exercises
1. Gambarkan titik-titik data dari Tabel 1 dalam suatu grafik $y$ terhadap $x$.
2. Buat suatu kurva linier terbaik yang melewati hampir semuat titik-titik data.
3. Ilustrasikan Persamaan (3) dalam grafik yang telah dibuat dan tunjukkan bahwa Persamaan (4) dapat memberikan total nilai kecil walau masing-masing nilai mutlak per data dalam Persamaan (3) memiliki nilai besar.
4. Jelaskan bagaimana perumusan dalam Persamaan (7) dapat mengatasi permasalahan dalam Persamaan (3) dan (4).
5. Persamaan mana saja yang berlaku lebih umum, misalnya tidak bergantung model yang digunakan, dari Persamaan (7), (8), dan (12)? Jelaskan alasannya.