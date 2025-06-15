+++
title = 'abm bc-input'
date = '2025-06-08T04:14:00+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = ['abm']
categories = ['js']
url = '25f45'
+++

<!-- more -->

Input and ouput design for abm bc is as follow.

{{< script/loader >}}
src/25e41.js
src/25e60.js
src/25f45.js
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

addWorldAndWalls(txa);

btn.addEventListener("click", () => {
  let line = getLineFromTextarea(txa, "WORLD");
  let dim = getValueAfterKeyword("WORLD", line).map(Number);
  let m = createZeroMatrix(dim[0], dim[1]);

  let lines = getLinesFromTextarea(txa, "WALL");
  for(l of lines) {
    const w = getValueAfterKeyword("WALL", l).map(Number);
    drawWall(m, [w[0], w[1]], [w[2], w[3]], w[4]);
  }

  drawMatrixOnCanvas(can, m, getColor)
});
{{< /script/runner >}}


## inputs
1. A wall that encircles the world, along with its size and resolution: the total size of the 2D grid and the cell granularity, defined in terms of the number of cells. &check;
2. A bottomless cylindrical container for the mixture, simplified as two parallel walls separated by a specified width (in number of cells). &check;
3. The cylinder should be able to move upward at a defined lifting speed. &cross;
4. Agents representing two or three components of the granular mixture. &cross;
5. A movement probability matrix for each agent, consisting of 9 directional probabilities: up, down, left, right, the four diagonals, and staying in place. &cross;
6. Component concentrations in the mixture, with a corresponding encoding scheme for each component. &cross;
7. The initial packing structure of agents inside the container: random fill, lattice arrangement, or layered distribution by component. &cross;
8. The simulation stop condition, such as when the container is fully lifted and all agents become stable. &cross;
9. Visualization parameters, including color mapping for each component, output resolution, and the rendering frame interval. &cross;
10. A random seed for reproducibility (optional, but useful for consistent experimental results and debugging). &cross;

Above input specification and design is result of a discussion that refines initial idea [^gpt-4o_2025b].


## todo
+ Add Read button to read data and draw the result on canvas. 1854 &check;


## notes
+ Purpose of this note to design input elements and format for abm simulation of binary mixture in observing angle or repose (aor) as previously observed [^widartiningsih_2022].
+ In order to assure that a JS file is loaded a script marker is added as suggested in a discussion [^gpt-4o_2025a], which is the first time to know about IIFE (Immediately Invoked Function Expression) [^shrivastava_2024].
+ This script marker is also implemented to previous JS [^viridi_2025a], since it is used here, and also other JS [^viridi_2025b].
+ This note is part of two other notes, which are [25d66](/butiran/25d66/) and [25f43](/butiran/25f43/).
+ Add input title, format version, author, and date as suggested [^gpt-4o_2025c].
+ Rename it from "abm-aor 2-mix design" to "abm bc input" on 15-jun-2025.


## refs
[^gpt-4o_2025a]: GPT-4o, "A Tiny Console Trick to Track JS Files in Hugo", ChatGPT, 8 Jun 2025, url https://chatgpt.com/share/6844c09a-0490-800a-a2f8-5256c6133c76 [20250608].
[^gpt-4o_2025b]: GPT-4o, "Granular Material Simulation (ABM) for AOR: Input Specification & Design", ChatGPT, 8 Jun 2025, url https://chatgpt.com/share/6844d2ee-7178-800a-a16b-6b22f36c368f [20250608].
[^gpt-4o_2025c]: GPT-4o, "ABM Input Format Feedback", ChatGPT, 8 Jun 2025, url https://chatgpt.com/share/68456675-ea10-800a-9c5a-7a22fb445fdb [20250608].
[^shrivastava_2024]: Gaurav Shrivastava, "IIFE (Immediately Invoked Function Expression)", Medium, 20 Sep 2025, url https://medium.com/p/584fef2673b9 [20250608].
[^viridi_2025a]: Sparisoma Viridi, "js input from textarea", butiran, 29 May 2025, url [https://dudung.github.io/butiran/25e60/](/butiran/25e60/).
[^viridi_2025b]: Sparisoma Viridi, "js matrix to canvas", butiran, 21 May 2025, url [https://dudung.github.io/butiran/25e41/](/butiran/25e41/).
[^widartiningsih_2022]: P. M. Widartiningsih, M. I. R. Putra, D. P. P. Aji, A. N. F. Rudiawan, S. Viridi, "Experimental investigation of pile characteristics of non-spherical particles mixtures: pile height and angle of repose", Journal of Physics: Conference Series, vol 2243, no 1, p 01279, 2022, url http://doi.org/10.1088/1742-6596/2243/1/012079
