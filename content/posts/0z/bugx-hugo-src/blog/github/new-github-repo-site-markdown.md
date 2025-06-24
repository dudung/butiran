---
title: "new github repo site markdown"
date: 2022-06-08T18:50:00+07:00
lastmod: 2022-06-11T20:54:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['github', 'repo', 'site', 'new']
url: "0080"
draft: false
---
Telah terdapat banyak informasi bagaimana membuat situs web di GitHub dengan memanfaatkan fitur GitHub Pages. Di sini akan disajikan informasi pembuatan situs web di GitHub tanpa menggunakan aplikasi GitHub Desktop [[1](#r01)], aplikasi pembuat situs web secara daring [[2](#r02)], aplikasi command line Git [[3](#r03)], ataupun tidak dengan melakukan clone repositori terkait [[4](#r04)]. Kegiatan dilakukan secara daring, hanya pada situs web GitHub, dan cukup berbekal penjelajah web seperti Google Chrome.

Selain itu di sini juga tidak memberikan informasi untuk membuat situs web pengguna GitHub dengan alamat web `https://username.github.io` [[5](#r05)] akan tetapi untuk situs web sebuah repository yang alamat webnya akan menjadi `https://username.github.io/repository/` [[6](#r06)]. Kedua kata atau lebih tepatnya variabel `username` dan `repository` dapat berisi rangkaian huruf dan angka serta tanda baca apa saja sesuai ketentuan yang diperbolehkan di GitHub [[7](#r07)].

Untuk saat ini dalam membuat suatu halaman pada situs web tidak digunakan HTML, yang memang tidak diperuntukkan sebagai suatu media saat menggubah teks, akan tetapi digunakan Markdown [[8](#r08)], di mana Markdown ini memang tidak ditujukan untuk mengganti HTML akan tetapi untuk memperkayanya sebagai suatu alat untuk menulis, sedangkan HTML sebagai suatu format untuk publikasi [[9](#r09)].


## prerequisite
Pembaca tulisan ini diasumsikan telah memiliki akun GitHub `username` yang dapat dilihat di `https://github.com/username` dan telah membuat repositori  `username.github.io` dan telah diaktifkan sehingga dapat diakses melalui `https://username.github.io`. Untuk `username` terdapat batasan jumlah dan macam karakter yang diperbolehkan [[10](#r10)].


## sign in
1. Kunjungai laman https://github.com/.<br>
  ![](/bugx/img/github/gh-pages/new/github-com.png)

2. Akses menu sebelah kanan atas dengan tanda &equiv; dan pilih opsi paling bawah kiri dengan tulisan [Sign in](https://github.com/login).<br>
  ![](/bugx/img/github/gh-pages/new/github-com-menu-signin.png)

3. Isikan username, yang dalam contoh ini adalah dudung, atau alamat email dan lanjutkan dengan memberikan password, kemudian akhiri dengan melakukan klik pada tombol bertuliskan Sign in.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-login.png)

4. Berikan kode verifikasi berupa angka 6 digit yang dikirimkan lewat email yang terasosiasi dengan akun GitHub yang digunakan.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-login-verification.png)


## create new repository
1. Buat repositori baru dengan menggunakan tautan https://github.com/new dan berikan nama tertentu yang belum digunakan, misalnya saja `simple-website-md`.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-name.png)

2. Isikan deskripsi dari repositori yang akan dibuat ini, seperti `simple website using markdown`.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-description.png)

3. Gulung layar ke bawah, pilih opsi Public agar repositori dapat dilihat semua pengunjung, aktifkan opsi Add a README file yang nanti dapat diiskan informasi mengenai repositori ini, dan akhiri langkah ini dengan tetikus menekan tombol Create repository.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-options.png)

3. Repositori dengan nama `simple-website-md` untuk pengguna `dudung` telah dibuat yang dapat diakses melalui tautan <https://github.com/dudung/simple-website-md>.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-created.png)


## check github pages
1. Periksa halaman GitHub dari repositori <https://github.com/dudung/simple-website-md> yang terletak di <https://dudung.github.io/simple-website-md> dan diperoleh belum ada.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-gh-pages-site-not-found.png)

2. Hal ini dapat pula terlihat pada laman <https://github.com/dudung/simple-website-md>, di mana dibagian kanan hanya terdapat bagian About, Releases, dan Packages.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-created.png)


## create new file index.md
1. Pilih menu Add file lalu Create new file.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-new-file.png)

2. Buat folder `docs`.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-new-file-folder-docs.png)

3. Tambahkan nama berkas `index.md`.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-new-file-folder-docs-file-index-md.png)

4. Tuliskan isi berkasnya, misalnya `Hello, World!'.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-new-file-folder-docs-file-index-md-content-hello.png)

5. Gulung layar ke bawah dan isikan pesan bila diperlukan lalu tekan tombol Commit new file dengan tetikus. <br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-new-file-folder-docs-file-index-md-commit-new-file.png)

6. Berkas `index.md` telah dibuat dalam folder `docs` pada repositori <https://github.com/dudung/simple-website-md>.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-new-file-folder-docs-file-index-md-created.png)


## activate github pages
1. Pada laman repositori yang baru dibuat <https://github.com/dudung/simple-website-md>, pilih menu Settings atau &bull;&bull;&bull; lalu Settings.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings.png)

2. Pilih menu Pages di bagian kanan.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings-menu-pages.png)

3. Navigasi pada bagian Source, akses tombol None.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings-menu-pages-select-branch.png)

4. Ubah Source menjadi `main`.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings-menu-pages-main-branch.png)

5. Akses opsi folder `/(root)`.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings-menu-pages-main-branch-select-folder.png)

6. Ubah folder menjadi `/docs` dan tekan tombol Save.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings-menu-pages-main-branch-folder-docs.png)

7. Muncul notifikasi bahwa laman GitHub https://dudung.github.io/simple-website-md/ telah dipublikasikan.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-settings-menu-pages-main-branch-folder-docs-saved.png)

8. Akses laman <https://dudung.github.io/simple-website-md/> untuk melihat hasilnya.<br>
  ![](/bugx/img/github/gh-pages/new/github-com-new-repo-gh-pages-ready.png)

9. Kunjungi halaman repositori dan lihat pada bagian kanan bawah yang telah terdapat Environments dengan satu item berupa github-pages yang berstatus Active. Perhatikan perbedaan tampilan laman repositori ini pada Langkah 1.<br>
  ![](/bugx/img/github/gh-pages/repo/github-com-gh-pages-link.png)


## visit repository github page
1. Kunjungi halaman pengguna <https://github.com/dudung> dengan repositori `simple-website-md` telah ditancapkan dan pilih repositori tersebut dengan mengakses tautan <https://github.com/dudung/simple-website-md>.<br>
  ![](/bugx/img/github/gh-pages/repo/github-com-user-pinned-repository.png)

2. Perhatikan laman repositori `simple-website-md` yang di kanannya, pada bagian Enrivonments, telah terdapat github-pages dengan status Active. Akses tautan tersebut.<br>
  ![](/bugx/img/github/gh-pages/repo/github-com-user-repo-environment-gh-pages.png)

3. Pada halaman Deployment / History terdapat catatan secara historis deployment yang dijalankan. Akses tombol View deployment dengan tetikus.<br>
  ![](/bugx/img/github/gh-pages/repo/github-com-gh-pages-deployment.png)

4. Halaman GitHub dari repositori `simple-website-md` merupakan hasil deployment dari environment github-pages.<br>
  ![](/bugx/img/github/gh-pages/repo/github-com-gh-pages-deployment-result.png)


## summaries
1. Sebuah situs web dari repositori di GitHub telah dibuat.
2. Pada contoh ini nama pengguna GitHub adalah `dudung` sehingga halaman penggunanya adalah <https://github.com/dudung>.
3. Nama repositori yang digunakan adalah `simple-website-md` dan dapat diakses dengan tautan <https://github.com/dudung/simple-website-md>.
4. Situs web dari repository yang dimaksud terdapat pada <https://dudung.github.io/simple-website-md/>.
5. Pada situs web tersebut hanya terdapat satu berkas `index.md` yang sumbernya dapat diubah di <https://github.com/dudung/simple-website-md/blob/main/docs/index.md>.
6. Pembuatan berkas-berkas lainnya yang terhubung dengan berkas `index.md`, di mana semua berkas tersimpan dalam folder `docs`, akan disampaikan pada tulisan lain.


## notes
1. <a name='r01'></a>Scott Vinkle, "Publish and share your own website for free with GitHub", Medium, 26 Jul 2017, url <https://medium.com/@svinkle/2eff049a1cb5> [20220608].
2. <a name='r02'></a>Muhammad Noor Fakhruzzaman, "Tips Mudah Membuat Website Pribadimu dengan Github Pages dan Bootstrap", Fakultas Teknologi Maju dan Multidisiplin, Universitas Airlangga, Surabaya, Muhammad Wildan Suyuti (ed.), 8 Apr 2021, url <https://ftmm.unair.ac.id/tips-mudah-membuat-website-pribadimu-dengan-github-pages-dan-bootstrap/> [20220608].
3. <a name='r03'></a>-, "How do I use GitHub Pages?", MDN Web Docs, 26 Apr 2022, url <https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Using_Github_pages> [20220608].
4. <a name='r04'></a>Karl Broman, "Making a personal site", simple site, url <https://kbroman.org/simple_site/pages/user_site.html> [20220608].
5. <a name='r05'></a>Anthony Heddings, "How to Set Up a Simple Free Website With Github Pages", How-To Geeok, 24 Jan 2022, url <https://www.howtogeek.com/devops/how-to-set-up-a-simple-free-website-with-github-pages/> [20220608].
6. <a name='r06'></a>Roelof Jan Elsinga, "Tutorial: How to set up and automatically deploy your website to GitHub Pages", 22 Apr 2020, url <https://roelofjanelsinga.com/articles/how-to-set-up-automatically-deploy-website-github-pages/> [20220608].
7. <a name='r07'></a>Ville Laitila, "Answer to 'What is the format for valid Git repo names?'", Stack Overflow, 30 Sep 2020, url <https://stackoverflow.com/a/64147124/9475509> [20220608].
8. <a name='r08'></a>Harlan Hugh, "Markdown vs. HTML – What Makes the Most Powerful Notes Editor?", The Brain, 1 Aug 2020, url <https://www.thebrain.com/blog/markdown-vs-html> [20220608].
9. <a name='r09'></a>Peter Conrad, "Why You Should and Should Not Use Markdown", Medium, 15 Apr 2019, url <https://stymied.medium.com/1b9d70987792> [20220608].
10. <a name='r10'></a>shinnn, "github-username-regex", GitHub, 18 Jan 2017, url <https://github.com/shinnn/github-username-regex/tree/0794566cc10e8c5a0e562823f8f8e99fa044e5f4> [20220608].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}