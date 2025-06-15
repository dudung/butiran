+++
title = 'abm agent-input'
date = '2025-06-15T09:29:15+07:00'
authors = ['viridi']
draft = true
type = 'notes'
tags = ['abm']
categories = ['js']
url = '25f49'
+++

<!-- more -->

Input and ouput design for abm agent is as follow.

{{< script/loader >}}
src/25e41.js
src/25e60.js
src/25f45.js
src/25f49.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const style2 = {
  display: "flex",
  border: "0px #aaf solid",
  background: "#fafaff",
  width: "800px",
  height: "400px",
};
const div = createElement("div", style2);

const style3 = {
  flex: "1",
  overflowY: "scroll",
};
const txa = createElement("textarea", style3);

const style4 = {
  borderTop: "1px #888 solid",
  borderBottom: "1px #888 solid",
  background: "#fafafa",
  width: "80px",
};
const subdiv = createElement("div", style4);

const style5 = {
  width: "400px",
  border: "1px #888 solid",
  flexShrink: "0",
  boxSizing: "border-box",
  background: "#fff",
};
const can = createElement("canvas", style5);
can.width = "300";
can.height = "300";

const style6 = {
  width: "100%",
  display: "block",
};
const btn = createElement("button", style6);
btn.innerHTML = "Read";

cnt.appendChild(div);
  div.append(txa);
  div.append(subdiv);
    subdiv.append(btn);
  div.append(can);

addAgents(txa);

btn.addEventListener("click", () => {
  let line = getLineFromTextarea(txa, "WORLD");
  
  if(line != undefined) {
    let dim = getValueAfterKeyword("WORLD", line).map(Number);
    let m = createZeroMatrix(dim[0], dim[1]);

    let lines1 = getLinesFromTextarea(txa, "WALL");
    for(l of lines1) {
      const w = getValueAfterKeyword("WALL", l).map(Number);
      drawWall(m, [w[0], w[1]], [w[2], w[3]], w[4]);
    }

    let lines2 = getLinesFromTextarea(txa, "AGENT");
    for(l of lines2) {
      const a = getValueAfterKeyword("AGENT", l).map(Number);
      drawAgent(m, [a[0], a[1]], a[2]);
    }
    
    drawMatrixOnCanvas(can, m, getColor)
  }
});
{{< /script/runner >}}


## notes
+ This is a part of [25d66](/butiran/25d66/) project in investigating aor using abm approach.
+ Note [25f45](/butiran/25f45/) is another input of this project, which is preceeded this.
+ Agent types are available on [25e41](/butiran/25e41/) in range of 40-49.
