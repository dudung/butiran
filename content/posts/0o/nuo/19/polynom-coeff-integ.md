+++
title = 'polynom coeff integ'
date = 2024-03-25T16:37:00+07:00
draft = false
tags = ['fi4002']
math = true
url = '1989'
+++
Integration of polynomial: Coefficients operation
<!--more-->

+ []()


## polynomial as list
A polynomial in the form of

$$\tag{1}
y = \sum_{i=0}^n b_i t^i
$$

can be presented in a column matrix

$$\tag{2}
y \equiv [b_0 \ \ b_1 \ \ b_2 \ \ b_3 \ \ \dots \ \ b_{n-1} \ \ b_n]
$$

or simply a list in Python.


## differential
Let us define other polynomial

$$\tag{3}
x = \sum_{j=0}^m a_j t^j
$$

and use it to represent differential of (1)

$$\tag{4}
\frac{dy}{dt} = \sum_{i=1}^n ib_i t^{i-1}.
$$

Equate (3) and (4) will give

$$\tag{5}
a_j = (j+1) b_{j+1}
$$

since

$$\tag{6}
\begin{array}{rcl}
x & = & [b_1 \ \ 2 b_2 \ \ 3b_3 \ \ \dots \ \ (n-1) b_{n-1} \ \  \ \ n b_n \ ] \newline
& = & [a_0 \ \ \ a_1 \ \ \ a_2 \ \ \ \dots \ \ \ \ \ \ \ \ a_{n-2} \ \ \ \  \ \ \ \ \ a_{n-1}].
\end{array}
$$

Notice that in this case $m = n - 1$.


## integral
Again another polynomial

$$\tag{7}
z = \sum_{j=0}^m c_j t^j
$$

to represent integral of (1)

$$\tag{8}
\int y \ dt = c_0 + \sum_{i=0}^n \frac{1}{i+1} b_i t^{i+1}.
$$

Equate (7) and (8) will give


$$\tag{9}
c_j = \frac{1}{j-1} b_{j-1}
$$

since

$$\tag{10}
\begin{array}{rcl}
z & = & [c_0  \ \ b_0 \ \ \frac12 b_1 \ \ \frac13 b_2 \ \ \dots \ \ (n-1) b_{n-1} \ \  \ \ n b_n \ ] \newline
& = & [c_0 \ \ \ c_1 \ \ \ c_2 \ \ \ \ c_3 \ \ \ \dots \ \ \ \ \ \ \ \ c_n \ \ \ \  \ \ \ \ \ c_{n+1}].
\end{array}
$$