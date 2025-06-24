---
title: "eigenvalue matrix 2x2"
date: 2023-11-03T10:41:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0135"
---
{{< toc >}}


## code
```python
import math
import numpy as np
from numpy.linalg import eig

# matrix
print("M = ")
M = np.array([
  [2, 9],
  [8, 1]
])
print(M)
print()

# eigenvalue, eigenvector
val, vec = eig(M)

# eigenvalues
print("Eigenvalue =", val)
print()

# eigenvectors
print("v =")
print(vec)
print()

v1 = vec[:, 0]
print("v1 =", v1)
print()

v2 = vec[:, 1]
print("v2 =", v2)
print()

# check relations
Mv1 = M @ v1
print("M v1 / val1 =", end=' ')
print(Mv1 / val[0])
print()

Mv2 = M @ v2
print("M v2 / val2 =", end=' ')
print(Mv2 / val[1])
print()
```
+ url https://onecompiler.com/python/3zschkwhd


## results
```shell
M = 
[[2 9]
 [8 1]]

Eigenvalue = [10. -7.]

v =
[[ 0.74740932 -0.70710678]
 [ 0.66436384  0.70710678]]

v1 = [0.74740932 0.66436384]

v2 = [-0.70710678  0.70710678]

M v1 / val1 = [0.74740932 0.66436384]

M v2 / val2 = [-0.70710678  0.70710678]
```


## theory
+ matrix
$$\tag{1}
\left[
\begin{matrix}
2 & 9 \newline
8 & 1
\end{matrix}
\right]
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right] =
\lambda
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right]
$$

$$\tag{2}
\left[
\begin{matrix}
2 & 9 \newline
8 & 1
\end{matrix}
\right]
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right] =
\lambda
\left[
\begin{matrix}
1 & 0 \newline
0 & 1
\end{matrix}
\right]
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right]
$$

$$\tag{3}
\left[
\begin{matrix}
2 & 9 \newline
8 & 1
\end{matrix}
\right]
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right] -
\lambda
\left[
\begin{matrix}
1 & 0 \newline
0 & 1
\end{matrix}
\right]
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right] = 0
$$

$$\tag{4}
\left[
\begin{matrix}
2 - \lambda & 9 \newline
8 & 1 - \lambda
\end{matrix}
\right]
\left[
\begin{matrix}
v_1 \newline
v_2
\end{matrix}
\right] = 0
$$

+ determinant $|M| = 0$

$$\tag{5}
\begin{array}{r}
(2 - \lambda)(1 - \lambda) - 9 \cdot 8 = 0 \newline
2\cdot1 + (- \lambda) \cdot 1 + 2 \cdot (-\lambda) +  (-\lambda) \cdot (-\lambda) - 72 = 0 \newline
2 - \lambda - 2\lambda + \lambda^2 - 72 = 0 \newline
\lambda^2 - 3\lambda - 70 = 0 \newline
(\lambda + 3)(\lambda - 10) = 0 \newline
\lambda_1 = -7, \ \ \lambda_2 = 10.
\end{array}
$$

+ First eigenvalue
$$\tag{6}
\begin{array}{rcl}
2 v_{1,1} + 9 v_{1,2} = -7 v_{1,1} & \Rightarrow & 9v_{1,1} = - 9v_{1,2} \newline
& \Rightarrow & v_{1,1} = -v_{1,2} \newline
& \Rightarrow & \displaystyle V_1 = \frac{1}{\sqrt{2}} \left[
\begin{matrix}
1 \newline
-1
\end{matrix}
\right] =
\left[
\begin{matrix}
0.70710678118 \newline
-0.70710678118
\end{matrix}
\right]
\end{array}
$$
$$\tag{7}
\begin{array}{rcl}
8 v_{2,1} + v_{2,2} = -7 v_{2,2} & \Rightarrow & 8 v_{2,1} = -8 v_{2,2} \newline
& \Rightarrow &  v_{2,1} = - v_{2,2} \newline
& \Rightarrow & \displaystyle V_1 = \frac{1}{\sqrt{2}} \left[
\begin{matrix}
1 \newline
-1
\end{matrix}
\right] =
\left[
\begin{matrix}
0.70710678118 \newline
-0.70710678118
\end{matrix}
\right]
\end{array}
$$

+ Second eigenvalue
$$\tag{8}
\begin{array}{rcl}
2 v_{1,1} + 9 v_{1,2} = 10 v_{1,1} & \Rightarrow & 8v_{1,1} = 9v_{1,2} \newline
& \Rightarrow & \displaystyle V_2 = \frac{1}{\sqrt{145}} \left[
\begin{matrix}
8 \newline
9
\end{matrix}
\right] =
\left[
\begin{matrix}
0.66436383883 \newline
0.74740931868
\end{matrix}
\right]
\end{array}
$$
$$\tag{9}
\begin{array}{rcl}
8 v_{2,1} + v_{2,2} = 10 v_{2,2} & \Rightarrow & 8 v_{2,1} = 9 v_{2,2} \newline
& \Rightarrow & \displaystyle V_2 = \frac{1}{\sqrt{145}} \left[
\begin{matrix}
8 \newline
9
\end{matrix}
\right] =
\left[
\begin{matrix}
0.66436383883 \newline
0.74740931868
\end{matrix}
\right]
\end{array}
$$


## comparion
Approach | Numerical | Theoretical
:- | :- | :-
$V_1$ | `[0.74740932, 0.66436384]` | `[0.70710678118, -0.70710678118]`
$V_2$ | `[-0.70710678, 0.70710678]` | `[0.66436383883, 0.74740931868]`
​

## dot product
```shell
the_1 @ the_2 = [[0.05872202]]
num_1 @ num_2 = [[0.05872202]]
```

```python
import numpy as np

the_1 = np.array([
  [0.74740932, 0.66436384]
])

the_2 = np.array([
  [0.70710678118],
  [-0.70710678118]
])

the_dot = the_1 @ the_2
print("the_1 @ the_2 =", the_dot)

num_1 = np.array([
  [-0.70710678, 0.70710678]
])

num_2 = np.array([
  [0.66436383883],
  [0.74740931868]
])

num_dot = num_1 @ num_2
print("num_1 @ num_2 =", num_dot)
```
+ url https://onecompiler.com/python/3zsd3ys6n
