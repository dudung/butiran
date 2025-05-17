---
title: "svg element with js"
date: 2023-09-28T14:12:00+07:00
authors: ['Sparisoma Viridi']
tags: ['xx1000']
draft: false
math: true
url: "0073"
---
{{< toc >}}


# introduction
+ SVG element in a HTML page can be created dynamically using JavaScript and customized its sub-elements, which is a little bit different than in createing HTML element since SVG is described in XML ([Quante, 2021](https://blog.q-bit.me/how-to-create-svg-elements-with-javascript/)).
+ Using only pure JavaScript or known as Vanilla JavaScript, without help from any JS libraries or frameworks, SVG elements can be created and manipulated easily but with slightly different way than in handling HTML elemements, e.g. it is used `createElementNS` instead of just `createElement` ([Katz, 2021](https://javascript.plainenglish.io/how-to-create-an-svg-element-with-vanilla-javascript-a6b140745196)).
+ Pablo, as a lightweight, open source library, can be used for this purpose, since it is simplifying the construction and manipulation of SVGs in JavaScript, that enables developers to more easily work with dynamically generated vector graphics while avoiding the verbose workflow of vanilla JavaScript ([Omotayo, 2022](https://blog.logrocket.com/building-svgs-javascript-pablo/)).


## animation
+ An animated watch can be built with SVG tags by typing them manually inline in a HTML file and then animated using JavaScript ([Borb&eacute;ly, 2021](https://www.freecodecamp.org/news/svg-javascript-tutorial/)).
+ Animation of SVG elements triggered by user interaction can also be built from primitive shapes and then animated using JS with the help of JS library, e.g. Pablo, where the event detection and handler are easy to implement ([Omotayo, 2022](https://blog.logrocket.com/building-svgs-javascript-pablo/)).
+ Similar dynamic SVG elements can also provided using JS library designed in supporting animation, e.g. GSAP ([Roblewsky, 2020](https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/)).
+ Actually without JS, using only CSS, SVG elements can be animated, but for more complicated animation some tools might be required, e.g. SVGator, Snap.svg, SVG.js, VivusJS, mo.js, GSAP, Animate.CSS, and Framer Motion ([Amstrong, 2022](https://blog.logrocket.com/how-to-animate-svg-css-tutorial-examples/)).


## js function
+ To simplify creating process of SVG elements some functions can be built, e.g. for creating a SGV container and a line ([Matt, 2014](https://stackoverflow.com/a/21362202/9475509)).
+ Modified code from reference is given as follow
  ```js
  function shape(type, attrs) {
    var elem = document.createElementNS(
      'http://www.w3.org/2000/svg',
      type
    );
    for(attr in attrs) {
      elem.setAttribute(attr, attrs[attr]);
    }
    return elem;
  }
  ```

{{< html >}}
<script>
function shape(type, attrs) {
  var elem = document.createElementNS(
    'http://www.w3.org/2000/svg', 
    type
  );
  for(attr in attrs) {
    elem.setAttribute(attr, attrs[attr]);
  }
  return elem;
}
</script>

{{< /html >}}


## line
+ Container
  ```html
  <svg id="svg-line"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-line"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-line');
attrs = {
  'x1': '20',
  'y1': '150',
  'x2': '100',
  'y2': '40',
  'stroke': '#4a4',
  'stroke-width': '1px',
}
var l1 = shape('line', attrs);
cnt.appendChild(l1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-line');
  attrs = {
    'x1': '20',
    'y1': '150',
    'x2': '100',
    'y2': '40',
    'stroke': '#4a4',
    'stroke-width': '1px',
  }
  var l1 = shape('line', attrs);
  cnt.appendChild(l1);
  ```

## rect
+ Container
  ```html
  <svg id="svg-rect"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-rect"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-rect');
attrs = {
  'x': '20',
  'y': '20',
  'rx': '10',
  'ry': '10',
  'width': '50',
  'height': '100',
  'stroke': '#4a4',
  'stroke-width': '1px',
  'fill': '#4f9'
}
var r1 = shape('rect', attrs);
cnt.appendChild(r1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-rect');
  attrs = {
    'x': '20',
    'y': '20',
    'rx': '10',
    'ry': '10',
    'width': '50',
    'height': '100',
    'stroke': '#4a4',
    'stroke-width': '1px',
    'fill': '#4f9'
  }
  var r1 = shape('rect', attrs);
  cnt.appendChild(r1);
  ```

## circle
+ Container
  ```html
  <svg id="svg-circle"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-circle"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-circle');
attrs = {
  'cx': '150',
  'cy': '100',
  'r': '80',
  'stroke': '#f00',
  'stroke-width': '2px',
  'fill': 'lightblue'
}
var c1 = shape('circle', attrs);
cnt.appendChild(c1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-circle');
  attrs = {
    'cx': '150',
    'cy': '100',
    'r': '80',
    'stroke': '#f00',
    'stroke-width': '2px',
    'fill': 'lightblue'
  }
  var c1 = shape('circle', attrs);
  cnt.appendChild(c1);
  ```

## ellipse
+ Container
  ```html
  <svg id="svg-ellipse"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-ellipse"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-ellipse');
attrs = {
  'cx': '100',
  'cy': '100',
  'rx': '40',
  'ry': '80',
  'stroke': 'magenta',
  'stroke-width': '2px',
  'fill': 'lightcyan'
}
var e1 = shape('ellipse', attrs);
cnt.appendChild(e1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-ellipse');
  attrs = {
    'cx': '100',
    'cy': '100',
    'rx': '40',
    'ry': '80',
    'stroke': 'magenta',
    'stroke-width': '2px',
    'fill': 'lightcyan'
  }
  var e1 = shape('ellipse', attrs);
  cnt.appendChild(e1);
  ```

## polygon
+ Container
  ```html
  <svg id="svg-polygon"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-polygon"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-polygon');
attrs = {
  'points': '  20 40   60  20  80  20 \
              100 60  150  70 160 150 \
              100 180  50 180  20 150 \
               50 120  50  80 ',
  'stroke': 'darkgreen',
  'stroke-width': '2px',
  'fill': 'lightgreen'
}
var pg1 = shape('polygon', attrs);
cnt.appendChild(pg1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-polygon');
  attrs = {
    'points': '  20 40   60  20  80  20 \
                100 60  150  70 160 150 \
                100 180  50 180  20 150 \
                 50 120  50  80 ',
    'stroke': 'darkgreen',
    'stroke-width': '2px',
    'fill': 'lightgreen'
  }
  var pg1 = shape('polygon', attrs);
  cnt.appendChild(pg1);
  ```

## polygon
+ Container
  ```html
  <svg id="svg-polyline"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-polyline"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-polyline');
attrs = {
  'points': '  20 40   60  20  80  20 \
              100 60  150  70 160 150 \
              100 180  50 180  20 150 \
               50 120  50  80 ',
  'stroke': 'darkgreen',
  'stroke-width': '2px',
  'fill': 'transparent'
}
var pl1 = shape('polyline', attrs);
cnt.appendChild(pl1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-polyline');
  attrs = {
    'points': '  20 40   60  20  80  20 \
                100 60  150  70 160 150 \
                100 180  50 180  20 150 \
                 50 120  50  80 ',
    'stroke': 'darkgreen',
    'stroke-width': '2px',
    'fill': 'transparent'
  }
  var pl1 = shape('polyline', attrs);
  cnt.appendChild(pl1);
  ```

## path
+ Container
  ```html
  <svg id="svg-path"
    width="200"
    height="200"
    style="background:#f4f4f4;">
  </svg>
  ```
+ Result
{{< html >}}
<svg id="svg-path"
  width="200"
  height="200"
  style="background:#f4f4f4;"
</svg>

<script>
var cnt = document.getElementById('svg-path');
attrs = {
  'd': 'M100,100 l20,0, v20 h10 v50 h-100 L10,10, H100',
  'stroke': 'darkgreen',
  'stroke-width': '2px',
  'fill': 'transparent'
}
var pt1 = shape('path', attrs);
cnt.appendChild(pt1);
</script>
{{< /html >}}
+ Code
  ```js
  var cnt = document.getElementById('svg-path');
  attrs = {
    'd': 'M100,100 l20,0, v20 h10 v50 h-100 L10,10, H100',
    'stroke': 'darkgreen',
    'stroke-width': '2px',
    'fill': 'transparent'
  }
  var pt1 = shape('path', attrs);
  cnt.appendChild(pt1);
  ```

## notes
+ Basic shapes article  provides more information about shapes used in SVG ([MDN, 2023]((https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes))).
+ The article Animationg SVG with CSS gives information about how to modified SVG image, which created by an application, clean it, and add CSS animation to it ([Coyier, 2017](https://css-tricks.com/animating-svg-css/)).
