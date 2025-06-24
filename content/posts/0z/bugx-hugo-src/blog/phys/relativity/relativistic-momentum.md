---
title: "relativistic momentum"
date: 2022-04-10T20:58:00+07:00
lastmod: 2022-04-11T08:39:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'relativity', 'relativistic-momentum', 'draft']
url: "0050"
draft: false
---
Akibat transformasi Lorentz hukum II Newton tidak lagi memiliki bentuk yang sama dalam kerangka yang berbeda sehingga rumusan terkait momentum perlu disesuaikan [[1](#r01)]. Atau secara sederhana momentum relativistik tetap menggunakan rumusan momentum akan tetapi massa yang digunakan adalah mass relativistik [[2](#r02)].


## formula
Momentum dalam satu dimensi diberikan oleh [[3](#r03)]

\begin{equation}\label{eqn:momentum-1d}
p = mv,
\end{equation}

dengan $m$ adalah massa dan $v$ adalah kecepatan. Pada perumusannya, Persamaan \eqref{eqn:momentum-1d} ini belum menyingung konsep relativitas.

Selanjutnya, dalam relativitas khusus Persamaan \eqref{eqn:momentum-1d} akan menjadi

\begin{equation}\label{eqn:relativistic-momentum-1d}
p = mv,
\end{equation}

dengan $m$ adalah massa relativistik dan $v$ kecepatan, di mana massa relativistik $m$ terkait dengan massa diam $m_0$

\begin{equation}\label{eqn:relativistic-mass}
m = \gamma m_0
\end{equation}

dan

\begin{equation}\label{eqn:lorentz-factor}
\gamma = \frac{1}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}
\end{equation}

adalah faktor Lorentz. Dengan demikian, substitusi Persamaan \eqref{eqn:lorentz-factor} ke Persamaan \eqref{eqn:relativistic-mass} lalu hasilnya disubstitusikan lanjut ke Persamaan \eqref{eqn:relativistic-momentum-1d} akan menghasilkan

\begin{equation}\label{eqn:relativistic-momentum-1d-rest-mass}
p = \frac{m_0 v}{\displaystyle \sqrt{1 - \frac{v^2}{c^2}}}.
\end{equation}

Untuk $v < < c$ Persamaan \eqref{eqn:relativistic-momentum-1d-rest-mass} akan menjadi

\begin{equation}\label{eqn:relativistic-momentum-1d-rest-mass-lower0-speed}
p \approx m_0 v,
\end{equation}

yang tak lain adalah Persamaan \eqref{eqn:momentum-1d}.


## recent term
Mengikuti suatu pendapat [[4](#r04)], sebaiknya momentum relativistik dituliskan dalam bentuk

\begin{equation}\label{eqn:relativistic-momentum}
p = \gamma mv,
\end{equation}

yang tidak lagi menyinggung adanya dua istilah berbeda, mass diam $m_0$ dan massa relativistik $m$, cukup massa $m$.


## notes
1. <a name='r01'></a>Darin Acosta, "Relativistic Momentum", PHY2061 Enriched Physics 2 - Electromagnetism Lecture Notes, 11 Oct 2015, url <http://www.phys.ufl.edu/~acosta/phy2061/lectures/Relativity4.pdf> [20220410].
2. <a name='r02'></a>Carl Rod Nave, "Relativistic Momentum", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Relativ/relmom.html#c1> [20220410].
3. <a name='r03'></a>Tom Henderson, "Momentum", The Physics Classroom, 2022, url <https://www.physicsclassroom.com/Class/momentum/u4l1a.cfm> [20220411].
4. <a name='r04'></a>Gron Tudor Jones, "Introduction to Relativistic Mechanics  and the Concept of Mass", University of Birmingham, CERN HST2014, 14 Jul 2014, url <https://indico.cern.ch/event/318730/attachments/613329/843780/Relativistic_mechanics_and_mass.pdf> [20220411].

{{< citeas >}}
