---
layout: post
authors: [viridi]
title: ac rlc series
permalink: pages/0574
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["alternating current", "sinusoidal", "time function", "resistor", "inductor", "capacitor", "series"]
date: 2022-03-16 06:51:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/57/2022-03-16-ac-rlc-series.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Pada rangkaian seri arus yang melewati semua komponen listrik memiliki nilai yang sama. Untuk arus bolak-balik prinsip ini pun tetap berlaku. Dengan menggunakan tegangan pada resistor [[1](#r01)], induktor [[2](#r02)], dan kapasitor [[3](#r03)] dapat dibahas tegangan total pada rangkaian RLC seri yang diberik arus bolak-balik.


## current source
Sumber arus bolak-balik memiliki fungsi

\begin{equation}\label{eqn:ac-current-source}
I(t) = I_m \sin (\omega t + \varphi),
\end{equation}

dengan $I(t)$ arus sebagai fungsi waktu, $I_m$ amplitudo atau nilai maksimum arus, $\omega$ frekuensi angular, $t$ waktu, dan $\varphi$ adalah fasa awal.

## voltage function
Pada masing-masing komponen $R$, $L$, dan $C$ terdapat fungsi tegangan dengan fasa yang berbeda beda.

### resistor voltage
Dengan arus dari Persamaan \eqref{eqn:ac-current-source} akan diperoleh

\begin{equation}\label{eqn:ac-current-source-voltage-r}
V_R(t) = V_{R,m} \sin (\omega t + \varphi),
\end{equation}

yang merupakan tegangan pada resitor.

### inductor voltage
Dengan arus dari Persamaan \eqref{eqn:ac-current-source} akan diperoleh

\begin{equation}\label{eqn:ac-current-source-voltage-c}
V_L(t) = V_{L,m} \sin (\omega t + \varphi + \tfrac12 \pi),
\end{equation}

yang merupakan tegangan pada induktor.

### capacitor voltage
Dengan arus dari Persamaan \eqref{eqn:ac-current-source} akan diperoleh

\begin{equation}\label{eqn:ac-current-source-voltage-l}
V_C(t) = V_{C,m} \sin (\omega t + \varphi - \tfrac12 \pi),
\end{equation}

yang merupakan tegangan pada kapasitor.

### total voltage
Tegangan-tegangan pada Persamaan \eqref{eqn:ac-current-source-voltage-r}, \eqref{eqn:ac-current-source-voltage-l}, dan \eqref{eqn:ac-current-source-voltage-c} dapat dijumlahkan karena merupakan rangkaian seri

\begin{equation}\label{eqn:ac-current-source-voltage-rlc-series}
\begin{array}{rcl}
V(t) & = & V_R(t) + V_L(t) + V_C(t) \newline
& = & V_{R,m} \sin (\omega t + \varphi) \newline
&& + V_{L,m} \sin (\omega t + \varphi + \tfrac12 \pi) \newline
&& + V_{C,m} \sin (\omega t + \varphi - \tfrac12 \pi) \newline
& = & V_m \sin (\omega t + \varphi + \phi),
\end{array}
\end{equation}

yang merupakan tegangan total rangkaian seri RLC dengan $\phi$ adalah sudut fasa yang akan dicari.


## impedance
Persamaan \eqref{eqn:ac-current-source-voltage-rlc-series} dapat dituliskan kembali dalam bentuk

\begin{equation}\label{eqn:ac-current-source-voltage}
V(t) = Z I_m \sin (\omega t + \varphi + \phi),
\end{equation}

dengan $Z$ adalah impedansi rangkaian

\begin{equation}\label{eqn:ac-rlc-series-impedance}
Z = \sqrt{R^2 + (X_L - X_C)^2}
\end{equation}

yang diperoleh dengan diagram fasor, di mana

\begin{equation}\label{eqn:inductive-reactance}
X_L = \omega L
\end{equation}

adalah reaktansi induktif dan

\begin{equation}\label{eqn:capacitive-reactance}
X_C = \frac{1}{\omega C}
\end{equation}

adalah reaktansi kapasitif. Dan bahwa

\begin{equation}\label{eqn:phase-angle}
\tan \phi = \frac{X_L - X_C}{R}
\end{equation}

dapat pual diperoleh dari digram fasor.


## note
1. <a name='r01'></a>Carl Rod Nave, "Resistor AC Response", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/acres.html> [20220316].
2. <a name='r02'></a>Carl Rod Nave, "Inductor AC Response", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/acind.html> [20220316].
3. <a name='r03'></a>Carl Rod Nave, "Capacitor AC Response", HyperPhysics, 2017, url <https://hyperphysics.phy-astr.gsu.edu/hbase/electric/accap.html> [20220316].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
