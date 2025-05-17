---
layout: butir
authors: [viridi]
title: install node.js v16.13.1 x64
permalink: pages/0223
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["node.js", "install", "cli", "hello world", "for"]
date: 2021-12-16 12:58:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/22/2021-12-16-install-node-js-v16.md
twitter_username: 6unpnp
nodes: []
---
Terdapat suatu email dengan salah satu bagiannya menceritakan secara singkat CLI Netlify [[1](#r01)], yang kemudian mengarahkan pada tulisan blog mengenai hal itu [[2](#r02)]. Tulisan tersebut selanjutnya menyediakan tautan untuk lebih menjelaskan bagaimana mempublikasi perlengkapan suatu situs [[3](#r03)] dan disertai informasi bagaimana memulai berkenalan dengan CLI untuk Netlify [[4](#r04)].


## check version
Pada sistem operasi Windows dengan spesifikasi edisi Windows 10 Home, versi 20H2, build 19042.1348, tipe sistem 64-bit operating system, x64-based processor, untuk melihat versi Node.js yang telah terinstal dapat diakses menggunakan Start Menu dan mencari pada bagian huruf N.

![]({{ site.baseurl }}/assets/img/0/22/0223-a1.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-a2.png) \
Gambar <a name="fig1">1</a>. Icon Node.js pada Start Menu Windows 10 bila telah terinstal (atas) dan command prompt berisikan versi Node.js yang terinstal (bawah).

Saat diperiksa diperoleh Node.js versi 10.1.0 (x64) telah terinstal seperti ditunjukkan oleh Gambar [1](fig1). Yang dibutuhkan untuk CLI Netlify adalah 12.20.0, 14.14.0, 16.0.0 atau lebih tinggi [[4](#r04)].


## latest version
Versi terakhir Node.js untuk saat ini dapat diunduh dari halaman Downloadnya, atau tautan langsungnya untuk versi 16.13.1 [[5](#r05)]. Untuk sistem operasi Windows disarankan melakukan instalasi ulang Node.js versi terakhir [[6](#r06)]. Instalasi ulang terdiri dari dua langkah, yaitu menghapus instalasi yang ada dan instalasi versi terbaru.


## uninstall
Untuk menghapus instalasi versi yang telah ada dapat digunakan icon Uninstall Node.js di dalam folder Node.js pada Start Menu Windows 10.

![]({{ site.baseurl }}/assets/img/0/22/0223-b1.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-b2.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-b3.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-b4.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-b5.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-b6.png) \
Gambar <a name="fig2">2</a>. Langkah-langkah untuk menghapus instalasi Node.js yang ada pada sistem operasi Windows 10.

Setelah langkah-langkah pada Gambar [2](#fig2) dilakukan maka akan diperoleh keadaan berikut pada Start Menu Windows 10.

![]({{ site.baseurl }}/assets/img/0/22/0223-c1.png) \
Gambar <a name="fig3">3</a>. Folder untuk Note.js telah hilang dari Start Menu.

Keadaan pada Gambar [3](#fig3) menunjukkan bahwa folder Node.js, yang semula ada pada Gambar [1](#fig1) (atas), telah hilang. Hal ini menunjukkan bahwa proses penghapusan instalasi telah berhasil.


## install
Versi terkini yang diperoleh saat ini, per 16 Desember 2021, adalah versi 16.13.1 (x64) untuk sistem operasi yang digunakan. Telah terdapat berkas .msi beberapa versi Node.js sepert ditunjukkan pada gambar berikut. Pilih versi terkininya dan klik untuk memulai proses instalasi.

![]({{ site.baseurl }}/assets/img/0/22/0223-d1.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d2.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d3.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d4.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d5.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d6.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d7.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d8.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-d9.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-dA.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-dB.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-dC.png) \
Gambar <a name="fig4">4</a>. Langkah-langkah untuk instalasi Node.js versi terbaru pada sistem operasi Windows 10.

Selelah langkah-langkah instalasi dilakukan, dapat digunakan cara seperti pada Gambar [1](#fig1) untuk memastikan bahwa Node.js telah terinstal dan versinya cocok. Gambar [5](#fig5) memperlihatkan hal ini.

![]({{ site.baseurl }}/assets/img/0/22/0223-e1.png) \
![]({{ site.baseurl }}/assets/img/0/22/0223-e2.png) \
Gambar <a name="fig5">5</a>. Melihat versi Node.js yang baru terinstal.

Perhatikan bahwa terdapat kata Newt pada folder Node.js yang menandakan bahwa aplikasi ini baru terinstal dan belum diakses.

### compiler
Pada salah langkah-langkah instalasi terdapat konfirmasi untuk menginstal Python dan C++ [[7](#r07)], yang dibutuhkan untuk kompilasi Node.js dari kode sumbernya [[8](#r08)]. Untuk instalasi yang dilakukan saat ini kedua compiler tidak ikut diinstal karena dibutuhkan hanya untuk beberapa jenis paket Node.js [[9](#r09)] dan diharapkan paket yang tersedia telah mencukupi.

> [&nbsp;&nbsp;] Automatically install the necessary tools. Note that this will also install Chocolatey. The script will pop-up in a new window after installation completes.

Untuk menghindari instalasi Phyton dan C++ jangan centang opsi di atas.


## first program
Program untuk menampilkan kalimat "Hello World" hanya memerlukan satu baris perintah dalam JavaScript, yang pengetahuan dasar mengenainya diperlukan untuk memulai menggunakan Node.js [[11](#r11)]. Ditambahkan dengan contoh mengenai `for .. of` akan memberikan contoh berikut ini

```javascript
/*
	hello.js
	Sparisoma Viridi | https://github.com/dudung/bug
	
	Execute: node hello.js
	
	References
	1. Stack Abuse, "How To Write and Run Your First Program in Node.js", DigitalOcean Community, 14 Aug 2019, url <https://www.digitalocean.com/community/tutorials/how-to-write-and-run-your-first-program-in-node-js> [20211216].
	2. Marcus Pöhls, "Loops", Future Studio, 12 Sep 2019, url <https://futurestud.io/tutorials/node-js-for-of-vs-for-in-loops> [20211216].
*/


// example #1 -- [1]
console.log("Hello World");


// example #2 -- [2]

const types = [ 'object', 'array', 'string', 'integer', 'float', 'boolean' ]

for (const type of types) {  
  console.log(`A JavaScript type is: ${type}`)
}
```

yang memberikan hasil

```
L:\home\bug\src\js>node hello.js
Hello World
A JavaScript type is: object
A JavaScript type is: array
A JavaScript type is: string
A JavaScript type is: integer
A JavaScript type is: float
A JavaScript type is: boolean

L:\home\bug\src\js>
```

pada command line. Terdapat perbedaan penggunaan `''`, `""`, maupun <code>``</code> pada kode di atas, dengan yang terakhir adalah fitur string templating, di mana sebaiknya ketiganya digunakan secara konsisten untuk hal yang berbeda [[12](#r12)].

## exer
1. Apakah salah satu panduan untuk membedakan penggunaan `''`, `""`, dan <code>``</code>?
2. Apakah hasilnya sama bila kode untuk `hello.js` pada baris kedua dari akhir ditulis sebagai <code>console.log(`A JavaScript type is: ${type}`)</code>? Apakah hasilnya?


## note
1. <a name="r01"></a>Netlify Team, "Fly with the Netlify CLI", in email with title "Your '21 dev stats, fly with the CLI, dusty domains for charity — Netlify December newsletter" through Gmail, 16 Dec 2021 02:17, url <no-reply@netlify.com> [20211216].
2. <a name="r02"></a>Melanie Crissey, "Test, debug, or live stream your local development environment with Netlify CLI", Netlify Blog, 14 Dec 2021, url <https://www.netlify.com/blog/2021/12/14/test-debug-or-live-stream-your-local-development-environment-with-netlify-cli/> [20211216].
3. <a name="r03"></a>Phil Hawksworth, "Publish your site assets with the Netlify CLI", Netlify Blog, 1 Dec 2021, url <https://www.netlify.com/blog/2021/12/01/publish-your-site-assets-with-the-netlify-cli/> [20211216].
4. <a name="r04"></a>"Get started with Netlify CLI", Netlify Docs, 2021, url <https://docs.netlify.com/cli/get-started/> [20211216].
5. <a name="r05"></a>"Downloads: Windows Installer (.msi) 64 bit, Latest LTS Version: 16.13.1 (includes npm 8.1.2)", Node.js, url <https://nodejs.org/dist/v16.13.1/node-v16.13.1-x64.msi> [20211216].
6. <a name="r06"></a>Eldar Djafarov, "Answer to 'Upgrading Node.js to latest version'", Stack Overflow, 9 Apr 2012, edit by m42 on 6 Sep 2021, url <https://stackoverflow.com/a/10076029> [20211216].
7. <a name="r07"></a>Jduv, "Answer to 'Node.js - Do I really need Visual Studio ? And Python 2.X or 3.X?'", Stack Overflow, 14 Sep 2012, url <https://stackoverflow.com/a/12426368> [20211216].
8. <a name="r08"></a>vkurchatkin, "Answer to 'Why does node.js need python'", Stack Overflow, 17 May 2014, url <https://stackoverflow.com/a/23710101> [20211216].
9. <a name="r09"></a>Karl-Johan Sjögren, "Answer to 'Why do I need Visual Studio and C++ to install node modules'", Stack Overflow, 28 Sep 2021, url <https://stackoverflow.com/a/69361043> [20211216].
10. <a name="r10"></a>Stack Abuse, "How To Write and Run Your First Program in Node.js", DigitalOcean Community, 14 Aug 2019, url <https://www.digitalocean.com/community/tutorials/how-to-write-and-run-your-first-program-in-node-js> [20211216].
11. <a name="r11"></a>Marcus Pöhls, "Loops", Future Studio, 12 Sep 2019, url <https://futurestud.io/tutorials/node-js-for-of-vs-for-in-loops> [20211216].
12. <a name="r12"></a>Niles Tanner, "Answer to 'Back-tick vs single quote in js'", Stack Overflow, 2 Nov 2017, updated 24 Dec 2020, url <https://stackoverflow.com/a/47067353> [20211216].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0223?src=hash&amp;ref_src=twsrc%5Etfw">#bug0223</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1471358190713335809?ref_src=twsrc%5Etfw">December 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}

## &nbsp;
[comment twitter](0220.html) &bull; [mobile browser emulator](0221.html) &bull; [show only youtube control](0222.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) `''` untuk string, <code>``</code> untuk templat string, `""` untuk HTML dan JSON; &nbsp;
2) tidak, hasilnya adalah string `A JavaScript type is: ${type}` sebanyak enam baris; &nbsp;
</ans>
