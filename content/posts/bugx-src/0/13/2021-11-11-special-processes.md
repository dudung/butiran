---
layout: butir
authors: [viridi]
title: special processes
permalink: pages/0133
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ideal gas law", "special processes"]
date: 2021-11-13 10:18:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/13/2021-11-11-special-processes.md
twitter_username: 6unpnp
nodes: []
---
Untuk gas ideal dalam sistem tertutup terdapat empat proses spesial yang sering dibahas, yaitu isotermal, isobarik, isokhorik, dan adiabatik yang semuanya bersifat reversibel [[1](#r01)], dengan telah terdapat visualisasi untuk ketiga proses pertama [[2](#r02)]. Selain itu terdapat pula proses throttling yang tak-reversibel dan proses politropik [[3](#r03)], yang pada awalnya istilah terakhir ini digunakan untuk semua proses reversibel pada sistem tertutup ataupun terbuka bagi gas atau uap yang melibatkan baik transfer panas maupun kerja, sedemikian rupa sehingga kombinasi spesifik sifat-sifat gas bernilai tetap selama proses ini [[4](#r04)].


## isothermal process
Suatu proses isotermal berlangsung dari keadaan awal $1$ ke keadaan awal $2$ dengan $T_2 = T_1 = T$, dengan salah satu contohnya diberikan pada Gambar [1](#fig1) berikut ini.

![]({{ site.baseurl }}/assets/img/0/13/0133-a1.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-a2.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-a3.png)

Gambar <a name="fig1">1</a>. Proses ekspansi isotermal dengan $T = 500$, $p_1 = 20 \times 10^5$, $p_1 = 4 \times 10^5$, $V_1 = 0.8$, $V_2 = 4$, dan $n = 384.8695$.

Suatu proses ekspansi isotermal diberikan pada Gambar [1](#fig1) dengan nila-nilainya diberikan dalam satuan SI. Proses ini disebut ekspansi karena $V_2 > V_1$. Untuk proses kompresi isotermal dengan nilai-nilai yang mirip, akan dihasilkan kurva yang sama akan tetapi dengan arah proses yang berlawanan.


## isobaric process
Pada suatu proses isobarik $p_1 = p_2 = p$ yang ilustrasinya diberikan pada Gambar [2](#fig2). 

![]({{ site.baseurl }}/assets/img/0/13/0133-b1.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-b2.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-b3.png)

Gambar <a name="fig2">2</a>. Proses ekspansi isobarik dengan $p = 4 \times 10^5$, $T_1 = 100$, $T_2 = 500$, $V_1 = 0.8$, $V_2 = 4$, dan $n = 384.8695$.

Proses isobarik atau proses dengan tekanan tetap mudah terlihat pada Gambar [2](#fig2) (kiri) dan (tengah), di mana nilai tekanan $p$ tetap tergambarkan sebagai garis mendatar, baik pada diagam $p-V$ maupun $p-T$.


## isochoric process
Bila pada suatu proses volume sistem dijaga tetap sehingga $V_1 = V_2 = V$ maka proses tersebut merupakan proses isokhorik.

![]({{ site.baseurl }}/assets/img/0/13/0133-c1.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-c2.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-c3.png)

Gambar <a name="fig3">3</a>. Proses isokhorik dengan $V = 2$, $T_1 = 187.5$, $T_2 = 468.7$, $p_1 = 3 \times 10^5$, $p_2 = 7.5 \times 10^5$, dan $n = 384.8695$.

Gambar [3](#fig3) (kiri) dan (kanan) memperlihatkan dengan jelas proses dengan volume $V$ tetap, yang masing-masing berupa garis vertikal pada diagram $p-V$ dan garis horisontal pada diagram $v-T$.


## adiabatic process
Proses adiabatik perlu memenuhi hubungan khusus $pV^\gamma$ bernilai tetap, yang untuk gas ideal monoatomik $\gamma = 5/3$, sementara untuk udara $\gamma = 1.4$, yang secara umum merupakan gas diatomik [[5](#r05)]. Kemudian, ilustrasi diagram-diagramnya diberikan pada Bambar [4](#fig4) berikut ini.

![]({{ site.baseurl }}/assets/img/0/13/0133-d1.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-d2.png) | ![]({{ site.baseurl }}/assets/img/0/13/0133-d3.png)

Gambar <a name="fig4">4</a>. Proses adiabatik dengan $V_1 = 0.8$, $V_2 = 4$, $p_1 = 9.28 \times 10^6$, $p_2 = 6.35 \times 10^5$, $T_1 = 2320.8$, $T_2 = 793.7$, dan $n = 384.8695$.

Perhatikan bahwa sekilas proses adiabatik ini memiliki kurva yang mirip dengan proses isotermal akan tetapi dengan kemiringan lebih tajam. Hal dapat teramati dengan membandingkan Gambar [1](#fig1) untuk proses isotermal dengan Gambar [4](#fig4) untuk proses adiabatik.


## exer
Ilustrasi beberapa proses membentuk satu siklus diberikan pada Gambar [5](#fig5) berikut ini.

![]({{ site.baseurl }}/assets/img/0/13/0133-e1.jpg) | ![]({{ site.baseurl }}/assets/img/0/13/0133-e2.jpg)

Gambar <a name="fig5">5</a>. Dua buah siklus dengan: tiga proses (kiri) dan empat proses (kanan). 

1. Proses dari mana ke mana pada Gambar [5](#fig5) (kiri) yang merupakan proses isobarik?
2. Apakah terdapat proses isotermal pada Gambar [5](#fig5) (kiri)?
3. Tunjukkan proses ekspansi dan kompresi yang terdapat pada Gambar [5](#fig5) (kanan).
4. Apakah terdapat keadaan-keadaan yang berada pada temperatur yang sama pada Gambar [5](#fig5) (kanan)? Sebutkan bila ada.
5. Apakah terdapat proses isotermal pada Gambar [5](#fig5) (kanan)?
    \
    ![]({{ site.baseurl }}/assets/img/0/13/0133-f.png)
    \
    Gambar <a name="fig6">6</a>. Dua buah proses yang dimulai dengan keadaan awal berbeda, akan tetapi berakhir pada keadaan akhir yang sama.
6. Dari Gambar [6](#fig6) proses manakah yang merupakan proses adiabatik dan mana yang merupakan proses isotermal?


## note
1. <a name="r01"></a>Christi Patton Luks, "6-Ideal Gas Special Processes", Bilibili, 2021-09-06 23:06:23, url <https://www.bilibili.com/s/video/BV1aQ4y1a7Hu> [20211111].
2. <a name="r02"></a>Walter Fendt, "Special Processes of an Ideal Gas", walter-fendt.de, 9 Oct 2019, url <https://www.walter-fendt.de/html5/phen/gasprocesses_en.htm> [20211111].
3. <a name="r03"></a>Mugdha P, "Ideal Gases and Ideal Gas Processes (With Equation) \| Thermodynamics", Engineering Notes, url <https://www.engineeringenotes.com/thermal-engineering/thermodynamics/ideal-gases-and-ideal-gas-processes-with-equation-thermodynamics/49023> [20211111].
4. <a name="r04"></a>N. F. Kirkby, "Polytropic Process", Thermopedia, 7 Feb 2011, url <https://dx.doi.org/10.1615/AtoZ.p.polytropic_process>.
5. <a name="r05"></a>Carl R. Nave, "Specific Heats of Gases", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Kinetic/shegas.html> [20211113].


## &nbsp;
[kinetic theory of gases](0130.html) &bull; [ideal gas law](0131.html) &bull; [state, process, cycle](0132.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) proses $2 \rightarrow 3$; &nbsp;
2) ya, proses $3 \rightarrow 1$; &nbsp;
3) ekspansi isobarik $1 \rightarrow 2$, kompresi isobari $3 \rightarrow 4$; &nbsp;
4) ya ada, keadaan $2$ dan $4$; &nbsp;
5) tidak; &nbsp;
6) $1 \rightarrow 3$ (merah) proses adiabatik, $2 \rightarrow 3$ (biru) proses isotermal; &nbsp;
</ans>

