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
+ To design some UI elements for a JS simulation embedded in a note.
+ To provide functions for creating these elements.
+ To create a library containing the functions.


## input textarea
Form multiline input a textarea will be used, since it is a plain text format that can be saved as input file for other applications.

{{< script/runner id="script-0" >}}
const cnt = document.getElementById("script-0");
with(cnt.style) {
  width = "200px";
  height = "300px";
  background = "#eee";
}

const div = document.createElement("div");
with(div.style) {
  width = "150px";
  height = "200px";
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
