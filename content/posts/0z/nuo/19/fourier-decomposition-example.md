+++
title = 'fourier decomposition example'
date = 2024-03-10T12:22:00+07:00
draft = false
tags = ['fi6004']
math = true
url = '1978'
+++
Fourier decomposition example: Three terms -- constant, cosine, sine.
<!--more-->

+ [fourier_decomposition_example.pdf](https://osf.io/ukcmw)
  - Intro 3
  - For f(x) 6
  - For f(t) 10
  - An example (f1 = 1 Hz) 14
  - Same example with f1 = 2 Hz 22
  - General f1 value 30
  - Discussion and assignment 34


## integral identities $x$
$$\tag{1}
\int_0^L \sin \left( m \frac{2\pi}{L} x \right) \sin \left( n \frac{2\pi}{L} x \right) \ dx = \left\\{
\begin{array}{rcl}
0, & m \ne n, \newline
\tfrac12 L, & m = n.
\end{array}
\right.
$$

&nbsp;

$$\tag{2}
\int_0^L \cos \left( m \frac{2\pi}{L} x \right) \cos \left( n \frac{2\pi}{L} x \right) \ dx = \left\\{
\begin{array}{rcl}
0, & m \ne n, \newline
\tfrac12 L, & m = n.
\end{array}
\right.
$$

&nbsp;

$$\tag{3}
\int_0^L \cos \left( m \frac{2\pi}{L} x \right) \sin \left( n \frac{2\pi}{L} x \right) \ dt = 0.
$$

&nbsp;

$$\tag{3b}
\int_0^L \cos \left( m \frac{2\pi}{L} x \right) \ dt = 0.
$$

&nbsp;

$$\tag{3c}
\int_0^L \sin \left( n \frac{2\pi}{L} x \right) \ dt = 0.
$$


## coefficients $x$
$$\tag{4}
f(x) = \sum_{m=1}^\infty a_m \cos \left[ m \left( \frac{2\pi}{L} \right) x \right] + \sum_{m=1}^\infty b_m \sin \left[ m \left( \frac{2\pi}{L} \right) x \right] + c_0
$$

$$\tag{5}
a_m = \frac{2}{L}\int_0^L f(x) \ \cos \left[ m \left( \frac{2\pi}{L} \right) x \right] \ dx
$$

$$\tag{6}
b_m = \frac{2}{L}\int_0^L f(x) \ \sin \left[ m \left( \frac{2\pi}{L} \right) x \right] \ dx
$$

$$\tag{7}
c_0 = \frac{1}{L} \int_0^L f(x) \ dx.
$$

$$\tag{8}
k_m = m \frac{2\pi}{L}, \ \ \ \ m = 1, 2, 3, ..
$$


## integral identities $t$
$$\tag{9}
\int_0^T \sin \left( m \frac{2\pi}{T} t \right) \sin \left( n \frac{2\pi}{T} t \right) \ dt = \left\\{
\begin{array}{rcl}
0, & m \ne n, \newline
\tfrac12 T, & m = n.
\end{array}
\right.
$$

&nbsp;

$$\tag{10}
\int_0^T \cos \left( m \frac{2\pi}{T} t \right) \cos \left( n \frac{2\pi}{T} t \right) \ dt = \left\\{
\begin{array}{rcl}
0, & m \ne n, \newline
\tfrac12 T, & m = n.
\end{array}
\right.
$$

&nbsp;

$$\tag{11}
\int_0^T \cos \left( m \frac{2\pi}{T} t \right) \sin \left( n \frac{2\pi}{T} t \right) \ dt = 0.
$$

&nbsp;

$$\tag{11b}
\int_0^T \cos \left( m \frac{2\pi}{T} t \right) \ dt = 0.
$$

&nbsp;

$$\tag{11c}
\int_0^T \sin \left( n \frac{2\pi}{T} t \right) \ dt = 0.
$$


## coefficients $t$
$$\tag{12}
f(t) = \sum_{m=1}^\infty a_m \cos \left[ m \left( \frac{2\pi}{T} \right) t \right] + \sum_{m=1}^\infty b_m \sin \left[ m \left( \frac{2\pi}{T} \right) t \right] + c_0
$$

$$\tag{13}
a_m = \frac{2}{T}\int_0^T f(t) \ \cos \left[ m \left( \frac{2\pi}{T} \right) t \right] \ dt
$$

$$\tag{14}
b_m = \frac{2}{T}\int_0^T f(t) \ \sin \left[ m \left( \frac{2\pi}{T} \right) t \right] \ dt
$$

$$\tag{15}
c_0 = \frac{1}{T} \int_0^T f(t) \ dt.
$$

$$\tag{16}
\omega_m = m \frac{2\pi}{T}, \ \ \ \ m = 1, 2, 3, ..
$$


## example
$$\tag{17}
f(t) = 2 + 5 \cos 20 \pi t + 3 \sin 8 \pi t.
$$

&nbsp;

$$\tag{18}
\begin{array}{rcl}
f(t) & = & \displaystyle 2 + 5 \cos \left( \frac{2\pi}{0.1} t \right) + 3 \sin \left( \frac{2\pi}{0.25} t \right)
\newline \newline
& = & \displaystyle 2 + 5 \cos \left( 10 \frac{2\pi}{1} t \right) + 3 \sin \left( 4 \frac{2\pi}{1} t \right)
\end{array}
$$


## consine terms coefficients
+ Use Eqns (13), (10), (11) on (18).

$$\tag{19}
\begin{array}{rcl}
a_m & = & \displaystyle \frac{2}{T}\int_0^T 2 \ \cos \left[ m \left( \frac{2\pi}{T} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 5 \cos \left( 10 \frac{2\pi}{1} t \right) \ \cos \left[ m \left( \frac{2\pi}{1} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 3 \sin \left( 4 \frac{2\pi}{1} t \right) \ \cos \left[ m \left( \frac{2\pi}{1} \right) t \right] \ dt
\newline \newline
& = & \displaystyle 0 + \frac{2}{T} \tfrac{1}{2} T 5 \delta_{10,m} + 0
\ \ = \ \ 5 \delta_{10,m}.
\end{array}
$$

$$\tag{19b}
\begin{array}{rl}
a_m = 0, & 0 < m < 10, \newline
a_{10} = 5, & \newline
a_m = 0, & 10 < m.
\end{array}
$$


## sine terms coefficients
+ Use Eqn (14), (9), (11) on (18).

$$\tag{20}
\begin{array}{rcl}
b_m & = & \displaystyle \frac{2}{T}\int_0^T 2 \ \sin \left[ m \left( \frac{2\pi}{T} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 5 \cos \left( 10 \frac{2\pi}{1} t \right) \ \sin \left[ m \left( \frac{2\pi}{1} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 3 \sin \left( 4 \frac{2\pi}{1} t \right) \ \sin \left[ m \left( \frac{2\pi}{1} \right) t \right] \ dt
\newline \newline
& = & \displaystyle 0 + 0 + \frac{2}{T} \tfrac{1}{2} T 3 \delta_{4,m}
\ \ = \ \ 3 \delta_{4,m}.
\end{array}
$$

$$\tag{20b}
\begin{array}{rl}
b_m = 0, & 0 < m < 4, \newline
b_{4} = 3, & \newline
b_m = 0, & 4 < m.
\end{array}
$$


## constant term
+ Use Eqn (15), (11b), (11c) on (18).

$$\tag{21}
\begin{array}{rcl}
c_0 & = & \displaystyle \frac{1}{T}\int_0^T 2 \ dt
\newline \newline
& + & \displaystyle \frac{1}{T}\int_0^T 5 \cos \left( 10 \frac{2\pi}{1} t \right) \ dt
\newline \newline
& + & \displaystyle \frac{1}{T}\int_0^T 3 \sin \left( 4 \frac{2\pi}{1} t \right) \ dt
\newline \newline
& = & \displaystyle 2 + 0 + 0 \ \ = \ \ 2.
\end{array}
$$


## function $f(t)$
$$\tag{12}
f(t) = \sum_{m=1}^\infty a_m \cos \left[ m \left( \frac{2\pi}{1} \right) t \right] + \sum_{m=1}^\infty b_m \sin \left[ m \left( \frac{2\pi}{1} \right) t \right] + c_0
$$

$$\tag{22}
\begin{array}{rcl}
f(t) & = & \displaystyle a_{10} \cos \left[ 10 \left( \frac{2\pi}{1} \right) t \right] +  b_4 \sin \left[ 4 \left( \frac{2\pi}{1} \right) t \right] + c_0
\newline \newline
& = & \displaystyle 5 \cos \left[ 10 \left( \frac{2\pi}{1} \right) t \right] + 3 \sin \left[ 4 \left( \frac{2\pi}{1} \right) t \right] + 2.
\end{array}
$$

&nbsp;

$$\tag{17}
f(t) = 2 + 5 \cos 20 \pi t + 3 \sin 8 \pi t.
$$


## $f_1 = 2 \ \rm Hz$
$$\tag{17}
f(t) = 2 + 5 \cos 20 \pi t + 3 \sin 8 \pi t.
$$

&nbsp;

$$\tag{23}
\begin{array}{rcl}
f(t) & = & \displaystyle 2 + 5 \cos \left( \frac{2\pi}{0.1} t \right) + 3 \sin \left( \frac{2\pi}{0.25} t \right)
\newline \newline
& = & \displaystyle 2 + 5 \cos \left( 5 \frac{2\pi}{0.5} t \right) + 3 \sin \left( 2 \frac{2\pi}{0.5} t \right)
\end{array}
$$


## consine terms coefficients
+ Use Eqns (13), (10), (11) on (23).

$$\tag{24}
\begin{array}{rcl}
a_m & = & \displaystyle \frac{1}{T}\int_0^T 2 \ \cos \left[ m \left( \frac{2\pi}{0.5} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 5 \cos \left( 5 \frac{2\pi}{0.5} t \right) \ \cos \left[ m \left( \frac{2\pi}{0.5} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 3 \sin \left( 2 \frac{2\pi}{0.5} t \right) \ \cos \left[ m \left( \frac{2\pi}{0.5} \right) t \right] \ dt
\newline \newline
& = & \displaystyle 0 + \frac{2}{T} \tfrac{1}{2} T 5 \delta_{10,m} + 0
\ \ = \ \ 5 \delta_{5,m}.
\end{array}
$$

$$\tag{24b}
\begin{array}{rl}
a_m = 0, & 0 < m < 5, \newline
a_{5} = 5, & \newline
a_m = 0, & 5 < m.
\end{array}
$$


## sine terms coefficients
+ Use Eqn (14), (9), (11) on (23).

$$\tag{25}
\begin{array}{rcl}
b_m & = & \displaystyle \frac{1}{T}\int_0^T 2 \ \sin \left[ m \left( \frac{2\pi}{0.5} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 5 \cos \left( 5 \frac{2\pi}{0.5} t \right) \ \sin \left[ m \left( \frac{2\pi}{0.5} \right) t \right] \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 3 \sin \left( 2 \frac{2\pi}{0.5} t \right) \ \sin \left[ m \left( \frac{2\pi}{0.5} \right) t \right] \ dt
\newline \newline
& = & \displaystyle 0 + 0 + \frac{2}{T} \tfrac{1}{2} T 3 \delta_{4,m}
\ \ = \ \ 3 \delta_{2,m}.
\end{array}
$$

$$\tag{25b}
\begin{array}{rl}
b_m = 0, & 0 < m < 2, \newline
b_{2} = 3, & \newline
b_m = 0, & 2 < m.
\end{array}
$$


## constant term
+ Use Eqn (15), (11b), (11c) on (23).

$$\tag{26}
\begin{array}{rcl}
c_0 & = & \displaystyle \frac{1}{T}\int_0^T 2 \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 5 \cos \left( 5 \frac{2\pi}{0.5} t \right) \ dt
\newline \newline
& + & \displaystyle \frac{2}{T}\int_0^T 3 \sin \left( 2 \frac{2\pi}{0.5} t \right) \ dt
\newline \newline
& = & \displaystyle 2 + 0 + 0 \ \ = \ \ 2.
\end{array}
$$

## function $f(t)$
$$\tag{12}
f(t) = \sum_{m=1}^\infty a_m \cos \left[ m \left( \frac{2\pi}{0.5} \right) t \right] + \sum_{m=1}^\infty b_m \sin \left[ m \left( \frac{2\pi}{0.5} \right) t \right] + c_0
$$

$$\tag{27}
\begin{array}{rcl}
f(t) & = & \displaystyle a_{5} \cos \left[ 5 \left( \frac{2\pi}{0.5} \right) t \right] +  b_2 \sin \left[ 2 \left( \frac{2\pi}{0.5} \right) t \right] + c_0
\newline \newline
& = & \displaystyle 5 \cos \left[ 5 \left( \frac{2\pi}{0.5} \right) t \right] + 3 \sin \left[ 2 \left( \frac{2\pi}{0.5} \right) t \right] + 2.
\end{array}
$$

&nbsp;

$$\tag{17}
f(t) = 2 + 5 \cos 20 \pi t + 3 \sin 8 \pi t.
$$




## refs
+ Michael Richmond, "Examples of Fsinier decomposition", Phys283 Vibrations and Waves, Rochester Institute of Technology, Spring 2024, url http://spiff.rit.edu/classes/phys283/lectures/fourier_2/fourier_2.html [20240310].
