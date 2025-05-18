---
layout: post
authors: [viridi]
title: py list matrix pkg
permalink: pages/0487
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["python 3", "list", "matrix", "2d", "package", "addition", "substraction", "multiplication", "transpose"]
date: 2022-02-17 15:37:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/48/2022-02-16-py-list-matrix-2d-pkg.md
twitter_username: 6unpnp
nodes: []
youtube: 8Vdpl_GQpUk
---
Operasi matriks di Python dapat dilakukan dengan berbantuan berbagai paket, misalnya saja adalan NumPy [[1](#r01)]. Di sini akan disajikan paket buatan sendiri tentang matriks yang dapat untuk menjumlahkan dan mengurangkan dua buah matriks, perkalian matriks dengan matriks, perkalian matriks dengan skalar, dan transpos suatu matriks. Digunakan hanya list Python dan pengulangan for.


## some packages
Selain NumPy, terdapat sekitar 260 paket Python terkait dengan matriks (Matrix) yang telah disaring dengan topik Scientific/Engineering lalu Mathematics [[2](#r02)].

![]({{ site.baseurl }}/assets/img/0/48/0487-a.png) \
Gambar <a name='fig1'>1</a>. Hasil teratas pencarian paket Python dengan katan kunci 'matrix' dan diberi filter 'Scientific/Engineering lalu Mathematics' di PyPI.

Selain itu dapat pula dicari di GitHub untuk itu seperti diberikan pada gambar berikut ini, sekitar 23 repositori [[3](#r03)].

![]({{ site.baseurl }}/assets/img/0/48/0487-b.png) \
Gambar <a name='fig2'>2</a>. Hasil tiga teratas pencarian paket Python dengan katan kunci 'matrices python mathematics' di GitHub.

Demikianlah sekilas adanya paket-paket terkait matriks yang tersedia sebagaimana hasil pencariannya telah ditampikan pada Gambar [1](#fig1) dan [2](#fig2). Hasil pencarian sebenarnya akan lebih banyak dari 260 + 23 tersebut.


## the code
Paket `matrix` buatan sendiri adalah sebagai berikut ini.

```python
# matrix.py
# Sparisoma Viridi | https://github.com/dudung
# Simple matrix library using list
# 20220216 Create this example.
# 20220217 Add transpose.

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
            newcol = m1[r][c] - m2[r][c]
            newrow.append(newcol)
        m3.append(newrow)
    
    return m3

# multiply a matrix with a scalar
def mulmat1(m, a):
    # assume all rows have the same number of columns
    row = len(m)
    col = len(m[0])

    m2 = newmat(row, col)
    
    # iterate through rows then colums
    for r in range(row):
        for c in range(col):
            m2[r][c] = m[r][c] * a

    return m2

# multiply a matrix with a matrix
def mulmat2(m1, m2):
    # assume colum of 1st and row of 2nd are matched
    row = len(m1)
    mid = len(m1[0])
    col = len(m2[0])

    m3 = newmat(row, col)
    
    # iterate through rows then colums
    for r in range(row):
        for c in range(col):
            temp = 0
            for m in range(mid):
                temp = temp + m1[r][m] * m2[m][c]
            m3[r][c] = temp

    return m3

# transpose a matrix
def tmat(m):
    row = len(m)
    col = len(m[0])

    mT = mat.newmat(col, row)

    for r in range(row):
        for c in range(col):
            mT[c][r] = m[r][c]

    return mT
```

yang bila diletakkan pada folder yang sama dengan suatu berkas Python lainnya, dapat dipanggil melalui berkas tersebut. Baris berikut

```python
import matrix as mat
```

perlu diletakkan dalam berkas pemanggilnya. Bila paket tersebut dijalankan, akan diperoleh

```batch
==== RESTART: matrix.py ====
```
sebagai hasilnya, yang menunjukkan setidaknya tidak terdapat kesalahan penulisan baris-baris kodenya, akan tetapi belum dijalankan.


# exer
1. Apa hasil dari potongan kode berikut ini?
	```python
	import matrix as mat
	m = mat.newmat(1, 4)
	mat.printmat(m)
	```


## note
1. <a name="r01"></a>NumPy Developers, "Creating matrices", NumPy, 2022, url <https://numpy.org/doc/stable/user/absolute_beginners.html#creating-matrices> [20220217].
2. <a name="r02"></a>"matrix - FILTER	TOPIC :: SCIENTIFIC/ENGINEERING :: MATHEMATICS", PyPI,  Python Software Foundation, url <https://pypi.org/search/?q=matrix&o=&c=Topic+%3A%3A+Scientific%2FEngineering+%3A%3A+Mathematics> [20220217].
3. <a name="r03"></a>
"matrices python mathematics -- 23 repository results", GitHub, Inc., 2022, url <https://github.com/search?l=Python&q=matrices+python+mathematics&type=Repositories> [20220217].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0487?src=hash&amp;ref_src=twsrc%5Etfw">#bug0487</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1494229177301880834?ref_src=twsrc%5Etfw">February 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) `0  0  0  0`; &nbsp;
</ans>
