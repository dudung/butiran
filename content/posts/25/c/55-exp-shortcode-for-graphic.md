+++
title = 'exp shortcode for graphic'
date = '2025-03-21T04:17:17+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['graphic']
categories = ['shortcode']
url = '25c55'
[ref]
author = 'Sparisoma Viridi'
title = 'exp shortcode for graphic'
source = 'notes, 21 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c55/'
accessed = '20250321'
+++

{{< columns >}}
+ problem
+ parametric function
+ test area
+ shortcode
+ to-do
{{< /columns >}}

{{< columns >}}
+ refs
{{< /columns >}}


<!--more-->

It is experimental shortcode for solving previous problem [^viridi_2025a], but can not be tested using JS for fun approach [^viridi_2025b], since it must have separate HTML file.


## problem
To use a shortcode multiple times in a Hugo post, it requires that the shortcode JS part should not define the same variable names. There must be a way to prevent it. One of the thinkable solution is using external JS via another shortcode. When use a function, is it possible to define the same functions and include them multiple times in the post? Mermaid and KaTeX do not face such problem and even without defining the ID explicitly. They might be considered as inspiration.


## parametric function
To create Lissajous figure following function of time $t$ is used,

$$\tag{1}
f(t) = A \sin (\omega t + \phi),
$$

where $A$ is amplitude, $\omega$ is angular frequency, $\phi$ is phase shift [^gpt-4o_2025a].


## test area
This is the section where the shortcode tested multiple times.

{{< graphic background="#f8f8f8" >}}

{{< lissajous id="ljs1" left="20px" top="20px" >}}
fx 1 1 0
fy 1 1 0
tt 0 1 100
xx -1 1 5
yy -1 1 5
{{< /lissajous >}}

{{< lissajous id="ljs2" left="240px" top="20px" >}}
fx 1 1 0
fy 1 1 1.571
tt 0 1 100
xx -1 1 11
yy -1 1 11
{{< /lissajous >}}

{{< lissajous id="ljs3" left="460px" top="20px" >}}
fx 1 1 0
fy 1 0.5 0
tt 0 1 100
xx -1 1 21
yy -1 1 21
{{< /lissajous >}}

{{< lissajous id="ljs4" left="20px" top="240px" >}}
fx 1 1 0
fy 1 2 0
tt 0 2 100
xx -1 1 21
yy -1 1 5
{{< /lissajous >}}

{{< lissajous id="ljs5" left="240px" top="240px" >}}
fx 1 2 0
fy 1 1 1.571
tt 0 2 100
xx -1 1 21
yy -1 1 11
{{< /lissajous >}}

{{< lissajous id="ljs6" left="460px" top="240px" >}}
fx 1 1 0
fy 1 0.5 0.785
tt 0 1 100
xx -1 1 31
yy -1 1 31
{{< /lissajous >}}

{{< /graphic >}}

To obtain above results, following lines are used.


```php
{{</* graphic background="#f8f8f8" */>}}

{{</* lissajous id="ljs1" left="20px" top="20px" */>}}
fx 1 1 0
fy 1 1 0
tt 0 1 100
xx -1 1 5
yy -1 1 5
{{</* /lissajous */>}}

{{</* lissajous id="ljs2" left="240px" top="20px" */>}}
fx 1 1 0
fy 1 1 1.571
tt 0 1 100
xx -1 1 11
yy -1 1 11
{{</* /lissajous */>}}

{{</* lissajous id="ljs3" left="460px" top="20px" */>}}
fx 1 1 0
fy 1 0.5 0
tt 0 1 100
xx -1 1 21
yy -1 1 21
{{</* /lissajous */>}}

{{</* lissajous id="ljs4" left="20px" top="240px" */>}}
fx 1 1 0
fy 1 2 0
tt 0 2 100
xx -1 1 21
yy -1 1 5
{{</* /lissajous */>}}

{{</* lissajous id="ljs5" left="240px" top="240px" */>}}
fx 1 2 0
fy 1 1 1.571
tt 0 2 100
xx -1 1 21
yy -1 1 11
{{</* /lissajous */>}}

{{</* lissajous id="ljs6" left="460px" top="240px" */>}}
fx 1 1 0
fy 1 0.5 0.785
tt 0 1 100
xx -1 1 31
yy -1 1 31
{{</* /lissajous */>}}

{{</* /graphic */>}}
```

Notice that which lines produce which figure can be traced using position `left` andn `top` values.


## shortcode
```php
{{ $id := .Get "id" }}
{{ $left := .Get "left" }}
{{ $top := .Get "top" }}
{{ $width := .Get "width" | default "200px" }}
{{ $height := .Get "height" | default "200px" }}

{{ $css := resources.Get "css/lissajous.css" | resources.ExecuteAsTemplate "css/generated-lissajous.css" . | minify | fingerprint }}

<link rel="stylesheet" href="{{ $css.RelPermalink }}">

<style>
#{{- $id -}}.lissajous-container {
  left: {{ $left }};
  top: {{ $top }};
}
</style>

<div class="lissajous-container" id="{{- $id -}}">

<script>
(function() {
  const lines = "{{ .Inner }}".split("\r\n");
  if(lines[0].length == 0) {
    lines.shift();
  }
  if(lines[lines.length-1].length == 0) {
    lines.pop();
  }
  
  const XMIN = 0;
  const XMAX = parseFloat({{ $width }});
  const YMIN = parseFloat({{ $height }});
  const YMAX = 0;
  
  let xmin, xmax, numx;
  let ymin, ymax, numy;
  let tbeg, tend, numt;
  let Ax, Tx, px;
  let Ay, Ty, py;
  
  [Ax, Tx, px] = getParams3(lines, "fx");
  [Ay, Ty, py] = getParams3(lines, "fy");
  [tbeg, tend, numt] = getParams3(lines, "tt");
  [xmin, xmax, numx] = getParams3(lines, "xx");
  [ymin, ymax, numy] = getParams3(lines, "yy");
  
  const dt = (tend - tbeg) / (numt - 1)
  const t = [];
  const x = [];
  const y = [];
  for(let i = 0; i < numt; i++) {
    let it = tbeg + i * dt;
	let fx = Ax * Math.sin(2 * Math.PI / Tx * it + px);
	let fy = Ay * Math.sin(2 * Math.PI / Ty * it + py);
	
    t.push(it);
    x.push(fx);
    y.push(fy);
  }
  
  const can = document.createElement("canvas");
  can.width = parseInt({{- $width -}});
  can.height = parseInt({{- $height -}});
  can.style.width = "{{- $width -}}";
  can.style.height = "{{- $height -}}";
  can.style.background = "#fff";
  
  const ctx = can.getContext("2d");
  
  ctx.lineWidth = "0.2";
  ctx.strokeStyle = "#000";
  const dy = (ymax - ymin) / (numy - 1);
  ctx.beginPath();
  for(let i = 0; i < numy; i++) {
    let y = ymin + i * dy;
    let Y = transform(y, ymin, ymax, YMIN, YMAX);
    ctx.moveTo(XMIN, Y);
    ctx.lineTo(XMAX, Y);
  }
  ctx.stroke();

  ctx.lineWidth = "0.2";
  ctx.strokeStyle = "#000";
  const dx = (xmax - xmin) / (numx - 1);
  ctx.beginPath();
  for(let i = 0; i < numx; i++) {
    let x = xmin + i * dx;
    let X = transform(x, xmin, xmax, XMIN, XMAX);
    ctx.moveTo(X, YMIN);
    ctx.lineTo(X, YMAX);
  }
  ctx.stroke();
  
  ctx.lineWidth = "1.5";
  ctx.strokeStyle = "#f00";
  ctx.beginPath();
  for(let i = 0; i < numt; i++) {
    let X = transform(x[i], xmin, xmax, XMIN, XMAX);
    let Y = transform(y[i], ymin, ymax, YMIN, YMAX);
    if(i == 0) {
      ctx.moveTo(X, Y);
    } else {
      ctx.lineTo(X, Y);
    }
  }
  ctx.stroke();
  
  const parent = document.getElementById("{{- $id -}}");
  parent.appendChild(can);  
  
  function getParams3(list, key) {
	for(let l of list) {
	  if(l.indexOf(key) > -1) {
		let cols = l.split(" ");
		let v1 = parseFloat(cols[1]);
		let v2 = parseFloat(cols[2]);
		let v3 = parseFloat(cols[3]);
		return [v1, v2, v3];
	  }
	}
  }

  function transform(t, tmin, tmax, TMIN, TMAX) {
    let T = (t - tmin) / (tmax  - tmin);
    T = T * (TMAX - TMIN) + TMIN;
    return T;
  }

})();
</script>

</div>
```

The code is saved as `lissajous.html` in `layours/shortcodes` folder.


## to-do
+ Integrate axes label with KaTeX, where previously are stil separated.
+ Create adjustable size of diagram to slide size.


## refs
[^gpt-4o_2025a]: GPT-4o, "Lissajous Figure Parameters", ChatGPT, 21 Mar 2025, url https://chatgpt.com/share/67dcb25b-95b0-800a-8121-22f4f07b6dce [20250321].
[^viridi_2025a]: Sparisoma Viridi, "graphic shortcode", notes, 20 Mar 2025, url https://dudung.github.io/notes/25c53/ [20250321].
[^viridi_2025b]: Sparisoma Viridi, "js for fun 4", notes, 20 Mar 2025, url https://dudung.github.io/notes/25c52/ [20250321].