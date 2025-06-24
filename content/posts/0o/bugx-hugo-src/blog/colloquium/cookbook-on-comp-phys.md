---
title: "cookbook-on-comp-phys"
date: 2022-07-12T17:46:00+0700
lastmod: 2022-07-13T06:54:00+0700
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['colloquium', 'computation', 'physics', 'github', 'cookbook']
url: "0115"
draft: false
---
Berawal dari menyapa kolega di suatu grup WA yang menyampaikan tautan papernya yang baru saja terbit [[1](#r01)], di mana penyampai merupakan penulis korespondensinya, tawaran untuk mengisi kolokium di Departemen Fisika Universitas Hasanuddin dilontarkan. Semula diminta untuk Selasa, 21 Juni 2022 yang dirasakan terlalu cepat dan diundur ke bulan berikutnya. Selanjutnya dikontak oleh rekan penyampai terkait informasi kegiatan dan koordinasi dilakukan dengan WA sampai kegiatan selesai dilaksanakan pada hari ini, Selasa, 12 Juli 2022, 0900 GMT+08, yang dipastikan dengan suatu surat undangan sebelumnya [[2](#r02)].


## presentation
Kegiatan dilakukan secara bauran, untuk luring di Ruang Rapat Departemen Fisika dan untuk daring dengan Zoom [[3](#r03)].

![](/bugx/img/colloquium/fisika-fmipa-unhas-jul-2022.png)

Gambar <a name='fig1'>1</a> Pembukaan acara Kolokium 4 Semester Genap Tahun 2021/2022 Program Studi Fisika FMIPA Unhas oleh Sekretaris Jurusan Fisika Sri Dewi Astuty.

Kegiatan diikuti oleh para pengajar dan mahasiswa Jurusan Fisika FMIPA Unhas. Topik lain yang dibahas adalah mengenai aplikasi teori brane pada kosmologi dan lubang cacing. Azwar Sutiono berperan sebagai moderator dalam acara ini dengan pembukaan acaranya diberikan pada Gambar [1](#fig1).


## archive
Pengarsipkan dilakukan dengan memanfaatkan Zenodo, Open Science Framework, dan ResearchGate untuk, masing-masing, makalah, slide dan tautan ke makalah, dan tautan ke makalah, untuk Pemanfaatan Metode Buku Memasak (Cookbook Method) dalam Mempelajari Fisika Komputasi.

<div class='mermaid' style="text-align:center; padding-top:20px;">
  graph LR
  %% draw flowchart
  P -- zoom --> R
  R -- artikel --> Z
  O -- slide --> R
  O -- artikel --> Z
  %% define elements
  Z(Z)    %% Zenodo
  R(RG)   %% ResearchGate
  O(OSF)  %% Open Science Framework
  P([ P ])
  %% define links
  click Z "https://doi.org/10.5281/zenodo.6819722" _blank
  click O "https://osf.io/zp2md/" _blank
  click R "https://www.researchgate.net/publication/361913386" _blank
  click P "https://us02web.zoom.us/j/6847866696" _blank
</div>

Gambar <a name='fig2'>2</a> Alur tautan informasi mengenai materi presentasi.

Dalam presentasi (P) dibagikan tautan ke ResearchGate (RG) melalui kolom chat pada Zoom. Berkas slide presentasi diletakkan di Open Science Framework (OSF) dan dekat bagian akhir ada tautan ke RB. Tautan untuk Zenodo (Z) diletakan di RG sebagai DOI dan di OSF sebagai tautan.

![](/bugx/img/colloquium/cookbook-rg-zenodo.png)
![](/bugx/img/colloquium/cookbook-osf-zenodo.png)
![](/bugx/img/colloquium/cookbook-zoom-rg.png)

Gambar <a name='fig3'>3</a> Tautan yang disertakan pada RG (atas), OSF (tengah), dan Zoom (bawah).

Pemberian informasi tautan dari RG ke Zenodo, OSF ke Zenodo, dan Zoom saat presentasi ke RG disajikan pada Gambar [3](#fig3). Titik akhir rangkaian tautan terdapat di Zenodo [[4](#r04)], yang telah diilustrasikan sebelumny pada Gambar [3](#r03).


## todo
+ Memikirkan struktur komponen atau direktori di OSF.
  - Saat ini dalam suatu project di OSF, yang dalam hal ini adalah [zp2md](https://osf.io/zp2md/) (1.5MB), terdapat tiga komponen privat berupa info (1.2MB), docs (13.5MB), dan refs (5.7MB). Masih dipertimbangkan apakah hanya akan dijadikan satu saja, misalnya src yang di dalamnya terdapat ketiga folder di atas mengingat semuanya sama bersifat privat. Hanya [zp2md](https://osf.io/zp2md/) yang bersifat publik.
+ Mencari informasi batasan ukuran suatu project di OSF dan jumlahnya untuk satu pengguna dengan plan free.
+ Merancang lebih baik alur pembagian informasi dan tempat penyimpanan arsip suatu kegiatan.


## notes
1. <a name='r01'></a>Bidayatul Armynah, Rahma Anugrahwidya, Dahlang Tahir, "Composite cassava starch/chitosan/Pineapple Leaf Fiber (PALF)/Zinc Oxide (ZnO): Bioplastics with high mechanical properties and faster degradation in soil and seawater", International Journal of Biological Macromolecules [Int J Biol Macromol], vol 213, no, p 814-823, Jul 2022, url <https://doi.org/10.1016/j.ijbiomac.2022.06.038>.
2. <a name='r02'></a>Arifin, "UndanganNarasumberKolokium4Dep.Fisika", Departemen Fisika, Fakultas Matematika dan Ilmu Pengetahuan Alam, Unversitas Hasanuddin, Makassar, Indonesia, nomor 5559/UN4.11.7/PT.01.06/2022, 7 Juli 2022, url <https://osf.io/7v8nq> [20220712].
3. <a name='r03'></a>Nur Hasanah, "Kolokium 4 Departemen Fisika FMIPA Unhas", Zoom, 12 Juli 2022, 0900, url <https://us02web.zoom.us/j/6847866696> [20220712].
4. <a name='r04'></a>Sparisoma Viridi, "Pemanfaatan Metode Buku Memasak (Cookbook Method) dalam Mempelajari Fisika Komputasi", Kolokium 4 Program Studi Fisika, Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Hasanuddin, Makassar, Indonesia, 12 Juli 2022 (daring), url <https://doi.org/10.5281/zenodo.6819722>.

{{< citeas >}}

{{< todo >}}
{{</ todo >}}