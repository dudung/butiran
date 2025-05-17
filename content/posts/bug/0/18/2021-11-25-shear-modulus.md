---
layout: butir
authors: [viridi]
title: shear modulus
permalink: pages/0182
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["elasticity", "hooke's law", "elastic modulus", "shear modulus"]
date: 2021-11-28 20:40:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/18/2021-11-25-shear-modulus.md
twitter_username: 6unpnp
nodes: []
---
Modulus geser, yang juga dikenal sebagai modulus rigiditas, didefinisikan sebagai rasio dari tegangan geser terhadap regangan geser [[1](#r01)], yang terkait dengan deformasi suatu padatan saat mengalami gaya yang sejajar dengan permukaannya [[2](#r02)]. Modulus ini menggunakan simbol $G$ atau $S$ [[3](#r03)].


## modulus
Suatu benda saat diberi tegangan yang sejajar dengan permukaannya akan mengalami deformasi seperti diilustrasikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/18/0182-a.png) \
Gambar <a name="fig1">1</a>. Deformasi suatu benda akibat gaya yang berarah sejajar dengan salah satu permukannya.

Gaya $F$ diberikan pada arah sejajar dengan permukaan $A$ sehingga mengakibatkan deformasi sebesar $\Delta x$, yang regangannya dinyatakan dengan

\begin{equation}\label{eqn-shear-strain}
\varepsilon = \frac{\Delta x}{L_0} = \tan \theta,
\end{equation}

di mana umumnya $\Delta x < < L_0$ sehingga dapat didekati bahwa $\tan \theta \approx \theta$. Dengan demikian

\begin{equation}\label{eqn-shear-modulus}
G = \frac{F/A}{\Delta x / L_0} \approx \frac{F/A}{\theta}
\end{equation}

adalah definisi dari modulus geser. Bila terdapat dua benda dengan dimensi yang sama dengan menggunakan Persamaan \eqref{eqn-shear-modulus} dapat dihasilkan perbandingan

\begin{equation}\label{eqn-shear-modulus-comparison}
\frac{G_1}{G_2} = \frac{\theta_2}{\theta_1},
\end{equation}

bila pada kedua benda diterapkan gaya dengan besar yang sama.


## exer
1. Terdapat dua buah balok dengan dimensi yang sama. Balok pertama terbuat dari besi dan belok kedua terbuat dari agar-agar. Dengan menerapkan gaya dengan besar yang sama dapat diperoleh regangan geser $\theta$ dari masing-masing balok. Regangan geser balok mana yang lebih besar? Menurut Persamaan \eqref{eqn-shear-modulus-comparison} balok mana yang memiliki modulus geser lebih besar nilanya?
2. Dalam Persaman \eqref{eqn-shear-modulus} terdapat aproksimasi $\tan \theta \approx \theta$. Bagaimana hal ini dapat ditunjukkan? Sebutkan salah satu cara saja.


## note
1. <a name="r01"></a>Anne Marie Helmenstine, "What Is the Shear Modulus?", ThoughtCo, 30 Jan 2019, url <https://www.thoughtco.com/bulk-modulus-definition-and-examples-4175476> [20211128].
2. <a name="r02"></a>Wikipedia contributors, "Shear modulus", Wikipedia, The Free Encyclopedia, 11 November 2021, 10:42 UTC, url<https://en.wikipedia.org/w/index.php?oldid=1054658608> [20211128].
3. <a name="r03"></a>Glenn Elert, "Elasticity", The Physics Hypertextbook, 2021, url <https://physics.info/elasticity/> [20211128].


## &nbsp;
[elasticity](0180.html) &bull; [young's modulus](0181.html) &bull; [bulk modulus](0183.html)

{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) agar-agar, besi; &nbsp;
2) dengan deret Taylor atau lebih mudahnya dengan deret Maclaurin; &nbsp;
</ans>


{% comment %}
{% endcomment %}
