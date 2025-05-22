+++
title = 'simple stats'
date = '2025-05-22T16:47:24+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['js', 'vanillajs', 'statistics']
categories = ['app']
url = '25e44'
+++

<!-- more -->


This app accepts numbers separated by delimiters such as end-of-line (newline), space, commas, or semicolons.

{{< script/loader >}}
25e44.js
{{< /script/loader >}}

{{< script/runner id="cnt0" >}}
const cnt = document.getElementById("cnt0");

const style1 = {
  border: "1px solid #888",
  width: "450px",
  height: "200px",
  display: "flex",
};
const div = createElement("div", style1);

const style2 = {
  overflowY: "scroll",
  flex: "5",
};
const inp = createElement("textarea", style2);

const style3 = {
  flex: "1",
  height: "32px",
};
const btn = createElement("button", style3);
btn.innerHTML = "Calc";

const style4 = {
  overflowY: "scroll",
  flex: "3",
};
const out = createElement("textarea", style4);

cnt.appendChild(div);
div.appendChild(inp);
div.appendChild(btn);
div.appendChild(out);

inp.value = "1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1";

btn.addEventListener("click", calc);

function calc() {
  const text = inp.value;
  console.log(text);
  
  const delim = detectDelimiterFromText(text);
  console.log("a" + delim + "b");
}
{{< /script/runner >}}


## notes
+ Simple stats is the name that supported also in a discussion [^gpt-4o_2025].


## refs
[^gpt-4o_2025]: GPT-4o, "Simple Stats App Ideas", ChatGPT, 22 May 2025, url https://chatgpt.com/share/682ef3e3-aac8-800a-a95d-81d9baa1ae72 [20250522].
