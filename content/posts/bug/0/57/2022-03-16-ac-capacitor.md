---
layout: post
authors: [viridi]
title: ac capacitor
permalink: pages/0573
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["alternating current", "sinusoidal", "time function", "capacitor"]
date: 2022-03-16 05:52:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/57/2022-03-16-ac-capacitor.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Arus mendahului dengan fasa sebesar $\frac12 \pi$ dari tegangan pada kapasitor dalam sebuah rangkaian arus bola-balik [[1](#r01)]. Atau dapat dikatakan bahwa fasa tegangan tertinggal dari arusnya pada kapasitor yang diberi arus bolak-balik.


## current source
Sumber arus bolak-balik memiliki fungsi

\begin{equation}\label{eqn:ac-current-source}
I(t) = I_m \sin (\omega t + \varphi),
\end{equation}

dengan $I(t)$ arus sebagai fungsi waktu, $I_m$ amplitudo atau nilai maksimum arus, $\omega$ frekuensi angular, $t$ waktu, dan $\varphi$ adalah fasa awal.


## stored charge
Tegangan pada sebuah kapasitor diberikan oleh

\begin{equation}\label{eqn:stored-voltage}
V_C = \frac{q}{C}
\end{equation}

dengan $V_C$ tegangan, $q$ muatan, dan $C$ kapasitansi sebuah kapasitor. Selain itu terdapat pula

\begin{equation}\label{eqn:charge-current}
q = \int I dt
\end{equation}

yang merupakan hubungan antara arus $I$ dan muatan $q$. Umumnya lebih dikenal bentuk diferensialnya $I = dq/dt$.


## voltage
Substitusi Persamaan \eqref{eqn:ac-current-source} ke Persamaan \eqref{eqn:charge-current} dan diteruskan ke Persamaan \eqref{eqn:stored-voltage} akan memberikan

\begin{equation}\label{eqn:ac-current-source-voltage}
\begin{array}{rcl}
V_C(t) & = & \displaystyle \frac{q}{C} \newline
& = & \displaystyle \frac{1}{C} \int I(t) dt \newline
& = & \displaystyle \frac{1}{C} \int I_m \sin (\omega t + \varphi) \ dt \newline
& = & \displaystyle \frac{1}{C} \frac{-1}{\omega} I_m \cos (\omega t + \varphi) \ dt \newline
& = & \displaystyle -\frac{1}{\omega C} I_m \cos (\omega t + \varphi) \ dt \newline
& = & \displaystyle - X_C I_m \cos (\omega t + \varphi) \ dt \newline
& = & \displaystyle - V_{C,m} \cos (\omega t + \varphi) \ dt \newline
& = & \displaystyle V_{C,m} \sin (\omega t + \varphi - \tfrac12 \pi) \ dt \newline
\end{array}
\end{equation}

yang merupakan tegangan pada kapasitor yang diberi arus bolak-balik. Dari Persamaan \eqref{eqn:ac-current-source-voltage} diperoleh

\begin{equation}\label{eqn:capacitive-reactance}
X_C = \frac{1}{\omega C},
\end{equation}

yang merupakan reaktansi kapasitif. Dan juga didaapatkan hubungan antara amplitudo arus dan tengangan pada kapasitor

\begin{equation}\label{eqn:capacitor-current-voltage}
V_{C,m} = X_C I_m.
\end{equation}

Selain itu hubungan antara besaran rms dan maksimum tetap berlaku.



## note
1. <a name='r01'></a>Carl Rod Nave, "Capacitor AC Response", HyperPhysics, 2017, url <https://hyperphysics.phy-astr.gsu.edu/hbase/electric/accap.html> [20220316].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
