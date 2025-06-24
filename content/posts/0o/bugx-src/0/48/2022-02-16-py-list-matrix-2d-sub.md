---
layout: post
authors: [viridi]
title: py list matrix 2d sub
permalink: pages/0482
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "substraction"]
date: 2022-02-16 21:35:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d-sub.md
twitter_username: 6unpnp
nodes: []
youtube: 4voxBdaIoTs
---
Pengurangan dua buah matriks dalam Python dapat menggunakan pustaka NumPy [[1](#r01)] atau cukup dengan list. Pemanfaatan list dalam pengurangan dua buah matriks dan bagaimana menampilkan isinya disajikan di sini secara sederhana dan ringkas. Matriks yang dimaksud adalah matriks 2d.


## matrix substraction
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

yang akan dikurangkan, tepatnya matriks pertama dikurang matriks kedua

\begin{equation}\label{eqn:matrix-c=a-b}
C = A - B
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

\begin{equation}\label{eqn:matrix-substraction}
c_{ij} = a_{ij} - b_{ij},
\end{equation}

yang mengaitkan setiap elemen dari ketiga matriks pada Persamaan \eqref{eqn:matrix-a}, \eqref{eqn:matrix-b}, dan \eqref{eqn:matrix-c} melalui operasi penjumlahan dua buah matriks pada Persamaan \eqref{eqn:matrix-c=a-b}, di mana detil operasinya diberikan oleh Persamaan \eqref{eqn:matrix-substraction}. Dan hubungan ini yang dapat diterapkan dalam suatu bahasa pemrograman tertentu.


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
# 0480-matrix-no-numpy-sub.py
# Substract two matrices
# 20220216 Create this example.

import matrix as mat

# substract two two-dimension matrices in form of a list
def submat(m1, m2):
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

m3 = submat(m1, m2)


# display results
print("m1:")
mat.printmat(m1)
print("m2:")
mat.printmat(m2)
print("m3 = m1 - m2:")
mat.printmat(m3)
```

sehingga memberikan

```bath
==== RESTART: 0480-matrix-no-numpy-sub.py ====
m1:
1	2	3	
4	5	6	
m2:
1	-2	-3	
1	-4	3	
m3 = m1 - m2:
0	4	6	
3	9	3
```

sebagai hasilnya. Perhatkan bahwa berkas `matrix.py` perlu diletakkan pada folder yang sama dengan berkas utama `0480-matrix-no-numpy-add.py` saat berkas utama dijalankan.

Modifikasi kode di atas, sehingga `mat` dapat tetap digunakan, dapat dijalankan di OneCompiler [3xtjp5dbp](https://onecompiler.com/python/3xtjp5dbp), yang memerlukan definisi suatu namespace `mat` berisikan fungsi yang diperlukan untuk menggantikan baris `import matrix as mat`

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

agar tidak perlu mengubah baris kode yang lain. Penggunaan pustaka `matrix` ini adalah untuk menyembunyikan fungsi-fungsi yang bukan menjadi fokus pembahasan di sini sehingga contoh program dapat masih cukup ringkas.


## exer
1. Apa syarat Persamaan \eqref{eqn:matrix-substraction} berlaku?
2. Apakah terdapat perbedaan yang cukup besar selain operatornya saja antara pengurangan dan penjumlahan matriks?


## note
1. <a name="r01"></a>Akashkumar17, "Adding and Subtracting Matrices in Python", GeeksforGeeks, 30 Dec 2020, url <https://www.geeksforgeeks.org/adding-and-subtracting-matrices-in-python/> [20220216].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0482?src=hash&amp;ref_src=twsrc%5Etfw">#bug0482</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1493957000883228673?ref_src=twsrc%5Etfw">February 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) dimensi kedua matriks harus sama; &nbsp;
2) tidak; &nbsp;
</ans>
