---
title: "svgpath"
date: 2023-12-21T05:16:00+08:00
authors: ['Sparisoma Viridi']
tags: ['hugo']
draft: false
math: false
url: "000l"
---
{{< toc >}}


## intro
+ It is a Hugo schortcode
+ It draw SVG path. 
+ Required parameter is `id` that must be unique, `width` and `height`.
+ Current version has only one color according to colorscheme, but not responsive yet.


## results
{{< svgpath
  id="s00"
  width="300"
  height="200"
  border="none" >}}
M 150 100
l 50 0
l 0 -50
l -100 0
l 0 100
l 100 0
m 0 -25
m -25 0
l -50 0
l 0 -50
l 50 0
{{< /svgpath >}}


## code
```go
{{</* svgpath
  id="s00"
  width="300"
  height="200"
  border="none" */>}}
M 150 100
l 50 0
l 0 -50
l -100 0
l 0 100
l 100 0
m 0 -25
m -25 0
l -50 0
l 0 -50
l 50 0
{{</* /svgpath */>}}

```


## refs
+ "SVG <path>", W3Schools, url https://www.w3schools.com/graphics/svg_path.asp.
+ "Creating dynamic SVG elements with JavaScript", Motion Tricks, url https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/.
