---
layout: post
authors: [viridi]
title: pseudocode
permalink: pages/0382
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["problem solving", "algorithm", "pseudocode"]
date: 2022-01-20 19:34:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/38/2022-01-18-pseudocode.md
twitter_username: 6unpnp
nodes: []
---
Secara harfiah pseudocode berarti kode palsu, yang merupakan cara informal dan dibuat-buat dalam penulisan program dengan menyampaikan urutan tindakan dan instruksi (algoritma) dalam bentuk yang mudah dipahami manusia [[1](#r01)]. Atau dapat dikatakan bahwa pseudocode merupakan suatu metodologi yang mengijinkan programer untuk menampilkan implementasi suatu algoritma [[2](#r02)]. Dalam pseudocode detil yang penting agar mesin (komputer) dapat memahami algoritma, seperti deklarasi variabel dan kode khusus bahasa, diabaikan atau tidak digunakan [[3](#r03)]. Mencari luas lapangan sepak bola, menentukan bilangan genap atau ganjil, menghitung mundur, menghitung luas segitiga, dan menghitung luas lingkaran dapat menjadi contoh kasus untuk pseudocode [[4](#r04)].


## language independent
Pseudocode digunakan dalam perencanaan algoritma dengan membuat sketsa struktur suatu program sebelumn aktivitas sebenarnya dalam membuat kode dilakukan, yang biasanya dituliskan oleh perancang sistem untuk memastikan para pemrogram mengerti kebutuhan piranti lunak dan dapat menyelaraskan kode yang akan dibuat, yang karena merupakan cara informal dalam deskripsi pemrograman tidak memerlukan sintaks bahasa pemrograman apapun dengan ketat ataupun pertimbanan teknologi yang mendasarinya [[5](#r05)]. Secara umum kosa kata yang digunakan dalam suatu pseudocode harus berasal domain masalah yang akan dipecahkan dan bukan dari domain penerapannya, e.g. berbagai bahasa pemrograman [[6](#r06)]. Walaupun demikian terkadang sulit untuk benar-benar meninggalkan kosa kata dalam bahasa pemrograman, sehingga jalan tengah yang baik adalah melihat pseudocode sebagai suatu program komputer yang tersusun secara sederhana menggunakan setengah bahasa Inggris dan setengah kode [[7](#r07)].


## examples
Banyak contoh yang dapat dicari dengan menggunakan mesin pencari. Tiga buah di antaranya disajikan berikut ini.

### moving a robot
Gerak maju suatu robot dengan memeriksa terlebih dahulu apakah terdapat penghalang di hadapannya [[6](#r06)].

>IF robot has no obstacle in front THEN \
>&emsp;&emsp;Call Move robot \
>&emsp;&emsp;Add the move command to the command history \
>&emsp;&emsp;RETURN true \
>ELSE \
>&emsp;&emsp;RETURN false without moving the robot \
>END IF

### computing sales tax
Menentukan harga final suatu barang setelah memperhitungkan pajak penjualannya [[7](#r07)].

> GET price of item \
> GET sales tax rate \
> sales tax = price of item times sales tax rate \
> final price = price of item plus sales tax \
> DISPLAY final price \
> Halt

### calculating grade average
Menghitung rata-rata nilai peserta kuliah yang berjumlah sepuluh orang [[8](#r08)]

>SET total to zero \
>SET grade counter to one \
>WHILE grade counter is less than or equal to ten \
>&emsp;&emsp;Input the next grade \
>&emsp;&emsp;Add the grade into the total \
>&emsp;&emsp;Set the class average to the total divided by ten \
>DISPLAY the class average

Perhatikan bahwa telah digunakan kosa kata yang umum dalam berbagai bahasa pemrograman seperti GET, SET, DISPLAY, WHILE, IF, THEN, dan END. Lalu perhatikan pula bahwa pada contoh pertama blok IF diakhir dengan END IF sedangkan pada contoh ketiga blok WHILE cukup ditandai dengan baris-baris yang menjorok ke dalam. Contoh dengan END IF terpengaruh dengan sintaks BASIC [[9](#r09)] sedangkan contoh tanpanya terpengaruh dengan sintaks Python [[10](#r10)].


## pros-cons
Walaupun terdapat kekurangan pseudocode seperti tidak adanya standar dalam menuliskannya dan merupakan sesuatu yang tidak dapat dikompilasi serta dieksekusi untuk memeriksa kebenarannya menggunakan komputer [[11](#r11)], pseudocode dapat digunakan untuk mengekspresikan pemikiran di balik solusi dengan orang-orang yang bahkan tidah tahu banyak mengenai koding, dengan keuntungan lainnya adalah sebagai suatu cetak biru sehingga pseudocode yang sama dapat digunakan untuk menerjemahkan solusi ke berbagai bahasa pemrograman yang berbeda [[12](#r12)].

### pseudocode
Sebagai ilustrasi keuntungan atau fleksibilitas suatu pseudocode yang dapat digunakan pada berbagai bahasa pemrograman adalah sebagai berikut ini.

>SET first \
>SET second \
>IF first larger than second \
>&emsp;DISPLAY first is larger than second \
>ELSE \
>&emsp;IF first smaller than second \
>&emsp;&emsp;DISPLAY first is smaller than second \
>&emsp;ELSE \
>&emsp;&emsp;DISPLAY first is equal to second

Contoh penerapan pseudocode di atas diberikan dalam Python, JavaScript, dan C++.

### in python
Implementasi pseudocode sebelumnya dalam Python adalah seperti di bawah ini.
```python
x = 8
y = 3
if x < y:
  print(x, '<', y)
else:
  if x > y:
    print(x, '>', y)
  else:
    print(x, '=', y)
```
Kode di atas dapat dicoba di OneCompiler [3xqwsukk8](https://onecompiler.com/python/3xqwsukk8).


### in javascript
Implementasi pseudocode sebelumnya dalam JavaScript adalah seperti di bawah ini.
```javascript
x = 8
y = 3
if(x < y) {
  console.log(x + " < " + y)
} else {
  if(x > y) {
    console.log(x + " > " + y)
  } else {
    console.log(x + " = " + y)
  }  
}
```
Kode di atas dapat dicoba di OneCompiler [3xqwtcwhk](https://onecompiler.com/javascript/3xqwtcwhk).

### in c++
Implementasi pseudocode sebelumnya dalam C++ adalah seperti di bawah ini.
```c++
#include <iostream>
using namespace std;

int main() 
{
  int x = 8;
  int y = 3;
  if(x < y) {
    cout << x << " < " << y << endl;
  } else {
    if(x > y) {
      cout << x << " > " << y << endl;
    } else {
      cout << x << " = " << y << endl;
    }
  }
}
```
Kode di atas dapat dicoba di OneCompiler [3xqwt3vu6](https://onecompiler.com/cpp/3xqwt3vu6).


## exer
1. Sebutkan bidang-bidang atau domain masalah yang akan dipecahkan oleh ketiga contoh pseudocode yang diberikan.
2. Apa salah cari ciri pseudocode yang merupakan kelemahan dan juga kelebihannya?
3. Telah diberikan penerapan pseudocode yang sama ke dalam tiga bahasa pemrograman yang berbeda. Perhatikan kode berikut di OneCompiler [3xqwxbbzr](https://onecompiler.com/fortran/3xqwxbbzr).
	```fortran
program compare
integer :: x, y
  x = 8
  y = 3
  if (x > y) then
  	print '(I1, A3, I1)', x, " > ", y
  else if (x < y) then
  	print '(I1, A3, I1)', x, " < ", y
  else
  	print '(I1, A3, I1)', x, " = ", y
  end if
end program compare
	```
	Dalam bahasa pemrograman apakah kode di atas ditulis? Apakah akan memberikan hasil sesuai dengan pseudocode terakhir yang diberikan?


## note
1. <a name='r01'></a>Kingsley Ubah, "What is Pseudocode? How to Use Pseudocode to Solve Coding Problems", freeCodeCamp, 26 Jul 2021, url <https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/> [20220118].
2. <a name='r02'></a>theprogrammedwords, "How to write a Pseudo Code?", GeeksforGeeks, 30 Sep 2021, url <https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/> [20220118].
3. <a name='r03'></a>Wikipedia contributors, "Pseudocode", Wikipedia, The Free Encyclopedia, 16 December 2021, 02:26 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1060527586> [20220118].
4. <a name='r04'></a>Anisa Sekarningrum, "5 Contoh Algoritma Pseudocode dan Cara Menulisnya", EKRUT, 21 Dec 2021, url <https://www.ekrut.com/media/pseudocode-adalah> [20220118].
5. <a name='r05'></a>"Definition of 'Pseudocode'", Software-Development, The Economic Times, url <https://economictimes.indiatimes.com/definition/pseudocode> [20220120].
6. <a name='r06'></a>John Dalbey, "Pseudocode Standard", General SWE Resources, 8 May 2001, url <https://users.csc.calpoly.edu/~jdalbey/SWE/pdl_std.html> [20220120]
7. <a name='r07'></a>"Pseudocode 101", Poverty Action Lab, 16 May 2020, url <https://www.povertyactionlab.org/sites/default/files/research-resources/rr_datacleaning_Pseudocode.pdf> [20220120].
8. <a name='r08'></a>Bob Roggio, "Pseudocode Examples", COP 2221 Introduction to C Programming, Spring 2015, url <https://www.unf.edu/~broggio/cop2221/2221pseu.htm> [20220120].
9. <a name='r09'></a>Wikibooks contributors, "BASIC Programming/Beginning BASIC/Control Structures/IF...THEN...ELSEIF...ELSE", Wikibooks, The Free Textbook Project, 26 August 2021, 00:21 UTC, url <https://en.wikibooks.org/w/index.php?oldid=3968628> [20220120].
10. <a name='r10'></a>Refsnes Data, "Python While Loops", W3Schools, 2022, url <https://www.w3schools.com/python/python_while_loops.asp> [20220120].
11. <a name='r11'></a>"Pseudocodes (Guidelines, Advantages & Disadvantages)", Codesansar, 2022, url <https://www.codesansar.com/computer-basics/pseudocodes.htm> [20220120].
12. <a name='r12'></a>Felix Cabrera, "Don’t Skip The Pseudocode: Benefits of using pseudocode to write computer programs", Medium, 3 Sep 2019, url <https://medium.com/swlh/dont-skip-the-pseudocode-a786187e4f3d> [20220120].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0382?src=hash&amp;ref_src=twsrc%5Etfw">#bug0382</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1484119188558213124?ref_src=twsrc%5Etfw">January 20, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) pajak, robotika, pendidikan; &nbsp;
2) tidak sesuai dengan bahasa pemrograman apapun sehingga tidak bisa diperiksa kebenarannya, akan tetapi menjadi fleksibel untuk diterapkan dalam bahasa pemrograman apapun; &nbsp;
3) fortran, ya; &nbsp;
</ans>


{% comment %}
{% endcomment %}
