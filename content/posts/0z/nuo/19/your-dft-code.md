+++
title = 'your dft code'
date = 2024-03-26T09:42:00+07:00
draft = false
tags = ['fi6004']
math = true
url = '1990'
+++
Discrete Fourier Transform: Create your onw code
<!--more-->

+ [create_your_dft_code.pdf](https://osf.io/z9f35)


## outline
+ intro 3
+ Discrete Fourier Transform 8
+ Implementation 12
+ Closing 22


## equations
$\ \ \ \ \ \ \ \ $

$$\tag{1}
X(\omega) = \int_{-\infty}^{+\infty} x(t) e^{-j \omega t} \ dt
$$

$\ \ \ \ \ \ \ \ $

$$\tag{2}
X(\omega) \approx \sum_{n=0}^{\infty} x(t_n) e^{-j \omega t_n} \ \Delta t
$$

$\ \ \ \ \ \ \ \ $

$$\tag{0}
e^{j \omega t} = \cos \omega t + j \sin \omega t
$$

$\ \ \ \ \ \ \ \ $

$$\tag{4}
x(t) = 3 \sin 20\pi t + 4 \cos 5\pi t + 1
$$


## matrix
Is it possible to formulate all in matrix form?

$$\tag{5}
y_k^{\rm Re} = \sum_{n=0}^{N-1} x_n \cos \left( \frac{2\pi kn}{N} \right)
$$

$$\tag{6}
y_k^{\rm Im} = -\sum_{n=0}^{N-1} x_n \sin \left( \frac{2\pi kn}{N} \right)
$$

$$
\left[
\begin{array}{cccccc}
1 & 1 & 1 & \dots & 1 & 1 \newline \newline
1 & \cos \left( \frac{2\pi}{N} \cdot 1 \right) & \cos \left( \frac{2\pi}{N} \cdot 2 \right) & \dots & \cos \left( \frac{2\pi}{N} \cdot (N-2) \right) & \cos \left( \frac{2\pi}{N} \cdot (N-1) \right) \newline \newline
1 & \cos \left( \frac{2\pi k}{N} \cdot 1 \right) & \cos \left( \frac{2\pi k}{N} \cdot 2 \right) & \dots & \cos \left( \frac{2\pi k}{N} \cdot (N-2) \right) & \cos \left( \frac{2\pi k}{N} \cdot (N-1) \right) \newline \newline
\vdots & \vdots &\vdots & \ddots & \vdots & \vdots \newline \newline
1 & \cos \left( \frac{2\pi(N-2)}{N} \cdot 1 \right) & \cos \left( \frac{2\pi(N-2)}{N} \cdot 2 \right) & \dots & \cos \left( \frac{2\pi (N-2)}{N} \cdot (N-2) \right) & \cos \left( \frac{2\pi (N-2)}{N} \cdot (N-1) \right) \newline \newline
1 & \cos \left( \frac{2\pi(N-1)}{N} \cdot 1 \right) & \cos \left( \frac{2\pi(N-1)}{N} \cdot 2 \right) & \dots & \cos \left( \frac{2\pi(N-1)}{N} \cdot (N-2) \right) & \cos \left( \frac{2\pi(N-1)}{N} \cdot (N-1) \right)
\end{array}
\right]
\left[
\begin{array}{c}
x_0 \newline \newline
x_1 \newline \newline
x_2 \newline \newline
\vdots \newline \newline
x_{N-2} \newline \newline
x_{N-1}
\end{array}
\right] =
\left[
\begin{array}{c}
y_0^{\rm Re} \newline \newline
y_1^{\rm Re} \newline \newline
y_2^{\rm Re} \newline \newline
\vdots \newline \newline
y_{N-2}^{\rm Re} \newline \newline
y_{N-1}^{\rm Re}
\end{array}
\right]
$$

$$
\left[
\begin{array}{cccccc}
0 & 0 & 0 & \dots & 0 & 0 \newline \newline
0 & \sin \left( \frac{2\pi}{N} \cdot 1 \right) & \sin \left( \frac{2\pi}{N} \cdot 2 \right) & \dots & \sin \left( \frac{2\pi}{N} \cdot (N-2) \right) & \sin \left( \frac{2\pi}{N} \cdot (N-1) \right) \newline \newline
0 & \sin \left( \frac{2\pi k}{N} \cdot 1 \right) & \sin \left( \frac{2\pi k}{N} \cdot 2 \right) & \dots & \sin \left( \frac{2\pi k}{N} \cdot (N-2) \right) & \sin \left( \frac{2\pi k}{N} \cdot (N-1) \right) \newline \newline
\vdots & \vdots &\vdots & \ddots & \vdots & \vdots \newline \newline
0 & \sin \left( \frac{2\pi(N-2)}{N} \cdot 1 \right) & \sin \left( \frac{2\pi(N-2)}{N} \cdot 2 \right) & \dots & \sin \left( \frac{2\pi (N-2)}{N} \cdot (N-2) \right) & \sin \left( \frac{2\pi (N-2)}{N} \cdot (N-1) \right) \newline \newline
0 & \sin \left( \frac{2\pi(N-1)}{N} \cdot 1 \right) & \sin \left( \frac{2\pi(N-1)}{N} \cdot 2 \right) & \dots & \sin \left( \frac{2\pi(N-1)}{N} \cdot (N-2) \right) & \sin \left( \frac{2\pi(N-1)}{N} \cdot (N-1) \right)
\end{array}
\right]
\left[
\begin{array}{c}
x_0 \newline \newline
x_1 \newline \newline
x_2 \newline \newline
\vdots \newline \newline
x_{N-2} \newline \newline
x_{N-1}
\end{array}
\right] =
\left[
\begin{array}{c}
y_0^{\rm Re} \newline \newline
y_1^{\rm Re} \newline \newline
y_2^{\rm Re} \newline \newline
\vdots \newline \newline
y_{N-2}^{\rm Re} \newline \newline
y_{N-1}^{\rm Re}
\end{array}
\right]
$$


## refs
+ Erik Cheever, “Introduction to the Fourier Transform”, Linear Physical Systems Analysis, Swarthmore College, 2022, url https://lpsa.swarthmore.edu/Fourier/Xforms/FXformIntro.html [20240326].
+ Omar Alkousa, “Learn Discrete Fourier Transform (DFT)”, Towards Data Science – Medium, 8 Feb 2023, url https://medium.com/p /9f7a2df4bfe9 [20240326].
