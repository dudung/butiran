+++
title = 'abm buttons'
date = '2025-06-16T15:47:35+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['ab']
categories = ['js']
url = '25f51'
+++

<!-- more -->

Input, control, and ouput design for abm simulation is as follow.

{{< script/loader >}}
src/25e41.js
src/25e60.js
src/25f45.js
src/25f49.js
src/25f51.js
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


cnt.appendChild(div);
  div.append(txa);
  div.append(subdiv);
    subdiv.append(btnAbout);
    subdiv.append(btnSample);
    subdiv.append(btnClear);
    subdiv.append(btnRead);
    subdiv.append(btnRun);
  div.append(can);

btnRun.addEventListener("click", () => {
  if(btnRun.innerHTML == "Start") {
    btnAbout.disabled = true;
    btnSample.disabled = true;
    btnClear.disabled = true;
    btnRead.disabled = true;
    btnRun.innerHTML = "Stop";
  } else {
    btnAbout.disabled = false;
    btnSample.disabled = false;
    btnClear.disabled = false;
    btnRead.disabled = false;
    btnRun.innerHTML = "Start";
  }
});

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
  addWorld(txa);
  addBlankLine(txa);
  addEnclosedWall(txa);
  addBlankLine(txa);
  addContainerWall(txa);
  addBlankLine(txa);
  addMovementProbabilityMatrix(txa);
  addBlankLine(txa);
  addAgents(txa);

  btnRead.disabled = false;
});

btnRead.addEventListener("click", () => {
  let line = getLineFromTextarea(txa, "WORLD");
  
  if(line != undefined) {
    let dim = getValueAfterKeyword("WORLD", line).map(Number);
    let m = createZeroMatrix(dim[0], dim[1]);

    let lines1 = getLinesFromTextarea(txa, "WALL");
    for(let l of lines1) {
      const w = getValueAfterKeyword("WALL", l).map(Number);
      drawWall(m, [w[0], w[1]], [w[2], w[3]], w[4]);
    }

    let lines2 = getLinesFromTextarea(txa, "AGENT");
    for(let l of lines2) {
      const a = getValueAfterKeyword("AGENT", l).map(Number);
      drawAgent(m, [a[0], a[1]], a[2]);
    }
    
    drawMatrixOnCanvas(can, m, getColor)
    
    let blocks = getBlocksFromTextarea(txa, "MPMAT", 3);
    let mats = {};
    for(let b of blocks) {
      const t = getValueAfterKeyword("MPMAT", b[0]);
      const m = getMatrixAfterKeyWord("MPMAT " + t, b, [3, 3]);
      mats[t] = m;
    }
  }
  
  btnRun.disabled = false;
});

txa.addEventListener("input", () => {
  btnRead.disabled = false;
  console.log("d");
});

{{< /script/runner >}}


## notes
+ This is a part of [25d66](/butiran/25d66/) project in investigating aor using abm approach.
+ Note [25f45](/butiran/25f45/) and [25f49](/butiran/25f49/) are another input of this project, which is preceeded this.
+ Agent types are available on [25e41](/butiran/25e41/) in range of 40-49.
+ It shows the interaction between buttons and textarea and button, but not yet the simulation.
