---
layout: post
authors: [viridi]
title: problem solving
permalink: pages/0380
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["problem solving"]
date: 2022-01-17 18:09:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/38/2022-01-17-problem-solving.md
twitter_username: 6unpnp
nodes: []
youtube: Sq3jOq96U9c&t=232s
---
Pemecahan masalah (en: problem solving), yang merupakan istilah umum, dapat membingungkan, terlebih dengan tersedianya berbagai alat bantu, bahkan sampai orang-orang dalam perusahaan yang sama menggunakan pendekatan dan terminologi yang berbeda, sehingga hal ini membuat pemecahan masalah menjadi problematik [[1](#r01)]. Terdapat panduan 14 langkah kritis pertama untuk menyelesaikan suatu masalah [[2](#r02)], 8 langkah untuk menyelesaikan masalah [[3](#r03)], 5 langkah untuk membuat proses pemecahan masalah lebih mudah [[4](#r04)], 4 langkah dasar proses memecahkan masalah yang dilengkapi dengan metodologinya [[5](#r05)], 3 langkah dasar pemecahan masalah [[1](#r01)]. Untuk pemecahan masalah komputasi terdapat lima langkah yang sudah lebih spesifik dengan melibatkan model matematika dan penggunaan komputer [[6](#r06)]. Walaupun komputer dapat digunakan untuk membantu memecahkan masalah, akan sebelum suatu masalah tersebut ditangani, ia perlu terlebih dahulu dimengerti, yang hal ini dapat dibantu dengan berpikir komputasi (en: computational thinking), yang mengijinkan kita untuk mengambil suatu masalah rumit, memahaminya, dan mengembangkan solusi yang mungkin, dengan solusi dapat dinyatakan dalam bentuk yang dimengerti komputer, manusia atau keduanya [[7](#r07)]. Salah satu versi langkah-langkah berpikir komputasi terdiri dari tiga langkah, yang meliputi spesifikasi masalah (abstraksi, dekomposisi, pengenalan pola), ekspresi algoritma (perancangan algoritma), dan implementasi solusi & evaluasi (generalisasi) [[8](#r08)].


## computational thinking principles
Walaupun berpikir komputasi bukanlah suatu metodologi formal untuk bernalar, akan tetapi mencakup beberapa prinsip dasar yang bermanfaat dalam banyak bidang disiplin ilmu, seperti [[8](#r08)]

1. **Dekomposisi** \
	Gagasan untuk membagi suatu masalah kompleks menjadi bagian-bagian yang dapat ditangani.
2. **Pengenalan pola** \
	Gagasan untuk menemukan kesamaan atau tren atau keteraturan dalam suatu masalah.
3. **Abstraksi** \
	Gagasan untuk mengabaikan detil-detil yang tidak penting dan mengutamakan informasi tetang sistem yang sedang dikaji.
4. **Generalisasi** \
	Gagasan untuk mengidentifikasi sifat karakteristik yang umum terdapat pada berbagai model yang terlihat berbeda sehingga dapat mengadaptasi solusi dari satu bagian ke bagian lain yang terkesan tidak terkait.

Tiga gagasan pertama di atas ditambah dengan algoritma merupakan strategi untuk memasukkan berpikir komputasi di kelas-kelas pembelajaran dini [[9](#r09)]. Terdapat pula yang menggabungkan gagasan abstraksi dengan generalisasi [[10](#r10)]. Dalam pengajaran berpikir komputasi terdapat tiga tahap perkembangannya yaitu baru awal berkembang, telah berkembang sebagian, dan berkembang penuh yang disesuaikan dengan cara melakukan pengamatannya [[11](#r11)].


## problem solving steps
Dari berbagai sumber [[1](#r01), [2](#r02), [3](#r03), [4](#r04), [5](#r05), [6](#r06)] dapat diperoleh bahwa langkah pertama adalah memahami masalah (identifikasi, spesifikasi, definisi) dan satu atau dua langkah terakhir adalah menerapkan solusi dan melakukan evaluasi. Dengan demikian yang berbeda adalah detil antara langkah pertama dan langkah-langkah terakhir.

Bila dipilih khusus untuk memecahkan masalah komputasi [[6](#r06)], langkah-langkahnya, setelah sedikit digabungkan dengan pendekatan lain dan juga istilahnya, adalah sebagai berikut

1. **Identikasi** \
	Definisikan masalah yang dihadapi, lalu identifikasi faktor-faktor penyebabnya, dan bila perlu lakukan dekomposisi untuk mendapatkan bagian masalah yang perlu diselesaikan.
2. **Ekspresi** \
	Nyatakan masalah dalam ekspresi yang telah terdapat alat untuk menyelesaikannya, di mana untuk sains nyatakan dalam bentuk model matematika.
3. **Konstruksi** \
	Bangun metode penyelesaian, yang dalam hal ini adalah suatu metode komputasi untuk menyelesaikan model yang telah merepresentasikan masalah.
4. **Implementasi** \
	Terapkan metode komputasi untuk menyelesaikan model, yang dalam hal ini dapat masih berupa algoritma, ataupun telah sampai menggunakan suatu bahasa pemrograman atau aplikasi komputer tertentu.
5. **Evaluasi** \
	Nilai hasil yang diperoleh, dan bila terdapat perbedaan yang besar antara solusi yang diperoleh dan solusi sebenarnya (bila ada) atau dapat diperkirakan hasi yang benar, nilai ulang masalah dan coba proses kembali.

Boleh saja, terutama dikarenaka kurangnya pengalaman, setelah langkah kelima diperoleh bawah masalah masih terlalu besar untuk ditangani, sehingga perlu kembali ke langkah pertama.


## an example
Suatu contoh, yang tentunya agak mengada-ada, diberikan pada gambar di bawah ini sebagai ilustrasi dalam menggunakan langkah-langkah pemecahan masalah.

![]({{ site.baseurl }}/assets/img/0/38/0380-a.png) \
Gambar <a name='fig1'>1</a>. Meriam $\rm C$ menembakan bola air $\rm W$ melewati puncak bukit $\rm H$ untuk memadamkan api $\rm H$.

Perlu ditentukan kecepatan bola air $v$ dan sudut elevasi meriam $\theta$ agar bola air $\rm W$ dapat melewati puncak bukit $H$ dan sampai ke lokasi kebakaran sehingga dapat memadamkan api $\rm F$.


Tabel <a name='tab1'>1</a>. Ilustrasi langkah-langkah pemecahan masalah untuk memadamkan api dengan meriam bola air.

Langkah | Hasil | Catatan
:- | :- | :-
Identifikasi | Bola air sampai <br> ke lokasi | $v$, $\theta$
Ekspresi | Gerak parabola | $y(x) > y_{\rm H}(x)$
Konstruksi | Akar persamaan | $y(x) - y_{\rm F}(x)$
Implementasi | algoritma, <br> code | spreadsheet, <br> program
Evaluasi | $\rm W \rightarrow F?$ | Sudah tepat, <br> ubah $v$, $\theta$

Terdapat tiga fungsi yang perlu disediakan, yaitu lintasan parabola dari bola air $y(x)$, tinggi bukit untuk setiap koordinat mendatar $y _{\rm H}(x)$, dan lokas api sebagai fungsi posisi mendatar $y _{\rm F}(x)$. Rentang kesalahan juga perlu didefinisikan karena lokasi api bukan merupakan suatu titik tetapi lebih merupakan daerah.


## exer
1. Apa yang dimaksud dengan akar? Kaitkan hal ini dengan contoh pada Gambar [1](#fig1).
2. Sebutkan setidaknya satu metode pencarian akar yang paling sederhana.
3. Untuk sistem pada Gambar [1](#fig1) apakah diperlukan konsep dinamika bila tidak ada angin? Ataukah cukup konsep kinematika?
4. Bila terdapat angin, apakah masih hanya persoalan pencarian akar atau perlu metode numerik yang lain?
5. Bila terdapat beberapa hal yang perlu dipecahkan, apa prinsip berpikir komputasi yang digunakan?


## note
1. <a name='r01'></a>Mark Galley, "Problem Solving - 3 Basic Steps", ThinkReliability, 9 Nov 2020, url <https://blog.thinkreliability.com/problem-solving-three-basic-steps> [20220117].
2. <a name='r02'></a>Exepert Panel, "14 Critical First Steps To Solving A Problem", Forbes, 16 Jul 2020, url <https://www.forbes.com/sites/forbescoachescouncil/2020/07/16/14-critical-first-steps-to-solving-a-problem/?sh=af460331cc4f> [20220117].
3. <a name='r03'></a>"8 steps to problem solving", ReachOut Australia, 2022, url <https://au.reachout.com/articles/a-step-by-step-guide-to-problem-solving> [20220117].
4. <a name='r04'></a>KnowledgeCity, "5 Steps to Make your Problem-Solving Process Easier", KnowledgeCity, 29 Jul 2020, url <https://www.knowledgecity.com/blog/5-steps-to-make-your-problem-solving-process-easier/> [20220117].
5. <a name='r05'></a>"The Problem-Solving Process", American Society for Quality, 2022, url <https://asq.org/quality-resources/problem-solving#Process> [20220117].
6. <a name='r06'></a>Glenn J. Fox, "Computational Problem Solving", CCS110 Introduction to Computational Science, Department of Mathematics and Computer Science, Emory University, Atlanta, 20 Sep 2001, url <http://www.mathcs.emory.edu/~fox/NewCCS/CompPS.html> [20220117].
7. <a name='r07'></a>"Problem solving", Bitsize, BBC, 2022, url <https://www.bbc.co.uk/bitesize/guides/zmhpfcw/revision/1> [20220117].
8. <a name='r08'></a>Ricky Sethi, "Computational Thinking Defined:
What is Computational Thinking and Computational Problem Solving?", Towards Data Science, 12 Mar 2021, url <https://towardsdatascience.com/computational-thinking-defined-7806ffc70f5e> [20220117].
9. <a name='r09'></a>Kristen Thorson, "Early Learning Strategies for Developing Computational Thinking Skills", Getting Smart, 18 Mar 2018, url <https://www.gettingsmart.com/2018/03/18/early-learning-strategies-for-developing-computational-thinking-skills/> [20220117].
10. <a name='r10'></a>Dwi Fitriani Rosali, Didi Suryadi, "An Analysis of Students’ Computational Thinking Skills on the Number Patterns Lesson during the Covid-19 Pandemic", Formatif: Jurnal Ilmiah Pendidikan MIPA [Formatif J Ilmiah Pendidik MIPA], vol 11, no 2, p 217-232, Sep 2021, url <http://dx.doi.org/10.30998/formatif.v11i2.9905>
11. <a name='r11'></a>Arinchaya Threekunprapa, Pratchayapong Yasri, "Patterns of Computational Thinking Development while Solving
Unplugged Coding Activities Coupled with the 3S Approach for SelfDirected Learning", European Journal of Educational Research [Eur J Educ Res], vol 9, no 3, p 1025-1045, Jul 2020, url <https://doi.org/10.12973/eu-jer.9.3.1025>.

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0380?src=hash&amp;ref_src=twsrc%5Etfw">#bug0380</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1483034056329932800?ref_src=twsrc%5Etfw">January 17, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) akar adalah pembuat nol suatu fungsi, lintasan bola air dengan tinggi bukit tidak boleh menghasilkan akar, sedang lintasan bola air dengan api harus menghasilkan akar; &nbsp;
2) Newton-Raphson, secant, bisection; &nbsp;
3) tanpa angin, cukup kinematika; &nbsp;
4) perlu integrasi numerik untuk mendapatkan posisinya, misalnya metode Euler; &nbsp;
5) dekomposisi, sehingga masing-masing hanya memecahkan masalah kecil; &nbsp;
</ans>


{% comment %}
{% endcomment %}
