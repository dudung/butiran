---
title: "shortcode html"
date: 2023-09-15T17:30:00+07:00
authors: ['Sparisoma Viridi']
tags: ['xx1000']
draft: false
math: true
url: "0046"
---
{{< toc >}}

## description
Include pure HTML with CSS and JS in a Markdown post using shortcode.


## test
Following is a SVG image whose border is added using JS

{{< html >}}
<svg id="fig1" height="100" width="100">
  <circle cx="50" cy="50" r="40"
   stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>

<script>
console.log("hello");
var g = document.getElementById("fig1");
g.style.border = "1px solid blue";
</script>

<div style="border: 1px solid red;">
Hello, World!
</div>
{{< /html >}}

with the lines of code are

```md
{{</* html */>}}
<svg id="fig1" height="100" width="100">
  <circle cx="50" cy="50" r="40"
   stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>

<script>
console.log("hello");
var g = document.getElementById("fig1");
g.style.border = "1px solid blue";
</script>

<div style="border: 1px solid red;">
Hello, World!
</div>
{{</* /html */>}}
```

## notes
+ Security risk if using external JS with some unknown purposes, besides what are used intendedly. 
