+++
title = 'ui design elements 2'
date = '2025-04-19T03:49:28+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25d54'
+++

<!-- more -->

## aim
+ To design input elements in the form of textarea(s) and label(s).


## intro
+ There are previous notes about UI elements [^viridi_2025a], [^viridi_2025b] preceeding this note, that are conducted with the help of runner shortcode [^viridi_2025c].


## result
Current result is as follow.

{{< script/runner id="script-1" >}}
class InputBox {
  constructor() {
    this.width = "300px";
    this.height = "150px";
    this.border = "1px #4f81bd solid";
    this.div = document.createElement("div");
    this.div.style.width = this.width;
    this.div.style.height = this.height;
    this.div.style.border = this.border;
    //this.div.style.overflowY = "scroll";
    this.div.style.background = "#ddd";
    this.div.style.display = "flex";
    this.div.style.flexDirection = "column";
    this.buttonIds = [];
  }
  
  addInput() {
  }
}

const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const ibx = new InputBox();
ibx.addInput("Params");
ibx.addInput("Config");

cnt.append(ibx.div);
{{< /script/runner >}}


## refs
[^viridi_2025a]: Sparisoma Viridi, "ui design elements 0", butiran 25d49, 16 Apr 2025, url https://dudung.github.io/butiran/25d49/ [20250419].
[^viridi_2025b]: Sparisoma Viridi, "ui design elements 1", butiran 25d52, 18 Apr 2025, url https://dudung.github.io/butiran/25d52/ [20250419].
[^viridi_2025c]: Sparisoma Viridi, "script loader and runner", butiran 25d48, 16 Apr 2025, url https://dudung.github.io/butiran/25d48/ [20250419].
