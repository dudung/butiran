+++
title = 'ui design elements 3'
date = '2025-04-19T16:34:44+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25d55'
+++

<!-- more -->

## aim
+ To design input elements in the form of a label and a canvas.


## intro
+ It is another variant of previous UI element for output [^viridi_2025].


## result
Current result is as follow.

{{< script/runner id="script-1" >}}
class CanvasBox {
  constructor(label) {
    this.label = label;
    this.width = "200px";
    this.height = "150px";
    this.border = "0px #4f81bd solid";
    
    this.div = document.createElement("div");
    this.div.style.width = this.width;
    this.div.style.height = this.height;
    this.div.style.border = this.border;
    this.div.style.background = "#ddd";
    this.div.style.display = "flex";
    this.div.style.flexDirection = "column";
    
    const lab = document.createElement("label");
    lab.innerHTML = this.label;
    lab.style.boxSizing = "border-box";
    lab.style.width = "100%";
    lab.style.paddingLeft = "0.5em";
    lab.style.background = "#eee";
    lab.style.borderLeft = "1px #888 solid";
    lab.style.borderTop = "1px #888 solid";
    lab.style.borderRight = "1px #888 solid";

    const can = document.createElement("canvas");
    can.style.boxSizing = "border-box";
    can.style.width = "100%";
    can.style.height = "100%";
    can.style.flex = "1";
    can.style.display = "block";
    can.style.border = "1px #888 solid";
    this.canvas = can;
        
    this.div.append(lab);
    this.div.append(can);
  }
  
  setWidth(width) {
    this.width = width;
    this.div.style.width = this.width;
    this.initCanvas();
  }
  
  setHeight(height) {
    this.height = height;
    this.div.style.height = this.height;
    this.initCanvas();
  }
  
  initCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    console.log(rect.width);
    console.log(rect.height);
  }
  
  clearCanvas() {
  }
}

const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const cbx = new CanvasBox("Particles");

cnt.append(cbx.div);
{{< /script/runner >}}


## notes
+ There is an important step to set the matched canvas internal resolution after its display size is set via style [^gpt-4o_2025].
+ There is a problem with width, height and style.width, style.height update. Current solution is using `initCanvas()` before drawing anything on the canvas. Pause at 1722.


## todo
+ Merge TextareaBox and CanvasBox (and also another box) to InputBox with tabs.


## refs
[^gpt-4o_2025]: GPT-4o, "Canvas Flex Overflow Fix", ChatGPT, 19 Apr 2025, url https://chatgpt.com/share/68037384-b070-800a-8779-06c39bf749ae [20250409].
[^viridi_2025]: Sparisoma Viridi, "ui design elements 2", butiran 25d54, 19 Apr 2025, url https://dudung.github.io/butiran/25d54/ [20250419].
