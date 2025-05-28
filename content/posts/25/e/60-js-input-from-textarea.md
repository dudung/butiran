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
  width: "500px",
  height: "200px",
};
const div = createElement("div", style2);

cnt.appendChild(div);

{{< /script/runner >}}

Left area is for inline values and block of values and right area is for the results.
