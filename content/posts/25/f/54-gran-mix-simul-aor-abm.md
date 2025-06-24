+++
title = 'gran mix simul aor abm'
date = '2025-06-18T21:31:19+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['abm']
categories = ['js']
url = '25f54'
+++

<!-- more -->

Simulation for angle of repose of granular materials mixture using abm.

{{< script/loader >}}
src/25e41.js
src/25e60.js
src/25f45.js
src/25f49.js
src/25f51.js
src/25f53.js
src/25f54.js
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
can.id = "can-out";

const style6 = {
  width: "100%",
  display: "block",
};
const btnSample = createElement("button", style6);
btnSample.innerHTML = "Sample";

const btnRead = createElement("button", style6);
btnRead.innerHTML = "Read";

const btnAbout = createElement("button", style6);
btnAbout.innerHTML = "About";

const btnRun = createElement("button", style6);
btnRun.innerHTML = "Start";

const btnClear = createElement("button", style6);
btnClear.innerHTML = "Clear";

btnRead.disabled = true;
btnRun.disabled = true;

const style7 = {
  border: "1px solid #888",
  height: "100px",
  paddingLeft: "0.5em",
};
const divTime = createElement("div", style7);
divTime.id = "div-time";

cnt.appendChild(div);
  div.append(txa);
  div.append(subdiv);
    subdiv.append(btnAbout);
    subdiv.append(btnSample);
    subdiv.append(btnClear);
    subdiv.append(btnRead);
    subdiv.append(btnRun);
    subdiv.append(divTime);
  div.append(can);

btnAbout.addEventListener("click", () => {
  let text = "";
  text += "\nProject: abm-aor";
  text += "\nAuthor: Sparisoma Viridi";
  text += "\nVersion: 0.1 (2025)";
  text += "\nDescription: Simulation of granular material angle of repose in 2d using an agent-based model.";
  text += "\nGitHub: https://github.com/dudung";
  alert(text);
});

btnClear.addEventListener("click", () => {
  clearInput(txa);
  btnRead.disabled = true;
  btnRun.disabled = true;
});

btnSample.addEventListener("click", () => {
  clearInput(txa);
  addHeader(txa);
  addBlankLine(txa);
  addWorld2(txa);                     /* v2 */
  addBlankLine(txa);
  addEnclosedWall2(txa);              /* v2 */
  addBlankLine(txa);
  addContainerWall2(txa);             /* v2 */
  addBlankLine(txa);
  addMovementProbabilityMatrix2(txa); /* v2 */
  addBlankLine(txa);
  addAgents2(txa);                    /* v2 */

  btnRead.disabled = false;
});

btnRead.addEventListener("click", () => {
  let line = getLineFromTextarea(txa, "WORLD");
  
  if(line != undefined) {
    let dim = getValueAfterKeyword("WORLD", line).map(Number);
    world = createZeroMatrix(dim[1], dim[0]);

    let lines1 = getLinesFromTextarea(txa, "WALL");
    for(let l of lines1) {
      const w = getValueAfterKeyword("WALL", l).map(Number);
      drawWall(world, [w[0], w[1]], [w[2], w[3]], w[4]);
    }
    
    agents = [];
    let lines2 = getLinesFromTextarea(txa, "AGENT");
    for(let l of lines2) {
      const a = getValueAfterKeyword("AGENT", l).map(Number);
      drawAgent(world, [a[0], a[1]], a[2]);
      
      agents.push(a);
    }
    
    drawMatrixOnCanvas(can, world, getColor)
    
    let blocks = getBlocksFromTextarea(txa, "MPMAT", 3);
    mpm = {};
    for(let b of blocks) {
      const t = getValueAfterKeyword("MPMAT", b[0]);
      const m = getMatrixAfterKeyWord("MPMAT " + t, b, [3, 3]);
      mpm[t] = m;
    }
    
    t = 0;
  }
  
  btnRun.disabled = false;
});

txa.addEventListener("input", () => {
  btnRead.disabled = false;
});

btnRun.addEventListener("click", () => {
  if(btnRun.innerHTML == "Start") {
    btnAbout.disabled = true;
    btnSample.disabled = true;
    btnClear.disabled = true;
    btnRead.disabled = true;
    btnRun.innerHTML = "Stop";
    
    timer = setInterval(simulate, interval);
  } else {
    btnAbout.disabled = false;
    btnSample.disabled = false;
    btnClear.disabled = false;
    btnRead.disabled = false;
    btnRun.innerHTML = "Start";
    
    clearInterval(timer);
  }
});


{{< /script/runner >}}


## notes
+ This is a part of [25d66](/butiran/25d66/) project in investigating aor using abm approach.
+ Note [25f45](/butiran/25f45/), [25f49](/butiran/25f49/), [25f51](/butiran/25f51/), and [25f53](/butiran/25f53/) are another input of this project, which is preceeded this.
+ Agent types are available on [25e41](/butiran/25e41/) in range of 40-49.
