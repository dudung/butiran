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
  border: "0px #aaf solid",
  background: "#fafaff",
  width: "400px",
  height: "100px",
  display: "flex",
};
const div = createElement("div", style2);

const style3 = {
  overflowY: "scroll",
  background: "#fee",
  flex: "1",
};
const txa = createElement("textarea", style3);

const style4 = {
  flex: "1",
  background: "#efe",
  border: "1px #080 solid",
};
const can = createElement("canvas", style4);

cnt.appendChild(div);
div.append(txa);
div.append(can);
{{< /script/runner >}}

Left area is for matrix content and right area is for its visualization representation.
