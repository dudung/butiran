---
title: "presentation-init-progress"
date: 2022-07-05T15:55:00+0700
lastmod: 2022-07-05T21:38:00+0700
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['idea', 'presentation', 'progress']
url: "0104"
draft: false
---
Pencatatan ini dilakukan keesokan harinya setelah presentasi isi makalah yang telah dikirim untuk iGSC [[1](#r01)], pencarian topik untuk tugas akhir [[2](#r02)], dan adanya form isian [[3](#r03)]. Di sini dituliskan beberapa kegiatan yang belum mengerucut sehingga masih disatukan.


## initial discussion
Nawaf Alfarizki dan Jonathan Adriel telah melakukan menelusuri beberapa makalah terkait ABM, yang masing-masing memulainya dari beberapa yang diberikan, seperti [[4](#r04), [5](#r05)] dan [[6](#r06), [7](#r07)] -- sejauh yang diingat, lalu melanjutkan ke makalah-makalah lain sebagaimana telah dipresentasikan secara singkat secara daring [[2](#r02)].

Pada pertemuan berikutnya, hari dan jam yang sama, diminta untuk mencari topik-topik yang dapat dieksperimenkan secara sederhana sesuai dengan fasilitas yang ada di lab. Telah terdapat fenomena tumpukan butiran yang telah dimodelkan dengan ABM untuk satu jenis bahan [[8](#r08)] dan dilakukan eksperimen untuk campuran dua jenis bahan [[9](#r09)]. Kedua hasil tersebut dapat dijadikan contoh untuk topik-topik yang dimaksud.

![](/bugx/img/idea/pile/pile-abm-monodisperse.png)

![](/bugx/img/idea/pile/pile-exp-bidisperse.png)

Gambar <a name='fig1'>1</a>. Atas: Simulasi dengan AMB untuk sistem (d) yang menghasilkan tumpukan bahan butiran [[8](#r08)]. Bawah: Eksperimen campuran biner butiran dan tumpukan yang dihasilkannya [[9](#r09)].

Diskusi telah dilakukan dengan Putri Widartiningsih mengenai apakah ada kemungkin untuk melanjutkan topik tersebut untuk kemudian dibandingkan dengan perhitungan DEM di [lab Sakai-Sensesi, Tōkyō Daigaku, Japan](https://dem.t.u-tokyo.ac.jp/). Baru terpikir pada aplikasi deteksi sampuran beras dengan beras plastik yang sempat heboh pada sekitar tahun 2015 [[10](#r10)].


## internal presentation of conference paper
Presentasi dilakukan Winda Wijayasari untuk menjelaskan makalah yang akan disajikan pada iGSC 2022. Beberapa yang akan dikerjakan lebih jauh adalah sebagai berikut ini.

- Melihat pengaruh dari rapatnya data untuk digunakan sebagai estimator.
- Seberapa data dapat dibuang dan kesalahan estimasi masih dalam batas toleransi sekitar 15%.
- Untuk suatu kesus tertentu, diduga tidak umum, perlu dibahas juga aspek sosio-ekonomi di belakangnya sehingga yang tadinya tidak terlihat, menjadi terlihat.
- Batas jumlah data yang dapat dibuang ini dapat menjadi acuan dalam membuat estimator untuk daerah di mana data-datanya belum banyak (atau ada yang hilang) dan tidak terjadi peristiwa khusus yang menyebabkan perubahan yang drastis.
- Visualisasi matriks A dan B dibuat lebih baik dilengkapi dengan perubahan petanya dari forest ke agriculture dan dari agriculture ke developed, dan variasi-variasi lainnya.
- Lebih jauh mengelaborasi manfaat dari ABM, terutama hidden characters, sehingga dapat menjadi bermanfaat atau melengkapi pendekatan rantai Markov yang telah dilakukan.
- Mencari lebih jauh penggunaan istilah Cellular Automata yang terkesan terikut dengan rantai Markov, walaupun dirasakan masih kurang tepat.


## progress report
Borang kemajuan Septian Ulan Dini studi telah diisi [[11](#r11)] dan disampaikan, satu hari setelah permintaannya. Dan diperoleh informasi Stokes drift [[12](#r12)] yang terlihat sekilas dapat digunakan dalam penelitian tesis. Untuk makalah ke PE bagian metode telah selesai dan akan disampaikan besok.


## notes
1. <a name='r01'></a>Winda Wijayasari, "Bimbingan dengan Dr. Dudung", Zoom, 4 Jul 2022, 0900, url <https://itb-ac-id.zoom.us/j/92156749208> [20220705].
2. <a name='r02'></a>Jonathan Adriel, "Diskusi Pencarian Awal Topik-Topik Tugas Akhir", Zoom, 4 Jul 2022, url <https://itb-ac-id.zoom.us/j/9508048934> [20220705].
3. <a name='r03'></a>Septian Ulan Dini, "Private Chat", WhatsApp, 4 Jul 2022.
4. <a name='r04'></a>S. Viridi, A. D. Mauluda, S. H. Pratama, Suprijadi, "Simulation of cell budding and binary fission: A preliminary study using molecular dynamics and agent-based model", in 2020 International Conference and School on Physics in Medicine and Biosystem: Physics Contribution in Medicine and Biomedical Applications, (ICSPMB)-2020, edited by Lukmanda Evan Lubis, Nur Aisyah Nuzulia, Nur Rahmah Hidayati, AIP Conference Proceedings 2346, American Institute of Physics, Melville, NY, 2021, pp. 020010, url <https://doi.org/10.1063/5.0048209>.
5. <a name='r05'></a>Armi Susandi, Intan Taufik, Pingkan Aditiawati, Sparisoma Viridi, "The relation between agent-based model and susceptible-infected-recovered model for spread of disease", in The 9th National Physics Seminar, (SNF)-2020, edited by Hadi Nasbey, Riser Fahdiran, Widyaningrum Indrasari, Esmar Budi, Fauzi Bakri, Teguh Budi Prayitno, Dewi Muliyati, AIP Conference Proceedings 2320, American Institute of Physics, Melville, NY, 2021, pp. 050032, url <https://doi.org/10.1063/5.0038221>.
5. <a name='r05'></a>T. Suheri, S. Viridi, "Constructing origin-destination matrix (ODM) using agent-based model (AMB) in multiple points commuting system", in The 9th National Physics Seminar, (SNF)-2020, edited by Hadi Nasbey, Riser Fahdiran, Widyaningrum Indrasari, Esmar Budi, Fauzi Bakri, Teguh Budi Prayitno, Dewi Muliyati, AIP Conference Proceedings 2320, American Institute of Physics, Melville, NY, 2021, pp. 050033, url <https://doi.org/10.1063/5.0038214>.
6. <a name='r06'></a>T. Suheri, S. Viridi, "Gravity-Driven Agent-Based Model for Simulation of Economic Growth a Point Along a Highway", IOP Conference Series: Materials Science and Engineering 662 (6), 062015 (2019), url <https://doi.org/10.1088/1757-899X/662/6/062015>.
8. <a name='r08'></a>S. Viridi, F. Haryanto, "Agent-based Model and its Potential in Simulating Some Physical Systems", IOP Conference Series: Materials Science and Engineering 559 (1), 012008 (2019), url <https://doi.org/10.1088/1757-899X/599/1/012008>.
9. <a name='r09'></a>Putri Mustika Widartiningsih, Muhammad Iqbal Rahmadhan Putra, Dimas Praja Purwa Aji, Aufa Nu’man Fadhilah Rudiawan, Sparisoma Viridi, "Experimental investigation of pile characteristics of non-spherical particles mixtures: pile height and angle of repose", Journal of Physics: Conference Series 2243 (1), 012079 (2022), url <https://doi.org/10.1088/1742-6596/2243/1/012079>.
10. <a name='r10'></a>Fiki Ariyanti, "Cerita Terungkapnya Misteri Beras Plastik di Indonesia", Liputan6.com, 23 Mei 2015, url <https://www.liputan6.com/bisnis/read/2237854> [20220705].
11. <a name='r11'></a>Septian Ulan Dini, "Progress Report Form", BPI - Puslapdik, 5 Jul 2022, url <https://osf.io/kwfcn/> [20220705].
12. <a name='r12'></a>Wikipedia contributors, "Stokes drift", Wikipedia, The Free Encyclopedia, 11 July 2021, 19:16 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1033126611> [20220705].

{{< citeas >}}

{{< todo >}}

{{</ todo >}}