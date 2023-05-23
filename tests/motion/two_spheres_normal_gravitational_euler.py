# two_spheres_normal_gravitational_euler.py
# unit test of normal2 and gravitational2 modules
# Sparisoma Viridi | https://github.com/dudung

# 20230523
#   0907 Start this test.

import sys
# set configuration at the university, comment while at home
sys.path.insert(0, "D:\\butiran")

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.normal2 import Normal2
from butiran.force.gravitational2 import Gravitational2
import math

# define normal force
m1 = 2; R1 = 1
m2 = 2; R2 = 1
k = 1000; d = 0
G = 50
normal = Normal2(constant=k, damping=d)
gravitational = Gravitational2(constant=G)

# define grain with initial position and velocity
grain1 = Grain(id="0000", m=m1, d=2*R1)
grain1.r = Vect3(-3, -3, 0)
grain1.v = Vect3(0.5, -0.5, 0)

grain2 = Grain(id="0001", m=m2, d=2*R2)
grain2.r = Vect3(3, 3, 0)
grain2.v = Vect3(-0.5, 0.5, 0)

import numpy as np

# define iteration
tbeg = 0
tend = 40
N = 100000
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

  fn12 = normal.force(grain1, grain2)
  fn21 = normal.force(grain2, grain1)
  fg12 = gravitational.force(grain1, grain2)
  fg21 = gravitational.force(grain2, grain1)
  
  #print(fn12.x)

  f12 = fn12 + fg12
  a1 = f12 / m1
  v1 += a1 * dt
  r1 += v1 * dt
  
  f21 = fn21 + fg21
  a2 = f21 / m2
  v2 += a2 * dt
  r2 += v2 * dt
   
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

#plt.text(1.5, -2.5, "$m_1 = 2$, $v_1 = 1$, $R_1 = 1$", fontsize=12)
#plt.text(0.75, 3, "$m_2 = 1$, $v_1 = -1$, $R_2 = 1$", fontsize=12)

print("Save figure.")
plt.savefig('two_spheres_normal_gravitational_euler.png', bbox_inches='tight')

