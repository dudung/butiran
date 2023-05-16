# transient_gravitational_euler.py
# unit test of drag force module
# Sparisoma Viridi | https://github.com/dudung

# 20230516
#   2027 Start this test.

from butiran.color2 import Color2
from butiran.math.vect3 import Vect3
from butiran.grain import Grain
from butiran.force.drag import Drag

# define grain with initial position and velocity
grain = Grain(id="1001", m = 1)
grain.r = Vect3(0, 0, 0)
grain.v = Vect3(-8, 0, 0)

# define velocity field and force
vf = Vect3(8, 0, 0)
drag = Drag(coeff=1, field=vf)

import numpy as np

# define iteration
tbeg = 0
tend = 10
N = 100
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
  t = i * dt
  
  m = grain.m
  v = grain.v
  r = grain.r
  
  data_t.append(t)
  data_x.append(r.x)
  data_y.append(r.y)
  data_vx.append(v.x)
  data_vy.append(v.y)

  fd = drag.force(grain)
  a = fd/ m
  v += a * dt
  r += v * dt
  
  grain.v = v
  grain.r = r
  
print("Plot data.")
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt

figure(figsize=(5,3.5), dpi=80)

plt.plot(data_t, data_vx, c='r')
plt.xlabel('$t$')
plt.ylabel('$v_x$')

plt.grid()
plt.xlim([-0.2, 10.2])
plt.ylim([-8.5, 8.5])
plt.xticks(np.arange(0, 10+0.01, 1))
plt.yticks(np.arange(-8, 8+0.01, 2))

plt.text(3, 0.8, "$v_0 = -8$, $v_f = 8$, $b = 1$", fontsize=12)

print("Save figure.")
plt.savefig('transient_drag_euler.png', bbox_inches='tight')
