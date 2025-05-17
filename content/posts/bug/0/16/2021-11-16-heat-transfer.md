---
layout: butir
authors: [viridi]
title: heat transfer
permalink: pages/0161
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["energy", "heat"]
date: 2021-11-20 22:02:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/16/2021-11-16-heat-transfer.md
twitter_username: 6unpnp
nodes: []
---
Transfer panas adalah gerakan atau aliran energi panas, yang sering digunakan dalam mendeskripsikan disipasi energi panas dari suatu lokasi ke lingkungan di sekitarnya [[1](#r01)]. Panas dapat ditransfer dari satu bagian sistem ke bagian lain melalui peristiwa konduksi, konveksi, radiasi, dan vaporisasi [[2](#r02)]. Masing-masing peristiwa memiliki mekanisme yang berbeda, seperti ada yang hanya melibatkan agitasi molekul, perpindahan partikel dalam sistem, keluarnya partikel dari sistem, atau tidak melibatkan partikel bahan.


## heat conduction
Dalam peristiwa konduksi panas ditransfer dari satu tempat ke tempat lain dalam sistem melalui agitasi molekul dalam bahan tanpa ada gerakan bahan secara keseluruhan. Panas akan dirambatkan dari bagian dengan temperatur lebih tinggi ke bagian lain dengan temperatur lebih rendah. Pada bagian bertemperatur lebih tinggi molekul-molekul memiliki laju lebih tinggi yang akan dibagikan ke molekul-molekul dengan laju lebih rendah pada bagian bertemperatur lebih rendah melalui tumbukan. Ilustrasi perambatan panas melalui peristiwa konduksi di dalam bahan secara jumlah besar (bulk) secara 1d diberikan pada Gambar [1](#fig1) berikut.

![]({{ site.baseurl }}/assets/img/0/16/0161-a1.png) \
Gambar <a name="fig1">1</a>. Rapat fluks energi lokal $q$ memiliki arah dari tempat bertemperatur lebih tinggi ke tempat dengan temperatur lebih rendah.

Hukum Fourier dalam bentuk 1d, yang banyak digunakan bagi berbagai aplikasi [[3](#r03)]

\begin{equation}\label{eqn-heat-conduction-fouries-law}
q_x = -\kappa \frac{dT}{dx} \approx -\kappa \frac{\Delta T}{\Delta x},
\end{equation}

dengan $q$ energi panas per satuan luas per satuan waktu atau rapat fluks energi lokal, $\kappa$ konduktivitas bahan, dan $T$ adalah temperatur. Selisih temperatur $\Delta T$ diperoleh dari $T(x + \Delta x) - T(x)$. Selanjutnya, dari warna pada Gambar [1](#fig1) terlihat bahwa bagian sebelah kanan bertemperatur lebih tinggi dari bagian sebelah kiri atau $T(x + \Delta x) > T(x)$ dan diperoleh bahwa $q_x < 0$, yang berarti bahwa kalor mengalir dari kanan (posisi $x + \Delta x$) ke kiri (posisi $x$).


## heat convection
Pada peristiwa ini terdapat asumsi, untuk memudahkan, seperti pada gas ideal, bahwa fluida akan bertambah volumenya $V$ dengan bertambahnya temperatur $T$ dan dengan massa molekul $m$ yang tetap, maka pada bagian yang terpanasi rapat massanya $\rho$ akan berkurang sehingga pada bagian tersebut molekul-molekul akan bergerak ke atas sambil membawa panas atau energi termal.

![]({{ site.baseurl }}/assets/img/0/16/0161-b.png) \
Gambar <a name="fig2">2</a>. Perbedaan temperatur dua tempat $T_H > T_C$ membuat terjadinya konveksi.

Panas dari pemanas $H$ membuat massa jenis fluida berkurang yang menyebabkan fluida bergerak naik, setelah dingin karena lingkungannya $T_C$ massa jenisnya kembali seperti semula dan bergerak turun karena ada bagian yang perlu diisi. Peristiwa konveksi ini digambarkan pada Gambar [2](#fig2). Secara sederhana dapat diungkapkan dengan [[2](#r02)]

\begin{equation}\label{eqn-heat-convection-0}
\frac{V}{T} = \frac{nR}{p} = c_{\rm conv},
\end{equation}

dengan $c_{\rm conv}$ adalah suatu konstanta, sehingga dapat dituliskan kembali

\begin{equation}\label{eqn-heat-convection-1}
V = c_{\rm conv} T.
\end{equation}

Bagian fluida yang berwarna biru memiliki temperatur $T_C$ dan volume molekul pada bagian tersebut adalah $V_C$ yang mengikuti Persamaan \eqref{eqn-heat-convection-1} dan massa jenis bagian tersebut adalah

\begin{equation}\label{eqn-heat-convection-2}
\rho_C = \frac{m}{V_C} = \frac{m}{c_{\rm conv} T_C}.
\end{equation}

Pada bagian yang terpanasi massa jenis fluida menjadi

\begin{equation}\label{eqn-heat-convection-3}
\rho_H = \frac{m}{V_H} = \frac{m}{c_{\rm conv} T_H}.
\end{equation}

Dengan $m$ bernilai tetap maka

\begin{equation}\label{eqn-heat-convection-4}
\rho_H < \rho_C
\end{equation}

karena $T_H > T_C$, yang sebagai akibatnya molekul-molekul fluida dengan rapat massa $\rho_C$ akan bergerak ke atas membawa energi termal karena lebih "ringan" dari molekul-molekul fluida dengan rapat massa $\rho_C$, yang menyebakan terjadi sirkulasi seperti pada Gambar [2](#fig2). Detil proses bagaimana bagian-bagian yang berbeda densitas akan bergerak sehingga tercapai kesetimbangan baru, bagian yang lebih rapat di bawah dan bagian yang lebih rengggang di atas, bukan bahasan pada materi ini.

Selain itu terdapat pula konveksi terpaksa, yang disebabkan oleh sumber luar seperti pompa, kipas, penyedot dan sebagainya, dan yang terjadi dengan sendirinya, yang dibedakan istilahnya menjadi konveksi alami.


## heat radiation
Radiasi panas, yang berbeda dengan radiasi partikel, adalah transfer energi internal dalam bentuk gelombang elektromagnetik, di mana untuk banyak benda di bumi radiasi ini berada pada daerah inframerad dalam spektrum gelombang elektromagnetik [[4](#r04)]. Hukum Stefan-Botlzmann menghubungkan antara laju aliran panas yang dipancarkan atau diserap obyek dan temperaturnya, dalam bentuk

\begin{equation}\label{eqn-stefan-boltzmann-law}
P = \epsilon \sigma A \left( T^4 - T_0^4 \right),
\end{equation}

dengan $P$ jumlah laju aliran panas dalam energi per satuan waktu, $\epsilon$ merupakan emisitivtas bernilai $0 - 1$, $\sigma$ konstanta Stefan yang bernilai $5.670 \times 10^{-8} \ {\rm W/m^2K^4}$, luas daerah pada obyek yang memancarkan atau menyerap radiasi termal, $T$ temperatur benda, dan $T_0$ temperatur lingkungan.

![]({{ site.baseurl }}/assets/img/0/16/0161-c.png) \
Gambar <a name="fig3">3</a>. Radiasi dipancarkan dari benda $1$ di sebelah kiri dan diserap oleh benda $2$ di sebelah kanan, dengan $T_1 > T_2 > T_0$

Ilustrasi bagaimana radiasi dapat dipancarkan oleh suatu benda dan diserap oleh bendan lain diberikan pada Gambar [3](#fig3). Umumnya digunakan asumsi bahwa pemancaran radiasi bersifat isotropik dengan perambatan berbentuk kulit bola. Permukaan sebuah bola berukuran $4 \pi \ \rm sr$, dengan $\rm sr$ adalah satuan steradian atau sudut padat (solid angle) [[5](#r05)]. Radiasi termal yang dipancarkan oleh sebagian permukaan benda $1$ berbentuk persegi dengan sisi angular $\theta$ adalah

\begin{equation}\label{eqn-heat-radiation-p-theta}
P_{\theta} = \frac{R_1^2 \theta^2}{A_1} P_{10},
\end{equation}

dengan radiasi total benda $1$ diberikan oleh Persamaan \eqref{eqn-stefan-boltzmann-law} dalam bentuk

\begin{equation}\label{eqn-heat-radiation-p-10}
P_{10} = \epsilon \sigma A_1 \left( T^4 - T_0^4 \right),
\end{equation}

di mana $A_1 = 4\pi R_1^2$ luas seluruh permukaan benda $1$. Luas permukaan benda $2$ yang menyerap radiasi dapat disederhanakan menjadi

\begin{equation}\label{eqn-heat-radiation-received-area-2}
A_{2, \rm recv} = 2\pi R_2^2,
\end{equation}

yang merupakan luas setengah bola berjari-jari $R_2$. Fraksi luas antara luas permukaan bola pada jarak $r$ dari benda $1$ dengan luas penyerap pada benda $2$ adalah

\begin{equation}\label{eqn-heat-radiation-received-area-2-fraction}
\frac{2\pi R_2^2}{r^2\theta^2},
\end{equation}

sehingga daya yang terserap oleh benda $2$ akibat radiasi benda $1$ adalah

\begin{equation}\label{eqn-heat-radiation-p-21}
\begin{array}{rcl}
P_{21}& = & \displaystyle \frac{2\pi R_2^2}{r^2 \theta^2} P_\theta \newline
& = & \displaystyle \left( \frac{2\pi R_2^2}{r^2 \theta^2} \right) \left( \frac{R_1^2 \theta^2}{2\pi R_1^2} \right) P_{10} \newline
& = & \displaystyle \left( \frac{2\pi R_2^2}{r^2 \theta^2} \right) \left( \frac{R_1^2 \theta^2}{4\pi R_1^2} \right) \cdot \newline
&& \epsilon \sigma (4\pi R_1^2) \left( T_1^4 - T_0^4 \right) \newline
& = & \displaystyle \epsilon \sigma \left( \frac{2\pi R_2^2}{r^2 \theta^2} \right) R_1^2 \theta^2 \left( T_1^4 - T_0^4 \right) \newline
P_{21}(r_{21}) & = & \displaystyle \epsilon \sigma \left( \frac{2\pi R_2^2 R_1^2}{r_{21}^2} \right) \left( T_1^4 - T_0^4 \right).
\end{array}
\end{equation}

Pada saat yang bersaamaan benda $2$ juga meradiasikan panas ke lingkungannya

\begin{equation}\label{eqn-heat-radiation-p-20}
P_{20} = \epsilon \sigma \left( 4\pi R_2^2 \right) \left( T_2^4 - T_0^4 \right).
\end{equation}

Dengan demikian total daya pada benda $2$ adalah

\begin{equation}\label{eqn-heat-radiation-p-2}
\begin{array}{rcl}
P_2 & = & \epsilon_2 \sigma \left( 4\pi R_2^2 \right) \left( T_2^4 - T_0^4 \right) \newline
&& \displaystyle -\epsilon_1 \sigma \left( \frac{2\pi R_2^2 R_1^2}{r_{21}^2} \right) \left( T_1^4 - T_0^4 \right).
\end{array}
\end{equation}

Persamaan \eqref{eqn-heat-radiation-p-2} menggambarkan panas yang diradiasikan oleh benda $2$, di mana suku pertama adalah emisi radiasi oleh benda ke lingkugannya dan suku kedua, yang bertanda negatif, adalah absorbsi oleh benda dari lingkungannya, termasuk benda $1$. Daya pada lingkungan akibat kedua benda adalah

\begin{equation}\label{eqn-heat-radiation-p-0}
P_0 = -\epsilon_1 \sigma \left( 4\pi R_1^2 \right) \left( T_1^4 - T_0^4 \right) - \epsilon_2 \sigma \left( 4\pi R_2^2 \right) \left( T_2^4 - T_0^4 \right),
\end{equation}

yang menggambarkan kontribusi benda $1$ dan $2$. Tanda negatif karena konvensi untuk positif dalah daya yang diemisikan, sedangkan lingkungan $T_0 < T_1 < T_2$ selalu menerima radiasi panas dari kedua benda.


## heat loss through vaporization
Transfer energi termal yang terkait dengan suatu perubahan fase merupakan suatu fenomena yang bernilai bagi perekayasa dalam merancang sistem untuk pendinginan elektronika, yang lebih umum digunakan melalui sistem tertutup, di mana penghilangan panas pada suatu bagian teraugmentasi oleh sifat vaporisasi dan kemudian panas ini dilepaskan pada bagian lain dalam sistem, saat uap yang berpindah ini mengembun [[6](#r06)]. Luas permukaan juga berpengaruh pada proses pendinginan melalui fenomena ini. Pada manusia, bila luas permukaan tubuh lebih besar, kehilangan massa tubuh tak-terasa dapat semakin besar, yang akan menginduksi lebih besar kehilangan panas akibat evaporasi melalui kulit [[7](#r07)]. Selain itu temperatur lingkungan juga berpengaruh, sebagaimana teramati pada sapi yang diberi perlakukan pembatasan air, yang menghasilkan bahwa penggunaan air untuk digunakan untuk kehilangan panas melalui vaporisasi yang mengurangi kehilangan air lewat urin dan feses lebih teramati pada temperatur $32 \ \rm^\circ C$ dibandingkan pada $18 \ \rm^\circ C$ [[8](#r08)]. Kehilangan panas tubuh lewat proses-proses "kering" seperti konduksi, konveksi, dan radiasi, disebut sebagai terasa (sensibel) atau Newtonian, dan selain itu panas dapat pula hilang lewat mekanisme evaporatif "basah" atau tak-terasa (insensibel) [[9](#r09)].


## advection
Umumnya dapat dibedakan ketiga mekanisme transfer panas sebelumnya yaitu konduksi, conveksi, dan radiasi, yang telah dibahas secara populer [[10](#r10)], dengan adveksi kadang dinyatakan cukup dengan sebagai suatu mekanisme lain transfer panas, di mana bahan yang panas bergerak bersama dengan fluida dengan kecepatan fluidanya [[11](#r11)]. Penjelasan lain bahwa adveksi akan terjadi bila terdapat bahan lain yang terlarut, jadi pada air yang dipanaskan hanya akan terjadi peristiwa konveksi, akan tetapi bila terlarut di dalamnya lanau (butiran yang berukuran antara pasir dan lempung) maka akan terjadi adveksi lanau dengan konveksi air [[12](#r12)]. Ada juga yang mengatakan bahwa adveksi merupakan bagian dari konveksi, yang lebih lugasnya bahwa bahwa konveksi merupakan efek gabungan dari konduksi dan adveksi [[13](#r13)]. Terdapat pula pernyataan bahwa adveksi adalah perpindahan suatu bahan melalui pergerakan secara keseluruhan (bulk motion), yang kadang disalahartikan dengan proses konveksi yang lebih meyelimuti, sehingga lebih dapat dikatakan bahwa adveksi membutuhkan arus dalam fluida, seperti di sungai atau dalam pipa, dan tak dapat terjadi dalam padatan, yang tidak melingkupi pergerakan bahan akibat difusi molekuler [[14](#r14)]. Dalam penerapannya, terkadang peristiwa perambatan panas, terutama di berbagai lokasi geologi dapat amat kompleks sehingga sulit untuk dimengerti, apakah adveksi atau konduksi misalnya [[15](#r15)].

![]({{ site.baseurl }}/assets/img/0/16/0161-d.png) \
Gambar <a name="fig4">4</a>. Sirkulasi alami yang terjadi karena dua mekanisme transfer panas, yaitu konveksi yang geraknya disebabkan perbedaan temperatur (kiri dan kanan) dan adveksi yang geraknya disebabkan gerak fluida karena perbedaan tekanan (atas dan bawah).

Walaupun tidak terlalu tepat, ilustrasi pada Gambar [4](#fig4) bisa sedikit menggambarkan perbedaan konveksi dan adveksi. Pada bagian kiri dan kanan fluida naik dan turun karena perbedaan densitas yang disebabkan oleh temperatur, dan pada bagian atas dan bawah fluida mengalir ke kanan dan kiri karena perbedaan tekanan. Pada bagian aliran horizontal ini panas mengikuti aliran fluida yang disebut sebagai peristiwa adveksi, sedangkan pada bagian aliran vertikal merupakan peristiwa konveksi karena disebabkan oleh perbedaan temperatur [[16](#r16)]. Yang perlu diingat adalah bukan arah aliran fluida horizontal dan vertikalnya, akan tetapi penyebab alirannya.

{% comment %}
<!--
url https://mycolor.space/gradient3.php?ori=to+right+top&hex=%23C00000&hex2=%2386A8E7&hex3=%23365F91&submit=submit [202111120].
-->
<div style="background-image: linear-gradient(to right top, #c00000, #dc2d5c, #dc63a3, #cb93d4, #c0bbec, #b7bee7, #b2c1e0, #b1c2d8, #92a8c6, #748fb4, #5677a3, #365f91); width: 300px; height: 200px;">&nbsp;</div>
{% endcomment %}

## exer
1. Perhatikan Persamaan \eqref{eqn-heat-conduction-fouries-law} dan Gambar [6](#fig6) berikut ini.

    ![]({{ site.baseurl }}/assets/img/0/16/0161-a2.png) \
    Gambar <a name="fig6">6</a>. Energi panas mengalir dari tempat bertemperatur lebih tinggi ($\color{#c00}{\blacksquare}$) ke tempat bertemperatur lebih rendah ($\color{#369}{\blacksquare}$).

    Apakah Persamaan \eqref{eqn-heat-conduction-fouries-law} tetap berlaku? Jelaskan dengan arah $q_x$.
2. Apakah ada sebutan lain besaran dengan satuan seperti $q_x$ pada Persamaan \eqref{eqn-heat-conduction-fouries-law}?
3. Apa yang terjadi bila pemanash $H$ pada Gambar [2](#fig2) diletakkan di tengah-tengah alas wadah? Kemanakah arus konveksi berputar?
4. Dengan memperhatikan Persaamaan \eqref{eqn-stefan-boltzmann-law}, apa arti bila nilai $P$ positif dan negatif?
5. Dengan melihat Persamaan \eqref{eqn-heat-radiation-p-2} dan \eqref{eqn-heat-radiation-p-0}, apakah untuk benda $1$ cukup dengan Persamaan \eqref{eqn-heat-radiation-p-10} atau akan juga menerima radiasi panas dari benda $2$?
6. Pada aktivitas saat berolahraga terdapat peristiwa kehilangan panas melalui mekanisme vaporasi. Apakah peristiwa tersebut?


## note
1. <a name="r01"></a>Anas Al-Homsi, Irene Ao, Jordan Hanania, James Jenden, Ashley Sheardown, Kailyn Stenhouse, Jason Donev, "Heat transfer", Energy Education, 15 Oct 2021, url <https://energyeducation.ca/encyclopedia/Heat_transfer> [20211116].
2. <a name="r02"></a>Carl R. Nave, "Heat Transfer", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/heatra.html> [20211116].
3. <a name="r03"></a>Wikipedia contributors, "Thermal conduction", Wikipedia, The Free Encyclopedia, 4 November 2021, 04:07 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1053477806> [20211116].
4. <a name="r04"></a>Glenn Elert, "Radiation", The Physics Hypertextbook, 2021, url <https://physics.info/radiation/> [20211118].
5. <a name="r05"></a>"Steradian", MathIsFun, 2017, url <https://www.mathsisfun.com/geometry/steradian.html> [20211119].
6. <a name="r06"></a>Jim Wilson, "Heat of Vaporization", Electronics Cooling, 1 Aug 2008, url <https://www.electronics-cooling.com/2008/08/heat-of-vaporization/> [20211119].
7. <a name="r07"></a>Dahee Jung, Dami Kim, Joonhee Park, Joo Young Lee, "Greater body mass index is related to greater self-identified cold tolerance and greater insensible body mass loss", Journal of Physiological Anthropology, vol. 35, no. 1, p. 16, Aug 2016, url <https://dx.doi.org/10.1186/s40101-016-0105-7>.
8. <a name="r08"></a>S. M. Seif, H. D. Johnson, L. Hahn, "Environmental Heat and Partial Water Restriction Effects on Body Fluid Spaces, Water Loss, Body Temperature, and Metabolism of Holstein Cows", Journal of Dairy Science, vol. 56, no. 5, pp. 581-586, May 1973, url <https://doi.org/10.3168/jds.S0022-0302(73)85222-1>.
9. <a name="r09"></a>Andrej A. Romanovsky, "Thermoregulation: From Basic Neuroscience to Clinical Neurology Part I", Handbook of Clinical Neurology, vol. 156, 2018, pp. 3-43, url <https://doi.org/10.1016/B978-0-444-63912-7.00001-1>
10. <a name="r10"></a>"What’s the Difference Between Conduction, Convection, and Radiation?", Machine Design, 31 Oct 2015, url <https://www.machinedesign.com/learning-resources/whats-the-difference-between/document/21834474/x> [20211120].
11. <a name="r11"></a>"Modes of Heat Transfer Conduction, Convection, Advection and Radiation", Mecholic, url <https://www.mecholic.com/2021/05/modes-of-heat-transfer.html> [20211120].
12. <a name="r12"></a>John Reenie, "Answer to 'What exactly is the difference between advection and convection?'", Physics Stack Exchange, 27 Apr 2012, edited by Ooker at 6 Dec 2015, url <https://physics.stackexchange.com/q/24494> [20211120].
13. <a name="r13"></a>Arnab Lahiri, "What is the difference between convection and advection?", Quora, 13 May 2018, url <https://www.quora.com/What-is-the-difference-between-convection-and-advection> [20211120].
14. <a name="r14"></a>Nick Connor, "What is Advection – Heat Transport – Definition", Thermal Engineering, 22 May 2019, url <https://www.thermal-engineering.org/what-is-advection-heat-transport-definition/> [20211120].
15. <a name="r15"></a>Michael Jobmann, Christoph Clauser, "Head advection versus conduction at the KTB: possible reasons for vertical variations in heat-flow density", Geophysical Journal International, vol. 119, no. 1, pp. 44-68, Oct 1994, url <https://doi.org/10.1111/j.1365-246X.1994.tb00912.x>.
16. <a name="r16"></a>"Advection and Convection", Science Pickle, 2021, url <https://sciencepickle.com/earth-systems/energy/advection-and-convection/> [20211120].


## &nbsp;
[heat](0160.html) &bull; [heat capacity of gas](0135.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\displaystyle q_x = -\kappa \frac{\Delta T}{\Delta x} = -\kappa \frac{T(x + \Delta x) - T(x)}{\Delta x}$ $\displaystyle = -\kappa \frac{ - \|\Delta T\|}{\Delta t} = \kappa \frac{\|\Delta T\|}{\Delta t} > 0$; &nbsp;
2) intensitas; &nbsp;
3) dimungkinakan terjadi dua arus ke kiri dan kanan dengan pola yang sama ke atas lalu berputar ke bawah; &nbsp;
4) $P > 0$ benda meradiasikan panas karena $T > T_0$ dan sebaliknya $P < 0$ benda menyerap panas karena $T < T_0$; &nbsp;
5) cukup karena radiasi benda $1$ ke $2$ dapat dianggap kecil; &nbsp;
6) berkeringat, panas badan terambil saat menguapkan keringat; &nbsp;
</ans>
