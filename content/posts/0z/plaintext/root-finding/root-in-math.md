---
title: "root in math"
date: 2023-12-24T16:43:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "000u"
---
{{< toc >}}


## intro
+ In mathematics a solution to an equation, that can be expressed as a number or an algebraic formula, is known as root (Britannica eds, 2023).
+ Roots can be found algebraically as well as graphically, and the number of roots of a polynomial function gives the degree of the polynomial as shown by the fundamental theorem of algebra (Smith et al., 2023).
+ The roots, which are also called zeros, of an equation $f(x) = 0$, are values of $x$ for which the equation is satisfied (Weisstein, 2023).
+ The term root is sometimes also used as a quick way of saying square root, e.g. root 2 means &Sqrt;2 (Pierce, 2023).
+ Intersection of two functions can also be solved using root finding (Smith, 2022).


## example
+ Suppose there is an equation
$$\tag{1}
f(x) = x^3 - 15x^2 + 59x - 45,
$$
which is a cubic polynomial or third-degree polynomial.
+ Navigate the mouse on a point to view value of $(x, f(x))$ on following figure of Equation (1).
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x)',
          pointRadius: 2,
          pointBackgroundColor: "rgba(0,0,255,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(0,128,255,0.8)",
          lineTension: 0.4,
          data:
          [
{x:0, y:-45},
{x:1, y:0},
{x:2, y:21},
{x:3, y:24},
{x:4, y:15},
{x:5, y:0},
{x:6, y:-15},
{x:7, y:-24},
{x:8, y:-21},
{x:9, y:0},
{x:10, y:45},
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
+ Equation (1) has three roots, $x_1 = 1$, $x_2 = 5$, and $x_3 = 9$ as shown in previous figure. And the values can also presented in table as follow.
+ Table 1. Values of $x$ and $f(x)$.
$x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
:-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
$f(x)$ | -45 | 0 | 21 | 24 | 15 | 0 | -15 | -24 | -21 | 0 | 45
+ Code 1. Generate values of $x$ and $f(x)$.
  ```python
  coeff = [-45, 59, -15, 1]

  def f(x):
    y = coeff[-1]
    for c in reversed(coeff[:-1]):
      y = y * x
      y = y + c
    return y

  print("x\tf(x)")
  for x in range(11):
    print(x, f(x), sep='\t')

  ```
  url https://onecompiler.com/python/3zxcb973f


## flowchart &#9888;
+ Following flowchart is only for illustration, where further description is given along with algorithm in next section.
{{< mermaid >}}
flowchart TD
  B --> I --> P1 --> o1a
  o1b --> C1 --"Y"--> O --> o2a
  C1 --"N"--> o2a
  o2b --> P2 --> C2
  C2 --"Y"--> o1c
  C2 --"N"--> E
  I[/"xa, xb, &Delta;x"/]
  P1["x = xa"]
  P2["x = x + &Delta;x"]
  C1{"f(x) = 0?"}
  C2{"x &le; xb?"}
  O[/"x is a root"/]
  B(["Begin"])
  E(["End"])
  o1a(("1")); o1b(("1")); o1c(("1"))
  o2a(("2")); o2b(("2"))
  classDef style1 fill:none, color:inherit
  classDef style2 fill:#888, color:#fff
  class B,E,I,P1,P2,C1,C2,O style1
  class o1a,o1b,o1c,o2a,o2b style2
  linkStyle default stroke:#8a8
{{< /mermaid >}}
Figure 2. Flowchart for finding roots of $f(x)$.
+ Test whether $x$ is a root begins with $x = x_a$ and ends with  $x = x_b$, where the increment of $x$ is $\Delta x$.
+ It is assumed that there is already $f(x)$, but when not, it can be put on the input box together with $x_a$, $x_b$, and $\Delta x$.


## algorithm &#9888;
+  Here is an example of root finding algorithm, but it is just as an illustration and will only work for Equation (1) with certain value of parameters.
  1. Start.
  2. Define initial and final value for $x$, e.g. $x_a$, $x_b$.
  3. Define step size to change $x$, e.g. $\Delta x$.
  4. Initiate $x = x_a$.
  5. If $f(x) = 0$ display message "$x$ is a root".
  6. Change $x$ to $x + \Delta x$.
  7. If $x \le x_b$ proceed Step 5.
  8. Stop.
+ Code 2. Display roots of $f(x)$.
  ```python
  coeff = [-45, 59, -15, 1]

  def f(x):
    y = coeff[-1]
    for c in reversed(coeff[:-1]):
      y = y * x
      y = y + c
    return y

  xa = -20
  xb = 20
  dx = 1

  x = xa
  while x <= xb:
    if f(x) == 0:
      print(x, "is a root")
    x += dx
  ```
  url https://onecompiler.com/python/3zxe2dukg.
+ Result
  ```
  1 is a root
  5 is a root
  9 is a root
  ```
  Code 2 gives the roots of $f(x)$ in Equation (1). It has $x_a = -20$, $x_b = 20$, and $\Delta x = 1$. So it is searching from $-20$ to $20$ with step size $1$.
+ Notice that the code will fail if value of $x$ being evaluated does not match value of the roots, e.g.
  - $x_a = -20$, &nbsp; $x_b = 20$, &nbsp; $\Delta x = 2$;
  - $x_a = -21.5$, &nbsp; $x_b = 20$, &nbsp; $\Delta x = 1$;
  - $x_a = -20$, &nbsp; $x_b = 0$, &nbsp; $\Delta x = 1$;
  - and other possible conditions.


## challenges
+ Find another values of $x_a$, $x_b$, and $\Delta x$ that will fail the given algorithm in finding roots of Equation (1).
+ Suppose that there is an equation
$$\tag{2}
g(x) = x^2 - 4.5x + 5
$$
and its roots are to find. What whould be the values of $x_a$, $x_b$, and $\Delta x$ so that the previous algorithm works?
+ Give at least four different values, each for $x_a$, $x_b$, and $\Delta x$, that make previous algorithm work.
+ And give also the same amout of different values of them that make the algorithm fail.
+ From the previous answers, what would be then the requirements for $x_a$ and $x_b$, and also for $\Delta x$? Explain them in brief with examples.


## refs
+ Britannica, T E E, Hosch W L, Lotha G (2023) "root", Encyclopedia Britannica, 12 Oct 2023, url https://www.britannica.com/science/root-mathematics [20231224]
+ Pierce R (2023) "Root Definition (Illustrated Mathematics Dictionary)", Math Is Fun, Ed. Rod Pierce, 8 Sep 2023, url http://www.mathsisfun.com/definitions/root.html [20231224].
+ Smith C (2022) "Using fzero() to find the intersection of 2 functions", Oxnard College, LibreTexts Engineering, 29 Oct 2022, url https://eng.libretexts.org/@go/page/88611 [20231225].
+ Smith W, et al. (2023) "Root | Definition & Meaning", Story of Mathematics, 10 Apr 2023, url https://www.storyofmathematics.com/glossary/root/ [20231224].
+ Weisstein, E W (2023) "Root", from MathWorld--A Wolfram Web Resource, 12 Dec 2023, url https://mathworld.wolfram.com/Root.html [20231224].
