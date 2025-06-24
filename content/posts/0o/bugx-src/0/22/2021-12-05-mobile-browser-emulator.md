---
layout: butir
authors: [viridi]
title: mobile browser emulator
permalink: pages/0221
mathjax: false
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["mobile", "emulator", "browser"]
date: 2021-12-05 21:14:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/22/2021-12-05-mobile-browser-emulator.md
twitter_username: 6unpnp
nodes: []
---
Dalam pengembangannya aplikas untuk devais mobile perlu dicoba pada emulator, simulator, dan devais sebenarnya [[1](#r01)]. Untuk emulator dapat menggunakan yang telah tersedia pada beberapa penjelajah internet [[2](#r02)] ataupun mengintstalnya sebagai ekstensi Google Chrome [[3](#r03)]. 


## screenshot
Devais Samsung Galaxy A12 [[4](#r04)] digunakan untuk uji coba tata letak suatu halaman web yang hasilnya pada emulator dan devais sebenarnya diberikan pada Gambar [1](#fig1) berikut ini.

<span style="border:2px solid #777; border-radius: 20px; display:inline-block; padding-top:16px; padding-bottom:10px;"><img src="{{ site.baseurl }}/assets/img/0/22/0221-a-galaxy_a12_screenshot.jpg" /></span> | <span style="border:2px solid #777; border-radius: 20px; display:inline-block; padding-top:15px; padding-bottom:10px;"><img src="{{ site.baseurl }}/assets/img/0/22/0221-b-chrome_360x400_localhost.png" /></span> | ![]({{ site.baseurl }}/assets/img/0/22/0221-c-galaxy_s20_simulator.png)
:-: | :-: | :-:
(a) | (b) | (c)

Gambar <a name="fig1">1</a>. Screenshot `bug` menggunakan: (a) devais Samsung Galaxy A12, (b) Google Chrome mobile browser emulator for 360&times;400 screen size, dan (c) Mobile simulator for Samsung Galaxy S20.

Pada dua gambar pertama pada Gambar [1](#fig1) bingkai seperti wadah smartphone dibuat dengan menggunakan sudut yang melengkung (rounded corners), sedangkan pada gambar terakhir memang bersumber dari aplikasinya [[5](#r05)]. Oleh karena itu ada tambahan ruang di atas dan di bawah untuk kedua gambar pertama karena berkas PNG yang tidak melengkung melewati elemen `span` (dengan opsi `display:inline-block`) [[6](#r06)] sehingga perlu ditambahkan `padding` di atas dan di bawah.


## exer
1. Apa yang terjadi pada Gambar [1](#fig1) (a) dan (b) bila tidak digunakan opsi `padding` pada stylenya?
2. Apakah masalah yang segera terlihat pada tampilan halaman web yang dibuat?


## note
1. <a name="r01"></a>Sreevatsa Sreerangaraju, "Emulation vs. Simulation", Perfecto, 29 May 2020, url <https://www.perfecto.io/blog/emulation-vs-simulation> [20211205].
2. <a name="r02"></a>Ciprian Adrian Rusen, "How to use the mobile browser emulator in Chrome, Firefox, Edge, and Opera", Digital Citizen, 25 Feb 2021, 
3. <a name="r03"></a>François Duprat, "Mobile simulator - responsive testing tool", Mobile First, Chrome Web Store, url <https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk> [20211205].
4. <a name="r04"></a>Wikipedia contributors, "Samsung Galaxy A12", Wikipedia, The Free Encyclopedia, 2 December 2021, 04:41 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1058216549> [20211205].
5. <a name="r05"></a>Refsnes Data, "CSS Rounded Corners", W3Schools, url <https://www.w3schools.com/css/css3_borders.asp> [20211205].
6. <a name="r06"></a>casraf, "Answer to 'How to set height property for SPAN'", 26 Feb 2010, edited 12 Aug 2015, Stack Overflow, url <https://stackoverflow.com/a/2344014> [20211205].

### comments
<blockquote class="twitter-tweet" data-lang="en" data-theme="light" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0221?src=hash&amp;ref_src=twsrc%5Etfw">#bug0221</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1467496976493137920?ref_src=twsrc%5Etfw">December 5, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## &nbsp;
[comment twitter](0220.html) &bull; [show only youtube control](0222.html) &bull; [install node.js v16.13.1 x64](0223.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
1) gambar screenshot akan memotong bingkai dengan keempat sudut melengkung; &nbsp;
2) simbol di sebelah kiri kata `bug` terlihat berbeda pada devais sebenarnya dibanding dengan pada emulator; &nbsp;
</ans>
