---
title: "pcm-progress-21jul2022"
date: 2022-07-21T05:01:00+0700
lastmod: 2022-07-21T17:38:00+0700
author: viridi
mathjax: true
mermaid: true
chartjs: false
tags: ['idea', 'pcm', 'progress', 'supervision', 'flowchart']
url: "0122"
draft: false
---
Kembali presetentasi kemajuan pengerjaan desertasi seorang PMDSU dilaksanakan secara daring, diasumsikan dengan tautan yang sama [[1](#r01)] beririsan dengan <s>dua</s> kegiatan lainnya (sempat terlupa satu). Dapat menjadi <s>tiga</s> empat bila sampai setelah break siang.


## measurement flowchart
Dari pertemuan sebelumnya disampaikan diagram alir seperti pada gambar berikut, yang belum memenuhi standar suatu diagram alir.

![](/bugx/img/idea/pcm/flowchart-to-be-fixed.jpg)

Gambar <a name='fig1'>1</a>. Diagram alir proses pengukuran bahan PCM

Koreksi dari Gambar [1](#fig1) diberikan pada gambar di bawah ini.

<div class="mermaid" style="position: relative; top: -230px; height: 1690px;">
  flowchart TB
    %% element use
    Beg --> Prep
    Prep --> Meas
    Meas --> End
    subgraph Meas[ Pengukuran ]
      direction TB
      o3 --> Meas1 --> Dec1
      Dec1 --Ya--> Inc1 --> o4
      Dec1 --Tidak--> Res1 --> Dec2
      Dec2 --Ya--> Inc2 --> o4
      Dec2 --Tidak--> Res2 --> Dec3
      Dec3 --Ya--> Inc3 --> o4
      Dec3 --Tidak--> Res3 --> Dec4
      Dec4 --Ya--> Inc4 --> o4
      Dec4 --Tidak--> o5
    end
    subgraph Prep[ Preparasi ]
      direction TB
      o1 --> Par1
      Par1 --> Par2 --> Par3 --> Init
      Init --> o2
    end
    %% element definition
    Beg([ Mulai ])
    Par1[ Dopan<br>D = 0, 1, 2, 5<br>% massa ]
    Par2[ Temperatur<br>T = 55, 67, 75<br>degC ]
    Par3[ Medan Magnetik<br>B = 0, 142, 234<br>mT ]
    Init[ d = 1, t = 1,<br>b = 1, s = 1 ]
    o1(( 1 ))
    o2(( 2 ))
    o3(( 2 ))
    o4(( 2 ))
    o5(( 3 ))
    Meas1[/ Ukur dengan<br>parameter<br> D_d, T_t, B_b /]
    End([ Selesai ])
    Dec1{ d < N_d }
    Res1[ d = 1 ]
    Inc1[ d = d + 1 ]
    Dec2{ t < N_T }
    Res2[ t = 1 ]
    Inc2[ t = t + 1 ]
    Dec3{ b < N_B }
    Res3[ b = 1 ]
    Inc3[ b = b + 1 ]
    Dec4{ s < N_s }
    Inc4[ s = s + 1 ]
    %% Out[/ R /]
    %% Proc1[ 5 ]
    %% Dec1{ 6 }
</div>

Gambar <a name='fig2'>2</a>. Usulan perbaikan diagram alir dengan memanfaatkan Mermaid.

Rentang nilai-nilai variabel iterasi pada Gambar [2](#fig2) adalah $d = 1, .., N_D$, $t = 1, .., N_T$, $b = 1, .., N_B$, dan $s = 1, .., N_S$, di mana jumlah variasi dopan $N_D = 4$, temperatur $N_T = 3$, medan magnetik $N_B = 3$, dan pengulangan $N_S$ untuk ketiga parameter bernilai tetap.

Dalam setiap sub-bagian pada Gambar [2](#fig2) terdapat titik sambungan bernomor, di mana proses berarah dari nomor lebih kecil ke nomor lebih besar.


## todo
+ Mendiskusikan apakah Gambar [2](#fig2) perlu diadaptasi lebih jauh mengingat telah menjadi lebih kompleks, walau lebih tepat, dibandingkan dengan Gambar [1](#fig1).
+ Menanyakan hasil diskusi karena tidak sempat mengikutinya dikarenakan adanya acara yang bersamaan.


## notes
1. <a name='r01'></a>Yunita Anggraini, "Grup meeting PCM-HTF", Zoom, 21 Jul 2022, 0900, url <https://itb-ac-id.zoom.us/j/96553048602> [20220721].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}