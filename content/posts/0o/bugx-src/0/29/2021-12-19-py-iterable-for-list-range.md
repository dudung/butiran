---
layout: butir
authors: [viridi]
title: py iterable for list range
permalink: pages/0292
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["python 3", "iterable", "for", "list", "range"]
date: 2021-12-19 07:33:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/29/2021-12-19-py-iterable-for-list-range.md
twitter_username: 6unpnp
nodes: []
---
Dalam Python loop dengan for digunakan untuk proses berkelanjutan yang berurutan (sequential traversal) seperti pengulangan pada suatu iterable seperti string, tuple, list, array dan lainnya, yang termasuk dalam kategori iterasi terdefinisi [[1](#r01)]. Terdapat perbedaan antara range dan list, yang sejak Python 3.x range tidak lagi memproduksi list sehingga elemen-elemennya tidak lagi memerlukan memori untuk menyimpannya, melainkan hanya dibuat on the fly saat iterasi dilakukan, sehingga proses iterasinya menjadi lebih cepat [[2](#r02)].


## for
For pada Python dapat digunakan dengan bentuk

> `for var in iterable`

dengan variabel `var` akan berisikan elemen-elemen pada `iterable` yang disampaikan satu per satu, di mana

```
x = [3, 2, 1]
for i in x:
	print(i)
```

merupakan salah satu contohnya, yang akan menampilkan semua elemen dari `x` pada konsol satu per baris. Pada contoh di atas `var` adalah `i` dan `iterable` adalah `x`, serta elemen-elemen `x` adalah `3`, `2`, dan `1`. Contoh ini dapat dijalankan di [3xmrsn6v8](https://onecompiler.com/python/3xmrsn6v8).


## range
Range pada Python, yang berfungsi untuk membuat variabel immutable berisi urutan angka, bersifat inklusif [[3](#r03)] yang berarti bahwa argumen kedua `stop` tidak terikutkan dalam range yang dihasilkan, sedangkan argumen pertama `star` terikutkan, yang bentuk penggunaannya adalah

> `range(start, stop[, step])`

dengan contoh

```python
print(list(range(1, 11, 2)))
```

akan menghasilkan `[1, 3, 5, 7, 9]` dengan `11` tidak diikutsertakan. Coba contoh ini di [3xmrufzxt](https://onecompiler.com/python/). Terdapat penjelasan yang baik mengenai range() dengan disertai visualisasi yang menarik [[4](#r04)].


## example
Dapat digunakan range, list, dan list terbuat dari range sebagai iterable pada loop for, dengan masing-masing variabelnya adalah `ra`, `li`, dan `lira`, sebagaimana tersajikan pada kode berikut ini

```python
# python 3.9.1

# 0292-a.py
# Range and list for iteration
# 20211219
# Sparisoma Viridi | github.com/dudung
# url bugx.vercel.app/pages/0292.html
# ref

# Define a range
ra = range(0, 12, 2)
print(ra)
print(type(ra))
for i in ra:
    print(i)
print()

# Define a list
li = [0, 2, 4, 6, 8, 10]
print(li)
print(type(li))
for i in li:
    print(i)
print()

# Define a list from a range
lira = list(ra)
print(lira)
print(type(lira))
for i in lira:
    print(i)
print()
```

yang dapat dijalankan di [3xmrrdhp6](https://onecompiler.com/python/3xmrrdhp6) dan akan memberikan

```
range(0, 12, 2)
<class 'range'>
0
2
4
6
8
10

[0, 2, 4, 6, 8, 10]
<class 'list'>
0
2
4
6
8
10

[0, 2, 4, 6, 8, 10]
<class 'list'>
0
2
4
6
8
10
```

sebagai hasilnya.


## exer
1. Bagaimana nilai-nilai `i` bila digunakan pada `range(0, 6, 1)`?
2. Kode `range(5, -1, -1)` akan menghasilkan iterable dengan nilai-nilai berapa saja?
3. Mengapa range() dikatakan bersifat inklusif?
4. Modifikasi `range(1, 7, 2)` agar dihasilkan 1, 3, 5, 7. Manfaatkan contoh di [3xmrvkd7g](https://onecompiler.com/python/3xmrvkd7g) bila diperlukan.
5. Bila `x` merupakan suatu range dan ingin dibuat menjadi list dalam variabel bernama `y`, bagaimana caranya?


## note
1. <a name="r01"></a>nikhilaggarwal3, ankushgarg1998
balajikawle777, "Python For Loops", GeeksforGeeks, 25 Aug 2021, url <https://www.geeksforgeeks.org/python-for-loops/> [20211219].
2. <a name="r02"></a>Anand S Kumar, "Answer to 'What is the difference between "range(0,2)" and "list(range(0,2))"?'", Stack Overflow, 5 Jul 2015, url <https://stackoverflow.com/a/31227578> [20211218].
3. <a name="r03"></a>Krunal, "Python Range Inclusive: Why Range Does Not Include End", AppDivident, 24 Mar 2021, url <https://appdividend.com/2021/03/24/python-range-inclusive/> [20211219].
4. <a name="r04"></a>Vishal Hule, "Python range() Explained with Examples", PYnative, 16 Jun 2021, url <https://pynative.com/python-range-function/> [20211219].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0292?src=hash&amp;ref_src=twsrc%5Etfw">#bug0292</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1472353014627254274?ref_src=twsrc%5Etfw">December 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) 0, 1, 2, 3, 4, 5; &nbsp;
2) 5, 4, 3, 2, 1, 0; &nbsp;
3) karena argumen <code>stop</code> tidak disertakan; &nbsp;
4) <code>range(1, 7, 8)</code>; &nbsp;
5) <code>y = list(x)</code>; &nbsp;
</ans>
