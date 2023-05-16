# parabolic_gravitational_euler.py
# unit test of spring force module
# Sparisoma Viridi | https://github.com/dudung

# 20230516
#   1728 Rename from test_parabol_mot_grav_field_euler.py to
#        parabolic_gravitational_euler.py and move to motion folder.
# 20220919
#   1734 Start this unit test.
#   1821 Continue after unexpected shutdown, break fasting.
#   1827 Calculate force firts. Pause for ruqyah.
#   1902 Display result x-t.
#   1916 Finish labeling and ticks.

import math

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.spring import Spring

# define a pivot
p = Vect3(0, 0, 0)

# define spring force
m = 1
f = 2
k = 4 * math.pi**2 * m * f**2
l = 1
spring = Spring(length=l, constant=k, pivot=p)

# define grain with initial position and velocity
A = 0.5
grain = Grain(id="0011", m=1)
grain.r = Vect3(0 + l + A, 0, 0)
grain.v = Vect3(0, 0, 0)

import numpy as np

# define iteration
tbeg = 0
tend = 1
N = 1000
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

  fs = spring.force(grain)
  a = fs / m
  v += a * dt
  r += v * dt
  
  grain.v = v
  grain.r = r
  
print("Plot data.")
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt

figure(figsize=(5,3.5), dpi=80)

plt.plot(data_t, data_x, c='r')
plt.xlabel('t')
plt.ylabel('x')

plt.grid()
plt.xlim([0, 1])
plt.ylim([0.5, 1.5])
plt.xticks(np.arange(0, 1+0.01, 0.1))
plt.yticks(np.arange(0.4, 1.6+0.01, 0.2))

plt.text(0.29, 1.07, "$A = 0.5$, $x_0 = 0$, $l = 1$", fontsize=12)
plt.text(0.325, 0.87, "$m = 1$, $k = 157.9$", fontsize=12)
plt.text(0.35, 0.67, "$T = 0.5$, $f = 2$", fontsize=12)

print("Save figure.")
plt.savefig('harmonic_spring_euler.png', bbox_inches='tight')
