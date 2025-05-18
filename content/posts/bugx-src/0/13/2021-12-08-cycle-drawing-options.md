---
layout: butir
authors: [viridi]
title: cycle drawing options
permalink: pages/0136
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ideal gas law", "process", "adiabatic", "isothermal", "cyle"]
date: 2021-12-09 19:31:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/13/2021-12-08-cycle-drawing-options.md
twitter_username: 6unpnp
nodes: []
---
Terdapat diskusi yang menggelitik mengenai representasi siklus Carnot, yaitu apakah diagram sebaiknya digambarkan hanya secara ilustratif atau sebaiknya sesuai dengan angka-angka sebenarnya [[1](#r01)]. Penelusuran menunjukkan bahwa terdapat berbagai gambar ilustratif [[2](#r02), [3](#r03), [4](#r04), [5](#r05)], semi-realistik [[6](#r06), [7](#r07)], dan realistik karena dihitung menggunakan angka, akan tetapi pada bagian penjelasannya tetap menggunakan diagram yang kurang realistik [[8](#r08), [9](#r09)].


## available examples
Contoh-contoh diagram siklus Carnot yang bersifat ilustratif, semi-realistik, dan realistik diberikan di bawah ini.

![]({{ site.baseurl }}/assets/img/0/13/0136-a.png) \
Gambar <a name="fig1">1</a>. Diagram siklus Carnot ilustratif: (a) [[2](#r02)], (b) [[3](#r03)], (c) [[4](#r04)], (d) [[5](#r05)]; semi realistik: (e) [[6](#r06)], (f) [[7](#r07)]; dan realistik: (g) [[8](#r08)], (h) [[9](#r09)].

Sekilas dapat terlihat bahwa diagram ilustratif lebih mudah untuk dilihat ketimbang yang realistik. Pada diagram jenis ini titik penghubung antar proses isotermal dan prose adiabatik juga mudah terlihat, sedangkan pada diagram realistik proses isotermal terlihat menerus ke proses adiabaik tanpa adanya titik penghubung.


## carnot cyle
Dua jenis diagram siklus Carnot akan dibuat, yang masing-masing mewakili jenis ilustratif dan jenis realistik.

### illustratif diagram
Sebuah contoh ilustratif siklus Carnot disajikan berikut ini.

![]({{ site.baseurl }}/assets/img/0/13/0136-b.png) \
Gambar <a name="fig2">2</a>. Diagram siklus Carnot ilustratif dengan proses-proses: ekspansi isotermal ($1 \rightarrow 2$), ekspansi adiabatik ($2 \rightarrow 3$), kompresi isotermal ($3 \rightarrow 4$), dan kompresi adiabatik ($4 \rightarrow 1$).

Suatu siklus Carnot dibentuk oleh empat proses, yaitu proses ekspansi isotermal, ekspansi adiabatik, kompresi isotermal, dan kompresi adiabatik, dengan keempat proses tersebut telah disajikan pada Gambar [2](#fig2). Terlihat pada contoh ini bahwa sumbu $p$ dan $V$ ujung kiri bawahnya bukan merupakan titik $(0, 0)$ sehingga proses-proses tersebut akan memotong kedua sumbu. Bila origin dari sumbu koordinat adalah $(0, 0)$ perpanjangan garis dari keempat proses tersebut tidak akan memotong kedua sumbu karena untuk proses isotermal $p \sim V^{-1}$ dan untuk proses adiabatik $p \sim V^{-\gamma}$.

### realistic diagram
Dengan menggunakan piranti lunak spreadsheet dapat dihasilkan digram siklus Carnot berikut ini.

![]({{ site.baseurl }}/assets/img/0/13/0136-c.png) \
Gambar <a name="fig3">3</a>. Diagram siklus Carnot realistik dengan origin sumbu koordinat adalah $(0, 0)$.

Dapat dilihat dari Gambar [3](#fig3) bahwa pilihan ini belum membuat diagram realistik menjadi lebih jelas, terutama agar dapat terbedakan proses isotermal dan proses adiabatik.

![]({{ site.baseurl }}/assets/img/0/13/0136-d.png) \
Gambar <a name="fig4">4</a>. Diagram siklus Carnot realistik dengan origin sumbu koordinat adalah $(0, 0)$ dan skala logaritmik pada kedua sumbu.

Alternatif lain adalah dengan menggunakan sumbu dengan skala logritmik seperti ditampilkan oleh Gambar [2](#fig2), yang sayangnya belum juga memberikan ilustrasi yang lebih jelas. Gambar [3](#fig3) dan [4](#fig4) dibuat dengan $n = 24.05581$, $p_1 = 2\times 10^5$, $T_1 = 2000$, $V_1 = 2$, $p_2 = 10^5$, $T_2 = 2000$, $V_2 = 4$, $p_3 = 1.77\times 10^4$, $T_3 = 1000$, $V_3 = 11.3135$, $p_4 = 3.54\times 10^4$, $T_4 = 1000$, $V_4 = 5.65675$, dan $\gamma = 5/3$.

![]({{ site.baseurl }}/assets/img/0/13/0136-e2.png) | ![]({{ site.baseurl }}/assets/img/0/13/0136-e1.png)

Gambar <a name="fig5">5</a>. Diagram siklus Carnot realistik dengan origin sumbu koordinat adalah $(0, 0)$ dan rentang tekanan-volume berbeda.

Pengubahan rentang tekanan dan volume juga belum memberikan gambar yang lebih jelas seperti pada Gambar [5](#fig5), yang bagian kiri dibuat dengan dibuat dengan $n = 1.20279$, $p_1 = 2\times 10^5$, $T_1 = 2000$, $V_1 = 0.1$, $p_2 = 10^5$, $T_2 = 2000$, $V_2 = 0.2$, $p_3 = 3.13\times 10^3$, $T_3 = 500$, $V_3 = 1.6$, $p_4 = 6.25\times 10^3$, $T_4 = 500$, $V_4 = 0.8$, dan $\gamma = 5/3$, serta bagian kanan dengan $n = 120.279$, $p_1 = 2\times 10^5$, $T_1 = 4000$, $V_1 = 20$, $p_2 = 10^5$, $T_2 = 4000$, $V_2 = 40$, $p_3 = 3.13\times 10^3$, $T_3 = 1000$, $V_3 = 320$, $p_4 = 6.25\times 10^3$, $T_4 = 1000$, $V_4 = 160$, dan $\gamma = 5/3$.

![]({{ site.baseurl }}/assets/img/0/13/0136-f2.png) | ![]({{ site.baseurl }}/assets/img/0/13/0136-f1.png)

Gambar <a name="fig6">6</a>. Diagram siklus Carnot realistik dengan origin sumbu koordinat adalah $(0, 0)$ dan perbedaan titik ketiga.

Perubahan titik $3$ belum juga memberikan ilustrasi yang lebih jelas, seperti ditunjukkan oleh Gambar [6](#fig6). Nomor-nomor keadaan telah diberikan pada Gambar [1](#fig1). Gambar [6](#fig6) bagian kiri dengan dibuat dengan $n = 1.20279$, $p_1 = 2\times 10^5$, $T_1 = 2000$, $V_1 = 0.1$, $p_2 = 10^5$, $T_2 = 2000$, $V_2 = 0.2$, $p_3 = 1.77\times 10^4$, $T_3 = 1000$, $V_3 = 0.56568$, $p_4 = 3.54\times 10^4$, $T_4 = 1000$, $V_4 = 0.28284$, dan $\gamma = 5/3$, serta bagian kanan dengan $n = 1.20279$, $p_1 = 2\times 10^5$, $T_1 = 2000$, $V_1 = 0.1$, $p_2 = 10^5$, $T_2 = 2000$, $V_2 = 0.2$, $p_3 = 3.13\times 10^3$, $T_3 = 500$, $V_3 = 1.6$, $p_4 = 6.25\times 10^3$, $T_4 = 500$, $V_4 = 0.8$, dan $\gamma = 5/3$.

### realistic but rather false
Sedikit eksperimen dilakukan untuk menggunakan perumusan yang berbeda menggunakan $\gamma = 4$, tanpa arti fisis yang benar, dengan tujuan agar kemiringan kurva adiabatik amat jauh lebih curam dari sebelumnya ketimbang kurva isotermal.

![]({{ site.baseurl }}/assets/img/0/13/0136-g.png) \
Gambar <a name="fig7">7</a>. Diagram siklus Carnot realistik dengan origin sumbu koordinat adalah $(0, 0)$ untuk $\gamma = 4$.

Dengan data-data berikut $n = 120.279$, $p_1 = 2\times 10^5$, $T_1 = 4000$, $V_1 = 20$, $p_2 = 10^5$, $T_2 = 4000$, $V_2 = 40$, $p_3 = 1.57\times 10^4$, $T_3 = 1000$, $V_3 = 63.496$, $p_4 = 3.15\times 10^4$, $T_4 = 1000$, $V_4 = 31.748$, dan $\gamma = 4$ Gambar [7](#fig7) dapat dibuat. Selanjutnya, bila tidak disebutkan sebagai gas monoatomik, mungkin hal ini, demi agar diperoleh gambar yang lebih jelas, masih dapat diterima.


## exer
1. Apa pembeda antara proses isotermal dan adiabatik pada digram yang bersifat ilustratif?
2. Dengan membandingkan kurva adiabatik pada Gambar [3](#fig3) dan [7](#fig7) apa pengaruh $\gamma$ terhadap kemiringan kurvanya?
3. Pada suatu proses adiabatik $pV^\gamma = c_{\rm adiabat}$. Tentukan bentuk dari $c_{\rm adiabat}$.
4. Suatu proses isotermal dapat pula dituliskan dalam bentuk $pV = c_{\rm isotherm}$. Bagaimana bentuk $c_{\rm isotherm}$?
5. Terdapat titik-titik tempat berpotongannya proses isotermal dan proses adiabatik sebagai bagian dari suatu siklus Carnot. Pada Gambar [2](#fig2) telah diberikan titik-titik $1$, $2$, $3$, dan $4$. Bagaimana hubungan antar variabel-variabel keadaan pada titik-titik tersebut?


## note
1. <a name="r01"></a>Novitrian, Khairul Basar, "Diskusi siklus Carnot", a groupd on WhatsApp , 0708, 8 Dec 2021,  url <https://chat.whatsapp.com/0XXx0x0XXxXX0XXXXXxxxX> [20211208].
2. <a name="r02"></a>XiSen Hou, "Carnot Cyle" in Physical & Theoretical Chemistry, Chemistry LibreTexts, 16 Aug 2020, url <https://chem.libretexts.org/@go/page/1962> [20211208].
3. <a name="r03"></a>Wikipedia contributors, "Carnot cycle", Wikipedia, The Free Encyclopedia, 29 October 2021, 03:29 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1052430929> [20211208].
4. <a name="r04"></a>Nancy Hall (ed.), "Ideal Carnot Cyle p-V diagram", GRC, National Aeronautics and Space Administration (NASA), 13 May 2021, url <https://www.grc.nasa.gov/www/k-12/airplane/carnot.html> [20211208].
5. <a name="r05"></a>Carl R. Nave, "Carnot Cyle", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/carnot.html> [20211208].
6. <a name="r06"></a>Robert F. Sekerka, "Second Law of Thermodynamics, Figure 3-1", Thermal Physics, 2015, url <https://www.sciencedirect.com/topics/mathematics/carnot-cycle> [20211208].
. <a name="r07"></a>"The Carnot Engine", Physics Key, 2020, url <https://www.physicskey.com/51/the-carnot-engine> [20211208].
8. <a name="r08"></a>Michael Fowler, "Heat Engines: the Carnot Cycle", Physics 152:  Heat and Thermodynamics, University of Virginia, Spring 2002, url <https://galileo.phys.virginia.edu/classes/152.mf1i.spring02/CarnotEngine.htm> [20211208].
9. <a name="r09"></a>Gaukhar Omashova, Roza Spabevoka, Kenzhekhan Kabylbekov, Nurila Saidullayeva, Pulat Saidakhmetov, Saltanat Djunusbekova, "Management and organization of computer laboratory work in physics education", Revista Espacios [Rev Espac], vol 38, no 45, p 35, 2017, url <https://www.revistaespacios.com/a17v38n45/17384535.html> [20211208]. 

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0136?src=hash&amp;ref_src=twsrc%5Etfw">#bug0136</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1468920999559057418?ref_src=twsrc%5Etfw">December 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## &nbsp;
[ideal gas law](0131.html)  &bull; [state, process, cycle](0132.html) &bull; [special processes](0133.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) proses adiabaik terlihat lebih curam dari proses isotermal; &nbsp;
2) semakin besar nilai $\gamma$ semakin curam kurvanya; &nbsp;
3) $c_{\rm adiabat} = nRT/V^{1-\gamma}$; &nbsp;
4) $c_{\rm isotherm} = nRT$; &nbsp;
5) variabel-variabel keadaan $p$, $V$, dan $T$ terhubung melalui $pV/T = nRT$.
</ans>
