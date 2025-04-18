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
Previous note [^viridi_2025] will be used as start point of this note.


## exp-1
This first experiment with the UI elements.

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

cnt.append(cbx.div);

{{< /script/runner >}}

## notes
+ It is now 0631 and very tired. A sleep is required. Continue at about 0943, but still dizzy and exhausted.


## refs
[^viridi_2025]: Sparisoma Viridi, "ui design elements 0", butiran 25d49, 16 Apr 2025, url https://dudung.github.io/butiran/25d49/ [20250418].
