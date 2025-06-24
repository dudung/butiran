---
title: "bisection method"
date: 2023-12-12T09:07:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "0004"
---
{{< toc >}}


## intro
Bisection method pops up quite often when we talk about root finding methods due its very easy and simple algorithm to implement (Luna, 2020). This method uses the intermediate value theorem iteratively to find roots (Kong et al., 2020). It is also known as the interval halving method, where it provides a systematic approach to finding the root of a function within a given interval (Collimator, 2023). A brief about this method and JavaScript code are given here.


## root
+ Root $x = r_n$ of a function $f(x)$ is when it makes
$$\tag{1}
f(r_n) = 0.
$$
+ It can also be a root when
$$\tag{2}
g(r_n) = h(r_n),
$$
since it can be defined that
$$\tag{3}
f(x) = g(x) - h(x).
$$


## range
+ A single root $x = r_n$ exists for $x \in [x_1, x_2]$ if
$$\tag{4}
f(x_1) f(x_2) < 0.
$$
+ It also holds for odd number of roots.
+ If the requirement is not satisfied there might be even number of roots or there is not any root.
+ From now on only case with one root is considered here.
+ Even that $x_1 < r_n < x_2$, but the value of $r_n$ is still unknown.


## method
+ Find the midpoint between $x_1$ and $x_2$ is a way to approach the $r_n$
$$\tag{5}
x_3 = \tfrac12 (x_1 + x_2),
$$
where the name comes from, bisection, divide the range into two equal parts.
+ Next step is to find where the root exists with two possibilities, which are $x_1 < r_n < x_3$ or $x_3 < r_n < x_2$ by calculating which one from $f(x_1)f(x_3)$ and $f(x_2)f(x_3)$ is negative.
+ If $x_1 < r_n < x_3$ then swap $x_2$ and $x_1$.
+ Then calculate next midpoint using equation similar to the last one
$$\tag{6}
x_4 = \tfrac12 (x_2 + x_3).
$$
+ Repeat the step until $|f(x_n)| > \varepsilon$, where $\varepsilon$ is small value regarding as zero.


## flowchart
+ The method can be represented in a flowchart as follow.
{{< mermaid >}}
flowchart TD
  B --> I --> P1 --> O1a --> P2 --> O2a
  O2b ---> P3 --> C1
  C1 --"N"---> O3a
  C1 --"Y"--> P4 --> O4a
  C2 --"N"--> P6 ---> O1b
  O3b & O4b --> P5 --> C2 --"Y"----> E
  C2{"y < &epsilon;"}
  C1{"s < 0"}
  P6["n = n + 1"]
  P5["y = f(x[n])"]
  P4["x[n-2] &harr; x[n-1]"]
  P3["s = f(x[n]) f(x[n-2])"]
  P2["x[n] = &half; ( x[n-1] + x[n-2] )"]
  P1["n = 3"]
  I[/"f(x), &epsilon;, x[1], x[2]"/]
  O4a(("4")); O4b(("4"));
  O3a(("3")); O3b(("3"));
  O2a(("2")); O2b(("2"));
  O1a(("1")); O1b(("1"));
  B(["Begin"])
  E(["End"])
  classDef style1 fill:none, color:inherit
  classDef style2 fill:#888, color:#fff
  class P1,P2,P3,P4,P5,P6 style1
  class C1,C2,B,E,I style1
  class O1a,O1b,O2a,O2b,O3a,O3b,O4a,O4b style2
  linkStyle default stroke:#8a8
{{< /mermaid >}}
+ The symbol a &harr; b means swapping a and b values.
  ```js
  // define a and b
  let a = 2;
  let b = 10;

  // swap a and b via c
  let c = a;
  a = b;
  b = c;
  ```


## example
+ Suppose that there is a function
$$\tag{7}
f(x) = x - 3.45,
$$
whose root is to be find with $\varepsilon = 10^{-5}$, and initial values are $0$ and $20$.

+ Following code is in JavaScript
  ```js
  function f(x) {
    let y = x - 3.45;
    return y
  }

  let eps = 1E-5;
  let fxn = 100;
  let x = [];
  let y = [];

  console.log('n', 'xn', 'f(xn)');

  let n = 0;
  x[n] = 0;
  y[n] = f(x[n]);
  console.log(n, x[n], y[n]);

  n++;
  x[n] = 20;
  y[n] = f(x[n]);
  console.log(n, x[n], y[n]);
  n++;

  while(Math.abs(fxn) > eps) {
    x[n] = 0.5 * (x[n-1] + x[n-2]);
    y[n] = f(x[n]) 
    fxn = y[n];
    
    if(f(x[n]) * f(x[n-2]) < 0) {
      [x[n-1], x[n-2]] = [x[n-2], x[n-1]];
      [y[n-1], y[n-2]] = [y[n-2], y[n-1]];
    }
    
    console.log(n, x[n], y[n]);
    
    n++;
  }
  ```
  url https://onecompiler.com/javascript/3zw6fwzav
+ Result
  ```
  n xn f(xn)
  0 0 -3.45
  1 20 16.55
  2 10 6.55
  3 5 1.5499999999999998
  4 2.5 -0.9500000000000002
  5 3.75 0.2999999999999998
  6 3.125 -0.3250000000000002
  7 3.4375 -0.012500000000000178
  8 3.59375 0.14374999999999982
  9 3.515625 0.06562499999999982
  10 3.4765625 0.026562499999999822
  11 3.45703125 0.007031249999999822
  12 3.447265625 -0.0027343750000001776
  13 3.4521484375 0.0021484374999998224
  14 3.44970703125 -0.00029296875000017764
  15 3.450927734375 0.0009277343749998224
  16 3.4503173828125 0.00031738281249982236
  17 3.45001220703125 0.000012207031249822364
  18 3.449859619140625 -0.00014038085937517764
  19 3.4499359130859375 -0.00006408691406267764
  20 3.4499740600585938 -0.000025939941406427636
  21 3.449993133544922 -0.000006866455078302636
  ```
+ Discussion
  - It finds $r_1 \approx 3.44999$ where $f(r_1) \approx -6.866\times10^{-6}$, whose absolute value is already smaller than $\varepsilon$.
  - Further exploration with $\varepsilon = 10^{-20}$ requires more steps, $n = 56$, to obtain $r_1 = 3.45$.


## graphics
+ Previous data can be visualized for $r_1$ as follow.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x - 3.45',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
  {x:0, y:0},
  {x:1, y:20},
  {x:2, y:10},
  {x:3, y:5},
  {x:4, y:2.5},
  {x:5, y:3.75},
  {x:6, y:3.125},
  {x:7, y:3.4375},
  {x:8, y:3.59375},
  {x:9, y:3.515625},
  {x:10, y:3.4765625},
  {x:11, y:3.45703125},
  {x:12, y:3.447265625},
  {x:13, y:3.4521484375},
  {x:14, y:3.44970703125},
  {x:15, y:3.450927734375},
  {x:16, y:3.4503173828125},
  {x:17, y:3.45001220703125},
  {x:18, y:3.449859619140625},
  {x:19, y:3.4499359130859375},
  {x:20, y:3.4499740600585938},
  {x:21, y:3.449993133544922},
          ]
        },
      ]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'n'
          }
        }],
        yAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'r1'
          }
        }]    
      }
    }
  }
  {{< /chart >}}
+ It can also visualized for $f(r_1)$ as follow.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x - 3.45',
          pointRadius: 4,
          pointBackgroundColor: "rgba(0,0,255,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(0,0,255,0.5)",
          lineTension: 0.0,
          data:
          [
  {x:0, y:-3.45},
  {x:1, y:16.55},
  {x:2, y:6.55},
  {x:3, y:1.5499999999999998},
  {x:4, y:-0.9500000000000002},
  {x:5, y:0.2999999999999998},
  {x:6, y:-0.3250000000000002},
  {x:7, y:-0.012500000000000178},
  {x:8, y:0.14374999999999982},
  {x:9, y:0.06562499999999982},
  {x:10, y:0.026562499999999822},
  {x:11, y:0.007031249999999822},
  {x:12, y:-0.0027343750000001776},
  {x:13, y:0.0021484374999998224},
  {x:14, y:-0.00029296875000017764},
  {x:15, y:0.0009277343749998224},
  {x:16, y:0.00031738281249982236},
  {x:17, y:0.000012207031249822364},
  {x:18, y:-0.00014038085937517764},
  {x:19, y:-0.00006408691406267764},
  {x:20, y:-0.000025939941406427636},
  {x:21, y:-0.000006866455078302636},        ]
        },
      ]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'n'
          }
        }],
        yAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'f(r1)'
          }
        }]    
      }
    }
  }
  {{< /chart >}}
+ You may hover your mouse on a point to see its pair values.
+ JS code to produce the data for Chart.js embeded here is available https://onecompiler.com/javascript/3zw6zv4x9.


## challenges
+ Modify above given code to find the root with $\varepsilon = 10^{-20}$, display the last three lines, and show that it requires $n = 56$.
+ Modify the code to calculate a root of
$$\tag{8}
f(x) = (x - 3.45)(x + 1).
$$
Explain whether the initial values $0$ and $20$ can be used or they must be changed.
+ What if the function is
$$\tag{9}
f(x) = (x - 3.45)(x - 1),
$$
can the initial values still be used? If they must be changed, what are your suggestion?


## refs
+ Collimator (2023) "Understanding the Basics of the Bisection Method", url https://www.collimator.ai/reference-guides/what-is-the-bisection-method.
+ Kong Q, Siauw T, Bayen A (2020) "Python Programming and Numerical Methods", Academic Press, 1st edition, isbn [9780128195499](https://isbnsearch.org/isbn/9780128195499), ch [19.03](https://pythonnumericalmethods.berkeley.edu/notebooks/chapter19.03-Bisection-Method.html).
+ Luna C M (2020) "Bisection Method", Medium, [@cmluna2913/32c8fb2e76a0](https://medium.com/@cmluna2913/32c8fb2e76a0).

