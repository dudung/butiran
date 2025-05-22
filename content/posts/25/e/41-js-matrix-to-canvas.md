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
  [15, 16, 17, 18, 19, 19, 18, 17, 16, 15], // 00
  [14, 26, 27, 28, 29, 29, 28, 27, 26, 14], // 01
  [13, 24, 25, 26, 27, 27, 26, 25, 24, 13], // 02
  [12, 23, 22, 21, 20, 20, 21, 22, 23, 12], // 03
  [11, 39, 38, 49, 48, 48, 49, 38, 39, 11], // 04
  [10, 37, 36, 47, 46, 46, 47, 36, 37, 10], // 05
  [10, 35, 34, 45, 44, 44, 45, 34, 36, 10], // 06
  [10, 33, 32, 43, 42, 42, 43, 33, 33, 10], // 07
  [10, 31, 30, 41, 40, 40, 41, 30, 31, 10], // 08
  [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], // 09
]
const ms = matrixToStr(m);
addTextToTextarea(txa, ms);

drawMatrixOnCanvas(can, m, getColor);

{{< /script/runner >}}

Left area is for matrix content and right area is for its visualization representation.
