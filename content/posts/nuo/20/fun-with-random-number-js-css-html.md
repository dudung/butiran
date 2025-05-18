+++
title = 'fun with random number js css html'
date = 2024-04-10T21:28:00+07:00
draft = false
math = true
tags = ['random', 'html', 'css', 'js']
url = '2006'
authors = ['viridi']
+++
Random number for CSS and HTML using JS <!--more-->


## intro
To generate random number in JS `Math.random()` method can be used, which produces a pseudo-random floating point-number between 0 (inclusive) and 1 (exclusive) [^yajasvikhqmsg_2024], which can later be processed to create certain random numbers, e.g. decimal with specified max or min-max range, integer with specified max or min-max range, and ones with specified inclusive [^lemonaki_2022]. Beside the pseudo-random generator provided in `Math` object, there are also some alternatives, e.g. one supported by some browsers or create yourself some functions [^castrogiovanni_2021].

In this post results of using random number in JS is shown in HTML with support of CSS. HMTL is a markup language, CSS is a styling language, and JS is a programming language, where they are working together to render the interactive results displayed in a web browser [^patel_2020]. It is also assumed that you are already familiar with JS, CSS, and HTML.


## button + textarea + div
As common elements there are at least button, textarea, and div elements. The first element trigger generating random number, the next shows the values, and the las is for displaying the result. 


{{< js >}}
let bt = document.createElement("button");
bt.innerHTML = "Run"
bt.style.float = "left";
bt.style.width = "50px";

let ta = document.createElement("textarea");
ta.style.overflowY = "scroll";
ta.style.width = "180px";
ta.style.height = "100px";
ta.style.float = "left";
ta.style.marginLeft = "4px";

let dv = document.createElement("div");
dv.style.border = "1px solid #888";
dv.style.height = "104px";
dv.style.float = "left";
dv.style.width = "320px";
dv.style.marginLeft = "4px";

js.appendChild(bt);
js.appendChild(ta);
js.appendChild(dv);

bt.addEventListener("click", function() {
  run(ta, dv)
});

function run(ta, dv) {
  ta.value = "run";
  dv.innerHTML = "run";
}
{{< /js >}}

Above appearance can be produced using following code

```
{{</* js */>}}
let bt = document.createElement("button");
bt.innerHTML = "Run"
bt.style.float = "left";
bt.style.width = "50px";

let ta = document.createElement("textarea");
ta.style.overflowY = "scroll";
ta.style.width = "180px";
ta.style.height = "100px";
ta.style.float = "left";
ta.style.marginLeft = "4px";

let dv = document.createElement("div");
dv.style.border = "1px solid #888";
dv.style.height = "104px";
dv.style.float = "left";
dv.style.width = "320px";
dv.style.marginLeft = "4px";

js.appendChild(bt);
js.appendChild(ta);
js.appendChild(dv);

bt.addEventListener("click", function() {
  run(ta, dv)
});

function run(ta, dv) {
  ta.value = "run";
  dv.innerHTML = "run";
}
{{</* /js */>}}
```

and from this part forwards only additional code will be displyed to avoid redundancy, which are

```js
function run(ta, dv) {
  ta.value = "run";
  dv.innerHTML = "run";
}
```

inside of `run()` function, where `ta` and `dv` are the output, which stand for `textarea` and `div` elements, respectively.


## random floating-point numbers
Random numbers betweens 0 (inclusive) and 1 (exclusive) can be generated using `Math.random()` function.

{{< js >}}
let bt = document.createElement("button");
bt.innerHTML = "Run"
bt.style.float = "left";
bt.style.width = "50px";

let ta = document.createElement("textarea");
ta.style.overflowY = "scroll";
ta.style.width = "180px";
ta.style.height = "100px";
ta.style.float = "left";
ta.style.marginLeft = "4px";

let dv = document.createElement("div");
dv.style.border = "1px solid #888";
dv.style.height = "104px";
dv.style.float = "left";
dv.style.width = "320px";
dv.style.marginLeft = "4px";

js.appendChild(bt);
js.appendChild(ta);
js.appendChild(dv);

bt.addEventListener("click", function() {
  run(ta, dv)
});

function run(ta, dv) {
  dv.style.textAlign = "left";
  dv.style.fontSize = "15px";
  dv.innerHTML = "";
  ta.value = "";
  
  let N = 18;
  for(let i = 0; i < N; i++) {
    let x = Math.random();
    
    ta.value += x.toFixed(3);
    if(i < N-1) ta.value += ", ";
    
    dv.innerHTML += x.toFixed(5); 
    if(i < N-1) dv.innerHTML += ", ";
  }
}
{{< /js >}}

Above results show `18` random numbers between 0 and 1, which is displayed in `textarea` with 3 decimal places, while in `div` with 5 decimal places. And following

```js
function run(ta, dv) {
  dv.style.textAlign = "left";
  dv.style.fontSize = "15px";
  dv.innerHTML = "";
  ta.value = "";
  
  let N = 18;
  for(let i = 0; i < N; i++) {
    let x = Math.random();
    
    ta.value += x.toFixed(3);
    if(i < N-1) ta.value += ", ";
    
    dv.innerHTML += x.toFixed(5); 
    if(i < N-1) dv.innerHTML += ", ";
  }
}
```

is the code. Two first lines are for styling the `div` with `left` alignment and `15px` font size. Then two lines for clearing the `div` and `textarea` are followed. A for loop generate random number `Math.random()` for `18` times. The function `toFixed()` will round the number to certain decimal places `n`, where `n` is the given argument.


## random integer numbers
Integer numbers can be obtained from floating-point numbers by multiplying them first with certain number and then rounding them to the nearest integers.

{{< js >}}
let bt = document.createElement("button");
bt.innerHTML = "Run"
bt.style.float = "left";
bt.style.width = "50px";

let ta = document.createElement("textarea");
ta.style.overflowY = "scroll";
ta.style.width = "180px";
ta.style.height = "100px";
ta.style.float = "left";
ta.style.marginLeft = "4px";

let dv = document.createElement("div");
dv.style.border = "1px solid #888";
dv.style.height = "104px";
dv.style.float = "left";
dv.style.width = "320px";
dv.style.marginLeft = "4px";

js.appendChild(bt);
js.appendChild(ta);
js.appendChild(dv);

bt.addEventListener("click", function() {
  run(ta, dv)
});

function run(ta, dv) {
  dv.style.textAlign = "left";
  dv.style.fontSize = "15px";
  dv.innerHTML = "";
  ta.value = "";
  
  let N = 18;
  for(let i = 0; i < N; i++) {
    let x = Math.round(10 * Math.random());
    
    ta.value += x;
    if(i < N-1) ta.value += ", ";
    
    dv.innerHTML += x; 
    if(i < N-1) dv.innerHTML += ", ";
  }
}
{{< /js >}}

And

```js
function run(ta, dv) {
  dv.style.textAlign = "left";
  dv.style.fontSize = "15px";
  dv.innerHTML = "";
  ta.value = "";
  
  let N = 18;
  for(let i = 0; i < N; i++) {
    let x = Math.round(10 * Math.random());
    
    ta.value += x;
    if(i < N-1) ta.value += ", ";
    
    dv.innerHTML += x; 
    if(i < N-1) dv.innerHTML += ", ";
  }
}
```

is the code. Can you notice the differences with previous code? In order to make integer numbers

```js
let x = Math.round(10 * Math.random());
```

it multiplies generated random numbers between 0 and 1 with 10 and then round them to the nearest integers, which are integer numbers 0, 1, .., 9, 10.


## notes
[^castrogiovanni_2021]: Jessica Reuter Castrogiovanni, "Creating Javascript Random Numbers with Math.random()", Udacity, 16 Apr 2021, url https://www.udacity.com/blog/2021/04/javascript-random-numbers.html [20240410].
[^lemonaki_2022]: Dionysia Lemonaki, "JavaScript Random Number – How to Generate a Random Number in JS", freeCodeCamp, 3 Aug 2022, url https://www.freecodecamp.org/news/javascript-random-number-how-to-generate-a-random-number-in-js/ [20240410].
[^patel_2020]: Abhinav Patel, "Relation Between HTML, CSS, JavaScript", Medium, 9 Dec 2020, url https://medium.com/p/d8f2a4c954fe [20240410].
[^yajasvikhqmsg_2024]: yajasvikhqmsg, "How to Generate a Random Number in JavaScript ?", GeeksforGeeks, 31 Jan 2024, url https://www.geeksforgeeks.org/how-to-generate-a-random-number-in-javascript/ [20240410].
