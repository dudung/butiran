---
title: "python int to binary string"
date: 2022-04-13T19:00:01+07:00
lastmod: 2022-04-13T20:57:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['python', 'int', 'binary', 'string', 'conversion', 'cookbook']
url: "0053"
draft: false
---
Terdapat pertanyaan yang menggelitik mengenai bagaimana melakukan konversi suatu bilangan bulat (int) menjadi biner (string) dengan fungsi built-in dalam bahasa pemrograman Python [[1](#r01)]. Di sini hanya akan disajikan beberapa contoh dan hasilnya, tanpa penjelasan mendetil.


## output
Beberapa keluaran dan informasinya bagaimana memperolehnya adalah sebagai berikut ini.


```batch
PS L:\home\cookbook\python\num2str> python int_to_binary.py
num = 11

digit = 6

f'0b{num:08b}'
0b00001011

f'{num:010b}'
0000001011

f'{num:b}'
1011

bin(num)
0b1011

bin(num)[2:]
1011

format(num, '06b')
001011

format(num, '0{}b'.format(digit))
001011

f'{num:0{digit}b}'
001011

bb = 0b1111
print(bb)
15

cc = 0x17
print(cc)
23

dd = bb + cc
38 = 15 + 23

PS L:\home\cookbook\python\num2str>
```

Hasil di atas diperoleh dengan menjalan program pada bagian berikutnya menggunakan PowerShell 5.1.19041.1320 pada Windows 10 Home 19042.1586 yang memanggil Python 3.10.4.


## code
Untuk mendapatkan hasil sebelumnya digunakan program berikut

```python
# int_to_binary.py
# Convert integer to binary string
# Sparisoma Viridi | github.com/dudung/cookbook
# 20220413 Summarize and add some lines of examples.

# set an int
num = 11
print('num =', num)
print()

# set number of digits
digit = 6
print('digit =', digit)
print()


# url stackoverflow.com/a/63485151/9475509 [20220413]
numbs1 = f'0b{num:08b}'
print("f'0b{num:08b}'")
print(numbs1)
print()

# print without prefix '0b' and in 10 digit, with leading '0'
numbs2 = f'{num:010b}'
print("f'{num:010b}'")
print(numbs2)
print()

# print without leading '0'
numbs3 = f'{num:b}'
print("f'{num:b}'")
print(numbs3)
print()


# url stackoverflow.com/a/62587270/9475509 [20220413]
numbs4 = bin(num)
print('bin(num)')
print(numbs4)
print()

# print without prefix '0b'
numbs5 = bin(num)[2:]
print('bin(num)[2:]')
print(numbs5)
print()


# url stackoverflow.com/a/53275552/9475509 [20220413]
numbs6 = format(num, '06b')
print("format(num, '06b')")
print(numbs6)
print()


# url stackoverflow.com/a/55932455/9475509 [20220413]
numbs7 = format(num, '0{}b'.format(digit))
print("format(num, '0{}b'.format(digit))")
print(numbs7)
print()


# url stackoverflow.com/a/56500977/9475509 [20220413]
numbs8 = f'{num:0{digit}b}'
print("f'{num:0{digit}b}'")
print(numbs8)
print()


# define a binary number
bb = 0b1111 # 15
print("bb = 0b1111")
print("print(bb)")
print(bb)
print()

# define a hexadecimal number
cc = 0x17
print("cc = 0x17")
print("print(cc)")
print(cc)
print()

# add previous numbers as int
dd = bb + cc
print("dd = bb + cc")
print(f'{dd} = {bb} + {cc}')
print()
```

yang dapat dijalankan di OneCompiler [3xyzkxp38](https://onecompiler.com/python/3xyzkxp38).


## exer
1. Temukan dokumentasi bahasa pemrograman Python terkait dengan penggunaan`f'{}'` dan penjelasannya.


## notes
1. <a name='r01'></a>Nate, dreftymac, "Python int to binary string?", Stack Overflow, 31 May 2009, 13 Feb 2021, url <https://stackoverflow.com/q/699866/9475509> [20220413].

{{< citeas >}}
