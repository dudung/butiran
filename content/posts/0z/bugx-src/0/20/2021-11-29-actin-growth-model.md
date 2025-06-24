---
layout: butir
authors: [viridi]
title: actin growth model
permalink: pages/0200
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["stem cell", "nanopattern", "actin growth model"]
date: 2021-11-30 21:14:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/20/2021-11-29-actin-growth-model.md
twitter_username: 6unpnp
nodes: []
---
Mekanisme pembentukan aktin pada sel punca disederhanakan dengan bentuk bola-bola yang dijatuhkan [[1](#r01)], di mana ilustrasi nukleasinya cukup rumit [[2](#r02)]. Pendekatan penjatuhan butiran ini telah digunakan untuk mempelajari kemungkinan struktur artifisial yang dapat terbentuk saat diposisi [[3](#r03)].


## guessed scenario
Terdapat nanopattern (NP) yang terdiri dari situs aktin dapat tumbuh berupa pilar (growth sites atau GS) dan situs aktin tidak dapat tumbuh berupa lembah, dengan ilustrasinya mirip seperti diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/20/0200-a.png) \
Gambar <a name="fig1">1</a>. Bentuk NP berbasiskan grid persegi dengan notasi $w_{\rm NP}$ dan $h_{\rm NP}$, di mana grid merupakan ukuran terkecil dari suatu satuan pada sistem NP [[4](#r04)].

Sel yang dimisalkan berupa butiran berbentuk bola memiliki dua peran, yaitu pertama pembentuk permukaan sel besar yang akan menutupi NP dan sel yang akan dijatuhkan untuk membentuk aktin. Walaupun NP telah tertutup sel besar, yang selain dijaga dengan potensial Lennard-Jones (LJ) perlu juga diterapkan skema Smoothed Particle Hydrodynamics (SPH) agar dapat berbentuk melengkung, situs-situs tempat aktin dapat tumbuh tetap aktif dan aktin tumbuh berawal dari membran sel besar tersebut. Butiran yang dijatuhkan hanya akan menempel pada membran pada GS dan terikat dengan potensial pegas. Bila butiran tiba pada lokasi selain GS hanya akan berfluktuasi di atas membran sel. Saat potensial pegas terbentuk, potensial LJ tetap ada akan tetapi kalah oleh potensial ikat ini yang membentuk benang-benang aktin. Pembentukan ikatan dengan potensial pegas ini menggunakan skema Agent-Based Model (ABM) yang melewatkan mekanisme fisis atau kimia atau biologi sebenarnya.

![]({{ site.baseurl }}/assets/img/0/20/0200-b.png) \
Gambar <a name="fig2">2</a>. Mekanisme pembentukan aktin pada membran besar sel punca yang menutupi nanopattern.

Mekanisme di atas akan dikonfirmasi sebelum bagian metode pada [[1](#r01)] ditambahkan.


## forces and interactions
Gaya dan interaksi yang dipergunakan adalah

+ gaya gravitasi untuk menjatuhkan butiran,
+ gaya dari potensial Lennard-Jones (LJ) untuk ikatan antar butiran,
+ skema Smoothed Particle Hydrodynamics (SPH) untuk sel punca awal,
+ gaya pegas untuk ikatan antar butiran pembentuk aktin,

sebagaimana setelah didiskusikan [[5](#r05)].


## confirmed scenario
Terdapat empat tahap pembentukan sel tertentu dengan menggunakan sel punca (stem cell, SC) yang dilabuhkan pada permukaan dengan pola-renik (nanopattern, NP).

### cell relaxing
Tahap ini merupakan tahap komputasi untuk mempersiapkan SC dan tidak termasuk dalam proses pembentukan aktin akan tetapi dicantumkan untuk pengingat saja.

![]({{ site.baseurl }}/assets/img/0/20/0200-c.png) \
Gambar <a name="fig3">3</a>. Tahap relaksasi sejumlah butiran yang perlahan membentuk bola untuk meminimukan tegangan permukaan sistem.

Pada tahap ini gaya gravitasi untuk sementara dapat ditiadakan agar butiran-butiran tidak jatuh dan melewati jendela simulasi. Semakin banyak butiran yang dilibatkan, dalam Gambar [3](#fig3) digunakan $N_{\rm SC} = 36$, akan semakin terlihat bulat dengan konsekuensi perhitungan yang lebih lama. Pada tahap ini hanya diterapkan potensial Lennard-Jones antar butiran.

### stem cell arriving
SC terdiri dari sejumlah $N_{\rm SC}$ butiran yang saling berinteraksi dengan potensial LJ. Lalu butiran-butiran dalam SC ini jatuh bersama-sama karena gaya gravitasi mendekati NP dan berhenti.

![]({{ site.baseurl }}/assets/img/0/20/0200-d.png) \
Gambar <a name="fig4">4</a>. Tahap jatuhnya SC menuju NP karena setiap butiran dalam sel mengalami gaya gravitasi bumi.

Selain potensial Lennard-Jones antar butiran dalam SC digunakan pada tahap ini, diterapkan juga gaya gravitasi dari bumi pada semua partikel sehingga secara keseluruhan SC akan jatuh menuju substrat yang berfitur NP.

### stem cell relaxing
Setelah bagian bawah SC bersentuhan dengan substrat ber-NP, bagian itu akan mulai berhenti diikuti dengan bagian-bagian lainnya. Untuk menjaga agar butiran tidak tercerai-berai diterapkan skema SPH sehingga dapat terbentuk tegangan permukaan, yang melingkupi $N_{\rm SC}$ sebagai satu kesatuan sel.

![]({{ site.baseurl }}/assets/img/0/20/0200-e.png) \
Gambar <a name="fig5">5</a>. Tahap relaksasi SC setelah menyentuh NP sehingga menutupi beberapa situs tumbuh pada substrat.

Potensial Lennard-Jones, gaya gravitasi bumi, dan skema SPH diterapkan pada tahap ini. Bentuk sel akan memipih dengan mempertahankan volumenya, yang dalam dalam hal ini jumlah butiran di dalamnya.

### actin growing
Dalam SC terdapat, pada bagian yang menyentuh pilar NP aktin akan tumbuh. Penumbuhan aktin ini dilakukan dengan menjatuhkan butiran-butiran lain. Saat butiran menyentuh pilar NP atau situs tumbuh, butiran akan berhenti dan terjadi ikatan antar butiran dengan butiran sebelumnya atau sesudahnya melalui potensial pegas. Proses berhentinya gerakan butiran disederhanakan melalui skema ABM.

![]({{ site.baseurl }}/assets/img/0/20/0200-f.png) \
Gambar <a name="fig6">6</a>. (a) butiran pembentuk aktin jatuh karena gaya gravitasi, (b) butiran tiba di pilar NP dan akan menjadi awal sulur aktin, (c) butiran meneruskan sulur aktin yang telah terbentuk, (d) butiran jatuh pada daerah bukan pilar NP, (e) butiran tiba di dasar SC pada daerah bukan pilar NP, (f) butiran pembentuk SC yang berinteraksi dengan pontensial LJ dan skema SPH, di mana butiran  lainnya tidak digambarkan.

Pada bagian bawah SC yang menempel pada situs tumbuh atau pilar NP, bagian NP yang berwarna merah, akan tumbuh benang-benang atau sulur-sulur aktin menuju dalam sel. Butiran-butiran berwarna biru dalam SC tidak digambarkan di sini untuk lebih jelas menggambarkan butiran pembentuk sulur-sulur aktin yang diwakili dengan butiran berwarna merah.

### stem cell differentiating
Beberapa aktin yang tumbuh akan bergerak bebas dipengaruhi oleh fluktuasi termal dari bagian bawah SC, yang isinya berdinamika karena potensial LJ antar butiran dalam SC dan penerapan skema SPH untuk menjaga kesatuan sel. Saat beberapa aktin bertemu akan muncul inti sel yang sifatnya ditentukan oleh jumlah aktin yang terlibat. Sifat inti sel ini yang akan mendiferensiasi sel punca semula menjadi sel apa.

![]({{ site.baseurl }}/assets/img/0/20/0200-g.png) \
Gambar <a name="fig7">7</a>. Sel punca dengan NP berbeda akan berdiferensiasi ke sel yang berbeda (atas) dan (bawah).

Jumlah NP akan mempengaruhi jumlah aktin yang menghasilkan sel di tengah dan juga tegangan pada sel.


## note
1. <a name="r01"></a>Suprijadi, A. D. Mauluda, F. D. Ayuningtyas, S. Viridi, A. Barlian, "Study on effects of nanopattern for stem cell growthusing experiments and simulation", Draft, ver. 2, 20211129-0930 (WA message).
2. <a name="r02"></a>admin, "Actin and Actin-Binding Proteins", Basicmedical Key, Ch. 33, Fig. 33-9, 18 Jan 2016, url <https://basicmedicalkey.com/actin-and-actin-binding-proteins/> [20211129].
3. <a name="r03"></a>S. Viridi, Suprijadi, V. Suendo, "Simulasi Deposisi Berdasarkan Penumbuhan Butiran Menggunakan Dinamika Molekular", Research and Development on Nanotechnology in Indonesia [], vol 2, no 2, p 68-79, 2015, url <https://docplayer.info/36010547-x.html> [20211129].
4. <a name="r04"></a>Sparisoma Viridi, Suprijadi, Anggraini Barlian, Damar Rastri Adhika, "Molecular dynamics (MD) method and agent-based model (ABM) in simulation of stem cell deposition on the surface with nanopattern: Current development stage of an in-house simulator", in The 9th National Physics Seminar, (SNF)-2020, edited by Hadi Nasbey, Riser Fahdiran, Widyaningrum Indrasari, Esmar Budi, Fauzi Bakri, Teguh Budi Prayitno, Dewi Muliyati, AIP Conference Proceedings 2320, American Institute of Physics, Melville, NY, 2021, pp. 050043.
5. <a name="r05"></a>A. D. Mauluda, Suprijadi, S. Viridi, "Stem cell discussion", Zoom, 30 Nov 2021 0700, url <https://itb-ac-id.zoom.us/j/94685893756> [20211130].


## &nbsp;
[multi-concept physics problem](0150.html) &bull; [sc np fa simulation](1202.html) &bull; [sc np md abm sph](1204.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
