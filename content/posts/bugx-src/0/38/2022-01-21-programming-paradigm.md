---
layout: post
authors: [viridi]
title: programming paradigm
permalink: pages/0384
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["problem solving", "programming paradigm"]
date: 2022-01-21 22:24:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/38/2022-01-21-programming-paradigm.md
twitter_username: 6unpnp
nodes: []
---
Istilah paradigma pemrograman terkait dengan suatu gaya dalam memrogram dan tidak terkait dengan suatu bahasa pemrograman tertentu [[1](#r01)]. Suatu bahasa pemrograman dapat diklasifikasikan dalam lebih dari satu paradima [[2](#r02)], yang sebagai contohnya adalah JavaScript yang mengijinkan untuk membuat kode dalam berbagai paradima berbeda atau mengombinasikannya dalam suatu pendekatan multi-paradigma [[3](#r03)]. Saat berbicara mengenai empat paradigma utama pemrograman, terdapat imperatif, logikal, fungsional, dan berorientasi-obyek [[4](#r04)] ataupun prosedural, berorientasi-obyek, fungsional, dan logikal [[5](#r05)], di mana pada pembagian lain paradigma prosedural dan berorientasi-obyek merupakan bagian dari paradigma imperatif, sedangkan paradigma logikal dan fungsional merupakan bagian dari paradigma deklaratif [[6](#r06)]. Selain itu terdapat juga pembagian yang lebih menerus yang sampai menggunakan istilah paradigma yang lebih deklaratif dan paradigma yang lebih imperatif dan terdapat satu kelompok paradigma di antara keduanya [[2](#r02)]. Di sini akan dibahas dua kelompok paradigma, yaitu yang termasuk imperatif dan deklaratif serta beberapa contoh yang termasuk di dalamnya.


## languages
Berapa bahasa pemrograman secara alamiah termasuk dalam paradigma deklaratif dan lainnya dalam imperatif, serta terdapat pula yang dapat mengakomodasi keduanya [[7](#r07)].

Tabel <a name='tab1'>1</a>. Paradigma dan contoh bahasa pemrogramannya.

Paradigma | Bahasa [[6](#r06)] | Bahasa [[7](#r07)]
:- | :- | :-
**Imperatif**  | C, Fortran, Basic <br> **Prosedural**: <br> C, C++, Java, <br> ColdFusion, Pascal <br> **Berorientasi obyek**: <br> Simula, Java, C++, <br> Objective-C, <br> Visual Basic .NET, <br> Python, Ruby, <br> SmallTalk | C, C++, Java 
**Deklaratif** | **Logikal**: <br> Prolog <br> **Fungsional**: <br> JavaScript, <br> Haskwell, Scala,<br> Erlang, Lisp, ML, <br> Clojure | SQL, HTML
**Mix**        | | JavaScript, C#, <br> Python |

Termasuk ke dalam paradigma mana suatu bahasa pemrograman, kelihatannya masih dapat diperdebatkan, seperti disajikan dalam Tabel [1](#tab1), di mana dua rujukan menggolongkan dalam kategori yang berbeda.


## features
Paradigma pemrograman imperatif dan deklaratif memiliki fitur-fitur yang dapat dibandingkan, kekurangan dan kelebihannya [[8](#r08)].

Tabel <a name='tab2'>2</a>. Paradigma pemrograman dan fiturnya.

Paradigma | Imperatif | Deklaratif
:- | :- | :-
**Operasi** | Mendefiniskan <br> bagaimana <br> pekerjaan <br> diselesaikan | Mendefinisikan <br> apa tugas yang <br> diselesaikan
**Komputasi** | Mendefinisikan <br> aliran kendali dan <br> perubahan <br> keadaan | Hanya <br> mendefinisikan <br> logika
**Mutating <br> Variables** | Sangat biasa | Tidak biasa <br> dan tidak <br> disarankan
**Kekuatan** | Notasi mudah <br> dipelajari; Sesuai <br> arsitektur mesin | Kode mudah <br> dioptimasi; Tingkat <br> abstraksi tinggi
**Kelemahan** | Debugging sulit; <br> Rentan untuk <br> data pacu | Notasi tidak akrab; <br> Kode kurang dapat <br> disesuaikan
**Paradima <br> Turunan <br> Populer** | Prosedural; <br> Berorientasi <br> obyek | Fungsional; <br> Logikal

Programer dapat memilih paradigma pemrograman mana yang lebih cocok pada permasalahan yang akan diselesaikan.

## illustration
Salah satu cara untuk membayangkan kedua kelompok besar paradigma pemrograman, imperatif dan deklaratif adalah dengan analogi contoh pada kehidupan sehari-hari [[5](#r05), [9](#r09)].

### ordering a cup of coffee [[5](#r05)]
Pendekatan imperatif akan seperti
> Masuk ke toko minuman kopi, \
> Antri dan tunggu barista melayani, \
> Pesan, \
> Sampaikan bahwa untuk dibawa, \
> Bayar, \
> Tunjungan kartu anggota untuk mengumpulkan poin, \
> Ambil pesanan dan pergi,

sedangkan pendekatan deklaratif
> Tolong satu porsi besar latte untuk dibawa.

### drawing a landscape [[9](#r09)]
Pendekatan imperatif akan seperti
> Teman mendengarkan saran pelukis bagaimana melukis pemandangan, \
> Pelukis yang baik tidak benar-benar memerintah, \
> Pelukis hanya memberikan arahan langkah per langkah untuk mendapatkan hasil yang diinginkan,

sedangkan pendekatan deklaratif
> Minta teman untuk menggambar pemandangan.

Dengan demikian dapat disarikan, sebagaimana juga telah ditegaskan dalam Tabel [2](#tab2) bahwa

+ **Paradigma Imperatif** \
	Menjelaskan bagaimana langkah-langkah untuk mencapai tujuan.

+ **Paradigma Deklaratif** \
	Menjelaskan apa tujuan yang akan dicapai.

Penting untuk disadari bahwa banyak pendekatan deklaratif yang telah memiliki sejumlah layer abstraksi imperatif [[7](#r07)]. Dapat terjadi bahwa asumsi ini kadang diambil tanpa sadar dan bila asumsi ini salah maka pendekatan menjadi kurang tepat. Sebagai contoh pendekatan deklaratif seperti

> Sampai bertemu di toko buku sore ini jam 1530,

mengasumsikan bahwa Anda telah mempunyai layer abstraksi interaktif tentang bagaimana mencapai toko buku dengan kendaraan umum dan menentukan waktu perjalanan yang tepat. Bila tidak mungkin langkah-langkah berikut

> Jam 14 keluar dari rumah, \
> Berjalan menuju halte bus terdekat, \
> Tunggu bus menuju pusat kota, \
> Turun di halte taman kota, \
> Berjalan ke utara selama 15 menit sampai sebelum perempatan, \
> Menyeberang jalan ke barat dan belok ke kiri sejauh 20 meter, \
> Masuk ke gedung sebelah kiri berwarna biru, \
> Naik ke tingkat dua dan sampai ke toko buku,

diperlukan sebagai pendekatan deklaratif.


## exer
1. Untuk memakan mie dengan menggunakan sumpit, apakah termasuk pendekatan deklaratif atau imperatif? Apa syaratnya?
2. Orang pertama belum pernah menggunakan komputer dan orang kedua sudah pernah dengan sistem operasi Windows. Bila keduanya diminta menggunakan komputer bersistem operasi Linux untuk mengirimkan email, bagaimana pendekatan yang perlu diberikan pada masing-masing?


## note
1. <a name='r01'></a>Thanoshan MV, "What exactly is a programming paradigm?", freeCodeCamp, 12 Nov 2019, url <https://www.freecodecamp.org/news/what-exactly-is-a-programming-paradigm/> [20220121].
2. <a name='r02'></a>Wikipedia contributors, "Programming paradigm", Wikipedia, The Free Encyclopedia, 19 December 2021, 16:33 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1061094136> [20220121].
3. <a name='r03'></a>Martin Novak, "Imperative vs Declarative programming in JavaScript", Medium, 22 Jun 2021, url <https://medium.com/weekly-webtips/imperative-vs-declarative-programming-in-javascript-25511b90cdb7> [20220121].
4. <a name='r04'></a>Gary T. Leavens, "Major Programming Paradigms", Com S 541 Programming Languages 1, Fall 1997, url <http://www.cs.ucf.edu/~leavens/ComS541Fall97/hw-pages/paradigms/major.html> [20220121].
5. <a name='r05'></a>Sindhuja Hari, "Programming Paradigms: A must know for all Programmers", Hackr.io (Venture Kite), 7 Jan 2022, url <https://hackr.io/blog/programming-paradigms> [20220121].
6. <a name='r06'></a>Bhumika_Rani, ultralordps, "Introduction of Programming Paradigms", GeeksforGeeks, 6 Jul 2021, url <https://www.geeksforgeeks.org/introduction-of-programming-paradigms/> [20220121].
7. <a name='r07'></a>Tyler McGinnis, "Imperative vs Declarative Programming", ui.dev, 13 Jul 2016, url <https://ui.dev/imperative-vs-declarative-programming/> [20220121].
8. <a name='r08'></a>Vinicius Fulber Garcia, "Imperative and Declarative Programming Paradigms", Baeldung, 2 Nov 2021, url <https://www.baeldung.com/cs/imperative-vs-declarative-programming> [20220121].
9. <a name='r09'></a>Ian Mundy, "Declarative vs Imperative Programming: Or wrong ways I was thinking about React", codeburst, 21 Feb 2017, url <https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2> [20220121].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0384?src=hash&amp;ref_src=twsrc%5Etfw">#bug0384</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1484546977056817157?ref_src=twsrc%5Etfw">January 21, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) pendekatan deklaratif bila telah memiliki sejumlah layer abstraksi imperatif bagaimana menggunakan sumpit, bila belum perlu pendekatan imperatif langkah-langkah menggunakan sumpit; &nbsp;
2) pendekatan imperatif untuk orang pertama, pendekatan deklaratif untuk orang kedua; &nbsp;
</ans>


{% comment %}
{% endcomment %}
