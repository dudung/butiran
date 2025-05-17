---
layout: post
authors: [viridi]
title: measuring angle
permalink: pages/0270
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["angle", "reference", "incline", "simple pendulum", "horizontal surface", "incident", "reflection", "refraction"]
date: 2021-12-14 17:15:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/27/2021-12-13-measuring-angle.md
twitter_username: 6unpnp
nodes: []
---
Mengukur sudut dalam fisika tidaklah selalu menggunakan referensi yang sama seperti dalam matematika, di mana telah terdapat istilah sudut rujukan $\theta$, yang diukur terhadap sumbu $x$ dan selalu bernilai antara $0$ dan $90$, yang merupakan sudut terkecil (acute angle) yang dibentuk oleh sisi akhir (terminal side) dan sumbu $x$ [[1](#r01)]. Untuk benda yang meluncur menuruni bidang miring, sudut kemiringan bidang diukur terhadap arah horisontal dan dipilih sudut terkecilnya baik untuk bidang miring licin [[2](#r02)] maupun dengan gesekan [[3](#r03)], yang hubungan sudut ini dengan sudut untuk menguraikan gaya-gaya yang bekerja pada benda kadang masih membingungkan [[4](#r04)]. Untuk pendulum sederhana sudut ayunan diukur terhadap arah vertikal baik untuk gerak dengan sudut simpangan kecil [[5](#r05)] ataupun besar [[6](#r06)], yang memudahkan perumusan aproksimasinya [[7](#r07)]. Benda yang ditarik sepanjang lantai mendatar sudut gaya diukur terhadap arah mendatar baik untuk gaya tarik [[8](#r08)] ataupun gaya dorong [[9](#r09)]. Acuan arah mendatar ini menjadi arah gerak benda bila lintasannya telah pasti seperti pada rel [[10](#r10)] atau arahnya merupakan informasi yang diketahui [[11](#r11)]. Pada gelombang sudut datang [[12](#r12)], sudut pantul [[13](#r13)], dan sudut bias [[14](#r14)] diukur terhadap garis normal bidang batas. Untuk gerak parabola sebuah proyektil sudut diukur terhadap arah mendatar ke sisi geraknya [[15](#r15)]. Dan untuk onggokan bahan butira, sudut repos (angle of repose) diukur terhadap arah mendatar dari sisi dalam bahan [[16](#r16)], yang dapat diukur menggunakan metode statis atau dinamis [[17](#r17)].


## vertical vs horizontal
Terdapat kasus di mana sudut diukur terhadap arah vertikal dan pada kasus lain diukur pada arah horisontal.

### falling direction
Arah yang sejajar dengan arah suatu benda jatuh umumnya dirujuk sebagai arah vertikal atau bila dinyatakan dengan besaran fisis, arah tersebut sejajar dengan arah percepatn gravitasi $g$.

![]({{ site.baseurl }}/assets/img/0/27/0270-a.png) \
Gambar <a name="fig1">1</a>. Arah vertikal $y$ sejajar dengan arah percepatan gravitasi $g$.

Salah satu pemilihan arah $y$ adalah berlawanan arah dengan arah $g$, sedangkan yang lainnya adalah searah, dengan keduanya sejajar dengan arah $g$.

### simple pendulum
Pada sistem pendulum sederhana sudut simpangan diukur terhadap arah vertikal atau sumbu $y$.

![]({{ site.baseurl }}/assets/img/0/27/0270-b.png) \
Gambar <a name="fig2">2</a>. Pendulum sederhana dengan sudut simpangannya $\theta$, gumpalan pendulum (pendulum bob) bermassa $m$, dan panjang tali $l$.

Dengan mengukur sudut simpangan $\theta$ terhadap arah vertikal, sebagaimana lazim dilakukan, dapat diperoleh

\begin{equation}\label{eqn:simple-pendulum-restoring-force}
F_{\rm res} = -mg \sin\theta,
\end{equation}

yang merupakan gaya pemulish sehingga gerak harmonis sederhana suatu pendulum sederhana dapat terjadi

### a box over horizontal surface
Suatu kotak yang didorong atau ditarik di atas suatu permukaan mendatar oleh sebuah gaya $F_1$, yang tidak sejajar dengan permukaan mendatar, sudutnya dihitung terhadap arah mendatar atau horisontal.

![]({{ site.baseurl }}/assets/img/0/27/0270-c.png) \
Gambar <a name="fig3">3</a>. Sebuah kotak didorong (kiri) atau ditarik (kanan) oleh suatu gaya $F_1$ di atas lantai mendatar.

Terlihat bahwa pemilihan arah putar dalam menentukan $\theta$ tidak dipersoalkan, asalkan diukur terhadap arah mendatar atau sumbu $x$. Dengan demikian dapat diperoleh

\begin{equation}\label{eqn:box-over-horizontal-moving-force}
F_{\rm mov} = F_1 \cos\theta,
\end{equation}

yang merupakan gaya yang menggerakan benda ke kanan.


## perpendicular vs parallel
Bila terdapat sebuah permukaan sudut dapat diukur dari arah normal permukaan tersebut (tegak lurus permukaan) atau dari arah sejajar permukaan.

### normal direction
Pada suatu permukaan dapat didefinisikan arah normal atau arah yang tegak lurus permukaan.

![]({{ site.baseurl }}/assets/img/0/27/0270-d.png) \
Gambar <a name="fig4">4</a>. Suatu permukaan dan vektor normalnya $\hat{n}$.

Untuk suatu permukaan yang dispesifikasikan dengan fungsi $f(x, y, z)$ maka dapat diperoleh

\begin{equation}\label{eqn:surface-normal-vector}
\hat{n} = \frac{\vec{\nabla} f}{\| \vec{\nabla} f \|}
\end{equation}

yang merupakan vektor normalnya.

### ball hitting wall
Saat membahas momentum dan impuls, kasus bola yang menumbuk dinding [[18](#r18)], sudut datang dan sudut pantul dihitung terhadap arah normal permukaan dinding atau arah tegak lurus dinding.

![]({{ site.baseurl }}/assets/img/0/27/0270-e.png) \
Gambar <a name="fig5">5</a>. Bola bermassa $m$ menumbuk dinding dengan kecepatan awal $\vec{v}_i$ dan terpantul dengan kcepatan akhir $\vec{v}_f$.

Sudut datang bola $\theta_i$ dan sudut pantulnya $\theta_f$ dihitung terhadap vektor normal permukaan $\hat{n}$, sebagaimaan disajikan dalam Gambar [5](#fig5). Impuls pada bola berupa

\begin{equation}\label{eqn:ball-hitting-wall-impuls}
\vec{I}_{BW} = \Delta \vec{p} = \vec{p}_f - \vec{p}_i = m\vec{v}_f - m\vec{v}_i,
\end{equation}

diberikan oleh dinding. Indeks $\rm BW$ berarti pada bola oleh dinding atau on ball (B) from wall (W).

### leaning ladder
Pada kasus sebuah tangga yang bersandar pada dinding licin dan kakinya berada di atas lantai yang kasar [[19](#r19)], sudut diukur terhadap permukaan, baik untuk kaki tangga dengan lantai atau bagian atas tangga dengan dinding.

![]({{ site.baseurl }}/assets/img/0/27/0270-f.png) \
Gambar <a name="fig6">6</a>. Tangga bermassa $m$ dan memiliki panjang $l$ disenderkan pada dinding licin $\mu_s = 0$ dan berada di atas lantai kasar $\mu_s > 0$.

Agar tangga dalam Gambar [6](#fig6) dapat berada dalam kesetimbangan statis maka perlu dipenuhi

\begin{equation}\label{eqn:leaning-ladder-sum-of-forces}
\sum \vec{F} = 0
\end{equation}

sesuai dengan hukum II Newton untuk gerak translasi dan

\begin{equation}\label{eqn:leaning-ladder-sum-of-torques}
\sum \tau_i = 0, \ \ \ \ i = {\rm A}, {\rm B}, {\rm C}
\end{equation}

untuk gerak rotasi. Titik-titik ${\rm A}$, ${\rm B}$, ${\rm C}$ adalah tempat di mana torsi dihitung. Perhatikan bagaimana sudut kaki tangga dengan lantai $\theta _{\rm H}$ dan bagian atas tangga dengan dinding $\theta _{\rm V}$ dihitung terhadap permukaan yang bersangkutan atau sejajar dengan permukaannya.


## exer
1. Dengan merujuk pada Gambar [1](#fig1) berikan contoh kasus yang menggunakan arah $y$ ke atas (berlawanan arah dengan arah $g$) dan arah $y$ ke bawah (searah dengan arah $g$). Petunjuk melempar batu. Sebutkan pula alasannya.
2. Bila sudut simpangan tidak diukur terhadap arah vertikal, melainkan terhadap arah horisontal, bagaimanakah bentuk gaya pemulih sistem bandul sederhana pada Gambar [2](#fig2)?
3. Pada Gambar [3](#fig3) sebelah kiri gaya dorong mengarah ke bawah dan sebelah kanan gaya tarik mengarah ke atas. Bagaimana gaya yang menggerakkan benda bila sebelah kiri gaya dorong mengarah ke atas dan sebelah kanan gaya tarik mengarah ke bawah?
4. Dengan melihat Persamaan \eqref{eqn:ball-hitting-wall-impuls}, perkirakan impuls pada dinding oleh bola $\vec{I}_{WB}$.
5. Bagaimana sebaiknya memiliki titik untuk menghitung torsi pada Persamaan \eqref{eqn:leaning-ladder-sum-of-torques}?


## note
1. <a name="r01"></a>Donna Roberts, Frederick Roberts, "Standard Position & Reference Angles", Algebra 2, MathBits Notebook, url <https://mathbitsnotebook.com/Algebra2/TrigConcepts/TCStandardPosition.html> [20211213].
2. <a name="r02"></a>The Experts at Dummies, "Angle of Inclination in Physics Problems", Dummies, 26 Mar 2016, url <https://www.dummies.com/article/academics-the-arts/science/physics/angle-of-inclination-in-physics-problems-141162> [20211213].
3. <a name="r03"></a>Tom Henderson, "Inclined Planes", The Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/vectors/Lesson-3/Inclined-Planes> [20211213].
4. <a name="r04"></a>Zev Chonoles, "Asnwer to 'Why are these angles equal for object on inclined plane?'", Math Stack Exchange, 2 Jan 2013, url <https://math.stackexchange.com/a/268921> [20211213].
5. <a name="r05"></a>Daniel A. Russell, "The Simple Pendulum", Acoustics and Vibration Animations, Graduate Program in Acoustics, The Pennsylvania State University, 2011, url <https://www.acs.psu.edu/drussell/Demos/Pendulum/Pendula.html> [20211213]. 
6. <a name="r06"></a>Carl R. Nave, "Large Amplitude Pendulum", Hyperphycis, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/pendl.html> [20211213].
7. <a name="r07"></a>D. Amrani, P. Paradis, M. Beaudin, "Approximation expressions for the large-angle period of a simple pendulum revisited", Revista Mexicana de Física E [Rev Mex Fís E], vol 54, no 1, p 59-64, Jan-Jun 2008, url <https://rmf.smf.mx/ojs/index.php/rmf-e/article/view/4567>.
8. <a name="r08"></a>"Problem: Box pulled at an angle over a horizontal surface", Phyley, 2019, url <https://www.phyley.com/box-pulled-at-angle-over-horizontal-surface> [20211213].
9. <a name="r09"></a>Michel van Biezen, "Physics 4.7 Friction & Forces at Angles (2 of 8) Horizontal Surface: 2", YouTube, 25.11.2016, url <https://www.youtube.com/watch?v=T3c_CarJ7zg> [20211213].
10. <a name="r10"></a>Tom Henderson, "Resolution of Forces",The Physics Classroom, 2021, url <https://www.physicsclassroom.com/class/vectors/Lesson-3/Resolution-of-Forces> [20211213].
11. <a name="r11"></a>"Forces acting at an angle: Resolving Forces", Mechanics 2.6, mathcenter, 6 Oct 2009, url <https://www.mathcentre.ac.uk/resources/uploaded/mc-web-mech2-6-2009.pdf> [20211213].
12. <a name="r12"></a>Kringle Daly, Eric W. Weisstein, "Angle of Incidence", Science Wolfram, Wolfram Research, 2007, url <https://scienceworld.wolfram.com/physics/AngleofIncidence.html> [20211213].
13. <a name="r13"></a>"The law of reflection", Light and sound - reflection and refraction, Bitsize, BBC, url <https://www.bbc.co.uk/bitesize/guides/zchyj6f/revision/2> [20211213].
14. <a name="r14"></a>The Editors of Encyclopaedia Britannica, Adam Augustyn, Aakanksha Gaur, Erik Gregersen, Thinley Kalsang Bhutia, Gloria Lotha, Gaurav Shukla, Surabhi Sinha, "refractive index", Encyclopædia Britannica, 23 Dec 2019, url <https://www.britannica.com/science/refractive-index> [20211213].
15. <a name="r15"></a>Wikipedia contributors, "Projectile motion", Wikipedia, The Free Encyclopedia, 29 October 2021, 19:25 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1052541209> [20211213].
16. <a name="r16"></a>Wikipedia contributors, "Angle of repose", Wikipedia, The Free Encyclopedia, 19 November 2021, 03:35 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1056001669> [20211213].
17. <a name="r17"></a>Hamzah M. Beakawi Al-Hashemi, Omar S. Baghabra Al-Amoudi, "A review on the angle of repose of granular materials", Powder Technology [Powder Technol], vol 330, no, p 397-417, May 2018, url <https://doi.org/10.1016/j.powtec.2018.02.003>.
18. <a name="r18"></a>Michel van Biezen, "Physics 10 Momentum and Impulse (11 of 30) Ball Hitting Wall: Ex. 1". YouTube, 27.04.2014, url <https://www.youtube.com/watch?v=1IvUNya9Zf0> [20211214].
19. <a name="r19"></a>Rhett Allain, "The Ladder Problem", WordPress, 11 Dec 20218, url <https://rhettallain.com/2018/12/11/the-ladder-problem/> [20211214].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0270?src=hash&amp;ref_src=twsrc%5Etfw">#bug0270</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1470557376356896769?ref_src=twsrc%5Etfw">December 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) ke atas melempar batu ke atas pada gerak vertikal ke atas untuk mengukur tinggi pohon, ke bawah melepaskan batu jatuh pada suatu sumur untuk mengukur dalamnya, keduanya tidak mengetahui posisi akhir (posisi tertinggi pada kasus pertama dan posisi dasar sumur / permukaan air pada kasus kedua); &nbsp;
2) $F_{\rm res} = -mg \cos\theta$; &nbsp;
3) sama, $F_{\rm mov} = F_1 \cos\theta$; &nbsp;
4) $\vec{I} _{BW} = -\vec{I} _{WB}$; &nbsp;
5) pilih titik dengan informasi gaya yang paling banyak tidak diketahui; &nbsp;
</ans>


{% comment %}
{% endcomment %}
