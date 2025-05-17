---
title: "field of interest"
date: 2022-08-08T18:38:00+0700
lastmod: 2022-08-08T22:43:00+0700
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['fi']
url: "0139"
draft: false
---
Dengan menggunakan Mermaid [[1](#r01)] dapat dibuat capaian penelitian yang telah diperoleh selama ini.

## research road map

<div class="mermaid" style="position: relative; top: -100px; left: -300px; height: 1300px; width: 1100px; border: 0px solid black; transform: scale(1.0);">
flowchart LR
  %% element use
  %%
  subgraph approach
  A1 & A2 & A3
  end
  A1 --> T01 --> M01 --> M01a --> P01
  A2 --> T02
  A2 ---> T03
  A3 --> T04 --> T02 --> M02 --> M02a ---> P02
  T04 --> T03 --> M02
  T01 ---> M02
  A2 --> T05 ----> P01
  T01 ---> M03
  M03 ---> M03a --> P03 & P04
  M03 ---> M03b --> P05 & P06
  M03 ---> M03c --> P11
  T05 --> M04 --> M04a --> P07
  T01 ----> M04
  A2 --> T06 ---> M05 --> M05a --> P08
  M05 ----> M05b --> P09 & P10 & P14 & P21
  M05 --> M05c --> P12
  M05 --> M05d --> P13
  A2 --> T07 --> M06
  M06 ----> M06a ---> P15 & P16
  M06 --> M06b --> P17 & P18
  A2 ----> T08 ----> P19
  M05 --> M05e --> P20
  M05b --> P20
  %% element definition
  %% approach
  A1(( exp ))
    T01([ material ])
      M01([ polymer ])
        M01a( PANI )
          P01[ Electro-<br>chemo-<br>mechanics ]
      M03([ granular])
        M03a( sphere )
          P03[ Oscillation ]
          P04[ Segregation ]
        M03b( disk )
          P05[ Brazil Nut<br>Effect ]
          P06[ Compaction ]
        M03c( cement<br>raw meal )
          P11[ Semi-Autogenous<br>Grinding Mill ]
  A2(( com ))
    T02([ MNDO ])
    T03([ CI ])
      M02([ oligomer ])
        M02a( DR1 )
          P02[ Nonlinear<br>Optics ]
    T05([ FD ])
      M04([ fluids ])
        M04a( self-<br>siphon )
          P07[ Single Fluid<br>Volume Element<br>Method ]
    T06([ MD ])
      M05([ spherical<br>particles ])
        M05a( gravitation )
          P08[Contactopy on<br>Asteroids]
        M05b( spring )
          P09[ Magnetic<br>Granular<br>Chain]
          P10[ Tree<br>Model]
          P14[ Microorganism<br>Locomotive<br>Organ]
          P21[ Red Blood Cell<br>Model ]
        M05c( water<br>wave )
          P12[HCP Structure]
        M05d(classical strong<br>force model)
          P13[Hydrogen Isotopes<br>Collision]
        M05e(bounce<br>in coil)
          P20[ Simulation<br>of Measurement ]
    T07([ ABM ])
      M06([ agent ])
        M06a( vehicle )
          P15[ City Visiting<br>Probability ]
          P16[ Origin-Destination<br> Matrix ]
        M06b( particle )
          P17[ Model for<br>Spread of Disease ]
          P18[ Materials Phases ]
    T08([ SD ])
          P19[ Green Sea Port<br>Simulation]
  A3(( the ))
    T04([ QM ])
  %%
  %% class use
  class A1 approach
  class A2 approach
  class A3 approach
  class T01 field
  class T02 field
  class T03 field
  class T04 field
  class T05 field
  class T06 field
  class T07 field
  class T08 field
  class M01 material
  class M02 material
  class M03 material
  class M04 material
  class M05 material
  class M06 material
  class M01a molecule
  class M02a molecule
  class M03a molecule
  class M03b molecule
  class M03c molecule
  class M04a molecule
  class M05a molecule
  class M05b molecule
  class M05c molecule
  class M05d molecule
  class M05e molecule
  class M06a molecule
  class M06b molecule
  class P01 phenomenon
  class P02 phenomenon
  class P03 phenomenon
  class P04 phenomenon
  class P05 phenomenon
  class P06 phenomenon
  class P07 phenomenon
  class P08 phenomenon
  class P09 phenomenon
  class P10 phenomenon
  class P11 phenomenon
  class P12 phenomenon
  class P13 phenomenon
  class P14 phenomenon
  class P15 phenomenon
  class P16 phenomenon
  class P17 phenomenon
  class P18 phenomenon
  class P19 phenomenon
  class P20 phenomenon
  class P21 phenomenon
  %% class style definition
  classDef approach fill:#fdd,stroke:#a33,stroke-width:1px
  classDef field fill:#ffd,stroke:#aa3,stroke-width:1px
  classDef material fill:#ddf,stroke:#33a,stroke-width:1px
  classDef molecule fill:#dff,stroke:#3aa,stroke-width:1px
  classDef phenomenon fill:#bfb,stroke:#3a3,stroke-width:1px
</div>

Gambar <a name='fig1'>1</a>. Peta jalan penelitian yang telah dilakukan selama ini.

Untuk mendapatkan tampilan yang baik, Gambar [1](#fig1) dilihat dengan menggunakan Google Chrome pada layar berresolusi 900px &times;1440px dengan zoom 75% atau 1336px &times;768px zoom 100% (perlu scroll up and down).


## terms
+ PANI: Polyaniline.
+ FD: Finite Difference.
+ DR1: Disperse Red 1.
+ MNDO: Modified Neglect of Diatomic Overlap.
+ CI: Configuration Interaction
+ QM: Quantum Mechanics.
+ MD: Molecular Dynamics.
+ ABM: Agent-Based Model.
+ SD: System Dynamics.


## to-do
+ Menetapkan fokus pada pemodelan dan eksperimen sistem berbasis partikel sferis.
+ Membuat program serba guna berdasarkan berbagai interaksi (kontak, rentang jauh, pengaruh medium) antar dan pada partikel sferis.
+ Melengkapi peta jalan riset pada tulisan lain dengan bentuk yang lebih mudah dibaca, karena masih terdapat beberapa topik yang terlupa (DEM, vibrating plate, falling grains in fluid, displacement of  floating body due to wave, particle size analysis, volvox modeling, angle of repose, image processing, machine learning, ANN, butiran project, etc).


## notes
1. <a name='r01'></a>Alexandra Souly, "Mermaid: Create diagrams quickly and effortlessly", Towards Data Science, 1 Jun 2021, url <https://towardsdatascience.com/x-d236e23d6d58> [20220808].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}