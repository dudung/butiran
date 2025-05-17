+++
title = 'heatmap draft'
date = '2025-05-17T03:39:42+07:00'
authors = ['viridi', 'purqon', 'aditya', 'irvianto']
draft = false
type = 'notes'
tags = ['ap', 'heatmap']
categories = []
url = '25e31'
+++

<!-- more -->

It is a draft of a heatmap for visualization of some sensors reading.


## demo
Following is a demo in draft stage.

{{< script/runner id="cnt1" >}}
class Sensor {
  constructor(id, state, x, y) {
    this.id = id;
    this.state = state;
    this.x = x;
    this.y = y;
  
    this.element = document.createElement("label");
    this.element.style.display = "flex";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = this.id;
    input.checked = state;

    const text = document.createElement("span");
    text.innerHTML = "Sensor " + this.id.slice(-1);

    this.element.appendChild(input);
    this.element.appendChild(text);
  }

  appendTo(parent) {
    parent.appendChild(this.element);
    }
  
  addEventListener(event, func) {
    const el = this.element.querySelector("#" + this.id);
    el.addEventListener(event, func);
  }
}

function transform(a, amin, amax, AMIN, AMAX) {
  let b = (a - amin) / (amax - amin);
  b *= (AMAX - AMIN);
  b += AMIN;
  return b;
}

function clear(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(sensor, canvas, fill) {
  const xmin = 0;
  const xmax = 1;
  const ymin = 0;
  const ymax = 1;
  
  const XMIN = 0;
  const XMAX = canvas.width;
  const YMIN = canvas.height;
  const YMAX = 0;
  
  const X = transform(sensor.x, xmin, xmax, XMIN, XMAX);
  const Y = transform(sensor.y, ymin, ymax, YMIN, YMAX);
  
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(X, Y, 4, 0, 2*Math.PI);
  ctx.fill();
  ctx.strokeStyle = "#f00";
  ctx.beginPath();
  ctx.arc(X, Y, 4, 0, 2*Math.PI);
  ctx.stroke();
}

function toggleCheck(e) {
  const id = e.target.id;
  const el = document.getElementById(id);
  if(el.checked) {
    for(let s of sensors) {
      if(s.id == el.id) {
        draw(s, can, "#f00");
      }
    }
  } else {
    for(let s of sensors) {
      if(s.id == el.id) {
        draw(s, can, "#fff");
      }
    }
  }
}

const cnt = document.getElementById("cnt1");

with(cnt.style) {
  border = "1px solid #888";
  width = "400px";
  height = "300px";
  display = "flex";
}

const leftDiv = document.createElement("div");
with(leftDiv.style) {
  background = "#eee";
  flex = "1";
}

const rightDiv = document.createElement("div");
with(rightDiv.style) {
  background = "#eee";
  flex = "3";
}

const can = document.createElement("canvas");
can.width = "300";
can.height = "300";
can.style.width = can.width + "px";
can.style.height = can.height + "px";
can.style.background = "white";

const s0 = new Sensor("sensor0", false, 0.1, 0.1);
s0.addEventListener("click", toggleCheck);
const s1 = new Sensor("sensor1", false, 0.8, 0.2);
s1.addEventListener("click", toggleCheck);
const s2 = new Sensor("sensor2", false, 0.5, 0.7);
s2.addEventListener("click", toggleCheck);
const s3 = new Sensor("sensor3", false, 0.1, 0.9);
s3.addEventListener("click", toggleCheck);

const sensors = [s0, s1, s2, s3];
for(let s of sensors) {
  draw(s, can, "#fff");
}

const label = document.createElement("span");
label.innerHTML = "Temperature";
label.style.paddingLeft = "0.5em";
label.style.fontWeight = "bold";

cnt.appendChild(leftDiv);
  leftDiv.append(label);
  for(let s of sensors) {
    s.appendTo(leftDiv);
  }
cnt.appendChild(rightDiv);
  rightDiv.appendChild(can)
{{< /script/runner >}}


## notes
+ This note is part of research project led by [Acep Purqon](/butiran/authors/purqon) [^viridi_2025].
+ Notes related to js are [25c22](/butiran/25c22), [25c36](/butiran/25c36), [25c39](/butiran/25c39), [25c52](/butiran/25c52).


## refs
[^viridi_2025]: Sparisoma Viridi, "purqon ag res", butiran, 11 Dec 2024, url https://dudung.github.io/butiran/24l06/ [20250517].


