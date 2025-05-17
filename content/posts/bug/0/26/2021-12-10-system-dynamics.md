---
layout: post
authors: [viridi]
title: system dynamics
permalink: pages/0260
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["simulation", "system dynamics"]
date: 2021-12-11 09:38:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/26/2021-12-10-system-dynamics.md
twitter_username: 6unpnp
nodes: []
---
System dynamics (SD) adalah suatu metodologi berdasarkan sistem umpan-balik yang dipinjam dari teori kontrol, dan metodologi ini dapat dengan mudah menangani ketidaklinieran dan penundaan-waktu dan struktur multi-simpul dari suatu sistem yang kompleks dan dinamis [[1](#r01)]. Dalam pemodelan dengan system dynamics, variabel-variabel tidak langsung dikecualikan dari pertimbangan jika pengukuran tercatat tentang variabel-variabel ini kurang [[2](#r02)]. Penambahan kata sifat, berupa kata benda, pada frasa system dynamics, yang semula mencakup penerapan yang lebih luas [[3](#r03)], membuatnya memiliki arti yang lebih khusus dan terbatas seperti digunakan pada multibody system dynamics [[4](#r04)], engineering system dynamics [[5](#r05)], dan earth system dynamics [[6](#r06)]. Selain itu spesialiasi lebih jauh dari multibody system dynamics menghasilkan vehicle system dynamics [[7](#r07)], yang bahkan telah tersedia matakuliah khususnya [[8](#r08)]. Agar lebih tersosialisasikan tedapat pelatihan analisis kebijakan menggunakan pendekatan SD ini [[9](#r09)], yang visualisasinya telah terkamodasi dengan GUI [[10](#r10)].


## terms
+ System dynamics adalah suatu pendekatan berbantuan komputer untuk membangun teori, analisis kebijakan, dan dukungan keputusan strategis, yang muncul dari sudut pandang endogen, di mana pendekatan ini diterapkan pada permasalahan yang muncul dalam sistem sosial kompleks, manjerial, ekonomi atau ekologi - secara literal untuk semua sistem dinamis yang terkarakterisasi oleh kausalitas-kausalitas yang saling bergantung, berinteraksi mutual, memiliki umpan-balik informasi, dan bersifat sirkular [[3](#r03)].
+ Multibody system dynamics yang berbasiskan mekanika klasik dan berbagai aplikasi rekayasanya, di mana bidang yang merupakan cabang mekanika ini muncul karena kebutuhan untuk memodelkan sistem yang semakin kompleks seperti satelit dan pesawat luar angkasa dan perkembangan yang amat cepat dari komputer, sehingga bidang ini didedikasikan untuk peningkatan pemodelan dengan mempertimbangkan syarat batas non-holonomik, fleksibiitas, friksi, kontak, impak, dan kendali [[4](#r04)].
+ Engineering system dynamics merupakan suatu disiplin ilmu yang menitikberatkan pada penurunan model-model matematika berdasarkan representasi sistem fisis yang disederhanakan dari sistem sebenarnya, yang meliputi mekanik, elektrik, fluida, atau termal, dan penyelesaian model-model matematika tersebut, yang seringnya terdiri dari persamaan diferensial, di mana solusi yang diperoleh digunakan untuk merancang atau menganalisa sebelum produksi atau pengujian sistem sebenarnya karena model in telah merefleksikan respons dan kelakuan sistem [[5](#r05)].
+ Earth system dynamics yang merupakan pemodelan proses-proses sistem bumi dan interaksi antara kompartemen-kompartemen sistem bumi, yang perlu dilakukan lintas disiplin keilmuan sehingga dapat menerapkan alat bantu analitik untuk menerapkan data-data fisik, biologi, dan kimia [[6](#r06)].
+ Vehicle system dynamics adalah dinamika banyak benda (multibody dynamics) yang terspesialisasi dalam sistem kendaraan [[7](#r07)].


## note
1. <a name="r01"></a>Bilash Kanti Bala, Fatimah Mohamed Arshad, Kusairi Mohd Noh, "System Dynamics: Modelling and Simulation", Springer Texts in Business and Economics, Springer Nature, Singapore, 1st edition, 2017, url <https://doi.org/10.1007/978-981-10-2045-2>.
2. <a name="r02"></a>Jack B. Homer, Gary B. Hirsch, "System Dynamics Modeling for Public Health: Background and Opportunities", American Journal of Public Health [Am J. Publi Health], vol 96, no 3, p 452-458, Mar 2006, url <https://dx.doi.org/10.2105%2FAJPH.2005.062059>.
3. <a name="r03"></a>G. P. Richardson, "The Basic Elements of System Dynamics", in R. Meyers (eds) Complex Systems in Finance and Econometrics. Springer, New York, 2009, url <https://doi.org/10.1007/978-1-4419-7701-4_48>.
4. <a name="r04"></a>W. Schiehlen, "Multibody System Dynamics: Roots and Perspectives", [Multibody Syst Dyn], vol 1, no 2, p 149-188, Jun 1997, url <https://doi.org/10.1023/A:1009745432698>.
5. <a name="r05"></a>Nicolae Lobontiu, "System Dynamics for Engineering Students: Concepts and Applications", Academic Press, Amsterdam, 1st edition, Dec 2010, url <https://isbnsearch.org/isbn/9780240811284> [20211210]. [`PDF`](https://booksite.elsevier.com/samplechapters/9780240811284/01~Front_Matter.pdf)
6. <a name="r06"></a>Roland Baatz, Pamela L. Sullivan, Li Li, Samantha R. Weintraub, Henry W. Loescher, Michael Mirtl, Peter M. Groffman, Diana H. Wall, Michael Young, Tim White, Hang Wen, Steffen Zacharias, Ingolf Kühn, Jianwu Tang, Jérôme Gaillardet, Isabelle Braud, Alejandro N. Flores, Praveen Kumar, Henry Lin, Teamrat Ghezzehei, Julia Jones, Henry L. Gholz, Harry Vereecken, Kris Van Looy, "Steering operational synergies in terrestrial observation networks: opportunity for advancing Earth system dynamics modelling", Earth System Dynamics [Earth Syst Dynam], vol 9, no 2, p 593–609, Apr-Jun 2018, url <https://doi.org/10.5194/esd-9-593-2018>.
7. <a name="r07"></a>Dinggang Gao, Chen Chen, Guobin Lin, Shihui Luo, Yougang Sun, "Research on Car-Body Strength Evaluation Method of Shanghai High-Speed Maglev", 2019 International Conference on Advances in Construction Machinery and Vehicle Engineering (ICACMVE), 2019, pp. 340-346, url <https://doi.org/10.1109/ICACMVE.2019.00072>.
8. <a name="r08"></a>"Vehicle System dynamics", ME 6019, School of Mechanical Engineering, Shanghai Jiao Tong University, 19.02.13, url <https://me.sjtu.edu.cn/Mg_Admin/images/bksxxkc/english201321915264.pdf> [20211211].
9. <a name="r09"></a>Muhammad Tasrif, Ina Juniarti, Hani Rohani, Fauzan Ahmad, Eva Intan Nurwendah, Nurika Lestari Waspada, "Metodologi System Dynamics (Dinamika Sistem) untuk Pemodelan Kebijakan: Suatu Pengantar", Pelatihan Analisis Kebijakan Menggunakan Model System Dynamics, Bandung, 14-18 Desember 2015, url <https://www.lppm.itb.ac.id/wp-content/uploads/sites/55/2017/07/BAHAN_PELATIHAN.pdf> [20211210].
10. <a name="r10"></a>Wikipedia contributors, "System dynamics", Wikipedia, The Free Encyclopedia, 22 July 2021, 21:11 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1034966749> [20211210].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0260?src=hash&amp;ref_src=twsrc%5Etfw">#bug0260</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1469475079931129859?ref_src=twsrc%5Etfw">December 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
