---
title: "functions for polynomial"
date: 2023-12-26T19:11:00+08:00
authors: ['Sparisoma Viridi']
tags: ['polynomial']
draft: false
math: true
url: "000w"
---
{{< toc >}}


## intro
+ When have to work with function representing polynomial, e.g. plot polynomial function, the function can be made by summing all terms manually (Imam, 2018).
+ To calculate $f(x)$ for single value of $x$ there is at least two ways with different time complexity, $O(n^2)$ by adding each term for $x^j$ with multiplication and summation loops, and $O(n)$ by using Horner's method (Taparia, 2022).
+ Python math library can be used to calculate $x^j$ and reduce previous approach with two loops into single loop (Bhojasia, 2022). 
+ User-defined class can be constructed to meet only what is needed, coefficients, string representation in LaTeX, and calculate the value for every $x$ using callabes (Klein, 2023).
+ By representing a polynomial in its coefficent NumPy functions can be used to calculate the value for every $x$, finding roots of the the polynomial, perform differential and integral to it (Kitchin, 2013).
+ There are also some series, e.g. power, Chebyshev, Hermite, Laguerre, Legendre, provided by NumPy (Developers, 2022).
+ Here only polynomial functions with constant and variable coefficients are discussed.


## constant coefficents
+ Suppose there is a polynomial in the form of
$$\tag{1}
f(x) = 1 + 2x + 3x^2 + 4x^3 + 5x^4.
$$
+ There are some approaches to calculate the value of $f(x)$.

### approach 1
+ Code 
  ```python
  def f(x):
    y0 = 1
    y1 = 2 * x
    y2 = 3 * x**2
    y3 = 4 * x**3
    y4 = 5 * x**4
    y = y0 + y1 + y2 + y3 + y4
    return y

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')

  ```
  url https://onecompiler.com/python/3zxwc33ef [20231230].
+ Output
  ```
  x	f(x)
  0	1
  1	15
  2	129
  3	547
  4	1593
  ```
+ This approach is straight forward and very clear, but it works only for one specific polynomial.

### approach 2
+ Code 
  ```python
  import math

  def f(x):
    y0 = 1 * math.pow(x, 0)
    y1 = 2 * math.pow(x, 1)
    y2 = 3 * math.pow(x, 2)
    y3 = 4 * math.pow(x, 3)
    y4 = 5 * math.pow(x, 4)
    y = y0 + y1 + y2 + y3 + y4
    return y

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')

  ```
  url https://onecompiler.com/python/3zxwcjjud [20231230].
+ Output
  ```
  x	f(x)
  0	1
  1	15
  2	129
  3	547
  4	1593
  ```
+ This approach is straight forward and also systematic since the power is also clear, but it works only for one specific polynomial.

### approach 3
+ Code 
  ```python
  import math

  def f(x):
    c = [1, 2, 3, 4, 5];
    y0 = c[0] * math.pow(x, 0)
    y1 = c[1] * math.pow(x, 1)
    y2 = c[2] * math.pow(x, 2)
    y3 = c[3] * math.pow(x, 3)
    y4 = c[4] * math.pow(x, 4)
    y = y0 + y1 + y2 + y3 + y4
    return y

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')

  ```
  url https://onecompiler.com/python/3zxwcwhvq [20231230].
+ Output
  ```
  x	f(x)
  0	1.0
  1	15.0
  2	129.0
  3	547.0
  4	1593.0
  ```
+ It is easier to modify for certain polynomial compared the previous code, since only one line `c = [c0, c1, c2, c3, c4]` that has to be changed.

### approach 4
+ Code 
  ```python
  import math

  def f(x):
    c = [1, 2, 3, 4, 5];
    y = 0
    for i in range(len(c)):
      yi = c[i] * math.pow(x, i)
      y = y + yi
    return y

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')

  ```
  url https://onecompiler.com/python/3zxwd8ve2 [20231230].
+ Output
  ```
  x	f(x)
  0	1.0
  1	15.0
  2	129.0
  3	547.0
  4	1593.0
  ```
+ It is the same the previous code, with more compact in calculating each term using `yi = c[i] * math.pow(x, i)`.


### approach 5
+ Code 
  ```python
  def f(x):
    c = [1, 2, 3, 4, 5];
    y = [(c[i] * x**i) for i in range(len(c))]
    return sum(y)

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')
  
  ```
  url https://onecompiler.com/python/3zxwe4z2n [20231230].
+ Output
  ```
  x	f(x)
  0	1
  1	15
  2	129
  3	547
  4	1593
  ```
+ Using Python feature known as list comprehension more lines can be reduced.

### approach 6
+ Code 
  ```python
  def f(x):
    c = [1, 2, 3, 4, 5];
    y = [cf * x**n for n, cf in enumerate(c)]
    return sum(y)

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')
  
  ```
  url https://onecompiler.com/python/3zxwe8ed8 [20231230].
+ Output
  ```
  x	f(x)
  0	1
  1	15
  2	129
  3	547
  4	1593
  ```
+ With this code, number of lines is still the same but the use of Python `enumerate` function make the code more clear.

### approach 7
+ Code 
  ```python
  def f(x):
    return sum([c * x**n for n, c in enumerate(coefs)])

  coefs = [1, 2, 3, 4, 5];

  print("x\tf(x)")
  for x in range(0, 5):
    print(x, f(x), sep='\t')
  
  ```
  url https://onecompiler.com/python/3zxwf2k3c [20231230].
+ Output
  ```
  x	f(x)
  0	1
  1	15
  2	129
  3	547
  4	1593
  ```
+ Now the function `f(x)` can be in one line and `coefs` list is put outside the function.
+ Notice that `coefs` can be modified before the function `f(x)` is called.


## variable coefficients
+ By modifying previous approach 7, following code can be obtained.
  ```python
  def f(x, coefs):
    return sum([c * x**n for n, c in enumerate(coefs)])


  c1 = [1, 2, 3, 4, 5]
  print("x\tf(x)")
  for x in range(0, 4):
    print(x, f(x, c1), sep='\t')

  print()

  c2 = [1, 1, 1, 1]
  print("x\tf(x)")
  for x in range(0, 3):
    print(x, f(x, c2), sep='\t')
  
  ```
+ Output
  ```
  x	f(x)
  0	1
  1	15
  2	129
  3	547

  x	f(x)
  0	1
  1	4
  2	15
  ```
+ Notice that there are two polynomials, each with coefficients `c1` and `c2`.
+ Call the function `f(x, c)` will calculate polynomial $f(x)$ with coefficients $c$.


## challenges
+ Modify last code to calculate $f(x) = -1 + x - x^2 + x^3$.
+ Calculate other polynomial $f(x) = 32x^7 - x^4 + 0.5$.


## refs
+ Bhojasia M (2022) "Python Program to Compute a Polynomial Equation", Sanfoundy, 30 May 2022, url https://www.sanfoundry.com/python-program-compute-polynomial-equation-coefficients-list/#google_vignette [20131227].
+ Developers N (2022) "Polynomials", NumPy, 2008-2022, url https://numpy.org/doc/stable/reference/routines.polynomials.html [20231227].
+ Imam A (2018) "Plotting polynomial function in Python", Medium, 27 Dec 2018, url https://aadhil-imam.medium.com/361230a1e400 [20131227].
+ Kitchin J (2013) "Polynomials in python", The Kitchin Research Group, Chemical Engineering at Carnegie Mellon University, 27 Feb 2013, url https://kitchingroup.cheme.cmu.edu/blog/2013/01/22/Polynomials-in-python/ [20231227].
+ Klein B (2023) "14. Polynomial Class", 7 Dec 2023, url https://python-course.eu/oop/polynomial-class.php [20231227].
+ Taparia A (2022) "Python program to Compute a Polynomial Equation", GeeksforGeeks, 21 Jun 2022, url https://www.geeksforgeeks.org/python-program-to-compute-a-polynomial-equation/ [20231227].
