---
title: "root finding flowchart"
date: 2023-01-26T13:19:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0003"
---
Secara umum rumusan pencarian akar secara iteratif melibatkan setidaknya dua nilai tebakan sebelumnya dan fungsinya atau satu tebakan sebelumnya dan fungsi serta turunannya. Generalisasi ini mencakup metode Newton-Raphson, secant, dan false position.

## flowchart
Untuk mencari akar suatu fungsi $f(x)$ dapat dirumuskan terdapatnya suatu fungsi $g(f(x), f'(x), x)$ yang akan memberikan nilai tebakan berikutnya $x_n$, yang semakin mendekati nilai akar yang dicari dengan bergerak dari tebakan awal, misalnya $x_1$ (dan $x_2$), dengan menggunakan informasi $f(x)$ dan $f'(s)$. Diagram alir pencarian akar ini diberikan pada Gambar 1.

{{< mermaid >}}
flowchart TD
  B --> I --> N1 --> o1a
  o1b --> P1 --> P2 --> o2a
  o2b --> C --"N"--> N2 --> o1c
  C --"Y"--> O --> o3a
  o3b --> E
  B(["Begin"])
  I[/"x(1), x(2),<br>f(x), f'"/]
  N1["n = 3"]
  N2["n = n + 1"]
  P1["x(n) = x(n-1) +<br>g(f, f', x(n-1), x(n-2))"]
  P2["fn = f(x(n))"]
  C{"|fn| < &epsilon;"}
  O[/"x(n)"/]
  o1a(("1"))
  o1b(("1"))
  o1c(("1"))
  o2a(("2"))
  o2b(("2"))
  o3a(("3"))
  o3b(("3"))
  E(["End"])
{{< /mermaid >}}

Gambar 1. Diagram alir pencarian akar suatu persamaan $f(x)$.

Dikarenakan keterbatasan dukungan Mermaid untuk MathJax, lambang-lambang pada Gambar 1 menggunakan simbol terdekat yang diharapkan tidak menimbulkan salah penafsiran, seperti misalnya `x(1)` untuk $x_1$ dan `fn` untuk $f_n$.


## methods
Setidaknya terdapat tiga metode pencarian akar yang dapat disampaikan, yang masing-masing dapat menggunakan diagram alir pada Gambar 1. Ketiga method yang dimaksud diberikan pada Tabel 1 berikut.

Method | $g$
:-: | :-:
Newton-Raphson | $\displaystyle -\frac{f(x_{n-1})}{f'(x_{n-1})}$
Secant | $\displaystyle - \frac{(x_{n-1} - x_{n-2}) f(x_{n-1})}{f(x_{n-1}) - f(x_{n-2})}$
False position | $\displaystyle - \frac{x_{n-2} f(x_{n-1}) - x_{n-1} f(x_{n-2})}{f(x_{n-1}) - f(x_{n-2})}$

Perhatikan bahwa secara umum

$$\tag{1}
g = g(f, f', x_{n-1}, x_{n-2}),
$$

dengan $f$ dan $f'$ dapat fungsi dari $x_{n-1}$ dan $x_{n-2}$.


# questions
1. Dari ketiga metode pada Tabel 1, berapakah jumlah syarat awal yang diperlukan? Metode mana yang paling sedikit memerlukan syarat awal.
2. Kembali untuk ketiga metode pada Tabel 1, mana metode yang cukup menggunakan $f(x)$ dan tidak memerlukan $f'(x)$?
3. Bila kebutuhan akan jumlah syarat awal disetarakan dengan kebutuhan akan turunan fungsi, mana metode yang memerlukan informasi paling sedikit dan mana metode yang membutuhkan informasi paling banyak? Jelaskan dengan singkat.
4. Buatlah program singkat untuk mencari nilai dari suatu fungsi, misalnya $f(x) = (x - 2.5)(x - 4.75)$ dengan terlebih dahulu menentukan syarat awalnya. Bandingkan jumlah langkah yang diperlukan dengan menggunakan masing-masing metode pada Tabel 1. Bahas mana yang lebih cepat mendapatkan hasil dan mana yang lebih mudah implementasinya, serta kebutuhan minimum informasinya.
5. Bila hanya menggunakan diagram alir pada Gambar 1 dan metode-metode pada Tabel 1 dengan tanpa tambahan modifikasi, berapakah jumlah akar suatu fugnsi $f(x)$ yang dapat diperoleh? Mengapa?
6. Coba cari akar dari fungsi $f(x) = \sin (x - 0.26 \pi) - 0.41$. Sampai berapa langkah diperlukan agar $|f(x_{root})| < 10^{-5}$? Tunjukkan baris-baris hasilnya dengan kolom pertama adalah jumlah langkah dan kolom kedua adalah nilai $f(x_n)$-nya, di mana $n$ adalah jumlah langkah.