---
layout: butir
authors: [viridi]
title: uniform circular motion
permalink: pages/0083
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "2d", "circular motion", "uniform"]
date: 2021-11-01 10:16:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/08/2021-10-31-uniform-circular-motion.md
twitter_username: 6unpnp
nodes: []
---
Gerak melingkar beraturan atau GMB merupakan suatu jenis gerak di mana benda bergerak menempuh lintasan berbentuk lingkaran dengan laju tetap [[1](#ref01)]. Pada gerak melingkar dengan laju tetap ini, dapat diturunkan percepatan sentripetal [[2](#ref02)], yang merupakan percepatan yang mengarah ke pusat lintasan lingkaran [[3](#ref03)]. Percepatan ini disebabkan oleh jumlah gaya yang mengarah ke arah yang sama [[4](#ref04)].


## illustration
Bagaimana arah kecepatan (tangensial) dan percepatan (sentripetal) yang bekerja pada sebuah benda yang ber-GMB diberikan pada Gambar [1](#fig1) berikut ini.

![]({{ site.baseurl }}/assets/img/0/08/0083-a.gif) \
Gambar <a name="fig1">1</a>. Ilustrasi sebuah GMB berperiode $T = 32$ dengan arah kecepatan diberikan oleh panah biru dan arah percepatan diberikan oleh panah hijau.

Kotak pada Gambar [1](#fig1) adalah $0.5 \times 0.5$ sementara baik panjang vektor kecepatan ($~\omega$) dan percepatan ($~\omega^2$) perlu diubah agar cukup terlihat. Dengan $\omega = 0.196$, digunakan pengali $5.3$ untuk kecepatan dan $14$ untuk percepatan agar dapat diperoleh ilustrasi seperti di atas.


## kinematic variables and formulas
Untuk suatu GMB terdapat dua variabel kinematika, yaitu posisi angular $\theta$ dan kecepatan sudut $\omega$. Keduanya dihubungkan melalui

\begin{equation}\label{eqn-omega-diff-theta}
\omega = \frac{d\theta}{dt}
\end{equation}

atau

\begin{equation}\label{eqn-theta-int-omega}
\theta = \int \omega \ dt,
\end{equation}

yang menghasilkan hubungan

\begin{equation}\label{eqn-uniform-circular-motion-theta}
\theta = \theta_0 + \omega t,
\end{equation}

dengan $\theta_0$ adalah posisi angular awal. Untuk $\theta$ kadang dinyatakan dalam, selain $^\circ$ atau $\rm rad$, putaran atau $\rm rotasi$

\begin{equation}\label{eqn-uniform-circular-motion-theta-rotation}
\theta ({\rm rotasi}) = \frac{1}{2\pi} \cdot \theta ({\rm rad})
\end{equation}

dan

\begin{equation}\label{eqn-uniform-circular-motion-theta-radian}
\theta ({\rm rad}) = \frac{\pi}{180} \cdot \theta ({^\circ})
\end{equation}

untuk antara $\rm rad$ dan $^\circ$. Sedangkan satuan untuk $\omega$ dinyatakan dengan $\rm rad/s$ atau $\rm rpm$ (rotation per minute).

Kemudian terkait dengan besaran tangensialnya dapat diperoleh

\begin{equation}\label{eqn-uniform-circular-motion-s}
s = R \theta
\end{equation}

yang merupakan jarak dan

\begin{equation}\label{eqn-uniform-circular-motion-v}
v \equiv v_T = R \omega
\end{equation}

yang merupakan kecepatan, dengan $R$ adalah jari-jari lingkaran.


## exer
1. Sebuah benda titik bergerak melingkar dengan kecepatan sudut $10 \ \rm rps$ (rotation per second atau putaran per detik). Selama dua detik tentukan perubahan posisi angular $\theta$ yang teramati dalam $\rm rotasi$, $\rm rad$, dan $^\circ$.


## note
1. <a name="r01"></a>William Moebs, Samuel J. Ling, Jeff Sanny, "Uniform Circular Motion" in University Physics Volume 1, OpenStax, Rice University, Houston, Texas, 19 Sep 2016, url <https://openstax.org/books/university-physics-volume-1/pages/4-4-uniform-circular-motion> [20211031].
2. <a name="r02"></a>Carl R. Nave, "Circular Motion", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/circ.html> [20201031].
3. <a name="r03"></a>The Editors of Encyclopaedia Britannica, Emily Rodriguez, "uniform circular motion", Encyclopædia Britannica, 19 Mar 2019, url <https://www.britannica.com/science/uniform-circular-motion> [20211031].
4. <a name="r04"></a> Tom Henderson, "Uniform Circular Motion", The Physics Classroom, 2021, url <https://www.physicsclassroom.com/mmedia/circmot/ucm.cfm> [20211031].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [superposition principle](0070.html) &bull; [kinematics 2d](0080.html) &bull; [polar coordinates intro](0015.html) &bull; [circular motion](0082.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) 1) $20$, $40\pi$, $7200$; &nbsp;
</ans>
