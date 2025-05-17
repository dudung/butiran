+++
title = 'kinematics equations, assumptions'
date = '2025-02-17T03:23:56+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['kinematics']
math = true
url = '25b30'
[ref]
author = 'hft'
title = 'Why do kinematic equations only work with constant acceleration?'
source = 'Physics Stack Exchange'
created = '20 May 2022'
updated = '-'
url = 'https://physics.stackexchange.com/q/709769'
accessed = '20250217'
+++

+ Integrate acceleration $a$ twice to obtain velocity $v$ and position $x$
$$\tag{D1}
v(t) - v(t_0) = \int_{t_0}^t a(\tau) d\tau,
$$
$$\tag{D2}
x(t) - x(t_0) = \int_{t_0}^t v(\tau) d\tau.
$$
+ Initial conditions are $v(t_0) = v_0$, $x(t_0) = x_0$, and $t_0 = 0$.