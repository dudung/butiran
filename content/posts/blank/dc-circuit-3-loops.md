+++
title = 'DC circuit 3 loops'
date = 2024-01-14T17:12:38+07:00
draft = false
math = true
+++
Analyze DC circuit with 3 loops.
<!--more-->


## simulator
One of the hosted version of [CircuitJS1](https://github.com/sharpie7/circuitjs1) is available on https://www.falstad.com/circuit/, where following code

```
$ 1 0.000005 0.7703437568215379 41 5 50 5e-11
v 80 176 80 80 0 0 40 6 0 0 0.5
r 80 80 240 80 0 1
r 240 80 240 176 0 1.5
r 240 176 80 176 0 2
r 240 176 400 176 0 2
v 400 176 400 80 0 0 40 12 0 0 0.5
r 80 176 80 288 0 16
v 400 288 80 288 0 0 40 16 0 0 0.5
r 240 80 400 80 0 1
w 400 288 400 176 0
```

will produce http://tinyurl.com/ytbrufmb with circuit diagram of


{{< svg "svg/circuit-20240114-1721.svg" >}}

where $\varepsilon_1 = 6 \ {\rm V}$, $\varepsilon_2 = 12 \ {\rm V}$, and $\varepsilon_3 = 16 \ {\rm V}$, respectively in CW direction from NW.


## elements
Let us name the elements as follow
```
    a--R1--b--R2--c 
↑   |      |      |   ↑
I1  E1     R3     E2  I2
    |      |      |
    d--R4--e--R5--f
    |             |   
    R6            |  I6
    |             |  ↓ 
    g------E3-----h
```
according to the position of each element in previous figure.

Element | $\varepsilon_1$ | $\varepsilon_2$ | $\varepsilon_3$ | $R_1$ | $R_2$ | $R_3$ | $R_4$ | $R_5$ | $R_6$
:- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-:
**Value** | 6 | 12 | 16 | 1 | 1 | 1.5 | 2 | 2 | 12


## equations from kcl
Current subscript is chosen to be the same as the resistor it is passing through.
+ Point $b$
  $$
  \tag{1} I_1 + I_2 = I_3.
  $$
+ Point $e$
  $$\tag{2}
  I_3 = I_4 + I_5.
  $$
+ Point $d$
  $$\tag{3}
  I_6 + I_4 = I_1.
  $$
+ Point $f$
  $$\tag{4}
  I_5 = I_2 + I_6.
  $$


## equation from kvl
Loop begins from negative terminal of a battery.
+ Loop $d-a-b-e-a$
  $$\tag{5}
  \varepsilon_1 - I_1 R_1 - I_3 R_3 - I_4 R_4 = 0.
  $$
+ Loop $f-c-b-e-f$
  $$\tag{6}
  \varepsilon_2 - I_2 R_2 - I_3 R_3 - I_5 R_5 = 0.
  $$
+ Loop $h-g-d-e-f-h$
  $$\tag{7}
  \varepsilon_3 - I_6 R_6 + I_4 R_4 - I_5 R_5 = 0.
  $$


## equations reduction
Since there are only three unknowns use Equations (1)-(4) in Equations (5)-(6) so that it contains only $I_1$, $I_2$, and $I_6$.
+ (1) & (3) &rightarrow; (5)
  $$\tag{8}
  \begin{array}{c}
  \varepsilon_1 - I_1 R_1 - (I_1 + I_2) R_3 - (I_1 - I_6) R_4 = 0 \newline
   I_1 R_1 + (I_1 + I_2) R_3 + (I_1 - I_6) R_4 = \varepsilon_1 \newline
   (R_1 + R_3 + R_4) I_1 + R_3 I_2 - R_4 I_6 = \varepsilon_1.
   \end{array}
  $$
+ (1) & (4) &rightarrow; (6)
  $$\tag{9}
  \begin{array}{c}
  \varepsilon_2 - I_2 R_2 - (I_1 + I_2) R_3 - (I_2 + I_6) R_5 = 0 \newline
  I_2 R_2 + (I_1 + I_2) R_3 + (I_2 + I_6) R_5 = \varepsilon_2 \newline
  R_3 I_1 + (R_2 + R_3 + R_5) I_2 + R_5 I_6 = \varepsilon_2.
  \end{array}
  $$
+ (3) & (4) &rightarrow; (7)
  $$\tag{10}
  \begin{array}{c}
  \varepsilon_3 - I_6 R_6 + (I_1 - I_6) R_4 - (I_2 + I_6) R_5 = 0 \newline
  I_6 R_6 - (I_1 - I_6) R_4 + (I_2 + I_6) R_5 = \varepsilon_3 \newline
  -R_4 I_1 + R_5 I_2 + (R_4 + R_5 + R_6) I_6 = \varepsilon_3.
  \end{array}
  $$


## new variables
To simplity a new and more compact variable is defined

$$\tag{11}
R_{abc} = R_a + R_b + R_c.
$$

Using this equation we can have from (8), (9), (10)

$$\tag{12}
\begin{array}{c}
R_{134} I_1 + R_3 I_2 - R_4 I_6 = \varepsilon_1,\newline
R_3 I_1 + R_{235} I_2 + R_5 I_6 = \varepsilon_2,\newline
-R_4 I_1 + R_5 I_2 + R_{456} I_6 = \varepsilon_3,
\end{array}
$$

which later can be presented in matrix form as follow

$$\tag{13}
\left[
\begin{array}{ccc}
R_{134} & R_3 & -R_4 \newline
R_3 & R_{235} & R_5 \newline
-R_4 & R_5 & R_{456}
\end{array}
\right]
\left[
\begin{array}{c}
I_1 \newline
I_2 \newline
I_6
\end{array}
\right] =
\left[
\begin{array}{c}
\varepsilon_1 \newline
\varepsilon_2 \newline
\varepsilon_6
\end{array}
\right].
$$

The last equation can be solved using invers matrix or iterative method for SLE.

## matrices
From previous table, Equation (13) can be written with its elements value

$$\tag{14}
\left[
\begin{array}{ccc}
4.5 & 1.5 & -2 \newline
1.5 & 4.5 & 2 \newline
-2 & 2 & 16
\end{array}
\right]
\left[
\begin{array}{c}
I_1 \newline
I_2 \newline
I_6
\end{array}
\right] =
\left[
\begin{array}{c}
6 \newline
12 \newline
16
\end{array}
\right].
$$

It would be clearer if every matrix in above equation is uniquely named.


## numpy
There is `solve()` function in NumPy to solve SLE.

```python
import numpy as np

R = np.array(
  [
    [  4.5,  1.5,  -2],
    [  1.5,  4.5,   2],
    [ -2,    2,    16]
  ]
)

E = np.array(
  [
     6,
    12,
    16
  ]
)

I = np.linalg.solve(R,E)

print(I)
```

that is available on https://onecompiler.com/python/3zze7accv and 
with the result is as follow

```
[1.1 1.9 0.9]
```

which shows that $I_1 = 1.1 \ {\rm A}$, $I_2 = 1.9 \ {\rm A}$, and $I_6 = 0.9 \ {\rm A}$.


## challenges
+ Solve Equations (12) using substitution or elimination method to find $I_1$, $I_2$, and $I_3$. Then find formula of the current as function of batteries and resistors.
+ Execute the code on https://onecompiler.com/python/3zze7accv and explain what the matrices $\mathbf{R}$, $\mathbf{E}$, and $\mathbf{I}$ are.
+ Relate the $\mathbf{R}$, $\mathbf{E}$, and $\mathbf{I}$ matrices with matrices in Equation (14).
+ Compare the result from given code with the simulator on http://tinyurl.com/ytbrufmb.
+ Calculate the values of $I_1$, $I_2$, and $I_3$ if $\varepsilon_1 = 12 \ {\rm V}$, $\varepsilon_2 = 24 \ {\rm V}$, and $\varepsilon_3 = 32 \ {\rm V}$,


## refs
+ [Kirchhoffs circuit laws](https://www.electronics-tutorials.ws/dccircuits/dcp_4.html)
+ [Iterative methods](http://www2.stat.duke.edu/~sayan/863/lec/iterative.pdf)
+ [Solving Systems of Linear Equations with Python's Numpy](https://stackabuse.com/solving-systems-of-linear-equations-with-pythons-numpy/)
