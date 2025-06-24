---
title: "random-numbers-4-digits"
date: 2022-07-09T17:44:00+07:00
lastmod: 2022-07-09T23:01:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['math', 'random']
url: "0110"
draft: false
---
Bilangan acak yang terdiri dari empat angka dapat memiliki nilai 1000 sampai 9999 [[1](#r01)] atau ada pula yang mulai dari 0000 sampai 9999, yang dapat dibuat dengan Microsoft Excel [[2](#r02)] ataupun JavaScript [[3](#r03)]. Dengan demikian terdapat antara 9000 dan 10000 kombinasi yang mungkin. Di sin akan didiskusikan hanya bilangan yang bernilai antara 1000 dan 9999.


## python
Dalam bahasa pemrograman Python bilangan bulat dapat dibuat menggunakan fungsi `randint()`, yang dengan menggunakan metode list comprehension dengan pengulangan `for` sehingga tersimpan dalam suatu list [[4](#r04)].

Berikut adalah contoh sepuluh bilangan bulat acak yang terdiri dari empat angka mulai dari 1000 sampai 1010.

```python
import random

x = [random.randint(1000, 1010) for p in range(0, 20)]

j = 0
for i in x:
  j += 1
  print(i, end=' ')
  if j == 4:
    j = 0
    print()

pass
```

dengan salah satu hasilnya adalah

```
1004 1005 1010 1000 
1000 1001 1003 1008 
1008 1004 1000 1008 
1001 1010 1001 1008 
1008 1010 1001 1000 
```

yang dapat diakses di OneCompiler [3y9fwfuut](https://onecompiler.com/python/3y9fwfuut).


## 9000 possibilities
Bila ingin dibangkitkan semua bilangan yang terdiri dari empat angka antara 1000 sampai 9999 maka akan terdapat 9000 bilangan.

```python
import random

x = [p for p in range(1000, 9999 + 1)]

print("N = ", len(x))
print("sum x = ", sum(x))
```

dengan hasilnya

```
N =  9000
sum x =  49495500
```

yang dapat diakses pada OneCompiler [3y9fxdvgb](https://onecompiler.com/python/3y9fxdvgb). Dengan menggunakan

\begin{equation}\label{eqn1}
\sum_i x_i = \tfrac12 \cdot 9000 \cdot (1000 + 9999) = 49495500
\end{equation}

diperoleh hasil yang sama dengan yang diberikan oleh kode sebelumnya.


## some rules
Untuk menghasilkan bilangan-bilangan yang spesifik dapat ditambahkan aturan-aturan tertentu seperti
- angka kedua adalah dua kali angka keempat,
- angka ketiga adalah tiga kali angka pertama,
- jumlah angka pertama dan kedua adalah sama dengan jumlah angka ketiga dan keempat, 
- keempat angka tidak boleh sama, dan
- aturan-aturan lainnya.

Langkah yang paling sederhana adalah melakukan 9000 iterasi dengan menggunakan aturan-aturan yang diberikan di atas.

### 2nd = 2 x 4th
Aturan pertama akan memberikan bilangan-bilangan seperti

```
A2C1 A4C2 A6C3 A8C4
```

### 3rd = 3 x 1st
Aturan kedua akan menghasilkan bilanga-bilangan seperti

```
1B3D 2B6D 3B9D 
```

### 1st + 2nd = 3rd + 4th 
Aturan ketiga akan menghasilkan bilanga-bilangan seperti

```
1432 6244 3782 9155 5445 .. 
```

### 1st &ne; 2nd &ne; 3rd &ne; 4th
Aturan keempat akan menghasilkan bilanga-bilangan seperti

```
1432 3782 .. 
```

### result
Setelah hasil-hasil sebelumnya dicari irisannya, dapat diperoleh

```
1432
```

sebagai hasil yang diinginkan.


### implementation
Contoh yang diilustrasikan sebelumnya dapat diperoleh menggunakan kode berikut

```python
N1 = 10
N2 = 10
N3 = 10
N4 = 10

x = []
for d1 in range(1, N1):
  for d2 in range (0, N2):
    for d3 in range (0, N3):
      for d4 in range (0, N4):
        
        ru1 = d2 == 2 * d4
        ru2 = d3 == 3 * d1
        ru3 = (d1 + d2) == (d3 + d4)
        ru4 = (d1 != d2 != d3 != d4)
        
        if ru1 and ru2 and ru3 and ru4:
          xx = str(d1) + str(d2) + str(d3) + str(d4)
          x.append(xx)

print(x)
```

dengan hasilnya


```
['1432', '2864']
```

yang dapat diakses pada OneCompiler [3y9gaqbs8](https://onecompiler.com/python/3y9gaqbs8). Perhatikan bahwa terdapat solusi lain yang tidak diperhitungkan dan tetap memenuhi keempat aturan yang dipersyaratkan.


## limitation
Terdapat hal yang perlu diperhatikan bahwa bisa tidak ada bilangan yang dihasilkan dengan mematuhi aturan-aturan yang diberikan, di mana suatu program akan amat membantu untuk memastikannya dengan cepat.


## examples
Beberapa contoh berikut dapat digunakan untuk suatu keperluan. Pemeriksaan contoh-contoh tersebut perlu dilakukan untuk memastikan bahwa aturan yang diberikan benar-benar dipatuhi. Silakan memodifikasi [3y9gc2rqn](https://onecompiler.com/python/3y9gc2rqn) di OneCompiler.

Tabel <a name='tab1'>1</a>. Beberapa aturan untuk bilangan empat angka dan hasilnya.
<br><br>

No | R1 | R2 | R3 | R4 | Bil.
:-: | :- | :- | :- | :- | :-
1 | B = 2D | A = 3C | (A + B) =<br>(C + D) + 8 | A ≠ B ≠<br>C ≠ D | 6824<br>9432
2 | 3B = D | A = 2C | (A + B) + 4<br>= (C+ D) | A ≠ B ≠<br>C ≠ D  | 4329
3 | 5B = D | A = 2C | (A + B) =<br>(C+ D) | A ≠ B ≠<br>C ≠ D  | 8145
4 | B = 5D | A = 3C | (A × B) =<br>15 (C × D) | A ≠ B ≠<br>C ≠ D | 6521<br>9531
5 | B = 5D | 4A = C | (A + B) =<br>(C - D) | A ≠ B ≠<br>C ≠ D | 2581
6 | B = 5A | D = 2C | (A + B) =<br>(C + D) | A ≠ B ≠<br>C ≠ D | 1524
7 | B = 2A | 3D = C | (A + B) =<br>(C + D) | A ≠ B ≠<br>C ≠ D | 1593
8 | B = 5C | 3A = D | (A + B) =<br>(C + D) | A ≠ B ≠<br>C ≠ D | 2516
9 | B = 5C | A = 4D | (A + B) =<br>(C + D) + 10 | A ≠ B ≠<br>C ≠ D | 8512
10 | B = 2C | A = 5D | (A + D) =<br>(B + C) | A ≠ B ≠<br>C ≠ D | 5421
11 | B = C + 4 | A = 4D | (A + D) =<br>(B + C) | A ≠ B ≠<br>C ≠ D | 8732

Perhatikan Tabel [1](#tab1) yang menggambarkan bahwa walaupaun telah dengan empat aturan pun, R1 - R4, masih terdapat hasil yang belum unik. Ketidakunikan ini dapat menjadi kelemahan ataupun kelebihan, bergantung pada pemanfaatannya.


## notes
1. <a name='r01'></a>null, "Numbers up to 4 Digits", Cue Math, 2022, url <https://www.cuemath.com/numbers/numbers-up-to-4-digits/> [20220709]
2. <a name='r02'></a>author, "What is every possible 4 digit code?", TechShift, 19 Mar 2022, url <https://techshift.net/what-is-every-possible-4-digit-code/> [20220709].
3. <a name='r03'></a>John Au-Yeung, "How to Generate a 4 Digit Random Number with JavaScript?", The Web Dev, 29 Aug 2021, url <https://thewebdev.info/2021/08/29/how-to-generate-a-4-digit-random-number-with-javascript/> [20220709].
4. <a name='r04'></a>Manav Narula, "Generate Random Integers in Range in Python", DelfStack, 18 Jul 2021, url <https://www.delftstack.com/howto/python/random-integers-between-range-python/> [20220709].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}