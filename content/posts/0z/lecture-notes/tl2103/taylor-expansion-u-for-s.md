---
title: "taylor expansion u(x) for s(u, x, E)"
date: 2023-09-19T19:34:00+07:00
authors: ['Sparisoma Viridi']
tags: ['tl2103']
draft: false
math: true
url: "0054"
---
{{< toc >}}


## place
Estuary is coastal water body where streams from rivers mixes with streams from the ocean.


## concentration
Concentration of single point source conservative pollutant in an estuary is as follow

$$\tag{1}
s = s_0 \exp \left( \frac{xu}{E} \right)
$$

for $x \le 0$,  where $s$ is final centration $\rm (mg/L)$, $u$ is velocity $\rm (miles/day)$,  $x$ is distance from point source $\rm (miles)$. There are coefficients for initial concentration $s_0 = 350 \ {\rm mg/L}$ and tide wave dispersion coefficients $E = 5 \ {\rm miles^2/day}$.


## velocity
In a certain estuary the velocity can be formulated as

$$\tag{2}
u(x) = | \sin 4.8x|.
$$


## task
+ Use Taylor series to approximate the value of velociy for given distance $u(x)$ until 5% error result.
+ Use the aproximation value of velocity to calculate the concentration pollutant in particular distance in the estuary $s(x)$


## output
+ If $x > 0$, repeat ask for $x$
+ $x = -1 \ {\rm miles}$
+ $N = 15$
+ $u = 0.98452 \ {\rm miles/day}$
+ $\epsilon = 1.1692 \ \\%$
+ $s = 287.4445 \ {\rm mg/L}$


## taylor series
In general a function $f(x)$ can be approximated to $N+1$ terms

$$\tag{3}
f(x) \approx \sum_{n=0}^N \frac{(x - x_0)^n}{n!} \left. \frac{d^n f(x)}{dx^n} \right|_{x=x_0} = \sum _{n=0}^N g_n(x, x_0), 
$$

which is known as Taylor series. And for $f(x)$ in Eqn (2) it would be similar to

$$\tag{4}
f(x) = \sin ax.
$$

### $n = 0$
$$\tag{5.0}
g_0(x, x_0) = \sin a x_0.
$$

### $n = 1$
$$\tag{5.1}
g_1(x, x_0) = (x - x_0) \cdot a \cos a x_0.
$$

### $n = 2$
$$\tag{5.2}
g_2(x, x_0) = \tfrac12(x - x_0)^2 \cdot -a^2 \sin a x_0.
$$

### $n = 3$
$$\tag{5.3}
g_3(x, x_0) = \tfrac16 (x - x_0)^3 \cdot -a^3 \cos a x_0.
$$


## general form
Eqns (5.0) - (5.3) can be represented in

$$
g_n(x, x_0) = (-1)^{\lfloor \frac12 n \rfloor} \frac{a^n (x - x_0)^n}{n!}
\left\\{
\begin{array}{rc}
\sin a x_0, & n = 0, 2, 4, \dots \newline
\cos a x_0, & n = 1, 3, 5, \dots
\end{array}
\right.
$$
which holds for all $n$.


## python
### code
```python
import math

def concentration(x, u):
  s0 = 350
  E = 5
  return s0 * math.exp(x * u / E)

def velocity(x, a):
  return abs(math.sin(a * x))

def taylorterm(n, x, x0, a):
  sign = (-1)**math.floor(0.5 * n)
  an = a**n
  dxn = (x - x0)**n
  facn = math.factorial(n)
  if n % 2 == 0:
    fx = math.sin(a * x0)
  else:
    fx = math.cos(a * x0)
  
  h = (sign * an * dxn / facn) * fx
  return h

a = 4.8
x = -1
x0 = 0

print("n  utaylor error s")

N = 20
velotaylor = 0
for n in range(N):
  u = velocity(x, a)
  velotaylor += taylorterm(n, x, x0, a)
  err = abs(u - abs(velotaylor))
  
  conc = concentration(x, velotaylor)
  
  str1 = f'{n:02d}'
  str2 = f'{velotaylor:0.5f}'
  str3 = f'{(err*100):0.4f}%'
  str4 = f'{conc:0.4f}'
  print(str1, str2, str3, str4)

```
Code is available https://onecompiler.com/python/3zn4x6dnc.

### result
```bash
n  utaylor error s
00 0.00000 99.6165% 350.0000
01 -4.80000 380.3835% 914.0938
02 -4.80000 380.3835% 914.0938
03 13.63200 1263.5835% 22.9091
04 13.63200 1263.5835% 22.9091
05 -7.60166 660.5499% 1600.8115
06 -7.60166 660.5499% 1600.8115
07 4.04652 305.0353% 155.8088
08 4.04652 305.0353% 155.8088
09 0.31910 67.7065% 328.3609
10 0.31910 67.7065% 328.3609
11 1.09982 10.3659% 280.8915
12 1.09982 10.3659% 280.8915
13 0.98452 1.1648% 287.4445
14 0.98452 1.1648% 287.4445
15 0.99717 0.1003% 286.7181
16 0.99717 0.1003% 286.7181
17 0.99610 0.0068% 286.7796
18 0.99610 0.0068% 286.7796
19 0.99617 0.0004% 286.7754
```

## matlab
### code
```matlab
% input
for i =1:inf
    x = input("x = ");
    if x <= 0
        break
    else
        disp("x should <= 0");
    end
end


% parameters
a = 4.8;
x0 = 0;
emin = 0.05;

% iteration
vtay = 0;
err = 1;
N = 20;
for n = 0:N
    vtay = vtay + tayt(n, x, x0, a);
    vact = velo(x, a);
    err = abs(vact - abs(vtay));
    if err < emin
        break
    end
end

% concentration of pollutan
s = conc(x, vtay)

% results
fprintf('n = %d\n', n);
fprintf('err = %.4f\n', err * 100);
fprintf('vtay = %.5f\n', vtay);
fprintf('s = %.4f\n', s);

% n-th term of taylor series
function t = tayt(n, x, x0, a)
    sign = (-1)^floor(0.5 * n);
    an = a^n;
    dxn = (x - x0)^n;
    facn = factorial(n);
    
    if mod(n, 2) == 0
        fx = sin(a * x0);
    else
        fx = cos(a * x0);
    end

    t = (sign * an * dxn / facn) * fx;
end

% actual velocity
function v = velo(x, a)
    v = abs(sin(a * x));
end

% concentration of pollutant
function c = conc(x, u)
    s0 = 350;
    E = 5;
    c = s0 * exp(x * u / E);
end
```

### result
```bash
x = 
1
x should <= 0
x = 
3
x should <= 0
x = 
-1

s =

  287.4445

n = 13
err = 1.1648
vtay = 0.98452
s = 287.4445
```


## comparison
Parameters | Assignment | Python | Matlab
:- | :- | :- | :-
$N$ | 15 | 14 | 13
$u$ | 0.98452 | 0.98452 | 0.98452
$\epsilon$ | 1.1692  |  1.1648  |  1.1648
$s$ | 287.4445 | 287.4445 | 287.4445

Values for $N$ and $\epsilon$ are not the same for Assignment and Program.
