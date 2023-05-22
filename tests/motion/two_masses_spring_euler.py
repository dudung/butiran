# two_masses_spring_euler.py
# unit test of spring2 force module
# Sparisoma Viridi | https://github.com/dudung

# 20230522
#   2054 Start this test.
#   2122 Pass the test.

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.spring2 import Spring2
import math


# define spring force
m1 = 1
m2 = 2
meff = m1 * m2 / (m1 + m2)
f = 2
k = 4 * math.pi**2 * meff * f**2
l = 1
d = 0.5
spring = Spring2(length=l, constant=k, damping=d)

# define grain with initial position and velocity
grain1 = Grain(id="0000", m=m1)
grain1.r = Vect3(0 - 0.7 * l, 0, 0)
grain1.v = Vect3(0, 0.1, 0)

grain2 = Grain(id="0001", m=m2)
grain2.r = Vect3(0 + 0.7 * l, 0, 0)
grain2.v = Vect3(0, 0.1, 0)

import numpy as np

# define iteration
tbeg = 0
tend = 5
N = 5000
dt = (tend - tbeg) / N

# define lists
data_t = []

t0 = []
x1 = []
y1 = []
x2 = []
y2 = []


# perform iteration
print("Calculate position and velocity.")
for i in range(N + 1):
  t = i * dt
  
  m1 = grain1.m; v1 = grain1.v; r1 = grain1.r
  m2 = grain2.m; v2 = grain2.v; r2 = grain2.r
  
  t0.append(t)
  x1.append(r1.x)
  y1.append(r1.y)
  x2.append(r2.x)
  y2.append(r2.y)

  fs12 = spring.force(grain1, grain2)
  fs21 = spring.force(grain2, grain1)

  a1 = fs12 / m1; v1 += a1 * dt; r1 += v1 * dt
  a2 = fs21 / m2; v2 += a2 * dt; r2 += v2 * dt
   
  grain1.v = v1; grain1.r = r1
  grain2.v = v2; grain2.r = r2
  
print("Plot data.")
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt

figure(figsize=(5,3.5), dpi=80)

plt.plot(x1, y1, c='r')
plt.plot(x2, y2, c='b')
plt.xlabel('x')
plt.ylabel('y')

plt.grid()
#plt.xlim([0, 1])
#plt.ylim([0.5, 1.5])
#plt.xticks(np.arange(0, 1+0.01, 0.1))
#plt.yticks(np.arange(0.4, 1.6+0.01, 0.2))

#plt.text(0.29, 1.07, "$A = 0.5$, $x_0 = 0$, $l = 1$", fontsize=12)
#plt.text(0.325, 0.87, "$m = 1$, $k = 157.9$", fontsize=12)
#plt.text(0.35, 0.67, "$T = 0.5$, $f = 2$", fontsize=12)

print("Save figure.")
plt.savefig('two_masses_spring_euler.png', bbox_inches='tight')

