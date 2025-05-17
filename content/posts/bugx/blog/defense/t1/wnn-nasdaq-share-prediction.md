---
title: "wnn nasdaq share prediction"
date: 2022-09-12T18:23:00+0700
lastmod: 2022-09-13T10:44:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['idea', 'share', 'wnn', 't1']
url: "0176"
draft: false
---
Kontak dilakukan kurang dari seminggu dan telah diijinkan oleh Kaprodi sebagaimana disampaikan lewat pesan WA [[1](#r01)]. Lalu draft diberikan keesokan harinya [[2](#r02)]. Revisi draft [[3](#r03)] dan slide [[4](#r04)] disampaikan satu hari sebelum sidang. Singkatan WNN memiliki banyak kepanjangan, dengan salah satunya adalah untuk Wavelet Neural Network [[5](#r05)], yang merupakan metode yang digunakan dalam tugas akhir ini.


## presentasi
Presentasi TA 2 berjudul "Analisis Prediksi Harga Saham Nasdaq Komposit Menggunakan Metode Wavelet Neural Network" dilaksanakan pada Selasa, 13 September 2022, 0800-0900 di Ruang 1203.

![](https://live.staticflickr.com/65535/52354076978_5bc00bf523.jpg)

Gambar <a name='fig1'>1</a>. Presentasi Tugas Akhir 2 oleh Faisal Ghifari dengan pembimbing Linus Ampang Pasasa dan Acep Purqon.

Kegiatan dimulai dengan sesi presentasi, yang kemudian dilanjutkan dengan sesi tanya jawab dan diskusi.

![](https://live.staticflickr.com/65535/52352938272_0d506755ec.jpg)

Gambar <a name='fig2'>2</a>. Sesi diskusi yang menelisik mengenai arsitektur jaringan saraf buatan yang digunakan.

Terdapat empat macam jenis data perusahaan yang digunakan, yang dipilih sedemikian rupa untuk mewakili karakter kurva deret waktu tertentu. Dan disarankan untuk tidak lagi merujuk ke nama suatu perusahaan tertentu, tetapi lebih ke karakter dari deret waktu perusahaan tersebut atau karakter lainnya sehingga dapat bersifat lebih umum. Akurasi hasil prediksi diberikan pada Tabel [1](#tab1) dan [2](#tab2) berikut ini.

Tabel <a name='tab1'>1</a>. Nilai RMSE untuk model WNN dan LSTM.<br><br>

Saham | Daube-<br>chies db2 | Coiflets 1 | Symlets 3 | Biortho-gonal 2,8 | LSTM
:-: | :-: | :-: | :-: | :-: | :-:
AAPL | 3,416 | 3,245 | 3,365 | 3,439 | 3,593
INTC | 1,264 | 1,264 | 1,497 | 1,476 | 1,313
PDD  | 3,932 | 3,863 | 3,871 | 3,874 | 3,993
SPLK | 4,718 | 4,889 | 4,752 | 4,941 | 5,078

Tabel <a name='tab2'>2</a>. Nilai MAPE untuk model WNN dan LSTM.<br><br>

Saham | Daube-<br>chies db2 | Coiflets 1 | Symlets 3 | Biortho-gonal 2,8 | LSTM
:-: | :-: | :-: | :-: | :-: | :-:
AAPL | 1,641% | 1,541% | 1,596% | 1,610% | 1,759%
INTC | 1,980% | 2,011% | 2,506% | 2,498% | 3,130%
PDD  | 6,104% | 6,255% | 6,246% | 6,044% | 6,578%
SPLK | 3,085% | 3,118% | 3,143% | 3,273% | 3,328%

Pengukuran akurasi yang berbeda, misalnya MAPE dan RMSE, diminimumkan dalam ekspektasi oleh funsional berbeda untuk distribusi ke depan yang tidak diketahui [[6](#r06)].


## to-do
+ Mempelajari WNN dan implementasinya [[7](#r07)].
+ Menelusuri pustaka akan kemungkin penerapan WNN pada data-data pengamatan, eksperimen, atapun simulasi bahan butiran.
+ Mempelajari implemenasi ringkas dengan Python yang dapat segera memberikan hasil dengan pengertiannya perlahan-lahan diperoleh dari latihan.


## notes
1. <a name='r01'></a>Faisal Ghifari, "Pesan Pribadi", WhatsApp, 15:49, 7.9.2022.
2. <a name='r02'></a>Faisal Ghifari, "Pesan Pribadi", WhatsApp, 12:37, 8.9.2022, url <https://osf.io/4yqz2> [20220912].
3. <a name='r03'></a>Faisal Ghifari, "Pesan Pribadi", WhatsApp, 16:05, 12.9.2022, url <https://osf.io/nqcep> [20220912].
4. <a name='r04'></a>Faisal Ghifari, "Pesan Pribadi", WhatsApp, 16:05, 12.9.2022, url <https://osf.io/b8gcy> [20220912].
5. <a name='r05'></a>-, "WNN Networking Abbreviation", All Acronyms, 2022, url <https://www.allacronyms.com/WNN/networking> [20220912].
6. <a name='r06'></a>Stephan Kolassa, "Answer to 'Higher RMSE lower MAPE'", Cross Validated, 29 Dec 2019, url <https://stats.stackexchange.com/a/442572/342139> [20220913].
7. <a name='r07'></a>Gaige Wang, Lihong Guo, Hong Duan, "Wavelet Neural Network Using Multiple Wavelet Functions in Target Threat Assessment", The Scientific World Journal [Sci World J], vol 2013, no, p 632437, Feb 2013, url <https://doi.org/10.1155/2013/632437>.

{{< citeas >}}

<!-- blog\defense\t1\wnn-nasdaq-share-prediction.md -->

{{< todo >}}
{{</ todo >}}