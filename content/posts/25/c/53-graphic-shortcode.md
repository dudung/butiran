+++
title = 'graphic shortcode'
date = '2025-03-20T11:35:07+07:00'
draft = false
math = true
type = 'notes'
authors = ['viridi']
tags = ['graphic']
categories = ['shortcode']
url = '25c53'
[ref]
author = 'Sparisoma Viridi'
title = 'graphic shortcode'
source = 'notes, 20 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c53/'
accessed = '20250320'
+++

{{< columns >}}
+ problem 1
+ problem 2
  - solution
  - equation
  - canvas
+ problem 3
+ test area
{{< /columns >}}

{{< columns >}}
+ to-do
+ refs
{{< /columns >}}


<!--more-->

This note is a continuation of previous note [^viridi_2025].


## problem 1
When there are more than one container, even already with different ID, they still refer to the same container. ~Can not continue. Close this as not work and will be continued in other note~.

```php
{{</* graphic */>}}
  {{</* subgraphic left="10%" top="25%" width="30%" height="10%" borderwidth="1px" fontsize="2m" */>}}
    ${\mathbf H}  \ket{\psi} = E \ket{\psi}$
  {{</* /subgraphic */>}}
  
  {{</* subgraphic left="10%" top="35%" width="30%" height="10%" borderwidth="1px" fontsize="2m" */>}}
    ${\mathbf H}  \ket{\psi} = E \ket{\psi}$
  {{</* /subgraphic */>}}
{{</* /graphic */>}}
```

Feature for dynamic size of all elements is cancelled. Concentrate only for article part of a note. At least the graphic shortcode can be taken as screenshot for OSF slide.


## problem 2
While editing Hugo post, template, shortcode, or CSS, it seems to cache previous version of style, so the current style does not affect immediately. Suggestions [^gpt-4o_2025a] have been tested, but none works smoothly but only intermittens.

The problem persists, even rendering in localhost works, but rendering on GitHub Pages does not.


### solution
Based on yesterday discussion and updated one [^gpt-4o_2025b], problem 2 is solved by providing `id` as required shortcode argument.

### equation
```php
{{ $seed := "foo" }}
{{ $id := .Get "id" }}
{{ $left := .Get "left" | default "0px" }}
{{ $top := .Get "top" | default "0px" }}
{{ $width := .Get "width" }}
{{ $height := .Get "height" }}
{{ $borderwidth := .Get "borderwidth" | default "0px" }}
{{ $fontsize := .Get "fontsize" | default "1em" }}
{{ $angle := .Get "angle" | default "0" }}

<style>
.equation#{{- $id -}} {
  left: {{ $left }} !important;
  top: {{ $top }} !important;
  width: {{ $width }} !important;
  height: {{ $height }} !important;
  border: {{ $borderwidth }} #4f81bd solid !important;
  transform: rotate({{ $angle }}deg) !important;
}

.equation#{{- $id -}} {
  .katex, .katex-display {
    font-size: {{ $fontsize }} !important;
  }

  .katex .tag {
    font-size: {{ $fontsize }} !important;
  }
}
</style>

<div class="equation" id="{{- $id -}}">
{{ .Inner }}
</div>
```

### canvas
```php
{{ $seed := "foo" }}
{{ $id := .Get "id" }}
{{ $left := .Get "left" | default "0px" }}
{{ $top := .Get "top" | default "0px" }}
{{ $width := .Get "width" | default "300px" }}
{{ $height := .Get "height" | default "200px"  }}
{{ $borderwidth := .Get "borderwidth" | default "0px" }}
{{ $fontsize := .Get "fontsize" | default "1em" }}
{{ $angle := .Get "angle" | default "0" }}

<style>
#{{- $id -}}.canvas-container {
  left: {{ $left }};
  top: {{ $top }};
  width: {{ $width }};
  height: {{ $height }};
  border: {{ $borderwidth }} #4f81bd solid;
}
</style>

<div class="canvas-container" id="{{- $id -}}">
<script>
const parent = document.getElementById("{{- $id -}}");

const lines = "{{ .Inner }}".split("\r\n");
if(lines[0].length == 0) {
  lines.shift();
}
if(lines[lines.length-1].length == 0) {
  lines.pop();
}

const tmin = params(lines, "tmin", "=");
const tmax = params(lines, "tmax", "=");
const nt = params(lines, "nt", "=");

const xmin = params(lines, "xmin", "=");
const xmax = params(lines, "xmax", "=");
const nx = params(lines, "nx", "=");
const XMIN = 0;
const XMAX = parseFloat({{ $width }});

const ymin = params(lines, "ymin", "=");
const ymax = params(lines, "ymax", "=");
const ny = params(lines, "ny", "=");
const YMIN = parseFloat({{ $height }});
const YMAX = 0;

const fx = func(lines, "fx", "=");
const fy = func(lines, "fy", "=");

const dt = (tmax - tmin) / (nt - 1)
const t = [];
const x = [];
const y = [];
for(let i = 0; i < nt; i++) {
  it = tmin + i * dt;
  t.push(it);
  x.push(fx(it));
  y.push(fy(it));
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
const dy = (ymax - ymin) / (ny - 1);
ctx.beginPath();
for(let i = 0; i < ny; i++) {
  let y = ymin + i * dy;
  let Y = transform(y, ymin, ymax, YMIN, YMAX);
  ctx.moveTo(XMIN, Y);
  ctx.lineTo(XMAX, Y);
}
ctx.stroke();

ctx.lineWidth = "0.2";
ctx.strokeStyle = "#000";
const dx = (xmax - xmin) / (nx - 1);
ctx.beginPath();
for(let i = 0; i < nx; i++) {
  let x = xmin + i * dx;
  let X = transform(x, xmin, xmax, XMIN, XMAX);
  ctx.moveTo(X, YMIN);
  ctx.lineTo(X, YMAX);
}
ctx.stroke();

ctx.lineWidth = "1.5";
ctx.strokeStyle = "#f00";
ctx.beginPath();
for(let i = 0; i < nt; i++) {
  let X = transform(x[i], xmin, xmax, XMIN, XMAX);
  let Y = transform(y[i], ymin, ymax, YMIN, YMAX);
  if(i == 0) {
    ctx.moveTo(X, Y);
  } else {
    ctx.lineTo(X, Y);
  }
}
ctx.stroke();

parent.appendChild(can);

function transform(t, tmin, tmax, TMIN, TMAX) {
  let T = (t - tmin) / (tmax  - tmin);
  T = T * (TMAX - TMIN) + TMIN;
  return T;
}

function params(list, name, delim) {
  for(let l of list) {
    if(l.indexOf(name) > -1) {
      let val = parseFloat(l.split(delim)[1]);
      return val;
    }
  }
}

function func(list, name, delim) {
  for(let l of list) {
    if(l.indexOf(name) > -1) {
      let fs = l.split(delim)[1];
      let val = new Function("t", "return " + eval(fs));
      return val;
    }
  }
}

</script>

</div>
```


## problem 3
It can not have multiple `canvas` shortcode since all variables have previously defined.


## test area
Following are current result after resolving previous problems.

{{< graphic >}}

{{< canvas left="60px" top="20px" width="200px" height="200px" id="c1" >}}
tmin = 0
tmax = 6.28
nt = 101

xmin = -1.01
xmax = 1.01
nx = 11

ymin = -1.01
ymax = 1.01
ny = 11

fx = "Math.sin(1*t)"
fy = "Math.sin(2*t)"
{{< /canvas >}}

{{< equation left="140px" top="250px" id="e1" >}}
$x = \sin t$
{{< /equation >}}

{{< equation left="50px" top="230px" id="e1a" >}}$-1${{< /equation >}}
{{< equation left="155px" top="230px" id="e1b" >}}$0${{< /equation >}}
{{< equation left="255px" top="230px" id="e1c" >}}$1${{< /equation >}}

{{< equation left="-30px" top="110px" angle="-90"  id="e2" >}}
$y = \sin 2t$
{{< /equation >}}

{{< equation left="30px" top="210px" id="e2a" >}}$-1${{< /equation >}}
{{< equation left="40px" top="110px" id="e2b" >}}$0${{< /equation >}}
{{< equation left="40px" top="10px" id="e2c" >}}$1${{< /equation >}}



{{< /graphic >}}

To obtain above result following lines are required.

```php
{{</* graphic */>}}

{{</* canvas left="60px" top="20px" width="200px" height="200px" id="c1" */>}}
tmin = 0
tmax = 6.28
nt = 101

xmin = -1.01
xmax = 1.01
nx = 11

ymin = -1.01
ymax = 1.01
ny = 11

fx = "Math.sin(1*t)"
fy = "Math.sin(2*t)"
{{</* /canvas */>}}

{{</* equation left="140px" top="250px" id="e1" */>}}
$x = \sin t$
{{</* /equation */>}}

{{</* equation left="-10px" top="110px" angle="-90" id="e2" */>}}
$y = \sin 2t$
{{</* /equation */>}}

{{</* /graphic */>}}
```

Notice that instead of using $y = f(x)$ it uses parametric equations [^dawkins_2023], e.g. $x = f_x(t)$ and $y = f_y(t)$.


## to-do
+ Put symbol on both axes (still manually)
+ Put numbers or symbols as ticks on both axes (still manually).
+ Find a way to have multiple `canvas` shortcode in a post.


## refs
[^dawkins_2023]: Paul Dawkins, "Section 9.1 : Parametric Equations and Curves", Paul's Online Notes, 5 Jul 2023, url https://tutorial.math.lamar.edu/classes/calcii/parametriceqn.aspx [20250320].
[^gpt-4o_2025a]: GTP-4o, "CSS Caching Issues", ChatGTP, 20 Mar 2025, url https://chatgpt.com/share/67dc2901-beb8-800a-ad4b-25c906fb87b2 [20250320].
[^viridi_2025]: Sparisoma Viridi, "js for fun 4", notes, 20 Mar 2025, (-), url https://dudung.github.io/notes/25c52/ [20250320].
[^gpt-4o_2025b]: GTP-4o, "Shortcode Random ID Issues", ChatGPT, 21 Mar 2025, ur https://chatgpt.com/share/67dc788b-1850-800a-b638-b719fab44b1a [20250321].
