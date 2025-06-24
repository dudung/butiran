---
title: "length contraction"
date: 2022-04-10T18:50:00+07:00
lastmod: 2022-04-11T04:23:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'relativity', 'length-contraction', 'draft']
url: "0048"
draft: false
---
Saat pengukur waktu bergerak mendekati kecepatan cahaya, detaknya akan melambat (atau pengukuran selang waktunya akan membesar) dan sebagai konsekuensinya jarak yang ditempuhnya akan menjadi lebih pendek [[1](#r01)]. Sampai dua tahun yang lalu kontraksi panjang belum pernah diukur secara langsung akan tetapi efeknya dalam bentuk besaran fisis lain telah dapat teramati [[2](#r02)]. Apa yang 'terlihat' oleh muon saat begerak menuju bumi juga merupakan eksperimen mendukung adanya kontraksi panjang, yang juga tidak diukur secara langsung [[3](#r03)].


## formula
Pengamat yang berada pada kerangka yang bergerak dengan laju $v$ terhadap kerangka diam di mana terdapat bendan dengan panjang $L_0$ akan melihat bahwa benda tersebut memiliki panjang yang lebih pendek

\begin{equation}\label{eqn:length-contraction}
L = \frac{L_0}{\gamma},
\end{equation}

dengan

\begin{equation}\label{eqn:lorentz-factor}
\gamma = \frac{1}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}
\end{equation}

adalah faktor Lorentz yang memiliki nilai lebih besar dari satu.


## examples
Terdapat dua contoh yang memanfaatkan Persamaan \eqref{eqn:length-contraction} dan \eqref{eqn:lorentz-factor}.

### example 1
Seorang pengamat bergerak dengan laju $0.6c$ di atas dan sepanjang jalan rel kereta api yang membentang lurus dengan panjang $80 \ {\rm km}$. Berapakah panjang rel kereta menurut pengamat yang bergerak tersebut?

```js
> 80 / (1 / Math.sqrt(1 - 0.6**2))
< 64
```

Akan teramati bahwa panjang rel kereta api adalah $64 \ {\rm km}$. Lebih pendek dari yang teramati oleh pengamat pada kerangka diam.

### example 2
Dalam era perjalanan antar galaksi sebuah pesawat kargo bergerak dengan kecepatan $0.8c$ melewati pos pengawas terdepan. Pengamat pada pos tersebut melihat bahwa panjang pesawat kargo tersebut adalah $66 \ {\rm m}$. Agar pesawat tersebut mendapatkan tempat yang cocok dengan panjangnya di bandar luar angkasa yang dituju, berapakah panjang ruang minimal yang harus dilaporkan oleh pengamat pos terluar ke koordinator landasan pendaratan?

```js
> 66 * (1 / Math.sqrt(1 - 0.8**2))
< 110.00000000000001
```

Perlu dilaporkan bahwa diperlukan ruang dengan panjang minimum $110 \ {\rm m}$.

Perhatikan bahwa pada contoh pertama informasi yang telah ada adalah $L_0$ dan ingin dicari $L$ sedangkan pada contoh kedua teramati lebih dahulu $L$ dan ingin dicari $L_0$.


## exer
1. Tentukan faktor Lorentz pada [contoh pertama](#example-1).
2. Tentukan faktor Lorentz pada [contoh kedua](#example-2).


## notes
1. <a name='r01'></a>John D. Norton, "Special Theory of Relativity: Clocks and Rods", HPS 0410 Einstein for Everyone, 15 Jan 2022, url <https://sites.pitt.edu/~jdnorton/teaching/HPS_0410/chapters/Special_relativity_clocks_rods/index.html> [20220410].
2. <a name='r02'></a>David Appell, "The invisibility of length contraction", Physics World, Institute of Physics, IOP Publishing, 13 Aug 2019, url <https://physicsworld.com/a/the-invisibility-of-length%E2%80%AFcontraction/> [20220410].
3. <a name='r03'></a>Carl Rod Nave, "Muon Experiment", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Relativ/muon.html> [20220410].

{{< citeas >}}
