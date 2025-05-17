---
layout: butir
authors: [viridi]
title: eis arduino
permalink: pages/1201
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["electrical impedance spectroscopy", "eis", "ardunio", "instrumentation", "master thesis", "december", "2021", "20218027", "dika setiawan", "hendro", "irfan dwi aditya"]
date: 2021-12-20T21:24:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/1/20/2021-12-19-eis-arduino.md
---
Sprektroskopi impedans listrik atau electrical impedance spectroscopy (EIS) dapat dibangun purwarupanya dengan komponen elektronik yang tersedia di pasaran, yang perlu dilengkapi dengan mikrokontroler Ardunio agar hasil pengukuran dapat langsung ditampilkan di komputer [[1](#r01)].


## defense
Sidang Tesis II dilakukan secara bauran antara luring yang bertempat di Ruang Staf Baru, Program Studi Fisika, FMIPA, ITB [[2](#r02)] dan daring lewat aplikasi Zoom [[3](#r03)].

![]({{ site.baseulr }}/assets/img/1/20/1201-a.jpg) | ![]({{ site.baseulr }}/assets/img/1/20/1201-b.png)

Gambar <a name="fig1">1</a>. Partisipasi secara daring pada sidang tesis (kiri) dan demo pengukuran melalui aplikasi PuTTY (kanan).

Sidang dihadiri secara luring oleh pembimbing pertama Dr. Hendro, pembimbing kedua Dr. Irfan Dwi Aditya, Ketua Program Studi Magister dan Doktor Fisika Rachmat Hidayat, Ph.D., dan secara daring oleh Dr. Nina Siti Aminah sebagai penguji kedua, Dr.rer.nat. Sparisoma Viridi sebagai penguji kedua.


## question
1. Apakah telah diuji sampel bahan padat dan cair seperti tercantum pada abstrak (h. 1)?
	> Electrical Impedance Spectroscopy atau EIS merupakan teknik yang mumpuni dalam proses karakterisasi bahan padat dan cairan terutama dalam aplikasi elektro kimia, biologi, medis dan sebagainya. \
	> .. \
	> Prototipe ini juga mampu melakukan pengujian pada rentang frekuensi 100 Hz hingga 100 kHz dengan rentang ukur impedansi 10 Ω hingga 100 kΩ. \
	> .. \
	> Hasil pengujian beberapa sampel impedansi menunjukkan kesesuaian dengan hasil simulasi dengan tingkat kesalahan kurang dari 5%.
2. Dari Daftar Isi (h. viii) terlihat bahwa Bab V Eksperimen Impedansi, belum mengukur sampel sebenarnya, melainkan masih dalam tahap mengukur komponen standar.
	>  V.1 Eksperimen Pengukuran Resistor  73 \
	> V.2 Eksperimen Pengukuran Kapasitor  75 \
	> V.3 Eksperimen Pengukuran Resistor dan Kapasitor Seri  77 \
	> V.4 Eksperimen Pengukuran Resistor dan Kapasitor Paralel  78 \
	> V.5 Eksperimen Pengukuran Resistor dan Kapasitor Seri – Paralel  80 
	
	Mengapa penekanan tahap ini belum dicantumkan pada abstrak? Di mana pada abstrak hanya tercantum
	
	> Hasil pengujian beberapa sampel impedansi menunjukkan kesesuaian dengan hasil simulasi dengan tingkat kesalahan kurang dari 5%.
	
	yang dapat misleading bahwa telah diujikan sampel sebenarnya.
3. Apa yang dimaksud dengan pernyataan pada bagian Ruang Lingkup Penelitian (h. 3), bahwa
	> Prototipe tersebut diharapkan mampu bekerja pada mode potensiostat dengan sistem pengukuran dua elektroda (two-wire).
4. Apa berbedaannya dengan mode galvanostat?
5. Masih pada halaman yang sama, mengapa dikatakan spesifikasi maksimum? Bukankah lebih tepat sebagai rentang spesifikasi saja? Atau cukup spesifikasi yang ingin dicapai? Kata Maksimum mengandung konotasi batas atas, padahal terdapat juga batas bawah.
6. Bagaimana cara Ibba dkk. (2020) mendapatkan rangkaian ekivalen untuk apel dan pisang yang diamati selama 13 hari (s. 4)?
7. Mengingat sampel organik dan aktivitas mikroba adalah hal yang kompleks. Apakah terdapat kemungkinan terjadi perubahan rangkaian ekivalen selama observasi berlangsung mengingat dapat terbentuk senyawa baru atau ada senyawa yang habis bereaksi selama durasi pengamatan?
8. Diagram Nyquist yang jelek apakah dapat diubah rangkaian ekivalennya sehingga diperoleh kurva yang lebih baik (s. 41)? Dengan ini dapat dipahami sifat komponen elektroniknya terhadap frekuensi?
9. Bila tegangan langsung terukur sedangkan arus agak lama, apakah hal ini berarti informasi arus dikonversi dulu ke tegangan baru dikirimkan ke PC?
10. Apakah ada Aduino memiliki fasilitas webserver sehingga data dapat diakses melalui web browser? Atau dapat diganding dengan Raspberry Pi yang memiliki fitur ini?
11. Kelemahan pengukuran arus yang masih menggunakan komparasi baru diarahkan ke rentang yang sesuai, perlu ditekankan agar dapat menjadi rujukan. Bagaimana rencana  pengembangan lebih lanjutnya?
12. Penerapan purwarupa ini apakah cocok untuk sampel yang diam atau bergerak pada flow dalam rangkaian proses di pabrik? Sebaiknya dijelaskan pada bagian sebelum kesimpulan.
13. Apakah hasil ini akan dipublikasikan? Perlu beberapa improvement sehingga menghasilkan tulisan yang menarik untuk dibaca.
14. Apakah kode yang digunakan akan dipublish di [Github](https://github.com/) atau repo kode lainnya sehingga dapat dirujuk oleh orang lain?
15. Mengingat bahwa Desain Tata Letak Sirkuit Terpadu (DTLST) merupakan salah satu dari tujuh obyek Hak Kekayaan Intelektual (HKI) di Indonesia [[4](#r04)], apakah ada rencana untuk mendaftarkan purwarupa yang sudah dibuat? Sebagai saran, sebaiknya dilakukan.


## correction
Terdapat beberapa koreksi yang diusulkan agar dapat diakomodasi.

### in-text citation style
Gaya penulisan sitasi dalam teks belum konsisten

`7`
> .. sampel susu sapi mentah (cow’s raw milk) (Grossi dkk., 2011). \
> .. dilakukan oleh Uria dkk. tahun 2016, ..

`8`
> Durante dkk. (2016) juga memanfaatkan ..

`9`
> Rehman dkk. (2011) telah melakukan pengukuran .. \
> .. kombinasi paralel dari sebuah resistor dan kapasitor (Rehman dkk., 2011).

`10`
> .. dilakukan oleh Ibba dkk. (2020) berhasil ..

`11`
> .. menurut Ibba dkk. (2020). \
> Lu dkk. (2015) mendesain sensor ..

`12`
> .. dalam darah menurut Lu dkk. (2015). \
> .. perlu untuk diketahui (Aria dkk., 2019). \
> .. diungkapkan oleh Amiram Ur (1970). \
> .. dilakukan oleh Berney dan O’Riordan (2018) ..

`13`
> .. baik oleh Ur maupun oleh Berney dan O’Riordan tidak .. \
> .. seperti karya Breniuc dkk. (2014) serta Chabowsky dkk. (2015). \
> Grossi dkk., 2008&2011 \
> Breniuc dkk., 2014 \
> Chabowsky dkk., 2015 \
> Lu dkk., 2015 \
> Ibba dkk., 2020 \
> Durante dkk., 2016 \
> Berney dan O’Riordan, 2008

`14`
> .. sinyal uji ini, Chabowski, dkk. (2015) menambahkan ..

`15`
> .. pengukuran impedansi (Ehlich dkk., 2020). \
> .. sebagaimana dicontohkan oleh Breniuc dkk., (2014).

`16`
> .. dalam domain frekuensi (Alexander dan Sadiku, 2009).

`23`
> dibuat oleh J. Bareford (1990).

`31`
> .. pada terminal Q1 – Q8 (Intersil, 1992).

`38`
> .. pencacah biner (Texas, 2003b).

`39`
> dengan rasio 2, 4, 5, 10, 20, 25, 50 atau 100 (Philips, 1990).

`40`
> .. tegangan masukan sebesar 1 Volt pada terminal VG (Elantec, 1996).

`46`
> .. kemudian mengakarkan (Sheingold, 1976).

`48`
> .. menaikkan nilai C19(Analog, 2019). \
> .. kondisi lead/lag yang terjadi (Dey dan Agarwala, 2016).

`50`
> .. saat level noise pada sinyal masukan cukup besar (National, 2001).

`51`
> .. tegangan DC menggunakan LPF (Abdul-Niby dan Fyath, 1987).

`53`
> .. atau 1 mV/bit (Microchip, 2015). \
> .. kanal 1 hingga kanal 4 (Microchip, 2002).

### preposition
Penggunaan kata depan: dimana ➔ di mana

`6` (2) \
`7` (1) \
`8` (1) \
`10` (1) \
`12` (1) \
`16` (1) \
`32` (1) \
`36` (1) \
`42` (1) \
`44` (1) \
`57` (2) \
`67` (1) \
`77` (1) \
`80` (1) \
`81` (1)

### italic
`kover` \
Electrical Impedance Spectroscopy &#10132; cetak miring (?)

### term
Terdapat istilah yang lebih Indonesia

`i` \
prototipe ➔ purwarupa


### year
Koreksi tahun tesis pada halaman Pedoman Penggunaan Tesis

`iv` \
2020 ➔ 2021

### list of figures
Perbaikan pada Daftar Gambar dan Illustrasi untuk item yang terlalu panjang sehingga mengganggu informasi penomoran halaman
+ `vii` III.2.1.1 Rangkaian Voltage-Controlled Oscillator (VCO) &#10132; kurangi indentasinya tidak mengganggu nomor halaman
+  `x` Terdapat tiga keterangan gambar (III.1, III.12, III.21) yang terlalu panjang sehingga mengganggu nomor halaman ➔ perbaiki dengan menurunkannya ke baris berikutnya
+ `xi` Seperti sebelumnya untuk beberapa keterangan gambar (IV.16, V.6, V.8, V.10, V.12)

### figure
Merujuk gambar dengan kata **G**mbar atau **g**ambar?
+ `10` Merujuk gambar, dimulai dengan huruf besar pada kata Gambar
> .. rangkaian ekivalen pada Gambar II.2.
+ `11` Merujuk gambar tidak konsisten, kali ini dimulai dengan huruf kecil
> .. seperti ditunjukkan pada gambar II.3.
+ Periksa halaman lainnya juga ..

`55` Keterangan gambar belum diakhiri tanda baca titik (`.`) dan periksa juga untuk gambar-gambar yang lainnya

### equation
`41` satuan tegangan adalah V (satu huruf dengan huruf besar) atau volt (satu kata dengan huruf kecil), dan tidak dicetak miring, koreksi *Volt* ➔ volt atau volt pada
- Persamaan (III.14)
- Persamaan (III.15)
- Persamaan (III.18)\
Kecuali ada konvensi pada bidang rekayasa dan bukan fisika yang digunakan.

`41` Indeks bawah dicetak miring, label dicetak tegak, seperti IN dan OUT, sehingga membedakan IN sebagai label atau dua variabel *I* dan *N*
- Persamaan (III.14)
- Persamaan (III.15)
- Persamaan (III.16)
- Persamaan (III.17)

`41` Lakukan hal yang sama dengan GAIN (cetak tegak) dan bukan *GAIN* (cetak miring)
- Persamaan (III.14)
- Persamaan (III.15)

### purpose -- conclusion
1. `2` Penelitian ini bertujuan untuk mengembangkan prototipe instrumen EIS dengan menggunakan komponen-komponen yang masih dapat diperoleh di Indonesia.
	+ `83` Desain sistem instrumen EIS berbasis Arduino telah berhasil dibuat dengan memanfaatkan komponen-komponen elektronik yang terdapat di pasaran. :heavy_check_mark:
	
2. `3` Prototipe tersebut diharapkan mampu bekerja pada mode potensiostat dengan sistem pengukuran dua elektroda (two-wire).
	+ `83` :x:

+ `83` Kesimpulan terlalu kualitatif \
**Saran**: Tambahkan informasi kuantitatif pada kesimpulan, misalnya dengan memanfaatkan informasi pada bagian Ruang Lingkup Penelitian terdapat spesifikasi maksimum seperti
	>  Sinyal uji yang dihasilkan berupa gelombang sinusoidal dengan rentang frekuensi 1 Hz hingga 100 kHz dan amplitudo 10 mVRMS hingga 1 VRMS. \
	>  Rentang pengukuran tegangan AC adalah 10 mVRMS hingga 1 VRMS. \
	>  Rentang pengukuran arus AC adalah 1 μARMS hingga 10 mARMS. \
	>  Rentang pengukuran sudut fasa (antara tegangan dan arus) adalah -180o hingga 180o.

Selain catatan-catatan di atas, (kemungkinan besar) masih terdapat koreksi lain yang dapat dilihat dari video rekaman Sidang Tesis II yang dibuat.


## inspiration
Menarik untuk mempelajari Nyquist plot atau Nyquist diagram, suatu plot respons frekuensi yang digunakan dalam teknik kendali dan pemrosesan sinyal, di mana frekuensi disapu sebagai parameter sehingga menghasilkan suatu plot berbasiskan freqkuensi [[5](#r05)]. Suatu plot Nyquist menyediakan suatu cara langsung dalam menentukan apakah suatu penguat akan berosilasi, yang merupakan pemanfaatkan jenis plot ini untuk analisis stabilitas [[6](#r06)]. Plot ini dapat digambarkan dengan cara termudah menggunakan plot Bode [[7](#r07)]. Wolfram Alpha telah menyediakan contoh untuk membuat plot Nyquist suatu fungsi transfer [[8](#r08)].


## note
1. <a name="r01"></a>Dika Setiawan, "Rancang Bangun Instrumen Electrical Impedance Spectroscopy (EIS) Berbasis Arduino", Tesis Magister, Institut Teknologi Bandung, Indonesia, Desember 2021, url <https://digilib.itb.ac.id/index.php/collection/type/7/0> [20211219]. [`PDF`](https://drive.google.com/file/d/1YjiWPD83aBNLpai6gAJGmy8_nUbnas-1/view?usp=sharing)
2. <a name="r02"></a>Adi Permana, "Mahasiswi Korea Selatan Antusias Mengikuti Kuliah dari Dosen ITB", Institut Teknologi Bandung, 1 Jul 2019, url <https://www.itb.ac.id/news/read/57138/home/mahasiswi-korea-selatan-antusias-mengikuti-kuliah-dari-dosen-itb> [20211220].
3. <a name="r03"></a>Irfan Dwi Aditya, "Sidang Dika", Zoom, 20 Dec 2021, 1000 AM Jakarta, url <https://itb-ac-id.zoom.us/j/99539760732> [20211220].
4. <a name="r04"></a>Venantia Sri Hadiarianti, "Pemahaman Dan Penerapan Hukum Tentang Desain Tata Letak Sirkuit Terpadu (Layout Design Of Integrated Circuit)", Universitas Katolik Indonesia Atma Jaya, 29 Jun 2010, url <https://www.atmajaya.ac.id/web/KontenUnit.aspx?gid=artikel-hki&ou=hki&cid=artikel-hki-pemahaman-penerapan> [20211220].
5. <a name="r05"></a>Electrical4U, "Nyquist Plot: What is it? (And How To Draw One)", E4U, 28 Oct 2020, url <https://www.electrical4u.com/nyquist-plot/> [20211220].
6. <a name="r06"></a>Robert Keim, "How to Use Nyquist Plots for Stability Analysis", All About Circuits, 5 Jul 2019, url <https://www.allaboutcircuits.com/technical-articles/how-to-use-nyquist-plots-for-stability-analysis/> [20211220].
7. <a name="r07"></a>Emma Benjaminson, "Drawing Nyquist Plots", Carnegie Mellon University, 16 Sep 2019, url <https://sassafras13.github.io/Nyquist/> [20211220].
8. <a name="r08"></a>"Nyquist plot of the transfer function s/(s-1)^3", Wolfram Alpha, 2021, url <https://www.wolframalpha.com/input/?i=Nyquist+plot+of+the+transfer+function+s%2F%28s-1%29%5E3&lk=3> [20211220].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug1201?src=hash&amp;ref_src=twsrc%5Etfw">#bug1201</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1472935363022786564?ref_src=twsrc%5Etfw">December 20, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>

{% comment %} &#10132; ➔, ⚬ {% endcomment %}