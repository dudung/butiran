---
layout: post
authors: [suheri, viridi]
title: region competitiveness
permalink: pages/3003
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["idea", "discussion", "region competitiveness", "tatang suheri"]
date: 2022-02-23 04:28:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/3/00/2022-02-20-region-competitiveness.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Hasil-bagi lokasi atau location quotient (LQ) merupakan suatu statistik analitik yang mengukur spesialisasi industri relatif terhadap unit yang lebih besar, misalnya negara [[1](#r01)]. LQ dapat dimanfaatkan untuk penentuan komoditas unggul satu sektor pada tingkat kabupaten [[2](#r02)], beberapa sektor pada tingkat wilayah administratif yang sama [[3](#r03)], dan sampai tingkat nasional [[4](#r04)]. Nilai LQ ini kemudian dapat lebih lanjut digunakan untuk mementukan daya saing suatu kawasan dan implikasinya pada pembangunan [[5](#r05)]. Model gravitasi antar dua negara [[6](#r06)] dapat dimodifikasi, dengan mengambil acuan suatu kawasan yang sama, sehingga memberikan daya saing antar dua kawasan yang akan dibandingkan.


## location quotient
Hasil-bagi lokasi dapat pula dilihat sebagai suatu statistik yang digunakan untuk mengukur rasio nilai ekspektasi terhadap nilai aktual untuk berbagai variabel [[7](#r07)], yang dapat dirumuskan sebagai berikut

\begin{equation}\label{eqn:location-quotient}
{\rm LQ} = \frac{(X_i / \sum_i X_i)}{(N_i / \sum_i N_i)},
\end{equation}

dengan $\rm LQ$ adalah hasil-bagi lokasi tempat $i$, $X_i$ jumlah subset item pada tempat $i$, $N_i$ jumlah item pada tempat $i$, di mana item dapat berupa orang, bisnis dan lainnya.

Atau dapat pula digambarkan seperti berikut ini ini.

![]({{ site.baseurl }}/assets/img/3/00/3003-a.png) \
Gambar <a name='fig1'>1</a>. Empat daerah $A = 1$, $B = 2$, $C = 3$ dan $D = 4$ yang masing-masing memiliki berbagai industri $\square = 1$, ${\Large \circ} = 2$, $\triangle = 3$, dan $\unicode{x25B1} = 4$.

Sebagai contoh berikut ini adalah langkah-langkah untuk menghitung LQ suatu industri tertentu [[8](#r08)], yang telah diadaptasi menjadi sepeti berikut ini.
1. Hitung rata-rata lapangan kerja untuk suatu industri $i$ pada skala nasional (NIC, national industry concentration).
\begin{equation}\label{eqn:nic}
{\rm NIC} \_i = \frac{ \displaystyle \sum_j x_{ij} }{ \displaystyle \sum_i \sum_j x_{ij} }
\end{equation}
	dengan $\displaystyle \sum_j x_{ij}$ adalah lowongan kerja industri $i$ pada skala nasional (industri $i$ pada semua daerah) dan $\displaystyle \sum_i \sum_j x_{ij}$ adalah lowongan kerja seluruh jenis industri pada skala nasional (semua jenis industri pada semua daerah). Keduanya pada tahun berjalan yang sama.
2. Hitung rata-rata lapangan kerja untuk suatu industri $i$ pada skala regional (RIC, regional industy concentration).
\begin{equation}\label{eqn:ric}
{\rm RIC} \_i = \frac{ x_{ij} }{ \displaystyle \sum_i x_{ij} }
\end{equation}
	dengan $x_{ij}$ adalah lowongan kerja industri $i$ secara regional (industi $i$ pada daerah $j$) dan $\displaystyle \sum_i x_{ij}$ adalah lowongan kerja seluruh jenis industri pada sekala regional (semua industri pada daerah $j$). Keduanya pada tahun berjalan yang sama.
\end{equation}
3. Hitung LQ menggunakan RIC dan NIC 
\begin{equation}\label{eqn:lq}
{ \rm LQ }_i = \frac{ {\rm RIC}_i }{ {\rm NIC}_i }
\end{equation}
	untuk suatu industri (industri $i$).

Tabel <a name='tab1'>1</a>. Lowongan kerja industri $I$ pada setiap daerah $R$.

$R / I$ | $\square = 1$ | ${\Large \circ} = 2$ | $\triangle = 3$ | $\unicode{x25B1} = 4$ | $\sum R$
:-: | :-: | :-: | :-:
$A = 1$  | 4  | 1  | 2 | 2 | 9
$B = 2$  | 2  | 2  | 2 | 2 | 8
$C = 3$  | 3  | 3  | 2 | 1 | 9
$D = 4$  | 1  | 4  | 2 | 1 | 8
$\sum I$ | 10 | 10 | 8 | 6 | 34

Dengan menggunakan data kualitatif dari Tabel [1](#tab1) dapat, diperikarakan, diperoleh hasil sebagai berikut.

![]({{ site.baseurl }}/assets/img/3/00/3003-b.png) \
Gambar <a name='fig2'>2</a>. Daerah dengan LQ besar untuk industri $\square$ adalah daerah $A$ da untuk industri ${\Large \circ}$ adalah daerah $D$.

Nilai LQ besar menggambarkan bahwa rata-rata karakter suatu industri melebihi rata-rata nasional sehingga dapat diartikan bahwa daerah itu mengarah ke spesialisasi industri tersebut. Hal ini dapat terjadi karena dukungan yang baik, seperti sumber bahan baku, tenaga kerja yang kompeten tapi murah, infrastruktur dan lainnya.


## gravity model
Model gravitasi umumnya digunakan untuk memodelkan atau menjelaskan perdagangan antara dua negara, akan tetapi di sini dicoba untuk memprediksi keunggulan daerah yang akan dikembangkan. Prediksi ini melanjutkan proses perhitungan LQ yang telah dilakukan sebelumnya. Dari Gambar [2](#fig2) telah diperoleh dua daerah yang memiliki spesialisasi pada industri $\square$ (daerah $A$) dan ${\Large \circ}$ (daerah $D$). Terdapat kemungkin untuk mengembangkan daerah $B$ atau $D$ sebagai suatu kawasan khusus, di mana secara umum dibutuhkan industri $\square$ dan ${\Large \circ}$ akan kedua industri tidak akan dikembangkan lebih lanjut dalam daerah itu melainkan akan menggunakan dari daerah lain karena satu dan lain hal, seperti biaya yang tinggi untuk membuat daerah baru ini menjadi spesialisasi atau biaya transportasi lebih murah.

Untuk itu akan dihitung gaya gravitasi antara daerah $B$ dan $C$ dan $B$ dan $D$ untuk industri $\square$

\begin{equation}\label{eqn:industri-1-in-b}
F _{\square B} \propto \frac{ \square _B^{\beta_1} \square _A^{\beta_2} }{ r _{BA} } + \frac{ \square _B^{\beta_1} \square _D^{\beta_2} }{ r _{BD} }
\end{equation}

yang akan dibandingkan dengan

\begin{equation}\label{eqn:industri-1-in-c}
F _{\square C} \propto \frac{ \square _C^{\beta_1} \square _A^{\beta_2} }{ r _{CA} } + \frac{ \square _C^{\beta_1} \square _D^{\beta_2} }{ r _{CD} }.
\end{equation}

Bila Persamaan \eqref{eqn:industri-1-in-b} memberikan nilai lebih besar dari Persamaan \eqref{eqn:industri-1-in-c} maka kawasan yang akan dikembangkan adalah daerah $B$, bila sebaliknya yang akan dikembangkan adalah daerah $C$. 

![]({{ site.baseurl }}/assets/img/3/00/3003-c.png) \
Gambar <a name='fig3'>3</a>. Gaya gravitasi untuk industri $\square$ pada daerah $C$ lebih kuat dibandingkan pada daerah $B$.

Perkiraan gaya gravitasi untuk industri $\square$ pada daerah $B$ dan $C$ diberikan pada Gambar [3](#fig3) sedangkan untuk industri ${\Large \circ}$ pada kedua daerah yang sama diberikan pada Gambar [4](#fig4).

![]({{ site.baseurl }}/assets/img/3/00/3003-d.png) \
Gambar <a name='fig4'>4</a>. Gaya gravitasi untuk industri ${\Large \circ}$ pada daerah $C$ lebih kuat dibandingkan pada daerah $B$.

Terlihat dari Gambar Gambar [3](#fig3) dan Gambar [4](#fig4) bahwa baik industri $\square$ maupun ${\Large \circ}$ memberikan resultan gaya gravitsi paling besar pada daerah $C$ ketimbang pada daerah $B$. Dengan demikian daerah ini lebih diprioritaskan untuk dibangun. Atau dapat pula dikatakan bahwa competitiveness daerah $C$ lebih besar ketimbang competitiveness daerah $C$.

![]({{ site.baseurl }}/assets/img/3/00/3003-e.png) \
Gambar <a name='fig5'>5</a>. Pembangunan daerah $C$ karena pertimbangan LQ yang dilanjutkan dengan resulta gaya gravitasinya.

Bila industri yang baru akan dibangun secara utamanya bergantung secara kedua industri $\square$ dan ${\Large \circ}$, maka daerah $C$ lebih menjadi prioritas untuk dibangun. Industri pendukung $\triangle$ dan $\unicode{x25B1}$ tidak terlalu menentukan karena bukan faktor utama dari industri yang akan dibangung tersebut.


## other theories
Terdapat teori-teori lain yang mungkin dapat digunakan.

### industry location
Selain itu dapat pula diterapkan teori lokasi industri [[9](#r09)] yang dalam hal akan dapat berdimensi banyak, tidak sekedar jarak akan tetapi juga waktu tempuh.

### five forces
Sebagai salah satu pendekatan manajemen strategik terdapat analisis lima gaya Porter [[10](#r10)], yang meliputi pendatang baru, pembeli, pemasok, produk substitusi, dan persaian antar anggota industri. Hal ini terkait dengan analisis struktur industri. Susilo Bambang Yudhoyono  pernah ke Harvard untuk mendengarkan presentasi Porter dalam meningkatan competitiveness Indonesia. Terdapat pula istilah Porter diamond suatu helicopter view dari five forces, yang meliputi Demand Conditions, Related and Supporting Industries, Factor (Input) Conditions, dan Context for Firm Strategy and Rivalry. Spesialisasi masing-masing perusahan sebagai strategi dapat menurunkan persaingan dengan menuju ke saling mendukung.

### discussion
Persaingan sudah memasuki fasa samudra merah, sehingga agar dapat tumbuh dengan ancaman antar anggota dan juga pendatang baru pada kawasan, dilakukan dengan membuat ceruk-ceruk, di mana analisis struktur industri bagi pengelola kawasan belum terdefinisi [[11](#r11)]. Regulasi pemerintah dapat dilihat untuk mendukung strategi yang akan dipilih.

Tahapan perumusan strategi menurut Wheelen dan Hunger (2003) adalah sebagai berikut
> Mission -> Objectives -> Strategies -> Policies -> Program -> Budgets -> Prosedures -> Performance.

Performansi dan kendali tidak dilakukan akan tetapi sekedar disimulasikan. Program dan akan KEK / bukan merupakan inisiatif strategik yang bergantung budget.

Ekspansi tidak harus pindah lokasi, tetapi bisa saja dengan mengakuisisi lahan-lahan di sekelilingnya. Ini merupakan corporate action yang akan terecord karena Tbk. Dan dilihat dari performasi perusahaannya.

Studi penentuan lokasi sudah cukup baik. Gunakan diagram yang ada. Jangan terlalu menyebar dulu. Mungkin dapat digunakan ungkapan

> "If you can't convince them, then confuse them"

dari Harry S. Truman sebagai suatu pendekatan bila berhadapan dengan suatu pihak tertentu [[12](#r12)].


## note
1. <a name='r01'></a>"What are location quotients (LQs)?", Bureau of Economic Analysis, 25 Apr 2018, url <https://www.bea.gov/help/faq/478> [20220220].
2. <a name='r02'></a>Abdul Kohar M., Agus Suherman, "Analisis location quotient (LQ) dalam penentuan komoditas ikan unggulan perikanan tangkap Kabupaten Cilacap", Prosiding Seminar Nasional Perikanan Tangkap 2006, Bogor, 10-11 Agustus 2016, p 372-380, url <https://repository.ipb.ac.id/handle/123456789/25313> [20220220].
3. <a name='r03'></a>Ely Kartikaningdyah, "Analisis Location Quotient dalam Penentuan Produk Unggulan pada Beberapa Sektor di Kabupaten Lingga Kepulauan Riau", Jurnal Integrasi [J Integrasi], vol 4, no 1, p 31-46, Apr 2012, url <https://jurnal.polibatam.ac.id/index.php/JI/article/view/235> [20220220].
4. <a name='r04'></a>Rachmat Hendayana, "Aplikasi  Metode Location Quotient (LQ) dalam Menentuan Komoditas Unggulan Nasional", Warta Informatika Pertanian [Warta Inform Pertanian], vol 12, no, art 1, Dec 2003, url <https://www.litbang.pertanian.go.id/warta-ip/vol-12> [20220220]. 
5. <a name='r05'></a>Daryono Soebagyo, Triyono Triyono, Yuli Tri Cahyono, "Regional Competitiveness and Its Implications for Development", Jurnal Ekonomi Pembangunan [J Ekonomi Pembang], vol 14, no 2, p 160-171, Dec 2013, url <https://doi.org/10.23917/jep.v14i2.138>.
6. <a name='r06'></a>Scott Baier, Samuel Standaert, "Gravity Models and Empirical Trade", Economics and Finance [Econ Finance], url <https://doi.org/10.1093/acrefore/9780190625979.013.327>.
7. <a name='r07'></a>Steven M. Graves, "Economic Geography - Lab 3: Location Quotient", Geography 340: Economic Geography, California State University Northridge, 24 Aug 2011, url <https://www.csun.edu/~sg4002/courses/340/340_lab_Loc_Q.html> [20220220].
8. <a name='r08'></a>Kimberly Goodwin, "How the Location Quotient Works", PropertyMetrics, 21 Feb 2018, url <https://propertymetrics.com/blog/location-quotient/> [20220220].
9. <a name='r09'></a>The Editors of Encyclopaedia Britannica, Thinley Kalsang Bhutia, Jeannette L. Nolen, "location theory", Encyclopaedia Britannica, 18 Nov 2014, url <https://www.britannica.com/topic/location-theory> [20220222].
10. <a name='r10'></a>Wikipedia contributors, "Porter's five forces analysis", Wikipedia, The Free Encyclopedia, 9 February 2022, 03:03 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1070751487> [20220222].
11. <a name='r11'></a>Tatang Suheri, Imam Kamarudin Saleh, Teguh Widodo, Muhammad Fadillah, Nur Fadilah, Sparisoma Viridi, "Analisis Manajemen Strategik Pengelola Kawasan", Zoom, 22 Feb 2022, 2030, url <https://us02web.zoom.us/j/87488732163> [20220222].
12. <a name='r12'></a>Marcos López, "If you can't convince them, confuse them", MARCA in English, 9 Sep 2014, url <https://www.marca.com/en/2014/11/09/en/football/barcelona/1415490672.html> [20220223].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug3003?src=hash&amp;ref_src=twsrc%5Etfw">#bug3003</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1496234055515668480?ref_src=twsrc%5Etfw">February 22, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
