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
    const data = getLineFromTextarea(inp, keyword + " ");
    if(data != undefined) {
      console.log(data);
    }
  }
});
const btn2 = createElement("button", style6);
btn2.innerHTML = "Get Block";

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

function getLineFromTextarea(el, keyword) {
  const str = el.value;
  const lines = str.split("\n");
  for(let l of lines) {
    const i = l.indexOf(keyword);
    if(i == 0) {
      return(l);
    }
  }
}

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
