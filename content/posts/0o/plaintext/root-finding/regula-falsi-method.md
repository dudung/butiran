---
title: "regula-falsi method"
date: 2024-01-09T05:14:00+08:00
authors: ['Sparisoma Viridi']
tags: ['root-finding']
draft: false
math: true
url: "0016"
---
{{< toc >}}


## intro
Regula-falsi method is one of the bracketing iterative method in finding roots of a non-linear equations, where the approximated root is found by using the straight lines and it is basto Bolzano's theorem for continues functions (Yoweto 2020). After choose two initial guesses a line is formed using the two-point form of the line and by setting $y = 0$ an iterative formula is obtained (Weisstein, 2023). It can be considered as one of the attempts to speed up the bisection method (Tyagi, 2022) but it might be less precise than bisection method (itskawal2000, 2021). This method has been generalized for finding both zeros and extrema of a function (Gomes & Morgado, 2013).


# refs
+ Gomes A, Morgado J (2013) "A Generalized Regula Falsi Method for Finding Zeros and Extrema of Real Functions", Mathematical Problem in Engineering, vol 2013, aid 394654, url https://doi.org/10.1155/2013/394654.
+ itskawal2000 (2021) "Difference Between Bisection Method and Regula Falsi Method", GeeksforGeeks, 16 Dec, url https://www.geeksforgeeks.org/difference-between-bisection-method-and-regula-falsi-method/ [20240109].
+ Tyagi B (2022) "What exactly is the Regula-Falsi Method or Method of false position in Mathematics??", Medium, 24 Sep, url https://tyagi-bhaumik.medium.com/1627fe5006f6 [20240109].
+ Yoweto I (2020) "Regula Falsi (False position) Method", SlideShare, 12 Sep, url https://www.slideshare.net/ISAACAMORNORTEYYOWET/regula-falsi-false-position-method [20240109].
Weisstein E W (2023) "Method of False Position" from MathWorld--A Wolfram Web Resource, 12 Dec, url https://mathworld.wolfram.com/MethodofFalsePosition.html [20240109].
