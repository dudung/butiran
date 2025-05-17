---
layout: post
authors: [viridi]
title: ac resistor
permalink: pages/0571
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["alternating current", "sinusoidal", "time function", "resistor"]
date: 2022-03-16 05:23:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/57/2022-03-16-ac-resistor.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Arus dan tegangan pada resisor memiliki fasa yang sama dalam sebuah rangkaian arus bola-balik [[1](#r01)].


## current source
Sumber arus bolak-balik memiliki fungsi

\begin{equation}\label{eqn:ac-current-source}
I(t) = I_m \sin (\omega t + \varphi),
\end{equation}

dengan $I(t)$ arus sebagai fungsi waktu, $I_m$ amplitudo atau nilai maksimum arus, $\omega$ frekuensi angular, $t$ waktu, dan $\varphi$ adalah fasa awal.


## ohm's law
Hukum Ohm memberikan hubungan

\begin{equation}\label{eqn:ohm-law}
V_R = R I,
\end{equation}

dengan $V_R$ tegangan, $I$ arus, dan $R$ resistansi.


## voltage
Substitusi Persamaan \eqref{eqn:ac-current-source} ke Persamaan \eqref{eqn:ohm-law} akan memberikan

\begin{equation}\label{eqn:ac-current-source-voltage}
\begin{array}{rcl}
V_R(t) & = & R I(t) \newline
& = & R I_m \sin (\omega t + \varphi) \newline
& = & V_{R,m} \sin (\omega t + \varphi),
\end{array}
\end{equation}

yang merupakan tegangan sebagai fungsi waktu pada resistor yang diberi arus bolak-balik. Selanjutnya, dari Persamaan \eqref{eqn:ac-current-source-voltage} dapat diperoleh hubungan

\begin{equation}\label{eqn:ohm-law-max}
V_{R,m} = R I_m
\end{equation}

dan didapatkan pula

\begin{equation}\label{eqn:ohm-law-rms}
V_{R,\rm rms} = R I_{\rm rms}
\end{equation}

dari hubungan antara nilai maksimum dan rms untuk tegangan dan arus.


## note
1. <a name='r01'></a>Carl Rod Nave, "Resistor AC Response", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/acres.html> [20220316].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
