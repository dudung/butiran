---
title: "product view competitive forces"
date: 2022-06-14T03:52:00+07:00
lastmod: 2022-06-14T20:14:00+0700
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['idea', 'competition', 'product']
url: "0085"
draft: false
---
Bagan gaya-gaya yang mengatur kompetisi dalam suatu industri terlihat abstrak dan terpusat [[1](#r01)], walaupun telah diberikan rincian dari gaya-gaya di sekelilingnya [[2](#r02)]. Terdapat pula penafsiran bahwa ada gaya-gaya yang bersifat horizontal dan vertikal yang bersama-sama menuju gaya yang berada di pusat [[3](#r03)] atau bahkan kelimanya merupakan gaya-gaya yang menggerakkan suatu produk [[4](#r04)], di mana berbagai representasi ini bermakna sama [[5](#r05)]. Penggambaran diagram di sini menggunakan Mermaid [[6](#r06), [7](#r07)].


## jockeying for position
Penafsiran keempat gaya membantu gaya di pusat untuk memperebutkan posisi suatu produk di pasar adalah yang paling umum digambarkan.

<div class="mermaid" style="position: relative; top: auto; height: 230px;">
  flowchart LR
    %% element use
		Sup -.- Com
    Ent -.- Com
    Com -.- Sub
    Com -.- Cus
    Sup --> Com
    Cus --> Com
    Ent --> Com
    Sub --> Com
    %% element definition
		Sup(( Bargaining<br>power of<br>suppliers ))
		Cus(( Bargaining<br>power of<br>customers ))
 		Com(( Jockeying<br>for position<br>among current<br>competitors ))
		Ent(( Threat<br>of new<br>entrants ))
		Sub(( Threat of<br>substitute<br>products or<br>services ))
    %% class use
    class Sup sup
    class Cus cus
    class Ent ent
    class Sub sub
    class Com com
    %% class style definition
    classDef sup fill:#ffa,stroke:#aa3,stroke-width:2px
    classDef cus fill:#afa,stroke:#3a3,stroke-width:2px
    classDef ent fill:#faf,stroke:#a3a,stroke-width:2px
    classDef sub fill:#faa,stroke:#a33,stroke-width:2px
    classDef com fill:#aaf,stroke:#33a,stroke-width:2px
</div>

Gambar <a name='fig1'>1</a>. Ilustrasi keempat gaya di luar menuju satu gaya di tengah pada analisis lima gaya Porter.

Sekilas terlihat bahwa gaya yang di tengah mendapatkan masukan dari keempat gaya lainnya dan terasa tidak setara sebagaimana diberikan pada Gambar [1](#fig1). Selain itu dapat pula digali lebih lanjut mengenai posisi yang sebenarnya masih merupakan suatu kuantitas yang masih kualitatif.

<div class="mermaid" style="position: relative; top: -20px; height: 400px;">
  flowchart LR
    %% element use
    Sub -.- Blank -.- Ent
    subgraph Blank [&nbsp;]
      direction TB
      Sup -.- Com -.- Cus
    end
    %% element definition
		Sup(( Bargaining<br>power of<br>suppliers ))
		Cus(( Bargaining<br>power of<br>customers ))
 		Com(( Jockeying<br>for position<br>among current<br>competitors ))
		Ent(( Threat<br>of new<br>entrants ))
		Sub(( Threat of<br>substitute<br>products or<br>services ))
    %% class use
    class Sup sup
    class Cus cus
    class Ent ent
    class Sub sub
    class Com com
    class Blank blank
    %% class style definition
    classDef sup fill:#ffa,stroke:#aa3,stroke-width:2px
    classDef cus fill:#afa,stroke:#3a3,stroke-width:2px
    classDef ent fill:#faf,stroke:#a3a,stroke-width:2px
    classDef sub fill:#faa,stroke:#a33,stroke-width:2px
    classDef com fill:#aaf,stroke:#33a,stroke-width:2px
    classDef blank fill:none,stroke:none,stroke-width:2px
</div>

Gambar <a name='fig2'>2</a>. Ilustrasi kelima gaya Porter dengan membaginya menjadi bagian vertikal dan horisontal.

Bila gaya-gaya yang di luar dibagi menjadi gaya horisontal, yaitu ancaman dari produk pengganti dan produk baru dan gaya vertikal, yaitu posisi tawar pemasok dan pelanggan, akan diperoleh diagram seperti Gambar [2](#fig2).


Perhatikan bahwa terdapat keterbatasan Mermaid dalam menggambarkan arah panah sehingga tidak semua panah dapat digambarkan bila bentuk posisi node diagram ingin dipertahankan.


## forces to product
Dapat pula digambarkan kelima gaya menuju atau mempengaruhi suatu produk seperti diberikan di bawah ini.

<div class="mermaid" style="position: relative; top: auto; height: 400px;">
  flowchart TB
    %% element use
		Sup -.- Pro
    Cus -.- Pro
    Pro -.- Ent
    Pro -.- Sub
    Pro -.- Com
    Sup --> Pro
    Cus --> Pro
    Ent ---> Pro
    Sub ---> Pro
    Com --> Pro
    %% element definition
		Sup(( Sup-<br>pliers ))
		Cus(( Cus-<br>tomers ))
 		Com(( Compe<br>titors ))
		Ent(( Ent-<br>rants ))
		Sub(( Sub-<br>stitue ))
		Pro(( Product ))
    %% class use
    class Sup sup
    class Cus cus
    class Ent ent
    class Sub sub
    class Com com
    %% class style definition
    classDef sup fill:#ffa,stroke:#aa3,stroke-width:2px
    classDef cus fill:#afa,stroke:#3a3,stroke-width:2px
    classDef ent fill:#faf,stroke:#a3a,stroke-width:2px
    classDef sub fill:#faa,stroke:#a33,stroke-width:2px
    classDef com fill:#aaf,stroke:#33a,stroke-width:2px
</div>

Gambar <a name='fig3'>3</a>. Kelima gaya kompetitif Porter mempengaruhi suatu produk.

Cara pandang lain diberikan pada Gambar [3](#fig3), di mana kelima gaya Porter mempengaruhi suatu produk.


## multiple products
Akan lebih menarik bila dapat dibuat ilustrasi dari berbagai produk yang saling berkompetisi yang salah satu ilustrasinya seperti diberikan di bawah ini.

<div class="mermaid" style="position: relative; top: -120px; height: 620px;">
  flowchart TB
    %% element use
    Sup1 ---> Pro1
    Sup2 ---> Pro2
    Sup2 ---> Pro3
    Sup3 ---> Ent1
    Sup4 ---> Sub1
    Sup5 ---> Sub2
    Sup1 ---> Ent2
    Pro1 --> Cus1
    Pro1 --> Cus2
    Pro2 --> Cus3
    Pro3 --> Cus2
    Ent1 ----> Cus5
    Ent2 ----> Cus6
    Pro2 -..- Sub1
    Pro2 -..- Sub2
    Sub1 --> Cus3
    Sub1 --> Cus4
    Sub2 --> Cus5
    Ent1 <== Com ==> Pro2
    Sub2 <== Com ==> Pro1
    %% element definition
		Sup1[ Sup 1 ]
		Sup2[ Sup 2 ]
		Sup3[ Sup 3 ]
		Sup4[ Sup 5 ]
		Sup5[ Sup 4 ]
		Cus1[/ Cus 1 /]
		Cus2[/ Cus 2 /]
		Cus3[/ Cus 3 /]
		Cus4[/ Cus 4 /]
		Cus5[/ Cus 5 /]
		Cus6[/ Cus 6 /]
		Ent1(( Ent 1 ))
		Ent2(( Ent 2 ))
		Sub1(( Sub 1 ))
		Sub2(( Sub 2 ))
    Pro1(( Pro 1))
    Pro2(( Pro 2))
    Pro3(( Pro 3))
    %% class use
    class Sup1 sup
    class Sup2 sup
    class Sup3 sup
    class Sup4 sup
    class Sup5 sup
    class Cus1 cus
    class Cus2 cus
    class Cus3 cus
    class Cus4 cus
    class Cus5 cus
    class Cus6 cus
    class Ent1 ent
    class Ent2 ent
    class Sub1 sub
    class Sub2 sub
    class Com1 com
    class Com2 com
    %% class style definition
    classDef sup fill:#ffa,stroke:#aa3,stroke-width:2px
    classDef cus fill:#afa,stroke:#3a3,stroke-width:2px
    classDef ent fill:#faf,stroke:#a3a,stroke-width:2px
    classDef sub fill:#faa,stroke:#a33,stroke-width:2px
    classDef com fill:#aaf,stroke:#33a,stroke-width:2px
</div>

Gambar <a name='fig4'>4</a>. Kelima gaya kompetitif Porter dan multiple produk.

Agar lebih mudah untuk dicerna dapat digunakan simbol yang berbeda untuk pemasok, pelanggan, dan produk - substitusi - kompetitor, sebagaimana diberikan pada Gambar [4](#fig4).


## product
Dari sisi produk menarik pula untuk dimodelkan. Beberapa sifat atau karakter produk yang terpikirkan adalah
+ harga
+ fungsi utama
+ jumlah fitur
+ kualitas keseluruhan
+ keakraban merek

Selain itu perlu pula dirinci karakter dari pemasok dan pelanggan, yang nanti dengan fungsi probabilitas dapat dipadankan pada satu atau beberapa produk.

Grid untuk posisi, jumlah titik sewarna untuk market share, ukuran titik untuk familiaritas, dan lainnya.

## notes
1. <a name='r01'></a>Michael E. Porter, "How Competitive Forces Shape Strategy", Harvard Business Review, Mar-Apr 1979, url <https://hbr.org/1979/03/how-competitive-forces-shape-strategy> [20220614].
2. <a name='r02'></a>Wellcode.IO team, "Five Forces Porter (Strategi Marketing Industrial)", Wellcode Global Insight, 27 Mar 2019, url <https://insight.wellcode.io/five-forces-porter-strategi-marketing-industrial> [20220614].
3. <a name='r03'></a>Wikipedia contributors, "Porter's five forces analysis", Wikipedia, The Free Encyclopedia, 6 June 2022, 03:27 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1091745312> [20220614].
4. <a name='r04'></a>Harvard Business Review, "The Explainer: The 5 Forces That Make Companies Successful", YouTube, url <https://www.youtube.com/watch?v=XCWHSeDU-zk> [20220614].
5. <a name='r05'></a>Imam Kamarudin Saleh, "Komunikasi privat", Tim Support, 13 Jun 2022.
6. <a name='r06'></a>Alexandra Souly, "Mermaid: Create diagrams quickly and effortlessly", Towards Data Science, 1 Jun 2021, url <https://towardsdatascience.com/d236e23d6d58> [20220614].
7. <a name='r07'></a>Ozan Tunca, "Making Diagrams Fun With Mermaid", Better Programming, 20 Jan 2020, url <https://betterprogramming.pub/8a2c9ea3e471> [20220614].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}
