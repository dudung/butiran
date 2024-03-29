# lissajous_electric_euler.py
# unit test of electric force module
# Sparisoma Viridi | https://github.com/dudung

# 20230517
#   0459 Start this unit test.
#   0543 Not finish, error. Pause, Duschen, zu Uni.
#   0831 Pause, result for (ax, ay) ok,but not for
#        (vx, vy) and (x, y). Logical error unknown.

import sys
# set configuration at the university, comment while at home
sys.path.insert(0, "D:\\butiran")

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.electric import Electric
import math

# define grain with initial position and velocity
A1 = 1
A2 = 1
f1 = 1
f2 = 2
omega1 = 2 * math.pi * f1
omega2 = 2 * math.pi * f2

vx = 0
vy = 0.025 * math.pi # unclear why this value

grain = Grain(id="0102", m=1, q=1)
grain.r = Vect3(0, 0, 0)
grain.v = Vect3(vx, vy, 0)

# define electric field and force
def efield(t):
  phi = 0.5 * math.pi
  xx = A1 * math.cos(omega1 * t)
  yy = A2 * math.cos(omega2 * t + phi)
  zz = 0
  
  return Vect3(xx, yy, zz)

electric = Electric()

import numpy as np

# define iteration
tbeg = 0
tend = 2
N = 10000
dt = (tend - tbeg) / N

# define lists
data_t = []
data_x = []
data_y = []
data_vx = []
data_vy = []
data_ax = []
data_ay = []

# perform iteration
print("Calculate position and velocity.")
for i in range(N + 1):
  t = i * dt
  
  m = grain.m
  v = grain.v
  r = grain.r
  
  data_t.append(t)
  data_x.append(r.x)
  data_y.append(r.y)
  data_vx.append(v.x)
  data_vy.append(v.y)
  
  electric.field = efield(t)
  fe = electric.force(grain)
  a = fe / m
  v += a * dt
  r += v * dt
  
  data_ax.append(a.x)
  data_ay.append(a.y)
  
  grain.v = v
  grain.r = r
  
print("Plot data.")
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt

figure(figsize=(3.5, 3.5), dpi=80)

plt.plot(data_x, data_y, c='r')
plt.xlabel('x')
plt.ylabel('y')

plt.grid()

plt.text(0.002, 0, "$A_x = A_y = 1$,      $f_x = 2$, $f_y = 2$", fontsize=12)
plt.text(0.005, -0.002, "$v_x(0) = 0$,        $v_y(0) = \pi/40$", fontsize=12)

print("Save figure.")
plt.savefig('lissajous_electric_euler.png', bbox_inches='tight')

print("Warning: Initial velocity must be carefully considered.")

