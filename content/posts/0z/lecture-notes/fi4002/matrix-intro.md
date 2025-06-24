---
title: "matrix intro"
date: 2023-09-01T05:15:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0026"
---
Matrix is set of numbers arranged in rows and columns as to form a rectangular array, where the numbers are called elements or entries of the matrix ([Britannica, 2023](https://www.britannica.com/science/matrix-mathematics)). It can also considered as a compact but general way to represent any linear transforms, such as rotations, scallings, projections that map points / lines / planes to point / lines / planes ([user65203, 2018](https://math.stackexchange.com/a/2782730/645927)). The concept of matrix overlaps in the fields of mathematics and computer science, where elements represent data or mathematical equations, which are used as a way of providing quick approximations of more complicated calculations since they can offer accurate and quick calculations used to better control an operation regarding as a mechanical device or a computer ([Monitor, 2023](https://techmonitor.ai/what-is/what-is-a-matrix)). Here how to define matrix and apply some simple operations to them in Python are presented.


## define a matrix
A matrix with dimension $(2 \times 4)$ in the form of

$$\tag{1}
\mathbf{M} = \left[
\begin{matrix}
1 & 2 & 3 & 4\newline
5 & 6 & 7 & 8
\end{matrix}
\right]
$$

can be defined in Python as follow

```python
x = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]

print("1st way of displaying:")
print(x)
print()

print("2nd way of displaying:")
for i in x:
  print(i)
print()

print("3rd way of displaying:")
for i in x:
  for j in i:
    print(j, end="\t")
  print()
print()
```

which produces

```shell
1st way of displaying:
[[1, 2, 3, 4], [5, 6, 7, 8]]

2nd way of displaying:
[1, 2, 3, 4]
[5, 6, 7, 8]

3rd way of displaying:
1	2	3	4	
5	6	7	8

```

and the code is available at https://onecompiler.com/python/3zk8dnf33.


## access elements
In mathematics previous element of matrix $\mathbf{M}$ at row $i$ and column $j$ is defined as $m_{ij}$, which will give

$$
\begin{array}{rcl}
m_{11} & = & 1, \newline
& \dots & \newline
m_{13} & = & 3, \newline
& \dots & \newline
m_{22} & = & 6, \newline
& \dots & \newline
m_{24} & = & 8,
\end{array}
$$

where the indices $i = 1, 2$ and $j = 1, 2, 3, 4$. But it is a little bit different in the implementation, since some programming languages use 0-based indexing, while the others use 1-based indexing ([Shewale, 2019](https://medium.com/analytics-vidhya/indexing-of-arrays-0-vs-1-83c080cde374)). 

Python uses 0-based indexing, which means its array start at index 0. See following lines of code

```python
x = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]

i = 0; j = 0
print("element(", i, ",", j, ") is ", x[i][j], sep='')

i = 1; j = 0
print("element(", i, ",", j, ") is ", x[i][j], sep='')

i = 1; j = 0
print("element(", i, ",", j, ") is ", x[i][j], sep='')

i = 1; j = 4
print("element(", i, ",", j, ") is ", x[i][j], sep='')
```

and analyze the result

```shell
element(0,0) is 1
element(1,0) is 5
element(1,0) is 5

Traceback (most recent call last):
  File "main.py", line 16, in <module>
    print("element(", i, ",", j, ") is ", x[i][j], sep='')
IndexError: list index out of range
```

which introduces an error. Notice that the index 4 for column is out of range since 4th column should have index 3 instead of 4. Unfortunately, the Error message does not precisely indicate the error position but only the line, where there is an error.


## add and substract matrices
A matrix can be added to other one, as well one can be substracted from the other. To shorten the fomulation, since they are similar, both addition and subtraction will be explained at the same time. Suppose there is matrix $\mathbf{A}$, $\mathbf{B}$, and $\mathbf{C}$ in the relation of

$$\tag{2}
\mathbf{A} = \mathbf{B} \pm \mathbf{C},
$$

which can also written as their elements

$$\tag{3}
\left[
\begin{matrix}
a_{11} & \dots & a_{1n} \newline
a_{21} & \dots & a_{2n} \newline
a_{31} & \dots & a_{3n} \newline
\vdots & \ddots & \vdots \newline
a_{m1} & \dots & a_{mn}
\end{matrix}
\right] =
\left[
\begin{matrix}
b_{11} & \dots & b_{1n} \newline
b_{21} & \dots & b_{2n} \newline
b_{31} & \dots & b_{3n} \newline
\vdots & \ddots & \vdots \newline
b_{m1} & \dots & b_{mn}
\end{matrix}
\right] \pm
\left[
\begin{matrix}
c_{11} & \dots & c_{1n} \newline
c_{21} & \dots & c_{2n} \newline
c_{31} & \dots & c_{3n} \newline
\vdots & \ddots & \vdots \newline
c_{m1} & \dots & c_{mn}
\end{matrix}
\right]
$$

For each elements of the matrices, following relation

$$\tag{4}
a_{ij} = b_{ij} \pm c_{ij}
$$

can be obtained with $i = 1, .., m$ and $j = 1, .., n$.


## multiply scalar and matrix
Multiplication between a scalar and a matric is commutative, which means that

$$\tag{5}
b \mathbf{C} = \mathbf{C} b.
$$

Suppose the Multiplication result is stored in matrix $\mathbf{B}$, then

$$\tag{6}
\mathbf{A} = b \mathbf{C}
$$

and with their elements

$$\tag{7}
\left[
\begin{matrix}
a_{11} & a_{12} & \dots & a_{1n} \newline
a_{21} & a_{22} & \dots & a_{2n} \newline
a_{31} & a_{32}  & \dots & a_{3n} \newline
\vdots & \vdots & \ddots & \vdots \newline
a_{m1} & a_{m2}  & \dots & a_{mn}
\end{matrix}
\right] = b
\left[
\begin{matrix}
c_{11} & c_{12}  & \dots & c_{1n} \newline
c_{21} & c_{22}  & \dots & c_{2n} \newline
c_{31} & c_{32}  & \dots & c_{3n} \newline
\vdots & \vdots & \ddots & \vdots \newline
c_{m1} & c_{m2}  & \dots & c_{mn}
\end{matrix}
\right],
$$

which gives

$$\tag{5}
a_{ij} = b \ c_{ij}
$$

for each elements for the matrices.
