+++
title = 'js for fun 1'
date = '2025-03-09T05:17:53+07:00'
draft = false
math = false
type = 'notes'
authors = ['viridi']
tags = ['for-fun']
categories = ['js']
url = '25c22'
[ref]
author = 'Sparisoma Viridi'
title = 'js for fun 1'
source = 'notes, 9 Mar 2025'
updated = '-'
url = 'https://dudung.github.io/notes/25c22/'
accessed = '20250309'
+++

{{< columns >}}
+ customize container
+ toggle button
+ textarea
+ two numbers addition
{{< /columns >}}

{{< columns >}}
+ challenges
+ summaries
+ refs
{{< /columns >}}

<!--more-->

There was a pair of shortcodes allowing to have fun with JS inside a Hugo post. They are `script/loader` and `script/runner` [^viridi_2025]. The former is for loading JS from external and the later is for executing JS in the post. Here the last will be used in having fun with JS in a Hugo post.


## customize container
a `div` is the container for DOM elements created by JS placed between pair of `script/runner` shortcode.

{{< script/runner id="cnt1" >}}
const cnt = document.getElementById("cnt1");
cnt.innerHTML = "Hello, World!";

with(cnt.style) {
  border = "2px solid cyan";
  borderRadius = "20px"
  padding = "4px 12px";
  width = "200px";
  textAlign = "center";
  background = "darkblue";
  color = "white";
}
{{< /script/runner >}}

Above result is obtained using following code.

```php
{{</* script/runner id="cnt1" */>}}
const cnt = document.getElementById("cnt1");
cnt.innerHTML = "Hello, World!";

with(cnt.style) {
  border = "2px solid cyan";
  borderRadius = "20px"
  padding = "4px 12px";
  width = "200px";
  textAlign = "center";
  background = "darkblue";
  color = "white";
}
{{</* /script/runner */>}}
```

Notice that `document.getElementById("cnt1")` is due to `id="cnt1"`, argument of the shortcode. And the text "Hello, World!" is set using 
`.innerHTML` property of `div` element. There is better approach using `.appendChild()` method.

If there is more that one use of `script/runner` shortcode, every container should have unique `id`. Otherwise it will only modified the first one.


## toggle button
Previously, how to customize a structural element is shown. In this part example of a form element, a button, is given. What elements fall in which categories, structural or form elements, can be found in some resources but not with the exact same categories [^gpt4o_20205].

{{< script/runner id="cnt2" >}}
const cnt = document.getElementById("cnt2");

const btn = document.createElement("button");
btn.innerHTML = "Off";

btn.addEventListener("click", function() {
    if(btn.innerHTML == "Off") {
      btn.innerHTML = "On";
    } else {
      btn.innerHTML = "Off";
    }
});

cnt.appendChild(btn);
{{< /script/runner >}}

Following is code to get above result.

```php
{{</* script/runner id="cnt2" */>}}
const cnt = document.getElementById("cnt2");

const btn = document.createElement("button");
btn.innerHTML = "Off";

btn.addEventListener("click", function() {
    if(btn.innerHTML == "Off") {
      btn.innerHTML = "On";
    } else {
      btn.innerHTML = "Off";
    }
});

cnt.appendChild(btn);
{{</* /script/runner */>}}
```

Using `click` event the `button` will toggle its state between `On` and `Off`. It is not a good example for toggle button. But just for now it is working. 


## textarea
Here there is another example with form element, textarea, which is a multi-line input that is useful for capturing more extensive information compared to input, which is only for single-line input [^harsh_2024].

{{< script/runner id="cnt3" >}}
const cnt = document.getElementById("cnt3");
const ta = document.createElement("textarea");

with(ta.style) {
  overflowY = "scroll";
  height = "100px";
  width = "220px";
}

ta.value = "\
10 REM Simple Program\n\
15 BEGIN\n\
20 PRINT 'Hello, World!'\n\
30 END\
";

cnt.appendChild(ta);
{{< /script/runner >}}

To get above result at least following lines are required.

```php
{{</* script/runner id="cnt3" */>}}
const cnt = document.getElementById("cnt3");
const ta = document.createElement("textarea");

with(ta.style) {
  overflowY = "scroll";
  height = "100px";
  width = "220px";
}

ta.value = "\
10 REM Simple Program\n\
15 BEGIN\n\
20 PRINT 'Hello, World!'\n\
30 END\
";

cnt.appendChild(ta);
{{</* /script/runner */>}}
```

The way to create a HTML element is still the same as in previous examples, which is using `document.createElement("tagname")`, where `textarea` is the `tagname` in this case.


## two numbers addition
Let us now use three input elements, two span elements, and one button element for performing addition of two numbers.

{{< script/runner id="cnt4" >}}
// get and create elements
const cnt = document.getElementById("cnt4");
const elx = document.createElement("input");
const ely = document.createElement("input");
const elz = document.createElement("input");
const sp1 = document.createElement("span");
const sp2 = document.createElement("span");
const btn = document.createElement("button");

// style and modify elements
elx.style.width = "50px";
elx.placeholder = "number";

ely.style.width = "50px";
ely.placeholder = "number";

elz.style.width = "50px";

with(sp1) {
  innerHTML = "+";
  style.width = "30px";
  style.display = "inline-block";
  style.textAlign = "center";
}

with(sp2) {
  innerHTML = "=";
  style.width = "30px";
  style.display = "inline-block";
  style.textAlign = "center";
}

btn.innerHTML = "Add";
btn.style.marginLeft = "10px";

// add event listener
btn.addEventListener("click", btnClick);

// handle button click event
function btnClick(e) {
  let x = parseFloat(elx.value);
  let y = parseFloat(ely.value);
  let z = x + y;
  elz.value = z;
}

// append elements to container
cnt.appendChild(elx);
cnt.appendChild(sp1);
cnt.appendChild(ely);
cnt.appendChild(sp2);
cnt.appendChild(elz);
cnt.appendChild(btn);
{{< /script/runner >}}

The lines to obtain previous result are as follow.

```php
{{</* script/runner id="cnt4" */>}}
// get and create elements
const cnt = document.getElementById("cnt4");
const elx = document.createElement("input");
const ely = document.createElement("input");
const elz = document.createElement("input");
const sp1 = document.createElement("span");
const sp2 = document.createElement("span");
const btn = document.createElement("button");

// style and modify elements
elx.style.width = "50px";
elx.placeholder = "number";

ely.style.width = "50px";
ely.placeholder = "number";

elz.style.width = "50px";

with(sp1) {
  innerHTML = "+";
  style.width = "30px";
  style.display = "inline-block";
  style.textAlign = "center";
}

with(sp2) {
  innerHTML = "=";
  style.width = "30px";
  style.display = "inline-block";
  style.textAlign = "center";
}

btn.innerHTML = "Add";
btn.style.marginLeft = "10px";

// add event listener
btn.addEventListener("click", btnClick);

// handle button click event
function btnClick(e) {
  let x = parseFloat(elx.value);
  let y = parseFloat(ely.value);
  let z = x + y;
  elz.value = z;
}

// append elements to container
cnt.appendChild(elx);
cnt.appendChild(sp1);
cnt.appendChild(ely);
cnt.appendChild(sp2);
cnt.appendChild(elz);
cnt.appendChild(btn);

{{</* /script/runner */>}}
```

It is already a little bit complex, isn't it? It is actually only an advancement of previous examples, where in this one, button click event retrieve value `x` from `elx` elements and `y` from `ely` elements, add the two numbers, store the result in `z`, then update value of `elz` element. The arithmetic operation, addition, is provided in following function.

```js
// handle button click event
function btnClick(e) {
  let x = parseFloat(elx.value);
  let y = parseFloat(ely.value);
  let z = x + y;
  elz.value = z;
}
```

Above function can be modified easily to perform other arithmetic operation, e.g. sub (subtraction), mul (multiplication), and div (division).


## challenges
+ Create three small project to perfrom subtraction, multiplication, and division of two numbers.
+ Create new layout of HTML form elements so that by giving two numbers, the addition, subtraction, multiplication, and division can be performed by clicking related button.
+ If not using `script/runner` shortcode in a Hugo post the JS code can still be used in a HTML file. Find the way how to used it and repeat the given examples. Modification of the first line might be necessary for the container.


## summaries
+ A HTML element is created using `document.createElement()` function with argument of `tagname`, e.g. `button`, `textarea`, `input`, `span`, etc.
+ A HTML element can be referred using `document.getElementById()` function with argument of `id`, which is should be previously defined, where in previous examples `cnt1`, `cnt2`, `cnt3`, and `cnt4` are `id` of four different elements.
+ Using `.style` all attibutes, that CSS can style, can be modified using JS, where the style attributes modified so far are `border`, `borderRadius`, `padding`, `width`, `textAlign`, `background`, `color`, `overflowY`, `height`, and `display`.


## refs
[^gpt4o_20205]: GPT-4o, "Structural and Form Elements", Chat GPT, 9 Mar 2025, url https://chatgpt.com/share/67cd065f-de60-800a-9aaa-d0d1b4f7966f [20250309].
[^harsh_2024]: Kumar Harsh, "Improve Your Forms with HTML Textarea: An In-Depth Tutorial", Formspree, 11 Oct 2024, url https://formspree.io/blog/html-textarea/ [20250309].
[^viridi_2025]: Sparisoma Viridi, "shortcodes script loader and runner", notes, 19 Jan 2025, url http://dudung.github.io/notes/25a66/ [20250309].
