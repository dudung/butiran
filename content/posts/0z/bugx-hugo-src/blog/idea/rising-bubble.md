---
title: "rising bubble"
date: 2022-06-03T06:59:00+07:00
lastmod: 2022-06-03T18:34:00+0700
author: viridi
mathjax: true
mermaid: true
chartjs: false
tags: ['idea', 'bubble', 'rising']
url: "0077"
draft: false
---
Dalam suatu presentasi pengenalan terkait alat untuk menghasilkan aliran udara dengan suhu dan kelembaban tertentu [[1](#r01)], muncul gagasan untuk mendalami perihal peran gelembung dalam mengantarkan panas pada air dan membawa uap air sehingga temperatur dan humiditas yang diingankan.


## info
Proses pembelajaran mengenai topik ini dimulai dengan mencari informasi yang dapat diakses dan mencatatnya untuk dibaca lebih dalam kemudian.

### rising ball
Telah dilakukan pengamatan dan pembuatan model sederhana untuk bola  yang bergerak ke atas dalam fluida karena $\rho_b < \rho_f$ dengan menempuh lintasan zigzag sehingga dapat diperoleh hasil yang hanya dapat dibandingkan secara kualitatif [[2](#r02)], seperti diberikan pada gambar berikut ini.

![](/bugx/img/idea/bubble/rising-zigzag-ball.png)

Gambar <a name='fig1'>1</a>. Gerak ke atas bola dalam air: eksperimen (kiri) dan simulasi (kanan).

Pengamatan gerak zigzag naik bola dan hasil simulasinya diberika pada Gambar [1](#fig1). Pembandingan secara kuantitatif belum dapat dilakukan.

### moving sphere
Secara umum benda berbentuk bola yang begerak dalam fluida tenang akan mengalami gaya gesek fluida atau friksi Stokes yang dapat diperoleh dari persamaan Stokes dan syarat batasnya [[3](#r03)].

### terminal velocity
Dengan memilih nilai bilangan Archimedes ${\rm Ar} = 1$ dan bilangan Bond ${\rm Bo} = 5$, bentuk gelembung tetap dapat didekati dengan bentuk bola sehingga kecepatan akhirnya dapat ditentukan secara analitik dari persamaan Hadamard-Rybczynski [[4](#r04)].

### effect of surfactant
Surfaktan juga memberikan peran pada naiknya gelombung masih dalam asumsi berbentuk bola pada daerah bilangan Rynolds dan bilangan Peclet bernilai tinggi [[5](#r05)].

### shapes and dynamics
Simulasi telah dapat memberikan dinamika dan perubahan bentuk naiknya gelembung dalam fluida dengan keadaan awal tanpa kecepatan dan gelembung berbentuk bola [[6](#r06)].

## to-do
Beberapa hal perlu dikenal dan dipelajari, serta didalami misalnya seperti:
- hubungan kelembaban, suhu, tekanan &bull; [`pdf`](http://www.southeastern-automation.com/PDF/Rotronic/Humidity_Handbook.pdf)
- bilangan Reynolds &bull; [`pdf`](https://web2.clarkson.edu/projects/subramanian/ch330/notes/Reynolds%20Number.pdf)
- bilangan Bond &bull; [`doi`](https://doi.org/10.1080/00221686.2011.649839)
- bilangan Archimedes &bull; [`pdf`](https://ep.liu.se/ecp/153/003/ecp18153003.pdf)
- bilangan Peclet &bull; [`html`](https://mechcontent.com/peclet-number/)
- persamaan Stokes &bull; [`html`](https://en.wikipedia.org/wiki/Stokes_flow)
- persaman Hadamard-Rybczynski &bull; [`html`](https://en.wikipedia.org/wiki/Hadamard%E2%80%93Rybczynski_equation)
- mekanisme perambatan panas &bull; [`doi`](https://doi.org/10.1007/978-1-4615-6907-7_9)

Perkembangan akan diberikan pada tulisan lain yang merujuk balik ke tulisan ini.

{{< svg "/static/img/idea/bubble/spherical-bubble.svg" "fig2" "2" "Gelembung berapat massa $\rho_{\rm in}$ dalam cairan berapat massa $\rho_{\rm out}$." >}}

Gelembung dengan diameter $D$, tekanan dalamnya $p_{\rm in}$, temperatur dalamnya $T_{\rm in}$, dan densitas dalamnya $\rho_{\rm in}$ berada dalam fluida yang memiliki parameter $p_{\rm out}$, $T_{\rm out}$, dan $\rho_{\rm out}$ diberikan pada Gambar [2](#fig2). Bahwa gelembung dapat berubah diameternya dari $D$ menjadi $D'$ telah pula disertakan. Gaya-gaya yang bekerja pada gelembung belum digambarkan pada ilustrasi yang diberikan.

Salah satu pendekatan yang, mungkin dapat digunakan dengan terlebih dahulu memperhatikan batasan-batasannya, adalah menerapkan hukum gas idea dalam mengaitkan antara ukuran gelembung dengan tekanannya, dengan asumsi bahwa bentuknya masih seperti bola.


## notes
1. <a name='r01'></a>Suprijadi Haryono, "Suprijadi Haryono's Zoom Meeting", Zoom, 2 Jun 2022, 0930, url <https://itb-ac-id.zoom.us/j/93080160595> [20220603].
2. <a name='r02'></a>Muhammad Nur Tajuddin, Novitrian, Sparisoma Viridi, Euis Sustini, Veinardi Suendo, "Damped Zigzag Upward Motion of a Ball in Fluid: a Numerical Model", Indonesian Journal of Physics [Indonesian J Phys], vol 20, no 1, p 17-20, Jan 2009, url <https://doi.org/10.5614/itb.ijp.2009.20.1.5>.
3. <a name='r03'></a>W. J. Briels, "A moving sphere in a quiescent fluid" in Theory of Polymer Dynamics, Oct 1998, url <https://cbp.tnw.utwente.nl/PolymeerDictaat/node39.html> [20220603].
4. <a name='r04'></a>Dustin Langewisch, "2.8  Spherical bubble rise in a quiescent bath", version 130112 in Gerris examples
Version 1.3.2 (131206-130125), 6 Dec 2013, url <http://gerris.dalembert.upmc.fr/gerris/examples/examples/bubble.html#> [20220603].
5. <a name='r05'></a>R. Bel Fdhila, P. C. Duineveld, "", Physics of Fluids [Phys Fluids], vol 8, no 2, p 310-321, Feb 1996, url <https://doi.org/10.1063/1.868787>.
6. <a name='r06'></a>Manoj Kumar Tripathi, Kirti Chandra Sahu, Rama Govindarajan, "Dynamics of an initially spherical bubble rising in quiescent liquid", Nature Communications [Nat Commun], vol 6, no 1, p 6268, Feb 2015, url <https://doi.org/10.1038/ncomms7268>.

{{< citeas >}}

{{< todo >}}
{{</ todo >}}