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
  constructor(id, state, x, y, temp) {
    this.id = id;
    this.state = state;
    this.x = x;
    this.y = y;
    this.temp = temp;
  
    this.element = document.createElement("label");
    this.element.style.display = "flex";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = this.id;
    input.checked = state;

    const text = document.createElement("span");
    text.innerHTML = "Sensor " + this.id.slice(-2);

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

function draw(sensor, canvas, color) {
  const xmin = 0;
  const xmax = 40;
  const ymin = 0;
  const ymax = 40;
  
  const XMIN = 0;
  const XMAX = canvas.width;
  const YMAX = canvas.height;
  const YMIN = 0;
  
  const X = transform(sensor.x, xmin, xmax, XMIN, XMAX);
  const Y = transform(sensor.y, ymin, ymax, YMIN, YMAX);
  
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(X, Y, 4, 0, 2*Math.PI);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(X, Y, 4, 0, 2*Math.PI);
  ctx.stroke();
  ctx.font = "12px Arial";
  ctx.fillText("" + sensor.temp, X + 10, Y + 4);
}

function toggleCheck(e) {
  update();
  
  for(let s of sensors) {
    const el = document.getElementById(s.id);
    if(el.checked) {
      draw(s, can, "#f00");
    } else {
      draw(s, can, "#fff");
    }
  }  
}

function update() {
  const size = 40;
  const cellSize = can.width / size;
  
  // Step 1: Sparse temperature data
  const knownPoints = [];
  let N = 0;
  for(let s of sensors) {
    const el = document.getElementById(s.id);
    if(el.checked) {
      knownPoints.push(
        {
          x: s.x,
          y: s.y,
          temp: s.temp,
        }
      )
    N++;
    }
  }
  
  // Step 2: Fill full grid using nearest known point
  function getNearestTemp(x, y) {
    let nearest = knownPoints[0];
    let minDist = Infinity;
    for (const p of knownPoints) {
      const dist = (x - p.x) ** 2 + (y - p.y) ** 2;
      if (dist < minDist) {
        minDist = dist;
        nearest = p;
      }
    }
    return nearest.temp;
  }
  
  if(N > 0) {
    // Step 3: Draw the heatmap
    const ctx = can.getContext("2d");
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const temp = getNearestTemp(x, y);
        const color = `hsl(${(1 - temp / 50) * 240}, 100%, 50%)`; // 0–50°C   range → blue to red
        ctx.fillStyle = color;
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

const cnt = document.getElementById("cnt1");

with(cnt.style) {
  border = "1px solid #888";
  width = "400px";
  height = "410px";
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
can.style.marginTop = "2em";
can.style.marginRight = "0.5em";

const Ns = 16;
const sx = [
   5, 15, 25, 35,
   5, 15, 25, 35,
   5, 15, 25, 35,
   5, 15, 25, 35,
];
const sy = [
   5,  5,  5,  5,
  15, 15, 15, 15,
  25, 25, 25, 25,
  35, 35, 35, 35,
];
const temp = [
  10, 10, 10, 10,
  20, 20, 20, 10,
  30, 20, 10, 10,
  40, 40, 30, 20,
];

const sensors = [];
for(let i = 0; i < Ns; i++) {
  ni = "" + i;
  if(i < 10) ni = "0" + ni;
  const s = new Sensor("sensor" + ni, false, sx[i], sy[i], temp[i]);
  s.addEventListener("click", toggleCheck);
  sensors.push(s);
}

for(let s of sensors) {
  draw(s, can, "#fff");
}

const label = document.createElement("span");
label.innerHTML = "Temperature";
label.style.paddingLeft = "0.5em";
label.style.fontWeight = "bold";

const img = document.createElement("img");
//img.src = "https://github.com/user-attachments/assets/c3e285de-66d9-445a-bd51-ec84cfd935c2";
img.width = "300";
img.height = "410";
img.style.width = "300px";
img.style.height = "410px";
img.style.border = "1px solid #888";

cnt.appendChild(leftDiv);
  leftDiv.append(label);
  for(let s of sensors) {
    s.appendTo(leftDiv);
  }
cnt.appendChild(rightDiv);
  rightDiv.appendChild(can);
cnt.appendChild(img);
{{< /script/runner >}}

+ Image url https://github.com/user-attachments/assets/c3e285de-66d9-445a-bd51-ec84cfd935c2 [20250517].
+ Story url https://medium.com/p/b948e6cc4240 [20250517].


## notes
+ This note is part of research project led by [Acep Purqon](/butiran/authors/purqon) [^viridi_2025].
+ Notes related to js are [25c22](/butiran/25c22), [25c36](/butiran/25c36), [25c39](/butiran/25c39), [25c52](/butiran/25c52).
+ Current interpolation [^gpt-4o_2025] can be advanced and further improved to give better insight.
+ It is necessary to dig deeper the topic [^kovats_2008].
+ Read material about coginitive digital twin [^el-mokhtari_2022] and try to understand it for the sub working project.
+ There is also reading material that easier to read [^nahata_2025], hopefully.
+ Another concept to learn is digital identity [^garey_2024], that would be better if also integrated to the system.
+ For non-numan, there is also non-human identity management [^macintyre_2024].


## refs
[^el-mokhtari_2022]: Karim El Mokhtari, Ivan Panushev, J. J. McArthur, "Development of a Cognitive Digital Twin for Building Management and Operations", Frontiers in Built Environment, vol 8, p 856873, 2022, url https://doi.org/10.3389/fbuil.2022.856873.
[^garey_2024]: Lorna Garey, "What Is Digital Identity?", OCI, 19 Sep 2024, url https://www.oracle.com/id/security/identity-management/digital-identity/ [20250517].
[^gpt-4o_2025]: GPT-4o, "Heatmap interpolation guide", butiran, 17 May 2025, url https://chatgpt.com/share/68280601-05b8-800a-9a92-1f563057b63f [20250517].
[^kovats_2008]: R. Sari Kovats, Shakoor Hajat, "Heat stress and public health: a critical review", Annual Review of Public Health, vol 29, p 41-55, Apr 2008, url https://doi.org/10.1146/annurev.publhealth.29.020907.090843.
[^macintyre_2024]: Barry McIntyre, "An Introduction to Non-Human Identity Management (NHIM)", Cyber Security Tribe, 7 Feb 2024, url https://www.cybersecuritytribe.com/articles/an-introduction-to-non-human-identity-management-nhim [20250517].
[^nahata_2025]: Anoushka Nahata, "Digital twins", College of Computing and Data Science, Nanyang Technological University, 2025, url https://dr.ntu.edu.sg/handle/10356/184582 [20250517].
[^viridi_2025]: Sparisoma Viridi, "purqon ag res", butiran, 11 Dec 2024, url https://dudung.github.io/butiran/24l06/ [20250517].
