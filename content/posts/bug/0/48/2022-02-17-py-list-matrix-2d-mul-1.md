---
layout: post
authors: [viridi]
title: py list matrix 2d mul 1
permalink: pages/0484
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "multiplication", "scalar"]
date: 2022-02-17 09:56:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d-mul-1.md
twitter_username: 6unpnp
nodes: []
youtube: QCUBCJs8eZw
---
Perkalian matriks dengan skalar dalam Pyton dapat dilakukan menggunakan paket NumPy [[1](#r01)], yang perlu pendekatan tersendiri agar lebih cepat untuk matriks berukuran cukup besar [[2](#r02)]. Di sini akan dibahas pendekatan yang lebih sederhana menggunakan list, dan karena memang hanya untuk tujuan pembelajaran, diterapkan untuk matriks berukuran kecil.


## matrix multiplication with scalar
Terdapat suatu bilangan skalar $c \ne 0$ dan suatu matriks

\begin{equation}\label{eqn:matrix-a}
A = \left[
\begin{array}{ccc}
a_{11} & a_{12} & a_{13} \newline
a_{21} & a_{22} & a_{23} \newline
a_{31} & a_{32} & a_{33} \newline
a_{41} & a_{42} & a_{43} \newline
a_{51} & a_{52} & a_{53}
\end{array}
\right]
\end{equation}

yang akan dikalikan

\begin{equation}\label{eqn:matrix-b=ca}
B = cA,
\end{equation}

dengan 

\begin{equation}\label{eqn:matrix-b}
B = \left[
\begin{array}{ccc}
b_{11} & b_{12} & b_{13} \newline
b_{21} & b_{22} & b_{23} \newline
b_{31} & b_{32} & b_{33} \newline
b_{41} & b_{42} & b_{43} \newline
b_{51} & b_{52} & b_{53}
\end{array}
\right],
\end{equation}

di mana berlaku

\begin{equation}\label{eqn:matrix-b=ca-element}
b_{ij} = c a_{ij},
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
# 0480-matrix-no-numpy-mul1.py
# Multiply a matrix with a scalar
# 20220216 Create this example.

import matrix as mat

# multiply a matrix with a scalar
def mulmat1(m, a):
    # assume all rows have the same number of columns
    row = len(m)
    col = len(m[0])

    m2 = mat.newmat(row, col)
    
    # iterate through rows then colums
    for r in range(row):
        for c in range(col):
            m2[r][c] = m[r][c] * a

    return m2

# define a list as two-dimension matrix
m1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]

a = 2
m2 = mulmat1(m1, a)


# display results
print("m1:")
mat.printmat(m1)
print("a:")
print(a)
print("m2 = m1 · a:")
mat.printmat(m2)
```

yang memberikan hasil

```batch
===== RESTART: 0480-matrix-no-numpy-mul1.py ====
m1:
1	2	3	
4	5	6	
7	8	9	
a:
2
m2 = m1 · a:
2	4	6	
8	10	12	
14	16	18
```

saat dijalankan.

Modifikasi kode di atas, sehingga `mat` dapat tetap digunakan, dapat dijalankan di OneCompiler [3xtm8gj8p](https://onecompiler.com/python/3xtm8gj8p), yang memerlukan definisi suatu namespace `mat` berisikan fungsi yang diperlukan untuk menggantikan baris `import matrix as mat`

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

agar tidak perlu mengubah baris kode yang lain. Penggunaan pustaka `matrix` ini adalah untuk menyembuyikan fungsi-fungsi yang bukan menjadi fokus pembahasan di sini sehingga contoh program dapat masih cukup ringkas.


## exer
1. Terdapat berapa fungsi yang digunakan dalam paket `matrix`? Apa saja fungsi yang dimaksud?


## note
1. <a name="r01"></a>Deven, "How to multiply array by scalar in python", CodeSource, 12 Mar 2021, url <https://codesource.io/how-to-multiply-array-by-scalar-in-python/> [20220217].
2. <a name="r02"></a>Jérôme Richard, "Answer to 'Most efficient way to multiply a small matrix with a scalar in numpy'", Stack Overflow, 23 Apr 2021, url <https://stackoverflow.com/a/67233600/9475509> [20220217].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0484?src=hash&amp;ref_src=twsrc%5Etfw">#bug0484</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1494143384055091200?ref_src=twsrc%5Etfw">February 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) dua, yaitu `printmat` dan `newmat`; &nbsp;
</ans>
