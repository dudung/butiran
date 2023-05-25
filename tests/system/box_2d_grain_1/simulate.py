# simulate.py
# unit test for a simple system
# Sparisoma Viridi | https://github.com/dudung

# 20230525
#   2037 Start this test.
#   2101 Pass the basic test, moving in xz plane.
#   2117 Write result to CSV file.
#   2137 Rename from box_2d_grain_1.py to simulate.py.
#   2313 Document plot results using Gnuplot in README.md file.

import sys
sys.path.insert(0, "L:\\butiran")

from butiran.math.vect3 import Vect3
from butiran.entity.color2 import Color2
from butiran.entity.grain import Grain
from butiran.entity.rectangle import Rectangle
from butiran.force.normal import Normal
from butiran.force.normal2 import Normal2

import math
import numpy as np

# define normal force between grain and rectangle
k = 1000; d = 0
normal = Normal(constant=k, damping=d)

# define normal force between two grains
k = 1000; d = 0
normal2 = Normal2(constant=k, damping=d)

# define bottom side
sideB = Rectangle(
  p0=Vect3(0, 0, 0),
  p1=Vect3(1, 0, 0),
  p2=Vect3(0, 1, 0),
  p3=Vect3(1, 1, 0),
)

# define top side
sideT = Rectangle(
  p0=Vect3(0, 0, 1),
  p1=Vect3(0, 1, 1),
  p2=Vect3(1, 0, 1),
  p3=Vect3(1, 1, 1),
)

# define right side
sideR = Rectangle(
  p0=Vect3(1, 0, 0),
  p1=Vect3(1, 0, 1),
  p2=Vect3(1, 1, 0),
  p3=Vect3(1, 1, 1),
)

# define left side
sideL = Rectangle(
  p0=Vect3(0, 0, 0),
  p1=Vect3(0, 1, 0),
  p2=Vect3(0, 0, 1),
  p3=Vect3(0, 1, 1),
)

# define a grain
m = 0.01; R = 0.01
grain = Grain(id="0000", m=m, d=2*R)
grain.r = Vect3(0.5, 0.5, 0.5)
grain.v = Vect3(1, 0, 0.4)

# define iteration
tbeg = 0
tend = 20
N = 20000
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

  fn1 = normal.force(grain, sideB)
  fn2 = normal.force(grain, sideT)
  fn3 = normal.force(grain, sideL)
  fn4 = normal.force(grain, sideR)
  
  fn = fn1 + fn2 + fn3 + fn4
  
  a = fn / m
  v += a * dt
  r += v * dt
  
  grain.v = v; grain.r = r

fname = "data.tsv"
print("Write position and velocity.")
f = open(fname, "w")
line = "# x\ty\tz\tvx\tvy\tvz\n"
line += "\n"
f.write(line)

for i in range(N + 1):
  line = f"# t={t[i]:.3f}\n"
  line += f"{x[i]:.3f}\t"
  line += f"{y[i]:.3f}\t"
  line += f"{z[i]:.3f}\t"
  line += f"{vx[i]:.3f}\t"
  line += f"{vy[i]:.3f}\t"
  line += f"{vz[i]:.3f}\n"
  line += "\n"
  f.write(line)
f.close()

print(fname, "is created.")


"""
$ python simulate.py
Calculate position and velocity.
Write position and velocity.
data.tsv is created.
"""
