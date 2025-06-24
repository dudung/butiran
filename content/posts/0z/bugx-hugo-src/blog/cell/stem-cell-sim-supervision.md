---
title: "stem cell sim supervision"
date: 2022-08-19T04:16:00+0700
lastmod: 2022-08-19T05:37:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['idea', 'progress', 'stem-cell', 'supervision']
url: "0155"
draft: false
---
Komunikasi lewat WA kemarin menyepakati untuk berdiskusi secara daring pagi ini di FI mengenai finalisasi simulasi sel punca yang telah dibuat [[1](#r01)]. Ini merupakan arahan setelah sidang dilaksanakan. Komunikasi selama ini dilakukan lewat WA untuk yang cepat dan lewat GitHub untuk yang lebih teknis, di mana kode diperbarui sebulan lalu dan diagram alir sembilan hari yang lalu [[2](#r02)].


## direction
+ Membuat NP yang lebih standar, seperti persegi panjang dengan parameter sisi-sisinya a dan b yang dapat divariasikan.
+ Membuat NP dengan variasi nilai a dan b berupa list seperti \[a1 a2 a3\] yang menggambarkan pola berulang jarak antar dua ligan terdekat adalah a1, lalu a2, dan a3, dengan hal yang sama juga untuk b, seperti \[b1 b2\].
+ Bila memungkinkan, variasi vektor basis sel lain, seperti segitiga, dapat pula dibuat, akan tetapi bukan prioritas.
+ Membuat berkas keluaran berupa posisi-posisi NP dan posisi-posisi integrin sehingga dapat diolah dengan program lain, misalnya OUTNP.txt dan OUTSC.txt, hal ini akan memudahkan modifikasi program karena pengolahan berkas luaran bebas dari modifikasi program penghasilnya.
+ Merumuskan satu parameter, misalnya kerapatan dari kedua berkas sebelumnya yang dapat diplot.
+ Merumuskan parameter orientasi dari kedua berkas berikutnya sehingga dapat diperoleh hubungan orientasi NP dengan orientasi SC.
+ Membuat justifikasi selesainya simulasi, seperti energi dari interaksi integrin-integrin atau ukuran sel yang sudah maksimum, dengan luas atau keliling.
+ Menghitung irisan dua buah sel yang berdekatan sehingga dapat diplot luas irisan sebagai fungsi dari geometri NP.
+ Mencari justifikasi langkah waktu simulasi dengan suatu besaran waktu pada proses pertumbuhan SC, proses melekatnya SC, atau lainnnya, di mana langkah waktu simulasi sebaiknya belum dinyatakan dengan waktu sebenarnya akan tetapi akan diskalakan dengan alasan tertentu. Dengan dmeikian di awal tetap dalam langkah waktu komputasi, lalu dikarenakan ada persitiwa fisis atau biologis yang dapat dibandingkan, dapat dikatan bahwa 1 dt simulasi = 1 dt sebenarnya.

Panduan di atas telah disampaikan pula secara daring pada Issue 4 di repo stemcell [[3](#r03)] sebelum diskusi luring dilaksanakan. Saat ini adalah 05:37+07.


## notes
1. <a name='r01'></a>Zacky Fariruza, "Percakapan Pribadi", WhatsApp, 12:34, 18.8.2022.
2. <a name='r02'></a>azfairuza, "stemcell", GitHub, 10 Aug 2022, url <https://github.com/azfairuza/stemcell/tree/642bc935de> [20220819].
3. <a name='r03'></a>dudung, "thesis revision", GitHub, stemcell, 19 Aug 2022, url <https://github.com/azfairuza/stemcell/issues/4> [20220819].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}