---
layout: post
authors: [viridi]
title: py list matrix 2d
permalink: pages/0480
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "print"]
date: 2022-02-16 18:08:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d.md
twitter_username: 6unpnp
nodes: []
youtube: O1V9_vYXuyo
---
Perlu kehati-hatian dalam memanfaatkan list 2d dalam Python [[1](#r01)]. Pemanfaatan list tersebut sebagai matriks 2d dan bagaimana menampilkan isinya disajikan di sini secara sederhana dan ringkas.


## 2d matrix
Suatu matriks 2d dapat dituliskan dalam bentuk

\begin{equation}\label{eqn:matrix-2d}
A = \left[
\begin{array}{ccc}
1 & 0 & 8 \newline
2 & 0 & 7 \newline
3 & 0 & 6 \newline
4 & 0 & 5 \newline
\end{array}
\right],
\end{equation}

yang memiliki dimensi $m \times n$ dengan $m = 4$ adalah jumlah baris dan $n = 3$ adalah jumlah kolom. Elemennya dinyatakan dengan $a_{ij}$, yang misalnya $a_{23} = 7$.


## list of list
Salah satu cara menyatakan matriks adalah dengan menggunakan list dari list dalam Python, yang untuk matriks pada Persamaan \eqref{eqn:matrix-2d} dituliskan sebagai


```python
A = [
	[1, 0, 8],
	[4, 0, 7],
	[3, 0, 6],
	[4, 0, 5]
	]
```

yang dalam mengkses elemennya agak sedikit berbeda karena indeks suatu list dimulai dari nol, sehingga

```python
print(A[1][2])
```

akan menghasilkan angka 7 yang berkaitan dengan notasi $a_{23}$ pada Persamaan \eqref{eqn:matrix-2d}.


## a code
Suatu kode Python dapat dibuat seperti di bawah ini

```python
# 0480-matrix-no-numpy-print.py
# Define and view a matrix
# 20220216 Create this example.

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


# define a list as two-dimension matrix
m = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [9, 8, 0, 4, 2]
    ]

# display result
print("Print a matrix directly:")
print(m)

print()

print("Print a matrix using printmat() function:")
printmat(m)
```

yang akan menghasilkan

```batch
==== RESTART: 0480-matrix-no-numpy-print.py ====
Print a matrix directly:
[[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [9, 8, 0, 4, 2]]

Print a matrix using printmat() function:
1	2	3	4	5	
5	6	7	8	9	
9	8	0	4	2
```

sebagai hasilnya, saat dijalankan. Perhatikan bahwa Python menampilkan isi suatu list dari list, yang dalam hal ini digunakan sebagai matriks 2d dengan `[]` di dalam `[]` yaitu `[ [], [], .. ]` yang merupakan cara yang lazim dalam pemrograman. Di sini dibuatkan fungsi `printmat()` untuk memberikan notasi yang lebih mirip ke bentuk matematikanya seperti pada Persamaan \eqref{eqn:matrix-2d}.

Kode di atas dapat dijalan secara daring di OneCompiler [3xtj9rzv6](https://onecompiler.com/python/3xtj9rzv6).

## exer
1. Bagaimana mengakses elemen dengan nilai 5 pada Persamaan \eqref{eqn:matrix-2d} secara notasi matematika dan secara pemrograman Python?
2. Pada kode dengan nama `0480-matrix-no-numpy-print.py` berapa dimensi matriks yang ditampilkan?


## note
1. <a name="r01"></a>Pranav Devarakonda, amainaster, ragulravi, "Python \| Using 2D arrays/lists the right way", GeeksforGeeks, 15 Mar 2021, url <https://www.geeksforgeeks.org/python-using-2d-arrays-lists-the-right-way/> [20220216].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0480?src=hash&amp;ref_src=twsrc%5Etfw">#bug0480</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1493903873760989185?ref_src=twsrc%5Etfw">February 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $a_{43}$ dan `A[3][2]`; &nbsp;
2) $3 \times 5$; &nbsp;
</ans>
