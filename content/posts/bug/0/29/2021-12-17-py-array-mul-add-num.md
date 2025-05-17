---
layout: butir
authors: [viridi]
title: py array mul add num
permalink: pages/0290
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["python", "list", "array", "multiply", "add"]
date: 2021-12-18 18:57:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/29/2021-12-17-py-array-mul-add-num.md
twitter_username: 6unpnp
nodes: []
---
Array merupakan struktur data yang terdiri dari kumpulan elemen, berupa nilai atau variabel, yang dirujuk dengan setidaknya satu indeks atau key, di mana dalam implementasinya yang bergantung pada bahasa pemrograman jenis array ini dapat beririsan dengan jenis data lainnya yang menyimpan agregat nilai seperti list dan string [[1](#r01)]. Larik merupakan terjemahan array dalam bahasa Indonesia [[2](#r02)]. Dalam Python terdapat perbedaan antara array dan list [[3](#r03)], yang saat mengaksesnya dapat melalui iterasi [[4](#r04)] ataupun terlihat tidak [[5](#r05)]. Cara yang terakhir ini terlihat lebih elegan akan tetapi memerlukan pemahaman akan adanya iterasi yang berlangsung secara tersirat. Untuk membantu pemahaman kode lengkap yang disajikan dapat dicoba langsung pada kompiler daring seperti OneCompiler [[6](#r06)].


## list and array
Terdapat list dan array dalam Python, di mana struktur data yang terakhir tersedia melalui modul array dan paket numpy, yang sifatnya berbeda [[3](#r03)].

### built-in list
Suatu list dapat digunakan dengan cara

```python
# Use list 1
lst1 = [1, 2, 8, 16, 32]
print(lst1)
print(type(lst1))
print()
```

dengan hasilnya adalah

```
[1, 2, 8, 16, 32]
<class 'list'>
```

atau melalui penggunaan konstruktor

```python
# Use list 2
lst2 = list([1, 2, 8, 16, 32])
print(lst2)
print(type(lst2))
print()
```

yang akan memberikan hasil yang sama. List merupakan salah satu dari empat jenis data bawaan (built-in) yang disediakan Python untuk menyimpan sekumpulan data [[7](#r07)].

### array module
Dengan memanfaatkan modul array pada Python dapat dilakukan

```python
# Import necessary module or package
import array as arr

# Use array from array module
arr1 = arr.array('i', [1, 2, 8, 16, 32])
print(arr1)
print(type(arr1))
print()
```

yang akan menghasilkan

```
array('i', [1, 2, 8, 16, 32])
<class 'array.array'>
```

dengan batasan bahwa jenis array dari modul array hanya mendukung satu jenis data, yang pada contoh di atas berjenis bilangan bulat atau integer dengan argumen pertamanya `'i'`.

### numpy package
Dalam paket numpy terdapat pula array yang mendukung jenis data yang berbeda dalam satu array. Untuk contoh sebelumnya, dapat dilakukan

```python
# Import necessary module or package
import numpy as np

# Use array from numpy package
arr2 = np.array(lst1)
print(arr2)
print(type(arr2))
print()
```

yang akan memberikan hasil

```
[ 1  2  8 16 32]
<class 'numpy.ndarray'>
```

yang sama dengan hasil menggunakan list.

### code of 0290-a
Potongan-potongan kode sebelumnya dapat dituliskan dalam satu program kecil

```python
# python 3.9.1

# 0290-a.py
# Example of list and array
# 20211218
# Sparisoma Viridi | github.com/dudung
# url bugx.vercel.app/pages/0290.html
# ref

# Import necessary module or package
import array as arr
import numpy as np

# Use list 1
lst1 = [1, 2, 8, 16, 32]
print(lst1)
print(type(lst1))
print()

# Use list 2
lst2 = list(lst1)
print(lst2)
print(type(lst2))
print()

# Use array from array module
arr1 = arr.array('i', lst1)
print(arr1)
print(type(arr1))
print()

# Use array from numpy package
arr2 = np.array(lst1)
print(arr2)
print(type(arr2))
print()
```

yang dapat langsung dijalankan dengan [3xmpf8nuh](https://onecompiler.com/python/3xmpf8nuh) pada OneCompiler.


## data with linear function
Data dapat diperoleh dari observasi atau pengukuran, akan tetapi dapat pula dibuat dengan menggunakan suatu fungsi, yang untuk saat ini digunakan fungsi linier.

### linear function
Sebuah fungsi linier, yang grafiknya berbentuk garis lurus,  memiliki bentuk

\begin{equation}\label{eqn:linear-function}
y = f(x) = a + bx,
\end{equation}

dengan $a$ adalah suatu konstanta atau titik potong pada sumbu $y$ dan $b$ adalah koefisien dari variabel bebas $x$, yang juga diketahui sebagai kemiringan kurva dan memberikan laju perubahan dari variabel terikat $y$ [[8](#r08)]. Persamaan \eqref{eqn:linear-function} dapat diterapkan dalam Python

```python
f = lambda x,a,b : a+b*x
```

dengan memanfaatkan fungsi Lambda [[9](#r09)].

### generating data
Dapat didefinsikan data untuk variabel bebas menggunakan larik seperti

```python
x = [1, 2, 4, 8, 16, 32]
```

dan ingin dibuat data untuk variabel terikatnya menggunakan fungsi linier seperti pada Persamaan \eqref{eqn:linear-function} dengan nilai $a$ dan $b$ tertentu, sehingga diperoleh

```
y = a + bx
a =  1
b =  2
x =  [1, 2, 8, 16, 32]
y =  [3, 5, 9, 17, 33, 65]
```

sebagai suatu hasil misalnya.

### code of 0290-b
Hasil sebelumnya di atas dan potongan kodenya dapat digabungkan menjadi

```python
# python 3.9.1

# 0290-b.py
# Linear function for list with lambda function
# 20211218
# Sparisoma Viridi | github.com/dudung
# url bugx.vercel.app/pages/0290.html
# ref 0290-a.py

# Import necessary module or package
import array as arr
import numpy as np

# Define independent variables in x
x = [1, 2, 4, 8, 16, 32]

# Defina a lambda function for f
f = lambda x,a,b: a+b*x
a = 1
b = 2

# Create dependent variables in y
y = []
for i in x:
    y.append(f(i, a, b))

# Show result
print("y = a + bx")
print("a = ", a)
print("b = ", b)
print("x = ", x)
print("y = ", y)
```

yang dapat dijalankan dengan [3xmpncwzn](https://onecompiler.com/python/3xmpncwzn) di OneCompiler.


## alternatives
Terdapat dua cara alternatif [[5](#r05)] untuk mendapatkan larik variabel terikat dari larik variabel bebas dengan fungsi linier seperti pada Persamaan \eqref{eqn:linear-function}.

### for inside square brackets
Dalam suatu list dapat dituliskan

```python
# Create dependent variables in y2 from x2
x2 = [1, 2, 4, 8, 16, 32]
y2 = [f(i, a, b) for i in x2]
```

dengan

```
x2 =  [1, 2, 4, 8, 16, 32]
y2 =  [3, 5, 9, 17, 33, 65]
```

adalah hasilnya. Cara ini sedikit lebih sedikit satu baris dibandingkan dengan cara sebelumnya.

### operators with numpy array
Jenis variabel array dalam numpy dapat digunakan sehingga operasi yang cukup sederhana seperti

```python
# Create dependent variables in y3 from x3
x3 = np.array([1, 2, 4, 8, 16, 32])
y3 = a + b * x3
````

di mana $\mathbf{y}_3$ tak lain adalah penjumlahan matriks $\mathbf{a}$ dengan hasil perkalian skalar $b$ dengan matriks $\mathbf{x}_3$

$$
\mathbf{y}_3 = \mathbf{a} + b \ \mathbf{x}_3,
$$

yang akan memberikan

```
x3 =  [ 1  2  4  8 16 32]
y3 =  [ 3  5  9 17 33 65]
```

sebagai hasilnya.

### code of 0290-c
Program singkat berikut ini menggabungkan potongan-potongan kode sebelumnya

```python
# python 3.9.1

# 0290-c.py
# Linear function for list with lambda function
# 20211218
# Sparisoma Viridi | github.com/dudung
# url bugx.vercel.app/pages/0290.html
# ref 0290-a.py
# ref 0290-b.py

# Import necessary module or package
import numpy as np

# Defina a lambda function for f
f = lambda x,a,b: a+b*x
a = 1
b = 2

# Create dependent variables in y1 from x1
x1 = [1, 2, 4, 8, 16, 32]
y1 = []
for i in x1:
    y1.append(f(i, a, b))

# Create dependent variables in y2 from x2
x2 = [1, 2, 4, 8, 16, 32]
y2 = [f(i, a, b) for i in x2]

# Create dependent variables in y3 from x3
x3 = np.array([1, 2, 4, 8, 16, 32])
y3 = a + b * x3

# Show result
print("y = a + bx")
print("a = ", a)
print("b = ", b)
print("x1 = ", x1)
print("y1 = ", y1)
print("x2 = ", x2)
print("y2 = ", y2)
print("x3 = ", x3)
print("y3 = ", y3)
```

yang dapat dieksekusi dengan [3xmpwmptx](https://onecompiler.com/python/3xmpwmptx) di OnlineCompiler.


## comparison
Dari kode `0290-b` dan `0290-c` terdapat ketiga cara yang dapat digunakan untuk menerapkan fungsi linier pada suatu larik data sebagai variabel bebas untuk menghasilkan larik data yang merupakan variabel terikat. Bagian utama dari ketiga cara tersebut diberikan pada Gambar [1](#fig1) berikut ini.

![]({{ site.baseurl }}/assets/img/0/29/0290-a.png) |![]({{ site.baseurl }}/assets/img/0/29/0290-b.png) | ![]({{ site.baseurl }}/assets/img/0/29/0290-c.png)

Gambar <a name="fig1">1</a>. Pembandingan visual potongan kode untuk ketiga cara.

Suatu program yang lebih pendek, dengan menghapus komentar-komdentarnya, yang mengilustrasikan pemanfaatan dari potongan kode pada Gambar [1](#fig1) dapat dijalankan melalui [3xmpxyc8r](https://onecompiler.com/python/3xmpxyc8r) di OneCompiler.


## exer
1. Pesan kesalahan apa yang muncul bila baris kedua dari potongan kode pada Gambar [1](#fig1) (kiri) dihapus?
2. Apa hasil dari perintah `print(type(y3))` bila diletakkan pada baris terakhir pada program `0290-c`?
3. Apa makna dari kode berikut
	```python
	# Define dot product function
	dot = lambda x1,y1,x2,y2 : x1*x2 + y1*y2

	# Project vector 3x + 4y to x
	proj_to_x = dot(3,4,1,0)
	print(proj_to_x)

	# Project vector 3x + 4y to y
	proj_to_y = dot(3,4,0,1)
	print(proj_to_y)
	```
	yang dapat dijalankan di [3xmq3naxn](https://onecompiler.com/python/3xmq3naxn)?
4. Volume suatu benda berbentuk balok dihitung dengan rumus $V = l \cdot w \cdot h$, dengan $l$ panjang, $w$ lebar, dan $h$ tinggi. Buatlah fungsi untuk menghitungya. Gunakan fungsi lambda yang disediakan Python.
5. Dari kode berikut
	```python
	x = [1, 2, 3, 4, 5]; y = [i*i for i in x]; print(x, y)
	```
	tuliskan hasilnya.
6. Dengan memodifikasi kode sebelumnya menjadi
	```python
	x = [1, 2, 3, 4, 5] y = [i*i for i in x] print(x, y)
	```
	jelaskan hasil yang diperoleh.


## note
1. <a name="r01"></a>Kenneth Leroy Busbee, Dave Braunschweig, "", Programming Fundamentals, 15 Dec 2018, url <https://press.rebus.community/programmingfundamentals/chapter/arrays-and-lists/> [20211217].
2. <a name="r02"></a>Kontributor Wikipedia, "Larik", Wikipedia, Ensiklopedia Bebas, 12 Agustus 2021, 05.15 UTC, url <https://id.wikipedia.org/w/index.php?oldid=18961559> [20211217].
3. <a name="r03"></a>Kateryna Koidan, "Array vs. List in Python – What's the Difference?", LearnPython, Vertabelo SA, 17 Dec 2019, url <https://learnpython.com/blog/python-array-vs-list/> [20211217].
4. <a name="r04"></a>Uni_Omni, Akanksha_Rai, espinozahg, punamsingh628700, "Iterate over a list in Python", GeeksforGeeks, 6 Nov 2021, url <https://www.geeksforgeeks.org/iterate-over-a-list-in-python/> [20211217].
5. <a name="r05"></a>"How to multiply each element of a list by a number in Python", Kite, url <https://www.kite.com/python/answers/how-to-multiply-each-element-of-a-list-by-a-number-in-python> [20211217].
6. <a name="r06"></a>"One Compiler", 2021, url <https://onecompiler.com/> [20211218].
7. <a name="r07"></a>Refsnes Data, "Python Lists", W3Schools, 2 Sep 2021, url <https://www.w3schools.com/python/python_lists.asp> [20211218]. 
8. <a name="r08"></a>"Linear Functions", Economics and Mathematics, Columbia University, 2021, url <http://www.columbia.edu/itc/sipa/math/linear.html> [20211218].
9. <a name="r09"></a>Venmani A D, "Lambda Function in Python – How and When to use?", Machinelearningplus, 12 Sep 2020, url <https://www.machinelearningplus.com/python/lambda-function/> [20211218].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0290?src=hash&amp;ref_src=twsrc%5Etfw">#bug0290</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1472157436869967874?ref_src=twsrc%5Etfw">December 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) `NameError: name 'y1' is not defined`; &nbsp;
2) `<class 'numpy.ndarray'>`; &nbsp;
3) Menghitung proyeksi vektor $\vec{r} = 3\hat{x} + 4\hat{y}$ masing-masing pada arah $x$ dan $y$.
4) `vol = lambda l,w,h : l*w*h`; &nbsp;
5) `[1, 2, 3, 4, 5] [1, 4, 9, 16, 25]`; &nbsp;
6) `SyntaxError: invalid syntax` karena perlu disisipkan karakter `;` sebagai pengganti baris baru; &nbsp;
</ans>
