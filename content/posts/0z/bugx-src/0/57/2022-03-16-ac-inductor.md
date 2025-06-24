---
layout: post
authors: [viridi]
title: ac inductor
permalink: pages/0572
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["alternating current", "sinusoidal", "time function", "inductor"]
date: 2022-03-16 05:38:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/57/2022-03-16-ac-inductor.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Arus ketinggalan dengan fasa sebesar $\frac12 \pi$ dari tegangan pada induktor dalam sebuah rangkaian arus bola-balik [[1](#r01)]. Atau dapat dikatakan bahwa fasa tegangan mendahului arusnya pada induktor yang diberi arus bolak-balik.


## current source
Sumber arus bolak-balik memiliki fungsi

\begin{equation}\label{eqn:ac-current-source}
I(t) = I_m \sin (\omega t + \varphi),
\end{equation}

dengan $I(t)$ arus sebagai fungsi waktu, $I_m$ amplitudo atau nilai maksimum arus, $\omega$ frekuensi angular, $t$ waktu, dan $\varphi$ adalah fasa awal.


## self inductance
Tegangan induksi pada sebuah induktor diberikan oleh

\begin{equation}\label{eqn:induced-voltage}
V_L = L \frac{dI}{dt}
\end{equation}

dengan $V_L$ tegangan, $I$ arus, dan $L$ induktansi sebuah induktor.


## voltage
Substitusi Persamaan \eqref{eqn:ac-current-source} ke Persamaan \eqref{eqn:induced-voltage} akan memberikan

\begin{equation}\label{eqn:ac-current-source-voltage}
\begin{array}{rcl}
V_L(t) & = & \displaystyle L  \frac{dI(t)}{dt} \newline
& = & \displaystyle L \frac{d}{dt} \left[ I_m \sin (\omega t + \varphi) \right] \newline
& = & L\omega I_m \cos (\omega t + \varphi) \newline
& = & \omega L I_m \sin (\omega t + \varphi + \tfrac12 \pi) \newline
& = & X_L I_m \sin (\omega t + \varphi + \tfrac12 \pi) \newline
& = & V_{L,m} \sin (\omega t + \varphi + \tfrac12 \pi),
\end{array}
\end{equation}

yang merupakan tegangan pada induktor yang diberi arus bolak-balik. Dari Persamaan \eqref{eqn:ac-current-source-voltage} diperoleh

\begin{equation}\label{eqn:inductive-reactance}
X_L = \omega L,
\end{equation}

yang merupakan reaktansi induktir. Dan juga didaapatkan hubungan antara amplitudo arus dan tengangan pada induktor

\begin{equation}\label{eqn:inductor-current-voltage}
V_{L,m} = X_L I_m.
\end{equation}

Selain itu hubungan antara besaran rms dan maksimum tetap berlaku.


## note
1. <a name='r01'></a>Carl Rod Nave, "Inductor AC Response", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/acind.html> [20220316].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
