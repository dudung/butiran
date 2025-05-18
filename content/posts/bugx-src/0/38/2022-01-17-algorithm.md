---
layout: post
authors: [viridi]
title: algorithm
permalink: pages/0381
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["problem solving", "algorithm"]
date: 2022-01-18 06:39:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/38/2022-01-17-algorithm.md
twitter_username: 6unpnp
nodes: []
youtube: Sq3jOq96U9c&t=1733s
---
Dalam arti yang luas algoritma merupakan suatu prosedur langkah-per-langkah untuk memecahkan masalah atau mencapai suatu tujuan [[1](#r01)]. Contoh yang umum untuk suatu algoritma adalah suatu resep, yang berisikan instruksi khusus untuk menyiapkan hidangan atau makanan [[2](#r02)] atau untuk mencapai sekolah dari rumah, menyiapkan roti sandwich keju bakar, dan mencari barang yang diingkan di kelontong [[3](#r03)]. Dalam istilah komputer, suatu algoritma merupakan seperangkat instruksi yang telah terdefinisi dengan baik untuk menyelesaikan suatu masalah tertentu, yang membutuhkan beberapa masukan dan menghasilkan suatu keluaran [[4](#r04)]. Algoritma penting bagi komputer dalam memproses data, di mana banyak program komputer berisikan algoritma yang merinci instruksi khusus apa yang harus dilakukan oleh sebuah komputer [[5](#r05)].


## good quality
Algoritma yang berkualitas baik bercirikan [[4](#r04)]
+ masukan dan keluaran terdefinisi dengan tepat,
+ setiap langkah jelas dan tidak ambigu,
+ merupakan cara yang paling efektif di antara cara-cara lain,
+ tidak menyertakan kode komputer.

Ciri terakhir ini mengisyaratkan bahwa algoritma harus dituliskan sedemikian rupa sehingga dapat digunakan dalam berbagai bahasa pemrograman.


## disadvantages
Terdapat beberapa kekurangan algoritma dari sisi pemrograman, seperti membutuhkan banyak waktu, sulit menunjukkan percabangan dan pengulangan, sulit diterapkan untuk persoalan yang besar [[6](#r06)]. Dari sisi internet, di mana algoritma digunakan untuk mesin mencari, penapis spam, permainan video, mesin rekomendasi, media sosial, umpan berita, dan peta, terdapat kekuatiran akan penerapan algoritma seperti implikasi yang belum sepenuhnya dapat dimengerti saat algoritma diprogram untuk aksi dan pengambilan keputusan harian, impak sosial yang belum terpikirkan karena umumnya algoritma ditulis untuk optimasi efisiensi dan keuntungan, membuat orang menjadi amat tergantung pada nasihat algoritma karena sudah menjadi kebiasaan (atau karena terlalu sulit untuk memikirkannya sendiri), algoritma dapat membunuh kecerdasan lokal, kemampuan lokal, bahasa minor dan wirausaha lokal karena hampir seluruh sumber daya terhisap oleh pesaing global, dan lainnya [[7](#r07)]. Terkait dengan kecerdasan buatan salah satu kekuatiran adalah bahwa kemanusiaan dan penilaian manusia akan hilang saat data dan pemodelan prediktif menjadi yang terpenting [[8](#r08)].


## types
Algoritma dapat diklasifikasikan berdasarkan konsep yang digunakan dalam menyelesaikan tugas, beberapa jenis yang paling fundamental adalah [[9](#r09)]

1. **Divide and conquer algorithms** – membagi masalah menjadi sub-masalah yang lebih kecil dengan jenis yang sama, menyelesaikan semua sub-masalah, melakukan kombinasi solusi untuk menyelesaikan masalah semulanya.
2. **Brute force algorithms** – mencoba semua solusi yang mungkin sampai solusi yang memuaskan diperoleh.
3. **Randomized algorithms** – menggunakan sebuah bilangan acak setidaknya sekali dalam komputasi untuk mencari solusi suatu masalah.
4. **Greedy algorithms** – mencari suatu solusi optimal pada tingkat lokal dengan tujuan untuk mendapatkan solusi optimal bagi keseluruhan masalah.
5. **Recursive algorithms** – menyelesaikan versi terendah dan paling sederhana masalah, kemudian menyelesaikan versi masalah yang semakin rumit secara berangsung-angsur sampai diperoleh solusi untuk masalah sebenarnya.
6. **Backtracking algorithms** – membagi masalah ke dalam sub-masalah, yang tiap-tiapnya dapat dicoba untuk diselesaikan, akan tetapi bila solusi yang dinginkan tidak dapat diperoleh, mundur ke sub-masalah sebelumnya sampai suatu jalur ditemukan untuk bergerak maju menuju sub-masalah berikutnya.
7. **Dynamic programming algorithms** – memecahkan masalah rumit ke dalam kumpulan sub-masalah yang lebih sederhana, kemudian pecahkan setiap sub-masalah hanya sekali, simpan setiap solusinya untuk penggunaan ke depan ketimbang menghitung-ulang solusi-solusinya.

Terlah terdapat contoh-contoh implementasi berbagai algoritma dan masalah yang diselesaikannya [[10](#r10), [11](#r11)].


## examples
Contoh algoritma dapat berupa mencari bilangan terbesar dalam suatu daftar [[12](#r12)]

> 1. Set `max` to 0.
> 2. For each number `x` in the list `L`, compare it to `max`. If `x` is larger, set `max` to `x`.
> 3. `max` is now set to the largest number in the list.

atau mengalikan dilanjukan menjumlahan bilangan dalam suatu kumpulan bilangan ganjil [[13](#r13)]

> For each odd number from 1 to 9, multiply it by 2 and add 7 to it. Then, write out the results as a list separated by commas.

yang akan memberikan hasil 9, 13, 17, 21, 25.

Contoh pemanfaatan algoritma dalam dunia nyata misalnya adalah mengurutkan kertas ujian untuk dinilai, pengenalan wajah, pencarian Google, duplikasi hasil (resep, formula, eksperimen), lampu lalu-lintas, dan jadwal bis [[14](#r14)].

Dari kedua bagian besar contoh algoritma di atas, yaitu terkait bilangan dan implementasinya pada kehidupan sehari-hari, dapat terlihat secara tersirat bahwa dalam suatu algoritma dapat terdapat algoritma lain.


## exer
1. Untuk membuat menu gorengan lengkap, perlu dipersiapkan pisang yang dibalut tepung lalu digoreng, nanas dibalut tepung lalu digoreng, tahu dibalut tepung lalu digoreng, nangka dibalut tepung lalu digoreng, dan ubi dibalut tepung lalu digoreng. Termasuk dalam jenis algoritma apa pembuatan menu gorengan lengkap ini?
2. Saat kita betul-betul lupa kombinasi angka untuk membuka brangkas dan tidak ada petunjuk kecuali jumlah digitnya, algoritma apa yang digunakan?


## note
1. <a name='r01'></a>"algorithm", Merriam-Webster, 2022, url <https://www.merriam-webster.com/dictionary/algorithm> [20220117].
2. <a name='r02'></a>Lucas Downey, "Algorithm", Investopedia, 6 Oct 2021, url <https://www.investopedia.com/terms/a/algorithm.asp> [20220117].
3. <a name='r03'></a>"What is an algorithm and why should you care?", Khan Academy, 2022, url <https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/v/what-are-algorithms> [20220117].
4. <a name='r04'></a>"What is an Algorithm?", Programiz, Parewa Labs Pvt. Ltd., url <https://www.programiz.com/dsa/algorithm> [20220117].
5. <a name='r05'></a>Wikipedia contributors, "Algorithm", Wikipedia, The Free Encyclopedia, 13 January 2022, 23:38 UTC, <https://en.wikipedia.org/w/index.php?oldid=1065515858> [20220117].
6. <a name='r06'></a>"What are the Advantages and Disadvantages of Algorithm ?", Questions & Answers, Vedantu, url <https://www.vedantu.com/question-answer/what-are-the-advantages-and-disadvantages-of-algorithm-5b7ea609e4b084fdbbfacd20> [20220117].
7. <a name='r07'></a>Pernille Tranberg, "Experts On The Pros & Cons of Algorithms", Dataetisk Tænkehandletank, 18 Feb 2017, url <https://dataethics.eu/prosconsai/> [20220117].
8. <a name='r08'></a>Lee Rainie, Janna Anderson, "Code-Dependent: Pros and Cons of the Algorithm Age", Pew Research Center, 8 Feb 2017, url <https://www.pewresearch.org/internet/2017/02/08/code-dependent-pros-and-cons-of-the-algorithm-age/> [20220117].
9. <a name='r09'></a>Ananya Rao, "What Are Algorithms? A Guide to Algorithms for Children", Juni Learning, 2 Sep 2019, url <https://junilearning.com/blog/guide/what-are-algorithms/> [20220117].
10. <a name='r10'></a>Priya Pedamkar, "Types of Algorithms", EDUCBA, 30 Mar 2021, url <https://www.educba.com/types-of-algorithms/> [20220118].
11. <a name='r11'></a>"Types of Algorithms and Their Uses", Coding Ninjas, 4 Jun 2020, url <https://www.codingninjas.com/blog/2020/06/04/types-of-algorithms-and-its-uses/> [20220118].
12. <a name='r12'></a>A. M. Kuchling, "An Example Algorithm", 50 Examples, 2012, url <https://fiftyexamples.readthedocs.io/en/latest/algorithms.html#an-example-algorithm> [20220117].
13. <a name='r13'></a>Peter Kosek (Inst.), "What is an Algorithm? - Definition & Examples", Study.com, 14 Nov 2018, url <https://study.com/academy/lesson/what-is-an-algorithm-definition-examples.html> [20220117].
14. <a name='r14'></a>Sphero Team, "Algorithm Examples Guide: What Is an Algorithm? These 6 Examples of Algorithms In Everyday Life Explain Everything", Sphero, 6 Jul 2021, url <https://sphero.com/blogs/news/real-world-algorithm-examples> [20220118].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0381?src=hash&amp;ref_src=twsrc%5Etfw">#bug0381</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1483222135443451905?ref_src=twsrc%5Etfw">January 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) algorithm divide and conquer, karena sub-masalah berjenis sama; &nbsp;
2) algoritma brute force, karena mencoba satu per satu angka pembentuk digit yang diperbolehkan; &nbsp;
</ans>


{% comment %}
{% endcomment %}
