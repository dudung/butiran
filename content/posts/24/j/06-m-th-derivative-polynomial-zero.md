+++
title = 'm-th derivative polynomial zero'
date = 2024-10-07T04:49:00+07:00
draft = false
math = true
tags = ['derivative', 'polynomial']
authors = ['viridi']
url = '24j06'
+++
$m$-th derivative of a polynomial function at $x=0$<!--more-->

Using limit n-th derivative of a polynomial function can be easily found [^colthrust_1998]. Some theorems, such as power rule, sum & different rule, and constant multiple rule, are required in finding the derivatives [^ai_2023]. Using derivative critical and inflection points of a polynomial function can be studied [^byrd_2011].

Here a formula for $m$-th derivatives at $x=0$ of a polynomial function and is given.

A polynomial function can be presented in a form of

$$\tag{1}
f(x) = \sum_{i=0}^n a_i x^i.
$$

First derivative of $f(x)$ is simply

$$\tag{2}
f\'(x) = \sum_{i=1}^n i \ a_i \ x^{i-1},
$$

second derivative is

$$\tag{3}
f\'\'(x) = \sum_{i=2}^n (i-1) i \ a_i \ x^{i-2},
$$

third derivative is

$$\tag{4}
f\'\'\'(x) = \sum_{i=3}^n (i-2)(i-1) i \ a_i \ x^{i-3},
$$

and fourth derivative is

$$\tag{5}
f\'^\nu(x) = \sum_{i=4}^n (i-3)(i-2)(i-1) i \ a_i \ x^{i-4},
$$

which can be later generalized until $m$-th derivative as

$$\tag{6}
f^m(x) = \sum_{i=m}^n (i-m+1) \cdots (i-3)(i-2)(i-1) i \ a_i \ x^{i-m}.
$$

For $x=0$ it can be obtained that

$$\tag{7}
f^m(0) = m! \ a_m,
$$

since the other terms are zero due to existence of $x^i$ with $i > 0$.


[^ai_2023]: AI, "Derivative of Polynomial", StudySmarter, 4 Apr 2023, url https://www.studysmarter.co.uk/explanations/engineering/engineering-mathematics/derivative-of-polynomial/ [20241007].
[^byrd_2011]: Donald Byrd, "Polynomials and their Derivatives: Polynomials, Critical Points, and Inflection Points", IUPUI Math Education, Indiana University Informatics, 30 Nov 2011, url https://homes.luddy.indiana.edu/donbyrd/Teach/Math/Polynomials+Derivatives.pdf [20241007].
[^colthrust_1998]: Thomas Wallace Colthurst, Craig B. Watkins, Joy Nicholson, Elizabeth Shapere, Carolyn Phillips, "Derivatives of Polynomials", Worl Web Math, Massachusetts Institute of Technology, 28 Aug 1998, url https://web.mit.edu/wwmath/calculus/differentiation/polynomials.html [20241007].
