# sphere_rectangle_normal_euler.py
# unit test of normal force module
# Sparisoma Viridi | https://github.com/dudung

# 20230525
#   0511 Start this test, derive from triangle test.
#   0517 Passt the test, but it is technically
#        still an infinite plain surface.

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2
from butiran.entity.grain import Grain
from butiran.entity.rectangle import Rectangle
from butiran.force.normal import Normal

import math
import numpy as np

# define normal force
k = 1000; d = 0
normal = Normal(constant=k, damping=d)

# define triangle
rectangle = Rectangle(
  m=10,
  p0=Vect3(0, 0, 0),
  p1=Vect3(2, 0, 0),
  p2=Vect3(0, 2, 0),
  p3=Vect3(2, 2, 0),
  color=Color2('#0f0', '#ff0')
)

# define grain with initial position and velocity
m = 2; R = 1
grain = Grain(id="0000", m=m, d=2*R)
grain.r = Vect3(0.5, 0, 2)
grain.v = Vect3(0, 1, -1)

# define iteration
tbeg = 0
tend = 2
N = 2000
dt = (tend - tbeg) / N

# define lists
t = []
x = []
y = []
z = []
vx = []
vy = []
vz = []


# perform iteration
print("Calculate position and velocity.")
for i in range(N + 1):
  it = i * dt
  
  m = grain.m;
  v = grain.v;
  r = grain.r
  
  t.append(it)
  x.append(r.x)
  y.append(r.y)
  z.append(r.z)
  vx.append(v.x)
  vy.append(v.y)
  vz.append(v.z)

  fn = normal.force(grain, rectangle)
  
  a = fn / m
  v += a * dt
  r += v * dt
  
  grain.v = v; grain.r = r
  
print("Plot data.")
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt

figure(figsize=(5,3.5), dpi=80)

plt.plot(t, vz, c='r')
plt.xlabel('$t$')
plt.ylabel('$v_z$')

plt.grid()

print("Save figure.")
plt.savefig('sphere_rectangle_normal_euler.png', bbox_inches='tight')
