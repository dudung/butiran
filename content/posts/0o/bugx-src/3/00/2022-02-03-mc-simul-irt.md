---
layout: post
authors: [viridi, sabaryati]
title: mc simul irt
permalink: pages/3001
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["idea", "discussion", "monte-carlo", "irt", "item response theory", "johri sabaryati", "umm", "marking scheme", "binary digit"]
date: 2022-02-04 06:34:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/3/00/2022-02-03-mc-simul-irt.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Saat mendapatkan pertanyaan perihal berbagai model estimasi dengan pendekatan teori respons butir [[1](#r01)], sama sekali tidak ada ide mengenai hal ini, sempai terbersit apakah ada kaitannya dengan butir-butiran? Hasil telusur singkat mendapatkan bahwa Teori Respons Butir (IRT, Item Response Theory) merupakah salah satu pendekatan, yang lain adalah Teori Klasik, untuk melakukan analisis butir soal [[2](#r02)], yang salah satu penerapannya adalah pada soal ujian akhir semester matematika kelas VIII berbentuk pilihan ganda [[3](#r03)]. Setelah diskusi lebih lanjut, fokus pertanyaannya adalah pada metode simulasinya, seperti Monte Carlo. Terdapat artikel pengenalan simulasi Monte Carlo yang mengulas sejarah dan prinsip simulasi ini [[4](#r04)] dan bidang-bidang penerapan [[5](#r05)].


## question
Reformulasi pertanyaan yang diajukan kira-kira adalah

> .. simulasi model apa yang digunakan terkait dengan tema "membandingkan kemampuan konsep fisika siswa melalui berbagai model estimasi (model simulasi) dengan pendekatan teori respons butir" ..

yang penekanannya adalah pada model simulasinya dan bukan pada teori respons butiranya.


## idea
Dengan simulasi MC (Monte Carlo) yang terbayang adalah pemanfaatan pembangkitan bilangan acak untuk membentuk
- sebaran kemampuan siswa, bila perlu detil dapat ditambahkan, seperti
	+ kuat di konsep,
	+ kuat di numerik,
	+ kuat di analisa,
	+ dan aspek lainnya,
- tingkat kesulitan soal,
- formulasi kemungkinan menjawab benar, dengan mode
	+ acak murni (keberuntungan atau pola jawaban pilihan ganda)
	+ terarahkan (trade off antara kemampuan siswa dengan tingkat kesulitan soal),
- analisis kaitan soal
	+ soal konsep dasar,
	+ soal konsep lanjut,
- analisis hasil jawab antara menebak dan capaian pemahaman konsep yang berjenjang (dasar, menengah, tinggi, aplikasi, dan lainnya), sehingga dapat digunakan untuk evaluasi cara pengajaran dan tidak sekedar hanya nilai yang tinggi.

Butir-butir di atas belum sepenuhnya saling bebas sehingga perlu diformulasikan ulang sebelum diimplementasikan. Simulasi MC dapat digunakan untuk membuat data-data buatan untuk hal-hal di atas dengan berbagai asumsi yang kemudian diujikan saat melakukan analisa hasil atau capaian, sehingga dapat dilihat apakah asumsi awal cocok dengan hasil analisis statistiknya. Setelah itu baru kemudian dicoba dengan data riil dari ujian sehingga penafsirannya akan mengarahkan ke asumsi mana yang merupakan penafsiran dari hal-hal seperti kemampuan siswa, tingkat kesulitan soal, pemahaman atau menebak dan lainnya.


## pyramid chart
Suatu chart berbentuk piramida seperti pada hirarki realitas pengetahuan [[6](#r06)], dapat digunakan untuk menampilkan konsep-konsep yang mendasari suatu soal dapat disajikan dalam gambar berikut ini.

![]({{ site.baseurl }}/assets/img/3/00/3001.png) \
Gambar <a name='fig1'>1</a>. Konsep-konsep fisika dalam suatu soal mengenai medan listrik oleh satu muatan titik dalam formulasi berbentuk vektor.

Chart berbentuk piramid pada Gambar [1](#fig1) menunjukkan bahwa konsep dasar ($\color{#f00}{\blacksquare}$) membangun konsep menengah ($\color{#0b5}{\blacksquare}$) dan konsep menengah ($\color{#0b5}{\blacksquare}$) membangun konsep atas ($\color{#07d}{\blacksquare}$).


## examples
Contoh soal dari bawah ke atas dalam piramida konsep pada Gambar [1](#fig1) adalah seperti berikut ini (tanpa pilihan jawabannya).

1. Terdapat sebuah vektor berbentuk $\vec{r} = 3\hat{x} + 4\hat{y}$. Besar vektor dan vektor satuannya adalah .. dan ...
2. Posisi titik $\rm A$ diberikan oleh $\vec{r} _{\rm A} = 10\hat{x} + 8\hat{y}$ dan titik $\rm B$ diberikan oleh $\vec{r} _{\rm A} = 6\hat{x} + 5\hat{y}$. Vektor posisi relatif titik $\rm B$ terhadap titik $\rm A$ atau $\vec{r} _{\rm BA}$ adalah ...
3. Sebuah muatan $q = 25 \ \{\rm \mu C}$ terletak pada koordinat $(5, 4)$ dalam $\rm\mu m$. Medan listrik pada titik $(2, 8)$ dalam $\rm\mu m$ adalah .. $\rm N/C$.

Ketiga soal di atas saling terkait konsep yang digunakannya. Soal kedua perlu konsep pada soal pertama dan soal ketiga memerlukan konsep pada dua soal sebelumnya.


## marking scheme
Kaitan konsep, lebih teknisnya adalah persamaan, untuk masing-masing pertanyaan di atas diberikan pada tabel berikut ini. Juga disertakan nilainya.

Tabel <a name='tab1'>1</a>. Konsep dan persamaan serta kaitannya.

Soal | Persamaan | Didasari oleh | Nilai
:-: | :- | :-: | :-:
1 | $r = \left\|\vec{r}\right\|$ <br> $ \ \ = \sqrt{\vec{r}\cdot\vec{r}}$ <br> $\displaystyle \hat{r} = \frac{\vec{r}}{r}$ | | $2$
2 | $\vec{r} _{\rm ij} = \vec{r}_i - \vec{r}_j$ | 1 | $4$
3 | $\vec{E}(\vec{r}) = k$ <br> $\displaystyle \times\frac{q}{\|\vec{r} - \vec{r}_q\|^3}$ <br> $\times(\vec{r} - \vec{r}_q)$ | 1, 2 | $8$

Dengan melihat Tabel [1](#tab1) dapat dilihat bahwa poin penilaian akan juga memberikan informasi pemahaman peserta ajar, yang beberapa kemungkinannya dapat dilihat pada tabel di bawah ini.

Tabel <a name='tab2'>2</a>. Nilai mirip sistem biner dan analisisnya.

Total | Komposisi | Analisis
:- | :- | :-
14 | 2+4+8 | Paham ketiga tingkatan <br> konsep
6 | 2+4+0 | Paham konsep dasar dan <br> menengah
2 | 2+0+0 | Hanya paham konsep <br> dasar
0 | 0+0+0 | Tidak paham ketiga <br> konsep
10 | 2+0+8 | Paham konsep dasar, <br> menebak konsep atas
12 | 0+4+8 | Tidak paham konsep <br> dasar, menebak konsep <br> menengah dan atas

Perhatikan bahwa nilai yang diperoleh dengan sistem pada Tabel [1](#tab2) menggunakan mirip seperti penempatan bilangan biner [[7](#r07)] akan tetapi dimulai dari 2, lalu 4, dan 8. Dengan cara ini nilai total dapat merepresentasikan capaian peserta ajar dalam konsep-konsep yang diberikan melalui ketiga soal.

Tabel <a name='tab3'>3</a>. Nilai mirip sistem biner dan sistem agregat.

Sistem Mirip Biner | Sistem Agregat
:-: | :-:
2+4+8 = 14 | 10+10+10 = 30
2+4+0 = 6  | 10+10+0 = 20
2+0+0 = 2  | 10+0+0 = 10
0+0+0 = 0  | 0+0+0 = 0
2+0+8 = 10 | 10+0+10 = 20
0+4+8 = 12 | 0+10+10 = 20

Dengan menggunakan sistem yang memberikan nilai agregat, seperti diberikan pada Tabel [3](#tab3), terdapat tiga nilai 20 yang berbeda analisisnya. Ini akan cukup membingungkan saat ingin memetakan nilai dengan capaian pemahaman ketiga konsep yang ingin diujikan. Hanya dengan sistem ini, yang lebih baik nilainya belum tentu yang nilainya lebih tinggi dan merupakan kelemahan sistem ini. Sebagai contoh baris ketiga pada Tabel [3](#tab3) benilai 2 sedangkan baris kelima bernilai 10, di mana nilai 10 ini diperoleh dengan menebak soal ketiga yang diketahui karena soal kedua salah. Bagaimana bisa menjawab soal ketiga dengan benar sementara soal kedua, yang diperlukan konsepnya, tidak bisa dijawab. Dengan demikian untuk kedua baris yang dibahas ini sebenarnya tingkat pemahaman kedua peserja ajar adalah sama, walaupun nilai salah satunya lebih tinggi.


## disclaimer
`04-jan-2022` Gagasan yang disampaikan di sini belum dicoba dan belum dapat dipastikan keberfungsiannya. Dengan demikian penulis tidak bertanggung jawab atas akibat dari pemanfaatannya. Diskusi lebih lanjut dapat dilakukan untuk lebih menjelaskan pengembangan gagagasan yang tertuliskan di sini, dan amat disarankan untuk menghindari salah pengertian.


## note
1. <a name='r01'></a>Johri Sabaryati, "Komunikasi Personal", WhatsApp, 3 Feb 2022, 0654+07.
2. <a name='r02'></a>Heri Retnawati, "Analisis Butir Soal dengan Pendekatan Teori Tes Klasik dan Teori Respons Butir", Univertsitas Negeri Jakarta, 27 Mar 2012, url <http://staffnew.uny.ac.id/upload/132255129/pengabdian/c-analisis-butir-soal-aspek-kognitif-ttktrbsmkn2tarakan.pdf> [20220203].
3. <a name='r03'></a>Devi Dwi Kurniawan, "Analisis Butir Soal Ujian Akhir Semester Matematika dengan Teori Respon Butir", BRILIANT: Jurnal Riset dan Konseptual [], vol 4, no 2, p 215-224, Mei 2019, url <http://dx.doi.org/10.28926/briliant.v4i2.316>.
4. <a name='r04'></a>Robert L. Harrison, "Introduction To Monte Carlo Simulation", AIP Conference Proceedings [AIP Conf Proc], vol 1204, no 1, p 17-21, Jan 2010, url <https://doi.org/10.1063/1.3295638>. [`PDF`](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2924739/pdf/nihms219206.pdf)
5. <a name='r05'></a>Samik Raychaudhuri, "Introduction to Monte Carlo simulation," 2008 Winter Simulation Conference, 2008, p 91-100, url <https://doi.org/10.1109/WSC.2008.4736059>. [`PDF`](https://www.informs-sim.org/wsc08papers/012.pdf)
6. <a name='r06'></a>Scott H. Young, "The World is a Hierarchy, Our Theories Aren’t", ScottHYoung.com Services Ltd., 25 Jun 2019, url <https://www.scotthyoung.com/blog/2019/06/25/reality-and-theory/> [20220203].
7. <a name='r07'></a>Eugene Brennan, "How to Convert Decimal to Binary and Binary to Decimal", Owlcation, 10 Jan 2022, url <https://owlcation.com/stem/How-to-Convert-Decimal-to-Binary-and-Binary-to-Decimal> [20220203].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug3001?src=hash&amp;ref_src=twsrc%5Etfw">#bug3001</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1489381721468710915?ref_src=twsrc%5Etfw">February 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
