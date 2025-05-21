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

let style = {
  border: "1px blue solid",
  background: "#fee",
};
const div = createElement("div", style);

cnt.appendChild(div);
{{< /script/runner >}}
