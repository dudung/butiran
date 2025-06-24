---
title: "random rectangles"
date: 2022-06-21T22:06:00+0700
lastmod: 2022-06-22T18:48:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['idea', 'random', 'rectangle']
url: "0097"
draft: false
---
Diskusi makan siang dengan katimport di karsa dan tercetuskan keleluasaan untuk berkreasi mengingat kurang terlalu paham bentuk yang kualitatif dikarenakan terbiasa dengan yang kuantitataif. Kata kunci sementara adalah bilangan acak.


## random number
Bilangan acak, baik berupa bilangan riil ataupun bulat dapat dibangkitkan dalam Python berbentuk bilangan tunggal ataupun telah bebentuk suatu array [[1](#r01)].


## count
Untuk menjamin bahwa bilangan-bilangan bulat acak yang dibangkitkan memenuhi jumlah tertentu untuk masing-masing nilai, terutama bila telah dalam bentuk list, perlu dihitung jumlah masing-masing bilangan yang harus sama dengan pemesanan awal. Untuk menghitungnya perlu dibuat list bernilai nol [[2](#r02)] dengan ukuran sejumlah macam bilangan bulat yang akan dibangkitkan.


## list
Tergantung penggunaanya, terkadang lebih sederhana menggunakan list ketimbang array, sehingga perlu dilakuan konversi dari array ke list [[3](#r03)], yang merupakan hasil pembangkitan bilangan acaknya.


## rectangle
Dengan paket Matplotlib dapat digambarkan segiempat menggunakan fungsi Rectangle [[4](#r04)], yang mewakili kemungkin suatu produk terpilih oleh pengguna. Untuk penggambaran segiempat yang banyak, proses pembuatan dan penggambarannya dapat dipisahkan dengan terlebih dahulu membuat list kosong dan kemudian ditambahkan obyek hasil dari fungsi Rectangle pada list penyimpanan dengan fungsi append [[5](#r05)].


## chart size
Grafik pada Matplotlib dapat diubah ukurannya [[6](#r06)] dan serta dapat pula dimodifikasi style defaultnya [[7](#r07)].


## initial example
Kotak-kotak, lebih tepatnya bujursangkar, berukuran acak dibangkitkan dan digambarkan dengan memanfaatkan paket Matplotlib dan fungsi Rectangle, dengan satu dan dua warna [[8](#r08)], yang kelak akan dimanfaatkan sebagai model kemungkin suatu produk dipilih oleh penggunanya. Lebih jauh ingin mencoba membuat model kuantitataif dari kelima gaya Porter.


## scenarios
Terdapat beberapa skenario yang terpikirkan sebagai langkah awal pemanfaatan bilangan acak untuk membuat grid bujursangkar dengan ukuran berbeda-beda. Bujursangkar-bujursangkar tersebut akan menjadi seperti sasaran panah atau dart, di mana bila terkenal lemparan panah, maka suatu produk berarti dipilih dan dibeli oleh pengguna.

 |
:-: | :-:
![](/bugx/img/random/rect-2-colors/scenario-0.png) | ![](/bugx/img/random/rect-2-colors/scenario-1.png)
(a) | (b)
![](/bugx/img/random/rect-2-colors/scenario-2.png) | ![](/bugx/img/random/rect-2-colors/scenario-3.png)
(c) | (d)

Gambar <a name='fig1'>1</a>. Beberapa skenario: (a) produk tunggal mendominasi, (b) produk tunggal tak mendominasi, (c) dua produk tak mendominasi, (d) dua produk dengan satu produk mendominasi.

Bila hanya terdapat satu produk dan produk itu mendominasi, maka lemparan panah pasti akan mengenai produk tersebut. Skenario ini diberikan pada Gambar [1](#fig1) (a). Selanjutnya Gambar [1](#fig1) (b) masih menggambarkan bila hanya terdapat satu produk, akan tetapi tidak mendominasi, sehingga pengguna masih ada kemungkinan tidak membeli produk tersebut. Dua produk yang masing-masing tidak mendominasi diberikan pada Gambar [1](#fig1) (c), di mana kemungkin yang muncul adalah pembelian produk pertama atau kedua oleh pengguna atau tidak membeli produk sama sekali. Selanjutnya, seperti diilustrasikan pada Gambar [1](#fig1) (d), dapat saja salah satu produk mendominasi sedangkan produk yang lain tidak sehingga kemungkin produk dominator lebih besar untuk dibeli, produk lain lebih kecil kemungkinannya terbeli, dan masih terdapat kemungkin pengguna tidak membeli produk apapun.


## todo
1. Memastikan terdapatnya jumlah semua kemungkinan adalah satu.
2. Mematangkan istilah mendominasi dan tidak, serta kaitannya denngan terdapatnya kemungkin untuk tidak membeli apa-apa.
3. Mengaitkan antara distribusi bujursangkar dengan market share.
4. Merancang mekanisme suatu produk baru memasuki pasar dan bagaimana ukuran bujursngkar yang telah ada perlu dimodifkasi terkait dengan karakter dari pemain baru.
5. Mempertimbangkan bagaimana representasi dari pemain alternatif atau substitusi yang sebelumnya tidak / belum dianggap sebagai kompetitor.


## notes
1. <a name='r01'></a>Jason Brownlee, "How to Generate Random Numbers in Python", Machine Learning Mastery, 4 Jul 2018, url https://machinelearningmastery.com/how-to-generate-random-numbers-in-python/ [20220621].
2. <a name='r02'></a>dhameliyamilan972, "How to create List of Zeros in Python", Exception Error, 6 Jan 2022, url https://exerror.com/how-to-create-list-of-zeros-in-python/ [20220621].
3. <a name='r03'></a>tejswini2000k, "How to convert NumPy array to list ?", GeeksforGeeks, 16 Mar 2021, url https://www.geeksforgeeks.org/how-to-convert-numpy-array-to-list/ [20220621].
4. <a name='r04'></a>Zach, "How to Draw Rectangles in Matplotlib (With Examples)", Statology, 10 Nov 2020, url https://www.statology.org/matplotlib-rectangle/ [20220621].
5. <a name='r05'></a>nkmk, "Add an item to a list in Python (append, extend, insert)", nkmk.me, 6 Apr 2021, url https://note.nkmk.me/en/python-list-append-extend-insert/ [20220621].
6. <a name='r06'></a>David Landup, "Change Figure Size in Matplotlib", Stack Abuse, 14 Nov 2021, url https://stackabuse.com/change-figure-size-in-matplotlib/ [20220621].
7. <a name='r07'></a>The Matplotlib development team, John Hunter, Darren Dale, Eric Firing, Michael Droettboom, "Changes to the default style", Matplotlib 3.5.2 documentation, 2022, url <https://matplotlib.org/stable/users/prev_whats_new/dflt_style_changes.html> [20220621].
8. <a name='r08'></a>dudung, "randint_draw_rect", GitHub, 21 Jun 2022, url <https://github.com/dudung/python-jupyter-notebook/blob/main/random/randint_draw_rect.ipynb> [20220621].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}