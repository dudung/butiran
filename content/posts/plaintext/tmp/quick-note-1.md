---
title: "quick note 1"
date: 2023-12-11T06:03:00+08:00
authors: ['Sparisoma Viridi']
tags: ['tmp']
draft: false
math: false
url: "0003"
---
{{< toc >}}


## 20-wed
{{< testcode >}}
{{< /testcode >}}


## 11-mon
+ `0609` SVG for drawing nodes
{{< html >}}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  viewBox="0 0 200 200"
  style="background:none; border:1px solid #888;">
  <g fill="rgba(125, 200, 255, 0.5)" stroke="none" stroke-width="0.5">
    <circle id="c00" /> <circle id="c01" />
    <circle id="c02" /> <circle id="c03" />
    <circle id="c04" /> <circle id="c05" />
    <circle id="c06" /> <circle id="c07" />
    <circle id="c08" /> <circle id="c09" />
    <circle id="c10" /> <circle id="c11" />
    <circle id="c12" /> <circle id="c13" />
    <circle id="c14" /> <circle id="c15" />
  </g>
  
  <script>
    let c = document
      .getElementsByTagNameNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
    let ox = 100;
    let oy = 100;
    let R = 80;
    let j = 0;
    for(let i of c) {
      let cx = ox + R * Math.cos(j * Math.PI / 8);
      let cy = oy + R * Math.sin(j * Math.PI / 8);
      i.setAttribute('cx', cx);
      i.setAttribute('cy', cy);
      i.setAttribute('r', 10);
      let rr = j * 17;
      let bb = j * 17;
      let gg = j * 17;
      let color = 'rgb(' + rr + ',' + gg + ',' + bb + ')';
      i.setAttribute('fill', color);
      j++;
    }
  </script>
</svg>
{{< /html >}}
  - It can not be shown online, but ok while offline with Hugo.
  - JS script seems not executed on GitHub &rightarrow; `<` in `for` has been identified as open tag.
    + e.g. `for(let i = 0; i < N; i++) {`.
  - Change loop using `of` but there is problem when inluce from file since all variables are already defined.
  - Close at `0939` and move to RKI.
+ `0603` Start this as template.
