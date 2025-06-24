---
title: "m func der diff"
date: 2023-10-02T16:11:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0080"
---
{{< toc >}}


## differentiation and derivative
+ Differentiation is a technique which can be used for analyzing the way in which a functions change, or in particular, it measures how rapidly a function is changing at any point ([HELM, 2008](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/images/Intro_diffrntiatn.pdf)).
+ In mathematics, differentiation is a process of finding the derivative, or rate of change, of a function, which can be carried out by purely algegraic manipulations using three basic derivatives, four rules of operation, and a knowledge of how to manipulate functions ([Britannica, 2022](https://www.britannica.com/science/differentiation-mathematics)).
+ Differentiation is a method of computing a derivative which the rate of change of the output $y$ of the function with respect to the change of the variable $x$ ([Nanda, 2023](https://www.tutorialspoint.com/difference-between-differential-and-derivative)).
+ Differentiation is a process that gives the derivative ([TZakrevskiy, 2017](https://math.stackexchange.com/a/2519697/645927)).


## polynomial function
+ It can be represented as its coefficient, e.g.

  $$\tag{1}
  f(x) = \sum_{i = 0}^n a_i \ x^i \equiv [a_n \ \ a_{n-1} \ \ \dots \ \ a_i \ \ \dots \ \ a_1 \ \ a_0].
  $$

+ Its derivative $\displaystyle g(x) = \frac{df(x)}{dx}$ will be

  $$\tag{2}
  g(x) = \sum_{i = 0}^{n-1} b_i \ x^i \equiv [b_n \ \ b_{n-1} \ \ \dots \ \ b_i \ \ \dots \ \ b_1 \ \ b_0].
  $$

+ And the relation between two sets of coefficients $\mathbf{b}$ and $\mathbf{a}$, in term of each element, is

  $$\tag{3}
  b_i = (i+1) \ a_{i+1}, \ \ \ \, i = 1, \ 2, \ 3, \ \dots, \ (n-1).
  $$


## string, inline, function
+ A string representation of a polynomial, e.g.
  ```m
  fstr = 'x^2 + 10x + 1';
  ```
+ A function can be constructed from the string, e.g.
  ```m
  f = inline(fstr);
  ```
+ A value can be calculated from the function, e.g.
  ```m
  f2 = f(2);
  ```
+ Complete code is as follow.
  ```m
  fstr = 'x^2 + 10x + 1';
  f = inline(fstr);

  fprintf('x\tf(x)\n');
  for x = 0:10
    y = f(x);
    fprintf('%.1f\t%.1f\n', x, y);
  end
  ```
  with
  ```
  >> str_inline_func
  x	f(x)
  0.0	1.0
  1.0	12.0
  2.0	25.0
  3.0	40.0
  4.0	57.0
  5.0	76.0
  6.0	97.0
  7.0	120.0
  8.0	145.0
  9.0	172.0
  10.0	201.0
  ```
  as the result.


## coeffs, string, inline, function
+ Previous polynomial function $f(x) = x^2 + 10x + 1$ can definede through its coefficients, e.g.
  ```m
  b = [1 10 1];
  ```
+ String of it can be constructed using `poly2sym` function, e.g.
  ```m
  gstr = poly2sym(b);
  ```
+ The function is defined through `inline` function, e.g.
  ```m
  g = inline(gstr);
  ```
+ Value of the function is obtained simply by passing value as argument, e.g.
  ```m
  g_m1 = g(-1);
  ```
+ The complete code is as follow.
  ```m
  b = [1 10 1];
  gstr = poly2sym(b);
  g = inline(gstr);
  x = -1;
  g_m1 = g(x);
  fprintf('f(%.2f) = %.2f', x, g_m1);
  ```
  with
  ```
  >> coeffs_str_inline_func
  f(-1.00) = -8.00
  ```
  as the result.
+ It is confirmed that $f(-1) = (-1)^2 + 10(-1) + 1 = -8$.


## polyder and diff
+ Results are as follow.
  ```
  >> polyder_diff
  function
  a = [1, 1, 1, 1, 1]
  f(x) = x + x^2 + x^3 + x^4 + 1

  derivative using polyder
  b = [4, 3, 2, 1]
  g(x) = 2*x + 3*x^2 + 4*x^3 + 1

  derivative using diff
  h(x) = 2*x + 3*x^2 + 4*x^3 + 1
  ```
+ And the complete code is given below.
  ```m
  % polyder_diff

  clear;

  % define a polynomial function
  a = [1 1 1 1 1];
  fstr = poly2sym(a);
  f = inline(fstr);   % not necessary

  % calculate derivative 1st way
  b = polyder(a);
  gstr = poly2sym(b);
  g = inline(gstr);   % not necessary

  % calculate derivative 2nd way
  hstr = diff(fstr);
  h = inline(hstr);   % not necessary

  % display initial polynomial function
  fprintf('function\n')
  fprintf('a = [');
  fprintf('%g, ', a(1:end-1));
  fprintf('%g]\n', a(end));
  fprintf('f(x) = %s\n', fstr);
  fprintf('\n');

  % display derivative using 1st way
  fprintf('derivative using polyder\n')
  fprintf('b = [');
  fprintf('%g, ', b(1:end-1));
  fprintf('%g]\n', b(end));
  fprintf('g(x) = %s\n', gstr);
  fprintf('\n');

  % display derivative using 2nd way
  fprintf('derivative using diff\n')
  fprintf('h(x) = %s\n', hstr);
  fprintf('\n');
  ```
