---
title: "automatic electric iron reparation correction"
date: 2022-04-16T17:46:01+07:00
lastmod: 2022-04-17T10:32:00+07:00
author: viridi
mathjax: true
mermaid: true
chartjs: false
tags: ['home', 'reparation']
url: "0060"
draft: false
---
Sebuah setrika listrik otomatis [[1](#r01)] direparasi didapati bahwa sistem kendali panasnya melalui saklar termal [[2](#r02)] tidak bekerja. Sebelum membawanya untuk direparasi telah diduga bahwa penyebabnya adalah kerusakan pada sikring termal [[3](#r03)] dan ternyata benar. Setelah penggantian sikring termal selesai dikerjakan, yang dilakukn dengan memotong satu ujung yang tertambat dan menarik paksa las titik ujung lainnya, pereparasi tidak mau mendengarkan informasi bagaimana koneksi kabel-kabel semula terlihat saat perangkat dibongkar dan ia memasangnya dengan yakin karena saat diuji alat dapat menghasilkan panas, akan tapi tidak menunggu sampai sistem kendali panasnya bekerja. Akhirnya perlu dilakukan koreksi pada hasil reparasi dan perangkat kembali berfungsi dengan baik. Besoknya baru diketahui bahwa terdapat tutorial mengenai hal ini [[4](#r04)] untuk jenis perangkat yang tidak persis sama.


## steps
Langkah-langkah yang dilakukan akan dijelaskan dengan menampilkan gambar-gambar berikut, yang dapatkan sesuai urutan proses koreksi hasil reparasi.

![](/bugx/img/appliance/auto_elec_iron_1.jpg) \
Gambar <a name='fig1'>1</a>. Penutup lapis kedua dan ketiga skrupnya.

Penutup lapis pertama dilepas dengan menukil lembut kaitannya dengan pegangan setrika. Setelah itu perlu dibuka tiga skrup untuk melepas penutup lapis kedua yang diperoleh pada Gambar [1](#fig1).

![](/bugx/img/appliance/auto_elec_iron_2.jpg) \
Gambar <a name='fig2'>2</a>. Bagian di bawah penutup lapis kedua, dua sekrup, dan penyambung dari pemutar saklar termal.

Di bawah penutup lapis kedua terdapat bagian seperti diberikan pada Gambar [2](#fig2) yang merupakan tutup lapis ketiga. Terdapat lima terminal dari kiri ke kanan yang ditautkan lampu kiri, kabel negatif, lampu kanan, kabel ground, dan kabel positif. Untuk membuka tutup lapis ketiga ini tiga sekrup dan satu peyambung tombol, serta kabel dan lampu perlu dilepas.

![](/bugx/img/appliance/auto_elec_iron_3.jpg) \
Gambar <a name='fig3'>3</a>. Kabel dan lampu.

Kabel memiliki tiga terminal pada masing-masing ujungnya, yaitu negatif, ground dan positif (dari atas ke bawah) sesuai dengan pada stekernya pula seperti pada Gambar [3](#fig3). Untuk lampu hanya terdapat dua ujung yang dapat dipeturkarkan.

![](/bugx/img/appliance/auto_elec_iron_4.jpg) \
Gambar <a name='fig4'>4</a>. Elemen pemanas, saklar termal, sikring termal, dan tiga ring isolator panas.

Setelah lapis penutup ketiga diangkat akan diperoleh hasil seperti pada Gambar [4](#fig4). Kelima terminal (dari kiri ke kanan) lebih jelas terlihat fungsinya terhadap elemen pemanas, saklar termal, dan sikring termal.

![](/bugx/img/appliance/auto_elec_iron_5.jpg) \
Gambar <a name='fig5'>5</a>. Hasil bacaan koneksi saat saklar termal terputus.

Selanjutnya adalah memeriksa koneksi ke kumparan pemanas saat saklar termal diputar. Saat keadaan terputus diukur bahwa hambatannya sangat besar karena tidak ada koneksi, sebagaimana diberikan pada Gambar [5](#fig5).

![](/bugx/img/appliance/auto_elec_iron_6.jpg) \
Gambar <a name='fig6'>6</a>. Hasil bacaan koneksi saat saklar termal tersambung.

Kemudian saklar diputar dan umumnya terdengar bunyi 'klik' yang berarti terjadi koneksi. Gambar [6](#fig6) memperlihatkan hasilnya bahwa hambatannya kecil sekitar dan karena multimeter berada pada mode deteksi koneksi terdengar bunyi yang sebagai konfirmasinya.

![](/bugx/img/appliance/auto_elec_iron_7.jpg) \
Gambar <a name='fig7'>7</a>. Hasil bacaan hambatan saat saklar koneksi pada putaran awal.

Saklar termal setelah terkoneksi dapat diputar dari awal sampai akhir. Keadaan awal diberikan pada Gambar [7](#fig7) dan keadaan akhirnya diberikan pada Gambar [8](#fig8), yang pada masing-masing gambar diberikan pula bacaan hambatannya.

![](/bugx/img/appliance/auto_elec_iron_8.jpg) \
Gambar <a name='fig8'>8</a>. Hasil bacaan hambatan saat saklar koneksi pada putaran akhir.

Hambatan pada putaran awal dan akhir saklar termal setelah terkoneksi tidak memberikan perbedaan yang terlalu besar yaitu hanya $1.6 \ {\rm \Omega}$ dari semula $7.2 \ {\rm \Omega}$ menjadi $8.8 \ {\rm \Omega}$. Hal ini dikarenakan putaran pada saklar termal yang bekerja dengan prinpsip bimetal hanya mengatur jarak antara kontak yang terjadi karena bimetal melengkung akibat panas yang diterimanya.

![](/bugx/img/appliance/auto_elec_iron_9.jpg) \
Gambar <a name='fig9'>9</a>. Bagian dasar setrika listrik otomatis.

Setelah semua lapisan penutup dilepas diperoleh bagian bawahnya yang terdiri dari kumparan yang sudah dipasang permanen dengan dasar lempeng logam setrika dan kelima terminal, serta saklar termal dan sikring termal.

![](/bugx/img/appliance/auto_elec_iron_A.jpg) \
Gambar <a name='fig10'>10</a>. Pemasangan kabel dengan mengikuti konfigurasi awal sebelum direparasi.

Dari Gambar [9](#fig9) ujung kiri lampu dapat bertemu dengan kabel negatif, lalu ground dengan terminal ke lempeng logam, dan kabel positif harus ke terminal yang terhubung dengan saklar termal lalu ke sikring termal. Dan akhirnya ujung lain lampu ke termninal pada ujung paling kanan dari kumparan pemanas. Hasil pemasangan dengan konfigurasi ini, yang sesuai dengan konfigurasi awal sebelum direpasai diberikan pada Gambar [10](#fig10).

![](/bugx/img/appliance/auto_elec_iron_B.jpg) \
Gambar <a name='fig11'>11</a>. Setrika listrik otomatis setelah dirakit kembali dan penutup pertama juga dikenakan.

Setelah semua bagian setrika listrik dirakit kembali akan diperoleh hasil seperti pada Gambar [11](#fig11) yang merupakan Gambar [1](#fig1) ditambah dengan penutup pertama.


## analysis
Kekeliruan yang terjadi dapat dijelaskan menggunakan gambar berikut ini.

![](/bugx/img/appliance/auto_elec_iron_C.png) \
Gambar <a name='fig12'>12</a>. Koneksi kelima terminal hasil reparasi (kiri) dan setelah dikoreksi (kanan).

Konfigurasi setelah reparasi memperlihatkan bahwa daya dari luar tidak melewati sistem kendali panas melainkan langsung pada kedua ujung pemanas, terminal paling kiri dan paling kanan sebagaimana diberikan pada Gambar [12](#fig12) (kiri) sehingga hal ini menjelaskan mengapa setrika menjadi sangat panas dan hanya akan terhenti saat daya dihentikan atau sikring termalnya putus. Saklar termal dalam hal ini hanya mengatur arus pada lampu (L). Setelah dikoreksi dapat dilihat pada Gambar [12](#fig12) (kanan) bahwa daya $+$ masuk melalui terminal ketiga dari kiri dan melewati saklar termal, sikring termal, baru menuju kumparan pemanas, dengan demikian saat panas yang diinginkan tercapai saklar termal akan terputus dan arus yang mengalir ke kumparan terhenti. Lampu (L) cukup pada kedua ujung-ujung kumparan, yaitu pada terminal paling kiri dan kanan.

Konfigurasi setelah reparasi dan setelah koreksi dapat dilihat kabel-kabelnya pada Gambar [2](#fig2) dan [10](#fig10), yang telah digambarkan ulang dengan skema kasar komponen-komponen listriknya pada Gambar [12](#fig12).


## exer
1. Apa kegunaan tiga cincin isolator panas pada Gambar [4](#fig4)? Apa yang terjadi bila ketiganya tidak digunakan?
2. Bisa saja kumparan pemanas yang rusak. Bagaimana memeriksa bahwa keadaan kumparan masih baik dengan menggunakan multimeter? Jangan diperiksa dengan menghubungkannya dengan listrik rumah. Hal ini amat berbahaya.
3. Apakah konfigurasi setelah reparasi pada Gambar [2](#fig2) atau [12](#fig12) (kiri) dapat berfungsi untuk mengendalikan panas pada kumparan?
4. Apakah terdapat skema tanpa saklar termal dan cukup hanya dengan sikring termal dan tetap dapat digunakan berulang tanpa menggantik sikringnya?


## notes
1. <a name='r01'></a>Muhammad Ahmad Raza, "An Electric Clothes Iron", Medium, 11 Jul 2020, url <https://medium.com/@aa0798480/48e1dd60226> [20220417].
2. <a name='r02'></a>Ashish, "How Does Temperature Regulation In An Electric Iron Work?", Science ABC, 5 Jan 2022, url <https://www.scienceabc.com/innovation/iron-automatic-temperature-regulation-control-thermostat-heating-element-bimetallic-strip.html> [20220417]
3. <a name='r03'></a>-, "What is a Thermal Fuse?", Swe-Check Pty Ltd., 2021, url <https://www.swe-check.com.au/editorials/thermal_fuses.php> [20220417].
4. <a name='r04'></a>"HOW TO REPAIR ORPAT IRON THERMAL FUSE CHANGE IN 8 MINUTES", YouTube, 23 Nov 2018, url <https://m.youtube.com/watch?v=3OzXPqxsptE> [20220417].

{{< citeas >}}
