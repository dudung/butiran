---
layout: butir
authors: [viridi]
title: sc np md abm sph
permalink: pages/1204
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["stem cell", "nanopattern", "lennard-jones potential", "python", "simulation", "thesis 1", "december", "2021", "20219014", "alfikri dwi mauluda", "suprijadi", "sparisoma viridi"]
date: 2021-12-23T21:44:00+07:00
src: https://github.com/dudung/bug/commits/main/_posts/1/20/2021-12-22-sc-np-md-abm-sph.md
---
Dengan berbasis partikel simulasi mulai dari model sel punca, jatuhnya sel punca pada nanopattern, relaksasi bentuknya, sampai terbentuknya benang-benang aktin dilakukan menggunakan metode numerik seperti molecular dynamics (MD), agent-based modeling (ABM), dan smoothed-particle hydrodynamics (SPH), yang secara teknis dilakukan menggunakan Python [[1](#r01)].


## presentation
Presentasi sidang tesis 2 dilakukan secara luring (<s>dan mungkin daring, tepatnya bauran</s>) di Prodi Fisika, FMPA, ITB, pada Kamis, 23 Desember 2021, 0900 bertempat di Ruang Staf Baru (<s>tentatif</s>), dengan pembimbing pertama Prof. Dr. Eng. Suprijadi, pembimbing kedua Dr.rer.nat. Sparisoma Viridi, pengujip pertama Dr.rer.nat. Freddy Haryanto, dan penguji kedua Acep Purqon, Ph.D.


## page number
Halaman pada sumber yang dikoreksi dirujuk dengan `n` dengan n adalah nomor halaman.


## question
1. Dikarenakan terdapatnya berbagai metod berbasis partikel yang digunakan, apakah tidak sebaiknya kata pada judul
	> `ii` .. Metode Pemodelan Berbasis Partikel
	
	diubah menjadi
	> .. Metode-Metode Pemodelan Berbasis Partikel
	
	mengingat bahasa Inggrisnya adalah
	> `iii` .. using Particle-Based Modeling Methods
	
	telah kata benda jamak (plural).

2. Penuturan masih banyak yang belum terjalin dengan baik. Bagaimana bila hasil-hasil yang telah diperoleh lebih dielaborasi sehingga menghasilkan tulisan yang lebih mengalir dan lebih mudah dipahami?

3. `2` Mengapa pada sistematika penulisan terdapat istilah-istilah seperti
	- Gunung Sinabung,
	- aktivitas seismik,
	- klasifikasi gempa,
	- hiposenter,
	- relokasi,
	- GAD,
	- VELEST 3.3,
	- estimasi jalur migrasi magma,
	- analisis b-value,

	Apakah istilah-istilah di atas termasuk dalam ruang lingkup penelitian yang dikerjakan?

5. `44` Mengapa kesimpulan amat kualitatif? Tidakkah dapat dibuat kesimpulan yang lebih kualitatif dengan angka-angka sehingga dapat dijadikan rujukan untuk penelitian berikutnya?

6. `32` Analisis yang lebih tajam dapat dilakukan seperti pada Gambar IV.11 dengan membahas puncak-puncak yang terjadi ada apa kaitannya dengan konfigurasi partikel, seperti bentuk kotak menjadi bulat, sel punca menyentuh nanopattern, benang aktin tumbuh, ujung bebas benang aktin saling bertemu, dan sebagainya.

7. `22`-`27`, `35`-`43` Mengapa nomor halaman terlihat terpotong setengah bagian bawahnya?

8. Mengapa jarak nomor halaman ke batas bawah tidak sama, misalnya pada `≤ 14` dan `≥ 15`?


## correction
Terdapat beberapa usulan koreksi untuk diakomodasi.

### typographical error
1. `i` Judul pada halaman kover terdapat kata-kata yang perlu diperbaiki
	> Nano Pattern 🡒 Nanopattern (disambung)
	
	> Berbasi 🡒 Berbasis (kurang huruf s).
	
2. `1` I.3 Metodologi Penelitian
	> progrsm 🡒 program

3. `44` simulais --> simulasi

3. Penggunaan spasi yang terlupakan, sebagai contoh
	> `12` **Kernelpada** Partikel Hidrodinamik Halus
	
	> `13` .. Loewenstein & **Mathews1984**), ..

	> `44` gaya,dengan --> gaya, dengan
	
	dan periksa juga untuk bagian-bagian lainnya.

4. Penggunaan awalan di- yang seharusnya dituliskan bersambung dengan kata yang mengikutinya, sehingga bukan seperti pada
	> `13` Persamaan tersebut **di pengaruhi** oleh massa partikel ..
	
	dan bagian-bagian lainnya.
	
5. Kata depan di dituliskan terpisah dari kata keterangan yang mengikutnya, sehingga bukan seperti
	> `13` Dari persamaan **diatas** $F_{\rm SPH}$ menunjukan gaya ..
	
	dan bagian-bagian lainnya.

6. Secara umum keterangan gambar belum diakhiri tanda baca titik, seperti pada halaman
	> `3`-`8`, \
	> `9`-`10`, \
	> `14`, \
	> `15`-`16`, \
	> `22`-`27`, \
	> `29`-`32`, \
	> `35`-`43`.

dan kemungkinan halaman-halaman lainnya.

### sentence reformulation

1. `1` I.2 Tujuan
	> Adapun tujuan dari penelitian ini ..
	
	cukup menjadi
	
	> Penelitian ini bertujuan untuk ..


### references
1. `45`, `46` Referensi bila menggunakan gaya APA, nama keluarga didahulukan, baru singkatan nama depannya
	> A.Ranjan,T. J.Webster 🡒 Ranjan A, Webster TJ,
	
	> B.Hu 🡒 Hu B
	
	> E.Lee & D.hyun 🡒 Lee E. & Hun D
	
	> G.Akinci N.Akinci and Teschner (penulis terakhir tidak ada nama keluarganya?)

	> Jean-ChengKuo 🡒 Kuo J.-C. (pastikan Kuo memang nama keluarganya)
	
	dan periksa juga lainnya.
	
2. `45`, `46` Koreksi at all menjadi et al.
	> H.F.Qiang , at.all
	
	> J.Bai, atall

	> C.Zhao, at all
	
	> J.Lee.at all
	
	> M.Tang, at all.:
	
	> T.Woo, at all
	
	> PingLiu ,at all
	
	dan periksa lainnya.
	
3. `46` Menggunakan & atau and? Konsistenkan.	
	> Price, D. J. & Monaghan, J. J.
	
	> Rubin H. Landau,Manuel J. Páez and Cristian C. Bordeianu
	
	dan periksa lainnya pula.

### more quantitative
1. `47` Lampiran tegangan permukaan **besar** perlu lebih kuantitatif
2. `48`  .. **kecil** ..
3. `49` Parameter tegangan permukaan perlu disebutkan.

### algorithm
1. `17`-`18` Algoritma dapat dituliskan dalam bentuk yang lebih jelas dengan adanya nomor langkah.
2. `18` 🡒 perbaiki dengan cara yang sama
3. `19` 🡒 perbaiki dengan cara yang sama
4. `19`-`20` 🡒 perbaiki dengan cara yang sama
5. `20` 🡒 perbaiki dengan cara yang sama
6. `20`-`21` 🡒 perbaiki dengan cara yang sama

### axis information
Terdapat sumbu-sumbu pad grafik yang angkanya bertumpuk sehingga tidak terbaca, misalnya
	> `29` Gambar IV.8 \
	> `30` Gambar IV.9 \
	> `31` Gambar IV.10 \
	> `35` Gambar IV.12 \
	> `36` Gambar IV.13 \
	> `37` Gambar IV.14 \
	> `38` Gambar IV.15

	dan periksa gambar-gambar lainnya, serta juga pada lampiran `47`-`49`.


{% comment %}
20219014-alfikri-dwi-mauluda
47 Lampiran tegangan permukaan besar pwrlu lebih kuantitatif
48 .. kecil ..
49 Parameter tegangan permukaan perlu disebutkan.

44 simulais --> simulasi
gaya,dengan --> gaya, dengan

44 Kesimpulan masih terlalu kualitatif, sebaiknya lebih kuantitatif.

2 Sistematika Penulisan
Gunung Sinabung? Aktivitas seismik? Gempa? Hiposenter, GAD, VELEST 3.3?

Secara umum keterangan gambar belum diakhiri tanda baca titik
3-8, 9-10, 14, 15-16,22-27, 29-32, 35-43.

FH
- Metodologi sebaiknya berbentuk diagram alir
- Time step komputasi ke real time bagaimana?
- Satuan ukuran satuan grid, mengapa digunakan nilai tersebut?
- Dari kurva yang dihasilkan terdapat pernyataan energi kinetiknya meningkat? Ulas dalam tulisannya sehingga kajiannya bisa lebih kaya.
- Energi kinetik mengapa kurvanya seperti itu? Adakah persamaan energi kinetik sebagai fungsi dari waktu? Apakah sudah benar? Ada rujukannya atau bagaimana menjelaskannya?
- Penjelasan nanopattern sehingga tidak ditafsirkan sebagai potensial kotak
- Nanopattern sudah 
- Mengapa diambil 30? Fasilitas komputasinya apa? Gunakan notebook. Ada pipa bocor. Server terkena.
- Waktu 30 s bisa 6 jam waktu perhitungan 2D, spek kurang dari i7
- Kesimpulan jangan hanya kualitas, data sudah ada, sebaiknya diolah sehingga hasilnya baik. Pekerjaan sudah banyak tapi belum disampaikan

AP
- Selamat pekerjaanya menarik, kuat ngodibg tapi sulit ngos2an di akhir saat menulis
- Banyak gambar yang belum ada referensinya, kuatir terkena plagiarism
- NP mengapa? Bila ukurannya nano, waktunya seharusnya dalam orde yg sama, dujelaskan karena pembaca mungkin mengharapkan waktu proses dalam orde ini
- Jangan membahas penumbuhan sel punca, tapi lebih aman model agar tidak diprotes komunitasnya
- klaster penerapan LJ terlihat agak janggal tapi tidak terlihat temperaturnya
- LJ + SPH sekaligus, total berapa potensial? 3
- SPH konstanta tegangan permukaan alpha digunakan 10 dan 20
- Apa arti angka ini? Masih dicoba-coba
- Sebaiknya ada dasar pemilihan nilai-nilai ini, bukan hanya sekedar nilai, misalnya dapat dibandingkan dengan besaran lain sehingga ada alasan, mengingat tegangan permukaan air besar dan hasil secara kuantitatif telah ok
- Tidak oval karena gravitasi terlalu besar atau ikatan dengan NP? Tak langsung karena penerapan ABM, perlu diperbaiki karena terlihat ada tekanan, harusnya oval
- Setelah masuk sumur bagaimana?
- variasi NP ke perbedaan pertumbukan aktin
- lebar sumur dan lebar pilar dua parameter, 
- Bagaimana proses penumbuhan? Deposisi atau sel aktin bertambah besar?
- Bagaimana benang-benang aktin bergerak-gerak? Ada gaya pada arah mendatar?
- Mengapa batas paling kiri dan kanan tegak? Treatmen2 khusus yang disampaikan agar dijelaskan pada tulisan
- Penjelasan gaya pada masing-masing model / tahap diuliskan dalam teks
- hasil terlihat sebagai periodic BC tapi belum diterapkan BC ini. Kebetulan bagus?
- Diagram alir dapat lebih baik
- Saat variasi gaya yang lain, dihitung dari awal?

SH
- penjelasan kurva EK  - t untuk setiap tahap sebaiknya dijelaskan dengan detil
- Bila ada dinding kiri / kanan agar dijelaskan
- Tunjukkan hasil simulasi setisp fungsi t agar terlihat dibandingkan hanya keadaan akhir saja
{% endcomment %}


## inspiration
Penelitian ini dapat diperdalam pada masing-masing stage, karena mekanisme sebenarnya terdiri beberapa stage seperti (I) relaksasi partikel sel punca, (II) proses jatuhnya sel punca ke nanopattern, (III) relaksasi bentuk sel punca pada nanopattern, (IV) proses tumbuhkan benang-benang aktin, (IV) terbentuknya inti sel pada ujung benang-benang aktin, dan (V) diferensiasi sel karena tegangan oleh benang-benang aktin dari inti sel ke ligan pada nanopattern.


## note
1. <a name="r01"></a>Alfikri Dwi Mauluda, "Simulasi Pengaruh Nanopattern pada Penumbuhan Sel Punca dengan Metode Pemodelan Berbasis Partikel", Tesis Magister, Institut Teknologi Bandung, Indonesia, v16Des, 23 Desember 2021, url <https://digilib.itb.ac.id/index.php/collection/type/7/0> [20211224]. [`PDF`](https://drive.google.com/file/d/1O3SgRqynMxJ-j2uYdIkPjEeTFz3iJMWk/view?usp=sharing)

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug1204?src=hash&amp;ref_src=twsrc%5Etfw">#bug1204</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1474027062675398661?ref_src=twsrc%5Etfw">December 23, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
[actin growth model](0200.html) &bull; [sc np fa simulation](1202.html)
{% comment %} []() &bull; []() {% endcomment %}


{% comment %} 1F850-9 🡐 🡑 🡒 🡓 🡔 🡕 🡖 🡗 🡘 🡙 {% endcomment %}