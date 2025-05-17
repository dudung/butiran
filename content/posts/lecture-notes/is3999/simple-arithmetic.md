---
title: "simple arithmetic"
date: 2023-09-09T21:57:00+07:00
authors: ['Sparisoma Viridi']
tags: ['is3999']
draft: false
math: true
url: "0039"
---
{{< toc >}}

## display
+  Simple arithmetic &nbsp; {{< arithm >}}
+ It uses three dropdown menus, a button, and a text input but functioned as output.
+ You can change the first and second numbers, and also the operator, then click the equality sign to obtain the result.

## code
+ It requires HTML and JS.
  ```html
  <select name="x" id="x"> 
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
  </select>
  <select name="op" id="op"> 
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <select name="y" id="y"> 
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
  </select>
  <button onclick="button_click();">=</button>
  <input
    type="text"
    name="z" id="z"
    style="width: 60px; text-align: right;"
    disabled
  /> 

  <script>
  function button_click() {
    var x = document.getElementById("x");
    var op = document.getElementById("op"); 
    var y = document.getElementById("y");
    var z = document.getElementById("z");
    
    var expr = x.value + op.value + y.value;
    z.value = eval(expr);
  }
  </script>
  ```
+ JS part is between `<script>` start tag and `</script>` end tag.
+ Save the lines of code in a HTML file, e.g `simple_arithmetic.html`, and open it with a web browser, e.g. Google Chrome.