---
title: "gnuplot multi-slit interference"
date: 2022-04-01T05:31:00+07:00
lastmod: 2022-04-02T21:46:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['gnuplot', 'light', 'interference', 'multi-slit']
url: "0028"
draft: false
---
Gnuplot merupakan suatu piranti lunak yang dapat menggambarkan kurva menggunakan data dan juga fungsi [[1](#r01)], di mana dengan fitur terakhir ini akan digunakan untuk menggambarkan pola intensitas dari interferensi dua, tiga, dan empat celah [[2](#r02)]. Untuk menggambarkan intensitas, umumnya perlu dirumuskan fungsinya terlebih dahulu [[3](#r03)]. Akan tetapi dikarenakan Gnuplot dapat menggunakan fungsi matematika dengan variabel yang dapat diatur, perumusan fungsi untuk intensitas tidak perlu dilakukan, akan tetapi cukup fungsi untuk medan listriknya saja sehingga fungsi untuk intensitas dibentuk dari fungsi untuk medan listriknya.


## formulation
Medan listrik hasil interferensi oleh $N$ buah celah diberikan oleh

\begin{equation}\label{eqn:multi-slit-electric-field}
E = \sum_{j = 1}^ N E_j
\end{equation}

dengan medan listrik dari masing-masing celah adalah

\begin{equation}\label{eqn:multi-slit-electric-field-source}
E_j = E_o \sin [\omega t + (j - 1)\phi].
\end{equation}

Beda fasa $\phi$ diberikan oleh

\begin{equation}\label{eqn:multi-slit-electric-field-phi}
\phi = k \Delta x  = k d \sin\theta
\end{equation}

dengan $d$ adalah jarak antar celah dan $\theta$ posisi angular titik pada layar tempat pola interferensi diamati. Kemudian intensitas relatif dapat diperoleh dari

\begin{equation}\label{eqn:multi-slit-electric-relative-intensity}
\frac{I}{I_o} = |E|^2 = N^2 E_o \cos \tfrac12 \phi.
\end{equation}

Persamaan \eqref{eqn:multi-slit-electric-relative-intensity} ini yang akan digunakan untuk menggambarkan intensitas. Cukup digunakan ruas tengahnya yang akan sama hasilnya dengan ruas kanannya.


## script
Script Gnuplot `interference_intensity_svg_2.gnu` berikut digunakan untuk interferensi dua celah.

```bash
# Plot inteference intensity of 2 source
# (CC 2022) Sparisoma Viridi
# dudung@gmail.com
# 2022.03.30.40198

# svg output is selected
set term svg size 320,200 enhanced font "Times, 12"

# some constants
PI = 3.14159
E0 = 1
wt = PI/2

# electric field E1 - E2
E1(dq) = E0 * sin(wt + 0 * dq)
E2(dq) = E0 * sin(wt + 1 * dq)

# resultants and intensities
Et(dq) = E1(dq) + E2(dq)
I(dq) = Et(dq) * Et(dq)

# axis settings
set xlabel "{/Symbol f/p}"
set ylabel "{/Italic I / I_o}"
set xrange [-4:4]
set xtics 1
set grid lw 2

# samples resolution
set samples 5000

# two sources interference
set output "interference-pattern-slit-2.svg"
set yrange [0:4]
set ytics 1
plot I(x * PI) t "" lw 2 lc rgb '#00cc00'
```

Script di atas dijalankan dengan cara

```bash
$ gnuplot interference_intensity_svg_2.gnu
```

dari console atau command prompt, yang akan menghasilkan berkas `interference-pattern-slit-2.svg` seperti gambar berikut ini.

{{< svg "/static/img/light/interference/interference-pattern-slit-2.svg" "fig1" "1" "Intensitas relatif $I/I_o$ interferensi dua celah sebagai fungsi beda fasa $\phi$, dengan beda fasa dinyatakan dalam $\pi$." >}}

Hasil dari script Gnuplot `interference_intensity_svg_2.gnu` diberikan pada Gambar [1](#fig1) yang merupakan citra berformat SVG.

### modification
Script Gnuplot `interference_intensity_svg_2.gnu` dapat dimodifikasi untuk menggmbarkan tiga, empat, dan banyak celah. Untuk tiga celah misalnya

```bash
# electric field E1 - E3
E1(dq) = E0 * sin(wt + 0 * dq)
E2(dq) = E0 * sin(wt + 1 * dq)
E3(dq) = E0 * sin(wt + 2 * dq)

# resultants and intensities
Et(dq) = E1(dq) + E2(dq) + E3(dq)
I(dq) = Et(dq) * Et(dq)
```

adalah modifikasi yang perlu dilakukan.


## exer
1. Bagimana modifikasi yang perlu dilakukan bila ingin menggambarkan intensitas relatif hasil interferensi oleh delapan celah?
2. Terdapat berapa suku medan listrik yang perlu dijumlahkan bila ingin diperoleh intensitas relatif hasil interferensi oleh sepuluh celah?
3. Bila terdapat cukup banyak celah, bagaimana lebar terang utama yang dihasilkan? Apa kaitannya dengan intesitas relatif yang dihasilkan oleh kisi difraksi?


## notes
1. <a name='r01'></a>Thomas Williams, Colin Kelley, Russell Lang, Dave Kotz, John Campbell, Gershon Elber, Alexander Woo and many others, "gnuplot homepage", Gnuplot, Feb 2022, url <http://www.gnuplot.info/> [20220402].
2. <a name='r02'></a>Carl Rod Nave, "Multiple Slit Interference", HyperPhyics, 2007, url <http://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/mulslidi.html> [20230402].
3. <a name='r03'></a>Sen-ben Liao, Peter Dourmashkin, John Belcher, "Interference and Diffraction", Physics 8.02 Electricity and Magnetism, Massachusetts Institute of Technology, 2 Dec 2003, url <https://web.mit.edu/8.02t/www/802TEAL3D/visualizations/coursenotes/modules/guide14.pdf> [20220402].



{{< citeas >}}