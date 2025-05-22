+++
title = 'js matrix to canvas'
date = '2025-05-21T13:19:31+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['matrix', 'canvas']
categories = ['js']
url = '25e41'
+++

<!-- more -->

Content of matrix showing as colored grid on canvas.

{{< script/loader >}}
25e41.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const style2 = {
  display: "flex",
  border: "0px #aaf solid",
  background: "#fafaff",
  width: "500px",
  height: "200px",
};
const div = createElement("div", style2);

const style3 = {
  flex: "3",
  overflowY: "scroll",
  background: "#fee",
};
const txa = createElement("textarea", style3);

const style4 = {
  flex: "2",
  background: "#efe",
  border: "1px #080 solid",
};
const can = createElement("canvas", style4);

cnt.appendChild(div);
div.append(txa);
div.append(can);

let m = [
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], // 00
  [10, 20, 20, 20, 20, 20, 20, 20, 20, 10], // 01
  [10, 20, 20, 20, 20, 20, 20, 20, 20, 10], // 02
  [10, 20, 20, 20, 20, 20, 20, 20, 20, 10], // 03
  [10, 20, 20, 20, 20, 20, 20, 20, 20, 10], // 04
  [10, 20, 20, 20, 20, 20, 20, 20, 20, 10], // 05
  [10, 20, 20, 20, 20, 41, 20, 20, 20, 10], // 06
  [10, 20, 20, 20, 40, 40, 41, 20, 20, 10], // 07
  [10, 20, 20, 40, 40, 40, 41, 41, 20, 10], // 08
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], // 09
]
const ms = matrixToStr(m);
addTextToTextarea(txa, ms);

{{< /script/runner >}}

Left area is for matrix content and right area is for its visualization representation.
