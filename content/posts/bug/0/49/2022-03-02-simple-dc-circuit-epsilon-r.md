---
layout: post
authors: [viridi]
title: simple dc circuit epsilon r
permalink: pages/0492
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ohm's law", "electric current", "electric resistance", "resistor", "electric potential", "dc circuit", "simple", "battery"]
date: 2022-03-02 19:14:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/49/2022-03-02-simple-dc-circuit-epsilon-r.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Rangkaian arus searah atau DC (direct current) paling sederhana adalah sebuah baterai yang dihubungkan dengan sebuah resistor yang membentuk simpul tertutup. Contoh rangkaian DC umumnya membahas satu baterai dengan susunan resistor seri atau paralel atau susunan seri-paralel [[1](#r01)] dan terdiri dari lebih satu baterai [[2](#r02)]. Terdapat visualisasi hanya dengan satu baterai dan satu resistor yang menggambarkan bagaimana elektron bergerak dalam rangkaian tertutup [[3](#r03)]. Rangkaian listrik dapat pula dieksplorasi dengan analogi menggunakan aliran air [[4](#r04)]. Di sini akan hanya dibahas rangkaian dengan satu baterai dan satu atau beberapa resistor.


## current direction
Arah arus yang mengalir bila hanya terdapat satu baterai adalah keluar dari kutub positif baterai dan masuk ke kutub negatif baterai seperti diberikan pada gambar berikut, di mana beda potensial pada kutub positif baterai lebih tinggi dari beda potensial pada kutub negatif baterai.

![]({{ site.baseurl }}/assets/img/0/49/0492-a.png) \
Gambar <a name='fig1'>1</a>. Beda potensial dan arah arus pada baterai (kiri) dan resistor (kanan).

Dari Gambar [1](#fig1)(kiri) dapat dituliskan bahwa

\begin{equation}\label{eqn:va-vb-battery}
V_a - V_b = \varepsilon_1
\end{equation}

dan pada resistor $R_1$ arus $I_1$ mengalir dari tegangan lebih tinggi $V_a$ ke tegangan lebih rendah $V_b$ sehingga

\begin{equation}\label{eqn:va-vb-resistor}
V_a > V_b,
\end{equation}

sebagaimana diberikan pada Gambar [1](kanan). Selanjutnya, hukum Ohm memberikan hubungan antara arus $I$ dan beda potensial $V$ pada resistor

\begin{equation}\label{eqn:ohm-law}
V = IR
\end{equation}

yang untuk Gambar [1](#fig1)(kanan) $I = I_1$, $R = R_1$, dan  $V = V_a - V_b$.


## a loop
Dengan menggunakan baterai $\varepsilon_1$ dan resistor $R_1$ dari Gambar [1](#fig1), titik $a$ pada baterai dihubungkan dengan titik $a$ pada resistor dan titik $b$ keduanya juga dihubungkan sehingga diperoleh simpul seperti pada Gambar [2](#fig2).

![]({{ site.baseurl }}/assets/img/0/49/0492-b.png) \
Gambar <a name='fig2'>2</a>. Rangkaian DC sederhana yang terdiri dari satu baterai $\varepsilon_1$ dan satu resistor $R_1$.

Dari Gambar [2](#fig2) dapat dilihat bahwa tegangan pada titik $a$ yang semula lebih tinggi akan menurun pada titik $b$ setelah melewati resistor $R_1$ dengan penurunan tegangannya adalah $I_1 R_1$. Selanjutnya tegangan yang rendah padata titik $b$ akan menjadi lebih tinggi pada titik $a$ setelah melewati baterai dengan kenaikan tegangannya adalah $\varepsilon_1$.


## another loop
Sebelum meninjau simpul lain yang terdiri dari sebuah baterai dan dua buah resistor, arah arus pada baterai dan kedua resistor diberikan pada gambar berikut ini.

![]({{ site.baseurl }}/assets/img/0/49/0492-c.png) \
Gambar <a name='fig3'>3</a>. Arus pada baterai (kiri) dan dua buah resistor disusun seri (kanan).

Arus listrik $I_1$ keluar dari kutub positif baterai dan masuk ke kutub negatif baterai dengan tegangan pada kutub positif lebih tinggi dari tengangan pada kutub negatif atau pada Gambar [3](#fig3)(kiri)  berlaku seperti pada Persamaan \eqref{eqn:va-vb-resistor}. Kemudian beda potensial untuk dua buah resistor pada Gambar [3](#fig3)(kanan) adalah lebih tinggi titik titik $a$ ketimban di titik $b$ karena arus mengalir dari titik $a$ ke titik $b$ melalui kedua resistor. Bila di antara titik $a$ dan $b$ ditempatkan titik $c$ maka

\begin{equation}\label{eqn:ohm-law-ac}
V_a - V_c = I_1 R_1
\end{equation}

dan 

\begin{equation}\label{eqn:ohm-law-cb}
V_c - V_b = I_1 R_2
\end{equation}

sehingga

\begin{equation}\label{eqn:ohm-law-ab}
\begin{array}{rcl}
V_{ac} + V_{cb} & = & (V_a - V_c) + (V_c - V_b) \newline
& = & V_a - V_c + V_c - V_b \newline
& = & V_a - V_b \newline
& = & V_{ab}
\end{array}
\end{equation}

yang dapat dituliskan kembali dengan dibantu Persamaan \eqref{eqn:ohm-law-ac} dan \eqref{eqn:ohm-law-cb}

\begin{equation}\label{eqn:ohm-law-ab-2}
\begin{array}{rcl}
V_{ab} & = & V_{ac} + V_{cb} \newline
& = & (V_a - V_c) + (V_c - V_b) \newline
& = & I_1 R_1 + I_1 R_2.
\end{array}
\end{equation}

Persamaan \eqref{eqn:ohm-law-ab-2} ini tak lain adalah Pesamaan \eqref{eqn:ohm-law} yang dipergunakan untuk kasus dengan dua resistor.

![]({{ site.baseurl }}/assets/img/0/49/0492-d.png) \
Gambar <a name='fig4'>4</a>. Rangkaian DC dengan satu baterai $\varepsilon_1$ dan dua resistor $R_1$ dan $R_2$.

Mengikuti cara sebelumnya kedua titik $a$ pada Gambar [3](#fig3) dihubungkan dan juga kedua titik $b$ yang akan memberikan Gambar [4](#fig4). Pada simpul ini titik $a$ memiliki potensial lebih tinggai dari titik $c$ dan titik $c$ memiliki potensial lebih tinggi dari titik $b$. Penurunan potensial dari titik $a$ ke titik $c$ adalah sebesar $I_1 R_1$ dan penurunan potensial dari titik $c$ ke titik $b$ adalah sebesar $I_1 R_2$. Titik $c$ yang dimaksud berada di antara titik $a$ dan $b$.


## note
1. <a name='r01'></a>Chris L. Davis, "DC Circuits", Physics 111 Elements of Physics, Physics Department, University of Louisville, Spring 2009, url <https://www.physics.louisville.edu/cldavis/phys111/notes/elec_curr_circuits.html> [20220302].
2. <a name='r02'></a>Carl Rod Nave, "DC Circuit Examples", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/dcex.html#c1> [20220302].
3. <a name='r03'></a>"Battery-Resistor Circuit", OpenStax CNS, url <https://openstax.github.io/simulations/battery-resistor-circuit/> [20220302].
4. <a name='r04'></a>Hallie Snowman, Gil Toombes, Walt Peck, "Water Analogy to Electric Circuits", CNS Institute for Physics Teachers, 1 Jul 2006, url <https://studylib.net/doc/18151206/> [20220302].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
