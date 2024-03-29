# circular_magnetic_euler.py
# unit test of magnetic force module
# Sparisoma Viridi | https://github.com/dudung

# 20230516
#   1727 Rename from test_circ_mot_mag_field_euler.py to
#        circular_magnetic_euler.py and move to motion folder.
# 20220918
#   0839 Start simulate motion of paticle with Euler algorithm.
#   1105 Finish this example.

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.magnetic import Magnetic

# define grain with initial position and velocity
grain = Grain(id="0001", m = 1, q = 1)
grain.r = Vect3(1, 0, 0)
grain.v = Vect3(0, 1, 0)

# define magnetic field and force
B = Vect3(0, 0, -1)
magnetic = Magnetic(field=B)

import numpy as np

# define iteration
tbeg = 0
tend = 2 * np.pi
N = 10000
dt = (tend - tbeg) / N

# define lists
data_t = []
data_x = []
data_y = []
data_vx = []
data_vy = []

# perform iteration
#print("#t x y vx vy")
print("Calculate position and velocity.")
for i in range(N + 1):
  t = i
  
  m = grain.m
  v = grain.v
  r = grain.r
  
  data_t.append(t)
  data_x.append(r.x)
  data_y.append(r.y)
  data_vx.append(v.x)
  data_vy.append(v.y)

  fB = magnetic.force(grain)
  a = fB / m
  v += a * dt
  r += v * dt
  
  grain.v = v
  grain.r = r
  
  #print(t, ' ', end='')
  #print(r.x, ' ', r.y, ' ', end='')
  #print(v.x, ' ', v.y)
  
print("Plot data.")
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt

figure(figsize=(5,5), dpi=80)

plt.plot(data_x, data_y, c='r')
plt.xlabel('x')
plt.ylabel('y')

plt.grid()
plt.xlim([-1.5, 1.5])
plt.ylim([-1.5, 1.5])
plt.xticks(np.arange(-1.5, 1.5+0.01, 0.5))
plt.yticks(np.arange(-1.5, 1.5+0.01, 0.5))

plt.text(-0.5, 0.2, "$B = 1, m = 1, q = 1$", fontsize=12)
plt.text(-0.4, -0.05, "$\Delta t = 2 \pi \ / \ 10^4$", fontsize=12)
plt.text(-0.3, -0.3, "$T \in [0, 2\pi]$", fontsize=12)

print("Save figure.")
plt.savefig('circular_magnetic_euler.png', bbox_inches='tight')