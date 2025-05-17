---
layout: butir
authors: [viridi]
title: state, process, cyle
permalink: pages/0132
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ideal gas law", "state", "process", "cycle"]
date: 2021-11-11 18:45:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/13/2021-11-11-state-process-cycle.md
twitter_username: 6unpnp
nodes: []
---
Pada suatu gas yang merupakan suatu sistem, terdapat keadaan, proses, dan siklus [[1](#r01)], dengan keadaan yang dimaksud adalah suatu keadaan termodinamika [[2](#r02)]. Keadaan ini dispesifikasian oleh berbagai variabel keadaan [[3](#r03), [4](#r04)]. Untuk saat ini pembahasan dibatasi hanya untuk gas ideal.


## ideal gas law
Gas ideal mematuhi persamaan

\begin{equation}\label{eqn-ideal-gas-law}
pV = nRT,
\end{equation}

yang disebut sebagai hukum gas ideal dengan $p$ tekanan, $V$ volume, $n$ jumlah mol gas, $R$ tetapan gas, dan $T$ temperatur mutlak. Untuk sistem tertutup, yang juga merupakan sebagian besar sistem yang akan dikaji, jumlah partikel gas $N$ atau jumlah mol gas $n$ selalu tetap. Dalam batasan ini variabel keadaan adalah $p$, $V$, dan $T$.


## state
Suatu keadaan termodinamika adalah nilai-nilai dari sifat-sifat (properti) suatu sistem termodinamika yang perlu dispesifikasikan untuk mereproduksi sistem tersebut, di mana parameter-parameternya dikenal sebagai variabel keadaan, parameter keadaan, atau variabel termodinamika [[2](#r02)]. Suatu titik $(p, V, T)$ menggambarkan suatu keadaan. Titik ini berada dalam ruang 3d dengan sumbu-sumbunya adalah $p$, $V$, dan $T$, seperti pada Gambar [1](#fig1).

![]({{ site.baseurl }}/assets/img/0/13/0132-a.png) \
Gambar <a name="fig1">1</a>. Keadaan $1$ dispesifikasikan dengan tiga variabel keadaan $(p_1, V_1, T_1)$.

Keadaan yang digambarkan dengan titik $1$ pada Gambar [1](#fig1) dapat diproyeksikan pada ruang 2d seperti diagram $p-V$, $p-T$, atau $V-T$, untuk memudahkan penggambarannya.

Temperatur, tekanan, dan volume merupakan contoh yang umum untuk variabel keadaan [[3](#ref03)], di mana terdapat pula variabel keadaan lain, seperti entropi $S$, entalpi $H$, energi dalam $U$, massa $m$, kerapatan $\rho$, di mana masing-masing memiliki sifat tidak bergantung lintasan saat nilainya berubah [[4](#ref04)].

Ketiga diagram $p-V$, $p-T$, dan $V-T$ pada Gambar [1](#fig1) bila digunakan, menyembunyikan variabel ketiganya. Bila terkait dengan kerja dan siklus mesin-mesin, diagram $p-V$ merupakan pilihan yang sering digunakan.


## process
Bila sistem gas berubah, dikatakan sistem sedang mengalami proses, dengan keadaan-keadaan berurutan yang dilalui saat sistem berubah mendefinisikan lintasan suatu proses.

![]({{ site.baseurl }}/assets/img/0/13/0132-b.png) \
Gambar <a name="fig2">2</a>. Suatu proses berawal dari keadaan $1$ melewati berbagai keadaan $a$, $b$, $c$, $d$, dan berakhir pada keadaan akhir $2$.

Antara keadaan $1$ dan $2$ terdapat banyak keadaan yang tidak perlu disebutkan kecuali memang memiliki arti penting dan prosesnya tidak dapat dinyatakan dengan suatu fungsi kontinu. Bila dapat dinyatakan dengan suatu fungsi kontinu, biasanya cukup dinyatakan dengan keadaan awal dan akhir saja, yang untuk contoh pada Gambar [2](#fig2) di atas adalah keadaan $1$ dan $2$.


## cycle
Siklus adalah rangkaian proses dengan keadaan awal sama dengan keadaan akhir. Sebuah contoh siklus diberikan pada Gambar [3](#fig3) berikut ini.

![]({{ site.baseurl }}/assets/img/0/13/0132-c.png) \
Gambar <a name="fig3">3</a>. Sebuah siklus dimulai dari keadaan $1$ dan diakhiri pada keadaan $1$ kembali sambil melewati keadaan $2$, $3$, dan $4$.

Terdapat empat keadaan $(p_1, V_1, T_1)$, $(p_2, V_2, T_2)$, $(p_3, V_3, T_3)$, dan $(p_4, V_4, T_4)$ yang membentuk siklus seperti diberikan pada Gambar [3](#fig3). Siklus diawali dari keadaan $1$ dan berakhir pada keadaan $1$ kembali.


## exer
1. Dari usaha $W$, kalor $Q$, tekanan $p$, dan entalpi $H$ anakah yang bukan merupakan variabel keadaan suatu gas? Mengapa?
2. Dari Gambar [2](#fig2) selain keadaan $a$, $b$, $c$, dan $d$, apakah terdapat keadaan lain dalam proses dari keadaan awal $1$ ke keadaan $2$?
3. Apakah sebutan dari gabungan beberapa proses sehingga keadaan akhirnya sama dengan keadaan awal?
4. Apa ciri dari variabel keadaan?
5. Mengapa usaha $W$ bukan termasuk variabel keadaan?


## note
1. <a name="r01"></a>E. M. Greitzer, Z. S. Spakovszky, I. A. Waitz, D. Quattrochi, "Definitions and Fundamental Ideas of Thermodynamics", Thermodynamics and Propulsion, version 6.2, 3 Sep 2007, url <https://web.mit.edu/16.unified/www/FALL/thermodynamics/notes/node11.html> [2021111].
2. <a name="r02"></a>Oriol Planas, "What Is a Thermodynamic State?", Solar Energy, 10 Jul 2019, url <https://solar-energy.technology/thermodynamics/thermodynamic-system/thermodynamic-state> [20211111].
3. <a name="r03"></a>Carl R. Nave, "State Variables", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Kinetic/idegas.html#c3> [20211111].
4. <a name="r04"></a>R. Earle Luck, "State Variables", Astronomy 311, 2 Jan 2007, url <http://astroweb.cwru.edu/steven/hw/astr311/notespdf/01_Thermodynamics.pdf> [20211111].


## &nbsp;
[kinetic theory of gases](0130.html) &bull; [ideal gas law](0131.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $W$ dan $Q$, perubahannya bergantung lintasan prosesnya; &nbsp;
2) ya, terdapat tak hingga keadaan dalam lintasan suatu proses; &nbsp;
3) siklus; &nbsp;
4) perubahannya hanya bergantung keadaan awal dan akhir, tidak bergantung lintasan prosesnya; &nbsp;
5) usaha $W$ bergantung pada lintasan prosesnya; &nbsp;
</ans>
