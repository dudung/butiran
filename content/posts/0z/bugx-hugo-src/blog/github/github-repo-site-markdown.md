---
title: "github repo site markdown"
date: 2022-06-12T04:21:00+07:00
lastmod: 2022-06-12T17:18:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['github', 'repo', 'site', 'markdown']
url: "0082"
draft: false
---
Tulisan ini mungkin dapat disebut sebagai tutorial untuk membuat situs web dari suatu repositori di GitHub dengan hanya menggunakan Markdown dan merupakan kelanjutan dari tulisan lain [[1](#r01)].

Markdown membantu dalam membuat dokumen dalam teks polos (plain text) dengan suatu struktur eksplisit menggunakan hanya sedikit simbol tambahan dari yang digunakan untuk menuliskan isi dokument [[2](#r02)]. Bahasa markup ringan (light-weight) ini merupakan suatu kompromi antara menggunakan peyunting teks WYSIWYG (what you see is what you get) yang amat membatasi dengan memformat langsung isi dokumen dalam HTML [[3](#r03)]. Dokumentasi panduan programer dapat distandarkan pada Markdown seperti yang dilakukan dalam pengembangan iTwin.js [[4](#r04)]. Selain itu, bahasa markup ini juga digunakan di berbagai platform pengembangan piranti lunak dan forum diskusi daring [[5](#r05)].


## prerequisite
Pembaca tulisan ini diasumsikan memiliki akun GitHub `username` dan telah membuat situs web suatu repositori `repository` dan mengaktifkannya dengan alamat seperti `https://username.github.io/repository`, seperti contoh yang digunakan di sini <https://dudung.github.io/simple-website-md>, sebagaimana telah dijelaskan dalam tulisan sebelumnya [[1](#r01)]. 


## files organization
Saat memulai suatu situs web statis programer perlu memperhatikan pengorganisasian berkas-berkas yang digunakan. Hal ini akan memudahkan pengembangan lebih lanjut situs web tersebut, terlebih bila ingin mengganti style, script, atau lainnya saat jumlah berkas telah banyak.

Tabel <a name='tab1'>1</a>. Pembandingan struktur folder beberapa situs web static.

Folder | Letak | Catatan | Refs
:-- | :-- | :-- | :-:
`css`, `images`, `js` | `\` | Pengenalan struktur situs web | [[6](#r06)]
`css`, `img`, `js`, `fonts`, `scss` | `\` | Bootstrap | [[7](#r07)]
 `css`, `img`, `js` | `\assets\` | Kit + Less | [[8](#r08)]
 `_posts`, `js` | `\` | Jekyll + Gulp + Babel | [[9](#r09)]
`content`<br>`css`, `img`, `js` | `\`<br>`\static\` | Hugo | [[10](#r10)]


Untuk contoh yang diberikan di sini akan digunakan struktur folder sebagai berikut

```
\
├── css
│   └── simple-website.css
├── img
│   └── swm-icon.png
├── js
│   └──script.js
├── content
│   ├── blog
│   │   └── new-blog-post.md
│   ├── code
│   │   └── a-code-post.md
│   └── todo
│       └── 12-jun-2022.md
├── about.md
└── index.md
```

dan terdapat berkas-berkas `simple-website.css`, `swm-icon.png`, `script.js`, `new-blog-post.md`, `a-code-post.md`, `12-jun-2022.md`, `about.md`, `index.md`.

Perhatikan bahwa `\` atau folder root di atas adalah folder `docs` pada repositori yang digunakan sebagai contoh <https://github.com/dudung/simple-website-md>.


## create new file
1. Navigasi ke laman repositori yang digunakan, yang dalam hal ini adalah <https://github.com/dudung/simple-website-md>.<br>
    ![](/bugx/img/github/gh-pages/add/visit-repository.png)

2. Buat berkas baru dengan mengakses tombol Add file lalu Create new file.<br>
    ![](/bugx/img/github/gh-pages/add/create-new-file.png)

3. Ketikkan folder `docs`.<br>
    ![](/bugx/img/github/gh-pages/add/create-new-folder-docs.png)

4. Lanjutkan dengan nama berkasnya `about.md`.<br>
    ![](/bugx/img/github/gh-pages/add/create-new-file-about-md.png)

5. Tulis isi berkas pada kotak yang tersedia.<br>
    ![](/bugx/img/github/gh-pages/add/type-content-about-md.png)

6. Gulung layar ke bawah dan tekan tombol Commit new file.<br>
    ![](/bugx/img/github/gh-pages/add/commit-new-file-about-md.png)

7. Dapatkan berkas `about.md` telah dibuat dan tersimpan dalam folder `docs` bersama-sama dengan berkas `index.md` yang telah dibuat sebelumnya.<br>
    ![](/bugx/img/github/gh-pages/add/view-new-file-about-md.png)


## upload files
1. Buat berkas berikut secara pada komputer lokal dengan nama `simple-website.css`.<br>
```css
/*
  simple-website.css
*/
```

2. Buat berkas berikut secara pada komputer lokal dengan nama `script.js`.<br>
```js
/*
  script.js
*/
```

3. Buat berkas berikut secara pada komputer lokal dengan nama `swm-icon.png`.<br>
<img src="/bugx/img/github/gh-pages/add/swm-icon.png" style="width:80px;" />

4. Dapatkan ketiganya dalam suatu folder pada komputer lokal, misalnya `Downloads`.<    ![](/bugx/img/github/gh-pages/add/local-folder-css-js-png.png)

5. Akses menu Add file lalu Upload files.<br>
    ![](/bugx/img/github/gh-pages/add/add-file-upload-files.png)

6. Drag berkas atau pilih tautan choose your files.<br>
    ![](/bugx/img/github/gh-pages/add/drag-or-choose-files.png)

7. Sorot semua berkas yang akan diunggah dan tekan tombol Open.<br>
    ![](/bugx/img/github/gh-pages/add/select-files-and-open.png)

8. Tunggu berkas-berkas diproses (diunggah ke GitHub).<br>
    ![](/bugx/img/github/gh-pages/add/wait-processing-files.png)

9. Tekan tombol Commit changes.<br>
    ![](/bugx/img/github/gh-pages/add/commit-changes.png)

10. Ketiga berkas `simple-website.css`, `swm-icon.png`, dan `script.js` telah terunggah ke folder `docs`.<br>
    ![](/bugx/img/github/gh-pages/add/view-uploaded-files.png)


## move file
Agar sesuai dengan struktur folder yang telah disampaikan sebelumnya, ketiga berkas `simple-website.css`, `swm-icon.png`, dan `script.js`, masing-masing perlu ditempatkan pada sub folder tersendiri, yaitu `css`, `img`, dan `js` di bawah folder `docs`.

1. Klik berkas `script.js`.<br>
    ![](/bugx/img/github/gh-pages/add/click-script-js.png)

2. Akses ikon ✏️ atau Edit this file.<br>
    ![](/bugx/img/github/gh-pages/add/click-script-js-edit-button.png)

3. Perhatikan berkas `script.js` yang telah terbuka.<br>
    ![](/bugx/img/github/gh-pages/add/click-script-js-editting.png)

4. Ketikkan `js/` di depan nama berkas `script.js`.<br>
    ![](/bugx/img/github/gh-pages/add/click-script-js-changing-folder.png)

5. Tekan tombol Commit changes.<br>
    ![](/bugx/img/github/gh-pages/add/commit-script-js.png)

6. Dapatkan bahwa berkas `script.js` telah berpindah ke sub folder `/docs/js`, yang sebelumnya hanya `/docs` pada Langkah 1.<br>
    ![](/bugx/img/github/gh-pages/add/view-renamed-script-js.png)

7. Ulangi Langkah 1 untuk berkas `simple-website.css`.


## delete file
Berkas 'swm-icon.png' tidak dapat dipindahkan dengan hanya mengakses situs GitHub akan tetapi memerlukan command line [[11](#r11)], sehingga perlu dihapus dan diunggah ulang langsung pada foldernya.

1. Klik berkas `swm-icon.png`.<br>
    ![](/bugx/img/github/gh-pages/add/click-icon-png.png)

2. Akses ikon 🗑 atau Delete this file.<br>
    ![](/bugx/img/github/gh-pages/add/access-delete-icon-png.png)

3. Tekan tombol Commit changes untuk konfirmasi penghapusan berkas.<br>
    ![](/bugx/img/github/gh-pages/add/commit-icon-png.png)

4. Perhatikan adanya pesan konfirmasi bahwa berkas telah berhasil dihapus.<br>
    ![](/bugx/img/github/gh-pages/add/view-deteled-icon-png.png)


## upload file to empty folder
Terdapat batasan pada situs GitHub bahwa tidak boleh dibuat suatu folder kosong [[12](#r12)]. Berkas `swm-icon.png` akan diunggah ke folder `/docs/img` yang belum ada. Untuk itu dilakukan suatu cara agar folder tersebut tidak kosong.

1. Kunjungi folder `docs` dan pilih menu Add file lalu Create new file.<br>
    ![](/bugx/img/github/gh-pages/add/create-img-new-file.png)


2. Ketikkan `/img/` lalu isikan namba berkas `.gitignore` dan isikan hanya `#`.<br>
    ![](/bugx/img/github/gh-pages/add/edit-img-new-file-gitignore.png)

3. Tekan tombol Commit new file.<br>
    ![](/bugx/img/github/gh-pages/add/commit-new-file-gitignore.png)

4. Dapatkan bahwa berkas `.gitignore` telah dibuat dalam folder `/docs/img`.<br>
    ![](/bugx/img/github/gh-pages/add/view-img-folder.png)

5. Akses menu Add file lalu Upload files.<br>
   ![](/bugx/img/github/gh-pages/add/upload-file-img-folder.png)

6. Pilih berkas `swm-icon.png`.<br>
    ![](/bugx/img/github/gh-pages/add/select-png-img-folder.png)

7. Tunggu berkas diunggah ke GitHub.<br>
    ![](/bugx/img/github/gh-pages/add/wait-png-folder-uploading.png)

8. Tekan tombol Commit changes.<br>
    ![](/bugx/img/github/gh-pages/add/commit-uploaded-png.png)

9. Tunggu proses pengunggahan berkas dan berkas `swm-icon.png` telah diunggah ke folder `/docs/img/`.<br>
    ![](/bugx/img/github/gh-pages/add/view-uploaded-png.png)


## create other files and edit index.md
1. Dalam folder `/docs/content/blog/` buat berkas `new-blog-post.md`.

2. Dalam folder `/docs/content/code/` buat berkas `a-code-post.md`.

3. Dalam folder `/docs/content/todo/` buat berkas `12-jun-2022.md`.

4. Dalam folder `/docs/` modifikasi berkas `index.md` menjadi

```markdown
Hello, World!

## blog
+ [New blog post](content/blog/new-blog-post)

## code
+ [A code example](content/code/a-code-post)

## todo
+ [12 Jun 2022](content/todo/12-jun-2022)

---
[About this website](about.md)
```
5. Perhatikan pada Langkah 4 bahwa berkas yang dirujuk dituliskan relatif dari posisi berkas `index.md` dan tidak digunakan ekstensi `.md`.


## summaries
+ Tutorial telah untuk situs web suatu repositori GitHub telah diselesaikan.
+ Situs web dapat menggunakan banyak halaman yang terhubung dengan halaman utama `index.md`.
+ Folder `css` dan `js` belum berfungsi karena dibuat hanya untuk membiasakan adanya kedua folder tersebut.
+ Pemanfaatan template Jekyll GitHub belum disinggung.
+ Penyisipan berkas citra dapat secara local atau remote.
+ Undordered list telah ditunjukkan.
+ Fitur-fitur Markdown lainnya belum disampaikan.


## notes
1. <a name='r01'></a>viridi, "new github repo site markdown", bugx, 11 Jun 2022, url <https://dudung.github.io/bugx/0080/> [20220612].
2. <a name='r02'></a>Juan Islas, "An introduction to Markdown", Opensource.com, Red Hat, Inc., 12 Sep 2019, url <https://opensource.com/article/19/9/introduction-markdown> [20220612].
3. <a name='r03'></a>Catherine Heath, "Introductory Guide to Markdown for Documentation Writers", Document360, 31 Jan 2020, url <https://document360.com/blog/introductory-guide-to-markdown-for-documentation-writers/> [20220612].
4. <a name='r04'></a>-, "Markdown Introduction", iTwin.js, 2 Feb 2022, url <https://www.itwinjs.org/learning/guidelines/markdown-intro/> [20220612].
5. <a name='r05'></a>omkarchalke, "Introduction to Markdown", GeeksforGeeks, 3 Mar 2022, url <https://www.geeksforgeeks.org/introduction-to-markdown/> [20220612].
6. <a name='r06'></a>Jeff Barry, "Organizing files for static websites", Endless Hybrids, 8 Sep 2020, url <https://endlesshybrids.com/web-development/organizing-files-for-static-websites/> [20220612].
7. <a name='r07'></a>Mayur Nalwala, "Folder Structure for Web Development", Medium, 3 May 2019, url <https://medium.com/@nmayurashok/8c5c83810a5> [20220612].
8. <a name='r08'></a>Thoriq Firdaus, "Building Static Sites with Kit and LESS – Part I", Hongkiat, 1 Apr 2019, url <https://www.hongkiat.com/blog/kit-static-website/> [20220612].
9. <a name='r09'></a>Kilian Batzner, "Directory Structure for Jekyll / GitHub Pages with Gulp and Babel", the Blog, 7 Aug 2017, url <https://theblog.github.io/post/jekyll-github-pages-gulp-babel-directory-structure/> [20220612].
10. <a name='r10'></a>Jake Wiesler️, "Hugo's Directory Structure Explained", jakewiesler.com, 17 Oct 2017, url <https://www.jakewiesler.com/blog/hugo-directory-structure> [20220612].
11. <a name='r11'></a>-, "Moving a file to a new location on GitHub", GitHub Docs, GitHub, Inc., 2022, url <https://docs.github.com/en/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location#moving-a-file-to-a-new-location-on-github> [20220612].
12. <a name='r12'></a>James Gallagher, "Create Folder in GitHub: A Guide", Career Karma, 30 Sep 2020, url <https://careerkarma.com/blog/git-create-folder-in-github/> [20220612].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}