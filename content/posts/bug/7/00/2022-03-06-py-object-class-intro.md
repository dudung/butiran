---
layout: butir
authors: [viridi]
title: py object class intro
permalink: pages/7000
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: programming
tags: ["python", "code", "object", "class"]
date: 2022-03-06T21:27:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/7/00/2022-03-06-py-object-class-intro.md
twitter_username: 6unpnp
nodes: []
---
Python merupakan suatu bahasa pemrograman berorientasi obyek, di mana obyek (object) secara sederhana merupakan koleksi data (variabel) dan metode (fungsi) yang bekerja pada data tersebut, dengan kelas (class) adalah cetak biru dari obyek [[1](#r01)].


## start a class
Sebuah kelas dalam Python dimulai dengan mendefinisikannya menggunakan suatu kata kunci <a>class</a> yang kemudian dilajutkan dengan string pertama dalam kelas yang disebut dengan docstring dan string ini mengandung deskripsi kelas, yang walaupun tidak wajib, akan tetapi dianjurkan untuk dituliskan.

```python
class MathVector:
  '''A vector in Mathematics'''
	
	# initialize instance
  def __init__(self, x=0, y=0, z=0):
    self.x = x
    self.y = y
    self.z = z
  
  # print (x, y z)
  def print(self):
    print(f'({self.x}, {self.y}, {self.z})')
```

Dalam kode Python yang tepat nama suatu kelas sebagaiknya diawali dengan huruf besar [[2](#r02)]. Sebagai contoh akan dibuat vektor dalam matematika [[3](#r03)] dalam bentuk yang sederhana. Bedakan vektor ini dengan class Vector pada NumPy [[4](#r04)].

### use the class
Kelas MathVector yang telah dibuat di atas dapat dipanggil dengan cara

```python
# create a zero vector
a = MathVector()
print("a = ", end='')
a.print()

# create a vector
b = MathVector(3, 2, -10)
print("b = ", end='')
b.print()
```

sehingga menghasilkan

```batch
Output:

a = (0, 0, 0)
b = (3, 2, -10)
```

yang contoh programnya dapat dijalankan secara daring di OneCompiler [3xvaxmdtg](https://onecompiler.com/python/3xvaxmdtg).


## advance the class
..


## note
1. <a name="r01"></a>Programiz, "Python Objects and Classes", Programiz, Parewa Labs Pvt. Ltd., 21 Nov 2016, url <https://www.programiz.com/python-programming/class> [20220306].
2. <a name="r02"></a>Kris Bredemeier, "Class and Object in Python", Medium, 22 Apr 2017, url <https://medium.com/@krisbredemeier/class-and-object-in-python-2d5980eeb92c> [20220306].
3. <a name="r03"></a>Andrew Zimmerman Jones, "Introduction to Vector Mathematics", ThoughtCo, 7 Mar 2019, url <https://www.thoughtco.com/introduction-to-vector-mathematics-2699043> [20220306].
4. <a name="r04"></a>rakshitarora, ujjwalhanda, manikarora059, sweetyty, "How to create a vector in Python using NumPy", GeeksforGeeks, 28 Oct 2021, url <https://www.geeksforgeeks.org/how-to-create-a-vector-in-python-using-numpy/> [20220306].

url <https://www.geeksforgeeks.org/class-method-vs-static-method-python/>

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
