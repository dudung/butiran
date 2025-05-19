+++
title = 'fun with js for ga'
date = '2025-05-19T17:17:17+07:00'
authors = ['viridi']
draft = false
math = true
type = 'notes'
tags = ['ga']
categories = []
url = '25e37'
+++

<!-- more -->

## evaluate
Example of chromosome evaluation is as follow.

{{< script/loader >}}
25e37.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const div = createDiv(400, 400, "#888", "#fafafa");
div.style.display = "flex";

const inp = createTextarea();
inp.style.flex = "4";

const btn = createButton(10, 30, "Run");
btn.style.flex = "1";
btn.disabled = true;

const out = createTextarea();
out.style.flex = "4";

cnt.appendChild(div);
div.appendChild(inp);
div.appendChild(btn);
div.appendChild(out);

inp.addEventListener('scroll', () => syncScroll(inp, out));
out.addEventListener('scroll', () => syncScroll(out, inp));

const n = 400;
const coords = getCoords();
const chro = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const popu = createPopulation(chro, n);
const pst1 = joinNestedArrays(popu);
const pst2 = addLineNumberToArray(pst1);
addTextToTextarea(inp, pst2);

const dist = evaluatePopulation(popu, coords);
addTextToTextarea2(out, pst1, dist);

{{< /script/runner >}}

Click `Run` button to get the value of given chromosomes.


## possibilities
For 10 points to visit only once, there are

$$
10! = 362880
$$

possibilities.
