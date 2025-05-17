---
title: "svg <g> and <animate> tags"
date: 2023-10-27T05:11:00+07:00
authors: ['Sparisoma Viridi']
tags: ['sk6091']
draft: false
math: true
url: "0118"
---
{{< toc >}}


## results
{{< html >}}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  viewBox="0 0 200 200"
  style="background:#eee;">
  <g fill="rgba(1, 1, 1, 0.5)" stroke="red" stroke-width="2">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200" height="200"
  viewBox="0 0 200 200"
  style="background:#eee;">
  <rect width="50" height="50" fill="green" y="20" ry="10">
    <animate
      attributeName="x"
      values="0;100;150;100;0"
      dur="2s"
      repeatCount="indefinite" />
  </rect>
</svg>
{{< /html >}}


## codes (slightly modified)
+ `<g>` https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
  ```svg
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200" height="200"
    viewBox="0 0 200 200"
    style="background:#eee;">
    <g fill="rgba(1, 1, 1, 0.5)" stroke="red" stroke-width="2">
      <circle cx="40" cy="40" r="25" />
      <circle cx="60" cy="60" r="25" />
    </g>
  </svg>
  ```
+ `<animate>` https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
  ```svg
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200" height="200"
    viewBox="0 0 200 200"
    style="background:#eee;">
    <rect width="100" height="100" fill="green">
      <animate
        attributeName="x"
        values="0;100;150;100;0"
        dur="2s"
        repeatCount="indefinite" />
    </rect>
  </svg>
  ```


## combining elements
+ ..


## notes
+ [svg <g> element](../0075)