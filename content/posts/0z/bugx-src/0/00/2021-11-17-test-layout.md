---
layout: butir
authors: [viridi]
title: test layout
permalink: pages/0004
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: physics
tags: ["test", "layout", "docx", "xlsx", "sketch", "standard"]
date: 2021-11-18 09:35:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/0/00/2021-11-17-test-layout.md
twitter_username: 6unpnp
nodes: []
---
Catatan mengenai nilai-nilai elemen HTML, style, JS (bila diperlukan), dan lain-lain yang membantu pos agar terlihat bagus baik pada dekstop maupun mobile akan diarsipkan di sini. Ukuran gambar standar pun akan diletakkan di sini.


## section
Bagian menggunakan style dengan memanfaatkan `h2` sementara judul pos dengan `h1`.

```html
<h1 class="post-title">test layout</h1>

..

<h2 id="section">section</h2>

<p>Bagian menggunakan style dengan memanfaatkan <code class="language-plaintext highlighter-rouge">h2</code> sementara judul pos dengan <code class="language-plaintext highlighter-rouge">h1</code>.</p>
```

Kode di atas hanya sebagai pengingat HTML yang dihasilkan oleh Jekyll.


## negative margin
Mencoba dengan margin bernilai negatif untuk mengatasi margin yang telah diperkenalkan oleh Chrome. Penerapannya dilakukan dengan menggunakan HTML responsif melalui `@media` [[1](#r01)].

```css
@media screen and (max-width: 576px), 
screen and (max-device-width: 480px)
and (orientation: portrait) {
	body {
		word-wrap: break-word;
		margin: -20px -15px;
	}
}
```

Walaupun demikian, terdapat keraguan dalam menggunakan margin dengan nilai negatif [[2](#r02)]. Nilai sebelumnya `-25px -20px`.


## figure
Gambar dibuat dengan Word, Excel, dan tulisan tangan.

### docx
Berikut adalah contoh gambar yang dibuat dengan Word.

![]({{ site.baseurl }}/assets/img/0/00/0004-a.png) \
Gambar <a name="fig1">1</a>. Ukuran-ukuran kotak yang disnapshot dengan zoom 130% menggunakan Word pada Microsoft Office 2007.

Suatu gambar dengan ukuran $6.5 \ {\rm cm} \times 5.5 \ {\rm cm}$ akan menjadi $347 \ {\rm px} \times 273 \ {\rm px}$ saat zoom $130\%$ pada layar berukuran $1366 \ {\rm px} \times 768 \ {\rm px}$, sebagaimana disajikan pada Gambar [1](#fig1) di atas.

![]({{ site.baseurl }}/assets/img/0/00/0004-b1.png) \
![]({{ site.baseurl }}/assets/img/0/00/0004-b2.png) \
![]({{ site.baseurl }}/assets/img/0/00/0004-b3.png) \
Gambar <a name="fig2">2</a>. Lebar $8 \ \rm cm$ setara dengan $396 \ \rm px$ (atas) dan $8.6 \ \rm cm$ setara dengan $392 \ \rm px$ (bawah).

Antara lebar segiempat pada Gambar [2](#fig2) dengan tingginnya kurang cocok karena bukan $\frac18$-nya, belum diketahui mengapa hal ini terjadi. Dapat diperoleh nilai lebar viewport $384 \ \rm px$ dan $24 \ \rm em$, serjta JS pixel-ratio: 1.8750, dengan menggunakan mydevice.io [[3](#r03)] dan ini mungkin sedikit cocok dengan $400 \ \rm px$ dari segiempat di atas, yang berbeda bila dibandingkan dengan informasi mengenai Samsung A12 bahwa resolusi adalah $720 \ {\rm px} \times 1600 \ {\rm px}$ [[4](#r04)]. Ditambahkan segiempat dengan ukuran $10 \ \rm cm$ sebagai pembanding yang baru terlihat jelas saat menggunakan smartphone. Mulai saat ini DOCX $120\%$ $8.6 \ {\rm cm}$.

### xlsx
Dengan menggunakan Excel pun dapat dibuat grafik untuk digunakan seperti pada Gambar [3](#fig3) berikut.

![]({{ site.baseurl }}/assets/img/0/00/0004-c.png) \
Gambar <a name="fig3">3</a>. Gambar berukuran $4.1' \times 4.1'$ yang setara dengan $396  \ {\rm px} \times 396  \ {\rm px}$.

Grafik setelah selesai dibuat, disalin, dan ditempel dengan Paint, yang kemudian disimpan sebagai berkas gambar dengan format PNG. Zoom pada Excel adalah $100\%$.

### sketch
Dengan menggunakan alat tulis dapat dibuat sketsa yang dapat discan atau difoto untuk kemudian diolah sehingga dapat disisipkan pada berkas digital.

![]({{ site.baseurl }}/assets/img/0/00/0004-d1.jpg) \
![]({{ site.baseurl }}/assets/img/0/00/0004-d2.jpg) \
Gambar <a name="fig4">4</a>. Sketsa dengan tangan berukuran $8 \ {\rm cm} \times 8 \ {\rm cm}$ diambil dengan Samsung A1, sedekat mungkin menggunakan aplikasi Office Lens setting standar: original (atas), setelah diolah (bawah).

Resolusi kedua gambar adalah $1320 \ {\rm px} \times 1301 \ {\rm px}$ yang diturunkan menjadi $300 \ {\rm px} \times 295 \ {\rm px}$ agar ukuran hurufnya sesuai dengan yang digunakan pada teks.

Tabel <a name="tab1">1</a>. Beberapa konvensi pembuatan gambar.

Pembuat | Parameter | Pengolah | Proses | Format
:- | :- | :- | :- | :-
Word | 120%, 8.6 cm, <br> Times NR 11 | Paint | Tempel | PNG
Excel | 100% 4.1', <br> Times NR 11  | Paint | Tempel | PNG
Tangan | 8 cm | Smartphone | Foto, Olah | JPG

Dengan demikian untuk berkas DOCX dan XLSX dapat dibuatkan standar agar ukurannya huruf yang digunakan cocok, akan tetapi untuk sketsa dengan tangan masih bergantung pada resolusi kamera dan mode yang digunakan, jarak obyek ke kamera, dan (mungkin) apakah dilakukan zoom atau tidak. Resume mengenai beberapa hal ini telah disajikan dalam Tabel [1](#tab1) di atas.


## other media
Media lain yang mungkin dapat disertakan adalah suara, animasi, video, dan bentuk-bentuk lain yang mungkin salah satunya dapat beinteraksi dengan pengguna. Untuk sementara belum ada standar untuk ini, kecuali bahwa tampilan visualnya setidaknya kurang dari $400 \ \rm px$.


## note
1. <a name="r01"></a>"Using media queries", MDN Web Docs moz://a, 2021, url <https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries> [20211117].
2. <a name="r02"></a>David Thomas, "Answer to 'Is it bad practice to use Negative Margins or Padding in CSS [closed]'", Stack Overflow, 30 Dec 2011 23:14, url <https://stackoverflow.com/a/8684931> [20211117].
3. <a name="r03"></a>Raphaël, Rodolphe, Laurène, Olivier, "My Device", Raphaël, Rodolphe, Laurène, Olivier, 2021, url <https://www.mydevice.io/> [20211117]
4. <a name="r04"></a>Wikipedia contributors, "Samsung Galaxy A12", Wikipedia, The Free Encyclopedia, 29 October 2021, 20:48 UTC, url <https://en.wikipedia.org/w/index.php?oldid=1052551280> [20211117].
