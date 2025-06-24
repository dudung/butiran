+++
title = 'svg simple examples'
date = 2024-04-08T03:27:00+07:00
draft = false
math = true
tags = ['svg', 'html', 'css']
url = '2004'
authors = ['viridi']
+++
Short intro to SVG and some simple examples <!--more-->


## intro
SVG, that stands for scalable vector graphis, is a web friendly vector-based file format used to render two-dimensional images on the internet, and it is written in pure XML [^chris_2022], which makes it can be created or edited using any text and code editor. Other than to code SVG, there is also a lot of drawing applications available that can be used to open and edit SVG files [^fisher_2022]. There are some reasons to use SVG, where one of them is SEO (search engine optimization) friendly that allowing keywords, descriptions, and links addition directly to the markup [^davey_2023]. Infinity scalability, small file size, editability, and accessiblity are advantages of SVG files, while complexity and browser support are the disadvantages [^edwards_2023]. Image stored as SVG does not require compression compared to other formats [^tey_2021].

How to create SVG basic shapes and text, group elements, and perform some transformations will be discussed here in brief but hopefully sufficient clear.


## minimal lines
Let us make a SVG file with minimal content as displayed below

{{< div >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <circle r="45" cx="50" cy="50" fill="red" />
</svg>
{{< /div >}}

with

```svg
<svg height="100" width="100">
  <circle r="45" cx="50" cy="50" fill="red" />
</svg>
```

is the code.

Notice that above code if for SVG embeded inline in a HTML file. For serving the SVG as image/svg+xml or application/xhtml+xml or any other MIME type that causes the user agent to use an XML parser then it requires to add `xmlns="http://www.w3.org/2000/svg` attribute and value to `<svg>` element [^longson_2013].

The line `<circle r="45" cx="50" cy="50" fill="red" />` can be replaced by folowing lines

+ `<rect x="5" y="30" width="90" height="40" fill="blue" />`
+ `<ellipse rx="45" ry="20" cx="50" cy="50" fill="green" />`
+ `<line x1="20" y1="20" x2="80" y2="80" stroke="black" />`
+ `<polygon points="20,20 50,80 80,20" fill="magenta" />`
+ `<polyline points="20,80 50,20 80,80" stroke="magenta" fill="none" />`
+ `<path d="M20 20 L50 20 L25 50 v20 h30" fill="none" stroke="black" />`
+ `<text x="5" y="50" fill="darkgreen">Hello, World!</text>`

and you get the others basic SVG shapes and text, where

{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <circle r="45" cx="50" cy="50" fill="red" />
</svg>
{{< /div >}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <rect x="5" y="30" width="90" height="40" fill="blue" />
</svg>
{{< /div >}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <ellipse rx="45" ry="20" cx="50" cy="50" fill="green" />
</svg>
{{< /div >}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <line x1="20" y1="20" x2="80" y2="80" stroke="black" />
</svg>
{{< /div >}}

{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <polygon points="20,20 50,80 80,20" fill="magenta" />
</svg>
{{< /div >}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <polyline points="20,80 50,20 80,80" stroke="magenta" fill="none" />
</svg>
{{< /div >}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <path d="M20 20 L50 20 L25 50 v20 h30" fill="none" stroke="black" />
</svg>
{{< /div >}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <text x="5" y="50" fill="darkgreen">Hello, World!</text>
</svg>
{{< /div >}}

are the results and also with the first one. More complex drawing can be built based on above given shapes and text.


## viewport
A viewport, a "port" through which you can "view" a section of an SVG image, is something akin to a porthole window through which you can see the world beyond [^bracey_2022], the phrase can be considered as a way to explain about SVG view port. Let us have following code

```svg
<svg height="100" width="100" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
```

for this SVG image

{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}

with attributes `height="100"` and `width="100"`. Notice that all objects are drawn within the range of the viewport so all can be seen. Let us change only value of `width` and `height` and then display the result.

Table 1. Some values for SVG viewport `width`, `height`, and the output results.

Params | 1 | 2 | 3 | 4 | 5
:-: | :-: | :-: | :-: | :-: | :-:
**Width** | 100 | 50 | 100 | 50 | 75
**Height** | 100 | 100 | 50 | 50 | 150
**Output** &nbsp;&nbsp; | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="100" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div >}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="50" height="100" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div >}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="50" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div >}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="50" height="50" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div >}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="75" height="150" style="background: #f8f8f8;">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div >}}

It can be seen from Table 1 that viewport `width` and `height` act like window dimension on the wall but with origin, the top left corner, is a fixed point.

## viewbox
Next to explore is 'viewBox' attributes that has four parameters, `min-x`, `min-y`, `width`, `height` that are supplied without comma in a string as `viewBox = "min-x min-y width height"` [^pawar_2023].

In explaining the use of `viewBox` attribute previous code is used with addtional lines

{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="0 0 100 100">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}

with

```svg
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="0 0 100 100">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>

```

as the default code. Notice the difference between that code and the previous one.

Table 2. Some values for SVG viewBox `min-x`, `min-y`, `width`, `height`, and the output results.

Params | 1 | 2 | 3 | 4 | 5
:-: | :-: | :-: | :-: | :-: | :-:
**min-x** | 0 | 0 | 0 | 50 | 25
**min-y** | 0 | 0 | 0 | 50 | 25
**width** | 100 | 75 | 50 | 100 | 50
**height** | 100 | 75 | 50 | 100 | 50
**Output** &nbsp;&nbsp; | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="100" style="background: #f8f8f8;"
 viewBox="0 0 100 100">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="100" style="background: #f8f8f8;"
 viewBox="0 0 75 75">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="100" style="background: #f8f8f8;"
 viewBox="0 0 50 50">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="100" style="background: #f8f8f8;"
 viewBox="50 50 100 100">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}} | {{< div "width: 100px; display: inline-block;" >}}
<svg width="100" height="100" style="background: #f8f8f8;"
 viewBox="25 25 50 50">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}

Here some some explanation for the output on Table 2.

+ **Params 1**. It is original `viewBox` all objects can be seen through the viewport.
+ **Param 2**. Since `width` and `height` both are decreased to `75`, it behaves like zooming in until `width` and `height` of the `viewBox` fit the viewport.
+ **Param 3**. Furhter zooming in is performed and half in `width` and `height` must fit into the viewport, so only quarter of the original image, left top part, can be seen.
+ **Param 4**. Using original `width` and `height` values, which are both `100`, set the `min-x` and `min-y` both to `50`. It will shift the original image `50` in horizontal and vertical directions showing only purple down triangle.
+ **Param 5**. Let us now modify all four values `min-x`, `min-y`, `width`, and `height` to `25`, `25`, `50`, `50`, respectively. It will zoom in and shift in both horizontal and vertical directions as shown.

Notice that zooming in can be achieved when `width` and `height` in `viewBox` is smaller than `width` and `height` in the viewport, while zooming out can be achieved when they are larger.

{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="0 0 200 200">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="-50 0 200 200">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="-100 0 200 200">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="-100 -100 200 200">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="-50 -50 200 200">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}
{{< div "width: 100px; display: inline-block;" >}}
<svg height="100" width="100" style="background: #f8f8f8;"
 viewBox="25 -25 50 50">
  <circle r="20" cx="25" cy="25" fill="salmon" />
  <rect x="55" y="5" width="40" height="40" fill="cornflowerblue" />
  <path d="M25,55 l20,20 l-20,20 l-20,-20 l20,-20" fill="darkkhaki" />
  <polygon points="55,55 95,55 75,95" fill="violet" />
</svg>
{{< /div>}}

Can you guess what the values of `min-x`, `min-y`, `width`, and `height` of the `viewBox` for most left SVG image above? They are `0 0 200 200`. Check your answer. And how about the rest?

## elements grouping
There is `<g>` element, stands for 'group', which is used for logically grouping together sets of related graphical elements [^soueidan_2014], that

+ usually has an id attribute to give that group a name for refering to,
+ groups all of its descendants into one group,
+ makes it easy to add styles, transformations, interactivity, and even animations to entire groups of objects.

Any styles, you apply to the `<g>` element will also be applied to all of its descendants. It is also with the transformation.

{{< div "width: 200px;" >}}
<svg width="200" height="100" style="background: #f8f8f8;"
 viewBox="0 0 200 100">
  <style>
    #top, #bottom {
      fill: cornflowerblue;
      stroke-width: 2px;
      stroke: midnightblue;
    }
    #shell { 
      fill: cornflowerblue;
    }
    #left, #right {
      stroke: midnightblue;
      stroke-width: 2px;
    }
    #symbol {
      font-size: 200%;
    }
    #textbg {
      fill: gold;
    }
  </style>
  <g id="container">
  	<title>Radioactive container</title>
    <desc>An image of a container containing radioactive substance.</desc>
    <ellipse id="bottom" rx="20" ry="10" cx="35" cy="70" />
    <rect id="shell" x="15" y="20" width="40" height="50" />
    <line id="left" x1="15" y1="20", x2="15" y2="70" />
    <line id="right" x1="55" y1="20", x2="55" y2="70" />
    <ellipse id="top" rx="20" ry="10" cx="35" cy="20" />
    <g id="symbol">
      <circle id="textbg" r="11" cx="35" cy="54" />
      <text id="text" x="22", y="65">☢</text>
    </g>
    <ellipse id="hole" rx="4" ry="2" cx="45" cy="20" />
  </g>
</svg>
{{< /div>}}

Above example is already using `<g>` element and also `<style>` element, with

```svg
<svg width="200" height="100" style="background: #f8f8f8;"
 viewBox="0 0 200 100">
  <style>
    #top, #bottom {
      fill: cornflowerblue;
      stroke-width: 2px;
      stroke: midnightblue;
    }
    #shell { 
      fill: cornflowerblue;
    }
    #left, #right {
      stroke: midnightblue;
      stroke-width: 2px;
    }
    #symbol {
      font-size: 200%;
    }
    #textbg {
      fill: gold;
    }
  </style>
  <g id="container">
  	<title>Radioactive container</title>
    <desc>An image of a container containing radioactive substance.</desc>
    <ellipse id="bottom" rx="20" ry="10" cx="35" cy="70" />
    <rect id="shell" x="15" y="20" width="40" height="50" />
    <line id="left" x1="15" y1="20", x2="15" y2="70" />
    <line id="right" x1="55" y1="20", x2="55" y2="70" />
    <ellipse id="top" rx="20" ry="10" cx="35" cy="20" />
    <g id="symbol">
      <circle id="textbg" r="11" cx="35" cy="54" />
      <text id="text" x="22", y="65">☢</text>
    </g>
    <ellipse id="hole" rx="4" ry="2" cx="45" cy="20" />
  </g>
</svg>
```

is the whole code.

# reuse grouped elements
Modify previous code by putting `<g id="container2">` element, as an update from previous one, inside a `<defs>` element, so it will not be drawn until it is called using `<use>` element.

{{< div "width: 200px;" >}}
<svg width="200" height="100" style="background: #f8f8f8;"
 viewBox="0 0 200 100">
<svg width="200" height="100" style="background: #f8f8f8;"
 viewBox="0 0 200 100">
  <style>
    #top, #bottom {
      fill: cornflowerblue;
      stroke-width: 2px;
      stroke: midnightblue;
    }
    #shell { 
      fill: cornflowerblue;
    }
    #left, #right {
      stroke: midnightblue;
      stroke-width: 2px;
    }
    #symbol {
      font-size: 200%;
    }
    #textbg {
      fill: gold;
    }
  </style>
  <defs>
    <g id="container2">
      <title>Radioactive container</title>
      <desc>An image of a container containing radioactive substance.</desc>
      <ellipse id="bottom" rx="20" ry="10" cx="35" cy="70" />
      <rect id="shell" x="15" y="20" width="40" height="50" />
      <line id="left" x1="15" y1="20", x2="15" y2="70" />
      <line id="right" x1="55" y1="20", x2="55" y2="70" />
      <ellipse id="top" rx="20" ry="10" cx="35" cy="20" />
      <g id="symbol">
        <circle id="textbg" r="11" cx="35" cy="54" />
        <text id="text" x="22", y="65">☢</text>
      </g>
      <ellipse id="hole" rx="4" ry="2" cx="45" cy="20" />
    </g>
  </defs>
  <use xlink:href="#container2" transform="translate(0, 0)" />
  <use xlink:href="#container2" transform="translate(50, -5)" />
  <use xlink:href="#container2" transform="translate(32, 15)" />
  <use xlink:href="#container2" transform="translate(82, 10)" />
  <use xlink:href="#container2" transform="translate(135, 10)" />
</svg>
{{< /div>}}

Above result is obtained by adding following lines

```svg
  <use xlink:href="#container2" transform="translate(0, 0)" />
  <use xlink:href="#container2" transform="translate(50, -5)" />
  <use xlink:href="#container2" transform="translate(32, 15)" />
  <use xlink:href="#container2" transform="translate(82, 10)" />
  <use xlink:href="#container2" transform="translate(135, 10)" />
```

after `<defs>` element into previous code. Can you point which line relate to which container object?


## rotate
Actually one of SVG transformation, which is `translate()`, has been used in previous example. Now other SVG tranformation, `rotate()` [^jenkov_2021], will be discussed.

{{< div "width: 100px;" >}}
<svg width="100" height="100" style="background: #f8f8f8;"
 viewBox="0 0 100 100">
  <use xlink:href="#container2" transform="rotate(-10)" />
  <use xlink:href="#container2" transform="rotate(10)" />
</svg>
{{< /div>}}

By modifying previous code with following lines

```svg
  <use xlink:href="#container2" transform="rotate(-10)" />
  <use xlink:href="#container2" transform="rotate(10)" />
```

previous result is obtained. The rotation is in degree and clockwise direction. Negative values means the direction is counter clockwise. To study the rotation, previous SVG image is modified as following

```svg
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <style>
    #top, #bottom {
      fill: cornflowerblue;
      stroke-width: 2px;
      stroke: midnightblue;
    }
    #shell { 
      fill: cornflowerblue;
    }
    #left, #right {
      stroke: midnightblue;
      stroke-width: 2px;
    }
    #symbol {
      font-size: 200%;
    }
    #textbg {
      fill: gold;
    }
    #zero {
      fill: red;
    }
  </style>
  <defs>
    <g id="container3">
      <title>Radioactive container</title>
      <desc>An image of a container containing radioactive substance.</desc>
      <circle id="zero" r="2" cx="0" cy="0" />
      <ellipse id="bottom" rx="20" ry="10" cx="35" cy="70" />
      <rect id="shell" x="15" y="20" width="40" height="50" />
      <line id="left" x1="15" y1="20", x2="15" y2="70" />
      <line id="right" x1="55" y1="20", x2="55" y2="70" />
      <ellipse id="top" rx="20" ry="10" cx="35" cy="20" />
      <g id="symbol">
        <circle id="textbg" r="11" cx="35" cy="54" />
        <text id="text" x="22", y="65">☢</text>
      </g>
      <ellipse id="hole" rx="4" ry="2" cx="45" cy="20" />
    </g>
  </defs>
  
  <use xlink:href="#container3" transform="rotate(0)" />
</svg>
```

which produces

{{< div "width: 200px;" >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <style>
    #top, #bottom {
      fill: cornflowerblue;
      stroke-width: 2px;
      stroke: midnightblue;
    }
    #shell { 
      fill: cornflowerblue;
    }
    #left, #right {
      stroke: midnightblue;
      stroke-width: 2px;
    }
    #symbol {
      font-size: 200%;
    }
    #textbg {
      fill: gold;
    }
    #zero {
      fill: red;
    }
  </style>
  <defs>
    <g id="container3">
      <title>Radioactive container</title>
      <desc>An image of a container containing radioactive substance.</desc>
      <circle id="zero" r="2" cx="0" cy="0" />
      <ellipse id="bottom" rx="20" ry="10" cx="35" cy="70" />
      <rect id="shell" x="15" y="20" width="40" height="50" />
      <line id="left" x1="15" y1="20", x2="15" y2="70" />
      <line id="right" x1="55" y1="20", x2="55" y2="70" />
      <ellipse id="top" rx="20" ry="10" cx="35" cy="20" />
      <g id="symbol">
        <circle id="textbg" r="11" cx="35" cy="54" />
        <text id="text" x="22", y="65">☢</text>
      </g>
      <ellipse id="hole" rx="4" ry="2" cx="45" cy="20" />
    </g>
  </defs>
  
  <use xlink:href="#container3" transform="rotate(0)" />
</svg>
{{< /div >}}

where the red dot on the left top corner is point on (0, 0) coordinates. This point will help us to understand three argments supported by the `rotation()`.

{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container3" transform="rotate(45)" />
</svg>
{{< /div >}}
{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container3" transform="rotate(-45)" />
</svg>
{{< /div >}}
{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container3" transform="rotate(-90)" />
</svg>
{{< /div >}}

Above figure shows result of `rotate()` with single argument with value: 45 (left), -45 (center), and -90 (right). Notice that the origin (0, 0) does not change since it is the pivot or rotation point.

{{< div "width: 200px;" >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <style>
    #top, #bottom {
      fill: cornflowerblue;
      stroke-width: 2px;
      stroke: midnightblue;
    }
    #shell { 
      fill: cornflowerblue;
    }
    #left, #right {
      stroke: midnightblue;
      stroke-width: 2px;
    }
    #symbol {
      font-size: 200%;
    }
    #textbg {
      fill: gold;
    }
    #zero {
      fill: red;
    }
    #zero2 {
      fill: blue;
    }
  </style>
  <defs>
    <g id="container4">
      <title>Radioactive container</title>
      <desc>An image of a container containing radioactive substance.</desc>
      <circle id="zero" r="2" cx="0" cy="0" />
      <circle id="zero2" r="2" cx="50" cy="0" />
      <ellipse id="bottom" rx="20" ry="10" cx="35" cy="70" />
      <rect id="shell" x="15" y="20" width="40" height="50" />
      <line id="left" x1="15" y1="20", x2="15" y2="70" />
      <line id="right" x1="55" y1="20", x2="55" y2="70" />
      <ellipse id="top" rx="20" ry="10" cx="35" cy="20" />
      <g id="symbol">
        <circle id="textbg" r="11" cx="35" cy="54" />
        <text id="text" x="22", y="65">☢</text>
      </g>
      <ellipse id="hole" rx="4" ry="2" cx="45" cy="20" />
    </g>
  </defs>
  
  <use xlink:href="#container4" transform="rotate(0)" />
</svg>
{{< /div >}}

Let us now draw addition point, e.g. blue point at (50, 0) and use it as rotation point.

{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4" transform="rotate(45, 50, 0)" />
</svg>
{{< /div >}}

{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4" transform="rotate(-45, 50, 0)" />
</svg>
{{< /div >}}

{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4" transform="rotate(-90, 50, 0)" />
</svg>
{{< /div >}}

Results of `rotate(angle, 50, 0)` are shown in above figure with angle value is 45, -45, and 90, respectively. Notice the second and third arguments given to `rotate()` is for rotation point coordinates.


## translate - rotate
Let us try to use two transformations one first and then followed by the other.

Original | "Tr 1" | "Tr 1 Tr 2"
:-: | :-: | :-:
{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4"
  />
</svg>
{{< /div >}} | {{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4"
  transform = "translate(50, 0)"
  />
</svg>
{{< /div >}} | {{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4"
  transform = "translate(50, 0) rotate(90, 50, 0)"
  />
</svg>
{{< /div >}}
&nbsp; | "translate(50, 0)" | "translate (50, 0) 
&nbsp; | | rotate(90, 50, 0)"
{{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4"
  />
</svg>
{{< /div >}} | {{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4"
  transform = "rotate(90, 50, 0)"
  />
</svg>
{{< /div >}} | {{< div "width: 200px; display: inline-block; " >}}
<svg width="200" height="200" style="background: #f8f8f8;"
 viewBox="-60 -60 200 200">
  <use xlink:href="#container4"
  transform = "rotate(90, 50, 0) translate(50, 0)"
  />
</svg>
{{< /div >}}
&nbsp; | "rotate(90, 50, 0)" | "rotate(90, 50, 0) 
&nbsp; | | translate (50, 0)"

Above figure shows that transformations, in this case translation and rotation, depend on the order. Final result will be different when it is rotated first and translated, compared to translated first then rotated. Notice also that after rotation, translation is still using orginal axes, original x and y axes.


## closing
After read this post you are be able create SVG basic shapes and text, group those elements and reuse it, and finally perform transformations, translate and rotate, on the grouped elements.


## notes
[^bracey_2022]: Kezz Bracey, "SVG Viewport and viewBox (For Complete Beginners)", Envato Tuts+, 16 Jun 2022, url https://webdesign.tutsplus.com/p--cms-30844t [20240408].
[^chris_2022]: Kolade Chris, "What is an SVG File", freeCodeCamp, 1 Jun 2022, url https://www.freecodecamp.org/news/what-is-an-svg-file/ [20240408].
[^davey_2023]: Mike Davey, "Why Developers Should Use SVG Files", WP Migrate, 6 Apr 2023, url https://deliciousbrains.com/svg-advantages-developers/ [20240408].
[^edwards_2023]: Carl Edwards, "What is SVG: Definition, Pros & Cons and How to Make", Fotor, 20 Dec 2023, url https://www.fotor.com/blog/what-is-svg/ [20240408].
[^fisher_2022]: Tim Fisher, "SVG Files: What They Are and How to Open & Convert Them", Livewire, 22 Sep 2022, url https://www.lifewire.com/p-4120603 [20240408].
[^jenkov_2021]: Jakob Jenkov, "SVG Transformation", Jenkov.com -- Tech & Media Labs, 10 Mar 2021, url https://jenkov.com/tutorials/svg/svg-transformation.html [20240409].
[^longson_2013]: Robert Longson, sleske, "Are SVG parameters such as 'xmlns' and 'version' needed?", Stack Overflow, 26 Sep 2018, url https://stackoverflow.com/a/18468348/9475509 [20240408].
[^pawar_2023]: Aakash Pawar, "SVG viewBox Attribute", GeeksforGeeks, 7 May 2023, url https://www.geeksforgeeks.org/svg-viewbox-attribute/ [20240408].
[^tey_2021]: Estee Tey, "Introduction to Scalable Vector Graphics (SVG)", DEV Community, 16 Nov 2021, url https://dev.to/lyqht/introduction-to-scalable-vector-graphics-svg-734 [20240408].
[^soueidan_2014]: Sarah Soueidan, "Structuring, Grouping, and Referencing in SVG — The<g>, <use>, <defs> and <symbol> Elements", 3 Jul 2014, url https://www.sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/ [20240408].
[^answer]: `-50 0 200 200`, `-100 0 200 200`, `-100 -100 200 200`, `-50 -50 200 200`, `25 -25 50 50`.