---
layout: butir
authors: [viridi]
title: newton's 3rd law
permalink: pages/0093
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["dynamics", "newton's law of motion", "third law", "3rd"]
date: 2021-11-06 10:29:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/09/2021-11-05-newtons-3rd-law.md
twitter_username: 6unpnp
nodes: []
---
Dalam beberapa versi hukum III Newton terdapat kata aksi dan reaksi yang kadang, secara kurang tepat, dapat diartikan bahwa kedua benda yang berinteraksi harus bergerak [[1](#ref01)], padahal hal yang penting adalah bahwa gaya merupakan hasil interaksi [[2](#ref02)]. Lebih tepatnya tidak ada gaya yang terisolasi, sehingga untuk setiap gaya luar yang bekerja pada suatu benda, ada gaya dengan besar sama tapi arah berlawanan yang bertindak balik pada benda lain penyebab gaya luar tersebut [[3](#ref03)]. Hukum ini dirujuk pula sebagai hukum aksi-reaksi dan masih menjadi kajian yang menarik belum lama ini [[4](#ref04)].


## original text
Hukum III Newton sebagaimana sering dikutip, berbunyi [[5](#ref05)]

> Actioni contrariam semper et aequalem esse reactionem, sive corporum duorum actiones in se mutuo semper esse aequales et in partes contrarias dirigi.

dengan

> The reaction is always opposite and equal to the action or the reciprocal actions of two bodies are always equal and directed in contrary directions. 

merupakan salah satu terjemahannya [[6](#ref06)].


## common text
Dewasa ini hukum II newton lebih dikenal dalam bentuk [[7](#ref07), [8](#ref08)]

> For every action, there is an equal and opposite reaction.

yang dapat diterjemahkan menjadi

> Untuk setiap aksi, terdapat reaksi yang sama dan arah berlawanan.

Pernyataan di atas dapat dinyatakan dalam bentuk 

\begin{equation}\label{eqn-newtons-laws-of-motion-3rd}
\vec{F} _{ab} = -\vec{F} _{ba}
\end{equation}

dengan $\vec{F} _{ab}$ adalah gaya yang bekerja pada benda $a$ akibat adanya benda $b$, dan sebaliknya $\vec{F} _{ba}$ adalah gaya yang bekerja pada benda $b$ akibat adanya benda $a$. Persamaan \ref{eqn-newtons-laws-of-motion-3rd} telah menyatakan bahwa besar kedua vektor sama, sehingga tidak lagi perlu dicantumkan persamaan tambahan seperti

$$
F _{ab} = F _{ba},
$$

yang merupakan nilai skalar dari persamaan sebelumnya.


## misconception
Terdapat miskonsepsi yang terkait dengan hukum III Newton untuk kasus benda di atas suatu alas. Dikarenakan kedua gaya selalu memiliki besar yang sama dengan arah berlawanan, sering diidentifikasikan bahwa salah satunya merupakan aksi dan yang lain merupakan reaksinya. Kedua gaya yang dimaksud adalah gaya berat dan gaya normal [[9](#ref09)].

![]({{ site.baseurl }}/assets/img/0/09/0093-a.png) \
Gambar <a name="fig1">1</a>. Beberapa sistem benda dan alasnya yang sering membuat miskonsepsi pasangan gaya aksi dan reaksi.

Contoh-contoh pada Gambar [1](#fig1) selalu memberikan hasil bahwa $\vec{N}_i = -\vec{w}_i$, untuk $i = 1, 2, 3$, sehingga timbul pemahaman yang kurang tepat bahwa keduanya memenuhi yang dinyatakan dalam hukum III, terlupa bahwa harus terdapat dua buah benda. Kedua gaya pada Gambar [1](#fig1) bekerja pada benda yang sama, sehingga sebenarnya merupakan sistem satu benda.

### slight modification
Salah satu cara untuk membuktikan bahwa gaya normal dan gaya berat bukan merupakan pasangan gaya aksi dan reaksi yang memenuhi hukum III Newton adalah dengan mengubah sedikit sistemnya sebagaimana diilustrasikan pada Gambar [2](#fig2).

![]({{ site.baseurl }}/assets/img/0/09/0093-b.png) | ![]({{ site.baseurl }}/assets/img/0/09/0093-c.png)

Gambar <a name="fig2">2</a>. Contoh dua buah sistem yang membuat $\vec{N}_i \ne -\vec{w}_i$ atau $N_i \ne w_i$ dengan $i = 4, 5$.

Pengubahan kecil dapat dilakukan dengan memberikan gaya tekan vertikal ke bawah pada benda atau dengan mengubah kemiringan alas. Untuk cara pertama Gambar [2](#fig2) (kiri) memberikan

$$
N_4 = w_4 + F_4
$$

dan cara kedua menghasilkan

$$
N_5 = w \cos \theta
$$

dari Gambar [2](#fig2) (kanan), yang keduanya telah menunjukkan bahwa $N_i \ne w_i$, dengan $i = 4, 5$.

### free body diagram
Diagram gaya-gaya yang bekerja pada benda (dan juga alas) akan menjelaskan mana yang merupakan pasangan gaya aksi dan reaksi, dan mana yang bukan.

![]({{ site.baseurl }}/assets/img/0/09/0093-d.png) \
Gambar <a name="fig3">3</a>. Sistem benda dan alas bersaman-sama (kiri) dan diagram gaya masing-masing benda (kanan).

Anggap bahwa alas telah menyatu dengan bumi sehingga cukup membahas sistem dua benda, yaitu benda bermassa $m_6$ dan alasnya atau bumi seperti pada Gambar [3](#fig3). Telah cukup jelas terlihat bahwa pasangan gaya aksi dan reaksinya adalah

$$
N_6 = N_6'
$$

dan

$$
w_6 = w_6'
$$

karena melibatkan dua benda, besar gaya sama, arah gaya berlawanan. Penting untuk diingat bahwa masing-masing gaya bekerja pada benda yang berbeda [[10](#ref10)].


## type of forces
Terkait dengan hukum III ini akan dibahas hanya gaya yang bekerja pada suatu benda dan disebabkan oleh benda lain. Gaya-gaya ini dapat dibedakan menjadi gaya berkontak dan gaya berjarak [[11](#ref11)].

Tabel <a name="tab1">1</a>. Contoh gaya berkontak dan gaya berjarak.

Gaya | Berkontak  | Berjarak | Dua benda
:- | :-: | :-: | :-:
Archimedes | $\color{#0c0}\checkmark$ | |
Gesek      | $\color{#0c0}\checkmark$ | | $\color{#0c0}\checkmark$
Gravitasi  | | $\color{#0c0}\checkmark$ | $\color{#0c0}\checkmark$
Listrik    | | $\color{#0c0}\checkmark$ | $\color{#0c0}\checkmark$
Magnetik   | | $\color{#0c0}\checkmark$ | $\color{#0c0}\checkmark$
Normal     | $\color{#0c0}\checkmark$ | | $\color{#0c0}\checkmark$
Pegas      | $\color{#0c0}\checkmark$ | | $\color{#0c0}\checkmark$
Tali       | $\color{#0c0}\checkmark$ | | $\color{#0c0}\checkmark$
Viskos     | $\color{#0c0}\checkmark$ | |

Pada kolom terakhir Tabel [1](#tab1) tercantum apakah gaya tertentu merupakan interaksi antar dua benda atau tidak, di mana untuk yang tidak lebih tepat bila dikatakan antar benda dan medium (atau lingkungannya).


## contact force
Gaya kontak, bedakan dengan berkontak yang merupakan jenis-jenis gaya pada Tabel [1](#fig), dapat diuraikan menjadi dua komponen, yaitu gaya normal yang tegak lurus permukaan dan gaya gesek yang paralel permukaan [[12](#ref12)].

### stacked blocks
Salah satu pemanfaatan hukum III Newton yang termasuk dalam gaya kontak adalah pada permasalahan benda bertumpuk, baik yang diam ataupun bergerak.

![]({{ site.baseurl }}/assets/img/0/09/0093-e.png) \
Gambar <a name="fig4">4</a>. Sistem benda bertumpuk yang permukaan antar keduanya kasar bergerak bersama di atas lantai mendatar licin.

Dua buah benda pada Gambar [4](#fig4) bergerak bersama-sama sesuai dengan informasi bahwa $v_1 = v_2$. Untuk benda bermassa $m_1$ sudah jelas bahwa geraknya disebabkan oleh gaya luar $F_1$, akan tetapi agak sulit untuk melihat bagaiman benda bermassa $m_2$ di bawahnya dapat ikut bergerak. Setelah diagram gaya-gaya yang bekerja pada masing-masing benda digambarkan, dapat terlihat dengan jelas bahwa benda bermassa $m_2$ bergerak karena gaya gesek $f_{21}$ yang merupakan gaya reaksi dari gaya gesek $f_{12}$ yang merupakan gaya aksinya. Setelah gaya-gaya yang bekerja pada suatu benda menjelas, melalui diagram gaya-gaya, dapat diterapkan hukum I atau II Newton untuk mencari gaya yang belum diperoleh atau percepatan benda.

### string and spring
Benda yang tertambatkan pada pegas mengalami gaya pegas yang dapat dikatakan sebagai gaya aksi. Sebaliknya pegas juga mengalami gaya dari benda yang merupakan gaya reaksinya. Hal yang sama juga untuk benda yang terikat pada tali yang terentang tegang.

![]({{ site.baseurl }}/assets/img/0/09/0093-f.png) \
Gambar <a name="fig5">5</a>. Benda mengalami gaya pegas $F_S$ sebagai gaya aksi dan pegas mengalami gaya reaksi $F_S'$.

Pemahaman mengenai gaya pada pegas dan gaya pada benda akan memudahkan mengerti mengapa saat mengukur perubahan panjang pegas digunakan $kx$ dan saat membahas persamaan gerak benda digunakan $-kx$. Keduanya gaya yang berbeda dan merupakan pasangan gaya aksi dan gaya reaksi yang terhubung melalui hukum III Newton.

![]({{ site.baseurl }}/assets/img/0/09/0093-g.png) \
Gambar <a name="fig6">6</a>. Benda mengalami gaya tegangan tali $T$ sebagai gaya aksi dan tali mengalami gaya reaksi $T'$.

Untuk sistem benda yang tergantung tali berlaku hal yang mirip seperti benda tertambat pada pegas. Benda tertahan tegangan tali $T$ yang mengimbangi gaya graviasi $w$, dengan $T$ merupakan gaya aksi, dan tali mengali gaya reaksi $T'$ seperti diberikan pada Gambar [6](#fig6).

Pasangan gaya aksi dan gaya reaksi diberikan warna yang sama untuk membedakannya seperti dilukiskan pada Gambar [4](#fig4), [5](#fig5), dan [6](#fig6).


## long range force
Gaya berjarak pada Tabel [1](#tab1) disebut juga gaya jangkauan jauh atau longe range force yang meliputi gaya gravitasi dan gaya elektromagnetik (listrik dan magnetik).

### gravitational force
Interaksi antara dua massa terjadi melalui gaya gravitasi yang membuat keduanya tarik-menarik.

![]({{ site.baseurl }}/assets/img/0/09/0093-h.png) \
Gambar <a name="fig7">7</a>. Massa $m_1$ dan $m_2$ saling tarik melalui gaya gravitasi.

Untuk gaya gravitasi hanya terdapat gaya tarik-menarik antar dua massa.

### electrostatic force
Dua buah muatan yang berbeda tanda akan tarik-menarik dan yang sama tanda muatannya akan saling tolak ilustrasinya diberikan pada gambar berikut.

![]({{ site.baseurl }}/assets/img/0/09/0093-i.png) \
Gambar <a name="fig8">8</a>. Interaksi gaya elektrostatik antar dua benda, dengan masing-masing benda dapat bermuatan ($+$), negatif ($-$), atau netral.

Terdapat pula benda netral, di mana netral bukanlah tidak bermuatan akan tetapi jumlah muatan positif dan negatif pada benda tersebut sama.

### magnetic force
Gaya magnetik akan muncul antar dua kawat sejajar yang masing-masing dialiri arus listrik. Kedua kawat akan saling tarik bila arah arus pada kedua kawat sama dan saling tolak bila arahnya berlawanan sebagaimana diilustrasikan pada Gambar [9](#fig9) berikut.

![]({{ site.baseurl }}/assets/img/0/09/0093-j.png) \
Gambar <a name="fig9">9</a>. Dua buah kawat panjang sejajar dialiri arus listrik akan menyebabkan munculnya gaya magnetik antar kedua kawat.

Interaksi yang berlangsung bukanlah antar arus listrik melainkan antara medan magnetik yang disebabkan oleh arus listrik suatu kawat dengan arus listrik kawat lain.

Dari ketiga contoh yang diberikan pada Gambar [7](#fig7), [8](#fig8), dan [9](#fig9), indeks pada pasangan gaya aksi dan gaya reaksi telah menyesuaikan dengan Persamaan \eqref{eqn-newtons-laws-of-motion-3rd}, sehingga dapat dengan mudah terlihat. Selain itu telah juga diberi warna berbeda antara gaya tarik-menarik ($\color{#f94}{\blacksquare}$) dan gaya tolak-menolak ($\color{#86a}{\blacksquare}$).


## exer
1. Apakah yang terasa kurang pada hukum III Newton versi terkini sehingga dapat menimbulkan miskonsepsi?
2. Apakah pasangan gaya aksi dan reaksi boleh berasal dan bekerja pada satu benda saja?


## note
1. <a name="r01"></a>Rhett Allain, "A Closer Look at Newton's Third Law", Wired, 10.03.2013 08:16 AM, url <https://www.wired.com/2013/10/a-closer-look-at-newtons-third-law/> [20211105].
2. <a name="r02"></a>"Newton’s Laws of Motion", Glenn Research Center, NASA, 2021, url <https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/> [20211105].
3. <a name="r03"></a>Carl R. Nave, "Newton's Third Law", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/Newt.html#nt3> [20201105].
4. <a name="r04"></a>J. Mansyur, S. N. Kaharu, J. Holdsworth, "", Indonesian Journal of Science Education, vol. 9, no. 1, pp. 79-90, Mar 2020, url <https://doi.org/10.15294/jpii.v9i1.21775>.
5. <a name="r05"></a>E. A. Fellmann, "Leonhard Euler 1707–1783: Beiträge zu Leben und Werk", Birkhäuser Verlag, Basel, 1983, p. 273 <https://doi.org/10.1007/978-3-0348-9350-3>.
6. <a name="r06"></a>Petre P. Teodorescu, "Mechanical Systems, Classical Models: Volume 1: Particle Mechanics", Springer, 2007, p. 45, url <https://doi.org/10.1007/1-4020-5442-4>.
7. <a name="r07"></a>Jim Lucas, "Equal & Opposite Reactions: Newton's Third Law of Motion", Live Science, 26 Sep 2017, url <https://www.livescience.com/46561-newton-third-law.html> [20211105].
8. <a name="r08"></a>Tom Henderson, "Newton's Third Law", the Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/newtlaws/Lesson-4/Newton-s-Third-Law> [20211105].
9. <a name="r09"></a>David Low, Kate Wilson, "Weight, the Normal force and Newton’s Third Law: dislodging a deeply embedded misconception", Teaching Science, vol. 63, no. 2, pp. 17-26, Jun 2017, url <https://eric.ed.gov/?id=EJ1148872>.
10. <a name="r10"></a>"Newton's third law", Bitesite, BBC, 2021 url <https://www.bbc.co.uk/bitesize/guides/zqs47p3/revision/4> [20211105].
11. <a name="r11"></a>Tom Henderson, "Types of Forces", the Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/newtlaws/Lesson-2/Types-of-Forces> [20211105].
12. <a name="r12"></a>Wikipedia contributors, "Contact force", Wikipedia, The Free Encyclopedia, 11 October 2021, 08:54 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1049344436> [20211105].


## &nbsp;
[uniform linear motion](0061.html) &bull; [nonuniform linear motion](0063.html) &bull; [newton's laws of motion](0090.html) &bull; [newton's 1st law](0091.html) &bull; [newton's 2nd law](0092.html) &bull; [spring-mass sign](0184.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) Frasa dua benda perlu tepat disertakan seperti pada versi aslinya; &nbsp; 2) Tidak, akan tetapi harus terdapat dua buah benda berpasangan; &nbsp;
</ans>
