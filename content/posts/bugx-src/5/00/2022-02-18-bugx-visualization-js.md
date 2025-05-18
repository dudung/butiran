---
layout: post
authors: [viridi]
title: bugx visualization js
permalink: pages/5000
mathjax: true
chartjs: false
ptext: false
x3dom: false
threejs: false
3dmol: false
oo: false
svgphys: false
category: javascript
tags: ["visualization", "short intro"]
date: 2022-02-19 12:31:00 +0700
src: https://github.com/dudung/bug/commits/main/_posts/5/00/2022-02-18-bugx-visualization-js.md
twitter_username: 6unpnp
nodes: []
youtube:
---
JavaScript (JS) merupakan satu dari bahasa fondasi pengembangan web, bersama-sama dengan HTML dan CSS, yang membantu sebagian besar halaman-halaman web di internet dan mendukung pengembangan web baik front end maupun back end [[1](#r01)]. Salah satu pemanfaatan JS adalah sebagai alat bantu visualisasi data [[2](#r02)] dan juga untuk simulasi sederhana dengan memanfaatkan elemen canvas HTML5 [[3](#r03)]. Untuk bugx akan dimulai program sederhana untuk visualisasi dan simulasi, sambil membangun pustakanya, [bugx-vis](https://github.com/dudung/bugx-vis).


## an example
Sebuah berkas HTML berisikan setidaknya baris-baris berikut

```html
<html>
	<header>
		<title>tabtncan</title>
		<script src="tabtncan.js"></script>
	</header>
	<body>
		<script>
			main();
		</script>
	</body>
</html>
```

diperlukan untuk memanggail berkas JS yang berisikan

```javascript
/*
	tabtncan.js
	A simple UI using textarea, button, and canvas
	
	Sparisoma Viridi | https://github.com/dudung/bugx-vis
	
	20220218 Start this example application.
	0937 Create main initVisualElement functions, empty.
	1825 Make clearCanvas and drawCircle functions.
	2102 Finish drawCircle function.
	2127 Correct style width and height with px.
*/

// define global variables
var div, divL, divR;
var ta, btn, can;


// call all necessary function
function main() {
	initVisualElement();
}


// initialize visual element
function initVisualElement() {
	div = document.createElement('div');
	div.style.width = "400px";
	div.style.height = "250px";
	div.style.border = "0px solid #000";
	div.style.background = "#eee";

	divL = document.createElement('div');
	divL.style.float = "left";
	divL.style.width = "150px";
	divL.style.height = "250px";
	divL.style.background = "#fdd";
	divL.style.border = "0px solid #000";

	divR = document.createElement('div');
	divR.style.float = "right";
	divR.style.width = "250px";
	divR.style.height = "250px";
	divR.style.background = "#ddf";
	
	ta = document.createElement('textarea');
	ta.style.width = "150px";
	ta.style.height = "228px";
	ta.style.overflowY = "scroll";
	ta.value = ""
		+ "125 125 124\n"
		+ "50 125 49\n"
		+ "175 125 74";
	
	btn = document.createElement('button');
	btn.innerHTML = "Draw circle(s)";
	btn.addEventListener("click", clickButton);
	
	can = document.createElement('canvas');
	can.width = "250";
	can.height = "250";
	can.style.width = "250px";
	can.style.height = "250px";
	can.style.border = "0px solid #000";
	
	document.body.append(div);
	div.append(divL);
		divL.append(ta);
		divL.append(btn);
	div.append(divR);
		divR.append(can);
}

// clear canvas
function clearCanvas() {
	var ctx = can.getContext('2d');
	ctx.clearRect(0, 0, can.width, can.height);
}

// draw circle
function drawCircle(x, y, r) {
	var ctx = can.getContext('2d');
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI)
	ctx.stroke();
}

// do something when button is clicked
function clickButton() {
	clearCanvas();
	
	var lines = ta.value.split('\n');
	var N = lines.length;
	for(i = 0; i < N; i++) {
		var vars = lines[i].split(' ');
		var x = parseInt(vars[0]);
		var y = parseInt(vars[1]);
		var r = parseInt(vars[2]);
		drawCircle(x, y, r);
	}
}
```

di mana keduanya diletakkan pada folder yang sama. Kedua kode di atas dapat dilihat pada repository [bugx-vix](https://github.com/dudung/bugx-vis) pada folder [app/ui/tabtncan](https://github.com/dudung/bugx-vis/tree/main/app/ui/tabtncan), serta dijalan di [raw.githack.com](https://raw.githack.com/) pada [tabtncan.html](https://rawcdn.githack.com/dudung/bugx-vis/b28e36c08a865a235be5f3e8c878c2ad5c89eab7/app/ui/tabtncan/tabtncan.html).

### results
Hasil kode di atas saat perancangan dan juga di [raw.githack.com](https://raw.githack.com/) adalah seperti gambar berikut ini.

![]({{ site.baseurl}}/assets/img/5/00/5000-a.png) \
Gambar <a name='fig1'>1</a>. Contoh tampilan sebuah visualisasi secara lokal yang dibuat dengan JS.

Dan hasil penggunaan JS pada pembahasan ini adalah sebagai berikut, yang dapat berinteraksi dengan pengguna melalui pengisian textarea di sebelah kiri dan button di bagian bawahnya.

<script src="https://rawcdn.githack.com/dudung/bugx-vis/b28e36c08a865a235be5f3e8c878c2ad5c89eab7/app/ui/tabtncan/tabtncan.js"></script>
<script>main();</script>

Perhatikan bahwa layout dari elemen-elemen seperti div, textarea, canvas, dan button belum seperti yang diharapkan pada Gambar [1](#fig1) saat dirancang dan ditampilkan secara lokal. Terdapat dugaan bahwa style yang digunakan pada Jekyll mempengaruhinya. Untuk sementara belum ada solusi mengenai permasalahan ini.


## note
1. <a name='r01'></a>Trent Fowler, "Is JavaScript Front End or Back End?", Career Karma, 5 Aug 2020, url <https://careerkarma.com/blog/javascript-front-end-or-back-end/> [20220218].
2. <a name='r02'></a>Jakub Majorek, "19 Best JavaScript Data Visualization Libraries [UPDATED 2022]", 13 Sep 2021, url <19 Best JavaScript Data Visualization Libraries [UPDATED 2022]> [20220218].
3. <a name='r03'></a>Don Cross, "Physical Simulation with JavaScript in the HTML5 Canvas", JavaScript in Plain English, 27 Nov 2019, url <https://javascript.plainenglish.io/physical-simulation-with-javascript-in-the-html5-canvas-27dc6ea121cf> [20220218].

### comments
<blockquote class="twitter-tweet" data-width="390"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/bug5000?src=hash&amp;ref_src=twsrc%5Etfw">#bug5000</a></p>&mdash; Sparisoma Viridi (@6unpnp) <a href="https://twitter.com/6unpnp/status/1494907277824131073?ref_src=twsrc%5Etfw">February 19, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% comment %} data-width="390" {% endcomment %}


## &nbsp;
{% comment %} []() &bull; []() {% endcomment %}


<ans>
</ans>


{% comment %}
{% endcomment %}
