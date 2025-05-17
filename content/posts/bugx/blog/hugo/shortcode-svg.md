---
title: "shortcode svg"
date: 2022-03-22T14:19:00+07:00
lastmod: 2022-03-22T15:32:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['hugo', 'feature', 'shortcode', 'svg', draft']
url: "0013"
draft: false
---
Dengan mengikuti bagaimana menyisipkan berkas svg dalam suatu berkas html [[1](#r01)], dicoba untuk membuat shortcode agar berkas svg dapat disisipkan ke dalam post dengan bentuk seperti untuk youtube [[2](#r02)], dengan mengikuti tutoial singkat membuat shortcode [[3](#r03)].


## version 22-mar-2022
Dengan menggunakan

```
{{</* svg "/static/img/bugx/packed-no-fill-color-grains.svg" "#fig1" "1" "Beberapa butiran berbeda ukuran dan tak berwarna yang saling bersentuhan." */>}}
```

akan diperoleh hasil berikut ini

{{< svg "/static/img/bugx/packed-no-fill-color-grains.svg" "fig1" "1" "Beberapa butiran berbeda ukuran dan tak berwarna yang saling bersentuhan." >}}

dengan kodenya adalah

```html
<!-- 
	svg
	a Hugo shortcode insert a svg file to a post
	Sparisoma Viridi
	https://github.com/dudung
	
	20220322 Start to create this shortcode, test and ok.
	1622 Put the anchor on top of div instead on caption.
-->

<div>
<a name="{{ .Get 1 }}">&nbsp;</a><br>
{{ .Get 0 | readFile | safeHTML }}<br>
Gambar {{ .Get 2}}. {{ .Get 3}}
</div>
```

yang tersimpan dalam berkas `static/shortcode/svg.html`.  

### 2nd test
Test kedua dilakukan dengan ukuran svg `320px x 400 px`.

{{< svg "/static/img/bugx/packed-fill-color-grains.svg" "fig2" "2" "Beberapa butiran berbeda ukuran dan berbagai berwarna yang saling bersentuhan." >}}

Terlihat bahwa ukuran lebar `320px` pada Gambar [2](#fig2) lebih baik dari ukuran lebar `400px` pada Gambar [1](#fig1).


## notes
1. <a name='r01'></a>bep (Bjørn Erik Pedersen), "Embedding (inline) SVG in content / markdown", Hugo Discourse, 20 Jul 2017, url <https://discourse.gohugo.io/t/embedding-inline-svg-in-content-markdown/7511/2?u=dudung> [20220322].
2. <a name='r02'></a>Hugo Authors, "Shortcodes", Hugo, 31 Oct 2021, url <https://gohugo.io/content-management/shortcodes/> [20220322].
3. <a name='r03'></a>Mike Dane, "Shortcode Templates | Hugo - Static Site Generator | Tutorial 22", YouTube, 11.09.2017, url <https://www.youtube.com/watch?v=Eu4zSaKOY4A> [20220322].

{{< citeas >}}
