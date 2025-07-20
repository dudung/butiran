+++
title = 'grain conf viewer'
date = '2025-07-20T05:28:23+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25g57'
+++

<!-- more -->

## notes
+ The term is chosen grain configuration instead of particle configuration, since it gives more nuance in the domain of granular physics [^gpt-4o_2025a].
+ As initial format several properties are considered, which are particle ID and types, x, y, z positions, fill and stroke colors [^gpt-4o_2025b].
+ The grain configuration viewer will be designed in a Hugo post using a shortcode with inline JS, but later will be ported to external JS for the simulation [^gpt-4o_2025c].
+ The use of frontmatter in enhancing CSV is advisable from a discussion[^gpt-4o_2025f].
+ Version number starts from 0.1 since it is not stable [^gpt-4o_2025e].
+ The shortcode will placed under `viewer` folder for future development of other viewer [^gpt-4o_2025f].
+ Progress of this note is tracked daily in [25g56](/butiran/25g56/) note.
  - `20-jul-2025` `v0.1` It can draw grains with different stroke and fill colors. It uses diameter instead of radius due to nature of measurement.


## inputs
+ Metadata and content of version 0.1 is as follow.
  ```csv
  ---
  version: 0.1
  description: Simple grain configuration
  columns: id type x y z d fill stroke
  units: - - mm mm mm mm - -
  ---
  000 A 1.00 1.00 0.00 2.0 #fee #a00
  001 B 2.00 1.00 0.00 1.5 #efe #0a0
  002 C 3.00 1.00 0.00 0.5 #eef #00a
  003 D 3.00 2.00 0.00 1.0 #ffe #aa0
  004 E 1.00 2.00 0.00 0.5 #eff #0aa
  005 F 1.00 3.00 0.00 0.6 #fef #a0a
  006 G 2.00 3.00 0.00 1.0 #fff #aaa
  007 H 3.00 3.00 0.00 1.0 #888 #000
  ```


## shortcode
+ Shortcode of verison 0.1 is as follow.
  ```html
  <div class="viewer-grain" id="view-container">
  </div>

  <script>
  function getLines(text) {
    const lines = text.split("\n");
    if(lines[0].length == 0) lines.shift();
    if(lines[lines.length-1].length == 0) lines.pop();
    return lines;
  }

  function getHeader(lines) {
    for(let l of lines) {
      if(l.indexOf("columns:") > -1) {
        let cols = l.split(":")[1].split(" ");
        if(cols[0].length == 0) cols.shift();
        if(cols[cols.length-1].length == 0) cols.pop();
        return cols;
      }
    }
  }

  function getGrains(lines, header) {
    const grains = [];
    let isData = false;
    const N = lines.length;
    for(let i = 0; i < N; i++) {
      if(isData) {
        const cols = lines[i].split(" ");
        grain = {};
        const N2 = header.length;
        for(let j = 0; j < N2; j++) {
          grain[header[j]] = cols[j]
        }
        grains.push(grain);
      }
      if(lines[i].indexOf("---") > -1 && i > 0) {
        isData = true;
      }    
    }
    return grains;
  }

  function transform(x, src, dest) {
    const xmin = src[0];
    const xmax = src[1];
    const XMIN = dest[0];
    const XMAX = dest[1];
    
    let X = (x - xmin) / (xmax - xmin);
    X *= (XMAX - XMIN);
    X += XMIN;
    return X;
  }

  function drawGrainsOnCanvas(grains, can) {
    const XMIN = 0;
    const XMAX = parseInt(can.width);
    const YMIN = parseInt(can.height);
    const YMAX = 0;
    
    const xmin = 0;
    const xmax = 4;
    const ymin = 0;
    const ymax = 4;
    
    const ctx = can.getContext("2d");
    for(let g of grains) {
      const x = parseFloat(g["x"]);
      const y = parseFloat(g["y"]);
      const d = parseFloat(g["d"]);
      const fillColor = g["fill"];
      const strokeColor = g["stroke"];
      
      const X = transform(x, [xmin, xmax], [XMIN, XMAX]);
      const Y = transform(y, [ymin, ymax], [YMIN, YMAX]);
      const X2 = transform(x + 0.5*d, [xmin, xmax], [XMIN, XMAX]);
      const R = X2 - X;
      
      ctx.fillStyle = fillColor;
      ctx.beginPath()
      ctx.arc(X, Y, R, 0, 2*Math.PI);
      ctx.fill();
      
      ctx.lineWidth = "1";
      ctx.strokeStyle = strokeColor;
      ctx.beginPath()
      ctx.arc(X, Y, R, 0, 2*Math.PI);
      ctx.stroke();
    }
  }
  </script>

  <script>
  const div = document.getElementById("view-container");
  with(div.style) {
    width = "200px";
    height = "200px";
    display = "block";
    border = "1px solid #ccc";
    background = "#fafafa";
    marginTop = "0.25em";
  }
  const can = document.createElement("canvas");
  with(can) {
    width = "200";
    height = "200";
    with(style) {
      width = "200px";
      height = "200px";
   }
  }
  div.appendChild(can);

  const lines = getLines("{{- .Inner -}}");
  const header = getHeader(lines);
  const grains = getGrains(lines, header);
  drawGrainsOnCanvas(grains, can);
  </script>
  ```

## results
+ Result of last version is as follow.
{{< viewer/grain >}}
---
version: 0.1
description: Simple grain configuration
columns: id type x y z d fill stroke
units: - - mm mm mm mm - -
---
000 A 1.00 1.00 0.00 2.0 #fee #a00
001 B 2.00 1.00 0.00 1.5 #efe #0a0
002 C 3.00 1.00 0.00 0.5 #eef #00a
003 D 3.00 2.00 0.00 1.0 #ffe #aa0
004 E 1.00 2.00 0.00 0.5 #eff #0aa
005 F 1.00 3.00 0.00 0.6 #fef #a0a
006 G 2.00 3.00 0.00 1.0 #fff #aaa
007 H 3.00 3.00 0.00 1.0 #888 #000
{{< /viewer/grain >}}


## todo
+ Add to frotmatter the world and canvas dimensions for more flexible display, e.g.
  ```yaml
  world: 0 0 200 200
  canvas: 0 200 200 0
  ```
+ Modify code to use the additional metadata.


## refs
[^gpt-4o_2025a]: GPT-4o, "On the Terminology of Particle and Grain Configurations in Computational Materials Simulations", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c1d67-0180-800a-ad74-c53c7feaf6ef [20250720].
[^gpt-4o_2025b]: GPT-4o, "Designing a CSV-Based Format for 2D Granular Particle Visualization", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c212a-09c8-800a-a2fa-3275c832ca9d [20250720].
[^gpt-4o_2025c]: GPT-4o, "Integrating Simulation Visuals in Scientific Blogging with Hugo and JavaScript", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c23bd-baf8-800a-b924-0b2c5677a03c [20250720].
[^gpt-4o_2025d]: GPT-4o, "Designing a Flexible CSV Format with Frontmatter for Grain Configuration Data", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c5bdd-00e8-800a-8973-d7507c433f73 [20250720].
[^gpt-4o_2025e]: GPT-4o, "Versioning Strategy and Compatibility Guidelines for Particle Configuration Formats", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c5dea-ea2c-800a-b7f1-2d0a511e7f02 [20250720].
[^gpt-4o_2025f]: GPT-40, "Viewer Shortcode Design: Specific vs Multi-Type Approaches in Hugo", ChatGPT, 20 Jul 2025, url https://chatgpt.com/share/687c6a33-2aa4-800a-a25e-d3fa550754c2 [20250720].
