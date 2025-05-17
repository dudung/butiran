---
layout: post
authors: [viridi]
title: py list matrix 2d mul 2
permalink: pages/0485
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "multiplication", "matrix"]
date: 2022-02-17 10:37:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d-mul-2.md
twitter_username: 6unpnp
nodes: []
youtube: C94t6HkmE5s
---
Perkalian dua buah matriks dalam Pyton dapat dilakukan menggunakan pengulangan bersarang [[1](#r01)] atau paket numerik NumPy [[2](#r02)]. Di sini akan dibahas dengan pengulangan bersarang pada list untuk perkalian matriks, dan karena memang hanya untuk tujuan pembelajaran, diterapkan untuk matriks berukuran kecil.


## matrix multiplication with matrix
Terdapat matriks

\begin{equation}\label{eqn:matrix-a}
A = \left[
\begin{array}{ccc}
a_{11} & a_{12} & a_{13} \newline
a_{21} & a_{22} & a_{23} \newline
\end{array}
\right]
\end{equation}

dan

\begin{equation}\label{eqn:matrix-b}
B = \left[
\begin{array}{ccc}
b_{11} & b_{12} & b_{13} & b_{14} \newline
b_{21} & b_{22} & b_{23} & b_{24} \newline
b_{31} & b_{32} & b_{33} & b_{34}
\end{array}
\right],
\end{equation}

yang akan dikalikan

\begin{equation}\label{eqn:matrix-c=ab-element}
C = AB
\end{equation}

dan memberikan

\begin{equation}\label{eqn:matrix-c}
C = \left[
\begin{array}{ccc}
c_{11} & c_{12} & c_{13} & c_{14} \newline
c_{21} & c_{22} & c_{23} & c_{24}
\end{array}
\right],
\end{equation}

yang berlaku

\begin{equation}\label{eqn:matrix-b=ca-element}
c_{ij} = \sum_k a_{ik} b_{kj},
\end{equation}

untuk setiap elemennya.


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
```

diperlukan agar dapat menggunakan `printmat` dan `newmat` dalam program berikut

```python
# 0480-matrix-no-numpy-mul2.py
# Multiply a matrix with a matrix
# 20220216 Create this example.

import matrix as mat

# multiply a matrix with a matrix
def mulmat2(m1, m2):
    # assume colum of 1st and row of 2nd are matched
    row = len(m1)
    mid = len(m1[0])
    col = len(m2[0])

    m3 = mat.newmat(row, col)
    
    # iterate through rows then colums
    for r in range(row):
        for c in range(col):
            temp = 0
            for m in range(mid):
                temp = temp + m1[r][m] * m2[m][c]
            m3[r][c] = temp

    return m3

# define a list as two-dimension matrix
m1 = [
    [1, 1, 1],
    [1, 2, 1],
    ]
m2 = [
    [1, 1],
    [1, 2],
    [1, 1],
    ]

m3 = mulmat2(m1, m2)

# display results
print("m1:")
mat.printmat(m1)
print("m2:")
mat.printmat(m2)
print("m3:")
mat.printmat(m3)
```

yang memberikan hasil

```batch
==== RESTART: 0480-matrix-no-numpy-mul2.py ====
m1:
1	1	1	
1	2	1	
m2:
1	1	
1	2	
1	1	
m3:
3	4	
4	6
```

saat dijalankan.

Modifikasi kode di atas, sehingga `mat` dapat tetap digunakan, dapat dijalankan di OneCompiler [3xtm9tpf4](https://onecompiler.com/python/3xtm9tpf4), yang memerlukan definisi suatu namespace `mat` berisikan fungsi yang diperlukan untuk menggantikan baris `import matrix as mat`

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
```

agar tidak perlu mengubah baris kode yang lain. Penggunaan paket `matrix` ini adalah untuk menyembuyikan fungsi-fungsi yang bukan menjadi fokus pembahasan di sini sehingga contoh program dapat masih cukup ringkas.


## exer
1. Apa syarat dua buah matriks dapat dikalikan? Perhatikan Persamaan \eqref{eqn:matrix-b=ca-element}.


## note
1. <a name="r01"></a>SHARIQ_JMI, psbishnu1, anikakapoor, "Python program to multiply two matrices", 
GeeksforGeeks, 11 Aug 2021, url <https://www.geeksforgeeks.org/python-program-multiply-two-matrices/> [20220217].
2. <a name="r02"></a>Erin Schaffer, "NumPy matrix multiplication: Get started in 5 minutes", Educative, Inc., 03 Sep 2021, url <https://www.educative.io/blog/numpy-matrix-multiplication> [20220217].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0485?src=hash&amp;ref_src=twsrc%5Etfw">#bug0485</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1494153610477076482?ref_src=twsrc%5Etfw">February 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ukuran kolom matriks pertama harus sama dengan ukuran baris matriks kedua; &nbsp;
</ans>
