---
title: "binary volvox colony md sim"
date: 2022-08-22T10:21:00+0700
lastmod: 2022-08-22T17:43:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['supervision', 'volvox', 'md', 'image', 't2']
url: "0160"
draft: false
---
Sidang tesis magister Sains Komputasi dilakukan secara daring [[1](#r01)]. Slide [[2](#r02)] dan tesis [[3](#r03)] diberikan kurang dari dua belas jam sebelum sidang. Undangan diberikan oleh Noi pada pagi harinya [[4](#r04)].

## presentation
Terdapat sebelas peserta di awal presentasi dan di akhir, bila tidak salah ingat, terdapat tambahan lagi satu peserta.

![](/bugx/img/defense/t2/zoom-nurfani-22aug2022-1108.png)
![](/bugx/img/defense/t2/zoom-nurfani-22aug2022-1140.png)

Gambar <a name='fig1'>1</a>. Presentasi dan peserta (atas), sebelum sesi penilaian (bawah),

Saat sesi penilaian hanya pembimbing dan penguji yang berada di dalam ruang Zoom, peserta yang lain diminta untuk meninggalan ruangan.


## comments
Terdapat komentar dan pertanyaan dari para penguji (Wahyu Hidayat, Atthar Luqman Ivansyah) dan pembimbing (Sparisoma Viridi, Intan Taufik).

### wh
- Mengapa digunakan hukum Newton dan titik pusat massa?
- Diagram alir yang digunakan mengapa tidak standar? Slide 11.
- Tautan Youtube, slide 14, punya orang lain?
- Slide 15 berikan sumbu-sumbu koordinatnya.
- Apa pengaruh learning rate pada simulasi.
- Tanda learning rate apakah harus positif? Pahami.
- Terminologi AI, ML, DL? Pahami dan cantumkan.
- Bila tidak ada temperatur, apakah ada pernyataan bahwa temperatur tidak berpengaruh atau ada rentang temperatur yang menyatakan bahwa strukturnya akan tetap pada daerah rentang temperatur tertentu?
- Temperatur konstan karena tidak berpengaruh pada viskositas?
- Konsep under fitting dan overfitting seperti apa terkait dengan jaringannya? Apa data perlu lebih atau kurang? Hanya data-data yang dekat data training. Perlu pengalaman membangung layer-layer ANN-nya.

### ali
- Apa saja yang ditanyakan oleh penguji sebelumnya dituliskan dengan baik karena merupakan hal-hal yang fundamental.
- Gerak partikel umumnya terpengaruh oleh temperatur? Pada gerak yang dibahas ini tidak ada pengaruhnya, mengapa? --> Ishikawa tidak mencantumkan tempatur sehingga tidak tahu.
- Cari asumsi dasar dari pemodelan sehingga hal-hal yang diabaikan memiliki dasar.
- Untuk temperatur sebaiknya dicari alasannya mengapa tidak peru dinyatakan.
- GoogleNet? Mengapa tidak hanya Inception v3? Tidak RestNet, NashNet? -- Sudah bandingkan dengan VJJ dan Mobile.net tetapi tidak terlalu baik. Ada yang bahkan hanya menghasilkan gerak translasi saja.
- Pembanding walau jelek tetapi ditampilkan sehingga dapa terlihat keunggulan metode atau model yang digunakan.
- Jelaskan apa dasarnya pada tabel (slide 18) ada nilai bobot kelas sehingga alasannya jelas.
- Gigih. Konsep bisa diperbaiki.

### it
- Ke depan menarik untuk melihat pengaruh dari temperatur atau perubahannya, yang lebih riil di lapangan.

Koreksi akan diakomodasi pada perbaikan buku tesis dan selambatnya disampaikan sebelum tanggal 6 September 2022 agar dapat mengikuti yudisium sebagaimana tercantum pada kalender akademik [[5](#r05)]. Terdapat pula yudisium 4 Oktober 2022, sehingga ditanyakan dulu manakah yang lebih tepat untuk wisuda 22 Oktober 2022.


## notes
1. <a name='r01'></a>Sevi Nurafni, "Sidang Tesis Magister Sains Komputasi", Zoom, 22 Aug 2022, 11:00+07, url <https://itb-ac-id.zoom.us/j/92543521887> [20220822].
2. <a name='r02'></a>Sevi Nurafni, "PPT - Defense ITB.pdf", WhatsApp, 03:25, 22.8.2022, url <https://osf.io/c5w2u> [20220822].
3. <a name='r03'></a>Sevi Nurafni, "Tesis - Sevi Nurafni (20920001).pdf", WhatsApp, 03:25, 22.8.2022, url <https://osf.io/kj3n4> [20220822].
4. <a name='r04'></a>Rinovia M. G. Simanjuntak, "Undangan_Sevi_Tesis II.pdf", WhatsApp, 05:47, 22.8.2022, url <https://osf.io/v8ab5> [20220822].
5. <a name='r05'></a>Jaka Sembiring, "Kalender Pendidikan Institut Teknologi Bandung
Periode 2 Juni 2022 s.d. 11 Agustus 2023", WRAM Nomor: 177/IT1.B04/DA/2022, Institut Teknologi Bandung, Bandung, 10 Maret 2022, url <https://dmx.akademik.itb.ac.id/s/TD8qG4c5fAEZ3XS> [20220822].

{{< todo >}}
{{</ todo >}}