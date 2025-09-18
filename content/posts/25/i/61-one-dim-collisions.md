+++
title = 'one-dim collisions'
date = '2025-09-18T13:18:57+07:00'
authors = ['viridi']
draft = false
type = 'notes'
tags = []
categories = []
url = '25i61'
math = true
+++

<!-- more -->

There are two schemes for collsion, which are hard-sphere and soft-sphere.


## hard-sphere scheme
In collision with coefficient of restitution $e$

$$ \tag{1}
v_{1f} = \frac{ m_1 v_{1i} + m_2 v_{2i} + m_2 \ e (v_{2i} - v_{1i}) }{ m_1 + m_2 }
$$

gives final velocity of mass $m_1$ and

$$ \tag{2}
v_{2f} = \frac{ m_1 v_{1i} + m_2 v_{2i} + m_1 \ e (v_{1i} - v_{2i}) }{ m_1 + m_2 }
$$

gives final velocity of mass $m_2$.

Colission happens when condition

$$ \tag{3}
| x_1 - x_2 | < R_1 + R_2
$$

meets.

Without collision

$$ \tag{4}
x_1(t + \Delta t) = x_1(t) + v_1(t) \Delta t
$$

gives position of mass $m_1$ and

$$ \tag{5}
x_2(t + \Delta t) = x_2(t) + v_2(t) \Delta t
$$

Before collsion happens

$$ \tag{6}
v_{1i} = v_1(t)
$$

and

$$ \tag{7} 
v_{2i} = v_2(t),
$$

then after collsion with time interval $\Delta t$

$$ \tag{8}
v_1(t + \Delta t) = v_{1f} 
$$

and

$$ \tag{9} 
v_2(t + \Delta t) = v_{2f}, 
$$

where final velocities are obtained using Eqns (1) and (2).


## soft-sphere scheme
Overlap between two sphereical mass $m_1$ and mass $m_2$ is given by

$$ \tag{10}
\xi_{12} = \max(0, R_1 + R_2 - |x_1 - x_2|)
$$

where each has raidius of $R_1$ and $R_2$ and

$$ \tag{11}
\dot{\xi}_{12} =  -|v_1 - v_2| \ {\rm sign} (\xi _{12})
$$

is its derivative.

Reduce mass of the system is

$$ \tag{12}
\mu = \frac{m_1 m_2}{m_1 + m_2}. 
$$

Linear spring-dashpot mode gives

$$\tag{13}
F_{12} = \left( k \xi_ {12} - \gamma \dot\xi_{12} \right) \frac{(x_1 - x_2)}{|x_1 - x_2|}.
$$

The 3rd Newton's law gives

$$\tag{14}
F_{21} = - F_{12}.
$$

The 2nd Newton's law allows

$$ \tag{15}
a_1 = \frac{1}{\mu} F_{12}
$$

and

$$ \tag{16}
a_2 = \frac{1}{\mu} F_{21}.
$$

Using Euler algorithm

$$ \tag{17}
v_1(t + \Delta t) = v_1(t) + a_1 \Delta t
$$

and

$$ \tag{18}
v_2(t + \Delta t) = v_2(t) + a_2 \Delta t.
$$

Then also

$$ \tag{19}
x_1(t + \Delta t) = x_1(t) + v_1(T) \Delta t
$$

and

$$ \tag{20}
x_2(t + \Delta t) = x_2(t) + v_2(t) \Delta t.
$$

