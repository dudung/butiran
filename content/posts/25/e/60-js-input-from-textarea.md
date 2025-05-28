+++
title = 'js input from textarea'
date = '2025-05-29T05:09:46+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['input', 'textarea']
categories = ['js']
url = '25e60'
+++

<!-- more -->

Input from textarea using keyword form inline values or block of values.

{{< script/loader >}}
25e60.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const style2 = {
  display: "flex",
  border: "0px #aaf solid",
  background: "#fafaff",
  width: "600px",
  height: "400px",
};
const div = createElement("div", style2);

const style3 = {
  flex: "1",
  overflowY: "scroll",
  background: "#efe",
};
const inp = createElement("textarea", style3);

const style4 = {
  flex: "1",
  overflowY: "scroll",
  background: "#fee",
};
const out = createElement("textarea", style4);
out.disabled = true;

cnt.appendChild(div);
div.append(inp);
div.append(out);

addTextToTextarea(inp, "ID a0x_3^f-9z");
addTextToTextarea(inp, "NAME \"Isaac Bayu\"");
addTextToTextarea(inp, "ANDROID True");
addTextToTextarea(inp, "VERSION 2025v29.34.0.2e");
addTextToTextarea(inp, "MASS 57.8");
addTextToTextarea(inp, "COORD 20.8 -75.2");

addTextToTextarea(inp, "\n\
BLOCK_0_2_X_Y\n\
1 2\n\
3.5 -3\n\
-4 1.2E-5\
");

addTextToTextarea(inp, "\n\
BLOCK_1_3_VX-VY-VZ\n\
0.1 -3 -4.3\n\
1.2 0.1 5.3\n\
-9.3 0.2 5.6\n\
2.3 3.5 9.1\
");
{{< /script/runner >}}

Left area is for inline values and block of values and right area is for the results.
