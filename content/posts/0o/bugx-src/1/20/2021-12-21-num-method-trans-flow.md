---
layout: butir
authors: [viridi]
title: num method trans flow
permalink: pages/1203
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["development", "transition flow", "integral boundary layer", "reynold average", "navier-stokes equation", "numerical method", "thesis 2", "december", "2021", "23620004", "nu'man amri maliky", "mochammad agoes moelyadi"]
date: 2021-12-24T18:52:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/1/20/2021-12-21-num-method-trans-flow.md
---
Prediksi yang lebih baik pada aliran transisi, suatu aliran penentu berubahnya aliran laminar menjadi aliran turbulen pada bagian atas, yang mempertimbangkan faktor-faktor yang berpengaruh seperti gradien tekanan, turbulen stream bebas, transfer panas, dan kekasaran permukaan, telah dikembangkan dengan menyelesaikan persamaan IBL (Integral Boundary Layer) dan RANS (Reynolds Average Navier-Stokes), di mana yang pertama solusinya diperoleh melalui metode integrasi ruang Runge-Kutta order dua dengan kode yang ditulis menggunakan Python, sedngkan yang kedua memanfaatkan piranti lunak OpenFOAM yang berbasis metode volume hingga atau Finite Volume Method (FVM), telah memberikan hasil simulasi dengan akurasi yang cukup tinggi saat dibandingkan dengan berbagai data eksperimen yang tersedia bersesuaian dengan faktor pengaruh letak transisi [[1](#r01)].


## presentation
Presentasi tesis 2 dilaksanakan pada Jumat, 24 Desember 2021, 0900-1100 bertempat di Ruang Seminar via online [[2](#r02)], dengan susunan Tim Penguji adalah Dr. Ing. M. Agoes Moelyadi (Ketua Sidang), Dr. Firman Hartono (Penguji 1), Dr.rer.nat. Sparisoma Viridi, M.Si. (Penguji 2), dan Ir. Muhammad Kusni, M.T. (Penguji 3), yang informasinya disampaikan melalui surat denga nomor 83/IT1.C04.4.4/KM.04.04/2021, bertanggal 21 Desemeber 2021, perihal Undangan Sidang Tesis, ditandatangani oleh Dr. Ir. Rachman Setiawan sebagai Ketua Program Studi Magister Teknik Dirgantara, FTMD, ITB.

![]({{ site.baseurl }}/assets/img/1/20/1204-a.png) \
Gambar <a name="fig1">1</a>. Kajian literatur perkembangan pemodelan aliran yang dapat mengakomodasi transisi disertai biaya komputasi yang lebih rendah.

Salah satu bagian presentasi adalah penyampaian perkembangan pemodelan aliran, dengan yang disingggung dalam hal ini persamaan Navier-Stokes (NS), Reynolds Average Navier-Stokes (RANS), dan Integral Boundary Layer (IBL), sehingga dapat memprediksi lokasi terjadinya transisi.


## page number
Baik pada bagian pertanyaan ataupun koreksi digunakan `n` yang berarti nomor halaman pada draft tesis, e.g.
> `ii` Pada judul abstrak berbahasa Inggris terdapat kata Numerical Methods, apakah berarti ada lebih dari satu metode numerik yang dikembangkan?

yang merupakan contoh untuk halaman ii.


## question
1. `i` Pada abstrak berbahasa Indonesia terdapat banyak istilah berbahasa Inggris, seperti
	> .. faktor-faktor yang mempengaruhinya, terdiri dari pressure gradient, freestream turbulence, heat transfer, dan surface roughness.
	
	Apakah memang tidak dapat dicari istilah bahasa Indonesianya? Ataukah terjemahan langsungnya dapat menimbulkan salah arti?

2. `i`, `ii` Pada kedua abstrak, terkesan berbeda antara
	> `i` **Metode** prediksi aliran transisi **yang saat ini sedang berkembang** adalah metode
	
	dengan
	
	> `ii` transition flow prediction **methods that are currently being developed** are methods 
	
	di mana kedua seperti dikembangkan dalam tesis ini sedangkan yang pertama yang sedang berkemban di dunia. Manakah sebenarnya yang dimaksud?
	
3. `i`, `ii` Pada kedua abstrak
	> `i` sesuai faktor pengaruh letak transisi.
	
	dengan
	> `ii` .. according to the influence factor of the transition location.
	
	Apakah memang letak yang dimaksud sesuai dengan location? Letak secara spasial atau dalam ruang parameter?
	
4. `1` Terdapat pernyataan
	> .. kecepatan terbangnya yang jauh dibawah dibandingkan kedua model pesawat, serta ukurannya yang lebih kecil. Spesifikasi ini membuat UAV cenderung memiliki Reynolds Number (Re) yang kecil.
	
	Bukankah bila menggunakan baling-baling, aliran udara di sekitar baling-baling UAV sudah turbulen atau memiliki nilai Re yang besar walapun pada badan pesawat masih laminer? Bila demikian gerak pesawat dalam aliran udara termasuk jenis aliran yang mana?

5. `4` Salah satu batasan penelitian adalah bahwa perpindahan panas diasumsikan terjadi hanya secara konduksi dan konveksi, akan tetapi tidak secara radiasi. Apa dasar dari asumsi ini pada sistem yang dikaji? Jelaskan dengan singkat.

6. `72`, `79` Apakah terdapat rencana untuk mempublikasikan kode yang dibuat dalam repositori kode seperti Github (https://github.com)? Hal ini perlu pertimbangang antara bebagai dan kemungkinan klain HKI.

7. `41` Terkait dengan kalimat
	> Dengan prosedur ini, skema numerik yang digunakan dalam penyelesaian kode numerik persamaan IBL dapat dituliskan sebagai berikut.
	
	apa yang dimaksud dengan **berikut**? Bagian berikutnya adalah
	> 2.4 Pengembangan Model Aliran Transisi
	
	yang terlihat tidak terkait dengan kutipan kalimat sebelumnya? Ataukah ada persamaan IBL yang belum dituliskan pada akhir bagian 2.3?
	
	`39`-`41` Untuk konsistensi penulisan mengapa pada **2.3 Skema Numerik**, terdapat sub bagian
	> Reynolds Average Navier-Stokes

	> Integral Boundary Layer
	
	mengapa tidak digunakan
	> 2.3.1 Reynolds Average Navier-Stokes

	> 2.3.2 Integral Boundary Layer
	
	agar konsisten dengan bagian lainnya, atau terdapat pertimbangan lain?

8. Pada definisi bilangan Reynolds $\rm Re$ terdapat laju, panjang karakteristik, dan viskositas kinematik, di mana peran faktor-faktor seperti gradien tekanan, turbulens stream bebas, transfer panas, dan kekasaran permukaan? 

9. `42` Pada pengajuan model (slide 16), apa syarat bentuk fungsi untuk $\rm Re_{\theta cr,0}$? Regresi data eksperiman apa landasan fungsi yang digunakannya? Apakah terdapat fungsi yang fisis?

10. Yang dihasilkan dari program berupa satu angka atau fungsi? Bila angka seberapa banyak sehingga bisa berbentuk kurva untuk disamakan dengan data-data eksperimen? Sisanya interpolasi kurva?

11. Pada perhitungan numerik terdapat hasil yang konvergen ke suatu nilai dengan error tertentu dan terdapat pula error dibandingkan dengan data eksperimen. Antara ke dua error tersebut simulasi yang dibuat mencari minimum error yang mana?

12. Saat program simulasi yang dibuat digunakan oleh orang lain, mungkin bisa dikeluarkan berbagai error seperti disampaikan disertai dengan hasil eksperiman rujukan, sehingga pengguna yakin akan hasil yang diperoleh.

13. Apakah ada rencana untuk publishing kode yang disertai kontribusi dari penelitian tesis ini? Hal ini akan membuat peran ITB tercatat di dunia sehingga dapat menjadi daya tarik mahasiswa asing untuk kuliah di sini.

14. Mengapa perlu dicari lokasi terjadinya transisi, apakah sistem kontrol baling-baling, wing flap dan slat tidak cukup untuk mengendalikan UAV?

15. Jangan cepat puas dan ditunggu kontribusinya yang mendunia.


## correction
Terdapat beberapa usulan koreksi yang perlu dikonfirmasi.

### in-text citation
1. `1` Merujuk lebih dari satu penulis
	> .. performa aerodinamika dari UAV. (Maliky, 2020) (Winslow, 2018).
	
	bukannya seharusnya
	> .. performa aerodinamika dari UAV (Maliky, 2020; Winslow, 2018).
	
	dalam satu kurung dan termasuk dalam bagian kalimat sehingga tanda titik di akhir perujukan? Pastikan cara merujuk ini.

2. `1` Judul referensi dengan gaya perujukan yang digunakan bukannya tidak perlu ditulis, sehingga
	> .. (Anderson, Fundamentals of Aerodynamics 3rd Edition, 2001)
	
	akan menjadi.
	> .. (Anderson, 2001)
	
	Pastikan mengenai hal ini.

3. `3` Bila lebih dari dua penulis, seperti
	> .. pada (Halila, Fidkowski, & Martins, 2020), dan ..
	
	dapat digunakan et al. menjadi
	
	> .. pada (Halila et al., 2020), dan ..

### better pronounciation
1. `4` Walaupun sesuai dengan kebiasan, akan tetapi lebih mudah mengucapkan bila
	Memvalidasi 🡒 Melakukan validasi

### capital letter
1. `5` Konsistensikan penggunaan huruf besar (dan juga titik di akhir)
	> a. Studi literatur**.** \
	> b. Penurunan **P**ersamaan **D**iskrit dan **P**enyelesaian **I**ntegrasi **N**umerik \
	> c. Pembuatan algoritma dan arsitektur pemrograman**.** \
	> d. Pengujian dan validasi hasil numerik**.**

### figure
1. Keterangan gambar belum diakhir tanda baca titik \
	`7`, `8`, `9`, `10`, `11`, `20`, `21`, `22`, `23`, `24`, `27`, `28`, `31`, `34`, `40`, `42`, `46`, `52`, `53`, `57`, `58`, `60`, `61`, `62`, `63`, `64`, `65`,
	
	Hal ini tidak perlu dikoreksi bila aturan lokal memang demikian.
	
2. Tulisan pada gambar sebaiknya cukup jelas dan tidak kabur \
	`40`, `62`, `63`, `64`, `65`,
	
3. Bingkai gambar sebaiknya di keempat sisi atau tidak ada sama sekali? \
	`42`
	
4. Kotak elemen diagram alir jangan terpotong / hilang sebagaian \
	`52`, `53`, `57`, `58`,

### table
1. Keterangan tabel belum diakhiri tanda baca titik \
	`33`, `36`, `48`, `50`, `59`, `60`,
	
	Hal ini tidak perlu dikoreksi bila aturan lokal memang demikian.
	
2. Tabel jangan terpotong ganti halaman (dapat dipecah menjadi beberapa tabel, satu untuk masing-masing halaman) \
	`36`-`37`, `48`-`50`, `50`-`51`,

### equation and symbol
Secara umum persamaan dan simbol tidak dicetak dengan huruf miring. Apakah memang digunakan konvensi demikian? Ikuti templat dari tesis yang berlaku di FTMD.

### to many zero
Pada slide
+ s. 26 Bilangan sumbu mendatar terlalu banyak nol, ada garis vertikal untuk memandu garis transisi akan lebih baik
+ s. 27 sudah lebih baik karena sumbu mendatar berskala log

Perbaiki juga yang terdapat dalam draft tesis, seperti `62`, dan periksa yang lainnya.

{% comment %}
Fast track, S1 solar panel pada UA V, software Ansys
S2, prediksi lokasi transisi, mengembangkan kode berbantuan OpenFOAM
Python untuk IBL

AM: Pengantar lalu menanyakan tanggapan tim penguji.

FH: Bagian mana yang kodenya dibuat?
OpenFOAM C++
T3 untuk menguji kasusnya
Menambahkan faktor-faktor yang menentukan transisi

MK: Teman-teman AE kurang care terhadap error analysis, tetapi kurang terlihat? Terlihat tidak melakukan.

Presentasi 20-30 menit, saat ini 0932.
Ijin share screen

Saat akan selesai presentasi, menjelasn jam 10, dc dan akhirnya pertanyaan diajukan lewat telepon

Pada definisi Re, peran perpindahan panas masuk di mana?

Pengajuan model, s 16, apa syarat boleh mengajukan untuk Re \theta crit?

Regresi data eksperiman apa landasan fungsi yang digunakannya?

S. 25 Schubaeuer dan Klebanof
S. 26 Bilangan sumbu mendatar terlalu banyak nol, ada garis vertikal untuk memandu garis transisi akan lebih baik
S. 27 sudah lebih baik karena sumbu mendatar berskala log

Yang dihasilkan dari program berupa satu angka atau fungsi? Bila angka seberapa banyak sehingga bisa berbentuk kurva untuk disamakan dengan data-data eksperimen? Sisanya interpolasi kurva?

Piranti lunak bila ingin digunakan oleh orang lain, mungkin bisa dikeluarkan berbagai error seperti disampaikan Pak Muhammad Kusni disertai dengan hasil eksperiman rujukan

Publishing kode yang disertai kontribusi dari penelitian tesis ini?
{% endcomment %}


## inspiration
Banyak hal menarik untuk dipelajari mulai dari persamaan Navier-Stokes yang merupakan persamaan diferensial parsial yang menggambarkan aliran fluida inkompresibel [[3](#r03)], persamaan Reynolds averaged Navier-Stokes yang merupakan rata-rata waktu persamaan gerak aliran fluida, yang utamanya digunakan untuk aliran turbulen [[4](#r04)], metode Integral Boundary Layer (IBL) yang berdasarkan teori boundary layer menyatakan bahwa efek viskositas terkungkung pada daerah kecil di sekeliling benda dan saat jauh dari benda aliran secara besar dapat diabaikan kekentalannya (inviscid), sehingga dapat menyederhanakan persamaan NS untuk dua daerah yang cocok solusinya pada antarmuka, memperbolehkan waktu komputasi yang lebih cepat [[5](#r05)], dan OpenFOAM yang merupakan piranti lunak Computational Fluid Dynamics (CFD) sumber terbuka [[6](#r06)].


## note
1. <a name="r01"></a>Nu’man Amri Maliky, "Pengembangan Metode Numerik Prediksi Aliran Transisi yang Akurat dan Robust pada Penyelesaian Persamaan Integral Boundary Layer dan Reynolds Average Navier-Stokes", Tesis Magister, Institut Teknologi Bandung, Indonesia, v13des, 24 Desember 2021, url <https://digilib.itb.ac.id/index.php/collection/type/7/0> [20211219]. [`PDF`](https://drive.google.com/file/d/11pcwHXQJSkS76gGMkNCoZucDcVNd7hjk/view?usp=sharing)
2. <a name="r02"></a>Rachman Setiawan, "Sidang Tesis Nu’man Amri Maliky (23620004)", Zoom, url <https://itb-ac-id.zoom.us/j/92221968767> [20211224].
3. <a name="r03"></a>William L. Hosch, Yamini Chauhan, Erik Gregersen, Gloria Lotha, "Navier-Stokes equation", Encyclopædia Britannica, 28 May 2020, url <https://www.britannica.com/science/Navier-Stokes-equation> [20211224].
4. <a name="r04"></a>Global Digital Central, "Reynolds-Averaged Navier Stokes Equations", Encyclopedia of thermal fluids science and engineering, Thermal-Fluids Central, 26 Jul 2010, url <http://www.thermalfluidscentral.org/encyclopedia/index.php/Reynolds-Averaged_Navier_Stokes_Equations> [20211224].
5. <a name="r05"></a>Akshay Koodly Ravishanara, Huseyin Özdemir, Andrea Franco, "Towards a Vortex Generator Model for Integral Boundary Layer Methods", AIAA 2019-0803, Session: Wind Turbine Blade Aerodynamics, 6 Jan 2019, url <https://doi.org/10.2514/6.2019-0803>.
6. <a name="r06"></a>"OpenFOAM", OpenCFD Ltd, 2021, url <https://www.openfoam.com/> [20211224].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug1203?src=hash&amp;ref_src=twsrc%5Etfw">#bug1203</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1474346836974473216?ref_src=twsrc%5Etfw">December 24, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


{% comment %} 1F850-9 🡐 🡑 🡒 🡓 🡔 🡕 🡖 🡗 🡘 🡙 {% endcomment %}
