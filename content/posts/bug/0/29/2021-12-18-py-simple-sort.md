---
layout: butir
authors: [viridi]
title: py simple sort
permalink: pages/0291
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["python", "list", "array", "bubble sort", "sorting", "sort", "sorted"]
date: 2021-12-18 22:06:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/29/2021-12-18-py-simple-sort.md
twitter_username: 6unpnp
nodes: []
---
Bagi kebanyakan orang, bubble sort sepertinya merupakan algoritma mengurutkan pertama yang didengar dalam kuliah sains komputer mereka [[1](#r01)], dengan visualisasi prosesnya disertai diagram alir terkait telah tersedia [[2](#r02)]. Algoritma sederhana ini bekerja buruk dalam penggunaan sebenarnya dan pemanfaatan utama algoritma ini adalah untuk alat edukasi [[3](#r03)]. Dalam Python telah terdapat metode dan fungsi bawaaan untuk mengurutkan larik berjenis list, yaitu sort() [[4](#r04)] dan sorted() [[5](#r05)].

## buble sort code
Dengan membandingkan dua bilangan berurutan dan menukar tempatnya bila suatu kondisi terpenuhi, biasanya bilangan pertama lebih kecil dari bilangan kedua, dapat dihasilkan kode berikut

```python
# Sort using bubble sort
print("x: bubble sort")
x = [9, 2, 5, 8, 4, 3, 6, 7, 1, 0]
print(x)
N = len(x)
for i in range(0, N-1):
    for j in range(i+1, N):
        if x[i] > x[j]:
            x[i], x[j] = x[j], x[i]
print(x)
```

dengan hasilnya adalah

```
x: bubble sort
[9, 2, 5, 8, 4, 3, 6, 7, 1, 0]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

yang dapat dicoba secara daring pada [3xmqnd8zw](https://onecompiler.com/python/3xmqnd8zw).


## built-in method and function
Sebuah list memiliki metode bawaan sort() yang berfungsi untuk mengurutkan nilai-nilai yang disimpannya. Selain itu Python juga menyediakan fungsi bawaan sorted() yang menerima argumen sebuah list dan mengembalikan nilai fungsi list yang sudah diurutkan nilai-nilai yang disimpannya.

### sort()
Kode berikut

```python
# Sort using sort() built-in method
print("y: sort() method")
y = [9, 2, 5, 8, 4, 3, 6, 7, 1, 0]
print(y)
y.sort()
print(y)
```

akan menghasilkan

```
y: sort() method
[9, 2, 5, 8, 4, 3, 6, 7, 1, 0]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

yang dapat dicoba di [3xmqnr4d2](https://onecompiler.com/python/3xmqnr4d2).

### sorted()
Dengan kode di [3xmqnwacn](https://onecompiler.com/python/3xmqnwacn) berupa

```python
# Sort using sorted() built-in function
print("z: sorted() function")
z = [9, 2, 5, 8, 4, 3, 6, 7, 1, 0]
print(z)
z = sorted(z)
print(z)
```

akan diperoleh

```
z: sorted() function
[9, 2, 5, 8, 4, 3, 6, 7, 1, 0]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

sebagai hasilnya.


## exer
1. Perhatikan kode berikut
	```python
	nums1 = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
	nums2 = sorted(nums1)
	print(nums1)
	print(nums2)
	```
	yang terdapat di [3xmqp7j6a](https://onecompiler.com/python/3xmqp7j6a). Bagaimana hasilnya?
2. Mengacu pada soal sebelumnya mengapa berbeda hasil pada list pertama dan kedua?
3. Kapan digunakan sort() dan kapan digunakan sorted()?
4. Apakah metode sort() dan funsi sorted() dapat mengurutkan dari besar ke kecil?
5. Pada contoh kode bubble sort yang diberikan modifikasi apa yang diperlukan agar hasilnya adalah mengurutkan bilangan dari besar ke kecil? Perhatikan kode di [3xmqppuhu](https://onecompiler.com/python/3xmqppuhu), bila diperlukan.


## note
1. <a name="r01"></a>Olivera Popović, "Bubble Sort in Python", Stack Abuse, 10 Feb 2020, url <https://stackabuse.com/bubble-sort-in-python/> [20211218]. 
2. <a name="r02"></a>DataSoft, "Python Data Structures and Algorithms: Bubble sort", W3Resource, 4 Jan 2021, url <https://www.w3resource.com/python-exercises/data-structures-and-algorithms/python-search-and-sorting-exercise-4.php> [20211218].
3. <a name="r03"></a>Wikipedia contributors, "Bubble sort", Wikipedia, The Free Encyclopedia, 23 November 2021, 22:16 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1056844603> [20211218].
4. <a name="r04"></a>kartik, shubham_singh, AmiyaRanjanRout, "Python List sort() method", GeeksforGeeks, 3 Aug 2021, url <https://www.geeksforgeeks.org/python-list-sort-method/> [20211218].
5. <a name="r05"></a>Parewa Labs, "Python sorted()", Programiz, url <https://www.programiz.com/python-programming/methods/built-in/sorted> [20211218].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0291?src=hash&amp;ref_src=twsrc%5Etfw">#bug0291</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1472220899931656197?ref_src=twsrc%5Etfw">December 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) `[5, 6, 7, 8, 9, 0, 1, 2, 3, 4]` dan `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`; &nbsp; 2) list pertama tidak diurutkan, karena list kedua yang merupakan hasil mengurutkan list pertama, tidak mengubah isi list pertama; &nbsp; 3) saat list ingin diubah isinya, saat ingin mendapatkan isi list yang telah diurutkan tetapi tidak mengubah isi list awal; &nbsp; 4) ya, dapat; &nbsp; 5) mengubah bagian `if x[i] > x[j]:` menjadi `if x[i] < x[j]:`; &nbsp;
</ans>
