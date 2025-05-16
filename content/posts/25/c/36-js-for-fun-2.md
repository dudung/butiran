+++
title = 'js for fun 2'
date = '2025-03-13T20:55:18+07:00'
draft = false
math = false
type = 'notes'
authors = ['viridi']
tags = ['for-fun']
categories = ['js']
url = '25c36'
[ref]
author = 'Sparisoma Viridi'
title = 'js for fun 2'
source = 'notes, 13 Mar 2025'
updated = '14 Mar 2025'
url = 'https://dudung.github.io/notes/25c36/'
accessed = '20250314'
+++

{{< columns >}}
+ copy textarea to textarea
+ draw circle
{{< /columns >}}

{{< columns >}}
+ alternative
+ closing
+ refs
{{< /columns >}}

<!--more-->

This is a continuation of previous note [^viridi_2025], to have fun with JavaScript in a Hugo post.


## copy textarea to textarea
Two textarea elements and a button for copying content of left textarea to right textarea.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const bt1 = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

with(ta2.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

bt1.innerHTML = "Copy";
bt1.addEventListener("click", function() { copy(ta1, ta2) });

cnt.appendChild(ta1);
cnt.appendChild(bt1);
cnt.appendChild(ta2);

function copy(t1, t2) {
  t2.value = t1.value;
}
{{< /script/runner >}}

Previous result can be obtained with following lines of code.

```php
{{</* script/runner id="cnt1" */>}}
const cnt = document.getElementById("cnt1");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const bt1 = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

with(ta2.style) {
  width = "200px";
  height = "160px";
  overflowY = "scroll";
}

bt1.innerHTML = "Copy";
bt1.addEventListener("click", function() { copy(ta1, ta2) });

cnt.appendChild(ta1);
cnt.appendChild(bt1);
cnt.appendChild(ta2);

function copy(t1, t2) {
  t2.value = t1.value;
}
{{</* /script/runner */>}}
```

Notice that the use of CSS `display: flex;` combined with `align-items: flex-start;` make it is easier to align elements to top of the container compared to using div as container of the button.


## draw circle
Information to draw circle is inputted on `textarea` and a click on `button` triggers the drawing on `canvas`.

{{< script/runner id="cnt2" >}}
const cnt = document.getElementById("cnt2");
const ta1 = document.createElement("textarea");
const bt1 = document.createElement("button");
const ca1 = document.createElement("canvas");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  boxSizing = "border-box";
  width = "200px";
  height = "200px";
  overflowY = "scroll";
}

ca1.width = "200";
ca1.height = "200"; 
with(ca1.style) {
  boxSizing = "border-box";
  width = "200px";
  height = "200px";
  border = "1px #888 solid";
}

ta1.value = "";
ta1.value += "circle 80 80 10 #000\n";
ta1.value += "circle 120 80 10 #f00\n";
ta1.value += "circle 120 120 10 #0f0\n";
ta1.value += "circle 80 120 10 #00f\n";
ta1.value += "circle 100 100 18 #f0f";

bt1.innerHTML = "Draw";
bt1.addEventListener("click", function() { draw(ta1, ca1) });

cnt.appendChild(ta1);
cnt.appendChild(bt1);
cnt.appendChild(ca1);

function draw(src, dest) {
  let lines = src.value.split("\n");
  
  for(let l of lines) {
	let columns = l.split(" ");
	if(columns[0] == "circle") {
	  let x = parseInt(columns[1]);
	  let y = parseInt(columns[2]);
	  let r = parseInt(columns[3]);
	  let c = columns[4];
	  circle(ca1, x, y, r, c);
	}
  }
}

function circle(can, x, y, r, c) {
	const ctx = can.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle =  c;
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.stroke();
}
{{< /script/runner >}}

following lines are used to produce previous result.

```php
{{</* script/runner id="cnt2" */>}}
const cnt = document.getElementById("cnt2");
const ta1 = document.createElement("textarea");
const bt1 = document.createElement("button");
const ca1 = document.createElement("canvas");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  boxSizing = "border-box";
  width = "200px";
  height = "200px";
  overflowY = "scroll";
}

ca1.width = "200";
ca1.height = "200"; 
with(ca1.style) {
  boxSizing = "border-box";
  width = "200px";
  height = "200px";
  border = "1px #888 solid";
}

ta1.value = "";
ta1.value += "circle 80 80 10 #000\n";
ta1.value += "circle 120 80 10 #f00\n";
ta1.value += "circle 120 120 10 #0f0\n";
ta1.value += "circle 80 120 10 #00f\n";
ta1.value += "circle 100 100 18 #f0f";

bt1.innerHTML = "Draw";
bt1.addEventListener("click", function() { draw(ta1, ca1) });

cnt.appendChild(ta1);
cnt.appendChild(bt1);
cnt.appendChild(ca1);

function draw(src, dest) {
  let lines = src.value.split("\n");
  
  for(let l of lines) {
	let columns = l.split(" ");
	if(columns[0] == "circle") {
	  let x = parseInt(columns[1]);
	  let y = parseInt(columns[2]);
	  let r = parseInt(columns[3]);
	  let c = columns[4];
	  circle(ca1, x, y, r, c);
	}
  }
}

function circle(can, x, y, r, c) {
	const ctx = can.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle =  c;
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.stroke();
}
{{</* /script/runner */>}}
```

Notic that `draw()` function is the center of this example, where it obtains information from input (`textarea`), process it, and show the result on output (`canvas`). In the function there is `circle()` for drawing circle. Functions for drawing another shapes can be added if necessary.


## alternative
For drawing shapes there is other alternative using SVG with XML elements. Each approach has different strengths and weaknesses to considered [^gpt-4o]. Learning curve for Canvas and SVG is determined by the user’s programming knowledge and markup structure [^delighth_2023].


## closing
Two examples using JS in a Hugo post has been presented, where all using `textarea` as input, `button` as trigger, and another element for output (another `textarea` or `canvas`).


## refs
[^delighth_2023]: Gabriel Delight, "SVG Vs. Canvas: A Comparison", Medium 2 May 2023, url https://medium.com/p/1b58e6c84326 [20250314].
[^gpt-4o]: GPT-4o, "Canvas vs SVG Overview", Chat GPT, 14 Mar 2025, url https://chatgpt.com/share/67d40b51-469c-800a-b3b6-4a2a0239b139 [20250314].
[^viridi_2025]: Sparisoma Viridi, "js for fun 1", notes, 9 Mar 2025, url https://dudung.github.io/notes/25c22/ [20250313].
