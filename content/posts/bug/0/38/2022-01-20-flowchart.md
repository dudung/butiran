---
layout: post
authors: [viridi]
title: flowchart
permalink: pages/0383
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["problem solving", "algorithm", "flowchart"]
date: 2022-01-21 18:13:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/38/2022-01-20-flowchart.md
twitter_username: 6unpnp
nodes: []
---
Diagram alir (en: flowchart) merupakan jenis diagram yang merepresentasikan suatu algoritma, aliran kerja, atau proses, menggunakan berbagai bentuk kotak bermakna tertentu sebagai langkah-langkah dan panah yang menghubungkan kotak-kotak tersebut sebagai arah langkah-langkah [[1](#r01)]. Dapat dikatakan bahwa diagram alir merupakan suatu representasi grafis dari suatu algoritma dengan berbagai keuntungan dan kerugiannya [[2](#r02)]. Dalam mengajarkannya dapat dilakukan dengan per tahap, seperti mulai dulu dengan tugas yang sudah akrab, perluas pengetahuan dengan melibatkan pengambilan keputusan, dan akhir dengan terapkan pada pengenalan pola ke instruksi pengulangan [[3](#r03)]. Setidaknya terdapat enam bentuk kotak standar yang digunakan dan berbagai kotak lainnya [[4](#r04)], yang kadang dinamai berbeda. Untuk membuatnya dapat digunakan aplikasi daring seperti Lucidchart [[5](#r05)] atau luring seperti Visio, yang juga sudah ada versi webnya [[6](#r06)], atau alternatif-alternatif lainnya yang lintas sistem operasi atau hanya menggunakan penjelajah internet [[7](#r07)].


## pros-cons
Sebagaimana representasi yang lain, untuk diagram alir terdapat pula keuntungan dan kerugiannya [[2](#r02)].

### advantages
1. Cara yang lebih baik dalam menyampaikan logika suatu sistem.
2. Panduan cetak biru saat program dirancang.
3. Bantuan dalam proses pencarian kesalahan (debugging).
4. Alat bantu yang memudahkan menganalisa program.
5. Dokumentasi yang baik dan tepat.

### disadvantages
1. Sulit untuk program yang rumit dan besar.
2. Belum terdapat standar untuk menentukan jumlah detil.
3. Sulit direproduksi ulang.
4. Sulit dimodifikasi.

Sebenarnya, beberapa kesulitan dapat diatasi dengan membuat sub-diagram alir yang modular, sehingga pada diagram alir utama menjadi tidak terlalu rumit.


## standard forms
Terdapat berbagai bentuk standar kotak diagram alir yang digunakan [[1](#r01), [2](#r02), [3](#r03), [4](#r04)], akan tetapi hanya enam bentuk (lima 'kotak' dan satu panah) yang digunakan di sini. Keenam bentuk tersebu diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/38/0383-a.png) \
Gambar <a name='fig1'>1</a>. Bentuk standar elemen diagram alir: (a) terminal, (b) proses, (c) keputusan, (d) konektor, (e) masukan/keluaran, dan (f) garis aliran.

Untuk konektor ada yang membedakan konektor pada halaman (on-page) dan ke halaman lain (off-page) dengan memberinya nomor. Di sini akan digunakan bentuk pertama dengan nomor dan tanpa nomor. Bila diberi nomor berarti konektor ke bagian lain, baik pada halaman yang sama ataupun halaman lain, dan bila tanpa nomor berarti titik temu dari lebih satu garis aliran.


## illustration
Sebagai ilustrasi misalkan terdapat suatu algoritma untuk membandingkan dua bilangan.

>Tentukan dua buah bilangan bulat dan bandingkan keduanya, tuliskan hasilnya dalam bentuk kalimat berisikan bilangan pertama lebih besar, lebih kecil, atau sama dengan bilangan kedua.

Algoritma di atas dapat diilustrasikan secara visual, terutama proses pengambilan keputusannya, dalam bentuk diagram alir seperti pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/38/0383-b.png) \
Gambar <a name='fig2'>2</a>. Implementasi diagram alir untul algoritma menentukan dua buah bilangan, apakah lebih besar, lebih kecil, atau sama.

Bahasa yang digunakan dalam diagram alir masih berbahasa Inggris, agar konsisten dengan penggunannya dalam pseudocode yang setengah bahasa Inggris dan setengah kode [[8](#r08)].


## function and sub-flowchart
Suatu program yang mulai rumit dapat dipecah-pecah ke dalam berbagai fungsi, dan hal ini dapat pula dilakukan dengan diagram alir sehingga penggunaan simbol konektor ke halaman lain dapat dihindari. Dalam diagram alir utama, suatu proses yang bersimbol kotak di dalamnya mungkin pula terdapat diagram alir yang menjelaskan bagaimana subproses-subprosesnya dilaksanakan dan saling terhubung. Kotak ini dapat mewakili suatu fungsi yand di dalamnya pun mengandung fungsi-fungsi lain.

### swap two number
Menukar dua bilangan merupakan suatu fungsi yang sering digunakan. Algoritma dapat berbentuk

>Ambil dua buah bilangan, tukar nilai keduanya

dan pseudocodenya

>GET first \
>GET second \
>temp = second \
>second = first \
>first = temp \
>RETURN first and second

yang bentuk diagram alirnya seperti pada gambar di bawah ini.

![]({{ site.baseurl }}/assets/img/0/38/0383-c.png) \
Gambar <a name='fig3'>3</a>. Diagram alir untuk menukar dua buah bilangan.

Perhatikan bahwa semua proses pada Gambar [3](#fig3) bersifat berurutan dan tidak ada yang bercabang atau diulang-ulang.

### iterate over an array
Iterasi meliputi suatu larik, yang merupakan data berindeks yang akan diolah, juga merupakan suatu fungsi yang sering digunakan. Misalnya suatu algoritma dapat berbentuk

> Dalam suatu himpunan bilangan bulat, baca satu-per-satu anggota himpunannya dari awal hingga akhir dan tampilkan

dengan pseudocodenya

> GET N numbers \
> SET i to 1 \
> Read i-th number and show the value \
> Advance i with 1 \
> IF i &le; N go to the previous two steps

dan diagram alirnya diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/38/0383-d.png) \
Gambar <a name='fig4'>4</a>. Diagram alir untuk iterasi meliputi suatu himpunan bilangan (larik atau array).

Pada Gambar [4](#fig4) proses yang diulang-ulang adalah menampilkan bilangan yang nilai indeksnya sesuai dengan nilai $i$ saat itu. Proses ini dapat diganti dengan proses lain, seperti mengolah nilai $i$ melalu suatu fungsi $f(i) \rightarrow i$ atau lainnya.

### move the largest to end
Dalam suatu larik kita dapat menggeser bilangan terbesar sehingga berada paling kanan atau dengan indeks terbesar. Algoritmanya

>Pindahkan bilangan terbesar dalam himpunan bilangan bulat menjadi anggota terakhir

yang salah satu pseudocodenya adalah

> GET N numbers \
> SET i to 1 \
> IF i-th number > (i+1)-th number swap the numbers \
> Advance i with 1 \
> IF i < N go to the previous two steps

dengan diagram alirnya diberikan pada gambar di bawah ini.

![]({{ site.baseurl }}/assets/img/0/38/0383-e.png) \
Gambar <a name='fig5'>5</a>. Diagram alir untuk iterasi meliputi suatu himpunan bilangan (larik atau array) untuk memindahkan bilangan terbesarnya ke akhir larik.

Pada salah satu proses dalam iterasi dalam diagram alir pada Gambar [5](#fig5) terdapat proses menukarkan dua bilangan yang ditandai dengan lambang $\leftrightarrow$, di mana pembandingan kedua bilangan dilakukan secara implisit di dalamnya, yaitu bila memenuhi kondisi $x_i > x_{i+1}$ maka kedua bilangan ditukar posisinya dalam larik.

### sort numbers
Dalam bagian sebelumnya bilangan terbesar dalam larik dicari dan diletakkan paling kanan atau pada bilangan dengan indeks terbesar. Bagaimana bila langkah ini dilakukan lagi pada larik yang sama, akan tetapi tidak untuk semua bilangan tetapi untuk semua bilangan kecuali bilangan terakhir? Apa yang akan diperoleh? Lalu dilanjutkan dengan mengecualikan dua bilangan terakhir dan seterusnya sampai hanya untuk dua bilangan pertama? Ya, akan diperoleh larik dengan urutan bilangan dari kecil ke besar. Algoritmanya

>GET N numbers \
>SET j to N \
>Process j first numbers to put the largest to the end \
>Decrease j by 1 \
>IF j > 1 go to the previon two steps

dengan diagram alirnya seperti berikut ini.

![]({{ site.baseurl }}/assets/img/0/38/0383-f.png) \
Gambar <a name='fig6'>6</a>. Diagram alir untuk iterasi meliputi suatu himpunan bilangan (larik atau array) untuk mengurutkannya dari kecil ke besar.

Diagram alir pada Gambar [6](#fig6) memperlihatkan pemanfaatan proses menempatkan bilangan terbesar paling kanan dari suatu himpunan bilangan `largest_to_end(x, j)` dengan $j$ adalah jumlah suku pertama yang diolah dari larik `x`, atau vektor $\vec{x}$, yang berdimensi $N$ dengan $1 < j \le N$

Gambar [6](#fig6) dapat disajikan dengan menampilkan bagian-bagian dalamnya sehingga akan diperoleh diagram alir yang kompleks seperti pada Gambar [7](#fig7).

![]({{ site.baseurl }}/assets/img/0/38/0383-g.png) \
Gambar <a name='fig7'>7</a>. Diagram alir mengurutkan bilangan dalam larik dari kecil ke besar dengan detil prosesnya.

Bagian berwarna biru ($\color{#18c}{\blacksquare}$) merupakan proses menukar bilangan, bagian berwarna merah ($\color{#d34}{\blacksquare}$) merupakan proses menempatkan bilangan terbesar pada akhir larik, dan bagian berwarna hijau ($\color{#8b5}{\blacksquare}$) merupakan proses mengurutkan bilangan dari kecil ke besar, serta bagian jingga ($\color{#f92}{\blacksquare}$) merupakan masukan berupa larik dan keluaran berupa larik yang telah diurutkan dari kecil ke besar.


### implementation
Diagram alir pada Gambar [1](#fig7) dapat diimplementasikan dalam bahasa pemrograman Python seperti berikut ini.

```python
# 0383-sort-numbers.py
# Example of flowchart implementation in a program
# Sparisoma Viridi | https://github.com/dudung
# 20220121 Create this example program

# Swap two numbers
def swap(a, b):
    t = a
    a = b
    b = t
    return a, b

# Put largest number to end
def largest2end(x, N):
    for i in range(N-1):
        if x[i] > x[i+1]:
            x[i], x[i+1] = swap(x[i], x[i+1])
            
# Sort numbers in an array
def sort(x):
    N = len(x)
    for i in range(N, 0, -1):
        largest2end(x, i)

# Define an array and display it
num = [10, 19, 11, 18, 12, 17, 13, 16, 14, 15]
print(num)

# Sort the array and display it
sort(num)
print(num)
```

Perhatikan pada kode yang diberikan bahwa fungsi `sort` memanggil fungsi `largest2end`, dan fungsi `largest2end` memanggil fungsi `swap`. Kaitan antara fungsi dan diagram alirnya diberikan berikut ini.

Tabel <a name='tab1'>1</a>. Diagram air dan fungsi implementasinya.

Diagram alir | Fungsi
:- | :-
Gambar [3](#fig3) | `swap`
Gambar [5](#fig5) | `largest2end`
Gambar [6](#fig6) | `sort`

Kode di atas bila dijalankan akan menghasilkan keluaran sebagai berikut ini, dengan baris pertama adalah isi larik awal dan baris kedua adalah isi larik yang telah diurutkan.

```
[10, 19, 11, 18, 12, 17, 13, 16, 14, 15]
[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
```

Konfirmasi dapat dilakukan dengan menjalankannya secara daring di OneCompiler [3xqrb4tbp](https://onecompiler.com/python/3xqrb4tbp).


## drawing
Diagram alir dapat digambarkan dengan berbagai piranti lunak luring maupun daring [[7](#r07)]. Di sini digunakan aplikasi daring, dengan untuk sumber dari Gambar [1](#fig1), [2](#fig2), [3](#fig3), [4](#fig4), [5](#fig5), [6](#fig6), dan [7](#fig7) dapat dilihat pada Lucid [flowchart-1](https://lucid.app/lucidchart/9c6ef6c9-bce6-42f1-a791-f6827ddc6ccb/edit?invitationId=inv_ebe14c40-817f-4623-aafb-487c6566a7ec).


## exer
1. Apakah diagram alir baik untuk program yang besar dan kompleks?
2. Dengan melihat kelemahan diagram alir, sebaiknya digunakan untuk bentuk program seperti apa?
3. Antara diagram alir pada Gambar [6](#fig6), [5](#fig5), [3](#fig3) dan Gambar [7](#fig7) mana yang lebih sederhana dan mudah dimengerti? Mengapa?
4. Mengapa perlu ada konektor ke halaman berbeda? Apakah baik?
5. Fungsi `swap` yang dibuat sebenarnya mubazir dalam Python dan d sini disajikan hanya sebagai ilustrasi. Mengapa?


## note
1. <a name='r01'></a>Kenneth Leroy Busbee, "Flowcharts", Programming Fundamentals, 15 Dec 2018, url <https://press.rebus.community/programmingfundamentals/chapter/flowcharts/> [20220120].
2. <a name='r02'></a>NishuAggarwal, RishabhPrabhu, srinam, itskawal2000, "An introduction to Flowcharts", GeeksforGeeks, 20 Nov 2020, url <https://www.geeksforgeeks.org/an-introduction-to-flowcharts/> [20220120].
3. <a name='r03'></a>Christa Love, "How to Make a Flowchart for Programming Easy to Understand", TechnoKids Blog, 17 Feb 2021, url <https://www.technokids.com/blog/teaching-strategies/how-to-make-a-flowchart-for-programming-easy-to-understand/> [20220120].
4. <a name='r04'></a>Wikipedia contributors, "Flowchart", Wikipedia, The Free Encyclopedia, 28 December 2021, 13:48 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1062442706> [20220120].
5. <a name='r05'></a>Ben Dilts, Karl Sun, "Lucidchart", Lucid Software Inc., 2022, url <https://lucid.co/about> [20220120].
6. <a name='r06'></a>"Visio: Work visually from anywhere, at any time", Microsoft 365, Microsoft, 2022, url <https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software> [20220121].
7. <a name='r07'></a>Crystal Crowder, "13 Free Alternatives to Microsoft Visio", Make Tech Easier, Uqnic Network Pte Ltd., 4 Nov 2021, url <https://www.maketecheasier.com/5-best-free-alternatives-to-microsoft-visio/> [20220121].
8. <a name='r08'></a>"Pseudocode 101", Poverty Action Lab, 16 May 2020, url <https://www.povertyactionlab.org/sites/default/files/research-resources/rr_datacleaning_Pseudocode.pdf> [20220121].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0383?src=hash&amp;ref_src=twsrc%5Etfw">#bug0383</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1484483969659719686?ref_src=twsrc%5Etfw">January 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) tidak; &nbsp;
2) program kecil yang banyak digunakan ulang dan memerlukan penyampian logika yang jelas agar dapat dibuat variasi lainnya sesuai kebutuhan; &nbsp;
3) ketiga gambar pertama, tidak terlalu kompleks dengan adanya sub-flowchart; &nbsp;
4) untuk diagram alir yang kompleks dapat melebihi satu halaman, tidak karena sebaiknya dapat jelas terlihat dalam satu halaman; &nbsp;
5) telah terdapat `a, b = b, a` yang berfungsi sebagai fungsi swap; &nbsp;
</ans>


{% comment %}
{% endcomment %}
