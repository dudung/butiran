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


This app accepts numbers only separated by delimiters semicolon or \";\", e.g. **`1;2;2;3;3;3;4;4;4;4;5;5`** that you can copy and paste to the left textarea below.

{{< script/loader >}}
25e44.js
{{< /script/loader >}}

{{< script/runner id="cnt0" >}}
const cnt = document.getElementById("cnt0");

const style1 = {
  border: "1px solid #888",
  width: "450px",
  height: "220px",
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
out.disabled = true;

cnt.appendChild(div);
div.appendChild(inp);
div.appendChild(btn);
div.appendChild(out);

inp.value = "";

btn.addEventListener("click", calc);

function calc() {
  const text = calcFromTextarea(inp);
  out.value = text.join("\n");
}
{{< /script/runner >}}

Left textarea are for input numbers and right textarea are for output statistics. Click {{< fakebutton "Calc" >}} to obtain the statistics.


## notes
+ Simple stats is the name that supported also in a discussion [^gpt-4o_2025a].
+ It can calculate following statistic [^gpt-4o_2025b].
{{< style class="table-0" >}}
| Statistic | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `min`     | Smallest value                                                       |
| `max`     | Largest value                                                        |
| `range`   | Difference between `max` and `min`                                   |
| `sum`     | Total sum using **Kahan summation** (via `sumPrecise`) for precision |
| `n`       | Count of numbers                                                     |
| `avg`     | Mean (average)                                                       |
| `median`  | Middle value when numbers are sorted                                 |
| `mode`    | Most frequent value(s), or "none" if all values are unique           |
| `var`     | Variance (mean squared deviation)                                    |
| `std`     | Standard deviation                                                   |
| `skew`    | Skewness (asymmetry of distribution)                                 |
| `kurt`    | Excess kurtosis (peakedness compared to normal distribution)         |
{{< /style >}}
+ Other delimiters than semicolon, such as end-of-line (newline), space, or comma, are not supported in current version.
+ The shortcode `{{</* fakebutton "Button" */>}}` is used to show {{< fakebutton "Button" >}} [^gpt-4o_2025c].
+ The `Math.sumPrecise()` static method has not been functioned in Chrome as this note is finalized [^mdn_web_docs_2025].


## refs
[^gpt-4o_2025a]: GPT-4o, "Simple Stats App Ideas", ChatGPT, 22 May 2025, url https://chatgpt.com/share/682ef3e3-aac8-800a-a95d-81d9baa1ae72 [20250522].
[^gpt-4o_2025b]: GPT-4o, "Descriptive Statistics Function", 23 May 2025, url https://chatgpt.com/share/68307fb0-758c-800a-936c-5e70254c1879 [20250523].
[^gpt-4o_2025c]: GPT-40, "Hugo Fake Button Shortcode", ChatGPT, 24 May 2025, url https://chatgpt.com/share/6830dbc6-db30-800a-9431-05fde9b210b6 [20250524].
[^mdn_web_docs_2025]: -, "Math.sumPrecise()", MDN Web Docs, 7 Mar 2025, url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sumPrecise [20250524].
