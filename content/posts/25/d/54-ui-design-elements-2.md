+++
title = 'ui design elements 2'
date = '2025-04-19T03:49:28+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25d54'
+++

<!-- more -->

## aim
+ To design input elements in the form of a label and a textarea.


## intro
+ There are previous notes about UI elements [^viridi_2025a], [^viridi_2025b] preceeding this note, that are conducted with the help of runner shortcode [^viridi_2025c].


## result
Current result is as follow.

{{< script/runner id="script-1" >}}
class TextareaBox {
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

    const txa = document.createElement("textarea");
    txa.style.overflowY = "scroll";
    txa.style.boxSizing = "border-box";
    txa.style.width = "100%";
    txa.style.flex = "1";
    txa.style.padding = "0.5em";
    
    this.div.append(lab);
    this.div.append(txa);
  }
  
  setWidth(width) {
    this.width = width;
    this.div.style.width = this.width;
  }
  
  setHeight(height) {
    this.height = height;
    this.div.style.height = this.height;
  }
  
  clearContent() {
    const txa = this.div.getElementsByTagName("textarea");
    txa[0].value = "";
  }
  
  addLine(line) {
    const txa = this.div.getElementsByTagName("textarea");
    if(txa[0].value == "") {
      txa[0].value += line;
    } else {
      txa[0].value += "\n" + line;
    }
  }
  
  getLines() {
    const txa = this.div.getElementsByTagName("textarea");
    const lines = txa[0].value.split('\n');
    return lines
  } 
}

const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const ibx = new TextareaBox("Params");
ibx.addLine("NTYPE 2");
ibx.addLine("NPART 100 100");
ibx.addLine("IFORM rectangular");
ibx.addLine("IDIST random");

console.log(ibx.getLines());

cnt.append(ibx.div);
{{< /script/runner >}}


## class
The `TextareaBox` class is as follow.

```js
class InputBox {
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

    const txa = document.createElement("textarea");
    txa.style.overflowY = "scroll";
    txa.style.boxSizing = "border-box";
    txa.style.width = "100%";
    txa.style.flex = "1";
    txa.style.padding = "0.5em";
    
    this.div.append(lab);
    this.div.append(txa);
  }
  
  setWidth(width) {
    this.width = width;
    this.div.style.width = this.width;
  }
  
  setHeight(height) {
    this.height = height;
    this.div.style.height = this.height;
  }
  
  clearContent() {
    const txa = this.div.getElementsByTagName("textarea");
    txa[0].value = "";
  }
  
  addLine(line) {
    const txa = this.div.getElementsByTagName("textarea");
    if(txa[0].value == "") {
      txa[0].value += line;
    } else {
      txa[0].value += "\n" + line;
    }
  }
  
  getLines() {
    const txa = this.div.getElementsByTagName("textarea");
    const lines = txa[0].value.split('\n');
    return lines
  }
}
```

## usage
Following lines is an example how to use the class.

```js
const cnt = document.getElementById("script-1");
cnt.style.width = "360px";
cnt.style.height = "200px";
cnt.style.background = "#eee";

const ibx = new InputBox("Params");
ibx.addLine("NTYPE 2");
ibx.addLine("NPART 100 100");
ibx.addLine("IFORM rectangular");
ibx.addLine("IDIST random");

console.log(ibx.getLines());

cnt.append(ibx.div);
```

This class has three UI elements, which are div as container, label as label of this element, and textarea as input area.


## notes
+ Electricity is down and some websites are also down, including GitHub and Google (intermittens), but YouTube not. It is now 0939. It is the internat data. It works after buy a data package, but the Wi-Fi requires power, which is now onl 7%. Pause connection and only edit and save it locally.
+ Consider complete at 1633 after renaming InputBox to TextareaBox.


## todo
+ Create TextareaBox similar to this one for text but advance it with canvas for graphic. For now the svg will be not used.


## refs
[^viridi_2025a]: Sparisoma Viridi, "ui design elements 0", butiran 25d49, 16 Apr 2025, url https://dudung.github.io/butiran/25d49/ [20250419].
[^viridi_2025b]: Sparisoma Viridi, "ui design elements 1", butiran 25d52, 18 Apr 2025, url https://dudung.github.io/butiran/25d52/ [20250419].
[^viridi_2025c]: Sparisoma Viridi, "script loader and runner", butiran 25d48, 16 Apr 2025, url https://dudung.github.io/butiran/25d48/ [20250419].
