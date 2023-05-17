# lissajous_electric_euler.py
# unit test of electric force module
# Sparisoma Viridi | https://github.com/dudung

# 20230517
#   0459 Start this unit test.
#   0543 Not finish, error. Pause, Duschen, zu Uni.

import sys
# set configuration at the university, comment while at home
sys.path.insert(0, "D:\\butiran")

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.electric import Electric
import math

# define grain with initial position and velocity
grain = Grain(id="0102", m = 1, q = 1)
grain.r = Vect3(1, 0, 0)
grain.v = Vect3(0, 1, 0)

# define electric field and force
def efield(t):
  A1 = 1
  A2 = 1
  f1 = 1
  f2 = 2
  omega1 = 2 * math.pi * f1
  omega2 = 2 * math.pi * f2
  
  x = A1 * math.cos(omega1 * t)
  y = A2 * math.sin(omega2 * t)
  z = 0
  
  return Vect3(x, y, z)

electric = Electric()

import numpy as np

# define iteration
tbeg = 0
tend = 1
N = 100
dt = (tend - tbeg) / N

# define lists
data_t = []
data_x = []
data_y = []
data_vx = []
data_vy = []

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
#plt.xlim([0, 240])
#plt.ylim([0, 80])
#plt.xticks(np.arange(0, 240+0.01, 40))
#plt.yticks(np.arange(0, 80+0.01, 20))

#plt.text(60, 39, "$v_x = 30$, $v_y = 40$, $m = 1$", fontsize=12)
#plt.text(98, 30, "$g = -10$", fontsize=12)

print("Save figure.")
plt.savefig('lissajous_electric_euler.png', bbox_inches='tight')
