---
layout: post
authors: [viridi]
title: py list matrix 2d new 0
permalink: pages/0483
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "new", "zero"]
date: 2022-02-17 08:46:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d-new-0.md
twitter_username: 6unpnp
nodes: []
youtube: XUohmVwpMDM
---
Dalam Python assignment suatu variabel dengan suatu nilai dapat dilakukan dengan berbagai cara, seperti umumnya dalam bahasa pemrograman lain, melalui tuple untuk asignment beberapa nilai sekaligus, menukar nilai variabel, dan lainnya [[1](#r01)]. Para pengembang yang melompat menggunakan bahasa pemrograman Python dari bahasa pemrograman lainnya, seperti C++ dan Java, sering dibingungkan oleh proses melewatkan argumen pada Python, di mana model data terpusat-obyek dan bagaimana model ini memperlakukan assignment adalah penyebab kebingungan ini pada tingkat fundamental [[2](#r02)]. Untuk menyalin suatu list sebaiknya digunakan methode `.copy` agar menjadi obyek yang berbeda [[3](#r03)], yang bila digunakan operator sama dengan `=` hanya akan membuat referensi antar obyek sehingga pengubahan pada obyek yang satu akan mengubah pula obyek yang lain [[4](#r04)]. Di sini akan dibahas membuat sebuah list dua dimensi baru, sebagai suatu matriks, yang berisi angka nol dengan ukuran yang dikehendaki. Lebih tepatnya adalah membuat suatu matriks nol baru.


## zero matrix
Suatu matriks nol dengan dimensi $m \times n$ contohnya sebagai berikut

\begin{equation}\label{eqn:zero-matrix}
Z = \left[
\begin{array}{ccccccc}
0 & 0 & 0 & 0 & 0 & 0 & 0 \newline
0 & 0 & 0 & 0 & 0 & 0 & 0 \newline
0 & 0 & 0 & 0 & 0 & 0 & 0 \newline
0 & 0 & 0 & 0 & 0 & 0 & 0
\end{array}
\right],
\end{equation}

untuk jumlah baris $m = 4$ dan jumlah kolom $n = 7$.


## a code
Suatu pustaka `matrix.py` berisikan

```python
# matrix.py
# Simple matrix library using list
# 20220216 Create this example.

# print only two-dimension matrix in form of a list
def printmat(m):
    # assume that all rows have the same columns
    row = len(m)
    col = len(m[0])

    # iterate through rows then colums
    for r in range(row):
        for c in range(col):
            print(m[r][c], end='\t')
        print()
```

diperlukan agar dapat menggunakan `printmat` dalam program berikut

```python
# 0480-matrix-no-numpy-zero.py
# Create an empty matrix with dimensions row and col
# 20220216 Create this example.

import matrix as mat

# create an new two-dimension matrix in form of a list filled with zero
def newmat(row, col):
    # create empty matrix
    m = []

    # iterate through rows then colums
    for r in range(row):
        newrow = []
        for c in range(col):
            newrow.append(0)
        m.append(newrow)
    
    return m

# create a new zero matrix
row = 4
col = 2
m = newmat(row, col)

# display results
print("row:")
print(row)
print("col:")
print(col)
print("m:")
mat.printmat(m)
```

yang memberikan hasil

```batch
==== RESTART: 0480-matrix-no-numpy-zero.py ====
row:
4
col:
2
m:
0	0	
0	0	
0	0	
0	0
```

saat dijalankan.

Modifikasi kode di atas, sehingga `mat` dapat tetap digunakan, dapat dijalankan di OneCompiler [3xtkwnm9x](https://onecompiler.com/python/3xtkwnm9x), yang memerlukan definisi suatu namespace `mat` berisikan fungsi yang diperlukan untuk menggantikan baris `import matrix as mat`

```python
#import matrix as mat
class mat:
  # print only two-dimension matrix in form of a list
  def printmat(m):
      # assume that all rows have the same number of columns
      row = len(m)
      col = len(m[0])
  
      # iterate through rows then colums
      for r in range(row):
          for c in range(col):
              print(m[r][c], end='\t')
          print()
```

agar tidak perlu mengubah baris kode yang lain. Penggunaan pustaka `matrix` ini adalah untuk menyembuyikan fungsi-fungsi yang bukan menjadi fokus pembahasan di sini sehingga contoh program dapat masih cukup ringkas.


## exer
1. Bagaimana untuk membuat matriks yang isinya angka satu semua?
2. Bagaimana cara membuat suatu matriks nol berbentuk bujur sangkar?


## note
1. <a name="r01"></a>Jakub Przywóski, "= Assignment", Python Reference (The Right Way), Rev 9a3b94e7, 2015, url <https://python-reference.readthedocs.io/en/latest/docs/operators/assignment.html> [20220217].
2. <a name="r02"></a>RajuKumar19, akshaysingh98088, "Pass by reference vs value in Python", GeeksforGeeks, 11 Oct 2021, url <https://www.geeksforgeeks.org/pass-by-reference-vs-value-in-python/> [20220217].
3. <a name="r03"></a>Rodrigo Girão Serrão, "Pass-by-value, reference, and assignment \| Pydon't 🐍 \| Mathspp", Mathspp, 3 Nov 2021, url <https://mathspp.com/blog/pydonts/pass-by-value-reference-and-assignment> [20220217].
4. <a name="r04"></a>Jay Lospinoso, "How to Copy List Without Reference in Python 3", e Learning, 25 Jul 2021, url <https://elearning.wsldp.com/python3/how-to-copy-list-without-reference-in-python-3/> [202217].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0483?src=hash&amp;ref_src=twsrc%5Etfw">#bug0483</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1494119546864959489?ref_src=twsrc%5Etfw">February 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Ubah `newrow.append(0)` menjadi `newrow.append(1)`; &nbsp;
2) argumen `row` dan `col` harus bernilai sama; &nbsp;
</ans>
