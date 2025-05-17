---
title: "course prerequisite"
date: 2022-08-09T18:32:00+0700
lastmod: 2022-08-09T20:31:00+0700
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['fi']
url: "0140"
draft: false
---
Perlu terdapat perencanaan untuk berhasil menyelesaikan suatu perkuliahan dengan baik, yang salah satunya adalah telah mengambil kuliah lain yang merupakan pra-syaratnya, di mana dapat saja terdapat lebih dari satu kuliah yang harus sudah diambil [[1](#r01)]. Aturan pra-syarat kuliah ini dapat diatur dalam sistem LMS untuk satu kuliah atau rangkaian kuliah [[2](#r02)].


## fi4171-2019
Menurut kurikulum 2019 kuliah FI4171 Komputasi dan Sistem Instrumentasi Cerdas, yang dalamnya terdapat pemodelan granular, pada semester ganjil ini memerlukan pra-syarat FI3201 Fisika Komputasi dan FI2271 Sistem Instrumentasi yang dibukan pada semester genap sebelumnya. Kedua kuliah ini pun memiliki pra-syarat juga, sehingga memang perlu merancang dengan baik rangkaian kuliah untuk mengambil FI4171.

<div class="mermaid" style="position: relative; top: -40px; left: -0px; height: 250px; width: 520px; border: 0px solid black; transform: scale(1.0);">
flowchart LR
  %% element use
  A & B & E --> F
  A & B & C & D ---> E
  A & B & C & D --> G
  G & E & F --> J
  J & H --> K
  I --> H
  B --> I
  %% element definition
  A([ FI1101 ])
  B([ FI1201 ])
  C([ MA1101 ])
  D([ MA1201 ])
  E([ FI2101 ])
  F([ FI2201 ])
  G([ FI2102 ])
  H([ FI2271 ])
  I([ FI2103 ])
  J([ FI3201 ])
  K([ FI4171 ])
</div>

Gambar <a name='fig1'>1</a>. Kuliah FI4171 dan kuliah-kuliah pra-syaratnya serta rangkaian kuliah-kuliah lainnya.

Diskusi mengenai kuliah FI4171 ini, yang akhirnya tidak dapat diambil, terjadi saat perwalian untuk Faiz Aulia Rahman yang akan menekuni Simulasi Citra Partikel Granular Menggunakan Unity. Terlihat dari Gambar [1](#fig1) bahwa perlu ada rencana terstruktur agar dapat mengambil perkuliahan ini.


## fi4002-2019
Terdapat pula diskusi dengan Nabil (MA 19) perihal FI4002 Simulasi dan Pemodelan Sistem Fisis yang memerlukan pra-syaratnya sendiri, yaitu FI 3201 Fisika Komputasi.

<div class="mermaid" style="position: relative; top: -10px; left: -0px; height: 270px; width: 520px; border: 0px solid black; transform: scale(1.0);">
flowchart LR
  %% element use
  A & B & E --> F
  A & B & C & D --> E
  A & B & C & D --> G
  G & E & F --> H
  H --> I
  %% element definition
  A([ FI1101 ])
  B([ FI1201 ])
  C([ MA1101 ])
  D([ MA1201 ])
  E([ FI2101 ])
  F([ FI2201 ])
  G([ FI2102 ])
  H([ FI3201 ])
  I([ FI4002 ])
</div>

Gambar <a name='fig2'>2</a>. Kuliah FI4002 dan kuliah-kuliah pra-syaratnya serta rangkaian kuliah-kuliah lainnya.

Dari Gambar [2](#fig2) terlihat bahwa diluar FI sulit untuk mengambil FI4002 dikarenakan pra-syaratnya yang berantai.


## to-do
+ Menyampaikan adanya kemungkinan sulitnya prodi lain mengambil matakuliah pada suatu prodi bila pra-syaratnya saling terkait.
+ Mengarahkan mahasiswa yang diwalikan agar secara terstruktur dan terencana dapat mengambil matakuliah yang diinginkan dengan mempersiapkan terlebih dahulu kuliah-kuliah pra-syaratnya.
+ Mencoba melakukan sosialisasi diagram dengan Mermaid, seperti pada Gambar [1](#fig1) dan [2](#fig2), sehingga memudahkan mahasiswa untuk melakukan perencanaan dan juga membantu para dosen wali, karena tayangan pada SIX sulit untuk dilihat dan perlu untuk membuka beberapa halaman web yang saling terhubung.


## notes
1. <a name='r01'></a>Raja, "Configuring And/Or Prerequisites in SuccessFactors Learning", SAP, 13 Sep 2013, url <https://blogs.sap.com/2013/09/13/configuring-andor-prerequisites-in-success-factors-lms/> [20220809].
2. <a name='r02'></a>John Schroeder, "Set Prerequisite Rules for a Course or Course Series", Latitude Learning, 14 May 2015, url <https://www.latitudelearning.com/blog/setprerequisiterulesforacourseorcourseseries> [20220809].

{{< citeas >}}

{{< todo >}}
[12:59, 9.8.2022] +62 811-3374-524: Selama siang, Pak Sparisoma. Saya Nabil MA 19, ingin mengambil simulasi dan pemodelan sistem fisis, apakah kalau belum ngambil mk prasyaratnya dipeebolehkan? terima kasih
[15:56, 9.8.2022] Sparisoma Viridi: Selamat sore, Nabil. Terima kasih telah berminat mengambil komputasi sistem fisis.

Saya sebagai pengajar mengijinkan akan tetapi kuatir secara sistem tidak bisa. Saya konfirmasi dengan Kaprodi S1 Bu Fatimah dulu, ya.
[16:00, 9.8.2022] +62 811-3374-524: iya Pak, terima kasih atas jawabannya. untuk di sistem memang tidak di perbolehkan. oleh karena itu, saya ingin mengkonfirmasi kepada Bapak
[16:00, 9.8.2022] +62 811-3374-524: tapi mungkin nanti juga masi ada perubahan untuk mk yang ingin saya ambil
[16:00, 9.8.2022] +62 811-3374-524: terima kasih Pak atas bantuannya
[16:17, 9.8.2022] Sparisoma Viridi: Maaf ternyata seperti yang sudah seperti yang disampaikan Nabil.

[8/9, 16:01] FI Fatimah Arofiati Noor: Jika prasyarat ambil blm pernah diambil maka sistem akan otomatis menolak.. Demikian pak
[8/9, 16:16] Sparisoma Viridi: Baik, Bu. Terima kasih.
[16:18, 9.8.2022] Sparisoma Viridi: Saya hanya bisa mengijinkan sit-in tetapi tidak bisa memberikan nilai bila tidak ada di FRS. Maaf ya, Nabil.
[16:24, 9.8.2022] +62 811-3374-524: Baik Pak Sparisoma, Tidak masalah. terima kasih atas bantuannya, Pak 🙏
[18:19, 9.8.2022] Sparisoma Viridi: Sama-sama, Nabil. Semoga sukses kuliahnya, ya. Aamiin..
[20:24, 9.8.2022] Sparisoma Viridi: Banyak yang terkait sampai tingkat 2, Nabil. Kita kelihatannya belum siap seperti liberal art yang bisa campur-campur berbagai prodi.
--
[15:57, 9.8.2022] Sparisoma Viridi: Assalamu'alaikum wr wb, Bu Fatimah. Semoga selalu sehat dan baik, ya. Aamiin..
[15:58, 9.8.2022] Sparisoma Viridi: Mohon arahannya untuk hal berikut ini.

[8/9, 12:59] +62 811-3374-524: Selama siang, Pak Sparisoma. Saya Nabil MA 19, ingin mengambil simulasi dan pemodelan sistem fisis, apakah kalau belum ngambil mk prasyaratnya dipeebolehkan? terima kasih
[8/9, 15:56] Sparisoma Viridi: Selamat sore, Nabil. Terima kasih telah berminat mengambil komputasi sistem fisis.

Saya sebagai pengajar mengijinkan akan tetapi kuatir secara sistem tidak bisa. Saya konfirmasi dengan Kaprodi S1 Bu Fatimah dulu, ya.
[15:58, 9.8.2022] Sparisoma Viridi: Terima kasih. Wasm wr wb.
[16:00, 9.8.2022] FI Fatimah Arofiati Noor: Wa'alaikum salaam wrwb.. Alhamdulillah saya sehat hanya sedikit kelelahan.. Semoga pak Dudung juga selalu sehat..
[16:01, 9.8.2022] FI Fatimah Arofiati Noor: Jika prasyarat ambil blm pernah diambil maka sistem akan otomatis menolak.. Demikian pak
[16:15, 9.8.2022] Sparisoma Viridi: Semoga segera pulih dari kekelahannya, ya Bu. Aamiin YRA... 🤲🏻
[16:15, 9.8.2022] Sparisoma Viridi: Aamiin. Terima kasih, Bu.
[16:16, 9.8.2022] Sparisoma Viridi: Baik, Bu. Terima kasih.
[16:21, 9.8.2022] FI Fatimah Arofiati Noor: Hatur nuhun pak Dudung...
[16:21, 9.8.2022] FI Fatimah Arofiati Noor: Sami2 pak..

--
[20:25, 9.8.2022] Sparisoma Viridi: Punten hanya ingin sharing, Pak Dekan.

Ada seorang MA 19 yang ingin mengambil matakuliah FI4002 Simulasi dan Pemodelan Sistem Fisis akan tetapi syarat di FI tidak memungkinkan.
[20:26, 9.8.2022] Sparisoma Viridi: Mungkin perlu ngobrol bila kita mau perkuliahannya, yang judulnya menarik, dapat diambil oleh prodi lain ya, Pak. Hihihi...

--
[20:21, 9.8.2022] Sparisoma Viridi: Assalamu'alaikum wr wb, Pak Suprijadi. Semoga Bapak selalu sehat dan baik, ya. Aamiin.
[20:22, 9.8.2022] Sparisoma Viridi: Hanya ingin sharing bahwa ada seorang MA 19 yang ingin mengambil matakuliah FI4002 Simulasi dan Pemodelan Sistem Fisis akan tetapi syarat di FI tidak memungkinkan.
[20:22, 9.8.2022] Sparisoma Viridi: Bila demikian hanya FI yang bisa ambil.
[20:23, 9.8.2022] Sparisoma Viridi: Bila ingin dapat diambil oleh prodi lain, mungkin perlu fule di SIX yang berbeda, ya Pak?
[20:23, 9.8.2022] Sparisoma Viridi: JFYI. Terima kasih. Wasm wr wb.
{{</ todo >}}