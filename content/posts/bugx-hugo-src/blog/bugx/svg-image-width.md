---
title: "svg image width"
date: 2022-08-21T11:15:00+07:00
lastmod: 2022-08-22T03:25:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['bugx', 'svg', 'width']
url: "0158"
draft: false
---
Ukuran 320px telah cocok untuk smartphone Galaxy A12 sebagaimana telah dicoba sebelumnya [[1](#r01)]. Beberapa ukuran coba digambarkan kembali untuk melihat efeknya pada notebook atau desktop dan layar smartphone.


## test image
Sebuah citra uji dengan format SVG dibuat untuk dilihat hasilnya.

{{< svg
  "/static/img/svg/default.svg"
  "#fig1"
  "1"
  "Berapa ukuran lingkaran dan persegi panjang untuk memeriksa tampilan pada berbagai devais."
>}}

Pada layar monitor akan terlihat baik dan lebar 440px belum mencapai pinggir teks sehingga diperkirakan ukuran 520px pun masih dapat terakomodasi.

<img src="/bugx/img/svg/default-with-mobile-simulator.png" style="width:287px;" />

Gambar <a name='fig2'>2</a>. Hasil mobile simulator untuk halaman ini pada komputer.

Dengan menggunakan suatu simulator halaman ini, yang di dalamnya terdapat Gambar [1](#fig1), dapat diambil screenshotnya sehingga menghasilkan Gambar [2](#fig2), di mana ukuran 340px diperkirakan masih memadai.

<img src="/bugx/img/svg/default-with-samsung-galaxy-a12.jpg" style="width:280px;" />

Gambar <a name='fig3'>3</a>. Tampilan pada devais Samsung Galaxy A12.

Terlihat bahwa layar simulator pada Gambar [2](#fig2) tidak persis menggambarkan layar devais sebenarnya pada Gambar [3](#fig3). Sekilas dapat disimpulkan bahwa 340px adalah ukuran yang tepat untuk citra, di mana sebelumnya adalah 320px.


## default width
Untuk memastikan prediksi sebelumnya sebuah citra SVG dengan lebar 340px dibuat dan ditampilkan. Selain itu dibuat juga elemen DIV untuk membandingkan ukurannya.

<br />
<div style="width:340px; height:40px; border:1px #00a solid; background:#ccf; text-align:center; padding-top:0.5em;">width=340px height=40px</div>

{{< svg
  "/static/img/svg/default-width-340px.svg"
  "#fig4"
  "4"
  "Ukuran standar yang akan digunakan lebar 340px (bawah) dan suatu elemen div (atas)."
>}}

Screenshot kembali dibuat untuk bagian ini sebelum Gambar [4](#fig2) sebagai berikut.

<img src="/bugx/img/svg/default-width-340px-sg-a12.jpg" style="width:360px; align:right;" />

Gambar <a name='fig5'>5</a>. Tampilan pada devais Samsung Galaxy A12 untuk ukuran lebar elemen dan citra 340px.

Sekilas sudah terlihat bahwa untuk sementara ukuran lebar sudah tepat dan akan digunakan untuk ke depatannya menggantikan pemilihan sebelumnya [[1](#r01)]. Bila ada perubahan ke depan akan ditambahkan di bawah ini, dengan tanpa mengubah tanggal, ataupun dalam tulisan lain.


## notes
1. <a name='r01'></a>viridi, "find right image width", bugx, 27 Mar 2022, url <http://dudung.github.io/bugx/0022> [20220821].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}