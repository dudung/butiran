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

{{< /script/runner >}}

## notes
+ It is now 0631 and very tired. A sleep is required. Continue at about 0943, but still dizzy and exhausted.


## refs
[^viridi_2025]: Sparisoma Viridi, "ui design elements 0", butiran 25d49, 16 Apr 2025, url https://dudung.github.io/butiran/25d49/ [20250418].
