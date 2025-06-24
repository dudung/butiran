---
layout: butir
authors: [viridi]
title: sc np fa simulation
permalink: pages/1202
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["stem cell", "nanopattern", "lennard-jones potential", "python", "simulation", "extended abstract thesis 1", "january", "2022", "28720005", "achmad zacky fairuza", "suprijadi", "sparisoma viridi"]
date: 2022-01-04T10:49:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/1/20/2021-12-21-sc-np-fa-simulation.md
---
Diferensiasi sel punca menjadi sel lain dapat diatur dengan memilih konfigurasi nanopattern, yang menentukan posisi-posisi reseptor sel berikatan dengan ligan melalui peristiwa focal adhesion, menarik untuk disimulasikan [[1](#r01)].


## presentation
Presentasi mahasiswa yang telah mengambil matakuliah Tesis I dilakukan serentak pada yang tadinya direncanakan pada Rabu, 22 Desember 2021, sesuai dengan arahan Ketua Program Studi Magister Teknologi Nano, Dr. Eng. Nugraha. Kegiatan tersebut belum terkait dengan kegiatan 1st ITB Graduate School Conference (i-GSC) yang diselenggarakan oleh SPs dan LPPM ITB [[2](#r02)], yang dilaksanakan secara daring [[3](#r03)] untuk mahasiswa pascasarjana.

### update
Koreksi draft disampaikan pada 31 Desember 2021 [[12](#r12)], yang telah direduksi menjadi dua halaman dari semula tiga. Dan presentasi diubah menjadi Selasa, 4 Januari 2022, 1400-1500, di Ruang Rapat Besar Lantai 3 Gedung CAS, PPNN (hybrid).


## question
1. Terdapat pernyataan
	> `1` Sistem simulasi yang telah jadi nantinya akan diuji dengan hasil eksperimen yang telah dilakukan oleh peneliti lain untuk mengetahui tingkat akurasi. \
	> `1` Hasil perbandingan tersebut akan menjadi evaluasi bagi program untuk meningkatkan akurasi program.
	> `2` Evaluasi dan uji akurasi program (kalibrasi) 
	
	Apakah target ini memang akan tercapai atau hanya sampai diperoleh fenomena yang mirip secara kualitatif, akan tetapi dalam skala berbeda, saat dibandingkan dengan hasil eksperimen? Bila ya, sebaiknya diubah,
	> e.g. hasil simulasi akan dibandingkan dengan hasil eksperimen untuk melihat kesamaannya secara kualitatif, mengingat terlalu banyak fenomena fisis yang diabaikan serta nilai-nilai parameter interakssi yang diasumsikan.

2. Mengapa nama-nama berkas seperti PATCON, CELCON, SIMCON, DOCMAP, LIGPOS, RESPOS, CELPOS dan SIMPLOG disajikan dengan tabel sehingga memudahkan pembaca?

3. Terdapat pernyataan
	> `2` .. yang dapat diterapkan untuk reseptor dan ligan adalah potensial Lennard-Jones [11].
	
	Apakah pernyataan ini tepat? Terlihat bahwa saat itu, sekitar 1924, belum dirujuk sebagai fungsi potensial Lennard-Jones, seperti pada [[4](#r04)]
	
	> We derive a generalized Lennard-Jones force law from the Lennard-Jones potential function invented in [136]. The Lennard-Jones potential function was first proposed by John Lennard-Jones in 1924. This potential function models two distinct forces between neutral molecules and atoms.
	
	> 136$.$ Lennard-Jones, J.E.: On the determination of molecular fields. I. From the variation of the viscosity of a gas with temperature. Proceedings of the Royal Society of London. Series A, Containing Papers of a Mathematical and Physical Character 106(738), 441–462 (1924).
	
	setidaknya tidak oleh sang penulis sendiri dalam [[5](#r05)]. Mungkin kalimat berikut
	
	> .. yang dapat diterapkan untuk reseptor dan ligan adalah suatu bentuk potensial [11], yang kemudian dikenal sebagai potensial Lennard-Jones.
	
	merupakan reformulasi yang lebih baik.

4. Pada abstrak tercantum
	> `1` Reseptor yang digunakan nantinya akan berada pada skala ratusan hingga ribuan reseptor dan jarak antar ligand berada pada rentang 70 nm to 150 nm seperti yang telah dilaporkan pada penelitian sebelumnya.
	
	Mengapa keterangan ini tidak ikut disertakan dalam keterangan pada gambar 3? Hal ini akan membantu pembaca membayangkan perbandingan spasai nanopatern dengan ukuran sel, serta bahwa terdapat ratusan sampai ribuan reseptor.
	
5. Berapakah jumlah reseptor maksimum yang nanti dapat disimulasikan? Terkait dengan jawaban ini, berapa ukuran sel punca relatif terhadap spasi nanopatern?

6. Apakah terdapat pembatasan jumlah halaman? Bila ya, referensi dapat menggunakan et al. semua agar konsisten, dan Gambar 3 dapat direduksi menjadi hanya dua sub gambar.


## correction
Terdapat beberapa usulan koreksi untuk diakomodasi. Halaman pada sumber yang dikoreksi dirujuk dengan `n` dengan n adalah nomor halaman.

### typographical error
Beberapa kesalahan penulisan
+ `1` mennjukan 🡒 menunjukkan

### nonstandard word
+ `1` mensimulasikan 🡒 menyimulasikan [[6](#r06)] \
	Alternatif: melakukan simulasi

### available word
+ `1`, `2` stem cell 🡒 sel punca [[7](#r07)]

### int-text citation
Perujukan referensi dalam teks sebaiknya konsisten antara
+ `1` hanya dengan angka
	> Mekanisme yang digunakan pada program adalah fenomena
focal adhesion [9] ..
+ `1` nama dengan angka (walau tidak lazim)
> .. terhadap ligan berukuran nano yang dikerjakan oleh Irvine, dkk [10].
+ nama dengan tahun (belum digunakan)
> .. dengan mengadaptasi simulasi pengikatan integrin terhadap ligan berukuran nano (Irvine dkk., 2002).

Pengubahan cara merujuk memerlukan pengubahan tata kalimat sehingga, misalnya dari bentuk kedua ke bentuk ketiga, perlu menghilangkan obyek atau subyek penulis karena sudah masuk ke dalam kurung yang dilengkapi tahun. Selain itu bentuk ketiga menuntut pengubahan cara penulisan item pada bagian referensi yang menjadi nama keluarga dari semua penulis lalu diikuti dengan tahun terbitnya sumber referensi, yang merupakan gaya perujukan APA [[6](#r06)].

### references item
+ Semua penulis dicantumkan lengkap namanya, bukan hanya yang pertama
> `3` 6$.$ **Dobbenga, S., Fratila-Apachitei, L. E., & Zadpoor, A. A.** (2016). Nanopattern-induced osteogenic differentiation of stem cells–A systematic review. Acta biomaterialia, 46, 3-14. \
> `3` 8$.$ **Abagnale, G. et al.** Surface topography enhances differentiation of mesenchymal stem cells towards osteogenic and adipogenic lineages. Biomaterials (2015) doi: 10.1016/j.biomaterials.2015.05.030.
+ Letak informasi tahun diletakkan konsisten antara kedua format berikut, setelah penulis atau setelah nama jurnal
> `3` 6$.$ Dobbenga, S., Fratila-Apachitei, L. E., & Zadpoor, A. A. **(2016)**. Nanopattern-induced osteogenic differentiation of stem cells–A systematic review. Acta biomaterialia, 46, 3-14. \
> `3` 7$.$ Wu, Y. N. et al. Substrate topography determines the fate of chondrogenesis from human mesenchymal stem cells resulting in specific cartilage phenotype formation. Nanomedicine Nanotechnology, Biol. Med. **(2014)** doi: 10.1016/j.nano.2014.04.002
+ Nama jurnal ditulis lengkap atau disingkat
> `3` 6$.$ Dobbenga, S., Fratila-Apachitei, L. E., & Zadpoor, A. A. (2016). Nanopattern-induced osteogenic differentiation of stem cells–A systematic review. **Acta biomaterialia**, 46, 3-14. \
> `3` 7$.$ Wu, Y. N. et al. Substrate topography determines the fate of chondrogenesis from human mesenchymal stem cells resulting in specific cartilage phenotype formation. **Nanomedicine Nanotechnology, Biol. Med.** (2014) doi: 10.1016/j.nano.2014.04.002
+ Informasi DOI disertakan atau tidak
> `3` 8$.$ Abagnale, G. et al. Surface topography enhances differentiation of mesenchymal stem cells towards osteogenic and adipogenic lineages. Biomaterials (2015) **doi: 10.1016/j.biomaterials.2015.05.030**. \
> `2` 1$.$ Heino, T. J., & Hentunen, T. A. (2008). Differentiation of osteoblasts and osteocytes from mesenchymal stem cells. Current stem cell research & therapy, 3(2), 131-145.
+ Informasi volume, nomor/issue, halaman disertakan atau tidak
> `2` 2$.$ Worster, A. A., Nixon, A. J., Brower-Toland, B. D., & Williams, J. (2000). Effect of transforming growth factor β1 on chondrogenic differentiation of cultured equine mesenchymal stem cells. American journal of veterinary research, **61(9), 1003-1010**.
> `3` 9$.$ Biggs, M. J. P., Richards, R. G. & Dalby, M. J. Nanotopographical modification: A regulator of cellular function through focal adhesions. Nanomedicine: Nanotechnology, Biology, and Medicine (2010) doi: 10.1016/j.nano.2010.01.009.
+ Setiap kata (kecuali kata depan) pada nama jurnal diawali dengan huruf besar atau tidak
> `3` 4$.$ Park, S. H., Shin, J. W., Kang, Y. G., Hyun, J. S., Oh, M. J., & Shin, J. W. (2014). Texture analyses show synergetic effects of biomechanical and biochemical stimulation on mesenchymal stem cell differentiation into early phase osteoblasts. **M**icroscopy and **M**icroanalysis, 20(1), 219-227. \
> `3` 6$.$ Dobbenga, S., Fratila-Apachitei, L. E., & Zadpoor, A. A. (2016). Nanopattern-induced osteogenic differentiation of stem cells–A systematic review. **A**cta **b**iomaterialia, 46, 3-14.

Periksa lagi untuk semua item referensi (11 buah) terkait dengan konsistensi penulisannya.

### caption
+ `1` Keterangan gambar 1 belum diakhiri tanda baca titik (`.`).
+ `2` Keterangan tabel 1 belum diakhiri tanda baca titik  (`.`).

### figure
+ `2` Belum terdapat teks yang merujuk ke gambar 3.
+ `2` Kemungkinan salah merujuk terdapat pada paragraf sebelum gambar 3
	> Tampilan dari ligan dan sel ditunjukan pada gambar 2. Warna hijau menunjukan ..  :x:

	yang seharusnya
	> Tampilan dari ligan dan sel ditunjukan pada gambar 3. Warna hijau menunjukan ..  :heavy_check_mark:


## inspiration
Studi pada struktur focal adhesion dan yang menyerupainya telah sangat berkontribusi pada pemahaman kita mengenai organisasi dari adhesi cell-ECM (Cell-extracellular matrix) dan unsur-unsurnya [[9](#r09)]. Focal adhesion (FA) merupakan situs khusus dalam sel di mana reseptor integrin berinterkasi dengan matriks ekstraseluler pada bagian luar sel dan dengan sitoskeleton aktin pada bagian dalam, di mana situs-situs ini menyediakan adesi yang kuat pada matriks dan menyalurkan tegangan mekanik, yang terbangkitkan dalam sel melalui membran plasma, ke lingkungan eksternal [[10](#r10)]. Interaksi mekanik antara sel dengan linkungannya mengatur migrasi, kontrakbilitas, ekspresi gen, dan nasib sel [[11](#r11)]. Dengan demikian diskusi lebih lanjut mengenai FA ini sudah amat menarik, bahkan sebelum diterapkannya pada diferensiasi sel punca.


## note
1. <a name="r01"></a>Achmad Zacky Fairuza, Sparisoma Viridi, Suprijadi, "Pengembangan Program Simulasi Diferensiasi Stem Cell pada Nanopattern Berdasarkan Fenomena Focal Adhesion", Extended Abstract Tesis I, Program Studi Magister Teknologi Nano, Sekolah Pascasarjana, Institut Teknologi Bandung, Indonesia, v20Des2021, url <https://multisite.itb.ac.id/sps/en/nano-s2/> [20211221].  [`PDF`](https://drive.google.com/file/d/1GztpC9W21fcYjEOW2I5iXadOuxKPauUC/view?usp=sharing)
2. <a name="r02"></a>LPPM ITB, "i-GSC 2021 - Teaser", YouTube, 20.12.2021, url <https://www.youtube.com/watch?v=FiXrdweh-4w> [20211221].
3. <a name="r03"></a>Rino Mukti, "i-GSC 2021", Zoom, 22 Dec 2021, 08:00 Jakarta, url <https://itb-ac-id.zoom.us/j/94890358005> [20211221].
4. <a name="r04"></a>William M. Spears, Diana F. Spears (eds.), "
Physicomimetics: Physics-Based Swarm Intelligence", Springer-Verlag, Berlin, Heidelberg, 1st edition, Dec 2012, url <https://doi.org/10.1007/978-3-642-22804-9>.
5. <a name="r05"></a>J. E. Jones, "On the Determination of Molecular Fields. I. From the Variation of the Viscosity of a Gas with Temperature", Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences [Proc R Soc A: Math Phys Eng Sci], vol 106, no 738, p 441–462, 1924, url <https:/doi.org/10.1098/rspa.1924.0081>.
6. <a name="r06"></a>"simulasi » me.nyi.mu.la.si.kan", KBBI Daring, Badan Pengembangan dan Pembinaan Bahasa, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia, 2016, url <https://kbbi.kemdikbud.go.id/entri/menyimulasikan> [20211221].
7. <a name="r07"></a>"sel punca", KBBI Daring, Badan Pengembangan dan Pembinaan Bahasa, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia, 2016, url <https://kbbi.kemdikbud.go.id/entri/sel%20punca> [20211221]. 
8. <a name="r08"></a>"APA 7th Edition - Citation Styles: APA, MLA, Chicago, Turabian, IEEE", Library System, University of Pittsburgh, 7 Oct 2021, url <https://pitt.libguides.com/citationhelp/apa7> [20211221].
9. <a name="r09"></a>Chuanyue Wu, "Focal Adhesion: A Focal Point in Current Cell Biology and Molecular Medicine", Cell Adhesion & Migration [Cell Adh Migr], vol 1, no 1, p 13-18, Jan-Mar 2007, url <https://doi.org/10.4161/cam.1.1.4081>.
10. <a name="r10"></a>Keith Burridge, "Focal adhesions: a personal perspective on a half century of progress", The FEBS Journal [FEBS J], vol 284, no 20, p 3355-3361, Oct 2017, url <https://doi.org/10.1111/febs.14195>.
11. <a name="r11"></a>Nathan D. Gallant, Kristin E. Michael, Andrés J. García, "Contributions of Adhesive Area, Integrin Binding, and Focal Adhesion Assembly", Molecular Biology of the Cell [Mo. Biol Cell], vol 16, no 9, p 3919-4462, Sep 2005, url <https://doi.org/10.1091/mbc.e05-02-0170>.
12. <a name="r12"></a>Achmad Zacky Fairuza, Sparisoma Viridi, Suprijadi, "Pengembangan Program Simulasi Diferensiasi Sel Punca pada Nanopattern Berdasarkan Fenomena Focal Adhesion", Extended Abstract Tesis I, Program Studi Magister Teknologi Nano, Sekolah Pascasarjana, Institut Teknologi Bandung, Indonesia, v21Des2021, url <https://multisite.itb.ac.id/sps/en/nano-s2/> [20220104]. [`PDF`](https://drive.google.com/file/d/1xiovAQU2hfUIvZudgl3YnLSQgRHowak-/view?usp=sharing)

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug1202?src=hash&amp;ref_src=twsrc%5Etfw">#bug1202</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1473151106146463746?ref_src=twsrc%5Etfw">December 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[actin growth model](0200.html) &bull; [sc np md abm sph](1202.html)
{% comment %} []() &bull; []() {% endcomment %}


{% comment %} 1F850-9 🡐 🡑 🡒 🡓 🡔 🡕 🡖 🡗 🡘 🡙 {% endcomment %}