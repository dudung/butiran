---
layout: post
authors: [pasaribu, viridi, hidayat]
title: land cover data analysis
permalink: pages/3002
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["idea", "discussion", "land cover data", "proposal", "p2mi", "multi-discipline"]
date: 2022-02-10 22:37:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/3/00/2022-02-10-land-cover-data-analysis.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Perbedaan data tutupan lahan dari Badan Pusat Statistik (BPS) dan Badan Pertahanan Nasional (BPN) masih menarik untuk dibahas sebagaimana disinggung dalam suatu diskusi [[1](#r01)]. Data geospasial diolah dengan QGIS (Quantum GIS) untuk mendapatkan format tertentu [[2](#r02)], yang lebih lanjut dapat diolah menggunakan Vaex [[3](#r03)], sebagaimana sedang dikerjakan untuk sejumlah kabupaten dalam suatu daerah [[4](#r04)]. Penelitian ini menarik untuk dilajutkan untuk menganalisis tutupan lahan lebih jauh, misalnya menggunakan rantai Markov sebagaimana telah dikerjakan sebelumnya untuk wilayah Jawa Barat [[5](#r05), [6](#r06)]. Sebuah proposal akan dibuat, terpicu dengan informasi adanya penerimaan proposal kegiatan fakultas [[7](#r07)] dan adanya kesesuaian dengan prioritas penelitian institusi saat ini [[8](#r08)]. Kasus lain [[9](#r09)] mungkin dapat diadaptasi untuk analisis tutupan lahan ini.


## idea
Menarik untuk dapat [[1](#r01)]
1. merumuskan bagaimana cara melakukan analisis klaster untuk data besar seperti data tutupan lahan,
2. mengumpulkan data dan mengorganisasinya agar dapat diolah oleh suatu bahasa pemrograman atau aplikasi tertentu, dan
3. membangung program yang efektif sehingga analisis klaster dapat bekerja pada data yang sudah dirapihkan di langkah sebelumnya.

Untuk data yang super besar saat ini dapat digunakan ROOT

> ROOT: analyzing petabytes of data, scientifically. \
> An open-source data analysis framework used by high energy physics and others.

yang dibuat dengan C++ dan telah ada pula binding dengan Pythonnya  [[9](#r09)]. Dan platform berlatihnya dapat digunakan Kaggle

> Kaggle: Your Machine Learning and Data Science Commmunity.

di mana telah terdapat sekitar 50.000 dataset publik dan 400.000 notebook publik [[10](#r10)].


## note
1. <a name='r01'></a>Udjianna Sekteria Pasaribu, Luthfita Khotimatul Amanah, Nisa Fadlilah, Wahyu Hidayat, Sparisoma Viridi, "Diskusi Proposal P2MI Multi Disiplin 2022", Microsoft Teams, 10 Feb 2022, 1615-1815, url <https://teams.microsoft.com/l/meetup-join/> [20220210].
2. <a name='r02'></a>"Introduction to QGIS", An introduction to the Tidal Thames and using GIS, 15 Oct 2021, url <https://bookdown.org/tep/gisbooklet/introduction-to-qgis.html> [20220210].
3. <a name='r03'></a>Maarten A. Breddels, "What is Vaex?", vaex 4.8.0 documentation, 2014, url <https://vaex.io/docs/index.html> [20220210].
4. <a name='r04'></a>Luthfita Khotimatul Amanah, Wahyu Hidayat, Udjianna Sekteria Pasaribu, "Analisis Klaster pada Data Tutupan Lahan melalui Algoritma Hirarki Divisif", Penelitian Tesis Sains Komputasi, Institut Teknologi Bandung, (masih berproses), 2022.
5. <a name='r05'></a>Riantini Virtriana, Irawan Sumarto, Albertus Deliar, Udjianna Sekteria Pasaribu, Moh. Taufik, "Model of land cover change prediction in West Java using cellular automata-Markov chain (CA-MC)", AIP Conference Proceedings [AIP Conf Proc], vol 1658, no 1, p 060008, Apr 2015, url <https://doi.org/10.1063/1.4915060>.
6. <a name='r06'></a>Nisa Fadlilah Fathul Ilmi, "Analisis Klaster-Rantai Markov pada Data Perubahan Tutupan Lahan Studi Kasus: Provinsi Jawa Barat", Tesis Magister, Institut Teknologi Bandung, 2018, url <https://digilib.itb.ac.id/index.php/gdl/view/29679/> [20220210].
7. <a name='r07'></a>Wahyu Srigutomo, "Penerimaan Proposal Kegiatan PPMI 2022", Surat Dekan FMIPA no 335/IT1.C02/TA/2022, FMIPA, Institut Teknologi Bandung, 7 Februari 2022.
8. <a name='r08'></a>Hermawan Kresno Dipojono, "Prioritas Penelitian Institut Teknologi Bandung", Peraturan Senat Akademik Institut Teknologi Bandung, no 01/PER/I1-SA/OT/2020, 17 Februari 2020, url <https://itb.ac.id/files/focus/PERATURAN%20SENAT%20ITB-PRIORITAS%20PENELITIAN.pdf> [20220210].
9. <a name='r09'></a>Cindy, Cynthia, Valentino Vito, Devvi Sarwinda, Bevina Desjwiandra Handari, Gatot Fatwanto Hertono, "Cluster Analysis on Dengue Incidence and Weather Data Using K-Medoids and Fuzzy C-Means Clustering Algorithms (Case Study: Spread of Dengue in the DKI Jakarta Province)", Journal of Mathematical and Fundamental Sciences [J Math Fund Sci], vol 53, no 3, p 466-486, Dec 2021, url <https://doi.org/10.5614/j.math.fund.sci.2021.53.3.9>.
10. <a name='r10'></a>ROOT Team, "ROOT: Data Analysis Framework", 2021, url <https://root.cern/> [20220210].
11. <a name='r11'></a>"Start with more than a blinking cursor", Kaggle Inc, 2022, url <https://www.kaggle.com/> [20220210].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[kaggle](4010.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}

{% comment %}
ROOT + Kaggle + Python

Agglomerative Hierarchical algorithm (AHD)

Data spasial peta --> QGIS polygon menjadi CSV

Riantini -- variabel menjadi prediktor
Nisa -- studi lanjut 

Pemerintah sudah punya klaster-klaster.

Tujuan studi adalah merekam klaster-klaster lahan level kab apakah masih sama dengan peruntukan menurut pemerintah atau tidak. Bantuan sains data  computer sains agar dapat merekomendasikan hal-hal tertentu? Di sana ada Pak Hasanudding GD.

Selama ini kurang canggih, masih data waktu dan belum menggunakan data-data piksel dari satelit.

[01:15, 2/9/2022] MA Udjianna Sekteria Pasaribu: Teh Nisa selamat gabung.

Spt yg sdh disampaikan bbrp kali, bhw ibu tdk eligible jadi PI unt masukkan proposal multi Disiplin Ke P2MI FMIPA krn sdh jd PI di Riset Unggulan yg didanai ITB melalui LPPM ITB

Alhamdulillaah nya pa Dudung belum jadi PI di Riset Unggulan ITB dan bersedia jadi PI di proposal Multi Disiplin (gmb bwh)
[01:22, 2/9/2022] MA Udjianna Sekteria Pasaribu: Di pihak lain, Alhamdulillaah juga teh Nisa sdh mantap S3 di Prodi Mat mulai Sem I 2022-2023 tp jalurnya Comp Science maka
A) Yuk buat proposal ke FMIPA dg topik Cluster Analysis Unt Data Besar spt data tutupan lahan.

B) Yg ditonjolkan ada 2 yi
1) Mengoleksi data dan mengorganisasi spy bisa diolah oleh bhs program (mis Pyton) atau Stat Software, minimal Xcel Plus
2) bangun program yg efektif shg Cluster Analysis bisa bekerja di data yg sdh dirapikan di langkah 1 di atas.
Di aini kami butuh masukan duo Pa Dudung & pa Wahid
[01:24, 2/9/2022] MA Udjianna Sekteria Pasaribu: *Di sini
[01:26, 2/9/2022] MA Udjianna Sekteria Pasaribu: Hipotesis ibu & teh Nisa bhw di langkah 2) ada prosedur analisis yg mampu sederhanakan jarak pasangan² vektor yg banyak (berupa pixel).

Inilah tugas berat teh Nisa, belajar ke dosen² di KK Analisis
[01:28, 2/9/2022] MA Udjianna Sekteria Pasaribu: Ini ibu sedang buka: Journal of Mathematical and Fundamental Sciences, publisher LPPM ITB dan dpt ini

[02:21, 2/9/2022] MA Udjianna Sekteria Pasaribu: Ke MIPA yg dikedepankan pengembangan bidang ilmu Computer Science-nya sejalan dg Prioritas Penelitian ITB yaitu  Teknologi Informasi dan Komunikasi khususnya di Data Science

Sedangkan ke Mendikbudristek mah berkaitan dengan Peranan Analisis Klaster pada Big Data, khususnya yg berkaitan dg Kepadatan Penduduk di P Jawa
[02:21, 2/9/2022] MA Udjianna Sekteria Pasaribu: Ke dua proposal harus dilandasi dg  ini
{% endcomment %}