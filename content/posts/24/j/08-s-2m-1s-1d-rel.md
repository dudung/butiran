+++
title = 's-2m-1s 1-d rel'
date = 2024-10-07T08:04:00+07:00
draft = false
math = true
tags = ['spring-mass']
authors = ['viridi']
url = '24j08'
+++
A working note for system of two masses and one spring<!--more-->

$$\tag{1}
m_1 \frac{d^2 x_1}{dt^2} = -k(x_1 - x_2) - k l_0
$$

and

$$\tag{2}
m_2 \frac{d^2 x_2}{dt^2} =  -k(x_2 - x_1) + k l_0,
$$

where $x_3 > x_2 > x_1$.

Multiply Eqn (1) with $m_2$ and Eqn (2) with $m_1$ will turn previous equations into

$$\tag{3}
m_2 m_1 \frac{d^2 x_1}{dt^2} = -k m_2 (x_1 - x_2) - k m_2 l_0
$$

and

$$\tag{4}
m_1 m_2 \frac{d^2 x_2}{dt^2} = -k m_1 (x_2 - x_1) + k m_1 l_0.
$$

Substract Eqn (4) with Eqn (3) will produce

$$\tag{5}
\begin{array}{rcl}
\displaystyle m_2 m_1 \frac{d^2}{dt^2} (x_2 - x_1) & = & -k (m_1 + m_2) (x_2 - x_1) + k (m_1 + m_2) l_0 \newline \newline
\displaystyle \left( \frac{m_2 m_1}{m_1 + m_2} \right) \frac{d^2}{dt^2} (x_2 - x_1) & = & -k (x_2 - x_1) + k l_0 \newline \newline
\displaystyle \mu \frac{d^2 x_{21}}{dt^2} & = & k x_{21} + k l_0 \newline \newline
\displaystyle \mu \frac{d^2 (x_{21} + l_0)}{dt^2} & = & -k(x_{21} - l_0) \newline \newline
\displaystyle \frac{d^2 (x_{21} - l_0)}{dt^2} & = & \displaystyle -\left( \frac{k}{\mu} \right) (x_{21} - l_0) \newline \newline
\displaystyle \frac{d^2 y}{dt^2} & = & \displaystyle -\omega^2 y.
\end{array}
$$

Solution of previous final equation is

$$
\begin{array}{rcl}\tag{6}
y & = & A \sin (\omega t + \phi) \newline \newline
x_{21} - l_0 & = &  A \sin (\omega t + \phi) \newline \newline
x_{21} & = &  l_0 + A \sin (\omega t + \phi),
\end{array}
$$

with

$$\tag{7}
\omega = \sqrt{\frac{k}{\mu}}
$$

and

$$\tag{8}
\mu = \frac{m_1 m_2}{m_1 + m_2},
$$

which is known as effective mass [^alexiou_2016].


[^alexiou_2016]: John Alexiou, "Two mass one-spring system natural frequency", Physics Stack Exchange, 6 May 2016, url https://physics.stackexchange.com/q/254458 [20241008].