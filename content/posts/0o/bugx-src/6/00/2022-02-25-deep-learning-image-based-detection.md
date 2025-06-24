---
layout: post
authors: [viridi]
title: deep learning image based dection
permalink: pages/6003
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: webinar
tags: ["online", "webinar", "weekly seminar", "indonesian association for pattern recognition", "inapr", "disease"]
date: 2022-02-25 18:20:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/6/00/2022-02-25-deep-learning-image-based-detection.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Pengenalan pola merupakan suatu proses untuk mengenal pola menggunakan algoritma pembelajaran mesin, di mana aspek pengenalan pola ini memiliki aspek penting dalam potensi aplikasinya [[1](#r01)]. Bersama-sama dngan pembelajaran mendalam (deep learning), pembelajaran mesin (machine learning) dan pengenalan pola (pattern recognition) merupakan topik-topik yang berkaitan dan umum digunakan dalam bidang robotika dengan kecerdasan buatan, di mana konsep pertama pengenalan pola diperkenal dalam pemrosesan citra [[2](#r02)]. Informasi yang tersimpan dalam suatu citra dapat digunakan untuk mendeteksi berbagai hal. Bentuk citranya pun dapat berbagai jenis. Untuk citra yang diperoleh dengan menggunakan cahaya tampak, citra yang umumnya dikenal, dapat dimanfaatkan untuk mendeteksi retak pada permukaan rel kereta [[3](#r03)], ukuran buah pada kanopi pohon mangga [[4](#r04)], dan penyakit tanaman melalui citra daunnya [[5](#r05)]. Dari citra sinar-x dada dapat dideteksi keberadaan COVID-19 [[6](#r06)] dan dari citra sinar inframerah dapat dideteksi peralatan listrik yang terlalu panas pada daerah substation [[7](#r07)]. Salah satu penerapan dari pemanfaatan citra termal disinggung secara singkat di sini, sebagai suatu laporan singkat kehadiran pada suatu webinar.


## information
Terdapat suatu presentasi yang menjelaskan pemanfaatan citra termal untuk mendeteksi berbagai penyakit [[8](#r08)].

![]({{ site.baseurl}}/assets/img/6/00/6003-a.png) \
Gambar <a name='fig1'>1</a>. Presentasi pemanfaatan pembelajaran mendalam dalam memanfaatkan citra termal untuk deteksi dini penyakit dengan diagram pengembangan Breacnet-nya.

Bila terdapat ketidaksimetrian distribusi temperatur antara organ bagian kiri dan kanan untuk kaki ukus. Terdapat energi yang diubah oleh jaringan yang tidak sehat menjadi termal pada obesitas sehingga terdapat titik-titik tertentu yang dapat dijadikan tempat pengamatan. Kerjasama dengan kedokteran dan psikologi sudah dilakukan dan mendapatkan banyak masukan. Tantangan dan hambatannya adalah jumlah dataset yang masih sedikit. Lalu augmentasi menghasilkan data dengan variansi yang rendah. Juga bahwa dataset yang tidak seimbang.


## discussion
1. Bagaimana proses pengumpulan / pengambilan data dilakukan ? Apakah dilakukan di RS? (Nazrul, Teknik Fisika UGM)
	> Sebagian besar dataset menggunakan yang ada. Untuk dataset yang dibuat sendiri tidak mengambil data dari rumahsakit tapi berkoordinasi dengan ahli-ahli di fakultas kedokteran.
2. Apakah untuk konfirmasi deteksi pelu tetap dilakukan biopsi? (Sparisoma, Fisika, ITB)
	> Berbasis CAD dan dikonfirmasi oleh pakar seorang dokter. Citra-citra yang tidak dikenali dianalisa lebih lanjut oleh kedua tim.
3. Dapatkah dijelaskan lebih detail algoritma segmentasi payudara, ataukah dilakukan segmentasi secara manual. (Anto S Nugroho, BRIN)
	> Algoritma segmentasi yang diusulkan berbasis pada segmentasi citra sederhana yang terinspirasi dari desertasi dulu pada pengolahan citra pada dokumen kuno. Tidak dilakukan secara manual segmentasinya.
4. Apakah data ini sudah diuji dengan multietnis/ras, dikarenakan adanya kemungkinan perbedaan morfologi/luaran termal untuk ras/etnis neural network? (Ivan WH, IAIS)
	> Masih intra etnis. Tim sudah menyampaikan akan pengaruh dari etnis, tetapi untuk sementara masih menggunakan uniras terkait dengan aksesibilitas dataset.
5. Apakah pernah explore terkait GAN (generative adversaries network)? Kami pernah memanfaatkan GAN untuk pengembangan deteksi suhu kepala (sistem mendeteksi dahi) termasuk untuk memperkaya dataset, namun MAPE masih 20% padahal pengukuran suhu dibackup dari alat deteksi inframerah (jadi ada 2 source, selain dari kamera). Terima kasih banyak. (Wahyu Kelik, PT Metranet)
	> Semula akan menggunakan GAN. Sayangnya dengan menggunakan GAN dengan bobot yang sudah diusulkan oleh peneliti lain tidak dapat digunakan karena sifatnya berbeda dengan citra biasa ataupun perbedaan distribusi, misalnya temperatur kaki kiri dan kanan pada kasus kaki ukus. Untuk sementara penerapan GAN untuk memperbanyak dataset ditunda terlebih dahulu.
6. Apakah dataset yang digunakan menerapkan teknik augmentasi? Jika digunakan, mohon penjelasan detailnya. (Dwisnanto Putro, Unsrat)
	> Ya, digunakan untuk memberbanyak dataset. Detil teknis untuk penerapannya pada Breacnet dapat dibaca pada penelitian kami. Augmentasi citra berbasis transformasi karena tanpa itu tidak cukup baik untuk kasus kaki ulkus.

Catatan pertanyaan diperoleh dari kolom chat dan jawaban dituliskan saat menyaksikan presentasi. Detil yang lebih tepat dapat dilihat pada rekaman presentasi [[8](#r08)].

### to be considered
Tidak terasa memahami topiknya dengan baik dan upaya yang dilakukan cukup melelahkan. Apakah jenis artikel seperti ini akan diteruskan? Pertimbangan sedang berjalan dan belum diputuskan pada 25-Jan-2022 ini.


## note
1. <a name='r01'></a>sakilAnsari, "Pattern Recognition \| Introduction", GeekforGeeks, 1 Oct 2021, url <https://www.geeksforgeeks.org/pattern-recognition-introduction/> [20220225].
2. <a name='r02'></a>Alibaba Clouder, "Deep Learning vs. Machine Learning vs. Pattern Recognition", Alibaba Cloud, 14 Sep 2017, url <https://www.alibabacloud.com/blog/deep-learning-vs-machine-learning-vs-pattern-recognition_207110> [20220225].
3. <a name='r03'></a>Shengwen Fu, Zhanjun Jiang, "Research on Image-Based Detection and Recognition Technologies for Cracks on Rail Surface", 2019 International Conference on Robots & Intelligent System (ICRIS), 15-16 June 2019, p 98-101, url <https://doi.org/10.1109/ICRIS.2019.00033>.
4. <a name='r04'></a>Santi Kumari Behera, Shrabani Sangita, Prabira Kumar Sethy, Amiya Kumar Rath, "Image Processing Based Detection & Size Estimation of Fruit on Mango Tree Canopies", International Journal of Applied Engineering Research [Int J Appl Eng Res], vol 13, no 4, supl 2, p 6-13, Aug 2018, url <https://www.ripublication.com/ijaerspl2018/ijaerv13n4spl_02.pdf> [20220225].
5. <a name='r05'></a>Sharada P. Mohanty, David P. Hughes, Marcel Salathé, "Using Deep Learning for Image-Based Plant Disease Detection", Frontier in Plan Science [Front Plant Sci], vol 7, no, p 1419, Sep 2016, url <https://doi.org/10.3389/fpls.2016.01419>.
6. <a name='r06'></a>Loveleen Gaur, Ujwal Bhatia, N. Z. Jhanjhi, Ghulam Muhammad, Mehedi Masud, "Medical image-based detection of COVID-19 using Deep Convolution Neural Networks", Multimedia Systems [Multimed Syst], Apr 2021, url <https://doi.org/10.1007/s00530-021-00794-6>. 
7. <a name='r07'></a>Songhai Fan, Tianyu Li, Yicen Liu, Yiyu Gong, Kunjian Yu, "Infrared image-based detection method of electrical equipment overheating area in substation", E3S Web of Conferences [E3S Web Conf], vol 185, p 01034, 2020, url <https://doi.org/10.1051/e3sconf/202018501034>
8. <a name='r08'></a>Khairun Saddami, "Pemanfaatan Deep Learning Untuk Deteksi Dini Penyakit Berbasis Citra Termal, Seminar Mingguan, Indonesian Association for Pattern Recognition (INAPR), Zoom, 25 Feb 2022, 1630, url <https://zoom.us/j/99616981309> [20220225], YouTube url <https://www.youtube.com/watch?v=L-syDt95Hcc> [20220225].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug6003?src=hash&amp;ref_src=twsrc%5Etfw">#bug6003</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1497167025474785285?ref_src=twsrc%5Etfw">February 25, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
https://zoom.us/j/99616981309?pwd=OEttMDJtY1NxSVJmVXIzNWpjUm1PUT09
Bapak/Ibu peserta ysh,
Jika ada pertanyaan, dapat disampaikan via chat dengan menyebutkan terlebih dahulu nama dan institusi. 

Jangan lupa mengisi absensi di link  https://bit.ly/absensiSeminarINAPR

{% endcomment %}
