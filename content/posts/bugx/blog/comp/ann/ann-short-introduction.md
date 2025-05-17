---
title: "ann short introduction"
date: 2022-04-04T16:53:00+07:00
lastmod: 2022-04-05T11:11:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['computation', 'model', 'neural-network', 'draft']
url: "0040"
draft: false
---
Jaringan saraf tiruan (JST) atau artificial neural networks (ANN) merupakan salah satu teknologi yang paling berpengaruh dalam dekade terakhir ini, di mana teknologi ini merupakah bagian fundamental dari algoritma pembelajaran mendalam (deep learning), dan bagian terdepan dari kecerdasan buatan (artificial intelligence, AI) yang pengembangannya masih dapat dikatan berdarah-darah [[1](#r01)]. Teknologi ini terinspirasi oleh cara kerja sistem saraf biologis, seperti pada sel otak manusia [[2](#r02)] atau jaringan saraf yang membentuk otak hewan [[3](#r03)]. Otak manusia sendiri masih menyimpan banyak misteri, di mana pemrosesan paralel yang masif mengangkat kinerja otak melebihi AI [[4](#r04)].


## brief history
Dengan hanya fokus pada peristiwa-peristiwa kunci yang mengarah pada evolusi pemikiran seputar jaringan saraf, yang popularitasnya mengalami pasang-surut selama bertahun-tahun, dapat disarikan sejarah jaringan sarat seperti di bawah ini [[5](#r05)].

**1943**: Riset untuk mencari pemahaman bagaimana otak manusia dapat menghasilkan pola-pola rumit melalui sel-sel otak yang terhubung, atau neuron, menghasilkan salah satu ide utama mengenai perbandingan neuron berambang biner dengan berlogika Boolean (0/1 atau pernyataan benar<wbr>/<wbr>salah), yang dipublikasikan oleh Warren S. McCulloch dan Walter Pitts dalam karya berjudul "A logical calculus of the ideas immanent in nervous activity".

**1958**: Keberhasilan Frank Rosenblatt dalam mengembangkan perceptron terdokumentasikan dalam penelitiannya yang berjudul "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain", di mana ia menggunakan karya McCulloch dan Pitt untuk melangkah lebih jauh dengan mengenalkan bobot pada persamaan tersebut, sehingga dapat membuat komputer IBM 704 belajar untuk membedakan kartu yang ditandai di sebelah kiri terhadap kartu yang ditandai disebelah kanan.

**1974**: Sementara banyak peneliti berkontribusi pada gagasan propagasi balik, Paul Werbos adalah orang pertama di US yang memperhatikan penerapannya pada jaringan saraf dalam desertasi doktornnya yang berjudul "Beyond Regression: New Tools for Prediction and Analysis in the Behavioral Science".

**1989**: Sebuah makalah berjudul "Backpropagation Applied to Handwritten Zip Code Recognition" dipublikasikan oleh Yann LeCun dan rekan-rekannya, yang mengilustrasikan bagaimana penggunaan kendala dalam propagasi balik dan integrasinya pada arsitektur jaringan saraf dapat digunakan untuk melatih algoritma, sehingga dapat dengan sukses memanfaatkan suatu jaringan saraf untuk mengenali digit kode pos tulisan tangan yang disediakan oleh layanan pos US.


## data and function
JST dapat pula dikatakan sebagai suatu sistem pembelajaran komputasi yang menggunakan jaringan fungsi untuk mengerti data dan melakukan translasi data masukan dalam suatu bentuk menjadi data keluaran yang diinginkan, biasanya dalam bentuk lain [[6](#r06)]. Data yang diambil oleh ANN hanya sebagian sebagai contoh ketimbang seluruh data untuk mencapai solusi, yang hal ini akan menghemat waktu dan biaya [[7](#r07)]. Untuk membuat prediksi terbaik yang mungkin dengan hanya data latih terbatas, perlu dicari arsitektur JST yang paling cocok, yang dapat secara efisien menangkap informasi yang ada dalam data [[8](#r08)].


## applications
Terdapat banyak penerapan JST dan dalam berbagai bidang, seperti mengekstrak ciri dari suatu gambar [[9](#r09)], peramalan inflasi di Indonesia [[10](#r10)], memahami probabilitas hidup penumpang dengan kriteria tertentu dari data kapal Titanic [[11](#r11)], dan lainnya.

Pengelompokan data ke dalam dua kelas atau lebih merupakan salah satu pemanfaatan JST, di mana bergantung jenis datanya, terdapat arsitektur tertentu yang perlu dipilih, yang terkait dengan jumlah layer dan jumlah node pada setiap layernya serta juga fungsi aktivasinya, agar proses klasifikasi dapat berhasil dengan baik [[12](#r12)].


## bnn vs ann
Telah disampaikan bahwa cara kerja jaringan saraf biologis atau Biological Neural Network (BNN) menginspirasi adanya jaringan sarat tiruan atau Artificial Neural Network (ANN). Kaitan istilah-istilah yang digunakan keduanya dapat dipadankan dalam tabel berikut [[13](#r13), [14](#r14), [15](#r15), [16](#r16)], setidaknya kesamaannya.

Tabel <a name='tab1'>1</a>. Padanan istilah yang digunakan dalam BNN dan ANN.

BNN | ANN
:- | :-
Denderite | Input
Soma (inti sel) | Node
Axon | Output
Synapse | Interconnection / Weight

Ilustrasi model sebuah neuron biologis dan neuron artifisial diberikan pada kedua gambar [[17](#r17), [18](#r18)] berikut ini.

{{< svg "/static/img/notmine/Neuron_LangNeutral.svg" "fig1" "1" "Model sebuah neuron biologis dengan bagian-bagiannya: (a) Dendrite, (b) Cell body, (c) Nucleus, (d) Axon, (e) Myelin sheath, (f) Schwann cell, (g) Node of Ranvier, dan (h) Axon Terminal." >}}

{{< svg "/static/img/comp/ann/artificial-neuron.svg" "fig2" "2" "Model sebuah neuron artifisial dengan bagian-bagiannya: (a) Input, (b) Weight, (c) Node, (d) Output." >}}

Bagian-bagian neuron biologis dan artifisial, yang membentuk jaringan pada Tabel [1](#tab1), dapat dilihat ilustrasinya pada Gambar [1](#fig1) dan [2](#fig2), dengan terdapat pula bagian-bagian lain yang tidak disebutkan.


## networks
Jaringan saraf tiruan merupakan kumpulan dari neuron-neuron artifisial yang saling terkoneksi. Kumpulan neuron dapat dikumpulkan pada suatu lapisan atau layer, yang membedakan dalam tahapan mengolah informasi.

{{< svg "/static/img/comp/ann/artificial-neuron-network.svg" "fig3" "3" "Jaringan dari beberapa buah neuron artifisial dengan: (a) input layer, (b) hidden layer, dan (c) output layer." >}}

Beberapa neuron artifisial pada Gambar [2](#fig2) dapat saling dihubungkan sehingga keluaran dari satu neuron menjadi masukan bagi neuron lainnya. Sebuah ilustrasi diberikan pada Gambar [3](#fig3) [[19](#r19)] yang sebenarnya kurang lazim dan lebih sering disajikan seperti dalam Gambar [4](#fig4) [[20](#r20)], di mana node masukan yang sama akan digabungkan karena merepresentasikan sumber data yang sama.

{{< svg "/static/img/comp/ann/artificial-neural-network.svg" "fig4" "4" "Jaringan sarat tiruan dengan: (a) Input layer, (b) Weight input-hidden layer, (c) Hidden layer, (d) Weight hidden-output layer, dan (e) Output layer." >}}

Suatu JST dengan konfigurasi $N-M-1$ diberikan pada Gambar [4](#fig4), di mana terdapat $N$ neuron pada layer masukan, $M$ neuron pada layer tersembunyi, dan $1$ neuron pada layer keluaran. Secara umum jumlah neuron pada setiap lapisan dan jumlah layer tersembunyi akan menyesuaikan dengan masalah yang akan dipecahkan.


## notes
1. <a name='r01'></a>Ben Dickson, "What are artificial neural networks (ANN)?", TechTalks, 5 Aug 2019, url <https://bdtechtalks.com/2019/08/05/what-is-artificial-neural-network-ann/> [20220404].
2. <a name='r02'></a>Abdul Kholik, Aditya Yanuar Roshadi, "Artificial Neural Network (Video)", Machine Learning, FMIPA, Universitas Gadjah Mada, 29 Sep 2018, url <https://machinelearning.mipa.ugm.ac.id/2018/09/29/artificial-neural-network-video/> [20220404].
3. <a name='r03'></a>Wikipedia contributors, "Artificial neural network", Wikipedia, The Free Encyclopedia, 26 March 2022, 11:05 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1079364615> [20220404].
4. <a name='r04'></a>Liqun Lou, "Why Is the Human Brain So Efficient?", Nautilus, 3 Apr 2018, url <https://nautil.us/p-7216> [20220404].
5. <a name='r05'></a>IBM Cloud Education, "Neural Networks", IBM Cloud Learn Hub, 17 Aug 2020, url <https://www.ibm.com/cloud/learn/neural-networks> [20210404].
6. <a name='r06'></a>Deepanshi, "Beginners Guide to Artificial Neural Network", Analytics Vidhya, 25 May 2021, url <https://www.analyticsvidhya.com/blog/2021/05/beginners-guide-to-artificial-neural-network/> [20220404].
7. <a name='r07'></a>Techopedia, "Artificial Neural Network (ANN)", Techopedia Inc., 21 Jun 2021, url <https://www.techopedia.com/definition/5967/artificial-neural-network-ann> [20220404].
8. <a name='r08'></a>Gabriel Peyré, "Mathematics of Neural Networks", CNRS & DMA, PSL, École Normale Supérieure, 7 Jun 2020, p 7, url <https://mathematical-tours.github.io/book-basics-sources/neural-networks-en/NeuralNetworksEN.pdf> [20220404].
9. <a name='r09'></a>Jan Wira Gotama Putra, "Pengenalan Konsep Pembelajaran Mesin dan Deep Learning", Edisi 1.4, 17 Aug 2020, p 182, url <https://wiragotama.github.io/resources/ebook/parts/JWGP-intro-to-ml-part3-secured.pdf> [20220404].
10. <a name='r10'></a>Rizky Ryandhi, "Penerapan Metode Artificial Neural Network (ANN) untuk Peramalan Inflasi di Indonesia", Tugas Akhir Sarjana, Departemen Sistem Informasi, Fakultas Teknologi Informasi, Institut Teknologi Sepuluh November, Surabaya, 2017, url <https://repository.its.ac.id/id/eprint/42185> [20220404].
11. <a name='r11'></a>Reni Anggriani, "Artificial Neural Network (ANN)", Medium, 21 Dec 2018, url <https://medium.com/@reni_A/700f7f9904d5> [20220404].
12. <a name='r12'></a>Arden Dertat, "Applied Deep Learning - Part 1: Artificial Neural Networks", Towards Data Science, 8 Aug 2017, url <https://towardsdatascience.com/d7834f67a4f6> [20220404].
13. <a name='r13'></a>-, "Artificial Neural Network Tutorial", Javatpoint, url <https://www.javatpoint.com/artificial-neural-network> [20220405].
14. <a name='r14'></a>Saurabh Mhatre, "What Is The Relation Between Artificial And Biological Neuron?", Medium, 6 Jan 2020, url <https://smhatre59.medium.com/18b05831036> [20220405].
15. <a name='r15'></a>Mohd Arafat Shaikh, "Artificial neural network", SlideShare, 15 Oct 2017, url <https://www.slideshare.net/MohdArafatShaikh/artificial-neural-network-80825958> [20220405].
16. <a name='r16'></a>Engineering Tutorial, "Biological and Artificial Neural Network | Basic Concepts | Neural Networks", YouTube, 29 Jun 2020, url <https://www.youtube.com/watch?v=0aDq6ax6kGQ&t=623s> [20220405].
17. <a name='r17'></a>Wikimedia Commons contributors, "File:Neuron, LangNeutral.svg", Wikimedia Commons, the free media repository, 8 September 2020, 01:15 UTC, url <https://commons.wikimedia.org/w/index.php?oldid=451539142> [20220405].
18. <a name='r18'></a>dudung, "Artificial Neuron", Inkscape, 5 Apr 2022, url <https://inkscape.org/~dudung/%E2%98%85artificial-neuron> [20220405].
19. <a name='r19'></a>dudung, "Artificial Neuron Network", Inkscape, 5 Apr 2022, url <https://inkscape.org/~dudung/%E2%98%85artificial-neuron-network> [20220405].
20. <a name='r20'></a>dudung, "Artificial Neural Network N-M-1", Inkscape, 5 Apr 2022, url <https://inkscape.org/~dudung/%E2%98%85artificial-neural-network-n-m-1> [20220405].

{{< citeas >}}

{{< youtube id="KwsbkMjYEkQ" autoplay="true" >}} \
Video <a name='vid1'>1</a>. Penuturan artikel ini untuk  versi 5 Apr 2022 08:19 oleh penulis.
