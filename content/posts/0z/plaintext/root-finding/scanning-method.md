---
title: "scanning method"
date: 2023-12-23T20:27:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "000s"
---
{{< toc >}}


## intro
The simplest way to find a root of an equation is by scanning root candidates from an intial value, e.g. $x = x_a$, with increment $\Delta x$ until sign of the function change from previously ${\rm sign}(f(x_a))$, or if possible until $f(x) = 0$ (Rahmansyah & Ahhad, 2013). It is a typical solution in optics if met the physical limit of a resolution (Rom39, 2015).


## example
+ Suppose that there is a function
$$\tag{1}
f(x) = x^2 - 104.25x + 425,
$$
whose root is to be find.
+ Navigate the mouse on a point to view value of $(x, f(x))$ on following figure of Equation (1).
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^2 - 104.25x + 425',
          pointRadius: 2,
          pointBackgroundColor: "rgba(0,0,255,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(0,128,255,0.8)",
          lineTension: 0.4,
          data:
          [
{x:0.0, y:425.0},
{x:0.5, y:373.125},
{x:1.0, y:321.75},
{x:1.5, y:270.875},
{x:2.0, y:220.5},
{x:2.5, y:170.625},
{x:3.0, y:121.25},
{x:3.5, y:72.375},
{x:4.0, y:24.0},
{x:4.5, y:-23.875},
{x:5.0, y:-71.25},
{x:5.5, y:-118.125},
{x:6.0, y:-164.5},
{x:6.5, y:-210.375},
{x:7.0, y:-255.75},
{x:7.5, y:-300.625},
{x:8.0, y:-345.0},
{x:8.5, y:-388.875},
{x:9.0, y:-432.25},
{x:9.5, y:-475.125},
{x:10.0, y:-517.5},
          ]
        },
      ]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'x'
          }
        }],
        yAxes: [{
          scaleLabel: {
          display: true,
          labelString: 'f(x)'
          }
        }]    
      }
    }
  }
  {{< /chart >}}
  Figure 1. Plot of $f(x)$ against $x$.
+ The quadratic form of Equation (1) can not be seen since it is only plotted for $x \in [0, 10]$, which seems to be linear but unfortunately not.
+ Following data are used for Figure 1.
  ```
  x
  [
  0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0,
  3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5,
  7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0
  ]

  f(x)
  [
  425.0, 373.125, 321.75, 270.875, 220.5,
  170.625, 121.25, 72.375, 24.0, -23.875,
  -71.25, -118.125, -164.5, -210.375,
  -255.75, -300.625, -345.0, -388.875,
  -432.25, -475.125, -517.5
  ]
  ```
+ Code 1. Generate data $x$ and $f(x)$.
  ```python
  def f(x):
    y1 = x**2
    y2 = -104.25 * x
    y3 = 425
    y = y1 + y2 + y3
    return y

  xx = []
  yy = []
  for ix in range(21):
    x = 0.5 * ix
    xs = "{x:" + f'{x}' + ","
    ys = "y:" + f'{f(x)}' + "},"
    print(xs, ys)
    
    xx.append(x)
    yy.append(f(x))

  print()
  print("x")
  print(xx)

  print()
  print("f(x)")
  print(yy)
  ```
  url https://onecompiler.com/python/3zxfanw68 \
  This code generates two types of data, in the form of
  - list of dictionary `{x: value, y:value}`,
  - list of $x$ and $f(x)$.

## flowchart
+ Following flowchart shows how scanning method works. At the end it average two points, where the root lies, as the root.
{{< mermaid >}}
flowchart TD
  B --> I --> P1 --> P2 --> o2a
  o1a --> P2
  o2b --> P3 --> C1 --"N"--> P5 --> o3a
  C1 --"Y"--> P6 --> o4a
  o3b --> C2 --"Y"--> o1b
  C2 --"N"--> O2 --> o5a
  o4b --> O1 ---> o5b --> E
  B(["Begin"])
  I[/"xa, xb, &Delta;x"/]
  P1["x = xa"]
  P2["s1 = sign(f(x))"]
  P3["s2 = sign(f(x+&Delta;x))"]
  P5["x = x + &Delta;x"]
  P6["root = x + &Delta;x/2"]
  C1{"s1 &middot; s2 < 0?"}
  C2{"x &le; xb?"}
  O1[/"root"/]
  O2[/"no root"/]
  E(["End"])
  o1a(("1")); o1b(("1"))
  o2a(("2")); o2b(("2"))
  o3a(("3")); o3b(("3"))
  o4a(("4")); o4b(("4"))
  o5a(("5")); o5b(("5"))
  classDef style1 fill:none, color:inherit
  classDef style2 fill:#888, color:#fff
  class B,E,I,P1,P2,P3,P4,P5,P6,C1,C2,O1,O2 style1
  class o1a,o1b,o1c,o2a,o2b,o3a,o3b,o4a,o4b,o5a,o5b style2
  linkStyle default stroke:#8a8
{{< /mermaid >}}
Figure 2. Flowchart for finding roots of $f(x)$.


## algorithm
1. Start.
2. Define $x_a$, $x_b$, $\Delta x$.
3. Initiate $x = x_a$.
4. Caculate $s_1 = {\rm sign}(f(x))$.
5. Caculate $s_2 = {\rm sign}(f(x + \Delta x))$.
6. If $s_1 s_2 < 0$ go to to Step 11.
7. Advance $x$ with $\Delta x$.
8. If $x \le x_b$ go to Step 4.
9. Display no root found.
10. Go to Step 13.
10. Calculate ${\rm root} = x + \frac12 \Delta x$.
11. Display root value.
12. End.


## code
+ Code 2. Scanning method to find a root of $f(x)$.
  ```js
  console.log("Scanning method");

  // round to n digit
  function roundn(x, n) {
    let mag = Math.pow(10, n);
    let y = Math.round(x * mag) / mag;
    return y;
  }


  // define a Function
  function f(x) {
    let y = x*x - 104.25*x + 425;
    return y;
  }

  // define range and step
  let xa = 0;
  let xb = 10;
  let dx = 0.1;
  let x = xa;
  let sx = Math.sign(f(x));
  let sxnew;

  console.log("x\tf(x)");
  while(x <= xb) {
    sxnew = sx;
    sx = Math.sign(f(x))
    
    let y = f(x);
    
    let xx = roundn(x, 3);
    let yy = roundn(y, 3);
    console.log(xx, '\t', yy);

    if(sx * sxnew <= 0) {
      break;
    }
    
    x += dx;
    sxnew = Math.sign(f(x));
  }
  console.log();

  let x1 = roundn(x-dx, 3);
  let x2 = roundn(x, 3);
  console.log("Root is located between");
  console.log(x1, '\t', x2);
  ```
  url https://onecompiler.com/javascript/3zxfe9c7m.
+ Result
  ```
  $ node scanning_method.js
  x       f(x)
  0        425
  0.1      414.585
  0.2      404.19
  0.3      393.815
  0.4      383.46
  0.5      373.125
  0.6      362.81
  0.7      352.515
  0.8      342.24
  0.9      331.985
  1        321.75
  1.1      311.535
  1.2      301.34
  1.3      291.165
  1.4      281.01
  1.5      270.875
  1.6      260.76
  1.7      250.665
  1.8      240.59
  1.9      230.535
  2        220.5
  2.1      210.485
  2.2      200.49
  2.3      190.515
  2.4      180.56
  2.5      170.625
  2.6      160.71
  2.7      150.815
  2.8      140.94
  2.9      131.085
  3        121.25
  3.1      111.435
  3.2      101.64
  3.3      91.865
  3.4      82.11
  3.5      72.375
  3.6      62.66
  3.7      52.965
  3.8      43.29
  3.9      33.635
  4        24
  4.1      14.385
  4.2      4.79
  4.3      -4.785

  Root is located between
  4.2      4.3
  ```
+ Discussion
  - It finds $4.2 < r_1 < 4.3$, whose value is supposed to be $4.25$.
  - The root can be obtained by averaging the values bracketing it, i.e. $\frac12(4.2 + 4.3) = 4.25$, which is true accidentally for this case.
  - Previous step will not work for general case, e.g. $f(x) = x^2 - 104.125x + 412.5$.


## challenges
+ Write code to implement the algorithm or the flowchart using Python. You can modify the given JavaScript code.
+ Is there any relation between increment of $x$, $\Delta x$ with the accuracy of the result? Explain using examples.


## refs
+ Rahmansyah A A, Ahhad F M (2013), "Metode Scanning, Newton Raphson, Secant - Matlab", Scribd, 8 Oct 2013, url https://www.scribd.com/document/174418503 [20231225].
+ Rom38 (2015) "Finding all zeroes - mysterious missing roots", comment, Mathematica, 17 Mar 2015, url https://mathematica.stackexchange.com/q/77389/95975 [20231225].