+++
title = 'kinematics, integrate v to x'
date = '2025-02-17T05:02:33+07:00'
draft = false
type = 'slides'
authors = ['viridi']
tags = ['kinematics']
math = true
url = '25b32'
+++

+ Integrate velocity $v$ to obtain position $x$
$$\tag{F1}
x(t) - x(t_0) = \int_{t_0}^t  \left[ v_0 + \int_{t_0}^{\tau_2} a(\tau_1) d\tau_1 \right] d\tau_2.
$$
+ Initial condition $x(t_0) = x_0$, will give
$$\tag{F2}
x(t) = x_0 + v_0 (t - t_0) +  \int_{t_0}^t \int_{t_0}^{\tau_2} a(\tau_1) d\tau_1 d\tau_2.
$$
