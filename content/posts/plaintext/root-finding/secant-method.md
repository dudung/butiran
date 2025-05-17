---
title: "secant method"
date: 2024-01-08T19:16:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "0015"
---
{{< toc >}}


## intro
If the derivative of function, whose root is to be found, does not exist or hard to find, secant method can be used instead of Newton raphson method, since it does not required the derivative but it requires two initial guesses for the roots (Mohan, 2021). Since this method retains only the most recent estimate, the root does not necessary bracketed (Weisstein). Because of that secant method may not converge (Han, 2017). There is a report explaining origin and evolution of secont method in 1-d (Papakonstantinou & Tapia, 2013).


## formula
+ The Newton-Raphson method has a iterative formula in finding root of $f(x)$ as follow
$$\tag{1}
x_{n+2} = x_{n+1} - \frac{(x_{n+1} - x_n) f(x_{n+1})}{f(x_{n+1}) - f(x_n)}
$$
with $n = 0, 1, 2, 3, \dots$, $x_0$ and $x_1$ are the initial guesses for the root. 
+ As $n$ increases, the value of $f(x_n)$ is nearer to $0$.


## flowchart
+ The Newton-Raphson method can be represented in following flowchart.
{{< mermaid >}}
flowchart TD
  B --> I --> P1 --> O1a
  O1b --> P2 --> C --"N"--> P3 --> O1c
  C --"Y"--> O --> E
  O[/"x[n+2]"/]
  C{"|f(x[n+2])| < &varepsilon;"}
  P2["x[n+2] = x[n+1] <br> &mdash; ( x[n+1] &mdash; x[n] ) f(x[n])<br>/ ( f(x[n+1]) &mdash; f(x[n]) )"]
  P1["n = 0"]
  P3["n = n + 1"]
  I[/"f(x), &epsilon;, x[0], x[1]"/]
  O1a(("1")); O1b(("1")); O1c(("1"));
  B(["Begin"])
  E(["End"])
  classDef style1 fill:none, color:inherit
  classDef style2 fill:#888, color:#fff
  class P1,P2,P3,P4 style1
  class I,C,O,B,E style1
  class O1a,O1b,O1c, style2
  linkStyle default stroke:#8a8
{{< /mermaid >}}
+ Parameter $\varepsilon$ is small value that is acceptable representing $0$, since it might require a lot of iterations to find $f(x) = 0$, where $f(x) \approx 0$ is easier.


## algorithm
1. Start.
2. Input $f(x)$, $\varepsilon$, $x_0$, $x_1$.
3. Set $n = 0$.
4. Calculate $x_{n+2} = x_{n+1} - (x_{n+1} - x_n) f(x_{n+1}) / [ f(x_{n+1}) - f(x_n) ]$.
5. If $f(x_{n+2}) < \varepsilon$, go to Step 8.
6. Increase $n$ using $n = n + 1$.
7. Go to Step 4.
8. Print $x_{n+2}$.
9. End.


## problem
+ Equation to be solved is
$$\tag{2}
f(x) = x^2 - 102.345x + 234.5.
$$


## code
+ An example of code in JS is as follow.
  ```js
  function f0(x) {
    let y = x**2 - 102.345*x + 234.5;
    return y;
  }

  let eps = 1E-5;
  let n = 0
  let x = [];
  x[n] = 5;
  x[n+1] = 10;
  let fx = f0(x[n]);

  console.log("n   x[n]           f(x[n])     eps");
    console.log(
      n, ' ',
      x[n].toExponential(7), ' ',
      fx.toExponential(4), ' ',
      eps
    );
    console.log(
      n+1, ' ',
      x[n+1].toExponential(7), ' ',
      fx.toExponential(4), ' ',
      eps
    );

  while(Math.abs(fx) > eps) {
    xx = x[n+1] - f0(x[n+1]) * (x[n+1] - x[n]) / (f0(x[n+1]) - f0(x[n])); 
    x.push(xx);
    
    fx = f0(x[n+2]);
    
    console.log(
      n+2, ' ',
      x[n+2].toExponential(7), ' ',
      fx.toExponential(4), ' ',
      eps
    );

    n = n + 1;
  }

  console.log();
  console.log("root = ", x[n+1].toFixed(5));
  ```
  url https://onecompiler.com/javascript/3zytsa2wj.
+ Previous code produces following results.
  ```
  n   x[n]           f(x[n])     eps
  0   5.0000000e+0   -2.5223e+2   0.00001
  1   1.0000000e+1   -2.5223e+2   0.00001
  2   2.1123132e+0   2.2777e+1   0.00001
  3   2.3647403e+0   -1.9273e+0   0.00001
  4   2.3450469e+0   -4.5833e-3   0.00001
  5   2.3450000e+0   9.2667e-7   0.00001

  root =  2.34500
  ```


## graphics
+ Previous data can be visualized for $r_1$, the root, as follow.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^2 - 102.345x + 234.5',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
  {x:0, y:5.0000000e+0},
  {x:1, y:1.0000000e+1},
  {x:2, y:2.1123132e+0},
  {x:3, y:2.3647403e+0},
  {x:4, y:2.3450469e+0},
  {x:5, y:2.3450000e+0},
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
  {x:0, y:-2.5223e+2},
  {x:1, y:-2.5223e+2},
  {x:2, y:2.2777e+1},
  {x:3, y:-1.9273e+0},
  {x:4, y:-4.5833e-3},
  {x:5, y:9.2667e-7},
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
          labelString: 'f(r1)'
          }
        }]    
      }
    }
  }
  {{< /chart >}}
+ You may hover your mouse on a point to see its pair values.


## challenges
+ Explain in brief the background of Newton-Raphson method and how it is formulated until the iterative formula in Equation (1) is obtained. If necessary draw also some graphs to make the exlplanation clearer.
+ Find resources explaining that convergence of Newton-Raphson method is quadratic, while convergence of secant method is linear. And read it.
+ Try to find the root of
$$\tag{3}
f(x) = x - 3.45,
$$
and show which part of the given code should be modified.
+ Compare the flowchart for scanning method in [000s](../000s), bisection method in [0004](../0004) and Newton-Raphson method in [0014](../0014). Which one is easier to understand? Why?
+ Find roots of
$$\tag{4}
f(x) = (x - 1.23456)(x - 9.87654)(x - 23.45678),
$$
with different initial guesses, e.g. 0, 5, 11, 40. Create table to show the relation between initial guess and root found.
+ Compare the result obtained previously using Newton-Raphson method in [0014](../0014). Which one is more efficient?
+ What will happen if $x_0 = 5 \pm \delta$ in finding root of
$$\tag{5}
f(x) = (x - 2)(x - 8)
$$
by varying value of $\delta$ to assure that both roots are found.
+ Until now all examples are in the form of polynomial, will this method also work for non-polynomial function? Test it for at least such functions. Report the results.
+ What would be the advantages and the disadvantages from this method compared to Newton-Raphson method?
+ Can this method apply to a constant function, e.g. $f(x) = c$, where $c$ is a constant value. Explain in brief.


# refs
+ Han W (2017), "The Secant Method", Elementary Numerical Analysis, Fall, url https://homepage.math.uiowa.edu/~whan/3800.d/S3-3.pdf [20240108].
+ Mohan M (2021) "Secant Method of Numerical analysis", GeeksforGeeks, 18 Oct, url https://www.geeksforgeeks.org/secant-method-of-numerical-analysis/ [20240108].
+ Papakonstantinou J M, Tapia R A (2013) "Origin and Evolution of the Secant Method in One Dimension", The American Mathematical Monthly, vol 120, no 6, June–July 2013), pp 500-518 (19 pages), url https://doi.org/10.4169/amer.math.monthly.120.06.500.
+ Weisstein E W (2023) "Secant Method" from MathWorld--A Wolfram Web Resource, 12 Dec, url https://mathworld.wolfram.com/SecantMethod.html [20240108].
