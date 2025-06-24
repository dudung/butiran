---
layout: post
authors: [viridi]
title: lin chrg e field arc
permalink: pages/0331
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electric charge", "charge distribution", "continue", "line charge", "electric field", "arc", "axis", "center"]
date: 2022-01-09 20:47:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/33/2022-01-09-lin-chrg-e-field-arc.md
twitter_username: 6unpnp
nodes: []
---
Medan listrik oleh suatu busur lingkaran pada titik pusat busur lingkaran dapat diperoleh dengan menggunakan elemen panjang muatan pada koordinat polar dan kemudian mengintegralkannya [[1](#r01)] atau menggunakan solusi dari medan listrik di sepanjang sumbu cincin dengan tidak mengintegralkan penuh keliling cincinnya, di mana untuk cincin umumnya diberikan rumusan untuk cincin penuh [[2](#r02)].


## ring of charge
Medan listrik sebuah muatan cincin diilustrasikan seperti gambar berikut ini dengan $\rm P$ adalah titik amat tempat medan listrik $\vec{E}$ ingin diperoleh.

![]({{ site.baseurl }}/assets/img/0/33/0331-a.png) \
Gambar <a name='fig1'>1</a>. Elemen muatan $dq$ pada muatan cincin dan elemen medan listrik yang disebabkannya.

Dapat diperoleh

\begin{equation}\label{eqn:Ex-ring-charge}
E_x = \displaystyle -k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \sin\theta,
\end{equation}

\begin{equation}\label{eqn:Ey-ring-charge}
E_y = k \frac{\lambda \ R^2}{(H^2 + R^2)^{3/2}} \cos\theta,
\end{equation}

dan

\begin{equation}\label{eqn:Ez-ring-charge}
E_z = k \frac{\lambda \ RH}{(H^2 + R^2)^{3/2}} \ \theta,
\end{equation}

yang merupakan komponen medan listrik pada arah $x$, $y$, dan $z$. Persamaan \eqref{eqn:Ex-ring-charge}, \eqref{eqn:Ey-ring-charge}, dan \eqref{eqn:Ez-ring-charge} diperoleh untuk $\lambda$ seragam.


## arc of linear charge
Untuk titik amat di tengah suatu busur lingkaran, tidak terdapat jarak pada arah $z$ atau $H = 0$ sehingga Persamaan \eqref{eqn:Ex-ring-charge}, \eqref{eqn:Ey-ring-charge}, dan \eqref{eqn:Ez-ring-charge} akan tereduksi menjadi

\begin{equation}\label{eqn:Ex-arc-charge}
E_x = -k \frac{\lambda}{R} \sin\theta
\end{equation}

dan

\begin{equation}\label{eqn:Ey-arc-charge}
E_y = k \frac{\lambda}{R} \cos\theta,
\end{equation}

dengan $\theta$ dimulai dari sumbu $x$ dan berputar ke arah sumbu $y$ atau berlawanan arah dengan arah putar jarum jam.

Perlu diingat bahwa Persamaan \eqref{eqn:Ex-ring-charge}, \eqref{eqn:Ey-ring-charge}, \eqref{eqn:Ez-ring-charge}, \eqref{eqn:Ex-arc-charge}, dan \eqref{eqn:Ey-arc-charge} masih merupakan hasil integral tak-tentu dalam mencari $\vec{E}$, sehingga saat akan diterapkan perlu digunakan batas bawah dan batas atas integral sesuai dengan konfigurasi sumber muatan garisnya yang berbentuk busur lingkaran, yang dalam hal ini adalah sudut awal $\theta_1$ dan sudut akhir $\theta_2$.


## arc on $-x$ axis
Muatan garis berbentuk busur lingkaran dapat digambarkan terletak pada sumbu $x$ negatif dengan dimulai dari kuadran dua dan berarkhir di kuadran ketiga, di mana sumbu simetri busur tersebut adalah sumbu $x$ [[1](#r01)]. Gambar [1](#fig1) berikut memberikan ilustrasi sistem yang dimaksud.

![]({{ site.baseurl }}/assets/img/0/33/0331-b.png) \
Gambar <a name='fig2'>2</a>. Elemen muatan $dq$ pada muatan garis berbentuk busur lingkaran dan elemen medan listrik $d\vec{E}$ yang disebabkannya.

Dari Gambar [1](#fig1) busur dimulai dari sudut $\theta_1 = \pi - \frac12 \phi$ dan diakhir pada sudut sudut $\theta_2 = \pi + \frac12 \phi$, yang apabila diterapkan pada Persamaan \eqref{eqn:Ex-arc-charge} dan \eqref{eqn:Ey-arc-charge} akan memberikan

\begin{equation}\label{eqn:Ex-arc-charge-on-left}
E_x = 2k \frac{\lambda}{R} \sin\tfrac12\phi
\end{equation}

dan

\begin{equation}\label{eqn:Ey-arc-charge-on-left}
E_y = 0.
\end{equation}

Medan listrik pada arah $y$ bernilai nol karena bagian busur yang terletak di atas sumbu $x$ saling meniadakan dengan bagian busur yang terletak di bawah sumbu $x$.


## exer
1. Bagaimana bentuk Persaamaan \eqref{eqn:Ex-arc-charge-on-left} dan \eqref{eqn:Ey-arc-charge-on-left} bila muatan garis berbentuk busur terletak pada sumbu $x$ positif?
2. Bagaimana medan listrik yang disebabkan oleh muatan garis berbentuk busur lingkaran pada pusatnya bila sumber muatan garis merupakan lingkaran penuh atau cincin?


## note
1. <a name='r01'></a>Vedantu Content Team, "Find the electric field at the center of an arc of linear charge density λ, radius R subtending angle ϕ at the center", Vedantu, 20 Nov 2020, url <https://www.vedantu.com/question-answer/find-the-electric-field-at-the-center-of-an-arc-class-12-physics-cbse-5fb721686ad6283e7093bed8> [20220109].
2. <a name='r01'></a>Carl R. Nave, "Electric Field: Ring of Charge", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/electric/elelin.html#c2> [20220109].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0331?src=hash&amp;ref_src=twsrc%5Etfw">#bug0331</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1480388148479754243?ref_src=twsrc%5Etfw">January 10, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[electric charge](0280.html) &bull; [electric field](0282.html) &bull; [charge distribution](0283.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $E_x = -2k \frac{\lambda}{R} \sin\tfrac12\phi$, $E_y = 0$; &nbsp;
2) $E_x = E_y = 0$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
