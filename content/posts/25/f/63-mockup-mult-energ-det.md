+++
title = 'mockup mult-energ-det'
date = '2025-06-24T07:33:47+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['mockup', 'abm']
categories = ['js']
url = '25f63'
+++

<!-- more -->

A mockup for multi-energy particles detector mechanism (dark red: lowest energy, dark green: highest energy);

{{< script/loader >}}
src/25e41.js
src/25e60.js
src/25f45.js
src/25f49.js
src/25f51.js
src/25f53.js
src/25f54.js
src/25f63.js
{{< /script/loader >}}

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");

const style2 = {
  display: "flex",
  border: "0px #aaf solid",
  background: "#fafaff",
  width: "800px",
  height: "250px",
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
  height: "250px",
  border: "1px #888 solid",
  flexShrink: "0",
  boxSizing: "border-box",
  background: "#fff",
};
const can = createElement("canvas", style5);
can.width = "400";
can.height = "250";
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
  height: "20px",
  paddingLeft: "0.5em",
  lineHeight: "1.2em",
  fontFamily: "Consolas",
  fontSize: "14px",
};
const divTime = createElement("div", style7);
divTime.id = "div-time";

const style8 = {
  height: "116px",
  display: "flex",
  alignItems: "flex-end",
  padding: "2px",
};
const divBar = createElement("div", style8);
divBar.id = "div-bar";


cnt.appendChild(div);
  div.append(txa);
  div.append(subdiv);
    subdiv.append(btnAbout);
    subdiv.append(btnSample);
    subdiv.append(btnClear);
    subdiv.append(btnRead);
    subdiv.append(btnRun);
    subdiv.append(divTime);
    subdiv.append(divBar);
  div.append(can);

btnAbout.addEventListener("click", () => {
  let text = "";
  text += "\nProject: mepd";
  text += "\nAuthor: Sparisoma Viridi";
  text += "\nVersion: 0.1 (2025)";
  text += "\nDescription: Mockup for multi-energy particle detection mechanism.";
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
  addWorld3(txa);                     /* v3 */
  addBlankLine(txa);
  addEnclosedWall3(txa);              /* v3 */
  addBlankLine(txa);
  addContainerWall3(txa);             /* v3 */
  addBlankLine(txa);

  addFilters(txa);
  addBlankLine(txa);

  addMovementProbabilityMatrix3(txa); /* v3 */
  addAgents3(txa);                    /* v3 */

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
    timer = setInterval(simulate2, interval);
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
+ This is a part of [25c26](/butiran/25c26/) project in investigating particles energy.
+ Next plan is to obtain comments and suggestions in the next meeting for improvement.
+ Visulaization might be required to display the result (L, M, R values) graphically.
