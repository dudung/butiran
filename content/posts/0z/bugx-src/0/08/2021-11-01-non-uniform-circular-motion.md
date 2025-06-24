---
layout: butir
authors: [viridi]
title: non-uniform circular motion
permalink: pages/0084
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["kinematics", "2d", "circular motion", "non-uniform"]
date: 2021-11-01 20:55:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/08/2021-11-01-non-uniform-circular-motion.md
twitter_username: 6unpnp
nodes: []
---
Dalam suatu gerak melingkar berubah beraturan atau GMBB, benda bergerak menyusuri lintasan berbentuk lingkaran akan tidak dengan laju tetap [[1](#ref01)], sehingga walaupun lintasannya berbentuk lingkaran akan tetapi bersifat non-linear [[2](#ref02)]. Untuk penerapannya, gerak pendulum dalam lintasan lingkaran vertikal dan roller coaster merupakan contoh-contoh GMBB [[3](#ref03)].


## ilustration
Gerak melingkar berubah beraturan atau GMBB, dengan membatasi hanya sampai $\alpha$ bernilai konstan, diberikan ilustrasinya untuk posisi-posisi pada beberapa waktu dan juga dilengkapi dengan animasinya pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/08/0084-b.png) | ![]({{ site.baseurl }}/assets/img/0/08/0084-a.gif)

Gambar <a name="fig1">1</a>. Suatu GMBB: Posisi-posisi partikel, serta posisi dilengkapi dengan vektor kecepatan dan percepatan saat $t = 9$ (kiri) dan animasi geraknya (kanan).

Terlihat bahwa jarak antar dua posisi angular berurutan tidak sama akan tetapi berangsur-angsur bertambah besar sebagaimana diberikan pada Gambar [1](#fig1) (kiri), di mana hal ini dikarenakan terdapatnya percepatan sudut $\alpha > 0$, yang membuat kecepatan juga bertambah besar. Kemudian pergerakan partikel dari $t = 0$ sampai $t = 11$ disajikan animasinya pada Gambar [1](#fig1) (kanan).


## analogy
Antara gerak lurus berubah beraturan (GLBB) dan gerak melingkar berubah beraturan dapat diperoleh persamaan-persamaan kinematikanya sebagai berikut.

Tabel <a name="tab1">1</a>. Persamaan kinematika GLBB dan GMBB.

No | GLBB | GMBB
:-: | :-: | :-:
1 | $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$
2 | $s = v_0 t + \frac12 at^2$ | $\theta = \omega_0 t + \frac12 \alpha t^2$
3 | $v^2 = v_0^2 + 2as$ | $\omega^2 = \omega_0^2 + 2 \alpha \theta$

Tabel <a name="tab2">2</a>. Variabel kinematika GLBB dan GMBB.

Besaran | GLBB | GMBB | Hubungan
:-: | :-: | :-: | :-:
Posisi | $s$ | $\theta$ | $\displaystyle \theta = \frac{s}{R}$
Kecepatan | $v$ | $\omega$ | $\displaystyle \omega = \frac{v}{R}$
Percepatan | $a$ | $\alpha$ | $\displaystyle \alpha = \frac{a}{R}$

Dengan menggunakan hubungan antara variabel GLBB dan GMBB pada Tabel [1](#tab1) dapat diperoleh persamaan kinematika GMBB dan GLBB dan sebaliknya, yang telah diberikan pada Tabel [2](#tab2). Berikut

\begin{equation}\label{eqn-nlm-to-ncm}
\begin{array}{rcl}
v^2 & = & v_0^2 + 2as \newline
\displaystyle (v^2) \cdot \frac{1}{R^2} & = & \displaystyle (v_0^2 + 2as) \cdot \frac{1}{R^2} \newline
\displaystyle \left(\frac{v}{R}\right)\left(\frac{v}{R}\right) & = & \displaystyle \left(\frac{v_0}{R}\right)\left(\frac{v_0}{R}\right) + 2\left(\frac{a}{R}\right)\left(\frac{s}{R}\right) \newline
(\omega)(\omega) & = & (\omega_0)(\omega_0) + 2(\alpha)(\theta) \newline
\omega^2 & = & \omega_0^2 + 2 \alpha \theta
\end{array}
\end{equation}

merupakan salah satu contohnya.


## exer
1. Pada suatu GMBB bagaimana sifat percepatan totalnya? Perhatikan Gambar [1](#fig1) (kanan).
2. Untuk suatu GMBB bagaimana vektor kecepatannya $\vec{v}$, laju $v$ dan laju anguler $\omega$, percepatan anguler $\alpha$, dan arah arah percepatannya $\vec{a}$.
3. Terdapat hubungan antara GLBB dan GMBB yang telah ditunjukkan oleh Persamaan \eqref{eqn-nlm-to-ncm}. Hubungan ini terkait dengan baris ke berapa pada Tabel [1](#tab1)?



## note
1. <a name="r01"></a>Ryan Martin, Neary, M. Rinaldo, Woodman, "Non-uniform circular motion" in University Physics, Queen's University, 6 Nov 2020, url <https://phys.libretexts.org/@go/page/19401> [20211101].
2. <a name="r02"></a>Sunil Kumar Singh, "Non-uniform circular motion" in Kinematics fundamentals, OpenStax CNX, 26 Jan 2010, url <https://cnx.org/contents/UYPplaH7@29.32:glPsLbv4@7/Non-uniform-circular-motion> [20211101].
3. <a name="r03"></a>Ka Kit Wan, "How to teach and learn physics with information technology: some suggestions and sharing", Asia-Pacific Forum on Science Learning and Teaching, vol. 2, no. 2, art. 4, slide circular_motion.pdf, Dec 2000, url <https://www.eduhk.hk/apfslt/issue_2/kkwan/abstract.htm> [20211101].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [superposition principle](0070.html) &bull; [kinematics 2d](0080.html) &bull; [polar coordinates intro](0015.html) &bull; [circular motion](0082.html) &bull; [uniform circular motion](0083.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Percepatan total tidak sama dengan percepatan sentripetal, tidak tepat mengarah ke pusat, berubah secara beraturan; &nbsp; 2) $\vec{v}$ selalu $\perp$ dengan lintasan lingkaran, $v$ dan $\omega$ tidak konstan, $\alpha \ne 0$, arah $\vec{a}$ tidak menuju pusat lintasan lingkaran; &nbsp; 3) $3$; &nbsp;
</ans>
