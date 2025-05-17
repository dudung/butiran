---
layout: post
authors: [viridi]
title: faraday-lenz law
permalink: pages/0560
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["law", "induction", "faraday", "lenz", "electric current", "magnetic flux"]
date: 2022-03-13 20:39:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/56/2022-03-13-faraday-lenz-law.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Hukum induksi Faraday mendeskripsikan bagaimana arus listrik menyebabkan medan magnetik dan sebaliknya pula bagaimana perubahan medan magnetik menghasilkan arus listrik [[1](#r01)]. Arus listrik yang dihasillkan oleh perubahan medan magnetik disebut sebagai arus induksi. Pernyataan bahwa arus induksi mengalir dalam arah yang sedemikian rupa melawan perubahan yang menginduksikannya (membuatnya muncul) diberikan dalam hukum Lenz [[2](#r02)]. Keduanya kadang bersama-sama dirujuk sebagai hukum Faraday-Lenz [[3](#r03)]. Terdapat berbagai konsep fisika yang terkait dengan hukum Faraday ini [[4](#r04)]. Fenomena induksi ini dimanfaatkan dalam trafo, generator listrik, kompor induksi, flow meter elektromagnetik untuk fluida tertentu, dan alat-alat musik listrik [[5](#r05)]. Dan perlu dihindari dalam rangkaian elektronik seperti pada PCB [[6](#r06)].


## laws
+ **Hukum I Faraday** menyatakan bahwa perubahan medan magnetik pada kumparan kawat akan menyebabkan ggl induksi dalam kumparan.
+ **Hukum II Faraday** menyatakan bahwa besar ggl induksi dalam kumparan sama dengan laju perubahan fluks pada kumparan.
+ **Hukum Lenz** menyatakan bahwa arus induksi mengalir dalam arah yang sedemikian rupa melawan perubahan yang menginduksikannya atau menyebabkannya muncul.

Perubahan yang yang dimaksud dalam hukum Lenz adalah perubahan medan magnetik, yang menyebabkan munculnya arus induksi. Bila perubaha medan magnetik ini disebabkan oleh perubahan arus yang diberikan, maka arah arus induksi yang muncul akan melawan perubahan arus penyebab perubahan medan magnetik ini.

Dengan demikian dapat dituliskan hukum Faraday-Lenz dalam bentuk

\begin{equation}\label{eqn:faraday-lenz-law}
\varepsilon_{\rm ind} = - \frac{d\Phi_B}{dt}.
\end{equation}

Fluks medan magnetik $\Phi_B$ diperoleh dari

\begin{equation}\label{eqn:magnetic-fluks}
\Phi_B = N \int \vec{B} \cdot d\vec{A},
\end{equation}

dengan $d\vec{A}$ adalah elemen luas pada kumparan dan $\vec{B}$ adalah medan magnetik yang menembus kumparan, serta $N \ge 1$ adalah jumlah lilitan kumparan.

### coil
Untuk kumparan dengan luas tetap $A$ dan arahnya telah tegak lurus dengan medan magnetik $B$ maka Persamaan \eqref{eqn:magnetic-fluks} akan menjadi

\begin{equation}\label{eqn:magnetic-fluks-coil}
\Phi_B = N B A.
\end{equation}

Berikut adalah contoh penggunaan Persamaan \eqref{eqn:magnetic-fluks-coil} pada Persamaan \eqref{eqn:faraday-lenz-law}.

Sebuah kumparan dengan luas $0.01 \ {\rm m^2}$ ditembus secara tegak lurus oleh medan magnetik $B = (10t + 57) \ {\rm mT}$ dengan $t$ dalam $\rm s$. Jumlah lilitan kumparan adalah $20$. Besar ggl induksi yang ditimbulkan adalah

$$
\begin{array}{rcl}
\varepsilon_{\rm ind} & = & \displaystyle \frac{d(NBA)}{dt} \newline
& = & \displaystyle NA \frac{dB}{dt} \newline
& = & \displaystyle (20) (0.01) \frac{d}{dt} (10t + 57) \times 10^{-3} \newline
& = & (20) (0.01) (10) \times 10^{-3} \newline
& = & 2 \ {\rm mV}.
\end{array}
$$

Perhatikan bahwa $N$ dan $A$ bernilai konstan sehingga saat menghitung $d\Phi_B/dt$ keduanya dianggap sebagai koefisien. 


## source of magnetic field
Medan magnetik yang menembus kumparan dapat bersumber dari
+ kawat (atau umumnya kumparan) yang dialiri arus listrik, atau
+ magnet permanen.

Dengan demikian agar terjadi arus induksi maka medan magnetik yang menembus kumparan harus berubah, yang dapat dilakukan dengan
+ mengubah arus listrik yang melalui kawat (atau umumnya kumparan), atau
+ mengubah orientasi magnet permanen atau jaraknya terhadap kumparan.

Perbedaan cara melakukan perubahan medan magnetik disebabkan oleh sifat sumber medan magnetiknya yang berbeda.


## exer
1. Terdapat sebuah kumparan kawat yang memiliki luas $0.05 \ {\rm m^2}$ dan jumlah lilitannya adalah $100$. Medan magnetik $B = (100 - 20t) \ {\rm mT}$ dengan $t$ dalam $\rm s$ diberikan pada kumparan tersebut dan menembushnya secara tegak lurus. Hitunglah besar ggl induksi pada kumparan tersebut.


## note
1. <a name='r01'></a>Jim Lucas, Ashley Harmer, "What is Faraday's law of induction?", Live Science, 18 Feb 2022, url <https://www.livescience.com/53509-faradays-law-induction.html> [20220313].
2. <a name='r02'></a>The Editors of Encyclopaedia Britannica, Erik Gregersen, Thinley Kalsang Bhutia, Veenu Setia, "Lenz’s law", Encyclopedia Britannica, 29 May 2020, url <https://www.britannica.com/science/Lenzs-law> [20220313].
3. <a name='r03'></a>Jonathan Osbourne, "Faraday's Law - Lenz's Law", Brightstorm, Inc., 16 Dec 2010, url <https://www.brightstorm.com/science/physics/magnetism/faradays-law-lenzs-law/> [20220313].
4. <a name='r04'></a>Carl Rod Nave, "Faraday's Law Concepts", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/faracon.html#c1> [20220313].
5. <a name='r05'></a>Electrical4U, "Faraday’s Laws of Electromagnetic Induction: First & Second Law", Electrical 4 U, 24 Jan 2021, , url <https://www.electrical4u.com/faraday-law-of-electromagnetic-induction/> [20220313].
6. <a name='r06'></a>Cadence PCB Solutions, "Lenz Law vs. Faraday's Law: How Do They Govern Crosstalk and EMI?", Cadence Design Systems, Inc., 16 Dec 2021, url <https://resources.pcb.cadence.com/blog/2020-lenz-law-vs-faradays-law-how-do-they-govern-crosstalk-and-emi> [20220313].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $\varepsilon_{\rm ind} = (100)(0.05)$$(20 \times 10^{-3})$ $= 100 \ {\rm mV} = 0.1 \ {\rm V}$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
