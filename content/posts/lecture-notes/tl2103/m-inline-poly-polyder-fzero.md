---
title: "m inline poly polyder fzero"
date: 2023-10-02T04:07:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0078"
---
{{< toc >}}


## inline
+ Purpose: Define a function in the same `.m` file.
+ Note: Filename should not be `inline.m`, which could triggered error message.
+ Example is `func_inline.m` as follow.
  ```m
  f = inline('x^2 + 2.34');
  fprintf("x\tf(x)\n")
  for x = 0:4
   fprintf('%.0f\t%.2f\n', x, f(x)) 
  end
  ```
+ Result
  ```
  >> func_inline
  x	f(x)
  0	2.34
  1	3.34
  2	6.34
  3	11.34
  4	18.34
  ```


## fzero
+ Purpose: Find root of a function with initial guess.
+ Example is as follow.
  ```m
  f = inline('x^2 + 6.25');
  x = fzero(f, 4);
  fprintf('Equation \n');
  disp(f)
  fprintf('root = %0.2f', x)
  ```
+ Result
  ```
  Equation 

       Inline function:
       f(x) = x^2 - 6.25

  root = 2.50
  ```

## polynomial
+ A polynomial of $n$ degree is defined as
  $$\tag{1}
  p_n(x) = \sum_{i = 0}^n a_i x^i.
  $$
+ Its coefficients can be stored in a vector or array as follow
  $$\tag{2}
  a = [a_n \ \ a_{n-1} \ \ \dots \ \ a_i \ \ \dots \ \ a_1 \ \ a_0 ].
  $$
+ Its symbolic representaion can be obtained from its coefficients using `poly2sym` function as follow.
  ```m
  % test_poly2sym

  % define coefficients of a polynomial
  a = [1 -1 2 -2 3];

  % obtain its symbolic representation
  ps = poly2sym(a);

  % display it
  display(ps);
  ```
  whose result is
  ```
  >> test_poly2sym
   
  ps =
   
  x^4 - x^3 + 2*x^2 - 2*x + 3
  ```
  or $x^4 - x^3 + 2x^2 - 2x + 3$ that is related to $c = [1 \ \ -1 \ \ 2 \ \ -2 \ \ 3]$.


## derivative of $p_n(x)$
+ From Eqn (1) it can be obtained that its derivative with respect to $x$ is
  $$\tag{3}
  p_n \'(x) = \sum_{i = 1}^n i \ a_i \ x^{i-1}.
  $$
+ If $q_m(x) = p \'_n(x)$ then
  
  $$\tag{4}
  q_ m(x) = \sum _{i = 0}^m b _i x^i,
  $$
  
  with
  
  $$\tag{5}
  b = [b_m \ \ b_{m-1} \ \ \dots \ \ b_i \ \ \dots \ \ b_1 \ \ b_0 ].
  $$
+ And the relation of elements between $b$ and $a$ is
  
  $$\tag{6}
  b_i = (i+1) a_{i+1}, \ \ \ \ i = 1, \ 2, \ \dots, \ m,
  $$
  
  with $m = n - 1$.
  
## polyder
+ It derives the coefficients of a polynomial.
+ Suppose there is a polynomial
  $$
  p_4(x) = x^4 + 2 x^3 - 4 x^2 + x - 5
  $$
  or $a = [1 \ \ 2 \ \ -4 \ \ 1 \ \ -5]$.
+ Then its derivative with respect to $x$ is
  $$
  q_3(x) = 4 x^3 + 6 x^2 - 8 x + 1
  $$
  or $b = [4 \ \ 6 \ \ -8 \ \ 1]$.
+ Notice the following lines of code.
  ```m
  % test_polyder

  % define coefficients of a polynomial
  a = [1 2 -4 1 -5];

  % derive it
  b = polyder(a);

  % display result
  fprintf('p(x) = [');
  fprintf('%g, ', a(1:end-1));
  fprintf('%g]\n', a(end));

  fprintf('q(x) = [');
  fprintf('%g, ', b(1:end-1));
  fprintf('%g]\n', b(end));
  ```
  and the result
  ```
  >> test_polyder
  p(x) = [1, 2, -4, 1, -5]
  q(x) = [4, 6, -8, 1]
  ```
  which are previous
  - $p_4(x) = x^4 + 2 x^3 - 4 x^2 + x - 5$, and
  - $q_3(x) = 4 x^3 + 6 x^2 - 8 x + 1$.


## wrap it all up
+ Result
  ```
  p(x) = x^4 + 2*x^3 - 4*x^2 + x - 5
   
  q(x) = 4*x^3 + 6*x^2 - 8*x + 1
  ```
+ Code
  ```m
  % display symbolic
  fprintf('p(x) = ')
  disp(poly2sym(a));
  fprintf('q(x) = ')
  disp(poly2sym(b));
  ```
  where `a` and `b` are as previously defined.
