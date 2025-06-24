---
title: "draft p1 v1 for floating body"
date: 2022-07-22T17:42:00+0700
lastmod: 2022-07-24T10:13:00+0700
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['floating', 'progress', 'draft']
url: "0123"
draft: false
---
Diskusi bimbingan tesis sudah dilakukan secara luring dan telah dibuat suatu draft awal untuk publikasi [[1](#r01)]. Mind map dapat digunakan mulai dari mencari ide, mengumpulkan fakta dari literatur, sampai membuat struktur dari makalah [[2](#r02)]. Sayangnya Mermaid belum mendukung fitur pembuatan mind map akan tetapi perkembangan terakhir teramati pada 2020 awal [[3](#r03), [4](#r04)].


## mind map
Untuk memudahkan pemantauan pembuatan draft artikel, dibuat suatu peta pikiran atau mind map seagai berikut.

<div class="mermaid" style="position: relative; top: -190px; height: 510px;">
  flowchart LR
    %% element use
    L --> O
    P --> O
    O --> E
    O --> T
    E --> R
    T --> R
    P -. inspires .- T
    subgraph T[ Theory ]
      direction TB
      N2 --> I2 --> SQ
    end
    subgraph P[Previous Work]
      direction TB
      N1 --> I1 --> M --> MP
    end
    subgraph L[ Literatures ]
      direction TB
      D1 --> C
      D2 --> C
    end
    subgraph E[Experiment]
      direction TB
        WO --> VT --> QD
    end
    subgraph R[Results]
      direction TB
      R3 --> R1
      R1 --> R3
      R1 --> R2
      R2 --> R1
      R2 --> R3
      R3 --> R2
    end
    %% element definition
    O(( Moving<br>floating<br>body ))
    N1(( Newton's<br>laws))
    N2(( Newton's<br>laws))
    E(( Experi-<br>ment ))
    L(( Litera-<br>tures))
    C(( Comp-<br>lex expla-<br>nation))
    D1(( Stokes<br>drift ))
    D2(( Gerstner<br>wave ))
    I1(( Dynamic<br>incline ))
    I2(( Dynamic<br>incline ))
    M(( Nume-<br>rical pre-<br>diction ))
    MP(( Moving<br>phenome-<br>non ))
    SQ(( Qualita-<br>tive expla-<br>nation ))
    WO(( Wave<br>tank obser-<br>vation ))
    VT(( Video<br>tracking ))
    QD(( Quan-<br>titative<br>data ))
    R1(( Wave-<br>particle velo-<br>city empirical<br> relation ))
    R2(( Moving<br>condition ))
    R3(( Simple<br>explana-<br>tion ))
</div>

Gambar <a name='fig1'>1</a>. Mind map panduan pembuatan artikel versi pertama untuk benda mengapung yang dapat berpindah.

Blok Previous work menjadi landasan pembahasan Moving floating body dan didukung bahwa hanya penjelasan yang rumit berdasarkan blok Literatures (fenomena Stokes drift dan Gerstner wave), yang kemudian memerlukan eksperimen untuk mendukung prediksi numerik sebelumnya dalam blok Experiemnt serta penjelasan teori yang cukup sederhanya pada blok Theory, sehingga dapat dihasilan blok Results yang membeikan setidaknya tidak hasil yaitu hubungan empirik kecepatan partikel dan gelombang, penjelasan sederhana, dan syarat suatu partikel mengikuti gerak gelombang atau hanya diam di tempat. Kaitan antar blok dan antar elemen di dalamnya serta dengan blok, diberikan pada Gambar [1](#fig1).


## todo
+ Mempelajari apa yang dimaksud dengan Stokes drift [[5](#r05)] dan Gerstner wave [[6](#r06)], sehingga dapat bersiap bila reviewer menanyakan hal ini, walaupun hal ini tidak akan disinggung dalam makalahnya. Disimpan untuk paper berikutnya.
+ Memastikan ide bahwa "penjelasan yang amat sederhana untuk fenomena" dapat tersampaikan dengan baik agar dapat memberikan fitur yang menarik bagi editor sehingga dapat melalui proses review.
+ Membuat ilustrasi kuantitatif dari bidang miring sinusoidal dinamis yang dapat menjelaskan peristiwa benda titik dapat diam atau ikut bergerak secara horizontal dengan gelombang. Dalam hal ini gaya gesek perlu diperhitungkan.
+ Menghindari penurunan secara numerik atau teoretik yang terlalu kuantitatif karena tujuannya adalah menyampaikan fenomenanya terlebih dahulu. Penjeasan detil lanjutannya akan disampaikan pada tulisan berikutnya karena masih dibutuhkan waktu untuk melakukan eksplorasi lebih lanjut.

Poin-poin di atas kemudian disampaikan pada grup WA Floating Body agar setiap anggota dapat berkontribusi sekitar 0741 di hari minggu ini.


## notes
1. <a name='r01'></a>Septian Ulan Dini, "Draft_Paper-wave-induced drift of floating objects", Open Science Framework, 22 Jul 2022, url <https://osf.io/zb8j4> [20220724].
2. <a name='r02'></a>Raphaela Brandner, "Mind Maps for Essay Writing (Guide + Examples)", MindMeister, 25 Oct 2020, url <https://www.mindmeister.com/blog/mind-maps-essay-writing/> [20220722].
3. <a name='r03'></a>slipb, "Comment on Mindmap support #1339", mermaid-js, GitHub, 7 Apr 2020, url <https://github.com/mermaid-js/mermaid/issues/1339#issue-595644393> [20220722].
4. <a name='r04'></a>knsv, "Comment on Mind maps? #448", mermaid-js, GitHub, 1 May 2020, url <https://github.com/mermaid-js/mermaid/issues/448#issuecomment-622398110> [20220722].
5. <a name='r05'></a>Stephen G. Monismith, "Stokes drift: theory and experiments", Journal of Fluid Mechanics [J Fluid Mech], vol 884, no, p F1, Feb 2020, url <https://doi.org/10.1017/jfm.2019.891>
6. <a name='r06'></a>A. Constantin, S. G. Monismith, "Gerstner waves in the presence of mean currents and rotation", Journal of Fluid Mechanics [J Fluid Mech], vol 820, p 511-528, Jun 2017, url <https://doi.org/10.1017/jfm.2017.223>.

{{< citeas >}}

{{< todo >}}
{{</ todo >}}