---
layout: post
authors: [viridi]
title: lin chrg e field rect loop
permalink: pages/0342
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "charge distribution", "continue", "line charge", "electric field", "rectangular loop"]
date: 2022-01-09 10:12:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/34/2022-01-07-lin-chrg-e-field-rect-loop.md
twitter_username: 6unpnp
nodes: []
---
Saat membicarakan loop berbentuk segiempat, umumnya terkait dengan ggl induksi [[1](#r01)], gaya dan torsi magnetik [[2](#r02)], atau medan magnetik yang disebabkannya [[3](#r03)]. Bagaimana bila loop segiempat ini terbentuk dari muatan garis? Apakah menarik untuk dibahas? Setidaknya bahasan ini dapat digunakan untuk melatih pemanfaatan rumusan medan listrik yang disebabkan oleh muatan garis dengan panjang berhingga.


## formula
Terdapat dua formula terkait dengan medan listrik yang disebabkan oleh muatan garis berbentuk kawat lurus dengan panjang berhingga. Pembedaan didasarkan pada posisi titik amat terhadap segmen garis [[4](#r04)].

### lies to the side
Posisi titik amat $\rm P$ dapat berada pada sisi kiri atau kanan suatu segmen garis yang merupakan muatan garis.

![]({{ site.baseurl }}/assets/img/0/34/0342-a.png) \
Gambar <a name="fig1">1</a>. Titik amat $\rm P$ untuk menghitung medan listrik $\vec{E}$ terletak pada sisi suatu segmen garis.

Medan listrik pada arah tegak lurus panjang kawat diberikan oleh

\begin{equation}\label{eqn:Eper-line-charge-lies-to-the-side}
E_{\perp} = \frac{k\lambda}{H} \left( \frac{B_2}{\sqrt{H^2 + B_2^2}} + \frac{B_1}{\sqrt{H^2 + B_1^2}} \right)
\end{equation}

dan pada arah sejajar kawat diberikan oleh

\begin{equation}\label{eqn:Epar-line-charge-lies-to-the-side}
E_{\parallel} = \frac{k\lambda}{H} \left( \frac{H}{\sqrt{H^2 + B_2^2}} - \frac{H}{\sqrt{H^2 + B_1^2}} \right),
\end{equation}

yang berlaku untuk orientasi kawat ke arah manapun.

### lies beyond
Selain kondisi sebelumnya, posisi titik amat $\rm P$ dapat pula berada jauh di luar segmen garis atau berada pada sisi garis yang merupakan perpanjangan segmen garis.

![]({{ site.baseurl }}/assets/img/0/34/0342-b.png) \
Gambar <a name="fig2">2</a>. Titik amat $\rm P$ untuk menghitung medan listrik $\vec{E}$ terletak jauh di luar suatu segmen garis.

Medan listrik pada arah tegak lurus panjang kawat diberikan oleh

\begin{equation}\label{eqn:Eper-line-charge-lies-beyond-the-side}
E_{\perp} = -\frac{k \lambda}{H} \left( \frac{B_3}{\sqrt{B_3^2 + H^2}} - \frac{B_1 + B_3}{\sqrt{(B_1 + B_3)^2 + H^2}} \right),
\end{equation}

dan pada arah sejajar kawat diberikan oleh

\begin{equation}\label{eqn:Epar-line-charge-lies-beyond-the-side}
E_{\parallel} = \frac{k \lambda}{H} \left( \frac{H}{\sqrt{B_3^2 + H^2}} - \frac{H}{\sqrt{(B_1 + B_3)^2 + H^2}} \right),
\end{equation}

yang berlaku umum untuk berbagai orientasi kawat.

### more general
Kaitan keempat persamaan sebelumnya dapat ditabelkan sebagai berikut

Tabel <a name="tab1">1</a>. Rumusan medan listrik, $E_{\perp}$ dan $E_{//}$, untuk titik di sisi dan di luar suatu segmen garis yang merupakan muatan garis.

Titik | $B_1$ | $B_2$ | $B_3$ |$E_{\perp}$ | $E_{\parallel}$
:-: | :-: | :-: | :-: | :-: | :-:
di sisi | $> 0$ | $>0$ | $0$ | \eqref{eqn:Eper-line-charge-lies-to-the-side} | \eqref{eqn:Epar-line-charge-lies-to-the-side}
di luar | $> 0$ | $0$ | $>0$ | \eqref{eqn:Eper-line-charge-lies-beyond-the-side} | \eqref{eqn:Epar-line-charge-lies-beyond-the-side}

Dengan demikian, menggunakan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side}, \eqref{eqn:Epar-line-charge-lies-to-the-side}, \eqref{eqn:Eper-line-charge-lies-beyond-the-side}, dan \eqref{eqn:Epar-line-charge-lies-beyond-the-side} dapat dihitung medan listrik pada sembarang titik di dalam ataupun di sekitar loop berbentuk persegi pada bidang yang sama dengan bidang loop tersebut.


## outside rectangular loop
Suatu titik $\rm P$ berada di luar suatu loop segiempat yang merupakan empat buat muatan garis dengan rapat muatan linier $\lambda$ yang bersifat seragam sehingga

\begin{equation}\label{eqn:rect-loop-charge-density-uniform}
\lambda = \frac{+Q}{L},
\end{equation}

dengan $L$ adalah panjang muatan garis atau keliling loop segiempat, yang bila memiliki lebar alas $B$ dan tinggi $H$, kelilingnya akan menjadi

\begin{equation}\label{eqn:rect-loop-circumference}
L = 2 (H + B),
\end{equation}

di mana ilustrasi loop segiempat ini diberikan pada Gambar [3](#fig3).

![]({{ site.baseurl }}/assets/img/0/34/0342-c.png) \
Gambar <a name="fig3">3</a>. Loop segiempat dengan rapat muatan linier $\lambda$ dan titik amat $\rm P$ di mana akan ditentukan medan listriknya $\vec{E}$.

Pada jarak horisontal $b$ dan vertikal $h$ dari sisi kanan loop terdapat titik $\rm P$ tempat di mana medan listrik $\vec{E}$ ingin dihitung. Untuk itu perlu terlebih dahulu dicari kontribusi dari masing-masing sisi kiri, atas, kanan, dan bawah, untuk kemudian dijumlahkan. Untuk masing-masing sisi akan digunakan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side}, \eqref{eqn:Epar-line-charge-lies-to-the-side}, \eqref{eqn:Eper-line-charge-lies-beyond-the-side}, dan \eqref{eqn:Epar-line-charge-lies-beyond-the-side}, yang definisi tegak lurus dan sejajarnya dapat berbeda.

### due to left edge
Kontribusi sisi kiri terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-d-left.png) \
Gambar <a name="fig4">4</a>. Sisi kiri bermuatan $+Q_1$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{1\perp}$ dan bagian paralel $E_{1\parallel}$ terhadap segmen kawat bermuatan $+Q_1$ pada sisi kiri loop segiempat yang diilustrasikan pada Gambar [4](#fig4), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side} dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.

### due to top edge
Kontribusi sisi atas terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-d-top.png) \
Gambar <a name="fig5">5</a>. Sisi atas bermuatan $+Q_2$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{2\perp}$ dan bagian paralel $E_{2\parallel}$ terhadap segmen kawat bermuatan $+Q_2$ pada sisi atas loop segiempat yang diilustrasikan pada Gambar [5](#fig5), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-beyond-the-side}, dan \eqref{eqn:Epar-line-charge-lies-beyond-the-side}.

### due to right edge
Kontribusi sisi kanan terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-d-right.png) \
Gambar <a name="fig6">6</a>. Sisi kanan bermuatan $+Q_3$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{3\perp}$ dan bagian paralel $E_{3\parallel}$ terhadap segmen kawat bermuatan $+Q_3$ pada sisi kanan loop segiempat yang diilustrasikan pada Gambar [6](#fig6), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side} dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.

### due to bottom edge
Kontribusi sisi bawah terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-d-bottom.png) \
Gambar <a name="fig7">7</a>. Sisi bawah bermuatan $+Q_4$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{4\perp}$ dan bagian paralel $E_{4\parallel}$ terhadap segmen kawat bermuatan $+Q_4$ pada sisi bawah loop segiempat yang diilustrasikan pada Gambar [7](#fig7), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-beyond-the-side}, dan \eqref{eqn:Epar-line-charge-lies-beyond-the-side}.

### due to all edges
Total medan listrik di titik $\rm P$ akibat akibat loop segiempat adalah penjumlahan dari kontribusi keempat sisi yang masing-masing telah dibahas sebelumnya. Perlu diperhatikan bahwa istilah tegak lurus dan sejajar pada suatu sisi dapat berbeda dengan pada sisi lain. Sebagai contoh dapat diambil sisi tegak dengan tinggi $H$ sebagai acuan. Dengan demikian total medan listrik pada titik amat $\rm P$ akibat kontribusi keempat sisi dari loop segimepat pada arah tegak lurus sisi tegak adalah

\begin{equation}\label{eqn:total-outside-electric-field-perpendicular-height}
E_{\perp H} = E_{1\perp} + E_{2\parallel} + E_{3\perp} + E_{4\parallel}
\end{equation}

dan pada arah sejajar sisi tegak adalah

\begin{equation}\label{eqn:total-outside-electric-field-parallel-height}
E_{\parallel H} = E_{1\parallel} + E_{2\perp} + E_{3\parallel} + E_{4\perp},
\end{equation}

dengan masing-masing $E_{n\perp}$ dan $E_{n\parallel}$, $n = 1, 2, 3, 4$, akan menggunakan satu dari Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side}, \eqref{eqn:Epar-line-charge-lies-to-the-side}, \eqref{eqn:Eper-line-charge-lies-beyond-the-side}, dan \eqref{eqn:Epar-line-charge-lies-beyond-the-side}.


## inside rectangular loop
Bila titik amat $\rm P$ terletak di dalam loop segiempat maka cukup digunakan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side} dan \eqref{eqn:Epar-line-charge-lies-to-the-side} untuk menghitung kontribusi medan listrik dari keempat sisi.

![]({{ site.baseurl }}/assets/img/0/34/0342-e.png) \
Gambar <a name="fig8">8</a>. Loop segiempat dengan rapat muatan linier $\lambda$, muatan total $+Q$, lebar dasar $B$, dan tinggi $H$, serta titik amat $\rm P$, yang berada di dalam loop, tempat di mana akan ditentukan medan listriknya $\vec{E}$.

Mirip seperti kasus untuk medan listrik akibat loop segiempat untuk titik amat $\rm P$ di luar loop, untuk di dalam loop pun perlu dihitung kontribusi dari semua sisi segiempat, yaitu sisi kiri, atas, kanan, dan bawah.

### due to left edge
Kontribusi sisi kiri terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-f-left.png) \
Gambar <a name="fig9">9</a>. Sisi kiri bermuatan $+Q_1$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{1\perp}$ dan bagian paralel $E_{1\parallel}$ terhadap segmen kawat bermuatan $+Q_1$ pada sisi kiri loop segiempat yang diilustrasikan pada Gambar [4](#fig4), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side} dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.

### due to top edge
Kontribusi sisi atas terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-f-top.png) \
Gambar <a name="fig10">10</a>. Sisi atas bermuatan $+Q_2$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{2\perp}$ dan bagian paralel $E_{2\parallel}$ terhadap segmen kawat bermuatan $+Q_2$ pada sisi atas loop segiempat yang diilustrasikan pada Gambar [5](#fig5), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side}, dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.

### due to right edge
Kontribusi sisi kanan terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-f-right.png) \
Gambar <a name="fig11">11</a>. Sisi kanan bermuatan $+Q_3$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{3\perp}$ dan bagian paralel $E_{3\parallel}$ terhadap segmen kawat bermuatan $+Q_3$ pada sisi kanan loop segiempat yang diilustrasikan pada Gambar [6](#fig6), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side} dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.

### due to bottom edge
Kontribusi sisi bawah terhadap medan listrik di titik $\rm P$ diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/34/0342-f-bottom.png) \
Gambar <a name="fig12">12</a>. Sisi bawah bermuatan $+Q_4$ dan kontribusinya terhadap medan listrik di titik amat $\rm P$.

Kedua komponen medan listrik, bagian tegak lurus $E_{4\perp}$ dan bagian paralel $E_{4\parallel}$ terhadap segmen kawat bermuatan $+Q_4$ pada sisi bawah loop segiempat yang diilustrasikan pada Gambar [7](#fig7), diperoleh dengan memanfaatkan Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side}, dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.

### due to all edges
Total medan listrik di titik $\rm P$ akibat akibat loop segiempat adalah penjumlahan dari kontribusi keempat sisi yang masing-masing telah dibahas sebelumnya. Perlu diperhatikan bahwa istilah tegak lurus dan sejajar pada suatu sisi dapat berbeda dengan pada sisi lain. Sebagai contoh dapat diambil sisi tegak dengan tinggi $H$ sebagai acuan. Dengan demikian total medan listrik pada titik amat $\rm P$ akibat kontribusi keempat sisi dari loop segimepat pada arah tegak lurus sisi tegak adalah

\begin{equation}\label{eqn:total-inside-electric-field-perpendicular-height}
E_{\perp H} = E_{1\perp} + E_{2\parallel} + E_{3\perp} + E_{4\parallel}
\end{equation}

dan pada arah sejajar sisi tegak adalah

\begin{equation}\label{eqn:total-inside-electric-field-parallel-height}
E_{\parallel H} = E_{1\parallel} + E_{2\perp} + E_{3\parallel} + E_{4\perp},
\end{equation}

dengan masing-masing $E_{n\perp}$ dan $E_{n\parallel}$, $n = 1, 2, 3, 4$, akan menggunakan satu dari Persamaan \eqref{eqn:Eper-line-charge-lies-to-the-side} dan \eqref{eqn:Epar-line-charge-lies-to-the-side}.


## exer
1. Untuk kasus titik amat $\rm P$ di luar loop segiempat bermuatan total $+Q$ dan berapat muatan linier $\lambda$ seragam apakah terdapat suatu titik yang medan listriknya $\vec{E}$ bernilai nol?
2. Untuk kasus titik amat $\rm P$ di dalam loop segiempat bermuatan total $+Q$ dan berapat muatan linier $\lambda$ seragam apakah terdapat suatu titik yang medan listriknya $\vec{E}$ bernilai nol?


## note
1. <a name='r01'></a>Sen-ben Liao, Peter Dourmashkin, John W. Belcher, "Faraday’s Law of Induction", Visualizing Electromagnetism, 2004, url <http://web.mit.edu/viz/EM/visualizations/notes/modules/guide10.pdf> [20220107].
2. <a name='r02'></a>OpenStax, "Force and Torque on a Current Loop", Physics LibreTexts, OpenStax CNX, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/4418> [20220107].
3. <a name='r03'></a>Martin Misakian, "Equations for the Magnetic Field Produced by One or More Rectangular Loops of Wire in the Same Plane", Journal of Research of the National Institute of Standards and Technology [J Res Natl Inst Stand Technol], vol 105, no 4, p 557-564, Jul-Aug 2000, url <https://dx.doi.org/10.6028/jres.105.045>.
4. <a name='r04'></a> Shubham Rana, "Direction of a Point from a Line Segment", Geeks for Geeks, 24 Nov 2021, url <https://www.geeksforgeeks.org/direction-point-line-segment/> [20220107].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0342?src=hash&amp;ref_src=twsrc%5Etfw">#bug0342</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1480402580110856192?ref_src=twsrc%5Etfw">January 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field](0282.html) &bull; [charge distribution](0283.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ya, saat $b = \infty$; &nbsp;
2) ya, tepat di tengah-tengah loop atau posisi dengan $b = \frac12 B$ dan $h = \frac12 H$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
