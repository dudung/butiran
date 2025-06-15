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

Input from textarea using keyword form inline value(s) or block values.

{{< script/loader >}}
src/25e60.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const style2 = {
  display: "flex",
  border: "0px #aaf solid",
  background: "#fafaff",
  width: "600px",
  height: "320px",
};
const div = createElement("div", style2);

const style3 = {
  flex: "2",
  overflowY: "scroll",
  background: "#efe",
};
inp = createElement("textarea", style3);

const style4 = {
  flex: "2",
  overflowY: "scroll",
  background: "#fee",
};
const out = createElement("textarea", style4);
out.disabled = true;

const style5 = {
  flex: "1",
  background: "#eef",
  borderTop: "1px solid #bbb",
  borderBottom: "1px solid #bbb",
  padding: "2px",
};
const buttons = createElement("div", style5);

const style6 = {
  width: "100%",
};
const btn1 = createElement("button", style6);
btn1.innerHTML = "Get Param";
btn1.addEventListener("click", () => {
  const keyword = getParamFromInput(key1);
  if(keyword.length > 0) {
    const line = getLineFromTextarea(inp, keyword);
    if(line != undefined) {
      const val = getValueAfterKeyword(keyword, line);
      const val2 = formatForTextarea(val)
      addTextToTextarea(out, val2);
    }
  }
});

const btn2 = createElement("button", style6);
btn2.innerHTML = "Get Block";
btn2.addEventListener("click", () => {
  const keyword = getParamFromInput(key2);
  if(keyword.length > 0) {
    const block = getBlockFromTextarea(inp, keyword);
    if(block != undefined && block.length > 0) {
      const k1 = "BLOCK " + keyword;
      const k2 = "END";
      const vals = getValuesBetweenKeywords(k1, k2, block);
      const vals2 = formatForTextarea(vals);
      addTextToTextarea(out, vals2);
    }
  }
});

const style7 = {
  display: "inline-block",
  padding: "10px 4px 2px",
  border: "0px solid black",
  width: "100%",
  textAlign: "center",
};
const lab1 = createElement("label", style7);
lab1.innerHTML = "Param keyword";
const lab2 = createElement("label", style7);
lab2.innerHTML = "Block keyword";

const key1 = createElement("input");
const key2 = createElement("input");
const br1 = createElement("hr");
const br2 = createElement("hr");

cnt.appendChild(div);
 div.appendChild(inp);
 div.appendChild(buttons);
   buttons.appendChild(lab1);
   buttons.appendChild(key1);
   buttons.appendChild(btn1);
   buttons.appendChild(br1);
   buttons.appendChild(lab2);
   buttons.appendChild(key2);
   buttons.appendChild(btn2);
   buttons.appendChild(br2);
 div.appendChild(out);

addExampleToTextarea(inp);

{{< /script/runner >}}

Left area is for inline value(s) and block values and right area is for the results.


## usage
+ Type `VERSION` in Param keyword input field, then click {{< fakebutton "Get Param" >}} to get the value(s).
+ Type `velocity` in Block keyword input field, then click {{< fakebutton "Get Block" >}} to get the values. 


## notes
+ All functions, but the last one, are designed first then refined and completed with documentation with the help of AI assistant [^gpt-4o_2025a].
+ The last function `formatForTextarea(input)` is desined via prompt with AI assistant [^gpt-4o_2025b].
+ Initial format of input textarea is different, but later modified as discussion result with AI assistant [^gpt-4o_2025c].


## refs
[^gpt-4o_2025a]: GPT-4o, "JS Function Documentation", ChatGPT, 29 May 2025, url https://chatgpt.com/share/6838315b-a1ac-800a-94db-de99177ecd4d [20250529].
[^gpt-4o_2025b]: GPT-4o, "Format variable for textarea", ChatGPT, 29 May 2025, url https://chatgpt.com/share/683831f2-982c-800a-9c3f-b2211fd09464 [20250529].
[^gpt-4o_2025c]: GPT-4o, "TXT File Format Definition", ChatGPT, 29 May 2025, url https://chatgpt.com/share/6838326b-5ef0-800a-b42c-9d3584c5a4aa [20250529].
