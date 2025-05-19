+++
title = 'fun with js for ga'
date = '2025-05-19T17:17:17+07:00'
authors = ['viridi']
draft = true
type = 'notes'
tags = ['ga']
categories = []
url = '25e37'
+++

<!-- more -->

{{< script/loader >}}
25e37.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");
const div = createDiv(100, 100, "#c00", "#fffafa");
cnt.appendChild(div);
{{< /script/runner >}}
