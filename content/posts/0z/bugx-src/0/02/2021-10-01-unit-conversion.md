---
layout: post
authors: [viridi]
title: unit conversion
permalink: pages/0021
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: math
tags: ["unit", "conversion", "one"]
date: 2021-10-02 14:04:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/02/2021-10-01-unit-conversion.md
twitter_username: 6unpnp
nodes: []
---
Konversi satuan dapat dilakukan dengan mengalikan satuan yang akan diubah dengan bilangan setara satu [[1](#r01),[2](#r02)] atau mengalikannya dengan suatu faktor konversi [[3](#r03),[4](#r04),[5](#r05),[6](#r06)], di mana kedua cara tersebut menggunakan konsep yang sama. Dalam era internat saat ini terdapat banyak aplikasi daring untuk melakukan konversi satuan, dari yang langsung menampilkan besaran-besaran yang dapat dikonversi [[7](#r07),[8](#r08),[9](#r09)], sampai yang pengguna perlu terlebih dahulu memilih kategori satuan yang akan dikonversinya [[10](#r10),[11](#r11)].


## conversion factors
Dalam kinematika salah satu konversi yang sering digunakan adalah satuan untuk kecepatan yang dapat menggunakan $\rm km/h$ dan $\rm m/s$. Lalu terdapat hubungan-hubungan berikut

\begin{equation}\label{eqn-01}
1 \ {\rm km} = 1000 \ {\rm m},
\end{equation}

\begin{equation}\label{eqn-02}
1 \ {\rm h} = 60 \ {\rm min},
\end{equation}

\begin{equation}\label{eqn-03}
1 \ {\rm min} = 60 \ {\rm s},
\end{equation}

di mana Persamaan \eqref{eqn-02} dan \eqref{eqn-03}

\begin{equation}\label{eqn-04}
1 \ {\rm h} = 3600 \ {\rm s}.
\end{equation}

Membagi Persamaan \eqref{eqn-01} dengan Persamaan \eqref{eqn-04} akan menghasilkan

$$
\frac{1 \ {\rm km}}{1 \ {\rm h}} = \frac{1000 \ {\rm m}}{3600 \ {\rm s}}
$$

yang memberikan faktor konversi yang diingkan, yaitu

\begin{equation}\label{eqn-05}
1 \ {\rm km/h} = \frac{5}{18} \ {\rm m/s}
\end{equation}

atau

\begin{equation}\label{eqn-06}
1 \ {\rm m/s} = \frac{18}{5} \ {\rm km/h}.
\end{equation}

Suatu benda dengan kecepatan $72 \ \rm m/s$ dengan bantuan Persamaan \eqref{eqn-05} akan memberikan

$$
v = 72 \ {\rm km/h} = 72 \cdot 1 \ {\rm km/h} = 72 \cdot \frac{5}{18} \ {\rm m/s} = 20 \ {\rm m/s}
$$

dan juga berlaku sebaliknya untuk benda dengan kecepatan $20 \ {\rm m/s}$ dengan bantuan Persamaan \eqref{eqn-06} akan memberikan

$$
v = 20 \ {\rm m/s} = 20 \cdot 1 \ {\rm m/s} = 20 \cdot \frac{18}{5} \ {\rm km/h} = 72 \ {\rm km/h}.
$$

Perhatikan bagaimana substitusi $1 \ \rm km/h$ dilakukan menggunakan Persamaan \eqref{eqn-05} dan $1 \ \rm m/s$ dilakukan menggunakan Persamaan \eqref{eqn-06}.


## one
Bilangan satu dapat diperoleh dari Persamaan \eqref{eqn-01}, \eqref{eqn-02}, dan \eqref{eqn-03} dalam bentuk

\begin{equation}\label{eqn-07}
1 \equiv \frac{1000 \ {\rm m}}{1 \ {\rm km}}, \ \ \ \ 1 \equiv \frac{1 \ {\rm km}}{1000 \ {\rm m}},
\end{equation}

\begin{equation}\label{eqn-08}
1 \equiv \frac{1 \ {\rm h}}{60 \ {\rm min}}, \ \ \ \ 1 \equiv \frac{60 \ {\rm min}}{1 \ {\rm h}},
\end{equation}

\begin{equation}\label{eqn-09}
1\equiv \frac{1 \ {\rm min}}{60 \ {\rm s}}, \ \ \ \ 1\equiv \frac{60 \ {\rm s}}{1 \ {\rm min}},
\end{equation}

yang dapat dipilih sesuai dengan kebutuhan karena mengalikan sesuatu nilai dengan satu tidak mengubah nilai bilangan tersebut. Satuan akhir dari konversi yang perlu diperhatikan.

Suatu benda dengan kecepatan $\rm 36 \ \rm km/h$, dengan menggunakan Persamaan \eqref{eqn-07}, \eqref{eqn-08}, \eqref{eqn-09} akan menjadi

$$
\require{cancel}
\begin{array}{rcl}
v & = & 36 \ {\rm km/h} \newline
& = & \displaystyle 36 \ {\rm \frac{km}{h}} \cdot 1 \cdot 1 \cdot 1 \newline
& = & \displaystyle 36 \ {\rm \frac{km}{h}} \cdot \frac{1000 \ {\rm m}}{1 \ {\rm km}} \cdot \frac{1 \ {\rm h}}{60 \ {\rm min}} \cdot \frac{1 \ {\rm min}}{60 \ {\rm s}} \newline
& = & \displaystyle 36 \ {\rm \frac{\cancel{km}}{\bcancel{h}}} \cdot \frac{1000 \ {\rm m}}{1 \ \cancel{\rm km}} \cdot \frac{1 \ \bcancel{\rm h}}{60 \ \xcancel{\rm min}} \cdot \frac{1 \ \xcancel{\rm min}}{60 \ {\rm s}} \newline
& = & \displaystyle 36 \cdot \frac{1000}{3600} \ {\rm \frac{m}{s}} \newline
& = & \displaystyle 10 \ {\rm \frac{m}{s}} \newline
& = & 10 \ {\rm m/s}.
\end{array}
$$

Dan dengan cara yang sama kecepatan $10 \ \rm m/s$ akan menjadi

$$
\require{cancel}
\begin{array}{rcl}
v & = & 10 \ {\rm m/s} \newline
& = & \displaystyle 10 \ {\rm \frac{m}{s}} \cdot 1 \cdot 1 \cdot 1 \newline
& = & \displaystyle 10 \ {\rm \frac{m}{s}} \cdot \frac{1 \ {\rm km}}{1000 \ {\rm m}} \cdot \frac{60 \ {\rm min}}{1 \ {\rm h}} \cdot \frac{60 \ {\rm s}}{1 \ {\rm min}} \newline
& = & \displaystyle 10 \ {\rm \frac{\cancel{m}}{\bcancel{s}}} \cdot \frac{1 \ {\rm km}}{1000 \ \cancel{\rm m}} \cdot \frac{60 \ \xcancel{\rm min}}{1 \ {\rm h}} \cdot \frac{60 \ \bcancel{\rm s}}{1 \ \xcancel{\rm min}} \newline
& = & \displaystyle 10 \cdot \frac{3600}{1000} \ {\rm \frac{km}{h}} \newline
& = & \displaystyle 36 \ {\rm \frac{km}{h}} \newline
& = & 36 \ {\rm km/h}
\end{array}
$$

kembali menggunakan Persamaan \eqref{eqn-07}, \eqref{eqn-08}, \eqref{eqn-09}.


## exer
1. Sebuah benda bergerak dengan kecepatan $v = 5 \ \rm m/s$. Nyatakan kecepatan benda dalam $\rm km/h$.
2. Dalam perjalanannya sebuah mobil bergerak dengan kecepatan $v = 90 \ \rm km/h$. Berapakah kecepatan mobil dalam $\rm m/s$?
3. Motor pertama bergerak dengan kecepatan $v_1 = 15 \ \rm m/s$ dan motor kedua begerak pada arah yang sama dengan kecepatan $v_2 = 54 \ \rm km/h$. Manakah motor yang memiliki kecepatan lebih besar?
4. Energi partikel dalam reaksi nuklir sering dinyatakan dalam $\rm eV$ ketimbang dalam $\rm J$. Tuliskan nilai satu yang dapat digunakan dalam konversi satuan dari $\rm eV$ ke $\rm J$ atau sebaliknya. Dalam hal ini cukup gunakan empat angka berarti [[12](#r12)].
5. Benda yang bergerak dengan laju mendekati laju cahaya, umum dinyatakan dengan $c$ ketimbang $\rm m/s$. Suatu benda bergerak dengan laju $v = 0.8c$, nyatakanlah laju benda dalam $\rm m/s$. Gunakan tiga angka berarti untuk nilai $c$ [[13](#r13),[14](#r14)].


## note
1. <a name="r01"></a>Metric Program, "Unit Conversion", National Institute of Standards and Technology, U.S. Department of Commerce, 28 Sep 2021, url <https://www.nist.gov/pml/weights-and-measures/metric-si/unit-conversion> [20211001].
2. <a name="r02"></a>Steven Holzner, "How to Convert between Measurement Units in Physics", Dummies, John Wiley & Sons, Inc., 2021, url <https://www.dummies.com/education/science/physics/how-to-convert-between-measurement-units-in-physics/> [20211001].
3. <a name="r03"></a>Samuel J. Ling, Jeff Sanny, Bill Moebs, other contributing authors, "1.4: Unit Conversion", in University Physics (OpenStax), 6 Nov 2020, url <https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/01%3A_Units_and_Measurement/1.04%3A_Unit_Conversion> [20211001].
4. <a name="r04"></a>Boundless.com, other contributors, "Units", Boundless Physics, Lumen Learning, url <https://courses.lumenlearning.com/boundless-physics/chapter/units/> [20211001].
5. <a name="r05"></a>William Moebs, Samuel J. Ling, Jeff Sanny, "1.3 Unit Conversion", University Physics Volume 1, OpenStax, Pressbooks, url <https://opentextbc.ca/universityphysicsv1openstax/chapter/1-3-unit-conversion/> [20211001].
6. <a name="r06"></a>Wikipedia contributors, "Conversion of units", Wikipedia, The Free Encyclopedia, 17 September 2021, 11:39 UTC, <https://en.wikipedia.org/w/index.php?oldid=1044851966> [20211001].
7. <a name="r07"></a>-, "Unit Converter Express Version", Converters.net, Maple Tech International LLC, 2021, url <https://www.unitconverters.net/> [20211001].
8. <a name="r08"></a>-, "Conversion Calculator", Converters.net, Maple Tech International LLC, 2021, url <https://www.calculator.net/conversion-calculator.html> [20211001].
9. <a name="r09"></a>-, "Quick conversion", Convertworld.com, 2021, url <https://www.convertworld.com/en/> [20211001].
10. <a name="r10"></a>Robert Fogt, "Online Conversion - Convert just about anything to anything else", OnlineConversion.com, 2021, url <https://www.onlineconversion.com/> [20211001].
11. <a name="r11"></a>"Unit conversion", Advameg, Inc., 2021, url <http://www.unit-conversion.info/> [20211001].
12. <a name="r12"></a>The Editors of Encyclopaedia Britannica, Yamini Chauhan, Erik Gregersen, Howard Wilk, "Electron volt", Encyclopædia Britannica, 05 May 2014, url <https://www.britannica.com/science/electron-volt> [20211002].
13. <a name="r13"></a>Mikel Holcomb, "Example Problems for Chapters
1, 2 & 3", West Virginia University, USA, url <https://community.wvu.edu/~miholcomb/samples123.pdf> [20211002].
14. <a name="r14"></a>Prasanna, "The speed of light to five significant figures is 2.9979 x 108 m/s. What is the speed of light", Learn CBSE Forum, India, 8 Mar 2018, url <https://ask.learncbse.in/t/21996> [20211002].


## &nbsp;
[si units](0020.html)
{% comment %} []() &bull; []() {% endcomment %}
