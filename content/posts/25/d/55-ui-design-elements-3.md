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
+ To draw a circular particle or cirle.


## intro
+ It is another variant of previous UI element for output [^viridi_2025].


## result
Current result is as follow.

{{< script/runner id="script-1" >}}
class Particle {
  constructor(params) {
    this.mass = params.mass;
    this.diameter = params.diameter;
    this.color = params.color;
    this.x = params.x;
    this.y = params.y;
  }
}

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
  
  setBackgroundColor(color) {
    this.div.style.background =  color;
  }
  
  initCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    console.log(this.width, this.height);
    return this.canvas;
  }
  
  clearCanvas() {
    const ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = this.div.style.background;
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();
  }
  
  drawParticle(p) {
    if(p instanceof Particle) {
      const ctx = this.canvas.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, 0.5 * p.diameter, 0, 2*Math.PI);
      ctx.fill();
    } else {
      console.error("Cannot draw the given object!");
    }
  }
}

const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const cbx = new CanvasBox("Particles");
cnt.append(cbx.div);

const c1 = new Particle({x: 10, y: 10, diameter: 10, color: "#f00"});
const c2 = new Particle({x: 190, y: 115, diameter: 20, color: "#00f"});

cbx.initCanvas();
cbx.drawParticle(c1);
cbx.drawParticle(c2);
{{< /script/runner >}}


## class
There are two classes designed here. The first is `Particle` class.

```js
class Particle {
  constructor(params) {
    this.mass = params.mass;
    this.diameter = params.diameter;
    this.color = params.color;
    this.x = params.x;
    this.y = params.y;
  }
}
```

And the second is `TextareaBox` class.

```js
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
  
  setBackgroundColor(color) {
    this.div.style.background =  color;
  }
  
  initCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    console.log(this.width, this.height);
    return this.canvas;
  }
  
  clearCanvas() {
    const ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = this.div.style.background;
    ctx.rect(0, 0, this.width, this.height);
    ctx.fill();
  }
  
  drawParticle(p) {
    if(p instanceof Particle) {
      const ctx = this.canvas.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, 0.5 * p.diameter, 0, 2*Math.PI);
      ctx.fill();
    } else {
      console.error("Cannot draw the given object!");
    }
  }
}
```

## usage
An example how to use the classes is as follow.

```js
const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const cbx = new CanvasBox("Particles");
cnt.append(cbx.div);

const c1 = new Particle({x: 10, y: 10, diameter: 10, color: "#f00"});
const c2 = new Particle({x: 190, y: 115, diameter: 20, color: "#00f"});

cbx.initCanvas();
cbx.drawParticle(c1);
cbx.drawParticle(c2);
```


## notes
+ There is an important step to set the matched canvas internal resolution after its display size is set via style [^gpt-4o_2025].
+ There is a problem with width, height and style.width, style.height update. Current solution is using `initCanvas()` before drawing anything on the canvas. Pause at 1722.


## todo
+ Merge TextareaBox and CanvasBox (and also another box) to InputBox with tabs.


## refs
[^gpt-4o_2025]: GPT-4o, "Canvas Flex Overflow Fix", ChatGPT, 19 Apr 2025, url https://chatgpt.com/share/68037384-b070-800a-8779-06c39bf749ae [20250409].
[^viridi_2025]: Sparisoma Viridi, "ui design elements 2", butiran 25d54, 19 Apr 2025, url https://dudung.github.io/butiran/25d54/ [20250419].
