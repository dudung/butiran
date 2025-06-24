---
title: "relative velocity"
date: 2022-04-06T13:51:00+07:00
lastmod: 2022-04-07T10:47:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'kinematics', 'velocity', 'relative', 'draft']
url: "0045"
draft: false
---
Dalam kehidupan sehari-hari peristiwa terkait kecepatan relatif sering ditemui dan kadang membuat tertegun saat tidak menyadarinya. Beberapa peristiwa yang dimaksud adalah seperti merasa gerbong kereta yang ditempati bergerak mundur hanya karena gerbong di sebelahnya bergerak maju saat berada di stasiun [[1](#r01)], mobil yang dikendarai tersusul oleh mobil lain yang terlihat seperti bergerak lambat [[2](#r02)], perahu bergerak tegak lurus sisi meyeberangi sungai tidak sampai ke titik yang dituju [[3](#r03)], dan bumi bergerak mengelilingi matahari dengan laju cukup besar tanpa disadari penghuninya [[4](#r04)].


## notation
Kecepatan benda ${\rm A}$ relatif terhadap benda ${\rm B}$ dinyatakan dengan [[5](#r05)]

\begin{equation}\label{eqn:relative-velocity-a-b}
\vec{v} _{\rm AB} = \vec{v} _{\rm A} - \vec{v} _{\rm B},
\end{equation}

atau ada juga yang menggunakan notasi $\vec{v} _{\rm B\|A}$ dan $\vec{v} _{\rm A \ rel \ B}$ [[6](#r06)]. Di sini akan digunakan notasi pada Persamaan \eqref{eqn:relative-velocity-a-b} karena lebih singkat.


## addition
Kecepatan relatif dapat dijumlahkan dengan

\begin{equation}\label{eqn:relative-velocity-addition}
\vec{v} _{\rm EF} = \vec{v} _{\rm EG} + \vec{v} _{\rm GF}.
\end{equation}

Perhatikan perubahan bagaimana berubahnya indeks dua kecepatan relatif yang dijumlahkan pada pada persamaan di atas. Persamaan \eqref{eqn:relative-velocity-addition} in dapat pula dituliskan kembali menjadi

\begin{equation}\label{eqn:relative-velocity-substraction-same-ref}
\vec{v} _{\rm EG} = \vec{v} _{\rm EF} - \vec{v} _{\rm GF},
\end{equation}

yang menggambarkan kecepatan relatif dua benda, di mana masing-masing kecepatan bendanya diukur atau merupakan kecepatan relatif terhadap terhadap benda ketiga. Persamaan \eqref{eqn:relative-velocity-substraction-same-ref} dengan referensi kerangka yang diam (benda ketiga) akan menjadi Persamaan \eqref{eqn:relative-velocity-a-b}.


## 1-d example
Sebagai ilustrasi diberikan contoh berupa gerak 1-d seperti pada gambar berikut ini yang terdiri dari tiga benda dan satu medium.

{{< svg "/static/img/phys/kinematics/relative-velocity-heap-3.svg" "fig1" "1" "Mobil ${\rm c}$ berada di atas truk ${\rm l}$ yang ada di atas kapal ${\rm s}$ yang sedang mengaruni lautan ${\rm w}$." >}}

Walaupun terlalu dibuat-buat, Gambar [1](#fig1) telah memberikan ilustrasi benda bertumpuk di mana masing-masing kecepatan benda dinyatakan relatif terhadap benda di bawahnya, seperti mobil ${\rm c}$ terhadap truk ${\rm l}$ dan truk ${\rm l}$ terhadap kapal ${\rm s}$. Selain itu kecepatan kapal ${\rm s}$ juga dinyatakan relatif terhadap lautan ${\rm w}$. Penamaan benda-benda pada gambar di atas mengacu pada kata dalam bahasa Inggris berikut ${\rm c}$ (car), ${\rm l}$ (lorry), ${\rm s}$ (ship), dan ${\rm w}$ (water).

{{< svg "/static/img/phys/dynamics/stacked-object-3.svg" "fig2" "2" "Tiga benda bertumpuk dengan massa $m_1$, $m_2$, $m_3$ yang bergerak di atas lantai mendatar licin." >}}

Dalam dinamika saat membahas sistem benda bertumpuk yang bergerak di atas lantai mendatar licin diberikan ilustrasinya pada Gambar [1](#fig2). Dengan adanya gaya gesek antar benda, yang dalam hal ini antara benda $m_1$ dan $m_2$ ($\mu_{21} \ne 0$) dan antara benda $m_2$ dan $m_3$ ($\mu_{23} \ne 0$), terdapat kemungkinan kedua benda yang bersentuhan dapat bergerak bersama. Kemungkin ini tergantung dari nilai gaya $F_2$ yang diberikan pada benda bermassa $m_2$ terhadap nilai-nilai koefisien gesek antara benda $m_2$ dengan $m_1$ berupa $\mu_{21}$ dan antara benda $m_2$ dengan $m_3$ berupa $\mu_{23}$.


## limitation
Persamaan \eqref{eqn:relative-velocity-addition} memiliki batasan dikarenakan kecepatan relatif antara dua benda tidak pernah melampaui kecepatan cahaya [[7](#r07)], sehingga untuk gerak satu dimensi akan menjadi

\begin{equation}\label{eqn:einstein-velocity-addition}
v_{\rm EF} = \frac{v_{\rm E} + v_{\rm F}}{\displaystyle 1 + \frac{v_{\rm E} v_{\rm F}}{c^2}}
\end{equation}

yang merupakan hubungan yang dikenal sebagai penjumlahan kecepatan Einstein. Konstanta $c$ pada Persamaan \eqref{eqn:einstein-velocity-addition} adalah kecepatan cahaya.


## exer
1. Gunakan Persamaan \eqref{eqn:relative-velocity-a-b} untuk menunjukkan bagaimana ruas kanan Persamaan \eqref{eqn:relative-velocity-addition} dapat memberikan ruas kirinya.
2. Tentukan kecepatan mobil ${\rm c}$ relatif menurut pengamat yang berada di laut ${\rm w}$.
3. Ketiga benda $m_1$, $m_2$, dan $m_3$ pada Gambar [2](#fig2) dapat bergerak bersama-sama, bagaimanakah nilai $v_{12}$ dan $v_{23}$?


## notes
1. <a name='r01'></a>Lisa Jardine-Wright, Mark Warner, Project Team, "Relative Velocity", Isaac Physics, Department for Education, University of Cambridge, url <https://isaacphysics.org/concepts/cp_relative_velocity> [20220406].
2. <a name='r02'></a>Aju Jacob, "Relative velocity in two dimensions", HelpYouBetter, 22 Oct 2019, url <https://www.helpyoubetter.com/relative-velocity/> [20220406].
3. <a name='r03'></a>Tom Henderson, "Relative Velocity and Riverboat Problems", The Physics Classroom, 2022, url <https://www.physicsclassroom.com/class/vectors/Lesson-1/Relative-Velocity-and-Riverboat-Problems> [20220406].
4. <a name='r04'></a>Noemi Cardona Gonzalez, David Wood, "Relative Velocity: Formula and Examples", Study.com, 14 Mar 2022, url <https://study.com/learn/lesson/relative-velocity-formula-importance.html> [20220406].
5. <a name='r05'></a>Admin, "Relative velocity in two dimensions", BYJU'S, 26 Aug 2020, url <https://byjus.com/physics/relative-velocity/> [20220406].
6. <a name='r06'></a>Wikipedia contributors, "Relative velocity", Wikipedia, The Free Encyclopedia, 23 October 2021, 00:31 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1051355362> [20220406].
7. <a name='r07'></a>Carl Rod Nave, "Einstein Velocity Addition", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Relativ/einvel.html> [20220406].


{{< citeas >}}
