+++
title = 'ui design elements 0'
date = '2025-04-16T18:55:16+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25d49'
+++

<!-- more -->

## aim
+ To design some UI elements for a JS simulation embedded in a note. &check;
+ To provide functions for creating these elements. &cross;
+ To create a library containing the functions. &cross;


## input textarea
Form multiline input a textarea will be used, since it is a plain text format that can be saved as input file for other applications.

{{< script/runner id="script-0" >}}
const cnt = document.getElementById("script-0");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "120px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div);

const txa = document.createElement("textarea");
with(txa.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%";
  overflowY = "scroll";
}
div.appendChild(txa);
{{< /script/runner >}}

Above result is obtained with following lines

```js
const cnt = document.getElementById("script-0");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "120px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div);

const txa = document.createElement("textarea");
with(txa.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%";
  overflowY = "scroll";
}
div.appendChild(txa);
```

in the runner shortocde.


## control button
Buttons are use to trigger processes, e.g. load data, transform data, start and stop simulations, draw graphics.

{{< script/runner id="script-1" >}}
const cnt = document.getElementById("script-1");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "50px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div);

const bt1 = document.createElement("button");
with(bt1.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt1.innerHTML = "Info"
div.appendChild(bt1);

const bt2 = document.createElement("button");
with(bt2.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt2.innerHTML = "Load"
div.appendChild(bt2);

const bt3 = document.createElement("button");
with(bt3.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt3.innerHTML = "Read"
div.appendChild(bt3);

const bt4 = document.createElement("button");
with(bt4.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt4.innerHTML = "Start"
div.appendChild(bt4);

const bt5 = document.createElement("button");
with(bt5.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt5.innerHTML = "Graph"
div.appendChild(bt5);
{{< /script/runner >}}

Following lines

```js
const cnt = document.getElementById("script-1");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "50px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div);

const bt1 = document.createElement("button");
with(bt1.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt1.innerHTML = "Info"
div.appendChild(bt1);

const bt2 = document.createElement("button");
with(bt2.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt2.innerHTML = "Load"
div.appendChild(bt2);

const bt3 = document.createElement("button");
with(bt3.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt3.innerHTML = "Read"
div.appendChild(bt3);

const bt4 = document.createElement("button");
with(bt4.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt4.innerHTML = "Start"
div.appendChild(bt4);

const bt5 = document.createElement("button");
with(bt5.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt5.innerHTML = "Graph"
div.appendChild(bt5);
```

in the runner shortocde will produce previous result.


## output canvas
There are at least three elements that can be served as output, which are textarea, canvas, and svg. The second option is used here.

{{< script/runner id="script-2" >}}
const cnt = document.getElementById("script-2");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "150px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div);

const can = document.createElement("canvas");
with(can.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%"
  background = "white";
}
div.appendChild(can);
{{< /script/runner >}}

The result above is obtained using following lines

```js
const cnt = document.getElementById("script-2");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "150px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div);

const can = document.createElement("canvas");
with(can.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%"
  background = "white";
}
div.appendChild(can);
```

in the runner shortcode.


## combine all elements
Now all elements, input, control, and output will be used.

{{< script/runner id="script-3" >}}
const cnt = document.getElementById("script-3");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
  display = "flex";
}


/* div1 for textarea */
const div1 = document.createElement("div");
with(div1.style) {
  width = "120px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div1);

const txa = document.createElement("textarea");
with(txa.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%";
  overflowY = "scroll";
}
div1.appendChild(txa);


/* div2 for buttons */
const div2 = document.createElement("div");
with(div2.style) {
  width = "50px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div2);

const bt1 = document.createElement("button");
with(bt1.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt1.innerHTML = "Info"
div2.appendChild(bt1);

const bt2 = document.createElement("button");
with(bt2.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt2.innerHTML = "Load"
div2.appendChild(bt2);

const bt3 = document.createElement("button");
with(bt3.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt3.innerHTML = "Read"
div2.appendChild(bt3);

const bt4 = document.createElement("button");
with(bt4.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt4.innerHTML = "Start"
div2.appendChild(bt4);

const bt5 = document.createElement("button");
with(bt5.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt5.innerHTML = "Graph"
div2.appendChild(bt5);


/* div3 for canvas */
const div3 = document.createElement("div");
with(div3.style) {
  width = "150px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div3);

const can = document.createElement("canvas");
with(can.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%"
  background = "white";
}
div3.appendChild(can);
{{< /script/runner >}}

Notice that the UI already uses input element (textarea), control elements (buttons), and output element (canvas).

```js
const cnt = document.getElementById("script-3");
with(cnt.style) {
  width = "360px";
  height = "200px";
  background = "#eee";
  display = "flex";
}


/* div1 for textarea */
const div1 = document.createElement("div");
with(div1.style) {
  width = "120px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div1);

const txa = document.createElement("textarea");
with(txa.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%";
  overflowY = "scroll";
}
div1.appendChild(txa);


/* div2 for buttons */
const div2 = document.createElement("div");
with(div2.style) {
  width = "50px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div2);

const bt1 = document.createElement("button");
with(bt1.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt1.innerHTML = "Info"
div2.appendChild(bt1);

const bt2 = document.createElement("button");
with(bt2.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt2.innerHTML = "Load"
div2.appendChild(bt2);

const bt3 = document.createElement("button");
with(bt3.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt3.innerHTML = "Read"
div2.appendChild(bt3);

const bt4 = document.createElement("button");
with(bt4.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt4.innerHTML = "Start"
div2.appendChild(bt4);

const bt5 = document.createElement("button");
with(bt5.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "20%"
}
bt5.innerHTML = "Graph"
div2.appendChild(bt5);


/* div3 for canvas */
const div3 = document.createElement("div");
with(div3.style) {
  width = "150px";
  height = "150px";
  border = "1px #4f81bd solid";
}
cnt.appendChild(div3);

const can = document.createElement("canvas");
with(can.style) {
  boxSizing = "border-box";
  width = "100%";
  height = "100%"
  background = "white";
}
div3.appendChild(can);
```

Above lines are required to produce previous result.


## notes
+ Using `display = "flex";` in parent container, will make child elements align in a line.
+ If one of the child element has `flex = "1"`, then its width expands to fill parent container.


## todo
+ Create functions that return the elements.
+ Gather the funcionts in a library for future use.
