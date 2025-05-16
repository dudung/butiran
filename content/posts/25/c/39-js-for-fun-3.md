+++
title = 'js for fun 3'
date = '2025-03-15T03:48:57+07:00'
draft = false
math = false
type = 'notes'
authors = ['viridi']
tags = ['for-fun']
categories = ['js']
url = '25c39'
[ref]
author = 'Sparisoma Viridi'
title = 'js for fun 3'
source = 'notes, 15 Mar 2025'
updated = '16 Mar 2025'
url = 'https://dudung.github.io/notes/25c39/'
accessed = '20250316'
+++

{{< columns >}}
+ select and options
+ click to move button
+ timer
+ svg circle and rect
{{< /columns >}}

{{< columns >}}
+ summaries
+ refs
{{< /columns >}}

<!--more-->

In order to have fun with JavaScript in a Hugo post, this note is created as a continuation of previous ones [^viridi_2025a], [^viridi_2025b].


## select and options
A `select` element with four `option` elements construct following appearance.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const sel = document.createElement("select");
const op0 = document.createElement("option");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");

op0.text = "Select an option";
  op0.disabled = "true";
  op0.selected = "true";
  op0.value = "";
op1.text = "Red";
  op1.value = "red";
op2.text = "Green";
  op2.value = "green";
op3.text = "Blue"
  op3.value = "blue";

sel.append(op0);
sel.append(op1);
sel.append(op2);
sel.append(op3);
sel.addEventListener("change", selectChange);

cnt.appendChild(sel);

function selectChange(e) {
  console.log(e.target.value);
}
{{< /script/runner >}}

Above result is produced using following lines.

```php
{{</* script/runner id="cnt1" */>}}
const cnt = document.getElementById("cnt1");

const sel = document.createElement("select");
const op0 = document.createElement("option");
const op1 = document.createElement("option");
const op2 = document.createElement("option");
const op3 = document.createElement("option");

op0.text = "Select an option";
  op0.disabled = "true";
  op0.selected = "true";
  op0.value = "";
op1.text = "Red";
  op1.value = "red";
op2.text = "Green";
  op2.value = "green";
op3.text = "Blue"
  op3.value = "blue";

sel.append(op0);
sel.append(op1);
sel.append(op2);
sel.append(op3);
sel.addEventListener("change", selectChange);

cnt.appendChild(sel);

function selectChange(e) {
  console.log(e.target.value);
}
{{</* /script/runner */>}}
```

There is a trick to use firt `option` element as information but can be selected [^gam6itko_2014], which should be modified when use it using JS intead of HTML. Notice that to view the value printed using `console.log()` press CTRL+SHIFT+J for Google Chrome on Windows, where other browsers on different OS might have different keyboard shortcuts to open developer console [^turner_2023].


## click to move button
Position of an element can also be altered using an event, e.g. `button` horizontal position is advanced by clicking it.

{{< script/runner id="cnt2" >}}
const cnt = document.getElementById("cnt2");
cnt.style.position = "relative";
cnt.style.height = "20px";

const btnL = document.createElement("button");
btnL.innerHTML = "&leftarrow;";
btnL.style.position = "absolute";
btnL.style.left = "0px";
btnL.addEventListener("click", function() { decLeft(btnL, btnR) });

const btnR = document.createElement("button");
btnR.innerHTML = "&rightarrow;";
btnR.style.position = "absolute";
btnR.style.left = "30px";
btnR.addEventListener("click", function() { incLeft(btnL, btnR) });

cnt.appendChild(btnL);
cnt.appendChild(btnR);

function incLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) + 10 + "px";
  }
}

function decLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) - 10 + "px";
  }
}
{{< /script/runner >}}

Following are lines used to obtain above result.

```php
{{</* script/runner id="cnt2" */>}}
const cnt = document.getElementById("cnt2");
cnt.style.position = "relative";
cnt.style.height = "20px";

const btnL = document.createElement("button");
btnL.innerHTML = "&leftarrow;";
btnL.style.position = "absolute";
btnL.style.left = "0px";
btnL.addEventListener("click", function() { decLeft(btnL, btnR) });

const btnR = document.createElement("button");
btnR.innerHTML = "&rightarrow;";
btnR.style.position = "absolute";
btnR.style.left = "30px";
btnR.addEventListener("click", function() { incLeft(btnL, btnR) });

cnt.appendChild(btnL);
cnt.appendChild(btnR);

function incLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) + 10 + "px";
  }
}

function decLeft() {
  for(let el of arguments) {
    el.style.left = parseInt(el.style.left) - 10 + "px";
  }
}
{{</* /script/runner */>}}
```

Two functions, `incLeft()` and `decLeft()`, are used to increse and decrease position of elements passed as their arguments with `10` pixels. Notice that it requires `parseInt()` function to get integer value, increase or decreas it, then append `px` at the end.


## timer 
Supposet that there are four independent processes in updating separate `textarea`s. This can be performed using timer with `setInterval()` to activate and `clearInterval()` to terminate, where all processes are concurrent but not parallel, since there will be no overlapping execution -- the next execution waits until the previous one finishes [^gpt-4o_2025a].

{{< script/runner id="cnt3" >}}
const cnt = document.getElementById("cnt3");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const ta3 = document.createElement("textarea");
const ta4 = document.createElement("textarea");
const btn = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta1.value = "0";

with(ta2.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta2.value = "0";

with(ta3.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta3.value = "0";

with(ta4.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta4.value = "0";

btn.innerHTML = "Run all";
btn.addEventListener("click", toggle);

cnt.appendChild(ta1);
cnt.appendChild(ta2);
cnt.appendChild(ta3);
cnt.appendChild(ta4);
cnt.appendChild(btn);

const ms1 = 2000;
const ms2 = 1000;
const ms3 = 500;
const ms4 = 250;

let id1, id2, id3, id4;

function toggle(e) {
  let caption = e.target.innerHTML;
  if(caption == "Run all") {
    caption = "Stop all";
    id1 = setInterval(function() { update(ta1, 1); }, ms1);
    id2 = setInterval(function() { update(ta2, 1); }, ms2);
    id3 = setInterval(function() { update(ta3, 1); }, ms3);
    id4 = setInterval(function() { update(ta4, 1); }, ms4);
  } else {
    caption = "Run all";
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
  }
  e.target.innerHTML = caption;
}

function update(ta, inc) {
  let last = parseInt(ta.value.split("\n").at(-1));
  last += inc;
  ta.value += "\n" + last;
  ta.scrollTop = ta.scrollHeight;
}
{{< /script/runner >}}

Above result can be produced using following lines.

```php
{{</* script/runner id="cnt3" */>}}
const cnt = document.getElementById("cnt3");
const ta1 = document.createElement("textarea");
const ta2 = document.createElement("textarea");
const ta3 = document.createElement("textarea");
const ta4 = document.createElement("textarea");
const btn = document.createElement("button");

with(cnt.style) {
    display = "flex";
    alignItems = "flex-start";
}

with(ta1.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta1.value = "0";

with(ta2.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta2.value = "0";

with(ta3.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta3.value = "0";

with(ta4.style) {
  width = "60px";
  height = "160px";
  overflowY = "scroll";
}
ta4.value = "0";

btn.innerHTML = "Run all";
btn.addEventListener("click", toggle);

cnt.appendChild(ta1);
cnt.appendChild(ta2);
cnt.appendChild(ta3);
cnt.appendChild(ta4);
cnt.appendChild(btn);

const ms1 = 2000;
const ms2 = 1000;
const ms3 = 500;
const ms4 = 250;

let id1, id2, id3, id4;

function toggle(e) {
  let caption = e.target.innerHTML;
  if(caption == "Run all") {
    caption = "Stop all";
    id1 = setInterval(function() { update(ta1, 1); }, ms1);
    id2 = setInterval(function() { update(ta2, 1); }, ms2);
    id3 = setInterval(function() { update(ta3, 1); }, ms3);
    id4 = setInterval(function() { update(ta4, 1); }, ms4);
  } else {
    caption = "Run all";
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
  }
  e.target.innerHTML = caption;
}

function update(ta, inc) {
  let last = parseInt(ta.value.split("\n").at(-1));
  last += inc;
  ta.value += "\n" + last;
  ta.scrollTop = ta.scrollHeight;
}
{{</* /script/runner */>}}
```

Notice that `toggle()` function toggles state of the `button`, "Run all" or "Stop all".  Then update process of each `textarea` is called using `setInterval()` calling `update()` function whose one of the arguments is targetted `textarea`. This update is only executed when `innerHTML` of the `button` is equal to "Run all". And when it is equal to "Stop all" it call `stopInterval()` function to stop all processes.


## svg circle and rect
Circle and rectangle can also be drawn in HTML using SVG elements, where the result is as follow.

{{< script/runner id="cnt4" >}}
const cnt = document.getElementById("cnt4");

with(cnt.style) {
  height = "100px";
  width = "400px"
  border = "0.5px solid #ccc";
}

const ns = 'http://www.w3.org/2000/svg';
const svg = document.createElementNS(ns, "svg");
svg.setAttributeNS(null, "width", "100%");
svg.setAttributeNS(null, "height", "100%");

const rect1 = document.createElementNS(ns, "rect");
rect1.setAttributeNS(null, "width", 40);
rect1.setAttributeNS(null, "height", 40);
rect1.setAttributeNS(null, "fill", '#4f81bd');

const rect2 = document.createElementNS(ns, "rect");
rect2.setAttributeNS(null, "width", 40);
rect2.setAttributeNS(null, "height", 40);
rect2.setAttributeNS(null, "x", 360);
rect2.setAttributeNS(null, "y", 30);
rect2.setAttributeNS(null, "fill", '#bd4f81');

const circle1 = document.createElementNS(ns, "circle");
circle1.setAttributeNS(null, "cx", 150);
circle1.setAttributeNS(null, "cy", 80);
circle1.setAttributeNS(null, "r", 20);
circle1.setAttributeNS(null, "fill", "#4fbd81");

const circle2 = document.createElementNS(ns, "circle");
circle2.setAttributeNS(null, "cx", 250);
circle2.setAttributeNS(null, "cy", 30);
circle2.setAttributeNS(null, "r", 20);
circle2.setAttributeNS(null, "fill", "#bd814f");

cnt.appendChild(svg);
  svg.appendChild(rect1);
  svg.appendChild(circle1);
  svg.appendChild(circle2);
  svg.appendChild(rect2);
{{< /script/runner >}}

Following lines are used to produced previous result.

```php
{{</* script/runner id="cnt4" */>}}
const cnt = document.getElementById("cnt4");

with(cnt.style) {
  height = "100px";
  width = "400px"
  border = "0.5px solid #ccc";
}

const ns = 'http://www.w3.org/2000/svg';
const svg = document.createElementNS(ns, "svg");
svg.setAttributeNS(null, "width", "100%");
svg.setAttributeNS(null, "height", "100%");

const rect1 = document.createElementNS(ns, "rect");
rect1.setAttributeNS(null, "width", 40);
rect1.setAttributeNS(null, "height", 40);
rect1.setAttributeNS(null, "fill", '#4f81bd');

const rect2 = document.createElementNS(ns, "rect");
rect2.setAttributeNS(null, "width", 40);
rect2.setAttributeNS(null, "height", 40);
rect2.setAttributeNS(null, "x", 360);
rect2.setAttributeNS(null, "y", 30);
rect2.setAttributeNS(null, "fill", '#bd4f81');

const circle1 = document.createElementNS(ns, "circle");
circle1.setAttributeNS(null, "cx", 150);
circle1.setAttributeNS(null, "cy", 80);
circle1.setAttributeNS(null, "r", 20);
circle1.setAttributeNS(null, "fill", "#4fbd81");

const circle2 = document.createElementNS(ns, "circle");
circle2.setAttributeNS(null, "cx", 250);
circle2.setAttributeNS(null, "cy", 30);
circle2.setAttributeNS(null, "r", 20);
circle2.setAttributeNS(null, "fill", "#bd814f");

cnt.appendChild(svg);
  svg.appendChild(rect1);
  svg.appendChild(circle1);
  svg.appendChild(circle2);
  svg.appendChild(rect2);
{{</* /script/runner */>}}
```

Since SVGs are represented using the Document Object Model (DOM), like HTML, they can be manipulated with Javascript relatively easily [^collingridge_2018], but they might be in different category compared other previous discussed elements [^gpt-4o_2025b].


## summaries
+ It has been shown that HTML elements, and also SVG elements, can be created and manipulated using JS.
+ For drawing primitives 2-d objects, there are two alternatives, using `canvas` or `svg` elements.


## refs
[^collingridge_2018]: Peter Collingridge, "Using Javascript with SVG", Peter Collingridge Personal Site, 26 Apr 2018, url https://www.petercollingridge.co.uk/tutorials/svg/interactive/javascript/ [20250316].
[^gam6itko_2014]: gam6itko, Michael Haddad, "Set the select option as blank as default in HTML select element", Stack Overflow, 13 May 2014 (edited 13 Jul 2022), url https://stackoverflow.com/a/23638053/9475509 [20250315].
[^gpt-4o_2025a]: GPT-4o, "setInterval behavior and handling", Chat GPT, 16 Mar 2025, url https://chatgpt.com/share/67d656b9-5024-800a-82b5-8971266fa57b [20250316].
[^gpt-4o_2025b]: GPT-4o, "Categories of HTML Elements", Chat GPT, 16 mar 2025, url https://chatgpt.com/share/67d67281-0148-800a-a9ba-f0744a96c842 [20250316].
[^turner_2023]: Carl Turner, "Open the developer console to check for errors", Good Grants Help Center, 17 Aug 2023, url https://help.goodgrants.com/hc/en-gb/articles/360001956235 [20250315].
[^viridi_2025a]: Sparisoma Viridi, "js for fun 1", notes, 9 Mar 2025, url https://dudung.github.io/notes/25c22/ [20250315].
[^viridi_2025b]: Sparisoma Viridi, "js for fun 2", notes, 13 Mar 2025 (14 Mar 2025), url https://dudung.github.io/notes/25c36/ [20250315].
