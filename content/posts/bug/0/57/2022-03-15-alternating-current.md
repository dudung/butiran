---
layout: post
authors: [viridi]
title: alternating current
permalink: pages/0570
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["alternating current", "sinusoidal", "time function"]
date: 2022-03-16 03:14:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/57/2022-03-15-alternating-current.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Arus yang mengalir hanya pada satu arah disebut sebagai arus searah atau direct current (DC), sedangkan arus yang arahnya sering berbalik disebut sebagai arus bolak-balik atau alternating current (AC) [[1](#r01)].


## voltage
Tegangan listrik pada arus bolak-balik memiliki fungsi matematika

\begin{equation}\label{eqn:ac-voltage}
V(t) = V_m \sin (\omega t + \varphi),
\end{equation}

dengan $V(t)$ tegangan sebagai fungsi waktu $t$, $V_m$ tegangan maksimum, $\omega$ frekuensi angular, dan $\phi$ adalah beda fasa terhadap sumber lain. Frekuensi sudut adalah

\begin{equation}\label{eqn:ac-voltage-omega}
\omega = 2\pi f = \frac{2\pi}{T},
\end{equation}

dengan $f$ adalah frekuensi dan $T$ adalah periode.


## average value
Mengingat tegangan pada arus bolak-balik selalu berubah mengikuti Persamaan \eqref{eqn:ac-voltage}, maka bila dihitung dalam satu periode

\begin{equation}\label{eqn:ac-voltage-average}
V_{\rm avg} = \frac{1}{T} \int_t^{t+T} V_m \sin (\omega t + \varphi) \ dt
\end{equation}

akan bernilai nol, sehingga konsep tegangan rata-rata tidak dapat digunakan. Untuk menghitung Persamaan \eqref{eqn:ac-voltage-average} diperlukan

$$
\begin{array}{rcl}
\sin \omega(t + T) & = & \displaystyle \sin \left[ \frac{2\pi}{T} (t + T) \right] \newline
& = & \displaystyle \sin \left( \frac{2\pi}{T} t + 2\pi \right) \newline
& = & \displaystyle \sin \left( \frac{2\pi}{T} t \right) \newline
& = & \displaystyle \sin \omega t
\end{array}
$$

dan

$$
\begin{array}{rcl}
\cos \omega(t + T) & = & \displaystyle \cos \left[ \frac{2\pi}{T} (t + T) \right] \newline
& = & \displaystyle \cos \left( \frac{2\pi}{T} t + 2\pi \right) \newline
& = & \displaystyle \cos \left( \frac{2\pi}{T} t \right) \newline
& = & \displaystyle \cos \omega t
\end{array}
$$

yang merupakan sifat periodik fungsi sin dan cos.


## rms value
Nilai tegangan pada Persamaan \eqref{eqn:ac-voltage} tidak nyaman atau sulit diukur dan dibutuhkan satu nilai yang mewakilinya. Untuk itu digunakan konsep akar rata-rata kuadrat atau root mean square (rms) yang diperoleh dari

\begin{equation}\label{eqn:ac-voltage-rms}
V_{\rm rms} = \sqrt{ \frac{1}{T} \int_t^{t+T} [ V_m \sin (\omega t + \varphi) ]^2 \ dt }.
\end{equation}

Untuk menghitung Persamaan \eqref{eqn:ac-voltage-rms} perlu terlebih dahulu menghitung

$$
\begin{array}{rcl}
\displaystyle \int \sin^2 ax \ dx & = & \displaystyle \int \left( \tfrac12 - \tfrac12 \cos 2ax \right) \ dx \newline
& = & \displaystyle \frac12 x - \frac{1}{4a} \sin 2ax + c,
\end{array}
$$

yang akan memberikan bahwa

\begin{equation}\label{eqn:ac-voltage-rms-int-v}
\begin{array}{rcl}
\displaystyle \frac{1}{T} \int_t^{t+T} [ V_m \sin (\omega t + \varphi) ]^2 \ dt & = & \displaystyle \frac{V_m^2}{T} \left[ \frac12 t - \tfrac{1}{4\omega} \sin (2\omega t + \varphi) \right]_{t}^{t + T} \newline
& = & \displaystyle \frac{V_m^2}{T} \left\\{ \frac12( [t + T] - t) \right. \newline
& & \displaystyle \left. - \frac{1}{4\omega} \left[ \sin (\omega [t + T] + \varphi) - \sin (\omega t + \varphi) \right] \right\\} \newline
& = & \displaystyle \frac{V_m^2}{T} \frac12 T \newline
& = & \displaystyle \frac{V_m^2}{2}.
\end{array}
\end{equation}

Substitusi Persamaan \eqref{eqn:ac-voltage-rms-int-v} ke Persamaan \eqref{eqn:ac-voltage-rms} akan memberikan

\begin{equation}\label{eqn:ac-voltage-rms-vm}
V_{\rm rms} = \sqrt{ \frac{V_m^2}{2} } = \frac{V_m}{\sqrt{2}}.
\end{equation}

Persamaan \eqref{eqn:ac-voltage-rms-vm} ini menggabarkan hubungan antara nilai $V_m$ pada Persamaan \eqref{eqn:ac-voltage} dengan nilai rms-nya yang dihitung melalui Persamaan \eqref{eqn:ac-voltage-rms}.


## current
Hukum Ohm berlaku juga pada arus bolak-balik

\begin{equation}\label{eqn:ac-ohm-law}
V(t) = Z I(t)
\end{equation}

dengan hambatan $R$ diperluas menjadi impedansi $Z$ yang dapat mengandung resistor $R$, induktor $L$, dan kapasitor $L$. Melalui Persamaan \eqref{eqn:ac-ohm-law} dan \eqref{eqn:ac-voltage} dapat diperoleh

\begin{equation}\label{eqn:ac-current}
\begin{array}{rcl}
I(t) & = & \displaystyle \frac{V(t)}{Z} \newline
& = & \displaystyle \frac{V_m \sin (\omega t + \varphi)}{Z} \newline
& = & I_m \sin (\omega t + \varphi)
\end{array}
\end{equation}

yang memerlukan

\begin{equation}\label{eqn:ac-ohm-law-max}
V_m = Z I_m.
\end{equation}

Persamaan \eqref{eqn:ac-ohm-law-max} ini tak lain adalah amplitudo dari masing-masing fungsi pada kedua ruas Persamaan \eqref{eqn:ac-ohm-law}. Dan dengan segera diperoleh bahwa untuk arus

\begin{equation}\label{eqn:ac-current-rms-vm}
I_{\rm rms} = \frac{I_m}{\sqrt{2}}
\end{equation}

juga berlaku.


## power
Setelah memiliki tegangan dan arus, keduanya fungsi waktu, nilai rms, dan juga maksimumnya, berikutnya adalah daya karena besaran ini merupakan hasil kali tegangan dan arus. Dengan mengalikan Persamaan \eqref{eqn:ac-voltage} dan \eqref{eqn:ac-current} akan diperoleh

\begin{equation}\label{eqn:ac-power}
\begin{array}{rcl}
P(t) & = & V(t) I(t) \newline
& = & [V_m \sin (\omega t + \varphi)] [I_m \sin (\omega t + \varphi)] \newline
& = & V_m I_m \sin^2 (\omega t + \varphi).
\end{array}
\end{equation}

Untuk daya kita tidak perlu mencari rms-nya karena dapat dirata-ratakan mengingat funsinya telah berupa $\sin^2 (\omega t + \varphi)$ sehingga rata-ratanya tidak nol. Dengan demikian

\begin{equation}\label{eqn:ac-power-average}
\begin{array}{rcl}
P_{\rm avg} & = & \displaystyle \frac{1}{T} \int_t^{t+T} P(t) \ dt \newline
& = & \displaystyle \frac{1}{T} \int_t^{t+T} V_m I_m \sin^2 (\omega t + \varphi) \ dt \newline
& = & \displaystyle \frac{V_m I_m}{2} \newline
& = & \displaystyle \frac{V_m}{\sqrt{2}} \frac{I_m}{\sqrt{2}} \newline
& = & \displaystyle V_{\rm rms} I_{\rm rms}.
\end{array}
\end{equation}


## not a perfect sine
Perumusan nilai rms mengasumsikan bahwa bentuk gelombang sinus halus sehingga terdapat kaitan antara nilai maksimum, baik arus maupun tegangan, dengan nilai rms-nya. Bila terdapat gangguang, maka perlu dilakukan sampling selain mendeteksi puncaknya dengan suatu vormula sementara yang lebih dapat diandalkan ketimbang hanya mendeteksi nilai maksimumnya [[2](#r02)].


## standard time function
Bentuk fungsi waktu dari tegangan dan arus akan mengikut Persamaan \eqref{eqn:ac-voltage} dan \eqref{eqn:ac-current} yang berlaku pada resistor, induktor, kapasitor, dan gabungan ketiganya pada susunan seri, paralel, dan kombinasi seri dengan paralel.


## exer
1. Sebutkan satun dari $V(t)$, $V_m$, $\omega$, $\varphi$ pada Persamaan \eqref{eqn:ac-voltage} dan $f$, $T$ pada Persamaan \eqref{eqn:ac-voltage-omega}. 
2. Mengapa pada arus bolak-balik tidak digunakan konsep tegangan rata-rata?
3. Mengapa dapat dihitung daya rata-rata?
4. Apakah nilai yang diukur oleh alat ukur?


## note
1. <a name='r01'></a>Glenn Elert, "Alternating Current", The Physics Hypertextbook, url <https://physics.info/current-alternating/> [20220315].
2. <a name='r02'></a>Promax, "What do RMS and True RMS stand for? Here we explain you the differences", Promax, 27 Feb 2019, url <https://www.promaxelectronics.com/ing/news/561/what-do-rms-and-true-rms-stand-for-here-we-explain-you-the-differences/> [20220316].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) V, V, rad/s, rad, Hz, s; &nbsp;
2) nilainya selalu nol; &nbsp;
3) fungsinya telah berupa $\sin^2 \omega t$ sehingga rata-ratanya tidak nol; &nbps;
4) nilai maksimum kemudian diubah ke rms; &nbsp;
</ans>


{% comment %}
{% endcomment %}
