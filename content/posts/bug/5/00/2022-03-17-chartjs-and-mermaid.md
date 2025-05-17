---
layout: post
authors: [viridi]
title: chart.js and mermaid
permalink: pages/5001
mathjax: true
chartjs: true
mermaid: true
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: javascript
tags: ["visualization", "development"]
date: 2022-03-17 17:29:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/5/00/2022-03-17-chartjs-and-mermaid.md
twitter_username: 6unpnp
nodes: []
youtube:
---
Kembali meninjau [Chart.js](https://www.chartjs.org/) dan baru terinformasikan mengenai [Mermaid](https://mermaid-js.github.io/mermaid/#/). CDN untuk Chart.js diperbarui [[1](#r01)] dan untuk Mermaid disisipkan [[2](#r02)]. Catatan ini bersifat singkat dan untuk tanda dalam waktu pengembangan saja.


## cdn
Untuk Chart.js digunakan

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js" integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

dan untuk mermaid

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.14.0/mermaid.min.js" integrity="sha512-vLumCjg7NKEQKGM+xAgBYTvQ90DVu6Eo7vS1T/iPf2feNLcrpGxvumuUUmE3CPiCUPgviyKbtpWGDbhnVnmJxg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

yang akan diletakkan pada berkas `chartjs.html` dan`mermaid.html` dalam folder `_includes` pada [Jekyll](https://jekyllrb.com/).


## test 1
Sebuah grafik xy dibuat sebagai ilustrasi untuk memeriksa apakah Chart.js telah berhasil disisipkan.

<canvas id="myChart" style="width:100%;max-width:390px"></canvas>

<script>
var xyValues1 = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];
var xyValues2 = [
  {x:50, y:17},
  {x:60, y:18},
  {x:70, y:18},
  {x:80, y:19},
  {x:90, y:19},
  {x:100, y:19},
  {x:110, y:20},
  {x:120, y:21},
  {x:130, y:24},
  {x:140, y:24},
  {x:150, y:25}
];

new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [
		{
			pointStyle: 'triangle',
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      backgroundColor: "rgba(255,99,132,0.4)",
      data: xyValues1,
			label: 'T1',
			showLine: true
    },
		{
      pointRadius: 4,
      pointBackgroundColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(132,99,255,0.4)",
      data: xyValues2,
			label: 'T2'
    },
	
		]
  },
  options: {
    scales: {
      x: {
				min: 10, max: 200, type: 'linear', position: 'top',
				title: {color: 'blue', display: true, text: 'x'}
			},
      y: {
				min: 2, max: 26,
				title: {color: 'blue', display: true, text: 'y'}
			},
    },
		plugins: {
			legend: {
				display: true,
				position: 'chartArea',
				textAlign: 'right',
			},
		},
  }
});
</script>

Gambar <a name='fig1'>1</a>. Contoh penggunaan Chart.js untuk menampilkan data.

Gambar [1](#fig1) diperoleh dengan kode HTML

```html
<canvas id="myChart" style="width:100%;max-width:390px"></canvas>
```

dan JavaScript

```javascript
<script>
var xyValues1 = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];
var xyValues2 = [
  {x:50, y:17},
  {x:60, y:18},
  {x:70, y:18},
  {x:80, y:19},
  {x:90, y:19},
  {x:100, y:19},
  {x:110, y:20},
  {x:120, y:21},
  {x:130, y:24},
  {x:140, y:24},
  {x:150, y:25}
];

new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [
		{
			pointStyle: 'triangle',
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      backgroundColor: "rgba(255,99,132,0.4)",
      data: xyValues1,
			label: 'T1',
			showLine: true
    },
		{
      pointRadius: 4,
      pointBackgroundColor: "rgb(255, 0, 0)",
      backgroundColor: "rgba(132,99,255,0.4)",
      data: xyValues2,
			label: 'T2'
    },
	
		]
  },
  options: {
    scales: {
      x: {
				min: 10, max: 200, type: 'linear', position: 'top',
				title: {color: 'blue', display: true, text: 'x'}
			},
      y: {
				min: 2, max: 26,
				title: {color: 'blue', display: true, text: 'y'}
			},
    },
		plugins: {
			legend: {
				display: true,
				position: 'chartArea',
				textAlign: 'right',
			},
		},
  }
});
</script>
```

yang diletakkan dalam suatu post Jekyll.


## test 2
Sebuah diagram alir sederhana disajikan berikut ini untuk memeriksa penyisipan Mermaid.

<div class="mermaid">
  flowchart TD
      A([Mulai])
			B[/a, b, c/]
			C[D = bxb - 4ac]
			D{D >= 0}
			E[x1]
			F[x2]
			G[/x1, x2/]
			H([Selesai])
			
			A --> B --> C --> D
			D -- Ya --> E --> F --> G --> H
			D -- Tidak --> H
			
			style A fill:#f9f,stroke:#333,stroke-width:4px
			
			classDef decision stroke:#f88
			
			class D decision
</div>

Gambar <a name='fig2'>2</a>. Contoh penggunaan Mermaid untuk menampilkan diagram alir.

Kode Mermaid berikut ini, yang diletakkan dalam suatu HTML

```javascript
<div class="mermaid">
  flowchart TD
      A([Mulai])
			B[/a, b, c/]
			C[D = bxb - 4ac]
			D{D >= 0}
			E[x1]
			F[x2]
			G[/x1, x2/]
			H([Selesai])
			
			A --> B --> C --> D
			D -- Ya --> E --> F --> G --> H
			D -- Tidak --> H
			
			style A fill:#f9f,stroke:#333,stroke-width:4px
			
			classDef decision stroke:#f88
			
			class D decision
</div>
```

akan menghasilkan Gambar [2](#fig2) dalam suatu post Jekyll


## note
1. <a name='r01'></a>url <https://cdnjs.com/libraries/Chart.js> [20220317].

2. <a name='r02'></a>url <https://cdnjs.com/libraries/mermaid> [20220317].

### comments
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
