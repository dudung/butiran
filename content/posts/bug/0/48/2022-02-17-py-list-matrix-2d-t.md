---
layout: post
authors: [viridi]
title: py list matrix t
permalink: pages/0486
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "transpose"]
date: 2022-02-17 13:30:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-17-py-list-matrix-2d-t.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Melakukan transpose suatu matriks dalam bahasa pemrograman Python dapat dilakukan pada list dengan bantuan pengulangan for bersarang dua [[1](#r01)] atau hanya dalam satu baris [[2](#r02)]. Dengan memanfaatkan paket numerik NumPy perintah keseluruhannya cukup dalam satu baris [[3](#r03)]


## transpose a matrix
Terdapat suat matriks

\begin{equation}\label{eqn:matrix-a}
A = \left[
\begin{array}{ccc}
a_{11} & a_{12} & a_{13} & a_{14} \newline
a_{21} & a_{22} & a_{23} & a_{24}
\end{array}
\right]
\end{equation}

yang akan ditranspose melalui

\begin{equation}\label{eqn:matrix-b=aT}
B = A^T,
\end{equation}

dengan

\begin{equation}\label{eqn:matrix-B}
B = \left[
\begin{array}{ccc}
b_{11} & b_{12} \newline
b_{21} & b_{22} \newline
b_{31} & b_{32} \newline
b_{41} & b_{42}
\end{array}
\right].
\end{equation}

Terdapat hubungan

\begin{equation}\label{eqn:matrix-b=aT-element}
b_{ij} = a_{ji}
\end{equation}

antar setiap elemen dari kedua matriks.


## a code
Suatu pustaka `matrix.py` berisikan setidaknya

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
# 0480-matrix-no-numpy-t.py
# Transpose a matrix
# 20220217 Create this example.

import matrix as mat

# transpose a matrix
def tmat(m):
    row = len(m)
    col = len(m[0])

    mT = mat.newmat(col, row)

    for r in range(row):
        for c in range(col):
            mT[c][r] = m[r][c]

    return mT

# define a list as two-dimension matrix
m1 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 0],
    ]

m2 = tmat(m1)


# display results
print("m1:")
mat.printmat(m1)
print("m2 = m1^T:")
mat.printmat(m2)
```

yang memberikan hasil

```batch
==== 0480-matrix-no-numpy-t.py ====
m1:
1	2	3	4	5	
6	7	8	9	0	
m2 = m1^T:
1	6	
2	7	
3	8	
4	9	
5	0
```

saat dijalankan.

Modifikasi kode di atas, sehingga `mat` dapat tetap digunakan, dapat dijalankan di OneCompiler [3xtmhru5d](https://onecompiler.com/python/3xtmhru5d), yang memerlukan definisi suatu namespace `mat` berisikan fungsi yang diperlukan untuk menggantikan baris `import matrix as mat`

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
1. Apakah suatu matriks dapat dikalikan dengan transposenya? Bila ya bagaimana sifat hasilnya?


## note
1. <a name="r01"></a>GeeksforGeeks, "Python Program to find transpose of a matrix", GeeksforGeeks, 30 Dec 2020, url <https://www.geeksforgeeks.org/python-program-to-find-transpose-of-a-matrix/> [20220217]
2. <a name="r02"></a>Vaibhav, "Transpose a Matrix in Python", DelfStack, 29 Nov 2021, url <https://www.delftstack.com/howto/python/transpose-a-matrix-in-python/> [20220217]
3. <a name="r03"></a>GeeksforGeeks, pwakchaure, tahmidhasan3003, punamsingh628700, "Transpose a matrix in Single line in Python", GeeksforGeeks, 24 Dec 2021, url <https://www.geeksforgeeks.org/transpose-matrix-single-line-python/> [20220217]

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0486?src=hash&amp;ref_src=twsrc%5Etfw">#bug0486</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1494196921032134657?ref_src=twsrc%5Etfw">February 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ya, matriks bujursangkar; &nbsp;
</ans>
