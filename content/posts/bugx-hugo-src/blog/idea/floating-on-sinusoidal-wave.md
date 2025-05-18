---
title: "floating on sinusoidal wave"
date: 2022-05-26T13:29:00+07:00
lastmod: 2022-05-29T21:54:00+0700
author: viridi
mathjax: true
mermaid: true
chartjs: false
tags: ['idea', 'wave', 'floating']
url: "0076"
draft: false
---
Kunjungan pada 12 Mei 2022 ke Lab Teknik Kelautan ITB [[1](#r01)] memberikan inspirasi untuk melakukan kolaborasi, dengan salah satu tindak lanjutnya adalah melakukan kunjungan kedua pada 27 Mei 2022 sekitar 0830, dan kemudian diikuti dengan membentuk suatu grup WhatsApp [[2](#r02)] setelahnya.


## previous works
Terkait dengan benda berbentuk bola yang terapung pada permukaan air yang bergelombang mengikuti gelombang sinusoida, telah diamati dalam simulasi bahwa frekuensi gelombang dapat membuat obyek bergerak searah atau bahkan berlawanan dengan arah perambatan gelombang [[3](#r03)]. Lebih jauh teramati pula bahwa dengan gelombang yang sama akan tetapi benda berbentuk bola dengan karakter yang berbeda akan bergerak dengan laju yang berbeda sehingga terjadi proses segregasi yang diduga dapat dimanfaatkan untuk memisahkan polutan padat yang mengapung [[4](#r04)]. Bola-bola dengan ukuran yang sama cenderung berkumpul dan membentuk struktur hexagonal close packed dengan konfigurasi awal bujursangkar yang diganggu oleh gelombang kecil [[5](#r05)]. Beberapa bola yang terkoneksi dengan penghubungnya merupakan pembangkit listrik dari teregang atau terkompres telah disimulasikan sebagai suatu model sistem pembangkit energi listrik dari gelombang permukaan air [[6](#r06)]. Belum memahami bagaimana cara mengubah amplitudo gelombang.


## visit
Tangki gelombang yang akan digunakan terletak di bagian barat dari Lab Teknik Kelautan. Terdapat empat alat serupa dan yang digunakan adalah nomor dua dari selatan. Tampak dari alat tersebut diberikan pada gambar berikut ini.


![wave-tank-west-south-2nd](https://live.staticflickr.com/65535/52102663785_a0fb8f4cc1.jpg)

Gambar <a name='fig1'>1</a>. Tangki gelombang saat dijalankan dengan sebagian dberikan latar putih untuk memudahkan pengamatan.

Sempat terjadi kebingungan saat akan menjalankan alat. Terdapat tombol daya utama yang pada bagian belakang yang menghubungkan dengan jalur power masuk ke lantai dan tombol pada alat pengatur frekuensi yang diduga merupakan suatu rheostat [[7](#r07)], yang mengatur tegangan sehingga dapat mengendalikan putaran motor penggerak pembangkit gelombang. Diduga motor listrik yang digunakan merupakan motor DC karena putarannya bergantung pada tegangan yang diberikan [[8](#r08)], di mana pada motor AC putarannya bergantung pada frekuensi tengangan AC yang digunakan [[9](#r09)].


## inspiration
Terdapat cerita inspiratif mengenai hubungan antara donwnstream dan upstream yang tidak bergantung pada lokasi penghalang atau kontraksi kanal selama kondisi NSWE (Non-Linear Shallow Water Equations) terpenuhi [[10](#r10)] dan terdapat rumus sederhana terkait shoaling wave yang dapat diperoleh solusi analitiknya [[11](#r11)].


Selain itu dapat pula dikembangkan pemanfaatan lebih lanjut dari fenomena ini sebagaimana diilustrasikan berikut ini.

<div class="mermaid" style="position: relative; top: -140px; height: 890px;">
  flowchart TD
    %% element use
		A --> C
    B --> C
    C --> D
    C --> E
    D <--> E
    E --> F
    D --> F
    B --> L
    B --> M
    F --> H --> I --> J --> K
    K --> L --> G
    K --> M --> G
    G --> F
    L --> N
    M --> N
    O --> C
    O --> D
    O --> E
    O --> P --> A
    %% element definition
		A([ wave maker ])
		B([ boundary condition ])
		C[/ wave /]
		D([ floating<br>body ])
		E([ other<br>floating<br>body ])
    F[/segregation /]
    G([ coastal engineering ])
    H([ pollutan harvesting ])
    I([ polymer pyrolysis])
    J[/ fuel oil /]
    K([ fuel<br>distribution ])
    L([ island i ])
    M([ island j ])
    N[/ economic<br>improvement /]
    O[/ monitoring<br>system /]
    P([ control<br>system ])
    %% class use
    class N econ
    class J chem
    class O inst
    class F comp
    class C math
    %%class H stop
    %% class style definition
    classDef inst fill:#aaf,stroke:#33a,stroke-width:2px
    classDef chem fill:#afa,stroke:#3a3,stroke-width:2px
    classDef econ fill:#ffa,stroke:#aa3,stroke-width:2px
    classDef comp fill:#aff,stroke:#3aa,stroke-width:2px
    classDef math fill:#faa,stroke:#a33,stroke-width:2px
</div>

Gambar <a name='fig2'>2</a>. Topik-topik terkait benda terapung pada gelombang permukaan air dan perkiraan keluarannya dalam berbagai bidang: instrumentasi (biru $\color{#aaf}{\blacksquare}$), pemodelan matematika (merah $\color{#faa}{\blacksquare}$), komputasi granular (cyan $\color{#aff}{\blacksquare}$), produk reaksi kimia (hijau $\color{#afa}{\blacksquare}$), dan dampak ekonomi (kuning $\color{#ffa}{\blacksquare}$).

Hubungan antar topik pada Gambar [2](#fig2) masih merupakan usulan awal sehingga akan berubah nantinya. Untuk pirolisis telah dilakukan studi awal pengolahan limbah plastik polipropilena menjadi bahan bakar cair menggunakan rektor sederhana [[12](#r12)].

> Sementara yang baru terpikirkan. Semoga dapat menjadi motivasi kolaborasi multi-disiplin ya, Rekan-rekan. Terima kasih. Untuk time-line, mari didiskusikan. Saya baru terpikir yang merah dan cyan. Nuhun.

Diagram pada Gambar [2](#fig2) telah disampaikan ke grup [[2](#r02)] sebagaimana kutipan di atas dan mendapatkan tanggapan yang cukup baik secara umum dan terdapat antusiasme yang diharapkan dapat bertahan.


## apparatus
Secara sederhana suatu gelombang berdiri dapat dibuat dengan memanfaatkan alat pembangkit gelombang untuk akuariaum seperti Jebao RW-4 [[13](#r13)], yang terlihat cukup baik bila turbulensi di dalam airnya dapat diabaikan dan untuk hanya sekedar melihat gelombang pada permukaan.

Telah terdapat pula alat pirolisis komersial dalam model mini yang telah diproduksi dan dapat dioperasikan cukup oleh satu orang, selain itu telah pula terinstal di berbagai negara [[14](#r14)].


## notes
1. <a name='r01'></a>adminlabkl, "Ocean Engineering Laboratory", Fakultas Teknik Sipil dan Lingkungan, Institut Teknologi Bandung, 9 Oct 2017, url <https://labkl.ftsl.itb.ac.id/> [20220526].
2. <a name='r02'></a>Ikha Magdalena, "Floating Body", WhatsApp, 27 Mar 2022, url <https://chat.whatsapp.com/Id0qn63u1kR7BRLU4HQpwl> [20220529].
3. <a name='r03'></a>Sparisoma Viridi, Nurhayati, Johri Sabaryati, Dewi Muliyati, "Two-Dimensional Dynamics of Spherical Grain Floating on the Propagating Wave FLuid Surface", SPEKTRA: Jurnal Fisika dan Aplikasinya [Spektra J Fis App], vol 3 no 3, p 133-142, Dec 2018, url <https://doi.org/10.21009/SPEKTRA.033.01>.
4. <a name='r04'></a>Sparisoma Viridi, Ghazi Mauer Idroes, Rinaldi Idroes, Nurhayati, Johri Sabaryati, Dewi Muliyati, Rachmad Mauludin, Fifi Fitriya Masduki, "Simulation of Buoyant Spherical Objects Segregation for Studying Beach Pollution", International Conference on Fisheries, Aquatic, and Environmental Sciences, 26-27 September 2018, Banda Aceh, Indonesia, url <https://de.slideshare.net/sparisoma/simulation-of-buoyant-spherical-objects-segregation-for-studying-beach-pollution> [20220526]. 
5. <a name='r05'></a>Sparisoma Viridi, Veinardi Suendo, "Molecular dynamics simulation of floating sphere forming two-dimensional hexagonal close packed structure", AIP Conference Proceedings [AIP Conf Proc], vol 2242, no 1, p 020002, Jun 2020, url <https://doi.org/10.1063/5.0010641>.
6. <a name='r06'></a>Sparisoma Viridi, Dwi Irwanto, Nanang Hariyanto, Sudarmono Sasmono, "Connected Floating Balls Dynamics for Harvesting Energy of Sinusoidal Water Wave", Journal of Physics: Conference Series [J Phys Conf Ser], vol 1772, no 1, p 012011, Feb 2021, url <https://doi.org/10.1088/1742-6596/1772/1/012011>.
7. <a name='r07'></a>Zachariah Peterson, "Potentiometer vs. Rheostat: Which Should You Use?", Octopart, 22 Jan 2021, url <https://octopart.com/blog/archives/2021/01/potentiometer-vs-rheostat-which-should-you-use> [20220529].
8. <a name='r08'></a>Chris Beaton, "DC Motor RPM vs. Voltage: Relationship Between Motor Speed and Voltage", eMotors Direct, 24 Jun 2021, url <https://www.emotorsdirect.ca/knowledge-center/article/dc-motor-rpm-vs-voltage> [20220529].
9. <a name='r09'></a>Jahnavi Sajip, "What Determines the Rotating Speed of a Motor?", Nearby Engineers, 12 May 2021, url <https://www.ny-engineers.com/blog/what-determines-the-rotating-speed-of-a-motor> [20220529].
10. <a name='r10'></a>Ikha Magdalena, A. A. A. Hariza, Mohammad Farid, Muhammad Syahril Badri Kusuma, "Numerical studies using staggered finite volume for dam break flow with an obstacle through different geometries", Results in Applied Mathematics [Results Appl Math], vol 12, no., p 100193, Nov 2021, url <https://doi.org/10.1016/j.rinam.2021.100193>.
11. <a name='r11'></a>Ikha Magdalena, Iryanto, Dominic E. Reeve, "Free-surface long wave propagation over linear and parabolic transition shelves", Water Science and Engineering [Water Sci Eng], vol 11, no 4, p 318-327, Oct 2018, url <https://doi.org/10.1016/j.wse.2019.01.001>.
12. <a name='r12'></a>Nurhayati, Sparisoma Viridi, Anjar Purba Asmara, Zuhra Aina, "Rancang Bangun Alat Pirolisis Sederhana untuk Mengolah Limbah Plastik Polipropilena (PP) menjadi Bahan Bakar Cair (BBC)", Prosiding Simposium Nasional Inovasi dan Pembelajaran Sains 2018 (SNIPS 2018), Eds. G. Hikmawan et al., Bandung, Indonesia, 9-10 Juli 2018, pp. 116-122, url <https://ifory.id/proceedings/2018/GNceYnjvT/snips_2018_nurhayati_hayati_gwhpo0enuy.pdf> [20220529].
13. <a name='r13'></a>Reef-Market, "Jebao RW-4", YouTube, 17.01.2015, url <https://www.youtube.com/watch?v=COuLKLJJeqM&t=121s> [20220529].
14. <a name='r14'></a>Huayin Renewable Energy, "An introduction of Model M mini pyrolysis machine", YouTube, 25.06.2021, url <https://www.youtube.com/watch?v=y4YL1NaGT0k> [20220529]. 

{{< citeas >}}

{{< todo >}}
{{</ todo >}}