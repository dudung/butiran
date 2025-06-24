---
title: "newton-raphson method"
date: 2024-01-08T13:26:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "0014"
---
{{< toc >}}


## intro
The Newton-Raphson method is a method for finding succesively and quickly better approximation for the roots of a real-valued functions (Çapar, 2020). It is one of the most widely used methods for root finding and it can be shown that this technique is quadratically convergent as the root aproached (Smith, 1998). This algorithm is quite versatile with wide-ranging use cases than span many domains, e.g by reframing the function of interest for the value of $x$ that yields a certain value rather than being restricted to $0$ can be searched (Dolphin, 2022). There is a report about historical development of this method (Ypma, 1995), where there are differences between this technique and Newton's technique (Nadhim & Al-Jilawi, 2022).


## formula
+ The Newton-Raphson method has a iterative formula in finding root of $f(x)$ as follow
$$\tag{1}
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$
with $n = 0, 1, 2, 3, \dots$, $x_0$ is the initial guess for the root, and $f'(x)$ is derivative of $f(x)$. 
+ As $n$ increases, the value of $f(x_n)$ is nearer to $0$.


## flowchart
+ The Newton-Raphson method can be represented in following flowchart.
{{< mermaid >}}
flowchart TD
  B --> I --> P1 --> O1a
  O1b --> P2 --> C --"N"--> P3 --> O1c
  C --"Y"--> O --> E
  O[/"x[n+1]"/]
  C{"|f(x[n+1])| < &varepsilon;"}
  P2["x[n+1] = x[n] <br> &mdash; f'(x[n])/f(x[n])"]
  P1["n = 0"]
  P3["n = n + 1"]
  I[/"f(x), f'(x), &epsilon;, x[0]"/]
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
2. Input $f(x)$, $f'(x)$, $\varepsilon$, $x_0$.
3. Set $n = 0$.
4. Calculate $x_{n+1} = x_n - f(x_n) / f'(x_n)$.
5. If $f(x_{n+1}) < \varepsilon$, go to Step 8.
6. Increase $n$ using $n = n + 1$.
7. Go to Step 4.
8. Print $x_{n+1}$.
9. End.


## problem
+ Equation to be solved is
$$\tag{2}
f(x) = x^2 - 102.345x + 234.5.
$$
+ Its derivative
$$\tag{3}
f'(x) = 2x - 102.345x.
$$


## code
+ An example of code in JS is as follow.
  ```js
  function f0(x) {
    let y = x**2 - 102.345*x + 234.5;
    return y;
  }

  function f1(x) {
    let y = 2*x - 102.345;
    return y;
  }

  let eps = 1E-5;
  let n = 0
  let x = [];
  x[n] = 10;
  let fx = f0(x[n]);

  console.log("n   x[n]           f(x[n])     eps");
  while(Math.abs(fx) > eps) {
    console.log(
      n, ' ',
      x[n].toExponential(7), ' ',
      fx.toExponential(4), ' ',
      eps
    );

    xx = x[n] - f0(x[n]) / f1(x[n]); 
    x.push(xx);
    
    fx = f0(x[n+1]);
    
    n = n + 1;
  }
  console.log(
    n, ' ',
    x[n].toExponential(7), ' ',
    fx.toExponential(4), ' ',
    eps
  );

  console.log();
  console.log("root = ", x[n].toFixed(5));
  ```
  url https://onecompiler.com/javascript/3zytm3d38.
+ Previous code produces following results.
  ```
  n   x[n]           f(x[n])     eps
  0   1.0000000e+1   -6.8895e+2   0.00001
  1   1.6333718e+0   7.0000e+1   0.00001
  2   2.3398887e+0   4.9917e-1   0.00001
  3   2.3449997e+0   2.6122e-5   0.00001
  4   2.3450000e+0   5.6843e-14   0.00001

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
  {x:0, y:1.0000000e+1},
  {x:1, y:1.6333718e+0},
  {x:2, y:2.3398887e+0},
  {x:3, y:2.3449997e+0},
  {x:4, y:2.3450000e+0},
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
  {x:0, y:-6.8895e+2},
  {x:1, y:7.0000e+1},
  {x:2, y:4.9917e-1},
  {x:3, y:2.6122e-5},
  {x:4, y:5.6843e-14},
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
+ Try to find the root of
$$\tag{4}
f(x) = x - 3.45,
$$
and show which part of the given code should be modified.
+ Compare the result obtained previously using bisection method in [0004](../0004). Which one is more efficient?
+ Compare the flowchart for scanning method in [000s](../000s), bisection method in [0004](../0004) and Newton-Raphson method here. Which one is easier to understand? Why?
+ Find roots of
$$\tag{5}
f(x) = (x - 1.23456)(x - 9.87654)(x - 23.45678),
$$
with different initial guesses, e.g. 0, 5, 11, 40. Create table to show the relation between initial guess and root found.
+ What will happen if $x_0 = 5 \pm \delta$ in finding root of
$$\tag{6}
f(x) = (x - 2)(x - 8)
$$
by varying value of $\delta$ to assure that both roots are found.
+ Until now all examples are in the form of polynomial, will this method also work for non-polynomial function? Test it for at least such functions. Report the results.


# refs
+ Çap80-Raphson Method", 28 Jul, url https://yasincapar.com/the-newton-raphson-method/ [20240108].
+ Dolphin R (2022) "Newton-Raphson — Explained and Visualised", Towards Data Science -- Medium, 10 Feb, url https://towardsdatascience.com/23f63da21bd5 [20240108].
+ Nadhim A I, Al-Jilawi A S (2022) "The bridge between Newton's method and Newton-Raphson's method in numerical optimization",  International Journal of Health Sciences, vol 6, no S1, pp 5249–5267, url https://doi.org/10.53730/ijhs.v6nS1.6042.
+ Smith M D (1998) "Newton-Raphson Technique", 10.001: Solution of Non-Linear Algebraic Equations, by R. Sureshkumar & G. C. Rutledge, 1 Oct 1998, url https://web.mit.edu/10.001/Web/Course_Notes/NLAE/node6.html [20240108].
+ Ypma T J (1995) "Historical Development of the Newton-Raphson Method", SIAM Review, vol 37, no 4, pp 531-551, Dec, url https://doi.org/10.1137/1037125.