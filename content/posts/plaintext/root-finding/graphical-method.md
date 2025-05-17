---
title: "graphical method"
date: 2023-12-26T07:04:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "000v"
---
{{< toc >}}


## intro
+ The term graphical method related root finding might have lots of meanings as follow.
  + The graphical method can also be presented in the form of perpendicular segements representing polynomial coefficients in the process of finding the real roots of pthe polynomial (Eisenberg, 1967).
  + For complex roots the graphical method perform the analysis in the form of contour in complex plane (Pfeiffer, 1979).
  + There is also other graphical technique for nonlinear algebraic equations that employs two graphs of the zero-curves of the real and imaginary parts of the polynomial for locating roots approximate location (Mitsui, 1983).
  + Not to related to topic covered here, graphical study in the other form, e.g. polynomiography, can be very helpful in studying the newly development of root-finding algorithm (Naseem et al., 2023).
+ In this note the meanings of the graphical method are limited only to the following.
  + Graphical method is classified as bracketing methods in root finding methods, which is not very percise (Hedge, 2015).
  + It is used usually to find real roots of an equation (Vaniya, 2020).


## method
+ It draws the function $f(x)$ againts $x$ and try to locate as near as possible to get $x = r$, which makes $f(r) = 0$.
+ Choose a range $x \in [x_a, x_b]$ where $x_a < r < x_b$ holds.
+ Zoom in by changing the range to $x \in [x_a\', x_b\']$ as long as $x_a\' < r < x_b\'$ holds until expected precision, where $x_a\' > x_a$ and $x_b\' < x_b$.


## example
+ Suppose that there is function
$$\tag{1}
f(x) = x^3 + 1.2345x^2 - 9.876x - 1
$$
where one root lies between $2$ and $3$.


## graphs
+ Figure 1. Plot $f(x)$ for $x \in [0, 10]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:0.0, y:-1.0},
{x:1.0, y:-8.641499999999999},
{x:2.0, y:-7.814},
{x:3.0, y:7.482500000000002},
{x:4.0, y:43.248000000000005},
{x:5.0, y:105.4825},
{x:6.0, y:200.186},
{x:7.0, y:333.3585},
{x:8.0, y:511.0},
{x:9.0, y:739.1105},
{x:10.0, y:1023.69},
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
+ Figure 2. Plot $f(x)$ for $x \in [0, 5]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:0.0, y:-1.0},
{x:0.5, y:-5.504375},
{x:1.0, y:-8.641499999999999},
{x:1.5, y:-9.661375},
{x:2.0, y:-7.814},
{x:2.5, y:-2.3493749999999984},
{x:3.0, y:7.482500000000002},
{x:3.5, y:22.431625000000004},
{x:4.0, y:43.248000000000005},
{x:4.5, y:70.681625},
{x:5.0, y:105.4825},
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
+ Figure 3. Plot $f(x)$ for $x \in [2, 4]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:2.0, y:-7.814},
{x:2.2, y:-6.104219999999998},
{x:2.4, y:-3.7676799999999986},
{x:2.6, y:-0.7563799999999965},
{x:2.8, y:2.977679999999996},
{x:3.0, y:7.482500000000002},
{x:3.2, y:12.806080000000009},
{x:3.4000000000000004, y:18.996420000000008},
{x:3.6, y:26.101520000000008},
{x:3.8, y:34.16937999999999},
{x:4.0, y:43.248000000000005},
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
+ Figure 4. Plot $f(x)$ for $x \in [2.6, 2.8]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:2.6, y:-0.7563799999999965},
{x:2.62, y:-0.41629019999999883},
{x:2.64, y:-0.06892479999999779},
{x:2.66, y:0.2857642000000027},
{x:2.68, y:0.6478248000000058},
{x:2.7, y:1.017305000000004},
{x:2.7199999999999998, y:1.3942527999999967},
{x:2.7399999999999998, y:1.778716199999998},
{x:2.76, y:2.170743199999997},
{x:2.78, y:2.5703818},
{x:2.8, y:2.977679999999996},
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
+ Figure 5. Plot $f(x)$ for $x \in [2.64, 2.66]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:2.64, y:-0.06892479999999779},
{x:2.6420000000000003, y:-0.0337862539999918},
{x:2.644, y:0.001425576000002593},
{x:2.646, y:0.03671073800000002},
{x:2.648, y:0.07206928000000445},
{x:2.6500000000000004, y:0.10750125000000565},
{x:2.652, y:0.14300669600000404},
{x:2.654, y:0.17858566599999648},
{x:2.656, y:0.21423820800000826},
{x:2.6580000000000004, y:0.24996437000000427},
{x:2.66, y:0.2857642000000027},
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
+ Figure 6. Plot $f(x)$ for $x \in [2.642, 2.644]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:2.642, y:-0.03378625400000246},
{x:2.6422, y:-0.030268369571999187},
{x:2.6424, y:-0.02674975225600207},
{x:2.6426, y:-0.02323040200400328},
{x:2.6428, y:-0.01971031876800211},
{x:2.643, y:-0.016189502500001396},
{x:2.6432, y:-0.012667953151993316},
{x:2.6434, y:-0.009145670675994921},
{x:2.6436, y:-0.005622655023994838},
{x:2.6438, y:-0.0020989061479994575},
{x:2.644, y:0.001425576000002593},
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
+ Figure 7. Plot $f(x)$ for $x \in [2.6438, 2.6440]$.
  {{< chart 80 300 >}}
  {
    type: 'scatter',
    data:
    {
      datasets: [
        {
          label: 'f(x) = x^3 + 1.2345x^2 - 9.876x - 1',
          pointRadius: 4,
          pointBackgroundColor: "rgba(255,0,0,0.5)",
          showLine: true,
          fill: false,
          borderColor: "rgba(255,0,0,0.5)",
          lineTension: 0.0,
          data:
          [
{x:2.6438, y:-0.0020989061479994575},
{x:2.6438200000000003, y:-0.001746490931225253},
{x:2.64384, y:-0.001394068381692648},
{x:2.64386, y:-0.0010416384993376937},
{x:2.6438800000000002, y:-0.0006892012841248629},
{x:2.6439000000000004, y:-0.00033675673599020683},
{x:2.64392, y:1.5695145087590845e-05},
{x:2.64394, y:0.00036815435919024253},
{x:2.6439600000000003, y:0.0007206209063461699},
{x:2.64398, y:0.001073094786594453},
{x:2.644, y:0.001425576000002593},
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


## results
+ From Figure 1 the root is hardly seen, lies between 2 and 3.
+ From Figure 2 it can be said that $r \approx 2.5$.
+ From Figure 3 it can be said that $r \approx 2.6$.
+ From Figure 4 it can be said that $r \approx 2.64$.
+ From Figure 5 it can be said that $r \approx 2.644$.
+ From Figure 6 it lies between $2.6438$ and $2.6440$.
+ From Figure 7 in can be obtained that $r \approx 2.64392$, which gives $f(r) \approx 1.07305 \times 10^{-3}$.


## code
+ Code 1. Generate data for xy scatter plot using Chart.js.
  ```python
  def generate_data(xa, xb, n):
    dx = (xb - xa) / n
    xx = [(xa + i * dx) for i in range(n+1)]
    yy = []
    for x in xx:
      y = f(x)
      yy.append(y)
    return [xx, yy]

  def f(x):
    y0 = -1
    y1 = -9.876 * x
    y2 = 1.2345 * x**2
    y3 = x**3
    y = y0 + y1 + y2 + y3
    return y

  n = 10

  [x, y] = generate_data(0, 10, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  [x, y] = generate_data(0, 5, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  [x, y] = generate_data(2, 4, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  [x, y] = generate_data(2.6, 2.8, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  [x, y] = generate_data(2.64, 2.66, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  [x, y] = generate_data(2.642, 2.644, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  [x, y] = generate_data(2.6438, 2.6440, n)
  for i in range(n + 1):
    print("{x:", x[i], ", y:", y[i], "},", sep='')
  print()

  ```
  url https://onecompiler.com/python/3zxhdejsr.


## challenges
+ Try to find $r$ that makes $f(r) \approx 10^{-4}$ for $f(x)$ in Equation (1).
+ Could you try further for $r$ that makes $f(r) \approx 10^{-5}$ for the same equation? Give the result.
+ Why does the function $f(x)$ seem to be linear, when the range becomes narrower? 


## refs
+ Eisenberg L (1967) "A graphical method for finding the real roots of nth-order polynomials", IEEE Transactions on Automatic Control, vol 12, no 5, pp 629-631, October 1967, url https://doi.org/10.1109/TAC.1967.1098710.
+ Hedge S (2015) "Lecture 04 Finding Roots of equations Bracketing Methods", AML702 Applied Computational Methods, Indian Institute of Technology Delhi, 18 Jan 2015, url https://web.iitd.ac.in/~hegde/acm/lecture/L04_roots_of_equations.pdf [20231226].
+ Mitsui T (1983) "A graphical technique for nonlinear algebraic equations", International Journal of Computer Mathematics, vo 13, no 3-4, pp 245-261, url https://doi.org/10.1080/00207168308803367.
+ Naseem A, Rehman M A, Qureshi S, Ide N A D (2023) "Graphical and Numerical Study of a Newly Developed Root-Finding Algorithm and Its Engineering Applications", IEEE Access, vol 11, pp 2375-2383, 2023, url https://doi.org/10.1109/ACCESS.2023.3234111.
+ Pfeiffer W (1979) "A graphical method for finding complex roots and its application to plasma physics problems",
Journal of Computational Physics, vol 33, no 3, pp 397-404, url https://doi.org/10.1016/0021-9991(79)90164-5.
+ Vaniya K (2020) "Graphical Method to Find Real Root of an Equation", Mafatlal Gagalbhai Science Institute, Gujarat University, url https://mgscience.ac.in/wp-content/uploads/2020/07/K-K-VANIYA-SEM-4.pdf [20231226].
