---
title: "dsti-visit-fix-lan"
date: 2022-07-07T16:42:00+07:00
lastmod: 2022-07-07T1:32:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['dsti', 'lan', 'solved']
url: "0106"
draft: false
---
Permasalahan jaringan telah terpecahkan, yang diduga semacam switching loop [[1](#r01)], di mana network loop ini dapat terjadi karena beberapa hal [[2](#r02)]. Saat setelah reparasi selesai sempat datang ketua UKA dari lab yang dikunjungi dan diberikan pengarahan agar melakukan perencanaan dengan baik ke depannya.


## summaries
- Permasalahan jaringan yang diduga berubah network loop telah dapat terselesaikan setelah didapati ada dua kabel DSTI masuk ke router yang sama.
- Kecepatan jaringan kampus telah mencapai 8 Gpbs yang tidak terdukung oleh beberapa router dan switch di unit yang masih hanya sampai 100 Mbps, penggantian dapat dilaksanakan tahap per tahap dengan merencanakan, mengganggarkan, dan sampai memantau proses pengajuan sampai penerapannya.
- Hotspot Eduroam yang saat ini berjumlah tujuh titik masih dirasakan kurang, akan tetapi untuk menambahkannya memerlukan piranti keras yang tergolong cukup mahal sehingga perlu dipertimbangkan dengan lebih matang, mengingat tujuan Eduroam lebih kepada komunitas riset dan edukasi international [[3](#r03)], misalnya peneliti, dosen, mahasiswa tamu internasional.
- Adalah baik terdapat beberapa alternatif koneksi, yaitu jaringan kampus dan titik-titik hotspotnya serta hotspot Eduroam, sehingga memastikan bahwa koneksi internet tetap diperoleh oleh sivitas akademika, akan tetapi perlu dicari optimasinya karena merawat lebih dari dua jaringan (jaringan kampus perlu dirawat lokal, sedangkan Eduroam langsung dari DSTI) memerlukan upaya lebih ketimbang hanya satu.
- Pelabelan perlu dilanjutkan sehingga mudah untuk melacak bila terdapat masalah di kemudian hari, yang dapat dilakukan dengan mencabut kabel lalu memeriksa target komputer yang tidak terkoneksi, di mana kegiatan perlu disosialisasikan sehingga tim jaringan perlu berkoordinasi dengan K3G sehingga mendapatkan akses ke ruang-ruang pengajar setelah sebelumnya mendapatkan ijin.
- Penarikan kabel dari router / switch setelah FO ke komputer sivitas akademika dianjurkan bila masih terdapat port kosong untuk memudahkan telusur masalah ketimbang terdapat hirarki jaringan yang membuat semakin kompleks dengan adanya layer-layer core, distribution dan access [[4](#r04)].
- Terdapat server lab yang memiliki IP statis dan komputer lain untuk keperluan akses dari luar kampus atau LN untuk tunneling tanpa menggunakan VPN kampus, di mana hal ini sebaiknya tercapat dengan baik sehingga bila suatu saat terdapat kebocoran keamanan atau serangan ke jaringan, pengelola DSTI dapat diminta bantuannya. Juga disarakan agar komputer-komputer dengan IP statis tersebut dimintakan melaluti tiket DSTI agar dikeluarkan dari daftar IP yang disuguhkan ke suatu komputer saat menyala dengan konfigurasi DHCP (konfigurasi yang disarankan oleh kampus).
- Perawatan jaringan mungkin dapat dibedakan dalam setidaknya tiga bagian: (i) kampus sampai FO ke unit, (ii) di dalam unit sampai ke komputer sivitas akademika, (iii) lab-lab khusus yang memiliki server, komputer penelitian, dengan konfigurasi sendiri dan IP statis. Tanggung jawab (i) ada di DSTI, (ii) admin unit, dan (iii) pada admin lab yang berkoordinasi dengan admin unit. Dengan ini diharapkan admin unit tidak terbebani perawatan khusus lab yang cenderung tidak umum, kompleks, dan amat customized.
- Terdapat tawaran layanan dari DSTI mulai colocation server, private cloud, dan virtual private server [[5](#r05)] yang memiliki kelebihan dan kekurangan dibandingkan dengan merawat sendiri server dalam lingkungan unit atau lab penelitian. Mungkin perlu dilakukan pencarian informasi lebih lanjut mengenai hal ini untuk mencari solusi yang lebih optimal bila dirasakan merawat server secara lokal unit memberatkan.
- Terdapat pembicaraan bahwa admin jaringan merupakan pegawai DSTI yang diperbantukan di unit akan tetapi hal ini belum ditindaklanjuti. Bila sampai terjadi maka koordinasi pengelolaan jaringan akan menjadi lebih seragam dan terstruktur karena admin unit memiliki pemahaman yang setara dan sinergis dengan kebijakan DSTI yang mewakili kebijakan kampus.
- Ke depan, dengan kebijakan yang masih dirancang, penambahan hotspot, komputer ber-IP statis, dan hal-hal lain yang dapat mengganggu kinerja jaringan, akan secara otomatis diblok dari piranti keras pas setelah FO dari kampus, sehingga perlu dilakukan perijinan terlebih dahulu dengan sepengetahuan admin jaringan unit kerja, baik prodi maupun F/S.
- Terdapat pengarahan dari Dekan, yang kebetulan berkunjung saat akhir kegiatan dengan DSTI, agar rencana-rencana (pemutakhiran router lama secara per tahap, pengubahan topologi jaringan, penempatan hotspot-hotspot, alur pendaftaran devais baru dan kebutuhan IP-nya, form registrasi, perawatan piranti lunak terkait jaringan sivitas akademika sehingga tidak membebani jaringan, sosialisasi kebijakan terkait jaringan, pelatihan sederhana troubleshooting sehingga mendukung admin jaringan, pemutahiran komputer sivitas akademikia secara berkala-terkendali-sesuai-prioritas, dan lain-lain) dimatangkan, lalu disampaikan ke fakultas melalui prodi, dengan telah mendapatkan rekomendasi teknis dari DSTI dan UPT Pengadaaan.
- Permintaan troubleshooting jaringan Lab Komputasi Lanjut dan di sekitarnya diminta pada 8 Juni 2022 dan selesai hari ini 7 Juli 2022, sehingga memakan waktu satu bulan karena satu dan lain hal. Masalah utama adalah koordinasi dan komunikasi. Hal ini perlu diperbaiki dengan mendokumentasikan langkah-langkah penyelesaian yang pernah berhasil.

Sampaikan

> Rekan-rekan semua mohon maaf bila ada seperti desakan atau keterburu-buruan. Semoga kita masih dapat bekerja sama untuk memperbaiki keadaan di Prodi Fisika, FMIPA. ITB. Terima kasih.

ke WAG Info Jaringan - Sisfo FI (AOL, AYO, DI) setelah ringkasan di atas.


### additional info
+ Router NR sudah diaktifkan kembali dan tes di ID, NV, SV telah berfungsi. Di NR seharusnya juga berfungsi kembali tetapi lupa dites.
+ Kabel kuning dari server atas ke SV akan diasupkan ke router NV dan dibagi ke AL, ID, NV, SV. IA butuh hotspot dan mungkin memanfaatkan yang ada (dilepas dari suatu ruang karena bentro dengan Eduroam?) untuk ke router NV juga.
+ Admin Lab Komputasi Lanjut (FM) diminta untuk bertanggung jawab pada lokalnya termasuk server dan komputer yang ada sehingga membantu admin unit. Perihal IP statis, dua buah komputer, agar dapat tunelling dari luar juga disarankan mengajukan ke DSTI. Dokumentasi dari NRX sebaiknya mulai dilakukan.
+ Skenario reset IP untuk semua kelihatannya tidak perlu dilakukan sehingga rencana perbaikan secara menyeluruh jaringan FI dapat mulai dilakukan, yang dirancang per tahap dan cukup fleksibel sehingga penganggaran serta pelaksanaannya dapat multi tahun anggaran.


## notes
1. <a name='r01'></a>Boris Rogier, "How to identify and quickly fix a network switching loop", Accedian, 19 May 2016, url <https://accedian.com/blog/identify-fix-network-switching-loop/> [20220707]. 
2. <a name='r02'></a>-, "What is a network loop?", NETGEAR, 30 Jul 2019, url <https://kb.netgear.com/000060475/What-is-a-network-loop> [20220707].
3. <a name='r03'></a>-, "What is eduroam?", eduroam, url <https://eduroam.org/what-is-eduroam/> [20220707].
4. <a name='r04'></a>Cisco Networking Academy, "Hierarchical Network Design", in Connecting Networks Companion Guide, Pearson Education, Cisco Press, 9 May 2019, url <https://www.ciscopress.com/articles/article.asp?p=2202410> [20220707].
5. <a name='r05'>-, "Layanan", DSTI ITB, url <https://dsti.itb.ac.id/layanan/> [20220707].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}