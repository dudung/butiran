---
title: "presentation-flowchart-data"
date: 2022-07-14T17:24:00+0700
lastmod: 2022-07-15T06:31:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['idea', 'pcm', 'progress', 'supervision']
url: "0116"
draft: false
---
Presetentasi kemajuan pengerjaan desertasi seorang PMDSU dilaksanakan secara daring [[1](#r01)], walaupun sempat salah baca dan sudah hadir di kampus. Topik yang digusung adalah mengenai konduktivitas termal pada fluida yang merupakan bahan PCM [[2](#r02)].


## technical problem
Saat akan menghadiri presentasi daring, terkendala dengan komputer yang digunakan. Sempat dua kali restart baru akhirnya komputer dapat bekerja, mendeteksi WiFi, kamera web, dan bergabung dengan tautan Zoom yang diberikan.

![](/bugx/img/idea/pcm/pc-problem.jpg)

Gambar <a name='fig1'>1</a>. Tampilan layar komputer saat bermasalah dengan restart pertama kali (kiri) dan kedua kali (kanan).

Kehadiran lewat Zoom dengan menggunakan komputer di ruang kerja di kampus berjalan lancar sampai akhirnya reset ketiga kalinya dan mulai menggunakan smartphon.


## info
Terdapat beberpa variasi parameter seperti konsentrasi dopan, temperatur pengukuran, dan medan magnetik eksternal yang diberikan. Alur pengukuran yang telah mengakomodasi ketiga macam variasi tersebut diberikan di bawah ini. Di dalamnya juga telah disertakan jumlah pengulangan untuk setiap variasi parameter.

![](/bugx/img/idea/pcm/flowchart-to-be-fixed.jpg)

Gambar <a name='fig2'>2</a>. Diagram alir proses pengukuran.

Kemudian saat mengolah data untuk mementukan titik-titik penting, masih terdapat penentuan garis dan sebagainya yang dilakukan secara manual sehingga faktor subyektif penganalis masih besar dan ini perlu diperbaiki agar hasilnya konsisten. Terutama untuk memastikan bahwa kondisi crossover benar-benar terjadi dan bukan hanya karena proses analisis ataupun pra-processing. Data rata-rata terlibat baik akan tetapi data smoothing cukup membingungkan. Belum ditanyakan apakah smoothing berdasarkan model atau sekedar mencari titik tengahnya untuk sekian titik di sekitarnya.


## data
+ Arsip data pertama yang diberikan berekstensi OPJ, di mana untuk jenis berkas ini terdapat format binary dan plain text yang digunakan oleh dua aplikasi berbeda [[3](#r03)]. Format binary digunakan oleh Origin Pro [[4](#r04)]. Untuk membuat data dari Python yang dapat dibaca oleh Origin diperlukan paket `originpro` [[5](#r05)], yang masih memerlukan instalasi dari Origin 2021 atau versi lebih baru [[6](#r06)]. Sampai saat ini belum ditemukan cara untuk membuka datanya secara mandiri tanpa perlu menginstal Origin terelebih dahulu.
+ Terdapat dua bacth data mentah setidaknya, yang pertama diukur oleh tim dan yang kedua diukur sendiri. Batch pertama belum diperoleh mentahnya dan langsung diisikan ke Origin Pro sehingga sulit diolah lebih lanjut.
+ Data dari alat ukur Applent dikeluarkan berbentuk CSV dengan pengulangan langsung ditambahkan bloknya tanpa adanya separasi berupa satu baris kosong. Kadan terdapat pula masalah teknis (perlu dikonfirmasi ulang) sehingga ada data yang tidak digunakan. Saat ini baru diberikan `5%CoFe2O4.zip` dan `5%Fe3O4.zip`.
+ Terdapat pula berkas data `Fe3O4(2%)+LA.opj` yang belum dapat dibuka.
+ Keseluruhan data belum terarsipkan dengan baik dan diminta untuk dicarikan dan sebaiknya dalam format mentah yang sama sehingga dapat disimpan secara terstruktur dan accessible.


## todo
+ Memberbaiki diagram alir pengukuran pada Gambar [2](#fig2) agar lebih sesuai dengan aturan baku di bidang komputasi.
+ Meminta data-data mentah untuk diperiksa proses pengerjaannya sehingga yakin sebelum melakukan analisis lebih dalam.
+ Mencoba untuk menstrukturkan data mentah yang ada dan disimpan sehingga bisa digunakan lebih lanjut.
+ Merancang proses analisis yang lebih konsisten, otomatis, dan menggunakan parameter yang sama, sehingga dapat meminimumkan subyektivitas penganalis.
+ Mencari alternatif membuka berkas OPJ dengan tanpa Origin, misalnya menggunakan piranti lunak sumber terbuka. 


## notes
1. <a name='r01'></a>Yunita Anggraini, "Grup meeting PCM-HTF", Zoom, 14 Jul 2022, 0900, url <https://itb-ac-id.zoom.us/j/96553048602> [20220714].
2. <a name='r02'></a>Linquip Team, "What is Phase Change Material? Theory, Example and Applications", Linquip Technews, 10 Aug 2021, url <https://www.linquip.com/blog/what-is-phase-change-material/> [20220714].
3. <a name='r02'></a>-, ".OPJ File Extension", FileInfo.com, Sharpened Productions, 31 Jan 2018, url <https://fileinfo.com/extension/opj> [20220715].
4. <a name='r04'></a>-, "Origin and OriginPro", OriginLab Corporation, url <https://www.originlab.com/index.aspx?go=PRODUCTS/Origin> [20220715].
5. <a name='r05'></a>lkb0221, "Answer to ''", Stack Overflow, 30 Nov 2020, url <https://stackoverflow.com/a/65076843/9475509> [20220715].
6. <a name='r06'></a>OriginLab, "originpro 1.1.1", PyPI, Python Software Foundation, 6 May 2022, url <https://pypi.org/project/originpro/1.1.1/> [20220715].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}