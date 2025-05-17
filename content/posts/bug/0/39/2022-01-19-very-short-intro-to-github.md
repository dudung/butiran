---
layout: post
authors: [viridi]
title: very short intro to github
permalink: pages/0390
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["introduction", "very short", "github"]
date: 2022-01-20 14:21:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/39/2022-01-19-very-short-intro-to-github.md
twitter_username: 6unpnp
nodes: []
youtube: HOfCTPdLcP0
---
GitGub menyatakan bahwa dirinya merupakan tempat di mana para pengembang seluruh dunia membangun piranti lunak bersama-sama, yang saat ini melibatkan 73+ juta pengembang, 4+ juta organisasi, 84% perusahan dalam daftar Fortune 100 [[1](#r01)]. Terkait dengan belajar programing, terdapat pendapat bahwa GitHub bukan tempat para pemula untuk mulai memrogram dikarenakan pemula seharusnya tidak dikuatirkan dulu dengan sintaks dan perintah yang kompleks, tapi lebih mencoba mengerti bagaimana membuat kode, logika dalam menghadapi problem membuat kode, atau mengerti kode orang lain [[2](#r02)]. Walaupun demikian ada yang mengibaratkan bahwa bila GitHub merupakan tempat yang baik untuk belajar membuat kode, maka medan perang merupakan tempat yang baik untuk belajar menggunakan senjata api [[3](#r03)]. Salah satu miskonsepsi utama tentang GitHub adalah anggapan bahwa itu adalah suatu alat pengembang, sebagai bagian dari koding seperti bahasa pemrograman dan compiler, sementara yang lebih tepat bahwa GitHub adalah suatu jejaring sosial di mana penggunanya menyimpan program dan kode proyek, dan membagikannya [[4](#r04)]. Git sendiri adalah piranti lunak pengendali versi yang bersifat bebas dan sumber terbuka, dibuat oleh Linus Torvalds pada tahun 2005, yang semula dikembangkan untuk bekerja pada kernel Linux dengan beberapa pengembang [[5](#r05)]. Github merupakan platform hosting pertama untuk Git yang diluncurkan tahun 2008, kemudian diikuti dengan Gitlab yang merupakan platform hosting repositori berbasis git yang dilucurkan tahun 2011, dan terdapat pula BitBucket sebagai layanan hosting kode sumber daring lainnya yang diluncurkan pada tahun 2008 dan mulai menggunakan git sejak Oktober 2011 [[6](#r06)].


## use in a computational course
GitHub coba digunakan dalam perkuliahan Fisika Komputasi [[7](#r07)] sebagai tempat untuk mengumumkan tugas dan peserta diharapkan melakukan fork untuk memperbarui branchnya. Peserta diberi tahu untuk tidak mengubah baik file maupun folder hasil fork dan hanya diperbolehkan untuk membuat folder baru sesuai dengan NIM-nya dan file-file yang dibutuhkan, `README.md` dan lainnya, dalam folder tersebut. Hal ini bertujuan agar saat akhir kuliah, dalam proses merge tidak terjadi konflik. Dengan ini main tidak akan menerima notifikasi pull request dan pengguna hanya mendapatkan pesan `this branch is n commits ahead of main`(karena hasil pekerjaan mereka) dan atau `this branck is m commits behind main` (karena ada modifikasi main terkait tugas baru).

### forks
Saat ini terdapat 41 peserta kuliah [[8](#r08)] dan dengan dua pengguna rekaan, total fork seharusnya 43. Gambar [1](#fig1) menunjukkan bahwa masih ada seorang yang belum melakukan fork pada repo yang diminta [[9](#r09)].

[![]({{ site.baseurl }}/assets/img/0/39/0390-a.png)](https://github.com/dudung/fi3201-01-2021-2/network/members) \
Gambar <a name='fig1'>1</a>. Pengguna yang telah melakukan fork pada repo `dudung/fi3201-01-2021-2` di GitHub.

### current assigments
Sampai saat ini terdapat tiga tugas yang telah diberikan

[![]({{ site.baseurl }}/assets/img/0/39/0390-b.png)](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments) \
Gambar <a name='fig2'>2</a>. Tugas pada repo `dudung/fi3201-01-2021-2` di GitHub per 20 Jan 2022 1416.

[`20-jan-22`](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments/03) Two nested for loops with NIM variable. \
[`19-jan-22`](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments/02) Compile a simple Python code using online compiler, e.g. OneCompile. \
[`18-jan-22`](https://github.com/dudung/fi3201-01-2021-2/tree/main/assignments/01) Make a `README.md` file and write name and student identification number in it.


## note
1. <a name='r01'></a>"Where the world builds software", Github, url <https://github.com/> [20220119].
2. <a name='r02'></a>Kaushal Kumar, "Answer to 'Is Github the best place for a beginner to start programming?'", Quora, 15 Apr 2014, url <https://qr.ae/pG3fYU> [20220119].
3. <a name='r03'></a>
Mohammed Hamza, "Answer to 'Is GitHub a good platform to learn for a novice programmer?'", Quora, 27 Apr 2017, url <https://qr.ae/pG3fAg> [20220119].
4. <a name='r04'></a>Lauren Orsini, "GitHub For Beginners: Don’t Get Scared, Get Started", ReadWrite, 30 Sep 2013, url <https://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/> [20220119].
5. <a name='r05'></a>Thanoshan MV, "The beginner’s guide to Git & GitHub", freeCodeCamp, 6 Nov 2019, url <https://www.freecodecamp.org/news/the-beginners-guide-to-git-github/> [20220119].
6. <a name='r06'></a>Aswin KUmar KP, "Github vs Gitlab vs Bitbucket", Disbug, 11 Jan 2022, url <https://disbug.io/en/blog/github-vs-gitlab-vs-bitbucket> [20220119].
7. <a name='r07'></a>"Kurikulum dan Silabus Program Studi Sarjana Fisika", Physics, Faculty of Mathematics and Natural Sciences, Institut Teknologi Bandung, 2021, url https://fi.itb.ac.id/kurikulum-dan-silabus-program-studi-sarjana-fisika/ [20220120].
8. <a name='r08'></a>"FI3201 Fisika Kommputasi", Daftar Pertemuan Kuliah, SIX, ITB, 2022, url <https://akademik.itb.ac.id/app/K/ro:id+2021-2/kelas/2021217995/pertemuan/list>
9. <a name='r09'></a>dudung, "Assignment for FI3201 Computational Physics Class 01 Semester 2 Year 2021/2022", GitHub, 2022, url <https://github.com/dudung/fi3201-01-2021-2> [20220120].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
