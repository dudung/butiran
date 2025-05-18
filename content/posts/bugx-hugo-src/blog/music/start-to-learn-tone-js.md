---
title: "start to learn tone.js"
date: 2022-04-15T17:24:01+07:00
lastmod: 2022-04-16T13:37:00+07:00
author: viridi
mathjax: false
mermaid: true
chartjs: false
tags: ['javascript', 'tone.js', 'learn', 'music', 'draft']
url: "0059"
draft: false
---
Web Audio API merupakan rekomendasi W3C yang menjanjikan untuk menciptakan musik pada web, yang bukannya tanpa tantangan dan batasan, untuk itu Tone.js berupaya menyediakan kerangka kerja yang akrab bagi musisi dan programer audio untuk membuat aplikasi audio berbasis web [[1](#r01)]. Tone.js membuat bekerja dengan We Audio API menjadi lebih mudah karena ia mengambil alih banyak pekerjaan membosankan [[2](#r02)] sehingga dapat lebih fokus ke hal yang lebih penting. Terutama bila telah lama tidak membuat lagu dan ingin kembali membuat suatu komposisi, dalam rangka mengikuti hasrat setelah suatu jeda yang panjang, membuat musik dengan kode membawa pada keputusan mepelajari Tone.js sebagai suatu langkah pertama [[3](#r03)]. Terdapat musisi yang membagi pengetahuannya mengenai teori musik dengan Tone.js [[4](#r04)] yang akan dapat sangat membantu. Tone.js merupakan suatu framework audio web untuk musik interaktif dalam penjelajah internet, yang saat ini telah mencapai rilis kelima belas dengan versi terakhirnya adalah 14.7.39 pada 29 Juli 2020 [[5](#r05)]. Dengan demikian tidak lagi harus memilih antara melakukan coding atau memproduksi musik, keduanya bisa sejalan [[6](#r06)]. Bila tidak ingin menggunakan node.js, dapat digunakan CDN Tone seperti untuk versi 14.7.77 [[7](#r07)] atau versi 14.8.38 [[8](#r08)]. Di sini akan disajikan langkah-langkah mempelajari Tone.js mengikuti suatu tulisan yang cukup baik untuk pemula [[6](#r06)].


## html
Struktur berkas HTML yang digunakan adalah sebagai berikut [[9](#r09)]

```html
<!DOCTYPE html>
<html>
<head>
<title>hello</title>
</head>
<body>
<!-- beg --->



<!-- end  --->
</body>
</html>
```

dengan bagian JavaScript akan diletakkan antara `<!-- beg --->` dan `<!-- end --->`. Kedua baris tersebut hanya merupakan komentar dan keduanya dapat tidak digunakan. Selanjutnya hanya akan disajikan contoh penerapan di antara kedua baris tersebut dan tidak mengulang meenyampaikan struktur berkas HTML-nya, serta berkas eksternal JavaScript yang digunakan.


## example
Mengikuti suatu panduan [[6](#r06)] digunakan

```html
<script src="https://unpkg.com/tone"></script>
<button id="play-button">Play/Pause</button>
<script src="hello_tone.js"></script>
```

pada berkas HTML dan isi berkas `hello_tone.js` adalah

```js
const synth = new Tone.Synth().toMaster()
synth.triggerAttackRelease('C4', '8n')

document.getElementById("play-button").addEventListener("click", function() {
  if (Tone.Transport.state !== 'started') {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
```

yang tidak bekerja dan menghasilkan pesan kesalahan dan peringatan pada JS console (Ctrl Shift J pada Google Chrome) sebagai berikut

```
* Tone.js v14.7.77
The AudioContext was not allowed to start. It must be resumed
  (or created) after a user gesture on the page. <URL>
[Deprecation] The ScriptProcessorNode is deprecated. Use
  AudioWorkletNode instead. (https://bit.ly/audio-worklet)
toMaster() has been renamed toDestination()
The AudioContext is "suspended". Invoke Tone.start() from a user
  action to start the audio.
The AudioContext is "suspended". Invoke Tone.start() from a user
  action to start the audio.
DevTools failed to load source map: Could not load content for
  https://unpkg.com/Tone.js.map: HTTP error: status code 404,
  net::ERR_HTTP_RESPONSE_CODE_FAILURE
```

Baris kedua merupakan error sedangkan lainnya adalah warning. Kemudian penekanan tomobol 'Play/Pause' hanya menambah satu pesan baru

```
The AudioContext is "suspended". Invoke Tone.start() from a user
  action to start the audio.
```

Perlu dilakukan perbaikan.


## 1st-modif
Dilakukan modifikasi pada berkas HTML

```html
<script src="https://unpkg.com/tone"></script>
<button id="play-button">Play</button>
<script src="hello_tone.js"></script>
```

dan berkas `hello_tone.js` menjadi

```js
document.getElementById("play-button")
  .addEventListener("click", click);

function click() {
  if(event.target.innerHTML == "Play") {
    event.target.innerHTML = "Stop"
    
    const synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease('C4', '8n')
    
    Tone.Transport.start();
  } else {
    event.target.innerHTML = "Play";
    
    Tone.Transport.stop();
  }
}
```

yang menghasilkan hanya warning

```
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
[Deprecation] The ScriptProcessorNode is deprecated. Use
  AudioWorkletNode instead. (https://bit.ly/audio-worklet)
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
DevTools failed to load source map: Could not load content for
  https://unpkg.com/Tone.js.map: HTTP error: status code 404,
  net::ERR_HTTP_RESPONSE_CODE_FAILURE
```

dan setelah tombok ditekan dihasilkan

```
toMaster() has been renamed toDestination()
```

yang merupakan tambahan warning. Setelah petunjuk pada warning terakhir diikuti, warning ini pun tidak lagi muncul.


## 2nd-modif
Modifikasi lebih lanjut dilakukan dengan mengubah CDN untuk Tone.js pada berkas HTML

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.38/Tone.js" integrity="sha512-06fghCFOHDF8cucqI4jKWIO0pCo+5F9upQbLxCEzAHruVuQ9rHQaKK4V9k0sZg6ghi0PqRTA81/jJDzFcKwBfw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<button id="play-button">Play</button>
<script src="hello_tone.js"></script>
```
dan tidak ada pengubahan berkas 'hello_tone.js'. Hanya tiga warning yang kemudian diperoleh.

```
                                     audio-context-constructor.js:11
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
                              test-audio-scheduled-source-node-start
                            -method-negative-parameters-support.js:4
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
                              constant-source-node-constructor.js:42
The AudioContext was not allowed to start. It must be resumed (or
  created) after a user gesture on the page. https://goo.gl/7K7WLu
```

Untuk CDN yang digunakan pada modifikasi ini [[8](#r08)] terdapat pula informasi berkas JS yang menyebabkan warning tersebut. Pesan kesalahan di atas telah disalin, dimodifikasi, lalu ditempel untuk memudahkan membacanya.

Sampai saat ini ketiga pesan peringatan atau warning belum dapat dihilangkan.


## one octave
Dengan menggunakan delapan buat tombol dan pustaka untuk keyboard shortcut [[10](#r10)] dapat dibuat alat musik sederhana. Isi berkas HTML adalah


```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.38/Tone.js" integrity="sha512-06fghCFOHDF8cucqI4jKWIO0pCo+5F9upQbLxCEzAHruVuQ9rHQaKK4V9k0sZg6ghi0PqRTA81/jJDzFcKwBfw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098"></script>

<button id="C4">C</button>
<button id="D4">D</button>
<button id="E4">E</button>
<button id="F4">F</button>
<button id="G4">G</button>
<button id="A4">A</button>
<button id="B4">G</button>
<button id="C5">C</button>

<script src="hello_tone_one_octave.js"></script>
```

dan `hello_tone_one_octave.js` adalah

```js
var notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']

for(var i = 0; i < notes.length; i++) {
  document.getElementById(notes[i])
  .addEventListener("click", click);
}

function click() {
  const synth = new Tone.Synth().toDestination()
  synth.triggerAttackRelease(event.target.id, '32n')
  
  Tone.Transport.start();
  Tone.Transport.stop();
}


function sound(note) {
  const synth = new Tone.Synth().toDestination()
  synth.triggerAttackRelease(note, '32n')
  
  Tone.Transport.start();
  Tone.Transport.stop();
}

Mousetrap.bind('a', function() {sound('C4')});
Mousetrap.bind('s', function() {sound('D4')});
Mousetrap.bind('d', function() {sound('E4')});
Mousetrap.bind('f', function() {sound('F4')});
Mousetrap.bind('g', function() {sound('G4')});
Mousetrap.bind('h', function() {sound('A4')});
Mousetrap.bind('j', function() {sound('B4')});
Mousetrap.bind('k', function() {sound('C5')});
```

yang akan memberikan hasil seperti pada gambar berikut.

<div style="text-align: center;">
<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.38/Tone.js" integrity="sha512-06fghCFOHDF8cucqI4jKWIO0pCo+5F9upQbLxCEzAHruVuQ9rHQaKK4V9k0sZg6ghi0PqRTA81/jJDzFcKwBfw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098"></script>

<button id="C4">C</button>
<button id="D4">D</button>
<button id="E4">E</button>
<button id="F4">F</button>
<button id="G4">G</button>
<button id="A4">A</button>
<button id="B4">G</button>
<button id="C5">C</button>

<script>
var notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']

for(var i = 0; i < notes.length; i++) {
  document.getElementById(notes[i])
  .addEventListener("click", click);
}

function click() {
  const synth = new Tone.Synth().toDestination()
  synth.triggerAttackRelease(event.target.id, '32n')
  
  Tone.Transport.start();
  Tone.Transport.stop();
}


function sound(note) {
  const synth = new Tone.Synth().toDestination()
  synth.triggerAttackRelease(note, '32n')
  
  Tone.Transport.start();
  Tone.Transport.stop();
}

Mousetrap.bind('a', function() {sound('C4')});
Mousetrap.bind('s', function() {sound('D4')});
Mousetrap.bind('d', function() {sound('E4')});
Mousetrap.bind('f', function() {sound('F4')});
Mousetrap.bind('g', function() {sound('G4')});
Mousetrap.bind('h', function() {sound('A4')});
Mousetrap.bind('j', function() {sound('B4')});
Mousetrap.bind('k', function() {sound('C5')});
</script>
</div>

Gambar <a name='fig1'>1</a>. Tombol-tombol dalam satu oktaf yang dapat diklik dengan tetikus atau menggunakan tombol keyboard `a`, `s`, `d`, `f`, `g`, `h`, `j`, dan `k`.

Program yang dibuat sangat kasar dan mungkin akan memakan banyak memori karena terus menerus membuat `Tone.Synth().toDestination()` sehingga tidak ditujukan untuk pemanfaatan lebih lanjut, melainkan hanya untuk ilustrasi pembelajaran. Bila terdapat sejumlah tombol ditekan pada saat bersamaan, akan dibangkitkan sejumlah nada sesuai dengan peran masing-masing tombol.


## notes
1. <a name='r01'></a>Dylan Schiemann, "Tone.js Interactive Music Web Framework", InfoQ, 6 Mar 2020, url <https://www.infoq.com/news/2020/03/tonejs-music-web-framework/> [20220415].
2. <a name='r02'></a>Jim Bennett, "Tutorial: Let’s Make Music with JavaScript and Tone.js", dev@red, Medium, 24 Oct 2018, url <https://medium.com/dev-red/tutorial-lets-make-music-with-javascript-and-tone-js-f6ac39d95b8c> [20220415].
3. <a name='r03'></a>Ash Freels, "Creating a remix using Tone.js", DEV Community, 3 Jun 2021, url <https://dev.to/codefatale/creating-a-remix-using-tone-js-1kdg> [2022<wbr>0415].
4. <a name='r04'></a>Mike Sult, "Tone.js", GuitraLand, 28 Jun 2019, url <https://www.guitarland.com/MusicTheoryWithToneJS/TonejsSetup.html> [20220415].
5. <a name='r05'></a>Yotam Mann, "Tone.js", GitHub, 1 Mar 2022, url <https://tonejs.github.io/> [20220415]. 
6. <a name='r06'></a>Ričardas Faturovas, "Coding or music production? Why choose?", Devbridge, 7 Sep 2020, url <https://www.devbridge.com/articles/tonejs-coding-music-production-guide/> [20220415].
7. <a name='r07'></a>"Tone 14.7.77", url <https://unpkg.com/tone@14.7.77/build/Tone.js> [2022<wbr>0415].
8. <a name='r08'></a>"Tone 14.8.38", cdnjs, url <https://cdnjs.com/libraries/tone/14.8.38> [202204<wbr>15].
9. <a name='r09'></a>-, "HTML <!DOCTYPE> Declaration", W3Schools, Refsnes Data, 2022, url <https://www.w3schools.com/tags/tag_doctype.asp> [20220416].
10. <a name='r10'></a>Craig Campbell, "mousetrap v1.6.5", 2017, url <https://craig.is/killing/mice> [20220416].

{{< citeas >}}
