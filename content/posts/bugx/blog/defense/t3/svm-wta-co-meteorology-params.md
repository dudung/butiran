---
title: "svm wta co meteorology params"
date: 2022-04-22T17:18:00+07:00
lastmod: 2022-05-11T04:32:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['idea', 'defense', 't3', 'draft']
url: "0065"
draft: true
---
Menarik untuk menyinggung penerapan support vector machine [[1](#r01)] dan wavelet transform analysis [[2](#r02)] untuk penafsiran data konsentrasi CO dan parameter meteorologi di beberapa daerah [[3](#r03)], sebagaimana ditugaskan untuk mengulasnya oleh suatu tim [[4](#r04)]. Tengat tidak bisa dipenuhi saat datang surat perihal suatu pertemuan [[5](#r05)]. Masukan, koreksi, dan komentar baru diberikan beberapa jam sebelum pertemuan tersebut [[6](#r06)] atas versi 9 Mei yang merupakan komentar atas versi 10 Apr [[7](#r07)].


## forms
Terdapat `307` dan `308.1`.

### form 307
No | Perihal
:- | :-
I. <br><br><br><br><br> |	Komentar dan alasan tentang kebaruan, kebenaran/keabsahan hasil, orisinalitas konsep dan hasil, dan mutu keilmuan (dalam pendekatan, metodologi, kecanggihan yang dihasilkan), serta kontribusi ilmiah disertasi. (* Jika diperlukan dapat disampaikan dalam lembar terpisah)
&nbsp; | Telah mencantumkan aspek-aspek kebaruan (h. 7) dan referensi yang digunakan (h. 92-97) telah terkini (terdapat untuk tahun 2020-2022).
II. <br><br> |	Komentar dan usulan tentang bahasa dan format penulisan. (* Jika diperlukan dapat disampaikan dalam lembar terpisah)<br>
 &nbsp; | Ada dalam berkas sv-comments.md dan SV_comment_Revisi_30215010_Halawa_v20220510_3.docx yang disertakan.

Rekomendasi: 2.	Layak dengan perbaikan melalui pertemuan/klarifikasi 

### form 308.1
No | <center>Detail Penilaian</center> | Skor (1-5)
:-: | :- | :-:
1 | **Kebaruan dan Kualitas Topik Penelitian**<br>Topik penelitian yang dipilih memiliki nilai<br>kebaruan sangat tinggi, baik dari sudut<br>pandang keilmuan ataupun relevansi pada<br>penerapannya dan memiliki kualitas serta<br>orisinalitas yang terukur. | 
2 | **Kejelasan Pemaparan Latar Belakang Masalah**<br>Permasalahan dinyatakan dengan sangat jelas<br>dan terkait erat dengan latar belakang yang<br>disusun berdasarkan data literatur yang komprehensif dan mutakhir. |
3 | **Kejelasan Pemaparan Hipotesis<wbr>/<wbr>Tujuan**<br>Pernyataan hipotesis atau tujuan atau target yang diinginkan dinyatakan dengan sangat baik.
4 | **Kejelasan Pemaparan Metode<wbr>/<wbr>Teorema yang akan Digunakan**<br>Pemilihan metode<wbr>/<wbr>teorema tepat dan sesuai dengan topik penelitian yang dipilih, kerunutan dalam pemaparan metode<wbr>/<wbr>teorema yang dipilih.
5 | **Format Penulisan Disertasi**<br>Kajian literatur dituliskan rinci dengan analisis yang<br>komprehensif dan kritis, kesesuaian format<wbr>/<wbr>layout,<br> penggunaan tata bahasa baku, kejelasan informasi<br>gambar dan tabel, kerunutan penulisan referensi<br>dan daftar pustaka.

```python
# calculate something
avg = 4.4
vals = [5, 5, 4, 4, 4]
for v in vals:
  if v == avg:
    pass
```

## comments
```
Rujukan berkas: SV_comment_Revisi_30215010_Halawa_v20220510_3.docx


A. Referensi dituliskan dengan gaya yang kurang konsisten (h. 93-98)

01. Gunakan gaya penulisan yang seragam.
Gaya 1: Huruf besar hanya pada awal kalimat (Addison, 2018)
Gaya 2: Huruf Besar pada awal setiap kata (Akbarzadeh et al., 2020)

02. Informasi rujukan dilengkapi, e.g.
(Basak et al., 2007) --> http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.468.6802
Terdiri dari empat penulis (tetapi dituliskan hanya tiga penulis) dan ada nomor halaman (tetapi tidak dicantumkan)

03. (Brereton & Lloyd, 2010) --> https://pubs.rsc.org/en/content/articlelanding/2010/AN/B918972F, ada nomor / issue yaitu 2, akan tetapi tidak dituliskan. Lalu Penerbi seperti Royal Society of Chemistry tidak dituliskan pada item lain berupa jurnal. Konsistenkan.

04. (Castelli et al., 2020) --> https://www.hindawi.com/journals/complexity/2020/8049504/ ada Article ID 8049504 yang fungsinya sama dengan nomor halaman, akan tetapi tidak dicantumkan.

05. (Huo & Xu, 2022) --> https://doi.org/10.3390/atmos13010024
Terdapat nomor halamanan 24, tetapi tidak dicantumkan.

05. (Joachims, 2018) --> http://eldorado.tu-dortmund.de/handle/2003/2595
K unstliche --> Künstliche atau Kuenstliche
LS { 8 --> LS 08 (salah copy pasti dan harap diperhatikan)

06. (Luna et al., 2014) --> https://doi.org/10.1016/j.atmosenv.2014.08.060
Tidak terdapat nomor / issue. Apakah yang ada nomor tetap akan digunakan dengan nomor / issue? Diskusikan dengan tim pembimbing agar terlihat lebih konsisten.

07. (Mudelsee & Wegener, 2010) --> https://doi.org/10.1007/978-90-481-9482-7
Climate Time Series Analysis, 42 (seperti merujuk jurnal?)
Seri bukunya adalah  Atmospheric and Oceanographic Sciences Library (ATSL, volume 42)
Lalu untuk buku apakah satu buku digunakan atau hanya dikutip bebarapa halaman? Sebaiknya ada halaman buku yang dirujuk agar memudahkan pembaca ketimbang menelusuri sampai 474 halaman dalam buku tersebut.

08. (Karagulian et al., 2015) --> (1 November 2015) mengapa ada tanggalnya sementara referensi yang lain tidak?
https://doi.org/10.1016/j.atmosenv.2015.08.087 
Mengapa disertakan informasi Elsevier Ltd, sementara yang lain tidak. Lalu informasi Volume 120, Pages 475-483 tidak disertakan.Harap diperbaiki dan periksa juga entri referensi yang lain karena belum sepat diperksa satu per satu.

09. Buat check list referensi terdapat di halaman berapa untuk memastikan memang dikutip.


B. Kesimpulan dan Saran (h. 89-91)

01. Kesalahan penulisan:
dititik --> di titik atau pada titik


02. Tidak perlu ada kata-kata "Saran yang diusulkan ..." karena sudah jelas dari V.2 Saran.

03. Struktur kalimat membingungkan:
..
Jadi lebih bermanfaat dibandingkan dengan metoda yang melakukan pemantauan pada satu titik yang melaporkan hasil pengukuran mewakili untuk suatu daerah yang cukup besar.

.. metode yang melakukan pemantauan .. yang melaporkan ..

Metode melakukan pemantauana? Juga melaporkan?

04. Ketergangan berlebih:
.. kualitas data dapat ditingkatkan lebih akurat ..

Cukup misalnya "peningkatan kualitas data".

05. Tidak jelas SPOK dan induk-anak kalimatnya

Jadi lebih bermanfaat dibandingkan dengan metoda yang melakukan pemantauan pada satu titik yang melaporkan hasil pengukuran mewakili untuk suatu daerah yang cukup besar.

Usulan perbaikan secara keseluruhan untuk V.2 Saran:

Pengukuran yang dilakukan langsung pada titik pengamatan berdasarkan sumbernya dapat meningkatkan kualitas data. Pendekatan ini lebih bermanfaat ketimbang melakukan pemantauan pada satu titik dan melaorkan hasilnya yang dianggap dapat mewakili suatu daerah yang cukup luas.

06. .. paling mempengaruhi .. (dan yang tidak?)
Parameter meteorologi yang paling mempengaruhi konsentrasi CO adalah temperatur udara, kelembaban udara, dan curah hujan.

Lalu apa yang tidak mempengaruhi? Kalimatnya dapat diteruskan dengan menyinggung kembali parameter-parameter yang kurang atau tidak mempengaruhi konsentrasi CO.

07. Kaitkan 06 dengan pada abstrak (h. i): Skema ini diterapkan pada data temperatur, kelembaban udara, curah hujan, lama penyinaran matahari, dan kecepatan angin...

Dengan demikian jelas bahwa yang tidak berpengaruh adalah lama penyinaran matahari dan kecepatan angin.


C. Abstrak

01. .. Lama penyinaran matahari dan kecepatan angin hanya pada beberapa waktu pengamatan menunjukkan korelasi yang negatif dan tidak signifikan. .. (h. ii)

Korelasi negatif berbeda dengan tidak signifikan.
-1 berlawanan (berkorelasi)
+1 serarah (berkorelasi)
-0.2 -- +0.2 (lemah, tidak berkorelasi): batasannya bisa berbeda-beda bergantung sistem dan bidang ilmu, akan tetapi di sekitar angka nol.

02. h. ii
Kelembaban udara lebih dipengaruhi oleh lama penyinaran matahari dibandingkan curah hujan dan kecepatan angin. Curah hujan memiliki korelasi yang kuat dengan lama penyinaran dibandingkan dengan kecepatan angin. Curah hujan tidak sefase dengan lama penyinaran matahari dan berkorelasi negatif. Lama penyinaran dengan kecepatan angin memiliki korelasi positif.

Lama penyinaran matahari ===> Kelembaban udara
Lama penyinaran matahari ---> Curah hujan
Lama penyinaran matahari -> Kecepatan Angin

Sebaiknya penjelasan satu parameter mempengaruhi parameter lain, Lama penyinaran dengan kelembaban udara, baru dengan curah hujan, baru dengan kecepatan angin, tetapi tidak berselang-seling sehingga membingungkan pembaca.

Lalu gunakan sebab-akibat dan jangan dicampur dengan akibat-sebab sehingga pembaca akan dapat mudah melihat mana yang merupakan sebab utama dan pertama.

akibat-sebab: Curah hujan tidak sefase dengan lama penyinaran matahari dan berkorelasi negatif

sebab-akibat: Lama penyinaran dengan kecepatan angin memiliki korelasi positif.

Atau memang bisa kecepatan angin --> lama penyinaran atau
curah hujan --> lama penyinaran?


D. Daftar-daftar

01. Upayakan kalimat tidak menutupi nomor halaman sehingga sulit dilihat, misalnya

LAMPIRAN A  Plot deret waktu             95
parameter meteorologi pada 
stasiun geofisika Bandung tahun
2018 – 2020.

Dan bukan

LAMPIRAN A  Plot deret waktu parameter    95
parameter meteorologi pada stasiun geofisika
Bandung tahun2018 – 2020.

(nomor halaman tidak terlihat jelas karena tersamarkan dengan kalimat di atas dan dibawahnya)

Lakukan juga untuk daftar lainnya.

E. Pendahuluan

01. h. 2 --> .. dalam teknik regresi(Sousa dkk., 2007 dan 2009), 
Tidak terdapat (Sousa et al., 2009) dalam daftar pustaka. Harap diperbaiki. Hanya ada (Sousa et al., 2007)

02. Gunakan cara merujuk yang konsisten (h. 3):

.. Akbarzadeh dkk. (2020) memperkirakan ..

atau

.. konsentrasi CO jangka pendek (Akbarzadeh dkk., 2020).

Sebagai rujukan atau sebagai pelaku? Sebaiknya tidak dicampurkan kedua gaya tersebut.

02. h. 7 --> bila diperlukan
.. sebelumnya oleh Ortiz dkk. (2010), Castelli dkk. (2020), Moazami dkk. (2016) ..

dapat menjadi

.. sebelumnya (Ortiz dkk., 2010; Castelli dkk., 2020; Moazami dkk., 2016) ..

bila menggunakan gaya yang kedua.


F. Konsistensi Tujuan dan Kesimpulan

(h. 5)
Penelitian ini bertujuan untuk:
-	Memprediksi kualitas udara dalam bentuk konsentrasi CO dengan tingkat akurasi prediksi terbaik di Kota Bandung, Jawa Barat, Indonesia dengan menggunakan metode SVR.
-	Menganalisis hubungan antar parameter-parameter meteorologi dengan menggunakan analisis wavelet, yaitu CWT dan WTC.
-	Interpretasi pengaruh parameter meteorologi terhadap konsentrasi CO.

01. Tujuan 1
(h. 5)
-	Memprediksi kualitas udara dalam bentuk konsentrasi CO dengan tingkat akurasi prediksi terbaik di Kota Bandung, Jawa Barat, Indonesia dengan menggunakan metode SVR.

(h. 88)
Berdasarkan penelitian yang dilakukan maka dapat disimpulkan bahwa hyperplane terbaik dipengaruhi oleh kesesuaian nilai parameter kernel.

Kalimat pertama tidak mengisyaratkan adanya kaitan dengan penggunaan metode SVR kecuali bagi yang telah ahli dalam metode ini. Sebaiknya diambahkan informasi ini mengingat hyperplane tidak hanya di SVR, tetapi juga di SVM, ANN, Geometry, Atomic Structure, ..

(h. 88)
.. nilai akurasi prediksi terbaik yang didapatkan adalah 97,68%  ..
Konsentrasi CO prediksi menunjukkan adanya penurunan, kemungkinan .. semakin tinggi curah hujan maka konsentrasi CO akan berkurang .. kualitas udara di kota Bandung akan semakin baik.

Sudah mencakup tujuan pertama di atas. Sebaiknya tidak ada kata-kata "kemungkinan", "akan", yang terlihat menunjukkan ketidakyakinan padahal akurasi 97,68%. Ataukah ada hal lain yang belum disampaikan?

02. Tujuan 2
(h. 5)
-	Menganalisis hubungan antar parameter-parameter meteorologi dengan menggunakan analisis wavelet, yaitu CWT dan WTC.

(h. 88)
Analisis wavelet transform memberikan kontribusi dalam menginterpretasi data parameter-parameter meteorologi pada ketiga stasiun.

Sudah tercantum hanya penulisannya masih terlalu tercampur antar parameter yang dibahas, data asal stasiun pengamatan, sehingga lebih baik apabila dipisahkan dalam paragraf tersendiri, di mana dalam satu paragraf hanya terdapat satu hasil yang ingin ditekankan.

03. Tujuan 3
(h. 5)
-	Interpretasi pengaruh parameter meteorologi terhadap konsentrasi CO.

(h. 90)
Pada penelitian ini menyatakan bahwa peningkatan konsentrasi CO tidak hanya dipengaruhi oleh satu parameter saja tetapi kombinasi dari beberapa parameter meteorologi dan beberapa faktor yang lain seperti yang terlihat pada plot deret waktu analisis wavelet.

Kesalahan: 'Pada penelitian ini menyatakan bahwa ..' <-- apa subyeknya?
Koreksi: 'Penelitian ini menunjukkan bahwa ..' atau 'Pada penelitian ini diperoleh informasi bahwa ..' atau variasi lainnya.

Tujuan 3 sudah dijawab. Agar lebih memudahkan pembaca sebaiknya dituliskan kembali parameter apa saja yang mempengaruhi dan juga faktor-faktor lainnya.

04. Salah ketik: (h. 80): Perbaiki: mausim --> musim


G. Lampiran
01. (h. 101)
Sebaiknya ada cerita sedikit perihal ketiga grafik ini dan tidak hanya sekedar menampilkannya, seperti:
- min, max, avg, std-dev
- garis vertikal pemisah tahun untuk memudahkan
- terlihat ada pola berulang per tahun, baik unuk dikomentari
- daily temperatur apakah dirata-rata atau diambil hanya satu waktu untuk setiap hari? Pukul berapa saja?

02. (h. 102)
- tambahkan sedikit informasi
- mengapa data kecepatan angin terlihat diskrit dengan grid 0.5 m/s? Coba dijelaskan.

03. (h. 103)
Sebaiknya ada cerita sedikit perihal ketiga grafik ini dan tidak hanya sekedar menampilkannya, seperti:
- min, max, avg, std-dev
- garis vertikal pemisah tahun untuk memudahkan
- terlihat ada pola berulang per tahun (lebih jelas dari data stasion sebelumnya), baik unuk dikomentari
- daily temperatur apakah dirata-rata atau diambil hanya satu waktu untuk setiap hari? Pukul berapa saja?

04. (h. 104)
- tambahkan sedikit informasi
- mengapa data kecepatan angin terlihat diskrit dengan grid 0.5 m/s? Coba dijelaskan.
- pola per tahun jelas terlihat, tambahakn keterangan dan rujukan ke pembahasannya di bagian mana.

05. (h. 105)
Sebaiknya ada cerita sedikit perihal ketiga grafik ini dan tidak hanya sekedar menampilkannya, seperti:
- min, max, avg, std-dev
- garis vertikal pemisah tahun untuk memudahkan
- terlihat ada pola berulang per tahun (lebih jelas dari data stasion sebelumnya), baik unuk dikomentari
- daily temperatur apakah dirata-rata atau diambil hanya satu waktu untuk setiap hari? Pukul berapa saja?

05. (h. 106)
- tambahkan sedikit informasi
- mengapa data kecepatan angin terlihat diskrit dengan grid 0.5 m/s? Coba dijelaskan.
- pola per tahun jelas terlihat, tambahakn keterangan dan rujukan ke pembahasannya di bagian mana.

06. (h. 107)
- kurva berwarna merah sebainya menggunakan secondary axis sehingga jelas terlihat kaitan antara fluktuasi kedua kurva (hijau dan merah).
- saat ini hanya terlihat ada pola tahunan untuk kurva berwaarna hijau akan tetapi data-datar saja untuk kurva berwarna merah.

07. (h. 109)
- sama dengan komentar sebelumnya

08. (h. 110)
- sama dengan komentar sebelumnya

09. (h. 111)
- sudah lebih baik, tetapi kurva warna hijau dapat diperbaiki skalanya.
- apakah kaitan antara warna kurva dan parameter meteorologi diubah? Sebaiknya jangan agar konsisten.
- bila memungkinkan warna dipertahankan, seperti kecepatan angin: hijau, kelembaban: biru, .. (selalu dengan warna yang sama)
- usul (agar logis juga):
  a. durasi penyinaran: merah / orange
  b. angin: abu-abu
  c. hujan: biru
  d. kelembaban: hijau
  e. ..


H. Bab II
01. Koreksi: Temperaturudara -- > Temperatur udara (h.13)

02. (h. 12) Belum terdapat secara eksplisit kalimat yang menyatakan, misalnya

Parameter metrologi yang umum adalah ..., .., .. dan ...

Perlu membaca sub-bagian berikutnya baru diperoleh informasi tersebut.

03. (h. 18)
Ada baiknya dibuatkan tabel korelasi antara parameter meteorologi dan juga dengan konsentrasi CO sehingga secara umum gambaran hubungan-hubugannya menurut literatur dapat terbayangkan.

04. Referensi belum ada dalam Daftar Pustaka
(h. 97) Sisikpan Vapnik dan Cortes (1995) dari h. 19.

(h. 19) Belum tercantum dalam Daftar Pustaka (h. 96)

05. (h. 23) Nugroho et al., 2003) belum ada di Daftar Pusataka (h. 95).

06. (h. 25) Belum ada (Morlet & Grossmann, 1980) di Daftar Pustaka (h. 95).

07. (h. 26) (Weeks, 2010) belum ada dalam Daftar Pustaka (h. 96).

08. (h. 26) (Walker, 2008) belum ada dalam Daftar Pustaka (h. 96)

09. (h. 29-30) Gambarnya memang oval? Atau lingkaran seharusnya? Perbaiki bila lingkaran.


I. Tabel dan Gambar
01. Keterangaa tabel dan gambar umumnya belum diakhiri tanda baca titik ".".

H. Bab III
01. (h. 34)
Kembali memasukkan parameter dugaan atau ada cara dari R2 terakhir yang diperoleh?

Bila dimasukkan secara manual, bagaimana unsur subyektivitas dari penggunanya?

Bagaimana menentukan R2 sudah maksimum 

02. (h. 34) .. dengan menggunakan Matlab karena sangat mendukung dalam aspek visualisasi.  <-- Juga Scilab dan Python atau R.

03. (h. 35) kurang spasi di tiga tempat.

I. Bab IV
01. (h. 37-38) Data stasiun cuaca, waktu pengambilan data, cakupan daerah (BT, LS), iklmnya sebaiknya dibuatkan tabel agar mudah untuk membandingkan saat analisa.

02. (h. 41) Apakah arti nilai R2 < 0?Bagaimana cara menghitungnya?

03. (h. 86) di manakah hasil dari R_n^2()?


J. Catatan saat sidang

fungsi yang dicari adalah tren dan bukan data acaknya
hyperplane dari parameter regresi
perlu digambarkan hubungan antar parameter fisisnya
tabel dari lokasi aspek geografisnya.
```

Penjelasan (mungkin juga tidak) akan disusulkan kemudian.


## notes
1. <a name='r01'></a>Rohith Gandhi, "Support Vector Machine — Introduction to Machine Learning Algorithms", Towards Data Science, 7 Jun 2018, url <https://towardsdatascience.com/934a444fca47> [20220422].
2. <a name='r02'></a>Christopher Torrence, Gilbert P. Compo, "A Practical Guide to Wavelet Analysis", Bulletin of the American Meteorological Society [Bull Am Meteorol Soc], vol 79, no 1, p 61-78, Jan 1998, url <https://doi.org/10.1175/1520-0477(1998)079%3C0061:APGTWA%3E2.0.CO;2>. [`PDF`](https://paos.colorado.edu/research/wavelets/bams_79_01_0061.pdf)
3. <a name='r03'></a>dissertation, "Penilaian Draf Disertasi Erniwati Halawa", KPPs FMIPA ITB, 10 Apr 2022, url <mailto:dissertation@fmipa.itb.ac.id> [20220422].
4. <a name='r04'></a>-, "Rapat KPPS FMIPA ITB", Rapat KPPS FMIPA ITB, 6 Apr 2022, url <https://fmipa.itb.ac.id/wp-content/uploads/sites/7/2022/01/2022-SK-Dekan-FMIPA-No.-7-tentang-Komisi-Program-Pascasarjana-KPPs-2022-FMIPA-ITB.pdf> [20220422].
5. <a name='r05'></a>Rachmat Hidayat, "Pertemuan klarifikasi penilaian dan revisi draft disertasi", Surat Nomor 332//IT1.C.02.4.11/PS3/2022, FMIPA, ITB, 6 Mei 2022, url <https://osf.io/h7qwz/> [20220510].
6. <a name='r06'></a>Rachmat Hidayat, "Pertemuan Klarifikasi Penilaian dan Revisi Draft Disertasi", Zoom, 10 Mei 2022, 1300-1500, url <https://itb-ac-id.zoom.us/j/9397924839> [20220510]
7. <a name='r07'></a> Erniwati Halawa, "Interpretasi Konsentrasi Karbon Monoksida dan Parameter Meteorologi Menggunakan Metode Support Vector Regression (SVR) dan Analisis Transformasi Wavelet Studi Kasus Kota Bandung, Kabupaten Majalengka, dan Kabupaten Sleman", version 10 Apr, 9 May, 10 May, url <https://osf.io/xvcs7/> [20220611]

{{< citeas >}}