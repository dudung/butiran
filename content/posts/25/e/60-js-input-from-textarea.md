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
btn1.innerHTML = "Get Params";
btn1.addEventListener("click", () => {
  const keyword = getParamFromInput(key1);
  if(keyword.length > 0) {
    const line = getLineFromTextarea(inp, keyword);
    if(line != undefined) {
      val = getValueAfterKeyword(keyword, line);
      addTextToTextarea(out, val);
    }
  }
});

const btn2 = createElement("button", style6);
btn2.innerHTML = "Get Block";
btn2.addEventListener("click", () => {
  const keyword = getParamFromInput(key2);
  if(keyword.length > 0) {
    const block = getBlockFromTextarea(inp, keyword);
    addTextToTextarea(out, block);
    /*
    if(block != undefined) {
      vals = getValueBetweenKeywords(k1, k2, block);
      addTextToTextarea(out, vals);
    }
    */
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

Left area is for inline values and block of values and right area is for the results.
