---
layout: butir
authors: [viridi]
title: bulk modulus
permalink: pages/0183
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["elasticity", "hooke's law", "elastic modulus", "bulk modulus"]
date: 2021-11-28 19:36:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/18/2021-11-25-sbulk-modulus.md
twitter_username: 6unpnp
nodes: []
---
Modulus bulk merupakan suatu konstanta numerik yang menggambarkan sifat elastik suatu padatan atau fluida dalam tekanan pada semua permukaannya [[1](#r01)]. Modulus ini mendeskripsikan seberapa resisten suatu zat terhadap tekanan [[2](#r02)], yang kadang disebut juga sebagai elastisitas modulus bulk atau modulus volume, dalam hal ini merupakan suatu sifat bahan yang menujukkan karakter kompresibilitas suatu fluida [[3](#r03)]. Lambang modulus bulk kadang menggunakan $K$ atau $B$ [[4](#r04)].


## modulus
Pada modulus bulk benda mengalami gaya tekan pada seluruh permukaannya atau mendapatkan tekanan dari setiap arah yang ilustrasinya dapat digambarkan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/18/0183-a.png) \
Gambar <a name="fig1">1</a>. Benda pada: keadaan awal dengan tekanan sekelilingnya $p_1$ (kiri) dan keadaan akhir dengan tekanan sekelilingnya $p_2$ (kanan), di mana $p_2 > p_1$, sehingga volume benda mengecil $V_2 < V_1$.

Volume benda mula-mulai adalah $V_1$ dan luas permukaannya adalah $A_1$, yang pada keadaan ini antara permukaan benda dan tekanan $p_1$ di sekitarnya telah terjadi kesetimbangan. Kemudian saat tekanan luar diperbesar sebesar $\Delta p = p_2 - p_1$ maka tekanan ini akan menjadi gaya pada permukaan benda sehingga menyusutkan volumenya menjadi $V_2$, yang lebih lebih kecil dari $V_1$ atau perubahan volumnya adalah $\Delta V = V_2 - V_1 < 0$. Modulus bulk dirumuskan sebagai

\begin{equation}\label{eqn-bulk-modulus}
B = -\frac{\Delta p}{\Delta V / V_0},
\end{equation}

dengan $V_0$ adalah volume mula-mula, yang dalam Gambar [1](#fig1) adalah $V_1$.


## exer
1. Mengapa perumusan modulus bulk seperti pada Persamaan \eqref{eqn-bulk-modulus} terdapat tanda negatif di awalnya?


## note
1. <a name="r01"></a>The Editors of Encyclopaedia Britannica, William L. Hosch, "Bulk modulus", Encyclop&aelig;dia Britannica, 1 Jun 2006, url <https://www.britannica.com/science/bulk-modulus> [20211128].
2. <a name="r02"></a>Anne Marie Helmenstine, "What Is Bulk Modulus?", ThoughtCo, 27 Jan 2019, url <https://www.thoughtco.com/bulk-modulus-definition-and-examples-4175476> [20211128].
3. <a name="r03"></a>"Bulk Modulus and Fluid Elasticity", Engineering ToolBox, 2004, url <https://www.engineeringtoolbox.com/bulk-modulus-elasticity-d_585.html> [20211128].
4. <a name="r04"></a>Glenn Elert, "Elasticity", The Physics Hypertextbook, 2021, url <https://physics.info/elasticity/> [20211128].


## &nbsp;
[elasticity](0180.html) &bull; [young's modulus](0181.html) &bull; [shear modulus](0182.html)

{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) agar nilai $B >0$, di mana $\Delta p > 0$ akan tetapi $\Delta V < 0$; &nbsp;
</ans>


{% comment %}
{% endcomment %}
