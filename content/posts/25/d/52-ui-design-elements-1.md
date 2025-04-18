+++
title = 'ui design elements 1'
date = '2025-04-18T05:46:02+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25d52'
+++

<!-- more -->

## aim
+ To design control elements in the form of a div with several buttons stacked vertically.


## intro
Previous note [^viridi_2025a] will be used as start point of this note. Process of designing the UI element is conducted with help of runner shortcode [^viridi_2025b].


## result
An experiment with the UI elements.

{{< script/runner id="script-1" >}}
class ControlBox {
  constructor() {
    this.width = "60px";
    this.height = "150px";
    this.div = document.createElement("div");
    this.div.style.width = this.width;
    this.div.style.height = this.height;
    this.div.style.background = "#ddd";
    this.div.style.display = "flex";
    this.div.style.flexDirection = "column";
    this.buttonIds = [];
  }
  
  addButton(id) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.innerHTML = id;
    btn.style.boxSizing = "border-box";
    btn.style.width = "100%";
    this.div.append(btn);
    this.buttonIds.push(id);
  }
  
  getButton(id) {
    return this.div.querySelector(`#${id}`);
  }
  
  enableButton(id) {
    this.getButton(id).disabled = false;
  }
  
  disableButton(id) {
    this.getButton(id).disabled = true;
  }
}

const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const cbx = new ControlBox();
cbx.addButton("Info");
cbx.addButton("Load");
cbx.addButton("Read");
cbx.addButton("Start");
cbx.addButton("Graph");

cbx.disableButton("Load");
cbx.disableButton("Read");
cbx.disableButton("Start");
cbx.disableButton("Graph");

cbx.getButton("Info").addEventListener("click", () => {
  cbx.enableButton("Load");
});
cbx.getButton("Load").addEventListener("click", () => {
  cbx.enableButton("Read");
});
cbx.getButton("Read").addEventListener("click", () => {
  cbx.enableButton("Start");
});
cbx.getButton("Start").addEventListener("click", () => {
  cbx.enableButton("Graph");
});

cnt.append(cbx.div);
{{< /script/runner >}}


## class
A class name `ControlBox` is as follow.

```js
class ControlBox {
  constructor() {
    this.width = "60px";
    this.height = "150px";
    this.div = document.createElement("div");
    this.div.style.width = this.width;
    this.div.style.height = this.height;
    this.div.style.background = "#ddd";
    this.div.style.display = "flex";
    this.div.style.flexDirection = "column";
    this.buttonIds = [];
  }
  
  addButton(id) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.innerHTML = id;
    btn.style.boxSizing = "border-box";
    btn.style.width = "100%";
    this.div.append(btn);
    this.buttonIds.push(id);
  }
  
  getButton(id) {
    return this.div.querySelector(`#${id}`);
  }
  
  enableButton(id) {
    this.getButton(id).disabled = false;
  }
  
  disableButton(id) {
    this.getButton(id).disabled = true;
  }
}
```


## usage
To obtained previous result following lines are used

```js
const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const cbx = new ControlBox();
cbx.addButton("Info");
cbx.addButton("Load");
cbx.addButton("Read");
cbx.addButton("Start");
cbx.addButton("Graph");

cbx.disableButton("Load");
cbx.disableButton("Read");
cbx.disableButton("Start");
cbx.disableButton("Graph");

cbx.getButton("Info").addEventListener("click", () => {
  cbx.enableButton("Load");
});
cbx.getButton("Load").addEventListener("click", () => {
  cbx.enableButton("Read");
});
cbx.getButton("Read").addEventListener("click", () => {
  cbx.enableButton("Start");
});
cbx.getButton("Start").addEventListener("click", () => {
  cbx.enableButton("Graph");
});

cnt.append(cbx.div);
```

with the help of `ControlBox` class.


## notes
+ It is now 0631 and very tired. A sleep is required. Continue at about 0943, butReadll dizzy and exhausted. Pause at 1122. View again at 1636. Pause while preparing for iftar. Pause for isya at about 1903.
+ Some parts of `ControlBox` class are initially as advised by an AI assistant [^gpt-4o_2025], but then modified as needed.
+ Story version of this note is available on Medium [^viridi_2025c].


## refs
[^gpt-4o_2025]: GPT-4o, "ControlBox Usage Tips", ChatGPT, 18 Apr 2025, url https://chatgpt.com/share/68023ecb-a200-800a-b245-ff5241474357 [20250418].
[^viridi_2025a]: Sparisoma Viridi, "ui design elements 0", butiran 25d49, 16 Apr 2025, url https://dudung.github.io/butiran/25d49/ [20250418].
[^viridi_2025b]: Sparisoma Viridi, "script loader and runner", butiran 25d48, 16 Apr 2025, url https://dudung.github.io/butiran/25d48/ [20250418].
[^viridi_2025c]: Sparisoma Viridi, "Group buttons in a div", Medium 18 Apr 2025, url https://medium.com/p/0570fcef51cc [20250418].
