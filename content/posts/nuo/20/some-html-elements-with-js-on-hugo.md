+++
title = 'some html elements with js on hugo'
date = 2024-04-11T05:19:00+07:00
draft = false
math = true
tags = ['hugo', 'html', 'css', 'js']
url = '2007'
authors = ['viridi']
+++
Display HTML elements on Hugo with JS <!--more-->


## intro
There are some static site generators, where one of the free ones is Hugo [^rajora_2023]. And one of the feature of Hugo static pages is its support to use JS for dynamic content, but in this post only feature to display some HTML elements is shown. Since normally Hugo does not allow to execute JS directly from its post [^m_2020] and it requires defining a shortcode [^pyth0n_2017], a shortcode `js` is provided, that has 10 lines of code.

In order to understand this post it is assumed that you are already familiar with HTML, JS, CSS, and Hugo shortcode. And for the last you know where to save it and how to called in a post. And for the HTML elements [^juviler_2022], only few of them are discussed here.


## shortcode
In order to embed JS in Hugo posts, a shortcode named `js` is made with following content

```
{{- $seed := "foo" -}}
{{- $id := delimit (shuffle (split (md5 $seed) "" )) "" -}}
<div id="{{- $id -}}">
<script>
js = document.getElementById("{{- $id -}}");
var fn = "f_{{- $id -}}";
window[fn] = function() { {{- .Inner | safeJS -}} }
window[fn]();
</script>
</div>
```

Notice that `js` and `fn` variable are global variables and they are reused every time the shortcode is called. To avoid error message that a variable is already declared, all script in `.Inner` of Hugo shortoce is place inside a function whose name is generated randomly, each time the shortcode is called.

Then, the shortcode is called within a post this way


```
{{</* js */>}}
console.log(js);
{{</* /js */>}}
```

where `js` is the container element, a `<div>` as parent element, of the script. An as the result

{{< js >}}
console.log(js);
{{< /js >}}

```
<div id="4bc1ce45e8dcacdf44d6ccda2bcf588f">
  <script>
    js = document.getElementById("4bc1ce45e8dcacdf44d6ccda2bcf588f");
    var fn = "f_4bc1ce45e8dcacdf44d6ccda2bcf588f";
    window[fn] = function() {
    console.log(js);
    }
    window[fn]();
  </script>
</div>
```

will be shown in browser JS console [^vidas_2015]. Value of `id` will be generated randomly to assure that each script will have unique id.


## button
Let us now just display a button

{{< js >}}
let btn = document.createElement("button")
btn.innerHTML = "OK";
js.appendChild(btn);
{{< /js >}}

with following script

```
{{</* js */>}}
let btn = document.createElement("button")
btn.innerHTML = "OK";
js.appendChild(btn);
{{</* /js */>}}
```

You can click it or hover mouse pointer on it, but nothing happen since how response on such events have not been defined.

Now, with still using only button element, a `click` event can be added and how it behaves can also be defined. Let us make the simplest one

{{< js >}}
let btn = document.createElement("button")
js.appendChild(btn);

btn.innerHTML = 0;
btn.addEventListener("click", function() { btn.innerHTML++; } )
{{< /js >}}

where the code is as follow

```
{{</* js */>}}
let btn = document.createElement("button")
js.appendChild(btn);

btn.innerHTML = 0;
btn.addEventListener("click", function() { btn.innerHTML++; } )
{{</* /js */>}}
```

Notice the differences between the code above and the one preceeded it. Button `btn` caption `innerHTML` is assigned with number `0` in initialization. When the button is clicked by the registered even `click`, it adds `1` to the number and increase the caption. This code is not save, e.g. it would be better to use `parseInt()` from `innerHTML` to assure it is an integer before added it with `1` using `++` operator.

What is next to do with only a button element?

{{< js >}}
let btn = document.createElement("button")
js.appendChild(btn);

btn.style.left = "0px";
btn.style.position = 'relative';
btn.innerHTML = "&rightarrow;";
btn.addEventListener("click",
  function() {
    let left = parseInt(btn.style.left);
    left += 40;
    btn.style.left = left + "px";
  } 
)
{{< /js >}}

Position of button is altered as it is clicked. Every click moves the button `40px` to the right. And

```
{{</* js */>}}
let btn = document.createElement("button")
js.appendChild(btn);

btn.style.left = "0px";
btn.style.position = 'relative';
btn.innerHTML = "&rightarrow;";
btn.addEventListener("click",
  function() {
    let left = parseInt(btn.style.left);
    left += 40;
    btn.style.left = left + "px";
  } 
)
{{</* /js */>}}
```

is the code. What do you think? Any other idea is crossing you mind for an example using only one HTML button?


## textarea
Let us now using other HTML element, textarea.

{{< js >}}
let ta = document.createElement("textarea");
js.appendChild(ta);
{{< /js >}}

with

```
{{</* js */>}}
let ta = document.createElement("textarea");
js.appendChild(ta);
{{</* /js */>}}
```

is the code. Then you can type whatever you want on the textarea.

You can add content to textarea to produce

{{< js >}}
let ta = document.createElement("textarea");
ta.value = "Hello, World!";
js.appendChild(ta);
{{< /js >}}

where

```
ta.value = "Hello, World!";
```

is the only additional line to previous code.


## textarea + button
Remember the button that change its caption when it is clicked? Now we can modify the `click` event not to change button caption but content of the textarea.

{{< js >}}
let btn = document.createElement("button")
btn.innerHTML = "Add 'Hello, World!'"
js.appendChild(btn);

let ta = document.createElement("textarea");
ta.style.height = "100px";
js.appendChild(ta);

btn.addEventListener("click",
  function() {
    ta.value += "Hello, World!" + "\n";
  }
);
{{< /js >}}

Every time the button clicked, it add a line of "Hello, World!" phrase to the textarea.

```
{{</* js */>}}
let btn = document.createElement("button")
btn.innerHTML = "Add 'Hello, World!'"
js.appendChild(btn);

let ta = document.createElement("textarea");
ta.style.height = "100px";
js.appendChild(ta);

btn.addEventListener("click",
  function() {
    ta.value += "Hello, World!" + "\n";
  }
);
{{</* /js */>}}
```

Above code has not yet used CSS but only to set height of the textarea by assigning `style.height` with value `100px`. The way to get nice layout using CSS will be discussed later.

Let us now use two buttons, one is as in the previous example and the new one is for clearing the text area.

{{< js >}}
let btn = document.createElement("button")
btn.innerHTML = "Add 'Hello, World!'"
js.appendChild(btn);

let btn2 = document.createElement("button")
btn2.innerHTML = "Clear"
js.appendChild(btn2);

let ta = document.createElement("textarea");
ta.style.height = "100px";
js.appendChild(ta);

btn.addEventListener("click",
  function() {
    ta.value += "Hello, World!" + "\n";
  }
);

btn2.addEventListener("click",
  function() {
    ta.value = "";
  }
);
{{< /js >}}

Go get the result add following lines

```
let btn2 = document.createElement("button")
btn2.innerHTML = "Clear"
js.appendChild(btn2);

btn2.addEventListener("click",
  function() {
    ta.value = "";
  }
);
```

to previous code. The layout still looks messy, but for now the importang thing is that works.


## select
There is select element with code

```
{{</* js */>}}
var sel = document.createElement("select");
js.appendChild(sel);

var opt1 = document.createElement("option");
opt1.innerHTML = "Apple";
sel.add(opt1);
var opt2 = document.createElement("option");
opt2.innerHTML = "Durian";
sel.add(opt2);

sel.selectedIndex = -1;
{{</* /js */>}}
```

to produce following result

{{< js >}}
var sel = document.createElement("select");
js.appendChild(sel);

var opt1 = document.createElement("option");
opt1.innerHTML = "Apple";
sel.add(opt1);
var opt2 = document.createElement("option");
opt2.innerHTML = "Durian";
sel.add(opt2);

sel.selectedIndex = -1;
{{< /js >}}

Notice that the `select` element has two `option` elements, one is with "Apple" for its `innerHTML` and the other is for "Durian". You can click to select which one you want to choose.


## select + button + textarea
Let us now use one select element, four option element, one button element, and one textarea element. The result is as follow

{{< js >}}
var sel = document.createElement("select");
fruits = ["Apple", "Durian", "Manggo", "Pear"]
for(let f of fruits) {
  var opt = document.createElement("option");
  opt.innerHTML = f;
  sel.add(opt)
}
sel.selectedIndex = -1;

var btn = document.createElement("button");
btn.innerHTML = "Add";

var txa = document.createElement("textarea");
txa.style.height = "100px";

btn.addEventListener("click",
  function () {
    if(sel.selectedIndex >= 0) {
      txa.value += sel[sel.selectedIndex].innerHTML + "\n";
    }
  }
)

js.appendChild(sel);
js.appendChild(btn);
js.appendChild(txa);
{{< /js >}}

Now you can select the fruit you want and then click the button to add to textarea, a sort of shopping list. Pretty neat, isn't it?

And

```
{{</* js */>}}
var sel = document.createElement("select");
fruits = ["Apple", "Durian", "Manggo", "Pear"]
for(let f of fruits) {
  var opt = document.createElement("option");
  opt.innerHTML = f;
  sel.add(opt)
}
sel.selectedIndex = -1;

var btn = document.createElement("button");
btn.innerHTML = "Add";

var txa = document.createElement("textarea");
txa.style.height = "100px";

btn.addEventListener("click",
  function () {
    if(sel.selectedIndex >= 0) {
      txa.value += sel[sel.selectedIndex].innerHTML + "\n";
    }
  }
)

js.appendChild(sel);
js.appendChild(btn);
js.appendChild(txa);
{{</* /js */>}}
```

is the code to get above result. You can modify the code to add more fruit as options, just expand the array `fluits`.

## svg
As one of HTML elements, svg element has special status in HTML, where SVG code can be put in it, since all the actual graphics tags are already defined in SVG standar [^schindlabua_2020], where there are at aleast about 52 elements available [^gfg_2023].

{{< js >}}
var xlmns = "http://www.w3.org/2000/svg";
var width = 400;
var height = 150;

var svg = document.createElementNS(xlmns, "svg");
svg.setAttribute(null, "viewBox",
  "0 0 " + width + " " + height);
svg.setAttributeNS(null, "width", width);
svg.setAttributeNS(null, "height", height);
svg.style.background = "#fafafa";

var circ = document.createElementNS(xlmns, "circle");
circ.setAttributeNS(null, "cx", 50);
circ.setAttributeNS(null, "cy", 50);
circ.setAttributeNS(null, "r", 40);
circ.style.strokeWidth = "4px";
circ.style.fill = "#faa";
circ.style.stroke = "#a00";

var rect = document.createElementNS(xlmns, "rect");
rect.setAttributeNS(null, "x", 110);
rect.setAttributeNS(null, "y", 40);
rect.setAttributeNS(null, "width", 80);
rect.setAttributeNS(null, "height", 40);
rect.style.strokeWidth = 4;
rect.style.fill = "#aaf";
rect.style.stroke = "#00a";

var path = document.createElementNS(xlmns, "path");
path.style.strokeWidth = 4;
path.style.fill = "#afa";
path.style.stroke = "#0aa";
path.setAttributeNS(null, "d", "M 270,50 l 50,50, h -100 z");

svg.appendChild(circ);
svg.appendChild(rect);
svg.appendChild(path);

js.appendChild(svg);
{{< /js >}}

Three graphical objects are created, which are circle, rect, and path elements with

```
{{</* js */>}}
var xlmns = "http://www.w3.org/2000/svg";
var width = 400;
var height = 150;

var svg = document.createElementNS(xlmns, "svg");
svg.setAttribute(null, "viewBox",
  "0 0 " + width + " " + height);
svg.setAttributeNS(null, "width", width);
svg.setAttributeNS(null, "height", height);
svg.style.background = "#fafafa";

var circ = document.createElementNS(xlmns, "circle");
circ.setAttributeNS(null, "cx", 50);
circ.setAttributeNS(null, "cy", 50);
circ.setAttributeNS(null, "r", 40);
circ.style.strokeWidth = "4px";
circ.style.fill = "#faa";
circ.style.stroke = "#a00";

var rect = document.createElementNS(xlmns, "rect");
rect.setAttributeNS(null, "x", 110);
rect.setAttributeNS(null, "y", 40);
rect.setAttributeNS(null, "width", 80);
rect.setAttributeNS(null, "height", 40);
rect.style.strokeWidth = 4;
rect.style.fill = "#aaf";
rect.style.stroke = "#00a";

var path = document.createElementNS(xlmns, "path");
path.style.strokeWidth = 4;
path.style.fill = "#afa";
path.style.stroke = "#0aa";
path.setAttributeNS(null, "d", "M 270,50 l 50,50, h -100 z");

svg.appendChild(circ);
svg.appendChild(rect);
svg.appendChild(path);

js.appendChild(svg);
{{</* /js */>}}
```

as the code. Let us advance it a litle bit to produce following result.

{{< js >}}
let xlmns = "http://www.w3.org/2000/svg";
let width = 400;
let height = 150;

let svg = document.createElementNS(xlmns, "svg");
svg.setAttribute(null, "viewBox",
  "0 0 " + width + " " + height);
svg.setAttributeNS(null, "width", width);
svg.setAttributeNS(null, "height", height);
svg.style.background = "#fafafa";

let circ = document.createElementNS(xlmns, "circle");
circ.id = "c1"
circ.setAttributeNS(null, "cx", 50);
circ.setAttributeNS(null, "cy", 50);
circ.setAttributeNS(null, "r", 40);
circ.style.strokeWidth = "4px";
circ.style.fill = "#faa";
circ.style.stroke = "#a00";

let rect = document.createElementNS(xlmns, "rect");
rect.id = "r1";
rect.setAttributeNS(null, "x", 110);
rect.setAttributeNS(null, "y", 40);
rect.setAttributeNS(null, "width", 80);
rect.setAttributeNS(null, "height", 40);
rect.style.strokeWidth = 4;
rect.style.fill = "#aaf";
rect.style.stroke = "#00a";

let path = document.createElementNS(xlmns, "path");
path.id = "p1";
path.style.strokeWidth = 4;
path.style.fill = "#afa";
path.style.stroke = "#0aa";
path.setAttributeNS(null, "d", "M 270,50 l 50,50, h -100 z");

path.addEventListener("mouseenter", function() {
  path.style.fill = "#4c4";
  path.style.stroke = "#044";
});
path.addEventListener("mouseleave", function() {
  path.style.fill = "#afa";
  path.style.stroke = "#0aa";
});

circ.addEventListener("mouseenter", function() {
  circ.style.fill = "#844";
  circ.style.stroke = "#f00";
});
circ.addEventListener("mouseleave", function() {
  circ.style.fill = "#faa";
  circ.style.stroke = "#a00";
});

rect.addEventListener("mouseenter", function() {
  rect.style.fill = "#00a";
  rect.style.stroke = "#aaf";
});
rect.addEventListener("mouseleave", function() {
  rect.style.fill = "#aaf";
  rect.style.stroke = "#00a";
});

svg.appendChild(circ);
svg.appendChild(rect);
svg.appendChild(path);

js.appendChild(svg);
{{< /js >}}

Now, when mouse enter an object, object color and border change. Additional lines to previous code are as follow.

```
path.addEventListener("mouseenter", function() {
  path.style.fill = "#4c4";
  path.style.stroke = "#044";
});
path.addEventListener("mouseleave", function() {
  path.style.fill = "#afa";
  path.style.stroke = "#0aa";
});

circ.addEventListener("mouseenter", function() {
  circ.style.fill = "#844";
  circ.style.stroke = "#f00";
});
circ.addEventListener("mouseleave", function() {
  circ.style.fill = "#faa";
  circ.style.stroke = "#a00";
});

rect.addEventListener("mouseenter", function() {
  rect.style.fill = "#00a";
  rect.style.stroke = "#aaf";
});
rect.addEventListener("mouseleave", function() {
  rect.style.fill = "#aaf";
  rect.style.stroke = "#00a";
});
```

Element &nbsp;&nbsp;&nbsp; | mouseenter event &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | mouseleave event
:- | :- | :-
circle | `fill = "#844"`   | `style.fill = "#faa"`
&nbsp; | `stroke = "#f00"` | `stroke = "#a00"`
rect   | `fill = "#00a"`   | `fill = "#aaf"`
&nbsp; | `stroke = "#aaf"` | `stroke = "#00a"`
path   | `fill = "#4c4"`   | `fill = "#afa"`
&nbsp; | `stroke = "#044"` | `stroke = "#0aa"`

Above tabel gives the states when `mouseenter` and `mouseleave` events triggered.

Actually there is also another approach to change style using CSS selectors, but unfortunately, I can not still perform that using JS.


## select + button + svg
Let us wrap all up with following code

```
{{</* js */>}}
let div = document.createElement("div");
div.style.border = "0px solid black";
div.style.width = "100px";
div.style.float = "left";

let sel = document.createElement("select");
sel.style.width = "100px";
shapes = ["Circle", "Rect", "Path"]
for(let s of shapes) {
  let opt = document.createElement("option");
  opt.innerHTML = s;
  sel.add(opt)
}
sel.selectedIndex = 0;

let btnL = document.createElement("button");
btnL.innerHTML = "<<";
btnL.style.width = "50px";
btnL.addEventListener("click",
  function () {
    let id = sel[sel.selectedIndex].innerText;
    let el = document.getElementById(id);
    if(el instanceof SVGCircleElement) {
      let cx = parseInt(el.getAttributeNS(null, "cx"));
      cx -= 10;
      el.setAttributeNS(null, "cx", cx);
    } if(el instanceof SVGRectElement) {
      let x = parseInt(el.getAttributeNS(null, "x"));
      x -= 10;
      el.setAttributeNS(null, "x", x);
    } else if(el instanceof SVGPathElement) {
      let d = el.getAttributeNS(null, "d");
      let i = d.indexOf(',');
      let sL = d.substring(0, i);
      let sR = d.substring(i);
      let x = parseInt(sL.split(' ')[1]);
      x -= 10;
      d = "M " + x + sR;
      el.setAttributeNS(null, "d", d);
    }
  }
)

let btnR = document.createElement("button");
btnR.innerHTML = ">>";
btnR.style.width = "50px";
btnR.addEventListener("click",
  function () {
    let id = sel[sel.selectedIndex].innerText;
    let el = document.getElementById(id)
    if(el instanceof SVGCircleElement) {
      let cx = parseInt(el.getAttributeNS(null, "cx"));
      cx += 10;
      el.setAttributeNS(null, "cx", cx);
    } if(el instanceof SVGRectElement) {
      let x = parseInt(el.getAttributeNS(null, "x"));
      x += 10;
      el.setAttributeNS(null, "x", x);
    } else if(el instanceof SVGPathElement) {
      let d = el.getAttributeNS(null, "d");
      let i = d.indexOf(',');
      let sL = d.substring(0, i);
      let sR = d.substring(i);
      let x = parseInt(sL.split(' ')[1]);
      x += 10;
      d = "M " + x + sR;
      el.setAttributeNS(null, "d", d);
    }
  }
)


// the differences to previous code
circ.setAttributeNS(null, "cx", 200);
circ.setAttributeNS(null, "cy", 25);
circ.setAttributeNS(null, "r", 15);

rect.setAttributeNS(null, "x", 185);
rect.setAttributeNS(null, "y", 60);
rect.setAttributeNS(null, "width", 30);
rect.setAttributeNS(null, "height", 30);

path.setAttributeNS(null, 
  "d", "M 200,110 l 20,30, h -40 z");

// mouseenter & mouseleave events are the same as previous code

path.addEventListener("click", function() {
  path.setAttributeNS(
    null, "d",
    "M 200,110 l 20,30, h -40 z"
  );
});
circ.addEventListener("click", function() {
  circ.setAttributeNS(null, "cx", 200);
  circ.setAttributeNS(null, "cy", 25);
});
rect.addEventListener("click", function() {
  rect.setAttributeNS(null, "x", 185);
  rect.setAttributeNS(null, "y", 60);
});

js.appendChild(div);
  div.appendChild(sel);
  div.appendChild(btnL);
  div.appendChild(btnR);
js.append(svg);
  svg.appendChild(circ);
  svg.appendChild(rect);
  svg.appendChild(path);
{{</* /js */>}}
```

that produces

{{< js >}}
let div = document.createElement("div");
div.style.border = "0px solid black";
div.style.width = "100px";
div.style.float = "left";

let sel = document.createElement("select");
sel.style.width = "100px";
shapes = ["Circle", "Rect", "Path"]
for(let s of shapes) {
  let opt = document.createElement("option");
  opt.innerHTML = s;
  sel.add(opt)
}
sel.selectedIndex = 0;

let btnL = document.createElement("button");
btnL.innerHTML = "<<";
btnL.style.width = "50px";
btnL.addEventListener("click",
  function () {
    let id = sel[sel.selectedIndex].innerText;
    let el = document.getElementById(id);
    if(el instanceof SVGCircleElement) {
      let cx = parseInt(el.getAttributeNS(null, "cx"));
      cx -= 10;
      el.setAttributeNS(null, "cx", cx);
    } if(el instanceof SVGRectElement) {
      let x = parseInt(el.getAttributeNS(null, "x"));
      x -= 10;
      el.setAttributeNS(null, "x", x);
    } else if(el instanceof SVGPathElement) {
      let d = el.getAttributeNS(null, "d");
      let i = d.indexOf(',');
      let sL = d.substring(0, i);
      let sR = d.substring(i);
      let x = parseInt(sL.split(' ')[1]);
      x -= 10;
      d = "M " + x + sR;
      el.setAttributeNS(null, "d", d);
    }
  }
)

let btnR = document.createElement("button");
btnR.innerHTML = ">>";
btnR.style.width = "50px";
btnR.addEventListener("click",
  function () {
    let id = sel[sel.selectedIndex].innerText;
    let el = document.getElementById(id)
    if(el instanceof SVGCircleElement) {
      let cx = parseInt(el.getAttributeNS(null, "cx"));
      cx += 10;
      el.setAttributeNS(null, "cx", cx);
    } if(el instanceof SVGRectElement) {
      let x = parseInt(el.getAttributeNS(null, "x"));
      x += 10;
      el.setAttributeNS(null, "x", x);
    } else if(el instanceof SVGPathElement) {
      let d = el.getAttributeNS(null, "d");
      let i = d.indexOf(',');
      let sL = d.substring(0, i);
      let sR = d.substring(i);
      let x = parseInt(sL.split(' ')[1]);
      x += 10;
      d = "M " + x + sR;
      el.setAttributeNS(null, "d", d);
    }
  }
)

let xlmns = "http://www.w3.org/2000/svg";
let width = 400;
let height = 150;

let svg = document.createElementNS(xlmns, "svg");
svg.setAttribute(null, "viewBox",
  "0 0 " + width + " " + height);
svg.setAttributeNS(null, "width", width);
svg.setAttributeNS(null, "height", height);
svg.style.background = "#fafafa";
svg.style.border = "1px solid gray";
svg.style.margin = "4px";

let circ = document.createElementNS(xlmns, "circle");
circ.id = "Circle"
circ.setAttributeNS(null, "cx", 200);
circ.setAttributeNS(null, "cy", 25);
circ.setAttributeNS(null, "r", 15);
circ.style.strokeWidth = "4px";
circ.style.fill = "#faa";
circ.style.stroke = "#a00";

let rect = document.createElementNS(xlmns, "rect");
rect.id = "Rect";
rect.setAttributeNS(null, "x", 185);
rect.setAttributeNS(null, "y", 60);
rect.setAttributeNS(null, "width", 30);
rect.setAttributeNS(null, "height", 30);
rect.style.strokeWidth = 4;
rect.style.fill = "#aaf";
rect.style.stroke = "#00a";

let path = document.createElementNS(xlmns, "path");
path.id = "Path";
path.style.strokeWidth = 4;
path.style.fill = "#afa";
path.style.stroke = "#0aa";
path.setAttributeNS(null, 
  "d", "M 200,110 l 20,30, h -40 z");

path.addEventListener("mouseenter", function() {
  path.style.fill = "#4c4";
  path.style.stroke = "#044";
});
path.addEventListener("mouseleave", function() {
  path.style.fill = "#afa";
  path.style.stroke = "#0aa";
});

circ.addEventListener("mouseenter", function() {
  circ.style.fill = "#844";
  circ.style.stroke = "#f00";
});
circ.addEventListener("mouseleave", function() {
  circ.style.fill = "#faa";
  circ.style.stroke = "#a00";
});

rect.addEventListener("mouseenter", function() {
  rect.style.fill = "#00a";
  rect.style.stroke = "#aaf";
});
rect.addEventListener("mouseleave", function() {
  rect.style.fill = "#aaf";
  rect.style.stroke = "#00a";
});

path.addEventListener("click", function() {
  path.setAttributeNS(
    null, "d",
    "M 200,110 l 20,30, h -40 z"
  );
});
circ.addEventListener("click", function() {
  circ.setAttributeNS(null, "cx", 200);
  circ.setAttributeNS(null, "cy", 25);
});
rect.addEventListener("click", function() {
  rect.setAttributeNS(null, "x", 185);
  rect.setAttributeNS(null, "y", 60);
});

js.appendChild(div);
  div.appendChild(sel);
  div.appendChild(btnL);
  div.appendChild(btnR);
js.append(svg);
  svg.appendChild(circ);
  svg.appendChild(rect);
  svg.appendChild(path);
{{< /js >}}

Select shape, click `<<` to move left or `>>` to move right. Hover on shapes to see they react, and click them to reset their position.


## closing
Some examples of using JS through a shortcode for displaying HTML elements in a Hugo post have been presented and discussed in brief.


## notes
[^gfg_2023]: GfG, "SVG Element Complete Reference", GeeksforGeek, 6 Jul 2023, url https://www.geeksforgeeks.org/svg-element-complete-reference/ [20240411].
[^juviler_2022]: Jamie Juviler, "HTML Elements: What They Are and How to Use Them", HubSpot, 25 Jul 2022, url https://blog.hubspot.com/website/html-elements [20240411].
[^m_2020]: n_m, "Hugo use inline javascript within posts", Stack Overflow 28 Jul 2020, url https://stackoverflow.com/a/63138441/9475509 [20240411].
[^pyth0n_2017]: Pyth0n, "Insert js in a Hugo post", Stack Overflow, 8 Mar 2017, url https://stackoverflow.com/a/42672833/9475509 [20240411].
[^rajora_2023]: Harish Rajora, "A Beginner’s Guide to Static Site Generator", Medium, 13 Dec 2023, url https://medium.com/p/806583fd81f3 [20240411].
[^schindlabua_2020]: Schindlabua, "Are SVG elements considered HTML elements?", Sololearn, 30 Jul 2020, url https://www.sololearn.com/en/Discuss/2421836/are-svg-elements-considered-html-elements [20240411].
[^vidas_2015]: Šime Vidas, Russ Bateman, "How do I open the JavaScript console in different browsers?", Webmasters Stack Exchange, 17 Oct 2019, url https://webmasters.stackexchange.com/a/77337/138202 [20240411].
