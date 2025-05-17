---
layout: butir
authors: [viridi]
title: conservation of momentum
permalink: pages/0101
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["linear momentum", "law of conservation of momentum", "collision"]
date: 2021-11-06 21:36:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/10/2021-11-06-conservation-of-momentum.md
twitter_username: 6unpnp
nodes: []
---
Momentum merupakan suatu besaran yang kekal, yang dalam suatu sistem tertutup total momentum bernilai tetap, di mana prinsip ini dikenal sebagai hukum kekekalan momentum atau kekalan momentum [[1](#ref01)], yang merupakan bagian dari berbagai hukum-hukum kekekalan dalam fisika [[2](#ref02)]. Perlu disadari bahwa momentum kekal dalam tumbukan, ledakan, dan peristiwa lain yang melibatkan banyak benda, di mana kekal berarti besaran itu, yang dalam hal ini adalah momentum selalu bernilai tetap selama suatu peristiwa berlangsung [[3](#ref03)]. Kekekalan momentum juga digunakan dalam fluida, misalnya pada perumusan aliran tunak 1d [[4](#ref04)]. Dalam pembelajaran hukum kekalan ini dapat diamati melalui eksperimen menggunakan linear air track dengan analisis citra gerak bendanya [[5](#ref05)].


## formula
Hukum kekekalan momentum memiliki bentuk

\begin{equation}\label{eqn-momentum-conservation}
\vec{p} _{1i} + \vec{p} _{2i} + \dots + \vec{p} _{Ni} = \vec{p} _{1f} + \vec{p} _{2f} + \dots + \vec{p} _{Nf},
\end{equation}

untuk sistem yang terdiri dari $N$ benda, dengan indeks $i$ berarti awal (inisial) dan $f$ berarti akhir (final). Atau dapat pula dituliskan dalam bentuk yang lebih kompak

\begin{equation}\label{eqn-momentum-conservation-compact}
\sum_{j = 1}^{N} \vec{p}_j = \vec{p}_j', 
\end{equation}

dengan notasi yang sedikit berbeda untuk keadaan awal tanpa indeks dan keadaan akhir tanpa indeks tetapi dengan tanda '. Digunakan notasi ini agar untuk keadaan awal tidak tertuliskan indeks $ji$ yang seperti seakan-akan dua indeks benda, padahal hanya satu indeks benda $j$ dan indeks $i$ menandakan keadaan awal. Untuk kasus 1d notasi vektor tidak harus digunakan.


## 1d collision of two bodies
Untuk peristiwa tumbukan 1d yang melibatkan dua benda terdapat beberapa kemungkinan keadaan akhir seperti terpisah bergerak pada arah berlawanan, terpisah tetapi bergerak pada arah yang sama, salah satu diam atau keduanya, bergerak bersama-sama, dan kemungkinan lainnya.

![]({{ site.baseurl }}/assets/img/0/10/0101-a.png) \
Gambar <a name="fig1">1</a>. Tumbukan dua benda yang saling mendekat sebagai keadaan awal dapat menghasilkan beberapa keadaan akhir seperti keduanya diam, keduanya berbalik arah, keduanya searah terpisah, dan keduanya searah sambil bergerak bersama-sama.

Salah satu keadaan awal tumbukan yang paling umum adalah dua benda bergerak saling mendekat. Beberapa keadaan awal dan keadaan akhir untuk tumbukan jenis ini diilustrasikan pada Gambar [1](#fig). Masih mungkin terdapat kemungkinan keadaan awal dan keadaan akhir yang lain.

![]({{ site.baseurl }}/assets/img/0/10/0101-b.png) \
Gambar <a name="fig2">2</a>. Tumbukan dengan antara dua benda dengan keadaan awal benda kiri lebih besar lajunya dibandingkan benda di kanannya yang dapat pula nol, menghasilkan keadaan akhir berupa kedua benda bertukar kecepatan, keduanya diam, benda pertama berbalik arah sementara yang kedua tetap diam, dan benda pertama agak melambat sedangkan benda kedua bertambah cepat, di  mana keduanya bergerak terpisah.

Selain saling mendekat terdapat pula keadaan awal di mana benda pertama mendekat benda kedua yang lebih lambat atau bahkan diam. Dengan kedaan awal ini terdapat beberapa keadaan akhir seperti diberikan pada Gambar [2](#fig2) dan mungkin masih terdapat keadaan lain yang mungkin terjadi.

Kemungkinan-kemungkinan variasi keadaan awal dan akhir yang telah diberikan pada Gambar [1](#fig1) dan [2](#fig2) bergantung pada kecepatan masing-masing benda dan massanya. Untuk massa hal ini belum terlihat dengan jelas pada kedua gambar.


## 1d explosion two bodies
Ledakan sebenarnya merupakna kebalikan secara waktu dari Gambar [1](#fig1) (atas).  Pada ledakan keadaan awal kedua benda adalah bergerak atau diam bersama-sama, sedangkan keadaan akhirnya adalah terpisah, dan umumnya bergerak pada arah yang berlawanan. 

![]({{ site.baseurl }}/assets/img/0/10/0101-c.png) \
Gambar <a name="fig3">3</a>. Sebuah benda meledak dan menghasilkan dua buah bagian, bagian yang lebih besar bergerak ke arah kiri dan bagian lain yang lebih kecil bergerak ke arah kanan.

Sebuah benda yang semula diam meledak dan menghasilkan dua pecahan, pecahan yang besar akan bergerak lebih lambat dan pecahan yang lebih kecil akan bergerak lebih cepat. Kedua pecahan bergerak pada arah berlawanan. Ilustrasi mengenai hal ini diberikan pada Gambar [3](#fig3).

## 2d, 3d more bodies
Untuk tumbukan ataupun ledakan dalam 2d dan 3d yang melibatkan lebih dari dua benda, tetap menggunakan cara yang mirip dengan mematuhi Persamaan \eqref{eqn-momentum-conservation}. Bila masih tumbukan sepusat hanya dua benda akan tetapi kecepatannya dalam 2d atau 3d, secara prinsip tetap dapat dipilih suatu kerangka acuan sehingga tumbukan kedua benda kembali menjadi tumbukan 1d. Yang benar-benar 2d atau 3d adalah bila tumbukannya tidak sepusat.

![]({{ site.baseurl }}/assets/img/0/10/0101-d.png) \
Gambar <a name="fig4">4</a>. Dua buah benda bertumbukan sepusat dengan kecepatan keduanya berupa vektor 2d.

Tumbukan dua benda dengan kecepatan masing-masing merupakan vektor 2d diberikan pada Gambar [4](#fig4). Dengan memperhatikan garis putus-putus terlihat bahwa peristiwa tumbukan ini, karena masih merupakan tumbukan sepusat, sebenarnya adalah tumbukan 1d.


## exer
1. Terdapat peristiwa tumbukan yang melibatkan dua buah benda. Pada keadaan awal benda pertama bergerak ke kanan dan benda kedua bergerak ke kiri sehingga keduanya bertumbukan. Diketahui bahwa $m_1 = 1 \ \rm kg$, $v_1 = 2 \ \rm m/s$, $m_2 = 2 \ \rm kg$, $v_1 = -1 \ \rm m/s$. Bila setelah tumbukan diketahui $v_1' = -1 \ \rm m/s$ tentukan $v_2'$.
2. Terdapat dua benda bermassa sama $2 \ \rm kg$. Benda pertama bergerak dengan kecepatan $1 \ \rm m/s$ menumbuk benda kedua yang sedang diam. Setelah tumbukan benda pertama diam. Berapakah kecepatan benda kedua?
3. Suatu peristiwa tumbukan melibatkan dua buah benda. Keadaan awal adalah $m_1 = 4 \ \rm kg$, $v_1 = 2 \ \rm m/s$, $m_2 = 2 \ \rm kg$, dan $v_2 = -2 \ \rm m/s$. Bila $v_2' = 2 \ \rm m/s$ berapakah $v_1'?$
4. Sebuah benda bermassa $3 \ \rm kg$ meledak dan menghasilkan dua buah pecahan, dengan masing-masing bermassa $1 \ \rm kg$ yang bergerak ke kiri dan bermassa $2 \ \rm kg$ yang bergerak ke kanan. Bila kecepatan pecahan bermassa $1 \ \rm kg$ adalah $-2 \ \rm m/s$ berapakah kecepatan pecahan lainnya?
5. Pecahan $2 \ \rm kg$ dan $3 \ \rm kg$ dihasilkan dari suatu benda yang meledak. Pecahan yang lebih kecil bergerak ke kiri sedangkan yang lebih besar bergerak ke kanan. Tentukan perbandingan laju pecahan lebih kecil terhadap laju pecahan lebih besar.


## note
1. <a name="r01"></a>Glenn Elert, "Conservation of Momentum", The Physics Hypertextbook, 2021, url <https://physics.info/momentum-conservation/summary.shtml> [20211106].
2. <a name="r02"></a>Wikipedia contributors, "Conservation law", Wikipedia, The Free Encyclopedia, 6 September 2021, 11:03 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1042713186> [20211106].
3. <a name="r03"></a>Paul Peter Urone, Roger Hinrichs, "Conservation of Momentum" in Physics, OpenStax, Houston, Texas, 26 Mar 2020, url <https://openstax.org/books/physics/pages/8-2-conservation-of-momentum> [20211106].
4. <a name="r04"></a>"Conservation of Momentum: 1 Dimension, Steady Flow", Glenn Research Center, NASA, url <https://www.grc.nasa.gov/www/k-12/airplane/conmo.html> [20211106].
5. <a name="r05"></a>Putu Chrisnaria Hasian Sinaga, "Verification of the Linear Momentum Conservation Law Using Linear Air Track", Magister Scientiae, vol. 26, no., pp. 155-169, Oct 2009, url <https://doi.org/10.33508/mgs.v0i26.652>.


## &nbsp;
[velocity](0050.html) &bull; [newton's 1nd law](0091.html) &bull; [momentum](0100.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) $0.5 \ \rm m/s$; &nbsp; 2) $1 \ \rm m/s$; &nbsp; 3) $0 \ \rm m/s$; &nbsp; 4) $1 \ \rm m/s$; &nbsp; 5) $3:2$; &nbsp;
</ans>


{% comment %}
1
pi = 1 2 + 2 -1 = 0
Ki = 0.5 1 4 + 0.5 2 1 = 2 + 1 = 3
pf = 1 -1 + 2 0.5 = 0
Kf = 0.5 1 1 + 0.5 2 0.25 = 0.5 + 0.25 = 0.75
{% endcomment %}
