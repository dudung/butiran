+++
title = 'fourier series short intro'
date = 2024-03-09T19:43:00+07:00
draft = false
tags = ['fi6004']
math = true
url = '1977'
+++
Fourier series short intro: Proofs of some integral identities.
<!--more-->

+ [fourier_series_short_intro.pdf](https://osf.io/eupys)
  - Intro 3
  - Coefficients 7
  - Related trigonometric identities 15
  - Integral of sine and cosine 19
  - Proofs a ≠ b 22
  - Proofs a = b 26
  - Integral identities 30
  - Interval changes 32
  - Other forms 38
  - Closing 42


## int sin
$$\tag{21}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin mx \ dx & = & \displaystyle \left[ -\frac{1}{m} \cos mx \right]_{-\pi}^\pi
\newline \newline
& = & \displaystyle -\frac{1}{m} \left[ \cos m \pi - \cos m(-\pi) \right]
\newline \newline
& = & \displaystyle -\frac{1}{m} ( \cos m \pi - \cos m \pi )
\newline \newline
& = & 0.
\end{array}
$$


## int cos
$$\tag{22}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \cos mx \ dx & = & \displaystyle \left[ -\frac{1}{m} \sin mx \right]_{-\pi}^\pi
\newline \newline
& = & \displaystyle -\frac{1}{m} \left[ \sin m \pi - \sin m(-\pi) \right]
\newline \newline
& = & \displaystyle -\frac{1}{m} ( \sin m \pi + \sin m \pi )
\newline \newline
& = & \displaystyle -\frac{1}{m} ( 0 + 0 ) \ \ = \ \ 0.
\newline \newline
\end{array}
$$


## int sin &middot; sin, $a \ne b$
$$\tag{23a}
\begin{array}{rcl}
\sin ax \sin bx & = & \frac12 \cos (ax - bx) - \frac12 \cos (ax + bx)
\newline \newline
& = & \frac12 \cos (a - b)x - \frac12 \cos (a + b)x
\end{array}
$$

$$\tag{23b}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin ax \sin bx \ dx & = & \displaystyle \tfrac12 \int_{-\pi}^\pi \cos (a - b)x \ dx
\newline \newline
& & \displaystyle - \tfrac12 \int_{-\pi}^\pi \cos (a + b)x \ dx
\newline \newline
& = & \displaystyle \tfrac12 \int_{-\pi}^\pi \cos nx \ dx - \tfrac12 \int_{-\pi}^\pi \cos mx \ dx
\newline \newline
& = & 0 - 0 \ \ = \ \ 0.
\end{array}
$$


## int cos &middot; cos; sin, $a \ne b$
$$\tag{24a}
\begin{array}{rcl}
\cos ax \cos bx & = & \frac12 \cos (ax + bx) + \frac12 \cos (ax - bx)
\newline \newline
& = & \frac12 \cos (a + b)x + \frac12 \cos (a - b)x
\end{array}
$$

$$\tag{24b}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \cos ax \cos bx \ dx & = & \displaystyle \tfrac12 \int_{-\pi}^\pi \cos (a + b)x \ dx
\newline \newline
& & \displaystyle + \tfrac12 \int_{-\pi}^\pi \cos (a - b)x \ dx
\newline \newline
& = & \displaystyle \tfrac12 \int_{-\pi}^\pi \cos mx \ dx + \tfrac12 \int_{-\pi}^\pi \cos nx \ dx
\newline \newline
& = & 0 + 0 \ \ = \ \ 0.
\end{array}
$$


## int sin &middot; cos; sin, $a \ne b$
$$\tag{25a}
\begin{array}{rcl}
\sin ax \cos bx & = & \frac12 \sin (ax + bx) + \frac12 \sin (ax - bx)
\newline \newline
& = & \frac12 \sin (a + b)x + \frac12 \sin (a - b)x
\end{array}
$$

$$\tag{25b}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin ax \cos bx \ dx & = & \displaystyle \tfrac12 \int_{-\pi}^\pi \sin (a + b)x \ dx
\newline \newline
& & \displaystyle + \tfrac12 \int_{-\pi}^\pi \sin (a - b)x \ dx
\newline \newline
& = & \displaystyle \tfrac12 \int_{-\pi}^\pi \sin mx \ dx + \tfrac12 \int_{-\pi}^\pi \sin nx \ dx
\newline \newline
& = & 0 + 0 \ \ = \ \ 0.
\end{array}
$$


## int sin &middot; sin, $a = b$
$$\tag{26a}
\begin{array}{rcl}
\sin ax \sin ax & = & \frac12 \cos (ax - ax) - \frac12 \cos (ax + ax)
\newline \newline
& = & \frac12 - \frac12 \cos 2ax
\end{array}
$$

$$\tag{26b}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin ax \sin ax \ dx & = & \displaystyle \tfrac12 \int_{-\pi}^\pi dx - \tfrac12 \int_{-\pi}^\pi \cos 2ax \ dx
\newline \newline
& = & \displaystyle \tfrac12 \int_{-\pi}^\pi dx - \tfrac12 \int_{-\pi}^\pi \cos mx \ dx
\newline \newline
& = & \pi - 0 \ \ = \ \ \pi.
\end{array}
$$


## int cos &middot; cos; sin, $a = b$
$$\tag{27a}
\begin{array}{rcl}
\cos ax \cos ax & = & \frac12 \cos (ax + ax) + \frac12 \cos (ax - ax)
\newline \newline
& = & \frac12 \cos 2ax + \frac12
\end{array}
$$

$$\tag{27b}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \cos ax \cos bx \ dx & = & \displaystyle \tfrac12 \int_{-\pi}^\pi \cos 2ax \ dx + \tfrac12 \int_{-\pi}^\pi dx
\newline \newline
& = & \displaystyle \tfrac12 \int_{-\pi}^\pi \cos mx \ dx + \tfrac12 \int_{-\pi}^\pi dx
\newline \newline
& = & 0 + \pi \ \ = \ \ \pi.
\end{array}
$$


## int sin &middot; cos; sin, $a = b$
$$\tag{28a}
\begin{array}{rcl}
\sin ax \cos ax & = & \frac12 \sin (ax + ax) + \frac12 \sin (ax - ax)
\newline \newline
& = & \frac12 \sin 2ax + 0
\end{array}
$$

$$\tag{28b}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin ax \cos bx \ dx & = & \displaystyle \tfrac12 \int_{-\pi}^\pi \sin 2ax \ dx
\newline \newline
& = & \displaystyle \tfrac12 \int_{-\pi}^\pi \sin mx \ dx
\newline \newline
& = & 0.
\end{array}
$$


## int sin &middot; sin, cos &middot; cos,  sin &middot; cos
$$\tag{29}
\int_{-\pi}^\pi \sin ax \sin bx \ dx = \left\\{
\begin{array}{rcl}
0, & a \ne b \newline
\pi, & a = b.
\end{array}
\right.
$$

&nbsp;

$$\tag{30}
\int_{-\pi}^\pi \cos ax \cos bx \ dx = \left\\{
\begin{array}{rcl}
0, & a \ne b \newline
\pi, & a = b.
\end{array}
\right.
$$

&nbsp;

$$\tag{31}
\int_{-\pi}^\pi \cos ax \sin bx \ dx = 0.
$$


## interval changes
$$\tag{32}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin mx \ dx & = & \displaystyle \int_{-\tfrac12 \lambda}^{\tfrac12 \lambda} \sin \left( m\frac{2\pi}{\lambda} x \right) \ dx
\newline \newline
\displaystyle -\left[ \frac{1}{m} \cos mx \right]^\pi_{-\pi}  & = & \displaystyle  -\left[ \frac{\lambda}{m2\pi} \cos \left( m \frac{2\pi}{\lambda} x \right) \right]_{-\tfrac12 \lambda}^{\tfrac12 \lambda}
\newline \newline
\displaystyle \frac{1}{m} [ \cos m \pi - \cos m(-\pi) ] & = & \displaystyle \frac{\lambda}{m2\pi} \left[ \cos \left( m \frac{2\pi}{\lambda} \right) (\tfrac12 \lambda) - \cos \left( m \frac{2\pi}{\lambda} \right) (-\tfrac12 \lambda) \right]
\newline \newline
& = & \displaystyle \frac{\lambda}{m2\pi} [ \cos m\pi - \cos m(-\pi) ]
\newline \newline
\displaystyle \frac{1}{m} (\cos m\pi - \cos m\pi) & = & \displaystyle \frac{\lambda}{m2\pi} (\cos m\pi - \cos m\pi)
\newline \newline
0 & = & 0.
\end{array}
$$

&nbsp;

$$\tag{33}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin mt \ dt & = & \displaystyle \int_{-\tfrac12 T}^{\tfrac12 T} \sin \left( m\frac{2\pi}{T} t \right) \ dt
\newline \newline
\displaystyle -\left[ \frac{1}{m} \cos mt \right]^\pi_{-\pi}  & = & \displaystyle -\left[ \frac{T}{m2\pi} \cos \left( m \frac{2\pi}{T} t \right) \right]_{-\tfrac12 T}^{\tfrac12 T}
\newline \newline
\displaystyle \frac{1}{m} [ \cos m \pi - \cos m(-\pi) ] & = & \displaystyle \frac{T}{m2\pi} \left[ \cos \left( m \frac{2\pi}{T} \right) (\tfrac12 T) - \cos \left( m \frac{2\pi}{T} \right) (-\tfrac12 T) \right]
\newline \newline
& = & \displaystyle \frac{\lambda}{m2\pi} [ \cos m\pi - \cos m(-\pi) ]
\newline \newline
\displaystyle \frac{1}{m} (\cos m\pi - \cos m\pi) & = & \displaystyle \frac{\lambda}{m2\pi} (\cos m\pi - \cos m\pi)
\newline \newline
0 & = & 0.
\end{array}
$$


## period
$$\tag{34}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin mx \ dx & = & \displaystyle \int_{-\tfrac12 \lambda}^{\tfrac12 \lambda} \sin \left( m\frac{2\pi}{\lambda} x \right) \ dx
\newline \newline
& = & \displaystyle \int_0^{\lambda} \sin \left( m\frac{2\pi}{\lambda} x \right) \ dx
\newline \newline
& = & \displaystyle \int_0^{\lambda} \sin ( m k x ) \ dx \ \ = \ \  \int_0^{\lambda} \sin ( k_m x ) \ dx
\end{array}
$$

&nbsp;

$$\tag{35}
\begin{array}{rcl}
\displaystyle \int_{-\pi}^\pi \sin mt \ dt & = & \displaystyle \int_{-\tfrac12 T}^{\tfrac12 T} \sin \left( m\frac{2\pi}{T} t \right) \ dt
\newline \newline
& = & \displaystyle \int_0^T \sin \left( m\frac{2\pi}{T} t \right) \ dt
\newline \newline
& = & \displaystyle \int_0^T \sin ( m \omega t ) \ dt \ \ = \ \ \int_0^T \sin ( \omega_m t) \ dt
\end{array}
$$


## wavenumber and angular requency
$$\tag{36}
k_m = m k_1, \ \ \ \ m = 1, 2, 3, ..
$$
$$
\lambda_m = \frac{2\pi}{k_m}
$$

&nbsp;

$$\tag{37}
\omega_m = m \omega_1,  \ \ \ \ m = 1, 2, 3, ..
$$
$$
T_m = \frac{2\pi}{\omega_m}
$$


## other forms
$$\tag{38}
f(x) = \sum_{m=1}^\infty a_m \cos \left[ m \left( \frac{2\pi}{L} \right) x \right] + \sum_{m=1}^\infty b_m \sin \left[ m \left( \frac{2\pi}{L} \right) x \right] + c_0
$$

$$\tag{39}
a_m = \frac{2}{L}\int_0^L f(x) \ \cos \left[ m \left( \frac{2\pi}{L} \right) x \right] \ dx
$$

$$\tag{40}
b_m = \frac{2}{L}\int_0^L f(x) \ \cos \left[ m \left( \frac{2\pi}{L} \right) x \right] \ dx
$$

$$\tag{41}
c_0 = \frac{1}{L} \int_0^L f(x) \ dx.
$$


$$\tag{42}
f(t) = \sum_{m=1}^\infty a_m \cos \left[ m \left( \frac{2\pi}{L} \right) t \right] + \sum_{m=1}^\infty b_m \sin \left[ m \left( \frac{2\pi}{L} \right) t \right] + c_0
$$

$$\tag{43}
a_m = \frac{2}{T}\int_0^T f(t) \ \cos \left[ m \left( \frac{2\pi}{L} \right) t \right] \ dt
$$

$$\tag{44}
b_m = \frac{2}{T}\int_0^T f(t) \ \cos \left[ m \left( \frac{2\pi}{L} \right) t \right] \ dt
$$

$$\tag{45}
c_0 = \frac{1}{T} \int_0^T f(t) \ dt.
$$

&nbsp;

$$\tag{46}
k_m = m \frac{2\pi}{L}, \ \ \ \ m = 1, 2, 3, ..
$$

$$\tag{47}
\omega_m = m \frac{2\pi}{T}, \ \ \ \ m = 1, 2, 3, ..
$$

