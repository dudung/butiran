---
title: "github fi3201 exam 2"
date: 2022-05-08T17:32:00+07:00
lastmod: 2022-05-08T19:14:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: true
tags: ['github', 'repository', 'exam', 'fi3201', 'draft']
url: "0068"
draft: false
---
Matakuliah Fisika Komputasi [[1](#r01)] yang diberikan pada Semester 2 Tahun Akademik 2021/2022 diakhir dengan suatu bentuk tugas yang akan diunggah ke GitHub [[2](#r02)].


## stages
Terdapat empat tahap dalam mengerjakan ujian FI3201 ini.

1. Menyiapkan folder kerja.
2. Menjawab pertanyaan.
3. Mengunggah jawaban.
4. Memfinalkan ujian.

Keempat langkah tersebut akan diberikan pada bagian di bawah ini atau dapat diakses dalam empat halaman terpisah di Cookbook [[3](#r03)].


## preparing working folder
Menyiapkan folder kerja dilakukan dengan langkah-langkah berikut ini.

1. Kunjungi laman [2021-2-fi3201-01-u2](https://github.com/dudung/2021-2-fi3201-01-u2).

  ![](/bugx/img/github/exam/u2-fi3201-01.png)

2. Lihat bagian rilis [v0.0.4](https://github.com/dudung/2021-2-fi3201-01-u2/releases/tag/v0.0.4).

  ![](/bugx/img/github/exam/release-v0.0.4.png)

3. Unduh [Source code (zip)](https://github.com/dudung/2021-2-fi3201-01-u2/archive/refs/tags/v0.0.4.zip).

  ![](/bugx/img/github/exam/v0.0.4-zip.png)

4. Temukan pada folder Download.

  ![](/bugx/img/github/exam/download-v0.0.4-zip.png)

5. Lihat isinya dengan membukanya.

  ![](/bugx/img/github/exam/content-v0.0.4-zip.png)

6. Buat folder baru dan kosong, misalya `2021-2-fi3201-01-u2`.

   ![](/bugx/img/github/exam/new-empty-folder.png)

7. Salin semua berkas yang tersimpan dalam `2021-2-fi3201-01-u2-0.0.4.zip` ke folder baru sebelumnya.

  ![](/bugx/img/github/exam/new-folder-v0.0.4-files.png)

8. Masuk ke folder `que`.

  ![](/bugx/img/github/exam/sub-folder-que.png)

9. Lanjutkan masuk ke folder `10200000` yang berisikan pertanyaan-pertanyaan.

  ![](/bugx/img/github/exam/sub-folder-que-10200000.png)

10. Salin semua berkas pada folder `10200000`.

11. Mundur ke dua folder sebelumnya dan masuk ke folder `ans`.

  ![](/bugx/img/github/exam/sub-folder-ans.png)

12. Pilih folder sesuai dengan NIM Anda, untuk contoh ini digunakan `10200999`.

  ![](/bugx/img/github/exam/sub-folder-ans-10200999.png)

13. Tempel semua berkas dari folder `que/10200000` sebelumnya ke folder `ans/10200999` ini.

  ![](/bugx/img/github/exam/sub-folder-ans-10200999-v0.0.4-files.png)

14. Folder pertanyaan dan isinya telah siap.


## answering questions
Menjawab pertanyaan dilakukan mengikuti langkah-langkah berikut ini.

1. Buka Windows PowerShell atau `cmd`.

  ![](/bugx/img/github/exam/windows-powershell.png)

2. Jalankan Jupyter Notebook dengan mengetikkan `jupyter notebook`.

  ![](/bugx/img/github/exam/windows-powershell-jupyter-notebook.png)
  
3. Pindah ke jendela Jupyter server.

  ![](/bugx/img/github/exam/jupyter-server-running.png)

4. Navigasi ke folder `ans`.

  ![](/bugx/img/github/exam/jupyter-folder-ans.png)

5. Lanjutkan ke folder NIM Anda, e.g. `10200999`.

  ![](/bugx/img/github/exam/jupyter-folder-ans-10200999.png)

6. Pilih `hello_student.ipynb` dan jalankan dengan melakukan klik tetikus padanya.

  ![](/bugx/img/github/exam/hello-student-select.png)

7. Setelah berkas `hello_student.ipynb` dijalankan ikonnya akan menjadi berwarna hijau dan terbuka tab baru di sebelah tab sebelumnya.

  ![](/bugx/img/github/exam/hello-student-running.png)

8. Pindah ke tab baru tersebut (bila tidak secara otomatis terbuka) dan terlihat bahwa sel pertama telah berada pada mode perintah (command mode) dengan garis vertikal berwarna biru di sisi kirinya.

  ![](/bugx/img/github/exam/hello-student-tab.png)
  
9. Tekan Shift-Enter untuk mengeksekusi sel pertama dan sel berikutnya akan tersorot.

  ![](/bugx/img/github/exam/hello-student-execute-cell-1.png)

10. Kembali tekan Shift-Enter untuk mengeksekusi sel kedua, terdapat sel keluaran yang kosong (berwarna merah `Out[1]`, dan sel berikutnya akan tersorot.

  ![](hello-student-execute-cell-2.png)

11. Lanjutkan kembali tekan Shift-Enter untuk mengeksekusi sel ketiga, tidak ada sel keluaran, dan sel berikutnya akan tersorot.

  ![](/bugx/img/github/exam/hello-student-execute-cell-3.png)

12. Ganti variabel `nim` dengan nilai yang sesuai, dalam hal ini digunakan `10200999` dan tekan Shift-Enter sehingga proses berjalan.

  ![](/bugx/img/github/exam/hello-student-execute-cell-4a.png)

13. Dan setelah selesai akan diperoleh hasilnya pada bagian bawah.

  ![](hello-student-execute-cell-4b.png)

14. Jangan lupa untuk mengubah nilai variabel `nim` dan kerjakan pada folder sesuai NIM Anda, yaitu `ans/102YYNNN` dengan NIM Anda adalah `102YYNNN`.

15. Tekan Ctrl+S untuk menyimpan jawaban Anda dan akan terlihat sekilas waktu penyimpanannya, e.g. `Checkpoint created 13:59:38` pada bagian di atas menu `File` dan lainnya, yang menandakan berkas telah tersimpan.

  ![](/bugx/img/github/exam/hello-student-result-save.png)


## upload results
Menggunggah jawaban dapat dilakukan dengan menjalankan langkah-langkah di bawah ini.

1. Navigasi ke folder NIM Anda, yang untuk contoh ini adalah `ans/10200999` dan lihatlah bahwa berkas terakhir yang disunting, sebagai contoh `hello_student.ipynb` terletak teratas dengan tanggal modifikasi `2022-05-08 13:59` sesuai dengan saat penyimpanannya.

  ![](/bugx/img/github/exam/hello-student-file-modified.png)

2. Kunjungi kembali laman [2021-2-fi3201-01-u2](https://github.com/dudung/2021-2-fi3201-01-u2) dan lakukan forking dengan menekan tombol <div style="display: inline-block; transform: scale(1);">![](/bugx/img/github/exam/fork-button.png)</div> di bagian atas saat jendela dibuat maksimal, tombol ini sebaris dengan Tombol `Watch` dan `Star`.

  ![](/bugx/img/github/exam/repository-forking-start.png)

3. Lakukan [proses fork](https://github.com/dudung/2021-2-fi3201-01-u2/fork) dengan menekan tombol <div style="display: inline-block; transform: scale(1);">![](/bugx/img/github/exam/create-fork-button.png)</div>.

  ![](/bugx/img/github/exam/repository-forking-end.png)

4. Repository `2021-2-fi3201-01-u2` telah berhasil dibuat fork-nya sebagaimana tersampaikan pada bagian atas `botkoum/2021-2-fi3201-01-u2` dan `forked from dudung/2021-2-fi3201-01-u2`.

 ![](/bugx/img/github/exam/repository-forked.png)

5. Atau bila sebelumnya telah melakukan fork dapat mengunjungi [daftar forks](https://github.com/dudung/2021-2-fi3201-01-u2/network/members).

  ![](/bugx/img/github/exam/repository-forks-list.png)


6. Pilih fork sesuai dengan user Anda, yang dalam hal ini adalah [botkoum](https://github.com/botkoum) sehingga akan menampilkan halaman repositori `2021-2-fi3201-01-u2` yang telah Anda fork.

  ![](/bugx/img/github/exam/repository-forked-main-page.png)

7. Pilih folder sesuai NIM Anda, yang dalam hal ini adalah `10200999` sehingga tampilan `2021-2-fi3201-01-u2/ans/10200999/` baru berisi satu berkas bernama `instruction.md`.

  ![](/bugx/img/github/exam/repository-forked-page-student-id.png)

8. Tunjuk `...` dan pilih menu 'Upload files'.

  ![](/bugx/img/github/exam/repository-page-student-id-upload-file-1.png)


9. Pilih berkas yang akan diunggah atau seret dan lepaskan pada kotak `Drag files here to add them to your repository`.

  ![](/bugx/img/github/exam/repository-page-student-id-upload-file-2a.png)
  
  ![](/bugx/img/github/exam/repository-page-student-id-upload-file-2b.png)

10. Lakukan commit, bila perlu tambahkan pesan seperti `Unggah jawaban hello_student.ipynb` lalu tekan tombol <div style="display: inline-block; transform: scale(1);">![](/bugx/img/github/exam/commit-changes-button.png)</div>.

  ![](/bugx/img/github/exam/repository-page-student-id-upload-file-3.png)

11. Berkas `hello_student.ipynb` telah terunggah pada `2021-2-fi3201-01-u2/ans/10200999/`.

  ![](/bugx/img/github/exam/repository-hello-student-uploaded.png)
  
12. Klik dengan tetikus `hello_student.ipynb` dan hasilnya dapat dilihat.

  ![](/bugx/img/github/exam/repository-hello-student-ipynb-tested.png)

13. Pada halaman depan repositori Anda terlihat berkas terakhir yang diunggah, yang untuk saat ini aalah `hello_student.ipynb`, sekitar lima menit yang lalu dan berada di bahwa folder `ans`.

  ![](/bugx/img/github/exam/repository-hello-student-message.png) 

14. Perhatikan pesan yang diberikan pada Langkah 10 dan hasilnya pada Langkah 11-13, di atas daftar folder dan berkas.

15. Ulangi langkah-langkah di atas untuk berkas-berkas lain dalam folder `ans/102YYNNN` dengan `102YYNNN` adalah NIM Anda.


## finalize exam
Memfinalkan hasil ujian dijalankan dengan langkah-langkah berikut ini.

1. Berkas `README.md` di folder NIM Anda, e.g. `ans/102YYNNN/README.md` yang untuk contoh ini adalah<br>
  [ans/10200999/README.md](https://github.com/botkoum/2021-2-fi3201-01-u2/blob/main/ans/10200999/README.md)

2. Dalam berkas `README.md` di folder NIM Anda perbaiki informasi
  [Your Full Name](https://github.com/username) dengan Nama Lengkap Anda dan tautan ke halaman GitHub Anda.
  
  ![](/bugx/img/github/exam/repository-ans-readme-fullname.png)
  
  Untuk contoh di sini adalah
  
  [Bot Koum](https://github.com/botkoum)
  
  yang diperoleh dengan
  
  `[Bot Koum](https://github.com/botkoum)`
 
 3. Yakinkan bahwa Anda telah menjawab semua pertanyaan yang disediakan dengan memastikannya kembali, lalu memberikan tanda :heavy_check_mark: di kolom terkanan setiap baris pada tabel dalam berkas `README.md` di folder NIM Anda, yang bentuk tabelnya adalah seperti di bawah ini.

  ![](/bugx/img/github/exam/repository-ans-readme-progress-table.png)
  
  Tanda :heavy_check_mark: diberikan dengan `:heavy_check_mark:`.

4. Setelah yakin bahwa semua pertanyaan telah dijawab, kembali ke halaman depan repositori `2021-2-fi3201-01-u2` yang telah Anda fork dan temukan informasi berikut.

  ![](/bugx/img/github/exam/branch-2-commits-ahead.png)
  
  Hal ini menggambarkan bahwa cabang (fork) Anda lebih baru (maju, mutakhir) dua perubahan dibandingkan sumbernya, yaitu unggah `hello_student.ipynb` dan `README.md`.

5. Pilih `Contribute` dan tekan `Open pull request`.
  ![](/bugx/img/github/exam/branch-open-pull-request.png)

6. Terdapat kalimat :heavy_check_mark: `Able to merge` yang mengindikasikan bahwa Anda telah mengerjakan di folder NIM Anda sehingga tidak konflik dengan sumber ataupun Rekan Anda.

  ![](/bugx/img/github/exam/branch-able-to-merge.png)
  
  Pilih tombol <div style="display: inline-block; transform: scale(1);">![](/bugx/img/github/exam/create-pull-request-button.png)</div>.

7. Isikan pesan Anda, misalnya `Jawaban 10200999 Bot Koum` yang mengindikasikan maksudnya.

  ![](/bugx/img/github/exam/pull-request-title.png)

  Lanjutkan dengan menekan tombol <div style="display: inline-block; transform: scale(1);">![](/bugx/img/github/exam/create-pull-request-button.png)</div>.
  
8. Hasil pull reques oleh Bot Koum telah tersimpan.

  ![](/bugx/img/github/exam/pull-request-number-1.png)
  
  Terlihat bahwa ini merupakan pull request pertama (#1).
  
9. Dengan demikian jawaban Anda (dalam hal ini [Bot Koum](https://github.com/botkoum)) telah tersubmit dan terfinalisasi.



## notes
1. <a name='r01'></a>User, "FI3201 Computational Physics", Physics Department, Faculty of Mathematics and Natural Sciences, Institut Teknologi Bandung, Indonesia, 8 Oct 2020, url <https://multisite.itb.ac.id/fisika/wp-content/uploads/sites/298/2021/06/FI3201-Computational-Physics.pdf> [20220508].
2. <a name='r02'></a>dudung, "2021-2-fi3201-01-u2", Github, 2022, url <https://github.com/dudung/2021-2-fi3201-01-u2> [20220508].
3. <a name='r03'></a>dudung, "Cookbook", Github, 2022, url <https://github.com/dudung/cookbook/blob/main/notebook/3201-u2-instruction/README.md> [20220508].

{{< citeas >}}
