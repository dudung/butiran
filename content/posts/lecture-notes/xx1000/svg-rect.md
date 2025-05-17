---
title: "svg rect"
date: 2023-09-15T19:43:00+07:00
authors: ['Sparisoma Viridi']
tags: ['xx1000']
draft: false
math: true
url: "0047"
---
{{< toc >}}

## predefined shapes
There are at least seven predefined SVG shape elements that can be used, which are rectangle, circle, ellipse, line, polyline, polygon, and path ([W3Schools, 2023](https://www.w3schools.com/graphics/svg_rect.asp)). Here the first shape element is presented, rectangle `rect` element.


## svg
+ Default values
  - `width="300"`
  - `height="150"`


## rect, width, height
+ Code
  ```md
  {{</* html */>}}
  <svg style="background: #eee;">
    <rect width="50" height="50"></rect>
  </svg>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect width="50" height="50"></rect>
  </svg>
  {{< /html >}}


## rect, x, y
+ Code
  ```md
  {{</* html */>}}
  <svg style="background: #eee;">
    <rect x="80" y="40" width="50" height="50"></rect>
  </svg>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect x="80" y="40" width="50" height="50"></rect>
  </svg>
  {{< /html >}}


## rect, stroke, color, opacity (fill: none)
+ Code
  ```md
  {{</* html */>}}
  <svg style="background: #eee;">
    <rect x="40" y="25" width="100" height="60"
    style="
      stroke: blue;
      stroke-width: 2px;
      fill: none;">
    </rect>
    <rect x="70" y="45" width="100" height="60"
    style="
      stroke: blue;
      stroke-width: 2px;
      fill: none;">
    </rect>
    <rect x="120" y="65" width="100" height="60"
    style="
      stroke: blue;
      stroke-width: 2px;
      stroke-opacity: 0.5;
      fill: none;">
    </rect>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect x="40" y="25" width="100" height="60"
    style="
      stroke: blue;
      stroke-width: 2px;
      fill: none;">
    </rect>
    <rect x="70" y="45" width="100" height="60"
    style="
      stroke: blue;
      stroke-width: 2px;
      fill: none;">
    </rect>
    <rect x="120" y="65" width="100" height="60"
    style="
      stroke: blue;
      stroke-width: 2px;
      stroke-opacity: 0.5;
      fill: none;">
    </rect>
  </svg>
  {{< /html >}}


## rect, fill, color, opacity
+ Code
  ```md
  {{</* html */>}}
    <rect x="40" y="25" width="100" height="60"
    style="
      fill: lightblue;">
    </rect>
    <rect x="70" y="45" width="100" height="60"
    style="
      fill: blue;
      fill-opacity: 0.2;">
    </rect>
    <rect x="120" y="65" width="100" height="60"
    style="
      fill: blue;
      fill-opacity: 0.5;">
    </rect>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect x="40" y="25" width="100" height="60"
    style="
      fill: lightblue;">
    </rect>
    <rect x="70" y="45" width="100" height="60"
    style="
      fill: blue;
      fill-opacity: 0.2;">
    </rect>
    <rect x="120" y="65" width="100" height="60"
    style="
      fill: blue;
      fill-opacity: 0.5;">
    </rect>
  </svg>
  {{< /html >}}


## rect, animate
+ Code
  ```md
  {{</* html */>}}
  <svg style="background: #eee;">
    <rect x="0" y="50" width="50" height="50">
      <animate
        attributeName="x"
        from="0" to="300"
        begin="0s" dur="2s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect x="0" y="50" width="50" height="50">
      <animate
        attributeName="x"
        from="0" to="300"
        begin="0s" dur="2s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  {{< /html >}}


## rect, rotate
+ Code
  ```md
  {{</* html */>}}
  <svg style="background: #eee;">
    <rect x="150" y="75" width="50" height="50">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 150 75" to="360 150 75"
        begin="0s" dur="3s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect x="150" y="75" width="50" height="50">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 150 75" to="360 150 75"
        begin="0s" dur="3s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  {{< /html >}}


## rect, scale
+ Code
  ```md
  {{</* html */>}}
  <svg style="background: #eee;">
    <rect x="0" y="0" width="50" height="50">
      <animateTransform
        attributeName="transform"
        type="scale"
        from="1 1" to="6 3"
        begin="0s" dur="3s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  {{</* /html */>}}
  ```
+ Result
  {{< html >}}
  <svg style="background: #eee;">
    <rect x="0" y="0" width="50" height="50">
      <animateTransform
        attributeName="transform"
        type="scale"
        from="1 1" to="6 3"
        begin="0s" dur="3s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  {{< /html >}}
