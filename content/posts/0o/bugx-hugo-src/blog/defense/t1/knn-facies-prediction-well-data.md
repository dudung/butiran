---
title: "knn facies prediction well data"
date: 2022-09-12T18:40:00+0700
lastmod: 2022-09-13T16:12:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['idea', 'facies', 'knn', 't1']
url: "0177"
draft: false
---
Informasi disampaikan kurang dari seminggu bahwa akan sidang TA 2 [[1](#r01)], dengan draft disampaikan setengah jam kemudian [[2](#r02)] dan dikirimkan kembali satu hari sebelum hari presentasinya [[3](#r03)]. Versi PDF diberikan setelah diminta pada malam harinya [[4](#r04)]. Metode K Nearest Neighbors (KNN) merupakan metode non-parametrik, yang digunakan untuk klasifikasi dan regresi, termasuk kepada 10 algoritma paling berpengaruh dalam penam-bangan data dan dianggap sebagai salah satu metode tersederhana dalam bidang pembelajaran mesin [[5](#r05)].


## presentation
Presentasi karya berjudul "Penggunaan Metode K-Nearest Neigbors (KNN) untuk Prediksi Fasies Berdasarkan Data Sumur" oleh Fakhrul Rahadian di Ruangan 1203 pada pada pukul 1330.

![](https://live.staticflickr.com/65535/52354631349_760d85e34f.jpg)

Gambar <a name='fig1'>1</a>. Presentasi Tugas Akhir 2 oleh Fakhrul Rahadian dengan pembim-bing Umar Fauzi.

Presentasi dilakukan dengan cukup banyak istilah geofisika sehingga masih dapat lebih dimudahkan istilah yang digunakan agar lebih umum dapat dipahami oleh seorang fisikawan yang bukan geofisikawan.

![](https://live.staticflickr.com/65535/52354311526_a3ff49f4a3.jpg)

Gambar <a name='fig2'>2</a>. Sesi diskusi setelah presentasi selesai dilakukan.

Diskusi dilakukan dengan menarik dan muncul berbagai ide yang dapat ditindaklanjuti. Beberapa hal menarik yang dapat dicoba seperti
- penafsiran / prediksi bukan dengan data log langsung yang terukur tetapi telah diubah menjadi parameter fisis dari fasies atau lapisan buminya,
- KNN dapat dipilih yang unsupervised sehingga jumlah kolompok tidak dipaksa menjadi dua atau tiga macam akan tetapi seadanya saat optimasi telah tercapai,
- nilai $k$ yang memberikan kesalahan prediksi terkecil perlu dikaitkan dengan kemiripannya dengan data faktual, apakah selalu berkorelasi,
- penggunaan istilah dan indeks dari jarak yang disampaikan dapat dijabarkan dengan lebih baik dan tertruktur sehingga memudahkan pembacaannya, dan
- menerapkan KNN ini, bila telah menggunakan parameter fisis, pada bahan lain yang menjadi parameter bahan secara umum (polimer, optik, semikonduktor, logam, keramik, organik, dan lainnya).


## to-do
- Mempelajari metode KNN dan implementasinya dalam bahasa pemrograman yang diketathui, misalnya dalam Python [[6](#r06)].
- Mencari penerapannya dalam data bahan butiran, baik simulasi maupun eksperimen.


## notes
1. <a name='r01'></a>Fakhrul Rahadian, "Komunikasi pribadi", WhatsApp, 2:29 PM, 9/6/2022.
2. <a name='r02'></a>Fakhrul Rahadian, "Komunikasi pribadi", WhatsApp, 2:50 PM, 9/6/2022, url <https://osf.io/c54v9> [20220913].
3. <a name='r03'></a>Fakhrul Rahadian, "Komunikasi pribadi", WhatsApp, 16:26, 12.9.2022, url <https://osf.io/bzpmc> [20220913].
4. <a name='r04'></a>Fakhrul Rahadian, "Komunikasi pribadi", WhatsApp, url <https://osf.io/sw968> [20220913].
5. <a name='r05'></a>Mouselimis Lampros, "Kernel k nearest neighbors", mlampros, 10 Jul 2016, url <https://mlampros.github.io/2016/07/10/KernelKnn/> [20220913].
6. <a name='r06'></a>Isha Bansal, "K-Nearest Neighbors (KNN) in Python", DigitalOcean, 4 Aug 2022, url <https://www.digitalocean.com/community/tutorials/k-nearest-neighbors-knn-in-python> [20220913].

{{< citeas >}}

<!-- blog\defense\t1\knn-facies-prediction-well-data.md -->

{{< todo >}}
{{</ todo >}}