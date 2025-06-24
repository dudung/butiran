---
title: "simple-accounting"
date: 2022-07-11T05:16:00+07:00
lastmod: 2022-07-11T07:05:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['math', 'accounting']
url: "0112"
draft: false
---
Laba atau profit merupakan bagian dari penghasilan bila jumlah pemasukan telah melampaui pengeluaran [[1](#r01)], yang berbeda dengan pemasukan atau revenue yang merupakan penghasilan total yang diperoleh dari suatu usaha tanpa memperhitungkan pengeluaran [[2](#r02)]. Sesuatu yang perlu dikeluarkan agar usaya dapat berjalan dapat dibedakan menjadi biaya dan pengeluaran, yang agak berbeda penggunaannya pada bisnis dan akutansi [[3](#r03)]. Laba, yang dapat disebut juga keuntungan dalam batas-batas tertentu [[4](#r04)], diperoleh dengan mengurangkan total penghasilan dengan total pengeluaran. Pada contoh-contoh sederhana di sini hanya digunakan istilah penghasilan, pengeluaran, dan keuntungan.


## revenue example
Terdapat lima buah toko yang menjual empat buah produk seperti pada tabel berikut ini.

Tabel <a name='tab1'>1</a> Informasi jumlah berbagai produk topi yang dijual sejumlah toko. <br><br>

Topi<br>------<br>Toko | BA | KU | PE | RI | SO
:-: | :-: | :-: | :-: | :-: | :-:
A   | 10  | 10 | 20 | 10 | 20
B   | 20  | 40 | 20 | 30 | 10
C   | 20  | 40 | 20 | 10 | 10
D   | 10  | 20 | 50 | 30 | 20
E   | 15  | 25 | 20 | 20 | 10

Dengan harga masing-masing jenis topi diberikan pada tabel di bawah ini.

Tabel <a name='tab2'>2</a> Kode topi dan harga jualnya. <br><br>

Kode | <center>Nama</center> | Harga<br>jual (Rp)
:-: | :- | :-:
BA | Baseball | 40.000,-
KU | Kupluk   | 20.000,-
PE | Peci     | 30.000,-
RI | Rimba    | 50.000,-
SO | Songkok  | 60.000,-

Terdapat kode berikut

```python
product_code = ['BA', 'KU', 'PE', 'RI', 'SO']
product_name = ['Baseball', 'Kupluk', 'Peci', 'Rimba', 'Songkok']
sell_price = [40, 20, 30, 50, 60]
shop_name = ['A', 'B', 'C', 'D', 'E']

shop_selling = [
  [10, 10, 20, 10, 20],
  [20, 40, 20, 30, 10],
  [20, 40, 20, 10, 10],
  [10, 20, 50, 30, 20],
  [15, 25, 20, 20, 10]
]

for s in range(len(shop_selling)):
  print("Shop", shop_name[s])
  items = shop_selling[s]
  rev = 0
  for i in range(len(items)):
    print(" ", product_code[i], "=", items[i], end='')
    revi = sell_price[i] * items[i]
    print(", revenue =", revi)
    rev += revi
    
  print("Total revenue =", rev)
  
  print()
```

yang akan memberikan hasil

```
Shop A
  BA = 10, revenue = 400
  KU = 10, revenue = 200
  PE = 20, revenue = 600
  RI = 10, revenue = 500
  SO = 20, revenue = 1200
Total revenue = 2900

Shop B
  BA = 20, revenue = 800
  KU = 40, revenue = 800
  PE = 20, revenue = 600
  RI = 30, revenue = 1500
  SO = 10, revenue = 600
Total revenue = 4300

Shop C
  BA = 20, revenue = 800
  KU = 40, revenue = 800
  PE = 20, revenue = 600
  RI = 10, revenue = 500
  SO = 10, revenue = 600
Total revenue = 3300

Shop D
  BA = 10, revenue = 400
  KU = 20, revenue = 400
  PE = 50, revenue = 1500
  RI = 30, revenue = 1500
  SO = 20, revenue = 1200
Total revenue = 5000

Shop E
  BA = 15, revenue = 600
  KU = 25, revenue = 500
  PE = 20, revenue = 600
  RI = 20, revenue = 1000
  SO = 10, revenue = 600
Total revenue = 3300
```

dan dapat ditelusuri di OneCompiler [3y9mekebz](https://onecompiler.com/python/3y9mekebz).


## notes
1. <a name='r01'></a>True Tamplin, "Profit Definition", Finance Strategists, 14 Jun 2022, url <https://learn.financestrategists.com/finance-terms/profit/> [20220711].
2. <a name='r02'></a>Eric Rosenber, "Revenue vs. Profit: The Difference and When They Matter", Bench, 18 Jan 2022, url <https://bench.co/blog/accounting/revenue-vs-profit/> [20220711].
3. <a name='r03'></a>admin, "The Differences Between Cost And Expense", PDAI Universitas Medan Area, 31 May 2021, url <http://akuntansi.uma.ac.id/2021/05/31/the-differences-between-cost-and-expense/#> [20220711]. 
4. <a name='r04'></a>Arlyz Savan Religa, "Kenali 4 Perbedaan Laba Dan Keuntungan Secara Lengkap!", Investree Radhika Jaya, 11 Nov 2021, url <https://blog.investree.id/bisnis/kenali-4-perbedaan-laba-dan-keuntungan-secara-lengkap/> [20220711].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}