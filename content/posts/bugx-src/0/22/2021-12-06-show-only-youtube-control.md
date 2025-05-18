---
layout: butir
authors: [viridi]
title: show only youtube control
permalink: pages/0222
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
date: 2021-12-06 21:46:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/22/2021-12-06-show-only-youtube-control.md
twitter_username: 6unpnp
nodes: []
---
Dengan menggunakan `player_api`, suatu API YouTube, video yang ditanamkan pada suatu halaman web dapat dikendalikan dengan menggunakan tombol di luar obyek video [[1](#r01)]. Kemudian untuk hanya mengambil informasi audio dapat dirancang tombol kendali dengan `iframe_api`, API YouTube lainnya, yang cukup sederhana tampilannya [[2](#r02)], hanya sayangnya terdapat tautan yang tidak lagi bekerja untuk citra tombol tersebut. Bentuk panel kendali yang dilengkapi dengan tombol play, progress bar, dan pengaturan suara juga tersedia [[3](#r03)], akan tetapi belum berhasil dicoba. Selain itu terdapat cara lain yang menanamkan video dari YouTube dengan tag `iframe` dan kemudian membuat tag parent yang menutupi bagian videonya [[4](#r04)], di mana hal ini merupakan hal yang cerdik, akan tetapi hanya masih kurang bagaimana mengakses progress barnya. Untuk cara yang terakhir ini masih dapat dibantu dengan parameter-parameter yang disediakan oleh pemutar video YouTube yang ditanamkan pada suatu halaman web [[5](#r05)].


## aim
Menanamkan audio yang berisikan narasi dari suatu artikel akan membantu pembaca yang telah lelah membaca dan hanya ingin mendengarkan saja. Adalah suatu pilihan wajar untuk meletakkan berkas audio tersebut pada suatu platform yang banyak digunakan orang seperti YouTube, yang sayangnya berkas audio perlu diubah menjadi berkas video agar dapat diunggah. Dan telah terdapat berbagai informasi untuk melakukan ini [[6](#r06)].

Audio yang dikonversi menjadi video umumnya disisipkan gambar atau animasi hanya sekedar agar tidak terlihat membosankan. Saat ditanamkan dalam suatu halaman web jenis video ini tidak perlu untuk dilihat karena informasi yang diperlukan adalah informasi suaranya, dan bukan informasi gambarnya.


## css trick
Salah satu cara sederhana untuk menyembunyikan bagian video yang berasal dari YouTube adalah dengan menyisipkannya secara biasa menggunakan tag `iframe` akan tetapi diapit dengan tag lain `div` seperti berikut ini.

```html
<div class="player">
   <iframe src="https://www.youtube.com/embed/taKBmcGrplo?autoplay=1&controls=1&showinfo=0&modestbranding=1">
	 </iframe>
</div>
```

Kemudian tampilan kedua tag `iframe` dan `div` di atas diatur dengan menggunakan CSS

```css
<style>
.player {
  width: 390px;
  height: 35px;
  overflow: hidden;
  position: relative;
}

.player iframe {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2000px;
  border: none;
}
</style>
```

sehingga bagian atas yang berupa video dan progress bar menjadi tidak terlihat. Kedua kode di atas disisipkan dalam suatu berkas HTML.

<style>
.player {
  width: 390px;
  height: 35px;
  overflow: hidden;
  position: relative;
}

.player iframe {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2000px;
  border: none;
}
</style>
<div class="player">
   <iframe src="https://www.youtube.com/embed/xaa2kNe7wy0?autoplay=1&controls=1&showinfo=0&modestbranding=1">
	 </iframe>
</div>

Gambar <a name="fig1">1</a>. Hasil kedua kode sebelumnya dalam suatu halaman HTML.

Hasil penanaman suatu video dari YouTube dengan hanya menampilkan tombol kendali diberikan pada Gambar [1](#fig1) dan dapat dijalankan. Untuk bug digunakan ukuran lebar `390px` agar nyaman saat dilihat menggunakan devais mobile, terutama smartphone seperti Samsung Galaxy A12. Rekaman audio melalui video YouTube pada gambar sebelumnya direkam menggunakan XRecorder [[7](#r07)], yang saat in masih belum cukup nyaman digunakan karena perlu bersuara cukup keras agar terekam suaranya. Belum terbiasa dengan hal ini.


## note
1. <a name="r01"></a>Chris Coyier, "Play and Pause Buttons for YouTube and Vimeo Videos (via Their APIs)", CSS-Tricks, 28 Jan 2014, url <https://css-tricks.com/play-button-youtube-and-vimeo-api/> [20211207].
2. <a name="r02"></a>the simple, Stephen Rauch, "Answer to 'How to play audio only from youtube videos using HTML and javascript'", Stack Overflow, 28 Feb 2018, url <https://stackoverflow.com/a/49020767> [20211206].
3. <a name="r03"></a>350D, "Answer to'How to play only the audio of a Youtube video using HTML 5?'", Stack Overflow, 28 Jul 2017, updated 27 Oct 2021, url <https://stackoverflow.com/a/45375023> [20211206].
4. <a name="r04"></a>chojnicki, "Asnwer to 'Keep only progress bar and controls on an embedded YouTube video?'", Stack Overflow, 11 Apr 2020, url <https://stackoverflow.com/a/61163326> [20211206].
5. <a name="r05"></a>"YouTube Embedded Players and Player Parameters", Google Developers, 27 Apr 2021, url <https://developers.google.com/youtube/player_parameters#IFrame_Player_API> [20211206].
6. <a name="r06"></a>Milica Popovic, "Create a video from Audio and Upload It to YouTube", Videobolt, 26 Oct 2021, url https://blog.videobolt.net/post/create-video-from-audio-upload-to-youtube> [20211206].
7. <a name="r07"></a>InShot Inc., "Screen Recorder - XRecorder", version 2.1.1.1, Google Play, 29 Oct 2021, url <https://play.google.com/store/apps/details?id=videoeditor.videorecorder.screenrecorder> [20211206].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug0222?src=hash&amp;ref_src=twsrc%5Etfw">#bug0222</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1467859333438324742?ref_src=twsrc%5Etfw">December 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## &nbsp;
[comment twitter](0220.html) &bull; [mobile browser emulator](0221.html) &bull; [install node.js v16.13.1 x64](0223.html)
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>
