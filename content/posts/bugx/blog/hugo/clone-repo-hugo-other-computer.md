---
title: "clone repo hugo other computer"
date: 2022-05-12T08:47:00+07:00
lastmod: 2022-05-12T19:06:00+07:00
author: viridi
draft: false
tags: ['hugo', 'github', 'clone', 'windows']
url: "0070"
---
Setelah secara umum Bandung Raya menjadi PPKM Level 2 [[1](#r01)] dan terdapat SE dari institusi [[2](#r02)] yang terimplementasi salah satunya dengan U2 FI120X secara luring kemarin, hari ini mulai setting kembali komputer di ruang kerja.


## update chrome
Google Chrome sudah terlalu tua sehingga perlu diperbarui.

```
Settings > About Google Chrome
```

yang akan menjadi

```
Google Chrome
Chrome ist auf dem neuesten Stand
Version 101.0.4951.64 (Offizieller Build) (32-Bit)
```

setelah proses update dilakukan. Atau dapat pula dilakukan dengan mengunduh installernya [[3](#r03)].


## download hugo
Versi terkini Hugo adalah `v0.98.0` yang dirilis 28 April yang lalu [[4](#r04)]. Unduh dan ekstrak pada suatu folder, misalnya `C:\Hugo` dan tambahkan informasi ini ke Windows path.


## github tokens
Dikarenakan sumber dari `bugx` masih merupakan repositori privat, maka diperlukan token Github untuk mengunduhnya [[5](#r05)], yang memberikan

```
ghp_000000000000000000000000000000000000
uni — repo
Expires on Sat, Jun 11 2022.
```
sebagai contohnya.


## theme
Theme Hugo `hugo-theme-codex` karya [jakewies](https://github.com/jakewies) `v1.6.0` bertanggal 26 Juli 2021 [[6](#r06)] digunakan pada `bugx`.


## clone repo
Terkait dengan repositori `bugx` yang menggunakan theme `hugo-theme-codex` sebagai submodule, proses clone dilakukan dengan cara [[7](#r07)]

```
git clone https://github.com/dudung/bugx.git --recursive
```

di mana perlu diperhatikan versi Git yang digunakan [[8](#r08)].


## run hugo
Hugo telah berhasil dijalankan. Sebagai hasilnya adalah tulisan ini, yang dimulai di ruang kerja dengan instalasi baru Hugo pada Windows 10 32 bit dan dilanjutkan serta diakhiri setelah kembali ke rumah.


## notes
1. <a name='r01'></a>Binti Mufarida, "Ini Daftar Lengkap PPKM Jawa-Bali hingga 23 Mei 2022", SINDOnews.com, MNC Portal, 10 Mei 2022, url <https://nasional.sindonews.com/read/764999/15/ini-daftar-lengkap-ppkm-jawa-bali-hingga-23-mei-2022-1652137518?showpage=all> [20220512].
2. <a name='r02'></a>Widjaja Martokusumo, "Pemberlakuan Pembatasan Kegiatan Masyarakat di Lingkungan Institut Teknologi Bandung", Surat Edaran nomor 730/IT1.B03/HK.00/2022, Institut Teknologi Bandung, 9 Mei 2022, Bandung, Indonesia, url <https://www.itb.ac.id/files/730_2022_SE_PPKM_ITB_9Mei2022.pdf> [20220512].
3. <a name='r03'></a>-, "Download Chrome", Windows 10/8.1/8/7 32-Bit, Google Chrome (online=0, offline=1), url <https://www.google.com/chrome/?standalone=0> [20220512].
4. <a name='r04'></a>beb, "Hugo v0.98.0", GitHub, 28 Apr 2022, url <https://github.com/gohugoio/hugo/releases/tag/v0.98.0> [20220512].
5. <a name='r05'></a>"Personal access tokens", GitHub, url <https://github.com/settings/tokens> [20220512].
6. <a name='r06'></a>Jake Wiesler, "This Site Is Now A Hugo Theme", jakewiesler.com, 4 Jun 2020, url <https://www.jakewiesler.com/blog/hugo-theme-codex> [20220512].
7. <a name='r07'></a>jcubic, "Answer to 'Empty Git submodule folder when repo cloned'", Stack Overflow, 13 Oct 2021, url <https://stackoverflow.com/a/11358126/9475509> [20220512].
8. <a name='r08'></a>Mathias Bynens, "Answer to 'How to "git clone" including submodules?'", Stack Overflow, 19 Oct 2018, url <https://stackoverflow.com/a/4438292/9475509> [20220512].

{{< citeas >}}
