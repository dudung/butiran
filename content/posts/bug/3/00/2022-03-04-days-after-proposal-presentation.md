---
layout: post
authors: [suheri, viridi]
title: days after proposal presentation
permalink: pages/3004
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["idea", "discussion", "correction", "tatang suheri", "population", "gravity model"]
date: 2022-03-06 19:24:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/3/00/2022-03-04-days-after-proposal-presentation.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Terdapat satu diskusi sebelum [[1](#r01)] dan satu sesudah [[2](#r02)] kegiatan SUR [[3](#r03)], yang semua kegiatan dilaksanakan secara daring. Catatan singkat mengenai kegiatan terakhir coba disampaikan di sini, yang kemungkinan besar tidak lengkap. Pengetahuan mengenai apa yang dapat dibuat kuantitatif merupakan titik berat pencatatan ini.


## info
`04-mar-2022` Kegiatan terakhir [[2](#r02)] dihadiri oleh Teguh Widodo, Nur Fadilah, Imam Kamarudin Saleh, dan Sparisoma Viridi. Dan sampai 1538 belum ada kegiatan mulai 1333 masih sekedar menunggu. Catatan ini diakhir sampai ada informasi lebih lanjut dan judul catatan mungkin diubah. \
`05-mar-2022` Kemungkinan akan ada pertemuan siang ini setelah didahului perbincangan jalur pribadi dengan ketua tim. Tautan pertemuan sebelumnya digunakan kembali [[2](#r02)] untuk mulai sekitar 1300 dan selesai kurang dari satu jam.

Tabel <a name='tab1'>1</a>. Kota dan kabupaten di Propinsi Jawa Barat [[4](#r04)].

No | Kab/Kota | A (km<sup>2</sup>) | P | (&deg; S) | (&deg; E)
:-: | :-: | :-: |:-: | :-: | :-:
1 | Kab Bandung | 1767.96 | 3623790 | 7.02 | 107.52
2 | Kab Bandung Barat | 1305.77 | 1788336 | 6.83 | 107.48
3 | Kab Bekasi | 1224.88 | 3113071 | 6.32 | 106.17
4 | Kab Bogor | 2710.62 | 5427068 | 6.32 | 106.17
5 | Kab Ciamis | 1414.71 | 1229069 | 6.75 | 108.38
6 | Kab Cianjur | 3840.16 | 2477560 | 6.8186 | 107.1331
7 | Kab Cirebon (R) | 984.52 | 2270621 | 6.75 | 108.38
8 | Kab Garut | 3074.07 | 2585607 | 7.22 | 107.9
9 | Kab Indramayu (R) | 2040.11 | 1834434 | 6.25 | 107.85
10 | Kab Karawang | 1652.20 | 2439085 | 6.3 | 107.3
11 | Kab Kuningan (R) | 1110.56 | 1167686 | 6.98 | 108.48
12 | Kab Majalengka (R) | 1204.24 | 1305476 | 6.83 | 108.17
13 | Kab Pangandaran | 1010.00 | 423667 | 7.6673 | 108.64037
14 | Kab Purwakarta | 825.74 | 997869 | 6.42 | 107.5
15 | Kab Subang (R) | 1893.95 | 1595320 | 6.571389 | 107.761389
16 | Kab Sukabumi | 4145.70 | 2725450 | 6.9 | 106.9
17 | Kab Sumedang (R) | 1518.33 | 1152507 | 6.85 | 107.92
18 | Kab Tasikmalaya | 2551.19 | 1865203 | 7.33 | 108.2
19 | Kot Bandung | 167.67 | 2444160 | 6.95 | 107.57
20 | Kot Banjar | 113.49 | 200973 | 7.37 | 108.53
21 | Kot Bekasi | 206.61 | 2543676 | 6.233333 | 106
22 | Kot Bogor | 118.50 | 1043070 | 6.6 | 106.8
23 | Kot Cimahi | 39.27 | 568700 | 6.88 | 107.53
24 | Kot Cirebon (R) | 37.36 | 333303 | 6.683333 | 108.55
25 | Kot Depok | 200.29 | 2056335 | 6.39 | 106.83
26 | Kot Sukabumi | 48.25 | 336325 | 6.9197 | 106.9272
27 | Kot Tasikmalaya | 171.61 | 716155 | 7.332203 | 108.225072

Tanda (R) pada Tabel [1](#tab1) merupakan kawasan Rebana yang salah satu kawasan yang akan mengalami percepatan pembanguna perdasarkan Perpres Nomor 87 Tahun 2021 [[5](#r05)] dan akan menjadi masa depan ekonomi Jawa Barat sebagai suatu metropolitan [[6](#r06)]. Posisi dalam LS dan BT diperoleh dari masing-masing artikel kabupaten / kota pada Wikipedia. Konversi sederhana dari derajat ke km adalah sekitar 111322 [[7](#r07)].

![]({{ site.baseurl }}/assets/img/3/00/3004-a.png) \
Gambar <a name='fig1'>1</a>. Populasi ke-27 kabupaten dan kota di propinsi Jawa Barat.

Dengan memanfatkan informasi jumlah penduduk dari Gambar [1](#fig1) dapat diterapkan mode gravitasi

\begin{equation}\label{eqn:gravity-model-1}
F_{ij} = G \frac{m_i^\alpha m_j^\beta}{[(x_i - x_j)^2 + (y_i - y_j)^2]^\gamma}
\end{equation}

dengan $G = 1$, $\alpha = \beta = 1-4$, $\gamma = 0.02$, yang akan menghasilkan gambar beirkut.

![]({{ site.baseurl }}/assets/img/3/00/3004-b1.png) | ![]({{ site.baseurl }}/assets/img/3/00/3004-b2.png)
<center>(a)</center> | <center>(b)</center>
![]({{ site.baseurl }}/assets/img/3/00/3004-b3.png) | ![]({{ site.baseurl }}/assets/img/3/00/3004-b4.png)
<center>(c)</center> | <center>(d)</center>

Gambar <a name='fig2'>2</a>. Gaya gravitasi antara ke-27 kota dan kabupaten di propinsi Jawa Barat dengan berbagai nilai $\alpha = \beta$: (a) 1, (b) 2, (c) 3, dan (d) 4.

Penjajakanlebih lanjut memberikan bahwa $\alpha$, $\beta$, dan $\gamma$ akan menentukan warna pada Gambar [2](#fig2) yang memiliki rentang warna dari 0-0.25 ($\color{#000}{\bullet}$), 0.25-0.5 ($\color{#f89}{\bullet}$), 0.5-0.75 ($\color{#fe7}{\bullet}$), dan 0.75-1 ($\color{#7c8}{\bullet}$) dengan menggunakan Microsoft Excel.

### target journal
Telah dilihat sekilas Economic Modelling yang merupakan jurnal Q4 [[8](#r08)] and Central European Journal of Economic Modelling and Econometrics yang merupakan jurnal Q4 [[9](#r09)].

### next steps
1. Populasi diganti dengan PDRB.
2. Kabupaten dan kota kawasan metropolitan Rabbana.
3. Aglomerasi tiga metropolitan (Jabodetabek, Bandung Raya, Rabbana).

`06-mar-2022` Imam Kamarudin Saleh melakukan telusur literatur dan sebagai titik awal kajian mengusulkan delapan buah artikel [[10](#r10)-[17](#17)] yang dapat dibahas. Dapat dimulai dengan yang paling terkait [[11](#r11)].

### to-do
Saran akan akan diikuti untuk membahas terlebih dahulu artikel yang paling terkait [[11](#r11)]. Selain itu terdapat artikel yang agak pendek dan kualitatif [[10](#r10)], serta menarik untuk ditelaah lebih lajut.


## note
1. <a name='r01'></a>HOST, "My Meeting", Zoom, 1 Mar 2022, 1710 +07, url <https://us02web.zoom.us/j/88164359907> [20220228]. 
2. <a name='r02'></a>Tatang Suheri, "My Meeting", Zoom, 4 Mar 2022, 1330 +07, url <https://us02web.zoom.us/j/87972028959> [20220304].
3. <a name='r03'></a>Pascasarjana FISIP, "Seminar Usulan Riset (SUR) a.n. Tatang Suheri, NPM. 170230190520 (S3-AB)", Zoom, 2 Mar 2022 1100 +07, url <https://zoom.us/j/92869876239> [20220228].
4. <a name='r04'></a>Kontributor Wikipedia, "Daftar kabupaten dan kota di Jawa Barat", Wikipedia, Ensiklopedia Bebas, 17 Februari 2022, 14.59 UTC, url <https://id.wikipedia.org/w/index.php?oldid=20656630> [20220305].
5. <a name='r05'></a>Ridwan Nanda Mulyana (Rep.), Khomarul Hidayat (Ed.), "Begini rencana pengembangan Kawasan Rebana dan Jabar Selatan", Kontan.co.id, 24 Oct 2021, 1946, url <https://nasional.kontan.co.id/news/begini-rencana-pengembangan-kawasan-rebana-dan-jabar-selatan> [20220305].
6. <a name='r06'></a>"Mengenal Rebana Metropolitan, Masa Depan Ekonomi Jawa Barat", Humas Bappeda Provinsi Jawa Barat, 16 Nov 2020, 1851, url <http://bappeda.jabarprov.go.id/mengenal-rebana-metropolitan-masa-depan-ekonomi-jawa-barat/> [20220305].
7. <a name='r07'></a>Agnas Setiawan, "Menghitung Jarak di Peta Berdasarkan Garis Astronomis Lintang dan Bujur", Guru Geografi, 22 Mar 2017, url <https://www.gurugeografi.id/2017/03/menghitung-jarak-di-peta-berdasarkan.html> [20220305].
8. <a name='r08'></a>"Economic Modelling", Scimago Lab, url <https://www.scimagojr.com/journalsearch.php?q=28467&tip=sid> [20220305].
9. <a name='r09'></a>"Central European Journal of Economic Modelling and Econometrics", Scimago Lab, url <https://www.scimagojr.com/journalsearch.php?q=21100837464&tip=sid> [20220305].
10. <a name='r10'></a>Roberta Comunian, Caroline Chapain, Nick Clifton, "Location, location, location: exploring the complex relationship between creative industries and place", Creative Industries Journal [], vol 3, no 1, p 5-10, 2010, url <http://dx.doi.org/10.1386/cij.3.1.5_2>.
11. <a name='r11'></a>Giuseppe Bruno, Gennaro Improta, "Using gravity models for the evaluation of new university site locations: A case study", Computers & Operations Research [Comput Oper Res], vol 35, no 2, p 436–444, Feb 2008, url <https://doi.org/10.1016/j.cor.2006.03.008>.
12. <a name='r12'></a>Ron A. Boschma, Rik Wenting, "The spatial evolution of the British automobile industry: Does location matter?", Industrial and Corporate Change [Ind Corp Chang], Volume 16, Number 2, pp. 213–238, Apr 2007, url <https://doi.org/10.1093/icc/dtm004>.
13. <a name='r13'></a>Stephen B. Billings, Erik B. Johnson, "The location quotient as an estimator of industrial concentration", Regional Science and Urban Economics [Reg Sci Urban Econ], vol 42, no 4, p 642-647, Jul 2012, url <https://doi.org/10.1016/j.regsciurbeco.2012.03.003>.
14. <a name='r14'></a>Chengxiang Zhuge, Chunfu Shao, Jian Gao, Chunjiao Dong, Hui Zhang, "Agent-based joint model of residential location choice and real estate price for land use and transport model", Computers, Environment and Urban Systems [Comput Environ Urban Syst], vol 57, no, p 93–105, May 2016, url <http://dx.doi.org/10.1016/j.compenvurbsys.2016.02.001>.
15. <a name='r15'></a>Ioannis Baraklianos, Louafi Bouzouina, Patrick Bonnel, Hind Aissaoui, "Does the accessibility measure influence the results of residential location choice modelling?", Transportation [Transp], vol 47, no, p 1147-1176, Jun 2020, url <https://doi.org/10.1007/s11116-018-9964-6>.
16. <a name='r16'></a>Ashish Sen, Tony E. Smith, "Gravity Models of Spatial Interaction Behavior", Springer, Berlin, 1st Edition, 1995, url <https://doi.org/10.1007/978-3-642-79880-1>.
17. <a name='r17'></a>Daniel Serra, Rosa Colomé, "Consumer choice and optimal locations models: Formulations and heuristics", Papers in Regional Science [Papers Reg Sci], vol 80, no, p 439–464, Oct 2001, url <https://doi.org/10.1007/PL00013632>.


### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug3004?src=hash&amp;ref_src=twsrc%5Etfw">#bug3004</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1500117926254620678?ref_src=twsrc%5Etfw">March 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}

{% comment %}
2022-03-05
Arahan pembimbing dalam 3-5 bulan sudah lulus. Hambatan ini diatasi dulu dengan jurnal. Gravity model yang mendirect ABM. Silakan saja yang terkait dulu dan publish saja dulu.

Minimal 2 Q3 dan Q2. Satu sudah publish dan satu dalam persiapan. Ungkapan saja dulu dalam bahasa yang dipahami nanti disupport oleh tim untuk dibasakan ke ekonomi dulu.

Cari saja keahlian di bidang apa, dalam adbis, ke kawasan industri.

Bisa juga manfaatkan MAT (ODM) yang telah sempat diguankan akan tetapi diterapkan untuk produk.

Kesimpulan: Subang
Area: Purwakarta, Subang, Majalengka, Tegal, .. Koridor Utara
Persaingan menarik industri untuk pengembangan industri baru
Industri: Tekstil, Manufaktur, Hi-tech, ... high-value industri --> SDM berkait resource kira-kira 2 jam masih terjangkau
SDM: SD, SMP, SMA, SMK, D3, D4, S1, S3, S3
Source: internal, eksternal

Tiga lingkaran besar metropolitan Jabodetabek - Bandung Raya - Rebana.
Yang terakhir ini belum banyak dibangun tapi ada kebijakan. Masing-masing ada perpres. Arah pengembangan didorong ke mana? Apakah benarn kedua metropolitan pertama memang sudah jenuh?

--
[12:07, 3/5/2022] Sparisoma Viridi: Assalamu'alaikum wr wb, Kang. Semoga segera pulih ya. Aamiin...
[12:08, 3/5/2022] Sparisoma Viridi: Kuatir karena kemarin siang tidak muncul. Punten bila mengganggu. 🙏🙏
[12:08, 3/5/2022] PL96 Tatang Suheri: Wass iya kang aamiin yra 🙏
[12:08, 3/5/2022] PL96 Tatang Suheri: Kang siang ini bisa ditelp atau diskusi via zoom! 🙏
[12:09, 3/5/2022] PL96 Tatang Suheri: Punten, kemarin siang ketiduran kang, sesudah minum obat 🙏
[12:10, 3/5/2022] Sparisoma Viridi: InsyaAllah bisa, Kang. Silakan.

Saya butuh info apa yang bisa dibantu agar dapat menghasilkan angka. Sw
Setidaknya elemen-elemen yang berinteraksi dan karakter elemen-elemen tersebut. 🙏
[12:11, 3/5/2022] Sparisoma Viridi: Alhamdulillah bisa tidur dengan nyenyak...
[12:11, 3/5/2022] PL96 Tatang Suheri: Siap kang jam 1 siang ini ya kang. Kl boleh kita kejar 1-2 jurnal dulu berbasis model yg kita pilih kang, mhn dibantos kang 🙏
[12:12, 3/5/2022] Sparisoma Viridi: Siap.... Bismillah...
[12:12, 3/5/2022] PL96 Tatang Suheri: Bismillah 🙏🙏🙏
[13:04, 3/5/2022] Sparisoma Viridi: Sebentar ya, Kang.
[13:04, 3/5/2022] Sparisoma Viridi: Saya ke phonenya dulu. Nuhun.
[13:08, 3/5/2022] Sparisoma Viridi: Ini masih bisa digunakan, Kang.

Tatang Suheri is inviting you to a scheduled Zoom meeting.

Topic: My Meeting
Time: Mar 4, 2022 13:30 Jakarta

Join Zoom Meeting
https://us02web.zoom.us/j/87972028959?pwd=RElnMXc2VytLRUtBa2NCYVlKYjR0dz09

Meeting ID: 879 7202 8959
Passcode: 260908
[13:08, 3/5/2022] Sparisoma Viridi: Saya sudah di dalam.
[13:35, 3/5/2022] PL96 Tatang Suheri: http://bappeda.jabarprov.go.id/mengenal-rebana-metropolitan-masa-depan-ekonomi-jawa-barat/
[13:37, 3/5/2022] PL96 Tatang Suheri: https://m.merdeka.com/jabar/mengenal-rebana-metropolitan-kota-baru-di-jawa-barat-ini-siap-majukan-ekonomi-jaba.html
[19:36, 3/5/2022] Sparisoma Viridi: Kira-kira ceritanya demikian
[19:37, 3/5/2022] Sparisoma Viridi: Sementara ini dulu ya, Kang.
[19:37, 3/5/2022] Sparisoma Viridi: Mohon komentarnya bila ada waktu. Terima kasih.
[20:30, 3/5/2022] PL96 Tatang Suheri: Siap Kang Nhn 🙏🙏🙏
[20:32, 3/5/2022] PL96 Tatang Suheri: Kang kl warna bulatan merah, kuning, hitam seperti apa ya kang makna atau bedanya?
[20:33, 3/5/2022] PL96 Tatang Suheri: Gambar bulat2 merah besar dan kecil itu menunjukan paling besar dan variasinya ya kang
[20:34, 3/5/2022] PL96 Tatang Suheri: Kl kita nanti ubah dgn PDRB sektor industrinya saja bisa ya kang utk ganti data penduduk
[20:35, 3/5/2022] Sparisoma Viridi: Iya, Kang. Yang hijau gayanya terbesar, yang hitam terkecil. Rentang 0-25%, 25-50%, 75-100%
[20:36, 3/5/2022] Sparisoma Viridi: Nah ini yang saya perlu tanyakan. Apakah datanya bisa dicarikan?
[20:37, 3/5/2022] PL96 Tatang Suheri: Biasakan saya minta asisten Carikan ya kang
[20:40, 3/5/2022] PL96 Tatang Suheri: Bisa kang
[20:41, 3/5/2022] PL96 Tatang Suheri: Kl ukuranya di buat beda dalam matrik tsb memungkinkan kang? 🙏
[20:43, 3/5/2022] PL96 Tatang Suheri: Mhn saran
[20:43, 3/5/2022] Sparisoma Viridi: Bisa kang.
[20:43, 3/5/2022] Sparisoma Viridi: Ini masih mencari cara yang nyaman sehingga Tim Support bisa membantu mengartikannya.
[20:43, 3/5/2022] PL96 Tatang Suheri: Siap kang
[20:46, 3/5/2022] PL96 Tatang Suheri: Kalau boleh, dibuatkan juga sebagai simulasi :
1. Kab/kota dalam lingkup Rabbana Metropolitan
2. Penjumlahan kab/kota yg ada dlm lingkup 3 metropolitan ( metropolitan Botabek; Bandung Raya dan Rabbana) 
Sepertinya kalau di lihat sebagai skala gabungan antar metropolitan menjadi menarik tarik menariknya
[20:56, 3/5/2022] Sparisoma Viridi: Siap, Kang.
[20:57, 3/5/2022] Sparisoma Viridi: Btw, ini sementara slidenya bila akan dibawa ke grup atau setor perkembangan ke pembimbing.
[20:59, 3/5/2022] PL96 Tatang Suheri: Nhn kang 🙏
[21:00, 3/5/2022] Sparisoma Viridi: Sama-sama, Kang.
[21:00, 3/5/2022] Sparisoma Viridi: Ini sudah saya tambahkan ke slide.
[21:01, 3/5/2022] PL96 Tatang Suheri: Siiap Kang Dudung, hatur nuhun pisan kang 🙏
[21:05, 3/5/2022] Sparisoma Viridi: 🙏🙏 semoga ada masukan dari pembimbing dan memberikan kesan baik, ya Kang. Aamiin..
[21:05, 3/5/2022] PL96 Tatang Suheri: InsyaAlloh kang Bismillah
[21:06, 3/5/2022] PL96 Tatang Suheri: Kang, kl ngejar 1 bulan ke depa masuk jurnal, apa ada rekomendasi jurnal scopus yg terdekat kang? Bila berkenan mhn arahan alternatif2nya 🙏
[21:07, 3/5/2022] Sparisoma Viridi: Belum ada bayangan, Kang. Saya coba telusuri dulu, ya. Dan Rekan-rekan di Support Team juga bisa ditanyakan karena bidang tujuannya saya masih gamang.
[21:07, 3/5/2022] Sparisoma Viridi: Saya coba browsing dulu ya.

[21:08, 3/5/2022] PL96 Tatang Suheri: Baik kang 🙏
[21:08, 3/5/2022] PL96 Tatang Suheri: Jurnalnya kl kata pembimbing bisa apa aja tdk selalu ekonomi bidang lain bebas, tapi kl bisa ekonomi bagus juga ya kang, paralel saya coba cek juga
[21:09, 3/5/2022] Sparisoma Viridi: Mungkin bisa sama-sama browsing, Kang.

https://www.elsevier.com/en-xs/search-results?query=gravity%20model%20special%20economy%20zone&labels=journals
[21:10, 3/5/2022] Sparisoma Viridi: Siapa tahu ada yang Kang Tatang atau Tim lebih sreg feelingnya.
[21:11, 3/5/2022] Sparisoma Viridi: https://www.journals.elsevier.com/economic-modelling

Mungkin ini?
[21:13, 3/5/2022] Sparisoma Viridi: Economic Modelling: Q2
https://www.scimagojr.com/journalsearch.php?q=28467&tip=sid
[21:13, 3/5/2022] Sparisoma Viridi: Central European Journal of Economic Modelling and Econometrics: Q4
https://www.scimagojr.com/journalsearch.php?q=21100837464&tip=sid&clean=0
[21:13, 3/5/2022] PL96 Tatang Suheri: Wah kereen kang
[21:13, 3/5/2022] PL96 Tatang Suheri: Kita ekplore dan coba
[21:14, 3/5/2022] Sparisoma Viridi: Tolong dishare ke tim ya, Kang. Dari Kang Tatang saja. Kedua Rekan itu bidangnya Ekonomi, kan? Mungkin bisa lebih "membaca" scope dan aim jurnalnya.
[21:15, 3/5/2022] Sparisoma Viridi: Siap, Kang. Bismillah.
[21:15, 3/5/2022] PL96 Tatang Suheri: Siap
[21:15, 3/5/2022] PL96 Tatang Suheri: Sdh saya share kang ke tim
[21:15, 3/5/2022] Sparisoma Viridi: 🙏🙏
{% endcomment %}
