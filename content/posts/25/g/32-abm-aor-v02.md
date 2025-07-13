+++
title = 'abm-aor v0.2'
date = '2025-07-12T17:33:00+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['abm']
categories = ['js']
url = '25g32'
+++

<!-- more -->

It is update version of 25f54.

Simulation for angle of repose of granular materials mixture using abm.

{{< script/loader >}}
src/25e41.js
src/25e60.js
src/25f45.js
src/25f49.js
src/25f51.js
src/25f53.js
src/25g32.js
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
btnSample = createElement("button", style6);
btnSample.innerHTML = "Sample";

btnRead = createElement("button", style6);
btnRead.innerHTML = "Read";

btnAbout = createElement("button", style6);
btnAbout.innerHTML = "About";

btnRun = createElement("button", style6);
btnRun.innerHTML = "Start";

btnClear = createElement("button", style6);
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
  text += "\nVersion: 0.2 (2025)";
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
  addHeader_v0_2(txa);
  addBlankLine(txa);
  addEndTime_v0_2(txa);                   /* v0.2 */
  addBlankLine(txa);
  addConcentration_v0_2(txa);             /* v0.2 */
  addBlankLine(txa);
  addMovementProbabilityMatrix_v0_2(txa); /* v0.2 */
  addBlankLine(txa);
  addWorld_v0_2(txa);                     /* v0.2 */
  addBlankLine(txa);
  addEnclosedWall_v0_2(txa);              /* v0.2 */
  addBlankLine(txa);
  addContainerWall_v0_2(txa);             /* v0.2 */
  addBlankLine(txa);
  addAgents_v0_2(txa);                    /* v0.2 */

  btnRead.disabled = false;
});

btnRead.addEventListener("click", () => {
  let line = getLineFromTextarea(txa, "WORLD");
  
  if(line != undefined) {
    let dim = getValueAfterKeyword("WORLD", line).map(Number);
    world = createZeroMatrix(dim[1], dim[0]);
    
    let lines0a = getLinesFromTextarea(txa, "FRACTION");
    let fraction = getValueAfterKeyword("FRACTION", lines0a[0]).map(Number);
    
    let lines0b = getLinesFromTextarea(txa, "TEND");
    tend = parseInt(getValueAfterKeyword("TEND", lines0b[0]));
    
    let lines1 = getLinesFromTextarea(txa, "WALL");
    for(let l of lines1) {
      const w = getValueAfterKeyword("WALL", l).map(Number);
      drawWall(world, [w[0], w[1]], [w[2], w[3]], w[4]);
    }
    
    agents = [];
    let lines2 = getLinesFromTextarea(txa, "AGENT");
    for(let l of lines2) {
      const a = getValueAfterKeyword("AGENT", l).map(Number);
      agents.push(a);
    }
    
    let blocks = getBlocksFromTextarea(txa, "MPMAT", 3);
    mpm = {};
    keys = [];
    for(let b of blocks) {
      const t = getValueAfterKeyword("MPMAT", b[0]);
      const m = getMatrixAfterKeyWord("MPMAT " + t, b, [3, 3]);
      mpm[t] = m;
      keys.push(parseInt(t));
    }
    
    // Change agent types according to fraction
    for(a of agents) {
        const x = Math.random();
        let cumul = 0;
        const cumulSum = fraction.map(val => cumul += val);
        let idx = cumulSum.findIndex(cumVal => x < cumVal);
        a[2] = keys[idx];
        drawAgent(world, [a[0], a[1]], a[2]);
    }
    
    drawMatrixOnCanvas(can, world, getColor)
    
    t = 0;
    divTime.innerHTML = "t = " + t;
  }
  
  btnRun.disabled = false;
});

txa.addEventListener("input", () => {
  btnRead.disabled = false;
});

btnRun.addEventListener("click", () => {
  if(btnRun.innerHTML == "Start" && t < tend) {
    btnAbout.disabled = true;
    btnSample.disabled = true;
    btnClear.disabled = true;
    btnRead.disabled = true;
    btnRun.innerHTML = "Stop";
    
    timer = setInterval(simulate_v0_2, interval);
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
+ Previous version (0.1 - 2025) is on [25f54](/butiran/25f54/).
+ Some information are on [25g31](/butiran/25g31/).
+ Update features are termination time `TEND` and granular mixture `FRACTION` as parameters.
