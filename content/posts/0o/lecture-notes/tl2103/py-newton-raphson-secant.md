---
title: "py newton-raphson secant"
date: 2023-10-04T20:41:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0087"
---
{{< toc >}}


## direction
+ Mr. Satoru is stuck in a train station with a bunch of monsters (which he needs to kill) and humans (which he needs to save). He can expand a “sure-kill” domain that kills anyone within its perimeters, with him as the center, but he must consider the optimal amount of monsters killed and humans saved.
+ The monsters are distributed around him in a randomized manner, but can be represented with the equation
$$\tag{1}
M(x) = 20x - x^2.
$$
+ The humans distributed around him can also be represented with the equation
$$\tag{2}
H(x) = \sin 2x.
$$
+ Mr. Satoru’s judgement on the radius in which he would expand him domain can be represented with the following equation
$$\tag{3}
R(x) = M(x) + H(x).
$$
+ Optimize the radius of Mr. Satoru’s domain using the Newton-Raphson method, and Secant Method until the error $\varepsilon < 10^{-3}$! (Hint: To optimize a function, differentiate it first and find its root).


## derivative
+ differentiate Eqn (3), with the help of Eqns (1) and (2) wil give
$$\tag{4}
R\'(x) = M\'(x) + H\'(x) = 20 - 2x + 2\cos 2x. 
$$
+ Optimum radius is obtained when
$$\tag{5}
R\'(x_{\rm optimum}) = 0.
$$
+ Find root of $x\'(x)$ to get $x_{\rm optimum}$.


## iterative method
+ Newton-Raphson method
$$\tag{6}
x_{n+1} = x_n - \frac{f(x_n)}{f\'(x_n)}.
$$
+ Secant method
$$\tag{7}
x_{n+2} = x_{n+1} - \frac{(x_{n+1} - x_n) f(x_{n+1})}{f(x_{n+1}) - f(x_n)}.
$$
+ Newton-Raphson method requires one initial value $x_0$ and secant method requires two initial values $x_0$ and $x_1$.


## solution
+ Code
  ```python
  import math

  # test find optimum or y = (x - 2)(x - 6)
  # it will give x = 4
  # and ok
  TEST = False

  # break
  ITERMAX = 100

  # show iteration
  SHOWITER = False

  # Method
  METHOD = 'Newton-Raphson'

  def R(x):
    if TEST:
      y = (x - 2) * (x - 6)
    else:
      y = 20 * x - x**2 + math.sin(2 * x)
    return y

  def R_(x):
    if TEST:
      y = (x - 2) + (x - 6)
    else:
      y = 20 - 2*x + 2 * math.cos(2 * x)
    return y

  def R__(x):
    if TEST:
      y = 2
    else:
      y = -2 - 4 * math.sin(2 * x)
    return y

  # method 1
  print("Newton-Raphson method")
  if SHOWITER:
    print("i", "err", "R_(x)", "x", sep='\t')

  x0 = 19
  err = 1
  i = 1
  while err > 1E-3:
    # finding root for R_(x) not for R(x)
    x1 = x0 - R_(x0) / R__(x0)
    err = abs((x1 - x0))
    
    if SHOWITER:
      errs = f'{err:.2f}'
      R_xs = f'{R_(x1):.2f}'
      xs = f'{x1:.2f}'
      print(i, errs, R_xs, xs, sep='\t')
    
    x0 = x1
    i += 1
    
    if i > ITERMAX:
      break

  i -= 1
  x = x1

  print()
  print("Results")
  print("iteration =", i)
  print("err =", err)
  print("x =", x)
  print("R(x) =", R(x))
  print("R_(x) =", R_(x))
  print("R__(x) =", R__(x))
  print()

  # method 2
  print("secant method")
  if SHOWITER:
    print("i", "err", "R_(x)", "x", sep='\t')

  x0 = 1
  x1 = 50
  err = 1
  i = 1
  while err > 1E-3:
    # finding root for R_(x) not for R(x)
    x2 = x1 - R_(x1) / (R_(x1) - R_(x0)) * (x1 - x0)
    err = abs((x2 - x1))
    
    if SHOWITER:
      errs = f'{err:.2f}'
      R_xs = f'{R_(x2):.2f}'
      xs = f'{x2:.2f}'
      print(i, errs, R_xs, xs, sep='\t')
    
    x0 = x1
    x1 = x2
    i += 1

    if i > ITERMAX:
      break

  i -= 1
  x = x2

  print()
  print("Results")
  print("iteration =", i)
  print("err =", err)
  print("x =", x)
  print("R(x) =", R(x))
  print("R_(x) =", R_(x))
  print("R__(x) =", R__(x))
  ```
+ Result
  ```
  Newton-Raphson method

  Results
  iteration = 8
  err = 7.699729229315722e-06
  x = 10.139963731429795
  R(x) = 100.97056678487193
  R_(x) = -3.319355901254539e-11
  R__(x) = -5.960626523950763

  secant method

  Results
  iteration = 5
  err = 0.0002986050511903926
  x = 10.139963647548765
  R(x) = 100.97056678487193
  R_(x) = 4.9995029555161e-07
  R__(x) = -5.960626430028292
  ```
url https://onecompiler.com/python/3zpg9vgqa


## notes
+ It seem that Newton-Raphson method is very sensitive to initial value to obtain optimum of Eqn (3).
+ Furhter study is required to investigate the good function to optimize and not too sensitive to initial value for Newton-Raphson method and to initial values for secant method.
