---
layout: butir
authors: [viridi]
title: heat capacity of gas
permalink: pages/0135
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["ideal gas law", "heat capacity"]
date: 2021-11-14 20:54:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/13/2021-11-14-heat-capacity-of-gas.md
twitter_username: 6unpnp
nodes: []
---
Untuk gas kapasitas kalor molar adalah panas yang dibutuhkan untuk menaikkan temperatur satu mol gas sebesar satu kelvin [[1](#r01)], yang terdiri dari kapasitas panas pada tekanan tetap dan pada volume tetap, di mana yang pertama selalu lebih besar dari yang kedua [[2](#r02)]. Nilai kapasitas kalor molar ini berbeda-beda untuk gas ideal monoatomik, diatomik, dan poliatomik [[3](#r03)].


## terms
Terdapat istilah-istilah berikut terkait dengan kapasitas kalor atau kapasitas panas suatu benda, yaitu kapasitas panas, kapasitas panas spesifik (kalor jenis), dan kapasitas panas molar [[4](#r04)], yang untuk simbolnya akan digunakan huruf besar dan kecil [[5](#r05), [6](#r06)].

### heat capacity
Kapasitas panas dilambangkan dengan $C$, yang adalah besaran intrinsik [[7](#r07)], merupakan ukuran dari jumlah kalor yang diperlukan untuk menaikkan temperatur bahan sebesar satu satuan

\begin{equation}\label{eqn-heat-capacity}
C = \frac{Q}{\Delta T},
\end{equation}

dengan $Q$ kalor dan $\Delta T$ perubahan temperatur. Satuan dari kapasitas panas adalah $\rm J/K$.

### specific heat capacity
Kalor jenis atau kapasitas panas spesifik yang dilambangkan dengan $c$ menggambarkan jumlah kalor yang diperlukan untuk menaikkan temperatur bahan sebesar satu satuan untuk setiap satuan massa

\begin{equation}\label{eqn-specific-heat-capacity}
c = \frac{Q}{m \cdot \Delta T},
\end{equation}

dengan $m$ massa bahan, $\Delta T$ perubahan temperatur, dan $Q$ kalor. Satuan untuk kalor jenis adalah $J/kg\cdot K$.

### molar heat capacity
Kapasitas panas molar, yang juga dilambangkan dengan $c$, adalah ukuran panas yang diperlukan untuk menaikkan tiap mol bahan sebesar satu satuan temperatur

\begin{equation}\label{eqn-molar-heat-capacity}
c = \frac{Q}{n \cdot \Delta T},
\end{equation}

dengan $n$ mol bahan, $\Delta T$ perubahan temperatur, dan $Q$ kalor. Satuan kapasitas panas molar adalah $\rm J/mol\cdot K$.

### solid and gas
Untuk padatan umumnya digunakan Persamaan \eqref{eqn-specific-heat-capacity}, sedangkan untuk gas Persamaan \eqref{eqn-specific-heat-capacity}. Khusus untuk gas terdapat kapasitas panas molar yang diukur pada volume tetap $c_V$ dan yang diukur pada tekanan tetap $c_p$, sedangkan untuk padatan hanya yang kedua. Mengikuti keduanya dapat pula dituliskan kapasitas panas pada volume tetap $C_V$ dan kapasitas panas pada tekanan tetap $C_p$. Perbedaan kedua konstanta ini adalah bahwa lebih aman mengukur $c_p$ ketimbang $c_V$, akan tetapi lebih mudah menghitung $c_V$ [[1](#r01)].


## heat
Dengan demikian untuk panas yang terkait dengan gas dapat dituliskan menggunakan kapasitas panas $C$ ataupun kapasitas panas molar $c$. Bila panas ditambahkan pada sistem gas dan tekanan gas dipertahankan tetap, maka

\begin{equation}\label{eqn-heat-constant-pressure}
Q = C_p \Delta T = n c_p \Delta T,
\end{equation}

dengan $C_p$ kapasitas panas pada tekanan tetap, $c_p$ kapasitas panas molar pada tekanan tetap, dan $\Delta$ T perubahan temperatur yang dihasilkan dengan penambahan panas sebesar $Q$. Kemudian, bila panas ditambahkan pada sistem gas dan volume gas dipertahankan tetap, maka

\begin{equation}\label{eqn-heat-constant-volume}
Q = C_V \Delta T = n c_V \Delta T,
\end{equation}

dengan $C_V$ kapasitas panas pada volume tetap, $c_p$ kapasitas panas molar pada volume tetap, dan $\Delta$ T perubahan temperatur yang dihasilkan dengan penambahan panas sebesar $Q$.


## exer
1. Dengan memperhatikan Persamaan \eqref{eqn-heat-constant-pressure} dan \eqref{eqn-heat-constant-volume}, tuliskan hubungan antara kapasitas panas dan kapasitas panas molar.
2. Mengapa kapasitas panas termasuk termasuk bersifat intrinsik?
3. Terdapat suatu konstanta bernilai $12.47 \ \rm J/mol\cdot K$. Perkirakan nama konstanta tersebut.
4. Mana yang lebih besar nilainya antara $C_V$ dan $C_p$?
5. Saat ingin menghitung kalor yang dibutuhkan untuk menaikkan temperatur sebesar sekian kelvin sebongkah besi dengan massa tertentu, konstant apa yang digunakan?


## note
1. <a name="r01"></a>Sidney Redner, "Heat Capacity of an Ideal Gas", PY 211 Lecture Notes, Spring 2006, url <https://physics.bu.edu/~redner/211-sp06/class-thermodynamics/heatcap_volume.html> [20211114].
2. <a name="r02"></a>Bernd A. Berg, "Heat Capacities of Gases", General Physics A (PHY2048), 4 Dec 2003, url <http://www.hep.fsu.edu/~berg/teach/phy2048/1202.pdf> [20211114].
3. <a name="r03"></a>Samuel J. Ling, Jeff Sanny, Bill Moebs, Contributing Authors, "Heat Capacities of an Ideal Gas", University Physics, OpenStax CNX, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/4362> [20211114].
4. <a name="r04"></a>The Organic Chemistry Tutor, "What Is The Difference Between Specific Heat Capacity, Heat Capacity, and Molar Heat Capacity", YouTube, 21.09.2017, url <https://www.youtube.com/watch?v=IoHXMaiwT80> [20211114].
5. <a name="r05"></a>"Introduction to Chemistry", Lumen Learning, url <https://courses.lumenlearning.com/introchem/chapter/specific-heat-and-heat-capacity/> [20211114].
6. <a name="r06"></a>Wikipedia contributors, "Specific heat capacity", Wikipedia, The Free Encyclopedia, 20 October 2021, 23:15 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1050973649> [20211114].
7. <a name="r07"></a>Wikibooks contributors, "Physics with Calculus/Thermodynamics/Intensive and Extensive Properties", Wikibooks, The Free Textbook Project, 4 April 2012, 22:47 UTC, url <https://en.wikibooks.org/w/index.php?oldid=2301839> [20211114].


## &nbsp;
[kinetic theory of gases](0130.html) &bull; [ideal gas law](0131.html)  &bull; [state, process, cycle](0132.html) &bull; [special processes](0133.html) &bull; [internal energy](0134.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $C_p = n c_p$ dan $C_V = n c_V$; &nbsp;
2) karena nilainya hanya seragam saat sistem mencapai kesetimbangan termal; &nbsp;
3) dari satuannya merupakan kapasitas panas molar; &nbsp;
4) $C_p > C_V$ atau $C_p = C_V + nR$; &nbsp;
5) kapasitas panas spesifik atau kalor jenis; &nbsp;
</ans>
