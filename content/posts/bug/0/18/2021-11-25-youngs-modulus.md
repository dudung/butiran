---
layout: butir
authors: [viridi]
title: young's modulus
permalink: pages/0181
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["elasticity", "hooke's law", "elastic modulus", "young's modulus"]
date: 2021-11-27 11:45:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/18/2021-11-25-youngs-modulus.md
twitter_username: 6unpnp
nodes: []
---
Modulus Young suatu bahan merupakan sifat mendasar setiap bahan yang tidak dapat diubah, akan tetapi bergantung pada temperatur dan tekanan, dan merupakan inti dari sifat kekuatan suatu bahan [[1](#r01)]. Kontanta numerik ini mendeskripsikan sifat elastik suatu bahan padatan saat mengalami penarikan atau penekanan hanya dalam satu arah, biasanya pada arah panjang atau dimensi yang paling besar dari suatu bahan, dan kadang disebut pula sebagai modulus elastisitas [[2](#r02)]. Modulus ini didefinsikan sebagai rasio dari tegangan tarik (tensile stress) dan regangan tarik [[3](#r03)]. Nilai modulus Young secara umum bernilai begitu besar sehingga tidak dinyatakan dalam pascal akan tetapi dalam gigapascal atau $\rm GPa$ [[4](#r04)], seperti dari sekitar $0.01 - 0.1 \ \rm GPa$ untuk karet dengan regangan kecil sampai $1220 \ \rm GPa$ untuk intan [[5](#r05)]. Penguran modulus elastik dapat dilakukan dengan menggunakan cara statis dan dinamis [[6](#r06)].


## modulus
Modulus Young $E$ diperoleh melalui

\begin{equation}\label{eqn-youngs-modulus}
E = \frac{\sigma}{\varepsilon},
\end{equation}

yang memerlukan tegangan tarik $\sigma$

\begin{equation}\label{eqn-tensile-stress}
\sigma = \frac{F}{A}
\end{equation}

dan regangan tarik $\varepsilon$

\begin{equation}\label{eqn-tensile-strain}
\varepsilon = \frac{\Delta x}{L_0},
\end{equation}

dengan $F$ gaya tarik, $A$ luas penampang, $\Delta x$ pertambahan panjang, dan $L_0$ panjang mula-mula. Pengukuran modulus Young umumnya dilakukan dengan penarikan dikarenakan lebih mudah ketimbang penekanan. Seharusnya kedua proses memberikan hasil yang sama sebagaimana diilustrasikan pada Gambar [1](#fig1).

![]({{ site.baseurl }}/assets/img/0/18/0181-a.png) \
Gambar <a name="fig1">1</a>. Benda bertambah panjang saat ditarik (kiri), panjang mula-mula (tengah), dan bertambah pendek saat ditekan (kanan), sehingga $L_2 > L_0 > L_1$.

Walaupun proses penarikan lebih umum dalam mengukur modulus Young $E$, akan tetapi menurut perumusan pada Persamaan \eqref{eqn-youngs-modulus} pemberian penarikan atau penekanan seharusnya memberikan hasil yang sama, walau yang kedua umumnya lebih sulit dalam penerapan teknisnya saat pengukuran. Ilustrasi bahwa kedua proses akan memberikan hasil yang sama secara teori diberikan pada Gambar [1](#fig1).


## values of e
Beberapa nilai modulus Young diberikan pada tabel berikut.

Tabel <a name="tab1">1</a>. Beberapa nilai modulus Young, yield strength, dan ultimate strength [[5](#r05)].

| Bahan | $E$ <br> ($\rm GPa$) | $\sigma_u$ <br> ($\rm MPa$) | $\sigma_y$ <br> ($\rm MPa$)
:- | :-: | :-: | :-:
ABS plastics | 1.4 - 3.1 | 40
Acrylic | 3.2 | 70 |
Aluminium | 69 | 110 | 95
Aluminum Bronze 120 | |
Copper | 117 |220 |70
Bronze | 96 - 120
Cadmium | 32 | |
Gold | 74 | |
Granite | 52 | |
Graphene | 1000 | |
Grey Cast Iron | 130 | |
Glass | 50 - 90 |50 (c) |
Iron | 210 | |
Lead | 13.8 | |
Nickel | 170 | |	 
Nickel Silver |128 | |
Nickel Steel | 200 | |
Nylon-6 | 2 - 4 | 45 - 90 | 45
Platinum | 147 | |
Rubber (st) |	0.01 - 0.1 | |
Silver | 72 | |
Steel, stainless AISI 302 |	180 |	860 |	502
Tungsten (W) | 400 - 410 | |
Tungsten Carbide (WC) | 450 - 650 | |

st: small strain (regangan kecil), c: compression (penekanan).

Selain penggunaaan $E$ untuk modulus Young, $\sigma_y$ untuk yield stress, dan $\sigma_u$ untuk ultimate strength [[7](#r07)] pada Tabel [1](#tab1), dapat pula digunakan $Re$ untuk yield stress, dan $Rm$ untuk ultimate strength [[8](#r08)].


## experiment
Dalam experimen, umumnya $F$ diberikan dalam bentuk penarikan oleh suatu alat atau dengan menggantungkan suatu benda dengan massa tertentu $m$. Selanjutnya diukur pertambahan panjang $\Delta x$ untuk setiap penambahan massa $\Delta m$. Pada pelaksanaannya pengukuran $\Delta x$ tidak semudah seperti terlihat pada Gambar [1](#fig1) yang hanya menggunakan satu kawat, kadang diperlukan juga dua kawat dengan salah satu kawat sebagai pembanding [[9](#r09)].

Dari hasil yang diperoleh dapat dibuat grafik antara tegangan tarik $\sigma$ dengan regangan tarik $\varepsilon$ untuk melihat apakah suatu bahan menunjukkan elastisitas [[10](#r10)]. Dan seringkali terjadi bahwa hasil eksperiman menghasilkan nilai yang amat jauh dengan data yang diberikan dari buku rujukan [[11](#r11)].


## artificial data
Sejumlah data buatan disajikan untuk menjadi bahan ilustrasi dalam mementukan modulus Young melalui eksperimen uji tarik.

Tabel <a name="tab2">2</a>. Beberapa nilai modulus Young $E$ dan mass jenis $\rho$ beberapa bahan.

| Bahan | $E$ <br> ($\rm GPa$) | $\rho$ <br> ($\rm g/cm^3$)
:- | :-: | :-:
Aluminium | 69 | 2.7
Copper | 117 | 8.96
Bronze | 100 | 8.73
Iron | 210 | 7.87
Lead | 13.8 | 11.3
Nickel | 170 | 8.90 
Silver | 72 | 10.5
SS 302 |	180 | 7.9
Tungsten | 405 | 19.3

Terdapat beberapa gulung kawat yang panjangnya sekitar $50 \ \rm m$ pada tiap gulungnya. Massa setiap gulung, dalam kilogram, adalah sebagai berikut.

Tabel <a name="tab3">3</a>. Massa gulungan kawat dengan panjang $50 \rm m$ yang berdiameter $2 \rm mm$.

$\rm M1$ | $\rm M2$ | $\rm M3$ | $\rm M4$ | $\rm M5$ | $\rm M6$ | $\rm M7$ | $\rm M8$ | $\rm M9$
0.42 | 1.41 | 1.37 | 1.24 | 1.78 | 1.40 | 1.65 | 1.24 | 3.03

Kode bahan diberikan sebagai $\rm M1 - M9$. Setiap bahan diuji tarik dengan salah satu metode pengukuran elastisitas untuk diperoleh modulus Youngnya. Dari hasil pengukuran dapat dibuat grafik antara tegangan tarik $\sigma$ dan regangan tarik $\varepsilon$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b1.png) \
Gambar <a name="fig2">2</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M1$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b2.png) \
Gambar <a name="fig3">3</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M2$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b3.png) \
Gambar <a name="fig4">4</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M3$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b4.png) \
Gambar <a name="fig5">5</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M4$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b5.png) \
Gambar <a name="fig6">6</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M5$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b6.png) \
Gambar <a name="fig7">7</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M6$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b7.png) \
Gambar <a name="fig8">8</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M7$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b8.png) \
Gambar <a name="fig9">9</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M8$.

![]({{ site.baseurl }}/assets/img/0/18/0181-b9.png) \
Gambar <a name="fig10">10</a>. Kurva tegangan tarik $\sigma$ terhadap regangan tarik $\varepsilon$ untuk bahan $\rm M9$.

Dari Gambar [2](#fig2) - [10](#fig10) dengan menggunakan persamaan

\begin{equation}\label{eqn-stress-strain-e}
\sigma = E \varepsilon + {\rm err},
\end{equation}

dengan $\rm err$ adalah kesalahan, di mana hasil yang baik konstanta ini seharusnya bernilai nol. Dalam beberapa aplikasi untuk menghasilkan kurva regresi linier sering kali ditampilkan secara otomatis garis yang mengikuti persamaan

\begin{equation}\label{eqn-linear-regression}
y = ax + b,
\end{equation}

yang dalam hal ini $y \equiv \sigma$, $a \equiv E$, $x \equiv \varepsilon$, dan $b \equiv \rm err$ agar sesuai dengan Persamaan \eqref{eqn-stress-strain-e}.

### e-&rho; relation
Secara empirik dapat dibuah hubungan antara modulus Young $E$ dan rapat massa $\rho$ untuk beberapa jenis bahan, yang diberikan hanya sebagai ilustrasi.

![]({{ site.baseurl }}/assets/img/0/18/0181-c.png) \
Gambar <a name="fig11">11</a>. Kurva antara modulus Young $E$ dan rapat massa $\rho$ untuk berbagai jenis bahan. 

Terlihat bahwa untuk bahan-bahan yang disampaikan tidak terdapat satu hubungan yang linier antara modulus Young $E$ dan rapat massa $\rho$ dan dapat dipisahkan dalam dua buah kelompok sehingga terdapat hubungan linier seperti diberikan pada Gambar [11](#fig11). Dalam kelompok pertama ($\color{#07c}{\square}$) semakin besar $\rho$ akan semakin besar $E$, sedangkan dalam kelompok kedua ($\color{#c00}{\Large \circ}$) semakin besar $\rho$ akan semakin kecil $E$. Jumlah bahan untuk kelompok pertama adalah tiga dan kelompok kedua adalah enam.


## exer
1. Dengan melihat Persamaan \eqref{eqn-youngs-modulus} dan Gambar [1](#fig1) modulus Young $E$ seharusnya dapat diperoleh dengan menarik atau menekan suatu bahan uji. Mengapa lebih sering digunakan cara penarikan?
2. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [2](#fig2), tentukanlah jenis bahan $\rm M1$ menurut Tabel [2](#tab2).
3. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [3](#fig2), tentukanlah jenis bahan $\rm M2$ menurut Tabel [2](#tab2).
4. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [4](#fig4), tentukanlah jenis bahan $\rm M3$ menurut Tabel [2](#tab2).
5. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [5](#fig5), tentukanlah jenis bahan $\rm M4$ menurut Tabel [2](#tab2).
6. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [6](#fig6), tentukanlah jenis bahan $\rm M5$ menurut Tabel [2](#tab2).
7. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [7](#fig7), tentukanlah jenis bahan $\rm M6$ menurut Tabel [2](#tab2).
8. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [8](#fig8), tentukanlah jenis bahan $\rm M7$ menurut Tabel [2](#tab2).
9. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [9](#fig9), tentukanlah jenis bahan $\rm M8$ menurut Tabel [2](#tab2).
10. Dengan menggunakan informasi dari Tabel [3](#tab3) dan Gambar [10](#fig10), tentukanlah jenis bahan $\rm M9$ menurut Tabel [2](#tab2).
11. Apakah bahan dengan $E$ besar selalu memiliki $\rho$ besar pula? Gunakan Tabel [2](#tab2) atau Gambar [11](#fig11) bila diperlukan.


## note
1. <a name="r01"></a>Jay Yedinak, "Young's Modulus", Bio-Materials, Material Science Engineering, University of Washington, 2004, url <https://depts.washington.edu/matseed/mse_resources/Webpage/Biomaterials/young's_modulus.htm> [20211125].
2. <a name="r02"></a>The Editors of Encyclopaedia Britannica, Adam Augustyn, Erik Gregersen, William L. Hosch, Gloria Lotha, Grace Young, "Young's modulus", Encyclop&aelig Britannica, 3 Jul 2019, url <https://www.britannica.com/science/Youngs-modulus> [20211125].
3. <a name="r03"></a>"Young's modulus", Chemistry and Physics A Level resources for practical assessments, University of Birmingham, United Kingdom, 2021, url <https://www.birmingham.ac.uk/teachers/study-resources/stem/Physics/youngs-modulus.aspx> [20211125].
4. <a name="r04"></a>Wikipedia contributors, "Young's modulus", Wikipedia, The Free Encyclopedia, 8 November 2021, 21:25 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1054235526> [20211125].
5. <a name="r05"></a>"Young's Modulus, Tensile Strength and Yield Strength Values for some Materials", The Engineering ToolBox, 2003, url <https://www.engineeringtoolbox.com/young-modulus-d_417.html> [20211125].
6. <a name="r06"></a>J. D. Lord, R. Morrell, "Elastic Modulus Measurement", A National Measurement Good Practice Guide, no. 98, National Physical Laboratory, 2006, url <https://www.npl.co.uk/special-pages/guides/gpg98_elastic.aspx> [20211125].
7. <a name="r07"></a>Deborah Calvin, John Parsons, "Yield Strength Formula and Symbol", Study.com, 15 Oct 2021, url <https://study.com/learn/lesson/what-is-yield-stress-formula.html> [20211126].
8. <a name="r08"></a>G. Pluvinage, "Fracture and Fatigue Emanating from Stress Concentrators", Springer, Kindle, 2003 edition, May 2007, url <https://isbnsearch.org/isbn/9781402026126>, in List of symbols page url <https://link.springer.com/content/pdf/bbm%3A978-1-4020-2612-6%2F1.pdf> [20211126].
9. <a name="r09"></a>John Vagabond, "Measuring Young’s Modulus (2). Properly", Physics and Chemistry for IG and A level, 23 Oct 2012, url <https://esfsciencenew.wordpress.com/2012/10/23/measuring-youngs-modulus-properly-ym-2/> [20211125]. 
10. <a name="r10"></a>Barbara Mascareno, "How to Calculate Young's Modulus", Sciencing, 25 Jun 2018, url <https://sciencing.com/how-to-calculate-youngs-modulus-12751765.html> [20211125].
11. <a name="r11"></a>"Candidate 9 evidence", Project 2019, Adv Higher Physics, 2019, url <https://www.understandingstandards.org.uk/AdvHigher_images/physics/PhysicsAdvHProject2019bCandidate9.pdf> [20211126].


{% comment %}
1. <a name="r01"></a>The Editors of Encyclopaedia Britannica, Darshana Das, Erik Gregersen, William L. Hosch, Emily Rodriguez, Grace Young, "Elasticity", Encyclop&aelig;dia Britannica, 6 May 2021, url <https://www.britannica.com/science/elasticity-physics> [20211124].
2. <a name="r02"></a>Glenn Elert, "Elasticity", The Physics Hypertextbook, 2021, url <https://physics.info/elasticity/> [20211124].
3. <a name="r03"></a>Samuel J. Ling, Jeff Sanny, Bill Moebs, Contributing Authors, "Elasticity and Plasticity", University Physics, OpenStax, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/4044> [20211124].
4. <a name="r04"></a>Carl R. Nave, "Periodic Motion", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/permot.html> [20211124].
5. <a name="r05"></a>Wikipedia contributors, "Elastic modulus", Wikipedia, The Free Encyclopedia, 23 February 2021, 22:14 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1008553603> [20211124].
6. <a name="r06"></a>"bulk modulus", Tr-ex.me, url <https://tr-ex.me/translation/english-indonesian/bulk+modulus?search=bulk+modulus> [20211124].


7. <a name="r07"></a>Matt Williams, "What is Hooke's Law?", Phys.org, 16 Feb 2015, url <https://phys.org/news/2015-02-law.html> [20211124].
{% endcomment %}


## &nbsp;
[elasticity](0180.html) &bull; [shear modulus](0182.html) &bull; [bulk modulus](0183.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) lebih mudah penerapannya; &nbsp;
2) M1 = Al; &nbsp;
3) M2 = Cu; &nbsp;
4) M3 = CuSn; &nbsp;
5) M4 = Fe; &nbsp;
6) M5 = Pb; &nbsp;
7) M6 = Ni; &nbsp;
8) M7 = Ag; &nbsp;
9) M8 = SS302; &nbsp;
10) M9 = W; &nbsp;
11) tidak selalu demikian; &nbsp;
</ans>


{% comment %}
{% endcomment %}
