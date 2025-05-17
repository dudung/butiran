---
title: "butiran py"
date: 2022-09-13T17:43:00+0700
lastmod: 2022-09-13T21:15:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['butiran', 'move-on']
url: "0179"
draft: false
---
Setelah sebelumnya sempat amat terinsiprasi, dan sampai agak frustasi, saat kunjungan ke suatu lab Tokyo University [[1](#r01)], Dua dari tiga bimbingan yang bergabung setelah kampus kembali dapat beraktivitas kembali dengan mode new normal, [Jonathan Adriel](https://github.com/JonathanAdriel) dan Nawaf Alfarizki, amat tertarik menggunakan suatu piranti lunak DEM [[2](#r02)]. Sebelum mengenal DEM, simulasi dengan menggunakan MD telah dibuat dengan frontend JavaScript [[3](#r03)] dan mulai dikembangkan dengan Python [[4](#r04)]. Sebagai sebuah puncak, suatu karya Q1 telah berhasil dihasilkan oleh Fenfen Fenda Florena [[5](#r05)] dengan menggunakan DEM bersumber terbuka Yade [[6](#r06)], yang sempat membuat goyah apakah harus tetap mengembangkan piranti lunak sendiri? Tulisan ini akan menjadi pengingat bahwa untuk tetap konsisten untuk impian awal untuk memiliki suatu karya sendiri untuk bidang granular dengan nama yang orisinil, butiran.


## butiran.js
Gabungkan tiga program dari [abm-x](https://github.com/dudung/abm-x) ke [butiran.js](https://github.com/dudung/butiran.js) dan lengkapi contoh-contoh aplikasinya sehingga diperoleh 30 contoh, yang sayangnya 2 tidak bekerja dan 1 masih gagal [[7](#r07)]. Tapi setidaknya beban lama untuk merapikan telah terselesaikan. Masih ada dilema mengenai lib (untuk MD) dan app/libs (untuk MD dan ABM secara terpisah) yang belum terpecahkan. Perlu dipikirkan bila akan ada DEM, MPCD, SPH, MPS dan lainnya bila akan dikembangkan lebih lanjut.


## butiran
Proyek dengan Python ini terhenti dan belum dikerjakan lagi. Telah pula ada paket [butiran 0.0.9](https://pypi.org/project/butiran/) di PyPI yang belum sinkron dengan [butiran 0.0.2](https://github.com/dudung/butiran) di GitHub. Pengantar di atas akan dijadikan motivasi untuk membuka kembali proyek ini dengan konsistensi, setidaknya 1-2 jam sehari mengerjakannya, walau tidak harus coding. Mungkin bisa teori dan rumus-rumusnya. Bismillah. Tulisan terkait akan merujuk balik ke tulisan ini akan terlacak perkembangan dan konsistensinya.


## notes
1. <a name='r03'></a>Mikio Sakai, "Sakai Lab.", Computational Granular Dynamics Group, Resilience Engineering Research Center, The University of Tokyo, 2022, url <https://dem.t.u-tokyo.ac.jp/> [20220913].
2. <a name='r02'></a>"Rocky DEM", ESSS, 2022, url <https://rocky.esss.co/> [20220913].
3. <a name='r03'></a>dudung, "butiran.js", GitHub, 14 May 2020, url <https://github.com/dudung/butiran.js/tree/15e46c311f> [20220913].
4. <a name='r04'></a>dudung, "butiran", GitHub, 20 May 2022, url <https://github.com/dudung/butiran/tree/8e73b9ead7> [20220913].
5. <a name='r05'></a>Fenfen Fenda Florena, Ferry Faizal, Sparisoma Viridi, "Experimental and simulation study of solid flows in beads mill", Advanced Powder Technology [Adv Powder Technol], vol 32, no 8, p 2703-2711, Aug 2021, url <https://doi.org/10.1016/j.apt.2021.05.029>.
6. <a name='r06'></a>Václav Šmilauer, "Welcome to Yade - Open Source Discrete Element Method", 2009, url <https://yade-dem.org/doc/> [20220913].
7. <a name='r07'></a>dudung, "butiran.js", GitHub, 13 Sep 2022, url <https://github.com/dudung/butiran.js/tree/deb6a10cb8> [20220913].

{{< citeas >}}

<!-- blog\butiran\butiran-py -->

{{< todo >}}
{{</ todo >}}