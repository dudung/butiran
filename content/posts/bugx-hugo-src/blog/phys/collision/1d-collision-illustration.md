---
title: "1-d collision illustration"
date: 2022-04-19T17:37:00+07:00
lastmod: 2022-04-20T04:54:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'momentum', 'collision', '1d', 'draft']
url: "0063"
draft: false
---
Tumbukan (en: collision) merupakan peristiwa kontak langsung dua buah benda yang datang secara tiba-tiba dan kuat, seperti dua bola biliard, pemukul golf dan bolanya, palu dan kepala paku, atau obyek yang jatuh dan lantai [[1](#r01)]. Antara kedua benda yang berinteraksi muncul gaya yang berlangsung dalam waktu yang relatif singkat [[2](#r02)]. Untuk tumbukan 1-d terdapat beberapa kasus yang bergantung pada massa proyektil dan targetnya [[3](#r03)], di mana proyektil adalah benda yang menumbuk dan target adalah benda yang ditumbuk.


## some cases
Terdapat setidaknya tujuh kasus yang dapat diberikan seperti pada gambar-gambar berikut ini. Tidak semua kasus saling terpisah dan ada kasus yang merupakan hal khusus dari kasus lainnya.

{{< svg "/static/img/phys/collision/collision-1d-type-0.svg" "fig1" "1" "Tumbukan antara dua buah benda dengan massa $m_1$ dan $m_2$ yang relatif tidak terlalu berbeda dan tumbukan bersifat cukup lenting." >}}

{{< svg "/static/img/phys/collision/collision-1d-type-1.svg" "fig2" "2" "Tumbukan antara dua buah benda dengan massa $m_1$ dan $m_2$ yang relatif tidak terlalu berbeda dan tumbukan bersifat tak lenting, serta total momentum awal nol" >}}

{{< svg "/static/img/phys/collision/collision-1d-type-2.svg" "fig3" "3" "Tumbukan antara dua buah benda dengan massa $m_1$ dan $m_2$ yang relatif tidak terlalu berbeda dan tumbukan bersifat tak lenting, serta total momentum awal tidak nol." >}}

{{< svg "/static/img/phys/collision/collision-1d-type-3.svg" "fig4" "4" "Tumbukan antara dua buah benda dengan massa $m_1 > m_2$ dan tumbukan bersifat cukup lenting." >}}

{{< svg "/static/img/phys/collision/collision-1d-type-4.svg" "fig5" "5" "Tumbukan antara dua buah benda dengan massa $m_1 =  m_2$ dan tumbukan bersifat lenting sempurna." >}}

{{< svg "/static/img/phys/collision/collision-1d-type-5.svg" "fig6" "6" "Tumbukan antara dua buah benda dengan massa $m_1 <<  m_2$ dan tumbukan bersifat tak lenting." >}}

{{< svg "/static/img/phys/collision/collision-1d-type-6.svg" "fig7" "7" "Tumbukan antara dua buah benda dengan massa $m_1 <<  m_2$ dan tumbukan bersifat cukup lenting." >}}

Beberapa sifat tumbukan pada Gambar [1](#fig1), [2](#fig2), [3](#fig4), [4](#fig4), [5](#fig5), [6](#fig6), dan [7](#fig7) diberikan pada tabel berikut ini.

Tabel <a name='tab1'>1</a>. Sifat tumbukan pada beberapa kasus.

Gambar<br>(Kasus) | Kekekalan<br>Momentum | Kekekalan<br>Energi
:-: | :-: | :-:
[1](#fig1) | $\color{#0f0}{✔}$ | $\color{#f00}{×}$ $\color{#0f0}{✔}$
[2](#fig2) | $\color{#0f0}{✔}$ | $\color{#f00}{×}$
[3](#fig3) | $\color{#0f0}{✔}$ | $\color{#f00}{×}$
[4](#fig4) | $\color{#0f0}{✔}$ | $\color{#f00}{×}$
[5](#fig5) | $\color{#0f0}{✔}$ | $\color{#0f0}{✔}$
[6](#fig6) | $\color{#0f0}{✔}$ | $\color{#f00}{×}$
[7](#fig7) | $\approx\color{#0f0}{✔}$ | $\color{#f00}{×}$ $\color{#0f0}{✔}$

Secara umum pada peristiwa tumbukan bila sistem terisolasi, yang berarti tidak ada gaya luar yang bekerja atau pada saat tumbukan berlangsung gaya luar dapat diabaikan, hukum kekekalan momentum pasti berlaku. Akan tetapi hukum kekekalan energi tidak perlu selalu berlaku.


## formula
Untuk tumbukan elastik, hukum kekekalan momentum dan hukum kekekalan energi terpenuhi, kecepatan akhir tumbukan dua benda dapat diperoleh melalui [[4](#r04)]

\begin{equation}\label{eqn:elastic-collision-final-velocity-1}
v_{1f} = \left( \frac{m_1 - m_2}{m_1 + m_2} \right) v_{1i} + \left( \frac{2m_2}{m_1 + m_2} \right) v_{2i}
\end{equation}

untuk benda pertama dan

\begin{equation}\label{eqn:elastic-collision-final-velocity-2}
v_{2f} = \left( \frac{2m_1}{m_1 + m_2} \right) v_{1i} + \left( \frac{m_2 - m_1}{m_1 + m_2} \right) v_{2i}
\end{equation}

untuk benda kedua. Perhatikan bagaimana Persamaan \eqref{eqn:elastic-collision-final-velocity-2} dapat diperoleh dari Persamaan \eqref{eqn:elastic-collision-final-velocity-1} dengan mengganti semua indeks $1$ menjadi $2$.

Kedua Persamaan \eqref{eqn:elastic-collision-final-velocity-1} dan \eqref{eqn:elastic-collision-final-velocity-2} hanya dapat digunakan untuk kasus-kasus yang memenuhi kekalan energi pada Tabel [1](#tab1), yaitu kasus 1, 5, dan 7.


## notes
1. <a name='r01'></a>The Editors of Encyclopaedia Britannica, Thinley Kalsang Bhutia, William L. Hosch, "collision", Encyclopaedia Britannica, 8 May 2015, url <https://www.britannica.com/science/collision> [20220419].
2. <a name='r02'></a>Wikipedia contributors, "Collision", Wikipedia, The Free Encyclopedia, 21 March 2022, 21:35 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1078496222> [20220419].
3. <a name='r03'></a>Carl Rod Nave, "Head-on Elastic Collisions", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/colsta.html> [20220419]
4. <a name='r04'></a>Boundless.com, "Collisions", Lumen Learning, url <https://courses.lumenlearning.com/boundless-physics/chapter/collisions/> [20220420].

{{< citeas >}}
