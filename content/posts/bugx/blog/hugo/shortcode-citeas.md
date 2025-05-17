---
title: "shortcode citeas"
date: 2022-03-21T21:33:00+07:00
lastmod: 2022-03-22T06:17:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['hugo', 'feature', 'shortcode', draft']
url: "0010"
draft: false
---
Suatu shortcode bernama citeas telah berhasil dibuat mengikuti petunjuk pembuatan shortcode [[1](#r01)], yang lebih dimengerti setelah menonton videonya [[2](#r02)].


## version 21-mar-2022
Hanya satu penulis yang dapat dirujuk. Hasilnya adalah  

> Cite as: viridi, "shortcode citeas", bugx, 21 Mar 2022, url http://localhost:1313/bugx/0010 [20220321].  

yang dilengkapi tautan pada author dan artikelnya.

```html
<!-- 
	citeas 
	a Hugo shortcode to put how-to-cite at the bottom of a post
	Sparisoma Viridi
	https://github.com/dudung
	
	20220321 It can only read one author, link to author nickname and page, border and background.
-->
<div style="border:1px #eee solid; padding:6px 10px; background: #fafafa;">
Cite as: <a href= "{{ .Page.Site.BaseURL }}author/{{ .Page.Params.author }}">{{ .Page.Params.author }}</a>, "{{ .Page.Params.title }}", {{ .Page.Site.Title }}, {{ .Page.Params.lastmod.Format "2 Jan 2006" }}, url <a href= "{{ .Page.Site.BaseURL }}{{ .Page.Params.url }}">{{ .Page.Site.BaseURL }}{{ .Page.Params.url }}</a> [{{ now.Format "20060102"}}].
</div>
```

### version 22-mar-2022
Ubah sudut kotak dan warnanya menjadi

```css
style="
  border-radius: 8px;
  border:1px #f0f0f0 solid;
  padding:6px 10px;
  background: #fcfcfc;
"
```



## notes
1. <a name='r01'></a>Hugo Authors, "Create Your Own Shortcodes", Hugo, 12 Oct 2021, url <https://gohugo.io/templates/shortcode-templates/> [20220321].
2. <a name='r02'></a>Mike Dane, "Shortcode Templates | Hugo - Static Site Generator | Tutorial 22", YouTube, 11 Sep 2017, url <https://www.youtube.com/watch?v=Eu4zSaKOY4A> [20220321].

{{< citeas >}}
