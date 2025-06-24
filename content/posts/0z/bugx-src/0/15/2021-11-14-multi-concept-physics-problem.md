---
layout: butir
authors: [viridi]
title: multi-concept physics problem
permalink: pages/0150
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["multi-concept", "physics problem"]
date: 2021-11-15 21:27:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/15/2021-11-14-multi-concept-physics-problem.md
twitter_username: 6unpnp
nodes: []
---
Contoh riil penerapan fisika dalam kehidupan sehari-hari sering melibatkan berbagai konsep secara simultan, yang dikenal sebagai permasalahan fisika multi-konsep, terdapat konsep berbeda pada setiap bagian, sehingga per bagian dipecahkan satu per satu dengan pengetahuan pada masing-masing bagian perlu terlebih dahulu diidentifikasi [[1](#r01)]. Dalam memecahkan suatu permasalahan fisika multi-konsep strategi "diketahui-ditanya" tidak bekerja dengan baik dikarenakan memiliki kelemahan dalam mengindentifikasikan variabel pada masing-masing bagian, padahal konsep masing-masing bagian terhubung satu sama lain dengan variabel yang tersembunyi, untuk itu diperlukan strategi sketsa pengetahuan [[2](#r02)]. Terdapat pendekatan berbeda yang dilakukan oleh pemula dan pakar dalam memecahkan permasalahan fisika, di mana yang pertama akan mencari persamaan yang cocok dengan variabel-variabel yang diberikan atau mencoba memecahkannya dengan solusi dari persoalan yang mirip yang perlu dikerjakannya yang sayangnya pendekatan ini tidak universal, sedangkan yang kedua mampu untuk menerapkan berbagai konsep fisika yang diketahui, melakukan kombinasi konsep-konsep tersebut, sehingga dapat menangani bahkan permasalahan yang baru dan unik [[3](#r03)]. Contoh-contoh yang ada misalnya adalah balok terdorong pegas mendaki bidang miring sampai puncaknya, melayang membentuk gerak parabola, dan sampai pada daerah lain setelah melewati lekukan [[4](#r04)], pelontar pegas untuk melambungkan bola[[1](#r01)], dan mengapa kapal bisa mengapung, torsi pada derek saat mengangkat kapal, suara peluit kapal-kapal yang bersuperposisi, dan siklus mesin kapal yang mengada-ada [[5](#r05)]. Walaupun belum digunakan istilah permasalahan fisika multi-konsep, Pembelajaran Berbasis Riset (Research Based Learning-RBL), yang dilakukan sejak tahun 2006 sampai sekarang, merupakan suatu kegiatan mandiri yang dilakukan peserta ajar untuk memecahkan masalah dengan menggunakan berbagai konsep dan prinsip fisika [[6](#r06)].


## 1st illustration
Sebuah ilustrasi mengenai permasalahan multi-konsep yang bersifat tematik diberikan pada Gambar [1](#fig1) berikut ini, yang merupakan suatu upaya untuk matakuliah tahun pertama di perguruan tinggi [[5](#r05)].

![]({{ site.baseurl }}/assets/img/0/15/0150-a.png) \
Gambar <a name="fig1">1</a>. Suatu soal soal bersifat tematik melibatkan multi-konsep: (a) volume, massa jenis, (b)-(d) gaya apung, tegangan tali, kinematika rotasi, (e) efek Doppler, dan (f) siklus mesin kalor.

Terdapat berbagai konsep fisika yang perlu dipahami sehingga dapat memecahkan persoalan multi-konsep seperti pada Gambar [1](#fig1).

### ship
Bentuk kapal disederhanakan sehingga terdiri dari dua buah setengah bola dengan diameter $d$, dua buah balok dengan ukuran $d \times r \times l$ dan $d \times h \times (l + d)$, dengan $d = 2r$, sehingga dapat dihitung

\begin{equation}\label{eqn-ship-volume}
V_k = \tfrac16 \pi d^3 + l (r + h)d + hd^2,
\end{equation}

yang merupakan volume kapal. Dengan massa kapal m_k dapat diperoleh

\begin{equation}\label{eqn-ship-density}
\rho_k = \frac{m_k}{V_k},
\end{equation}

sehingga bagian kapal yang berada di atas air dapat dicari $h' > y$.

### pulley
Kemudian dari selisih $h' - y$ dapat dihitung berapakah tegangan tali $T_1$. Lalu massa katrol $m_k$, berbeda dengan massa kapal walau dengan simbol yang sama, dan berputarnya katrol dengan $\omega$ yang berubah secara beraturan akan memberikan

\begin{equation}\label{eqn-crane-tension}
T_2 = T_1 + \tfrac12 m_k R \alpha
\end{equation}

yang perlu disediakan oleh mesin derek, di mana

\begin{equation}\label{eqn-pulley-angular-acceleration}
\alpha = \frac{d\omega}{dt}
\end{equation}

adalah percepatan angular berputarnya katrol. Saat air surut tegangan tali yang mengangkat kapal akan menjadi $T_1' > T_1$ sehingga mesin derek perlu menyediakan gaya tegangan tali $T_2'$ yang lebih besar dari sebelumnya.

### horn
Sebagai penyederhanaan, peluit kapal diasumsikan hanya memiliki satu frekuensi. Terdapat dua kapal yang sedang bersama-sama membunyikan peluitnya dan terdengar oleh pengamat yang berada pada kapal yang diam di pelabuhan, bahwa suara kapal yang lain semakin kecil. Hal ini terkait dengan intensitas bunyi

\begin{equation}\label{eqn-horn-intensity}
I_r = \frac{r_0^2}{r^2} I_0,
\end{equation}

yang bergantung pada jarak antara pendengar dan sumber bunyi [[7](#r07)]. Terdengar pula adanya pelayangan

\begin{equation}\label{eqn-horn-beat-frequency}
f_b = \| f_1 - f_2 \|
\end{equation}

saat dua buah suara peluit tersebut berinterferensi (kapal $1$ dan $2$). Karena adanya kabut, tidak terlihat apakah kapal yang lain itu sedang menuju atau menjauhi pelabuhan.

### engine
Mesin kapal memiliki siklus yang terdiri dari dua proses isokhorik dan dua proses isobarik, di mana panas masuk ke sistem pada proses $k \rightarrow h$ dan $h \rightarrow i$ dan diekstrak dari sistem pada proses $i \rightarrow j$ dan $j \rightarrow k$, sementara

\begin{equation}\label{eqn-work-done-by-gas}
W _{h \rightarrow i} = p_1 (V_2 - V_1) > 0
\end{equation}

usaha yang dilakukan oleh gas pada proses ekspansi isobarik [[8](#r08)].


## note
1. <a name="r01"></a>Peema, "Multi-concept Problems", PHYSICS 114, Tacoma Community College, Fall 2015, url <https://www.coursehero.com/file/12188500> [20211115].
2. <a name="r02"></a>Helmi Abdullah, "Using knowledge sketching strategy to increase ability in solving the multi-concept physics problem Previous Contents Next", Asia-Pacific Forum on Science Learning and Teaching, vol. 19, no. 2, art. 19, Dec 2018, url <https://www.eduhk.hk/apfslt/v19_issue2/helmi/index.htm> [20211115].
3. <a name="r03"></a>"An Expert’s Approach to Solving Physics Problems", Department of Physics and Astronomy, West Virginia University, 10 Aug, 2021, url <https://physics.wvu.edu/files/d/8a2a1bad-7b57-4577-aaa9-209aad24ea68/expertapproachtosolvingphysicsproblems.pdf> [20211115].
4. <a name="r04"></a>mgerman63016, "Multi-concepts problem", Physics Forums, 15 Mar 2013, url <https://www.physicsforums.com/threads/678544> [20211115].
5. <a name="r05"></a>Novitrian, K. Basar, S. Viridi, "Evaluasi Sekunder Tematik Mata Kuliah Fisika Dasar yang Diberikan di Tingkat TPB ITB", Prosiding Seminar Nasional Fisika 2010 (SNF 2010), Eds. E. Sustini et al., Bandung, Indonesia, 11-12 Mei 2010, pp. 504-509.
6. <a name="r06"></a>Triyanta, "Pembelajaran Berbasis Riset pada Kuliah Fisika Dasar di ITB sebagai Sebuah Contoh Pendidikan STEM", Prosiding Simposium Nasional Inovasi dan Pembelajaran Sains (SNIPS 2018), 9-10 Juli 2018, Bandung, Indonesia, pp. 468-475, url <https://ifory.id/abstract/VDjKTMQg28CN> [20211115].
7. <a name="r07"></a>"Intensity and Distance", Pressbooks, Apr 2019, url <https://sound.pressbooks.com/chapter/intensity-and-distance-april-2019-version/> [20211115].
8. <a name="r08"></a>Carl R. Nave, "Engine Cycles", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/thermo/engcyc.html> [20211115]

## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
