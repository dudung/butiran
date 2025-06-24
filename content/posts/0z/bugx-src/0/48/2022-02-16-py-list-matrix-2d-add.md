---
layout: post
authors: [viridi]
title: py list matrix 2d add
permalink: pages/0481
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "addition"]
date: 2022-02-16 19:23:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d-add.md
twitter_username: 6unpnp
nodes: []
youtube: F9o5QIlY9Ow
---
Penjumlahan dua buah matriks memerlukan syarat ukuran keduanya harus sama [[1](#r01)]. Pemanfaatan list tersebut dalam penjumlahan dua buah matriks dan bagaimana menampilkan isinya disajikan di sini secara sederhana dan ringkas. Matriks yang dimaksud adalah matriks 2d.


## matrix addition
Terdapat matriks 

\begin{equation}\label{eqn:matrix-a}
A = \left[
\begin{array}{ccc}
a_{11} & a_{12} & a_{13} \newline
a_{21} & a_{22} & a_{23}
\end{array}
\right]
\end{equation}

dan 

\begin{equation}\label{eqn:matrix-b}
B = \left[
\begin{array}{ccc}
b_{11} & b_{12} & b_{13} \newline
b_{21} & b_{22} & b_{23}
\end{array}
\right]
\end{equation}

yang akan dijumlahkan

\begin{equation}\label{eqn:matrix-c=a+b}
C = A + B
\end{equation}

dengan hasilnya

\begin{equation}\label{eqn:matrix-c}
C = \left[
\begin{array}{ccc}
c_{11} & c_{12} & c_{13} \newline
c_{21} & c_{22} & c_{23}
\end{array}
\right].
\end{equation}

Dan berlaku

\begin{equation}\label{eqn:matrix-addition}
c_{ij} = a_{ij} + b_{ij},
\end{equation}

yang mengaitkan setiap elemen dari ketiga matriks pada Persamaan \eqref{eqn:matrix-a}, \eqref{eqn:matrix-b}, dan \eqref{eqn:matrix-c} melalui operasi penjumlahan dua buah matriks pada Persamaan \eqref{eqn:matrix-c=a+b}, di mana detil operasinya diberikan oleh Persamaan \eqref{eqn:matrix-addition}. Dan hubungan ini yang dapat diterapkan dalam suatu bahasa pemrograman tertentu.


## a code
Sebuah pustaka Python bernama `matrix.py` yang sekurangnya berisikan

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

akan dipanggil oleh program berikut ini

```python
# 0480-matrix-no-numpy-add.py
# Add two matrices
# 20220216 Create this example.

import matrix as mat

# add two two-dimension matrices in form of a list
def addmat(m1, m2):
    # assume both matrices have the same dimension
    row = len(m1)
    col = len(m1[0])

    # create empty matrix
    m3 = []

    # iterate through rows then colums
    for r in range(row):
        newrow = []
        for c in range(col):
            newcol = m1[r][c] + m2[r][c]
            newrow.append(newcol)
        m3.append(newrow)
    
    return m3
    

# define a list as two-dimension matrix
m1 = [
    [1, 2, 3],
    [4, 5, 6]
    ]

m2 = [
    [1, -2, -3],
    [1, -4, 3]
    ]

m3 = addmat(m1, m2)


# display results
print("m1:")
mat.printmat(m1)
print("m2:")
mat.printmat(m2)
print("m3 = m1 + m2:")
mat.printmat(m3)
```

sehingga memberikan

```bath
==== RESTART: 0480-matrix-no-numpy-add.py ====
m1:
1	2	3	
4	5	6	
m2:
1	-2	-3	
1	-4	3	
m3 = m1 + m2:
2	0	0	
5	1	9
```

sebagai hasilnya. Perhatkan bahwa berkas `matrix.py` perlu diletakkan pada folder yang sama dengan berkas utama `0480-matrix-no-numpy-add.py` saat berkas utama dijalankan.

Modifikasi kode di atas, sehingga `mat` dapat tetap digunakan, dapat dijalankan di OneCompiler [3xtjdsdbh](https://onecompiler.com/python/3xtjdsdbh), yang memerlukan definisi suatu namespace `mat` berisikan fungsi yang diperlukan untuk menggantikan baris `import matrix as mat`

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
1. Apa syarat Persamaan \eqref{eqn:matrix-addition} berlaku?


## note
1. <a name="r01"></a>abhishek16bit1112, "Properties of Matrix Addition and Scalar Multiplication \| Class 12 Maths", GeeksforGeeks, 09 Nov 2020, url <https://www.geeksforgeeks.org/properties-of-matrix-addition-and-scalar-multiplication-class-12-maths/> [20220216].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0481?src=hash&amp;ref_src=twsrc%5Etfw">#bug0481</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1493923707366305793?ref_src=twsrc%5Etfw">February 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) dimensi kedua matriks harus sama; &nbsp;
</ans>
